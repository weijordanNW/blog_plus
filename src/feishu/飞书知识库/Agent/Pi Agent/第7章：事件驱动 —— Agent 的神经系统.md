---
title: 第7章：事件驱动 —— Agent 的神经系统
date: '2026-09-06 20:10:06'
updated: '2026-09-07 19:29:42'
---
## 图解
![图解](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/Fk04wCEivh4M89bypM3cWF4Jnib.jpeg)
## 在线地址
[M07 · 第7章:事件驱动 —— Agent 的神经系统 | Pi Agent Book](https://dg-ai-notes.pages.dev/modules/ch07-event-driven)



---
# 事件驱动 —— Agent 的神经系统

## 一、为什么需要事件系统？
### 一个直觉：从外卖追踪说起
你在美团上点了一份外卖。下单后，App 会给你推送一连串状态更新：“商家已接单” → “骑手已取餐” → “骑手距你 500 米” → “已送达”。每一个状态更新就是一个**事件**——它告诉你”发生了一件事”。你不需要一直盯着骑手的位置看，只需要在收到事件时看一眼。

Pi-Agent 的事件就是这个意思：Agent 运行过程中不断产生”发生了某事”的快照——消息开始了、消息更新了、工具开始执行了——然后把这些快照推给所有关心它的人。
### 不用事件会怎样？
假设你要给 Agent 加一个”工具调用日志”功能：每次调工具时打印一行 `[LOG] 调用了 read，参数：main.ts`。

**不用事件系统**：你得改 Agent 源码，在 `tool.execute()` 前后各加一行 `console.log`。然后 Pi 更新了，你 merge 上游代码时发现冲突——你加的日志和上游新增的逻辑撞在一起了。手动解决冲突，下周又更新，又冲突……

**用事件系统**：
```javascript
session.subscribe((event) => {
    if (event.type === "tool_execution_end") {
        console.log(`[LOG] 调用了 ${event.toolName}，结果：${event.isError ? "失败" : "成功"}`);
    }
});
```
六行代码。不碰 Agent 一行源码。Agent 更新你只需要 `npm update`，日志逻辑不受影响。

这就是事件驱动最核心的价值：**把”发生了什么”和”谁关心什么”彻底分离。** Agent 只管发事件，它不知道也不关心谁在听。
### 发布-订阅 vs 直接调用
用编程术语说，事件驱动实现的是**发布-订阅模式**。和直接函数调用做个对比：
```typescript
直接调用（打电话）：
  Agent ──调用──→ 终端渲染
       ──调用──→ 文件存储
       ──调用──→ 日志记录
  Agent 需要知道所有消费者的存在，每加一个新功能就要改 Agent

发布-订阅（广播）：
  Agent ──emit事件──→ 📡 事件总线
                          ├──→ 终端渲染（订阅了）
                          ├──→ 文件存储（订阅了）
                          ├──→ 日志记录（订阅了）
                          └──→ （新功能只需订阅，Agent 不需要知道）
```
一句话：**直接调用是”我亲自找你”；发布-订阅是”我对着空气喊了一声，谁听到算谁的”。** Pi 的事件系统就是发布-订阅——Agent 发出事件，关心它的人各自订阅、各自处理。但 Pi 有一个关键特点：**它有两条订阅管道**，而且两条的能力很不一样。这正是本章要讲的核心，下一节就铺开。
---
## 二、两条管道的全貌：从事件源到两类监听器
这一节把 Pi 事件体系的全景铺开——**2.1 看事件源，2.2 认识两条管道并讲清它们的核心差别**。后面第三、四节会分别深入两条管道的用法和源码。
### 2.1 事件源：10 种 AgentEvent
Agent 内核层定义了 10 种 `AgentEvent`，它们构成了 Agent 运行的完整”脉搏”：
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/YL7CbtJCGovwS4xsIYFcOgGen3f.png)
**配图说明**：从外到内 4 层嵌套——Agent（Trace）→ Turn → Message → Tool Execution。每层都是”开始 → 更新（×N）→ 结束”配对。注意 Turn 2 没有 ToolCall 所以没有 Layer 4 嵌套。底部图例标注每层的事件数（2+2+3+3=10 种）。


