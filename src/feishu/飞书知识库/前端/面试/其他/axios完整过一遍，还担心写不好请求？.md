---
title: axios完整过一遍，还担心写不好请求？
date: '2026-05-21'
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/面试/其他
tag:
  - feishu
---
# 1.Axios 核心原理与工程化封装 面试笔记
---
## 一、Axios 完整核心流程（面试必背）
1. **创建实例**：初始化 axios 实例，配置 `baseURL`、`timeout`、请求头等基础信息。

1. **请求拦截器**：请求发送前执行，统一处理 Token、请求签名、加载状态（loading）等。

1. **发起请求**：浏览器端用 `XMLHttpRequest`，Node.js 端用 `http` 模块发送 HTTP 请求。

1. **响应拦截器**：服务端返回响应后执行，处理状态码、剥取响应数据、统一错误处理。

1. **业务层接收**：拿到最终的响应数据或错误信息，进行业务逻辑处理。

---
## 二、高频核心功能（面试官必问）
表格

---
## 三、工程化封装（高手标配）
1. **多实例配置**：不同业务域名 / 环境，创建独立 axios 实例，分开管理配置。

1. **自动刷新 Token**：捕获 401 错误时，用 refreshToken 无感续签，避免用户掉线。

1. **防重复提交**：结合请求锁 + 取消请求，防止用户重复点击、短时间内多次提交。

1. **错误重试**：网络波动 / 5xx 错误时，自动重试请求，提升用户体验。

1. **TS 接口泛型**：为请求和响应数据添加类型约束，提升代码安全性和开发体验。

---
## 四、关键问题解答
### 拦截器到底怎么工作？
- 拦截器是 Axios 的中间件机制，分为**请求拦截器**和**响应拦截器**。

- 它们以 “栈” 的形式执行：请求拦截器按注册顺序倒序执行，响应拦截器按注册顺序正序执行。

- 作用是在请求 / 响应流程中插入统一逻辑，实现解耦和复用。

### 取消请求、错误重试、防重复提交怎么实现？
- **取消请求**：使用 `AbortController`（推荐）或 `CancelToken`，调用 `abort()` 即可终止请求。

- **错误重试**：在响应拦截器中捕获特定错误（如 5xx、超时），用递归或 Promise 实现重试逻辑。

- **防重复提交**：用 Map 存储请求标识（url+method），请求前检查是否存在，存在则取消旧请求，新请求完成后移除标识。

---
## 一句话总结
Axios 是一个基于 Promise 的 HTTP 客户端，核心是**拦截器机制 + 多环境适配**，工程化封装的关键是利用这些特性实现统一配置、错误处理和用户体验优化。


# 2.Axios 面试速记卡片
（直接背，面试张口就来）
---
## 一、核心流程（必背）
1. **创建实例**：配置 `baseURL`/`timeout`/ 请求头

1. **请求拦截器**：加 Token、签名、loading

1. **发起请求**：浏览器用 XHR / Node 用 http

1. **响应拦截器**：处理状态码、剥数据、统一报错

1. **业务层接收**：拿到数据 / 错误信息

---
## 二、高频核心功能
- **拦截器**：统一处理 Token、错误、loading，避免重复代码

- **取消请求**：`AbortController`/`CancelToken`，防重复请求、页面切换取消

- **并发请求**：`axios.all` + `axios.spread` 批量发送

- **错误处理**：捕获 401/403/500、超时、断网

- **请求配置**：`baseURL`/`timeout`/`headers`/`params`/`data`

---
## 三、工程化封装要点
- **多实例**：不同业务域名分开配置

- **自动刷新 Token**：401 时无感续签

- **防重复提交**：请求锁 + 取消重复请求

- **错误重试**：网络波动自动重试

- **TS 泛型**：请求 / 响应类型约束

---
## 四、关键问题速答
- **拦截器工作原理**：中间件机制，请求拦截倒序执行，响应拦截正序执行，实现请求 / 响应流程的统一处理。

- **取消请求实现**：用 `AbortController`，调用 `abort()` 终止请求。

- **防重复提交实现**：用 Map 存储请求标识，请求前检查，存在则取消旧请求。

---
### 一句话总结
Axios 核心是「拦截器机制 + Promise 封装」，通过统一配置、拦截器、错误处理，实现请求的解耦与工程化管理。
# 3.图
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/F2gibwAkZolwuRxmVlwc4qEXnzb.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/GP03br1ZLo3sa3x3QRBcwKOTnqh.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/VmyDbSBofoFOPRxjmINcjRD5nvg.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/W64EbVpEGoaaW0xoIQMcoWMunGe.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/VsBFbzapZoCAFnxumSkchkAInue.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/Ey0Hb5Kfjon7uAxRELpcXSzln0d.png)

