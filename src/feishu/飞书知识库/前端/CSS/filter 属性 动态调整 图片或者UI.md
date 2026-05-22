---
title: filter 属性 动态调整 图片或者UI
date: '2026-05-21'
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/CSS
tag:
  - feishu
---
以下是CSS `filter`属性的常用函数总结表，方便快速查阅：
---
### CSS Filter 属性速查表

---
### 组合效果示例
```css
/* 组合使用：降低亮度 + 增加对比度 + 添加阴影 */
.element {
  filter: brightness(0.7) contrast(120%) drop-shadow(2px 2px 4px #333);
}
```
---
### 注意事项
1. **顺序敏感**：多个滤镜按声明顺序从左到右应用。
（例如：`grayscale() → brightness()` 和 `brightness() → grayscale()` 效果不同）

1. **性能**：`blur()` 和 `drop-shadow()` 对性能影响较大，避免在动画中频繁使用。

1. **兼容性**：支持所有现代浏览器，IE不兼容。

---
如果需要更直观的图示，可以结合代码实际运行效果查看（例如通过 [CodePen](https://codepen.io/) 等工具实时调试）。

CSS 的 `filter` 属性用于对元素（通常是图片）应用图形效果（如模糊、亮度调整、颜色转换等）。它通过函数来实现各种视觉效果，可以直接在样式表中使用，无需借助图像编辑软件。
---
### 基本语法
```css
selector {
  filter: <filter-function> [<filter-function>]*;
}
```
多个滤镜函数可以叠加使用，用空格分隔。
---
### 常用滤镜函数
1. **模糊** `blur()`

```css
filter: blur(5px); /* 模糊半径，值越大越模糊 */
```
1. **亮度** `brightness()`

```css
filter: brightness(0.8); /* 0=全黑，1=原图，>1更亮 */
```
1. **对比度** `contrast()`

```css
filter: contrast(150%); /* 100%=原图，值越高对比越强 */
```
1. **阴影** `drop-shadow()`

```css
filter: drop-shadow(2px 2px 5px rgba(0,0,0,0.5)); /* x偏移 y偏移 模糊半径 颜色 */
```
1. **灰度** `grayscale()`

```css
filter: grayscale(100%); /* 0=原图，100%=完全灰度 */
```
1. **色相旋转** `hue-rotate()`

```css
filter: hue-rotate(90deg); /* 颜色相位旋转角度 */
```
1. **反转颜色** `invert()`

```css
filter: invert(100%); /* 0=原图，100%=完全反转 */
```
1. **透明度** `opacity()`

```css
filter: opacity(50%); /* 类似opacity属性，但部分浏览器硬件加速更优 */
```
1. **饱和度** `saturate()`

```css
filter: saturate(200%); /* 100%=原图，值越高越鲜艳 */
```
1. **深褐色（复古）** `sepia()`

```css
filter: sepia(80%); /* 0=原图，100%=完全深褐色 */
```
---
### 组合使用
```css
img {
  filter: brightness(0.7) contrast(120%) saturate(150%);
}
```
---
### 注意事项
1. **性能影响**：某些滤镜（如 `blur()`）可能消耗较多资源，尤其在动画中。

1. **叠加顺序**：滤镜的声明顺序会影响最终效果（从左到右应用）。

1. **兼容性**：现代浏览器普遍支持，但旧版浏览器可能需要前缀（如 `-webkit-filter`）。

1. **与 **`backdrop-filter`** 区别**：`filter` 作用于元素本身，而 `backdrop-filter` 作用于元素背后的区域。

---
### 示例：悬停效果
```css
img {
  transition: filter 0.3s;
}
img:hover {
  filter: grayscale(80%) drop-shadow(0 0 8px #333);
}
```
通过 `filter` 可以快速实现复杂的视觉效果，适合动态调整图片或UI元素的风格。