```yaml
export type AgentEvent =
  // 第1层：Agent 生命周期（整个运行）
  | { type: "agent_start" }
  | { type: "agent_end"; messages: AgentMessage[] }

  // 第2层：Turn 生命周期（一轮模型调用 + 工具执行）
  | { type: "turn_start" }
  | { type: "turn_end"; message: AgentMessage; toolResults: ToolResultMessage[] }

  // 第3层：Message 生命周期（一条消息）
  | { type: "message_start"; message: AgentMessage }
  | { type: "message_update"; message: AgentMessage; assistantMessageEvent: AssistantMessageEvent }
  | { type: "message_end"; message: AgentMessage }

  // 第4层：Tool Execution 生命周期（一次工具执行）
  | { type: "tool_execution_start"; toolCallId: string; toolName: string; args: any }
  | { type: "tool_execution_update"; toolCallId: string; toolName: string; args: any; partialResult: any }
  | { type: "tool_execution_end"; toolCallId: string; toolName: string; result: any; isError: boolean };
```
10 种看着不少，但规律很清楚——它们是 **4 层嵌套的生命周期**，每层都有”开始→更新→结束”的配对：
```typescript
Agent 运行
├── agent_start ───────────────────── Agent 开始
│
├── Turn 1（第3章讲过：一次模型调用 + 它触发的工具执行）
│   ├── turn_start ────────────────── Turn 开始
│   │
│   ├── Message（LLM 的响应）
│   │   ├── message_start
│   │   ├── message_update ×N ────── 流式增量（逐 token 更新）
│   │   └── message_end
│   │
│   ├── Tool Execution（工具执行）
│   │   ├── tool_execution_start
│   │   ├── tool_execution_update ×N  工具进度（如 Bash 的输出）
│   │   └── tool_execution_end
│   │
│   └── turn_end ──────────────────── Turn 结束
│
├── Turn 2 ...
│
└── agent_end ──────────────────────── Agent 结束
```
回忆第 3 章的概念：**一个 Turn = 一次模型调用 + 这次调用触发的所有工具执行。** turn_start 到 turn_end 之间，模型被调用了恰好一次。

> _**这 10 种是事件源，是两条管道的共同水源。**__ 两类监听器都消费这同一批事件——管道 A 直接收，管道 B 收翻译版。所以这 10 种不属于任何一条管道，是它们共享的源头。两条管道具体是什么、差别在哪，下一节展开。_
### 2.2 两条管道：subscribe 与扩展 pi.on
Pi 的事件有两条订阅管道，它们喂的是同一个事件源，但能力差很多。这一节先把两条管道介绍清楚，再讲它们的核心差别。后面第三、四节会分别深入。

**管道 A：**`**session.subscribe**`

你在**外部脚本**里注册监听器（Web 服务器、CLI 工具）。拿到 `session` 对象后调 `session.subscribe(listener)`，事件就会流进你的 listener。

它的特点是**只能看，不能改**——listener 没有返回值（或者说返回了也被丢弃），Agent 不会因为你的监听器改变任何行为。典型用途：流式渲染、打日志、把事件转发给浏览器。

**管道 B：扩展系统的 **`**pi.on**`

你把代码写进一个**扩展**（一段被框架加载的插件），在里面调 `pi.on("事件名", handler)`。handler 带返回值，Agent 会读。

它的特点是**能改** Agent 的行为——handler 可以返回 `{ block: true }` 拦掉一次工具调用，可以返回新的消息列表改写给 LLM 的上下文。典型用途：安全策略、审计、注入动态信息。

**核心差别：Agent 对 B 等，对 A 不等**

两条管道最关键的差别不在返回值，而在 Agent 等不等你：
- 管道 B 的 handler，Agent 会**等它返回**。因为 Agent 要读返回值才能决定下一步——你说拦，它才拦。源码里这行带 `await`：

```typescript
await this._emitExtensionEvent(event);   // 扩展：等。Agent 要读 handler 的返回值
```
- 管道 A 的 listener，Agent **不等**。通知完就继续，listener 返回什么 Agent 都不读。源码里这行不带 `await`，而且 `_emit` 本身就是个同步函数：

