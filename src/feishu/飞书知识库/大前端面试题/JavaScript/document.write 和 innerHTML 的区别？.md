---
title: document.write 和 innerHTML 的区别？
date: '2026-06-12 05:07:52'
updated: '2026-06-12 20:25:32'
---
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/SEH9b4LjaoBmY1xrprbczJlIn4g.png)

## 1. 输出位置

- **document.write**: 将内容直接写入到页面的当前位置，会覆盖已存在的内容。如果在页面加载后调用，会覆盖整个页面内容，因此通常不建议在文档加载后使用。

- **innerHTML**: 是 DOM 元素的属性，用于设置或获取元素的 HTML 内容。可用于特定元素，不会覆盖整个页面。
	
## 2. 用法

- **document.write**: 通常用于在页面加载过程中动态生成 HTML 内容。是一种旧的、不太推荐的方法，可能导致页面结构混乱，不易维护。

- **innerHTML**: 通常用于通过 JavaScript 动态更改特定元素的内容。更加灵活，允许以更精确的方式操作 DOM。
	
## 3. DOM 操作

- **document.write**: 不是 DOM 操作，仅用于输出文本到页面。

- **innerHTML**: 是 DOM 操作，允许操作特定元素的内容，包括添加、删除和替换元素的 HTML 内容。

