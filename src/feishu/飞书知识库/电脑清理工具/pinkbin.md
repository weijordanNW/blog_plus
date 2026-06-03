---
title: pinkbin
date: '2026-05-24'
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/电脑清理工具
tag:
  - feishu
---
### 1. 项目名称及翻译
- 项目名称：pinkbin

- 名称翻译：粉红箱子 / 品克缤 (一个音译)

### 2. 项目地址
- [https://github.com/cccyd2003-qwq/pinkbin](https://github.com/cccyd2003-qwq/pinkbin)

### 3. 功能介绍
pinkbin 是一款由 Rust + React + Tauri 构建的跨平台开源磁盘清理工具。其核心功能是帮助用户快速理解磁盘空间占用，并借助AI安全地清理文件，其设计理念是“扫盘 · 看懂 · 删除”。

它的主要功能包括：
- 快速扫描与分析：在Windows系统上能直读NTFS主文件表（MFT），扫描整块C盘通常只需2到5秒。扫描完成后，会通过彩色矩形树图（treemap）和树状视图清晰地展示空间分配情况，让用户一眼就能看到大文件或文件夹。

- AI智能分析：对于不熟悉的文件夹，可以直接将其拖拽到AI对话框进行询问。AI会解释该文件夹的用途、判断能否删除以及删除后可能的影响。该功能支持用户自备Anthropic、OpenAI、Gemini等API密钥，或通过Ollama使用本地免费的AI模型。

- 安全可控的清理：用户可以按需勾选条目进行清理。删除操作默认会将被删除的文件移动到回收站，提供了后悔的余地。工具遵循安全设计，其核心代码包含特定断言来防止误删用户数据。

- 当前状态与支持：目前该项目主要提供 Windows 10/11 (x64) 的预编译安装包，文件格式为`setup.exe`或`.msi`。对于macOS和Linux系统，用户需要自行编译，作者表示将在未来考虑支持。

这个工具就是为分析磁盘空间和清理垃圾量身打造的