```typescript
this._emit(event);                        // subscribe：不等。同步调用，返回值丢弃
```
因果关系很直接：扩展要读返回值，所以必须等；subscribe 不读返回值，等了也没用。“能改 Agent 行为”是”等 + 读返回值”的结果，不是单独赋予的能力。
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/DhwVbEbLqo1vZHxZDCbcPIe2ni7.png)
**配图说明**：同一个事件源分流到两条管道——左管道 A（subscribe，只读广播，Agent 不等），右管道 B（扩展 pi.on，能拦截改写，Agent 等你回话）。两条管道喂的是同一个事件，但 Agent 对一个等、对另一个不等。

**容易搞混的两个事件名：**`**tool_call**`** 与 **`**tool_execution_start**`

这两个名字像，但走不同管道、发生在不同时刻：
```typescript
LLM 决定调一个工具
   │
   ▼  管道 B：tool_call（执行前）
   │   扩展可以 return { block: true } 拦掉它；一旦 block，下面都不发生
   │   注意：tool_call 不是 2.1 那 10 种之一，是 SDK 在执行前主动触发的扩展独占事件
   │
   ▼  （没被拦）tool.execute() 开跑
   │
   ▼  管道 A + B 都收到：tool_execution_start（已开跑，拦不住了）
   │   这是 2.1 那 10 种之一，由 Agent 内核发出，两条管道都收
   │
   ▼  tool_execution_end
```
`tool_call` 是执行前的安检门（能拦，管道 B 独占），`tool_execution_start` 是开跑后的广播（拦不了，两条管道都收）。管道 A 根本收不到 `tool_call`——你在 `subscribe` 里写 `if (event.type === "tool_call")` 不会报错，但这个分支永远命中不了。

除了 `tool_call`，扩展还独占另外 4 个决策点（`input`、`before_agent_start`、`context`、`tool_result`），它们都是”Agent 要停下来读返回值”的位置，管道 A 一律收不到。这 5 个事件加起来，构成了管道 B 能干预 Agent 的全部入口。

> _**一个细节：工具进度更新可以不等。**__ 生命周期事件（start/end 这类低频、不能错的）Agent 会逐个等扩展处理完。但工具执行时会刷出大量进度（Bash 每一行输出都是一个 _`_tool_execution_update_`_），逐个等会卡住 Agent。Pi 对这类高频事件开了口子——先攒着，最后一次性等完。原则是：越重要的事件等得越严格。_

`tool_call` 是”安检门”（执行前，能拦，管道 B 独占），`tool_execution_start` 是”已经开跑的广播”（拦不了，两条管道都收）。被 `tool_call` 拦掉的调用，根本不会触发 `tool_execution_*`。**它们是同一个时刻的两面，但只有 **`**tool_call**`** 能动手。** 这个例子也印证了 2.1 末尾的话：10 种内核事件是共同水源，而扩展独占事件（如 tool_call）是另一批，由 SDK 在决策点触发。
---
## 三、管道 A：session.subscribe
2.2 介绍了管道 A 的特点：Agent 不等它，所以它只能看、不能改。这一节落到源码，看清”不等”和”只能看”是怎么实现的。
### 3.1 怎么用：注册、签名、注销
```javascript
// 注册：传入一个 listener，返回一个注销函数
const unsubscribe = session.subscribe((event, signal) => {
    if (event.type === "message_update") {
        process.stdout.write(event.assistantMessageEvent.delta);   // 流式打字
    }
});

// 不用了就调注销函数
unsubscribe();
```
listener 的签名是关键：
```typescript
type AgentSessionEventListener = (event: AgentSessionEvent) => void;
//                            注意返回值：void ↑↑↑↑
```
**返回值是 **`**void**`——就算你在 listener 里 `return { block: true }`，Agent 也不读、不用。这是管道 A”只能看不能改”在类型层面的体现，也是和管道 B 最根本的差别。
### 3.2 “不等”对管道 A 意味着什么
Agent 对 subscribe 监听器”通知一声就走”，不等你。落到实战，这个”不等”带来三个直接后果：
- **你可以在监听器里干异步重活**（比如 `await` 一个慢请求），**不会**拖慢 Agent——Agent 早就走下一步了，你的请求在后台慢慢跑。

- 但也正因为不等，**你的异步结果传不回去**——Agent 已经发下一个事件了，不在乎你算出了什么。

