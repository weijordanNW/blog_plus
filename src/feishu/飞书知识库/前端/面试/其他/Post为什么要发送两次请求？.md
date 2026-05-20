---
title: Post为什么要发送两次请求？
date: 2026-05-21
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/面试/其他
tag:
  - feishu
---
# 1.跨域预检请求（OPTIONS）面试速记卡片
（直接背，面试张口就来）
---
## 一、核心问题：为什么 POST 经常发两次？
- 这不是两次 POST，而是**浏览器的预检请求（OPTIONS）**。

- 当请求是**非简单请求**时，浏览器会先发送一次 OPTIONS 请求，向服务器询问：“我能不能跨域请求你？”

- 服务器返回允许后，才会发送真正的 POST 请求；如果服务器拒绝，就会直接报跨域错误。

- GET 请求大多是 “简单请求”，所以很少触发预检。

---
## 二、什么情况下浏览器会自动发 OPTIONS？
只要满足以下任意一条，就会触发预检：
1. 请求方法不是 `GET`/`POST`/`HEAD`（比如 `PUT`/`DELETE`）

1. 携带了自定义请求头（如 `token`、`Authorization`）

1. `Content-Type` 不是 `text/plain`/`application/x-www-form-urlencoded`/`multipart/form-data`（比如 `application/json`）

---
## 三、怎么优化让 OPTIONS 少发甚至不发？
1. **缓存预检结果**：后端设置 `Access-Control-Max-Age` 响应头，让浏览器缓存 OPTIONS 的结果，避免每次都发送。

1. **尽量用简单请求格式**：
	- 避免使用 `application/json`，改用 `application/x-www-form-urlencoded` 格式。
		- 减少自定义请求头，非必要不携带额外字段。
	
1. **同域部署**：从根源上避免跨域请求，也就不会触发预检了。

---
### 一句话总结
OPTIONS 预检请求的本质，是浏览器为了跨域安全，在发送非简单请求前的 “确认机制”，优化的核心是**缓存预检结果或让请求变成简单请求**。


# 图
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/TnMXbExibo0hnex2bjdc5FgAnLf.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/KdecbOfsRoW8N5x4ONUcxzMnnxg.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/Z3ZLbtiLtofDXFxuM4Cc1c7Tnof.png)

![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/BtDTbKPLNoBjTHxCCHzcfuiynWb.png)

![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/Qy9ybuDjBoFViPxlIYRcR2IunLe.png)

![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/V7RKbHXHWoxC1sxL5axc7c6Hnmd.png)

