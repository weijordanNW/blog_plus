import { MyTheme } from "./theme/index";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";
import {
  externalLinks,
  iconAssets,
  pwaAssets,
  routes,
  siteMeta,
  waline,
} from "./data/siteLinks.js";
export default MyTheme({
  hotReload: false,
  hostname: siteMeta.hostname,// 域名，维护来源：data/siteLinks.ts
  themeColor: true,
  fullscreen: true,
  author: {
    name: siteMeta.authorName,
    url: siteMeta.authorUrl,// 个人主页，维护来源：data/siteLinks.ts
  },

  iconAssets,

  logo: "/logo.svg",

  repo: externalLinks.githubRepositories,// 仓库地址，维护来源：data/siteLinks.ts

  docsDir: siteMeta.docsDir,

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Wormhole", "Travelling", "Outlook", "Search"],
  },

  blog: {
    medias: {
      GitHub: externalLinks.githubProfile,
      Gitee: externalLinks.gitee,

      Baidu: externalLinks.baidu,
      BiliBili: externalLinks.bilibili,
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: siteMeta.email,
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitlab: "https://example.com",
      Gmail: "mailto:info@example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      Zhihu: externalLinks.zhihu,
      // 自定义
      Flowus: {
        icon: externalLinks.flowusIcon,
        link: externalLinks.flowus,
      },

      // VuePressThemeHope: {
      //   // icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //   icon: "https://fanchens.github.io/vuepress/assets/img/logo.png",
      //   // icon: "./assets/img/logo.png",
      //   link: "https://theme-hope.vuejs.press",
      // },
      // timeline:"昨日不在", //时间轴的顶部文字。
      // articlePerPage:10, //每页的文章数量。
      // articleInfo:["Author", "Original", "Date", "PageView", "Category", "Tag", "ReadingTime"], //文章列表中展示的文章信息

    },
    name: siteMeta.blogName,
  },
  locales: {
    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "默认页脚",

      displayFooter: false,

      blog: {
        description: "waiting for",
        intro: siteMeta.introPath,
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },
  // navbarAutoHide: "always",
  // 加密
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },
  plugins: {
    // 代码高亮
    shiki: {
      themes: {
        light: "one-dark-pro",
        dark: "one-dark-pro",
      },
      lineNumbers: 15,
    },
    components: {
      components: ["BiliBili", "Badge"],
    },
    blog: {
      filter: ({ filePathRelative, frontmatter }) => {
        // 将标记为非文章，并且是说说的加入文章采集中，以便后续筛选
        if (!frontmatter.article && frontmatter.news) return true;

        return true;
      },

      type: [
        {
          key: "news",
          filter: (page) => page.frontmatter.news === true,
          path: false,
        },
      ],
    },
    photoSwipe: {
      selector: [
        ".theme-hope-content :not(a) > img:not([no-view])",
        ".news-content :not(a) > .vp-article-excerpt img",
      ],
    },
    git: true,
    feed: {
      rss: true,
    },
    comment: {
      provider: "Waline",
      // serverURL: "https://talk.oragekk.me/", // your server url
      // serverURL: "https://blog-comment-two-ochre.vercel.app",// your server url
      serverURL: waline.serverURL,// your server url，维护来源：data/siteLinks.ts
      reaction: true,
      requiredMeta: ["nick", 'mail'],
      wordLimit: 300,
      emoji: waline.emoji,
      locales: {
        "/": {
          placeholder:
            "欢迎留言~ _(≧∇≦」∠)_ (填写常用邮箱即可快速收到回复通知~)",
        },
      },
    },
    prismjs: false,
    copyright: {
      author: "子冥",//作者
      license: "CC BY-NC-SA 4.0",
      global: true,
    },
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      tasklist: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },

      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    pwa: {
      favicon: pwaAssets.favicon,
      cacheHTML: false,
      cacheImage: false,
      appendBase: true,
      apple: {
        icon: pwaAssets.appleIcon,
        statusBarColor: "black",
      },
      msTile: {
        image: pwaAssets.msIcon,
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: pwaAssets.chromeMask512,
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: pwaAssets.chromeMask192,
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: pwaAssets.chrome512,
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: pwaAssets.chrome192,
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: routes.demo,
            icons: [
              {
                src: pwaAssets.guideMaskable,
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
