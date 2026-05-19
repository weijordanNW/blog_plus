---
title: Elog 接入飞书完整配置指南
date: 2026-05-19
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/博客
tag:
  - feishu
---
## 0. 前置准备
- 已安装并登录 **飞书客户端 / 网页版**（个人版免费即可）

- 已安装 Node.js 环境（Elog 运行依赖）

- 已创建 Elog 项目并初始化配置文件

---
## 1. 飞书开发者后台创建自建应用
### 1.1 进入开发者后台
1. 打开飞书开放平台官网：[https://open.feishu.cn/](https://open.feishu.cn/)

1. 点击右上角「登录」，用你的飞书账号扫码登录

1. 登录成功后，点击「开发者后台」进入管理页面

![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/LEzLb3PFnoAX5ex2gOZcePugnRe.png)
飞书开发者后台创建自建应用界面
### 1.2 创建企业自建应用
1. 在开发者后台首页，点击「创建企业自建应用」

1. 填写应用信息（可随意填写）：
	- 应用名称：如 `Elog-Sync-Bot`
		- 应用描述：如 `Elog飞书文档同步工具`
		- 应用图标：可自定义或使用默认图标
	
1. 点击「创建」，进入应用详情页

![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/LpcpbeKaSowuulx7pDzcfBf7nWb.webp)
飞书开发者后台创建自建应用界面
---
## 2. 配置应用权限与能力
### 2.1 开通云文档相关权限
1. 左侧菜单选择「权限管理」→「开通权限」

1. 依次搜索并勾选以下权限（权限类型选择「应用身份」）：
	- `docx:document:readonly`（查看新版文档）
		- `drive:drive:readonly`（查看 / 下载云空间文件）
		- `wiki:wiki`（管理知识库）
	
1. 每添加一个权限，点击「确认开通权限」

![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/VsW5bFNqJoF4wTxMOWIc5n5inXg.webp)
飞书自建应用权限管理界面
### 2.2 添加机器人能力
1. 左侧菜单选择「应用能力」→「添加应用能力」

1. 在能力列表中找到「机器人」，点击「+ 添加」

1. 确认添加后，左侧菜单会出现「机器人」选项，无需额外配置

### 2.3 创建应用版本并发布
1. 左侧菜单选择「版本管理与发布」

1. 点击「创建版本」，填写版本信息：
	- 版本号：如 `1.0.0`
		- 更新说明：如 `初始版本，支持Elog同步`
	
1. 点击「保存并发布」，选择「创建测试版本」（无需企业管理员审核，个人用户推荐）

---
## 3. 获取应用凭证
1. 左侧菜单选择「凭证与基础信息」

1. 找到「App ID」和「App Secret」，复制保存：
	- `App ID`：形如 `cli_a...`，直接复制
		- `App Secret`：点击「查看 / 重置」，复制密钥（仅显示一次，务必保存）
	
---
## 4. 飞书客户端配置群聊与机器人
### 4.1 创建群聊
1. 打开飞书客户端，新建一个群聊（仅添加自己即可）

1. 群聊名称建议命名为 `Elog同步群`，方便后续管理

### 4.2 添加机器人到群聊
1. 进入群聊，点击右上角「...」→「群设置」

1. 找到「群机器人」选项，点击「添加机器人」

1. 搜索你的应用名称（如 `Elog-Sync-Bot`），点击添加

1. 确认添加后，群聊会收到机器人进群通知

![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/RTTQbaNYqolXKaxINnkcdrSXnVh.png)
飞书群聊添加机器人界面
---
## 5. 配置飞书云文档 / 知识库权限（二选一）
### 方案 A：授权「我的空间」文件夹
1. 打开飞书云文档 → 进入「我的空间」

1. 新建或选择一个文件夹作为 Elog 同步目录

1. 点击右上角「分享」→「邀请协作者」

1. 搜索刚才创建的群聊，权限设置为「可编辑」，发送邀请

1. 完成后，机器人将获得该文件夹的访问权限

### 方案 B：授权「知识库」
1. 打开飞书云文档 → 进入「知识库」

1. 新建或选择一个知识库作为 Elog 同步目录

1. 点击右上角「...」→「空间设置」→「成员设置」

1. 点击「添加成员」，搜索群聊并添加，权限设置为「管理员」或「可编辑」

---
## 6. 获取 `folderToken`/`wikiId`
### 6.1 获取 `folderToken`（我的空间文件夹）
1. 浏览器打开目标文件夹，查看地址栏 URL：
plaintext

```plaintext
https://xxx.feishu.cn/drive/folder/abc123xyz
```
1. URL 末尾的 `abc123xyz` 即为 `folderToken`

### 6.2 获取 `wikiId`（知识库 ID）
1. 进入目标知识库，点击右上角「...」→「空间设置」

1. 查看地址栏 URL：
plaintext

```plaintext
https://xxx.feishu.cn/wiki/settings/7075377271827264924
```
1. URL 末尾的数字串 `7075377271827264924` 即为 `wikiId`

---
## 7. Elog 配置文件修改
打开你的 `elog.config.js`，配置飞书相关参数：

javascript

运行
```plaintext
module.exports = {
  write: {
    platform: 'feishu', // 配置写入平台为飞书
    feishu: {
      appId: '你的AppID', // 替换为你的App ID
      appSecret: '你的AppSecret', // 替换为你的App Secret
      type: 'space', // 文件夹同步用space，知识库同步用wiki
      folderToken: '你的folderToken', // 文件夹同步时填写
      // wikiId: '你的wikiId', // 知识库同步时填写，二选一
      // 限流优化配置（解决request trigger frequency limit错误）
      concurrency: 1, // 并发请求数，降低为1避免触发限流
      interval: 500, // 请求间隔（毫秒），每请求一次等待500ms
      retry: {
        max: 3, // 失败重试次数
        delay: 1000, // 初始重试延迟（毫秒）
        backoff: true // 指数退避重试
      }
    }
  },
  // 其他配置...
}
```
---
## 8. 解决常见问题：`request trigger frequency limit`
### 问题原因
飞书对免费自建应用有 API 调用频率限制，Elog 批量同步文档时短时间内触发过多请求，触发限流保护。
### 解决方案
1. **临时方案**：暂停同步，等待 5-10 分钟后重试

1. **根本解决**：修改 Elog 配置，降低请求频率（见第 7 步配置示例）

1. **减少单次同步数量**：分批次同步文档，避免一次性同步全部内容

1. **权限排查**：确认 `folderToken`/`wikiId`、`appId`/`appSecret` 填写正确，且应用已发布测试版本

1. **进阶方案**：联系企业管理员升级飞书版本，提高 API 调用配额

---
## 9. 验证配置是否成功
1. 执行 Elog 同步命令：
bash运行

```plaintext
elog sync
```
1. 若终端输出「飞书文档同步完成」，且目标文件夹 / 知识库中出现同步的文档，说明配置成功

---
## 配置清单汇总
表格


