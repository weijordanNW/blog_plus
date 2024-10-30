import{_ as e,o as t,c as a,f as r}from"./app-vRjwnwzg.js";const p={},o=r('<blockquote><p>ReactNative 是 Facebook 开发的一套用于开发跨平台 App 的技术框架</p><p>相比传统开发方式解决了一些痛点：</p><p>1.难以复用</p><p>2.多平台多次开发</p><p>3.效率低下</p><p>效率带来的缺点也可想而知就是一些原生可以实现的复杂操作，RN 做不到</p></blockquote><h2 id="前置知识" tabindex="-1"><a class="header-anchor" href="#前置知识"><span>前置知识</span></a></h2><p>React Native 看起来很像 React，只不过其基础组件是原生组件而非 web 组件。要理解 React Native 应用的基本结构，首先需要了解一些基本的 React 的概念，比如 JSX 语法、组件、<code>state</code>状态以及<code>props</code>属性。如果你已经了解了 React，那么还需要掌握一些 React Native 特有的知识，比如原生组件的使用。</p><h2 id="语言选择" tabindex="-1"><a class="header-anchor" href="#语言选择"><span>语言选择</span></a></h2><p>typeScript 是<a href="https://baike.baidu.com/item/JavaScript" target="_blank" rel="noopener noreferrer">JavaScript</a>的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的<a href="https://baike.baidu.com/item/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B" target="_blank" rel="noopener noreferrer">面向对象编程</a>。</p><p>本次开发使用 typeScript 作为 ReactNative 的开发语言，对比 JavaScript 有一些优势</p><h4 id="一、ts-的静态检查" tabindex="-1"><a class="header-anchor" href="#一、ts-的静态检查"><span>一、ts 的静态检查</span></a></h4><p>参考<a href="https://www.zhihu.com/question/64563945" target="_blank" rel="noopener noreferrer">为什么要使用 TypeScript？有哪些情景请简单介绍一下，或者来个例子?</a><br> TS 对 JS 的改进主要是静态类型检查，静态类型检查有何意义？标准答案是“静态类型更有利于构建大型应用”。为什么静态类型有利于构建大型应用？我总结，利在两点。</p><p>其一，静态类型检查可以做到 early fail，即你编写的代码即使没有被执行到，一旦你编写代码时发生类型不匹配，语言在编译阶段（解释执行也一样，可以在运行前）即可发现。针对大型应用，测试调试分支覆盖困难，很多代码并不一定能够在所有条件下执行到。而假如你的代码简单到任何改动都可以从 UI 体现出来，这确实跟大型应用搭不上关系，那么静态类型检查确实没什么作用。</p><p>配合 vscode 的<strong>TSLint</strong>插件可以很好的实现静态语法检查</p><h4 id="二、-类型就是最好的注释。" tabindex="-1"><a class="header-anchor" href="#二、-类型就是最好的注释。"><span>二、 类型就是最好的注释。</span></a></h4><p>静态类型对阅读代码是友好的，针对大型应用，方法众多，调用关系复杂，不可能每个函数都有人编写细致的文档，所以静态类型就是非常重要的提示和约束。而假如你的代码像 jQuery 这样所有函数基本全是 API，根本没什么内部函数，而且逻辑关系看起来显而易见，这确实跟大型应用搭不上关系，那么静态类型对阅读代码确实也没什么帮助。总的来说，现代编程语言设计，很多特性已经有非常成熟的理论支持了，如果我们重视计算机基础，那么一些语言的适用场景就像是拼积木，可以用几句话概括。像是 TS 对 JS 这样，只是单一特性变化。</p><h4 id="ps-typescript-本质上还是一个解释执行的脚本语言-和-javascript-一样没有编译过程" tabindex="-1"><a class="header-anchor" href="#ps-typescript-本质上还是一个解释执行的脚本语言-和-javascript-一样没有编译过程"><span>PS:typeScript 本质上还是一个解释执行的脚本语言，和 JavaScript 一样没有编译过程</span></a></h4><p>同时也不是强类型语言，**是「静态类型检查」的「弱类型」**语言</p><p>真正的强类型语言有：java，swift，C#</p><h4 id="三、-其他语法特性" tabindex="-1"><a class="header-anchor" href="#三、-其他语法特性"><span>三、 其他语法特性</span></a></h4><ol><li><p>TypeScript 工具使重构更变的容易、快捷。</p></li><li><p>TypeScript 引入了 JavaScript 中没有的“类”概念。</p></li><li><p>引入了 public，private，protected 访问控制符代替下划线私有</p></li><li><p>支持泛型和命名空间</p></li><li><p>TypeScript 中引入了模块的概念，可以把声明、数据、函数和类封装在模块中。</p></li><li><p>支持接口的定义</p><p>……</p></li></ol><h2 id="jsx" tabindex="-1"><a class="header-anchor" href="#jsx"><span>JSX</span></a></h2><p><a href="https://facebook.github.io/jsx/" target="_blank" rel="noopener noreferrer">JSX</a>是一种嵌入式的类似 XML 的语法。 它可以被转换成合法的 JavaScript，尽管转换的语义是依据不同的实现而定的。 JSX 因<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>框架而流行，但也存在其它的实现。 TypeScript 支持内嵌，类型检查以及将 JSX 直接编译为 JavaScript。</p><p>想要使用 JSX 必须做两件事：</p><ol><li>给文件一个<code>.tsx</code>扩展名</li><li>启用<code>jsx</code>选项</li></ol><p>TypeScript 具有三种 JSX 模式：<code>preserve</code>，<code>react</code>和<code>react-native</code>。 这些模式只在代码生成阶段起作用 - 类型检查并不受影响。 在<code>preserve</code>模式下生成代码中会保留 JSX 以供后续的转换操作使用（比如：<a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">Babel</a>）。 另外，输出文件会带有<code>.jsx</code>扩展名。 <code>react</code>模式会生成<code>React.createElement</code>，在使用前不需要再进行转换操作了，输出文件的扩展名为<code>.js</code>。 <code>react-native</code>相当于<code>preserve</code>，它也保留了所有的 JSX，但是输出文件的扩展名是<code>.js</code>。</p><p>参考资料：</p><p><a href="https://reactnative.cn/docs/layout-props/#justifycontent" target="_blank" rel="noopener noreferrer">官方文档</a></p><p><a href="https://www.tslang.cn/docs/home.html" target="_blank" rel="noopener noreferrer">typeScriptg 中文文档</a></p><p><a href="https://www.imooc.com/video/14286" target="_blank" rel="noopener noreferrer">ReactNative 入门与进阶</a></p><p><a href="%5Bhttps://docs.nativebase.io%5D(https://docs.nativebase.io/)">https://docs.nativebase.io </a></p>',27),c=[o];function i(n,s){return t(),a("div",null,c)}const d=e(p,[["render",i],["__file","react1.html.vue"]]),h=JSON.parse('{"path":"/posts/cross-platform/ReactNative/react1.html","title":"ReactNative介绍","lang":"zh-CN","frontmatter":{"title":"ReactNative介绍","description":"前置知识点介绍","date":"2019-08-24T09:38:39.000Z","order":1,"category":["前端跨平台"],"tag":["前端","React Native"],"head":[["meta",{"property":"og:url","content":"https://weijodan.top/posts/cross-platform/ReactNative/react1.html"}],["meta",{"property":"og:site_name","content":"Mr.子冥"}],["meta",{"property":"og:title","content":"ReactNative介绍"}],["meta",{"property":"og:description","content":"前置知识点介绍"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T09:19:33.000Z"}],["meta",{"property":"article:author","content":"子冥"}],["meta",{"property":"article:tag","content":"前端"}],["meta",{"property":"article:tag","content":"React Native"}],["meta",{"property":"article:published_time","content":"2019-08-24T09:38:39.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-18T09:19:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ReactNative介绍\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-08-24T09:38:39.000Z\\",\\"dateModified\\":\\"2024-10-18T09:19:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"子冥\\",\\"url\\":\\"https://weijodan.top\\"}]}"]]},"headers":[{"level":2,"title":"前置知识","slug":"前置知识","link":"#前置知识","children":[]},{"level":2,"title":"语言选择","slug":"语言选择","link":"#语言选择","children":[]},{"level":2,"title":"JSX","slug":"jsx","link":"#jsx","children":[]}],"git":{"createdTime":1729243173000,"updatedTime":1729243173000,"contributors":[{"name":"weijordan","email":"12012972+weijordan@user.noreply.gitee.com","commits":1}]},"readingTime":{"minutes":4.16,"words":1249},"filePathRelative":"posts/cross-platform/ReactNative/react1.md","localizedDate":"2019年8月24日","excerpt":"<blockquote>\\n<p>ReactNative 是 Facebook 开发的一套用于开发跨平台 App 的技术框架</p>\\n<p>相比传统开发方式解决了一些痛点：</p>\\n<p>1.难以复用</p>\\n<p>2.多平台多次开发</p>\\n<p>3.效率低下</p>\\n<p>效率带来的缺点也可想而知就是一些原生可以实现的复杂操作，RN 做不到</p>\\n</blockquote>\\n<h2>前置知识</h2>\\n<p>React Native 看起来很像 React，只不过其基础组件是原生组件而非 web 组件。要理解 React Native 应用的基本结构，首先需要了解一些基本的 React 的概念，比如 JSX 语法、组件、<code>state</code>状态以及<code>props</code>属性。如果你已经了解了 React，那么还需要掌握一些 React Native 特有的知识，比如原生组件的使用。</p>"}');export{d as comp,h as data};
