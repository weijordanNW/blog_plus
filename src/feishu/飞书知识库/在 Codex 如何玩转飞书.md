---
title: 在 Codex 如何玩转飞书
date: '2026-05-22'
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库
tag:
  - feishu
---
> 这篇文档面向在 Codex 中使用飞书能力的同学，目标是把飞书 CLI、Codex 技能和日常协作流程串起来，用更少的上下文切换完成更多事情。
## 1. 核心思路
在 Codex 中操作飞书，推荐遵循三个原则：
1. 先描述目标，而不是先描述命令。

1. 让 Codex 选择合适的飞书技能和 CLI 命令。

1. 对写入、删除、移动、权限变更等操作，先确认对象和影响范围。

你可以直接说：
```undefined
帮我读取这个飞书文档，总结成会议纪要。
```
```undefined
在这个知识库下面新建一篇 Markdown 文档，内容是团队日报模板。
```
```undefined
查一下我今天的日程，并整理出需要准备的会议。
```
## 2. Codex 能操作哪些飞书资源
常用能力包括：

| 场景   | 能力                  | 常用技能                   |
| ---- | ------------------- | ---------------------- |
| 即时消息 | 发消息、搜群、查聊天记录、下载文件   | lark-im                |
| 通讯录  | 按姓名或邮箱查人、解析 open_id | lark-contact           |
| 日历   | 查日程、建会议、查忙闲、约会议室    | lark-calendar          |
| 云文档  | 创建、读取、更新、总结、改写文档    | lark-doc               |
| 知识库  | 查空间、建节点、移动节点、管理成员   | lark-wiki              |
| 表格   | 读写单元格、追加数据、导出表格     | lark-sheets            |
| 多维表格 | 表、字段、记录、视图、统计分析     | lark-base              |
| 任务   | 创建、查询、更新任务和清单       | lark-task              |
| 邮箱   | 搜索、阅读、起草、发送邮件       | lark-mail              |
| 会议记录 | 查询会议、纪要、逐字稿、待办      | lark-vc / lark-minutes |
| 画板   | 生成流程图、架构图、组织图等      | lark-whiteboard        |

## 3. 第一次使用前的准备
确认飞书 CLI 已安装：
```undefined
lark-cli --version
```
查看当前认证状态：
```undefined
lark-cli auth status
```
如果没有配置或登录，需要先执行：
```undefined
lark-cli config init --new
lark-cli auth login --recommend
```
在 Codex 中，如果命令返回授权链接，需要你打开链接并完成授权。授权完成后，Codex 就可以继续执行后续步骤。
## 4. user 与 bot 身份怎么选
飞书 CLI 有两种常见身份：

| 身份   | 适合做什么               | 注意事项             |
| ---- | ------------------- | ---------------- |
| user | 访问你的日历、文档、知识库、邮箱、任务 | 个人资源优先使用 user    |
| bot  | 以应用机器人身份发送消息或操作应用资源 | bot 不一定能看到你的个人资源 |

建议表达需求时顺手说明身份：
```undefined
用我的 user 身份查一下今天日程。
```
```undefined
用 bot 身份给这个群发一条通知。
```
如果不确定，就让 Codex 判断：
```undefined
帮我选择合适身份完成这个操作，并说明原因。
```
## 5. 最常用的 Codex 提示词
### 读取和总结文档
```undefined
读取这个飞书文档，帮我总结为：背景、关键结论、待办事项、风险。
<文档链接>
```
### 在知识库中新建文档
```undefined
在这个知识库节点下新建一篇 Markdown 文档，标题是「项目复盘模板」，内容包括背景、目标、过程、结果、问题、行动项。
<知识库链接>
```
### 更新已有文档
```undefined
把下面这段内容追加到这个飞书文档的「风险」章节后面。
<文档链接>
<追加内容>
```
### 查询日程并准备会议
```undefined
查一下我明天的日程，列出每个会议的时间、参会人、主题，并给出会前准备清单。
```
### 创建任务
```undefined
根据这份会议纪要，帮我拆成飞书任务，按负责人和截止时间创建。
<会议纪要链接>
```
### 查询群消息
```undefined
在这个群里搜索最近一周关于「发布」的消息，整理成时间线。
<群名或 chat_id>
```
## 6. 处理知识库链接的正确方式
飞书知识库链接通常是：
```undefined
https://xxx.feishu.cn/wiki/<wiki_token>
```
这个 token 不是最终文档 token。Codex 会先解析知识库节点，拿到：
- `space_id`：知识空间 ID

