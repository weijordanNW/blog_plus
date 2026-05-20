---
title: token应该存储在cookie还是localStorage上？
date: 2026-05-21
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/面试/其他
tag:
  - feishu
---
# 1.Token 存储方案对比：Cookie vs localStorage
---
## 一、localStorage 存储（方便但不安全）
### 核心特点
- ✅ 优点：JS 可直接读写，封装简单，不会自动随请求携带

- ❌ 缺点：**极易被 XSS 攻击窃取**，页面注入恶意脚本后，Token 会直接被盗

- 🎯 适用场景：不敏感的小型项目、演示项目（非生产环境）

---
## 二、Cookie 存储（大厂标准安全方案）
### 安全配置三要素（缺一不可）
1. `**HttpOnly**`：禁止 JS 读取 Cookie，从根源防 XSS 攻击

1. `**Secure**`：仅在 HTTPS 协议下传输，防止明文传输被劫持

1. `**SameSite**`：限制跨站请求携带 Cookie，防止 CSRF 攻击

### 优缺点
- ✅ 优点：安全性最高，自动随请求携带，后端可控（可设置过期、销毁）

- ❌ 缺点：存储容量小（约 4KB），有跨站限制，需要后端配合配置

---
## 三、面试满分结论（不同场景的选择）
表格

---
### 一句话总结
生产环境的敏感业务，Token 必须存在带 `HttpOnly`/`Secure`/`SameSite` 属性的 Cookie 中；仅非敏感、无安全要求的场景，才可以用 localStorage。


# 2.Token 存储方案 面试速记卡片
（直接背，面试张口就来）
---
## 一、localStorage 方案
- ✅ 优点：JS 可直接读写，开发简单，不自动随请求携带

- ❌ 缺点：极易被 XSS 攻击窃取，Token 不安全

- 🎯 适用：非敏感小型项目、演示项目

---
## 二、Cookie 安全方案（大厂标准）
### 安全配置三要素（必须同时满足）
1. `HttpOnly`：禁止 JS 读取，防 XSS

1. `Secure`：仅 HTTPS 传输，防明文劫持

1. `SameSite`：限制跨站携带，防 CSRF

- ✅ 优点：安全性最高，自动随请求携带，后端可控

- ❌ 缺点：存储容量小，需后端配置，有跨站限制

---
## 三、场景选择结论
- **敏感项目（中台 / 支付 / 后台）**：必须用 `HttpOnly Cookie`

- **普通非敏感 H5 / 演示项目**：可使用 `localStorage`

---
### 终极一句话总结
生产环境的敏感业务，Token 必须存在带安全属性的 Cookie 中；仅非敏感场景才可用 localStorage。


# 3.图
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/PXUnbfINNoaC95x4Voac3W0snzh.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/W4HxbX5WMocvPxxRriKcgUYwn1g.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/TbdWbk2nlocUKux7gULcUljBnVg.png)

