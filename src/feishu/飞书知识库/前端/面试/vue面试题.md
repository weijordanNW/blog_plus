---
title: vue面试题
date: 2026-05-21
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/面试
tag:
  - feishu
---
[语雀原文档](https://www.yuque.com/ziming-rrjvu/lfc7ip/shhban7owuynooxn)


## 简述 Vue 有哪些内置指令 ？
Vue.js 提供了一系列内置指令，用于构建模板时实现不同的功能。以下是 Vue 中常用的一些内置指令：
1. **v-bind**：用于动态地绑定一个或多个属性，或一个组件 prop 到表达式。
	- 缩写：`:`
	
1. **v-model**：在表单输入和应用状态之间创建双向数据绑定。
	- 缩写：`v-bind:model` 或 `v-model`
	
1. **v-for**：用于循环列表，基于源数据多次渲染一个元素或模板块。

1. **v-if**：条件性地渲染一块内容。这个指令期待一个返回布尔值的表达式。

1. **v-else**：与 `v-if` 配合使用，表示 `v-if` 为假时的“else”分支。

1. **v-else-if**：与 `v-if` 配合使用，表示“else if”分支。

1. **v-on**：用于监听 DOM 事件，并在事件发生时执行一些 JavaScript 代码。
	- 缩写：`@`
	
1. **v-slot**：用于定义插槽分发内容，特别是在组件中。

1. **v-once**：渲染元素和组件后，仅执行一次。随后的更新将不再影响该元素/组件及其子元素。

1. **v-cloak**：保持元素在 Vue 实例挂载完成之前始终显示原始内容。

1. **v-pre**：跳过这个元素和它的子元素的编译过程，用于显示原始 HTML。

1. **v-text**：更新元素的文本内容，避开 HTML 解析。

1. **v-html**：更新元素的 HTML 内容。

1. **v-show**：条件性地显示元素，与 CSS 属性 `display` 相关。

1. **v-memo**（2.2.0+）：用于缓存一个具有昂贵计算的组件或元素，避免不必要的重新渲染。

这些指令是 Vue 模板语法的核心部分，它们提供了声明式地描述 DOM 更新的方法。开发者可以根据需要在模板中使用这些指令来构建交互式用户界面。
## 请描述 Vue 常用的修饰符 ？
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/VXXSbINFhou5B9xWhNgcTrx2nCc.png)
vue修饰符

Vue.js 提供了一系列的修饰符（Modifiers），这些修饰符可以附加在指令上，用来改变指令的行为。以下是一些常用的Vue修饰符：
1. **.stop**：阻止事件继续传播。

```html
<a @click.stop="doSomething">Do something</a>
```
1. **.prevent**：阻止事件的默认行为。

```html
<form @submit.prevent="submitForm">
```
1. **.capture**：使用事件捕获模式而非冒泡模式。

```html
<div @click.capture="doThisFirst">...</div>
```
1. **.self**：当事件来自元素自身时才触发。

```html
<div @click.self="handleClick">...</div>
```
1. **.once**：事件将只触发一次，之后被移除。

```html
<button @click.once="doThisOnce">Do this once</button>
```
1. **.passive**：对于需要优化性能的事件监听，可以添加`.passive`修饰符，它会使监听器注册为被动监听器，告诉浏览器这个监听器不会调用`event.preventDefault()`。

```html
<input @scroll.passive>
```
1. **.sync**（Vue 2.2.0+）：对于`v-model`，`.sync`修饰符提供了一个语法糖，允许你在组件上使用`v-model`时，自动更新父组件中的属性。

```html
<child-component :my-property.sync="parentProperty">
```
1. **.exact**（Vue Router）：在使用Vue Router时，`.exact`修饰符确保只有在路由完全匹配时才应用。

```html
<router-link to="/home" exact>Home</router-link>
```
1. **.native**：在自定义组件上使用时，`.native`修饰符监听组件的原生事件，而不是组件的自定义事件。

```html
<my-component @click.native="doSomething">
```
1. **.number** 和 **.trim**（`v-model`）：`.number`确保输入是数值类型，`.trim`确保输入时自动去除首尾空格。

```html
<input v-model.number="age" type="number">
<input v-model.trim="name" type="text">
```
修饰符可以组合使用，但`.exact`、`.native`和`.passive`除外，因为它们是特定上下文的修饰符。例如，你可以这样写：
```html
<a @click.stop.prevent="doSomething">Do something without default and propagation</a>
```
这些修饰符使得Vue的指令更加强大和灵活，能够以声明式的方式处理复杂的交互逻辑。

其对应原生修饰符

在Vue中使用的修饰符大多是Vue特有的，提供了一种便捷的方式来扩展指令的行为。然而，它们在JavaScript原生事件处理中也有对应的实现方式。下面是Vue修饰符及其对应的原生JavaScript实现：
1. **.stop (阻止事件冒泡)**

```javascript
element.addEventListener('click', function(event) {
  event.stopPropagation();
  // handler logic
});
```
- Vue: `@click.stop="handler"`

- 原生: 使用`event.stopPropagation()`方法。

1. **.prevent (阻止默认行为)**

```javascript
element.addEventListener('click', function(event) {
  event.preventDefault();
  // handler logic
});
```
- Vue: `@click.prevent="handler"`

- 原生: 使用`event.preventDefault()`方法。

1. **.capture (使用捕获模式)**

```javascript
element.addEventListener('click', function(event) {
  // handler logic
}, true); // 捕获模式
```
- Vue: `@click.capture="handler"`

- 原生: 在`addEventListener`中设置第三个参数为`true`。

1. **.self (仅限元素自身触发)**

```javascript
element.addEventListener('click', function(event) {
  if (event.target === element) {
    // handler logic
  }
});
```
- Vue: `@click.self="handler"`

- 原生: 结合`event.target`进行检查。

1. **.once (事件触发一次后移除)**

```javascript
var handleOnce = function(event) {
  // handler logic
  element.removeEventListener('click', handleOnce);
};
element.addEventListener('click', handleOnce);
```
- Vue: `@click.once="handler"`

- 原生: 使用匿名函数或在调用后移除事件监听器。

1. **.passive (注册被动监听器)**

```javascript
element.addEventListener('scroll', function(event) {
  // handler logic
}, { passive: true });
```
- Vue: `@scroll.passive="handler"`

- 原生: 在`addEventListener`中设置第四个参数为`{ passive: true }`。

1. **.sync (Vue 2 **`v-model`**修饰符)**
	- Vue: 已废弃，无需使用修饰符。
		- 原生: 无直接对应，但可以通过`input`或`change`事件更新数据。
	
1. **.native (在自定义组件上监听原生事件)**
	- Vue: `@click.native="handler"`
		- 原生: 直接在组件的根元素上添加事件监听器。
	
1. **.exact (Vue Router 路由修饰符)**
	- Vue: `router-link`标签上使用。
		- 原生: 无直接对应，但可以通过检查`location.pathname`是否完全匹配路由路径来实现。
	
1. **.number 和 .trim (**`v-model`**修饰符)**
	- Vue: 用于`v-model`指令，自动转换输入值。
		- 原生: 需要手动转换输入值类型或使用`trim()`方法。
	
请注意，Vue修饰符提供了一种声明式的、更易读的方式来处理事件，而在原生JavaScript中，这些行为通常需要在事件处理函数中手动实现。
## 简述 Vue 的生命周期方法有哪些？
Vue 的生命周期方法是指在 Vue 实例从创建到销毁的过程中，Vue 运行时会在特定的时刻调用的一系列方法。以下是 Vue 生命周期的主要方法：
1. **beforeCreate()**：在实例初始化之后被调用，此时数据观测和事件/侦听器的配置尚未完成。

1. **created()**：在实例创建完成后被调用，数据观测和事件/侦听器的配置已完成，但是组件的 `$el` 属性还不存在。

1. **beforeMount()**：在挂载开始之前被调用，相关的 `render` 函数首次调用前。

1. **mounted()**：在 el 被新创建的 vm.$el 替换后调用，这时可以访问到 DOM 元素。

