---
icon: vue
date: 2022-10-25
category:
  - vue
tag:
---
# Vue

# 关于 Vue

## 虚拟dom

**虚拟DOM就是** **用Js来模拟出DOM结构** **，通过****diff算法**来计算出最小的变更，**通过对应的渲染器，来渲染到页面上。**

**同时虚拟DOM也为跨平台开发提供了极大的便利，开发者写的同一套代码（有些需要针对不同平台做区分），通过不同的渲染规则，就可以生成不同平台的代码。**

**在vue中会通过****渲染器**来将虚拟DOM转换为对应平台的真实DOM。如renderer(vnode， container)，该方法会根据vnode描述的信息（如tag、props、children）来创建DOM元素，根据规则为对应的元素添加属性和事件，处理vnode下的children。

## 双端diff算法和快速diff算法

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45821596/1725936704013-fb231d42-fdbd-41c8-a2de-9ec0d5312987.jpeg)**在Vue.js框架中，虚拟DOM的diff算法是用于比较新旧虚拟DOM树差异的核心机制，目的是为了高效地更新真实DOM。Vue 2和Vue 3在diff算法上有所不同，Vue 2使用的是双端diff算法，而Vue 3则引入了快速diff算法。**

### Vue 2的双端diff算法

**双端diff算法（Two-way diff）是一种在两端同时进行对比的算法。它从新旧两个虚拟DOM列表的头部和尾部开始，向中间进行扫描，寻找相同key的节点，并对这些节点进行更新或移动。这种方法可以减少不必要的DOM操作，但仍然存在一些性能瓶颈，尤其是在处理大量节点或复杂列表时。**

### Vue 3的快速diff算法

**Vue 3引入了快速diff算法，这是一种更高效的算法，它借鉴了纯文本diff算法的思想。快速diff算法在处理新旧节点列表时，会先进行预处理，找出可以确定无需比较的相同前后缀节点，然后只对中间不确定的部分进行深入比较。这种方法可以进一步减少不必要的DOM操作，提高性能。**

**快速diff算法的核心在于使用了一个名为source数组来记录新节点的位置索引，并通过构建最长递增子序列（Longest Increasing Subsequence, LIS）来确定哪些节点需要移动。这种方法相比双端diff算法，处理的边际条件更少，性能更优。**

### 总结

**Vue 3的快速diff算法相比Vue 2的双端diff算法，在处理复杂列表更新时，能够提供更好的性能。它通过预处理和最长递增子序列的构建，减少了不必要的DOM操作，使得渲染更新更加高效。这种算法的改进是Vue 3性能提升的一个重要方面。**

## vue2和vue3有哪些不同

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45821596/1725937348160-92450d55-52a6-4c92-a1f8-48ab06e33e45.jpeg)

<details class="lake-collapse"><summary id="u4b87aff0"></summary>

**Vue 2 和 Vue 3 都是流行的前端框架 Vue.js 的主要版本，它们在功能、性能和语法上有一些显著的差异。以下是 Vue 2 和 Vue 3 之间的一些主要区别：**

1. **响应式系统的重写** **：**

* **Vue 2 使用的是 **`<span class="ne-text">defineProperty</span>`（Object.defineProperty）来实现响应式系统。
* **Vue 3 引入了基于 Proxy 的响应式系统，这使得 Vue 3 能够更高效地追踪依赖和更新视图。**

2. **Composition API** **：**

* **Vue 3 引入了 Composition API，这是一种新的编写组件逻辑的方式，它提供了更好的代码组织和复用性，特别是在处理复杂组件时。**

3. **Fragment、Teleport 和 Suspense** **：**

* **Vue 3 引入了新的内置组件，如 **`<span class="ne-text">Fragment</span>`（允许多个根节点）、`<span class="ne-text">Teleport</span>`（可以将组件的子节点传输到 DOM 的其他部分）和 `<span class="ne-text">Suspense</span>`（用于异步组件的加载状态处理）。

4. **性能提升** **：**

* **Vue 3 在虚拟 DOM 的重写、组件初始化、编译器优化等方面都进行了性能提升。**

5. **Tree-shaking 支持** **：**

* **Vue 3 的模块化系统更好地支持了 Tree-shaking，这意味着在最终的构建中可以移除未使用的代码，从而减少应用的大小。**

6. **自定义渲染器 API** **：**

* **Vue 3 提供了更灵活的自定义渲染器 API，允许开发者创建自定义的渲染器。**

7. **全局 API 的更改** **：**

* **Vue 3 对全局 API 进行了更改，例如 **`<span class="ne-text">Vue.prototype</span>` 被 `<span class="ne-text">app.config.globalProperties</span>` 替代。

