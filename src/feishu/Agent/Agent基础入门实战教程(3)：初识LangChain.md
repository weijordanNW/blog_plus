---
title: Agent基础入门实战教程(3)：初识LangChain
date: '2026-05-25'
icon: bokeyuan
star: false
isOriginal: false
category:
  - Agent
tag:
  - feishu
---
1：本教程为本人学习agent的总结文档，均为手动筛选个人觉得重点的内容，也当做是一个笔记分享给想学习agent的佬友们，如有错误，请指正。

2：本人为前端转agent中，如有岗位可私，base：杭州。

上一篇导航

> 【写在前面】 1：本教程为本人学习agent的总结文档，均为手动筛选个人觉得重点的内容，也当做是一个笔记分享给想学习agent的佬友们，如有错误，请指正。 2：本人为前端转agent中，如有岗位可私，base：杭州。 上一篇导航 2.1 环境准备 环境 说明 Python 推荐 Python 3.10 及以上版本 VS Code 用于打开项目和运行 Notebook …
## 3.1 环境准备

安装命令
```plaintext
pip install -U langchain langchain-core python-dotenv langchain-openai
```
注意：
```plaintext
本教程使用的 langchain 版本为 1.2x；各版本可能会有差异
```
## 3.2 LangChain 是什么？
LangChain 是一个用于开发大模型应用的框架。它不是大模型本身，而是帮助我们把大模型、提示词、工具、数据、工作流组织起来。

如果不用langchain，你需要自己处理：
- API 调用

- 多轮对话历史

- Prompt 拼接

- 输出格式解析

- 工具调用

- 流式输出

- 错误重试

- Agent 流程控制

LangChain 把这些能力封装成统一组件，让我们可以更快搭建 AI 应用。

注意：在学习langChain中，非常有必要和上一篇连起来看，在使用langChain的功能时，一定要理解使用langChain实现的功能，对应的是上节课中，使用纯py+sdk是如何实现的。这样你才能理解langChain到底封装了什么。
## 3.3 第一次调用大模型
```python
from dotenv import load_dotenv
import os

from langchain_openai import ChatOpenAI

load_dotenv(override=True)

llm = ChatOpenAI(
    model="gpt-5.5",
    temperature=0,
    # 在根目录建一个.env，把base_url和apikay放到环境变量中
    base_url=os.getenv("OPENAI_BASE_URL"),
    api_key=os.getenv("OPENAI_API_KEY")
  )

# invoke()：执行一次调用
response = llm.invoke("请用一句话介绍 LangChain")
print(response)
```
我们通过langchain，仅仅只需要几行代码，即可调用大模型。大大节约了我们的时间。使用langchain的话，就不需要在用模型官方提供的SDK了。
## 3.4 Message 消息机制
真实聊天不是简单的一句话，而是一组消息。

常见消息类型：
- SystemMessage：系统设定，就是我们常说的系统提示词

- HumanMessage：用户输入

- AIMessage：模型回复

```java
from langchain.messages import SystemMessage, HumanMessagemessages = [
    SystemMessage("你是一名耐心的 Python 老师，回答要适合新手。"),
    HumanMessage("什么是函数？")
]

response = llm.invoke(messages)

ai_message = response.content

print(response.content)
```
这段代码的含义就是，有一个messages 的消息列表，消息列表中有系统提示词和用户输入的提问。

模拟多轮对话示例：
```go
from langchain.messages import AIMessage

messages.append(AIMessage(ai_message))
messages.append(HumanMessage("能不能再举一个例子？"))

response = llm.invoke(messages)
print(response.content)
```
关键点：多轮对话需要把历史消息一起传给模型。
## 3.5 Prompt 模板
### PromptTemplate
```python
from langchain_core.prompts import PromptTemplate

prompt = PromptTemplate.from_template(
    "请用新手能听懂的方式解释：{topic}"
)

formatted_prompt = prompt.invoke({"topic": "LangChain"})
print(formatted_prompt.text)

response = llm.invoke(formatted_prompt.text)
print(response.content)
```
### ChatPromptTemplate
聊天模型更推荐使用 ChatPromptTemplate。
```cpp
from langchain_core.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_messages([
    ("system", "你是一名 AI 应用开发老师，回答要清晰、简洁。"),
    ("human", "请解释这个概念：{topic}")
])

messages = prompt.invoke({"topic": "Prompt 模板"})
response = llm.invoke(messages)

print(response.content)
```
注意看，我们这里的from_messages，使用的是system和human会被langchain转化为 SystemMessage, HumanMessage。然后将ai返回的内容，再塞回去：(“ai”, “xxx”) 这样的话，就可以进行下一轮对话了。
## 3.6 Runnable 与链式组合
LangChain 里很多组件都可以被“执行”，例如：
- Prompt

- Model

- Output Parser

- Tool

- Agent

这些可执行对象被称为 Runnable。

LangChain 支持用 | 把多个步骤串起来：
```makefile
from langchain_core.output_parsers import StrOutputParser

prompt = ChatPromptTemplate.from_messages([
    ("system", "你是一名新手教程作者。"),
    ("human", "请用三句话解释：{topic}")
])

parser = StrOutputParser()

chain = prompt | llm | parser

result = chain.invoke({"topic": "LangChain 的 Runnable"})
print(result)
```
这段代码的执行流程是：
```rust
输入变量 -> Prompt 生成消息 -> 模型生成回复 -> 解析成字符串

我们可以理解为语法糖
```
## 3.7 结构化输出
很多时候，我们不希望模型只返回一段自然语言，而是希望它返回程序能处理的数据。

