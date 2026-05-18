const fs = require('fs');
const path = require('path');

// 从命令行参数获取目录，默认为 ./src/yuque
const outputDir = process.argv[2] || './src/yuque';
const outputAbs = path.resolve(outputDir);
const dirName = path.basename(outputAbs);

function processDirectory(directory) {
  fs.readdir(directory, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }
    entries.forEach(entry => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        processDirectory(entryPath);
      } else if (entry.isFile() && path.extname(entry.name) === '.md' && entry.name !== 'README.md') {
        processFile(entryPath);
      }
    });
  });
}

function deduceCategory(filePath) {
  const abs = path.resolve(filePath);
  const relToOutput = path.relative(outputAbs, abs);
  const dirs = relToOutput.split(path.sep);
  dirs.pop();
  if (dirs.length === 0) {
    return dirName;
  }
  return dirs.join('/');
}

function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    const frontMatterMatch = content.match(/^(---[\s\S]*?---)/m);
    if (!frontMatterMatch) {
      console.error('No front matter found in file:', filePath);
      return;
    }
    let frontMatter = frontMatterMatch[1];

    const titleValue = getFieldValue(frontMatter, 'title') || '默认标题';

    const existingDate = getFieldValueData(frontMatter, 'date');
    const dateValue = existingDate ? existingDate.split(' ')[0] : new Date().toISOString().split('T')[0];

    // 自动推导 category：根据在输出目录内的子路径生成
    const categoryValue = deduceCategory(filePath);

    const newFrontMatter = `
---
title: ${titleValue}
date: ${dateValue}
icon: ${getFieldValue(frontMatter, 'icon') || 'bokeyuan'}
star: ${getFieldValue(frontMatter, 'star') !== null ? getFieldValue(frontMatter, 'star') : 'false'}
isOriginal: ${getFieldValue(frontMatter, 'isOriginal') !== null ? getFieldValue(frontMatter, 'isOriginal') : 'false'}
category:
  - ${categoryValue}
tag:
  - ${getFieldValue(frontMatter, 'tag') || dirName}
---
`.trim();

    const newContent = content.replace(frontMatter, newFrontMatter);

    fs.writeFile(filePath, newContent, 'utf8', err => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log(`Updated file: ${filePath}  [category: ${categoryValue}]`);
    });
  });
}

function getFieldValue(frontMatter, fieldName) {
  const multiLineRegex = new RegExp(`^${fieldName}:([\\s\\S]*?)(?=\\n^[^\\s])`, 'gm');
  const multiMatch = frontMatter.match(multiLineRegex);

  if (multiMatch) {
    const valueMatch = multiMatch[0].match(/-\s*['"]?([a-zA-Z0-9\u4e00-\u9fa5]+)['"]?/);
    if (valueMatch) {
      return valueMatch[1].trim();
    }
  }

  const singleLineRegex = new RegExp(`^${fieldName}:\\s*([^\n]+)`, 'm');
  const match = frontMatter.match(singleLineRegex);

  if (match) {
    const value = match[1].trim();
    if (value && !value.startsWith('-')) {
      return value;
    }
  }

  return null;
}

function getFieldValueData(frontMatter, fieldName) {
  const regex = new RegExp(`^${fieldName}:\\s*['"]?([^'"\n]+)['"]?`, 'm');
  const match = frontMatter.match(regex);
  return match ? match[1].trim() : null;
}

processDirectory(outputAbs);