- 所以管道 A 适合”我慢慢干我的，不打扰 Agent”的场景：写日志、推 SSE、更新外部状态。**不适合**需要”先等我处理完再继续”的场景——那必须走管道 B。

**一个隐藏的坑**：因为不等，async 监听器里的错误不会冒泡到 Agent。如果你在 async 监听器里 `await` 一个会失败的操作，失败会被悄悄吞掉，你连错在哪都不知道。**务必在 async 监听器里自己 try-catch**——Agent 不会替你兜底。
### 3.3 管道 A 能收到哪些事件
管道 A 收到的是 `AgentSessionEvent`，它比内核 10 种事件多出几个**产品级事件**——这些事件反映的不是”Agent 内核跑了一步”，而是”产品层做了某件事”（压缩、重试、排队等）。内核根本不知道这些概念，所以它们只出现在产品层。

大致有个印象就行，遇到具体场景再查：

加上内核的 10 种生命周期事件，就是管道 A 能收到的全部。

但管道 A **收不到**管道 B 独占的 5 个决策点（`input`/`before_agent_start`/`context`/`tool_call`/`tool_result`）——这 5 个 Agent 内核根本没有，是 SDK 在决策点主动调用扩展系统时产生的，只能走管道 B。
### 3.4 什么时候用管道 A
一句话：**纯观察、不改 Agent 行为、不需要 Agent 等你的场景。** 典型用途——流式渲染（TUI 逐 token 打字）、日志记录、SSE 转发给浏览器、统计 token 用量。这些场景的共同点是”Agent 干它的，我在旁边看一眼、或慢慢做我自己的事”，不需要 Agent 配合。

> _💡 __**落库 / 审计 / 日志也是「纯观察」，首选管道 A**__。因为管道 A 不 _`_await_`_ 你的监听器——你在里面 _`_await db.insert()_`_，派发方 _`__emit_`_ 调一下就走（2.2 讲的”不读返回值”），I/O 在后台跑，Agent 不被拖慢。_  
> _只有当你要存的数据来自 _`_tool_call_`_ / _`_tool_result_`_ / _`_context_`_ 等__**管道 A 收不到的 5 个决策点**__时，才被迫走管道 B——但管道 B 的 handler 被 _`_await_`_（2.2 讲的”Agent 等你”），落库必须 __**fire-and-forget**__：handler 里把数据推进队列后立刻返回，真正的写库交给独立 worker 异步处理，别让 _`_await_`_ 链绑住 Agent 主循环。_  
> _一个易踩的坑：_`_message_end_`_ 看着像”一条消息存一笔”的好时机，但它一轮 _`_prompt()_`_ 会触发多次（每条 assistant 消息结束都发，含中间要调工具的那些）。拿它当整轮收尾会重复落库 / 重复推 done。整轮的可靠收尾用 _`_agent_settled_`_——它每 prompt 只发一次。_
---
## 四、管道 B：扩展系统 pi.on
这一节是本章的重头戏。管道 B 的能力远超管道 A——它能拦截工具、改写上下文、替换系统提示词。这些能力的源头，是 SDK 在关键决策点**停下来等扩展的返回值**（2.2 讲的”Agent 等”）。
### 4.1 怎么用：写扩展、挂载、注册
管道 B 的代码不在”外部脚本”里，而是写在**扩展**里——一个接收 `pi` 对象的工厂函数：

typescript复制
```javascript
// 一个扩展：框架启动时调它，把遥控器 pi 传进来
function myGuardExtension(pi) {
    // 用 pi.on 盯住"工具调用前"这个事件
    pi.on("tool_call", async (event, ctx) => {
        if (event.toolName === "delete_table") {
            return { block: true, reason: "生产环境禁止删除操作" };   // ← 有返回值，能拦
        }
        return undefined;   // 放行
    });
}
```
挂载通过 `DefaultResourceLoader` 的 `extensionFactories`：

typescript复制
```javascript
const loader = new DefaultResourceLoader({
    cwd: process.cwd(),
    agentDir: getAgentDir(),
    extensionFactories: [myGuardExtension],   // ← 你的扩展塞这儿
});
await loader.reload();

const { session } = await createAgentSession({ /* ..., */ resourceLoader: loader });
```
注意两个关键点：
- **handler 有返回值**（`return { block: true }`）——这是管道 B 能干预 Agent 的根本，也是”Agent 必须等你”的原因（要读返回值）。

