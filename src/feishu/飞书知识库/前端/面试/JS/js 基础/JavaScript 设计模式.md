---
title: JavaScript 设计模式
date: 2026-05-21
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/面试/JS/js 基础
tag:
  - feishu
---
## 思维导图
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/HH0dbd5AYozRrjxLdrCcCMfgnkg.jpeg)
## 代码
```javascript
function cache(fn){
  const cache = {}
  return function(...args){
    const key = JSON.stringify(args)
    if(cache[key]){
      return cache[key]
    }
    const result = fn(...args)
    cache[key] = result
    return result
  }
}
```
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/MXOebDXcbojPXqxmwW6cKmIBn8f.png)

