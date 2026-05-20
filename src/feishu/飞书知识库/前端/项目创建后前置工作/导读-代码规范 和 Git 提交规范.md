---
title: 代码规范
date: 2026-05-21
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/项目创建后前置工作
tag:
  - feishu
---
# ESLint+Prettier+Stylelint+EditorConfig 约束和统一前端代码规范
参考



ESLint : 代码检测

Stylelint : CSS代码检测

Prettier : 代码格式化

EditorConfig : 编辑器统一配置


# Husky + Lint-staged + Commitlint + Commitizen + cz-git 配置 Git 提交规范
参考



**Husky** : Git 钩子工具,  设置触发`pre-commit`、`commit-msg`


**Lint-staged** :  git add 到**暂存区**的文件**运行 linters **([ESLint](https://so.csdn.net/so/search?q=ESLint&spm=1001.2101.3001.7020)/Prettier/StyleLint) 的工具，避免在 git commit 提交时在整个项目执行


**Commitlint** : git提交规则检测

一个基于 Node.js 的工具，它通过一系列的规则来检查 Git 提交信息的格式，确保它们遵循预定义的标准。它在 Git 的 `commit-msg` 钩子中运行



**Commitizen+ cz-git** :

Commitizen 是一个用于**规范化 Git 提交信息的工具**，提供一个**交互式的命令行界面来帮助开发者生成符合特定约定格式的提交信息。**



`cz-git` 是一个流行的适配器，支持与 Commitlint 配合使用，**提供命令行提示信息**。并且可以自定义提示信息


# 拓展
.commitlintrc.js这种点开头rc结尾的文件是什么类型

以点（`.`）开头并以 `rc` 结尾的文件通常被称为“**配置文件**”或“runtime configuration files”。这种命名约定表明这些文件包含了运行时的配置信息，用于指定应用程序或工具的设置和参数。

对于 `.commitlintrc.js` 文件，它是一个特定的配置文件，用于定义 Commitlint 的规则和选项。Commitlint 是一个工具，用于确保 Git 提交信息遵循一定的格式和标准。在这个文件中，你可以定义提交信息应该遵循的规则，例如提交信息的类型、格式、是否允许使用某种类型的提交信息等。

这种文件通常使用 JavaScript（`.js`）或 JSON（`.json`）格式编写，因为它们可以被 Node.js 环境直接读取和解析。使用 JavaScript 格式的配置文件还可以让你利用模块化和复用现有的 linting 配置，例如使用 `import` 语句来引入共享的配置片段。

其他类似的配置文件包括：
- `.eslintrc.js`：用于配置 ESLint。

- `.stylelintrc.js`：用于配置 Stylelint。

- `.prettierrc.js`：用于配置 Prettier。

- `babel.config.js`：用于配置 Babel。

- `jest.config.js`：用于配置 Jest 测试框架。

这些配置文件通常位于项目的根目录或其子目录中，具体位置取决于工具的要求。工具在运行时会自动查找这些文件，以读取和应用配置信息。


