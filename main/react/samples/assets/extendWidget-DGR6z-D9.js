import{z as u,A as b,h as m,s as x,B as P}from"./directive-CKEccryv-gEMI0BDJ.js";const w=(l,p,d,a)=>t=>{const r=u(p,t,d),e=t==null?void 0:t.config,f=b(e)?m(()=>({...a,...e()})):{...a,...e??{}},o=l({props:t==null?void 0:t.props,config:f});return{...o,...x({...o.stores,...r}),patch:h=>P(()=>{let s;for(const[c,i]of Object.entries(h??{})){const n=r[`${c}$`];n?n.set(i):(s||(s={}),s[c]=i)}s&&o.patch(s)})}};export{w as e};
