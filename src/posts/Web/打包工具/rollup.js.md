---
title: "rollup 打包工具"
icon: loop
date: 2023-05-06
category:
  - 打包工具
tag:
  - 前端开发
dir:
  order: 2
---


[https://www.ruanyifeng.com/blog/2022/05/rollup.html](https://www.ruanyifeng.com/blog/2022/05/rollup.html)

![](https://cdn.nlark.com/yuque/0/2024/webp/45821596/1728962941458-96143e0c-e26e-44c6-9301-9ac464d3d376.webp)

<h2 id="FD4Kr"><font style="color:rgb(0, 0, 0);background-color:rgb(245, 245, 213);">总结</font></h2>
1.**<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">rollup.js 适合用来打包ES 模块</font>**

**`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`2.原理:就是将`</font>`** `<font style="color:rgb(17, 17, 17);background-color:#FFC0CB;">import</font><font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`和`</font><font style="color:rgb(17, 17, 17);background-color:#FFC0CB;">export</font>``<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`替换换成了原始代码。`</font>`

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`3.摇树特性: 即打包时自动删除没有用到的代码。`</font>`

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);"></font>`

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`摇树原理:`</font>`

`<font style="color:rgb(6, 6, 7);">`即根据 `</font>`**`<font style="color:rgb(6, 6, 7);">`ES6 的import和export确认引入`</font>`**`<font style="color:rgb(6, 6, 7);">`, `</font>`**`<font style="color:rgb(6, 6, 7);">`标记未引用`</font>`**`<font style="color:rgb(6, 6, 7);">`的代码,然后进行`</font>`**`<font style="color:rgb(6, 6, 7);">`剔除`</font>`**

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);"></font>`

**`<font style="color:rgb(6, 6, 7);">`静态分析 : `</font>`**`<font style="color:rgb(6, 6, 7);">`构建工具会查看 `</font><font style="color:rgb(6, 6, 7);">import</font>``<font style="color:rgb(6, 6, 7);">` 和 `</font><font style="color:rgb(6, 6, 7);">export</font>``<font style="color:rgb(6, 6, 7);">` 语句，以确定哪些模块被导入和导出，以及它们之间的依赖关系`</font>`

**`<font style="color:rgb(6, 6, 7);">`标记未引用代码 : `</font>`**`<font style="color:rgb(6, 6, 7);">`构建工具会标记所有未被引用的代码（也称为未引用的模块或未使用的导出）。这些代码被认为是“死代码”`</font>`

**`<font style="color:rgb(6, 6, 7);">`剔除未引用代码 : `</font>`**`<font style="color:rgb(6, 6, 7);">`在生成最终的打包输出时，构建工具会基于静态分析的结果，从代码库中移除所有被标记为未引用的代码。`</font>`

`<font style="color:rgb(6, 6, 7);"></font>`

<h2 id="d3Pc8"><font style="color:rgb(0, 0, 0);background-color:rgb(245, 245, 213);">一、介绍</font></h2>
**<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">只把 rollup.js 用于打包 ES 模块</font>**<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">，这样才能充分发挥它的优势。下面你会看到，那是多么简单的一件事。</font>

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`如果你的项目使用 CommonJS 模块，不推荐使用 rollup.js，优势不大。`</font>`

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`也可以打包 CommonJS 模块。但是，这时需要经过复杂配置`</font>`

<h2 id="9db04840"><font style="color:rgb(0, 0, 0);background-color:rgb(245, 245, 213);">二、安装</font></h2>
<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">本文采用全局安装 rollup.js。</font>

```bash
$ npm install --global rollup
```

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`但是，你也可以不安装直接使用，就是把下面所有命令中的`</font><font style="color:rgb(17, 17, 17);background-color:#FFC0CB;">rollup</font>``<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`，替换成`</font><font style="color:rgb(17, 17, 17);background-color:#FFC0CB;">npx rollup</font>``<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`（参见`</font>`[`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`《npx 使用教程》`</font>`](https://www.ruanyifeng.com/blog/2019/02/npx.html)`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`）。`</font>`

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`第一次使用，可以运行下面的命令，查看一下帮助。`</font>`

```bash
$ rollup --help
# 或者
$ npx rollup --help
```

<h2 id="488b3bc0"><font style="color:rgb(0, 0, 0);background-color:rgb(245, 245, 213);">三、示例</font></h2>
<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">下面，就用 rollup.js 打包两个简单的脚本：库文件 add.js 和入口脚本 main.js。</font>

```javascript
// add.js
const PI = 3.14;
const E = 2.718;

export function addPi(x) {
  return x + PI;
}

export function addE(x) {
  return x + E; 
}
```

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`上面代码中，模块 add.js 输出了两个工具函数`</font><font style="color:rgb(17, 17, 17);background-color:#FFC0CB;">addPi()</font>``<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`和`</font><font style="color:rgb(17, 17, 17);background-color:#FFC0CB;">addE()</font>``<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`。`</font>`

```javascript
// main.js
import { addPi } from './add.js';

console.log(addPi(10));
```

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`上面代码中，入口脚本 main.js 加载了 add.js 里面的工具函数`</font><font style="color:rgb(17, 17, 17);background-color:#FFC0CB;">addPi()</font>``<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`。`</font>`

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`接着，就用 rollup.js 打包。`</font>`

```bash
$ rollup main.js
```

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`打包时只需给出入口脚本 main.js，rollup 会自动把依赖项打包进去。`</font>`

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`打包结果默认输出到屏幕。`</font>`

```javascript
const PI = 3.14;

function addPi(x) {
  return x + PI;
}

console.log(addPi(10));
```

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`可以看到，`</font><font style="color:rgb(17, 17, 17);background-color:#FFC0CB;">import</font>``<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`和`</font><font style="color:rgb(17, 17, 17);background-color:#FFC0CB;">export</font>``<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`语句都没了，被换成了原始代码。`</font>`

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`另外，函数`</font><font style="color:rgb(17, 17, 17);background-color:#FFC0CB;">addE()</font>``<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`没有打包进去，因为没有用到它。这种特性叫做摇树（tree-shaking），即打包时自动删除没有用到的代码。`</font>`

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`由于上面两点，rollup 输出的代码非常整洁，而且体积小于其他打包工具。`</font>`

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`使用参数`</font><font style="color:rgb(17, 17, 17);background-color:#FFC0CB;">--file [FILENAME]</font>``<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`，将打包结果保存到指定文件。`</font>`

```bash
$ rollup main.js --file bundle.js
```

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`上面命令将打包结果保存到 bundle.js。`</font>`

<h2 id="e196ca56"><font style="color:rgb(0, 0, 0);background-color:rgb(245, 245, 213);">四、使用注意点</font></h2>
<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">（1）如果有多个入口脚本，就依次填写它们的文件名，并使用参数</font>`<font style="color:rgb(17, 17, 17);background-color:#FFC0CB;">--dir</font>`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">指定输出目录。</font>

```bash
$ rollup m1.js m2.js --dir dist
```

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`上面命令会在目录`</font><font style="color:rgb(17, 17, 17);background-color:#FFC0CB;">dist</font>``<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`，打包生成多个文件：m1.js、m2.js、以及它们共同的依赖项（如果有的话）。`</font>`

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`（2）参数`</font><font style="color:rgb(17, 17, 17);background-color:#FFC0CB;">--format iife</font>``<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`，会把打包结果放在一个自动执行函数里面。`</font>`

```bash
$ rollup main.js --format iife
```

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`（3）如果希望打包后代码最小化，使用参数`</font><font style="color:rgb(17, 17, 17);background-color:#FFC0CB;">--compact</font>``<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`。`</font>`

```bash
$ rollup main.js --compact
```

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`另一种方法是使用专门工具。`</font>`

```bash
$ rollup main.js | uglifyjs --output bundle.js
```

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`上面命令分成两步，第一步是 rollup 打包，第二步是 uglifyjs 进行代码最小化，最后写入 bundle.js。`</font>`

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`（4）rollup 支持使用`</font>`[`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`配置文件`</font>`](https://rollupjs.org/guide/en/#configuration-files)`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`（rollup.config.js），把参数都写在里面，下面是一个例子。`</font>`

```javascript
// rollup.config.js
export default {
  input: 'main.js',
  output: {
    file: 'bundle.js',
    format: 'es'
  }
};
```

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`参数`</font><font style="color:rgb(17, 17, 17);background-color:#FFC0CB;">-c</font>``<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`启用配置文件。`</font>`

```bash
$ rollup -c
```

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`我不推荐使用配置文件，这样会增加额外的复杂性。默认场景下，命令行参数已经够用了，也更容易阅读。`</font>`

<h2 id="f2181389"><font style="color:rgb(0, 0, 0);background-color:rgb(245, 245, 213);">五、转成 CommonJS 模块</font></h2>
<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">最后，rollup 还支持 ES 模块转成 CommonJS 模块，使用参数</font>`<font style="color:rgb(17, 17, 17);background-color:#FFC0CB;">--format cjs</font>`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">就可以了。</font>

```bash
$ rollup add.js --format cjs
```

`<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">`转换后的 CommonJS 模块，代码如下。`</font>`

```javascript
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const PI = 3.14;
const E = 2.718;

function addPi(x) {
  return x + PI;
}

function addE(x) {
  return x + E; 
}

exports.addE = addE;
exports.addPi = addPi;
```
