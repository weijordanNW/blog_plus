---
title: 1-4、 常见的Loader 加载器：PDF+多模态图文PDF
date: '2026-09-16 06:51:01'
updated: '2026-09-16 07:10:10'
---



![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/SClzbukNDopdNEx8VuRcLruMntg.png)

# 📄 LangChain Loader 加载器：PDF 与多模态图文 PDF


> **核心一句话：Loader 就像 IO 接口——文档进，格式化数据出。**    
> LangChain 0.3 之后，很多 Loader 被拆到 `langchain_community` 包中。


---

## 一、Loader 是什么？


| 项目 | 说明                             |
| -- | ------------------------------ |
| 本质 | 类似 IO 接口：文档进，格式化数据出            |
| 作用 | 把各种结构化 / 非结构化数据加载进系统           |
| 输出 | 统一转成 LangChain 的 `Document` 格式 |
| 后续 | 拿 `Document` 格式去做向量化           |



LangChain 支持的 Loader 非常丰富，常见包括：


- CSVLoader

- File Directory Loader

- HTMLLoader

- JSONLoader

- MarkdownLoader

- PyPDFLoader

- 社区封装 Loader：Notion、B站、GitHub、MongoDB 等 100 多种
	
> 几乎你能看到的主流数据格式，都可以用 Loader 形式接入。


---

## 二、常见 Loader 一览


| Loader 类型       | 用途                         |
| --------------- | -------------------------- |
| CSVLoader       | 加载 CSV 文件                  |
| DirectoryLoader | 按文件夹批量加载                   |
| HTMLLoader      | 加载 HTML 网页                 |
| JSONLoader      | 加载 JSON 数据                 |
| MarkdownLoader  | 加载 Markdown 文档             |
| PyPDFLoader     | 加载 PDF 文件                  |
| 社区 Loader       | Notion、B站、GitHub、MongoDB 等 |


---

## 三、用 Loader 加载 PDF

### 1. 安装依赖


需要安装：


- `langchain_community`

- `pypdf`
	
### 2. 使用 PyPDFLoader

```python
from langchain_community.document_loaders import PyPDFLoader

loader = PyPDFLoader(file_path="deepseek.pdf")
```

### 3. 支持两种加载方式


| 方法            | 说明       |
| ------------- | -------- |
| `load()`      | 一次性加载    |
| `lazy_load()` | 懒加载，逐页加载 |



原文使用 **懒加载** 方式，把 PDF 每一页加载出来，塞进 list。


### 4. 查看内容与元数据


加载后可打印每一页的：


- `metadata`：来源、总页数、当前页等

- `page_content`：当前页文本内容
	
```python
for page in loader.lazy_load():
    print(page.metadata)
    print(page.page_content)
```

---

## 四、多模态图文 PDF 解析

### 场景


很多工作文档不是纯文本 PDF，而是 **图文混排 PDF**。  

例如：《2021年中国Z世代手办消费趋势研究报告》。



它有图有文，类似 PPT，需要用 **多模态模型** 解析。


---

### 解析步骤


| 步骤 | 操作                    |
| -- | --------------------- |
| 1  | 安装依赖包                 |
| 2  | 定义 `pdf_to_base64` 函数 |
| 3  | 把 PDF 中的图片提取出来        |
| 4  | 将图片转为 base64          |
| 5  | 构造 `HumanMessage`     |
| 6  | 传入问题 + `image_url`    |
| 7  | 调用支持多模态的模型            |
| 8  | 获取模型回答                |


---

### 关键点

- 多模态不是所有模型都支持；

- 原文使用 **GPT-4o mini**，它支持图像识别；

- 传入图片时，`type` 要设为 `image_url`；

- `image_url` 实际是 base64 编码；

- 模型同时接收：**用户问题 + 图片**。
	
### 示意代码

```python
from langchain_core.messages import HumanMessage

message = HumanMessage(
    content=[
        {
            "type": "text",
            "text": "一线城市的消费者占比有多少？"
        },
        {
            "type": "image_url",
            "image_url": {
                "url": f"data:image/jpeg;base64,{base64_image}"
            }
        }
    ]
)
```

### 示例结果


问题：**一线城市的消费者占比有多少？**



图表中显示：


- 一线城市：**46.4%**

- 二线城市：**12.8%**
	
模型根据图表回答：



> 一线城市消费者比例 46.4%


---

## 五、术语修正表


| 原文说法                       | 正确术语           |
| -------------------------- | -------------- |
| louder / LODER             | Loader         |
| long城 / launch / launchain | LangChain      |
| py Pdf louder              | PyPDFLoader    |
| DOCULOUDER                 | DocumentLoader |
| JASON                      | JSON           |
| CVS                        | CSV            |
| feel pass                  | file_path      |
| lazy louder                | lazy_load      |


---

## 六、总结


> **Loader 是 RAG 数据入口的第一站。**    
> 它把 PDF、网页、CSV、Excel、Notion 等各种数据统一转成 LangChain 的 `Document` 格式，为后续切片、向量化、存储和检索打基础。



重点掌握：


1. Loader 是 IO 接口：文档进，Document 出；

1. PDF 文本加载用 `PyPDFLoader`；

1. 图文 PDF 需要多模态模型；

1. 图片可转 base64，通过 `image_url` 传给模型；

1. LangChain 封装丰富，常用 Loader 可直接使用，也支持自定义。


