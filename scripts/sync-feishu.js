const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CACHE_FILE = 'elog.cache.json';
const YUQUE_CACHE = 'elog.yuque.cache.json';
const FEISHU_CACHE = 'elog.feishu.cache.json';
const FEISHU_OUTPUT = 'src/feishu';
const MAX_ROUNDS = 8;
const COOLDOWN_MS = 70000;

const rootDir = path.join(__dirname, '..');

function fileExists(file) {
  try { return fs.existsSync(path.join(rootDir, file)); }
  catch { return false; }
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
  const start = Date.now();
  while (Date.now() - start < ms) {}
}

function countMdFiles(dirPath) {
  const absPath = path.join(rootDir, dirPath);
  if (!fs.existsSync(absPath)) return 0;
  let count = 0;
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) walk(path.join(dir, entry.name));
      else if (entry.name.endsWith('.md')) count++;
    }
  }
  walk(absPath);
  return count;
}

function removeEmptyContainers(dirPath) {
  const absPath = path.join(rootDir, dirPath);
  if (!fs.existsSync(absPath)) return;

  let removed = 0;

  function cleanup(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        cleanup(fullPath);
        // 清理空目录
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
          console.log(`🗑 移除空容器: ${path.relative(absPath, fullPath)}`);
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
  } catch { return 0; }
}

console.log('=== 开始同步飞书文档（支持断点续传）===');

// 1. 保存当前可能存在的语雀缓存
if (fileExists(CACHE_FILE)) {
  renameFile(CACHE_FILE, YUQUE_CACHE);
}

// 2. 恢复飞书缓存
renameFile(FEISHU_CACHE, CACHE_FILE);

// 3. elog 同步时 limit:1 串行下载，降低频率
const pnpmCmd = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';
let previousFiles = countMdFiles(FEISHU_OUTPUT);
let done = false;

for (let round = 1; round <= MAX_ROUNDS; round++) {
  const cachedBefore = getCacheDocCount();
  console.log(`\n--- 第 ${round} 轮 (磁盘 ${previousFiles} 个文件, 缓存 ${cachedBefore} 篇) ---`);

  spawnSync(pnpmCmd, ['exec', 'elog', 'sync', '-e', '.elog.env', '-c', 'elog.feishu.config.js'], {
    cwd: rootDir,
    stdio: 'inherit',
    shell: true
  });

  const currentFiles = countMdFiles(FEISHU_OUTPUT);
  const cachedAfter = getCacheDocCount();

  // elog 写入了完整缓存 = 全部成功
  if (cachedAfter >= 22) {
    console.log(`\n✓ 飞书文档同步完成！(${cachedAfter} 篇)`);
    done = true;
    break;
  }

  // 有部分进展（磁盘文件增多 = elog 成功下载了一些才被限流中断）
  if (currentFiles > previousFiles) {
    console.log(`\n📦 已下载 ${currentFiles} 个文档，elog 被限流中断但文件已保存`);
    if (currentFiles >= 22) {
      console.log('✓ 所有文件已下载到磁盘！');
      done = true;
      break;
    }
  }

  previousFiles = currentFiles;

  if (round < MAX_ROUNDS) {
    console.log(`\n⏳ 冷却 ${COOLDOWN_MS / 1000}s 让飞书限流恢复...`);
    delay(COOLDOWN_MS);
  } else {
    console.log(`\n⚠ 已重试 ${MAX_ROUNDS} 次，磁盘现有 ${currentFiles} 个文件`);
    console.log('请稍后再次运行 pnpm run sync-feishu 继续');
    done = true;
    break;
  }
}

// 4. 清理飞书空容器（只有 frontmatter 无正文的父文档）
console.log('');
const removed = removeEmptyContainers(FEISHU_OUTPUT);
if (removed > 0) {
  console.log(`\n已移除 ${removed} 个空容器文件`);
}

// 5. 保存飞书缓存
renameFile(CACHE_FILE, FEISHU_CACHE);

// 6. 恢复语雀缓存
renameFile(YUQUE_CACHE, CACHE_FILE);

if (done) {
  const finalFiles = countMdFiles(FEISHU_OUTPUT);
  console.log(`\n=== 完成 === (磁盘共 ${finalFiles} 个 .md 文件)`);
} else {
  console.log('\n=== 完成 ===');
}
