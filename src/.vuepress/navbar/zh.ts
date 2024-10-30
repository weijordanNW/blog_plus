import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "导航", icon: "discover", link: "/demo/" },
  // 笔记分类
  {
    text: "笔记分类",
    icon: "edit",
    children: [
      // 代码笔记
      {
        text: "代码笔记",
        prefix: "/posts/",
        children: [
          // { text: "iOS笔记", icon: "hk-apple", link: "iOS/" },
          { text: "前端笔记", icon: "code", link: "Web/" },
          { text: "Linux", icon: "linux", link: "Linux/" },
          { text: "Python", icon: "python", link: "Python/" },
          { text: "运维", icon: "code", link: "运维/" },
          // { text: "Rust", icon: "hk-rust", link: "Rust/" },
          // { text: "React", icon: "react", link: "cross-platform/ReactNative/" },
          // {
          //   text: "Flutter",
          //   icon: "hk-flutter",
          //   link: "cross-platform/Flutter/",
          // },
        ],
      },
      // 博客相关
      {
        text: "博客相关",
        prefix: "/blog/",
        children: [
          { text: "博客相关", icon: "blog", link: "" },
        ],
      },
      // 项目相关
      {
        text: "项目相关",
        prefix: "/project/",
        children: [
          { text: "部署", icon: "blog", link: "" },
        ],
      },
    ],
  },
  // 软件教程
  {
    text: "软件教程",
    icon: "software",
    link: "/tutorial/",
  },
  // 收藏
  {
    text: "收藏",
    icon: "hk-shoucang1",
    link: "/collect",
  },
  // 说说
  {
    text: "说说",
    icon: "news",
    link: "/news/",
    // link: "/",
  },
  // 留言板
  {
    text: "留言板",
    icon: "mark",
    link: "/visitorsbook",
  },
  // 友链
  {
    text: "友链",
    icon: "link",
    link: "/friend",
    // link: "/",
  },
  // 关于
  {
    text: "关于",
    icon: "info",
    link: "/",
    // children: [
    //   { text: "关于我", icon: "people", link: "/intro" },
    //   { text: "关于本站", icon: "info", link: "/about" },
    // ]
  },
]);