1. **beforeUpdate()**：在数据更新之前调用，发生在虚拟 DOM 重新渲染之前。

1. **updated()**：在数据更新后调用，这时 DOM 已经更新，可以执行依赖于 DOM 的操作。

1. **beforeDestroy()**：在 Vue 实例销毁之前调用，实例仍然完全可用。

1. **destroyed()**：在 Vue 实例销毁后调用，清理资源，如解除数据监听、取消网络请求等。


1. **activated()**：对于 `keep-alive` 缓存的组件，当组件被激活时调用。

1. **deactivated()**：对于 `keep-alive` 缓存的组件，当组件被停用时调用。


1. **errorCaptured(err, vm, info)**：当捕获一个来自子孙组件的错误时被调用。

1. **renderTracked(dep)**：开发阶段使用，当依赖项被追踪时调用。

1. **renderTriggered(dep)**：开发阶段使用，当依赖项触发重新渲染时调用。

1. **serverPrefetch()**：服务器端渲染时使用，当服务器端的页面需要预取数据时调用。

Vue 3 引入了 Composition API，带来了一组新的生命周期相关函数：
- **setup()**：Composition API 的入口函数，它在 beforeCreate 和 created 钩子之前执行。

- **onBeforeMount()**：在 setup() 中使用，相当于 beforeMount。

- **onMounted()**：在 setup() 中使用，相当于 mounted。

- **onBeforeUpdate()**：在 setup() 中使用，相当于 beforeUpdate。

- **onUpdated()**：在 setup() 中使用，相当于 updated。

- **onBeforeUnmount()**：在 setup() 中使用，相当于 beforeDestroy。

- **onUnmounted()**：在 setup() 中使用，相当于 destroyed。


- **onActivated()** 和 **onDeactivated()**：在 setup() 中使用，相当于 activated 和 deactivated。


- **onErrorCaptured(err, instance, info)**：在 setup() 中使用，相当于 errorCaptured。

这些生命周期方法提供了在不同阶段执行代码的能力，使得开发者可以控制组件的行为和资源管理。在 Vue 3 中，setup() 函数成为了 Composition API 的核心，它允许更灵活地组织组件逻辑。
## 简述怎样理解 Vue 的单项数据流 ？
### 总结: 谁的数据谁负责


Vue 的单向数据流（One-Way Data Binding）是一种数据管理策略，它确保了数据的流动是单向的，即从父组件流向子组件，不允许反过来的数据流动。这种设计有几个关键点：
1. **数据从父组件流向子组件**：通过 props 将数据传递给子组件，子组件可以通过这些 props 访问数据，但子组件不能直接修改这些数据。

1. **子组件通过事件与父组件通信**：如果子组件需要通知父组件某些操作或数据变化，它可以通过触发事件（使用 `$emit`）来实现。父组件监听这些事件并作出响应。

1. **保持数据的不可变性**：单向数据流鼓励使用不可变数据模式，即不直接修改原始数据，而是创建数据的新副本进行操作。

1. **减少组件间的耦合**：由于组件间的数据传递是单向的，这减少了组件间的直接依赖，使得组件更容易维护和复用。

1. **提高可预测性**：单向数据流使得数据的来源和更新更加清晰和可预测，有助于开发者理解和追踪应用的状态变化。

1. **集中式状态管理**：对于复杂的应用，Vue 推荐使用 Vuex 这样的集中式状态管理库来处理多组件间的状态共享。在 Vuex 中，组件通过 dispatch actions 来提交 mutations，这些 mutations 改变 store 中的状态，从而触发视图的更新。

1. **避免循环更新**：单向数据流避免了因为父子组件间的循环数据绑定导致的无限更新问题。

1. **响应式系统的基石**：Vue 的响应式系统是基于依赖收集和观察者模式实现的，单向数据流确保了响应式系统可以高效地追踪依赖和更新 DOM。

理解并遵循单向数据流的原则有助于构建结构清晰、易于维护的 Vue 应用。尽管在某些情况下，如表单输入，Vue 提供了 `v-model` 来实现双向数据绑定，但这背后仍然是基于单向数据流的概念，只是在用户输入时自动更新了绑定的数据。
## 简述 Vue 2.0 响应式数据的原理（ 重点 ）？
### 思维导图
[思维导图-补充-腾讯文档](https://docs.qq.com/mind/DQndiQ3B0dE1nS3dC?nlc=1&subId=BB08J2&mode=mind)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/R5k0bT7cwoFmuyx3TNpcwvDYn8d.jpeg)
#### 可以补充的细节（让图更严谨）
- 明确标注 Vue 2 和 Vue 3 的差异：
	- Vue 2：`defineProperty` 只能劫持已存在的属性，无法监听对象新增 / 删除、数组索引变化。
		- Vue 3：`Proxy` 直接代理整个对象，天生支持上述场景。
	
- 补充 Vue 3 的`track/trigger`：对应 Vue 2 的`getter收集依赖`和`setter派发更新`。

- 补充 Dep 和 Watcher 的关系：每个属性对应一个 Dep，Dep 管理多个 Watcher；一个 Watcher 可以对应多个 Dep（组件中多个数据依赖）。

### 总结
总结

三个模型;

**--Observer : 监听者 **Observer 负责劫持数据对象的所有属性

**--Watcher:  观察者 **Watcher 是一个观察者对象--作为中转站

**--Dep: 订阅者**Dep 用于依赖收集



数据劫持: Observer 遍历对象属性 (vue3加上方法:增加和删除)

--vue2 : Object.defineProperty 

--vue3 : Proxy (代理)

getter依赖收集

--vue2: getter

--vue3:  `handler` 的 `get` 函数 （track）

setter:通知 watcher(观察者) 派发更新

--vue2: setter

--vue3: `handler` 的 `set` 函数 （trigger）

watcher 的发布订阅模式 --作为中转站
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/J1F6bd0nHoCjWfxt4EycP7mDnwg.png)
整体思路是 数据劫持 + 观察者模式 

Vue 在初始化数据时 ，会使用 Object.defineProperty 重新定义 data 中的所有属性 ，当页面 使 用对 应 属性时，首先会进行 依赖收集 (收集当前组件的 watcher )，如果属性 发生变化 会通知相 关 依赖进行 更新操作( 发布订阅 ) 

Vue2.x 采用 数据劫持结合发布订阅模式 （PubSub 模式）的方式，通过 Object.defineProperty 来 劫 持 各个属性 的 setter、getter ，在 数据变动时 发 布消息给订阅者 ， 触发相应的监听回 调。 当把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty 将它们转为 getter/setter。用户看不到 getter/setter，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时 通知变化 。

 Vue 的数据 双向绑定 整合了 Observer，Compile 和 Watcher 三者，通过 Observer 来监听 自 己的 

model 的数 据变 化， 通过 Compile 来解 析编 译模 板指 令， 最终 利用 Watcher 搭 起 Observer 和 Compile 之间的 通信桥梁 ，达到数据变化->视图更新，视图交互变化（例如 input 操作）->数据 model 变更的双向绑定效果。 Vue3.x 放弃了 Object.defineProperty ，使用 ES6 原生的 Proxy，来解决以前使用 Object.defineProperty 所存在的一些问题。 

1、Object.defineProperty 数据劫持 

2、使用 getter 收集依赖 ，setter 通知 watcher(观察者) 派发更新。 

3、watcher 发布订阅模式。
## 简述 vue-router 路由钩子函数是什么？执行顺序是什么？
### 思维导图
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/YKxSbq2gvogZyGxS41WcVKvanig.jpeg)
### 总结
Vue Router 的路由钩子函数是 Vue.js 官方路由管理器提供的一种机制，允许开发者在路由导航发生时执行额外的操作，如权限验证、数据加载等。这些钩子函数可以分为三种类型：全局钩子、路由独享钩子和组件内钩子。
1. **全局钩子**：使用 `router.beforeEach`、`router.beforeResolve` 和 `router.afterEach` 注册，可以应用于所有路由导航。`beforeEach` 是全局前置守卫，`beforeResolve` 是全局解析守卫，而 `afterEach` 是全局后置钩子，它们按照注册顺序执行，并且 `beforeEach` 和 `beforeResolve` 可以接受一个 `next` 函数来控制导航流程 。

