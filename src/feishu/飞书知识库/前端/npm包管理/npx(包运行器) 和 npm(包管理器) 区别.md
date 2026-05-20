---
title: npx(包运行器) 和 npm(包管理器) 区别
date: 2026-05-21
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/npm包管理
tag:
  - feishu
---
### 总结
- **npm**：专注于包的安装、版本管理、依赖关系处理以及包的发布。

- **npx**：专注于运行包中的命令，特别是那些不经常使用的工具，而无需全局安装这些包。

在实际使用中，你可以结合使用 npm 和 npx。例如，你可以使用 npm 安装项目依赖，然后使用 npx 运行这些依赖包中的命令或脚本。

`npx` 和 `npm` 都是与 Node.js 和 JavaScript 包管理相关的命令行工具，但它们的用途和功能有所不同。
### npm (Node Package Manager)
- **包管理器**：npm 是 Node.js 的默认包管理器，用于管理项目中的依赖关系。它允许你安装、共享和管理项目所需的外部库和工具。

- **包注册表**：npm 还运营着一个庞大的在线包注册表，即 npm registry，开发者可以从中下载所需的包。

- `package.json`：npm 通过项目的 `package.json` 文件来管理依赖，这个文件列出了项目所需的所有包和版本。

- **命令**：npm 提供了许多命令来管理包，如 `npm install` 安装依赖，`npm uninstall` 卸载依赖，`npm update` 更新依赖，以及 `npm publish` 发布包到 npm registry。

### npx
- **包运行器**：npx 是一个随 npm 5.2.0 及更高版本一起提供的包运行器工具。它用于运行 npm registry 上的包而无需全局安装它们。

- **一次性命令执行**：npx 允许你临时运行一个包而不会将其安装在你的系统上。这对于运行一次性脚本或命令非常有用，例如 `npx create-react-app my-app` 创建一个新的 React 应用。

- **版本一致性**：npx 确保你运行的命令是包的最新版本，即使你已经在系统上全局安装了该包的旧版本。

- **使用场景**：npx 常用于运行那些不经常使用的工具或脚本，这样可以避免全局安装过多的包，保持系统整洁。

### 
