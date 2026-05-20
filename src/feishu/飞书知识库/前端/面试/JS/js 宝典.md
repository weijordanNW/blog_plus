---
title: js 宝典
date: 2026-05-21
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/面试/JS
tag:
  - feishu
---

## 一、JavaScript必须知道的基础

### 对this对象的理解


this 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象。在实际开发中，this 的指向可以通过四种调用模式来判断。
- 第一种是**函数调用模式**，当一个函数不是一个对象的属性时，直接作为函数来调用时，this 指向全局对象。

- 第二种是**方法调用模式**，如果一个函数作为一个对象的方法来调用时，this 指向这个对象。

- 第三种是**构造器调用模式**，如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。

- 第四种是 **apply 、 call 和 bind 调用模式**，这三个方法都可以显示的指定调用函数的 this 指向。其中 apply 方法接收两个参数：一个是 this 绑定的对象，一个是参数数组。call 方法接收的参数，第一个是 this 绑定的对象，后面的其余参数是传入函数执行的参数。也就是说，在使用 call() 方法时，传递给函数的参数必须逐个列举出来。bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。

这四种方式，使用构造器调用模式的优先级最高，然后是 apply、call 和 bind 调用模式，然后是方法调用模式，然后是函数调用模式。
### call() 和 apply() 的区别？


它们的作用一模一样，区别仅在于传入参数的形式的不同。
- apply 接受两个参数，第一个参数指定了函数体内 this 对象的指向，第二个参数为一个带下标的集合，这个集合可以为数组，也可以为类数组，apply 方法把这个集合中的元素作为参数传递给被调用的函数。

- call 传入的参数数量不固定，跟 apply 相同的是，第一个参数也是代表函数体内的 this 指向，从第二个参数开始往后，每个参数被依次传入函数。


### 实现call、apply 及 bind 函数


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
```plaintext
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

Promise.all中传入的是数组，返回的也是是数组，并且会将进行映射，传入的promise对象返回的值是按照顺序在数组中排列的，但是注意的是他们执行的顺序并不是按照顺序的，除非可迭代对象为空。

需要注意，Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的，这样当遇到发送多个请求并根据请求顺序获取和使用数据的场景，就可以使用Promise.all来解决。

**（2）Promise.race**

顾名思义，Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。当要做一件事，超过多长时间就不做了，可以用这个方法来解决：
```plaintext
Promise.race([promise1,timeOutPromise(5000)]).then(res=>{})
```

### 对async/await 的理解


async/await其实是Generator 的语法糖，它能实现的效果都能用then链来实现，它是为优化then链而开发出来的。从字面上来看，async是“异步”的简写，await则为等待，所以很好理解async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。当然语法上强制规定await只能出现在asnyc函数中，先来看看async函数返回了什么：
```plaintext
async function testAsy(){
   return 'hello world';
}
let result = testAsy(); 
console.log(result)
```


所以，async 函数返回的是一个 Promise 对象。async 函数（包含函数语句、函数表达式、Lambda表达式）会返回一个 Promise 对象，如果在函数中 return 一个直接量，async 会把这个直接量通过 Promise.resolve() 封装成 Promise 对象。

async 函数返回的是一个 Promise 对象，所以在最外层不能用 await 获取其返回值的情况下，当然应该用原来的方式：then() 链来处理这个 Promise 对象，就像这样：
```plaintext
async function testAsy(){
   return 'hello world'
}
let result = testAsy() 
console.log(result)
result.then(v=>{
    console.log(v)   // hello world
})
```


那如果 async 函数没有返回值，又该如何？很容易想到，它会返回 Promise.resolve(undefined)。

联想一下 Promise 的特点——无等待，所以在没有 await 的情况下执行 async 函数，它会立即执行，返回一个 Promise 对象，并且，绝不会阻塞后面的语句。这和普通返回 Promise 对象的函数并无二致。

**注意：**Promise.resolve(x) 可以看作是 new Promise(resolve => resolve(x)) 的简写，可以用于快速封装字面量对象或其他对象，将其封装成 Promise 实例。


### await 到底在等啥？


**await 在等待什么呢？** 一般来说，都认为 await 是在等待一个 async 函数完成。不过按语法说明，await 等待的是一个表达式，这个表达式的计算结果是 Promise 对象或者其它值（换句话说，就是没有特殊限定）。

因为 async 函数返回一个 Promise 对象，所以 await 可以用于等待一个 async 函数的返回值——这也可以说是 await 在等 async 函数，但要清楚，它等的实际是一个返回值。注意到 await 不仅仅用于等 Promise 对象，它可以等任意表达式的结果，所以，await 后面实际是可以接普通函数调用或者直接量的。所以下面这个示例完全可以正确运行：
```plaintext
function getSomething() {
    return "something";
}
async function testAsync() {
    return Promise.resolve("hello async");
}
async function test() {
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1, v2);
}
test();
```


await 表达式的运算结果取决于它等的是什么。
- 如果它等到的不是一个 Promise 对象，那 await 表达式的运算结果就是它等到的东西。

- 如果它等到的是一个 Promise 对象，await 就忙起来了，它会阻塞后面的代码，等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。

来看一个例子：
```plaintext
function testAsy(x){
   return new Promise(resolve=>{setTimeout(() => {
       resolve(x);
     }, 3000)
    }
   )
}
async function testAwt(){    
  let result =  await testAsy('hello world');
  console.log(result);    // 3秒钟之后出现hello world
  console.log('cuger')   // 3秒钟之后出现cug
}
testAwt();
console.log('cug')  //立即输出cug
```


这就是 await 必须用在 async 函数中的原因。async 函数调用不会造成阻塞，它内部所有的阻塞都被封装在一个 Promise 对象中异步执行。await暂停当前async的执行，所以'cug''最先输出，hello world'和‘cuger’是3秒钟后同时出现的。
### async/await的优势


单一的 Promise 链并不能发现 async/await 的优势，但是，如果需要处理由多个 Promise 组成的 then 链的时候，优势就能体现出来了（很有意思，Promise 通过 then 链来解决多层回调的问题，现在又用 async/await 来进一步优化它）。

假设一个业务，分多个步骤完成，每个步骤都是异步的，而且依赖于上一个步骤的结果。仍然用 setTimeout 来模拟异步操作：
```plaintext
/**
 * 传入参数 n，表示这个函数执行的时间（毫秒）
 * 执行的结果是 n + 200，这个值将用于下一步骤
 */