1. **路由独享钩子**：在路由配置上使用 `beforeEnter` 定义，这些钩子仅适用于特定的路由。

1. **组件内钩子**：在路由组件内定义，包括：
	- `beforeRouteEnter`：在渲染组件之前调用，此时组件实例尚未被创建，不能访问 `this`。
		- `beforeRouteUpdate`：当组件被复用时，路由发生变化时调用，可以访问 `this`。
		- `beforeRouteLeave`：在离开组件的路由时调用，可以访问 `this`，常用于防止未保存的更改丢失 。
	
执行顺序通常是：
1. 导航触发。

1. 调用离开组件的 `beforeRouteLeave` 钩子（如果有）。

1. 执行全局的 `beforeEach` 守卫。

1. 对于重用的组件，调用 `beforeRouteUpdate` 守卫。

1. 调用路由配置中的 `beforeEnter`。

1. 解析异步路由组件（如果有）。

1. 调用将要进入的组件的 `beforeRouteEnter`。

1. 执行全局的 `beforeResolve` 守卫。

1. 导航被确认。

1. 执行全局的 `afterEach` 钩子。

1. 触发 DOM 更新，此时会触发组件的生命周期钩子，如 `beforeMount` 和 `mounted`。

1. 如果 `beforeRouteEnter` 中有通过 `next` 传递的回调函数，则在 DOM 更新后执行该回调，并将组件实例作为参数传递 。

组件内的路由钩子函数 `beforeRouteEnter`、`beforeRouteUpdate` 和 `beforeRouteLeave` 允许开发者在组件层面对路由变化做出响应，例如保护路由不被未授权访问或在离开前进行确认 。

Vue Router 的路由钩子函数提供了细粒度的导航控制，使得开发者可以根据应用的需求实现复杂的路由逻辑 。
## 简述 Vue 组件通讯有哪些方式 ？
Vue 组件之间的通信是构建大型应用程序时的关键部分。以下是 Vue 组件通信的一些常见方式：
1. **Props**：父组件向子组件传递数据，是单向数据流。

1. **Events**：子组件通过 `$emit` 触发事件，父组件监听这些事件来响应。

1. **Event Bus**（非官方，通常不推荐）：使用一个空的 Vue 实例作为中央事件总线来触发和监听事件。

1. **Vuex**：对于复杂应用，使用 Vuex 状态管理库来集中管理状态，组件通过 Vuex 进行通信。

1. **Provide / Inject**：允许祖先组件向所有后代组件注入数据，后代组件可以使用这些数据，不论组件层次结构有多深。

1. **$attrs** 和 **$listeners**：`$attrs` 包含父作用域中不作为 prop 被识别（且获取）的属性绑定，`$listeners` 包含了父作用域中的 (不含 `.native` 修饰器的) v-on 事件监听器。它们可以在没有明确 prop 定义的情况下，将数据传递给子组件。

1. **Slot**：父组件可以通过 slot 分发内容到子组件的模板中。

1. **v-model**：在子组件上使用 `v-model` 可以创建一个自定义的双向数据绑定。

1. **$refs**：用于访问子组件的实例或子组件的特定元素。

1. **children**：访问父组件或子组件的实例。

1. **$root**：访问根 Vue 实例，可用于全局状态或事件。

1. **全局状态管理**：除了 Vuex，还可以使用其他状态管理库，如 MobX。

1. **自定义插件或服务**：创建自定义 Vue 插件或服务来存储和共享状态。

1. **依赖注入**：Vue 3 引入了依赖注入 API，允许更细粒度的控制组件之间的依赖关系。

1. **Composition API**（Vue 3）：Vue 3 引入了组合式 API，包括 `provide` 和 `inject` 函数，与选项 API 中的 `provide` 和 `inject` 类似，但提供了更灵活的使用方式。

每种通信方式都有其适用场景，开发者需要根据具体的应用需求和组件结构来选择最合适的通信机制。随着 Vue 3 的推出，Composition API 为组件间的通信提供了更多的可能性和灵活性。
## 请说明 Vue 的 slot 的用法？
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/IZ2CbaA7Vo5fgtxMKXTcFqukn1b.png)
Vue中的`slot`是用于组件内容分发的机制，它允许你在组件的模板中预留一个或多个位置，这些位置可以被组件的使用者填充自定义的内容。以下是Vue中`slot`的几种常见用法：
1. **默认插槽**：在子组件中使用一个不带`name`属性的`<slot></slot>`标签来定义一个默认插槽。父组件在使用子组件时，可以直接在标签内部传递内容，这些内容将替换子组件中的默认插槽。

1. **具名插槽**：当子组件需要多个插槽时，可以使用带有`name`属性的`<slot></slot>`来定义具名插槽。父组件需要使用`<template>`标签并指定`slot`属性来匹配相应的具名插槽。

1. **作用域插槽**：允许子组件将数据作为插槽的一部分传递回父组件，使得父组件可以访问子组件的作用域数据。在Vue 2.6.0+中，使用`v-slot`指令替代了`slot-scope`属性。

1. **后备内容**：在`<slot>`标签内部可以放置一些默认内容，当没有提供相应的插槽内容时，这些默认内容将被渲染。

1. **动态插槽名**：`v-slot`支持动态指令参数，允许你定义动态的插槽名。

1. **插槽的缩写语法**：`v-slot`可以缩写为`#`，这在Vue 2.6.0+中引入，使得模板更加简洁。

1. **嵌套插槽**：可以在一个作用域插槽内部再使用另一个作用域插槽，实现更复杂的内容分发。

Vue的`slot`机制提高了组件的复用性和灵活性，使得组件的设计可以更加解耦和灵活。通过`slot`，父组件可以精确控制子组件的内部结构，实现高度定制化的UI布局。
## 说明对于 Vue $$
emit 、$$
on 、$$
once 、$$
off 理解？
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/IelmbbAYkoVU9pxLVvhcUh6OnVm.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/C1f0bFjTnoSAZVxpn9ecXFZxngd.png)
Vue.js 提供了一系列的实例方法来处理事件，主要包括 `$emit`、`$on`、`$once` 和 `$off`。以下是对这些方法的简要说明：
1. **$emit(event, payload)**：

```javascript
// 子组件中
this.$emit('my-event', someData);
```
- 用于在 Vue 组件上触发一个事件。当使用 `v-on` 或 `@` 监听器绑定在父组件上时，子组件可以通过 `$emit` 向父组件发送事件和数据。

- `event` 是事件的名称，`payload` 是传递给事件监听器的数据。

1. **$on(event, callback)**：

```javascript
// 组件内
this.$on('my-event', function (data) {
  console.log(data);
});
```
- 用于在 Vue 实例上监听一个事件。当该事件被触发时，提供的回调函数将被执行。

- `event` 是要监听的事件名称，`callback` 是事件触发时调用的函数。

1. **$once(event, callback)**：

```javascript
// 组件内
this.$once('my-event', function (data) {
  console.log(data);
});
```
- 类似于 `$on`，但它只对下一次事件触发进行监听，触发一次后自动移除监听器。

- 这在某些场景下非常有用，比如你只想对用户的第一次操作做出响应。

1. **$off([event, callback])**：

```javascript
// 组件内
// 移除所有监听器
this.$off();

// 移除特定事件的所有监听器
this.$off('my-event');

// 移除特定事件的特定监听器
var callback = function (data) {
  console.log(data);
};
this.$on('my-event', callback);
this.$off('my-event', callback);
```
- 用于移除 Vue 实例上的事件监听器。

- 如果没有提供 `event` 和 `callback`，它将移除实例上所有的事件监听器。

- 如果只提供 `event`，则移除该事件名下的所有监听器。

- 如果同时提供 `event` 和 `callback`，则只移除指定的监听器。

