---
title: script 标签 async 和 defer 的区别
date: '2026-06-12 05:09:59'
updated: '2026-06-12 21:02:37'
---
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/Hmx9bbrM4oh4oTxDt2TczFrTnTc.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/H6FUbwJCpor3x1xrATick6aDndh.png)
- **默认情况（无 async 和 defer 属性）**：如果 `<script>` 标签既没有 `async` 属性，也没有 `defer` 属性，浏览器会按照标签在 HTML 中的顺序，阻塞页面渲染，下载后并同步加载脚本，脚本会阻塞页面的加载和渲染。
	
- **async 属性**：如果 `<script>` 标签带有 `async` 属性，脚本将异步下载并执行，不会阻塞页面的加载和渲染。脚本将在下载完成后立即执行，而不管其在文档中的位置。
	
```html
<script src="example.js" async></script>
```

- **defer 属性**：如果 `<script>` 标签带有 `defer` 属性，脚本也会异步下载，但不会立即执行。它将在文档解析完成后（DOMContentLoaded 事件之前）按照它们在文档中的顺序执行。
	
```html
<script src="example.js" defer></script>
```

- **总结**：如果没有指定 `async` 或 `defer` 属性，脚本默认是同步的，会阻塞页面加载。如果使用 `async` 属性，脚本会异步加载和执行。如果使用 `defer` 属性，脚本也会异步加载，但在文档解析完成后按顺序执行。根据页面性能和脚本执行时的需求，您可以选择适当的属性。

