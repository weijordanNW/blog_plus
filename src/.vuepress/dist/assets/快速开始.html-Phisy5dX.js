import{_ as a,a as s,b as n}from"./e9c14f115e7d8239d0126515b71c0b42-DN1SmzWT.js";import{_ as l,c as r,a as o,o as i}from"./app-nxqyxu1b.js";const t={};function p(c,e){return i(),r("div",null,e[0]||(e[0]=[o(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>当前支持语雀 Token 模式（需要语雀超级会员）和账号密码模式（不需要任何会员）</p></div><h2 id="文档站点工具汇总" tabindex="-1"><a class="header-anchor" href="#文档站点工具汇总"><span>文档站点工具汇总</span></a></h2><ul><li>写作平台：语雀</li><li>文档平台：<a href="https://hexo.io/" target="_blank" rel="noopener noreferrer">Hexo</a></li><li>博客主题：<a href="https://github.com/jerryc127/hexo-theme-butterfly" target="_blank" rel="noopener noreferrer">Next</a></li><li>文档同步：<a href="https://github.com/LetTTGACO/elog" target="_blank" rel="noopener noreferrer">Elog</a></li><li>部署平台：<a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a></li></ul><h2 id="文档站点搭建指南" tabindex="-1"><a class="header-anchor" href="#文档站点搭建指南"><span>文档站点搭建指南</span></a></h2><p>Hexo搭建教程参考</p><p><a href="https://blog.csdn.net/weixin_44763569/article/details/106435118" target="_blank" rel="noopener noreferrer">搭建Hexo个人博客详细教程_hexo博客-CSDN博客</a></p><p>Shoka 主题 参考</p><p><a href="https://shoka.lostyu.me/computer-science/note/theme-shoka-doc/" target="_blank" rel="noopener noreferrer">Hexo 主题 Shoka &amp; multi-markdown-it 渲染器使用说明</a></p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">hexo配置shoka</span><span style="color:#98C379;--shiki-dark:#98C379;"> 安装插件</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> un</span><span style="color:#98C379;--shiki-dark:#98C379;"> hexo-renderer-marked</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --save</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> i</span><span style="color:#98C379;--shiki-dark:#98C379;"> hexo-renderer-multi-markdown-it</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --save</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> hexo-autoprefixer</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --save</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> hexo-algoliasearch</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --save</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> hexo-symbols-count-time</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> hexo-feed</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --save-dev</span></span></code></pre></div><h3 id="fork模板仓库" tabindex="-1"><a class="header-anchor" href="#fork模板仓库"><span>Fork模板仓库</span></a></h3><p><a href="https://github.com/elog-x/yuque-hexo/fork" target="_blank" rel="noopener noreferrer">点击 Fork</a> 该模板仓库到个人 Github 账号仓库下并 clone 到本地。</p><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h3><p>在项目根目录下运行命令安装依赖：</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span></span></code></pre></div><h3 id="新建本地调试文件" tabindex="-1"><a class="header-anchor" href="#新建本地调试文件"><span>新建本地调试文件</span></a></h3><p>在项目根目录中复制<code>.elog.example.env</code>文件并改名为<code>.elog.env</code>，此文件将用于本地同步文档时使用。</p><h3 id="配置语雀" tabindex="-1"><a class="header-anchor" href="#配置语雀"><span>配置语雀</span></a></h3><p>参考<a href="https://www.yuque.com/1874w/yuque-hexo-template" target="_blank" rel="noopener noreferrer">示例知识库</a>，选择或新建语雀文档知识库，并按照<a href="https://elog.1874.cool/notion/gvnxobqogetukays#login" target="_blank" rel="noopener noreferrer">文档提示</a>配置语雀并获取<code>token login repo</code>。并在本地<code>.elog.env</code>中写入。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>Token 模式或者账号密码模式二选一即可，默认为账号密码模式，如果需要切换为 Token 模式，则修改<code>elog.config.js</code>中的<code>platform</code>为<code>yuque</code></p></div><div class="language-plain" data-ext="plain" data-title="plain"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># 语雀（Token方式）</span></span>
<span class="line"><span>YUQUE_TOKEN=获取的Token</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#语雀（账号密码模式）</span></span>
<span class="line"><span>YUQUE_USERNAME=一般是手机号</span></span>
<span class="line"><span>YUQUE_PASSWORD=登录密码</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 语雀公共参数</span></span>
<span class="line"><span>YUQUE_LOGIN=获取的login</span></span>
<span class="line"><span>YUQUE_REPO=获取的repo</span></span></code></pre></div><h3 id="本地调试" tabindex="-1"><a class="header-anchor" href="#本地调试"><span>本地调试</span></a></h3><p>在项目根目录运行同步命令：</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> run</span><span style="color:#98C379;--shiki-dark:#98C379;"> sync:local</span></span></code></pre></div><h3 id="启动-hexo" tabindex="-1"><a class="header-anchor" href="#启动-hexo"><span>启动 Hexo</span></a></h3><p>在项目根目录运行 Hexo 启动命令，打开本地链接。</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> run</span><span style="color:#98C379;--shiki-dark:#98C379;"> server</span></span></code></pre></div><h2 id="配置-hexo-博客" tabindex="-1"><a class="header-anchor" href="#配置-hexo-博客"><span>配置 Hexo 博客</span></a></h2><p>根据 <a href="https://hexo.io/" target="_blank" rel="noopener noreferrer">Hexo</a> 文档和 <a href="https://github.com/next-theme/hexo-theme-next" target="_blank" rel="noopener noreferrer">next</a> 主题配置文档，配置你的博客直到你满意为主，你也可以换别的主题，这里不做演示</p><h3 id="提交代码到-github" tabindex="-1"><a class="header-anchor" href="#提交代码到-github"><span>提交代码到 github</span></a></h3><p>本地访问没问题直接提交所有文件到 Github 仓库即可</p><h3 id="部署到-vercel" tabindex="-1"><a class="header-anchor" href="#部署到-vercel"><span>部署到 Vercel</span></a></h3><p>注册 Vercel 账号并绑定 Github，在 Vercel 导入 该项目，Vercel 会自动识别出该 VitePress 项目，不需要改动，直接选择 Deploy 部署。部署完成会有一个 Vercel 临时域名，你也可以绑定自己的域名。</p><figure><img src="`+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="自动化同步-部署" tabindex="-1"><a class="header-anchor" href="#自动化同步-部署"><span>自动化同步&amp;部署</span></a></h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意：在非国内CI/CD环境中使用账号密码模式登录语雀，例如Github<br> Workflow，会导致语雀后台登录设备中出现大量美国IP，目前尚不清楚语雀是否会有安全限制措施，请谨慎使用。推荐本地同步时使用。</p></div><h3 id="检查-github-actions-权限" tabindex="-1"><a class="header-anchor" href="#检查-github-actions-权限"><span>检查 Github Actions 权限</span></a></h3><p>在 Github 仓库的设置中找到 <code>Actions-General</code>，打开流水线写入权限<code>Workflow permissions</code></p><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量"><span>配置环境变量</span></a></h3><p>在本地运行时，用的是<code>.elog.env</code>文件中定义的语雀账号信息，而在 Github Actions 时，需要提前配置环境变量。</p><p>在 Github 仓库的设置中找到 <code>Secrets and variables</code>，新增仓库的环境变量和<code>.elog.env</code>保持一致即可</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="自动化部署" tabindex="-1"><a class="header-anchor" href="#自动化部署"><span>自动化部署</span></a></h3><p>当在语雀中改动文档后，手动/自动触发 Github Actions流水线，会重新从语雀增量拉取文档，自动提交代码到 Github 仓库。</p><p>Vercel 会实时监测仓库代码，当有新的提交时都会重新部署博客。如此就实现了自动化部署博客。</p><p>整个流程的关键点就在于：如何手动/自动触发 Github Actions。</p><p>在项目.<code>github/workflows/sync.yaml</code>中已经配置了外部 API 触发 Github Actions 事件，所以只需要调用 API 触发流水线即可。</p><h4 id="手动触发" tabindex="-1"><a class="header-anchor" href="#手动触发"><span>手动触发</span></a></h4><p>为了方便，这里提供一个部署在 Vercel 的免费公用的<a href="https://github.com/elog-x/serverless-api" target="_blank" rel="noopener noreferrer"><strong>ServerlessAPI</strong></a>，按照文档配置好 URL 参数并浏览器访问即可触发流水线</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">https://serverless-api-elog.vercel.app/api/github?user</span><span style="color:#98C379;--shiki-dark:#98C379;">=xxx</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&amp;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">repo</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">xxx</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&amp;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">event_type</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">deploy</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&amp;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">token</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">xxx</span></span></code></pre></div><h4 id="自动触发-语雀-webhooks" tabindex="-1"><a class="header-anchor" href="#自动触发-语雀-webhooks"><span>自动触发-语雀 webhooks</span></a></h4><div class="hint-container warning"><p class="hint-container-title">注意</p><p>需要语雀专业会员</p></div><p>在语雀知识库 - 更多设置 - 消息推送中可配置语雀 webhooks，填写上面的 Vercel Serverless API。当文档更新时，语雀会调用这个API进行推送，进而触发 Github Actions</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意：语雀是国内文档平台，调用国外Vercel 的服务可能会失败，可自行部署 API</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意：知识库配置了「自动发布」功能后，文档的 更新/发布 操作暂不会发送 webhooks</p></div><h2 id="参考示例" tabindex="-1"><a class="header-anchor" href="#参考示例"><span>参考示例</span></a></h2><p>示例 Github 仓库：待完善</p><p>示例语雀知识库：<a href="https://www.yuque.com/1874w/yuque-hexo-template" target="_blank" rel="noopener noreferrer">https://www.yuque.com/1874w/yuque-hexo-template</a></p><p>示例文档站点：待完善</p>',60)]))}const k=l(t,[["render",p],["__file","快速开始.html.vue"]]),g=JSON.parse('{"path":"/yuque/%E8%AF%AD%E9%9B%80_Hexo_Elog/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B.html","title":"快速开始","lang":"zh-CN","frontmatter":{"title":"快速开始","date":"2024-12-17T00:00:00.000Z","icon":"bokeyuan","star":false,"isOriginal":false,"category":["yuque"],"tag":["yuque"],"description":"前言 注意 当前支持语雀 Token 模式（需要语雀超级会员）和账号密码模式（不需要任何会员） 文档站点工具汇总 写作平台：语雀 文档平台：Hexo 博客主题：Next 文档同步：Elog 部署平台：Vercel 文档站点搭建指南 Hexo搭建教程参考 搭建Hexo个人博客详细教程_hexo博客-CSDN博客 Shoka 主题 参考 Hexo 主题 S...","head":[["meta",{"property":"og:url","content":"https://weijordan.com/yuque/%E8%AF%AD%E9%9B%80_Hexo_Elog/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B.html"}],["meta",{"property":"og:site_name","content":"Mr.子冥"}],["meta",{"property":"og:title","content":"快速开始"}],["meta",{"property":"og:description","content":"前言 注意 当前支持语雀 Token 模式（需要语雀超级会员）和账号密码模式（不需要任何会员） 文档站点工具汇总 写作平台：语雀 文档平台：Hexo 博客主题：Next 文档同步：Elog 部署平台：Vercel 文档站点搭建指南 Hexo搭建教程参考 搭建Hexo个人博客详细教程_hexo博客-CSDN博客 Shoka 主题 参考 Hexo 主题 S..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T08:50:27.000Z"}],["meta",{"property":"article:author","content":"子冥"}],["meta",{"property":"article:tag","content":"yuque"}],["meta",{"property":"article:published_time","content":"2024-12-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-18T08:50:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"快速开始\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-18T08:50:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"子冥\\",\\"url\\":\\"https://weijordan.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"文档站点工具汇总","slug":"文档站点工具汇总","link":"#文档站点工具汇总","children":[]},{"level":2,"title":"文档站点搭建指南","slug":"文档站点搭建指南","link":"#文档站点搭建指南","children":[{"level":3,"title":"Fork模板仓库","slug":"fork模板仓库","link":"#fork模板仓库","children":[]},{"level":3,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]},{"level":3,"title":"新建本地调试文件","slug":"新建本地调试文件","link":"#新建本地调试文件","children":[]},{"level":3,"title":"配置语雀","slug":"配置语雀","link":"#配置语雀","children":[]},{"level":3,"title":"本地调试","slug":"本地调试","link":"#本地调试","children":[]},{"level":3,"title":"启动 Hexo","slug":"启动-hexo","link":"#启动-hexo","children":[]}]},{"level":2,"title":"配置 Hexo 博客","slug":"配置-hexo-博客","link":"#配置-hexo-博客","children":[{"level":3,"title":"提交代码到 github","slug":"提交代码到-github","link":"#提交代码到-github","children":[]},{"level":3,"title":"部署到 Vercel","slug":"部署到-vercel","link":"#部署到-vercel","children":[]}]},{"level":2,"title":"自动化同步&部署","slug":"自动化同步-部署","link":"#自动化同步-部署","children":[{"level":3,"title":"检查 Github Actions 权限","slug":"检查-github-actions-权限","link":"#检查-github-actions-权限","children":[]},{"level":3,"title":"配置环境变量","slug":"配置环境变量","link":"#配置环境变量","children":[]},{"level":3,"title":"自动化部署","slug":"自动化部署","link":"#自动化部署","children":[]}]},{"level":2,"title":"参考示例","slug":"参考示例","link":"#参考示例","children":[]}],"git":{"createdTime":1734511827000,"updatedTime":1734511827000,"contributors":[{"name":"weijordan","email":"1985615319@qq.com","commits":1}]},"readingTime":{"minutes":4,"words":1201},"filePathRelative":"yuque/语雀+Hexo+Elog/快速开始.md","localizedDate":"2024年12月17日","excerpt":"<h2>前言</h2>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>当前支持语雀 Token 模式（需要语雀超级会员）和账号密码模式（不需要任何会员）</p>\\n</div>\\n<h2>文档站点工具汇总</h2>\\n<ul>\\n<li>写作平台：语雀</li>\\n<li>文档平台：<a href=\\"https://hexo.io/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Hexo</a></li>\\n<li>博客主题：<a href=\\"https://github.com/jerryc127/hexo-theme-butterfly\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Next</a></li>\\n<li>文档同步：<a href=\\"https://github.com/LetTTGACO/elog\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Elog</a></li>\\n<li>部署平台：<a href=\\"https://vercel.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Vercel</a></li>\\n</ul>","autoDesc":true}');export{k as comp,g as data};
