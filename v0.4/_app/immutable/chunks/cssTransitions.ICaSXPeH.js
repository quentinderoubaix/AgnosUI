import{I as Y,n as v,w as Z,c as m,b as T,d as M,e as nn,f as tn,g as U}from"./stores.CtR383IN.js";import{c as en,p as _,m as on,d as sn,f as an,i as rn,h as R,j as ln}from"./app.Dx-GQ-qc.js";function k(n){return n===!0||n===!1}function cn(n){return typeof n=="function"}function un(n){return typeof n=="string"}const dn=n=>t=>t===null||n(t),V=n=>t=>n(t)?t:Y,O={normalizeValue:V(k)},pn={normalizeValue:V(dn(k))},$n={normalizeValue:V(un)},S={normalizeValue:V(cn),equal:Object.is},W=new Promise(v),fn=async(n,t)=>{n.style.display=t==="show"?"":"none"},bn={animated:!0,animatedOnInit:!1,initDone:null,visible:!0,transition:fn,onShown:v,onHidden:v,onVisibleChange:v},mn={animated:O,animatedOnInit:O,visible:O,transition:S,onShown:S,onHidden:S,onVisibleChange:S,initDone:pn},gn=n=>{const[{animated$:t,initDone$:l,visible$:r,transition$:u,onShown$:D,onHidden$:C,onVisibleChange$:w,animatedOnInit$:y},p]=Z(bn,n,mn),{element$:A,directive:G}=en(),x=m(()=>!!A()),h=T(w,[r],([e])=>e),f=M(null),E=m(()=>!!f()),B=()=>{let e;return f.update(o=>(o?.abort.abort(),e=o?.context,null)),e},J=(e,o,c,s)=>U(()=>{const $=new AbortController,a=$.signal,d=B()??{},{promise:b,resolve:z}=_(),g={abort:$,animated:o,visible:e,context:d,element:c,transitionFn:s,promise:b};return f.set(g),z((async()=>{var F;try{await s(c,e?"show":"hide",o,a,d)}finally{a.aborted?await W:(f.set(null),(F=(e?D:C)())==null||F())}})()),g}),K=m(()=>!E()&&h()&&x()),Q=m(()=>!E()&&!h()),H=m(()=>l()?t():y()),I=M(null);let N,L=r(),i=null;const j=nn([h,A,H,I,u,f],([e,o,c,s,$,a])=>{const d=N!==o;N=o;const b=L!==e;if(L=e,o){l()==null&&l.set(!0);const z=s!=null&&a&&a.animated!=s;if(d||b||z){(b||s!=null)&&(i=null);const g=s??i?.animated??(d&&!e?!1:c);a=J(e,g,o,$),i?.resolve(a.promise),i=null}}else d&&(B(),a=null),(b||e&&i?.animated!==s)&&(i=e&&s!=null?{animated:s,..._()}:null);return i?.promise??a?.promise});let q={};const P=async(e=!r(),o=H())=>{const c={};q=c;try{await U(()=>{try{return I.set(o),r.set(e),j()}finally{I.set(null)}})}finally{q!==c&&await W}},X=on(G,an(p),sn(j));return{...tn({visible$:h,element$:A,elementPresent$:x,transitioning$:E,shown$:K,hidden$:Q}),patch:p,directives:{directive:X},actions:{},api:{show:P.bind(null,!0),hide:P.bind(null,!1),toggle:P}}};function vn(n){return window.getComputedStyle(n).transitionProperty!=="none"}function wn(n){const{transitionDelay:t,transitionDuration:l}=window.getComputedStyle(n),r=parseFloat(t),u=parseFloat(l);return(r+u)*1e3}const Sn=n=>async(t,l,r,u,D)=>{const C=n(t,l,r,D)??v;if(rn(t)&&r&&vn(t)){const w=R(u,"abort"),y=R(t,"transitionend"),p=ln(wn(t));await Promise.race([w.promise,y.promise,p.promise]),w.unsubscribe(),y.unsubscribe(),p.unsubscribe()}u.aborted||C()};export{gn as a,$n as b,Sn as c,O as t};