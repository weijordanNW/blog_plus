---
title: Agent基础入门实战教程(2)：从 0 到 1 手写一个最小 Agent
date: '2026-05-25'
icon: bokeyuan
star: false
isOriginal: false
category:
  - Agent
tag:
  - feishu
---
## 写在前面】
1：本教程为本人学习agent的总结文档，均为手动筛选个人觉得重点的内容，也当做是一个笔记分享给想学习agent的佬友们，如有错误，请指正。

2：本人为前端转agent中，如有岗位可私，base：杭州。

上一篇导航

> 【写在前面】 1：本教程为本人学习agent的总结文档，均为手动筛选个人觉得重点的内容，也当做是一个笔记分享给想学习agent的佬友们，如有错误，请指正。 2：本人为前端转agent中，如有岗位可私，base：杭州。 1.1 Agent的定义   AI Agent(智能体) 是一个以大语言模型为核心决策模块，在给定目标、工具和约束条件下，能够读取上下文、规划下一步动作、调用外部工具，并根据执…
---
## 2.1 环境准备

创建虚拟环境:
```plaintext
python -m venv .venv
```
激活虚拟环境:
```bash
.venv/Scripts/activate
激活成功后，终端前面一般会出现：(.venv)
```
### 安装依赖
```plaintext
pip install openai python-dotenv requests notebook jupyterlab ipykernel
```

偷懒做法：一键安装环境提示词
```markdown
请帮我在当前项目目录中搭建 Python + Jupyter Notebook 的学习环境，要求如下：

1. 检查当前电脑是否安装 Python，并确认版本是否为 3.10 或以上。
2. 在当前项目根目录创建 Python 虚拟环境，目录名为 .venv。
3. 激活 .venv 虚拟环境。
4. 在虚拟环境中安装以下依赖：
   - openai
   - python-dotenv
   - requests
   - notebook
   - jupyterlab
   - ipykernel
5. 将当前 .venv 注册为 Jupyter Notebook 内核，内核显示名称为 ".venv"。
6. 在项目根目录创建 .env.example 文件，内容如下：

OPENAI_API_KEY=你的_api_key
OPENAI_BASE_URL=BASE_URL
MODEL_NAME=模型名称

7. 不要创建真实 .env 文件，也不要替我填写 API Key。
8. 安装完成后，请告诉我：
   - Python 版本
   - pip 版本
   - Jupyter 是否安装成功
   - Notebook 内核是否注册成功
   - 下一步我应该如何打开 .ipynb 文件
```
## 2.2 第一次调用大模型 API
```python
# 导入 os 模块，用于读取环境变量import os

# 导入 dotenv，用于从 .env 文件中加载配置from dotenv import load_dotenv

# 导入 OpenAI 客户端from openai import OpenAI


# 读取项目根目录下的 .env 文件
load_dotenv(override=True)


# 创建大模型客户端# api_key：你的 API Key，用于身份认证# base_url：模型服务地址
client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url=os.getenv("OPENAI_BASE_URL")
)


# 调用大模型的 Chat Completions 接口
response = client.chat.completions.create(
    # 指定要调用的模型名称# .env 配置的模型名称
    model=os.getenv("MODEL_NAME"),

    # messages 是传给大模型的对话上下文
    messages=[
        # system 用来设定模型的角色和行为
        {"role": "system", "content": "你是一个有用的 AI 助手。"},

        # user 表示用户输入的问题
        {"role": "user", "content": "请用一句话解释什么是 Agent。"}
    ]
)


# 取出模型回复的正文内容
answer = response.choices[0].message.content

# 打印模型回复print(answer)
```
到这里，我们完成了最普通的一次 LLM 调用。注意，此时它还不是 Agent，因为它只是根据输入生成回答，并没有调用工具，也没有进入多轮执行循环。他只能按照模型训练的数据进行回答，不具备外部感知能力。如：查询今天的天气。LLM就做不到，我们必须写一个工具，让LLM具备外部感知能力。
## 2.3 给大模型准备第一个工具
**对开发者来说，工具本质上就是我们自己写的普通函数。**
```python
# 定义一个天气获取工具# 这里先不调用真实天气 API，只返回固定的北京天气def get_weather():
    """返回北京天气信息。"""return "北京天气：晴，气温 25℃，适合出门。"# 手动调用工具，查看返回结果
weather = get_weather()
print(weather)
```
## 2.4 把工具交给大模型使用
才我们只是手动调用了 `get_weather()`。接下来要让大模型知道：它可以使用这个工具。
需要注意：**大模型不会真的执行 Python 函数**。它只会返回一个“我想调用哪个工具”的请求，真正执行工具的仍然是我们的代码。
```plaintext
# 1. 定义工具说明书
# 这份说明书是给大模型看的，不是给 Python 执行的
tools = [
    {
        "type": "function",
        "function": {
            # 工具名称，需要和后面的工具注册表保持一致
            "name": "get_weather",

            # 工具描述：告诉大模型这个工具什么时候该用
            "description": "获取北京当前天气。当用户询问北京天气时使用这个工具。",

            # 工具参数：这个工具暂时不需要参数，所以 properties 为空
            "parameters": {
                "type": "object",
                "properties": {},
                "required": []
            }
        }
    }
]

# 2. 建立工具注册表
# 注册表的作用：把大模型返回的工具名称，映射到真正的 Python 函数
tool_registry = {
    "get_weather": get_weather
}

# 3. 准备用户问题
messages = [
    {"role": "system", "content": "你是一个有用的 AI 助手。"},
    {"role": "user", "content": "北京今天天气怎么样？"}
]

# 4. 第一次调用大模型
# 这一次调用会把 tools 一起传给大模型，让它自己判断是否需要调用工具
response = client.chat.completions.create(
    model=os.getenv("MODEL_NAME"),
    messages=messages,
    tools=tools,
    tool_choice="auto"
)

# 5. 取出大模型的回复
assistant_message = response.choices[0].message

# 6. 判断大模型是否想调用工具
if assistant_message.tool_calls:
    print("大模型决定调用工具")

    # 先把大模型的工具调用请求加入消息历史
    messages.append(assistant_message)

    # 遍历大模型请求调用的工具
    for tool_call in assistant_message.tool_calls:
        tool_name = tool_call.function.name
        print("工具名称：", tool_name)

        # 从注册表中找到真正的 Python 函数
        tool_func = tool_registry[tool_name]

        # 执行工具，拿到结果
        tool_result = tool_func()
        print("工具返回：", tool_result)

        # 把工具结果加入消息历史，交还给大模型
        messages.append({
            "role": "tool",
            "tool_call_id": tool_call.id,
            "content": tool_result
        })

    # 7. 第二次调用大模型
    # 这一次大模型会根据工具结果，组织成自然语言回答
    final_response = client.chat.completions.create(
        model=os.getenv("MODEL_NAME"),
        messages=messages
    )

    print("最终回答：")
    print(final_response.choices[0].message.content)

else:
    # 如果大模型认为不需要工具，就直接输出它的回答
    print("大模型没有调用工具")
    print(assistant_message.content)
```
核心逻辑是这 4 步：
```scss
1. 写一个 Python 工具函数 get_weather()
2. 写 tools 工具说明书，让大模型知道有这个工具
3. 大模型返回 tool_calls，表示“我想调用 get_weather”
4. Python 执行 get_weather，再把结果交还给大模型生成最终回答

用户问题
  ↓
LLM 读取 tools 说明书
  ↓
LLM 生成 tool_calls
  ↓
Python 执行真实函数
  ↓
工具结果写回 messages
  ↓
LLM 生成最终回答
```
注意：大模型不会直接执行 get_weather，它只是提出调用请求；真正执行函数的是我们的 Python 代码。

