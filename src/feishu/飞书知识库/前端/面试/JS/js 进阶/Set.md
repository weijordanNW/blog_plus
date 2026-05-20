---
title: Set
date: 2026-05-21
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/面试/JS/js 进阶
tag:
  - feishu
---
### 思维导图
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/QeLCbY7i7oVyHWx5BV8cv6g5nrA.jpeg)

## 介绍
Set方法 数据结构**唯一,不允许有重复的元素**

**创建 : Set()**

增 : **Set.add(value)**

**删 : Set.delete(value) , Set.clear()**

**查 : Set.size ,  Set.has(value)**



遍历器

**Set.keys()**

**Set.values()**

**Set.entries()**



**使用:数组去重**

**...**

**let uniqueArray = [...new Set(array)]**



**或者 Array.from**

**let uniqueArrayFromSet = Array.from(new Set(arrayWithDuplicates));**
## 拓展
`Set` 是 JavaScript ES6 引入的一种新的数据结构，它类似于数组，但与数组不同的是，`Set` 中的元素必须是**唯一**的，即**不允许有重复的元素**。`Set` 提供了一些有用的方法来处理集合数据。

以下是 `Set` 提供的一些主要操作方法：
1. `**Set()**`：创建一个新的 `Set` 实例。

1. `**Set.size**`：返回 `Set` 对象中的元素数量。

1. `**Set.add(value)**`：添加一个元素到 `Set` 对象中。如果元素已存在，则不会重复添加。

1. `**Set.delete(value)**`：移除 `Set` 对象中的指定元素。如果元素存在，则返回 `true`，否则返回 `false`。

1. `**Set.has(value)**`：判断 `Set` 对象是否包含指定的元素。如果包含，返回 `true`，否则返回 `false`。

1. `**Set.clear()**`：移除 `Set` 对象中的所有元素。

1. **遍历器生成函数**：
	- `**Set.keys()**`：返回一个新的迭代器对象，该迭代器包含 `Set` 对象中的所有元素，作为键。
		- `**Set.values()**`：返回一个新的迭代器对象，该迭代器包含 `Set` 对象中的所有元素，作为值。
		- `**Set.entries()**`：返回一个新的迭代器对象，该迭代器包含 `Set` 对象中的所有元素作为 `[key, value]` 对，其中键和值是相同的。
	
1. `**Set.forEach(callback, thisArg)**`：对 `Set` 对象中的每个元素执行一次提供的函数，该函数接受一个参数（元素的值），以及可选的 `this` 上下文。

以下是使用 `Set` 的一些示例：
```javascript
javascript
// 创建一个 Set
let mySet = new Set();

// 添加元素
mySet.add(1);
mySet.add("hello");
mySet.add({ name: "Alice" });

// 检查 Set 中的元素数量
console.log(mySet.size); // 输出: 3

// 检查 Set 是否包含某个元素
console.log(mySet.has(1)); // 输出: true
console.log(mySet.has("hello")); // 输出: true
console.log(mySet.has(2)); // 输出: false

// 删除元素
mySet.delete(1);
console.log(mySet.has(1)); // 输出: false

// 清空 Set
mySet.clear();
console.log(mySet.size); // 输出: 0

// 遍历 Set
mySet.add(1);
mySet.add(2);
mySet.add(3);

for (let number of mySet.keys()) {
  console.log(number); // 输出: 1, 2, 3
}

// 使用 forEach 遍历 Set
mySet.forEach((value) => {
  console.log(value);
});
// 输出: 1, 2, 3
```
`Set` 的主要应用场景包括但不限于：
- 确保数据的唯一性：当需要存储一组不重复的数据时，使用 `Set` 可以自动去除重复项。

- 集合操作：如并集、交集、差集等，可以通过 `Set` 的方法和逻辑来实现。

- 快速查找：`Set` 提供了 `O(1)` 的查找效率，因为 `Set` 是基于哈希表实现的。

`Set` 是处理不包含重复元素的数据集合时的理想选择，它提供了一种简单而高效的方式来管理和操作这些数据。


## 使用
如何使用 Set 来实现数组去重？

使用 `Set` 来实现数组去重是一种非常简洁和高效的方法。由于 `Set` 只能包含唯一的值，我们可以将数组中的所有元素添加到 `Set` 中，然后再将 `Set` 转换回数组。这样，任何重复的元素都会被自动去除。

以下是使用 `Set` 来实现数组去重的步骤：
1. 创建一个空的 `Set` 实例。

1. 使用数组的 `forEach` 方法遍历原数组，将每个元素添加到 `Set` 中。

1. 将 `Set` 转换为数组，可以使用 `Array.from()` 方法或者扩展运算符（`...`）。

下面是具体的代码示例：
```plaintext
javascript
// 假设有一个包含重复元素的数组
let arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 5, 6];

// 使用 Set 来去重
let uniqueArray = [...new Set(arrayWithDuplicates)];

console.log(uniqueArray); // 输出: [1, 2, 3, 4, 5, 6]
```
在这个示例中，我们使用了扩展运算符 `...` 来将 `Set` 转换为数组。这种方法简洁且易于理解。

另外，也可以使用 `Array.from()` 方法来实现相同的功能：
```plaintext
javascript
let uniqueArrayFromSet = Array.from(new Set(arrayWithDuplicates));
console.log(uniqueArrayFromSet); // 输出: [1, 2, 3, 4, 5, 6]
```
使用 `Set` 进行数组去重的优点是代码简洁且执行效率高，特别是对于大型数组来说，这种方法的时间复杂度接近 `O(n)`，其中 `n` 是数组的长度。这是因为 `Set` 的添加操作平均时间复杂度为 `O(1)`。
