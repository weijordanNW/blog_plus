import{_ as i,r as e,o as l,c as t,b as o,d as s,e as p,w as r,f as a}from"./app-vRjwnwzg.js";const c={},d=a('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果想在代码 Push 后，或者 Merge request 后，自动部署，可以采用多种方案，以下介绍两种</p><p>不知道如何配置的同学，可以参考一下</p></div><h2 id="_1-通过-jenkins-提供的【触发远程构建】" tabindex="-1"><a class="header-anchor" href="#_1-通过-jenkins-提供的【触发远程构建】"><span>1. 通过 Jenkins 提供的【触发远程构建】</span></a></h2><h3 id="_1-1-勾选【触发远程构建】并填入-token" tabindex="-1"><a class="header-anchor" href="#_1-1-勾选【触发远程构建】并填入-token"><span>1.1. 勾选【触发远程构建】并填入 token</span></a></h3><figure><img src="https://s3.bmp.ovh/imgs/2024/01/12/45009f0747ed807a.png" alt="勾选远程构建开关" tabindex="0" loading="lazy"><figcaption>勾选远程构建开关</figcaption></figure><h3 id="_1-2-配置-api-token" tabindex="-1"><a class="header-anchor" href="#_1-2-配置-api-token"><span>1.2. 配置 API token</span></a></h3><ol><li><p>打开 Jenkins 控制台。</p></li><li><p>在顶部导航栏中，点击您的用户名，然后选择 &quot;Configure&quot; 选项。</p></li><li><p>在配置页面中，向下滚动，找到 &quot;API Token&quot; 部分。</p></li><li><p>如果您之前没有生成过 API Token，则点击 &quot;Add new Token&quot; 或 &quot;Generate Token&quot; 按钮。</p></li><li><p>在生成或更改 Token 的过程中，您可能需要提供您的 Jenkins 用户密码进行身份验证。</p></li><li><p>生成或更改成功后，您将看到新生成的 Token 值。请将其复制并妥善保存，因为在以后的访问中，您将无法再查看该 Token 的值。</p></li></ol><h3 id="_1-3-如何调用-url" tabindex="-1"><a class="header-anchor" href="#_1-3-如何调用-url"><span>1.3. 如何调用 Url</span></a></h3><p>Jenkins 提供了便捷的远程触发功能，但是需要配置一个 token，然后在 push 后，通过 post 请求，调用 Jenkins 的 url 即可触发构建</p><p>调用 url 可以使用 python 脚本，或者 curl 命令，一般配合 git 提交，使用 curl 命令居多</p><p>下面以 GitLab CI/CD 为例进行举例</p>',10),k=a(`<p>GitLab CI/CD 是通过 GitLab Runner 来执行的</p><p>GitLab CI/CD 将按照 Stage 定义的顺序来执行，任何一个 Stage 失败，整个 CI/CD 将失败</p><p>每一个 Stage 可以被若干个 Job 关联。Stage 在执行的时候，关联到这个 Stage 的所有 Job 都将被执行，不过不同的 Job 可能是并行执行的。</p><p>每个 Job 在执行的时候，会先按照缓存策略加载缓存数据，然后按照顺序依次运行 before_script、script 和 after_script 中配置的脚本，运行完毕以后，会将生成的数据保存到缓存中。</p><h3 id="_1-4-编写-gitlab-ci-yml" tabindex="-1"><a class="header-anchor" href="#_1-4-编写-gitlab-ci-yml"><span>1.4. 编写.gitlab-ci.yml</span></a></h3><div class="language-yaml" data-ext="yaml" data-title="yaml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">stages</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  - </span><span style="color:#98C379;--shiki-dark:#98C379;">deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">deploy_to_hyjk_open-x</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  stage</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">deploy</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  only</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    - </span><span style="color:#98C379;--shiki-dark:#98C379;">master</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  script</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    - </span><span style="color:#98C379;--shiki-dark:#98C379;">./deploy.sh</span></span></code></pre></div><p>大意是当 master 分支 deploy 时执行 ./deploy.sh 脚本<br> 这里 script 调用了一个 shell 脚本，因为在 yml 文件中写脚本比较麻烦，个人比较习惯在 sh 文件中写脚本，然后在 yml 文件中调用这个脚本即可</p><h3 id="_1-5-deploy-sh" tabindex="-1"><a class="header-anchor" href="#_1-5-deploy-sh"><span>1.5. <code>deploy.sh</code></span></a></h3><p>由于新版本的 Jenkins 安全机制，每次调用 API 前都需要先调用获取获取 CSRF crumb 值的接口</p><p>下面脚本演示了，如何先获取 crumb 的值，并在之后触发远程构建 API 的时候，携带这个值</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;"># Jenkins 服务器信息</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">JENKINS_URL</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;http://192.168.155.57:8080/&quot;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">JENKINS_USERNAME</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;admin&quot;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">JENKINS_API_TOKEN</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;11abf441f4db6e341ae65b660f74de6e02&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;"># 获取 CSRF crumb 值</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">CRUMB</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">$(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">curl</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -s</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -u</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$JENKINS_USERNAME</span><span style="color:#98C379;--shiki-dark:#98C379;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$JENKINS_API_TOKEN</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$JENKINS_URL</span><span style="color:#98C379;--shiki-dark:#98C379;">/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;">:</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\&quot;</span><span style="color:#98C379;--shiki-dark:#98C379;">,//crumb)&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;"># 提取 crumb 值</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">CRUMB_VALUE</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">$(</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">echo</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$CRUMB</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> | </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">awk</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -F</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;:&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;{print $2}&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;"># 执行 Jenkins 远程构建</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">curl</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -X</span><span style="color:#98C379;--shiki-dark:#98C379;"> POST</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$JENKINS_URL</span><span style="color:#98C379;--shiki-dark:#98C379;">/job/projectName/build?token=xZ7Y3n9A&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">  --user</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$JENKINS_USERNAME</span><span style="color:#98C379;--shiki-dark:#98C379;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$JENKINS_API_TOKEN</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">  --header</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;Jenkins-Crumb: </span><span style="color:#E06C75;--shiki-dark:#E06C75;">$CRUMB_VALUE</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-通过-gitlab-的-webhook-触发远程构建" tabindex="-1"><a class="header-anchor" href="#_2-通过-gitlab-的-webhook-触发远程构建"><span>2. 通过 GitLab 的 <strong>webhook</strong> 触发远程构建</span></a></h2><p>使用 gitlab 的 <strong>webhook</strong> 配合 Jenkins 实现自动化部署。<br> Jenkins 需要安装 GitLab Plugin 插件，然后配置 <strong>webhook</strong> 即可。</p><h3 id="_2-1-勾选插件选项" tabindex="-1"><a class="header-anchor" href="#_2-1-勾选插件选项"><span>2.1. 勾选插件选项</span></a></h3><figure><img src="https://s3.bmp.ovh/imgs/2024/01/12/fe222283253f58a1.png" alt="勾选插件选项" tabindex="0" loading="lazy"><figcaption>勾选插件选项</figcaption></figure><h3 id="_2-2-选择配置" tabindex="-1"><a class="header-anchor" href="#_2-2-选择配置"><span>2.2. 选择配置</span></a></h3><p>插件有很多配置项，这里我们常用的就是过滤分支，可以选择，有以下选项</p><ul><li><strong>Include</strong></li><li><strong>Exclude</strong></li><li><strong>正则表达式</strong></li><li><strong>tag</strong></li></ul><figure><img src="https://s3.bmp.ovh/imgs/2024/01/12/893d0e7b5ca4e1b9.png" alt="设置token" tabindex="0" loading="lazy"><figcaption>设置token</figcaption></figure><h3 id="_2-3-将生成的-url-和-token-填入-gitlab-中" tabindex="-1"><a class="header-anchor" href="#_2-3-将生成的-url-和-token-填入-gitlab-中"><span>2.3. 将生成的 url 和 token 填入 GitLab 中</span></a></h3><p>可以选择触发的 events<br><img src="https://s3.bmp.ovh/imgs/2024/01/12/525dcea85ba7ae20.png" alt="填入GitLab" loading="lazy"></p><h3 id="_2-4-查看运行结果" tabindex="-1"><a class="header-anchor" href="#_2-4-查看运行结果"><span>2.4. 查看运行结果</span></a></h3><figure><img src="https://s3.bmp.ovh/imgs/2024/01/12/b5afe5d3321e17da.png" alt="查看运行结果" tabindex="0" loading="lazy"><figcaption>查看运行结果</figcaption></figure>`,23);function h(u,y){const n=e("RouteLink");return l(),t("div",null,[d,o("p",null,[s("GitLab CI/CD 是一个简洁好用的的持续集成/持续交付的框架。通过为你的项目配置一个或者多个 GitLab Runner，然后撰写一个 .gitlab-ci.yml，你就可以很方便地利用 GitLab CI/CD 来为你的项目引入持续集成/交付的功能。比较类似之前介绍过的"),p(n,{to:"/tutorial/github/github-action.html"},{default:r(()=>[s("GitHubAction")]),_:1})]),k])}const C=i(c,[["render",h],["__file","Jenkins.html.vue"]]),g=JSON.parse('{"path":"/tutorial/CI_CD/Jenkins.html","title":"Jenkins 远程触发构建踩坑记","lang":"zh-CN","frontmatter":{"title":"Jenkins 远程触发构建踩坑记","description":"CSRF crumbk,Jenkins,","icon":"shell","date":"2024-01-12T00:00:00.000Z","isOriginal":true,"order":1,"category":["工具教程"],"tag":["Jenkins"],"head":[["meta",{"property":"og:url","content":"https://weijodan.top/tutorial/CI_CD/Jenkins.html"}],["meta",{"property":"og:site_name","content":"Mr.子冥"}],["meta",{"property":"og:title","content":"Jenkins 远程触发构建踩坑记"}],["meta",{"property":"og:description","content":"CSRF crumbk,Jenkins,"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://s3.bmp.ovh/imgs/2024/01/12/45009f0747ed807a.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T09:19:33.000Z"}],["meta",{"property":"article:author","content":"子冥"}],["meta",{"property":"article:tag","content":"Jenkins"}],["meta",{"property":"article:published_time","content":"2024-01-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-18T09:19:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jenkins 远程触发构建踩坑记\\",\\"image\\":[\\"https://s3.bmp.ovh/imgs/2024/01/12/45009f0747ed807a.png\\",\\"https://s3.bmp.ovh/imgs/2024/01/12/fe222283253f58a1.png\\",\\"https://s3.bmp.ovh/imgs/2024/01/12/893d0e7b5ca4e1b9.png\\",\\"https://s3.bmp.ovh/imgs/2024/01/12/525dcea85ba7ae20.png\\",\\"https://s3.bmp.ovh/imgs/2024/01/12/b5afe5d3321e17da.png\\"],\\"datePublished\\":\\"2024-01-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-18T09:19:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"子冥\\",\\"url\\":\\"https://weijodan.top\\"}]}"]]},"headers":[{"level":2,"title":"1. 通过 Jenkins 提供的【触发远程构建】","slug":"_1-通过-jenkins-提供的【触发远程构建】","link":"#_1-通过-jenkins-提供的【触发远程构建】","children":[{"level":3,"title":"1.1. 勾选【触发远程构建】并填入 token","slug":"_1-1-勾选【触发远程构建】并填入-token","link":"#_1-1-勾选【触发远程构建】并填入-token","children":[]},{"level":3,"title":"1.2. 配置 API token","slug":"_1-2-配置-api-token","link":"#_1-2-配置-api-token","children":[]},{"level":3,"title":"1.3. 如何调用 Url","slug":"_1-3-如何调用-url","link":"#_1-3-如何调用-url","children":[]},{"level":3,"title":"1.4. 编写.gitlab-ci.yml","slug":"_1-4-编写-gitlab-ci-yml","link":"#_1-4-编写-gitlab-ci-yml","children":[]},{"level":3,"title":"1.5.  deploy.sh","slug":"_1-5-deploy-sh","link":"#_1-5-deploy-sh","children":[]}]},{"level":2,"title":"2. 通过 GitLab 的 webhook 触发远程构建","slug":"_2-通过-gitlab-的-webhook-触发远程构建","link":"#_2-通过-gitlab-的-webhook-触发远程构建","children":[{"level":3,"title":"2.1. 勾选插件选项","slug":"_2-1-勾选插件选项","link":"#_2-1-勾选插件选项","children":[]},{"level":3,"title":"2.2. 选择配置","slug":"_2-2-选择配置","link":"#_2-2-选择配置","children":[]},{"level":3,"title":"2.3. 将生成的 url 和 token 填入 GitLab 中","slug":"_2-3-将生成的-url-和-token-填入-gitlab-中","link":"#_2-3-将生成的-url-和-token-填入-gitlab-中","children":[]},{"level":3,"title":"2.4. 查看运行结果","slug":"_2-4-查看运行结果","link":"#_2-4-查看运行结果","children":[]}]}],"git":{"createdTime":1729243173000,"updatedTime":1729243173000,"contributors":[{"name":"weijordan","email":"12012972+weijordan@user.noreply.gitee.com","commits":1}]},"readingTime":{"minutes":3.21,"words":963},"filePathRelative":"tutorial/CI_CD/Jenkins.md","localizedDate":"2024年1月12日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>如果想在代码 Push 后，或者 Merge request 后，自动部署，可以采用多种方案，以下介绍两种</p>\\n<p>不知道如何配置的同学，可以参考一下</p>\\n</div>\\n<h2>1. 通过 Jenkins 提供的【触发远程构建】</h2>\\n<h3>1.1. 勾选【触发远程构建】并填入 token</h3>\\n<figure><img src=\\"https://s3.bmp.ovh/imgs/2024/01/12/45009f0747ed807a.png\\" alt=\\"勾选远程构建开关\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>勾选远程构建开关</figcaption></figure>"}');export{C as comp,g as data};
