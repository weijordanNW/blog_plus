---
title: ' 1-5、 常见的Loader 加载器：解析网页+CVS+ Excel'
date: '2026-09-16 07:14:32'
updated: '2026-09-16 07:27:52'
---



# 🌐 LangChain Loader 加载器：解析网页 + CSV + Excel


> **核心一句话：Loader 是 RAG 数据入口的第一站。**    
> 除了 PDF，网页、CSV、Excel 等常见格式也都有对应的加载器。


---

## 一、解析网页

### 1. 依赖包


| 包                | 作用                 |
| ---------------- | ------------------ |
| `beautifulsoup4` | 解析 HTML，过滤标签，提取纯文本 |
| `unstructured`   | 非结构化数据解析           |



这两个是 Python 爬虫中最常用的包。


---

### 2. 使用 WebBaseLoader

```python
from langchain_community.document_loaders import WebBaseLoader

loader = WebBaseLoader("https://python.langchain.com/docs/")
docs = loader.lazy_load()
```


特点：


- 支持一次传入多个 URL，用逗号隔开；

- 使用 `lazy_load()` 懒加载，有进度提示；

- 自动过滤 HTML 标签，输出纯文本；

- 支持 SSL 验证、代理、简单反爬、格式化参数等。
	
加载后可查看：


- `metadata`：来源 `source`、网页 `title` 等；

- `page_content`：网页正文纯文本。
	
---

### 3. 只加载网页某一部分


如果只想抓取特定 `class` 的内容，可以给 `WebBaseLoader` 传入 BeautifulSoup 参数：


```python
loader = WebBaseLoader(
    web_path="https://example.com",
    bs_kwargs={"parse_only": bs4.SoupStrainer(class_="target-class")}
)
```


这样加载出来的就是该 `class` 内的内容。


---

### 4. 网页结构不熟悉怎么办？


使用 **UnstructuredLoader**：


```python
from langchain_community.document_loaders import UnstructuredURLLoader

loader = UnstructuredURLLoader(urls=["https://example.com"])
```


特点：


- 直接传 URL 即可；

- 不需要了解网页节点结构；

- 自动过滤、解析非结构化数据；

- 使用简单，效果强大。
	
---

## 二、加载 CSV


LangChain 内置了 `CSVLoader`。


```python
from langchain_community.document_loaders import CSVLoader

loader = CSVLoader(
    file_path="data.csv",
    source_column="某字段名"
)
docs = loader.load()
```


特点：


- 可指定加载哪一列；

- 指定列的数据会被加载成文本；

- 适合结构化表格数据。
	
---

## 三、加载 Excel


目前 LangChain 推荐使用 **微软云 Document Intelligence** 服务解析 Excel。


### 1. 方式：云端解析


需要：


- 申请 Azure Document Intelligence 的 Key；

- 安装相关依赖包。
	
```python
from langchain_community.document_loaders import AzureAIDocumentIntelligenceLoader

loader = AzureAIDocumentIntelligenceLoader(
    api_endpoint="你的endpoint",
    api_key="你的key",
    file_path="data.xlsx"
)
```


作用：


- 把 Excel 转换成文本；

- 通过微软 AI 解析服务完成。
	
> 申请方式：去微软云官网搜索 **Document Intelligence** 服务。


### 2. 本地化方式


原文提到，在实战做小助手时，也可以用本地化方式解析 Excel。  

两种方式可以都了解一下。


---

## 四、自定义 Loader


如果内置 Loader 不满足需求，可以自定义。


### 1. 必须实现的方法


| 方法           | 说明                |
| ------------ | ----------------- |
| `lazy_load`  | 懒加载，逐条返回 Document |
| `alazy_load` | 异步懒加载             |
| `load`       | 同步全量加载            |
| `aload`      | 异步全量加载            |



> 其中 `lazy_load` 是必须的，其他可选，有默认实现。


### 2. 继承 BaseLoader


所有 LangChain 预置 Loader 都继承自 `BaseLoader`。


```python
from langchain_core.document_loaders import BaseLoader
from langchain_core.documents import Document

class LineLoader(BaseLoader):
    def __init__(self, file_path: str):
        self.file_path = file_path

    def lazy_load(self):
        with open(self.file_path, "r", encoding="utf-8") as f:
            for i, line in enumerate(f, start=1):
                yield Document(
                    page_content=line.strip(),
                    metadata={"line": i, "source": self.file_path}
                )
```


要点：


- 使用 `yield` 逐行返回，不一次性占内存；

- 返回 `Document` 对象；

- `page_content` 是内容，`metadata` 放行号、来源等。
	
### 3. 测试自定义 Loader

```python
loader = LineLoader("test.txt")
for doc in loader.lazy_load():
    print(doc.metadata)
    print(doc.page_content)
```


输出包含：


- 行号；

- 来源文件；

- 每行内容。
	
---

## 五、总结对比


| 数据源    | 推荐 Loader                           | 特点                 |
| ------ | ----------------------------------- | ------------------ |
| 网页     | `WebBaseLoader`                     | 自动过滤 HTML，支持多 URL  |
| 网页特定部分 | `WebBaseLoader` + `bs_kwargs`       | 按 class 过滤         |
| 网页结构不熟 | `UnstructuredURLLoader`             | 直接传 URL，自动解析       |
| CSV    | `CSVLoader`                         | 可指定列，结构化加载         |
| Excel  | `AzureAIDocumentIntelligenceLoader` | 云端解析，需 Key         |
| 自定义格式  | 继承 `BaseLoader`                     | 实现 `lazy_load` 等方法 |


---

## 六、一句话总结


> **LangChain 的 Loader 生态非常丰富：**    
> 网页用 `WebBaseLoader` 或 `UnstructuredURLLoader`，    
> CSV 用 `CSVLoader`，Excel 可用微软云服务，    
> 特殊格式则继承 `BaseLoader` 自定义实现。



> Loader 是整个 RAG 输入流程的入口，建议把常见 Loader 都上手练一遍；    
> 不常见的可以从官方集成里找，或者自己封装。


