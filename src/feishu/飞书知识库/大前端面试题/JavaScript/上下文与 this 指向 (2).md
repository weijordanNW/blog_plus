---
title: 上下文与 this 指向 (2)
date: '2026-06-12 05:25:52'
updated: '2026-06-12 05:25:57'
---
# 137. 问题：上下文与 this 指向 (2)

```javascript
let length = 10;
function fn() {
    return this.length + 1
}
const obj = {
    length: 5,
    test1: function() {
        return fn()
    }
}
obj.test2 = fn;

console.log(obj.test1()); // window 的窗口数 (window.length 是页面窗口数量)
console.log(fn() === obj.test2()) // false
```

- `obj.test1()`：`test1` 内部调用 `fn()`，`fn` 是在全局环境下执行（不是作为对象方法调用），因此 `this` 指向全局对象（浏览器中是 `window`）。`window.length` 表示页面中 `<iframe>` 的数量，通常为 `0`（或某个值），故 `obj.test1()` 返回 `window.length + 1`，假设为 `1`（如果 `window.length` 为 `0`）。注意：这里 `let length = 10` 不会影响 `window.length`，因为 `let` 声明的全局变量不会挂载到 `window` 上。

- `fn()` 同样返回 `window.length + 1`。

- `obj.test2()` 是 `fn` 作为 `obj` 的方法调用，`this` 指向 `obj`，返回 `obj.length + 1 = 5 + 1 = 6`。

- 因此 `fn() === obj.test2()` 的比较结果为 `false`（因为 `window.length+1` 不等于 `6`，除非 `window.length` 恰好为 `5`，但通常不是）。

