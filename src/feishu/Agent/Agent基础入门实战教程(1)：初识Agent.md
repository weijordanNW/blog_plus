---
title: Agent基础入门实战教程(1)：初识Agent
date: '2026-05-25'
icon: bokeyuan
star: false
isOriginal: false
category:
  - Agent
tag:
  - feishu
---
# [Agent基础入门实战教程(1)：初识Agent](https://linux.do/t/topic/2146977)
[开发调优](https://linux.do/c/develop/4)[开发调优, Lv1](https://linux.do/c/develop/develop-lv1/20)
- [人工智能](https://linux.do/tag/444-tag/444)

- [软件开发](https://linux.do/tag/1451-tag/1451)

- [Agent](https://linux.do/tag/1836-tag/1836)


## 由 HPZS 于 5月 10 日 发布
[HPZS](https://linux.do/u/hpzs)


## 【写在前面】
1：本教程为本人学习agent的总结文档，均为手动筛选个人觉得重点的内容，也当做是一个笔记分享给想学习agent的佬友们，如有错误，请指正。

2：本人为前端转agent中，如有岗位可私，base：杭州。
---
## 1.1 Agent的定义
  AI Agent(智能体) 是一个以大语言模型为核心决策模块，在给定目标、工具和约束条件下，能够读取上下文、规划下一步动作、调用外部工具，并根据执行结果持续调整的任务执行系统。
## 1.2 Agent的能力

  从表格可以看出 Agent 更强调围绕目标进行多步执行，并能根据中间结果调整后续动作。他的价值在于：处理那些需要多步推理、工具协作、动态决策的复杂任务。但并不意味着所有场景下Agent 都是最优解，如你只想翻译文字，或者生成一些简单的内容，直接只用普通的LLM调用是更优的。
## 1.3 Agent的核心架构-TAO循环
  （为了方便理解，我们可以把 Agent 的核心运行过程概括为 TAO 循环：Think、Act、Observe。）

  Agent 内部运转的核心为 - TAO循环(Think:思考 → Act:行动 → Observe:观察)

  **Think（思考）**：LLM 作为"大脑"，分析当前状态和用户目标，决定下一步行动。这一步可能包括：判断任务是否完成、确定需要调用的工具、规划执行顺序、评估风险等。

  **Act（行动）**：根据 Think 阶段的决策，调用相应的工具或生成回答。如果决定调用工具，就执行工具调用；如果判断任务已完成，就生成最终回答。

  **Observe（观察）**：收集 Act 阶段的结果——如果是工具调用，收集工具返回的数据；如果是生成回答，观察用户的反馈。将观察结果纳入上下文，为下一轮 Think 提供输入。

  这三个环节形成一个闭环，循环往复直到任务完成。无论一个agent有多复杂，这个就是一个agent的内部核心运转流程。举例一个我们经常使用到的场景：使用codex 查询一个知识点：LangChain 最新版本的 Agent 怎么使用？?
1. 用户输入问题

1. LLM思考这个问题是否需要外部工具

1. 需要调用工具查询最新文档

1. 查询到的文档返回给LLM：本质是将用户输入+查询的结果 统一成一个上下文，在塞给LLM

1. LLM思考：不需要再调用工具了，可以直接输出

1. 输出结果

  TAO 循环的精妙之处在于它的**自终止性**——Agent 在每一轮的 Think 阶段都会判断"任务是否已经完成"，如果完成就输出最终答案并退出循环，如果未完成就继续下一轮。这意味着 Agent 可以根据任务复杂度自动调整执行步数：简单任务一轮就结束，复杂任务可能需要五轮、十轮甚至更多。
## 1.4 新手常见问题 Q&A
Q1：Agent 是不是就是 ChatGPT？

不是。

ChatGPT 更像是一个可以对话的大语言模型应用，而 Agent 是一种围绕目标执行任务的系统设计方式。Agent 通常会在 LLM 的基础上接入工具、状态管理和执行循环，让它可以根据任务进展决定下一步做什么。

简单理解：
- 普通聊天：你问一句，它答一句

- Agent：你给一个目标，它拆步骤、用工具、看结果，再继续执行

Q2：Agent 是不是一定要调用工具？

不一定。

如果任务很简单，Agent 可能不需要调用工具，直接回答就可以。但工具是 Agent 能力扩展的关键。没有工具的 Agent，能力基本只来自模型本身；接入工具后，它才能搜索资料、查询数据库、执行代码、读取文件、调用 API。

Q3：Agent 和工作流 Workflow 有什么区别？
- Workflow：开发者提前规定好每一步

- Agent：开发者提供目标、工具和约束，由模型动态决定下一步

Q4：Agent 是不是一定比普通 LLM 更强？

不是。

Agent 的优势是能处理复杂任务，但它也会带来额外成本，比如执行时间更长、调用费用更高、结果不稳定性增加、调试难度变大。

如果一个任务一次 LLM 调用就能完成，就没必要强行做成 Agent。

Q5：学习 Agent 需要先学很多框架吗？

不需要。

刚开始学习 Agent，最重要的是先理解核心思想：

目标 → 思考 → 行动 → 观察 → 再思考 → 最终回答

Q6：在企业项目中，Agent 和后端服务有什么区别？

简单理解：
- 后端服务：负责确定性的业务逻辑

- Agent：负责不确定性较高的智能决策和任务执行

在真实企业项目中，Agent 往往是接入后端系统的一部分，而不是单独替代后端。后端提供接口、权限、数据和业务规则，Agent 在这些约束下调用工具完成任务。

企业里的合理架构通常不是“用 Agent 替代后端”，而是：

前端 → 后端服务 → Agent → 工具/API/数据库
```plaintext
如：用户说：帮我查一下这个客户最近三个月的订单异常情况

后端负责：
1. 校验用户是否有权限查看该客户数据
2. 提供订单查询接口
3. 提供异常订单规则
4. 记录操作日志

Agent 负责：
1. 理解用户想查什么
2. 决定需要调用哪些接口
3. 分析接口返回的数据
4. 总结异常原因并生成自然语言结果
```
---
  到这里，我们已经基本理解了什么是 Agent：它是一个围绕目标进行思考、行动、观察，并不断迭代的任务执行系统。

  下一章，我们将从代码角度出发，手写一个最小可运行的 Agent，看看这些概念在真实代码中到底是如何落地的。

> ## 【写在前面】  
> 1：本教程为本人学习agent的总结文档，均为手动筛选个人觉得重点的内容，也当做是一个笔记分享给想学习agent的佬友们，如有错误，请指正。  
> 2：本人为前端转agent中，如有岗位可私，base：杭州。  
> 上一篇导航  
> 【写在前面】 1：本教程为本人学习agent的总结文档，均为手动筛选个人觉得重点的内容，也当做是一个笔记分享给想学习agent的佬友们，如有错误，请指正。 2：本人为前端转agent中，如有岗位可私，base：杭州。 1.1 Agent的定义   AI Agent(智能体) 是一个以大语言模型为核心决策模块，在给定目标、工具和约束条件下，能够读取上下文、规划下一步动作、调用外部工具，并根据执…  
> ---  
> ## 2.1 环境准备  
> 创建虚拟环境:  
> ```plaintext  
> python -m venv .venv  
> ```  
> 激活虚拟环境:  
> ```bash  
> .venv/Scripts/activate  
> 激活成功后，终端前面一般会出现：(.venv)  
> ```  
> ### 安装依赖  
> ```plaintext  
> pip install openai python-dotenv requests notebook jupyterlab ipykernel  
> ```  
> 偷懒做法：一键安装环境提示词  
> ```markdown  
> 请帮我在当前项目目录中搭建 Python + Jupyter Notebook 的学习环境，要求如下：  
>   
> 1. 检查当前电脑是否安装 Python，并确认版本是否为 3.10 或以上。  
> 2. 在当前项目根目录创建 Python 虚拟环境，目录名为 .venv。  
> 3. 激活 .venv 虚拟环境。  
> 4. 在虚拟环境中安装以下依赖：  
>    - openai  
>    - python-dotenv  
>    - requests  
>    - notebook  
>    - jupyterlab  
>    - ipykernel  
> 5. 将当前 .venv 注册为 Jupyter Notebook 内核，内核显示名称为 ".venv"。  
> 6. 在项目根目录创建 .env.example 文件，内容如下：  
>   
> OPENAI_API_KEY=你的_api_key  
> OPENAI_BASE_URL=BASE_URL  
> MODEL_NAME=模型名称  
>   
> 7. 不要创建真实 .env 文件，也不要替我填写 API Key。  
> 8. 安装完成后，请告诉我：  
>    - Python 版本  
>    - pip 版本  
>    - Jupyter 是否安装成功  
>    - Notebook 内核是否注册成功  
>    - 下一步我应该如何打开 .ipynb 文件  
> ```  
> ## 2.2 第一次调用大模型 API  
> ```python  
> # 导入 os 模块，用于读取环境变量import os  
>   
> # 导入 dotenv，用于从 .env 文件中加载配置from dotenv import load_dotenv  
>   
> # 导入 OpenAI 客户端from openai import OpenAI  
>   
>   
> # 读取项目根目录下的 .env 文件  
> load_dotenv(override=True)  
>   
>   
> # 创建大模型客户端# api_key：你的 API Key，用于身份认证# base_url：模型服务地址  
> client = OpenAI(  
>     api_key=os.getenv("OPENAI_API_KEY"),  
>     base_url=os.getenv("OPENAI_BASE_URL")  
> )  
>   
>   
> # 调用大模型的 Chat Completions 接口  
> response = client.chat.completions.create(  
>     # 指定要调用的模型名称# .env 配置的模型名称  
>     model=os.getenv("MODEL_NAME"),  
>   
>     # messages 是传给大模型的对话上下文  
>     messages=[  
>         # system 用来设定模型的角色和行为  
>         {"role": "system", "content": "你是一个有用的 AI 助手。"},  
>   
>         # user 表示用户输入的问题  
>         {"role": "user", "content": "请用一句话解释什么是 Agent。"}  
>     ]  
> )  
>   
>   
> # 取出模型回复的正文内容  
> answer = response.choices[0].message.content  
>   
> # 打印模型回复print(answer)  
> ```  
> 到这里，我们完成了最普通的一次 LLM 调用。注意，此时它还不是 Agent，因为它只是根据输入生成回答，并没有调用工具，也没有进入多轮执行循环。他只能按照模型训练的数据进行回答，不具备外部感知能力。如：查询今天的天气。LLM就做不到，我们必须写一个工具，让LLM具备外部感知能力。  
> ## 2.3 给大模型准备第一个工具  
> **对开发者来说，工具本质上就是我们自己写的普通函数。**  
> ```python  
> # 定义一个天气获取工具# 这里先不调用真实天气 API，只返回固定的北京天气def get_weather():  
>     """返回北京天气信息。"""return "北京天气：晴，气温 25℃，适合出门。"# 手动调用工具，查看返回结果  
> weather = get_weather()  
> print(weather)  
> ```  
> ## 2.4 把工具交给大模型使用  
> 才我们只是手动调用了 `get_weather()`。接下来要让大模型知道：它可以使用这个工具。  
> 需要注意：**大模型不会真的执行 Python 函数**。它只会返回一个“我想调用哪个工具”的请求，真正执行工具的仍然是我们的代码。  
> ```plaintext  
> # 1. 定义工具说明书  
> # 这份说明书是给大模型看的，不是给 Python 执行的  
> tools = [  
>     {  
>         "type": "function",  
>         "function": {  
>             # 工具名称，需要和后面的工具注册表保持一致  
>             "name": "get_weather",  
>   
>             # 工具描述：告诉大模型这个工具什么时候该用  
>             "description": "获取北京当前天气。当用户询问北京天气时使用这个工具。",  
>   
>             # 工具参数：这个工具暂时不需要参数，所以 properties 为空  
>             "parameters": {  
>                 "type": "object",  
>                 "properties": {},  
>                 "required": []  
>             }  
>         }  
>     }  
> ]  
>   
> # 2. 建立工具注册表  
> # 注册表的作用：把大模型返回的工具名称，映射到真正的 Python 函数  
> tool_registry = {  
>     "get_weather": get_weather  
> }  
>   
> # 3. 准备用户问题  
> messages = [  
>     {"role": "system", "content": "你是一个有用的 AI 助手。"},  
>     {"role": "user", "content": "北京今天天气怎么样？"}  
> ]  
>   
> # 4. 第一次调用大模型  
> # 这一次调用会把 tools 一起传给大模型，让它自己判断是否需要调用工具  
> response = client.chat.completions.create(  
>     model=os.getenv("MODEL_NAME"),  
>     messages=messages,  
>     tools=tools,  
>     tool_choice="auto"  
> )  
>   
> # 5. 取出大模型的回复  
> assistant_message = response.choices[0].message  
>   
> # 6. 判断大模型是否想调用工具  
> if assistant_message.tool_calls:  
>     print("大模型决定调用工具")  
>   
>     # 先把大模型的工具调用请求加入消息历史  
>     messages.append(assistant_message)  
>   
>     # 遍历大模型请求调用的工具  
>     for tool_call in assistant_message.tool_calls:  
>         tool_name = tool_call.function.name  
>         print("工具名称：", tool_name)  
>   
>         # 从注册表中找到真正的 Python 函数  
>         tool_func = tool_registry[tool_name]  
>   
>         # 执行工具，拿到结果  
>         tool_result = tool_func()  
>         print("工具返回：", tool_result)  
>   
>         # 把工具结果加入消息历史，交还给大模型  
>         messages.append({  
>             "role": "tool",  
>             "tool_call_id": tool_call.id,  
>             "content": tool_result  
>         })  
>   
>     # 7. 第二次调用大模型  
>     # 这一次大模型会根据工具结果，组织成自然语言回答  
>     final_response = client.chat.completions.create(  
>         model=os.getenv("MODEL_NAME"),  
>         messages=messages  
>     )  
>   
>     print("最终回答：")  
>     print(final_response.choices[0].message.content)  
>   
> else:  
>     # 如果大模型认为不需要工具，就直接输出它的回答  
>     print("大模型没有调用工具")  
>     print(assistant_message.content)  
> ```  
> 核心逻辑是这 4 步：  
> ```scss  
> 1. 写一个 Python 工具函数 get_weather()  
> 2. 写 tools 工具说明书，让大模型知道有这个工具  
> 3. 大模型返回 tool_calls，表示“我想调用 get_weather”  
> 4. Python 执行 get_weather，再把结果交还给大模型生成最终回答  
>   
> 用户问题  
>   ↓  
> LLM 读取 tools 说明书  
>   ↓  
> LLM 生成 tool_calls  
>   ↓  
> Python 执行真实函数  
>   ↓  
> 工具结果写回 messages  
>   ↓  
> LLM 生成最终回答  
> ```  
> 注意：大模型不会直接执行 get_weather，它只是提出调用请求；真正执行函数的是我们的 Python 代码。  
> 它解决了一个关键问题：让大模型从“只能回答”变成“可以借助外部工具获得信息”  
> ## 2.5 Agent Loop  
> 到这里，我们已经让大模型成功使用了 `get_weather` 工具。它能够根据用户问题判断是否需要调用工具，并把工具返回结果整理成自然语言回答。但严格来说，这还不是一个完整的 Agent。  
> 而 Agent 的关键在于：它不是只判断一次，而是可以在拿到工具结果后继续判断下一步要做什么。  
> 在我们写的这个示例中，只是在现有流程外面套一个 for 循环  
> ## 2.6 Q&A  
> Q1：为什么我写了 `get_weather()`，大模型就能用它？  
> 不是大模型“自动发现”了这个函数，而是我们通过 `tools` 把工具说明传给了大模型。  
> `get_weather()` 是真正执行的 Python 函数，`tools` 是给大模型看的工具说明书。大模型根据工具说明判断是否需要调用工具。  
> Q2：大模型真的执行了 `get_weather()` 吗？  
> 没有。  
> 大模型只返回了一个工具调用请求，比如：  
> ```plaintext  
> 我要调用 get_weather  
> ```  
> Q3：为什么工具执行完后，还要再调用一次大模型？  
> 第二次调用大模型，是让它基于工具结果，整理成更自然的回答。  
> 完整流程是：  
> `用户问题 -> LLM 决定调用工具 -> Python 执行工具 -> LLM 整理最终回答`  
> Q4：如何知道模型会返回什么？  
> 可以将所有的字段打印出来，然后查看相关的字段，你就能知道是如何请求大模型，如果封装请求参数等。  
> Q5： 工具为什么现在固定返回北京天气，而不是调用真实天气 API？  
> 等流程理解清楚后，再把 get_weather() 替换成真实天气 API，就只是工具内部实现的变化。  
> 固定返回数据可以减少干扰，让我们先看清楚：  
> ```plaintext  
> LLM 如何决定调用工具  
> Python 如何执行工具  
> 工具结果如何回到 LLM  
> LLM 如何生成最终回答  
> ```  
> 在真实开发中，我们会根据业务场景封装各种类型的工具，让大模型能够和外部世界交互。比如：  
> - 天气查询工具  
>   
> - 搜索工具  
>   
> - 数据库查询工具  
>   
> - 文件读写工具  
>   
> - 订单查询工具  
>   
> - 代码执行工具  
>   
> - 企业内部 API 工具  
>   
> ```plaintext  
> 工具调用流程不变，变化的是工具内部具体怎么实现。  
> ```  
> ---  
> 下一篇导航：  
> ## 【写在前面】  
> 1：本教程为本人学习agent的总结文档，均为手动筛选个人觉得重点的内容，也当做是一个笔记分享给想学习agent的佬友们，如有错误，请指正。  
> 2：本人为前端转agent中，如有岗位可私，base：杭州。  
> 上一篇导航  
> 【写在前面】 1：本教程为本人学习agent的总结文档，均为手动筛选个人觉得重点的内容，也当做是一个笔记分享给想学习agent的佬友们，如有错误，请指正。 2：本人为前端转agent中，如有岗位可私，base：杭州。 上一篇导航 2.1 环境准备 环境 说明 Python 推荐 Python 3.10 及以上版本 VS Code 用于打开项目和运行 Notebook …  
> ## 3.1 环境准备  
> 安装命令  
> ```plaintext  
> pip install -U langchain langchain-core python-dotenv langchain-openai  
> ```  
> 注意：  
> ```plaintext  
> 本教程使用的 langchain 版本为 1.2x；各版本可能会有差异  
> ```  
> ## 3.2 LangChain 是什么？  
> LangChain 是一个用于开发大模型应用的框架。它不是大模型本身，而是帮助我们把大模型、提示词、工具、数据、工作流组织起来。  
> 如果不用langchain，你需要自己处理：  
> - API 调用  
>   
> - 多轮对话历史  
>   
> - Prompt 拼接  
>   
> - 输出格式解析  
>   
> - 工具调用  
>   
> - 流式输出  
>   
> - 错误重试  
>   
> - Agent 流程控制  
>   
> LangChain 把这些能力封装成统一组件，让我们可以更快搭建 AI 应用。  
> 注意：在学习langChain中，非常有必要和上一篇连起来看，在使用langChain的功能时，一定要理解使用langChain实现的功能，对应的是上节课中，使用纯py+sdk是如何实现的。这样你才能理解langChain到底封装了什么。  
> ## 3.3 第一次调用大模型  
> ```python  
> from dotenv import load_dotenv  
> import os  
>   
> from langchain_openai import ChatOpenAI  
>   
> load_dotenv(override=True)  
>   
> llm = ChatOpenAI(  
>     model="gpt-5.5",  
>     temperature=0,  
>     # 在根目录建一个.env，把base_url和apikay放到环境变量中  
>     base_url=os.getenv("OPENAI_BASE_URL"),  
>     api_key=os.getenv("OPENAI_API_KEY")  
>   )  
>   
> # invoke()：执行一次调用  
> response = llm.invoke("请用一句话介绍 LangChain")  
> print(response)  
> ```  
> 我们通过langchain，仅仅只需要几行代码，即可调用大模型。大大节约了我们的时间。使用langchain的话，就不需要在用模型官方提供的SDK了。  
> ## 3.4 Message 消息机制  
> 真实聊天不是简单的一句话，而是一组消息。  
> 常见消息类型：  
> - SystemMessage：系统设定，就是我们常说的系统提示词  
>   
> - HumanMessage：用户输入  
>   
> - AIMessage：模型回复  
>   
> ```java  
> from langchain.messages import SystemMessage, HumanMessagemessages = [  
>     SystemMessage("你是一名耐心的 Python 老师，回答要适合新手。"),  
>     HumanMessage("什么是函数？")  
> ]  
>   
> response = llm.invoke(messages)  
>   
> ai_message = response.content  
>   
> print(response.content)  
> ```  
> 这段代码的含义就是，有一个messages 的消息列表，消息列表中有系统提示词和用户输入的提问。  
> 模拟多轮对话示例：  
> ```go  
> from langchain.messages import AIMessage  
>   
> messages.append(AIMessage(ai_message))  
> messages.append(HumanMessage("能不能再举一个例子？"))  
>   
> response = llm.invoke(messages)  
> print(response.content)  
> ```  
> 关键点：多轮对话需要把历史消息一起传给模型。  
> ## 3.5 Prompt 模板  
> ### PromptTemplate  
> ```python  
> from langchain_core.prompts import PromptTemplate  
>   
> prompt = PromptTemplate.from_template(  
>     "请用新手能听懂的方式解释：{topic}"  
> )  
>   
> formatted_prompt = prompt.invoke({"topic": "LangChain"})  
> print(formatted_prompt.text)  
>   
> response = llm.invoke(formatted_prompt.text)  
> print(response.content)  
> ```  
> ### ChatPromptTemplate  
> 聊天模型更推荐使用 ChatPromptTemplate。  
> ```cpp  
> from langchain_core.prompts import ChatPromptTemplate  
>   
> prompt = ChatPromptTemplate.from_messages([  
>     ("system", "你是一名 AI 应用开发老师，回答要清晰、简洁。"),  
>     ("human", "请解释这个概念：{topic}")  
> ])  
>   
> messages = prompt.invoke({"topic": "Prompt 模板"})  
> response = llm.invoke(messages)  
>   
> print(response.content)  
> ```  
> 注意看，我们这里的from_messages，使用的是system和human会被langchain转化为 SystemMessage, HumanMessage。然后将ai返回的内容，再塞回去：(“ai”, “xxx”) 这样的话，就可以进行下一轮对话了。  
> ## 3.6 Runnable 与链式组合  
> LangChain 里很多组件都可以被“执行”，例如：  
> - Prompt  
>   
> - Model  
>   
> - Output Parser  
>   
> - Tool  
>   
> - Agent  
>   
> 这些可执行对象被称为 Runnable。  
> LangChain 支持用 | 把多个步骤串起来：  
> ```makefile  
> from langchain_core.output_parsers import StrOutputParser  
>   
> prompt = ChatPromptTemplate.from_messages([  
>     ("system", "你是一名新手教程作者。"),  
>     ("human", "请用三句话解释：{topic}")  
> ])  
>   
> parser = StrOutputParser()  
>   
> chain = prompt | llm | parser  
>   
> result = chain.invoke({"topic": "LangChain 的 Runnable"})  
> print(result)  
> ```  
> 这段代码的执行流程是：  
> ```rust  
> 输入变量 -> Prompt 生成消息 -> 模型生成回复 -> 解析成字符串  
>   
> 我们可以理解为语法糖  
> ```  
> ## 3.7 结构化输出  
> 很多时候，我们不希望模型只返回一段自然语言，而是希望它返回程序能处理的数据。  
> 例如从一句话中提取姓名、年龄和城市。  
> ```scss  
> from pydantic import BaseModel, Field  
>   
> class Person(BaseModel):  
>     name: str = Field(description="姓名")  
>     age: int = Field(description="年龄")  
>     city: str = Field(description="所在城市")  
>   
> structured_model = llm.with_structured_output(  
>     Person,  
>     method="function_calling"  
> )  
>   
> result = structured_model.invoke(  
>     "张三今年 18 岁，住在北京。"  
> )  
>   
> print(result)  
> print(result.name)  
> print(result.age)  
> print(result.city)  
> ```  
> ## 3.8 流式输出  
> 就是像打字机一样，一个一个输出  
> ```lua  
> for chunk in llm.stream("请用 100 字介绍 LangChain"):  
>     print(chunk.content, end="", flush=True)  
> ```  
> 这里的 stream 就是流式输出的方法。对比上面的 invoke 的话，invoke就是一次性执行完，就是等接口返回全部结果，一次性输出。  
> ## 3.9 工具调用 与 Agent入门  
> 上面我们初步使用langchain，简单实验了langchain常用的方法，但是也都是只能回答问题。接下来，我们将使用langchain来创建agnet，agent可以根据任务，来决定是否需要调用工具。  
> 先定义一个工具：  
> ```python  
> from langchain.tools import tool  
>   
> @tooldef get_weather(city: str) -> str:  
>     """查询城市天气的本地示例工具。"""  
>     weather_map = {  
>         "北京": "晴，25 摄氏度",  
>         "上海": "多云，27 摄氏度",  
>         "广州": "小雨，29 摄氏度",  
>     }  
>     return weather_map.get(city, "暂未查询到该城市天气")  
> ```  
> 在langchain中，使用：[@tool](https://linux.do/u/tool) 就是定义一个工具的方法，注意，一定要在函数内部写注释，不然模型不能很准确的知道这个工具函数的具体作用。  
> 创建 Agent：  
> ```python  
> from langchain.agents import create_agent  
>   
> agent = create_agent(  
>     model=llm,  
>     tools=[get_weather],  
>     system_prompt="你是一个会使用工具解决问题的助手。"  
> )  
>   
> result = agent.invoke({  
>     "messages": [  
>         {"role": "user", "content": "上海的天气如何？"}  
>     ]  
> })  
>   
> print(result["messages"][-1].content)  
> ```  
> 上面这个 agent 的流程：  
> ```rust  
> 用户提出问题 -> 模型判断是否需要工具 -> 调用工具 -> 读取工具结果 -> 生成最终回答  
> ```  
> 我们只需要将定义好的工具名，放入到tools参数中，agent就会自动决定当前用户提问是否需要调用工具。  
> 如果你将上面这个agent最终的输出完整打印：  
> ```css  
> [HumanMessage(content='上海的天气如何？'), AIMessage(content='', , tool_calls=[{'name': 'get_weather', 'args': {'city': '上海'}}), ToolMessage(content='多云，27 摄氏度', name='get_weather'), AIMessage(content='上海现在多云，气温约 27°C。')]  
> ```  
> 上面这个是我删除了多余的打印，只保留了比较有用的信息：  
> ```makefile  
> 1: HumanMessage: 用户输入2: AIMessage: ai回答3: tool_calls: ai抛出要调用工具请求4: ToolMessage: 工具调用结果5: AIMessage: 调用完工具后，AI的输出  
> ```  
> 从打印出的日志，对比我们上节课讲解的agent的流程。现在就完全对得上了，只是langchain将这内部复杂的逻辑封装好了，不用我们管内部到底是如何实现的。不过，只要你上节课手敲了agent，到这里就可以一眼就理解。  
> ---  
> # Q&A  
> ## Q1： 什么时候用字符串，什么时候用 messages？  
> ```bash  
> # 简单任务可以直接传字符串：  
> model.invoke("解释一下 Python 变量")  
>   
> # 需要角色设定、多轮历史时，使用 messages：  
> model.invoke([  
>     SystemMessage("你是一名 Python 老师"),  
>     HumanMessage("什么是变量？")  
> ])  
> ```  
> ### Q2： 什么时候需要 Agent？  
> ```plaintext  
> 如果只是问答、总结、改写，不一定需要 Agent。  
>   
> 如果任务需要模型自己判断是否调用工具，例如计算、搜索、查数据库、调用 API，就可以考虑 Agent。  
> ```  
> ### Q3： LangChain 和 LangGraph 是什么关系？  
> ```css  
> LangChain 负责提供大模型应用开发的常用组件  
> LangGraph 负责管理更复杂的 Agent / 工作流执行过程。  
>   
> 在 LangChain 1.0 之后，很多 Agent 能力底层其实是基于 LangGraph 构建的。  
>   
> 例如:  
> 你用 create_agent() 创建 Agent 时  
> 表面上是在使用 LangChain 的高级接口；  
> 但底层执行流程、状态流转、工具调用等能力，很多是由 LangGraph 提供支撑的。  
>   
> 在 Agent 和复杂工作流这部分，可以理解为 LangChain 是对 LangGraph 的高层封装。  
> ```  
> ### Q4：是否有必要学langchain?  
> ```plaintext  
> 分场景：  
> 1：如果你只是做一个很简单的大模型调用：没必要  
>   
> 2：如果你要做的是一个真正的 AI 应用，LangChain 就很有价值了  
> 对新手来说，学习 LangChain 的好处是：  
>   
> 能理解大模型应用的标准开发流程  
> 能快速接触 Prompt、Message、Tool、Agent、RAG 等核心概念  
> 能少写很多重复代码  
> 能更容易从简单 Demo 过渡到真实项目  
>   
> 总结：  
> 如果你只是玩 API，可以不学 LangChain；  
> 如果你想系统开发 AI 应用，LangChain 很值得学。  
> ```  
> ### Q5：那我目前阶段是否只要学你上面讲到的知识点？我还需要课后扩展吗？  
> ```plaintext  
> 入门阶段，先学本教程这些知识点就够了。  
> ```  
> ---  
> 下一篇导航  
> 【写在前面】 1：本教程为本人学习agent的总结文档，均为手动筛选个人觉得重点的内容，也当做是一个笔记分享给想学习agent的佬友们，如有错误，请指正。 2：本人为前端转agent中，如有岗位可私，base：杭州。 上一篇导航 上一节我们已经初步认识了langchain的基本用法，但是我们学习的都是一个一个知识点片段，如果不加以练习的话，会很容易忘记，所以这节课，我们一起来练习巩固一下…  
> [3.zip](https://linux.do/uploads/short-url/YaaxFxyhK1LsNbfjwLH1YblEK5.zip) (7.9 KB)