- **handler 多一个 **`**ctx**`** 参数**——扩展上下文，能力比管道 A 的 `event + signal` 强（见 4.4）。

### 4.2 源码：pi.on 只是往 Map 里 push
管道 B 的注册实现极简。`pi.on` 做的事就是往一个 Map 里塞 handler：
```thrift
// loader.ts —— createExtensionAPI 里
on(event: string, handler: HandlerFn): void {
    runtime.assertActive();
    const list = extension.handlers.get(event) ?? [];   // 取出该事件的 handler 列表
    list.push(handler);                                  // 塞进去
    extension.handlers.set(event, list);                 // 放回
},
```
每个扩展对象内部有一个 `handlers: Map<事件名, handler[]>`。`pi.on("tool_call", h)` 就是在 `"tool_call"` 这个 key 下追加 `h`。派发时遍历这个 Map。
### 4.3 源码：extensionRunner 的两条派发路径
真正的差别在派发。`extensionRunner` 有两类派发方法，对应”通知型”和”决策型”事件——但**两类都 await handler**（这是管道 B”Agent 等你”的实现）：



**路径 1：通知型 **`**emit()**`**（runner.ts:796）**——处理 `message_update`、`turn_start` 等只读事件：
```javascript
async emit(event): Promise<...> {
    const ctx = this.createContext();
    for (const ext of this.extensions) {                  // 遍历扩展
        const handlers = ext.handlers.get(event.type);
        if (!handlers || handlers.length === 0) continue;
        for (const handler of handlers) {
            try {
                await handler(event, ctx);                // ★ await 每个 handler
                // 通知型事件：不读返回值（session_before_* 例外，读 cancel）
            } catch (err) {                               // ★ try-catch 隔离
                this.emitError({ extensionPath: ext.path, event: event.type, error: ... });
            }
        }
    }
}
```
特征：**串行 await、try-catch 隔离、忽略返回值**。注意即便忽略返回值，仍然 await——这是为了”同步屏障”（等扩展处理完才发下一个事件，保证状态一致）。这条路径处理的是 2.1 那 10 种内核事件翻译过来的。



**路径 2：决策型 **`**emitToolCall()**`**（runner.ts:927）**——处理 `tool_call` 拦截：
```javascript
async emitToolCall(event): Promise<ToolCallEventResult | undefined> {
    const ctx = this.createContext();
    let result: ToolCallEventResult | undefined;
    for (const ext of this.extensions) {
        const handlers = ext.handlers.get("tool_call");
        if (!handlers || handlers.length === 0) continue;
        for (const handler of handlers) {
            const handlerResult = await handler(event, ctx);   // ★ await + 读返回值
            if (handlerResult) {
                result = handlerResult;
                if (result.block) {
                    return result;                              // ★ block 立即短路
                }
            }
            // 注意：这里没有 try-catch！这是刻意的 fail-closed 设计——
            // 扩展在 tool_call 里崩了，宁可拦掉工具也不放行（安全优先）
        }
    }
    return result;
}
```
特征：**await + 读返回值 + **`**block**`** 短路 + 无 try-catch**。tool_call 是所有派发方法里唯一不包 try-catch 的——扩展抛错会冒泡，导致这次工具调用被 block（fail-closed：宁可错杀，不放行可能危险的操作）。



**路径 3：链式 transform 型**——还有一批决策事件走”链式 transform”，每个 handler 接收上一个的输出继续改。比如：
- `emitContext()`（runner.ts:979）：第一个 handler 拿到原始 messages，改完传给第二个，最后一个的输出就是真正发给 LLM 的消息列表。返回类型 `AgentMessage[]`。

- `emitToolResult()`（runner.ts:872）：链式修改工具结果，返回 `ToolResultEventResult`。

- `emitBeforeAgentStart()`（runner.ts:1076）：链式覆盖系统提示词 + 收集注入消息。

- `emitInput()`（runner.ts:1191）：链式改写用户输入，`action: "handled"` 短路。

