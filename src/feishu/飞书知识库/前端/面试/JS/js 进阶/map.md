---
title: map
date: 2026-05-21
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/面试/JS/js 进阶
tag:
  - feishu
---
[原语雀文档](https://www.yuque.com/ziming-rrjvu/lfc7ip/ibox5ang1uz74k3c)
### 思维导图
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/S4rkbKViWoE3CQxFyuScwThunCd.jpeg)
### 实际上Map是一个数组，它的每一个数据也都是一个数组，其形式如下：
```plaintext
const map = [
     ["name","张三"],
     ["age",18],
]
```

### 1.Map数据结构的操作方法
增 : **set(key,value)**

**删 : delete(key) , clear()**

**查 : size , get(key) , has(key)**


- **size**： `map.size` 返回Map结构的成员总数。

- **set(key,value)**：设置键名key对应的键值value，然后返回整个Map结构，如果key已经有值，则键值会被更新，否则就新生成该键。（因为返回的是当前Map对象，所以可以链式调用）

- **get(key)**：该方法读取key对应的键值，如果找不到key，返回undefined。

- **has(key)**：该方法返回一个布尔值，表示某个键是否在当前Map对象中。

- **delete(key)**：该方法删除某个键，返回true，如果删除失败，返回false。

- **clear()**：map.clear()清除所有成员，没有返回值。



拓展

JavaScript 的 `Map` 数据结构是一种集合类型，它存储键值对的集合，其中键可以是任意类型。`Map` 对象提供了一些内置的方法来操作和遍历这些键值对。以下是 `Map` 数据结构提供的一些主要操作方法和遍历器生成函数：
1. `Map.size`：返回 `Map` 对象中的元素数量。

1. `Map.get(key)`：返回 `Map` 对象中与指定键关联的值。

1. `Map.set(key, value)`：将一个键值对添加到 `Map` 对象中。如果键已经存在，则会更新其关联的值。

1. `Map.has(key)`：如果 `Map` 对象中存在与指定键关联的值，则返回 `true`，否则返回 `false`。

1. `Map.delete(key)`：如果 `Map` 对象中存在与指定键关联的值，则删除该键值对并返回 `true`，否则返回 `false`。

1. `Map.clear()`：移除 `Map` 对象中的所有键值对。

1. **遍历器生成函数**：
	- `Map.keys()`：返回一个新的迭代器对象，该迭代器包含 `Map` 对象中的所有键。
		- `Map.values()`：返回一个新的迭代器对象，该迭代器包含 `Map` 对象中的所有值。
		- `Map.entries()`：返回一个新的迭代器对象，该迭代器包含 `Map` 对象中的所有键值对数组（每个键值对是一个数组，其中第一个元素是键，第二个元素是值）。
	
1. `Map.forEach(callback, thisArg)`：对 `Map` 对象中的每个值执行一次提供的函数，该函数接受三个参数：值、键和 `Map` 对象本身。如果提供了 `thisArg` 参数，它会被用作回调函数的 `this` 值。

以下是使用这些方法的一些示例：
```javascript
let map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');

console.log(map.size); // 输出: 2

console.log(map.get('key1')); // 输出: 'value1'
console.log(map.has('key2')); // 输出: true

map.delete('key1');
console.log(map.has('key1')); // 输出: false

for (let key of map.keys()) {
  console.log(key); // 输出: 'key2'
}

for (let value of map.values()) {
  console.log(value); // 输出: 'value2'
}

for (let [key, value] of map.entries()) {
  console.log(key, value); // 输出: 'key2' 'value2'
}

map.forEach((value, key) => {
  console.log(key, value);
});
// 输出: 'key2' 'value2'
```
`Map` 对象是JavaScript ES6 引入的新特性，它提供了一种更灵活和功能丰富的方式去存储键值对，特别是当键不是字符串或数字时。


### 2.Map结构原生提供是三个遍历器生成函数和一个遍历方法
- keys()：返回键名的遍历器。

- values()：返回键值的遍历器。

- entries()：返回所有成员的遍历器。

- forEach()：遍历Map的所有成员。

### map和weakMap的区别


**（1）Map**



map本质上就是键值对的集合，但是普通的Object中的键值对中的键只能是字符串。而ES6提供的Map数据结构类似于对象，但是它的键不限制范围，可以是任意类型，是一种更加完善的Hash结构。如果Map的键是一个原始数据类型，只要两个键严格相同，就视为是同一个键。

实际上Map是一个数组，它的每一个数据也都是一个数组，其形式如下：
```plaintext
const map = [
     ["name","张三"],
     ["age",18],
]
```


Map数据结构有以下操作方法：
- **size**： `map.size` 返回Map结构的成员总数。

- **set(key,value)**：设置键名key对应的键值value，然后返回整个Map结构，如果key已经有值，则键值会被更新，否则就新生成该键。（因为返回的是当前Map对象，所以可以链式调用）

- **get(key)**：该方法读取key对应的键值，如果找不到key，返回undefined。

