---
title: Promise
date: '2026-05-21'
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/面试/JS/js 基础
tag:
  - feishu
---
## 思维导图
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/IkQ8bgFjSob8eQxGQSWcTXZOn6g.jpeg)
---
### 1.Promise.all()介绍-面试解析


①第一步需要**返回一个promise实例,**

这样呢就可以通过then方法获取兑现和拒绝的原因

②接着在**内部需要做两个判断**

第一个是判断**是否为数组**,不是的话直接报错

③第二个是**空数组直接兑现**(promises.length===0)**,**就是直接用空数组作为兑现的原因

这三步是我的基础逻辑,接下来是我们最核心的逻辑了-**处理全部兑现**

首先呢,我们需要**遍历这个数组**,去依次拿到其中的每一项

然后通过**resolve函数包装**一下,

然后在**第一个回调函数里面,去获取兑现的结果**

在第**二个回调函数里面获取我们拒绝的原因**

首先来看处理全部兑现

第一步要 : **记录结果**:这里要**通过索引index来记录**,保证结果的顺序和promise数组的顺序一致,这是第一个重点

接下来是 : **判断全部兑现** : 这里要记住不能通过长度来判断,因为不准确,

要**通过兑现的次数来进行判断**,保证可以**获取到所有的结果**

接下来就是**处理第一个拒绝** : 只要有第一个拒绝,直接调用reject函数将拒绝的原因返回这个promise的实例就可以了
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/Q9yAboInCofJ7fx2tAicKSbnnOd.png)
```javascript
static all(promises) {
  // 返回一个promise实例
  return new MyPromise(resolve,reject=>{
    // 判断是否为数组
    if(!Array.isArray(promises)){
      return reject(new TypeError('promises must be an array'))
    }
    // 空数组直接兑现
    promises.length === 0 && resolve(promises)

    // 处理全部兑现
    const results = []
    let count = 0
    // 遍历promises
    promises.forEach((p,index)=>{
      // 用resolve处理MyPromise
      MyPromise.resolve(p).then
      res=>{
        results[index] = res
        count++
        count === promises.length && resolve(results)
      }
      err=>{
        reject(err)
      }
    })

  })
}
```


.then 这个回调函数属于微任务，会在本轮事件循环的末尾执行。

**（1）call 函数的实现步骤：**
- 判断调用对象是否为函数，即使是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。

- 判断传入上下文对象是否存在，如果不存在，则设置为 window 。

- 处理传入的参数，截取第一个参数后的所有参数。

- 将函数作为上下文对象的一个属性。

- 使用上下文对象来调用这个方法，并保存返回结果。

- 删除刚才新增的属性。

- 返回结果。

```javascript
Function.prototype.myCall = function(context) {
  // 判断调用对象
  if (typeof this !== "function") {
    console.error("type error");
  }
  // 获取参数
  let args = [...arguments].slice(1),
    result = null;
  // 判断 context 是否传入，如果未传入则设置为 window
  context = context || window;
  // 将调用函数设为对象的方法
  context.fn = this;
  // 调用函数
  result = context.fn(...args);
  // 将属性删除
  delete context.fn;
  return result;
};
```


**（2）apply 函数的实现步骤：**
- 判断调用对象是否为函数，即使是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。

- 判断传入上下文对象是否存在，如果不存在，则设置为 window 。

- 将函数作为上下文对象的一个属性。

- 判断参数值是否传入

- 使用上下文对象来调用这个方法，并保存返回结果。

- 删除刚才新增的属性

- 返回结果

```javascript
Function.prototype.myApply = function(context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  let result = null;
  // 判断 context 是否存在，如果未传入则为 window
  context = context || window;
  // 将函数设为对象的方法
  context.fn = this;
  // 调用方法
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  // 将属性删除
  delete context.fn;
  return result;
};
```


**（3）bind 函数的实现步骤：**
- 判断调用对象是否为函数，即使是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。

- 保存当前函数的引用，获取其余传入参数值。

- 创建一个函数返回

- 函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传入指定的上下文对象。

```javascript
Function.prototype.myBind = function(context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  // 获取参数
  var args = [...arguments].slice(1),
    fn = this;
  return function Fn() {
    // 根据调用方式，传入不同绑定值
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};
```

### 对Promise的理解
Promise是异步编程的一种解决方案，它是一个对象，可以获取异步操作的消息，他的出现大大改善了异步编程的困境，避免了地狱回调，它比传统的解决方案回调函数和事件更合理和更强大。

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

（1）Promise的实例有**三个状态**:
- Pending（进行中）

- Resolved（已完成）

- Rejected（已拒绝）

当把一件事情交给promise时，它的状态就是Pending，任务完成了状态就变成了Resolved、没有完成失败了就变成了Rejected。

