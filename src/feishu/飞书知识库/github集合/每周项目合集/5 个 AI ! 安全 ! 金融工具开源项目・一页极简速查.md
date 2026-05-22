---
title: 5 个 AI / 安全 / 金融工具开源项目・一页极简速查
date: '2026-05-21'
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/github集合/每周项目合集
tag:
  - feishu
---
## free-claude-code（Claude Code 代理工具）
**仓库**：Alishahryar1/free-claude-code**定位**：Claude Code 代理转发工具，可对接任意兼容模型，无需官方 API Key**核心亮点**：支持 10+ 模型后端（NVIDIA NIM、Kimi、DeepSeek、Ollama 等）；按模型级别分流；内置本地管理后台；支持 Discord/Telegram 机器人、语音转录**快速安装**

bash

运行
```plaintext
uv tool install --force git+https://github.com/Alishahryar1/free-claude-code.git
fcc-server
```
**协议**：MIT
---
## mattpocock/skills（工程师实用 AI 技能集）
**仓库**：mattpocock/skills**定位**：面向真实工程场景的 Claude Code 实用技能集，解决 AI 编码常见痛点**核心亮点**：需求对齐（/grill-me）、TDD 开发、架构优化、Issue 管理、极简沟通模式；轻量可组合，不绑架流程**快速安装**

bash

运行
```plaintext
npx skills@latest add mattpocock/skills
```
**协议**：MIT
---
## hackingtool（全能安全渗透工具箱）
**仓库**：Z4nzu/hackingtool**定位**：一站式安全测试工具集，面向白帽、渗透测试工程师**核心亮点**：185+ 工具、20 大分类（信息收集、钓鱼、SQL 注入、XSS、内网、云安全等）；支持搜索 / 标签 / 推荐；一键安装、Docker 部署**快速安装**

bash

运行
```plaintext
curl -sSL https://raw.githubusercontent.com/Z4nzu/hackingtool/master/install.sh | sudo bash
```
**协议**：MIT
---
## FinceptTerminal（专业级 GUI 金融终端）
**仓库**：Fincept-Corporation/FinceptTerminal**定位**：免费开源 Bloomberg 级金融分析终端，带可视化界面**核心亮点**：全球市场、实时行情、AI 投研、地缘政治分析、贸易路线、组合管理、策略回测；支持股票 / 外汇 / 商品 / 加密货币**快速安装**

bash

运行
```plaintext
pip install fincept-terminal
fincept
```
**协议**：开源免费
---
## GenericAgent（极简自进化智能体框架）
**仓库**：lsdefine/GenericAgent**定位**：仅 3K 行代码的轻量自主智能体，可控制电脑、浏览器、手机**核心亮点**：自我进化沉淀技能；接管键鼠 / 屏幕 / 浏览器 / ADB；支持 Claude/Gemini/Kimi；跨平台，零复杂依赖**快速安装**

bash

运行
```plaintext
git clone https://github.com/lsdefine/GenericAgent.git
cd GenericAgent
pip install streamlit pywebview
# 配置 mykey.py 后启动
python launch.pyw
```
**协议**：MIT
