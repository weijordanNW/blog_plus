![](https://img.shields.io/badge/version-2.7.2-orange) ![](https://img.shields.io/badge/theme-hope-green) ![](https://img.shields.io/badge/powerby-vuepress-lightgrey?style=flat-square&logo=appveyor) ![](https://img.shields.io/badge/deploy-vercel-lightgrey?style=flat-square&logo=vercel) ![](https://img.shields.io/github/last-commit/oragekk/oragekk.github.io?display_timestamp=committer)

# 博客源码

地址：[https://weijordan.com](https://weijordan.com)

基于 `vuepress2.x`和 `vuepress-theme-hope`开发，基于TypeScript使用vue3编写组件

## 框架支持

[vuepress2.x](https://v2.vuepress.vuejs.org/zh/)

## 主题支持

[vuepress-theme-hope](https://theme-hope.vuejs.press/zh/)

## 自定义内容

基于原主题进行了继承，个性化内容如下，主要自定义内容分为

1. **自定义布局**

   - NotFound.vue
   - Layout.vue(增加打赏组件)
   - News.vue(说说列表布局)
2. **自定义组件**

   - BlogHero.vue
   - PageFooter.vue
   - Sponsor.vue（打赏组件）
   - NewsList.vue （说说列表）
   - NewsItem.vue （说说item）
3. **插件开发**

   - vuepress-plugin-canvas（支持彩虹背景和动态几何图形两种）
   - vuepress-plugin-gradient-cover （遮罩背景）
   - vuepress-plugin-hitokoto （一言插件）
   - vuepress-plugin-live2DAssist （看板娘辅助，由于子页有sidebar，看板娘会挡住，所以写了一个子页隐藏的小东西）

   <!-- - vuepress-plugin-popper （鼠标特效，基于[@moefy-canvas/theme-popper](https://github.com/moefyit/moefy-canvas)）
   - [vuepress-plugin-meting2](https://github.com/OrageKK/vuepress-plugin-meting2) （播放器插件，可以全局使用和md文件使用） -->
4. **引用外部内容**

   - [vuepress-plugin-oh-my-live2d](https://github.com/oh-my-live2d/vuepress-plugin-oh-my-live2d) 看板娘插件
   - 不蒜子统计
   - [@moefy-canvas/theme-popper](https://github.com/moefyit/moefy-canvas)原有插件只支持vuepress1.x，自己基于moefy-canvas进行了支持vuepress2.x的本地化插件开发
   - [@vuepress/plugin-google-analytics](https://v2.vuepress.vuejs.org/zh/reference/plugin/google-analytics.html) 支持Google Analytics 4 正好看到通知原来的UA也要被强制转换了，所以更换了G4
5. **配置内容**

   - navbar
   - sidebar
   - 评论基于 [Waline](https://waline.js.org/)
   - 搜索基于[algolia](https://www.algolia.com/developers/?utm_content=powered_by&utm_source=localhost&utm_medium=referral&utm_campaign=docsearch)
   - 启用 copyright 版权信息插件
   - feed rss插件
   - 增加文章类型-说说，为说说markdown图片添加预览选择器
6. **零碎**

   - 运行时间统计
   - CSS 样式美化
   - 引入字体，品如手写体，夏行楷体
   - waline 增加自定义emoji，并修改展示样式
   - 个性log

   <!-- - 自动推送新文章url到搜索引擎（百度、Bing、Google）👉[详细配置](https://weijordan.com/blog/auto-push.html) -->

## 使用方式

因本项目为个人项目，其中有很多个性化配置，不建议直接clone使用，可以选择你喜欢的内容模块（本地插件、本地替换组件）到自己项目中使用

> 详细介绍参考：[关于本站](https://weijodan/about)

## docker-compose 部署

```
# version: '3'  # docker-compose的版本

services:
  blog_plus: # 服务名称
    image: weijordan/blog_plus # 镜像名称
    container_name: blog_plus # 容器名称
    ports:
      - "3002:80"  # 将容器的80端口映射到宿主机的8080端口
    volumes:
      - /myDocker/blog_plus:/app  # 将宿主机的/data/blog_plus目录映射到容器内的/app目录
    # environment:
    #   - EXAMPLE_VAR=example_value  # 如果需要，设置环境变量
    restart: unless-stopped # 容器退出时总是重启
    networks:
      - webnet # 加入网络

networks:
  webnet: # 定义网络
  # 使用外部网络，如果存在则使用，不存在则创建
    # external: true # 外部网络
    # name: nginx_proxy # 网络名称
    # 如果不存在则创建网络
    # driver: bridge # 网络类型


  # 运行容器
  # docker-compose up -d
  # 检查运行情况
  # docker-compose ps
  # 停止并移除容器
  # docker-compose down
  # 停止容器
  # docker-compose stop
  # 启动容器
  # docker-compose start
  # 重启容器
  # docker-compose restart

```

## 搜索

algolia爬虫配置

```
new Crawler({
  appId: "YOUR_APP_ID",
  apiKey: "YOUR_API_KEY",
  rateLimit: 8,

  // 这是 Algolia 开始抓取网站的初始地址
  // 如果你的网站被分为数个独立部分，你可能需要在此设置多个入口链接
  startUrls: ["https://weijordan.com"],

  sitemaps: ["https://weijordan.com/sitemap.xml"],
  ignoreCanonicalTo: false,

  // 你可以通过它阻止 Algolia 抓取某些 URL
  exclusionPatterns: [],

  // 这是 Algolia 抓取 URL 的范围
  discoveryPatterns: ["https://weijordan.com/**"],

  // 爬虫执行的计划时间，可根据文档更新频率设置
  schedule: "at 02:00 every 1 day",
  actions: [
    // 你可以拥有多个 action，特别是你在一个域名下部署多个文档时
    {
      indexName: "YOUR_INDEX_NAME",
      // 索引生效的路径
      pathsToMatch: ["https://weijordan.com/**"],
      recordExtractor: ({ $, helpers }) => {

        // 以下是适用于 vuepress-theme-hope 的默认选项选项
	//这里需要根据不同框架或者文档来进行修改
        return helpers.docsearch({
          recordProps: {
            lvl0: {
              selectors: [".vp-sidebar-link.active", "h1"], // 更通用的选择器
              defaultValue: "Documentation",
            },
            lvl1: "h1", // 具体选择器
            lvl2: "h2",
            lvl3: "h3",
            lvl4: "h4",
            lvl5: "h5",
            lvl6: "h6",
            content: "p, li, [vp-content] p, [vp-content] li", // 添加多个选择器
          },
          recordVersion: "v3",
        });
      },
    },
  ],
  initialIndexSettings: {
    YOUR_INDEX_NAME: {
      attributesForFaceting: ["type", "lang"],
      attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "unordered(hierarchy_radio_camel.lvl0)",
        "unordered(hierarchy_radio.lvl0)",
        "unordered(hierarchy_radio_camel.lvl1)",
        "unordered(hierarchy_radio.lvl1)",
        "unordered(hierarchy_radio_camel.lvl2)",
        "unordered(hierarchy_radio.lvl2)",
        "unordered(hierarchy_radio_camel.lvl3)",
        "unordered(hierarchy_radio.lvl3)",
        "unordered(hierarchy_radio_camel.lvl4)",
        "unordered(hierarchy_radio.lvl4)",
        "unordered(hierarchy_radio_camel.lvl5)",
        "unordered(hierarchy_radio.lvl5)",
        "unordered(hierarchy_radio_camel.lvl6)",
        "unordered(hierarchy_radio.lvl6)",
        "unordered(hierarchy_camel.lvl0)",
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy_camel.lvl1)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy_camel.lvl2)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy_camel.lvl3)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy_camel.lvl4)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy_camel.lvl5)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy_camel.lvl6)",
        "unordered(hierarchy.lvl6)",
        "content",
      ],
      distinct: true,
      attributeForDistinct: "url",
      customRanking: [
        "desc(weight.pageRank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "attribute",
        "proximity",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
    },
  },
});
```

## 拉取文档

支持语雀和飞书双平台同步，缓存自动分离。

### 语雀同步

```bash
# 同步语雀文档
pnpm run sync-yuque

# 更新语雀文档的 FrontMatter
pnpm run update-frontmatter-yuque
```

### 飞书同步

```bash
# 同步飞书文档（自动移除空容器）
pnpm run sync-feishu

# 更新飞书文档的 FrontMatter
pnpm run update-frontmatter-feishu
```

> **飞书同步特性**：同步完成后自动删除只有 frontmatter 无正文的父文档（如 `AI.md`、`前端.md` 等飞书知识库嵌套容器），只保留有实际内容的文档。`update-frontmatter-feishu` 会自动根据文档层级路径生成 `category`（如 `AI/CC`、`前端/方案/通信`）。

> 注：package.json 中已将 "type": "module" 改为 "type": "commonjs"，无需反复修改。

## 版本更新日志

详见 [CHANGELOG.md](CHANGELOG.md)