（2）Promise的实例有**两个过程**：
- pending -> fulfilled : Resolved（已完成）

- pending -> rejected：Rejected（已拒绝）

注意：一旦从进行状态变成为其他状态就永远不能更改状态了。

**Promise的特点：**
- 对象的状态不受外界影响。promise对象代表一个异步操作，有三种状态，pending（进行中）、fulfilled（已成功）、rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态，这也是promise这个名字的由来——“**承诺**”；

- 一旦状态改变就不会再变，任何时候都可以得到这个结果。promise对象的状态改变，只有两种可能：从pending变为fulfilled，从pending变为rejected。这时就称为resolved（已定型）。如果改变已经发生了，你再对promise对象添加回调函数，也会立即得到这个结果。这与事件（event）完全不同，事件的特点是：如果你错过了它，再去监听是得不到结果的。

**Promise的缺点：**
- 无法取消Promise，一旦新建它就会立即执行，无法中途取消。

- 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。

- 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

**总结：** Promise 对象是异步编程的一种解决方案，最早由社区提出。Promise 是一个构造函数，接收一个函数作为参数，返回一个 Promise 实例。一个 Promise 实例有三种状态，分别是pending、resolved 和 rejected，分别代表了进行中、已成功和已失败。实例的状态只能由 pending 转变 resolved 或者rejected 状态，并且状态一经改变，就凝固了，无法再被改变了。

状态的改变是通过 resolve() 和 reject() 函数来实现的，可以在异步操作结束后调用这两个函数改变 Promise 实例的状态，它的原型上定义了一个 then 方法，使用这个 then 方法可以为两个状态的改变注册回调函数。这个回调函数属于微任务，会在本轮事件循环的末尾执行。

**注意：** 在构造 Promise 的时候，构造函数内部的代码是立即执行的


### Promise的基本用法

#### （1）创建Promise对象
Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。

Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。
```plaintext
const promise = new Promise(function(resolve, reject) {
  // ... some code
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```


**一般情况下都会使用**new Promise()**来创建promise对象，但是也可以使用**promise.resolve**和**promise.reject**这两个方法：**
- **Promise.resolve**

Promise.resolve(value)的返回值也是一个promise对象，可以对返回值进行.then调用，代码如下：
```plaintext
Promise.resolve(11).then(function(value){
  console.log(value); // 打印出11
});
```


resolve(11)代码中，会让promise对象进入确定(resolve状态)，并将参数11传递给后面的then所指定的onFulfilled 函数；

创建promise对象可以使用new Promise的形式创建对象，也可以使用Promise.resolve(value)的形式创建promise对象；
- **Promise.reject**

Promise.reject 也是new Promise的快捷形式，也创建一个promise对象。代码如下：
```plaintext
Promise.reject(new Error(“我错了，请原谅俺！！”));
```


就是下面的代码new Promise的简单形式：
```plaintext
new Promise(function(resolve,reject){
   reject(new Error("我错了！"));
});
```


下面是使用resolve方法和reject方法：
```plaintext
function testPromise(ready) {
  return new Promise(function(resolve,reject){
    if(ready) {
      resolve("hello world");
    }else {
      reject("No thanks");
    }
  });
};
// 方法调用
testPromise(true).then(function(msg){
  console.log(msg);
},function(error){
  console.log(error);
});
```


上面的代码的含义是给testPromise方法传递一个参数，返回一个promise对象，如果为true的话，那么调用promise对象中的resolve()方法，并且把其中的参数传递给后面的then第一个函数内，因此打印出 “hello world”, 如果为false的话，会调用promise对象中的reject()方法，则会进入then的第二个函数内，会打印No thanks；

（2）Promise方法

Promise有五个常用的方法：then()、catch()、all()、race()、finally。下面就来看一下这些方法。
1. **then()**

当Promise执行的内容符合成功条件时，调用resolve函数，失败就调用reject函数。Promise创建完了，那该如何调用呢？
```plaintext
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```


then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。其中第二个参数可以省略。 then方法返回的是一个新的Promise实例（不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。

当要写有顺序的异步事件时，需要串行时，可以这样写：
```plaintext
let promise = new Promise((resolve,reject)=>{
    ajax('first').success(function(res){
        resolve(res);
    })
})
promise.then(res=>{
    return new Promise((resovle,reject)=>{
        ajax('second').success(function(res){
            resolve(res)
        })
    })
}).then(res=>{
    return new Promise((resovle,reject)=>{
        ajax('second').success(function(res){
            resolve(res)
        })
    })
}).then(res=>{
    
})
```


那当要写的事件没有顺序或者关系时，还如何写呢？可以使用all 方法来解决。
1. **catch()**

