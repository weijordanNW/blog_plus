---
title: vue兼容 ie 浏览器
date: '2026-05-21'
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/浏览器兼容
tag:
  - feishu
---
[https://worktile.com/kb/p/3666645](https://worktile.com/kb/p/3666645)



**要让Vue兼容IE浏览器，可以采取以下几个步骤：**

**1、使用Vue CLI创建项目时选择“Babel”以确保代码转译，**

**2、引入必要的Polyfill，**

**3、避免使用ES6+特性和API，**

**4、修复CSS兼容性问题。**

IE浏览器在CSS特性支持方面也存在诸多问题。为确保兼容性，可以使用以下方法：
1. **自动前缀器**：

安装并配置autoprefixer以自动添加必要的CSS前缀：
```plaintext
npm install autoprefixer
```
在`postcss.config.js`中配置：
```javascript
module.exports = {
  plugins: {
    autoprefixer: {}
  }
}
```
1. **CSS重置**：

使用CSS重置文件（如normalize.css）以确保不同浏览器之间的一致性：
```plaintext
npm install normalize.css
```
在项目入口文件中引入：
```plaintext
import 'normalize.css';
```

