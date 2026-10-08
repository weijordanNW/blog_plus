---
title: Promise
date: '2026-06-12 05:12:14'
updated: '2026-07-03 11:27:22'
---
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/Vvvjbk7zVo1sZhxjx45ceIafnYf.png)


Promise 是 JavaScript 中处理异步操作的一种模式和对象，它提供了一种更优雅的方式来处理异步代码，尤其是处理回调地狱（callback hell）问题。


## Promise 的三种状态

- **Pending（进行中）**：Promise 的初始状态，表示异步操作尚未完成，也不失败。

- **Fulfilled（已完成）**：表示异步操作成功完成，其结果值可用。

- **Rejected（已失败）**：表示异步操作失败，包含失败的原因。
	
## 基本用法

```javascript
const myPromise = new Promise((resolve, reject) => {
    // 异步操作的代码，成功时调用 resolve，失败时调用 reject
});
```

## 模拟实现

```javascript
function MyPromise(executor) {
    // 初始化Promise的状态和结果
    this._state = 'pending';
    this._value = undefined;

    // 回调函数数组，用于存储成功和失败回调
    this._callbacks = [];

    // 定义resolve函数，用于将Promise状态从pending变为fulfilled
    const resolve = (value) => {
        if (this._state === 'pending') {
            this._state = 'fulfilled';
            this._value = value;
            this._callbacks.forEach((callback) => {
                callback.onFulfilled(value);
            });
        }
    };

    // 定义reject函数，用于将Promise状态从pending变为rejected
    const reject = (reason) => {
        if (this._state === 'pending') {
            this._state = 'rejected';
            this._value = reason;
            this._callbacks.forEach((callback) => {
                callback.onRejected(reason);
            });
        }
    };

    // 执行executor函数，传入resolve和reject作为参数
    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    if (this._state === 'fulfilled') {
        onFulfilled(this._value);
    } else if (this._state === 'rejected') {
        onRejected(this._value);
    } else if (this._state === 'pending') {
        this._callbacks.push({
            onFulfilled,
            onRejected,
        });
    }
};

// 示例用法
const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("成功！");
    }, 1000);
});

promise.then(
    (result) => {
        console.log("成功：" + result);
    },
    (error) => {
        console.log("失败：" + error);
    }
);
```

