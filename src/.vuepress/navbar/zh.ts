import { navbar } from "vuepress-theme-hope";
import { externalLinks, routes } from "../data/siteLinks.js";

export const zhNavbar = navbar([
  routes.home,
  { text: "导航", icon: "discover", link: routes.demo },
  { text: "HOME", icon: "home1", link: externalLinks.home },
  // 笔记分类
  {
    text: "笔记分类",
    icon: "edit",
    children: [
      // 代码笔记
      {
        text: "代码笔记",
        prefix: routes.posts,
        children: [
          // { text: "iOS笔记", icon: "hk-apple", link: "iOS/" },
          { text: "前端笔记", icon: "code", link: "Web/" },
          { text: "Linux", icon: "linux", link: "Linux/" },
          { text: "Python", icon: "python", link: "Python/" },
          { text: "运维", icon: "yunwei", link: "运维/" },
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
        prefix: routes.blog,
        children: [
          { text: "博客相关", icon: "bokeyuan", link: "" },
        ],
      },
      // 项目相关
      {
        text: "项目相关",
        prefix: routes.project,
        children: [
          { text: "部署", icon: "bushu", link: "" },
        ],
      },
      // // 笔记平台
      // {
      //   text: "语雀",
      //   prefix: "/_yuque/",
      //   children: [
      //     { text: "首页", icon: "bokeyuan", link: "" },
      //   ],
      // },
      // 笔记平台
      {
        text: "语雀",
        prefix: routes.yuque,
        children: [
          { text: "首页", icon: "bokeyuan", link: "" },
        ],
      },
      {
        text: "飞书",
        prefix: routes.feishu,
        children: [
          { text: "首页", icon: "bokeyuan", link: "" },
        ],
      },
    ],
  },
  // 工具
  {
    text: "工具",
    icon: "edit",
    children: [
      // 我的项目
      {
        text: "我的项目",
        children: [
          { text: "子冥の库", icon: "wangpan1", link: externalLinks.projectDist },
          { text: "子冥のAI", icon: "chat_gpt", link: externalLinks.projectAi },
          { text: "监控服务", icon: "jiankong", link: externalLinks.projectStatus },
        ],
      },
      // 其他项目
      {
        text: "其他项目",
        // prefix: "/project/",
        children: [
          { text: "webSSH", icon: "WEBSSH", link: externalLinks.webSsh },
        ],
      },
    ],
  },
  // 软件教程
  {
    text: "软件教程",
    icon: "software",
    link: routes.tutorial,
  },
  // 收藏
  {
    text: "收藏",
    icon: "hk-shoucang1",
    link: routes.collect,
  },
  // 说说
  {
    text: "说说",
    icon: "news",
    link: routes.news,
    // link: "/",
  },
  // 留言板
  {
    text: "留言板",
    icon: "mark",
    link: routes.visitorsBook,
  },
  // 友链
  {
    text: "友链",
    icon: "link",
    link: routes.friend,
    // link: "/",
  },
  // 库
  // {
  //   text: "资源仓库",
  //   icon: "link",
  //   link: "/repo",
  //   // link: "/",
  // },
  // 关于
  {
    text: "关于",
    icon: "info",
    link: routes.home,
    // children: [
    //   { text: "关于我", icon: "people", link: "/intro" },
    //   { text: "关于本站", icon: "info", link: "/about" },
    // ]
  },
]);
