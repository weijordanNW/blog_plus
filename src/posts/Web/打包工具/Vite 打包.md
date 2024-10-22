---
title: "Vite 打包工具"
icon: loop
date: 2023-05-06
category:
  - 打包工具
tag:
  - 前端开发
dir:
  order: 3
---



![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1728974050160-49e6c562-b193-44ed-a110-54e4bfed197b.png)



<h2 id="LDFn1"><font style="background-color:rgb(243, 245, 250);">vite打包原理</font></h2>


<h2 id="kwt2B">总结</h2>
<font style="color:rgb(6, 6, 7);">利用了 现代浏览器 对 ES 模块（ESM）的支持，提供了快速的 </font>**<font style="color:rgb(6, 6, 7);">冷启动 </font>**<font style="color:rgb(6, 6, 7);">和 </font>**<font style="color:rgb(6, 6, 7);">热更新</font>**<font style="color:rgb(6, 6, 7);"> (热模块替换（HMR）)。</font>

<font style="color:rgb(6, 6, 7);">开发环境下: Vite 充当一个开发服务器，直接利用浏览器对 ESM 的支持, 通过动态编译</font><font style="background-color:rgb(243, 245, 250);">动和打包对应的模块</font>

<font style="background-color:rgb(243, 245, 250);">生产环境下: 利用 </font><font style="color:rgb(6, 6, 7);">Rollup 进行打包</font>

<font style="color:rgb(6, 6, 7);">Vite 还利用 esbuild 对不常变动的第三方依赖进行预构建，并进行缓存，以提高构建速度。</font>

<font style="color:rgb(6, 6, 7);"></font>

<font style="color:rgb(6, 6, 7);"> </font>**<font style="color:rgb(6, 6, 7);">热更新: 利用 </font>****<font style="background-color:rgb(243, 245, 250);">WebSocket</font>**<font style="background-color:rgb(243, 245, 250);"> 与客户端建立连接</font>

<font style="color:rgb(6, 6, 7);">冷启动（Cold Start）通常指的是从零开始启动一个应用程序的过程。</font>





