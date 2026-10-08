---
title: mouseover 和 mouseenter 的区别
date: '2026-06-12 05:08:20'
updated: '2026-06-12 20:41:29'
---
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/Y8n5bHgftohXe0x0gBMc97BNnLg.png)

- **触发时机**：
	- mouseover：当鼠标指针从一个元素的外部进入到元素的范围内时触发该事件。它会在进入元素内部时触发一次，然后在鼠标在元素内部（有子元素）移动时会多次触发。
		- mouseenter：当鼠标指针从一个元素的外部进入到元素的范围内时触发该事件。不同于 mouseover，mouseenter 只在第一次进入元素内部时触发一次，之后鼠标在元素内部移动不会再次触发。
		
- **冒泡**：
	- mouseover 会冒泡，也就是说当鼠标进入子元素时，父元素的 mouseover 事件也会被触发。
		- mouseenter 不会冒泡，只有在真正进入指定元素时触发。
		
- **应用场景**：
	- mouseover 更常用于需要监听鼠标进入和离开元素的情况，特别是当需要处理子元素的情况。
		- mouseenter 更常用于只需要在鼠标第一次进入元素时触发事件的情况，通常用于菜单、工具提示等需要忽略子元素的场景。
	
