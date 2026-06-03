const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CACHE_FILE = 'elog.cache.json';
const YUQUE_CACHE = 'elog.yuque.cache.json';
const FEISHU_CACHE = 'elog.feishu.cache.json';
const FEISHU_OUTPUT = 'src/feishu';
const MAX_ROUNDS = Number(process.env.FEISHU_SYNC_MAX_ROUNDS || 8);
const COOLDOWN_MS = Number(process.env.FEISHU_SYNC_COOLDOWN_MS || 70000);
const EXPECTED_DOC_COUNT = Number(process.env.FEISHU_EXPECTED_DOC_COUNT || 0);

const rootDir = path.join(__dirname, '..');

function fileExists(file) {
  try {
    return fs.existsSync(path.join(rootDir, file));
  } catch {
    return false;
  }
}

function renameFile(oldName, newName) {
  try {
    if (fileExists(oldName)) {
      fs.renameSync(path.join(rootDir, oldName), path.join(rootDir, newName));
    }
  } catch (e) {
    console.error(`重命名失败 ${oldName} -> ${newName}:`, e.message);
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function countMdFiles(dirPath) {
  const absPath = path.join(rootDir, dirPath);
  if (!fs.existsSync(absPath)) return 0;
  let count = 0;

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(entryPath);
      else if (entry.name.endsWith('.md')) count++;
    }
  }

  walk(absPath);
  return count;
}

function removeEmptyContainers(dirPath) {
  const absPath = path.join(rootDir, dirPath);
  if (!fs.existsSync(absPath)) return 0;

  let removed = 0;

  function cleanup(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        cleanup(fullPath);
        try {
          if (fs.readdirSync(fullPath).length === 0) {
            fs.rmdirSync(fullPath);
          }
        } catch {}
      } else if (entry.name.endsWith('.md') && entry.name !== 'README.md') {
        const content = fs.readFileSync(fullPath, 'utf-8');
        const body = content.replace(/^---[\s\S]*?---/m, '').trim();
        if (!body) {
          fs.unlinkSync(fullPath);
          removed++;
          console.log(`移除空容器: ${path.relative(absPath, fullPath)}`);
        }
      }
    }
  }

  cleanup(absPath);
  return removed;
}

function getCacheDocCount() {
  if (!fileExists(CACHE_FILE)) return 0;
  try {
    const cache = JSON.parse(fs.readFileSync(path.join(rootDir, CACHE_FILE), 'utf-8'));
    return (cache.docs || []).length;
  } catch {
    return 0;
  }
}

function reachedExpectedCount(cachedCount, fileCount) {
  return EXPECTED_DOC_COUNT > 0 && (cachedCount >= EXPECTED_DOC_COUNT || fileCount >= EXPECTED_DOC_COUNT);
}

/** 递归扫描目录，将文件名中的半角 % 替换为全角 ％ */
function sanitizeFilenames(dirPath) {
  const absPath = path.join(rootDir, dirPath);
  if (!fs.existsSync(absPath)) return 0;

  let count = 0;

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name.includes('%')) {
        const newName = entry.name.replace(/%/g, '\uFF05'); // 全角 ％
        const newPath = path.join(dir, newName);
        try {
          fs.renameSync(fullPath, newPath);
          count++;
          console.log(`  安全化: ${entry.name} → ${newName}`);
        } catch (e) {
          console.error(`  安全化失败: ${entry.name}`, e.message);
        }
      }
    }
  }

  walk(absPath);
  return count;
}

async function main() {
  console.log('=== 开始同步飞书文档（支持断点续传）===');

  if (fileExists(CACHE_FILE)) {
    renameFile(CACHE_FILE, YUQUE_CACHE);
  }

  renameFile(FEISHU_CACHE, CACHE_FILE);

  const pnpmCmd = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';
  let previousFiles = countMdFiles(FEISHU_OUTPUT);
  let done = false;

  for (let round = 1; round <= MAX_ROUNDS; round++) {
    const cachedBefore = getCacheDocCount();
    console.log(`\n--- 第 ${round} 轮 (磁盘 ${previousFiles} 个文件, 缓存 ${cachedBefore} 篇) ---`);

    const result = spawnSync(
      pnpmCmd,
      ['exec', 'elog', 'sync', '-e', '.elog.env', '-c', 'elog.feishu.config.js'],
      {
        cwd: rootDir,
        stdio: 'inherit',
        shell: true,
      },
    );

    const currentFiles = countMdFiles(FEISHU_OUTPUT);
    const cachedAfter = getCacheDocCount();

    if (result.status === 0 || reachedExpectedCount(cachedAfter, currentFiles)) {
      console.log(`\n飞书文档同步完成（磁盘 ${currentFiles} 个文件，缓存 ${cachedAfter} 篇）`);
      done = true;
      break;
    }

    if (currentFiles > previousFiles || cachedAfter > cachedBefore) {
      console.log(`\n已取得进展：磁盘 ${currentFiles} 个文件，缓存 ${cachedAfter} 篇`);
    } else {
      console.log('\n本轮没有新增文件或缓存，可能仍在限流或配置异常。');
    }

    previousFiles = currentFiles;

    if (round < MAX_ROUNDS) {
      console.log(`\n冷却 ${COOLDOWN_MS / 1000}s 让飞书限流恢复...`);
      await delay(COOLDOWN_MS);
    } else {
      console.log(`\n已重试 ${MAX_ROUNDS} 次，磁盘现有 ${currentFiles} 个文件`);
      console.log('请稍后再次运行 pnpm run sync-feishu 继续');
      done = true;
    }
  }

  const removed = removeEmptyContainers(FEISHU_OUTPUT);
  if (removed > 0) {
    console.log(`\n已移除 ${removed} 个空容器文件`);
  }

  // 文件名安全化：将 % 替换为全角 ％ 防止 Vite URI malformed 错误
  const renamed = sanitizeFilenames(FEISHU_OUTPUT);
  if (renamed > 0) {
    console.log(`\n已安全化 ${renamed} 个包含 % 的文件名（% → ％）`);
  }

  renameFile(CACHE_FILE, FEISHU_CACHE);
  renameFile(YUQUE_CACHE, CACHE_FILE);

  const finalFiles = countMdFiles(FEISHU_OUTPUT);
  console.log(done ? `\n=== 完成 === (磁盘共 ${finalFiles} 个 .md 文件)` : '\n=== 完成 ===');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
