---
title: 手写 call apply bind
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
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/U57Ubd5vXoAdtWxEaB6chUstnMe.jpeg)
## 代码
总结简单实现版
```javascript
//手写call()利用symbol优化
// 定义myCall方法
//...args 剩余参数
//context 上下文
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  //  ----------------
  //   symbol防止属性名冲突
  const fnSymbol = Symbol()
  //   设置this并调用原函数
  context[fnSymbol] = this
  const res = context[fnSymbol](...args)
  delete context[fnSymbol]
  return res
}

//手写apply()利用symbol优化
Function.prototype.myApply = function (context, args) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  //---------------------------
  //   symbol防止属性名冲突
  const fnSymbol = Symbol()
  //   设置this并调用原函数
  context[fnSymbol] = this
  const res = context[fnSymbol](...args)
  delete context[fnSymbol]
  return res
}

//手写bind()
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  //---------------------------
  const self = this
  return (...newArgs) => {
    return self.call(context, ...args, ...newArgs)
  }
}

//手写bind()
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const self = this
  return function (...newArgs) {
    return self.apply(context, args.concat(newArgs))
  }
}
```

