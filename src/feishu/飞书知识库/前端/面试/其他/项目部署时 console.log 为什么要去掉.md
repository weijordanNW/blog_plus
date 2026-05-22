---
title: 项目部署时 console.log 为什么要去掉
date: '2026-05-21'
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/面试/其他
tag:
  - feishu
---
# 1.📝 面试速记：项目部署时为什么要去掉 `console.log`？
---
## 一、核心原因（面试官想听的底层逻辑）
1. **性能损耗**：浏览器执行 `console.log` 会占用主线程，大量日志会阻塞渲染，拖慢页面加载和交互响应速度。

1. **线上安全隐患**：日志中可能泄露敏感信息（接口参数、用户数据、业务逻辑），被攻击者利用。

1. **内存占用**：浏览器会缓存控制台日志，大量输出会占用内存，甚至导致页面卡顿 / 崩溃。

1. **用户体验问题**：控制台日志会暴露业务报错或调试信息，影响用户侧的稳定性感知，也不利于线上问题排查时的日志区分。

---
## 二、正确的上线处理方案（加分项）
1. **构建工具自动清除**
	- Webpack：使用 `terser-webpack-plugin` 配置 `compress.drop_console: true`，生产环境自动移除所有 `console`。
		- Vite：配置 `build.terserOptions.compress.drop_console = true`，打包时清除日志。
	
1. **分层日志保留**
	- 仅保留 `console.error` 等错误日志，用于线上监控平台（如 Sentry）的异常收集，方便排查问题。
	
1. **封装日志工具，环境一键开关**


```typescript
// 示例：环境可控的日志工具
const logger = {
  log: (...args) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(...args);
    }
  },
  error: (...args) => console.error(...args) // 错误日志始终保留
};
```
---
## 三、一句话面试总结
线上去掉 `console.log`，本质是为了**避免性能损耗、信息泄露和内存占用**，正确做法是通过构建工具自动清除，并封装环境可控的日志工具，只保留必要的错误日志用于监控。
# 图
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/TppDbCINSoCxajxcvw0cq4renld.png)

