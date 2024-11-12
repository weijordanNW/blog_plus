import{_ as r,r as o,o as B,c,e as p,w as e,f as a,d as i,b as s}from"./app-BsC1S-hT.js";const d={},k=a('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>最近在做SEO，因为链接没有做同步，需要清除之前旧站的链接，重新提交，让搜索引擎尽快索引，google search console的已经基本做差不多了</p><p>bing最近因为 <em>New Bing</em> 的原因也用的比较多，所以做了一些工作，很方便的是，它可以直接同步GSC的站点数据，不过就只是域数据，URL还是要自己提交</p><p>为了尽快索引，只提交sitemap是不够的，还需要调用API手动提交URL</p></div><h3 id="官方示例" tabindex="-1"><a class="header-anchor" href="#官方示例"><span>官方示例</span></a></h3><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/25889c6c306381f8.png" alt="bing example" tabindex="0" loading="lazy"><figcaption>bing example</figcaption></figure><h3 id="python代码" tabindex="-1"><a class="header-anchor" href="#python代码"><span>python代码</span></a></h3>',4),h=s("div",{class:"language-py line-numbers-mode","data-ext":"py","data-title":"py"},[s("pre",{class:"shiki shiki-themes one-dark-pro one-dark-pro vp-code",style:{"background-color":"#282c34","--shiki-dark-bg":"#282c34",color:"#abb2bf","--shiki-dark":"#abb2bf"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","--shiki-dark":"#7F848E","font-style":"italic","--shiki-dark-font-style":"italic"}},"#!/usr/bin/python3")]),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","--shiki-dark":"#7F848E","font-style":"italic","--shiki-dark-font-style":"italic"}},"# -*- coding: UTF-8 -*-")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD","--shiki-dark":"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}}," requests")]),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD","--shiki-dark":"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}}," xml.etree.ElementTree "),s("span",{style:{color:"#C678DD","--shiki-dark":"#C678DD"}},"as"),s("span",{style:{color:"#D19A66","--shiki-dark":"#D19A66"}}," ET")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","--shiki-dark":"#7F848E","font-style":"italic","--shiki-dark-font-style":"italic"}},"# 指定Sitemap的URL")]),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"sitemap_url "),s("span",{style:{color:"#56B6C2","--shiki-dark":"#56B6C2"}},"="),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},' "https://example.com/sitemap.xml"')]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","--shiki-dark":"#7F848E","font-style":"italic","--shiki-dark-font-style":"italic"}},"# 提取Sitemap中的URL")]),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"response "),s("span",{style:{color:"#56B6C2","--shiki-dark":"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}}," requests."),s("span",{style:{color:"#61AFEF","--shiki-dark":"#61AFEF"}},"get"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"(sitemap_url)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"sitemap_xml "),s("span",{style:{color:"#56B6C2","--shiki-dark":"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}}," response.content")]),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"sitemap_root "),s("span",{style:{color:"#56B6C2","--shiki-dark":"#56B6C2"}},"="),s("span",{style:{color:"#D19A66","--shiki-dark":"#D19A66"}}," ET"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"."),s("span",{style:{color:"#61AFEF","--shiki-dark":"#61AFEF"}},"fromstring"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"(sitemap_xml)")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"urls "),s("span",{style:{color:"#56B6C2","--shiki-dark":"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}}," []")]),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD","--shiki-dark":"#C678DD"}},"for"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}}," child "),s("span",{style:{color:"#C678DD","--shiki-dark":"#C678DD"}},"in"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}}," sitemap_root:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"    url "),s("span",{style:{color:"#56B6C2","--shiki-dark":"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}}," child["),s("span",{style:{color:"#D19A66","--shiki-dark":"#D19A66"}},"0"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"].text")]),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"    urls."),s("span",{style:{color:"#61AFEF","--shiki-dark":"#61AFEF"}},"append"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"(url)")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","--shiki-dark":"#7F848E","font-style":"italic","--shiki-dark-font-style":"italic"}},"# 调用Bing API提交URL")]),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"bing_api_key "),s("span",{style:{color:"#56B6C2","--shiki-dark":"#56B6C2"}},"="),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},` "your's API Key"`)]),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"bing_api_url "),s("span",{style:{color:"#56B6C2","--shiki-dark":"#56B6C2"}},"="),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},' "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey="'),s("span",{style:{color:"#56B6C2","--shiki-dark":"#56B6C2"}}," +"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}}," bing_api_key")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"headers "),s("span",{style:{color:"#56B6C2","--shiki-dark":"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}}," {"),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'"Content-Type"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},": "),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'"application/json"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"data "),s("span",{style:{color:"#56B6C2","--shiki-dark":"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'    "siteUrl"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},": "),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'"https://example.me"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'    "urlList"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},": urls")]),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"response "),s("span",{style:{color:"#56B6C2","--shiki-dark":"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}}," requests."),s("span",{style:{color:"#61AFEF","--shiki-dark":"#61AFEF"}},"post"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"(bing_api_url, "),s("span",{style:{color:"#E06C75","--shiki-dark":"#E06C75","font-style":"italic","--shiki-dark-font-style":"italic"}},"json"),s("span",{style:{color:"#56B6C2","--shiki-dark":"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"data, "),s("span",{style:{color:"#E06C75","--shiki-dark":"#E06C75","font-style":"italic","--shiki-dark-font-style":"italic"}},"headers"),s("span",{style:{color:"#56B6C2","--shiki-dark":"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"headers)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD","--shiki-dark":"#C678DD"}},"if"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}}," response.status_code "),s("span",{style:{color:"#56B6C2","--shiki-dark":"#56B6C2"}},"=="),s("span",{style:{color:"#D19A66","--shiki-dark":"#D19A66"}}," 200"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#56B6C2","--shiki-dark":"#56B6C2"}},"    print"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"("),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'"URLs submitted successfully!"'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD","--shiki-dark":"#C678DD"}},"else"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{color:"#56B6C2","--shiki-dark":"#56B6C2"}},"    print"),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},"("),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},'"Error submitting URLs: "'),s("span",{style:{color:"#ABB2BF","--shiki-dark":"#ABB2BF"}},", response.content)")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),y=a('<h3 id="解读" tabindex="-1"><a class="header-anchor" href="#解读"><span>解读</span></a></h3><p>在上面的脚本中，我们首先指定了Sitemap的URL。然后，我们使用Python中的requests库获取Sitemap的内容，并使用Python中的xml.etree.ElementTree库解析Sitemap中的URL。</p><p>接下来，我们使用Bing API提交URL。我们首先指定Bing API的密钥和API URL，并设置请求头。然后，我们将Sitemap中提取的URL列表作为数据，将其作为JSON格式发送到Bing API。最后，我们检查响应的状态码，以确保URL已成功提交。</p><p>注意：在使用Bing API提交URL之前，需要先注册Bing Webmaster工具，并获取Bing API密钥。还需要将&quot;<a href="https://example.com" target="_blank" rel="noopener noreferrer">https://example.com</a>&quot;替换为自己的站点URL。</p><p>API密钥生成↘️</p><ol><li>访问<a href="https://www.bing.com/webmasters/" target="_blank" rel="noopener noreferrer">Bing Webmaster Tools</a></li><li>右上角设置</li></ol><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/6fb703876007f6b6.png" alt="API密钥生成" width="500" tabindex="0" loading="lazy"><figcaption>API密钥生成</figcaption></figure>',7);function m(A,F){const l=o("CodeTabs");return B(),c("div",null,[k,p(l,{id:"20",data:[{id:"python"}]},{title0:e(({value:n,isActive:t})=>[i("python")]),tab0:e(({value:n,isActive:t})=>[h]),_:1}),y])}const u=r(d,[["render",m],["__file","submit-bing.html.vue"]]),g=JSON.parse('{"path":"/posts/Python/submit-bing.html","title":"使用Bing API提交网站URL","lang":"zh-CN","frontmatter":{"title":"使用Bing API提交网站URL","icon":"tool","subtitle":"python","date":"2023-03-24T10:52:27.000Z","isOriginal":true,"category":["python"],"tag":["工具脚本"],"description":"提示 最近在做SEO，因为链接没有做同步，需要清除之前旧站的链接，重新提交，让搜索引擎尽快索引，google search console的已经基本做差不多了 bing最近因为 New Bing 的原因也用的比较多，所以做了一些工作，很方便的是，它可以直接同步GSC的站点数据，不过就只是域数据，URL还是要自己提交 为了尽快索引，只提交sitemap是...","head":[["meta",{"property":"og:url","content":"https://weijordan.com/posts/Python/submit-bing.html"}],["meta",{"property":"og:site_name","content":"Mr.子冥"}],["meta",{"property":"og:title","content":"使用Bing API提交网站URL"}],["meta",{"property":"og:description","content":"提示 最近在做SEO，因为链接没有做同步，需要清除之前旧站的链接，重新提交，让搜索引擎尽快索引，google search console的已经基本做差不多了 bing最近因为 New Bing 的原因也用的比较多，所以做了一些工作，很方便的是，它可以直接同步GSC的站点数据，不过就只是域数据，URL还是要自己提交 为了尽快索引，只提交sitemap是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://s3.bmp.ovh/imgs/2023/03/24/25889c6c306381f8.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T09:19:33.000Z"}],["meta",{"property":"article:author","content":"子冥"}],["meta",{"property":"article:tag","content":"工具脚本"}],["meta",{"property":"article:published_time","content":"2023-03-24T10:52:27.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-18T09:19:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用Bing API提交网站URL\\",\\"image\\":[\\"https://s3.bmp.ovh/imgs/2023/03/24/25889c6c306381f8.png\\",\\"https://s3.bmp.ovh/imgs/2023/03/24/6fb703876007f6b6.png =500x\\"],\\"datePublished\\":\\"2023-03-24T10:52:27.000Z\\",\\"dateModified\\":\\"2024-10-18T09:19:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"子冥\\",\\"url\\":\\"https://weijordan.com\\"}]}"]]},"headers":[{"level":3,"title":"官方示例","slug":"官方示例","link":"#官方示例","children":[]},{"level":3,"title":"python代码","slug":"python代码","link":"#python代码","children":[]},{"level":3,"title":"解读","slug":"解读","link":"#解读","children":[]}],"git":{"createdTime":1729243173000,"updatedTime":1729243173000,"contributors":[{"name":"weijordan","email":"12012972+weijordan@user.noreply.gitee.com","commits":1}]},"readingTime":{"minutes":1.58,"words":473},"filePathRelative":"posts/Python/submit-bing.md","localizedDate":"2023年3月24日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>最近在做SEO，因为链接没有做同步，需要清除之前旧站的链接，重新提交，让搜索引擎尽快索引，google search console的已经基本做差不多了</p>\\n<p>bing最近因为 <em>New Bing</em> 的原因也用的比较多，所以做了一些工作，很方便的是，它可以直接同步GSC的站点数据，不过就只是域数据，URL还是要自己提交</p>\\n<p>为了尽快索引，只提交sitemap是不够的，还需要调用API手动提交URL</p>\\n</div>","autoDesc":true}');export{u as comp,g as data};