这些方法为 Vue 组件之间的通信提供了强大的工具。`$emit` 通常在子组件中使用，用于向父组件发送事件通知；而 `$on`、`$once` 和 `$off` 则更多地在组件内部或在非 Vue 的JavaScript代码中使用，用于监听和响应事件。
## 请说明 Vue 中$$
root、$$
refs、$parent 的使用 ？
## uniapp 是不是基于 vue 研发 ？
是的，uni-app 是一个使用 Vue.js 开发所有前端应用的框架，它允许开发者编写一次代码，然后发布到不同的平台，包括 Web、iOS、Android、以及各种小程序平台（如微信/支付宝/百度小程序等）。

uni-app 底层是 DCloud 公司封装的，它在 Vue 的基础上增加了一些特定的 API 和组件，以支持跨平台开发。开发者可以使用 Vue 的语法和组件，同时利用 uni-app 提供的 API 来访问原生功能，实现真正的跨平台应用开发。

uni-app 的特点包括：
- **跨平台**：一套代码，多端运行。

- **使用 Vue**：语法和组件与 Vue 一致，易于上手。

- **丰富的组件和 API**：提供了大量组件和 API，方便调用原生功能。

- **性能优化**：在不同平台上有针对性优化，保证应用性能。

- **开发工具**：HBuilderX IDE 提供了一套完整的开发、调试、发行流程。

因此，如果你已经熟悉 Vue.js，学习 uni-app 将会相对容易，因为它们在很多方面都是相似的。同时，uni-app 的跨平台特性也使得它成为开发多端应用的有力工具。
## 简述 Vue 的 MVVM 模式?
MVVM（Model-View-ViewModel）是一种设计模式，用于分离视图（UI）和模型（业务逻辑与数据）。Vue.js 实现了 MVVM 模式的一个变体，使得开发者能够更高效地构建用户界面。

以下是 Vue 中 MVVM 模式的简述：
1. **Model（模型）**：代表数据层，可以是简单的 JavaScript 对象或更复杂的状态管理结构（如 Vuex）。Model 负责存储数据和业务逻辑。

1. **View（视图）**：代表展示层，即用户界面。在 Vue 中，视图是用声明式的模板语法构建的。Vue 通过数据绑定将视图和模型连接起来。

1. **ViewModel（视图模型）**：是连接 Model 和 View 的桥梁。在 Vue 中，ViewModel 通常指的是 Vue 实例自身。ViewModel 包含 View 的数据和逻辑，但不直接操作 DOM。它通过观察者模式（Observer pattern）监测数据变化，并自动更新视图。

Vue.js 中的 MVVM 工作流程如下：
- 开发者在 Vue 实例中定义数据（data）和方法（methods）。

- Vue 实例作为 ViewModel，通过数据绑定（如 `v-bind`、`v-model`、`v-on` 等指令）将数据和事件处理方法连接到 View。

- 当数据变化时，ViewModel 通过 Vue 的响应式系统监测到这些变化，并自动更新 DOM，以反映最新的状态。

- 用户与视图的交互（如点击按钮、输入文本）会触发事件，这些事件通过 ViewModel 的方法处理，进而可能引起数据的变化。

Vue 的 MVVM 模式的优点：
- **数据驱动**：视图自动响应数据的变化，减少了手动操作 DOM 的需要。

- **组件化**：Vue 组件化使得代码更加模块化和可复用。

- **声明式渲染**：通过声明式的模板语法，开发者可以更专注于数据和逻辑，而不是如何更新 DOM。

- **双向数据绑定**：`v-model` 为表单输入和应用状态提供了双向绑定，简化了数据同步。

- **可维护性**：清晰的分离关注点，使得代码更易于维护和测试。

总之，Vue 的 MVVM 模式提供了一种高效、声明式的方式来构建交互式用户界面。
## 简述 Vue 如何检测数组变化 ？
Vue.js 是一个用于构建用户界面的渐进式框架，它提供了响应式的数据绑定机制。在 Vue 中，数组变化的检测是通过 Vue 的响应式系统实现的。以下是 Vue 如何检测数组变化的简要概述：
1. **响应式数组**：在 Vue 的实例中，数组是通过 Vue 的响应式系统创建的。Vue 会追踪数组的索引和长度属性，以及数组元素的变化。

1. **数组方法的重写**：Vue 重写了数组的变异方法（如 `push`、`pop`、`shift`、`unshift` 和 `splice`），以确保这些方法调用时能够触发视图的更新。这些方法在执行数组操作的同时，也会通知 Vue 的响应式系统，以便更新 DOM。

1. **直接设置索引**：Vue 允许你直接设置数组的索引来修改数组元素，例如 `vm.items[indexOfItem] = newValue`。Vue 会检测到索引的设置，并更新 DOM。

1. **替换数组**：如果你使用索引之外的方法来替换整个数组，比如直接赋值 `vm.items = newArray`，Vue 将无法检测到这种变化，因为它不是数组的变异方法。为了触发更新，你需要使用 `vm.$set` 方法或者 Vue 2.2 引入的 `Vue.set` 函数。

1. **侦听数组变化**：你可以使用 Vue 的侦听器（watchers）来侦听数组的变化。例如，你可以使用 `watch` 选项来侦听数组或者数组的某个属性。

1. **计算属性**：Vue 还允许你使用计算属性（computed properties）来基于数组创建可缓存的派生状态。

1. **依赖收集**：当组件或指令访问数组时，Vue 的响应式系统会收集这些依赖，以便在数组变化时重新计算并更新依赖的组件。

通过这些机制，Vue 能够高效地检测和响应数组的变化，确保视图与数据保持同步。
## 请解释 Vue 的父子组件生命周期钩子函数执行顺序 ？
**总结：父组件先开始子组件先结束**
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/T0nub45HrodQSrxMgVxcY1mMnEf.png)
加载渲染过程

父beforeCreate->父created->父beforeMount->子beforeCreate->子created

->子beforeMount->子mounted->父mounted

子组件更新过程

父beforeUpdate->子beforeUpdate->子updated->父updated

父组件更新过程

父beforeUpdate->父updated

销毁过程父beforeDestroy->子before Destroy->子destroyed->父destroyed

总结：父组件先开始子组件先结束
## 请简述 vue-router 动态路由是什么？
Vue Router 动态路由是一种基于参数的路由匹配方式，它允许你将 URL 中的一部分路径设置为变量参数，从而实现对特定资源的动态访问。这种方式在处理具有不同标识符的资源时非常有用，例如用户信息、文章详情等。

动态路由的实现主要依赖于在路由配置中使用参数化路径。参数化路径通常以冒号 `:` 开头，后面跟上参数名来表示。例如：
```javascript
const routes = [
  {
    path: '/user/:id', // 这里的 :id 是一个动态参数
    component: User
  }
];
```
在这个例子中，`:id` 是一个动态参数，它在 URL 中可以被任何值所替代，比如 `/user/123` 或 `/user/abc`。Vue Router 会捕获这些值，并将其作为参数传递给对应的组件。

组件内部可以通过 `this.$route.params` 来访问这些参数值。例如：
```javascript
export default {
  created() {
    console.log(this.$route.params.id); // 访问动态参数 id
  }
};
```
此外，Vue Router 还支持查询参数（通过 URL 中的 `?` 后跟参数键值对来实现）和通配符（使用 `*` 来匹配任意路径），这些都可以用来增强路由的灵活性。

动态路由是构建现代 Web 应用中不可或缺的一部分，它使得应用能够以一种声明式的方式来处理各种不同的资源和页面。
## 简述 vue-router 组件复用导致路由参数失效怎么办？
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/VqAobBG9Eomjmix86xKcmaAqnGf.png)


在使用 Vue Router 时，如果多个路由复用同一个组件，可能会导致路由参数变化时组件不刷新的问题。以下是几种常见的解决方案：
1. **监听 **`$route`** 对象的变化**：可以在组件中使用 `watch` 属性来监听 `$route` 对象。当路由发生变化时，通过执行相关方法来更新组件状态。例如：

```javascript
watch: {
  '$route'(to, from) {
    if (to.name === '目标路由名称') {
      this.方法名(to.params.参数名); // 根据路由参数获取数据
    }
  }
}
```
1. **组件初始化**：在组件的 `mounted` 生命周期钩子中进行初始化操作，以确保组件挂载时获取数据：

