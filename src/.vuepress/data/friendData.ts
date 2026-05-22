import { siteMeta } from "./siteLinks.js";

export interface LinkData {
  name: string;
  desc: string;
  icon: string;
  link: string;
}

export const friends: LinkData[] = [
  {
    name: siteMeta.authorName,
    desc: "waiting for",
    icon: "/logo.svg",
    link: siteMeta.authorUrl,
  },
  {
    name: 'KASUIEの次元', //网站的名称
    desc: '喜欢温柔的人', //网站的描述
    icon: 'https://kasuie.cc/avatar.webp', //网站的图标/或你的头像
    link: 'https://kasuie.cc', //网站的地址
  },
  {
    name: '安知鱼', //网站的名称
    desc: '生活明朗，万物可爱', //网站的描述
    icon: 'https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg', //网站的图标/或你的头像
    link: 'https://blog.anheyu.com/', //网站的地址
  },
  // {
  //   name: "上冬十二",
  //   desc: "到最后，竟庆幸于夕阳仍留在身上",
  //   icon: "/logo.svg",
  //   link: "https://oragekk.me/",
  // },
  {
    name: "廿壴(GANXB2)博客",
    desc: "探讨WEB技术.交流日常生活.感悟短暂人生.分享简单快乐",
    icon: "https://blog.ganxb2.com/img/avatar.png",
    link: "https://blog.ganxb2.com/",
  },
  {
    name: "Mr.Hope",
    desc: "VuePress Theme Hope 主题作者。",
    icon: "https://mister-hope.com/logo.svg",
    link: "https://mister-hope.com/",
  },
  {
    name: "一之笔",
    desc: "大圣，此去欲何？踏南天，碎凌霄，如若一去不回……？便一去不回！💪",
    icon: "https://yizibi.github.io/img/avatar-hux-ny.jpg",
    link: "https://yizibi.github.io/",
  },
  {
    name: "Vivian陈薇",
    desc: "《程序员》专题主编 Android程序媛",
    icon: "http://upload.jianshu.io/users/upload_avatars/196894/99323ae8-5924-4730-b73f-9d0d284ff243.png?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
    link: "http://www.vivianchen.cn/",
  },
  {
    name: "Bing🐣",
    desc: "基于VuePress的个人博客，记录日常开发问题",
    icon: "https://liubing.me/logo.png",
    link: "https://liubing.me/",
  },
  {
    name: "SaraKale’s blog",
    desc: "星轮流转，唯心不变…",
    icon: "https://npm.elemecdn.com/sarakale-assets@v1/sarakale.jpg",
    link: "https://www.sarakale.top/blog/",
  },
  {
    name: "Leonus",
    desc: "进一寸有进一寸的欢喜。",
    icon: "https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5",
    link: "https://blog.leonus.cn/",
  },
  {
    name: "UyoAhz",
    desc: "集中精神，以气御剪",
    icon: "https://q1.qlogo.cn/g?b=qq&nk=2496091142&s=640",
    link: "https://uyoahz.cn/",
  },
  {
    name: "铭心石刻",
    desc: "愿岁并谢，与友长兮",
    icon: " https://blog.kouseki.cn/imgs/avatar.webp",
    link: "https://blog.kouseki.cn/",
  },
  {
    name: "Anjhon’s blog",
    desc: "但知行好事，莫要问前程",
    icon: "https://s2.loli.net/2023/05/16/MdciSXAbrEx3LW9.jpg",
    link: "https://www.anjhon.top/",
  },
  {
    name: "OhYee ⭐",
    desc: "个人向笔记性质技术分享，共产主义开源编程🤪",
    icon: "https://static.ohyee.cc/logo.svg",
    link: "https://www.ohyee.cc/",
  },
  {
    name: "寒烟志",
    desc: "半山腰总是挤的，你得去山顶看看",
    icon: "https://www.qiaoxiao.top/static/avater/avater.jpg",
    link: "https://yanyuplus.cn/",
  },
  {
    name: "Quantum Bit",
    desc: "Never stop searching, even if only for a brief flash of light.",
    icon: "https://www.eula.club/avatar.png",
    link: "https://www.eula.club"
  },
  {
    name: "Camill",
    desc: "嵌入式、ROS、还有生活！",
    icon: "https://www.camill.love/img/myself.jpg",
    link: "https://camill.love"
  },
  {
    name: "SMallTIAN’s Blog",
    desc: "写我想写的，说我想说的。只要自己开心就好。",
    icon: "https://mcsmalltian.com/frontend/img/avatar.webp",
    link: "https://blog.mcsmalltian.com/",
  },
  {
    name: "LineXic书屋",
    desc: "念念不忘，必有回响",
    icon: "https://linexic.top/logo.png",
    link: "https://linexic.top/",
  },
  {
    name: "RichELF",
    desc: "给岁月以文明，给机器以生命。",
    icon: "https://richelf.tech/favicon.ico",
    link: "https://richelf.tech/",
  },
  {
    name: "文奚•技术驿站",
    desc: "代码在手，天下我有",
    icon: "https://vxcode.top/assets/icon/logo2.png",
    link: "https://vxcode.top",
  },
  {
    name: "火柴人儿的小站",
    desc: "仰望星空的打工人",
    icon: "https://bu.dusays.com/2024/09/11/66e1573305b78.jpg",
    link: "https://huochairener-blog.cn/",
  },
  {
    name: "运维开发绿皮书",
    desc: "放置运维开发笔记、搜集、摘录、实践，保持好奇心，看文需谨慎，后果很严重！",
    icon: "https://www.geekery.cn/logo.svg",
    link: "https://www.geekery.cn/",
  }
];
export const invalid: LinkData[] = [

];