这批方法和 `emitToolCall` 一样 await + 读返回值，但**都包 try-catch**（错误转发 emitError）。只有 `emitToolCall` 是裸的。
### 4.4 ctx：扩展上下文
handler 签名 `(event, ctx)` 里的 `ctx` 是 `ExtensionContext`，能力远强于管道 A 的 `event + signal`：
```typescript
interface ExtensionContext {
    ui: ExtensionUIContext;                  // select/confirm/input/notify 等 UI 能力
    mode: "tui" | "rpc" | "json" | "print";  // 当前运行模式
    cwd: string;                             // 工作目录
    sessionManager: ReadonlySessionManager;  // ★ 只读！能读历史但不能直接写
    modelRegistry: ModelRegistry;            // 模型注册表
    model: Model<any> | undefined;           // 当前模型
    thinkingLevel: ThinkingLevel | undefined;
    signal: AbortSignal | undefined;         // 中断信号
    abort(): void;                           // 主动中断
    isIdle(): boolean;                       // Agent 是否空闲
    compact(options?): void;                 // 触发上下文压缩
    getSystemPrompt(): string;               // 读系统提示词
    // ... 还有 getContextUsage / hasPendingMessages / shutdown 等
}
```
一个**容易踩的坑**：`sessionManager` 是 `ReadonlySessionManager`——能读会话历史（`getEntries()`），但**不能直接写**。扩展要写 session 得走 `pi.sendMessage()` / `pi.appendEntry()` 等 action 方法，或在命令上下文（`ExtensionCommandContext`，能力更全）里操作。


### 4.5 扩展独占事件的触发位置
管道 B 独占的事件（包括 5 个决策点，以及 provider 类事件），都不在 `_emitExtensionEvent` 的翻译列表里（2.2 提到，那个方法只翻译 2.1 的流式生命周期事件），而是 SDK 在**各自的决策点**主动调用的。它们的触发位置分布在两个文件：

这张表回答了 2.2 那个”管道 A 为什么收不到这些”的问题：**它们不是 Agent 内核 **`**emit**`** 出来的（内核根本没这些 type），而是 SDK 在上述位置主动调用 **`**extensionRunner.emitXxx()**`** 的产物。** 管道 A 监听的是 `_emit`（被 `_handleAgentEvent` 调用），自然听不到这些。
### 4.6 什么时候用管道 B
一句话：**需要改变 Agent 行为的场景。** 拦截危险工具调用、改写发给 LLM 的上下文、替换系统提示词、修改工具返回值、过滤用户输入——这些”干预”类需求，管道 A 做不到（不等你就意味着返回值丢弃），只能写扩展走管道 B。
---
## 五、实战：四个场景，各走哪条管道
理解了两条管道的机制，就能判断每个需求该用哪条。下面四个场景覆盖最常见的集成需求，**按管道分组**——这是本章最重要的实战判断。
### 5.1 管道 A 实战组（session.subscribe，只读观察、Agent 不等）
#### 场景1：实时观测 Agent 在干什么
```javascript
session.subscribe((event) => {
    if (event.type === "tool_execution_start") {
        console.log(`🔧 ${event.toolName}(${JSON.stringify(event.args).slice(0, 50)})`);
    }
    if (event.type === "tool_execution_end") {
        console.log(`   └─ ${event.isError ? "❌ 失败" : "✅ 成功"}`);
    }
});
```
**为什么走管道 A**：纯观察，不改变 Agent 行为。Agent 不等你也无所谓——你要做的只是”看到事件、打印一行”，同步即可完成。Pi 的 TUI 本身就是通过订阅事件实现的观测面板——你看到的所有终端输出都来自管道 A 的消费。
#### 场景2：流式转发到 Web 前端（SSE）
```typescript
// 服务端
session.subscribe((event) => {
    if (event.type === "message_update") {
        res.write(`data: ${JSON.stringify({ type: "delta", text: extractText(event.message) })}\n\n`);
    }
    if (event.type === "agent_end") {
        res.end();
    }
});
```
**为什么走管道 A**：纯转发，不改 Agent。Agent 运行在服务器上，用户通过浏览器访问，订阅事件流通过 SSE 推给浏览器——这就是 Web 集成的核心。
### 5.2 管道 B 实战组（扩展 pi.on，能干预、Agent 等你）
#### 场景3：工具调用拦截
```javascript
function guardExtension(pi) {
    pi.on("tool_call", async (event) => {
        if (event.toolName === "delete_table") {
            return { block: true, reason: "生产环境禁止删除操作" };
        }
        return undefined;   // 放行
    });
}
// 挂载：extensionFactories: [guardExtension]
```
**为什么必须走管道 B**：要拦截、要返回 `{ block: true }`——管道 A 的 listener 不被等、返回值被丢弃，根本拦不住。而且 `tool_call` 这个事件**只在管道 B 派发**，管道 A 收不到。第 5 章讲的五步管道中第 3 步 `beforeToolCall`，底层就是这条管道实现的。
#### 场景4：上下文预处理
```javascript
function contextExtension(pi) {
    pi.on("context", async (event) => {
        // 在 LLM 调用前，往消息列表里注入当前时间
        return { messages: [{ role: "user", content: `当前时间：${new Date()}` }, ...event.messages] };
    });
}
```
**为什么必须走管道 B**：要改写发给 LLM 的消息列表——这是”改变 Agent 行为”，必须返回新列表让 Agent 采用（Agent 会等你返回）。第 6 章讲的 `transformContext` 钩子是同一条管道的实现（内核层的 `transformContext` 配置项和扩展层的 `context` hook 是同一件事的两面，一个走配置、一个走扩展）。
### 5.3 怎么选管道？一句话判断
> _**你的代码要不要改变 Agent 的行为？**_  
> - _要（拦截、改参数、改消息、存状态）→ 写扩展，走__**管道 B（**_`_**pi.on**_`_**）**__。Agent 会等你、读你的返回值。_  
>   
> - _不要（打日志、推前端、记统计）→ 用 __**管道 A（**_`_**subscribe**_`_**）**__ 更轻。Agent 不等你、不读返回值。_  
> 
### 5.4 小结
这四个场景的共同点是：**都不需要修改 Agent 内核。** 无论走哪条管道，新增功能都只是”挂一段自己的代码”。