function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n);
    });
}
function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}
function step2(n) {
    console.log(`step2 with ${n}`);
    return takeLongTime(n);
}
function step3(n) {
    console.log(`step3 with ${n}`);
    return takeLongTime(n);
}
```
现在用 Promise 方式来实现这三个步骤的处理：
```plaintext
function doIt() {
    console.time("doIt");
    const time1 = 300;
    step1(time1)
        .then(time2 => step2(time2))
        .then(time3 => step3(time3))
        .then(result => {
            console.log(`result is ${result}`);
            console.timeEnd("doIt");
        });
}
doIt();
// c:\var\test>node --harmony_async_await .
// step1 with 300
// step2 with 500
// step3 with 700
// result is 900
// doIt: 1507.251ms
```
输出结果 result 是 step3() 的参数 700 + 200 = 900。doIt() 顺序执行了三个步骤，一共用了 300 + 500 + 700 = 1500 毫秒，和 console.time()/console.timeEnd() 计算的结果一致。

如果用 async/await 来实现呢，会是这样：
```plaintext
async function doIt() {
    console.time("doIt");
    const time1 = 300;
    const time2 = await step1(time1);
    const time3 = await step2(time2);
    const result = await step3(time3);
    console.log(`result is ${result}`);
    console.timeEnd("doIt");
}
doIt();
```
结果和之前的 Promise 实现是一样的，但是这个代码看起来是不是清晰得多，几乎跟同步代码一样
### async/await对比Promise的优势

### 代码读起来更加同步，Promise虽然摆脱了回调地狱，但是then的链式调⽤也会带来额外的阅读负担
- Promise传递中间值⾮常麻烦，⽽async/await⼏乎是同步的写法，⾮常优雅

- 错误处理友好，async/await可以⽤成熟的try/catch，Promise的错误捕获⾮常冗余

- 调试友好，Promise的调试很差，由于没有代码块，你不能在⼀个返回表达式的箭头函数中设置断点，如果你在⼀个.then代码块中使⽤调试器的步进(step-over)功能，调试器并不会进⼊后续的.then代码块，因为调试器只能跟踪同步代码的每⼀步。


### async/await 如何捕获异常

```plaintext
async function fn(){
    try{
        let a = await Promise.reject('error')
    }catch(error){
        console.log(error)
    }
}
```

### intanceof 操作符的实现原理及实现


instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。
```javascript
function myInstanceof(left, right) {
  // 获取对象的原型
  let proto = Object.getPrototypeOf(left)
  // 获取构造函数的 prototype 对象
  let prototype = right.prototype; 

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    // 如果没有找到，就继续从其原型上找，Object.getPrototypeOf方法用来获取指定对象的原型
    proto = Object.getPrototypeOf(proto);
  }
}
```

### 为什么0.1+0.2 ! == 0.3，如何让其相等


在开发过程中遇到类似这样的问题：
```javascript
let n1 = 0.1, n2 = 0.2
console.log(n1 + n2)  // 0.30000000000000004
```


这里得到的不是想要的结果，要想等于0.3，就要把它进行转化：
```javascript
(n1 + n2).toFixed(2) // 注意，toFixed为四舍五入
```


`toFixed(num)` 方法可把 Number 四舍五入为指定小数位数的数字。那为什么会出现这样的结果呢？



计算机是通过二进制的方式存储数据的，所以计算机计算0.1+0.2的时候，实际上是计算的两个数的二进制的和。0.1的二进制是`0.0001100110011001100...`（1100循环），0.2的二进制是：`0.00110011001100...`（1100循环），这两个数的二进制都是无限循环的数。那JavaScript是如何处理无限循环的二进制小数呢？



一般我们认为数字包括整数和小数，但是在 JavaScript 中只有一种数字类型：Number，它的实现遵循IEEE 754标准，使用64位固定长度来表示，也就是标准的double双精度浮点数。在二进制科学表示法中，双精度浮点数的小数部分最多只能保留52位，再加上前面的1，其实就是保留53位有效数字，剩余的需要舍去，遵从“0舍1入”的原则。

根据这个原则，0.1和0.2的二进制数相加，再转化为十进制数就是：`0.30000000000000004`。



下面看一下**双精度数是如何保存**的：


![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/RGTgbL849ozbKbxQ0ZQcl9dMnjg.png)

- 第一部分（蓝色）：用来存储符号位（sign），用来区分正负数，0表示正数，占用1位

- 第二部分（绿色）：用来存储指数（exponent），占用11位

- 第三部分（红色）：用来存储小数（fraction），占用52位



对于0.1，它的二进制为：
```plaintext
0.00011001100110011001100110011001100110011001100110011001 10011...
```


转为科学计数法（科学计数法的结果就是浮点数）：
```plaintext
1.1001100110011001100110011001100110011001100110011001*2^-4
```


可以看出0.1的符号位为0，指数位为-4，小数位为：
```plaintext
1001100110011001100110011001100110011001100110011001
```


那么问题又来了，**指数位是负数，该如何保存**呢？



IEEE标准规定了一个偏移量，对于指数部分，每次都加这个偏移量进行保存，这样即使指数是负数，那么加上这个偏移量也就是正数了。由于JavaScript的数字是双精度数，这里就以双精度数为例，它的指数部分为11位，能表示的范围就是0~2047，IEEE固定**双精度数的偏移量为1023**。


- 当指数位不全是0也不全是1时(规格化的数值)，IEEE规定，阶码计算公式为 e-Bias。 此时e最小值是1，则1-1023= -1022，e最大值是2046，则2046-1023=1023，可以看到，这种情况下取值范围是`-1022~1013`。

- 当指数位全部是0的时候(非规格化的数值)，IEEE规定，阶码的计算公式为1-Bias，即1-1023= -1022。

- 当指数位全部是1的时候(特殊值)，IEEE规定这个浮点数可用来表示3个特殊值，分别是正无穷，负无穷，NaN。 具体的，小数位不为0的时候表示NaN；小数位为0时，当符号位s=0时表示正无穷，s=1时候表示负无穷。



对于上面的0.1的指数位为-4，-4+1023 = 1019 转化为二进制就是：`1111111011`.



所以，0.1表示为：
```plaintext
0 1111111011 1001100110011001100110011001100110011001100110011001
```


说了这么多，是时候该最开始的问题了，如何实现0.1+0.2=0.3呢？

对于这个问题，一个直接的解决方法就是设置一个误差范围，通常称为“机器精度”。对JavaScript来说，这个值通常为2-52，在ES6中，提供了`Number.EPSILON`属性，而它的值就是2-52，只要判断`0.1+0.2-0.3`是否小于`Number.EPSILON`，如果小于，就可以判断为0.1+0.2 ===0.3


```plaintext
function numberepsilon(arg1,arg2){                   
  return Math.abs(arg1 - arg2) < Number.EPSILON;        
}        

