import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "creative",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "代码笔记",
      icon: "note",
      prefix: "posts/",
      // collapsible: true,
      children: [
        // {
        //   text: "iOS",
        //   icon: "hk-apple",
        //   prefix: "iOS/",
        //   link: "iOS/",
        //   // children: ["swift/", "source/", "other/", "tool/", "system/", "ui/"],
        // },
        {
          text: "跨平台开发",
          icon: "relation",
          prefix: "cross-platform/",
          link: "cross-platform/",
          // children: ["Flutter/", "ReactNative/"],
        },
        {
          text: "前端开发",
          icon: "code",
          prefix: "Web/",
          link: "Web/",
          // children: ["Browser/", "JavaScript/", "CSS/", "node/", "Vue/"],
        },
        {
          text: "Linux",
          icon: "linux",
          prefix: "Linux/",
          link: "Linux/",
        },
        {
          text: "Python",
          icon: "python",
          prefix: "Python/",
          link: "Python/",
        },
        {
          text: "运维",
          icon: "yunwei",
          prefix: "运维/",
          link: "运维/",
        },
        // {
        //   text: "Rust",
        //   icon: "hk-rust",
        //   prefix: "Rust/",
        //   link: "Rust/",
        // },
      ],
    },
    {
      text: "软件/工具教程",
      icon: "software",
      prefix: "tutorial/",
      link: "tutorial/",
    },
    {
      text: "博客相关",
      icon: "blog",
      prefix: "blog/",
      link: "blog/",
    },
    {
      text: "项目相关",
      icon: "wodexiangmuicon1x",
      prefix: "project/",
      link: "project/",
    },
    {
      text: "语雀",
      icon: "note",
      prefix: "yuque/",
      link: "yuque/",
    },
    {
      text: "站点收藏",
      icon: "sitemap",
      prefix: "site",
      link: "site/",
      children: "structure",
    },
    {
      text: "随笔",
      icon: "flower",
      prefix: "private/",
      children: "structure",
    },
    {
      text: "关于",
      icon: "info",
      prefix: "about/",
      link: "about",
    },
  ],
  "/posts/Linux/": "structure",
  "/posts/运维/": "structure",
  // "/posts/Python/": "structure",
  "/posts/cross-platform/Flutter/": "structure",
  "/posts/cross-platform/ReactNative/": "structure",
  // "/posts/iOS/": "structure",
  "/posts/Web/": "structure",
  "/site/": "structure",
  "/blog": "structure",
  "/project": "structure",
  "/tutorial": "structure",
  "/yuque": "structure",
});
