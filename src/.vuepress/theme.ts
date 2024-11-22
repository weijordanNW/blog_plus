import { MyTheme } from "./theme/index";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";
export default MyTheme({
  hotReload: true,
  hostname: "https://weijordan.com",// 域名
  themeColor: true,
  fullscreen: true,
  author: {
    name: "子冥",
    url: "https://weijordan.com",// 个人主页
  },

  iconAssets: [
    // 默认：
    "//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css",
    // 二级
    "//at.alicdn.com/t/c/font_3941380_00g6dc2nedwir.css",
    // 自己
    "//at.alicdn.com/t/c/font_4751228_8j43wz6fesq.css"
  ],

  logo: "/logo.svg",

  repo: "https://github.com/weijordanNW?tab=repositories",// 仓库地址

  docsDir: "src",

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Wormhole", "Travelling", "Outlook", "Search"],
  },

  blog: {
    medias: {
      GitHub: "https://github.com/weijordanNW",
      Gitee: "https://gitee.com/weijordan",

      Baidu: "https://www.baidu.com/",
      BiliBili: "https://space.bilibili.com/102611372?spm_id_from=333.999.0.0",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "1985615319@qq.com",
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
      Zhihu: "https://www.zhihu.com/",
      // 自定义
      Flowus: {
        icon: "https://cdn2.flowus.cn/assets/_next/static/media/home-logo.78d948f2.png",
        link: "https://flowus.cn/share/309cdcc3-8f77-4c7b-8057-55ab76451472?code=MWEDM0",
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
    name: "Mr.子冥",
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
        intro: "/intro.html",
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
          layout: "News",
          frontmatter: () => ({ title: "说说" }),
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
      serverURL: "https://blogcomment-omega.vercel.app/",// your server url
      reaction: true,
      requiredMeta: ["nick", 'mail'],
      wordLimit: 300,
      emoji: [
        "https://unpkg.com/@waline/emojis@1.1.0/tieba",
        "https://unpkg.com/@waline/emojis@1.1.0/weibo",
        "https://emoji.shojo.cn/bili/webp/tv_小电视_动图",
        "https://emoji.shojo.cn/bili/webp/罗小黑战记",
        "https://emoji.shojo.cn/bili/webp/2233娘",
        "https://emoji.shojo.cn/bili/webp/装扮小姐姐梦幻冬季",
        "https://emoji.shojo.cn/bili/webp/装扮小姐姐·秋日午后",
        "https://emoji.shojo.cn/bili/webp/星尘",
        "https://emoji.shojo.cn/bili/webp/池年"
      ],
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
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"]
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
      favicon: "/favicon.ico",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
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
