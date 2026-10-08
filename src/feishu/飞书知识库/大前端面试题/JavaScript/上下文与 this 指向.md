---
title: 上下文与 this 指向
date: '2026-06-12 05:24:35'
updated: '2026-06-12 05:24:43'
---
# 上下文与 this 指向
```javascript
globalThis.a = 100;

function fn() {
    return {
        a: 200,
        m: function() {
            console.log(this.a);
        },
        n: () => {
            console.log(this.a);
        },
        k: function() {
            return function() {
                console.log(this.a)
            }
        }
    };
}

const fn0 = fn();
fn0.m(); // 输出 200, this 指向 {a, m, n}
fn0.n(); // 输出 100, this 指向 globalThis
fn0.k(); // 输出 100, this 指向 globalThis

const context = {a: 300}
const fn1 = fn.call(context); // 改变箭头函数 this 指向
fn1.m(); // 输出 200, this 指向 {a, m, n}
fn1.n(); // 输出 300, this 指向 context
fn1.k().call(context); // 输出 300, this 指向 context
```

- `fn0.m()`：普通函数，`this` 指向调用它的对象 `{a:200, m, n, k}`，因此输出 `200`。

- `fn0.n()`：箭头函数，不绑定自己的 `this`，`this` 继承自外层 `fn` 函数执行时的 `this`。`fn` 在全局执行，`this` 指向 `globalThis`（即 `window` 或 `global`），因此输出 `100`。

- `fn0.k()`：`k` 返回一个普通函数，该函数执行时 `this` 指向全局对象（默认），因此输出 `100`。

- `fn1` 通过 `fn.call(context)` 调用，将 `fn` 内部的 `this` 绑定到 `context`（`{a:300}`）。箭头函数 `n` 的 `this` 会继承 `fn` 的 `this`（即 `context`），所以 `fn1.n()` 输出 `300`。

- `fn1.m()` 仍是对象 `{a:200}` 的方法，`this` 指向该对象，输出 `200`。

- `fn1.k().call(context)`：`k` 返回的普通函数通过 `call(context)` 显式绑定 `this` 为 `context`，输出 `300`。

