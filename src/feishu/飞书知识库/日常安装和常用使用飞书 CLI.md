---
title: 日常安装和常用使用飞书 CLI
date: '2026-05-22 01:32:51'
updated: '2026-05-22 01:33:46'
---
> 适用对象：需要在本机或 AI Agent 环境中安装、初始化、认证并日常使用飞书/Lark CLI 的同学。
## 1. 安装前准备
确保本机已安装 Node.js 和 npm：
```bash
node --version
npm --version
```
如果命令不可用，请先安装 Node.js，或使用团队统一的 Node 版本管理工具。
## 2. 安装飞书 CLI
推荐使用官方安装命令：
```bash
npx @larksuite/cli@latest install
```
安装完成后验证：
```bash
lark-cli --version
lark-cli --help
```
如果之前误装过空壳包 `lark-cli`，可先移除：
```bash
npm uninstall -g lark-cli
npx @larksuite/cli@latest install
```
## 3. 初始化应用配置
首次使用需要配置飞书开放平台应用：
```bash
lark-cli config init --new
```
命令会给出授权或配置链接。打开链接后，按页面提示完成应用配置。
## 4. 登录与授权
推荐先用常用权限登录：
```bash
lark-cli auth login --recommend
```
也可以按具体业务域授权，例如只授权日历：
```bash
lark-cli auth login --domain calendar
```
或按具体 scope 授权：
```bash
lark-cli auth login --scope "calendar:calendar:read"
```
查看当前登录状态：
```bash
lark-cli auth status
```
## 5. 身份选择：user 与 bot
飞书 CLI 常见有两种身份：

| 身份   | 适用场景                  | 示例          |
| ---- | --------------------- | ----------- |
| user | 访问用户自己的日历、云文档、知识库、邮箱等 | `--as user` |
| bot  | 以应用机器人身份发送消息或访问应用资源   | `--as bot`  |

建议访问个人资源时显式使用 user 身份：
```bash
lark-cli calendar +agenda --as user
lark-cli wiki +space-list --as user
```
## 6. 常用命令
### 日历
查看今日日程：
```bash
lark-cli calendar +agenda --as user
```
查询忙闲：
```bash
lark-cli calendar +freebusy --as user
```
### 知识库
列出知识空间：
```bash
lark-cli wiki +space-list --as user
```
查看知识库节点：
```bash
lark-cli wiki +node-get --as user --token "<wiki_url_or_token>"
```
在知识库下创建节点：
```bash
lark-cli wiki +node-create --as user --parent-node-token "<parent_node_token>" --title "新文档标题"
```
### 云文档
创建文档：
```bash
lark-cli docs +create --as user --api-version v2 --doc-format markdown --content "# 文档标题\n\n正文内容"
```
读取文档内容：
```bash
lark-cli docs +fetch --as user --api-version v2 --token "<doc_token>"
```
更新文档内容：
```bash
lark-cli docs +update --as user --api-version v2 --token "<doc_token>" --content "追加内容"
```
### 即时消息
发送消息到指定群：
```bash
lark-cli im +messages-send --as bot --chat-id "<chat_id>" --text "Hello"
```
搜索群聊：
```bash
lark-cli im +chat-search --as user --query "群名关键词"
```
### 表格
读取表格信息：
```bash
lark-cli sheets +read --as user --spreadsheet-token "<spreadsheet_token>"
```
追加数据：
```bash
lark-cli sheets +append --as user --spreadsheet-token "<spreadsheet_token>" --range "Sheet1!A1" --values '[["日期","事项"]]'
```
## 7. 输出格式
常用输出格式：
```bash
--format json
--format pretty
--format table
--format csv
```
示例：
```bash
lark-cli calendar +agenda --as user --format table
```
## 8. 分页与批量读取
部分列表接口默认只读取一页。需要读取全部数据时使用：
```bash
--page-all
```
示例：
```bash
lark-cli wiki +member-list --as user --space-id "<space_id>" --page-all
```
## 9. 安全建议
- 不要在终端、文档或聊天中暴露 `appSecret`、access token 等敏感信息。

- 删除、移动、权限变更等写操作前，先确认目标对象和参数。

- 不确定命令会产生什么影响时，优先使用 `--dry-run` 预览。

- 访问个人资源时优先使用 `--as user`，访问机器人资源时再使用 `--as bot`。

## 10. 常见问题
### 命令找不到 lark-cli
确认 npm 全局 bin 路径是否在 PATH 中，或重新执行：
```bash
npx @larksuite/cli@latest install
```
### user 身份提示 needs_refresh
通常下一次调用 user API 时会自动刷新。也可以重新登录：
```bash
lark-cli auth login --recommend
```
### 权限不足
查看报错中缺失的 scope，然后按最小权限重新授权：
```bash
lark-cli auth login --scope "<missing_scope>"
```
### Wiki 链接不能直接编辑
`/wiki/...` 链接需要先解析真实文档类型和 token：
```bash
lark-cli wiki +node-get --as user --token "<wiki_url>"
```
返回中的 `obj_type` 表示真实类型，`obj_token` 是后续编辑使用的真实 token。
## 11. 推荐日常流程
1. 确认 CLI 可用：`lark-cli --version`

1. 确认登录状态：`lark-cli auth status`

1. 明确身份：个人资源用 `--as user`，机器人资源用 `--as bot`

1. 先读取或 dry-run，再执行写操作

1. 保存关键对象 token，方便后续自动化处理

