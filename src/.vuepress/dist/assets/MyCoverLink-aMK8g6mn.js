import{g as d,_ as m,o,c as i,F as g,h as k,b as u,d as t,t as p}from"./app-BH1BRoJG.js";const v=[{name:"子冥",desc:"waiting for",icon:"/logo.svg",link:"https://weijordan.com"},{name:"KASUIEの次元",desc:"喜欢温柔的人",icon:"https://kasuie.cc/avatar.webp",link:"https://kasuie.cc"},{name:"安知鱼",desc:"生活明朗，万物可爱",icon:"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg",link:"https://blog.anheyu.com/"},{name:"廿壴(GANXB2)博客",desc:"探讨WEB技术.交流日常生活.感悟短暂人生.分享简单快乐",icon:"https://blog.ganxb2.com/img/avatar.png",link:"https://blog.ganxb2.com/"},{name:"Mr.Hope",desc:"VuePress Theme Hope 主题作者。",icon:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com/"},{name:"一之笔",desc:"大圣，此去欲何？踏南天，碎凌霄，如若一去不回……？便一去不回！💪",icon:"https://yizibi.github.io/img/avatar-hux-ny.jpg",link:"https://yizibi.github.io/"},{name:"Vivian陈薇",desc:"《程序员》专题主编 Android程序媛",icon:"http://upload.jianshu.io/users/upload_avatars/196894/99323ae8-5924-4730-b73f-9d0d284ff243.png?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",link:"http://www.vivianchen.cn/"},{name:"Bing🐣",desc:"基于VuePress的个人博客，记录日常开发问题",icon:"https://liubing.me/logo.png",link:"https://liubing.me/"},{name:"SaraKale’s blog",desc:"星轮流转，唯心不变…",icon:"https://npm.elemecdn.com/sarakale-assets@v1/sarakale.jpg",link:"https://www.sarakale.top/blog/"},{name:"Leonus",desc:"进一寸有进一寸的欢喜。",icon:"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5",link:"https://blog.leonus.cn/"},{name:"UyoAhz",desc:"集中精神，以气御剪",icon:"https://q1.qlogo.cn/g?b=qq&nk=2496091142&s=640",link:"https://uyoahz.cn/"},{name:"铭心石刻",desc:"愿岁并谢，与友长兮",icon:" https://blog.kouseki.cn/imgs/avatar.webp",link:"https://blog.kouseki.cn/"},{name:"Anjhon’s blog",desc:"但知行好事，莫要问前程",icon:"https://s2.loli.net/2023/05/16/MdciSXAbrEx3LW9.jpg",link:"https://www.anjhon.top/"},{name:"OhYee ⭐",desc:"个人向笔记性质技术分享，共产主义开源编程🤪",icon:"https://static.ohyee.cc/logo.svg",link:"https://www.ohyee.cc/"},{name:"寒烟志",desc:"半山腰总是挤的，你得去山顶看看",icon:"https://www.qiaoxiao.top/static/avater/avater.jpg",link:"https://yanyuplus.cn/"},{name:"Quantum Bit",desc:"Never stop searching, even if only for a brief flash of light.",icon:"https://www.eula.club/avatar.png",link:"https://www.eula.club"},{name:"Camill",desc:"嵌入式、ROS、还有生活！",icon:"https://www.camill.love/img/myself.jpg",link:"https://camill.love"},{name:"SMallTIAN’s Blog",desc:"写我想写的，说我想说的。只要自己开心就好。",icon:"https://mcsmalltian.com/frontend/img/avatar.webp",link:"https://blog.mcsmalltian.com/"},{name:"LineXic书屋",desc:"念念不忘，必有回响",icon:"https://linexic.top/logo.png",link:"https://linexic.top/"},{name:"RichELF",desc:"给岁月以文明，给机器以生命。",icon:"https://richelf.tech/favicon.ico",link:"https://richelf.tech/"},{name:"文奚•技术驿站",desc:"代码在手，天下我有",icon:"https://vxcode.top/assets/icon/logo2.png",link:"https://vxcode.top"},{name:"火柴人儿的小站",desc:"仰望星空的打工人",icon:"https://bu.dusays.com/2024/09/11/66e1573305b78.jpg",link:"https://huochairener-blog.cn/"},{name:"运维开发绿皮书",desc:"放置运维开发笔记、搜集、摘录、实践，保持好奇心，看文需谨慎，后果很严重！",icon:"https://www.geekery.cn/logo.svg",link:"https://www.geekery.cn/"}],b=[],w=d({__name:"MyCoverLink",props:{type:{type:String,require:!0}},setup(c,{expose:l}){l();const n=c;let e;switch(n.type){case"friend":e=v;break;case"invalid":e=b;break;default:e=[];break}const a={props:n,get linkDatas(){return e},set linkDatas(r){e=r}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),_={class:"vp-project-panel"},f=["href"],y=["src"],x={class:"card-content"},j={class:"link-avatar my-auto"},q=["src"],S={class:"link-text"},B={class:"link-name"},L={class:"link-desc"};function M(c,l,n,e,a,r){return o(),i("div",_,[e.linkDatas.length>0?(o(!0),i(g,{key:0},k(e.linkDatas,(s,h)=>(o(),i("div",{key:h,class:"link-card"},[t("a",{class:"card-body",href:s.link,target:"_blank"},[t("img",{class:"link-picture",src:`https://s0.wp.com/mshots/v1/${encodeURIComponent(s.link)}?w=323&h=200`,alt:"",rel:"noopener noreferrer external"},null,8,y),t("div",x,[t("div",j,[t("img",{src:s.icon,onerror:'this.onerror=null,this.src=this.srcset="/assets/avatar.webp"'},null,8,q)]),t("div",S,[t("div",B,p(s.name),1),t("div",L,p(s.desc),1)])])],8,f)]))),128)):u("v-if",!0)])}const C=m(w,[["render",M],["__scopeId","data-v-6cab3d21"],["__file","MyCoverLink.vue"]]);export{C as M};
