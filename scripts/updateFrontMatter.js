const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const outputDir = args.find((arg) => !arg.startsWith('--')) || './src/yuque';
const outputAbs = path.resolve(outputDir);
const dirName = path.basename(outputAbs);

function walkMarkdownFiles(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkMarkdownFiles(entryPath));
    } else if (
      entry.isFile() &&
      path.extname(entry.name) === '.md' &&
      entry.name !== 'README.md'
    ) {
      files.push(entryPath);
    }
  }

  return files;
}

function deduceCategory(filePath) {
  const relToOutput = path.relative(outputAbs, path.resolve(filePath));
  const dirs = relToOutput.split(path.sep);
  dirs.pop();

  return dirs.length === 0 ? dirName : dirs.join('/');
}

function firstValue(value, fallback) {
  if (Array.isArray(value)) return value[0] ?? fallback;
  return value ?? fallback;
}

function normalizeDate(value) {
  if (!value) return new Date().toISOString().split('T')[0];
  if (value instanceof Date) return value.toISOString().split('T')[0];
  return String(value).split(' ')[0];
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(content);

  if (!Object.keys(parsed.data).length) {
    console.error('No front matter found in file:', filePath);
    return;
  }

  const categoryValue = deduceCategory(filePath);
  const nextData = {
    title: parsed.data.title || '默认标题',
    date: normalizeDate(parsed.data.date),
    icon: parsed.data.icon || 'bokeyuan',
    star: parsed.data.star ?? false,
    isOriginal: parsed.data.isOriginal ?? false,
    category: [categoryValue],
    tag: [firstValue(parsed.data.tag, dirName)],
  };

  const nextContent = matter.stringify(parsed.content.trimStart(), nextData);

  if (!dryRun) {
    fs.writeFileSync(filePath, nextContent, 'utf8');
  }

  console.log(`${dryRun ? 'Would update' : 'Updated'} file: ${filePath}  [category: ${categoryValue}]`);
}

if (!fs.existsSync(outputAbs)) {
  console.error('Directory not found:', outputAbs);
  process.exit(1);
}

for (const file of walkMarkdownFiles(outputAbs)) {
  processFile(file);
}