console.log(numberepsilon(0.1 + 0.2, 0.3)); // true
```

### 如何获取安全的 undefined 值？


因为 undefined 是一个标识符，所以可以被当作变量来使用和赋值，但是这样会影响 undefined 的正常判断。表达式 void ___ 没有返回值，因此返回结果是 undefined。void 并不改变表达式的结果，只是让表达式不返回值。因此可以用 void 0 来获得 undefined。
```javascript
let safeUndefined = void 0;

console.log(safeUndefined); // 输出为 undefined

// 使用 void 运算符确保返回 undefined
let value = void someFunction();

console.log(value); // 输出为 undefined
```

### typeof NaN 的结果是什么？


typeof NaN 的结果是 "number"。NaN（Not a Number）是一个特殊的数值，表示一个无效的数值结果。虽然 NaN 属于 "Not a Number" 类型，但在 JavaScript 中，typeof NaN 的结果是 "number"。

这是因为在 JavaScript 中，NaN 被归类为数值类型，但它是一个特殊的、非数字的数值。NaN 的类型被视为 "number"，是为了保持与 IEEE 754 浮点数规范的一致性，该规范定义了 JavaScript 中的数值类型。

以下是验证 typeof NaN 的结果为 "number" 的示例：
```javascript
console.log(typeof NaN); // 输出为 "number"
```
需要注意的是，NaN 不等于任何其他值，包括它自己。因此，使用 isNaN() 函数来检查一个值是否为 NaN 是更常见和可靠的方法。

例如：
```javascript
console.log(isNaN(NaN)); // 输出为 true
console.log(isNaN(42)); // 输出为 false
console.log(isNaN("Hello")); // 输出为 true，因为 "Hello" 无法转换为数值
```
所以，尽管 NaN 表示一个非数字的值，但在 JavaScript 中，typeof NaN 的结果为 "number"。
### isNaN 和 Number.isNaN 函数的区别？

- 函数 isNaN 接收参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的的值都会返回 true，因此非数字值传入也会返回 true ，会影响 NaN 的判断。

- 函数 Number.isNaN 会首先判断传入参数是否为数字，如果是数字再继续判断是否为 NaN ，不会进行数据类型的转换，这种方法对于 NaN 的判断更为准确。

### JavaScript有哪些数据类型，它们的区别？


JavaScript有以下数据类型：
1. 原始数据类型（Primitive data types）:
	- 布尔值（Boolean）: 表示真或假的值。只有两个可能的值：true（真）和false（假）。
		- 数字（Number）: 表示数值。可以是整数或浮点数。
		- 字符串（String）: 表示文本数据。由字符组成的一串字符序列。
		- undefined: 表示未定义的值。当变量被声明但未赋值时，默认为 undefined。
		- null: 表示空值或不存在的对象。
		- Symbol: 在 ES6 中引入的新数据类型，表示唯一的、不可变的值。
	
1. 引用数据类型（Reference data types）:
	- 对象（Object）: 表示键值对的集合。可以包含其他数据类型的属性和方法。
		- 数组（Array）: 表示有序的值的集合。可以包含多种数据类型的元素。
		- 函数（Function）: 是一段可重复调用的代码块。
	
这些数据类型之间的区别在于它们的特性和用途：
- 原始数据类型是简单的数据类型，它们是不可变的，即它们的值不能被修改。

- 引用数据类型是复杂的数据类型，它们是可变的，即可以修改它们的值。

- 原始数据类型的赋值是通过复制值本身来进行的。当将一个原始数据类型的值赋给另一个变量时，它们之间是独立的，修改其中一个不会影响另一个。

- 引用数据类型的赋值是通过引用来进行的。当将一个引用数据类型的值赋给另一个变量时，它们共享同一个引用，修改其中一个会影响另一个。

- 原始数据类型在比较时是按值进行比较，即比较它们的实际值。

- 引用数据类型在比较时是按引用进行比较，即比较它们是否引用同一个对象。


### 数据类型检测的方式有哪些


**（1）typeof**


```plaintext
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object    
console.log(typeof function(){});    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object
```


其中数组、对象、null都会被判断为object，其他判断都正确。

**（2）instanceof**



`instanceof`可以正确判断对象的类型，**其内部运行机制是判断在其原型链中能否找到该类型的原型**。


```plaintext
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false 
 
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true
```


可以看到，`instanceof`**只能正确判断引用数据类型**，而不能判断基本数据类型。`instanceof` 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 `prototype` 属性。



**（3） constructor**


```plaintext
console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log(('str').constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true
```


`constructor`有两个作用，一是判断数据的类型，二是对象实例通过 `constrcutor` 对象访问它的构造函数。需要注意，如果创建一个对象来改变它的原型，`constructor`就不能用来判断数据类型了：


```plaintext
function Fn(){};
 
Fn.prototype = new Array();
 
var f = new Fn();
 
console.log(f.constructor===Fn);    // false
console.log(f.constructor===Array); // true
```


**（4）Object.prototype.toString.call()**



`Object.prototype.toString.call()` 使用 Object 对象的原型方法 toString 来判断数据类型：


```plaintext
var a = Object.prototype.toString;
 
console.log(a.call(2));
console.log(a.call(true));
console.log(a.call('str'));
console.log(a.call([]));
console.log(a.call(function(){}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));
```


同样是检测对象obj调用toString方法，obj.toString()的结果和Object.prototype.toString.call(obj)的结果不一样，这是为什么？

这是因为toString是Object的原型方法，而Array、function等**类型作为Object的实例，都重写了toString方法**。不同的对象类型调用toString方法时，根据原型链的知识，调用的是对应的重写之后的toString方法（function类型返回内容为函数体的字符串，Array类型返回元素组成的字符串…），而不会去调用Object上原型toString方法（返回对象的具体类型），所以采用obj.toString()不能得到其对象类型，只能将obj转换为字符串类型；因此，在想要得到对象的具体类型时，应该调用Object原型上的toString方法



扩展运算符：
```plaintext
let outObj = {
  inObj: {a: 1, b: 2}
}
let newObj = {...outObj}
newObj.inObj.a = 2
console.log(outObj) // {inObj: {a: 2, b: 2}}
```


Object.assign():
```plaintext
let outObj = {
  inObj: {a: 1, b: 2}
}
let newObj = Object.assign({}, outObj)
newObj.inObj.a = 2
console.log(outObj) // {inObj: {a: 2, b: 2}}
```

### 箭头函数有哪些特点？

1. 更简洁的语法，例如
	- 只有一个形参就不需要用括号括起来
		- 如果函数体只有一行，就不需要放到一个块中
		- 如果 _return_ 语句是函数体内唯一的语句，就不需要 _return_ 关键字
	

1. 箭头函数没有自己的 _this_，_arguments_，_super_


1. 箭头函数 _this_ 只会从自己的作用域链的上一层继承 _this_。


### 扩展运算符的作用及使用场景


**（1）对象扩展运算符**



对象的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中。
```plaintext
let bar = { a: 1, b: 2 };
let baz = { ...bar }; // { a: 1, b: 2 }
```


上述方法实际上等价于:
```plaintext
let bar = { a: 1, b: 2 };
let baz = Object.assign({}, bar); // { a: 1, b: 2 }
```


`Object.assign`方法用于对象的合并，将源对象`（source）`的所有可枚举属性，复制到目标对象`（target）`。`Object.assign`方法的第一个参数是目标对象，后面的参数都是源对象。(**如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性**)。



同样，如果用户自定义的属性，放在扩展运算符后面，则扩展运算符内部的同名属性会被覆盖掉。
```plaintext
let bar = {a: 1, b: 2};
let baz = {...bar, ...{a:2, b: 4}};  // {a: 2, b: 4}
```


利用上述特性就可以很方便的修改对象的部分属性。在`redux`中的`reducer`函数规定必须是**一个纯函数**，`reducer`中的`state`对象要求不能直接修改，可以通过扩展运算符把修改路径的对象都复制一遍，然后产生一个新的对象返回。



需要注意：**扩展运算符对对象实例的拷贝属于浅拷贝**。



**（2）数组扩展运算符**



数组的扩展运算符可以将一个数组转为用逗号分隔的参数序列，且每次只能展开一层数组。
```plaintext
console.log(...[1, 2, 3])
// 1 2 3
console.log(...[1, [2, 3, 4], 5])
// 1 [2, 3, 4] 5
```


下面是数组的扩展运算符的应用：
- **将数组转换为参数序列**


```plaintext
function add(x, y) {
  return x + y;
}
const numbers = [1, 2];
add(...numbers) // 3
```

- **复制数组**


```plaintext
const arr1 = [1, 2];
const arr2 = [...arr1];
```

- **合并数组**



如果想在数组内合并数组，可以这样：
```plaintext
const arr1 = ['two', 'three'];
const arr2 = ['one', ...arr1, 'four', 'five'];
// ["one", "two", "three", "four", "five"]
```

- **扩展运算符与解构赋值结合起来，用于生成数组**


```plaintext
const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]
```


需要注意：**如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。**


```plaintext
const [...rest, last] = [1, 2, 3, 4, 5];         // 报错
const [first, ...rest, last] = [1, 2, 3, 4, 5];  // 报错
```

- **将字符串转为真正的数组**


```plaintext
[...'hello']    // [ "h", "e", "l", "l", "o" ]
```

- **任何 Iterator 接口的对象，都可以用扩展运算符转为真正的数组**



比较常见的应用是可以将某些数据结构转为数组：
```plaintext
// arguments对象
function foo() {
  const args = [...arguments];
}
```


用于替换`es5`中的`Array.prototype.slice.call(arguments)`写法。


- **使用**`Math`**函数获取数组中特定的值**


```plaintext
const numbers = [9, 4, 7, 1];
Math.min(...numbers); // 1
Math.max(...numbers); // 9
```

### Proxy 可以实现什么功能？


在 Vue3.0 中通过 `Proxy` 来替换原本的 `Object.defineProperty` 来实现数据响应式。



Proxy 是 ES6 中新增的功能，它可以用来自定义对象中的操作。
```plaintext
let p = new Proxy(target, handler)
```


`target` 代表需要添加代理的对象，`handler` 用来自定义对象中的操作，比如可以用来自定义 `set` 或者 `get` 函数。



下面来通过 `Proxy` 来实现一个数据响应式：


```plaintext
let onWatch = (obj, setBind, getLogger) => {
  let handler = {
    get(target, property, receiver) {
      getLogger(target, property)
      return Reflect.get(target, property, receiver)
    },
    set(target, property, value, receiver) {
      setBind(value, property)
      return Reflect.set(target, property, value)
    }
  }
  return new Proxy(obj, handler)
}
let obj = { a: 1 }
let p = onWatch(
  obj,
  (v, property) => {
    console.log(`监听到属性${property}改变为${v}`)
  },
  (target, property) => {
    console.log(`'${property}' = ${target[property]}`)
  }
)
p.a = 2 // 监听到属性a改变
p.a // 'a' = 2
```


在上述代码中，通过自定义 `set` 和 `get` 函数的方式，在原本的逻辑中插入了我们的函数逻辑，实现了在对对象任何属性进行读写时发出通知。



当然这是简单版的响应式实现，如果需要实现一个 Vue 中的响应式，需要在 `get` 中收集依赖，在 `set` 派发更新，之所以 Vue3.0 要使用 `Proxy` 替换原本的 API 原因在于 `Proxy` 无需一层层递归为每个属性添加代理，一次即可完成以上操作，性能上更好，并且原本的实现有一些数据更新不能监听到，但是 `Proxy` 可以完美监听到任何方式的数据改变，唯一缺陷就是浏览器的兼容性不好。


### 对对象与数组的解构的理解


解构是 ES6 提供的一种新的提取数据的模式，这种模式能够从对象或数组里有针对性地拿到想要的数值。

**1）数组的解构**



在解构数组时，以元素的位置为匹配条件来提取想要的数据的：
```plaintext
const [a, b, c] = [1, 2, 3]
```


最终，a、b、c分别被赋予了数组第0、1、2个索引位的值：
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/HVtWbIVFvo1cJSxyWeVcdZ2Cnbb.png)


数组里的0、1、2索引位的元素值，精准地被映射到了左侧的第0、1、2个变量里去，这就是数组解构的工作模式。还可以通过给左侧变量数组设置空占位的方式，实现对数组中某几个元素的精准提取：
```plaintext
const [a,,c] = [1,2,3]
```


通过把中间位留空，可以顺利地把数组第一位和最后一位的值赋给 a、c 两个变量：
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/OB50bycX2o8qvmxpL46c9LXxnSg.png)


**2）对象的解构**



对象解构比数组结构稍微复杂一些，也更显强大。在解构对象时，是以属性的名称为匹配条件，来提取想要的数据的。现在定义一个对象：
```plaintext
const stu = {
  name: 'Bob',
  age: 24
}
```


假如想要解构它的两个自有属性，可以这样：
```plaintext
const { name, age } = stu
```


这样就得到了 name 和 age 两个和 stu 平级的变量：
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/MeVCbEjqvoMfAHxrHoCcHpOBnaf.png)


注意，对象解构严格以属性名作为定位依据，所以就算调换了 name 和 age 的位置，结果也是一样的：
```plaintext
const { age, name } = stu
```


扩展运算符被用在函数形参上时，**它还可以把一个分离的参数序列整合成一个数组**：


```plaintext
function mutiple(...args) {
  let result = 1;
  for (var val of args) {
    result *= val;
  }
  return result;
}
mutiple(1, 2, 3, 4) // 24
```


这里，传入 mutiple 的是四个分离的参数，但是如果在 mutiple 函数里尝试输出 args 的值，会发现它是一个数组：
```plaintext
function mutiple(...args) {
  console.log(args)
}
mutiple(1, 2, 3, 4) // [1, 2, 3, 4]
```


这就是 … rest运算符的又一层威力了，它可以把函数的多个入参收敛进一个数组里。这一点**经常用于获取函数的多余参数，或者像上面这样处理函数参数个数不确定的情况。**


### ES6中模板语法与字符串处理


ES6 提出了“模板语法”的概念。在 ES6 以前，拼接字符串是很麻烦的事情：
```plaintext
var name = 'css'   
var career = 'coder' 
var hobby = ['coding', 'writing']
var finalString = 'my name is ' + name + ', I work as a ' + career + ', I love ' + hobby[0] + ' and ' + hobby[1]
```


仅仅几个变量，写了这么多加号，还要时刻小心里面的空格和标点符号有没有跟错地方。但是有了模板字符串，拼接难度直线下降：
```plaintext
var name = 'css'   
var career = 'coder' 
var hobby = ['coding', 'writing']
var finalString = `my name is ${name}, I work as a ${career} I love ${hobby[0]} and ${hobby[1]}`
```


字符串不仅更容易拼了，也更易读了，代码整体的质量都变高了。这就是模板字符串的第一个优势——允许用${}的方式嵌入变量。但这还不是问题的关键，模板字符串的关键优势有两个：
- 在模板字符串中，空格、缩进、换行都会被保留

- 模板字符串完全支持“运算”式的表达式，可以在${}里完成一些计算



基于第一点，可以在模板字符串里无障碍地直接写 html 代码：
```plaintext
let list = `
    <ul>
        <li>列表项1</li>
        <li>列表项2</li>
    </ul>
`;
console.log(message); // 正确输出，不存在报错
```


基于第二点，可以把一些简单的计算和调用丢进 ${} 来做：
```plaintext
function add(a, b) {
  const finalString = `${a} + ${b} = ${a+b}`
  console.log(finalString)
}
add(1, 2) // 输出 '1 + 2 = 3'
```


除了模板语法外， ES6中还新增了一系列的字符串方法用于提升开发效率：
- **存在性判定**：在过去，当判断一个字符/字符串是否在某字符串中时，只能用 indexOf > -1 来做。现在 ES6 提供了三个方法：includes、startsWith、endsWith，它们都会返回一个布尔值来告诉你是否存在。

- 
	- **includes**：判断字符串与子串的包含关系：
	

```plaintext
const son = 'haha' 
const father = 'xixi haha hehe'
father.includes(son) // true
```

- 
	- **startsWith**：判断字符串是否以某个/某串字符开头：
	

```plaintext
const father = 'xixi haha hehe'
father.startsWith('haha') // false
father.startsWith('xixi') // true
```

- 
	- **endsWith**：判断字符串是否以某个/某串字符结尾：
	

```plaintext
const father = 'xixi haha hehe'
  father.endsWith('hehe') // true
