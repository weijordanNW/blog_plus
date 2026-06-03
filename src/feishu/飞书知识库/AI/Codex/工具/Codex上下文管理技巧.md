---
title: Codex上下文管理技巧
date: '2026-05-28'
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/AI/Codex/工具
tag:
  - feishu
---
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/G9RqbYrqCosnkgxTdbXc3TY9njc.png)
# Codex 上下文持久化与防失忆完整解决方案
## 1. 最简单粗暴：维护一个"上下文文档" + 定期总结
- 每次会话结束前（或上下文快满时），直接让 Codex 生成一个简洁的总结 Markdown 文件（比如 `project-context.md` 或 `resume-prompt.md`）。
	- 提示词示例："请总结我们当前项目的关键决策、已完成部分、待办事项、重要文件修改记录和整体架构思路，输出成一个结构化的 Markdown 文件，便于下次新会话直接加载。"
	
- 下次新会话开头第一条消息就贴这个总结（或让它读取本地文件，如果 Codex 支持）。

- 额外技巧：维护一个固定的 `CLAUDE.md` 或 `AGENTS.md`（或类似 steering 文件），里面放项目背景、你的偏好、常见规则、已学到的经验教训。每次新会话让它先"熟悉当前项目"并加载这些文件。

- 优点：零成本，手动可控；缺点：需要你稍微维护。

## 2. 利用 Codex 内置的压缩/恢复功能
- Codex 有 **Compaction（上下文压缩）** 机制，能在长会话中自动或手动压缩历史，保留核心信息，让连续对话更持久。

- 命令提示：试试 `/compact`（压缩当前会话）、`/resume`（恢复之前保存的对话）或类似斜杠命令（有些版本支持 `/fork` 分支会话）。

- 如果你是用 Codex CLI，注意它有时会在达到窗口限制时自动处理，但最好主动监控 token 占用（很多用户会看到百分比提示）。

- 进阶：让 Codex 自己生成 `resume-prompt.md`，里面包含摘要 + 差距分析 + 修改文件列表，下次直接用。

## 3. 分工模式：用"监工 + 工人"拆解任务
- 别让单个 Codex 会话扛所有上下文。推荐：
	- **Codex 当"工人"**：只负责执行具体小任务，每次新会话启动一个独立小步骤，避免上下文爆炸。
		- **另一个 AI（如 Claude Code 或主聊天界面）当"监工"**：负责整体规划、任务拆分、监控进度、汇总结果。
	
- 这样工人每次重启都不影响大局，监工负责跨会话记忆。很多开发者反馈这能让 Codex 连续工作很久而不崩溃。

## 4. 外部持久化工具和自动化
- **本地 Markdown + Git**：把重要决策、进度、死胡同都记录到 Git 仓库里的 Markdown 文件里。新会话时让 AI 先读这些文件。

- **MCP 协议记忆层（如 Memorix）**：一些工具能提供跨会话、跨 IDE 的持久记忆，适合编程场景。

- **CLI 小工具**：有些用户建本地索引（`~/.codex/sessions`），用命令搜索旧线程、读取历史消息，避免每次全贴。

- **浏览器扩展或第三方（如 OpenMemory）**：如果你在网页版用，能自动捕获/注入上下文（跨不同 AI 也行）。

这两个开源项目都是为了解决你之前提到的 Codex AI（以及类似 Claude Code、Gemini CLI 等）新会话容易丢失上下文的痛点而生的。它们提供跨会话持久化记忆机制，让 AI 不用每次都手动贴历史。



下面是它们各自的作用、特点和区别（基于最新 GitHub 信息）：


---

## 1. codex-agent-mem（推荐优先尝试，尤其是 Codex 重度用户）
- **GitHub**：[https://github.com/MarceloCaporale/codex-agent-mem](https://github.com/MarceloCaporale/codex-agent-mem)

- **核心作用**：一个 **本地优先（local-first）** 的 Model Context Protocol (MCP) 记忆层。
	- 它专门为 AI 编码代理设计持久化项目连续性（continuity），把每次会话的关键信息（目标、约束、待办事项、blockers、Definition of Done、范围守卫等）提取、压缩并存储在本地 SQLite 数据库中。
		- 下次新会话时，AI 可以**按需拉取紧凑的"上下文包"**（context pack），大幅减少重复说明，避免"失忆"和范围漂移（scope drift）。
		- 特别强调防止虚假完成：通过工具如 `mem_open_work` 和 `mem_completion_check`，确保 AI 只有真正没有待办事项时才说"done"。
	
- **关键特点**：
	- **极致 token 节省**：能把原始上下文压缩 88-97%（例如从 2 万多 token 压到几百 token）。
		- 全本地运行，无需外部服务器；支持 read-only 模式（防止意外修改）。
		- 支持 MCP 工具调用：`mem_context_pack`（获取压缩包）、`mem_search` 等。
		- 额外功能：快照、治理策略、诊断 UI、可选同步到 `AGENTS.md`。
		- 兼容性强：Codex CLI/Desktop、Claude Code、Gemini CLI、Qwen、DeepSeek/Ollama 等。
	
- **安装方式（简单）**：

```bash
pipx install "git+https://github.com/MarceloCaporale/codex-agent-mem.git"
codex-agent-mem-bootstrap-codex  # 生成配置，粘贴到 ~/.codex/config.toml 即可
```


**适合场景**：你主要用 Codex，想高效、紧凑的结构化记忆，减少 token 消耗和手动维护。


---

## 2. code-session-memory
- **GitHub**：[https://github.com/djannot/code-session-memory](https://github.com/djannot/code-session-memory)

- **核心作用**：自动**向量记忆（vector memory）**系统，把多个工具的会话历史自动索引到一个共享的向量数据库中，实现语义搜索和跨工具/跨会话的上下文共享。
	- 每次 AI 完成一轮（agent turn）后，自动把新消息提取、切块、生成 embedding，存入数据库。
		- AI 或你自己可以通过自然语言语义搜索过去的所有会话记录，不再需要手动贴历史。
	
- **关键特点**：
	- **跨工具共享记忆**：OpenCode、Claude Code、Cursor、VS Code、**Codex**、Gemini CLI 等所有会话都存到一个数据库里（即使换工具也能复用上下文）。
		- 使用向量搜索（默认 sqlite-vec，可选 PostgreSQL + pgvector 实现多机共享）。
		- 支持会话浏览、删除、压缩（compaction）总结。
		- 提供 Web UI + CLI 查询工具，还有使用统计。
		- 增量索引，只处理新增内容，效率高。
	
- **安装方式（一键式）**：

```bash
npx code-session-memory install
```


它会自动检测已安装的工具，为 Codex 等写入 MCP 配置、notify hook 等。重启 Codex 即可生效（需要 OpenAI API key 用于 embedding）。



**适合场景**：你同时用多个 AI 编码工具（Codex + Cursor + Claude 等），希望有一个统一的语义搜索记忆库，能轻松查找"之前在哪个会话里讨论过这个功能"。


---

## 两者区别与建议
- **codex-agent-mem** 更偏向**结构化、紧凑的主动连续性管理**（提取关键决策、防止漂移、token 优化），像一个"智能项目记忆管家"。

- **code-session-memory** 更偏向**被动向量检索**（全历史语义搜索、跨工具共享），像一个"会话历史搜索引擎"。

- **可以结合使用**：一个管结构化核心记忆，一个管全文搜索，效果更好。

这两个项目都通过 **MCP（Model Context Protocol）** 与 Codex 等工具深度集成，安装后基本不用每次新会话贴历史了。