事件驱动架构的真正威力不是”通知机制”（那只是管道 A），而是**开放扩展机制**——尤其是管道 B，它让第三方在不碰内核源码的前提下，能拦截、能改写、能干预。两条管道合起来，才构成 Pi 完整的”神经系统”。
---
## 六、总结：两条管道
Pi 的事件系统有一条核心分叉：**Agent 对扩展等、对 subscribe 不等**。这个差别决定了两条管道的全部行为。

**管道 A（**`**session.subscribe**`**）** —— Agent 不等你的监听器，返回值丢弃。所以你只能观察（渲染、日志、转发），改不了 Agent 的行为。它轻量、注册简单，适合在外部脚本里用。async 监听器的错误不会被 Agent 捕获，要自己 try-catch。

**管道 B（扩展 **`**pi.on**`**）** —— Agent 等你的 handler 返回，读返回值。所以你能干预 Agent 的下一步：拦工具、改上下文、换提示词。它还独占 5 个决策点事件（`input`/`before_agent_start`/`context`/`tool_call`/`tool_result`），管道 A 收不到。写法上是把代码塞进扩展、挂到 loader。扩展 handler 的异常多数被框架隔离（单个扩展崩了不连累别人），但 `tool_call` 是例外——它不隔离，扩展出错就拦掉工具（fail-closed：宁可错杀，不放行危险操作）。

判断用哪条管道，只问一句：**你的代码要不要改变 Agent 的行为**——要，写扩展走管道 B（Agent 会等你）；不要，`subscribe` 走管道 A（Agent 不等你）。
---
## 七、下一站
本章我们看到，事件系统让 Agent 和外部世界彻底解耦——UI、日志、持久化、扩展，全部通过订阅事件工作。两条管道（subscribe + pi.on）合起来，覆盖了从”纯观察（不等）“到”深度干预（等+返回值）“的全部需求。

但有一个和事件密切相关的机制我们只提了一句：`**transformContext**`（管道 B 的 `context` hook 在内核层的对应物）。第 6 章讲消息系统时说它在 `convertToLlm` 之前执行，负责裁剪旧消息、注入外部上下文。当对话越来越长，消息越来越多，最终会超出模型的上下文窗口。这时候 `transformContext` 需要做一件更激进的事——**压缩对话历史**。

