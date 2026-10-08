---
title: Symbol 特性与作用
date: '2026-06-12 05:28:08'
updated: '2026-06-12 05:28:14'
---
# Symbol 特性与作用

1. 唯一性：每个 Symbol 值都是唯一的，即使它们具有相同的描述字符串，它们也不相等。
	
1. 不可枚举：Symbol 类型的属性通常是不可枚举的，这意味着它们不会出现在 for...in 循环中。
	
1. 用作属性名：主要用途是作为对象属性的键，以确保属性的唯一性。
	
```javascript
const mySymbol = Symbol("mySymbol");
const obj = {
    [mySymbol]: "这是Symbol作为属性名的值"
};
```

1. Symbol 常量：在代码中，可以使用 Symbol 来定义常量，以避免意外的值修改。
	
```javascript
const COLOR_RED = Symbol("red");
const COLOR_GREEN = Symbol("green");
```

