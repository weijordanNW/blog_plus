---
title: promise 和 await/async 的关系
date: '2026-06-12 12:56:19'
updated: '2026-06-12 12:56:29'
---

- **Promise**：一种用于处理异步操作的对象，它代表了一个异步操作的最终完成或失败，并允许在异步操作完成后执行相关的代码。Promise 提供了一种更灵活的方式来管理异步代码，尤其是在处理多个异步操作的情况下。

- **async/await**：一种构建在 Promise 之上的语法糖。它是 ECMAScript 2017 (ES8) 引入的特性，旨在简化异步代码的编写和理解。`async` 函数返回一个 Promise，允许在函数内使用 `await` 关键字等待异步操作完成。
	
## 关系：

- `async` 函数返回一个 Promise 对象。这意味着你可以在 `async` 函数内使用 `await` 来等待一个 Promise 对象的解决。`await` 暂停 `async` 函数的执行，直到 Promise 状态变为 `resolved`（成功）或 `rejected`（失败）。

- `async/await` 是一种更直观的方式来处理 Promise，可以避免嵌套的回调函数（回调地狱）。

