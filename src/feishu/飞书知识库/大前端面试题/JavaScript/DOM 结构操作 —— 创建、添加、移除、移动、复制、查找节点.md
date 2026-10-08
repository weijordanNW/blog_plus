---
title: DOM 结构操作 —— 创建、添加、移除、移动、复制、查找节点
date: '2026-06-12 04:55:58'
updated: '2026-06-12 05:27:35'
---
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/LhINba7e7oUJVQxHcHbcHDwhnY3.png)

---
## 1. 创建节点

```javascript
// 创建新元素节点
const newElement = document.createElement("div");

// 创建文本节点
const textNode = document.createTextNode("Hello, World");

// 创建文档片段
const fragment = document.createDocumentFragment();
```

## 2. 添加节点

```javascript
// 创建新元素节点
const newElement = document.createElement("div");

// 添加为子节点
parentElement.appendChild(newElement);

// 在参考节点之前插入
parentElement.insertBefore(newElement, referenceElement);
```

## 3. 移除节点

```javascript
// 从父节点中移除子节点
parentElement.removeChild(childElement);
```

## 4. 移动节点

```javascript
// 移动节点到新位置（本质是移除后添加到新父节点）
newParentElement.appendChild(childElement);
```

## 5. 复制节点

```javascript
// 复制节点（参数 true 表示深拷贝，包括子节点）
const clone = originalNode.cloneNode(true);
```

## 6. 查找节点

```javascript
// 通过 id 查找元素
const element = document.getElementById("myElement");

// 使用 CSS 选择器查找元素
const element = document.querySelector(".myClass");

// 使用节点遍历方法查找节点
const firstChild = parentElement.firstChild;
```

---
