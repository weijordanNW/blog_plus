const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CACHE_FILE = 'elog.cache.json';
const YUQUE_CACHE = 'elog.yuque.cache.json';
const FEISHU_CACHE = 'elog.feishu.cache.json';

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

console.log('=== 开始同步语雀文档 ===');

// 1. 保存当前可能存在的飞书缓存
if (fileExists(CACHE_FILE)) {
  // 检查当前缓存是不是飞书的
  try {
    const cache = JSON.parse(fs.readFileSync(path.join(rootDir, CACHE_FILE), 'utf8'));
    // 如果有飞书相关的特征，先保存到飞书缓存
    // 这里简化处理，直接备份
  } catch { }
  renameFile(CACHE_FILE, FEISHU_CACHE);
}

// 2. 恢复语雀缓存
renameFile(YUQUE_CACHE, CACHE_FILE);

// 3. 执行同步
try {
  console.log('运行 elog sync...');
  execSync('pnpm exec elog sync -e .elog.env -c elog.config.js', {
    cwd: rootDir,
    stdio: 'inherit'
  });
  console.log('✓ 语雀文档同步完成');
} catch (e) {
  console.error('✗ 同步失败:', e.message);
}

// 4. 保存语雀缓存
renameFile(CACHE_FILE, YUQUE_CACHE);

// 5. 恢复飞书缓存
renameFile(FEISHU_CACHE, CACHE_FILE);

// 6. 文件名安全化：将 % 替换为全角 ％ 防止 Vite URI malformed 错误
const YUQUE_OUTPUT = 'src/yuque';
const renamed = sanitizeFilenames(YUQUE_OUTPUT);
if (renamed > 0) {
  console.log(`\n已安全化 ${renamed} 个包含 % 的文件名（% → ％）`);
}

console.log('=== 完成 ===');
