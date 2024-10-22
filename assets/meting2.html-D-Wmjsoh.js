import{_ as h,r as n,o as g,c as d,a as e,b as s,d as r,w as a,e as p}from"./app-L2UBD6gU.js";const m={},k=p('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>嘿~<br> 🍰🍰🍰 播放器有了，撒花✿✿ヽ(°▽°)ノ✿🎉🎉🎉</p><p align="center"><a href="https://www.npmjs.com/package/vuepress-plugin-meting2" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-meting2.svg"></a>  <a href="https://github.com/moefyit/vuepress-plugin-meting2/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/oragekk/vuepress-plugin-meting2"></a>  <a href="https://www.npmjs.com/package/vuepress-plugin-meting2" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dt/vuepress-plugin-meting2.svg"></a>  <a href="https://www.npmjs.com/package/vuepress-plugin-meting2" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dm/vuepress-plugin-meting2.svg"></a>  <a href="https://github.com/oragekk/vuepress-plugin-meting2/blob/main/LICENSE" target="_blank"><img alt="GitHub license" src="https://img.shields.io/github/license/oragekk/vuepress-plugin-meting2"></a></p><p>文档👉🏻戳这里<a href="https://github.com/OrageKK/vuepress-plugin-meting2" target="_blank" rel="noopener noreferrer">文档</a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>',5),u=e("a",{href:"https://github.com/u2sb/vuepress-plugin-sbaudio",target:"_blank",rel:"noopener noreferrer"},"vuepress-plugin-sbaudio",-1),B=e("a",{href:"https://github.com/moefyit/vuepress-plugin-meting",target:"_blank",rel:"noopener noreferrer"},"vuepress-plugin-meting",-1),b=e("p",null,"借鉴MetingJS解析和使用APlayer作为播放组件",-1),v=e("h2",{id:"安装很方便",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装很方便"},[e("span",null,"安装很方便")])],-1),y=e("div",{class:"language-bash","data-ext":"bash","data-title":"bash"},[e("pre",{class:"shiki shiki-themes one-dark-pro one-dark-pro vp-code",style:{"background-color":"#282c34","--shiki-dark-bg":"#282c34",color:"#abb2bf","--shiki-dark":"#abb2bf"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#61AFEF","--shiki-dark":"#61AFEF"}},"npm"),e("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}}," i"),e("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}}," vuepress-plugin-meting2"),e("span",{style:{color:"#D19A66","--shiki-dark":"#D19A66"}}," -D")])])])],-1),_=e("div",{class:"language-bash","data-ext":"bash","data-title":"bash"},[e("pre",{class:"shiki shiki-themes one-dark-pro one-dark-pro vp-code",style:{"background-color":"#282c34","--shiki-dark-bg":"#282c34",color:"#abb2bf","--shiki-dark":"#abb2bf"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#61AFEF","--shiki-dark":"#61AFEF"}},"pnpm"),e("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}}," add"),e("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}}," vuepress-plugin-meting2"),e("span",{style:{color:"#D19A66","--shiki-dark":"#D19A66"}}," -D")])])])],-1),A=p(`<h2 id="使用也很方便" tabindex="-1"><a class="header-anchor" href="#使用也很方便"><span>使用也很方便</span></a></h2><div class="language-javascript" data-ext="javascript" data-title="javascript"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">plugins</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    metingPlugin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      metingOptions</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        global</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// 开启关闭全局播放器</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        server</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;tencent&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        api</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;https://api.injahow.cn/meting/?server=:server&amp;type=:type&amp;id=:id&amp;auth=:auth&amp;r=:r&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;playlist&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        mid</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;851947617&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span></code></pre></div><h3 id="可作为组件引入" tabindex="-1"><a class="header-anchor" href="#可作为组件引入"><span>可作为组件引入</span></a></h3>`,3),F=e("h3",{id:"也可作为全局播放器引入",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#也可作为全局播放器引入"},[e("span",null,"也可作为全局播放器引入")])],-1),f=e("p",null,"全局引入目前和看板娘有些重叠，还没有处理，先把开关关了",-1);function C(w,E){const l=n("Badge"),o=n("CodeTabs"),c=n("Meting");return g(),d("div",null,[k,e("p",null,[s("借鉴了"),u,s("和"),B,s(" 在此表示感谢 "),r(l,{text:"Thanks",type:"warning"})]),b,v,r(o,{id:"22",data:[{id:"npm"},{id:"pnpm"}]},{title0:a(({value:t,isActive:i})=>[s("npm")]),title1:a(({value:t,isActive:i})=>[s("pnpm")]),tab0:a(({value:t,isActive:i})=>[y]),tab1:a(({value:t,isActive:i})=>[_]),_:1}),A,r(c,{auto:"https://y.qq.com/n/ryqq/songDetail/003UTVCN0QvffG",api:"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r"}),F,f])}const j=h(m,[["render",C],["__file","meting2.html.vue"]]),T=JSON.parse('{"path":"/tutorial/OSS/meting2.html","title":"vuepress-plugin-meting2","lang":"zh-CN","frontmatter":{"title":"vuepress-plugin-meting2","icon":"plugin","description":"支持vuepress2.x的音乐播放器","date":"2023-10-11T00:00:00.000Z","star":true,"isOriginal":true,"category":["开源软件","GitHub"],"tag":["GitHub"],"head":[["meta",{"property":"og:url","content":"https://oragekk.me/tutorial/OSS/meting2.html"}],["meta",{"property":"og:site_name","content":"Mr.子冥"}],["meta",{"property":"og:title","content":"vuepress-plugin-meting2"}],["meta",{"property":"og:description","content":"支持vuepress2.x的音乐播放器"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T09:19:33.000Z"}],["meta",{"property":"article:author","content":"子冥"}],["meta",{"property":"article:tag","content":"GitHub"}],["meta",{"property":"article:published_time","content":"2023-10-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-18T09:19:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vuepress-plugin-meting2\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-18T09:19:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"子冥\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"安装很方便","slug":"安装很方便","link":"#安装很方便","children":[]},{"level":2,"title":"使用也很方便","slug":"使用也很方便","link":"#使用也很方便","children":[{"level":3,"title":"可作为组件引入","slug":"可作为组件引入","link":"#可作为组件引入","children":[]},{"level":3,"title":"也可作为全局播放器引入","slug":"也可作为全局播放器引入","link":"#也可作为全局播放器引入","children":[]}]}],"git":{"createdTime":1729243173000,"updatedTime":1729243173000,"contributors":[{"name":"weijordan","email":"12012972+weijordan@user.noreply.gitee.com","commits":1}]},"readingTime":{"minutes":1.09,"words":328},"filePathRelative":"tutorial/OSS/meting2.md","localizedDate":"2023年10月11日","excerpt":"<h2>前言</h2>\\n<p>嘿~<br>\\n🍰🍰🍰 播放器有了，撒花✿✿ヽ(°▽°)ノ✿🎉🎉🎉</p>\\n<p align=\\"center\\">\\n   <a href=\\"https://www.npmjs.com/package/vuepress-plugin-meting2\\" target=\\"_blank\\"><img alt=\\"npm\\" src=\\"https://img.shields.io/npm/v/vuepress-plugin-meting2.svg\\"></a>&nbsp;\\n   <a href=\\"https://github.com/moefyit/vuepress-plugin-meting2/stargazers\\" target=\\"_blank\\"><img alt=\\"GitHub stars\\" src=\\"https://img.shields.io/github/stars/oragekk/vuepress-plugin-meting2\\"></a>&nbsp;\\n   <a href=\\"https://www.npmjs.com/package/vuepress-plugin-meting2\\" target=\\"_blank\\"><img alt=\\"downloads\\" src=\\"https://img.shields.io/npm/dt/vuepress-plugin-meting2.svg\\"></a>&nbsp;\\n   <a href=\\"https://www.npmjs.com/package/vuepress-plugin-meting2\\" target=\\"_blank\\"><img alt=\\"downloads\\" src=\\"https://img.shields.io/npm/dm/vuepress-plugin-meting2.svg\\"></a>&nbsp;\\n   <a href=\\"https://github.com/oragekk/vuepress-plugin-meting2/blob/main/LICENSE\\" target=\\"_blank\\"><img alt=\\"GitHub license\\" src=\\"https://img.shields.io/github/license/oragekk/vuepress-plugin-meting2\\"></a>\\n</p>"}');export{j as comp,T as data};
