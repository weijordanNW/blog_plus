---
title: 9个AI智能体&开发工具开源项目
date: '2026-05-21'
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/github集合/每周项目合集
tag:
  - feishu
---
https://www.bilibili.com/video/BV15xoMBoEq5?spm_id_from=333.788.videopod.sections&vd_source=ac6ab4c3cdc5d0193edf55fd77ba0b4f
# 9个AI智能体&开发工具开源项目 · 一页极简速查


**适用场景**：AI编码增强、提示词优化、文本结构化、记忆持久化、金融/量化研究、本地私有检索

**阅读说明**：每项仅保留【定位+核心亮点+快速使用+协议】，无冗余内容
---
## 1. claude-skills（Claude全栈技能插件）
**仓库**：Jeffallan/claude-skills

**定位**：Claude Code 专属全栈开发技能库，开箱即用的工程化智能体能力

**核心亮点**：66项专业技能、12大领域分类、9套完整工作流；上下文自动匹配技能；支持Jira/Confluence项目管理

**快速安装**
```plaintext
/plugin marketplace add jeffallan/claude-skills
/plugin install fullstack-dev-skills@jeffallan
```
**协议**：MIT
---
## 2. dexter（专业金融研究智能体）
**仓库**：virattt/dexter

**定位**：专注金融投研的自主智能体，可拆解任务、实时查市场数据、自我校验结果

**核心亮点**：自动拆解复杂金融问题；接入财报/现金流实时数据；防卡死循环检测；支持WhatsApp交互、LLM评测

**快速启动**
```plaintext
git clone https://github.com/virattt/dexter.git
bun install
# 配置API密钥后启动
bun start
```
**协议**：MIT
---
## 3. langextract（Google结构化文本抽取）
**仓库**：google/langextract

**定位**：LLM驱动的非结构化文本结构化抽取Python库，适配长文档

**核心亮点**：原文精准溯源可高亮；小样本固定输出格式；长文档并行分块处理；支持Gemini/OpenAI/本地Ollama；自动生成可视化HTML

**快速安装**
```plaintext
pip install langextract
```
**协议**：Apache 2.0
---
## 4. pi-mono（可扩展编码智能体框架）
**仓库**：badlogic/pi-mono

**定位**：模块化编码智能体脚手架，支持多LLM统一调用、状态管理

**核心亮点**：四大核心包（编码CLI、智能体运行时、多模型API、终端UI）；浏览器安全适配；支持开源会话数据分享优化模型

**快速启动**
```plaintext
npm install
npm run build
./pi-test.sh
```
**协议**：MIT
---
## 5. claude-mem（Claude跨会话持久记忆）
**仓库**：thedotmack/claude-mem

**定位**：Claude Code专属记忆压缩系统，解决会话上下文丢失问题

**核心亮点**：跨会话保存项目记忆；三层检索节省10倍Token；Web可视化控制台；隐私内容屏蔽；支持中文模式

**快速安装**
```plaintext
npx claude-mem install
# Claude内插件安装
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
```
**协议**：Apache 2.0
---
## 6. prompt-optimizer（中文提示词优化器）
**仓库**：linshenkx/prompt-optimizer

**定位**：轻量化多模型提示词优化工具，中文友好、本地安全

**核心亮点**：一键迭代优化+新旧对比；支持主流大模型；可自定义LLM参数；纯前端本地处理、无数据上传；Web+插件双端使用

**快速使用**：在线版 https://prompt.always200.com

**协议**：MIT
---
## 7. claude-code-hooks-mastery（Claude钩子实战）
**仓库**：disler/claude-code-hooks-mastery

**定位**：Claude Code全生命周期钩子实战模板&教程，可控定制智能体行为

**核心亮点**：全覆盖8大生命周期钩子；拦截危险命令、日志审计；TTS语音反馈；自定义输出样式；UV脚本隔离依赖

**核心能力**：prompt校验、工具安全拦截、会话上下文自动注入、子智能体管控

**协议**：开源可复用
---
## 8. qmd（AI本地私有检索引擎）
**仓库**：tobi/qmd

**定位**：专为AI智能体优化的本地私有文档/笔记检索工具

