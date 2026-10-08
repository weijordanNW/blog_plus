---
title: AI项目管理
date: '2026-06-11 13:27:28'
updated: '2026-06-11 14:15:37'
---
[视频地址](https://www.bilibili.com/video/BV1L2EE6bEeh/?t=8&spm_id_from=333.1007.tianma.1-1-1.click&vd_source=ac6ab4c3cdc5d0193edf55fd77ba0b4f)



**index**: 索引

**adr **: 架构决策纪录，Architecture Decision Record

**spec**:规格说明-Specification

**harness**:测试夹具 / 运行基座 / 执行框架


```css
docs/
├─ INDEX.md        # 全局总索引
├─ adr/             # 架构决策记录集合
├─ spec/            # 各功能规格文档
tests/
└─ harness/         # 自动化测试基座
```

## Docs 统一管理
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/Dm0Db2BaeomFOxxHcJJch5vCnsh.png)
## AGENTS.md
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/OiPqbVorXoIgBoxVoOCcDP6lndc.png)
```css
# AGENTS.md
## 项目文档
总索引：`docs/INDEX.md`，用于定位相关模块文档，功能决策文档；

## 硬规则
- 用户没有自测通过，没有明确指令，禁止自行提交推送。

## AI Agent风格
1. 用户如果需要新增功能，先与用户详细讨论，明确用户需求，了解用户为何要添加该功能，想要实现什么效果，直到你最终明确因果链后，将你的理解回馈给用户，最后再讨论落地方案；
2. 用户如果需要维护某些功能或者删除某些功能，先与用户沟通清楚用户希望删除或者维护后实现什么目的，然后将你的理解反馈给用户，最后评估实现该目的会牵扯哪些模块，逻辑，再输出具体的落地方案；
3. 用户如果明确指明具体的bug或者问题，先与用户明确详细的复现路径，确认复现后，分析可能涉及的模块功能点以及相关文档，然后进行深层分析，如果分析期复现路径期间遇到与当前项目决策点有分歧，先反馈给用户，与用户讨论完明确因果链后，最后再输出具体的方案；
4. spec的风格主要是明确因果链，以及明确边界，和禁止什么；
5. harness的落地原则：不包含纯产品意图（功能意图）、探索性功能、文案、UI、一次性设计；
6. 对于新功能，如果最终落地且自测通过，需要反馈给用户是否需要spec、harness；
7. 对于维护或者bug修复，根据spec和harness落地原则，自行评估是否需要spec和harness。

除非用户明确任务全自动化，交给你完全自主，否则按照以上AI Agent风格来。
```
## 文档索引
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/E4gybGpoFoHATdxijV1cQQ47nMg.png)
## bug修复
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/C6NubtRuaoWluUxhky2cIH26nob.png)
## 验收后沉淀spec
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/V1YEbBLymoK45sxeo2qc4WYDnEg.png)

## 重构
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/DQ1Mbj960oR1NmxOU6YcOIDvnth.png)

## 常见问题
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/AWNrbFZXfofZA7xKlIDcc261nPc.png)
### 每个需求都需要新开会话？
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/PUdvbT9dyoESYPxiB2xcjXX3nMf.png)
### 有spec就要harness？
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/G2b5bXLeEo1wa7x412ocLRtenff.png)
### 什么时候需要harness？
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/FSFKb1WWBoS861xRiICcA6FCnub.png)

