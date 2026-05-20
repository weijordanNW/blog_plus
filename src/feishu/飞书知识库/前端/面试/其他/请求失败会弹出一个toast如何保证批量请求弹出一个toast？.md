---
title: 请求失败会弹出一个toast如何保证批量请求弹出一个toast？
date: 2026-05-21
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/面试/其他
tag:
  - feishu
---
# 批量请求失败只弹出一个Toast 面试速记卡片
## 一、问题场景
页面同时发起**多个并发请求**，如果全部报错，会连续弹出多个 Toast，体验很差。需要做到：**同一时间段所有接口失败，只弹一次提示**。
## 二、核心原理（面试必背）
通过**全局状态锁 + 防抖**双层控制，限制 Toast 唯一弹出。
## 三、实现方案（标准答案）
### 1. 全局锁（核心）
- 定义全局变量 **isShowToast**

- 报错时：**锁为 false 才弹窗、立刻上锁**

- Toast 消失后 **解锁**

- 并发请求进来发现已上锁，直接丢弃，不弹窗

### 2. 防抖兜底（优化）
- 对错误提示做 **500ms 防抖**

- 极短时间内批量报错，只执行一次提示

- 防止锁状态异常导致重复弹窗

### 3. 过滤无效报错（细节加分）
- 主动取消的请求（Cancel/Abort）**不弹 Toast**

- 401、403 权限类错误单独处理，不走通用报错

## 四、完整一句话面试话术（直接背）
项目中并发多个接口报错会弹出多个 Toast，我通过**全局状态锁 + 防抖**处理：请求报错时先判断锁状态，没弹窗才提示并上锁，Toast 结束后解锁，同时加防抖兜底，保证批量请求在同一时间段只会弹出一次错误提示，解决重复弹窗问题。
## 五、关键点总结
- 本质：**控制弹窗频率，并发报错合并为一次**

- 主方案：全局锁

- 兜底方案：短时间防抖

- 优化：过滤取消请求、权限错误

# 图

![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/JC7GbzgLpowiFTxvrLVcdb3snRe.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/ZoHxbNmOhoxPjkxsKGhcdam1nDg.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/GL8kbqK7uow4ywxk7XHcUztSnIY.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/VXqLbClTaoBNDIxHXjJcrnetnFh.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/JwegbfcfmoQmkFxA05xcEyFMnLh.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/QRdQbwVUUooxhPxG3hpc90eMnzb.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/NIEdbv413oe7TAx6H3FcTDXMnZd.png)

