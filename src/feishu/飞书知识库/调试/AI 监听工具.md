---
title: AI 监听工具
date: '2026-06-19 21:19:04'
updated: '2026-06-19 21:37:29'
---
监听工具

https://github.com/liaohch3/claude-tap


```markdown
# claude-tap v0.1.120 — 编码 Agent API 流量拦截与查看工具

## 安装方式
```bash
pip install claude-tap
```
> 本系统 Python 3.12，`uv` 不可用，使用 `pip` 安装。


---

## 基本用法


| 用途             | 命令                                             |
| -------------- | ---------------------------------------------- |
| 监听 Claude Code | `claude-tap`                                   |
| 监听 Codex CLI   | `claude-tap --tap-client codex`                |
| 监听 OpenCode    | `claude-tap --tap-client opencode`             |
| 监听 Gemini CLI  | `claude-tap --tap-client gemini -- -p "hello"` |
| 仅启动代理（不启动客户端）  | `claude-tap --tap-no-launch --tap-port 8080`   |
| 实时面板（默认启用）     | 端口 `19527`，自动打开浏览器                             |
| 查看历史记录         | `claude-tap dashboard`                         |
| 导出追踪数据         | `claude-tap export trace.jsonl`                |
| 升级工具           | `claude-tap update`                            |


---

## 支持的客户端
`claude`, `codex`, `codexapp`, `gemini`, `kimi`, `kimi-code`, `opencode`, `openclaw`, `pi`, `hermes`, `cursor`, `qoder`, `agy`, `codebuddy`


---

## 工作原理
1. 启动本地代理服务。

1. 自动修改目标客户端的 API 地址，使其指向本地代理。

1. 拦截并记录所有 API 请求与响应。

1. 通过本地 Web 面板（端口 `19527`）实时查看流量。
	
---

## 快速开始
运行以下命令即可开始监听当前 OpenCode 会话的 API 流量：
```bash
claude-tap --tap-client opencode
```



### 方案 A：重新启动 OpenCode 并实时监控
适用场景：不保留当前会话，愿意重启一个新实例来捕获流量。
1. 关闭当前所有 OpenCode 会话。

1. 执行：

1. bash

```javascript
claude-tap --tap-client opencode --tap-live
```
- 自动启动 OpenCode，并打开 Web 仪表盘（`http://localhost:19527`）实时显示请求/响应。

- 若使用自定义 Provider，增加 `--tap-target "``https://your-api-endpoint``"`。


---

### 方案 B：监听已有会话（使用代理 + 手动启动）
#### 终端 1 — 启动代理（不启动 OpenCode）
```bash
claude-tap --tap-client opencode --tap-no-launch --tap-port 8899
```

#### 终端 2 — 通过代理启动 OpenCode
```bash
opencode --provider.baseUrl http://127.0.0.1:8899
```
> 若使用 Antigravity 自定义 Provider，可能需要额外指定 `--tap-target`。


---

### 方案 C：查看历史会话的 API 调用（不实时）
若不想关闭当前会话，只想导出历史数据：
```bash
opencode export <session-id>
```
导出会话数据后再进行分析。


---

## 总结

| 需求              | 建议方式                                                      |
| --------------- | --------------------------------------------------------- |
| 实时监听当前 OpenCode | 关掉会话，用 `claude-tap --tap-client opencode --tap-live` 重新启动 |
| 监听已有会话（不重启）     | 用 `--tap-no-launch` 启动代理，手动指定 OpenCode 的 `baseUrl`        |
| 仅查看历史 API 调用    | 使用 `opencode export` 导出会话                                 |



请根据实际场景选择合适方案。