8. **模板和组件的改进** **：**

* **Vue 3 改进了模板编译器，支持更广泛的 JavaScript 特性，并允许在 **`<span class="ne-text"><script></span>` 标签中使用新的语法。

9. **TypeScript 支持** **：**

* **Vue 3 的代码库使用 TypeScript 重写，提供了更好的类型推断和类型检查。**

10. **内部重构** **：**

* **Vue 3 进行了大规模的内部重构，包括虚拟 DOM 的重写和响应式系统的改进。**

11. **新的生命周期钩子** **：**

* **Vue 3 引入了一些新的生命周期钩子，如 **`<span class="ne-text">onBeforeMount</span>`、`<span class="ne-text">onMounted</span>`、`<span class="ne-text">onBeforeUpdate</span>`、`<span class="ne-text">onUpdated</span>`、`<span class="ne-text">onBeforeUnmount</span>` 和 `<span class="ne-text">onUnmounted</span>`。

12. **更好的组件通信** **：**

* **Vue 3 提供了 **`<span class="ne-text">provide</span>` 和 `<span class="ne-text">inject</span>` 的改进版本，使得跨组件的状态共享更加方便。

**这些改进使得 Vue 3 在性能、可维护性和开发体验上都有了显著的提升。开发者在升级到 Vue 3 时，需要对这些变化有所了解，并可能需要对现有的代码进行一些调整。**

</details>

## vue3双向绑定实现

**劫持数据 Proxy**

**依赖收集 get**

**派发更新 set **

```javascript
// WeakMap常用于存储只有当key所引用的对象存在时（没有被回收）才有价值的消息，十分贴合双向绑定场景
const bucket = new WeakMap(); // 存储副作用函数

let activeEffect; // 用一个全局变量处理被注册的函数

const tempObj = {}; // 临时对象，用于操作

const data = { text: "hello world" }; // 响应数据源

// 用于清除依赖
function cleanup(effectFn) {
  for (let i = 0; i < effectFn.deps.length; i++) {
    const deps = effectFn.deps[i];
    deps.delete(effectFn);
  }
  effectFn.deps.length = 0;
}

// 处理依赖函数
function effect(fn) {
  const effectFn = () => {
    cleanup(effectFn);
    activeEffect = effectFn;
    fn();
  };
  effectFn.deps = [];
  effectFn();
}

// 在get时拦截函数调用track函数追踪变化
function track(target, key) {
  if (!activeEffect) return; //
  let depsMap = bucket.get(target);
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()));
  }
  let deps = depsMap.get(key);
  if (!deps) {
    depsMap.set(key, (deps = new Set()));
  }

  deps.add(activeEffect);

  activeEffect.deps.push(deps);
}

// 在set拦截函数内调用trigger来触发变化
function trigger(target, key) {
  const depsMap = bucket.get(target);
  if (!depsMap) return;
  const effects = depsMap.get(key);
  const effectsToRun = new Set(effects);
  effectsToRun.forEach(effectFn => effectFn());
  // effects && effects.forEach(fn => fn());
}

const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    if (!activeEffect) return; //
    console.log("get -> key", key);
    track(target, key);
    return target[key];
  },

  // 拦截设置操作
  set(target, key, newValue) {
    console.log("set -> key: newValue", key, newValue);
    target[key] = newValue;
    trigger(target, key);
  },
});

effect(() => {
  tempObj.text = obj.text;
  console.log("tempObj.text :>> ", tempObj.text);
});

setTimeout(() => {
  obj.text = "hi vue3";
}, 1000);
```

## vue3中的ref、toRef、toRefs总结

### 总结

* `<span class="ne-text">ref</span>` 用于创建单一值的响应式引用。
* `<span class="ne-text">toRef</span>` 用于创建对象某个属性的响应式引用。
* `<span class="ne-text">toRefs</span>` 用于将响应式对象的每个属性转换为响应式引用。
* **computed和watch的区别**
* 

<details class="lake-collapse"><summary id="u51fb47af"><span class="ne-text">拓展</span></summary>

**在 Vue 3 中，响应式系统得到了重写，引入了基于 Proxy 的 API，这使得 Vue 3 的响应式特性更加强大和灵活。**`<span class="ne-text">ref</span>`、`<span class="ne-text">toRef</span>` 和 `<span class="ne-text">toRefs</span>` 是 Vue 3 中与响应式系统相关的几个重要函数，它们在 Composition API 中扮演着关键角色。

### ref

`<span class="ne-text">ref</span>` 是一个用于创建响应式引用的函数。它接受一个值作为参数，并返回一个包含 `<span class="ne-text">.value</span>` 属性的响应式对象。这个对象的 `<span class="ne-text">.value</span>` 属性指向原始值，并且当原始值改变时，任何依赖于该响应式引用的组件都会重新渲染。

