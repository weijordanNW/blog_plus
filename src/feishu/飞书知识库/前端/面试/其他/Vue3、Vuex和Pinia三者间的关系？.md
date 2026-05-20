---
title: Vue3、Vuex和Pinia三者间的关系？
date: 2026-05-21
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/面试/其他
tag:
  - feishu
---
# 1.Vue3 / Vuex / Pinia 面试笔记
---
## 一、三者核心定位（面试满分答案）
表格

---
## 二、三者关系一句话讲清
- Pinia 是 Vuex 的升级版，也是 Vue3 官方推荐的状态管理方案；

- Vuex 是旧方案，已逐步被淘汰；

- Vue3 是框架底层，Pinia 基于 Vue3 构建。

---
## 三、为什么 Pinia 取代了 Vuex？（面试官加分回答）
1. **写法极简**：去掉了 `mutation`，仅保留 `state` / `getters` / `actions`，大幅简化代码。

1. **完美支持 TypeScript**：天然类型推断，无需额外配置。

1. **模块化更友好**：无需手动配置 `modules`，store 天然分模块，支持直接 import 使用。

1. **体积更小，性能更好**：比 Vuex 更轻量，热更新体验更友好。

1. **与 Vue3 完全对齐**：和 Vue3 的响应式体系、Composition API 深度融合，开发体验一致。

---
### 一句话总结
Vue3 是框架本身，Pinia 是 Vue3 时代的新一代状态管理方案，替代了旧的 Vuex。


# 2.Vue3 / Vuex / Pinia 面试速记卡片
（直接背，面试张口就来）
---
## 一、三者核心定位
- **Vue3**：前端框架本体，提供响应式、组件、Composition API，是项目基座。

- **Vuex**：Vue2/3 老一代状态管理库，写法繁琐（state/mutations/actions），已逐步被淘汰。

- **Pinia**：Vue 官方新一代状态管理库，Vue3 量身打造，可理解为 Vuex 5。

---
## 二、三者关系一句话
Pinia 是 Vuex 的升级版，也是 Vue3 官方推荐的状态管理方案；Vue3 是框架底层，Pinia 基于 Vue3 构建。
---
## 三、Pinia 取代 Vuex 的核心原因
1. **写法极简**：去掉 mutation，仅保留 state /getters/actions

1. **完美支持 TS**：天然类型推断，开发体验更好

1. **天然模块化**：无需手动配置 modules，直接 import 使用

1. **轻量高效**：体积更小，热更新更友好

1. **深度适配 Vue3**：与 Composition API、响应式体系完全对齐

---
### 终极一句话总结
Vue3 是框架本身，Pinia 是 Vue3 时代更轻量、更现代的状态管理方案，替代了旧版 Vuex。


# 3.图
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/YdQ3bjkyzomkCgxd1jUclbE3nBh.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/DsKLbWG1IoddA2xpoJlcM448nnd.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/EDQdbtg2Co4fARxyv8Ecpl8Fn0f.png)