- `node_token`：知识库节点 token

- `obj_type`：节点背后的真实对象类型

- `obj_token`：真实文档、表格或多维表格 token

你可以直接给 Codex 知识库链接，它会自动完成解析。
## 7. 创建文档的推荐方式
如果只是文字说明或操作手册，推荐用 Markdown：
```undefined
在这个知识库下创建 Markdown 文档，标题是「xxx」，正文包括这些章节：...
```
如果需要更复杂的飞书样式，例如 callout、表格、勾选项、分栏，可以让 Codex 用 XML 格式创建：
```undefined
帮我创建一篇排版更精致的飞书文档，使用 callout、表格和 checklist。
```
如果内容里有流程、架构、路线图，可以让 Codex 创建画板：
```undefined
给这篇方案文档加一张架构图画板，展示系统模块和调用关系。
```
## 8. 写操作前怎么降低风险
涉及以下操作时，建议让 Codex 先预览：
- 删除文档、节点、表格记录

- 移动知识库节点

- 修改权限或成员

- 批量写入表格或多维表格

- 向群里发送消息

推荐提示：
```undefined
先 dry-run 预览，不要直接执行。把目标对象、请求参数和可能影响告诉我。
```
确认后再说：
```undefined
确认执行。
```
## 9. 典型工作流
### 会议到任务闭环
1. 用 Codex 查询当天会议。

1. 读取会议纪要或妙记。

1. 提取结论和行动项。

1. 创建飞书任务。

1. 把任务链接追加回会议纪要文档。

### 知识库沉淀
1. 给 Codex 一个主题。

1. 让它在知识库下创建文档。

1. 自动整理目录、标题、表格和代码块。

1. 需要时插入画板或流程图。

1. 后续持续追加更新。

### 表格数据处理
1. 读取飞书表格或多维表格数据。

1. 让 Codex 清洗、统计、分组或生成结论。

1. 把结果写回新 sheet、Base 记录或文档。

1. 生成可复用的操作说明。

### 群消息到文档
1. 搜索群聊关键词。

1. 汇总关键讨论。

1. 提取决策、分歧、待办。

1. 写入知识库文档。

## 10. 常用命令备忘
查看认证状态：
```undefined
lark-cli auth status
```
查看日程：
```undefined
lark-cli calendar +agenda --as user
```
解析知识库节点：
```undefined
lark-cli wiki +node-get --as user --token "<wiki_url>"
```
列出知识库子节点：
```undefined
lark-cli wiki +node-list --as user --space-id "<space_id>" --parent-node-token "<node_token>"
```
创建文档：
```undefined
lark-cli docs +create --as user --api-version v2 --parent-token "<parent_node_token>" --doc-format markdown --content @doc.md
```
读取文档：
```undefined
lark-cli docs +fetch --as user --api-version v2 --doc "<doc_url_or_token>"
```
搜索用户：
```undefined
lark-cli contact +search-user --as user --query "姓名或邮箱"
```
## 11. 推荐表达方式
好的表达方式：
```undefined
帮我在这个知识库下创建一篇文档，标题是「发布流程」，用 Markdown，包含环境准备、发布步骤、回滚方案和常见问题。
```
```undefined
查一下我今天 14:00 之后的会议，并把需要我发言的会议列出来。
```
```undefined
读取这个多维表格，统计每个状态的数量，并把结论写入一篇飞书文档。
```
不够清晰的表达：
```undefined
帮我弄一下飞书。
```
```undefined
处理这个链接。
```
为了让 Codex 做得更准，最好同时给出：目标、链接、输出格式、是否允许写入。
## 12. 安全边界
使用 Codex 操作飞书时，建议遵守这些边界：
- 不把 appSecret、access token、私钥写进文档或聊天。

- 不让 Codex 未经确认删除或移动重要内容。

- 不在未确认收件人和内容时发送群消息或邮件。

- 不把敏感会议纪要、客户资料、员工信息复制到无关文档。

- 对批量写入操作先做小范围测试。

## 13. 一句话总结
把 Codex 当成飞书里的自动化协作助手：你负责说清目标和边界，Codex 负责选技能、调 CLI、读写资源、整理内容和验证结果。
