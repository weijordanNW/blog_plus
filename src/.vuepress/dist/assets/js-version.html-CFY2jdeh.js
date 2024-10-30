import{_ as e,o as t,c as r,f as a}from"./app-vRjwnwzg.js";const i={},p=a('<p>JavaScript 有着很奇怪的命名史。</p><p>1995 年，它作为网景浏览器（Netscape Navigator）的一部分首次发布，网景给这个新语言命名为 LiveScript。一年后，为了搭上当时媒体热炒 Java 的顺风车，临时改名为了 JavaScript <em>（当然，Java 和 JavaScript 的关系，就和雷锋和雷锋塔一样 —— 并没有什么关系）</em></p><p><small class="img-hint">歪果仁的笑话怎么一点都不好笑</small></p><blockquote><p>译者注：<a href="https://en.wikipedia.org/wiki/JavaScript#History" target="_blank" rel="noopener noreferrer">wikipedia 的 JavaScript 词条</a> 更详细的叙述了这段历史</p></blockquote><p>1996 年，网景将 JavaScript 提交给 <a href="http://www.ecma-international.org/" target="_blank" rel="noopener noreferrer">ECMA International（欧洲计算机制造商协会）</a> 进行标准化，并最终确定出新的语言标准，它就是 ECMAScript。自此，ECMAScript 成为所有 JavaScript 实现的基础，不过，由于 JavaScript 名字的历史原因和市场原因（很显然 ECMAScript 这个名字并不令人喜欢……），现实中我们只用 ECMAScript 称呼标准，平时都还是使用 JavaScript 来称呼这个语言。</p><blockquote><p>术语（译者注）：</p><ul><li><em>标准（Standard）</em>： 用于定义与其他事物区别的一套规则</li><li><em>实现（Implementation）</em>： 某个标准的具体实施/真实实践</li></ul></blockquote><p>不过，JavaScript 开发者们并不怎么在乎这些，因为在诞生之后的 15 年里，ECMAScript 并没有多少变化，而且现实中的很多实现都已经和标准大相径庭。其实在第一版的 ECMAScript 发布后，很快又跟进发布了两个版本，但是自从 1999 年 ECMAScript 3 发布后，十年内都没有任何改动被成功添加到官方规范里。取而代之的，是各大浏览器厂商们争先进行自己的语言拓展，web 开发者们别无选择只能去尝试并且支持这些 API。即使是在 2009 年 ECMAScript 5 发布之后，仍然用了数年这些新规范才得到了浏览器的广泛支持，可是大部分开发者还是写着 ECMAScript 3 风格的代码，并不觉得有必要去了解这些规范。</p><blockquote><p>译者注：<a href="https://en.wikipedia.org/wiki/ECMAScript#4th_Edition_.28abandoned.29" target="_blank" rel="noopener noreferrer">ECMAScript 第四版草案</a>由于太过激进而被抛弃，Adobe 的 <a href="https://en.wikipedia.org/wiki/ActionScript" target="_blank" rel="noopener noreferrer">ActionScript 3.0</a> 是 ECMAScript edition 4 的唯一实现（ Flash 差点就统一 Web 了）</p></blockquote><p>到了 2012 年，事情突然开始有了转变。大家开始推动停止对旧版本 IE 浏览器的支持，用 ECMAScript 5 (ES5) 风格来编写代码也变得更加可行。与此同时，一个新的 ECMAScript 规范也开始启动。到了这时，大家开始逐渐习惯以对 ECMAScript 规范的版本支持程度来形容各种 JavaScript 实现。在正式被指名为 ECMAScript 第 6 版 (ES6) 之前，这个新的标准原本被称为 ES.Harmony（和谐）。2015 年，负责制定 ECMAScript 规范草案的委员会 TC39 决定将定义新标准的制度改为一年一次，这意味着每个新特性一旦被批准就可以添加，而不像以往一样，规范只有在整个草案完成，所有特性都没问题后才能被定稿。因此，ECMAScript 第 6 版在六月份公布之前，又被重命名为了 ECMAScript 2015（ES2015）</p><p>目前，仍然有很多新的 JavaScript 特性或语法正在提议中，包括 <a href="https://github.com/wycats/javascript-decorators" target="_blank" rel="noopener noreferrer">decorators（装饰者）</a>，<a href="https://github.com/lukehoban/ecmascript-asyncawait" target="_blank" rel="noopener noreferrer">async-await（async-await 异步编程模型）</a> 和 <a href="https://github.com/jeffmo/es-class-properties" target="_blank" rel="noopener noreferrer">static class properties（静态类属性）</a>。它们通常被称为 ES7，ES2016 或者 ES.Next 的特性，不过实际上它们只能被称作提案或者说可能性，毕竟 ES2016 的规范还没有完成，有可能全部都会引入，也有可能一个都没有。TC39 把一个提案分为 4 个阶段，你可以在 <a href="https://babeljs.io/docs/usage/experimental/" target="_blank" rel="noopener noreferrer">Babel 的官网</a> 上查看各个提案目前都在哪个阶段了。</p><p>所以，我们该如何使用这一大堆术语呢？下面的列表或许能帮助到你：</p><ul><li><strong>ECMAScript</strong>：一个由 ECMA International 进行标准化，TC39 委员会进行监督的语言。通常用于指代标准本身。</li><li><strong>JavaScript</strong>：ECMAScript 标准的各种实现的最常用称呼。这个术语并不局限于某个特定版本的 ECMAScript 规范，并且可能被用于任何不同程度的任意版本的 ECMAScript 的实现。</li><li><strong>ECMAScript 5 (ES5)</strong>：ECMAScript 的第五版修订，于 2009 年完成标准化。这个规范在所有现代浏览器中都相当完全的实现了。</li><li><strong>ECMAScript 6 (ES6) / ECMAScript 2015 (ES2015)</strong>：ECMAScript 的第六版修订，于 2015 年完成标准化。这个标准被部分实现于大部分现代浏览器。可以查阅<a href="http://kangax.github.io/compat-table/es6/" target="_blank" rel="noopener noreferrer">这张兼容性表</a>来查看不同浏览器和工具的实现情况。</li><li><strong>ECMAScript 2016</strong>：预计的第七版 ECMAScript 修订，计划于明年夏季发布。这份规范具体将包含哪些特性还没有最终确定</li><li><strong>ECMAScript Proposals</strong>：被考虑加入未来版本 ECMAScript 标准的特性与语法提案，他们需要经历五个阶段：Strawman（稻草人），Proposal（提议），Draft（草案），Candidate（候选）以及 Finished （完成）。</li></ul><p>在这整个 Blog 中，我将把目前的 ECMAScript 版本称作 ES6（因为这是大部分开发者最习以为常的），把明年的规范称作 ES2016（因为，与 ES6/ES2015 不同，这个名字将在整个标准化过程中沿用）并且将那些还没有成为 ECMAScript 定稿或草案的未来语言概念称为 ECMAScript 提案或者 JavaScript 提案。我将尽我所能在任何可能引起困惑的场合沿用这篇文章。</p><h4 id="一些资源" tabindex="-1"><a class="header-anchor" href="#一些资源"><span>一些资源</span></a></h4><ul><li>TC39 的 <a href="https://github.com/tc39/ecma262" target="_blank" rel="noopener noreferrer">Github 仓库</a>上可以看到所有目前公开的提案</li><li>如果你还不熟悉 ES6，Babel 有一个<a href="https://babeljs.io/docs/learn-es2015/" target="_blank" rel="noopener noreferrer">很不错的特性概览</a></li><li>如果你希望深入 ES6，这里有两本很不错的书： Axel Rauschmayer 的 <a href="http://exploringjs.com/" target="_blank" rel="noopener noreferrer">Exploring ES6</a>和 Nicholas Zakas 的 <a href="https://leanpub.com/understandinges6" target="_blank" rel="noopener noreferrer">Understanding ECMAScript 6</a>。Axel 的博客 <a href="http://www.2ality.com/" target="_blank" rel="noopener noreferrer">2ality</a> 也是很不错的 ES6 资源</li></ul><p><small class="img-hint">来学 JavaScript 吧！</small></p><h4 id="著作权声明" tabindex="-1"><a class="header-anchor" href="#著作权声明"><span>著作权声明</span></a></h4><p>本文译自 <a href="http://benmccormick.org/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning/" target="_blank" rel="noopener noreferrer">ES5, ES6, ES2016, ES.Next: What&#39;s going on with JavaScript versioning?</a><br> 译者 <a href="http://weibo.com/huxpro" target="_blank" rel="noopener noreferrer">黄玄</a>，首次发布于 <a href="http://huangxuan.me" target="_blank" rel="noopener noreferrer">Hux Blog</a>，转载请保留以上链接</p>',18),o=[p];function n(c,l){return t(),r("div",null,o)}const S=e(i,[["render",n],["__file","js-version.html.vue"]]),h=JSON.parse('{"path":"/posts/Web/JavaScript/js-version.html","title":"JavaScript ES6","lang":"zh-CN","frontmatter":{"title":"JavaScript ES6","icon":"es6","date":"2015-09-22T00:00:00.000Z","category":["JavaScript"],"tag":["JavaScript","翻译"],"description":"JavaScript 有着很奇怪的命名史。 1995 年，它作为网景浏览器（Netscape Navigator）的一部分首次发布，网景给这个新语言命名为 LiveScript。一年后，为了搭上当时媒体热炒 Java 的顺风车，临时改名为了 JavaScript （当然，Java 和 JavaScript 的关系，就和雷锋和雷锋塔一样 —— 并没有什么...","head":[["meta",{"property":"og:url","content":"https://weijodan.top/posts/Web/JavaScript/js-version.html"}],["meta",{"property":"og:site_name","content":"Mr.子冥"}],["meta",{"property":"og:title","content":"JavaScript ES6"}],["meta",{"property":"og:description","content":"JavaScript 有着很奇怪的命名史。 1995 年，它作为网景浏览器（Netscape Navigator）的一部分首次发布，网景给这个新语言命名为 LiveScript。一年后，为了搭上当时媒体热炒 Java 的顺风车，临时改名为了 JavaScript （当然，Java 和 JavaScript 的关系，就和雷锋和雷锋塔一样 —— 并没有什么..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T09:19:33.000Z"}],["meta",{"property":"article:author","content":"子冥"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:tag","content":"翻译"}],["meta",{"property":"article:published_time","content":"2015-09-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-18T09:19:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript ES6\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2015-09-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-18T09:19:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"子冥\\",\\"url\\":\\"https://weijodan.top\\"}]}"]]},"headers":[],"git":{"createdTime":1729243173000,"updatedTime":1729243173000,"contributors":[{"name":"weijordan","email":"12012972+weijordan@user.noreply.gitee.com","commits":1}]},"readingTime":{"minutes":5.24,"words":1572},"filePathRelative":"posts/Web/JavaScript/js-version.md","localizedDate":"2015年9月22日","excerpt":"<p>JavaScript 有着很奇怪的命名史。</p>\\n<p>1995 年，它作为网景浏览器（Netscape Navigator）的一部分首次发布，网景给这个新语言命名为 LiveScript。一年后，为了搭上当时媒体热炒 Java 的顺风车，临时改名为了 JavaScript <em>（当然，Java 和 JavaScript 的关系，就和雷锋和雷锋塔一样 —— 并没有什么关系）</em></p>\\n<p><small class=\\"img-hint\\">歪果仁的笑话怎么一点都不好笑</small></p>\\n<blockquote>\\n<p>译者注：<a href=\\"https://en.wikipedia.org/wiki/JavaScript#History\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">wikipedia 的 JavaScript 词条</a> 更详细的叙述了这段历史</p>\\n</blockquote>","autoDesc":true}');export{S as comp,h as data};