Promise对象除了有then方法，还有一个catch方法，该方法相当于then方法的第二个参数，指向reject的回调函数。不过catch方法还有一个作用，就是在执行resolve回调函数时，如果出现错误，抛出异常，不会停止运行，而是进入catch方法中。
```plaintext
p.then((data) => {
     console.log('resolved',data);
},(err) => {
     console.log('rejected',err);
     }
); 
p.then((data) => {
    console.log('resolved',data);
}).catch((err) => {
    console.log('rejected',err);
});
```

1. **all()**

all方法可以完成并行任务， 它接收一个数组，数组的每一项都是一个promise对象。当数组中所有的promise的状态都达到resolved的时候，all方法的状态就会变成resolved，如果有一个状态变成了rejected，那么all方法的状态就会变成rejected。
```javascript
let promise1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(1);
  },2000)
});
let promise2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(2);
  },1000)
});
let promise3 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(3);
  },3000)
});
Promise.all([promise1,promise2,promise3]).then(res=>{
  console.log(res);
  //结果为：[1,2,3] 
})
```


调用all方法时的结果成功的时候是回调函数的参数也是一个数组，这个数组按顺序保存着每一个promise对象resolve执行时的值。

**（4）race()**

race方法和all一样，接受的参数是一个每项都是promise的数组，但是与all不同的是，当最先执行完的事件执行完之后，就直接返回该promise对象的值。如果第一个promise对象状态变成resolved，那自身的状态变成了resolved；反之第一个promise变成rejected，那自身状态就会变成rejected。
```plaintext
let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
       reject(1);
        },2000)
});
let promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
       resolve(2);
        },1000)
});
let promise3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
       resolve(3);
        },3000)
});
Promise.race([promise1,promise2,promise3]).then(res=>{
        console.log(res);
        //结果：2
},rej=>{
    console.log(rej)};
)
```


那么race方法有什么实际作用呢？当要做一件事，超过多长时间就不做了，可以用这个方法来解决：
```plaintext
javascript
复制代码Promise.race([promise1,timeOutPromise(5000)]).then(res=>{})
```

1. **finally()**

finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。
```plaintext
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```


上面代码中，不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。

下面是一个例子，服务器使用 Promise 处理请求，然后使用finally方法关掉服务器。
```plaintext
server.listen(port)
  .then(function () {
    // ...
  })
  .finally(server.stop);
```


finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。finally本质上是then方法的特例：
```plaintext
promise
.finally(() => {
  // 语句
});
// 等同于
promise
.then(
  result => {
    // 语句
    return result;
  },
  error => {
    // 语句
    throw error;
  }
);
```


上面代码中，如果不使用finally方法，同样的语句需要为成功和失败两种情况各写一次。有了finally方法，则只需要写一次。
### Promise解决了什么问题


在工作中经常会碰到这样一个需求，比如我使用ajax发一个A请求后，成功后拿到数据，需要把数据传给B请求；那么需要如下编写代码：
```plaintext
let fs = require('fs')
fs.readFile('./a.txt','utf8',function(err,data){
  fs.readFile(data,'utf8',function(err,data){
  
    fs.readFile(data,'utf8',function(err,data){
      console.log(data)
    })
  })
})
```


上面的代码有如下缺点：
- 后一个请求需要依赖于前一个请求成功后，将数据往下传递，会导致多个ajax请求嵌套的情况，代码不够直观。

- 如果前后两个请求不需要传递参数的情况下，那么后一个请求也需要前一个请求成功后再执行下一步操作，这种情况下，那么也需要如上编写代码，导致代码不够直观。

Promise出现之后，代码变成这样：
```plaintext
let fs = require('fs')
function read(url){
  return new Promise((resolve,reject)=>{
    fs.readFile(url,'utf8',function(error,data){
      error && reject(error)
      resolve(data)
    })
  })
}
read('./a.txt').then(data=>{
  return read(data) 
}).then(data=>{
  return read(data)  
}).then(data=>{
  console.log(data)
})
```


这样代码看起了就简洁了很多，解决了地狱回调的问题。
### Promise.all和Promise.race的区别的使用场景
**（1）Promise.all**Promise.all可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功的时候返回的是**一个结果数组**，而失败的时候则返回**最先被reject失败状态的值**。

**Promise.all中传入的是数组，返回的也是是数组，并且会将进行映射，传入的promise对象返回的值是按照顺序在数组中排列的，但是注意的是他们执行的顺序并不是按照顺序的，除非可迭代对象为空。**

**需要注意，Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的，这样当遇到发送多个请求并根据请求顺序获取和使用数据的场景，就可以使用Promise.all来解决。**

**（2）Promise.race**

**顾名思义，Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。当要做一件事，超过多长时间就不做了，可以用这个方法来解决：**
```plaintext
Promise.race([promise1,timeOutPromise(5000)]).then(res=>{})
```

### 
