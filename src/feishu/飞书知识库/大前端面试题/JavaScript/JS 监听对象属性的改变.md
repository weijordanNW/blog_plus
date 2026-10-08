---
title: JS 监听对象属性的改变
date: '2026-06-12 05:20:56'
updated: '2026-06-13 02:48:41'
---
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/AtWhbOBt8olhYxxgtk3cQRODnAU.png)
## Object.defineProperty

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
};

// 监听属性 "firstName"
Object.defineProperty(person, "firstName", {
    get() {
        return this._firstName;
    },
    set(value) {
        this._firstName = value;
        console.log(`firstName 改变为: ${value}`);
    },
    configurable: true,
});

// 修改属性 "firstName" 会触发监听
person.firstName = "Alice"; // 输出: "firstName 改变为: Alice"
```

## Proxy

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
};

const handler = {
    get(target, property) {
        console.log(`访问了属性 ${property}`);
        return target[property];
    },
    set(target, property, value) {
        console.log(`设置属性 ${property} 为 ${value}`);
        target[property] = value;
        return true;
    },
};

const proxyPerson = new Proxy(person, handler);
console.log(proxyPerson.firstName); // 输出: "John"
proxyPerson.lastName = "Smith"; // 输出: "设置属性 lastName 为 Smith"
```

