import{_ as s,o as a,c as n,f as i}from"./app-w7npIfl5.js";const l={},r=i(`<blockquote><p>通过 js 判断 moblie 端和 pc 端进而加载不同的 css 或者 js</p></blockquote><h2 id="废话不多说-上代码" tabindex="-1"><a class="header-anchor" href="#废话不多说-上代码"><span>废话不多说，上代码</span></a></h2><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">script</span><span style="color:#D19A66;--shiki-dark:#D19A66;font-style:italic;--shiki-dark-font-style:italic;"> type</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;text/javascript&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">function browserRedirect() </span><span style="color:#C678DD;--shiki-dark:#C678DD;">{</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">var</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> sUserAgent</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> navigator</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">userAgent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">toLowerCase</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">var</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> bIsIpad</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> sUserAgent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">match</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">/ipad/</span><span style="color:#C678DD;--shiki-dark:#C678DD;">i</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;ipad&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">var</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> bIsIphoneOs</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> sUserAgent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">match</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">/iphone os/</span><span style="color:#C678DD;--shiki-dark:#C678DD;">i</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;iphone os&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">var</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> bIsMidp</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> sUserAgent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">match</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">/midp/</span><span style="color:#C678DD;--shiki-dark:#C678DD;">i</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;midp&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">var</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> bIsUc7</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> sUserAgent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">match</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">/rv:1.2.3.4/</span><span style="color:#C678DD;--shiki-dark:#C678DD;">i</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;rv:1.2.3.4&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">var</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> bIsUc</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> sUserAgent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">match</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">/ucweb/</span><span style="color:#C678DD;--shiki-dark:#C678DD;">i</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;ucweb&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">var</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> bIsAndroid</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> sUserAgent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">match</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">/android/</span><span style="color:#C678DD;--shiki-dark:#C678DD;">i</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;android&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">var</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> bIsCE</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> sUserAgent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">match</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">/windows ce/</span><span style="color:#C678DD;--shiki-dark:#C678DD;">i</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;windows ce&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">var</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> bIsWM</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> sUserAgent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">match</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">/windows mobile/</span><span style="color:#C678DD;--shiki-dark:#C678DD;">i</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;windows mobile&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// document.writeln(&quot;您的浏览设备为：&quot;);</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E06C75;--shiki-dark:#E06C75;">bIsIpad</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> bIsIphoneOs</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> bIsMidp</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> bIsUc7</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> bIsUc</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> bIsAndroid</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> bIsCE</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ||</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> bIsWM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// alert(&quot;手机浏览！&quot;);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">} </span><span style="color:#E06C75;--shiki-dark:#E06C75;">else</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// alert(&quot;PC浏览！&quot;);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">document.write(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&lt;script type=&#39;text/javascript&#39; size=&#39;150&#39; alpha=&#39;0.8&#39; zIndex=&#39;-10&#39; src=&#39;../js/dist/ribbon.js&#39;&gt;&lt;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\/</span><span style="color:#98C379;--shiki-dark:#98C379;">script&gt;&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">document.write(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&lt;script type=&#39;text/javascript&#39; color=&#39;0,188,212&#39; opacity=&#39;0.7&#39; zIndex=&#39;-2&#39; count=&#39;99&#39; src=&#39;http://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js&#39;&gt;&lt;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\/</span><span style="color:#98C379;--shiki-dark:#98C379;">script&gt;&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">	}</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">browserRedirect();</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需要注意的是字符转义和引号嵌套的问题" tabindex="-1"><a class="header-anchor" href="#需要注意的是字符转义和引号嵌套的问题"><span>需要注意的是字符转义和引号嵌套的问题</span></a></h3>`,4),p=[r];function o(e,t){return a(),n("div",null,p)}const B=s(l,[["render",o],["__file","judgment.html.vue"]]),c=JSON.parse(`{"path":"/posts/Web/JavaScript/judgment.html","title":"通过UserAgent判断设备","lang":"zh-CN","frontmatter":{"title":"通过UserAgent判断设备","icon":"mobile","date":"2020-02-07T00:00:00.000Z","category":["JavaScript"],"tag":["JavaScript","前端开发"],"description":"通过 js 判断 moblie 端和 pc 端进而加载不同的 css 或者 js 废话不多说，上代码 需要注意的是字符转义和引号嵌套的问题","head":[["meta",{"property":"og:url","content":"https://weijordan.com/posts/Web/JavaScript/judgment.html"}],["meta",{"property":"og:site_name","content":"Mr.子冥"}],["meta",{"property":"og:title","content":"通过UserAgent判断设备"}],["meta",{"property":"og:description","content":"通过 js 判断 moblie 端和 pc 端进而加载不同的 css 或者 js 废话不多说，上代码 需要注意的是字符转义和引号嵌套的问题"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-01T06:19:00.000Z"}],["meta",{"property":"article:author","content":"子冥"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:tag","content":"前端开发"}],["meta",{"property":"article:published_time","content":"2020-02-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-01T06:19:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"通过UserAgent判断设备\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-07T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-01T06:19:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"子冥\\",\\"url\\":\\"https://weijordan.com\\"}]}"]]},"headers":[{"level":2,"title":"废话不多说，上代码","slug":"废话不多说-上代码","link":"#废话不多说-上代码","children":[{"level":3,"title":"需要注意的是字符转义和引号嵌套的问题","slug":"需要注意的是字符转义和引号嵌套的问题","link":"#需要注意的是字符转义和引号嵌套的问题","children":[]}]}],"git":{"createdTime":1729243173000,"updatedTime":1730441940000,"contributors":[{"name":"weijordan","email":"12012972+weijordan@user.noreply.gitee.com","commits":2}]},"readingTime":{"minutes":0.64,"words":191},"filePathRelative":"posts/Web/JavaScript/judgment.md","localizedDate":"2020年2月7日","excerpt":"<blockquote>\\n<p>通过 js 判断 moblie 端和 pc 端进而加载不同的 css 或者 js</p>\\n</blockquote>\\n<h2>废话不多说，上代码</h2>\\n<div class=\\"language-js line-numbers-mode\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">script</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66;font-style:italic;--shiki-dark-font-style:italic\\"> type</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"text/javascript\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">function browserRedirect() </span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">var</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> sUserAgent</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> navigator</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">userAgent</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">toLowerCase</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">var</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> bIsIpad</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> sUserAgent</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">match</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">/ipad/</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">i</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">==</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"ipad\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">var</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> bIsIphoneOs</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> sUserAgent</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">match</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">/iphone os/</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">i</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">==</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"iphone os\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">var</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> bIsMidp</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> sUserAgent</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">match</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">/midp/</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">i</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">==</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"midp\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">var</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> bIsUc7</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> sUserAgent</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">match</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">/rv:1.2.3.4/</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">i</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">==</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"rv:1.2.3.4\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">var</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> bIsUc</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> sUserAgent</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">match</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">/ucweb/</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">i</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">==</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"ucweb\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">var</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> bIsAndroid</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> sUserAgent</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">match</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">/android/</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">i</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">==</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"android\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">var</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> bIsCE</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> sUserAgent</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">match</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">/windows ce/</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">i</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">==</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"windows ce\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">var</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> bIsWM</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> sUserAgent</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">match</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">(</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">/windows mobile/</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">i</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) </span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">==</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"windows mobile\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic\\">// document.writeln(\\"您的浏览设备为：\\");</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">if</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">bIsIpad</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> ||</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> bIsIphoneOs</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> ||</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> bIsMidp</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> ||</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> bIsUc7</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> ||</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> bIsUc</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> ||</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> bIsAndroid</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> ||</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> bIsCE</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\"> ||</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\"> bIsWM</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic\\">// alert(\\"手机浏览！\\");</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">} </span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">else</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic\\">// alert(\\"PC浏览！\\");</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">document.write(</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"&lt;script type='text/javascript' size='150' alpha='0.8' zIndex='-10' src='../js/dist/ribbon.js'&gt;&lt;</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">\\\\/</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">script&gt;\\"</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">document.write(</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"&lt;script type='text/javascript' color='0,188,212' opacity='0.7' zIndex='-2' count='99' src='http://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js'&gt;&lt;</span><span style=\\"color:#56B6C2;--shiki-dark:#56B6C2\\">\\\\/</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">script&gt;\\"</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">browserRedirect();</span></span>\\n<span class=\\"line\\"><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">&lt;/script&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{B as comp,c as data};