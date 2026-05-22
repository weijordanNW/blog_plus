---
title: Vue源码里面Keep-alive的原理
date: '2026-05-21'
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/面试/其他
tag:
  - feishu
---
# 1.Vue `keep-alive` 原理 面试笔记
---
## 一、灵魂问题：为什么 `keep-alive` 不会重复创建 / 销毁组件？
### 第一层：本质是什么（源码级一句话）
`keep-alive` 是 Vue 内置的**抽象组件**，它不会渲染成真实 DOM，只负责做**组件实例缓存**，避免组件反复创建 / 销毁，从而提升性能。
---
## 二、核心原理：缓存机制（面试满分答案）
### 底层实现
- 内部用 `Map` 对象缓存组件实例，通过组件的 `key` 匹配缓存。

- 命中缓存时，直接复用实例，跳过 `created` / `mounted` / `destroyed` 等常规生命周期。

### 渲染逻辑
表格

### 专属生命周期
- `activated`：组件**进入缓存并被激活**时触发（首次渲染也会触发）

- `deactivated`：组件**离开缓存并被停用**时触发

---
## 三、关键特性（面试官加分项）
### 核心属性
表格

### 常见使用场景
- 配合 Vue Router 缓存页面，保留表单输入、滚动位置、列表筛选等状态，避免用户重复操作。

---
### 一句话总结
`keep-alive` 是 Vue 提供的组件级缓存方案，通过 `Map` 存储实例、LRU 控制缓存数量，用 `activated`/`deactivated` 替代常规生命周期，实现 “不重复创建 / 销毁” 的性能优化。


# 2.Vue `keep-alive` 面试速记卡片
（直接背，面试张口就来）
---
## 一、核心定位
`keep-alive` 是 Vue 内置的**抽象组件**，不渲染真实 DOM，仅负责**缓存组件实例**，避免组件重复创建 / 销毁，提升性能。
---
## 二、核心原理（缓存机制）
1. **底层实现**：用 `Map` 存储组件实例，通过 `key` 匹配缓存，命中则直接复用。

1. **生命周期变化**：
	- 首次渲染：存入缓存，触发 `created`/`mounted` + `activated`
		- 再次渲染：复用缓存，不触发 `created`/`mounted`，仅触发 `activated`
		- 离开时：不触发 `destroyed`，仅触发 `deactivated`
	
---
## 三、专属生命周期
- `activated`：缓存组件被激活时触发

- `deactivated`：缓存组件被停用时触发

---
## 四、关键属性与策略
表格

---
## 五、一句话总结
`keep-alive` 就是组件的 “缓存池”，通过复用实例、跳过常规生命周期，实现无刷新的页面状态保留与性能优化。




# 3.图
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/ZOTZbNxZ5oAcAQx8vKFcJzWbnob.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/VGYXbbsjjo04xbxdkf8cCy7ynih.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/Cur5bHSFqoCCZNxfNvGcyFK2nSb.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/Mjgvb6NYXo1QWWxmqj3cJxovn0b.png)

![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/DvHEbM5QYoO6uAx61G0cGWWIni4.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/RIxEbmyXmoKFFQxVkf2c4T6oniQ.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/UQqRbsq89ojzeMxTixpcQ9A0nkb.png)

