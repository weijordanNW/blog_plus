import{_ as e,o as t,c as l,e as o}from"./app-L2UBD6gU.js";const r={},a=o('<blockquote><p>“Yeah It&#39;s on. ”</p></blockquote><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>Oragekk 的 Blog 就这么开通了。</p><p><a href="#build">跳过废话，直接看技术实现 </a></p><p>2016 年，11 月 总算有个地方可以好好写点东西了。</p><p>作为一个程序员， 看多了别人的 Blog 这种轮子都是酷炫的不要不要的，自己其实一种想搞一个，前两天发现了 GitHub Pages +Jekyll 的技术方案，一下子就上瘾了。</p><p>终于可以有自己的自留地了，之前一直在简书上写一些技术类的文章，这次可以有个自己的地盘，想怎么写就怎么写。😝 哈哈。不过这些前端的东西对我也是一种挑战，似懂非懂的看着模板，和一堆 js+css+html 的代码。。一顿头大。。对照着效果，一步步自己改。改好了之后也是蛮有成就感的嘛</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span><p id="build"></p></span></a></h2><h2 id="正文" tabindex="-1"><a class="header-anchor" href="#正文"><span>正文</span></a></h2><p>接下来说说搭建这个博客的技术细节。</p><p>正好之前就有关注过 <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages</a> + <a href="http://jekyllrb.com/" target="_blank" rel="noopener noreferrer">Jekyll</a> 快速 Building Blog 的技术方案，非常轻松时尚。</p><p>其优点非常明显：</p><ul><li><strong>Markdown</strong> 带来的优雅写作体验</li><li>非常熟悉的 Git workflow ，<strong>Git Commit 即 Blog Post</strong></li><li>利用 GitHub Pages 的域名和免费无限空间，不用自己折腾主机 <ul><li>如果需要自定义域名，也只需要简单改改 DNS 加个 CNAME 就好了</li></ul></li><li>Jekyll 的自定制非常容易，基本就是个模版引擎</li><li>Jekyll 的安装倒是不难，难的是安装它之前的一堆安装</li></ul><hr><p>配置的过程中也没遇到什么坑，基本就是 Git 的流程，相当顺手</p><p>大的 Jekyll 主题直接 fork 了 Hux Blog<br> 本地调试环境需要 <code>gem install jekyll</code>，结果 rubygem 的源居然被墙了……后来手动改成了我大淘宝的镜像源才成功，现在淘宝的镜像地址也重定向了到<a href="http://gems.ruby-china.org/" target="_blank" rel="noopener noreferrer">gems.ruby-china.org</a> 公司的新电脑，正好连带配环境，装 rvm，ruby，gems，jekyll。搞定。不过最后的本地预览还是没搞好。索性我就改了 commit，去站点看效果。</p><p>之后看到域名还是 github 提供的固定域名，心里觉得不够高大上，果断万网去买了一个。还很便宜咯。。不过价格就不告诉你们了 😜</p><hr><p>以下引用自 Theme 作者</p><blockquote><p>Theme 的 CSS 是基于 Bootstrap 定制的，看得不爽的地方直接在 Less 里改就好了（平时更习惯 SCSS 些），**不过其实我一直觉得 Bootstrap 在移动端的体验做得相当一般，比我在淘宝参与的团队 CSS 框架差多了……**所以为了体验，也补了不少 CSS 进去</p></blockquote><blockquote><p>最后就进入了耗时反而最长的<strong>做图、写字</strong>阶段，也算是进入了<strong>写博客</strong>的正轨，因为是类似 Hack Day 的方式去搭这个站的，所以折腾折腾着大半夜就过去了。</p></blockquote><blockquote><p>第二天考虑中文字体的渲染，fork 了 <a href="http://www.typeisbeautiful.com/" target="_blank" rel="noopener noreferrer">Type is Beautiful</a> 的 <code>font</code> CSS，调整了字号，适配了 Win 的渣渲染，中英文混排效果好多了。</p></blockquote><hr><h2 id="后记" tabindex="-1"><a class="header-anchor" href="#后记"><span>后记</span></a></h2><p>回顾这个博客的诞生，纯粹是出于个人兴趣。为了有个块自留地，可以无聊了写写，不开心了写写。</p><p>如果你恰好逛到了这里，希望你也能喜欢这个博客</p><p>—— 黄坤 后记于 2016.11</p>',27),n=[a];function p(i,s){return t(),l("div",null,n)}const h=e(r,[["render",p],["__file","jekyll.html.vue"]]),g=JSON.parse(`{"path":"/blog/jekyll.html","title":"Jekyll旧站回忆","lang":"zh-CN","frontmatter":{"title":"Jekyll旧站回忆","icon":"read","date":"2016-11-03T12:00:00.000Z","category":["Blog"],"tag":["Blog"],"description":"“Yeah It's on. ” 前言 Oragekk 的 Blog 就这么开通了。 跳过废话，直接看技术实现 2016 年，11 月 总算有个地方可以好好写点东西了。 作为一个程序员， 看多了别人的 Blog 这种轮子都是酷炫的不要不要的，自己其实一种想搞一个，前两天发现了 GitHub Pages +Jekyll 的技术方案，一下子就上瘾了。 终于...","head":[["meta",{"property":"og:url","content":"https://oragekk.me/blog/jekyll.html"}],["meta",{"property":"og:site_name","content":"Mr.子冥"}],["meta",{"property":"og:title","content":"Jekyll旧站回忆"}],["meta",{"property":"og:description","content":"“Yeah It's on. ” 前言 Oragekk 的 Blog 就这么开通了。 跳过废话，直接看技术实现 2016 年，11 月 总算有个地方可以好好写点东西了。 作为一个程序员， 看多了别人的 Blog 这种轮子都是酷炫的不要不要的，自己其实一种想搞一个，前两天发现了 GitHub Pages +Jekyll 的技术方案，一下子就上瘾了。 终于..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T09:19:33.000Z"}],["meta",{"property":"article:author","content":"子冥"}],["meta",{"property":"article:tag","content":"Blog"}],["meta",{"property":"article:published_time","content":"2016-11-03T12:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-18T09:19:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jekyll旧站回忆\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2016-11-03T12:00:00.000Z\\",\\"dateModified\\":\\"2024-10-18T09:19:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"子冥\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]},{"level":2,"title":"正文","slug":"正文","link":"#正文","children":[]},{"level":2,"title":"后记","slug":"后记","link":"#后记","children":[]}],"git":{"createdTime":1729243173000,"updatedTime":1729243173000,"contributors":[{"name":"weijordan","email":"12012972+weijordan@user.noreply.gitee.com","commits":1}]},"readingTime":{"minutes":2.88,"words":865},"filePathRelative":"blog/jekyll.md","localizedDate":"2016年11月3日","excerpt":"<blockquote>\\n<p>“Yeah It's on. ”</p>\\n</blockquote>\\n<h2>前言</h2>\\n<p>Oragekk 的 Blog 就这么开通了。</p>\\n<p><a href=\\"#build\\">跳过废话，直接看技术实现 </a></p>\\n<p>2016 年，11 月 总算有个地方可以好好写点东西了。</p>\\n<p>作为一个程序员， 看多了别人的 Blog 这种轮子都是酷炫的不要不要的，自己其实一种想搞一个，前两天发现了 GitHub Pages +Jekyll 的技术方案，一下子就上瘾了。</p>\\n<p>终于可以有自己的自留地了，之前一直在简书上写一些技术类的文章，这次可以有个自己的地盘，想怎么写就怎么写。😝 哈哈。不过这些前端的东西对我也是一种挑战，似懂非懂的看着模板，和一堆 js+css+html 的代码。。一顿头大。。对照着效果，一步步自己改。改好了之后也是蛮有成就感的嘛</p>","autoDesc":true}`);export{h as comp,g as data};
