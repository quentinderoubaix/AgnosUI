import{h as u,j as b,c as m,s as x,e as P}from"./stores-CbKlqneq.js";const w=(l,p,d,a)=>t=>{const r=u(p,t,d),s=t==null?void 0:t.config,f=b(s)?m(()=>({...a,...s()})):{...a,...s??{}},o=l({props:t==null?void 0:t.props,config:f});return{...o,...x({...o.stores,...r}),patch:h=>P(()=>{let e;for(const[c,i]of Object.entries(h??{})){const n=r[`${c}$`];n?n.set(i):(e||(e={}),e[c]=i)}e&&o.patch(e)})}};export{w as e};
