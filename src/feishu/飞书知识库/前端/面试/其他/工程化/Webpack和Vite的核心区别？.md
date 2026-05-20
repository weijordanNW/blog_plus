---
title: Webpack和Vite的核心区别？
date: 2026-05-21
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/面试/其他/工程化
tag:
  - feishu
---
# 1.Vite vs Webpack 面试灵魂三问 整理笔记
---
## 灵魂问题 1：为什么 Vite 冷启动极快？
### 第一层：核心原理差异（面试满分答案）
表格

---
## 灵魂问题 2：开发环境和生产环境构建有什么不一样？
### 第二层：关键区别（背会直接用）
表格

---
## 灵魂问题 3：什么场景选 Webpack？什么场景选 Vite？
### 第三层：面试官加分回答
#### ✅ Webpack 适用场景
- 中大型、业务逻辑复杂的项目

- 维护老项目、需要兼容低版本浏览器的项目

- 对构建定制化、插件生态依赖强的项目（比如需要复杂的资源处理、自定义构建流程）

#### ✅ Vite 适用场景
- Vue/React 等框架的新项目

- 追求极致开发体验、需要快速启动和热更新的项目

- 现代浏览器环境、依赖 ESM 模块的项目

---
### 一句话总结
- **Webpack：先打包，再运行**（开发环境启动前就要处理所有模块）

- **Vite：先运行，用到再加载**（开发环境利用浏览器原生 ESM，按需处理模块）


# 2.Vite vs Webpack 面试速记卡片
（直接背，面试张口就来）
---
## 灵魂问题 1：为什么 Vite 冷启动极快？
**核心原理一句话：**
- Webpack：**先打包再运行**，启动时全量打包所有模块，项目越大越慢。

- Vite：**先运行再按需加载**，开发环境基于浏览器原生 ESM，不用全量打包，启动秒开。

---
## 灵魂问题 2：开发 / 生产环境构建有什么不一样？
表格

---
## 灵魂问题 3：什么场景选 Webpack？什么场景选 Vite？
- **选 Webpack**：中大型复杂项目、老项目、需要强插件生态 / 兼容低版本浏览器的场景。

- **选 Vite**：Vue/React 新项目、追求极致开发体验、现代浏览器环境的场景。

---
### 终极一句话总结
Webpack 是 “先打包再运行”，Vite 是 “先运行，用到再加载”。


# 3.图
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/LBjUbniY0oEnQjxDveFctyPonbc.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/FPzObvX05oNAvHxKGUocnBiwn6f.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/Rzjubj1NqoO6vXxHNJycgJ1Bn0d.png)

![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/A3ePbTt4doUMcpxQSnpcL51Dnyv.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/Uk9ebanT3oy2cEx2Wgccrppfnyh.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/KpfSbKfR5oqJcExDjGnc0XqMndc.png)

## 

