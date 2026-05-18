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

console.log('=== 完成 ===');
