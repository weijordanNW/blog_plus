---
title: Vue 响应式数据的原理
date: '2026-05-21'
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/vue
tag:
  - feishu
---
## 简述 Vue 响应式数据的原理？（ 重点 ）
[思维导图-补充-腾讯文档](https://docs.qq.com/mind/DQndiQ3B0dE1nS3dC?nlc=1&subId=BB08J2&mode=mind)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/AKStbj4PYo6zvvx9O2BcaB89nMf.png)
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
