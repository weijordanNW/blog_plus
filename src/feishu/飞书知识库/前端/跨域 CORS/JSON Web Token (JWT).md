---
title: JSON Web Token (JWT)
date: 2026-05-21
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/跨域 CORS
tag:
  - feishu
---
[https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html](https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)



[https://developer.aliyun.com/article/1412354](https://developer.aliyun.com/article/1412354)



Header.Payload.Signature

标题 . 有效载荷 . 签名

Base64URL 算法

JWT 作为一个令牌（token），有些场合可能会 放到 URL（比如 api.example.com/?token=xxx）。Base64 有三个字符`+`、`/`和`=`，在 URL 里面有特殊含义，所以要被替换掉：

`=`被省略、`+`替换成`-`，`/`替换成`_` 。

这就是 Base64URL 算法。
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/GqV0bPo9VoJa6QxPs9Sck2i8n9e.webp)

![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/H0MTbujyQoK4RfxX0oVcqvwSnic.png)