```

- **自动重复**：可以使用 repeat 方法来使同一个字符串输出多次（被连续复制多次）：


```plaintext
const sourceCode = 'repeat for 3 times;'
const repeated = sourceCode.repeat(3) 
console.log(repeated) // repeat for 3 times;repeat for 3 times;repeat for 3 times;
```

## 二、JavaScript深入了解

### new操作符的实现原理


**new操作符的执行过程：**



（1）首先创建了一个新的空对象

（2）设置原型，将对象的原型设置为函数的 prototype 对象。

（3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）

（4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

具体实现：
```plaintext
function objectFactory() {
  let newObject = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;
  // 判断参数是否是一个函数
  if (typeof constructor !== "function") {
    console.error("type error");
    return;
  }
  // 新建一个空对象，对象的原型为构造函数的 prototype 对象
  newObject = Object.create(constructor.prototype);
  // 将 this 指向新建对象，并执行函数
  result = constructor.apply(newObject, arguments);
  // 判断返回对象
  let flag = result && (typeof result === "object" || typeof result === "function");
  // 判断返回结果
  return flag ? result : newObject;
}
// 使用方法
objectFactory(构造函数, 初始化参数);
```

### map和Object的区别


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


### JavaScript有哪些内置对象


全局的对象（ global objects ）或称标准内置对象，不要和 "全局对象（global object）" 混淆。这里说的全局的对象是说在

全局作用域里的对象。全局作用域中的其他对象可以由用户的脚本创建或由宿主程序提供。

**标准内置对象的分类：**



（1）值属性，这些全局属性返回一个简单值，这些值没有自己的属性和方法。

例如 Infinity、NaN、undefined、null 字面量

（2）函数属性，全局函数可以直接调用，不需要在调用时指定所属对象，执行结束后会将结果直接返回给调用者。

例如 eval()、parseFloat()、parseInt() 等

（3）基本对象，基本对象是定义或使用其他对象的基础。基本对象包括一般对象、函数对象和错误对象。

例如 Object、Function、Boolean、Symbol、Error 等

（4）数字和日期对象，用来表示数字、日期和执行数学计算的对象。

例如 Number、Math、Date

（5）字符串，用来表示和操作字符串的对象。

例如 String、RegExp

（6）可索引的集合对象，这些对象表示按照索引值来排序的数据集合，包括数组和类型数组，以及类数组结构的对象。例如 Array

（7）使用键的集合对象，这些集合对象在存储数据时会使用到键，支持按照插入顺序来迭代元素。

例如 Map、Set、WeakMap、WeakSet

（8）矢量集合，SIMD 矢量集合中的数据会被组织为一个数据序列。

例如 SIMD 等

（9）结构化数据，这些对象用来表示和操作结构化的缓冲区数据，或使用 JSON 编码的数据。

例如 JSON 等

（10）控制抽象对象

例如 Promise、Generator 等

（11）反射

例如 Reflect、Proxy

（12）国际化，为了支持多语言处理而加入 ECMAScript 的对象。

例如 Intl、Intl.Collator 等

（13）WebAssembly

（14）其他

例如 arguments

**总结：**



js 中的内置对象主要指的是在程序执行前存在全局作用域里的由 js 定义的一些全局值属性、函数和用来实例化其他对象的构造函数对象。一般经常用到的如全局变量值 NaN、undefined，全局函数如 parseInt()、parseFloat() 用来实例化对象的构造函数如 Date、Object 等，还有提供数学计算的单体内置对象如 Math 对象。
### 常用的正则表达式有哪些？

```plaintext
// （1）匹配 16 进制颜色值
var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;