```javascript
import { ref } from 'vue';

const count = ref(0); // 创建一个响应式引用
```

**在模板中使用时，可以直接访问 **`<span class="ne-text">.value</span>` 属性：

```vue
<template>
  <div>{{ count.value }}</div>

</template>
```

**或者在 Vue 3.2 及更高版本中，可以使用 **`<span class="ne-text">v-model</span>` 指令的 `<span class="ne-text">modelValue</span>` 和 `<span class="ne-text">"update:modelValue"</span>` 事件进行更简洁的绑定：

```vue
<template>
  <input v-model="count" />
</template>
```

### toRef

`<span class="ne-text">toRef</span>` 用于创建一个响应式引用，但它是针对对象的某个属性。当你有一个响应式对象，并想要创建一个仅针对其某个属性的响应式引用时，可以使用 `<span class="ne-text">toRef</span>`。

```javascript
import { toRef } from 'vue';

const state = reactive({ count: 0 });
const countRef = toRef(state, 'count'); // 创建一个仅针对 state.count 的响应式引用
```

**这样，**`<span class="ne-text">countRef</span>` 将仅追踪 `<span class="ne-text">state</span>` 对象中 `<span class="ne-text">count</span>` 属性的变化。

### toRefs

`<span class="ne-text">toRefs</span>` 用于将一个响应式对象转换为一个包含多个响应式引用的对象。这在处理由 `<span class="ne-text">reactive</span>` 创建的响应式对象时非常有用，因为它允许你保留每个属性的响应性。

```javascript
import { toRefs } from 'vue';

const state = reactive({ count: 0, name: 'Vue' });
const { count, name } = toRefs(state);
```

**现在，**`<span class="ne-text">count</span>` 和 `<span class="ne-text">name</span>` 都是响应式引用，它们的更新将触发依赖它们的组件重新渲染。

### 总结

* `<span class="ne-text">ref</span>` 用于创建单一值的响应式引用。
* `<span class="ne-text">toRef</span>` 用于创建对象某个属性的响应式引用。
* `<span class="ne-text">toRefs</span>` 用于将响应式对象的每个属性转换为响应式引用。。这些函数是 Vue 3 Composition API 的基础，它们提供了一种灵活的方式来处理响应式数据。

</details>

## computed和watch的区别

**使用场景：computed适用于一个数据 受多个数据影响 使用；**

**watch适合一个数据 影响 多个数据使用。**

**区别：computed属性默认会走** **缓存** **，只有依赖数据发生变化，才会重新计算，不支持异步，有异步导致数据发生变化时，无法做出相应改变；**

**watch不依赖缓存，一旦数据发生变化就直接触发响应操作，支持异步。**

## vue-router的路由守卫

* **全局前置守卫**

```javascript
 router.beforeEach((to, from, next) => {
  // to: 即将进入的目标
  // from:当前导航正要离开的路由
  return false // 返回false用于取消导航
  return {name: 'Login'} // 返回到对应name的页面
  next({name: 'Login'}) // 进入到对应的页面
  next() // 放行
})
```

* **全局解析守卫** **:类似beforeEach**

```javascript
router.beforeResolve(to => {
  if(to.meta.canCopy) {
    return false // 也可取消导航
  }
})
```

* **全局后置钩子**

```javascript
router.afterEach((to, from) => {
  logInfo(to.fullPath)
})
```

* **导航错误钩子，导航发生错误调用**

```javascript
router.onError(error => {
  logError(error)
})
```

* **路由独享守卫,beforeEnter**可以传入单个函数，也可传入多个函数。

```javascript
function dealParams(to) {
  // ...
}
function dealPermission(to) {
  // ...
}

const routes = [
  {
    path: '/home',
    component: Home,
    beforeEnter: (to, from) => {
      return false // 取消导航
    },
    // beforeEnter: [dealParams, dealPermission]
  }
]
```

**组件内的守卫**

```javascript
const Home = {
  template: `...`,
  beforeRouteEnter(to, from) {
    // 此时组件实例还未被创建，不能获取this
  },
  beforeRouteUpdate(to, from) {
    // 当前路由改变，但是组件被复用的时候调用，此时组件已挂载好
  },
  beforeRouteLeave(to, from) {
    // 导航离开渲染组件的对应路由时调用
  }
}
```

## composition Api对比 option Api的优势

* **更好的****代码组织**

**--组合式API**

* **更好的****逻辑复用**

**--Hooks钩子函数 及 替代mixin的 **自定义的use 前缀的 Hooks

* **更好的****类型推导**

**--TS**