```javascript
mounted() {
  this.方法名(this.$route.params.参数名); // 在组件挂载时获取数据
}
```
1. **使用 **`:key`** 属性阻止组件复用**：给 `router-view` 添加一个唯一的 `:key`，这样每次路由变化时，Vue 都会销毁旧的组件实例并创建一个新的实例。例如：

```html
<router-view :key="$route.fullPath"></router-view>
```
但请注意，这种方法可能会导致性能下降，因为每次路由变化都会触发组件的销毁和重新创建。
1. **使用 **`beforeRouteUpdate`** 导航守卫**：对于动态路由，可以在组件内使用 `beforeRouteUpdate` 钩子来响应路由参数的变化。例如：

```javascript
beforeRouteUpdate(to, from, next) {
  // 对路由变化做出响应...
  next();
}
```
这可以在组件被复用时，对路由参数的变化做出响应，而不需要重新创建组件实例。
1. **使用 **`props`** 选项**：在路由配置中使用 `props: true`，这样组件就可以通过 `props` 接收路由参数，从而在参数变化时自动更新。例如：

```javascript
// 在路由配置中
{ path: '/user/:id', component: User, props: true }

// 在组件中
export default {
  props: ['id']
}
```
1. **使用 query 参数代替 params**：如果使用 `$route.params` 遇到问题，可以考虑使用 query 参数，它通过 URL 的查询字符串传递，并可以通过 `$route.query` 在组件中访问。例如：

```javascript
this.$router.push({ name: 'post', query: { postId: 123 } });

// 在组件中
this.$route.query.postId
```
选择哪种方法取决于应用程序的具体需求和性能考虑。
## Vue 生命周期钩子是如何实现的?
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/EVKGbBUvaoJviDxDfoJcyU3fn2a.png)
Vue 的生命周期钩子是通过 Vue 的响应式系统和组件的实例化过程实现的。以下是 Vue 生命周期钩子实现的基本步骤：
1. **初始化阶段**：
	- 当创建一个 Vue 实例时，首先会执行 `beforeCreate` 钩子。此时，Vue 实例的初始化操作还未完成，数据观测（data）、事件和侦听器（watchers）等还未设置。
	
1. **数据观测**：
	- Vue 使用数据观测系统 (Observer) 来递归地遍历实例的 `data` 选项，为每个属性设置 getter 和 setter。这样，当数据变化时，Vue 能够检测到这些变化。
	
1. **组件渲染**：
	- 在数据观测完成后，Vue 会执行 `created` 钩子。此时，组件的数据已经可以被访问，但还未进行 DOM 渲染。
	
1. **虚拟 DOM 创建**：
	- Vue 使用虚拟 DOM 来提高性能。在 `created` 钩子之后，Vue 会根据组件的模板生成虚拟 DOM 树。
	
1. **挂载阶段**：
	- Vue 执行 `beforeMount` 钩子，此时虚拟 DOM 树已经创建，但还未挂载到真实 DOM 上。
	
1. **真实 DOM 挂载**：
	- Vue 将虚拟 DOM 渲染为真实 DOM，并替换掉 Vue 实例的 `el` 选项指定的 DOM 元素。完成后，会执行 `mounted` 钩子。
	
1. **数据变化响应**：
	- 当 Vue 检测到数据变化时，会重新执行虚拟 DOM 的渲染，并进行差异比对 (Diffing)，以确定哪些 DOM 需要更新。
	
1. **更新阶段**：
	- 如果组件的数据发生变化，Vue 会执行 `beforeUpdate` 钩子，然后重新渲染虚拟 DOM 并挂载更新。
	
1. **组件销毁**：
	- 当组件被销毁时，Vue 会执行 `beforeDestroy` 钩子。此时，组件仍然可以使用，但即将被销毁。
	
1. **完成销毁**：
	- 组件完全销毁后，Vue 会执行 `destroyed` 钩子。此时，组件的所有数据、事件监听器和子组件都已经被销毁。
	
Vue 的生命周期钩子允许开发者在不同的阶段插入自定义逻辑，以实现特定的功能，如数据获取、事件监听、DOM 操作等。通过合理使用生命周期钩子，可以构建出高效、可维护的 Vue 应用。
## 请描述 Vue 的实现原理 ？
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/KDN7b5sZxow6HBxf0Pvc34IMnIn.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/KwOCb8TWpoWMWCxXeFeckw6tnJh.png)
Vue.js 是一个用于构建用户界面的渐进式框架，其实现原理主要基于以下几个关键概念：
1. **响应式系统**：
	- Vue 使用数据绑定和响应式系统来连接视图（HTML）和数据（JavaScript）。当数据变化时，视图会自动更新。Vue 的响应式系统通过使用 Object.defineProperty（在 Vue 2.x 中）或 Proxy（在 Vue 3.x 中）来实现。
	
1. **虚拟 DOM**：
	- Vue 通过虚拟 DOM 来提高性能。虚拟 DOM 是实际 DOM 的一个轻量级 JavaScript 对象表示。当状态变化时，Vue 首先在虚拟 DOM 上进行变化，然后使用高效的差异算法来计算出需要在真实 DOM 上执行的最小更新操作。
	
1. **组件化**：
	- Vue 应用由一系列的组件构成。每个组件都有自己的视图（模板）、数据（data）、方法（methods）和生命周期钩子。组件可以独立开发和重用，使得应用结构清晰、易于维护。
	
1. **模板语法**：
	- Vue 的模板语法允许开发者在 HTML 中直接声明性地描述 DOM 应该渲染的内容。它包括插值表达式、指令（如 `v-bind`、`v-model`、`v-on` 等）和组件标签。
	
1. **编译过程**：
	- Vue 应用从模板到最终渲染的 DOM 需要经过编译过程。编译器解析模板，将其转换为虚拟 DOM 树，并在适当的时候应用指令和插值表达式。
	
1. **渲染函数**：
	- 在 Vue 的内部，模板被编译为渲染函数。这个函数接收组件的数据作为输入，并返回一个虚拟 DOM 树。渲染函数可以是非常高效的，因为它是基于模板静态分析的结果来生成的。
	
1. **依赖收集和异步更新队列**：
	- Vue 通过异步更新队列来批量和延迟更新 DOM，避免不必要的重复渲染。当响应式数据变化时，Vue 会收集依赖于这些数据的组件，然后在下一个事件循环“tick”中异步更新它们。
	
1. **Diffing 算法**：
	- 当虚拟 DOM 树发生变化时，Vue 使用 Diffing 算法来比较新旧虚拟 DOM 树的差异。这个算法尽可能减少 DOM 操作，只更新变化的部分。
	
1. **组件实例化**：
	- Vue 组件是通过实例化来创建的。每个 Vue 组件都是一个 Vue 实例，拥有自己的状态和行为。Vue 组件的实例化过程包括初始化数据、事件、生命周期钩子等。
	
1. **跨平台能力**：
	- Vue 的设计允许它在不同的环境中运行，如浏览器、服务器端（Node.js）或 Weex。Vue 3.x 还引入了 Composition API，提供了更灵活的代码组织方式。
	
Vue 的这些实现原理共同工作，提供了一个高效、灵活且易于使用的前端框架，适用于从小型项目到大型企业级应用的开发。
## 请简述 Vue 组件的通信（ 兄弟组件通信 ）？
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/EQSVbn5zroJLGpxJxMucBFh6nhh.png)
Vue 组件之间的通信有多种方式，兄弟组件通信稍微复杂一些，因为它们没有直接的父子关系可以利用。以下是几种实现兄弟组件通信的方法：
1. **事件总线（Event Bus）**：
	- 事件总线是一个基于 Vue 实例的中央通信机制。你可以创建一个新的 Vue 实例作为事件总线，并在组件之间通过它来发射和监听事件。
	
1. **Vuex**：
	- Vuex 是 Vue 的状态管理库，它提供了一个中央存储来管理所有组件的状态，并且可以进行严格的状态管理。组件可以通过 Vuex 存储来共享状态和触发状态变化。
	
