const fs = require('fs');
const path = require('path');

// 定义要处理的目录
const outputDir = './src/yuque';

// 递归读取目录中的所有 Markdown 文件
function processDirectory(directory) {
    fs.readdir(directory, { withFileTypes: true }, (err, entries) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }
        entries.forEach(entry => {// 处理目录中的每个条目
            const entryPath = path.join(directory, entry.name);// 获取完整路径
            if (entry.isDirectory()) {// 处理子目录
                processDirectory(entryPath); // 递归处理子目录
            } else if (entry.isFile() && path.extname(entry.name) === '.md' && entry.name !== 'README.md') {// 处理 Markdown 文件
                processFile(entryPath);
            }
        });
    });
}

// 处理单个 Markdown 文件
function processFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        // 解析现有的 frontMatter
        const frontMatterMatch = content.match(/^(---[\s\S]*?---)/m);// 匹配 frontMatter
        if (!frontMatterMatch) {
            console.error('No front matter found in file:', filePath);
            return;
        }
        let frontMatter = frontMatterMatch[1];

        // 获取 title 值以便在 shortTitle 缺失时使用
        const titleValue = getFieldValue(frontMatter, 'title') || '默认标题';
        // 获取 date 值并只保留日期部分
        // const existingDate = getFieldValue(frontMatter, 'date');
        // const dateValue = existingDate ? existingDate.split(' ')[0] : new Date().toISOString().split('T')[0]; // 获取 date 值并只保留日期部分

        const existingDate = getFieldValueData(frontMatter, 'date');
        const dateValue = existingDate ? existingDate.split(' ')[0] : new Date().toISOString().split('T')[0]; // 获取 date 值并只保留日期部分
        console.log("dateValue", dateValue);
        // 创建新的 frontMatter 字段
        const newFrontMatter = `
---
title: ${titleValue}
date: ${dateValue} 
icon: ${getFieldValue(frontMatter, 'icon') || 'bokeyuan'}
star: ${getFieldValue(frontMatter, 'star') !== null ? getFieldValue(frontMatter, 'star') : 'false'}
isOriginal: ${getFieldValue(frontMatter, 'isOriginal') !== null ? getFieldValue(frontMatter, 'isOriginal') : 'false'}
category:
  - ${getFieldValue(frontMatter, 'category') || 'yuque'}
tag:
  - ${getFieldValue(frontMatter, 'tag') || 'yuque'}
---
`.trim();

        // shortTitle: "${getFieldValue(frontMatter, 'shortTitle') || titleValue}"
        // cover: "${getFieldValue(frontMatter, 'cover') || ''}"

        // 替换原有的 frontMatter
        const newContent = content.replace(frontMatter, newFrontMatter);

        // 写回文件
        fs.writeFile(filePath, newContent, 'utf8', err => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log(`Updated file: ${filePath}`);
        });
    });
}

// 辅助函数，从现有的 frontMatter 中获取字段值
function getFieldValue(frontMatter, fieldName) {
    const regex = new RegExp(`^${fieldName}:\\s*([^\n]+)`, 'm');
    const match = frontMatter.match(regex);
    return match ? match[1].trim() : null;
}
function getFieldValueData(frontMatter, fieldName) {
    const regex = new RegExp(`^${fieldName}:\\s*['"]?([^'"\n]+)['"]?`, 'm');
    const match = frontMatter.match(regex);
    return match ? match[1].trim() : null;
}

// 开始处理指定目录
processDirectory(outputDir);
