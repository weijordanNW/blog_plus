---
title: react-前端清理大师
date: '2026-05-29'
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/React
tag:
  - feishu
---
在codex或者cc里输入
```bash
/goal run npx react-doctor@latest and fix issues until you get a score of 100
```
ok，世界安静了，堪称前端清理大师





# 这个命令是做什么的？
bash

运行
```plaintext
npx react-doctor@latest
```
它是 React 官方推出的项目健康检查 + 自动修复工具。

你输入的：

plaintext
```plaintext
/goal run npx react-doctor@latest and fix issues until you get a score of 100
```
意思就是：让 AI 自动运行 React 官方检查器，自动修复所有问题，直到项目健康度达到 100 分。
---
# 它具体会做什么？（前端清理大师的真实功能）
它会全自动扫描你的 React 项目，然后：
### 检查依赖问题
- 有没有重复依赖

- 依赖版本冲突

- 缺失依赖

- 过时依赖

### 检查 ESLint / TypeScript 错误
- 未使用的变量

- 类型错误

- 代码规范问题

- 潜在 bug

### 检查 React 专属问题
- Hooks 使用错误

- 不必要的重渲染

- 组件写法不规范

- 性能隐患

- 过时 API（如旧的 React 语法）

### 检查配置问题
- webpack /vite 配置问题

- 项目结构混乱

- 环境变量错误

### 自动修复
它不只是检查，还能自动修复 80% 以上的问题，不用你手动改代码。
---
# 为什么叫「前端清理大师」？
因为它就像：
- 手机的「清理垃圾」

- 电脑的「杀毒 + 优化」

对你的 React 项目做： ✅ 清理冗余代码 ✅ 修复潜在 bug ✅ 统一代码规范 ✅ 优化项目性能 ✅ 解决依赖冲突 ✅ 让项目更稳定、更快、更规范
---
# 运行后会发生什么？
1. 输出一个 0～100 的项目健康分数

1. 列出所有问题

1. 自动修复可修复的问题

1. 告诉你哪些需要手动改

1. 最终让项目达到 100 分完美状态

---
# 最简单总结（一句话版）
react-doctor 是 React 官方的项目体检 + 自动修复工具，能一键扫描、自动清理、自动修复你的 React 项目里 80% 的垃圾代码、bug、依赖问题、性能隐患，让项目达到 100 分健康状态。

所以你才会觉得：世界安静了 = 项目不报错、不警告、不卡顿、不混乱。
---
### 总结
- react-doctor：React 官方项目体检 + 自动修复工具

- 作用：扫错 → 修复 → 优化 → 提分

- 效果：项目变干净、稳定、无警告、无错误、高性能

- 外号：前端清理大师