**核心亮点**：BM25+向量+LLM重排序混合检索；代码AST智能分块；本地GGUF模型运行；无缝对接Claude

**快速安装**
```plaintext
npm install -g @tobilu/qmd
```
**协议**：MIT
---
## 9. TradingAgents-CN（中文量化交易智能体）
**仓库**：hsliuping/TradingAgents-CN

**定位**：面向中文用户的多智能体股票分析学习平台（仅学习、非实盘）

**核心亮点**：适配A股/港股/美股；中文本地化+国产大模型支持；多数据源接入；模拟交易、报告导出；Docker一键部署

**协议**：Apache 2.0（开源部分）
---
## 极速分类索引
- **Claude增强工具**：claude-skills、claude-mem、claude-code-hooks-mastery

- **金融量化智能体**：dexter（英文投研）、TradingAgents-CN（中文学习）

- **文本&提示词工具**：langextract（结构化抽取）、prompt-optimizer（提示词优化）

- **智能体框架**：pi-mono（编码智能体脚手架）

- **本地知识库检索**：qmd（私有离线搜索）9个AI智能体&开发工具开源项目 · 一页极简速查
	**适用场景**：AI编码增强、提示词优化、文本结构化、记忆持久化、金融/量化研究、本地私有检索	**阅读说明**：每项仅保留【定位+核心亮点+快速使用+协议】，无冗余内容	---	## 1. claude-skills（Claude全栈技能插件）	**仓库**：Jeffallan/claude-skills	**定位**：Claude Code 专属全栈开发技能库，开箱即用的工程化智能体能力	**核心亮点**：66项专业技能、12大领域分类、9套完整工作流；上下文自动匹配技能；支持Jira/Confluence项目管理	**快速安装**	```plaintext
	/plugin marketplace add jeffallan/claude-skills
	/plugin install fullstack-dev-skills@jeffallan
	```	**协议**：MIT	---	## 2. dexter（专业金融研究智能体）	**仓库**：virattt/dexter	**定位**：专注金融投研的自主智能体，可拆解任务、实时查市场数据、自我校验结果	**核心亮点**：自动拆解复杂金融问题；接入财报/现金流实时数据；防卡死循环检测；支持WhatsApp交互、LLM评测	**快速启动**	```plaintext
	git clone https://github.com/virattt/dexter.git
	bun install
	# 配置API密钥后启动
	bun start
	```	**协议**：MIT	---	## 3. langextract（Google结构化文本抽取）	**仓库**：google/langextract	**定位**：LLM驱动的非结构化文本结构化抽取Python库，适配长文档	**核心亮点**：原文精准溯源可高亮；小样本固定输出格式；长文档并行分块处理；支持Gemini/OpenAI/本地Ollama；自动生成可视化HTML	**快速安装**	```plaintext
	pip install langextract
	```	**协议**：Apache 2.0	---	## 4. pi-mono（可扩展编码智能体框架）	**仓库**：badlogic/pi-mono	**定位**：模块化编码智能体脚手架，支持多LLM统一调用、状态管理	**核心亮点**：四大核心包（编码CLI、智能体运行时、多模型API、终端UI）；浏览器安全适配；支持开源会话数据分享优化模型	**快速启动**	```plaintext
	npm install
	npm run build
	./pi-test.sh
	```	**协议**：MIT	---	## 5. claude-mem（Claude跨会话持久记忆）	**仓库**：thedotmack/claude-mem	**定位**：Claude Code专属记忆压缩系统，解决会话上下文丢失问题	**核心亮点**：跨会话保存项目记忆；三层检索节省10倍Token；Web可视化控制台；隐私内容屏蔽；支持中文模式	**快速安装**	```plaintext
	npx claude-mem install
	# Claude内插件安装
	/plugin marketplace add thedotmack/claude-mem
	/plugin install claude-mem
	```	**协议**：Apache 2.0	---	## 6. prompt-optimizer（中文提示词优化器）	**仓库**：linshenkx/prompt-optimizer	**定位**：轻量化多模型提示词优化工具，中文友好、本地安全	**核心亮点**：一键迭代优化+新旧对比；支持主流大模型；可自定义LLM参数；纯前端本地处理、无数据上传；Web+插件双端使用	**快速使用**：在线版 https://prompt.always200.com	**协议**：MIT	---	## 7. claude-code-hooks-mastery（Claude钩子实战）	**仓库**：disler/claude-code-hooks-mastery	**定位**：Claude Code全生命周期钩子实战模板&教程，可控定制智能体行为	**核心亮点**：全覆盖8大生命周期钩子；拦截危险命令、日志审计；TTS语音反馈；自定义输出样式；UV脚本隔离依赖	**核心能力**：prompt校验、工具安全拦截、会话上下文自动注入、子智能体管控	**协议**：开源可复用	---	## 8. qmd（AI本地私有检索引擎）	**仓库**：tobi/qmd	**定位**：专为AI智能体优化的本地私有文档/笔记检索工具	**核心亮点**：BM25+向量+LLM重排序混合检索；代码AST智能分块；本地GGUF模型运行；无缝对接Claude	**快速安装**	```plaintext
	npm install -g @tobilu/qmd
	```	**协议**：MIT	---	## 9. TradingAgents-CN（中文量化交易智能体）	**仓库**：hsliuping/TradingAgents-CN	**定位**：面向中文用户的多智能体股票分析学习平台（仅学习、非实盘）	**核心亮点**：适配A股/港股/美股；中文本地化+国产大模型支持；多数据源接入；模拟交易、报告导出；Docker一键部署	**协议**：Apache 2.0（开源部分）	---	## 极速分类索引	- **Claude增强工具**：claude-skills、claude-mem、claude-code-hooks-mastery
		- **金融量化智能体**：dexter（英文投研）、TradingAgents-CN（中文学习）
		- **文本&提示词工具**：langextract（结构化抽取）、prompt-optimizer（提示词优化）
		- **智能体框架**：pi-mono（编码智能体脚手架）
		- **本地知识库检索**：qmd（私有离线搜索）
	





# 9 个 AI 智能体与开发工具开源项目整理（翻译版）
本文整理 GitHub 上 9 个热门 AI 智能体、提示词优化、文档抽取、本地检索、代码助手增强类开源项目，包含项目定位、核心能力、快速使用与关键特性。
---
## Jeffallan/claude-skills
**仓库**：[https://github.com/Jeffallan/claude-skills](https://github.com/Jeffallan/claude-skills)**定位**：为 Claude Code 打造的全栈开发专业技能插件集
### 核心概览
- 内置 **66 项专业技能**，覆盖 12 大类：编程语言、前后端框架、基础设施、API、测试、DevOps、安全、数据 / 机器学习等

- 提供 **9 套项目工作流**，支持对接 Jira、Confluence

- 包含 **366 个参考文件**，开箱即用

### 核心能力
1. **上下文感知激活**：根据需求自动匹配对应专家技能（如 NestJS、React）

1. **多技能工作流**：复杂任务自动串联技能（需求开发→Bug 排查→安全加固）

1. **上下文工程**：使用 `/common-ground` 对齐项目背景

1. **完整文档**：快速上手、技能手册、工作流命令、本地开发指南齐全

### 快速安装
bash

运行
```plaintext
/plugin marketplace add jeffallan/claude-skills
/plugin install fullstack-dev-skills@jeffallan
```
### 许可证
MIT License
---
## virattt/dexter
**仓库**：[https://github.com/virattt/dexter](https://github.com/virattt/dexter)**定位**：自主金融研究智能体（类似 Claude Code，但专注金融投研）
### 核心能力
- **智能任务规划**：自动把复杂金融问题拆解为步骤

- **自主执行**：调用工具获取实时金融数据（利润表、资产负债表、现金流表）

- **自我校验**：自动检查结果并迭代优化

- **实时市场数据**：接入专业金融数据集接口

- **安全机制**：循环检测、步骤上限，防止无限执行

### 技术依赖
- 运行时：Bun

- 模型：OpenAI / Anthropic / Google / XAI 等

- 数据：Financial Datasets API

- 搜索：Exa / Tavily

### 快速运行
bash

运行
```plaintext
git clone https://github.com/virattt/dexter.git
cd dexter
bun install# 配置 .env 填入 API Key
bun start
```
### 特色用法
- 支持通过 WhatsApp 交互

- 提供评测套件，用 LLM-as-judge 评估回答准确率

- 调试日志自动保存为 JSONL，便于复盘

### 许可证
MIT License
---
## google/langextract
**仓库**：[https://github.com/google/langextract](https://github.com/google/langextract)**定位**：Google 推出的 LLM 非结构化文本结构化抽取 Python 库
### 核心亮点
1. **精准溯源**：抽取结果可定位原文位置，支持高亮验证

1. **可靠结构化输出**：基于小样本示例强制输出固定 schema

1. **长文档优化**：分块、并行、多轮抽取，召回率更高

1. **交互式可视化**：一键生成 HTML 查看抽取结果

1. **多模型支持**：Gemini / OpenAI / 本地 Ollama 模型

1. **零微调适配**：仅需少量示例即可适配任意领域

### 典型场景
- 文学作品抽取：人物、情感、关系

- 医疗文本抽取：药品、剂量、用法

- 放射报告结构化

### 快速安装
bash

运行
```plaintext
pip install langextract
```
### 简单示例
python

运行
```plaintext
import langextract as lx

