---
title: VibeCoding经验总结-参考1
date: '2026-06-11 01:37:02'
updated: '2026-06-11 01:37:20'
---
# VibeCoding经验总结
## 全局
### 开发工具
codex app,claude code,opencode
### 工具
#### CodeGraph
索引项目文件，减少token消耗，加快对项目的加载速度
#### everything claude code
一套可复用的工程工作流组件库，把常用的 agents（子代理）、skills（工作流技能）、slash commands（斜杠命令）、rules（规则约束）、hooks（事件钩子自动化）、以及 MCP server 配置示例集中在一起，提供一套可直接复用的工程化工作流。
#### superpower
**是一套给 AI 编程助手（如 Claude Code、Cursor 等）用的技能框架**‌，把资深工程师的开发经验固化为可组合的技能模块，强制 AI 遵循标准化开发流程，从"盲目写代码"变成"有规划、重质量、可追溯"的专业开发伙伴。
##### git
善用git防止失控
### 前端
##### getdesign
把主流网站的设计方案总结成了md,开发是让ai参考这个md，样式永远不失控，审美在线
#### OpenDesign（不好用，不如stitch好用）
前端原型设计工具，本地部署，支持codex claude等
#### Stitch
用google的stitch设计界面，现在这个还是免费的，设计出来后可以直接通过mcp 根codex或者claude 链接 然后实现
#### 
# 开发思路
#### 1 先通过stitch完成界面的设计
##### 2 下载界面，然ai解析界面然后分析需求形成prd文档
##### 3 根据prd文档形成需求文档，功能文档，技术文档
##### 4 根据这些文档开始开发
##### 5 过程中多形成项目skills，可以节约token
最好所有操作都文档先行，不要一上来就写代码，最好所有操作都文档先行，不要一上来就写代码，最好所有操作都文档先行，不要一上来就写代码

中间测试，开发过程 以上插件都会帮你自动规划
