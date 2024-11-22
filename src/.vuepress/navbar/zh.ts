import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "导航", icon: "discover", link: "/demo/" },
  { text: "HOME", icon: "home1", link: "https://home.weijordan.com/" },
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
        prefix: "/blog/",
        children: [
          { text: "博客相关", icon: "bokeyuan", link: "" },
        ],
      },
      // 项目相关
      {
        text: "项目相关",
        prefix: "/project/",
        children: [
          { text: "部署", icon: "bushu", link: "" },
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
          { text: "子冥の库", icon: "wangpan1", link: "https://dist.weijordan.com/" },
          { text: "子冥のAI", icon: "chat_gpt", link: "https://chatgpt.weijordan.com/" },
          { text: "监控服务", icon: "jiankong", link: "https://status.weijordan.com/" },
        ],
      },
      // 其他项目
      {
        text: "其他项目",
        // prefix: "/project/",
        children: [
          { text: "webSSH", icon: "WEBSSH", link: "https://ssh.zcmu.us.kg/" },
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
    link: "/",
    // children: [
    //   { text: "关于我", icon: "people", link: "/intro" },
    //   { text: "关于本站", icon: "info", link: "/about" },
    // ]
  },
]);
