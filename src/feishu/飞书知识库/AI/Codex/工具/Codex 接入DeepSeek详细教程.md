---
title: Codex 接入DeepSeek详细教程
date: '2026-05-28'
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/AI/Codex/工具
tag:
  - feishu
---
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/F5PLbR2zDoPsOmx2komc6FxlnOG.png)
文档来自：

>  大家好，本文来自晓刘，本文由人工整理、撰写，并做了必要校准。
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/JDFpbxXy2oqol0xfUS1cwl8VnRh.png)


# CCX+CCSwitch的带风险的方式（不推荐）
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/C4VWbO2axoMy2cxI2NUcZrTgnCh.png)

# Codex 接入DeepSeek详细流程


|   |   |   |
| - | - | - |
|   |   |   |



|                                                           |
| --------------------------------------------------------- |
| Windows 这版的实现方式是：**如果在使用脚本的过程中出现报错，可以在Codex输入下方的prompt：** |

## 目标与准备
这套流程的目标是：
1. 让本机的 Codex App 可以切换到 DeepSeek 模型使用。

1. 把启动和回滚收敛成两个脚本。

1. 全程只维护一个 DeepSeek API Key。

当前这套方案基于本机已经安装好的 CoDeepSeedeX / `dsproxy`，通过本地代理把 Codex 的模型请求转到 DeepSeek。
---
### 1.1 前置条件
执行这套流程前，需要满足下面几个条件：
1. 本机已经安装 Codex App。

1. 本机已经安装 `dsproxy`。

1. 本机已经有一个可用的 DeepSeek API Key。





可以用下面命令检查 `dsproxy` 是否存在：
```bash
~/.local/bin/dsproxy --version
```
如果能看到版本号，说明本地代理已经装好。
---
### 1.2 只需要维护一个 Key
这套方案只认这一处：
```bash
~/.config/codex-deepseek-switch/env
```
文件内容格式如下：
```bash
export DEEPSEEK_API_KEY=你的DeepSeekKey
```
后续无论是启动脚本，还是回滚后再次切换，都只读取这一处。
---
## 接入原理
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/TeNWbyK9eotg2Mx6fP9cJLmgnCc.png)
这套方案不是直接改 Codex App 二进制，而是通过下面几步完成切换：
1. 用 `dsproxy` 在本地启动一个 DeepSeek 代理。

1. 把 `~/.codex/config.toml` 的默认模型改成指向本地代理。

1. 把 `DEEPSEEK_API_KEY` 注入到 `launchctl`，让图形界面的 Codex App 也能读到这个环境变量。

1. 重启 Codex App，让新配置生效。

回滚时则反过来做：
1. 恢复原始 `~/.codex/config.toml`

1. 停掉本地代理

1. 清掉 `launchctl` 里的 `DEEPSEEK_API_KEY`

1. 重启 Codex App

### 2.1 更直白的调用链路
可以把这套链路理解成：
```latex
Codex App
  -> 读取 ~/.codex/config.toml
  -> 发现默认模型其实不是直连 OpenAI，而是走本地 http://127.0.0.1:8000/v1
  -> 请求发给本机 dsproxy
  -> dsproxy 再拿着 DEEPSEEK_API_KEY 去请求 DeepSeek 官方接口
  -> DeepSeek 返回结果
  -> dsproxy 转成 Codex 能识别的 Responses 风格
  -> Codex App 正常显示结果
```
也就是说，真正被改掉的不是 Codex App 本体，而是它的“默认模型出口”。
### 2.2 为什么不能只改一个配置文件
只改 `~/.codex/config.toml` 还不够，原因有三层：
1. Codex 需要知道默认模型应该发到哪个 `base_url`。

1. 本地代理 `dsproxy` 需要知道该拿什么 key 去请求 DeepSeek。

1. 图形界面的 Codex App 还必须在自己的进程环境里读到 `DEEPSEEK_API_KEY`。

所以这套流程实际上同时改了三类东西：
1. `~/.codex/config.toml`

1. `~/.config/deepseek-responses-proxy/env`

1. `launchctl` 里的 `DEEPSEEK_API_KEY`