// （2）匹配日期，如 yyyy-mm-dd 格式
var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

// （3）匹配 qq 号
var regex = /^[1-9][0-9]{4,10}$/g;

// （4）手机号码正则
var regex = /^1[34578]\d{9}$/g;

// （5）用户名正则
var regex = /^[a-zA-Z\$][a-zA-Z0-9_\$]{4,16}$/;
```

### 对JSON的理解


JSON 是一种基于文本的轻量级的数据交换格式。它可以被任何的编程语言读取和作为数据格式来传递。

在项目开发中，使用 JSON 作为前后端数据交换的方式。在前端通过将一个符合 JSON 格式的数据结构序列化为

JSON 字符串，然后将它传递到后端，后端通过 JSON 格式的字符串解析后生成对应的数据结构，以此来实现前后端数据的一个传递。

因为 JSON 的语法是基于 js 的，因此很容易将 JSON 和 js 中的对象弄混，但是应该注意的是 JSON 和 js 中的对象不是一回事，JSON 中对象格式更加严格，比如说在 JSON 中属性值不能为函数，不能出现 NaN 这样的属性值等，因此大多数的 js 对象是不符合 JSON 对象的格式的。

在 js 中提供了两个函数来实现 js 数据结构和 JSON 格式的转换处理，
- JSON.stringify 函数，通过传入一个符合 JSON 格式的数据结构，将其转换为一个 JSON 字符串。如果传入的数据结构不符合 JSON 格式，那么在序列化的时候会对这些值进行对应的特殊处理，使其符合规范。在前端向后端发送数据时，可以调用这个函数将数据对象转化为 JSON 格式的字符串。

- JSON.parse() 函数，这个函数用来将 JSON 格式的字符串转换为一个 js 数据结构，如果传入的字符串不是标准的 JSON 格式的字符串的话，将会抛出错误。当从后端接收到 JSON 格式的字符串时，可以通过这个方法来将其解析为一个 js 数据结构，以此来进行数据的访问。


### JavaScript脚本延迟加载的方式有哪些？


延迟加载就是等页面加载完成之后再加载 JavaScript 文件。 js 延迟加载有助于提高页面加载速度。

一般有以下几种方式：
- **defer 属性：**给 js 脚本添加 defer 属性，这个属性会让脚本的加载与文档的解析同步解析，然后在文档解析完成后再执行这个脚本文件，这样的话就能使页面的渲染不被阻塞。多个设置了 defer 属性的脚本按规范来说最后是顺序执行的，但是在一些浏览器中可能不是这样。

- **async 属性：**给 js 脚本添加 async 属性，这个属性会使脚本异步加载，不会阻塞页面的解析过程，但是当脚本加载完成后立即执行 js 脚本，这个时候如果文档没有解析完成的话同样会阻塞。多个 async 属性的脚本的执行顺序是不可预测的，一般不会按照代码的顺序依次执行。

- **动态创建 DOM 方式：**动态创建 DOM 标签的方式，可以对文档的加载事件进行监听，当文档加载完成后再动态的创建 script 标签来引入 js 脚本。

- **使用 setTimeout 延迟方法：**设置一个定时器来延迟加载js脚本文件

- **让 JS 最后加载：**将 js 脚本放在文档的底部，来使 js 脚本尽可能的在最后来加载执行。


### JavaScript 类数组对象的定义？


一个拥有 length 属性和若干索引属性的对象就可以被称为类数组对象，类数组对象和数组类似，但是不能调用数组的方法。常见的类数组对象有 arguments 和 DOM 方法的返回结果，还有一个函数也可以被看作是类数组对象，因为它含有 length 属性值，代表可接收的参数个数。

常见的类数组转换为数组的方法有这样几种：

（1）通过 call 调用数组的 slice 方法来实现转换
```plaintext
Array.prototype.slice.call(arrayLike);
```


（2）通过 call 调用数组的 splice 方法来实现转换
```plaintext
Array.prototype.splice.call(arrayLike, 0);
```


（3）通过 apply 调用数组的 concat 方法来实现转换
```plaintext
Array.prototype.concat.apply([], arrayLike);
```


（4）通过 Array.from 方法来实现转换
```plaintext
Array.from(arrayLike);
```

### 数组有哪些原生方法？

- 数组和字符串的转换方法：toString()、toLocalString()、join() 其中 join() 方法可以指定转换为字符串时的分隔符。

- 数组尾部操作的方法 pop() 和 push()，push 方法可以传入多个参数。

- 数组首部操作的方法 shift() 和 unshift() 重排序的方法 reverse() 和 sort()，sort() 方法可以传入一个函数来进行比较，传入前后两个值，如果返回值为正数，则交换两个参数的位置。

- 数组连接的方法 concat() ，返回的是拼接好的数组，不影响原数组。

- 数组截取办法 slice()，用于截取数组中的一部分返回，不影响原数组。

- 数组插入方法 splice()，影响原数组查找特定项的索引的方法，indexOf() 和 lastIndexOf() 迭代方法 every()、some()、filter()、map() 和 forEach() 方法

- 数组归并方法 reduce() 和 reduceRight() 方法


### 10. Unicode、UTF-8、UTF-16、UTF-32的区别？

#### （1）Unicode


在说`Unicode`之前需要先了解一下`ASCII`码：ASCII 码（`American Standard Code for Information Interchange`）称为美国标准信息交换码。


- 它是基于拉丁字母的一套电脑编码系统。

- 它定义了一个用于代表常见字符的字典。

- 它包含了"A-Z"(包含大小写)，数据"0-9" 以及一些常见的符号。

- 它是专门为英语而设计的，有128个编码，对其他语言无能为力



`ASCII`码可以表示的编码有限，要想表示其他语言的编码，还是要使用`Unicode`来表示，可以说`Unicode`是`ASCII` 的超集。



`Unicode`全称 `Unicode Translation Format`，又叫做统一码、万国码、单一码。`Unicode` 是为了解决传统的字符编码方案的局限而产生的，它为每种语言中的每个字符设定了统一并且唯一的二进制编码，以满足跨语言、跨平台进行文本转换、处理的要求。



`Unicode`的实现方式（也就是编码方式）有很多种，常见的是**UTF-8**、**UTF-16**、**UTF-32**和**USC-2**。


#### （2）UTF-8


`UTF-8`是使用最广泛的`Unicode`编码方式，它是一种可变长的编码方式，可以是1—4个字节不等，它可以完全兼容`ASCII`码的128个字符。



**注意：** `UTF-8` 是一种编码方式，`Unicode`是一个字符集合。



`UTF-8`的编码规则：


- 对于**单字节**的符号，字节的第一位为0，后面的7位为这个字符的`Unicode`编码，因此对于英文字母，它的`Unicode`编码和`ACSII`编码一样。

- 对于**n字节**的符号，第一个字节的前n位都是1，第n+1位设为0，后面字节的前两位一律设为10，剩下的没有提及的二进制位，全部为这个符号的`Unicode`码 。



来看一下具体的`Unicode`编号范围与对应的`UTF-8`二进制格式 ：



那该如何通过具体的`Unicode`编码，进行具体的`UTF-8`编码呢？**步骤如下：**


- 找到该`Unicode`编码的所在的编号范围，进而找到与之对应的二进制格式

- 将`Unicode`编码转换为二进制数（去掉最高位的0）

- 将二进制数从右往左一次填入二进制格式的`X`中，如果有`X`未填，就设为0



来看一个实际的例子：

“**马**” 字的`Unicode`编码是：`0x9A6C`，整数编号是`39532`



（1）首选确定了该字符在第三个范围内，它的格式是 `1110xxxx 10xxxxxx 10xxxxxx`



（2）39532对应的二进制数为`1001 1010 0110 1100`



（3）将二进制数填入X中，结果是：`11101001 10101001 10101100`


#### （3）UTF-16

1. **平面的概念**



在了解`UTF-16`之前，先看一下**平面**的概念：



`Unicode`编码中有很多很多的字符，它并不是一次性定义的，而是分区进行定义的，每个区存放**65536**（216）个字符，这称为一个**平面**，目前总共有17 个平面。



最前面的一个平面称为**基本平面**，它的码点从**0 — 216-1**，写成16进制就是`U+0000 — U+FFFF`，那剩下的16个平面就是**辅助平面**，码点范围是 `U+10000—U+10FFFF`。


1. **UTF-16 概念：**



`UTF-16`也是`Unicode`编码集的一种编码形式，把`Unicode`字符集的抽象码位映射为16位长的整数（即码元）的序列，用于数据存储或传递。`Unicode`字符的码位需要1个或者2个16位长的码元来表示，因此`UTF-16`也是用变长字节表示的。


1. **UTF-16 编码规则：**


- 编号在 `U+0000—U+FFFF` 的字符（常用字符集），直接用两个字节表示。

- 编号在 `U+10000—U+10FFFF` 之间的字符，需要用四个字节表示。


1. **编码识别**



那么问题来了，当遇到两个字节时，怎么知道是把它当做一个字符还是和后面的两个字节一起当做一个字符呢？

`UTF-16` 编码肯定也考虑到了这个问题，在基本平面内，从 `U+D800 — U+DFFF` 是一个空段，也就是说这个区间的码点不对应任何的字符，因此这些空段就可以用来映射辅助平面的字符。



辅助平面共有 **220** 个字符位，因此表示这些字符至少需要 20 个二进制位。`UTF-16` 将这 20 个二进制位分成两半，前 10 位映射在 `U+D800 — U+DBFF`，称为**高位**（H），后 10 位映射在 `U+DC00 — U+DFFF`，称为**低位**（L）。这就相当于，将一个辅助平面的字符拆成了两个基本平面的字符来表示。



因此，当遇到两个字节时，发现它的码点在 `U+D800 —U+DBFF`之间，就可以知道，它后面的两个字节的码点应该在 `U+DC00 — U+DFFF` 之间，这四个字节必须放在一起进行解读。


1. **举例说明**



以 "**𡠀**" 字为例，它的 `Unicode` 码点为 `0x21800`，该码点超出了基本平面的范围，因此需要用四个字节来表示，步骤如下：


- 首先计算超出部分的结果：`0x21800 - 0x10000`

- 将上面的计算结果转为20位的二进制数，不足20位就在前面补0，结果为：`0001000110 0000000000`

- 将得到的两个10位二进制数分别对应到两个区间中

- `U+D800` 对应的二进制数为 `1101100000000000`， 将`0001000110`填充在它的后10 个二进制位，得到 `1101100001000110`，转成 16 进制数为 `0xD846`。同理，低位为 `0xDC00`，所以这个字的`UTF-16` 编码为 `0xD846 0xDC00`


#### （4） UTF-32


`UTF-32` 就是字符所对应编号的整数二进制形式，每个字符占四个字节，这个是直接进行转换的。该编码方式占用的储存空间较多，所以使用较少。



比如“**马**” 字的Unicode编号是：`U+9A6C`，整数编号是`39532`，直接转化为二进制：`1001 1010 0110 1100`，这就是它的UTF-32编码。


#### （5）总结


**Unicode、UTF-8、UTF-16、UTF-32有什么区别？**


- `Unicode` 是编码字符集（字符集），而`UTF-8`、`UTF-16`、`UTF-32`是字符集编码（编码规则）；

- `UTF-16` 使用变长码元序列的编码方式，相较于定长码元序列的`UTF-32`算法更复杂，甚至比同样是变长码元序列的`UTF-8`也更为复杂，因为其引入了独特的**代理对**这样的代理机制；

- `UTF-8`需要判断每个字节中的开头标志信息，所以如果某个字节在传送过程中出错了，就会导致后面的字节也会解析出错；而`UTF-16`不会判断开头标志，即使错也只会错一个字符，所以容错能力教强；

- 如果字符内容全部英文或英文与其他文字混合，但英文占绝大部分，那么用`UTF-8`就比`UTF-16`节省了很多空间；而如果字符内容全部是中文这样类似的字符或者混合字符中中文占绝大多数，那么`UTF-16`就占优势了，可以节省很多空间；

### 
