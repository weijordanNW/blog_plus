---
title: String 的 startwith 和 indexof 两种方法的区别
date: '2026-06-12 05:29:28'
updated: '2026-06-12 05:29:37'
---
# String 的 startwith 和 indexof 两种方法的区别

## startsWith

- 字符串对象的方法，用于检查字符串是否以指定的子字符串开始。

- 返回一个布尔值，如果字符串以指定的子字符串开头，则返回 `true`，否则返回 `false`。

- 可以接受两个参数，第一个参数是要查找的子字符串，第二个参数是可选的，表示开始搜索的位置。
	
```javascript
const str = "Hello, world!";
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("world", 7)); // true (从索引7开始查找)
```

## indexOf

- 字符串对象的方法，用于查找子字符串在字符串中第一次出现的位置。

- 返回子字符串在字符串中的索引位置，如果没有找到子字符串，返回 `-1`。

- 可以接受两个参数，第一个参数是要查找的子字符串，第二个参数是可选的，表示开始搜索的位置。
	
```javascript
const str = "Hello, world!";
console.log(str.indexOf("Hello")); // 0 (子字符串在索引0开始)
console.log(str.indexOf("world", 7)); // 7 (从索引7开始查找)
```

