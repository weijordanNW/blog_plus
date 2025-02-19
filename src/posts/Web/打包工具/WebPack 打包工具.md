---
title: "WebPack 打包工具"
icon: webpack
date: 2023-05-06
category:
  - 打包工具
tag:
  - 前端开发
dir:
  order: 1
---
入口（entry）、输出（output）、加载器（loaders）、插件（plugins）、模式（mode）和依赖图（dependency graph）

<h2 id="kwt2B">总结</h2>
读取 webpack.config.js 配置文件

从 入口（entry）解析所有依赖 构建 依赖图,

通过 加载器（loaders）和解析器（resolvers）处理各种资源 ;

 加载器将不同类型的资源转换成 Webpack 能够处理的模块 ( js,json)

插件（plugins）负责优化打包,热模块替换

Webpack 进行摇树 压缩代码、分割代码（code splitting）、提取公共依赖等

最后打包成 **bundles文件 输出**

<details class="lake-collapse"><summary id="ua4cf5980"><span class="ne-text">拓展</span></summary><p id="u7443d98e" class="ne-p"><span class="ne-text">Webpack 是一个现代 JavaScript 应用程序的静态模块打包器（bundler），它将应用程序中的所有依赖项（包括 JavaScript 文件、图片、CSS 等）打包成一个或多个 bundle。以下是 Webpack 打包工具的工作原理：</span></p><ol class="ne-ol"><li id="u974acea6" data-lake-index-type="0"><strong><span class="ne-text">初始化</span></strong><span class="ne-text">：当 Webpack 启动时，它会读取 </span><code class="ne-code"><span class="ne-text">webpack.config.js</span></code><span class="ne-text"> 配置文件，这个文件定义了如何处理和打包模块，以及如何处理各种类型的资源和优化打包。</span></li><li id="u2ef9b777" data-lake-index-type="0"><strong><span class="ne-text">构建依赖图</span></strong><span class="ne-text">：Webpack 从指定的入口文件（entry point）开始，递归地解析所有依赖项。这个过程会构建一个依赖图，其中包含了所有模块之间的依赖关系。Webpack 使用了多种加载器（loaders）和解析器（resolvers）来处理不同类型的资源。</span></li><li id="u16af6011" data-lake-index-type="0"><strong><span class="ne-text">编译</span></strong><span class="ne-text">：Webpack 遍历整个依赖图，对每个模块进行编译。在这个过程中，Webpack 会应用各种加载器和插件（plugins）来处理模块。加载器负责将不同类型的资源转换成 Webpack 能够处理的模块，而插件则可以执行更广泛的任务，如优化打包、提供热模块替换等。</span></li><li id="u89669daa" data-lake-index-type="0"><strong><span class="ne-text">优化</span></strong><span class="ne-text">：Webpack 对编译后的模块进行优化，包括删除死代码（tree shaking）、压缩代码、分割代码（code splitting）、提取公共依赖等。这些优化可以显著减少最终打包文件的大小，提高应用程序的加载速度。</span></li><li id="u9de64d57" data-lake-index-type="0"><strong><span class="ne-text">生成 bundles</span></strong><span class="ne-text">：Webpack 将优化后的模块输出到指定的输出目录（output directory）。这些输出文件就是应用程序的 bundles，它们可以是 JavaScript 文件、CSS 文件或其他类型的资源文件。</span></li><li id="u3339843a" data-lake-index-type="0"><strong><span class="ne-text">缓存和并行处理</span></strong><span class="ne-text">：Webpack 利用缓存来提高构建速度，如果某些模块没有发生变化，Webpack 会跳过它们的编译和优化过程。此外，Webpack 支持并行处理，可以同时处理多个模块，进一步提高构建效率。</span></li><li id="ua09220a4" data-lake-index-type="0"><strong><span class="ne-text">热模块替换（HMR）</span></strong><span class="ne-text">：Webpack 支持热模块替换，这意味着在开发过程中，当代码发生变化时，Webpack 可以无需刷新整个页面即可更新应用程序的部分内容。</span></li><li id="u33182514" data-lake-index-type="0"><strong><span class="ne-text">模式（Mode）</span></strong><span class="ne-text">：Webpack 允许配置开发模式（development）和生产模式（production）。在生产模式下，Webpack 会应用更多的优化和压缩插件，以生成更小的打包文件。</span></li></ol><p id="u4dda12cd" class="ne-p"><span class="ne-text">Webpack 的核心概念包括入口（entry）、输出（output）、加载器（loaders）、插件（plugins）、模式（mode）和依赖图（dependency graph）。通过灵活配置这些选项，开发者可以定制打包过程，以满足不同项目的需求。</span></p></details>
