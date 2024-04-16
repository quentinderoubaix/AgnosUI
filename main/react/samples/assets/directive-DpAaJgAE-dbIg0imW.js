import{r as h,a as b,d as f,e as l,b as g,f as d}from"./stores-CbKlqneq.js";const B=e=>{const t=e.length;if(t===0)return null;let r=e[0];for(let s=1;s<t&&r;s++){const n=e[s];for(;r&&r!==n;){const i=r.compareDocumentPosition(n);if(i&Node.DOCUMENT_POSITION_CONTAINED_BY)break;if(i&Node.DOCUMENT_POSITION_CONTAINS){r=n;break}else if(i&Node.DOCUMENT_POSITION_DISCONNECTED)return null;r=r.parentElement}}return r},M=(e=document.body)=>{v(e)&&e.getBoundingClientRect()},k=(e,t)=>{t&&t.length>0&&e.classList.add(...t)},P=(e,t)=>{t&&t.length>0&&e.classList.remove(...t)};function p(e,t,r,s){return e.addEventListener(t,r,s),function(){e.removeEventListener(t,r,s)}}let D=0;const U=()=>`auId-${D++}`,m=e=>e!=null&&e!==!1;function C(e,t){let r=new Set;return t.subscribe(s=>{const n=new Set(`${s??""}`.split(" "));n.delete("");const i=e.classList;for(const o of r)n.has(o)||i.remove(o);i.add(...n),r=n})}function S(e,t,r){return r.subscribe(s=>{m(s)?e.setAttribute(t,""+(s===!0?"":s)):e.removeAttribute(t)})}function w(e,t,r){return t==="class"?C(e,r):S(e,t,r)}function T(e,t,r){return r.subscribe(s=>{const n=e.style;n[t]=""+(m(s)?s:"")})}function A(e,t,r){const s=r.subscribe(n=>{e.classList.toggle(t,n)});return()=>{s(),e.classList.remove(t)}}const v=e=>{var t;const r=((t=e==null?void 0:e.ownerDocument)==null?void 0:t.defaultView)??window;return e instanceof r.HTMLElement},N=e=>(t,r)=>{if(v(t))return e(t,r)},_=(e,t)=>r=>{let s=!0,n;const i=t.subscribe(o=>{var u;s?(s=!1,n=e(r,o)):(u=n==null?void 0:n.update)==null||u.call(n,o)});return{destroy(){var o;(o=n==null?void 0:n.destroy)==null||o.call(n),i()}}},E=h(void 0),q=e=>_(e,E),x=(e,t=!0)=>()=>{const r=e.subscribe(g);return{destroy:async()=>{t&&await 0,r()}}},R=e=>(t,r)=>(e(r),{update:e}),y={equal:Object.is},I=()=>{const e=b([],y);return f(e,{register:t=>{let r=!1;return e.update(s=>[...s,t]),()=>{r||(r=!0,e.update(s=>{const n=s.indexOf(t);if(n>-1){const i=[...s];return i.splice(n,1),i}return s}))}}})},L=()=>{const e=I();return{elements$:f(e),directive:t=>({destroy:e.register(t)})}},H=()=>{const{directive:e,elements$:t}=L();return{directive:N(e),elements$:t}},$=()=>{const e=b(null,y);return{element$:f(e),directive:t=>{let r=!1;return e.update(s=>s?(console.error("The directive cannot be used on multiple elements.",s,t),s):(r=!0,t)),r?{destroy(){e.update(s=>t===s?null:s)}}:void 0}}},V=()=>{const{directive:e,element$:t}=$();return{directive:N(e),element$:t}},W=(...e)=>(t,r)=>{const s=l(()=>e.map(n=>n(t,r)));return{update(n){l(()=>s.forEach(i=>{var o;return(o=i==null?void 0:i.update)==null?void 0:o.call(i,n)}))},destroy(){l(()=>s.reverse().forEach(n=>{var i;return(i=n==null?void 0:n.destroy)==null?void 0:i.call(n)}))}}},Y=e=>(t,r)=>{const s=[],n=b(r),{events:i,attributes:o,styles:u,classNames:O}=e(n);if(v(t))for(const[c,a]of Object.entries(i??{}))typeof a=="function"?s.push(p(t,c,a)):s.push(p(t,c,a.handler,a.options));for(const[c,a]of Object.entries(o??{}))a!=null&&s.push(w(t,c,d(a)));for(const[c,a]of Object.entries(u??{}))a&&s.push(T(t,c,d(a)));for(const[c,a]of Object.entries(O??{}))s.push(A(t,c,d(a)));return{update:c=>n.set(c),destroy:()=>s.forEach(c=>c())}};export{N as a,q as b,Y as c,x as d,p as e,H as f,U as g,_ as h,v as i,P as j,k,M as l,W as m,$ as n,R as o,V as p,B as q,I as r};