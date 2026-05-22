/**
 * 全站固定链接维护入口。
 *
 * 来源说明：
 * - 顶部导航：src/.vuepress/navbar/zh.ts
 * - 侧边栏：src/.vuepress/sidebar/zh.ts，多数目录来自 VuePress Theme Hope 的 structure 自动扫描
 * - 主题信息：src/.vuepress/theme.ts
 * - 插件服务：src/.vuepress/config.ts
 * - 卡片数据：src/.vuepress/data/*.ts
 * - 文章内容：src 下的 Markdown 文件，飞书/语雀同步内容会直接写入 Markdown
 */

export const siteMeta = {
  hostname: "https://weijordan.com",
  authorName: "子冥",
  blogName: "Mr.子冥",
  blogDescription: "Mr.子冥的博客",
  authorUrl: "https://weijordan.com",
  email: "1985615319@qq.com",
  introPath: "/intro.html",
  docsDir: "src",
};

// 来源：顶部导航、主题 repo、社交链接、友链自站信息。
export const externalLinks = {
  home: "https://home.weijordan.com/",
  githubProfile: "https://github.com/weijordanNW",
  githubRepositories: "https://github.com/weijordanNW?tab=repositories",
  gitee: "https://gitee.com/weijordan",
  baidu: "https://www.baidu.com/",
  bilibili: "https://space.bilibili.com/102611372?spm_id_from=333.999.0.0",
  zhihu: "https://www.zhihu.com/",
  flowus: "https://flowus.cn/share/309cdcc3-8f77-4c7b-8057-55ab76451472?code=MWEDM0",
  flowusIcon: "https://cdn2.flowus.cn/assets/_next/static/media/home-logo.78d948f2.png",
  projectDist: "https://dist.weijordan.com/",
  projectAi: "https://chatgpt.weijordan.com/",
  projectStatus: "https://status.weijordan.com/",
  webSsh: "https://ssh.zcmu.us.kg/",
};

// 来源：顶部导航、侧边栏、首页 action link 等内部路由。
export const routes = {
  home: "/",
  demo: "/demo/",
  posts: "/posts/",
  blog: "/blog/",
  project: "/project/",
  yuque: "/yuque/",
  feishu: "/feishu/",
  tutorial: "/tutorial/",
  collect: "/collect",
  news: "/news/",
  visitorsBook: "/visitorsbook",
  friend: "/friend",
  about: "/about",
  site: "/site/",
};

// 来源：src/.vuepress/config.ts 的 DocSearch 插件。索引由 Algolia 远程维护。
export const docSearch = {
  appId: "0DW62MPRT9",
  apiKey: "ea2478e10022c973bbae2eb240f90c8a",
  indexName: "weijordan",
};

// 来源：src/.vuepress/config.ts 的统计插件。
export const googleAnalytics = {
  id: "G-R1WPVQFH8L",
};

// 来源：src/.vuepress/config.ts 的音乐插件。
export const meting = {
  api: "https://api.injahow.cn/meting/?type=playlist&id=2619366284",
  playlistId: "2619366284",
  mid: "851947617",
};

// 来源：src/.vuepress/config.ts 的 dev server 代理。
export const devProxy = {
  bingTarget: "https://cn.bing.com",
};

// 来源：src/.vuepress/config.ts 的看板娘模型。
export const live2dModels = {
  sipeibojue: "https://cdn.jsdelivr.net/gh/oragekk/blog-assets/live2D/sipeibojue_5/sipeibojue_5.model3.json",
  lafei: "https://cdn.jsdelivr.net/gh/oragekk/blog-assets/live2D/lafei_4/lafei_4.model3.json",
  z46: "https://cdn.jsdelivr.net/gh/oragekk/blog-assets/live2D/z46_2/z46_2.model3.json",
};

// 来源：src/.vuepress/theme.ts 的评论插件。
export const waline = {
  serverURL: "https://blogcomment-omega.vercel.app/",
  emoji: [
    "https://unpkg.com/@waline/emojis@1.1.0/tieba",
    "https://unpkg.com/@waline/emojis@1.1.0/weibo",
    "https://emoji.shojo.cn/bili/webp/tv_小电视_动图",
    "https://emoji.shojo.cn/bili/webp/罗小黑战记",
    "https://emoji.shojo.cn/bili/webp/2233娘",
    "https://emoji.shojo.cn/bili/webp/装扮小姐姐梦幻冬季",
    "https://emoji.shojo.cn/bili/webp/装扮小姐姐·秋日午后",
    "https://emoji.shojo.cn/bili/webp/星尘",
    "https://emoji.shojo.cn/bili/webp/池年",
  ],
};

// 来源：src/.vuepress/theme.ts 的 PWA 配置。
export const pwaAssets = {
  favicon: "/favicon.ico",
  appleIcon: "/assets/icon/apple-icon-152.png",
  msIcon: "/assets/icon/ms-icon-144.png",
  chromeMask512: "/assets/icon/chrome-mask-512.png",
  chromeMask192: "/assets/icon/chrome-mask-192.png",
  chrome512: "/assets/icon/chrome-512.png",
  chrome192: "/assets/icon/chrome-192.png",
  guideMaskable: "/assets/icon/guide-maskable.png",
};

// 来源：src/.vuepress/theme.ts 的 iconfont 资源。
export const iconAssets = [
  "//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css",
  "//at.alicdn.com/t/c/font_3941380_00g6dc2nedwir.css",
  "//at.alicdn.com/t/c/font_4751228_8j43wz6fesq.css",
];

// 来源：src 下的 Markdown 文件与 Elog 配置。这里仅记录规则，不主动改写文章。
export const contentLinkSources = {
  feishuImageRawPrefix: "https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/",
  yuqueImageRawPrefix: "https://raw.githubusercontent.com/weijordanNW/blog_plus/main/yuque/",
  feishuMarkdownRoot: "src/feishu",
  yuqueMarkdownRoot: "src/yuque",
};
