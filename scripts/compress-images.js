const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = process.cwd();
const DEFAULT_THRESHOLD = 1024 * 1024;
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const TARGET_DIRS = (process.env.IMAGE_COMPRESS_DIRS || "feishu,yuque")
  .split(",")
  .map((item) => item.trim())
  .filter(Boolean);
const THRESHOLD_BYTES = Number.parseInt(
  process.env.IMAGE_COMPRESS_THRESHOLD_BYTES || `${DEFAULT_THRESHOLD}`,
  10,
);
const IS_DRY_RUN = process.argv.includes("--dry-run");

function walk(dir) {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }

    if (entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

function formatBytes(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function writeCandidate(filePath, tempPath, extension) {
  const image = sharp(filePath, { failOn: "warning" }).rotate();

  if (extension === ".png") {
    await image
      .png({
        compressionLevel: 9,
        adaptiveFiltering: true,
        effort: 10,
        palette: true,
        colours: Number.parseInt(process.env.IMAGE_COMPRESS_PNG_COLORS || "256", 10),
        dither: Number.parseFloat(process.env.IMAGE_COMPRESS_PNG_DITHER || "0.7"),
      })
      .toFile(tempPath);
    return;
  }

  if (extension === ".webp") {
    await image
      .webp({
        quality: Number.parseInt(process.env.IMAGE_COMPRESS_WEBP_QUALITY || "82", 10),
        effort: 6,
      })
      .toFile(tempPath);
    return;
  }

  await image
    .jpeg({
      quality: Number.parseInt(process.env.IMAGE_COMPRESS_JPEG_QUALITY || "82", 10),
      mozjpeg: true,
    })
    .toFile(tempPath);
}

async function compressFile(filePath) {
  const originalSize = fs.statSync(filePath).size;
  const extension = path.extname(filePath).toLowerCase();
  const tempPath = `${filePath}.compressing`;

  if (originalSize < THRESHOLD_BYTES) {
    return { status: "skipped-small", filePath, originalSize };
  }

  if (IS_DRY_RUN) {
    return { status: "would-compress", filePath, originalSize };
  }

  try {
    await writeCandidate(filePath, tempPath, extension);
    const compressedSize = fs.statSync(tempPath).size;

    if (compressedSize >= originalSize) {
      fs.rmSync(tempPath, { force: true });
      return { status: "skipped-larger", filePath, originalSize, compressedSize };
    }

    fs.renameSync(tempPath, filePath);
    return { status: "compressed", filePath, originalSize, compressedSize };
  } catch (error) {
    fs.rmSync(tempPath, { force: true });
    return { status: "failed", filePath, originalSize, error };
  }
}

async function main() {
  const candidates = TARGET_DIRS.flatMap((dir) => walk(path.join(ROOT, dir))).sort();
  const results = [];

  for (const filePath of candidates) {
    results.push(await compressFile(filePath));
  }

  const compressed = results.filter((item) => item.status === "compressed");
  const savedBytes = compressed.reduce(
    (sum, item) => sum + item.originalSize - item.compressedSize,
    0,
  );

  for (const item of results.filter((result) => result.status !== "skipped-small")) {
    const relativePath = path.relative(ROOT, item.filePath);

    if (item.status === "compressed") {
      const ratio = ((1 - item.compressedSize / item.originalSize) * 100).toFixed(1);
      console.log(
        `compressed ${relativePath}: ${formatBytes(item.originalSize)} -> ${formatBytes(
          item.compressedSize,
        )} (${ratio}% saved)`,
      );
    } else if (item.status === "would-compress") {
      console.log(`would compress ${relativePath}: ${formatBytes(item.originalSize)}`);
    } else if (item.status === "skipped-larger") {
      console.log(
        `skipped ${relativePath}: candidate ${formatBytes(
          item.compressedSize,
        )} >= original ${formatBytes(item.originalSize)}`,
      );
    } else if (item.status === "failed") {
      console.error(`failed ${relativePath}: ${item.error.message}`);
    }
  }

  console.log(`Images scanned: ${results.length}`);
  console.log(`Images compressed: ${compressed.length}`);
  console.log(`Total saved: ${formatBytes(savedBytes)}`);

  if (results.some((item) => item.status === "failed")) {
    process.exitCode = 1;
  }
}

main();
