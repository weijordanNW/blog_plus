---
title: Reflect
date: 2026-05-21
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/面试
tag:
  - feishu
---
[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

拓展
# Reflect
## Baseline Widely available
**Reflect** 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与 [proxy handler](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) 的方法相同。`Reflect` 不是一个函数对象，因此它是不可构造的。
## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect#%E6%8F%8F%E8%BF%B0)
与大多数全局对象不同 `Reflect` 并非一个构造函数，所以不能通过 [new 运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)对其进行调用，或者将 `Reflect` 对象作为一个函数来调用。`Reflect` 的所有属性和方法都是静态的（就像 [Math](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math) 对象）。

`Reflect` 对象提供了以下静态方法，这些方法与 [proxy handler 方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)的命名相同。
## [静态方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect#%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95)
[Reflect.apply(target,thisArgument,argumentsList)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply)

对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和 [Function.prototype.apply()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 功能类似。

[Reflect.construct(target,argumentsList[,newTarget])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct)

对构造函数进行 [new](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 操作，相当于执行 `new target(...args)`。

[Reflect.defineProperty(target,propertyKey,attributes)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty)

和 [Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 类似。如果设置成功就会返回 `true`

[Reflect.deleteProperty(target,propertyKey)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty)

作为函数的[delete](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)操作符，相当于执行 `delete target[name]`。

[Reflect.get(target,propertyKey[,receiver])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get)

获取对象身上某个属性的值，类似于 `target[name]`。

[Reflect.getOwnPropertyDescriptor(target,propertyKey)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor)

类似于 [Object.getOwnPropertyDescriptor()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)。如果对象中存在该属性，则返回对应的属性描述符，否则返回 [undefined](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。

[Reflect.getPrototypeOf(target)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf)

类似于 [Object.getPrototypeOf()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)。

[Reflect.has(target, propertyKey)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has)

判断一个对象是否存在某个属性，和 [in运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 的功能完全相同。

[Reflect.isExtensible(target)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible)

类似于 [Object.isExtensible()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible).

[Reflect.ownKeys(target)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)

返回一个包含所有自身属性（不包含继承属性）的数组。(类似于 [Object.keys()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), 但不会受`enumerable` 影响).

[Reflect.preventExtensions(target)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions)

类似于 [Object.preventExtensions()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)。返回一个[Boolean](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)。

[Reflect.set(target,propertyKey,value[,receiver])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set)

将值分配给属性的函数。返回一个[Boolean](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)，如果更新成功，则返回`true`。

[Reflect.setPrototypeOf(target,prototype)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf)

设置对象原型的函数。返回一个 [Boolean](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)，如果更新成功，则返回 `true`。
## [Examples](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect#examples)
### [检测一个对象是否存在特定属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect#%E6%A3%80%E6%B5%8B%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%E6%98%AF%E5%90%A6%E5%AD%98%E5%9C%A8%E7%89%B9%E5%AE%9A%E5%B1%9E%E6%80%A7)
```plaintext
const duck = {
  name: 'Maurice',
  color: 'white',
  greeting: function() {
    console.log(`Quaaaack! My name is ${this.name}`);
  }
}

Reflect.has(duck, 'color');
// true
Reflect.has(duck, 'haircut');
// false
```
### [返回这个对象自身的属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect#%E8%BF%94%E5%9B%9E%E8%BF%99%E4%B8%AA%E5%AF%B9%E8%B1%A1%E8%87%AA%E8%BA%AB%E7%9A%84%E5%B1%9E%E6%80%A7)
```plaintext
Reflect.ownKeys(duck);
// [ "name", "color", "greeting" ]
```
### [为这个对象添加一个新的属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect#%E4%B8%BA%E8%BF%99%E4%B8%AA%E5%AF%B9%E8%B1%A1%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9A%84%E5%B1%9E%E6%80%A7)
```plaintext
Reflect.set(duck, 'eyes', 'black');
// returns "true" if successful
// "duck" now contains the property "eyes: 'black'"
```