<details class="lake-collapse"><summary id="uf09ad55f"><span class="ne-text">拓展</span></summary><ol class="ne-ol"><li id="u40d61968" data-lake-index-type="0"><strong><span class="ne-text" style="color: rgb(6, 6, 7); font-size: 14px">Vite</span></strong><span class="ne-text" style="color: rgb(6, 6, 7); font-size: 14px">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u4231ebe2" data-lake-index-type="0"><span class="ne-text" style="color: rgb(6, 6, 7); font-size: 14px">Vite 是一个新型的前端构建工具，由 Vue.js 的作者尤雨溪创建。它利用了现代浏览器对 ES 模块（ESM）的支持，提供了快速的冷启动和热模块替换（HMR）。</span></li><li id="ub7329bf2" data-lake-index-type="0"><span class="ne-text" style="color: rgb(6, 6, 7); font-size: 14px">在开发环境下，Vite 充当一个开发服务器，直接利用浏览器对 ESM 的支持，按需编译模块，无需打包整个项目，从而实现了快速的服务器启动和响应。</span></li><li id="u877c08cf" data-lake-index-type="0"><span class="ne-text" style="color: rgb(6, 6, 7); font-size: 14px">在生产环境下，Vite 使用 Rollup 进行打包，生成高效的静态资源。Vite 还利用 esbuild 对不常变动的第三方依赖进行预构建，并进行缓存，以提高构建速度。</span></li><li id="ud179db73" data-lake-index-type="0"><span class="ne-text" style="color: rgb(6, 6, 7); font-size: 14px">Vite 的热更新实现是按需编译，按模块更新，而 Webpack 需要全部重新编译并更新 。</span></li></ul></ul><p id="u5a6d0d76" class="ne-p"><br></p><p id="u8757c191" class="ne-p"><span class="ne-text">Vite 是一个现代化的前端构建工具，它通过利用浏览器原生的 ESModule 支持，提供了快速的开发服务器和优化的生产构建。下面是 Vite 的打包原理和一些关键特性：</span></p><ol class="ne-ol"><li id="u8ee5feb6" data-lake-index-type="0"><strong><span class="ne-text">开发服务器</span></strong><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px">：Vite 在开发环境下不进行打包编译，而是启动一个本地的 </span><code class="ne-code"><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px">devServer</span></code><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px">。当请求页面时，Vite 会根据请求动态编译和打包对应的模块，然后返回给浏览器。这种方式使得项目启动速度非常快，理论上与项目大小无关。</span></li><li id="ub4863997" data-lake-index-type="0"><strong><span class="ne-text">利用 ESModule</span></strong><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px">：Vite 利用现代浏览器对 ESModule 语法的支持，避免了传统打包工具的静态打包和编译，从而提高了开发效率和构建速度。</span></li><li id="u410f688b" data-lake-index-type="0"><strong><span class="ne-text">生产打包</span></strong><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px">：在生产环境下，Vite 使用 Rollup 进行打包。Rollup 是一个基于 ESModule 的打包器，它生成的打包文件通常比 Webpack 小，且打包速度快。</span></li><li id="ub63391d5" data-lake-index-type="0"><strong><span class="ne-text">依赖预构建</span></strong><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px">：Vite 在预构建阶段使用 esbuild 将依赖中的 CommonJS、UMD 等模块化规范转换为 ESM，以提供给浏览器。这样可以减少模块请求次数，提高网络加载性能。</span></li><li id="u8d6f0c7e" data-lake-index-type="0"><strong><span class="ne-text">按需加载</span></strong><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px">：Vite 实现了真正的按需加载，服务器只在接受到 </span><code class="ne-code"><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px">import</span></code><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px"> 请求时才会编译对应的文件，并将 ESM 源码返回给浏览器。</span></li><li id="u0734353a" data-lake-index-type="0"><strong><span class="ne-text">缓存策略</span></strong><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px">：Vite 利用 HTTP 缓存和文件系统缓存来提升性能。依赖部分使用强缓存，源码部分使用协商缓存，以提升页面打开速度。</span></li><li id="u749f1fd8" data-lake-index-type="0"><strong><span class="ne-text">重写模块路径</span></strong><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px">：Vite 使用 </span><code class="ne-code"><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px">es-module-lexer</span></code><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px"> 扫描 </span><code class="ne-code"><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px">import</span></code><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px"> 语法，并通过 </span><code class="ne-code"><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px">magic-string</span></code><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px"> 重写模块的引入路径，以适应浏览器的模块加载方式。</span></li><li id="u1ce2473f" data-lake-index-type="0"><strong><span class="ne-text">热更新</span></strong><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px">：Vite 通过 WebSocket 与客户端建立连接，实现热模块替换（HMR）。当文件被修改时，服务器会通知客户端进行相应的代码更新。</span></li><li id="uf618ebb8" data-lake-index-type="0"><strong><span class="ne-text">配置简洁</span></strong><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px">：Vite 的配置非常简洁，可以轻松地配置和定制，提供了一个易于使用的 CLI，可以轻松地创建和管理 Vite 项目。</span></li><li id="u9087a21a" data-lake-index-type="0"><strong><span class="ne-text">社区支持</span></strong><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px">：Vite 拥有庞大的社区支持，有许多开源项目和插件可供使用，满足用户的不同需求。</span></li></ol><p id="uc9b5da35" class="ne-p"><span class="ne-text" style="color: var(--msh-chat-list-user-color); background-color: rgb(243, 245, 250); font-size: 14px">总的来说，Vite 的打包原理主要依赖于现代浏览器对 ESModule 的支持，通过动态编译和打包以及优化的缓存策略，提供了快速的开发体验和高效的生产构建。</span></p><p id="u47984af5" class="ne-p"><span class="ne-text" style="color: rgb(6, 6, 7); background-color: rgb(243, 245, 250); font-size: 14px"><br /></span></p></details>