1. **Provide / Inject**：
	- Vue 2.2.0+ 引入了 Provide 和 Inject 选项，允许祖先组件向其所有后代组件注入数据/方法，无论组件层次有多深，而后代组件可以接收这些数据/方法。
	
1. **listeners**：
	- `$attrs` 包含父作用域中不作为 prop 被识别的属性绑定，可以在子组件中通过 `v-bind` 使用。`$listeners` 包含了父作用域中的 (不含 `.native` 修饰器的) v-on 事件监听器。它可以通过 `v-on="$listeners"` 在子组件中使用。
	
1. **自定义事件**：
	- 在 Vue 中，你可以使用 `$emit` 来触发事件，并在父组件中监听这些事件。虽然这主要用于父子组件通信，但也可以通过事件总线或 Vuex 实现兄弟组件通信。
	
1. **全局状态管理**：
	- 除了 Vuex，还可以使用其他全局状态管理库，如 MobX，来在组件之间共享状态。
	
1. **children**：
	- 虽然不推荐使用，但在某些情况下，可以使用 `$parent` 和 `$children` 访问 Vue 实例的父组件和子组件列表，并直接调用方法或访问数据。
	
1. **使用 props 和自定义方法**：
	- 如果兄弟组件有共同的父组件，可以通过父组件传递 props 或方法给需要通信的兄弟组件。
	
1. **slot 和 slot-scope**：
	- 在 Vue 2.6+ 中，可以使用 `slot-scope` 为组件的 slot 插槽提供额外的数据，实现兄弟组件之间的数据交换。
	
1. **$refs**：
	- 在某些情况下，如果兄弟组件有共同的父组件，父组件可以使用 `$refs` 访问子组件的实例，并提供方法或数据。
	
选择哪种通信方式取决于具体的应用场景和个人偏好。在大型应用中，推荐使用 Vuex 或其他状态管理库来维护一个清晰和可维护的状态管理架构。在小型或中型应用中，事件总线或 Provide / Inject 可能是更简单的解决方案。
## Vuex 页面刷新数据丢失怎么解决？
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/BGqsbSBLJoFAlexmI8zctVownQf.png)
## 请叙述 Vue 中使用了哪些设计模式？
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/EJcQbLuWuo0L5Gx357McKpkmnec.png)
Vue.js 在其设计和实现中使用了多种设计模式，以下是一些主要的：
1. **观察者模式（Observer Pattern）**：
	- Vue 的响应式系统就是基于观察者模式实现的。每个组件实例都是观察者，而数据则是被观察的主题。当数据变化时，相关的组件会被通知并更新。
	
1. **单例模式（Singleton Pattern）**：
	- Vue 的一些功能，如原型上的全局方法（例如 Vue.config），被设计为单例模式，确保全局只有一个实例。
	
1. **工厂模式（Factory Pattern）**：
	- Vue 通过工厂函数来创建 Vue 实例，这些函数可以接收不同的参数来创建不同类型的实例。
	
1. **策略模式（Strategy Pattern）**：
	- Vue 组件可以通过不同的策略来执行相同的行为。例如，可以通过不同的指令（如 v-on、v-bind）来应用不同的行为。
	
1. **装饰者模式（Decorator Pattern）**：
	- Vue 的指令（如 v-bind、v-on）可以看作是装饰者，它们可以动态地添加属性或事件监听器来装饰 DOM 元素。
	
1. **代理模式（Proxy Pattern）**：
	- 在 Vue 3 中，响应式系统使用了 ES6 Proxy 特性来实现更高效的数据劫持和响应式更新。
	
1. **发布-订阅模式（Publish-Subscribe Pattern）**：
	- Vue 的自定义事件系统使用了发布-订阅模式，允许组件发布事件和订阅事件，实现组件间的通信。
	
1. **组合模式（Composite Pattern）**：
	- Vue 的组件树可以被视为组合模式的实现，其中每个组件可以包含子组件，形成一个树状结构。
	
1. **适配器模式（Adapter Pattern）**：
	- Vue 在集成第三方库或框架时，可能会使用适配器模式来确保不同的接口能够协同工作。
	
1. **门面模式（Facade Pattern）**：
	- Vue 的 API 设计隐藏了内部的复杂性，提供了一个简单的接口给开发者，这是门面模式的体现。
	
1. **享元模式（Flyweight Pattern）**：
	- Vue 在保持性能的同时渲染大量相似的组件时，可能会使用享元模式来减少内存使用。
	
1. **迭代器模式（Iterator Pattern）**：
	- Vue 可能在内部使用迭代器模式来遍历组件的子组件或其他集合。
	
Vue 的设计模式使用是高度抽象的，通常开发者在使用 Vue 时不需要直接实现这些模式，而是通过 Vue 提供的 API 来间接利用这些模式的优势。这些设计模式使得 Vue 高效、灵活且易于扩展。
## 请简述 Vue 的性能优化可以从哪几个方面去思考设计 ？
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/YlpMby2WRoyl5FxjEtEczVHgntp.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/TGWKbid0eoZDu0xErdaci0jMnqf.png)
Vue.js 是一个用于构建用户界面的渐进式框架，其性能优化可以从以下几个方面进行思考和设计：
1. **组件拆分**：合理拆分组件，避免单个组件过于庞大，这样可以减少每次渲染所需的计算量。

1. **避免不必要的渲染**：
	- 使用 `v-if` 和 `v-show` 来控制组件的渲染条件。
		- 使用 `computed` 属性和 `watchers` 来减少不必要的计算。
	
1. **虚拟 DOM**：Vue 使用虚拟 DOM 来提高性能，但可以通过优化模板来减少虚拟 DOM 的更新。

1. **数据响应式**：合理使用 Vue 的响应式系统，避免过度使用 `v-for` 和 `v-model`，因为它们会增加数据的响应式依赖。

1. **事件处理器**：避免在模板中使用过多的事件处理器，尤其是在 `v-on` 中使用复杂的表达式。

1. **使用路由懒加载**：在单页面应用中，使用路由懒加载可以减少初始加载时间。

1. **资源打包和压缩**：使用 Webpack 或其他构建工具对资源进行打包和压缩，减少文件大小和加载时间。

1. **服务端渲染（SSR）**：对于首屏渲染性能要求较高的应用，可以使用服务端渲染来提升首屏加载速度。

1. **代码分割**：通过代码分割将代码拆分成多个小块，按需加载，减少初始加载时间。

1. **使用缓存**：合理使用浏览器缓存和本地存储来存储数据，减少重复请求。

1. **优化第三方库**：评估和选择性能良好的第三方库，避免使用性能低下的库。

1. **性能监控**：使用 Vue Devtools 等工具监控应用性能，找出瓶颈并进行优化。

1. **避免使用过多的全局状态管理**：过度使用 Vuex 等状态管理库可能会影响性能，应根据实际需要合理使用。

1. **动画性能优化**：对于复杂的动画，考虑使用 CSS 动画代替 JavaScript 动画，以减少 JavaScript 的执行负担。

通过这些方法，可以有效地提升 Vue 应用的性能。
## 简述 Vue.set 方法原理 ？
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/ZduebBjt1o39QOx8dPGcdMoHnAh.png)
Vue.js 使用了基于依赖追踪的响应式系统来自动更新 DOM。Vue 会递归地遍历组件的 `data` 对象，并使用 `Object.defineProperty` 来劫持每个属性的 getter 和 setter。当这些属性的值发生变化时，Vue 能够检测到变化并触发视图的更新。

然而，Vue 2.x 默认情况下只能检测到 `data` 对象上已声明的属性的变更。如果需要向响应式对象添加新的属性，Vue 无法检测到这种动态添加的属性。这就是 `Vue.set` 方法的用途所在。
### Vue.set 方法原理：
1. **动态添加响应式属性**：`Vue.set` 允许你向响应式对象添加新的属性，并且确保这个新属性同样是响应式的，能够触发视图更新。

1. **确保响应性**：当你使用 `Vue.set` 向 `data` 对象添加属性时，Vue 会确保这个新属性被 `Object.defineProperty` 处理，使其具有响应性。

