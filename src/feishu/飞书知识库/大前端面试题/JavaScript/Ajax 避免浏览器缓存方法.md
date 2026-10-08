---
title: Ajax 避免浏览器缓存方法
date: '2026-06-12 05:18:33'
updated: '2026-06-13 02:24:45'
---
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/A12dbD7NCosgeexLU9PcYE8Mnfb.png)


Http 请求时，有时浏览器会缓存响应数据，以提高性能。但在某些情况下，你可能希望禁用缓存或控制缓存行为，以确保获得最新的数据。以下是解决浏览器缓存问题的方法：


## 添加时间戳或随机参数


在 Ajax 请求的 URL 中添加一个时间戳或随机参数，以使每个请求看起来不同，从而防止缓存。


```javascript
var timestamp = new Date().getTime();
var url = 'data.json?timestamp=' + timestamp;
```

## 禁用缓存头信息


可以在请求头中添加 `Cache-Control: no-cache` 或 `Pragma: no-cache`，告诉服务器不使用缓存。


```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.setRequestHeader('Cache-Control', 'no-cache');
xhr.send();
```

## 设置响应头


服务器可以在响应头中设置缓存控制信息，以告诉浏览器不要缓存响应。


```plaintext
Cache-Control: no-cache, no-store, must-revalidate
Pragma: no-cache
Expires: 0
```

## 使用 POST 请求


GET 请求通常更容易被浏览器缓存，而 POST 请求通常不会被缓存。如果没有特殊需求，可以考虑使用 POST。


```javascript
var xhr = new XMLHttpRequest();
xhr.open('POST', 'data.json', true);
xhr.send();
```

