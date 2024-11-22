import{_ as e,c,d as l,f as a,w as r,e as s,a as n,r as i,o as d}from"./app-BH1BRoJG.js";const p={},k={id:"FD4Kr"},g={id:"d3Pc8"},b={id:"9db04840"},B={id:"488b3bc0"},u={id:"e196ca56"},y={id:"f2181389"};function h(f,o){const t=i("font");return d(),c("div",null,[o[17]||(o[17]=l("p",null,[l("a",{href:"https://www.ruanyifeng.com/blog/2022/05/rollup.html",target:"_blank",rel:"noopener noreferrer"},"https://www.ruanyifeng.com/blog/2022/05/rollup.html")],-1)),o[18]||(o[18]=l("figure",null,[l("img",{src:"https://cdn.nlark.com/yuque/0/2024/webp/45821596/1728962941458-96143e0c-e26e-44c6-9301-9ac464d3d376.webp",alt:"",tabindex:"0",loading:"lazy"}),l("figcaption")],-1)),l("h2",k,[a(t,{style:{color:"rgb(0, 0, 0)","background-color":"rgb(245, 245, 213)"}},{default:r(()=>o[0]||(o[0]=[s("总结")])),_:1})]),o[19]||(o[19]=s(" 1.**")),a(t,{style:{color:"rgb(17, 17, 17)","background-color":"rgb(245, 245, 213)"}},{default:r(()=>o[1]||(o[1]=[s("rollup.js 适合用来打包ES 模块")])),_:1}),o[20]||(o[20]=n("** <p><strong><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>2.原理:就是将 <code>&lt;/font&gt;</code></strong> <code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:#FFC0CB;&quot;&gt;import&lt;/font&gt;&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>和 <code>&lt;/font&gt;&lt;font style=&quot;color:rgb(17, 17, 17);background-color:#FFC0CB;&quot;&gt;export&lt;/font&gt;``&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>替换换成了原始代码。<code>&lt;/font&gt;</code></p><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>3.摇树特性: 即打包时自动删除没有用到的代码。<code>&lt;/font&gt;</code></p><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;&lt;/font&gt;</code></p><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>摇树原理:<code>&lt;/font&gt;</code></p><p><code>&lt;font style=&quot;color:rgb(6, 6, 7);&quot;&gt;</code>即根据 <code>&lt;/font&gt;</code><strong><code>&lt;font style=&quot;color:rgb(6, 6, 7);&quot;&gt;</code>ES6 的import和export确认引入 <code>&lt;/font&gt;</code></strong> <code>&lt;font style=&quot;color:rgb(6, 6, 7);&quot;&gt;</code>, <code>&lt;/font&gt;</code><strong><code>&lt;font style=&quot;color:rgb(6, 6, 7);&quot;&gt;</code>标记未引用 <code>&lt;/font&gt;</code></strong> <code>&lt;font style=&quot;color:rgb(6, 6, 7);&quot;&gt;</code>的代码,然后进行 <code>&lt;/font&gt;</code><strong><code>&lt;font style=&quot;color:rgb(6, 6, 7);&quot;&gt;</code>剔除 <code>&lt;/font&gt;</code></strong></p><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;&lt;/font&gt;</code></p><p><strong><code>&lt;font style=&quot;color:rgb(6, 6, 7);&quot;&gt;</code>静态分析 : <code>&lt;/font&gt;</code></strong><code>&lt;font style=&quot;color:rgb(6, 6, 7);&quot;&gt;</code>构建工具会查看 <code>&lt;/font&gt;&lt;font style=&quot;color:rgb(6, 6, 7);&quot;&gt;import&lt;/font&gt;``&lt;font style=&quot;color:rgb(6, 6, 7);&quot;&gt;</code> 和 <code>&lt;/font&gt;&lt;font style=&quot;color:rgb(6, 6, 7);&quot;&gt;export&lt;/font&gt;``&lt;font style=&quot;color:rgb(6, 6, 7);&quot;&gt;</code> 语句，以确定哪些模块被导入和导出，以及它们之间的依赖关系 <code>&lt;/font&gt;</code></p><p><strong><code>&lt;font style=&quot;color:rgb(6, 6, 7);&quot;&gt;</code>标记未引用代码 : <code>&lt;/font&gt;</code></strong><code>&lt;font style=&quot;color:rgb(6, 6, 7);&quot;&gt;</code>构建工具会标记所有未被引用的代码（也称为未引用的模块或未使用的导出）。这些代码被认为是“死代码”<code>&lt;/font&gt;</code></p><p><strong><code>&lt;font style=&quot;color:rgb(6, 6, 7);&quot;&gt;</code>剔除未引用代码 : <code>&lt;/font&gt;</code></strong><code>&lt;font style=&quot;color:rgb(6, 6, 7);&quot;&gt;</code>在生成最终的打包输出时，构建工具会基于静态分析的结果，从代码库中移除所有被标记为未引用的代码。<code>&lt;/font&gt;</code></p><p><code>&lt;font style=&quot;color:rgb(6, 6, 7);&quot;&gt;&lt;/font&gt;</code></p>",11)),l("h2",g,[a(t,{style:{color:"rgb(0, 0, 0)","background-color":"rgb(245, 245, 213)"}},{default:r(()=>o[2]||(o[2]=[s("一、介绍")])),_:1})]),o[21]||(o[21]=s(" **")),a(t,{style:{color:"rgb(17, 17, 17)","background-color":"rgb(245, 245, 213)"}},{default:r(()=>o[3]||(o[3]=[s("只把 rollup.js 用于打包 ES 模块")])),_:1}),o[22]||(o[22]=s("**")),a(t,{style:{color:"rgb(17, 17, 17)","background-color":"rgb(245, 245, 213)"}},{default:r(()=>o[4]||(o[4]=[s("，这样才能充分发挥它的优势。下面你会看到，那是多么简单的一件事。")])),_:1}),o[23]||(o[23]=l("p",null,[l("code",null,'<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">'),s("如果你的项目使用 CommonJS 模块，不推荐使用 rollup.js，优势不大。"),l("code",null,"</font>")],-1)),o[24]||(o[24]=l("p",null,[l("code",null,'<font style="color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);">'),s("也可以打包 CommonJS 模块。但是，这时需要经过复杂配置 "),l("code",null,"</font>")],-1)),l("h2",b,[a(t,{style:{color:"rgb(0, 0, 0)","background-color":"rgb(245, 245, 213)"}},{default:r(()=>o[5]||(o[5]=[s("二、安装")])),_:1})]),a(t,{style:{color:"rgb(17, 17, 17)","background-color":"rgb(245, 245, 213)"}},{default:r(()=>o[6]||(o[6]=[s("本文采用全局安装 rollup.js。")])),_:1}),o[25]||(o[25]=n('<div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --global</span><span style="color:#98C379;--shiki-dark:#98C379;"> rollup</span></span></code></pre></div><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>但是，你也可以不安装直接使用，就是把下面所有命令中的 <code>&lt;/font&gt;&lt;font style=&quot;color:rgb(17, 17, 17);background-color:#FFC0CB;&quot;&gt;rollup&lt;/font&gt;``&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>，替换成 <code>&lt;/font&gt;&lt;font style=&quot;color:rgb(17, 17, 17);background-color:#FFC0CB;&quot;&gt;npx rollup&lt;/font&gt;``&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>（参见 <code>&lt;/font&gt;</code><a href="https://www.ruanyifeng.com/blog/2019/02/npx.html" target="_blank" rel="noopener noreferrer"><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>《npx 使用教程》<code>&lt;/font&gt;</code></a><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>）。<code>&lt;/font&gt;</code></p><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>第一次使用，可以运行下面的命令，查看一下帮助。<code>&lt;/font&gt;</code></p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> rollup</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --help</span></span>\n<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 或者</span></span>\n<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> npx</span><span style="color:#98C379;--shiki-dark:#98C379;"> rollup</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --help</span></span></code></pre></div>',4)),l("h2",B,[a(t,{style:{color:"rgb(0, 0, 0)","background-color":"rgb(245, 245, 213)"}},{default:r(()=>o[7]||(o[7]=[s("三、示例")])),_:1})]),a(t,{style:{color:"rgb(17, 17, 17)","background-color":"rgb(245, 245, 213)"}},{default:r(()=>o[8]||(o[8]=[s("下面，就用 rollup.js 打包两个简单的脚本：库文件 add.js 和入口脚本 main.js。")])),_:1}),o[26]||(o[26]=n(`<div class="language-javascript" data-ext="javascript" data-title="javascript"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// add.js</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> PI</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 3.14</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> E</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2.718</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> function</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> addPi</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">x</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> x</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> PI</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> function</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> addE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">x</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> x</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> E</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>上面代码中，模块 add.js 输出了两个工具函数 <code>&lt;/font&gt;&lt;font style=&quot;color:rgb(17, 17, 17);background-color:#FFC0CB;&quot;&gt;addPi()&lt;/font&gt;\`\`&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>和 <code>&lt;/font&gt;&lt;font style=&quot;color:rgb(17, 17, 17);background-color:#FFC0CB;&quot;&gt;addE()&lt;/font&gt;\`\`&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>。<code>&lt;/font&gt;</code></p><div class="language-javascript" data-ext="javascript" data-title="javascript"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// main.js</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">addPi</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;./add.js&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">console</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">log</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">addPi</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">));</span></span></code></pre></div><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>上面代码中，入口脚本 main.js 加载了 add.js 里面的工具函数 <code>&lt;/font&gt;&lt;font style=&quot;color:rgb(17, 17, 17);background-color:#FFC0CB;&quot;&gt;addPi()&lt;/font&gt;\`\`&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>。<code>&lt;/font&gt;</code></p><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>接着，就用 rollup.js 打包。<code>&lt;/font&gt;</code></p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> rollup</span><span style="color:#98C379;--shiki-dark:#98C379;"> main.js</span></span></code></pre></div><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>打包时只需给出入口脚本 main.js，rollup 会自动把依赖项打包进去。<code>&lt;/font&gt;</code></p><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>打包结果默认输出到屏幕。<code>&lt;/font&gt;</code></p><div class="language-javascript" data-ext="javascript" data-title="javascript"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> PI</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 3.14</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">function</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> addPi</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">x</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> x</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> PI</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">console</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">log</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">addPi</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">));</span></span></code></pre></div><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>可以看到，<code>&lt;/font&gt;&lt;font style=&quot;color:rgb(17, 17, 17);background-color:#FFC0CB;&quot;&gt;import&lt;/font&gt;\`\`&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>和 <code>&lt;/font&gt;&lt;font style=&quot;color:rgb(17, 17, 17);background-color:#FFC0CB;&quot;&gt;export&lt;/font&gt;\`\`&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>语句都没了，被换成了原始代码。<code>&lt;/font&gt;</code></p><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>另外，函数 <code>&lt;/font&gt;&lt;font style=&quot;color:rgb(17, 17, 17);background-color:#FFC0CB;&quot;&gt;addE()&lt;/font&gt;\`\`&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>没有打包进去，因为没有用到它。这种特性叫做摇树（tree-shaking），即打包时自动删除没有用到的代码。<code>&lt;/font&gt;</code></p><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>由于上面两点，rollup 输出的代码非常整洁，而且体积小于其他打包工具。<code>&lt;/font&gt;</code></p><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>使用参数 <code>&lt;/font&gt;&lt;font style=&quot;color:rgb(17, 17, 17);background-color:#FFC0CB;&quot;&gt;--file [FILENAME]&lt;/font&gt;\`\`&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>，将打包结果保存到指定文件。<code>&lt;/font&gt;</code></p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> rollup</span><span style="color:#98C379;--shiki-dark:#98C379;"> main.js</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --file</span><span style="color:#98C379;--shiki-dark:#98C379;"> bundle.js</span></span></code></pre></div><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>上面命令将打包结果保存到 bundle.js。<code>&lt;/font&gt;</code></p>`,15)),l("h2",u,[a(t,{style:{color:"rgb(0, 0, 0)","background-color":"rgb(245, 245, 213)"}},{default:r(()=>o[9]||(o[9]=[s("四、使用注意点")])),_:1})]),a(t,{style:{color:"rgb(17, 17, 17)","background-color":"rgb(245, 245, 213)"}},{default:r(()=>o[10]||(o[10]=[s("（1）如果有多个入口脚本，就依次填写它们的文件名，并使用参数")])),_:1}),o[27]||(o[27]=s("`")),a(t,{style:{color:"rgb(17, 17, 17)","background-color":"#FFC0CB"}},{default:r(()=>o[11]||(o[11]=[s("--dir")])),_:1}),o[28]||(o[28]=s("`")),a(t,{style:{color:"rgb(17, 17, 17)","background-color":"rgb(245, 245, 213)"}},{default:r(()=>o[12]||(o[12]=[s("指定输出目录。")])),_:1}),o[29]||(o[29]=n('<div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> rollup</span><span style="color:#98C379;--shiki-dark:#98C379;"> m1.js</span><span style="color:#98C379;--shiki-dark:#98C379;"> m2.js</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --dir</span><span style="color:#98C379;--shiki-dark:#98C379;"> dist</span></span></code></pre></div><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>上面命令会在目录 <code>&lt;/font&gt;&lt;font style=&quot;color:rgb(17, 17, 17);background-color:#FFC0CB;&quot;&gt;dist&lt;/font&gt;``&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>，打包生成多个文件：m1.js、m2.js、以及它们共同的依赖项（如果有的话）。<code>&lt;/font&gt;</code></p><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>（2）参数 <code>&lt;/font&gt;&lt;font style=&quot;color:rgb(17, 17, 17);background-color:#FFC0CB;&quot;&gt;--format iife&lt;/font&gt;``&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>，会把打包结果放在一个自动执行函数里面。<code>&lt;/font&gt;</code></p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> rollup</span><span style="color:#98C379;--shiki-dark:#98C379;"> main.js</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --format</span><span style="color:#98C379;--shiki-dark:#98C379;"> iife</span></span></code></pre></div><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>（3）如果希望打包后代码最小化，使用参数 <code>&lt;/font&gt;&lt;font style=&quot;color:rgb(17, 17, 17);background-color:#FFC0CB;&quot;&gt;--compact&lt;/font&gt;``&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>。<code>&lt;/font&gt;</code></p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> rollup</span><span style="color:#98C379;--shiki-dark:#98C379;"> main.js</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --compact</span></span></code></pre></div><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>另一种方法是使用专门工具。<code>&lt;/font&gt;</code></p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> rollup</span><span style="color:#98C379;--shiki-dark:#98C379;"> main.js</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> | </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">uglifyjs</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --output</span><span style="color:#98C379;--shiki-dark:#98C379;"> bundle.js</span></span></code></pre></div><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>上面命令分成两步，第一步是 rollup 打包，第二步是 uglifyjs 进行代码最小化，最后写入 bundle.js。<code>&lt;/font&gt;</code></p><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>（4）rollup 支持使用 <code>&lt;/font&gt;</code><a href="https://rollupjs.org/guide/en/#configuration-files" target="_blank" rel="noopener noreferrer"><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>配置文件 <code>&lt;/font&gt;</code></a> <code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>（rollup.config.js），把参数都写在里面，下面是一个例子。<code>&lt;/font&gt;</code></p><div class="language-javascript" data-ext="javascript" data-title="javascript"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// rollup.config.js</span></span>\n<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> default</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  input</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;main.js&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  output</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>\n<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    file</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;bundle.js&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    format</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;es&#39;</span></span>\n<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>\n<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>参数 <code>&lt;/font&gt;&lt;font style=&quot;color:rgb(17, 17, 17);background-color:#FFC0CB;&quot;&gt;-c&lt;/font&gt;``&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>启用配置文件。<code>&lt;/font&gt;</code></p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> rollup</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -c</span></span></code></pre></div><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>我不推荐使用配置文件，这样会增加额外的复杂性。默认场景下，命令行参数已经够用了，也更容易阅读。<code>&lt;/font&gt;</code></p>',14)),l("h2",y,[a(t,{style:{color:"rgb(0, 0, 0)","background-color":"rgb(245, 245, 213)"}},{default:r(()=>o[13]||(o[13]=[s("五、转成 CommonJS 模块")])),_:1})]),a(t,{style:{color:"rgb(17, 17, 17)","background-color":"rgb(245, 245, 213)"}},{default:r(()=>o[14]||(o[14]=[s("最后，rollup 还支持 ES 模块转成 CommonJS 模块，使用参数")])),_:1}),o[30]||(o[30]=s("`")),a(t,{style:{color:"rgb(17, 17, 17)","background-color":"#FFC0CB"}},{default:r(()=>o[15]||(o[15]=[s("--format cjs")])),_:1}),o[31]||(o[31]=s("`")),a(t,{style:{color:"rgb(17, 17, 17)","background-color":"rgb(245, 245, 213)"}},{default:r(()=>o[16]||(o[16]=[s("就可以了。")])),_:1}),o[32]||(o[32]=n(`<div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;"> rollup</span><span style="color:#98C379;--shiki-dark:#98C379;"> add.js</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --format</span><span style="color:#98C379;--shiki-dark:#98C379;"> cjs</span></span></code></pre></div><p><code>&lt;font style=&quot;color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);&quot;&gt;</code>转换后的 CommonJS 模块，代码如下。<code>&lt;/font&gt;</code></p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">&#39;use strict&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Object</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">defineProperty</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">exports</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;__esModule&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">value</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> PI</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 3.14</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">const</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> E</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2.718</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">function</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> addPi</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">x</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> x</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> PI</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">function</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> addE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">x</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> x</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> +</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> E</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">; </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">exports</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">addE</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> addE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">exports</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">addPi</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> addPi</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}const F=e(p,[["render",h],["__file","rollup.js.html.vue"]]),A=JSON.parse('{"path":"/posts/Web/%E6%89%93%E5%8C%85%E5%B7%A5%E5%85%B7/rollup.js.html","title":"rollup 打包工具","lang":"zh-CN","frontmatter":{"title":"rollup 打包工具","icon":"dabaogongju","date":"2023-05-06T00:00:00.000Z","category":["打包工具"],"tag":["前端开发"],"dir":{"order":2},"description":"https://www.ruanyifeng.com/blog/2022/05/rollup.html 1.**** <font style=\\"color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);\\">2.原理:就是将 </font> <font style=\\"color:rgb(17, 1...","head":[["meta",{"property":"og:url","content":"https://weijordan.com/posts/Web/%E6%89%93%E5%8C%85%E5%B7%A5%E5%85%B7/rollup.js.html"}],["meta",{"property":"og:site_name","content":"Mr.子冥"}],["meta",{"property":"og:title","content":"rollup 打包工具"}],["meta",{"property":"og:description","content":"https://www.ruanyifeng.com/blog/2022/05/rollup.html 1.**** <font style=\\"color:rgb(17, 17, 17);background-color:rgb(245, 245, 213);\\">2.原理:就是将 </font> <font style=\\"color:rgb(17, 1..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.nlark.com/yuque/0/2024/webp/45821596/1728962941458-96143e0c-e26e-44c6-9301-9ac464d3d376.webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-22T01:17:53.000Z"}],["meta",{"property":"article:author","content":"子冥"}],["meta",{"property":"article:tag","content":"前端开发"}],["meta",{"property":"article:published_time","content":"2023-05-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-22T01:17:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"rollup 打包工具\\",\\"image\\":[\\"https://cdn.nlark.com/yuque/0/2024/webp/45821596/1728962941458-96143e0c-e26e-44c6-9301-9ac464d3d376.webp\\"],\\"datePublished\\":\\"2023-05-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-22T01:17:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"子冥\\",\\"url\\":\\"https://weijordan.com\\"}]}"]]},"headers":[],"git":{"createdTime":1729559873000,"updatedTime":1729559873000,"contributors":[{"name":"weijordan","email":"12012972+weijordan@user.noreply.gitee.com","commits":1}]},"readingTime":{"minutes":7.59,"words":2277},"filePathRelative":"posts/Web/打包工具/rollup.js.md","localizedDate":"2023年5月6日","excerpt":"<p><a href=\\"https://www.ruanyifeng.com/blog/2022/05/rollup.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.ruanyifeng.com/blog/2022/05/rollup.html</a></p>\\n<figure><img src=\\"https://cdn.nlark.com/yuque/0/2024/webp/45821596/1728962941458-96143e0c-e26e-44c6-9301-9ac464d3d376.webp\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{F as comp,A as data};
