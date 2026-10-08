---
title: 'bind, apply, call 的区别, 及内在实现'
date: '2026-06-12 05:17:54'
updated: '2026-06-13 01:00:49'
---
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/FFdcbSaCYoGNhWxhrfbc89Cvnwe.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/FDcQbfThgo85Ccxk4g0cCBmaniw.png)

## 区别总结


| 方法      | 调用时机        | 参数形式                                | 返回值             |
| ------- | ----------- | ----------------------------------- | --------------- |
| `call`  | 立即执行函数      | 参数列表 `(thisArg, arg1, arg2, ...)`   | 函数执行结果          |
| `apply` | 立即执行函数      | 参数数组 `(thisArg, [arg1, arg2, ...])` | 函数执行结果          |
| `bind`  | 返回新函数，不立即执行 | 参数列表 `(thisArg, arg1, arg2, ...)`   | 绑定了 `this` 的新函数 |


## call 方法模拟实现

```javascript
Function.prototype.myCall = function (context, ...args) {
    context = context || window; // 如果没有传入上下文，则默认为全局对象
    const uniqueID = Symbol(); // 创建一个唯一的键，以避免属性名冲突
    context[uniqueID] = this; // 在上下文中添加一个属性，将函数赋值给这个属性
    const result = context[uniqueID](...args); // 调用函数
    delete context[uniqueID]; // 删除属性
    return result; // 返回函数执行的结果
};

function greet(message) {
    console.log(`${message}, ${this.name}!`);
}

const person = {
    name: 'Alice',
};

greet.myCall(person, 'Hello'); // 输出 "Hello, Alice!"

// 原生方法
greet.call(person, 'Hello'); // 输出 "Hello, Alice!"
```

## apply 方法模拟实现

```javascript
Function.prototype.myApply = function (context, args) {
    context = context || window;
    const uniqueID = Symbol();
    context[uniqueID] = this;
    const result = context[uniqueID](...args);
    delete context[uniqueID];
    return result;
};

function greet(message) {
    console.log(`${message}, ${this.name}!`);
}

const person = {
    name: 'Alice',
};

greet.myApply(person, ['Hi']); // 输出 "Hi, Alice!"

// 原生方法
greet.apply(person, ['Hi']); // 输出 "Hi, Alice!"
```

## bind 方法模拟实现

```javascript
Function.prototype.myBind = function (context, ...args) {
    const func = this;
    return function (...newArgs) {
        return func.apply(context, args.concat(newArgs));
    };
};

function greet(message) {
    console.log(`${message}, ${this.name}!`);
}

const person = {
    name: 'Alice',
};

const myBoundGreet = greet.myBind(person, 'Hey');
myBoundGreet(); // 输出 "Hey, Alice!"

// 原生方法
const boundGreet = greet.bind(person, 'Hey');
boundGreet(); // 输出 "Hey, Alice!"
```

