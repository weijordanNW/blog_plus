---
title: 专为DeepSeek打造的AI编程Agent客户端 Git项目汇总
date: '2026-06-11 12:34:56'
updated: '2026-06-11 12:36:08'
---
## 开源Git项目清单
### 1. DeepSeek-Reasonix
#### 项目简介
专为DeepSeek大模型打造的**终端AI编程Agent**，核心优势是依托DeepSeek前缀缓存机制，大幅降低长会话Token成本，缓存命中率最高可达99.82%，可替代Claude Code完成全流程编程工作，同时提供终端版与桌面版，适配多系统平台。
#### 核心特性
1. 缓存优先运行循环，长对话API成本直降80%以上；

1. 完整工程化能力：代码编写、漏洞排查、测试运行、代码提交；

1. 支持终端CLI与桌面客户端双形态；

1. 开源免费，支持私有化部署。

#### 基础信息
- 开源协议：MIT

- GitHub仓库地址：https://github.com/esengine/DeepSeek-Reasonix

- 官网：https://esengine.github.io/DeepSeek-Reasonix/

- NPM包地址：https://www.npmjs.com/package/reasonix

#### 快速安装&启动
```bash
# 方式1：无需全局安装，直接npx运行（推荐）
cd 你的项目目录
npx reasonix code

# 方式2：全局安装使用
npm install -g reasonix
reasonix code
```
#### 运行环境要求
Node.js ≥ 22（推荐最新LTS版本），支持Windows、macOS、Linux系统。


---

### 2. DeepSeek-TUI（已更名 codewhale）
#### 项目简介
由`鲸鱼兄弟`使用Rust开发的**本地终端AI编程智能体**，原生适配DeepSeek系列模型（主打DeepSeek V4），可在终端内完成对话、文件编辑、命令执行、多子任务管理，是轻量化的终端编程助手，目前GitHub热度较高。
#### 核心特性
1. 纯终端运行，本地轻量化部署；

1. 支持文件编辑、Shell命令执行、多任务协调；

1. 内置审批门控，使用安全可控；

1. 完全替代Claude Code，主打低成本终端编程。

#### 基础信息
- 开发语言：Rust

- GitHub仓库地址：https://github.com/Hmbown/DeepSeek-TUI

- 版本更新：0.8.44版本正式更名为 **codewhale**

---

### 3. 关联配套项目
#### 3.1 ClaudeCode 桌面版（对接DeepSeek）
##### 项目简介
原生Claude Code桌面客户端，可无缝接入DeepSeek API，**无需科学上网、免登录**，作为对比与替代方案讲解。
##### 补充说明
无独立专属Git仓库标注，使用方式为本地客户端+DeepSeek API对接。


#### 3.2 Codex（对接DeepSeek API）
##### 项目简介
可接入DeepSeek API的编程工具，视频提供保姆级安装与API接入教程，新手友好，一站式配置使用。


## 项目对比简述

| 项目名称                    | 形态    | 核心优势            | 适用场景                   |
| ----------------------- | ----- | --------------- | ---------------------- |
| DeepSeek-Reasonix       | 终端+桌面 | 极致缓存、大幅降本、全工程能力 | 长期编程会话、追求低成本           |
| DeepSeek-TUI(codewhale) | 纯终端   | Rust轻量化、原生终端体验  | 习惯命令行、极简部署             |
| ClaudeCode桌面版           | 桌面客户端 | 图形化操作、上手简单      | 偏好可视化界面、原Claude Code用户 |


## 补充说明
1. 以上项目均**深度适配DeepSeek模型**，为DeepSeek专属AI编程Agent，非通用大模型客户端；

