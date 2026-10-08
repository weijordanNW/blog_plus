---
title: ES6 的继承和 ES5 的继承的区别
date: '2026-06-12 05:11:27'
updated: '2026-07-03 11:20:59'
---
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/BBVjbRTI9o2MqIxDdCec6Ufpnib.png)

## ES6 类继承


ES6 引入了 `class` 和 `extends` 关键字，使得创建类和继承更加直观。


- **构造函数**：通过 `constructor` 定义初始化逻辑，使用 `super` 调用父类构造函数。

- **方法定义**：方法直接定义在类内部，无需操作原型链。

- **super 关键字**：用于在子类中调用父类的方法（构造函数和普通方法）。
	
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a sound');
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    speak() {
        console.log(this.name + ' barks');
    }
}

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak(); // 输出 "Buddy barks"
```

## ES5 原型继承

### 1. 原型链继承

```javascript
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    console.log(this.name + ' makes a sound');
};

function Dog(breed) {
    this.breed = breed;
}
Dog.prototype = new Animal('Unknown');

var myDog = new Dog('Golden Retriever');
myDog.speak(); // 输出 "Unknown makes a sound"
```


**缺点**：
- 属性共享：父类实例属性（尤其是引用类型）会被所有子类实例共享。

- 无法向父类构造函数传递参数。
	
### 2. 构造函数继承

```javascript
function Animal(name) {
    this.name = name;
}
function Dog(name, breed) {
    Animal.call(this, name); // 继承属性
    this.breed = breed;
}

var myDog = new Dog('Buddy', 'Golden Retriever');
console.log(myDog.name); // 输出 "Buddy"
```


**缺点**：
- 无法继承父类原型上的方法。

- 方法无法共享，导致内存浪费（每个实例都复制属性）。
	
### 3. 寄生组合继承（推荐）


结合构造函数继承（属性）和原型链继承（方法），避免了上述缺点。


```javascript
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    console.log(this.name + ' makes a sound');
};

function Dog(name, breed) {
    Animal.call(this, name);  // 继承属性
    this.breed = breed;
}

// 继承原型
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // 修复 constructor 引用

Dog.prototype.speak = function() {
    console.log(this.name + ' barks');
};

var myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak(); // 输出 "Buddy barks"
```

## 区别总结


| 特性     | ES6 类继承        | ES5 寄生组合继承                        |
| ------ | -------------- | --------------------------------- |
| 语法简洁度  | 更简洁直观          | 较繁琐                               |
| 构造函数调用 | `super()`      | `Parent.call(this)`               |
| 原型链设置  | 自动通过 `extends` | `Object.create(Parent.prototype)` |
| 方法定义   | 类内部直接定义        | 需手动添加到原型                          |
| 本质     | 语法糖，底层仍是原型链    | 手动实现的原型链组合                        |