例如从一句话中提取姓名、年龄和城市。
```scss
from pydantic import BaseModel, Field

class Person(BaseModel):
    name: str = Field(description="姓名")
    age: int = Field(description="年龄")
    city: str = Field(description="所在城市")

structured_model = llm.with_structured_output(
    Person,
    method="function_calling"
)

result = structured_model.invoke(
    "张三今年 18 岁，住在北京。"
)

print(result)
print(result.name)
print(result.age)
print(result.city)
```
## 3.8 流式输出
就是像打字机一样，一个一个输出
```lua
for chunk in llm.stream("请用 100 字介绍 LangChain"):
    print(chunk.content, end="", flush=True)
```
这里的 stream 就是流式输出的方法。对比上面的 invoke 的话，invoke就是一次性执行完，就是等接口返回全部结果，一次性输出。
## 3.9 工具调用 与 Agent入门
上面我们初步使用langchain，简单实验了langchain常用的方法，但是也都是只能回答问题。接下来，我们将使用langchain来创建agnet，agent可以根据任务，来决定是否需要调用工具。

先定义一个工具：
```python
from langchain.tools import tool

@tooldef get_weather(city: str) -> str:
    """查询城市天气的本地示例工具。"""
    weather_map = {
        "北京": "晴，25 摄氏度",
        "上海": "多云，27 摄氏度",
        "广州": "小雨，29 摄氏度",
    }
    return weather_map.get(city, "暂未查询到该城市天气")
```
在langchain中，使用：[@tool](https://linux.do/u/tool) 就是定义一个工具的方法，注意，一定要在函数内部写注释，不然模型不能很准确的知道这个工具函数的具体作用。

创建 Agent：
```python
from langchain.agents import create_agent

agent = create_agent(
    model=llm,
    tools=[get_weather],
    system_prompt="你是一个会使用工具解决问题的助手。"
)

result = agent.invoke({
    "messages": [
        {"role": "user", "content": "上海的天气如何？"}
    ]
})

print(result["messages"][-1].content)
```
上面这个 agent 的流程：
```rust
用户提出问题 -> 模型判断是否需要工具 -> 调用工具 -> 读取工具结果 -> 生成最终回答
```
我们只需要将定义好的工具名，放入到tools参数中，agent就会自动决定当前用户提问是否需要调用工具。

如果你将上面这个agent最终的输出完整打印：
```css
[HumanMessage(content='上海的天气如何？'), AIMessage(content='', , tool_calls=[{'name': 'get_weather', 'args': {'city': '上海'}}), ToolMessage(content='多云，27 摄氏度', name='get_weather'), AIMessage(content='上海现在多云，气温约 27°C。')]
```
上面这个是我删除了多余的打印，只保留了比较有用的信息：
```makefile
1: HumanMessage: 用户输入2: AIMessage: ai回答3: tool_calls: ai抛出要调用工具请求4: ToolMessage: 工具调用结果5: AIMessage: 调用完工具后，AI的输出
```
从打印出的日志，对比我们上节课讲解的agent的流程。现在就完全对得上了，只是langchain将这内部复杂的逻辑封装好了，不用我们管内部到底是如何实现的。不过，只要你上节课手敲了agent，到这里就可以一眼就理解。
---
# Q&A
## Q1： 什么时候用字符串，什么时候用 messages？
```bash
# 简单任务可以直接传字符串：
model.invoke("解释一下 Python 变量")

# 需要角色设定、多轮历史时，使用 messages：
model.invoke([
    SystemMessage("你是一名 Python 老师"),
    HumanMessage("什么是变量？")
])
```
### Q2： 什么时候需要 Agent？
```plaintext
如果只是问答、总结、改写，不一定需要 Agent。

如果任务需要模型自己判断是否调用工具，例如计算、搜索、查数据库、调用 API，就可以考虑 Agent。
```
### Q3： LangChain 和 LangGraph 是什么关系？
```css
LangChain 负责提供大模型应用开发的常用组件
LangGraph 负责管理更复杂的 Agent / 工作流执行过程。

在 LangChain 1.0 之后，很多 Agent 能力底层其实是基于 LangGraph 构建的。

例如:
你用 create_agent() 创建 Agent 时
表面上是在使用 LangChain 的高级接口；
但底层执行流程、状态流转、工具调用等能力，很多是由 LangGraph 提供支撑的。

在 Agent 和复杂工作流这部分，可以理解为 LangChain 是对 LangGraph 的高层封装。
```
### Q4：是否有必要学langchain?
```plaintext
分场景：
1：如果你只是做一个很简单的大模型调用：没必要

2：如果你要做的是一个真正的 AI 应用，LangChain 就很有价值了
对新手来说，学习 LangChain 的好处是：

能理解大模型应用的标准开发流程
能快速接触 Prompt、Message、Tool、Agent、RAG 等核心概念
能少写很多重复代码
能更容易从简单 Demo 过渡到真实项目

总结：
如果你只是玩 API，可以不学 LangChain；
如果你想系统开发 AI 应用，LangChain 很值得学。
```
### Q5：那我目前阶段是否只要学你上面讲到的知识点？我还需要课后扩展吗？
```plaintext
入门阶段，先学本教程这些知识点就够了。
```
---
下一篇导航

> 【写在前面】 1：本教程为本人学习agent的总结文档，均为手动筛选个人觉得重点的内容，也当做是一个笔记分享给想学习agent的佬友们，如有错误，请指正。 2：本人为前端转agent中，如有岗位可私，base：杭州。 上一篇导航 上一节我们已经初步认识了langchain的基本用法，但是我们学习的都是一个一个知识点片段，如果不加以练习的话，会很容易忘记，所以这节课，我们一起来练习巩固一下…

[3.zip](https://linux.do/uploads/short-url/YaaxFxyhK1LsNbfjwLH1YblEK5.zip) (7.9 KB)