1. **批量更新**：`Vue.set` 可以用于批量更新多个属性，这有助于减少不必要的 DOM 更新次数。

1. **兼容性**：`Vue.set` 同样适用于数组，可以用于向数组添加或删除元素，确保数组的变化能够触发视图更新。

1. **Vue 3.x 的改进**：在 Vue 3.x 中，由于使用了 Proxy 代替了 `Object.defineProperty`，Vue 3 的响应式系统能够自动检测到属性的添加和删除，因此 `Vue.set` 方法在 Vue 3 中不再需要。

简单来说，`Vue.set` 方法是 Vue 2.x 中用来确保动态添加的属性能够被 Vue 的响应式系统追踪并触发视图更新的工具。在 Vue 3.x 中，由于响应式系统的改进，`Vue.set` 已不再必要。
## Vue 的组件 data 为什么必须是一个函数?
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/GjKIbkjHyo25FPx8K7NcKFJ1nDg.png)
在 Vue 中，组件的 `data` 必须是返回一个对象的函数，而不是直接是一个对象，这背后有几个重要的原因：
1. **组件实例化**：Vue 组件可以被实例化多次。如果 `data` 是一个对象，那么这个对象将会被所有组件实例共享，这会导致状态在组件之间意外共享。

1. **每个实例独立的状态**：通过将 `data` 定义为一个函数，每次组件实例化时都会调用这个函数，从而返回一个新的对象，确保每个组件实例都有其独立的状态。

1. **避免内存泄漏**：如果 `data` 是一个对象，并且这个对象引用了一些大型的数据结构或复杂的对象，那么即使组件已经被销毁，这些数据结构或对象仍然可能因为被 `data` 对象引用而无法被垃圾回收。使用函数可以确保每次实例化时都创建新的数据结构，从而避免潜在的内存泄漏问题。

1. **组件复用**：当组件被多次使用时，每个实例都需要有其自己的状态。如果 `data` 是共享的，那么组件的复用会变得复杂且难以管理。

1. **响应式系统**：Vue 的响应式系统依赖于 `data` 对象的每个属性都是响应式的。通过使用函数返回新的 `data` 对象，Vue 可以确保所有属性都是从零开始响应式地创建的。

1. **组件的可维护性**：从架构的角度来看，将 `data` 定义为函数可以提高组件的可维护性和可测试性，因为每个组件实例都是自包含的，不依赖于外部状态。

1. **Vue 3 的改进**：在 Vue 3 中，响应式系统得到了重写，使用了 Proxy 来实现响应式。这使得 Vue 3 可以更好地处理组件状态的独立性，即使 `data` 被定义为一个对象，Vue 3 也能够确保每个组件实例的状态独立。

总结来说，将组件的 `data` 定义为函数是 Vue 为了确保组件实例之间状态的独立性、避免内存泄漏、提高组件的可维护性和响应式系统的正确运作而采取的设计决策。在 Vue 3 中，虽然响应式系统的改进减少了对这种模式的依赖，但为了保持向后兼容性和一致性，`data` 仍然推荐以函数的形式定义。
## vue 通过数据劫持可以精准的探测数据变化，为什么还要进行 diff 检测差异?
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/L2xibW1guoiu4axhbJwccIesnyM.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/BdPQbNMaAouUj9xz5aDcOR00ngh.png)

## 请说明 Vue key 的作用及原理 ？
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/RsHCbvGKCoo8CIxk0MMcIkoDnuh.png)
Vue中的`key`属性主要有以下作用和原理：
1. **提高虚拟DOM的diff算法效率**：`key`作为每个VNode的唯一标识，帮助Vue在新旧虚拟DOM节点间进行精确匹配，从而避免不必要的DOM操作，提高渲染性能 。

1. **维护状态**：在使用`v-for`循环渲染列表时，如果列表项的状态或顺序可能会发生变化，使用`key`可以确保每个节点的状态得以保持，避免因就地复用导致的潜在错误 。

1. **触发组件的重新渲染**：当组件的`key`发生变化时，Vue会销毁旧的组件并重新创建一个新的组件实例，这可以用于强制组件重新渲染，即使其数据没有变化 。

1. **实现过渡效果**：在使用`<transition>`时，改变子组件的`key`可以触发退出和进入的过渡效果，因为Vue会认为是两个不同的组件 。

1. **避免使用相同的**`key`：每个`key`应该是唯一的，即使是在不同的父节点下，也不能有重复的`key`，否则Vue将无法正确地识别和更新DOM节点 。

1. **在Vue 3中的变更**：Vue 3不再要求在`v-if`/`v-else`分支中使用`key`，因为Vue会自动生成唯一的`key`。同时，`<template v-for>`的`key`应设置在`<template>`标签上，而不是其子节点上 。

1. **源码层面**：在Vue的源码中，`key`是在`patch.js`文件的`sameVnode`函数里用于判断两个VNode是否相同，从而决定是否需要进行节点的更新或复用 。

正确使用`key`可以显著提升Vue应用的性能和稳定性。
## 请简述 Vue 中的 v-cloak 的理解 ？
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/HyHPbtJ1MowaeYxMpMqc54itnZc.png)
在Vue中，`v-cloak`是一个指令，它通常与CSS一起使用，目的是为了解决在Vue应用中使用插值表达式（例如`{{ }}`）时出现的闪烁问题。具体来说：
1. **防止闪烁**：当Vue应用首次加载时，由于JavaScript尚未执行，插值表达式的内容尚未渲染，因此用户可能会看到未经处理的模板字符串，如`{{ message }}`。这可能会造成视觉上的闪烁。

1. **工作原理**：`v-cloak`指令结合CSS使用，CSS规则通常如下：

```css
[v-cloak] {
  display: none;
}
```
这意味着，任何带有`v-cloak`属性的元素在Vue实例被挂载之前都不会显示。
1. **使用场景**：在Vue组件或元素上使用`v-cloak`指令，如下：

```html
<div v-cloak>
  {{ message }}
</div>
```
在这个例子中，`<div>`元素在Vue实例完全渲染完成之前不会显示。
1. **激活显示**：一旦Vue实例被挂载，`v-cloak`属性会被自动移除，此时结合CSS规则，元素就会变为可见。

1. **优点**：这种方法的好处是简单且无需额外的库或工具，可以很容易地集成到Vue项目中。

1. **替代方案**：随着前端技术的发展，`v-cloak`的使用逐渐减少，因为现代的前端框架和构建工具提供了更有效的方法来处理闪烁问题，如使用服务器端渲染（SSR）或静态网站生成（SSG）。

`v-cloak`是一种传统的前端技巧，用于提升用户体验，避免在页面加载过程中显示未处理的数据。然而，随着技术的发展，可能存在更现代和高效的方法来处理类似问题。
## 简述 Vue 单页面和传统的多页面区别？
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/NzikbMOZBoZ3W5xTs5IcqsjPnTg.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/Jy45bcomooVjEhxvX2Ucs5GQnmb.png)
Vue单页面应用（SPA，Single-Page Application）和传统的多页面应用（MPA，Multi-Page Application）在结构、用户体验、开发方式等方面有以下主要区别：
1. **页面加载方式**：
	- **SPA**：整个应用只有一个完整的页面，用户的操作不会引发页面跳转，而是通过JavaScript动态更新页面的部分内容。
		- **MPA**：每个用户操作都可能触发页面跳转，每个页面都是一个独立的HTML文档，需要从服务器加载。
	
1. **用户体验**：
	- **SPA**：提供更流畅的用户体验，因为页面间的转换不需要重新加载，可以即时响应用户操作。
		- **MPA**：用户体验可能因为页面加载和刷新而受到影响，尤其是在网络条件不佳的情况下。
	
1. **SEO（搜索引擎优化）**：
	- **SPA**：由于内容动态加载，可能不利于搜索引擎的爬虫抓取，尽管可以通过服务端渲染（SSR）或预渲染来改善。
		- **MPA**：每个页面都是独立的，更容易被搜索引擎优化。
	