它解决了一个关键问题：让大模型从“只能回答”变成“可以借助外部工具获得信息”
## 2.5 Agent Loop
到这里，我们已经让大模型成功使用了 `get_weather` 工具。它能够根据用户问题判断是否需要调用工具，并把工具返回结果整理成自然语言回答。但严格来说，这还不是一个完整的 Agent。
而 Agent 的关键在于：它不是只判断一次，而是可以在拿到工具结果后继续判断下一步要做什么。
在我们写的这个示例中，只是在现有流程外面套一个 for 循环
## 2.6 Q&A
Q1：为什么我写了 `get_weather()`，大模型就能用它？

不是大模型“自动发现”了这个函数，而是我们通过 `tools` 把工具说明传给了大模型。
`get_weather()` 是真正执行的 Python 函数，`tools` 是给大模型看的工具说明书。大模型根据工具说明判断是否需要调用工具。

Q2：大模型真的执行了 `get_weather()` 吗？

没有。

大模型只返回了一个工具调用请求，比如：
```plaintext
我要调用 get_weather
```
Q3：为什么工具执行完后，还要再调用一次大模型？
第二次调用大模型，是让它基于工具结果，整理成更自然的回答。
完整流程是：
`用户问题 -> LLM 决定调用工具 -> Python 执行工具 -> LLM 整理最终回答`

Q4：如何知道模型会返回什么？

可以将所有的字段打印出来，然后查看相关的字段，你就能知道是如何请求大模型，如果封装请求参数等。

Q5： 工具为什么现在固定返回北京天气，而不是调用真实天气 API？

等流程理解清楚后，再把 get_weather() 替换成真实天气 API，就只是工具内部实现的变化。

固定返回数据可以减少干扰，让我们先看清楚：
```plaintext
LLM 如何决定调用工具
Python 如何执行工具
工具结果如何回到 LLM
LLM 如何生成最终回答
```
在真实开发中，我们会根据业务场景封装各种类型的工具，让大模型能够和外部世界交互。比如：
- 天气查询工具

- 搜索工具

- 数据库查询工具

- 文件读写工具

- 订单查询工具

- 代码执行工具

- 企业内部 API 工具

```plaintext
工具调用流程不变，变化的是工具内部具体怎么实现。
```

