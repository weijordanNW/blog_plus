---
title: 1-9、向量艺术：langChain的嵌入实现
date: '2026-09-16 08:14:31'
updated: '2026-09-16 08:39:58'
---

![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/VnfbbdTv7oGQRrxbQoicyQEZnIc.png)

# 🧬 向量艺术：LangChain 的嵌入实现


> **核心一句话：LangChain 封装了统一的 Embedding 接口，屏蔽不同嵌入模型的差异，让开发者方便调用、切换和缓存。**    
> 两个核心方法：`embed_documents` 用于批量文档向量化，`embed_query` 用于查询向量化。


---

## 一、LangChain 的统一嵌入层


LangChain 在嵌入模型之上封装了一层统一接口。



| 方法                | 用途          | 说明             |
| ----------------- | ----------- | -------------- |
| `embed_documents` | 嵌入多个文本 / 文档 | 把一组文档转成向量列表    |
| `embed_query`     | 嵌入单个问题 / 查询 | 把用户问题转成向量，用于检索 |



> 注意：模型必须接入 LangChain 生态，否则无法使用封装方法。    
> 可以到 LangChain 官网查看已接入的模型列表。


---

## 二、常见嵌入模型


LangChain 接入了数十种嵌入模型，功能类似，差异主要在：


- 支持维度；

- 支持语言；

- 语义能力；

- 是否开源；

- 是否收费。
	
### 1. OpenAI Embedding


| 项目   | 说明                                      |
| ---- | --------------------------------------- |
| 来源   | OpenAI                                  |
| 默认模型 | `text-embedding-ada-002`                |
| 默认维度 | 1536（原文提到 1024，实际 ada-002 为 1536，以实际为准） |
| 国内使用 | 需代理地址 `base_url` 和 API Key              |
| 费用   | 按 token 计费                              |


### 2. Ollama


| 项目 | 说明                                             |
| -- | ---------------------------------------------- |
| 类型 | 本地模型托管运行软件                                     |
| 支持 | 多种开源嵌入模型                                       |
| 费用 | 本地运行，无 token 消耗                                |
| 使用 | 在 Ollama 官网搜索 embedding 模型，拉取后即可在 LangChain 接入 |


### 3. Jina AI


| 项目 | 说明           |
| -- | ------------ |
| 特点 | 顶级多语言嵌入模型    |
| 语言 | 中英文及多种语言     |
| 推荐 | 比较推荐，适合多语言场景 |


### 4. 智谱 AI


| 项目 | 说明      |
| -- | ------- |
| 特点 | 中文能力较强  |
| 维度 | 1024    |
| 适用 | 中文为主的场景 |


---

## 三、选择嵌入模型的注意事项


| 注意事项         | 说明                                                   |
| ------------ | ---------------------------------------------------- |
| **适配语言**     | 中文、英文还是多语言？不确定时优先选多语言模型                              |
| **维度一致**     | 嵌入维度必须与向量数据库维度一致，否则报错                                |
| **多语言优先**    | 不确定语言时，多语言嵌入模型更稳妥                                    |
| **Token 消耗** | 非开源模型一样按 token 收费，需做成本控制                             |
| **本地 vs 云端** | Ollama 本地运行无 token 消耗；OpenAI、智谱、Jina 等云端模型有 token 消耗 |



> 嵌入模型的 token 一般比通用大模型便宜，因为模型消耗较小。


---

## 四、LangChain 嵌入使用示例

### 1. 批量文档向量化

```python
from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings(
    base_url="你的代理地址",
    api_key="你的key",
    model="text-embedding-ada-002"
)

vectors = embeddings.embed_documents(["文档1", "文档2"])
print(len(vectors[0]))  # 输出维度
```

### 2. 查询向量化

```python
query_vector = embeddings.embed_query("用户的问题")
```


> `embed_query` 用于把用户问题转成向量，再到向量数据库中进行相似性匹配。


---

## 五、嵌入缓存机制

### 1. 为什么需要缓存？


调用嵌入模型有成本：


- Token 消耗；

- 时间等待。
	
如果同一个文本重复嵌入，结果理论上不变。  

使用缓存可以：


- 命中缓存直接返回；

- 不重复燃烧 token；

- 大幅提升速度；

- 降低成本。
	
### 2. 使用 CacheBackedEmbeddings

```python
from langchain.embeddings import CacheBackedEmbeddings
from langchain.storage import LocalFileStore
from langchain_openai import OpenAIEmbeddings

store = LocalFileStore("./cache/")

embeddings = OpenAIEmbeddings()
cached_embeddings = CacheBackedEmbeddings.from_bytes_store(
    underlying_embeddings=embeddings,
    document_embedding_cache=store
)
```

### 3. 效果对比


| 次数        | 耗时        |
| --------- | --------- |
| 第一次       | 约 2.58 秒  |
| 第二次（命中缓存） | 约 2.49 毫秒 |



> 速度提升非常明显，成本也显著降低。


---

## 六、国产嵌入模型使用示例（以硅基流动为例）

### 1. 平台


硅基流动模型广场托管了多款嵌入模型。



| 模型         | 维度   | 语言  | 特点                                |
| ---------- | ---- | --- | --------------------------------- |
| BGE-M3     | 1024 | 多语言 | 免费，支持多向量稀疏检索等                     |
| 网易有道       | 768  | 多语言 | 托管模型                              |
| BGE 中文大型   | -    | 中文  | 中文能力强                             |
| BGE 英文     | -    | 英文  | 英文专用                              |
| BGE-M3 付费版 | 1024 | 多语言 | 按 token 收费，约 0.07 元 / 100 万 token |


### 2. 使用方式


仍然使用 OpenAI 兼容接口：


```python
from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings(
    model="BAAI/bge-m3",
    api_key="硅基流动申请的key",
    base_url="https://api.siliconflow.cn/v1"
)

vectors = embeddings.embed_documents(["床前明月光，疑是地上霜。"])
print(len(vectors[0]))  # 1024
```


> 注意：`base_url` 需要以 `/v1` 结尾，因为 BGE-M3 遵循 OpenAI API 格式。


---

## 七、总结


| 要点   | 内容                                |
| ---- | --------------------------------- |
| 统一接口 | `embed_documents` 和 `embed_query` |
| 常见模型 | OpenAI、Ollama、Jina AI、智谱 AI       |
| 选择原则 | 看语言、维度、是否多语言、成本                   |
| 维度一致 | 嵌入维度必须与向量数据库一致                    |
| 缓存机制 | `CacheBackedEmbeddings` 大幅提速降本    |
| 国产模型 | 硅基流动等平台可通过 OpenAI 兼容接口调用          |



> **一句话：LangChain 把嵌入模型标准化，开发者只需关注模型选择、维度匹配和缓存优化，就能高效完成向量化。**