1. **开发和维护**：
	- **SPA**：通常使用Vue Router等路由库来管理页面路由，所有页面都在一个应用中，可能使得开发和维护更加集中。
		- **MPA**：每个页面可能需要单独开发和维护，对于大型应用来说，这可能导致项目结构复杂。
	
1. **性能优化**：
	- **SPA**：可以通过懒加载（按需加载组件）和代码分割来优化性能。
		- **MPA**：每个页面需要单独优化，可能涉及到多个HTML、CSS和JavaScript文件。
	
1. **交互和状态管理**：
	- **SPA**：状态管理通常更集中，可以使用Vuex等状态管理库来维护整个应用的状态。
		- **MPA**：状态管理可能更分散，每个页面可能需要独立管理自己的状态。
	
1. **资源利用**：
	- **SPA**：首次加载可能需要较长时间，因为需要加载所有的框架和库，但之后的操作可以重用这些资源。
		- **MPA**：每次页面跳转都可能需要重新加载资源，但初始加载可能更快。
	
1. **适用场景**：
	- **SPA**：适用于需要丰富交互和流畅体验的应用，如Web应用、仪表板等。
		- **MPA**：适用于内容驱动的网站，如新闻门户、博客等，这些网站更侧重于内容展示而非交互。
	
总的来说，SPA和MPA各有优势和适用场景，选择哪种方式取决于项目需求、团队熟悉度以及预期的用户体验。
## 请简述 Vue 更新数组时触发视图更新的方法？
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/KM6gbDhEpoMMIRxUWmpcd3gMnLv.png)
Vue.js 使用响应式系统来追踪数据的变化，并在数据变化时自动更新DOM。然而，Vue.js 可能无法检测到数组的一些变动。以下是Vue更新数组时触发视图更新的推荐方法：
1. **使用Vue.set**：
当需要向数组中添加新项并触发视图更新时，可以使用`Vue.set`方法。这个方法可以确保新项被添加到数组中，并且视图相应地更新。

```javascript
Vue.set(array, index, value);
```
1. **直接修改数组索引**：
直接通过索引设置数组项的值也可以触发视图更新。

```javascript
array[index] = newValue;
```
1. **使用数组的变异方法**：
Vue.js 能够检测到数组的以下变异方法，并触发视图更新：

```javascript
// 例如，向数组添加一个新元素
array.push(newValue);
```
- `push()`

- `pop()`

- `shift()`

- `unshift()`

- `splice()`

1. **替换整个数组**：
如果对数组进行了复杂的操作，或者修改了数组的长度，可以通过替换整个数组来确保视图更新。这可以通过创建一个新数组或使用数组的`slice()`方法实现。

```javascript
array.splice(newStartIndex, deleteCount);
```
1. **使用**`v-for`**时的**`key`**属性**：
当使用`v-for`指令遍历数组渲染列表时，给每个元素添加一个唯一的`key`属性可以帮助Vue识别列表项的身份，从而在数组项变化时正确地更新DOM。

```html
<div v-for="item in items" :key="item.id">
  <!-- 渲染内容 -->
</div>
```
1. **计算属性（computed properties）**：
如果数组的变化是基于某些数据的计算结果，可以使用计算属性来确保数组的响应性。

1. **侦听器（watchers）**：
在某些情况下，如果需要在数组变化时执行异步操作或较为复杂的逻辑，可以使用侦听器来观察数组的变化。

1. **使用**`$set`**作为实例方法**：
在Vue实例中，`$set`也是可用的，它等同于全局的`Vue.set`。

```javascript
this.$set(this.array, this.index, newValue);
```
请注意，Vue 3 使用了 Proxy 来实现响应式系统，因此它能够更好地追踪数组和对象的变化，包括数组索引的直接设置。在Vue 3中，通常不需要使用`Vue.set`，因为索引的直接赋值和变异方法都能被正确追踪。
## Vue 中 delete 和 Vue.delete 删除数组的区别 ？
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/VofYblyxsorFq8x02yKc7eMknBb.png)
在Vue中，直接使用JavaScript的`delete`关键字删除数组的特定索引处的元素与使用Vue提供的实例方法`Vue.delete`（在Vue 3中是`this.$delete`）来删除数组元素，它们的行为和影响是不同的：
1. **JavaScript的**`delete`**操作符**：

```javascript
let array = [1, 2, 3, 4];
delete array[2]; // 数组现在是 [1, 2, <11>, 4]，索引2处是空的
```
- 使用`delete`操作符删除数组的索引处的元素，并不会真正地改变数组的长度，而是会删除那个特定索引的元素，使得数组出现一个“空洞”（即索引存在，但是没有对应的值）。

- `delete`操作不会触发Vue的响应系统，因此视图不会自动更新。如果需要视图更新，还需要额外的操作，如重新赋值或使用Vue的变异方法。

1. **Vue 2.x中的**`Vue.delete`：

```javascript
let vm = new Vue({
  data: {
    array: [1, 2, 3, 4]
  }
});
Vue.delete(vm.array, 2); // 删除索引2处的元素，数组现在是 [1, 2, 4]
```
- 在Vue 2.x中，`Vue.delete`是一个全局方法，用于从响应式对象中删除属性，确保删除操作能够触发视图的更新。

- `Vue.delete`可以用于删除数组的元素，并且会触发视图的更新，因为它是基于Vue的响应式系统的。

1. **Vue 3中的**`this.$delete`：

```javascript
let vm = Vue.createApp({
  data() {
    return {
      array: [1, 2, 3, 4]
    };
  },
  methods: {
    deleteElement(index) {
      this.$delete(this.array, index);
    }
  }
});
vm.deleteElement(2); // 删除索引2处的元素，数组现在是 [1, 2, 4]
```
- 在Vue 3中，`Vue.delete`已经被废弃，取而代之的是实例方法`this.$delete`。

- 使用`this.$delete`可以安全地删除数组的元素，并且确保Vue的响应式系统能够检测到这一变化，从而触发视图的更新。

总结来说，使用原生JavaScript的`delete`操作符删除数组元素不会触发视图更新，而Vue提供的`Vue.delete`（Vue 2.x）或`this.$delete`（Vue 3）方法可以在删除数组元素的同时触发视图更新。在Vue 3中，推荐使用`this.$delete`来确保响应性。
## 
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/ZyQsbGiRyoF4axxLZ0Bc4e8hnP5.png)
Vue实例的`$root`、`$refs`和`$parent`是Vue.js中用于访问和操作Vue实例和DOM元素的属性和方法：
1. **$root**：

```javascript
// 子组件中访问根实例
this.$root.someGlobalMethod();
```
- `$root`属性引用了Vue应用的根Vue实例。在单文件组件（.vue文件）中，`$root`通常用于访问根实例，从而可以访问全局状态或调用根实例上的方法。

- 它常用于需要访问整个应用状态的情况，尤其是在大型应用中。

1. **$refs**：

```html
<template>
  <input ref="inputField">
  <button @click="focusInput">Focus Input</button>

</template>


<script>
export default {
  methods: {
    focusInput() {
      this.$refs.inputField.focus();
    }
  }
}
</script>
```
- `$refs`对象包含了所有带有`ref`属性的子组件或DOM元素的引用。`ref`属性是一个特殊的属性，可以用于给元素或子组件注册引用信息。

- 引用信息是一个对象，其中的数据在组件的渲染过程中被填入，填入时机是在元素或组件被渲染之后。

- `$refs`可以在任何组件内被访问，通常用于访问DOM元素或子组件的实例。

1. **$parent**：

```javascript
// 子组件中访问父组件
if (this.$parent) {
  this.$parent.someMethod();
}
```
- `$parent`属性引用了当前组件的直接父组件实例。这可以用于访问父组件的状态或方法。

- 如果当前组件没有父组件，则`$parent`将是`undefined`。

使用这些属性和方法时，应该谨慎，以避免创建过于紧密耦合的组件，这可能会使应用难以维护。`$refs`特别应该被适度使用，因为过度依赖DOM操作可能会减少Vue应用的响应式和声明性特点。通常推荐使用props和events来实现父子组件间的通信。
