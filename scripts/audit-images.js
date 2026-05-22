const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const scanDirs = ['feishu', 'yuque', 'src'];
const imageExts = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg']);
const thresholdBytes = Number(process.env.IMAGE_AUDIT_THRESHOLD_BYTES || 1024 * 1024);

function walk(dir) {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(entryPath));
    } else if (imageExts.has(path.extname(entry.name).toLowerCase())) {
      const stat = fs.statSync(entryPath);
      files.push({
        path: path.relative(rootDir, entryPath),
        size: stat.size,
      });
    }
  }

  return files;
}

const images = scanDirs.flatMap((dir) => walk(path.join(rootDir, dir)));
const largeImages = images
  .filter((image) => image.size >= thresholdBytes)
  .sort((a, b) => b.size - a.size);

const totalBytes = images.reduce((sum, image) => sum + image.size, 0);

console.log(`Images: ${images.length}`);
console.log(`Total: ${(totalBytes / 1024 / 1024).toFixed(2)} MB`);
console.log(`Large images >= ${(thresholdBytes / 1024 / 1024).toFixed(2)} MB: ${largeImages.length}`);

for (const image of largeImages) {
  console.log(`${(image.size / 1024 / 1024).toFixed(2)} MB  ${image.path}`);
}
