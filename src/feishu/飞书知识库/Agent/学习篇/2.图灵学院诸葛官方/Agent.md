---
title: Agent
date: '2026-07-30 11:27:20'
updated: '2026-07-30 14:55:39'
---
## 其他
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/G3McbFSw5oVIa5x0m7CcPnCunTb.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/TwAwbS40toevP9xION3c2IzUnJd.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/GkkgbTu3io4avDxrRY8cWrpvnje.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/WSHrbh8VXoRstsxDFMecTZobnLh.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/Up9sbUe9NoRU8GxzuDxcE3VOnRg.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/GxcAbvczhoavuSxfIMzcAPvpnFg.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/IanXbhpsXoJMWhx02ZlcYKKbnKh.png)
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/DP2ebY1HyoTkMfx144hcddR7neh.png)

## 1.工业级Agent项目结构完整拆解：多模态RAG Agent如何复用到真实业务，让效率飙升90%
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/WedBbn9bRodkYyxee7Sc6WDPn5g.png)
 


## 2、90% 团队都踩过的 3 个架构坑，Agent 开发一定要避开
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/ONeeb2XX8of9fxxdiIicBNGVnlc.png)
##  
## 3、一套可复用的 Agent 项目结构，多模态 RAG 直接套进业务 
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/VM6GbEy4co4SBBxVPpwcOkXBnVh.png)

## 5、Harness Engineering 实战解析：大型企业如何用 Agent 提效
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/JpIObHzgnowfCpxEwvxcJ5qpnjh.png)
```javascript
# 红线（不可违反）

1. **价格字段必须使用 Integer（分为单位）**  
   - 禁止使用 Float/Double/BigDecimal 表示金额

2. **Redis Key 前缀必须为 `smartdraw`**  
   - 禁止使用无名或通用前缀

3. **RocketMQ 消费者必须等**（即必须处理重复消息）  
   - 每个消费者都必须处理重复消息

4. **异常处理必须使用 BusinessException 体系**  
   - 禁止原始异常消息到 API 层

5. **Controller 必须使用构造器注入**  
   - 禁止使用 @Autowired 字段注入

6. **Service @Transactional 必须声明 rollbackFor**  
   - 禁止异常时静默提交

7. **Vue 3 必须使用 `<script setup>` 语法**  
   - 禁止使用 Options API

8. **API 响应必须遵循统一格式**  
   - `{code, message, data}` 结构
```



## 1.解析现代RAG架构范式与前沿技术生态
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/D1KibCKBBozcaMx9Ed6cuVaDnqd.png)
## 2.从零搭建端到端生产级RAG检索增强应用
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/QUo3bCm6mofulsxub0ZcXwa6nOh.png)
## 3.深度剖析Embedding策略，构建高精度向量检索体系
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/LI2YbqjGdoL6okx9DC8cKdITnLo.png)

## 4.结合Llamalndex打造模块化RAG服务架构
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/WBnhbq31fojBFKxNjomcpuGrnhd.png)
##  5.运用重排算法，进一步提升检索匹配精度
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/GhtKb3F2soDLaPx8JQscKtMjns9.png)
## 6.优化上下文窗口，实现稳定高效的多轮对话
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/ChvSbBKZ5obAtaxEbw5cjmP7nUe.png)

