import{E as u,a8 as b}from"./AppCommon-Cd2V92GK.js";import{c as h,d as x,s as P}from"./stores-BJ2FkST_.js";const S=(l,p,d,r)=>t=>{const a=h(p,t,d),e=t==null?void 0:t.config,f=x(e)?u(()=>({...r,...e()})):{...r,...e??{}},o=l({props:t==null?void 0:t.props,config:f});return{...o,...P({...o.stores,...a}),patch:m=>b(()=>{let s;for(const[c,i]of Object.entries(m??{})){const n=a[`${c}$`];n?n.set(i):(s||(s={}),s[c]=i)}s&&o.patch(s)})}};export{S as e};
