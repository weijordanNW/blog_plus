---
title: 上下文与 this 指向（1）
date: '2026-06-12 05:25:19'
updated: '2026-06-12 05:25:26'
---
# 上下文与 this 指向（1）

```javascript
var name = 'window'

const person1 = {
    name: 'person1',
    foo1: function() {
        console.log(this.name)
    },
    foo2: () => {
        console.log(this.name)
    },
    foo3: function() {
        return function() {
            console.log(this.name)
        }
    }
}

const person2 = {
    name: 'person2'
}

person1.foo1()                      // person1
person1.foo1.call(person2)          // person2
person1.foo2()                      // window
person1.foo2.call(person2)          // window
person1.foo3()()                    // window
person1.foo3.call(person2)()        // window
```

- `person1.foo1()`：普通函数，`this` 指向调用者 `person1`，输出 `'person1'`。

- `person1.foo1.call(person2)`：通过 `call` 将 `this` 绑定到 `person2`，输出 `'person2'`。

- `person1.foo2()`：箭头函数，不绑定自己的 `this`，`this` 继承自外层作用域（全局），输出 `'window'`。

- `person1.foo2.call(person2)`：箭头函数的 `this` 无法通过 `call`/`apply`/`bind` 改变，仍然继承外层作用域，输出 `'window'`。

- `person1.foo3()()`：`foo3` 返回一个普通函数，该函数在全局执行，`this` 指向全局对象，输出 `'window'`。

- `person1.foo3.call(person2)()`：`call(person2)` 将 `foo3` 内部的 `this` 绑定为 `person2`，但返回的函数仍然在全局执行，`this` 指向全局，输出 `'window'`。

