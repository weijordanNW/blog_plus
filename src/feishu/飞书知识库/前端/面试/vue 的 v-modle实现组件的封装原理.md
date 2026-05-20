---
title: modle实现组件的封装原理
date: 2026-05-21
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/面试
tag:
  - feishu
---
### 总结
- **Vue 2.x**: 使用 `model` 选项来指定 `v-model` 绑定的 prop 和事件。

- **Vue 3**: 默认使用 `modelValue` 和 `update:modelValue`，更加灵活。

通过 `props` 和 `emit`，我们可以轻松地在自定义组件中实现 `v-model`，从而实现父子组件之间的双向数据绑定。



`v-model` 是 Vue.js 中用于实现双向数据绑定的指令。它本质上是一个语法糖，结合了 `v-bind` 和 `v-on` 的功能。在自定义组件中，`v-model` 的实现原理主要依赖于 `model` 选项和 `props`、`emit` 机制。
### 1. `v-model` 的基本原理
在原生 HTML 元素上，`v-model` 会根据元素类型自动绑定 `value` 属性和 `input` 事件。例如：
```html
<input v-model="message">
```
等价于：
```html
<input :value="message" @input="message = $event.target.value">
```
### 在自定义组件中实现 `v-model`
在自定义组件中，`v-model` 的实现需要以下步骤：
#### 2.1 定义 `props` 和 `emit`
- `props`: 用于接收父组件传递的值。

- `emit`: 用于向父组件发送更新后的值。

#### 2.2 使用 `model` 选项
Vue 2.x 中，可以通过 `model` 选项来指定 `v-model` 绑定的属性和事件。默认情况下，`v-model` 会使用 `value` 作为 prop，`input` 作为事件。
```javascript
export default {
  model: {
    prop: 'value',  // 绑定的 prop
    event: 'input'  // 触发的事件
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    updateValue(newValue) {
      this.$emit('input', newValue);  // 触发 input 事件，更新父组件的值
    }
  }
};
```
#### 2.3 在 Vue 3 中的变化
在 Vue 3 中，`v-model` 的实现更加灵活。默认情况下，`v-model` 使用 `modelValue` 作为 prop，`update:modelValue` 作为事件。
```javascript
export default {
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  methods: {
    updateValue(newValue) {
      this.$emit('update:modelValue', newValue);  // 触发 update:modelValue 事件
    }
  }
};
```
### 示例
假设我们有一个自定义的输入组件 `CustomInput`，我们希望在这个组件中使用 `v-model`。
#### Vue 2.x 实现
```javascript
// CustomInput.vue
<template>
  <input :value="value" @input="updateValue($event.target.value)">
</template>
<script>
export default {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    updateValue(newValue) {
      this.$emit('input', newValue);
    }
  }
};
</script>
```
#### Vue 3 实现
```javascript
// CustomInput.vue
<template>
  <input :value="modelValue" @input="updateValue($event.target.value)">
</template>
<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  methods: {
    updateValue(newValue) {
      this.$emit('update:modelValue', newValue);
    }
  }
};
</script>
```
### 使用自定义组件
在父组件中使用 `CustomInput` 组件时，可以直接使用 `v-model`：
```html
<template>
  <div>
    <CustomInput v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>
<script>
import CustomInput from './CustomInput.vue';

export default {
  components: {
    CustomInput
  },
  data() {
    return {
      message: ''
    };
  }
};
</script>
```
### 总结
- **Vue 2.x**: 使用 `model` 选项来指定 `v-model` 绑定的 prop 和事件。

- **Vue 3**: 默认使用 `modelValue` 和 `update:modelValue`，更加灵活。

通过 `props` 和 `emit`，我们可以轻松地在自定义组件中实现 `v-model`，从而实现父子组件之间的双向数据绑定。
### 1.目标：
父组件通过v-model **简化代码**，实现子组件和父组件数据 **双向绑定**
### 2.如何简化：
v-model其实就是 :value和@input事件的简写
- 子组件：props通过value接收数据，事件触发 input

- 父组件：v-model直接绑定数据

### 3.代码示例
子组件
```plaintext
<template>
  <div>
    <select :value="value" @change="selectCity">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">武汉</option>
      <option value="104">广州</option>
      <option value="105">深圳</option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    value: String,
  },
  methods: {
    selectCity(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>
<style>
</style>
```


父组件
```plaintext
<template>
  <div class="app">
    <BaseSelect
      v-model="selectId"
    ></BaseSelect>
  </div>
</template>
<script>
import BaseSelect from './components/BaseSelect.vue'
export default {
  data() {
    return {
      selectId: '102',
    }
  },
  components: {
    BaseSelect,
  },
}
</script>
<style>
</style>
```

