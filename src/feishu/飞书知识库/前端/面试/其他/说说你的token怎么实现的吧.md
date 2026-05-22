---
title: 说说你的token怎么实现的吧
date: '2026-05-21'
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/面试/其他
tag:
  - feishu
---
# 1.Token 认证实现方案 面试速记卡片
（按三层递进结构回答，面试官最爱）
---
## 一、存储方案（安全分水岭）
- **HttpOnly + Secure Cookie（优先推荐）**：最安全，防 XSS 攻击，无法被 JS 读取，请求自动携带，适合敏感业务场景。

- **localStorage**：读写方便，但极易受 XSS 攻击，仅适合非敏感、临时数据存储。

- **sessionStorage**：页面关闭即清除，适合临时会话数据，不适合持久化登录态。

---
## 二、标准实现流程（面试满分答案）
1. **登录获取 Token**：调用登录接口，后端返回 `access_token` 和 `refresh_token`。

1. **存储 Token**：优先存入 `HttpOnly Cookie`，避免前端直接读写。

1. **请求拦截器**：统一将 `access_token` 注入请求头（如 `Authorization: Bearer xxx`）。

1. **响应拦截器**：处理 401/403 状态码，触发 Token 续签或跳转登录页。

---
## 三、进阶加分实现（高手标配）
- **无感续签**：当 `access_token` 过期时，用 `refresh_token` 调用刷新接口，获取新的 `access_token`，用户无感知。

- **主动销毁**：退出登录时，清除前端存储的 Token，并调用后端登出接口，让服务端销毁会话。

- **安全加固**：
	- 全程使用 HTTPS 传输
		- 配置 Cookie 的 `SameSite` 属性防 CSRF
		- 设置合理的 Token 过期时间，避免长期有效
		- 结合 XSS 防护措施（如 CSP 头、输入过滤）
	
---
### 一句话总结
Token 认证的核心是「**安全存储 + 统一注入 + 异常处理**」，优先使用 HttpOnly Cookie 保证安全，配合拦截器和无感续签提升用户体验。


# 2.回答
## 版本 1：简洁基础版（适合一面 / 基础提问）
我们项目的 Token 认证，是按标准流程实现的，核心分为三步：
1. **存储上优先保证安全**：敏感业务场景下，我们用后端设置的`HttpOnly + Secure Cookie`来存 Token，这样 JS 读不到，防 XSS 攻击，而且请求会自动携带，很省心。非敏感的配置项，才会用 localStorage 临时存一下。

1. **请求和响应统一管理**：登录拿到 Token 后，我们在请求拦截器里统一把 Token 加到请求头里，不用每个接口手动写；响应拦截器里专门处理 401/403 状态码，直接跳登录页，避免用户拿到错误数据。

1. **退出时主动销毁**：用户退出登录时，我们会同时清除前端存储的 Token，并且调用后端的登出接口，让服务端销毁会话，保证账号安全。

---
## 版本 2：完整加分版（适合二面 / 深挖提问）
我这边的 Token 认证方案，是从安全、体验和异常处理三个维度做的完整实现：
1. **安全存储是核心**：我们没有用 localStorage 存敏感的 access_token，而是让后端把它存在了`HttpOnly + Secure + SameSite`的 Cookie 里，从根源上防 XSS 和 CSRF 攻击。refresh_token 则单独做了有效期管理，避免泄露风险。

1. **请求流程做了全链路管理**：用户登录成功后，请求拦截器会自动把 Token 注入到请求头里；响应拦截器会捕获 401 状态码，这时候不会直接让用户掉线，而是用 refresh_token 去无感刷新 access_token，刷新失败才会跳登录页，用户完全无感知。

1. **安全加固和兜底机制**：全程用 HTTPS 传输，同时设置了合理的 Token 过期时间，access_token 有效期短，refresh_token 有效期稍长。用户退出时，不仅前端会清掉存储，还会调用后端接口销毁会话，防止会话劫持，整体的安全性和用户体验都做了兼顾。

# 3.图
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/JPAKbXWNXoD8HYxhCjIc8tuJnke.png)

![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/XyYabsSNQo2vimxYdIxcmpIGnwe.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/JvrAb42DdoxIFDxrsMSc4wwdnVf.png)

