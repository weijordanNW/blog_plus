import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { viteBundler } from '@vuepress/bundler-vite'
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { oml2dPlugin } from "vuepress-plugin-oh-my-live2d";
import {
  canvasPlugin,
  CanvasPluginType,
} from "./plugins/vuepress-plugin-canvas";
import { live2DAssistPlugin } from "./plugins/vuepress-plugin-live2DAssist";
import { gradientCoverPlugin } from "./plugins/vuepress-plugin-gradient-cover";
import theme from "./theme.js";
import { popperPlugin } from "./plugins/vuepress-plugin-popper";
import { PopperShape } from "@moefy-canvas/theme-popper";
import { hitokotoPlugin } from "./plugins/vuepress-plugin-hitokoto";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import metingPlugin from "vuepress-plugin-meting2";
import {
  devProxy,
  docSearch,
  googleAnalytics,
  imageProxy,
  live2dModels,
  meting,
  siteMeta,
} from "./data/siteLinks.js";

const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  head: [["meta", { name: "referrer", content: "no-referrer-when-downgrade" }]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: siteMeta.blogName,
      description: siteMeta.blogDescription,
    },
  },
  alias: {
    "@MyLink": path.resolve(__dirname, "./components/Mylink.vue"),
    "@MyCoverLink": path.resolve(__dirname, "./components/MyCoverLink.vue"),
    "@Design": path.resolve(__dirname, "./data/design.ts"),
    "@Api": path.resolve(__dirname, "./data/api.ts"),
    "@MyApi": path.resolve(__dirname, "./data/myApi.ts"),
    "@NavWeb": path.resolve(__dirname, "./data/navWeb.ts"),
  },

  theme: theme,

  port: 9527,

  bundler: viteBundler({
    viteOptions: {
      server: {
        proxy: {
          "/bing": {
            target: devProxy.bingTarget,
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/bing/, ""),
          },
          // 本地开发时同样把 /gh/ 图片代理回源，保证 dev 环境图片可见
          [imageProxy.route]: {
            target: imageProxy.upstreamOrigin,
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/gh/, ""),
          },
        },
      }
    },
    // 关闭绝对路径静态资源转换，避免 Vite 把 /gh/ 代理路径当作本地文件去解析
    vuePluginOptions: {
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    },
  }),

  // 构建期把 raw.githubusercontent.com 的图片地址改写为同域 /gh/ 代理路径，
  // 规避国内网络对 raw.githubusercontent.com 的阻断；原文不被修改，重新同步后依然生效。
  // 渲染层（Markdown 图片 + 内嵌 HTML img）：
  extendsMarkdown: (md) => {
    const { sourcePrefix, route } = imageProxy;
    const rewrite = (value?: string | null) =>
      value && value.startsWith(sourcePrefix)
        ? value.replace(sourcePrefix, route)
        : value;

    md.core.ruler.push("rewrite-github-raw-images", (state) => {
      const walk = (tokens: typeof state.tokens) => {
        for (const token of tokens) {
          if (token.type === "image") {
            const src = token.attrGet("src");
            const next = rewrite(src);
            if (next !== src) token.attrSet("src", next as string);
          } else if (token.type === "html_block" || token.type === "html_inline") {
            token.content = token.content.split(sourcePrefix).join(route);
          }
          if (token.children) walk(token.children);
        }
      };
      walk(state.tokens);
      return true;
    });
  },

  // SEO 插件的 og:image（以及 RSS 内容）取自 page.content，且必须是绝对地址，
  // 这里改写为博客对外域名下的同域反代地址，避免分享缩略图仍指向被墙域名：
  extendsPage: (page) => {
    page.content = page.content
      .split(imageProxy.sourcePrefix)
      .join(`${imageProxy.publicOrigin}${imageProxy.route}`);
  },
  plugins: [
    metingPlugin({
      metingOptions: {
        global: true,
        server: "tencent",
        // api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r",
        api: meting.api,
        type: "playlist",
        mid: meting.mid,
        aplayerOptions: {
          lrcDisplay: 'hide'
        }
      },
    }),
    // 一言插件
    hitokotoPlugin({}),
    // 鼠标特效插件
    popperPlugin({
      config: {
        shape: PopperShape.Star,
        size: 1.95,
        numParticles: 8,
      },
    }),
    // 看板娘辅助插件
    live2DAssistPlugin({
      subPageHidden: true,
    }),
    // 背景插件
    canvasPlugin({
      type: CanvasPluginType.Figure,
      // type: CanvasPluginType.Ribbon,
      ribbonOption: {
        zIndex: 1,
        alpha: 0.8,
        size: 90,
      },
    }),
    // 遮罩插件
    gradientCoverPlugin({}),
    // 谷歌统计
    googleAnalyticsPlugin({
      // 配置项
      id: googleAnalytics.id,
      debug: false,
    }),
    // 搜索插件，维护来源：data/siteLinks.ts；索引内容由 Algolia 远程爬虫更新
    docsearchPlugin({
      appId: docSearch.appId,
      apiKey: docSearch.apiKey,
      indexName: docSearch.indexName,
      locales: {
        "/": {
          placeholder: "搜索内容",
          translations: {
            button: {
              buttonText: "搜索",
              buttonAriaLabel: "搜索",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    }),
    // 看板娘插件
    oml2dPlugin({
      models: [
        {
          scale: 0.04,
          path: live2dModels.sipeibojue,
          position: [0, 70],
          stageStyle: {
            height: 350
          }
        },
        {
          scale: 0.04,
          path: live2dModels.lafei,
          position: [0, 80],
          stageStyle: {
            height: 360
          }
        },
        {
          scale: 0.1,
          path: live2dModels.z46,
          position: [0, 60],
          stageStyle: {
            height: 330
          }
        },
      ],
      tips: {
        idleTips: {
          wordTheDay:true
        },
      },
    })
  ],
  // Enable it with pwa
  shouldPrefetch: false,
});