接下来两章我们就打开 Pi 的上下文工程全貌。第 8 章先讲全景——从输入侧的工具输出截断、系统提示词组装，到历史侧的 Compaction 与分支摘要，让你看清 Pi 在多个环节布置的防线；第 9 章再深入其中最核心的压缩算法（Compaction），看 Pi 怎么在上下文窗口快满时把 50 轮对话压缩成一段结构化摘要，让 Agent 继续”记住”之前发生了什么。
---
> _**本章关键源码索引**__：_  
> - `_packages/agent/src/types.ts:422-437_`_ — 10 种 _`_AgentEvent_`_ 定义（事件源）_  
>   
> - `_packages/agent/src/agent-loop.ts:25_`_ — _`_AgentEventSink_`_ 类型（emit 签名）_  
>   
> - `_packages/agent/src/agent.ts:529-576_`_ — _`_processEvents_`_（内核同步屏障，await 汇入口）_  
>   
> - `_packages/agent/src/agent.ts:173,243_`_ — _`_listeners_`_ Set 和 _`_subscribe_`_（内核层）_  
>   
> - `_packages/agent/src/agent-loop.ts:666-707_`_ — _`_executePreparedToolCall_`_（update 特殊处理）_  
>   
> - `_packages/coding-agent/src/core/agent-session.ts:393_`_ — _`_agent.subscribe(this._handleAgentEvent)_`_（汇入口注册）_  
>   
> - `_packages/coding-agent/src/core/agent-session.ts:548-552_`_ — _`__emit_`_（管道 A 实体，__**同步不等**__）_  
>   
> - `_packages/coding-agent/src/core/agent-session.ts:595-666_`_ — _`__handleAgentEvent_`_（两条管道的分叉点：619 行 await 管道 B，622 行不等管道 A）_  
>   
> - `_packages/coding-agent/src/core/agent-session.ts:800-807_`_ — _`_AgentSession.subscribe_`_（注册到 _`__eventListeners_`_）_  
>   
> - `_packages/coding-agent/src/core/agent-session.ts:139-181_`_ — _`_AgentSessionEvent_`_（Session 层事件）_  
>   
> - `_packages/coding-agent/src/core/agent-session.ts:712-793_`_ — _`__emitExtensionEvent_`_（翻译给管道 B）_  
>   
> - `_packages/coding-agent/src/core/extensions/types.ts:1190-1231_`_ — _`_pi.on_`_ 的 30 个重载（全部扩展事件名）_  
>   
> - `_packages/coding-agent/src/core/extensions/types.ts:1180_`_ — _`_ExtensionHandler_`_ 签名 _`_(event, ctx) => Result_`  
>   
> - `_packages/coding-agent/src/core/extensions/loader.ts:238-243_`_ — _`_pi.on_`_ 实现（往 Map 里 push）_  
>   
> - `_packages/coding-agent/src/core/extensions/runner.ts:796-828_`_ — _`_emit()_`_（通知型派发，try-catch 隔离）_  
>   
> - `_packages/coding-agent/src/core/extensions/runner.ts:927-948_`_ — _`_emitToolCall()_`_（决策型，读返回值，★无 try-catch）_  
>   
> - `_packages/coding-agent/src/core/extensions/runner.ts:979-1010_`_ — _`_emitContext()_`_（链式 transform）_  
>   
> - `_packages/coding-agent/src/core/extensions/runner.ts:668-746_`_ — _`_createContext()_`_（ctx 惰性 getter）_  
>   
> - `_packages/coding-agent/src/core/extensions/types.ts:307-347_`_ — _`_ExtensionContext_`_（ctx 能力，sessionManager 只读）_  
>   
> - `_packages/coding-agent/src/core/agent-session.ts:468-517_`_ — _`_tool_call_`_/_`_tool_result_`_ 触发（agent hooks）_  
>   
> - `_packages/coding-agent/src/core/agent-session.ts:1131,1224_`_ — _`_input_`_/_`_before_agent_start_`_ 触发_  
>   
> - `_packages/coding-agent/src/core/sdk.ts:331,338,350_`_ — _`_context_`_/_`_before_provider_*_`_/_`_after_provider_response_`_ 触发_  
> 


