import{g as h,o as t,c as a,u as l,F as k,h as m,n as u,b as o,t as i,a as v,_ as f}from"./app-vRjwnwzg.js";const g={class:"vp-project-panel"},j=["href"],y=["src"],C={class:"vp-project-name"},b={class:"vp-project-desc"},x=h({__name:"Mylink",props:{type:String,links:Object},setup(p){const r=p;let e;console.log(r.links),e=r.links;const _=n=>`project${n%9}`;return(n,d)=>(t(),a("div",g,[l(e).length>0?(t(!0),a(k,{key:0},m(l(e),(s,c)=>(t(),a("a",{key:c,class:u(["item vp-project-card",_(c)]),href:s.link,target:"_blank"},[o("img",{class:"vp-project-image",src:s.icon,alt:"",onerror:'this.onerror=null,this.src=this.srcset="/assets/avatar.webp"'},null,8,y),o("div",C,i(s.name),1),o("div",b,i(s.desc),1)],10,j))),128)):v("v-if",!0)]))}}),B=f(x,[["__scopeId","data-v-83f21a4e"],["__file","Mylink.vue"]]);export{B as M};
