---
title: Codex /goal
date: '2026-05-25'
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/AI/Codex
tag:
  - feishu
---
# [🚀开发者必看！Codex /goal命令你真用对了吗？goal命令高级技巧保姆级教程，Plan模式+Spec-Driven+自研Skill，三大高级技巧组合让开发效率倍增！真正内置Ralph Loop](https://www.aivi.fyi//llms/codex-goal)
#  7 minute read
####  **On this page**
- [一、/goal 是什么，以及它为什么重要](https://www.aivi.fyi/llms/codex-goal#%E4%B8%80goal-%E6%98%AF%E4%BB%80%E4%B9%88%E4%BB%A5%E5%8F%8A%E5%AE%83%E4%B8%BA%E4%BB%80%E4%B9%88%E9%87%8D%E8%A6%81)

- [二、/goal 解决了哪些以前解决不了的问题](https://www.aivi.fyi/llms/codex-goal#%E4%BA%8Cgoal-%E8%A7%A3%E5%86%B3%E4%BA%86%E5%93%AA%E4%BA%9B%E4%BB%A5%E5%89%8D%E8%A7%A3%E5%86%B3%E4%B8%8D%E4%BA%86%E7%9A%84%E9%97%AE%E9%A2%98)
	- [1. 目标本身的持久化](https://www.aivi.fyi/llms/codex-goal#1-%E7%9B%AE%E6%A0%87%E6%9C%AC%E8%BA%AB%E7%9A%84%E6%8C%81%E4%B9%85%E5%8C%96)
		- [2. 内置的”完成审计”](https://www.aivi.fyi/llms/codex-goal#2-%E5%86%85%E7%BD%AE%E7%9A%84%E5%AE%8C%E6%88%90%E5%AE%A1%E8%AE%A1)
		- [3. Token 预算的软停止](https://www.aivi.fyi/llms/codex-goal#3-token-%E9%A2%84%E7%AE%97%E7%9A%84%E8%BD%AF%E5%81%9C%E6%AD%A2)
		- [4. 完整的生命周期控制](https://www.aivi.fyi/llms/codex-goal#4-%E5%AE%8C%E6%95%B4%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%8E%A7%E5%88%B6)
	
- [三、什么场景适合用 /goal，什么场景不要用](https://www.aivi.fyi/llms/codex-goal#%E4%B8%89%E4%BB%80%E4%B9%88%E5%9C%BA%E6%99%AF%E9%80%82%E5%90%88%E7%94%A8-goal%E4%BB%80%E4%B9%88%E5%9C%BA%E6%99%AF%E4%B8%8D%E8%A6%81%E7%94%A8)
	- [✅ 适合用 /goal](https://www.aivi.fyi/llms/codex-goal#-%E9%80%82%E5%90%88%E7%94%A8-goal)
		- [❌ 不要用 /goal](https://www.aivi.fyi/llms/codex-goal#-%E4%B8%8D%E8%A6%81%E7%94%A8-goal)
	
- [四、启用 /goal](https://www.aivi.fyi/llms/codex-goal#%E5%9B%9B%E5%90%AF%E7%94%A8-goal)
	- [方法 1：改配置文件](https://www.aivi.fyi/llms/codex-goal#%E6%96%B9%E6%B3%95-1%E6%94%B9%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)
		- [方法 2：让 Codex 自己改](https://www.aivi.fyi/llms/codex-goal#%E6%96%B9%E6%B3%95-2%E8%AE%A9-codex-%E8%87%AA%E5%B7%B1%E6%94%B9)
		- [验证](https://www.aivi.fyi/llms/codex-goal#%E9%AA%8C%E8%AF%81)
	
- [五、/goal 提示词的核心心法](https://www.aivi.fyi/llms/codex-goal#%E4%BA%94goal-%E6%8F%90%E7%A4%BA%E8%AF%8D%E7%9A%84%E6%A0%B8%E5%BF%83%E5%BF%83%E6%B3%95)
	- [五段式黄金模板](https://www.aivi.fyi/llms/codex-goal#%E4%BA%94%E6%AE%B5%E5%BC%8F%E9%BB%84%E9%87%91%E6%A8%A1%E6%9D%BF)
		- [一个具体例子](https://www.aivi.fyi/llms/codex-goal#%E4%B8%80%E4%B8%AA%E5%85%B7%E4%BD%93%E4%BE%8B%E5%AD%90)
	
- [六、三种典型工作流](https://www.aivi.fyi/llms/codex-goal#%E5%85%AD%E4%B8%89%E7%A7%8D%E5%85%B8%E5%9E%8B%E5%B7%A5%E4%BD%9C%E6%B5%81)
	- [工作流 A：/goal 直接用 — 适合中等任务](https://www.aivi.fyi/llms/codex-goal#%E5%B7%A5%E4%BD%9C%E6%B5%81-agoal-%E7%9B%B4%E6%8E%A5%E7%94%A8--%E9%80%82%E5%90%88%E4%B8%AD%E7%AD%89%E4%BB%BB%E5%8A%A1)
		- [工作流 B：/plan + /goal — 适合复杂任务](https://www.aivi.fyi/llms/codex-goal#%E5%B7%A5%E4%BD%9C%E6%B5%81-bplan--goal--%E9%80%82%E5%90%88%E5%A4%8D%E6%9D%82%E4%BB%BB%E5%8A%A1)
		- [工作流 C：OpenSpec + /goal — 适合规格驱动开发](https://www.aivi.fyi/llms/codex-goal#%E5%B7%A5%E4%BD%9C%E6%B5%81-copenspec--goal--%E9%80%82%E5%90%88%E8%A7%84%E6%A0%BC%E9%A9%B1%E5%8A%A8%E5%BC%80%E5%8F%91)
		- [1. 安装 OpenSpec](https://www.aivi.fyi/llms/codex-goal#1-%E5%AE%89%E8%A3%85-openspec)
			- [2. 用 OpenSpec 生成规格文档](https://www.aivi.fyi/llms/codex-goal#2-%E7%94%A8-openspec-%E7%94%9F%E6%88%90%E8%A7%84%E6%A0%BC%E6%96%87%E6%A1%A3)
			- [3. 用 /goal 执行规格](https://www.aivi.fyi/llms/codex-goal#3-%E7%94%A8-goal-%E6%89%A7%E8%A1%8C%E8%A7%84%E6%A0%BC)
		
- [七、用 goal-prompt-builder 把上面这些自动化](https://www.aivi.fyi/llms/codex-goal#%E4%B8%83%E7%94%A8-goal-prompt-builder-%E6%8A%8A%E4%B8%8A%E9%9D%A2%E8%BF%99%E4%BA%9B%E8%87%AA%E5%8A%A8%E5%8C%96)
	- [它解决什么](https://www.aivi.fyi/llms/codex-goal#%E5%AE%83%E8%A7%A3%E5%86%B3%E4%BB%80%E4%B9%88)
		- [它内部是怎么工作的](https://www.aivi.fyi/llms/codex-goal#%E5%AE%83%E5%86%85%E9%83%A8%E6%98%AF%E6%80%8E%E4%B9%88%E5%B7%A5%E4%BD%9C%E7%9A%84)
		- [怎么安装](https://www.aivi.fyi/llms/codex-goal#%E6%80%8E%E4%B9%88%E5%AE%89%E8%A3%85)
		- [方式 1：一行命令安装](https://www.aivi.fyi/llms/codex-goal#%E6%96%B9%E5%BC%8F-1%E4%B8%80%E8%A1%8C%E5%91%BD%E4%BB%A4%E5%AE%89%E8%A3%85)
			- [方式 2：克隆并软链](https://www.aivi.fyi/llms/codex-goal#%E6%96%B9%E5%BC%8F-2%E5%85%8B%E9%9A%86%E5%B9%B6%E8%BD%AF%E9%93%BE)
			- [方式 3：让 Codex 自己装（视频演示中用的方式）](https://www.aivi.fyi/llms/codex-goal#%E6%96%B9%E5%BC%8F-3%E8%AE%A9-codex-%E8%87%AA%E5%B7%B1%E8%A3%85%E8%A7%86%E9%A2%91%E6%BC%94%E7%A4%BA%E4%B8%AD%E7%94%A8%E7%9A%84%E6%96%B9%E5%BC%8F)
			- [怎么用](https://www.aivi.fyi/llms/codex-goal#%E6%80%8E%E4%B9%88%E7%94%A8)
	
- [八、几个非常容易踩的坑](https://www.aivi.fyi/llms/codex-goal#%E5%85%AB%E5%87%A0%E4%B8%AA%E9%9D%9E%E5%B8%B8%E5%AE%B9%E6%98%93%E8%B8%A9%E7%9A%84%E5%9D%91)
	- [坑 1：Plan 模式下 /goal 不延续](https://www.aivi.fyi/llms/codex-goal#%E5%9D%91-1plan-%E6%A8%A1%E5%BC%8F%E4%B8%8B-goal-%E4%B8%8D%E5%BB%B6%E7%BB%AD)
		- [坑 2：中途 /compact 把 goal 上下文搞丢](https://www.aivi.fyi/llms/codex-goal#%E5%9D%91-2%E4%B8%AD%E9%80%94-compact-%E6%8A%8A-goal-%E4%B8%8A%E4%B8%8B%E6%96%87%E6%90%9E%E4%B8%A2)
		- [坑 3：第一条消息就发 /goal，之后 resume 列表里找不到这个会话](https://www.aivi.fyi/llms/codex-goal#%E5%9D%91-3%E7%AC%AC%E4%B8%80%E6%9D%A1%E6%B6%88%E6%81%AF%E5%B0%B1%E5%8F%91-goal%E4%B9%8B%E5%90%8E-resume-%E5%88%97%E8%A1%A8%E9%87%8C%E6%89%BE%E4%B8%8D%E5%88%B0%E8%BF%99%E4%B8%AA%E4%BC%9A%E8%AF%9D)
		- [坑 4：目标里出现”全部 / 所有 / 彻底 / improve”](https://www.aivi.fyi/llms/codex-goal#%E5%9D%91-4%E7%9B%AE%E6%A0%87%E9%87%8C%E5%87%BA%E7%8E%B0%E5%85%A8%E9%83%A8--%E6%89%80%E6%9C%89--%E5%BD%BB%E5%BA%95--improve)
		- [坑 5：不设 token 预算](https://www.aivi.fyi/llms/codex-goal#%E5%9D%91-5%E4%B8%8D%E8%AE%BE-token-%E9%A2%84%E7%AE%97)
		- [坑 6：破坏性操作不加保护](https://www.aivi.fyi/llms/codex-goal#%E5%9D%91-6%E7%A0%B4%E5%9D%8F%E6%80%A7%E6%93%8D%E4%BD%9C%E4%B8%8D%E5%8A%A0%E4%BF%9D%E6%8A%A4)
	
- [九、控制命令速查](https://www.aivi.fyi/llms/codex-goal#%E4%B9%9D%E6%8E%A7%E5%88%B6%E5%91%BD%E4%BB%A4%E9%80%9F%E6%9F%A5)

- [十、启动前 checklist](https://www.aivi.fyi/llms/codex-goal#%E5%8D%81%E5%90%AF%E5%8A%A8%E5%89%8D-checklist)

- [十一、一些更宏观的观察](https://www.aivi.fyi/llms/codex-goal#%E5%8D%81%E4%B8%80%E4%B8%80%E4%BA%9B%E6%9B%B4%E5%AE%8F%E8%A7%82%E7%9A%84%E8%A7%82%E5%AF%9F)

# `/goal` 是 OpenAI 在 **Codex CLI 0.128.0**（2026 年 4 月 30 日发布）中新增的一条命令。它不是又一个普通的提示词模板，而是 Codex 内部新增了一整套**目标生命周期管理**机制——给一个目标，Codex 会自己一轮接一轮往下推进，真正实现无人值守。社区里已经出现连续运行 21 小时、烧掉 9 亿 token 的案例。这篇笔记把我自己踩过的坑、固定下来的工作流、配套的 Skill 全都整理成保姆级教程。
> # _🚀 本篇笔记所对应的视频：_  
> - [👉👉👉 通过哔哩哔哩观看](https://www.bilibili.com/video/BV13KR1BEEBm/)  
>   
> - [👉👉👉 通过YouTube观看](https://youtu.be/sAYM1xvDXw4)  
> 

---
## **一、**`**/goal**` **是什么，以及它为什么重要**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E4%B8%80goal-%E6%98%AF%E4%BB%80%E4%B9%88%E4%BB%A5%E5%8F%8A%E5%AE%83%E4%B8%BA%E4%BB%80%E4%B9%88%E9%87%8D%E8%A6%81)
# `/goal` 是 OpenAI 在 **Codex CLI 0.128.0**（2026 年 4 月 30 日发布）中新增的一条命令。官方更新日志的原话是：
> # _Added persisted /goal workflows with app-server APIs, model tools, runtime continuation, and TUI controls for create, pause, resume, and clear._
# 翻译成大白话就是：`/goal` 不是又一个普通的提示词模板，而是 Codex 内部新增了一整套**目标生命周期管理**机制。它由四个层面共同构成：
1. **持久化层** — 把目标作为一个独立于对话历史的状态存起来，带状态机（`active` / `paused` / `achieved` / `unmet` / `budget_limited`）

1. **App-server RPC** — `thread/goal/{get, set, clear}` 三个接口，让客户端可以读写目标状态

1. **模型工具** — `get_goal`、`create_goal`、`update_goal` 三个工具，让模型可以查询和声明完成，但**不能**自己暂停/清空/篡改

1. **运行时延续（continuation）+ TUI** — 每一轮空闲时，Codex 会自动注入一段”延续提示词”让模型决定下一步，直到目标达成、被暂停、被清空或者烧到 token 上限才停

# 这套机制最直观的效果就是：**给一个目标，Codex 会自己一轮接一轮往下推进，真正实现无人值守**。社区里已经出现连续运行 21 小时、烧掉 9 亿 token 的案例；我自己测试中也跑过几个小时不间断的批量重构任务。
# 如果你之前听说过 **Ralph Loop**（用脚本反复让 agent 跑同一个目标的工作流），`/goal` 就是 OpenAI 把它做进了 Codex 内核里。OpenAI 总裁 Greg Brockman 在 X 上的原话是：_“codex now has a built in Ralph loop++”_。比起外部脚本驱动的 Ralph Loop，内置版本的优势在于：目标可以跨会话恢复、token 预算是一等公民、暂停/恢复是原生命令，而且不需要每轮重建上下文，产出质量明显更稳。
---
## **二、**`**/goal**` **解决了哪些以前解决不了的问题**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E4%BA%8Cgoal-%E8%A7%A3%E5%86%B3%E4%BA%86%E5%93%AA%E4%BA%9B%E4%BB%A5%E5%89%8D%E8%A7%A3%E5%86%B3%E4%B8%8D%E4%BA%86%E7%9A%84%E9%97%AE%E9%A2%98)
# 理解 `/goal` 价值的关键，是它**到底解决了什么以前没办法解决的问题**。我归纳为四点：
### **目标本身的持久化**[Permalink](https://www.aivi.fyi/llms/codex-goal#1-%E7%9B%AE%E6%A0%87%E6%9C%AC%E8%BA%AB%E7%9A%84%E6%8C%81%E4%B9%85%E5%8C%96)
# 普通 prompt 是写在 Codex 的对话流里的。一旦上下文超过阈值触发 `/compact`，或者你切换会话，prompt 就可能被压缩、被覆盖、被丢失。`/goal` 不一样，它把”目标”作为独立的 thread 状态存起来，跟对话历史是两回事。所以：
- `/compact` 压缩对话历史，**不会**破坏 goal 状态

- 关掉终端，下次 `codex resume <id>` 还能续上之前的 goal

- 多天跨度的长任务也能撑住

> # _注意一个已知问题：Issue #19910 报告，如果 _`_/compact_`_ 发生在__**一轮模型调用执行的中间**__，延续提示词不会被重新注入，下一个 agent 可能丢掉目标和审计要求。如果你计划做超长任务，尽量让自动 compaction 落在轮次边界而不是手动压缩。_
### **内置的”完成审计”**[Permalink](https://www.aivi.fyi/llms/codex-goal#2-%E5%86%85%E7%BD%AE%E7%9A%84%E5%AE%8C%E6%88%90%E5%AE%A1%E8%AE%A1)
# 这是 `/goal` 最低估的部分，但也是最关键的部分。
# 每一轮空闲后，Codex 会自动向模型注入一段叫 `continuation.md` 的提示词（源码在 `codex-rs/core/templates/goals/continuation.md`）。这段提示词的核心要求是这样的（直译关键段落）：
> # _在判定目标已达成之前，执行一次”完成审计”：_  
> - _把目标重述为具体的交付物或成功标准_  
>   
> - _构建一份__**提示词到产物**__的清单，把每一条显式要求、每一个编号项、每一个具名文件、命令、测试、门禁、交付物映射到具体证据_  
>   
> - _检查相关文件、命令输出、测试结果、PR 状态等真实证据_  
>   
> - _**不要把代理信号当成完成证据**__：测试通过、清单填满、verifier 跑成功、写了大量代码 —— 这些只是辅助信号，不能单独作为完成依据_  
>   
> - _**把不确定视作未达成**__；继续验证或继续工作_  
> 
# 以及一段非常关键的反偷懒规则：
> # _不要依赖你的意图、阶段性进度、已耗费精力、对早前工作的记忆、或一个看上去合理的最终答案，作为完成的证明。只有审计显示目标确实已达成、且没有遗留必需工作时，才能调用 _`_update_goal_`_ 标记完成。_
# 这套机制是在解决一个具体的痛点：**模型在长任务中习惯”sandbag”**（早早声称做完然后偷懒）。`/goal` 把这种倾向用机制压住了 —— 但前提是你给的目标必须能被映射成一份清单。
### **Token 预算的软停止**[Permalink](https://www.aivi.fyi/llms/codex-goal#3-token-%E9%A2%84%E7%AE%97%E7%9A%84%E8%BD%AF%E5%81%9C%E6%AD%A2)
# `/goal` 支持设置 token 预算上限。一旦烧到上限，Codex 不会粗暴中断当前轮次，而是注入另一段提示词 `budget_limit.md`，让模型把当前任务**收尾**：总结已完成的进度、列出剩余工作、给出下一步建议，然后停下。
# 对于无人值守场景，这意味着即使你设错了预期或者目标比想象中复杂，你也能在第二天打开终端时拿到一份能看懂的进度报告，而不是一堆半成品和没了的 token。
### **完整的生命周期控制**[Permalink](https://www.aivi.fyi/llms/codex-goal#4-%E5%AE%8C%E6%95%B4%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%8E%A7%E5%88%B6)
# `/goal` 提供四条 TUI 命令：

# 注意：暂停/恢复/清空/预算限制状态的转换，**模型自己改不了**，只能由用户或运行时触发。这是设计上的安全边界 —— 模型唯一能自己做的状态变更是”标记完成”，而且这个动作还得通过完成审计。
---
## **三、什么场景适合用** `**/goal**`**，什么场景不要用**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E4%B8%89%E4%BB%80%E4%B9%88%E5%9C%BA%E6%99%AF%E9%80%82%E5%90%88%E7%94%A8-goal%E4%BB%80%E4%B9%88%E5%9C%BA%E6%99%AF%E4%B8%8D%E8%A6%81%E7%94%A8)
# `/goal` 很强，但不是所有任务都该用它。盲目用反而费 token、跑偏、卡死。我的判断标准是这样的：
### **✅ 适合用** `**/goal**`[Permalink](https://www.aivi.fyi/llms/codex-goal#-%E9%80%82%E5%90%88%E7%94%A8-goal)
- **重复性 + 持续性的批量任务**：批量修 bug、批量重命名、批量生成测试用例、批量补文档

- **覆盖式任务**：QA 一个完整流程、把整个 repo 的某个表面摸完（类型严格化、文档同步、安全扫描）

- **明确的工程任务**：迁移一个模块、把一个 feature 从老仓库移植到新仓库、按规格文档实现一个完整功能

- **长程探索**：代码考古、架构梳理（只生成报告，不动代码）

- **基于规格文档的实现**：配合 OpenSpec 这类工具，把 spec 直接交给 `/goal` 跑

### **❌ 不要用** `**/goal**`[Permalink](https://www.aivi.fyi/llms/codex-goal#-%E4%B8%8D%E8%A6%81%E7%94%A8-goal)
- **单轮就能完成的小任务** —— 比如让 Codex 写个冒泡排序。直接用普通 prompt，杀鸡用牛刀只会更慢更费 token。

- **说不清”完成长什么样”的探索性任务** —— 比如 `/goal 给我开发一个背单词 APP`。没有验收标准，Codex 会幻想出一个目标然后认真去实现，但实现出来的不是你要的。

- **需要用户不断决策的任务** —— 比如产品决策、商业取舍、UX 偏好。这些必须人来拍板，Agent 替不了。

- **破坏性、不可回滚的操作** —— 删数据库、删大量文件、做不可逆的迁移。`/goal` 的特点是会自己往下推进，这种场景下风险会被放大。

- **需要快速迭代的原型阶段** —— 几分钟就能跑出来的原型，直接做就行，套上 `/goal` 反而徒增开销。

- **Plan 模式下** —— ⚠️ 这是个**最容易踩的坑**。Issue #20656 已经报告：在 `/plan` 模式下，即使你看到 UI 上显示 “Goal active”，Codex 实际上**不会自动延续**。源码里 `should_ignore_goal_for_mode` 函数在 `Plan` 模式下直接跳过 goal 延续。所以如果你要用 `/plan` 做规划，**先退出 Plan 模式再启动或恢复 **`**/goal**`。

---
## **四、启用** `**/goal**`[Permalink](https://www.aivi.fyi/llms/codex-goal#%E5%9B%9B%E5%90%AF%E7%94%A8-goal)
# `/goal` 目前是实验性功能，默认关闭，需要手动开启。
### **方法 1：改配置文件**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E6%96%B9%E6%B3%95-1%E6%94%B9%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)
# 打开 `~/.codex/config.toml`，加上下面这段：
```plaintext
Copy code[features]goals = true
```
# 如果你想完整体验所有相关功能（尤其是 `/plan` 配合 `/goal`），可以把协作模式也打开：
```plaintext
Copy code[features]goals = truecollaboration_modes = true
```
# 保存，然后**重启 Codex**，`/goal` 就可用了。
### **方法 2：让 Codex 自己改**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E6%96%B9%E6%B3%95-2%E8%AE%A9-codex-%E8%87%AA%E5%B7%B1%E6%94%B9)
# 如果你不熟悉配置文件的位置和写法，可以直接在 Codex 里用自然语言描述，比如：
```plaintext
Copy code请帮我开启 Codex 0.128 新增的 /goal 命令。
配置文件位置：~/.codex/config.toml
需要在 [features] 段下加上 goals = true。
如果文件不存在请创建，如果 [features] 段不存在请新增。
```
# Codex 会自动帮你完成。改完别忘了重启。
### **验证**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E9%AA%8C%E8%AF%81)
# 启动后输入 `/`，如果在斜杠命令补全列表里能看到 `/goal`，说明已经启用。也可以直接输入 `/goal` 回车，如果显示”暂无目标”或者类似的状态摘要，就是好了。
---
## **五、**`**/goal**` **提示词的核心心法**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E4%BA%94goal-%E6%8F%90%E7%A4%BA%E8%AF%8D%E7%9A%84%E6%A0%B8%E5%BF%83%E5%BF%83%E6%B3%95)
# 我在最初使用 `/goal` 的时候，踩过一个最典型的坑：**直接** `**/goal**` **加一句简短描述就回车走人**。结果几个小时回来一看，Codex 跑了一堆事情，但跑的根本不是我要的；甚至有时候会陷入静默卡死状态。
# 后来我把这个事情想清楚了：`**/goal**` **对提示词的要求，比普通对话高一个数量级**。原因是它的内置审计机制 —— `continuation.md` 要把你的目标映射成一份”提示词到产物”的清单，如果你用的是模糊词（”全部”、”所有”、”彻底”、”清理一下”、”提升一下”），清单根本建不起来，审计就会退化成”测试跑过了就算完成”这种代理信号 —— 然后你就得到一个声称完成、实际跑偏的结果。
# 所以 `/goal` 真正发挥威力的前提，是你要能写出**可被映射成清单**的目标。
### **五段式黄金模板**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E4%BA%94%E6%AE%B5%E5%BC%8F%E9%BB%84%E9%87%91%E6%A8%A1%E6%9D%BF)
# 经过这段时间的实践，我固定下来一套五段式模板，几乎所有 `/goal` 我都按这个写：
```plaintext
Copy code/goal <一句话描述目标>

Scope: <作用范围 — 改哪些文件/子系统/feature 区域，其他不要碰>

Constraints:
- <硬性约束 1 — 比如"不要修改数据库 schema">
- <硬性约束 2 — 比如"保持现有公开 API 不变">
- <硬性约束 3 — 项目类型相关的默认规则>

Done when:
1. <可验证的产物 1 — 引用具体文件名或命令>
2. <可验证的产物 2>
3. <可验证的产物 3>
...

Stop if:
- <机械可识别的停止条件 1 — 比如"需要新依赖">
- <机械可识别的停止条件 2 — 比如"需要修改 MUST NOT 列表中的文件">

Use a token budget of <N> tokens for this goal.
```
# 每一段的要点：
- **Objective**：一句话说清要做什么。**避开虚词**：全部、所有、彻底、improve、optimize、clean up —— 这些词无法映射成清单，会让审计失效。

- **Scope**：画一条边界。Codex 是会扩散的，你不画它就乱跑。

- **Constraints**：硬性规则，违反就停。约束一定要”可机械识别”，比如”不动 `project.pbxproj`“就比”不要破坏现有结构”好。

- **Done when**：验收清单。每一条最好引用一个具体文件路径或者一个具体命令（`npm test`、`pytest -q`、`tsc --noEmit` 都比”测试通过”明确）。

- **Stop if**：停止条件。这个比 Done when 更重要，它防止 Codex 钻牛角尖或越界。

- **Token budget**：必给。这是 Codex 唯一一个一等公民的成本治理机制 —— 没设预算 = 没有软停止 = 万一跑飞就只能眼睁睁看着烧 token。

### **一个具体例子**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E4%B8%80%E4%B8%AA%E5%85%B7%E4%BD%93%E4%BE%8B%E5%AD%90)
```plaintext
Copy code/goal 把 src/data/words.json 里的词库扩展到 1000 个唯一词条。

Scope: 只改 src/data/words.json，其他文件不要动。

Constraints:
- 词条 schema 保持不变（id / word / phonetic / meaning / example）
- 不允许重复词条（以 word 字段为准去重）
- 只能用真实的、常见的英语单词，不要生造

Done when:
1. words.json 包含恰好 1000 个唯一词条
2. 所有词条 schema 校验通过（用 tools/validate.js 跑一遍）
3. 在终端输出最终词条数和文件大小

Stop if:
- 需要修改 words.json 以外的任何文件
- 需要新增 npm 依赖
- 出现 schema 校验失败超过 3 次

Use a token budget of 80000 tokens.
```
# 这个目标可以被审计 —— 每一条 Done when 都对应一个能跑的检查；每一条 Stop if 都是机械可识别的；Scope 把作用面锁死了。这种 goal Codex 跑起来准确率明显不一样。
---
## **六、三种典型工作流**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E5%85%AD%E4%B8%89%E7%A7%8D%E5%85%B8%E5%9E%8B%E5%B7%A5%E4%BD%9C%E6%B5%81)
# 下面是我目前固定下来的三种 `/goal` 用法。从简单到复杂，按任务规模选用。
### **工作流 A：**`**/goal**` **直接用 — 适合中等任务**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E5%B7%A5%E4%BD%9C%E6%B5%81-agoal-%E7%9B%B4%E6%8E%A5%E7%94%A8--%E9%80%82%E5%90%88%E4%B8%AD%E7%AD%89%E4%BB%BB%E5%8A%A1)
# 适合任务边界清楚、自己能写出五段式模板的场景。直接在 Codex 里输入完整的 `/goal <五段式提示词>`，回车，然后该干嘛干嘛去。
# 跑起来后，你随时可以：
- 用 `/goal`（不带参数）查看当前进度：状态、耗时、token 用量

- 用 `/goal pause` 暂停

- 用 `/goal resume` 恢复

- 用 `/goal clear` 中止

# 这是最常用的形态。70% 的任务我都是这样跑的。
### **工作流 B：**`**/plan**` **+** `**/goal**` **— 适合复杂任务**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E5%B7%A5%E4%BD%9C%E6%B5%81-bplan--goal--%E9%80%82%E5%90%88%E5%A4%8D%E6%9D%82%E4%BB%BB%E5%8A%A1)
# 如果任务复杂、需求还比较模糊、自己也没想清楚验收标准，直接 `/goal` 是不行的，要先用 `/plan` 把方案讨论清楚。
# 完整流程：
1. 进入 Plan 模式（`/plan` 或者 `Shift+Tab` 切换）

1. 输入相对模糊的需求，比如”把这个 APP 做成可商业化的水平”

1. Codex 会和你互动，问关键决策（变现方式、差异化主线、目标用户等），它会基于你的回答生成完整计划

1. 计划生成后，Codex 会给你三个选项：立即执行 / 清空上下文再执行 / 保持在 Plan 模式

1. **选第三项**，然后用 `Shift+Tab` 退出 Plan 模式

1. 这时再输入 `/goal 执行上面的开发计划`，加上 Done when / Stop if / token budget

# 为什么要先选”保持 Plan 模式”再手动退出？因为前两个选项会立刻执行，但执行的不是 `/goal` 模式，享受不到延续和审计；而你直接在 Plan 模式里输入 `/goal`，会落入 Issue #20656 的坑（看上去激活了但其实不延续）。所以**必须先退出 Plan 模式，再下** `**/goal**`。
### **工作流 C：OpenSpec +** `**/goal**` **— 适合规格驱动开发**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E5%B7%A5%E4%BD%9C%E6%B5%81-copenspec--goal--%E9%80%82%E5%90%88%E8%A7%84%E6%A0%BC%E9%A9%B1%E5%8A%A8%E5%BC%80%E5%8F%91)
# 这是最适合 `/goal` 的工作流之一。**Spec-Driven Development（SDD）**的思路是：先把需求写成规格文档（包含 proposal、specs、design、tasks），然后让 AI 严格按规格实现。规格文档天然就是一份审计清单 —— 把它喂给 `/goal`，完成审计能精准地工作。
# OpenSpec 是 Fission-AI 团队开发的开源 SDD 工具（MIT 协议，GitHub 上 37k stars），它的工作方式是这样的：
```plaintext
Copy codeYou: /opsx:propose add-dark-mode
AI:  Created openspec/changes/add-dark-mode/
     ✓ proposal.md — 为什么要做、改了什么
     ✓ specs/      — 需求和场景
     ✓ design.md   — 技术方案
     ✓ tasks.md    — 实现清单
     Ready for implementation!
```
# 完整工作流：
#### **安装 OpenSpec**[Permalink](https://www.aivi.fyi/llms/codex-goal#1-%E5%AE%89%E8%A3%85-openspec)
# OpenSpec 需要 Node.js 20.19.0+。安装命令：
```plaintext
Copy codenpm install -g @fission-ai/openspec@latest
```
# 进入项目目录，初始化：
```plaintext
Copy codecd your-project
openspec init
```
# OpenSpec 会在项目里生成 `openspec/` 目录，并把适配你 AI 工具的指令写到对应的位置（它支持 20+ 种 AI 工具，Codex 也在里面）。
#### **用 OpenSpec 生成规格文档**[Permalink](https://www.aivi.fyi/llms/codex-goal#2-%E7%94%A8-openspec-%E7%94%9F%E6%88%90%E8%A7%84%E6%A0%BC%E6%96%87%E6%A1%A3)
# 在 Codex 里直接输入（`/opsx:propose` 是 OpenSpec 安装后注册的斜杠命令）：
```plaintext
Copy code/opsx:propose 为这个项目新增 Cohere Rerank 作为第五个 Rerank provider
```
# Codex 会调用 OpenSpec，把你的需求拆解成 `proposal.md`、`specs/`、`design.md`、`tasks.md`。这一步不会动你任何源代码，只是把”要做什么”写清楚。
#### **用** `**/goal**` **执行规格**[Permalink](https://www.aivi.fyi/llms/codex-goal#3-%E7%94%A8-goal-%E6%89%A7%E8%A1%8C%E8%A7%84%E6%A0%BC)
# 规格文档生成完后，在 Codex 里：
```plaintext
Copy code/goal 严格实现 openspec/changes/add-cohere-rerank/ 中描述的变更。

First action: 先读 proposal.md / specs/ / design.md / tasks.md / AGENTS.md 这五个文件，
报告每个文件的字数和关键章节标题，等我确认后再开始实现。

Scope: design.md 里的 "MUST NOT modify" 列表严格遵守。

Constraints:
- AGENTS.md 中的所有 iron rules 不可违反
- 不允许新增 npm 依赖
- 镜像现有 4 个 Rerank provider 的代码风格

Done when:
1. tasks.md 中的每一项都打勾，引用对应文件路径
2. 每条 SHALL 都有对应的通过测试，引用测试名
3. 每个 GIVEN/WHEN/THEN 场景都有集成测试覆盖
4. `npx tsc --noEmit` 退出码 0
5. `npm test` 退出码 0，粘贴汇总输出
6. README.md 在 provider 表格里加上新一行
7. CHANGELOG.md 在 Unreleased 段加条目

Stop if:
- 任何任务需要修改 MUST NOT 列表中的文件
- SHALL 之间出现冲突（暂停，让我决定）
- 需要 npm install 新依赖
- 现有 Rerank provider 测试出现失败

Use a token budget of 120000 tokens.
```
# 注意第二行的 **First action**：这是个非常关键的小技巧。它强制 Codex 在动手前先把规格文件全部读一遍并向你报告确认 —— 防止 Codex 用 `@filename` 等不可靠引用方式假装”知道”了规格，实际上没读全。
# 这种工作流跑出来的产物质量最稳。我自己测试中，中等规模的 feature（类似新增一个 provider 这种 200~400 行的改动）基本都能一次跑通，跑完直接是个能 review 的 PR。
---
## **七、用** `**goal-prompt-builder**` **把上面这些自动化**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E4%B8%83%E7%94%A8-goal-prompt-builder-%E6%8A%8A%E4%B8%8A%E9%9D%A2%E8%BF%99%E4%BA%9B%E8%87%AA%E5%8A%A8%E5%8C%96)
# 写好五段式提示词需要练习。如果不熟练，或者懒得每次手写，可以用我开发的 `**goal-prompt-builder**` —— 一个专门用来生成 `/goal` 提示词的 Claude Skill，仓库在：
> # _https://github.com/win4r/goal-prompt-builder （MIT 协议）_
### **它解决什么**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E5%AE%83%E8%A7%A3%E5%86%B3%E4%BB%80%E4%B9%88)
# `/goal` 内置的 `continuation.md` 审计机制非常强，但前提是你的目标文本能被映射成清单。这个 skill 的核心目的就是：**保证生成的目标文本一定可以被映射成审计清单**。
### **它内部是怎么工作的**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E5%AE%83%E5%86%85%E9%83%A8%E6%98%AF%E6%80%8E%E4%B9%88%E5%B7%A5%E4%BD%9C%E7%9A%84)
# 按 README 描述，skill 触发后会走 6 步：
1. **选择交互模式** — 步进式 / 完整描述式 / 混合式（默认）

1. **自动检测项目类型** — 通过看文件系统（`package.json`、`Cargo.toml`、`*.xcodeproj` 等）或者抓 GitHub README，顺便读 `AGENTS.md` / `CLAUDE.md`

1. **挑选场景模板** — 内置 7 套（refactor / SDD feature / batch / archaeology / UI audit / gatekeeper / custom）

1. **收集 5 段输入** — Objective / Scope / Constraints / Done when / Stop if

1. **预测审计友好度** — 内部打分，如果分数低于 70 直接拒绝渲染，要求你补充信息

1. **渲染输出** — 一段可以直接粘贴的 `/goal` 提示词，加一段简短的设计说明

# 它内部有一组**硬规则**（从 `continuation.md` 倒推出来的）：
- **拒绝模糊动词** — improve、optimize、clean up、all、everything、全部、彻底 这些词会触发反推，要求你换成可验证的描述

- **强制要求 token budget** — 没预算就没软停止，潜在跑飞

- **强制回归保护** — 任何动到测试覆盖代码的目标，自动加上”不许改测试让它通过”的 stop-if

- **SDD 类目标强制 read+report 优先** — 防止 `@filename` 引用不准

- **brownfield 项目强制探测 MUST NOT 列表** — scope creep 第一大原因

- **审计友好度 < 70% 直接拒绝渲染**

# 我用这个 skill 之后，日常写 `/goal` 的速度快了非常多 —— 简单任务一两分钟就能从一句话需求走到一个可用的 5 段式提示词。
### **怎么安装**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E6%80%8E%E4%B9%88%E5%AE%89%E8%A3%85)
# 按 README，有三种方式：
#### **方式 1：一行命令安装**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E6%96%B9%E5%BC%8F-1%E4%B8%80%E8%A1%8C%E5%91%BD%E4%BB%A4%E5%AE%89%E8%A3%85)
```plaintext
Copy codecurl -L -o /tmp/goal-prompt-builder.skill \
  https://github.com/win4r/goal-prompt-builder/raw/main/goal-prompt-builder.skill
mkdir -p ~/.claude/skills
unzip -o /tmp/goal-prompt-builder.skill -d ~/.claude/skills/
rm /tmp/goal-prompt-builder.skill
```
#### **方式 2：克隆并软链**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E6%96%B9%E5%BC%8F-2%E5%85%8B%E9%9A%86%E5%B9%B6%E8%BD%AF%E9%93%BE)
```plaintext
Copy codegit clone https://github.com/win4r/goal-prompt-builder.git
ln -s "$(pwd)/goal-prompt-builder/goal-prompt-builder" ~/.claude/skills/goal-prompt-builder
```
#### **方式 3：让 Codex 自己装（视频演示中用的方式）**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E6%96%B9%E5%BC%8F-3%E8%AE%A9-codex-%E8%87%AA%E5%B7%B1%E8%A3%85%E8%A7%86%E9%A2%91%E6%BC%94%E7%A4%BA%E4%B8%AD%E7%94%A8%E7%9A%84%E6%96%B9%E5%BC%8F)
# 如果你不熟命令行，直接在 Codex 里描述安装需求：
```plaintext
Copy code请帮我安装这个 skill：https://github.com/win4r/goal-prompt-builder
按 README 的安装方式装到默认位置。
```
# Codex 会自己执行下载、解压、放到对应目录。装完后**重启 Codex**，skill 就生效了。
> # _注意：这个 skill 是用 Claude Skills 格式构建的，默认安装位置是 _`_~/.claude/skills/_`_。具体在哪个客户端能被识别，以你客户端文档为准 —— README 明确列出的兼容客户端是 Claude Code、Claude Desktop、以及支持 Skills 的 Claude.ai。_
### **怎么用**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E6%80%8E%E4%B9%88%E7%94%A8)
# 安装重启后，skill 会被以下短语自动触发，不需要手动调：
- “help me write a /goal for …”

- “design a goal for X”

- “review my goal command”

- “我要用 /goal 来…”

- 任何提到长任务 + Codex 的对话

# 最简单的用法是丢一个一句话需求进去，比如：
```plaintext
Copy code我想用 /goal 给这个项目增加 Cohere Rerank 作为第五个 Rerank provider
```
# skill 会：
- 自动检测出这是 Node/TypeScript 项目（看 `package.json`）

- 读 `AGENTS.md` / `CLAUDE.md` 提取项目特定的规则

- 问你几个关键问题（token 预算、是否有 SDD 规格、是否有要保护的 MUST NOT 文件）

- 输出一段五段式 `/goal` + 一段设计说明，告诉你为什么这样写

# 把输出粘贴到 Codex 的输入框，回车，任务就跑起来了。
---
## **八、几个非常容易踩的坑**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E5%85%AB%E5%87%A0%E4%B8%AA%E9%9D%9E%E5%B8%B8%E5%AE%B9%E6%98%93%E8%B8%A9%E7%9A%84%E5%9D%91)
# 这些是我自己踩过、或者社区在 GitHub Issue 里报告过的坑。直接列出来，贴在显示器旁边比什么都管用。
### **坑 1：Plan 模式下** `**/goal**` **不延续**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E5%9D%91-1plan-%E6%A8%A1%E5%BC%8F%E4%B8%8B-goal-%E4%B8%8D%E5%BB%B6%E7%BB%AD)
# **现象**：UI 上显示 “Goal active”，但 Codex 不会自己往下推进，看上去像卡死了。
# **原因**：Issue #20656。源码里 `should_ignore_goal_for_mode(mode) -> mode == ModeKind::Plan`。Plan 模式下 goal 延续被静默跳过。
# **对策**：用 `/plan` 做规划时不要同时启动 `/goal`。规划完先退出 Plan 模式（`Shift+Tab`），再下 `/goal`。
### **坑 2：中途** `**/compact**` **把 goal 上下文搞丢**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E5%9D%91-2%E4%B8%AD%E9%80%94-compact-%E6%8A%8A-goal-%E4%B8%8A%E4%B8%8B%E6%96%87%E6%90%9E%E4%B8%A2)
# **现象**：跑了一段时间，模型突然好像”忘了”目标的细节，开始做不相关的事，或者过早声称完成。
# **原因**：Issue #19910。如果 `/compact` 发生在一轮模型调用执行的**中间**，延续提示词不会被重新注入，后续 agent 丢掉目标和审计要求。
# **对策**：长任务**不要手动** `**/compact**`。设一个相对宽松的 token 预算，让自动 compaction 落在轮次边界上。
### **坑 3：第一条消息就发** `**/goal**`**，之后 resume 列表里找不到这个会话**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E5%9D%91-3%E7%AC%AC%E4%B8%80%E6%9D%A1%E6%B6%88%E6%81%AF%E5%B0%B1%E5%8F%91-goal%E4%B9%8B%E5%90%8E-resume-%E5%88%97%E8%A1%A8%E9%87%8C%E6%89%BE%E4%B8%8D%E5%88%B0%E8%BF%99%E4%B8%AA%E4%BC%9A%E8%AF%9D)
# **现象**：`codex resume` 列表、Codex Desktop 的 recents 里都看不到这个 thread，但 thread 本身没丢，知道 ID 还能打开。
# **原因**：Issue #20792。`/goal`-first 的 thread 在列表里被遗漏了。
# **对策**：**新 thread 第一条消息别用** `**/goal**`。先随便发一句话，比如 “Working on the OAuth migration goal”，再用 `/goal`。
### **坑 4：目标里出现”全部 / 所有 / 彻底 / improve”**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E5%9D%91-4%E7%9B%AE%E6%A0%87%E9%87%8C%E5%87%BA%E7%8E%B0%E5%85%A8%E9%83%A8--%E6%89%80%E6%9C%89--%E5%BD%BB%E5%BA%95--improve)
# **现象**：跑了几个小时回来，声称做完了，但你一看实际改动只是边边角角，核心问题没动。
# **原因**：这些词没法被 `continuation.md` 映射成清单，审计退化成”测试跑过 = 完成”。
# **对策**：换具体的数字或可验证的状态。”修 5 个真实可复现的 bug”、”覆盖 README 列出的 3 条用户路径”、”`pytest` 0 失败 0 跳过” —— 这些都比”修复所有 bug”强一万倍。
### **坑 5：不设 token 预算**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E5%9D%91-5%E4%B8%8D%E8%AE%BE-token-%E9%A2%84%E7%AE%97)
# **现象**：任务跑飞，token 烧光也没人提醒，等回来一看账单不对劲。
# **对策**：**永远设 token budget**。`Use a token budget of <N> tokens for this goal.`。烧到上限会触发软停止，让模型把工作收尾，而不是裸停。
### **坑 6：破坏性操作不加保护**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E5%9D%91-6%E7%A0%B4%E5%9D%8F%E6%80%A7%E6%93%8D%E4%BD%9C%E4%B8%8D%E5%8A%A0%E4%BF%9D%E6%8A%A4)
# **现象**：让 Codex 做迁移，跑着跑着把数据库 schema 改了 / 把不该删的文件删了。
# **对策**：破坏性操作**不要用** `**/goal**`。必须用的话，Constraints 里明确写”不要执行 `rm -rf`“、”不要修改数据库 schema”、”任何 destructive migration 暂停问我”，并且把对应内容也写进 Stop if。
---
## **九、控制命令速查**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E4%B9%9D%E6%8E%A7%E5%88%B6%E5%91%BD%E4%BB%A4%E9%80%9F%E6%9F%A5)

# 状态标识：
- `pursuing` / `active` — 正在自主推进

- `paused` — 被手动暂停

- `achieved` / `complete` — 完成审计通过，目标达成

- `unmet` — 未达成

- `budget_limited` — token 预算耗尽，软停止中

---
## **十、启动前 checklist**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E5%8D%81%E5%90%AF%E5%8A%A8%E5%89%8D-checklist)
# 每次发 `/goal` 之前，过一遍这个清单：
- 对项目的上下文我先聊过一轮了吗？（背景、关心的模块、已排除的方向、AGENTS.md / CLAUDE.md 是否已读）

- 我的目标可以被映射成一份清单吗？

- 验收标准是具体数字 / 可验证状态，还是”全部 / 所有 / 彻底”这种虚词？

- Stop if 段写了吗？它能不能机械可识别？

- Token budget 设了吗？

- 这个任务真的需要 `/goal` 吗？（单轮能干完的别用）

- 我现在不在 Plan 模式吧？

- 这是 thread 的第一条消息吗？如果是，先发一条非 `/goal` 消息再说

# 跑起来之后：
- 第一轮输出对得上我的目标吗？对不上立刻 `/goal pause`，补上下文，再 `/goal resume`

- 中间需要的话用 `/goal` 查进度

- 长任务不要手动 `/compact`

- 重要节点考虑挂 hook（自动 commit、自动跑测试）

---
## **十一、一些更宏观的观察**[Permalink](https://www.aivi.fyi/llms/codex-goal#%E5%8D%81%E4%B8%80%E4%B8%80%E4%BA%9B%E6%9B%B4%E5%AE%8F%E8%A7%82%E7%9A%84%E8%A7%82%E5%AF%9F)
# 最近半年，prompt 写法明显在变化：
- **以前** —— 一步一步指挥（”先做 A，再做 B，然后 C”）

- **现在** —— 声明结果（”我要这个，完成标准是 X、Y、Z，达到 X / Y / Z 才算完成”），然后让 Agent 自己规划

# `/goal` 是这个方向走得最远的产物之一。它把”过程指挥”压到最低、把”结果声明”提到最高，然后用一套内置审计机制保证模型不偷懒。
# 但反过来，这也提高了对”会写需求”的要求。模型越来越能干，但它干得好不好，反过来更依赖你能不能把”到底要啥”说清楚。**会写需求**这件事，正在重新变成稀缺技能。
# 以前 prompt 糊一点没事，反正它也只跑几秒钟；现在它能跑一整天，你那条糊掉的 goal，换来的就是一整天的糊产出。
# `/goal` 的真正价值不在于”它能跑一整天”，而在于它把”AI 真的能替你跑一整天”这件事，从一个需要外部脚本 + 反复试错的工程，变成了一条可以直接在终端里下的命令。剩下的事，是把目标写清楚。