prompt = "抽取人物、情感、关系，按出现顺序"
examples = [...]  # 提供示例
result = lx.extract(
    text_or_documents="待抽取文本",
    prompt_description=prompt,
    examples=examples,
    model_id="gemini-2.5-flash")# 保存与可视化
lx.io.save_annotated_documents([result], "result.jsonl")
lx.visualize("result.jsonl")
```
### 许可证
Apache License 2.0
---
## badlogic/pi-mono
**仓库**：[https://github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)**定位**：可自我扩展的编码智能体脚手架（Monorepo）
### 核心包
1. **pi-coding-agent**：交互式编码智能体 CLI

1. **pi-agent-core**：带工具调用与状态管理的智能体运行时

1. **pi-ai**：统一多厂商 LLM API（OpenAI、Anthropic、Google 等）

1. **pi-tui**：终端 UI 库

### 核心能力
- 浏览器安全兼容

- 支持 OAuth 运行时

- 开放会话分享：开源项目可公开编码会话数据以优化智能体

- 完整 monorepo 架构，便于二次开发

### 快速启动
bash

运行
```plaintext
npm installnpm run build
./pi-test.sh
```
### 许可证
MIT License
---
## thedotmack/claude-mem
**仓库**：[https://github.com/thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)**定位**：为 Claude Code 设计的持久化记忆压缩系统
### 核心功能
- **跨会话记忆**：自动保存工具使用、上下文总结，重启不丢失

- **渐进式披露**：分层检索，控制 Token 消耗

- **技能搜索**：`mem-search` 自然语言查询历史

- **Web 查看器**：[http://localhost:37777](http://localhost:37777) 实时查看记忆流

- **隐私控制**：`<private>` 标签排除敏感内容

- **MCP 工具**：三层搜索流程，节省 10 倍 Token

### 三层工作流
1. `search`：获取精简索引（低 Token）

1. `timeline`：查看上下文时间线

1. `get_observations`：批量获取详情（按需拉取）

### 快速安装
bash

运行
```plaintext
npx claude-mem install# 或 Claude 内安装
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
```
### 支持语言
- 英文、简体中文、日文等

### 许可证
Apache License 2.0
---
## linshenkx/prompt-optimizer
**仓库**：[https://github.com/linshenkx/prompt-optimizer](https://github.com/linshenkx/prompt-optimizer)**定位**：AI 提示词优化工具（中文友好）
### 核心特性
- **一键优化**：多轮迭代提升提示词质量

- **对比测试**：原提示词 vs 优化后实时对比

- **多模型支持**：OpenAI、Gemini、DeepSeek、智谱 AI、SiliconFlow

- **高级参数**：单独配置 temperature、max_tokens 等

- **纯前端**：数据本地处理，不上传服务器

- **多端支持**：Web 应用 + Chrome 插件

- **部署灵活**：Vercel / Docker / 本地

### 快速使用
- 在线版：[https://prompt.always200.com](https://prompt.always200.com)

- Chrome 商店安装插件

- Docker 部署

### 典型用途
- 优化编程、写作、翻译、生成类提示词

- 批量优化提示词库

- 本地调试提示词效果

### 许可证
MIT License
---
## disler/claude-code-hooks-mastery
**仓库**：[https://github.com/disler/claude-code-hooks-mastery](https://github.com/disler/claude-code-hooks-mastery)**定位**：Claude Code 钩子系统完全教程与实战模板
### 覆盖 8 个生命周期钩子
1. UserPromptSubmit：用户提交提示词时（可拦截）

1. PreToolUse：工具执行前（可拦截危险命令）

1. PostToolUse：工具执行后

1. Notification：通知触发时

1. Stop：回复结束时

1. SubagentStop：子智能体结束时

1. PreCompact：上下文压缩前

1. SessionStart：会话启动时

### 核心能力
- **安全拦截**：阻止 `rm -rf`、`sudo`、系统文件写入等危险操作

- **TTS 语音反馈**：任务完成语音播报

- **上下文注入**：自动添加项目信息

- **日志审计**：全操作 JSON 记录

- **自定义输出样式**：表格、YAML、HTML、极简等

- **动态状态栏**：终端实时显示 Git、任务、模型信息

### 架构亮点
- 基于 UV 单文件脚本，隔离依赖、无需虚拟环境

- 退出码 + JSON 双重控制流程

- 支持子智能体、元智能体（创建智能体的智能体）

### 许可证
未明确标明（开源可复用）
---
## tobi/qmd
**仓库**：[https://github.com/tobi/qmd](https://github.com/tobi/qmd)**定位**：本地端私有搜索引擎（为 AI 智能体优化的笔记 / 文档检索）
### 核心技术
- 混合检索：**BM25 全文搜索 + 向量语义搜索 + LLM 重排序**

- 本地运行：node-llama-cpp + GGUF 模型

- 智能分块：支持代码 AST 感知分块（按函数 / 类切割）

- MCP 服务：无缝对接 Claude Desktop / Claude Code

### 核心能力
- 索引笔记、会议记录、文档、知识库

- 关键词 / 自然语言搜索

- 上下文关联：给文件夹 / 路径打描述标签，提升检索准确率

- 支持批量获取、JSON 输出，适配智能体工作流

- HTTP MCP 服务：长生命周期、模型常驻内存

### 快速使用
bash

运行
```plaintext
npm install -g @tobilu/qmd
# 添加文档库
qmd collection add ~/notes --name notes
# 生成向量
qmd embed
# 搜索
qmd query "项目时间线"
```
### 对接 Claude
bash

运行
```plaintext
claude plugin marketplace add tobi/qmd
claude plugin install qmd@qmd
```
### 许可证
MIT License
---
## hsliuping/TradingAgents-CN
**仓库**：[https://github.com/hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN)**定位**：面向中文用户的多智能体股票分析学习平台（A 股 / 港股 / 美股）
### 核心定位
- **非实盘交易**：仅用于学习、研究、策略实验

- 中文本地化、A 股支持、国产大模型集成

- 完整教学中心：提示词工程、多智能体原理、风险说明

### v1.0.0 架构升级
- 后端：Streamlit → FastAPI

- 前端：Vue 3 + Element Plus

- 数据库：MongoDB + Redis

- 支持 Docker 多架构（amd64/arm64）

### 核心功能
- 多 LLM 支持：OpenAI、Google、DeepSeek、通义千问等

- 多数据源：Tushare、AkShare、BaoStock

- 批量分析、自选股、模拟交易

- 报告导出：MD / Word / PDF

- 实时进度：SSE + WebSocket

### 部署方式
- 绿色版（Windows 一键）

- Docker Compose

- 源码部署

### 许可证
- 开源部分：Apache 2.0

- 前端 / 后端 app：商业使用需授权

---
# 项目分类速览
表格

要不要我把这份文档**精简成一页速查版**，方便你直接复制到笔记或博客？