### 2.3 为什么要有启动脚本和回滚脚本
因为这不是“改一处就永久结束”的配置，而是一个会来回切换的场景：
1. 有时你想让 Codex 走 DeepSeek。

1. 有时你又想快速恢复官方默认模型。

如果每次都手工改配置、重启代理、重开 App，成本很高，也容易漏步骤。所以最终才把它收敛成两个脚本：
1. 启动脚本负责切换到 DeepSeek。

1. 回滚脚本负责恢复默认。

---
## 脚本化操作
启动脚本路径：
```bash
/Users/bytedance/Skills-Working/scripts/start-codex-deepseek.sh
```
它内部会自动完成这些事情：
1. 检查 `~/.codex/config.toml` 和 `~/.local/bin/dsproxy` 是否存在。

1. 读取 `~/.config/codex-deepseek-switch/env` 里的 `DEEPSEEK_API_KEY`。

1. 自动生成 `~/.config/deepseek-responses-proxy/env`。

1. 用 `launchctl setenv DEEPSEEK_API_KEY ...` 注入图形应用环境变量。

1. 如果当前还不是 DeepSeek 模式，就把当前默认 Codex 配置备份到：

```bash
~/.codex/config.toml.codex_default_backup
```
1. 自动执行 `dsproxy config set-model ...`

1. 自动补齐 `deepseek` 和 `deepseek-thinking` 两个 Codex profile。

1. 自动修改 `~/.codex/config.toml` 顶部默认模型配置，让默认模型走 DeepSeek。

1. 自动停止并重启本地代理。

1. 自动关闭并重新打开 Codex App。

---
### 3.1 如何启动 DeepSeek 模式
直接执行：
```bash
/Users/bytedance/Skills-Working/scripts/start-codex-deepseek.sh
```
执行成功后，脚本会输出类似：
```bash
[codex-deepseek] DeepSeek mode enabled. Codex has been reopened.
```
这表示：
1. 默认模型已切到 DeepSeek。

1. 代理已经重新拉起。

1. Codex App 已重开。

---
### 3.2 回滚脚本做了什么
回滚脚本路径：
```bash
/Users/bytedance/Skills-Working/scripts/rollback-codex-default.sh
```
它内部会自动完成这些事情：
1. 用 `~/.codex/config.toml.codex_default_backup` 恢复原始 Codex 默认配置。

1. 执行 `launchctl unsetenv DEEPSEEK_API_KEY`。

1. 停掉 `dsproxy`。

1. 关闭并重新打开 Codex App。

---
### 3.3 如何回滚到默认模式
直接执行：
```bash
/Users/bytedance/Skills-Working/scripts/rollback-codex-default.sh
```
执行成功后，脚本会输出类似：
```bash
[codex-deepseek] Rolled back to the default Codex config and reopened Codex.
```
这表示：
1. 默认模型已经恢复回原始配置。

1. DeepSeek 的 App 级环境变量已经清掉。

1. 本地代理已经停止。

1. Codex App 已经重开。

---
### 3.4 手动模式对应命令
如果你不想走脚本，也可以手动执行。
#### 3.4.1 写入 DeepSeek Key
```bash
~/.local/bin/dsproxy config set-model deepseek-v4-flash --provider deepseek --value '你的key' --skip-validation
```
这里使用了 `--skip-validation`，原因见下面的证书问题说明。
#### 3.4.2 停止代理
```bash
~/.local/bin/dsproxy stop
```
#### 3.4.3 启动代理
```bash
~/.local/bin/dsproxy start
```
#### 3.4.4 本地健康检查
```bash
~/.local/bin/dsproxy doctor --allow-down
curl -sS http://127.0.0.1:8000/healthz
```
---
## 推荐用法
以后建议就记两条命令：

切换到 DeepSeek：
```bash
/Users/bytedance/Skills-Working/scripts/start-codex-deepseek.sh
```
恢复默认：
```bash
/Users/bytedance/Skills-Working/scripts/rollback-codex-default.sh
```
只要 `~/.config/codex-deepseek-switch/env` 里的 key 不变，这两个脚本就可以反复使用。
---

