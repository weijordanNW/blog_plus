---
title: Reflect.ownKeys()
date: 2026-05-21
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/面试
tag:
  - feishu
---
[Reflect.ownKeys() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)**Reflect.ownKeys**对对象和数组都能使用



是的，`Reflect.ownKeys` 方法可以对对象和数组使用，因为数组在 JavaScript 中也是对象的一种类型。这个方法返回一个包含目标对象（无论是普通对象还是数组）所有自有属性键的数组，包括：
- 可枚举的属性键

- 不可枚举的属性键

- 符号（Symbol）属性键

这些属性键是对象自身的属性，不包括从原型链上继承的属性。
### 对于普通对象：
```javascript
const obj = { a: 1, b: 2 };
console.log(Reflect.ownKeys(obj)); // ["a", "b"]
```
### 对于数组：
```javascript
const arr = [1, 2, 3];
console.log(Reflect.ownKeys(arr)); // ["0", "1", "2", "length"]
```
在数组的例子中，你可以看到除了数组元素的索引外，`Reflect.ownKeys` 还返回了 `"length"` 属性，这是数组的一个自有属性，它表示数组中元素的数量。

`Reflect.ownKeys` 对于调试和检查对象结构非常有用，尤其是当你需要确保获取到对象的所有自有属性时。
