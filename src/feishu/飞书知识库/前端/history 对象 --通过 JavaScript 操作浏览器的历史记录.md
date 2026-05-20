---
title: 通过
date: 2026-05-21
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端
tag:
  - feishu
---
在前端开发中，`history` 对象是 Web API 的一部分，提供了与浏览器历史记录交互的方法。它允许开发者在不重新加载页面的情况下，通过 JavaScript 操作浏览器的历史记录。以下是一些常用的 `history` 方法：
1. `history.pushState(state, title, url)`:
	- 向浏览器历史记录添加一个新的记录。
		- `state`: 一个与历史记录条目相关联的状态对象。
		- `title`: 新的历史记录条目的标题（目前大多数浏览器忽略此参数）。
		- `url`: 要添加到历史记录的 URL。
	
1. `history.replaceState(state, title, url)`:
	- 替换当前历史记录条目的状态对象。
		- 参数与 `pushState` 相同，但是它不会创建新的历史记录条目，而是替换当前条目。
	
1. `history.popState(event)`:
	- 当浏览器历史记录的条目发生变化时，会触发 `popstate` 事件。
		- `event.state`: 包含历史记录条目的状态对象。
	
1. `history.back()`:
	- 相当于点击浏览器的后退按钮，浏览器会返回到上一个历史记录条目。
	
1. `history.forward()`:
	- 相当于点击浏览器的前进按钮，浏览器会前进到下一个历史记录条目。
	
1. `history.go(delta)`:
	- 跳转到与当前页面相隔 `delta` 个历史记录条目的页面。
		- `delta` 可以是正数、负数或零。正数表示向前跳转，负数表示向后跳转。
	
使用 `history` 对象可以创建单页面应用（SPA），通过 JavaScript 动态更新页面内容，而不需要重新加载整个页面。这提高了用户体验，因为页面的交互更加流畅。