- **has(key)**：该方法返回一个布尔值，表示某个键是否在当前Map对象中。

- **delete(key)**：该方法删除某个键，返回true，如果删除失败，返回false。

- **clear()**：map.clear()清除所有成员，没有返回值。



Map结构原生提供是三个遍历器生成函数和一个遍历方法
- keys()：返回键名的遍历器。

- values()：返回键值的遍历器。

- entries()：返回所有成员的遍历器。

- forEach()：遍历Map的所有成员。


```plaintext
const map = new Map([
     ["foo",1],
     ["bar",2],
])
for(let key of map.keys()){
    console.log(key);  // foo bar
}
for(let value of map.values()){
     console.log(value); // 1 2
}
for(let items of map.entries()){
    console.log(items);  // ["foo",1]  ["bar",2]
}
map.forEach( (value,key,map) => {
     console.log(key,value); // foo 1    bar 2
})
```


**（2）WeakMap**



WeakMap 对象也是一组键值对的集合，其中的键是弱引用的。**其键必须是对象**，原始数据类型不能作为key值，而值可以是任意的。



该对象也有以下几种方法：
- **set(key,value)**：设置键名key对应的键值value，然后返回整个Map结构，如果key已经有值，则键值会被更新，否则就新生成该键。（因为返回的是当前Map对象，所以可以链式调用）

- **get(key)**：该方法读取key对应的键值，如果找不到key，返回undefined。

- **has(key)**：该方法返回一个布尔值，表示某个键是否在当前Map对象中。

- **delete(key)**：该方法删除某个键，返回true，如果删除失败，返回false。



其clear()方法已经被弃用，所以可以通过创建一个空的WeakMap并替换原对象来实现清除。

WeakMap的设计目的在于，有时想在某个对象上面存放一些数据，但是这会形成对于这个对象的引用。一旦不再需要这两个对象，就必须手动删除这个引用，否则垃圾回收机制就不会释放对象占用的内存。

而WeakMap的**键名所引用的对象都是弱引用**，即垃圾回收机制不将该引用考虑在内。因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。也就是说，一旦不再需要，WeakMap 里面的**键名对象和所对应的键值对会自动消失，不用手动删除引用**。



**总结：**


- Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

- WeakMap 结构与 Map 结构类似，也是用于生成键值对的集合。但是 WeakMap 只接受对象作为键名（ null 除外），不接受其他类型的值作为键名。而且 WeakMap 的键名所指向的对象，不计入垃圾回收机制。


### map常见的使用场景
1. `map` 方法在JavaScript中主要用于遍历数组并对每个元素执行一个操作，然后返回一个新的数组。以下是一些常见的 `map` 操作示例：

1. **数值变换**：对数组中的每个数字进行数学运算，如平方、乘以常数等。

```plaintext
javascript
let numbers = [1, 2, 3, 4];
let squares = numbers.map(num => num * num);
```
1. **对象属性提取**：从数组中的对象元素中提取特定属性。

```plaintext
javascript
let users = [{name: "Alice", age: 25}, {name: "Bob", age: 30}];
let names = users.map(user => user.name);
```
1. **布尔值转换**：根据条件将数组元素转换为布尔值。

```plaintext
javascript
let nums = [1, 0, 2, 0, 3];
let bools = nums.map(num => num > 0);
```
1. **字符串操作**：对数组中的字符串元素进行操作，如转换为大写、添加前缀等。

```plaintext
javascript
let words = ["hello", "world"];
let upperWords = words.map(word => word.toUpperCase());
```
1. **日期处理**：对日期数组进行格式化或提取特定部分。

```plaintext
javascript
let dates = [new Date(2021, 0, 1), new Date(2021, 1, 1)];
let formattedDates = dates.map(date => date.toLocaleDateString());
```
1. **创建新对象**：基于现有数组元素创建具有不同结构的新对象数组。

```plaintext
javascript
let items = ["apple", "banana", "cherry"];
let newItems = items.map(item => ({ name: item, inStock: true }));
```
1. **函数应用**：对数组中的每个元素应用一个函数。

```plaintext
javascript
function increment(x) { return x + 1; }
let numbers = [1, 2, 3];
let incremented = numbers.map(increment);
```
1. **链式调用**：`map` 可以与其他数组方法如 `filter` 和 `reduce` 结合使用，进行复杂的数据转换。

```plaintext
javascript
let filteredAndMapped = [1, 2, 3, 4].filter(x => x > 1).map(x => x * 2);
```
1. **扁平化数组**：将嵌套数组扁平化为一个单一数组。

```plaintext
javascript
let nestedArray = [[1, 2], [3, 4]];
let flatArray = nestedArray.map(innerArray => innerArray.flat());
```
1. **转换为不同的数据类型**：将数组元素转换为不同的数据类型，如从数字到字符串。

```plaintext
javascript
let numbers = [1, 2, 3];
let strings = numbers.map(num => num.toString());
```
`map` 方法是不可变的，意味着它不会改变原始数组，而是返回一个新数组，这对于保持数据的不变性和函数式编程范式非常重要。
