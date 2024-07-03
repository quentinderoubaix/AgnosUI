const __vite__fileDeps=["./Code.CaqpZQHt.js","./scheduler.DDKLfDno.js","./index.DMnRV_Lo.js","./app.h8O_KjBc.js","./stores.DmNViYkk.js","./stores.DXEZWDZu.js","./entry.LkoquCAE.js","./preload-helper.Dch09mLN.js","./tooltip.DNIMgA7L.js","./Svg.DVorqz_I.js","../assets/Code.CqPCqTut.css","./index.Bcm_kmTT.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as _e}from"./preload-helper.Dch09mLN.js";import{_ as Be,$ as Ve,Q as F,K as Me,s as pe,x as W,i as I,f as v,a0 as ee,F as V,a1 as Oe,l as be,u as ve,o as ge,p as we,C as te,e as D,a as M,c as S,b as y,g as O,X as P,W as N,m as z,E as le,h as T,Y as B,L as ne,I as Z,k as Q,q as ke,a2 as G,z as Pe,t as Ue,d as Re,j as He,n as Ae}from"./scheduler.DDKLfDno.js";import{g as j,a as E,d as q,t as k,S as Le,i as Ee,c as U,b as A,m as R,e as H}from"./index.DMnRV_Lo.js";import{k as J,w as se,q as Fe,v as We,n as K,e as re}from"./app.h8O_KjBc.js";import{t as X}from"./tooltip.DNIMgA7L.js";import{e as je,n as qe,d as ae,h as Je,s as Ke,p as Qe}from"./stores.DmNViYkk.js";import{S as Y}from"./Svg.DVorqz_I.js";import{d as Xe}from"./entry.LkoquCAE.js";function oe(s,e){const n=e.token={};function t(l,a,r,o){if(e.token!==n)return;e.resolved=o;let i=e.ctx;r!==void 0&&(i=i.slice(),i[r]=o);const u=l&&(e.current=l)(i);let h=!1;e.block&&(e.blocks?e.blocks.forEach((g,L)=>{L!==a&&g&&(j(),E(g,1,1,()=>{e.blocks[L]===g&&(e.blocks[L]=null)}),q())}):e.block.d(1),u.c(),k(u,1),u.m(e.mount(),e.anchor),h=!0),e.block=u,e.blocks&&(e.blocks[a]=u),h&&Me()}if(Be(s)){const l=Ve();if(s.then(a=>{F(l),t(e.then,1,e.value,a),F(null)},a=>{if(F(l),t(e.catch,2,e.error,a),F(null),!e.hasCatch)throw a}),e.current!==e.pending)return t(e.pending,0),!0}else{if(e.current!==e.then)return t(e.then,1,e.value,s),!0;e.resolved=s}}function Ye(s,e,n){const t=e.slice(),{resolved:l}=s;s.current===s.then&&(t[s.value]=l),s.current===s.catch&&(t[s.error]=l),s.block.p(t,n)}const Ze=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg>`,Ge=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code" viewBox="0 0 16 16">
  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
</svg>`,$e=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <path d="M8 18.1176H14.8868L10.8359 28L24 13.8824H17.1132L21.1641 4L8 18.1176Z" fill="currentColor"/>
</svg>
`,xe=s=>({}),ie=s=>({});function et(s){let e;const n=s[4].error,t=be(n,s,s[3],ie);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&8)&&ve(t,n,l,l[3],e?we(n,l[3],a,xe):ge(l[3]),ie)},i(l){e||(k(t,l),e=!0)},o(l){E(t,l),e=!1},d(l){t&&t.d(l)}}}function tt(s){let e,n,t;const l=[s[1]];var a=s[5].default;function r(o,i){let u={};for(let h=0;h<l.length;h+=1)u=V(u,l[h]);return i!==void 0&&i&2&&(u=V(u,J(l,[se(o[1])]))),{props:u}}return a&&(e=te(a,r(s))),{c(){e&&U(e.$$.fragment),n=W()},l(o){e&&A(e.$$.fragment,o),n=W()},m(o,i){e&&R(e,o,i),I(o,n,i),t=!0},p(o,i){if(i&1&&a!==(a=o[5].default)){if(e){j();const u=e;E(u.$$.fragment,1,0,()=>{H(u,1)}),q()}a?(e=te(a,r(o,i)),U(e.$$.fragment),k(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(a){const u=i&2?J(l,[se(o[1])]):{};e.$set(u)}},i(o){t||(e&&k(e.$$.fragment,o),t=!0)},o(o){e&&E(e.$$.fragment,o),t=!1},d(o){o&&v(n),e&&H(e,o)}}}function lt(s){let e;const n=s[4].default,t=be(n,s,s[3],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&8)&&ve(t,n,l,l[3],e?we(n,l[3],a,null):ge(l[3]),null)},i(l){e||(k(t,l),e=!0)},o(l){E(t,l),e=!1},d(l){t&&t.d(l)}}}function nt(s){let e,n,t,l={ctx:s,current:null,token:null,hasCatch:!0,pending:lt,then:tt,catch:et,value:5,blocks:[,,,]};return oe(n=s[0],l),{c(){e=W(),l.block.c()},l(a){e=W(),l.block.l(a)},m(a,r){I(a,e,r),l.block.m(a,l.anchor=r),l.mount=()=>e.parentNode,l.anchor=e,t=!0},p(a,[r]){s=a,l.ctx=s,r&1&&n!==(n=s[0])&&oe(n,l)||Ye(l,s,r)},i(a){t||(k(l.block),t=!0)},o(a){for(let r=0;r<3;r+=1){const o=l.blocks[r];E(o)}t=!1},d(a){a&&v(e),l.block.d(a),l.token=null,l=null}}}function st(s,e,n){let t;const l=["component"];let a=ee(e,l),{$$slots:r={},$$scope:o}=e,{component:i}=e;return s.$$set=u=>{e=V(V({},e),Oe(u)),n(1,a=ee(e,l)),"component"in u&&n(2,i=u.component),"$$scope"in u&&n(3,o=u.$$scope)},s.$$.update=()=>{s.$$.dirty&4&&n(0,t=i())},[t,a,i,o,r]}class rt extends Le{constructor(e){super(),Ee(this,e,st,nt,pe,{component:2})}}const at=()=>{const{element$:s,directive:e}=Fe();return{dimensions$:je(s,(t,l)=>{if(t===null)return qe;const a=new ResizeObserver(r=>{l(r[0])});return a.observe(t),()=>a?.disconnect()},void 0),directive:e}};function ot(s,e=!0,n="sampleload",t=300){const l=ae(!0),a=ae(!1);let r;const{dimensions$:o,directive:i}=at();let u;const h=Xe([o,l],([f,p],w)=>{const c=f?.borderBoxSize?.[0]?.blockSize;p&&c&&w(Math.ceil(c))},s),g=f=>{const p=f.contentDocument?.getElementById("root");p&&(u?.destroy?.(),u=i(p))},L=f=>{f.target instanceof HTMLIFrameElement&&(g(f.target),f.target.classList.add("loaded"))};return{showSpinner$:Je(a),handlerDirective:We((f,p)=>{let w;f.onload=L,g(f),e?(w?.(),w=h.subscribe(d=>f.height=d+"px")):f.height=s+"px";const c=d=>{(!f.contentWindow?.location?.href?.startsWith(d)||!f.contentDocument||f.contentDocument.readyState==="loading")&&(f.classList.remove("loaded"),l.set(!1),r&&clearTimeout(r),r=setTimeout(()=>{a.set(!0),r=void 0},t))};c(p);const m=d=>{d instanceof MessageEvent&&d.data.type===n&&d.source===f.contentWindow&&(r&&(clearTimeout(r),r=void 0),l.set(!0),a.set(!1),f.classList.add("loaded"))};return window.addEventListener("message",m,!1),{update:c,destroy:()=>{window.removeEventListener("message",m),w?.(),u?.destroy?.()}}})}}function ce(s,e,n){const t=s.slice();return t[25]=e[n],t}function ue(s){let e,n='<div class="spinner-border text-primary-emphasis" role="status"><span class="visually-hidden">Loading...</span></div>';return{c(){e=D("div"),e.innerHTML=n,this.h()},l(t){e=S(t,"DIV",{class:!0,"data-svelte-h":!0}),ke(e)!=="svelte-1js4y66"&&(e.innerHTML=n),this.h()},h(){z(e,"class","position-absolute top-50 start-50 translate-middle iframeSpinner svelte-v70n3d")},m(t,l){I(t,e,l)},d(t){t&&v(e)}}}function fe(s){let e,n,t,l,a,r,o,i,u,h;t=new Y({props:{className:"icon-24 align-middle",svg:Ge}});let g=[{"aria-label":"Show or hide the code"},{}],L={};for(let c=0;c<g.length;c+=1)L=V(L,g[c]);let f=it(s);o=new Y({props:{className:"icon-20 align-middle",svg:Ze}});let p=[{href:s[10]},{target:"_blank"},{rel:"noreferrer nofollow external"},{"aria-label":"View sample in new tab"},{}],w={};for(let c=0;c<p.length;c+=1)w=V(w,p[c]);return{c(){e=D("div"),n=D("button"),U(t.$$.fragment),l=M(),f&&f.c(),a=M(),r=D("a"),U(o.$$.fragment),this.h()},l(c){e=S(c,"DIV",{class:!0,role:!0,"aria-label":!0});var m=y(e);n=S(m,"BUTTON",{"aria-label":!0});var d=y(n);A(t.$$.fragment,d),d.forEach(v),l=O(m),f&&f.l(m),a=O(m),r=S(m,"A",{href:!0,target:!0,rel:!0,"aria-label":!0});var b=y(r);A(o.$$.fragment,b),b.forEach(v),m.forEach(v),this.h()},h(){P(n,L),N(n,"svelte-v70n3d",!0),P(r,w),N(r,"svelte-v70n3d",!0),z(e,"class","btn-toolbar border border-top-0 d-flex align-items-center p-1"),z(e,"role","toolbar"),z(e,"aria-label","Toolbar with button groups")},m(c,m){I(c,e,m),T(e,n),R(t,n,null),n.autofocus&&n.focus(),T(e,l),f&&f.m(e,null),T(e,a),T(e,r),R(o,r,null),i=!0,u||(h=[B(K.call(null,n,"btn btn-sm btn-link m-1 p-0")),B(X.call(null,n,{content:"Toggle code"})),G(n,"click",s[21]),B(K.call(null,r,"action m-1 p-0")),B(X.call(null,r,{content:"Open example in a new tab"}))],u=!0)},p(c,m){N(n,"svelte-v70n3d",!0),f.p(c,m),P(r,w=J(p,[(!i||m&1024)&&{href:c[10]},{target:"_blank"},{rel:"noreferrer nofollow external"},{"aria-label":"View sample in new tab"},{}])),N(r,"svelte-v70n3d",!0)},i(c){i||(k(t.$$.fragment,c),k(f),k(o.$$.fragment,c),i=!0)},o(c){E(t.$$.fragment,c),E(f),E(o.$$.fragment,c),i=!1},d(c){c&&v(e),H(t),f&&f.d(),H(o),u=!1,Z(h)}}}function it(s){let e,n,t,l,a;n=new Y({props:{className:"icon-24 align-middle",svg:$e}});let r=[{"aria-label":"Open example in stackblitz"},{}],o={};for(let i=0;i<r.length;i+=1)o=V(o,r[i]);return{c(){e=D("button"),U(n.$$.fragment),this.h()},l(i){e=S(i,"BUTTON",{"aria-label":!0});var u=y(e);A(n.$$.fragment,u),u.forEach(v),this.h()},h(){P(e,o),N(e,"svelte-v70n3d",!0)},m(i,u){I(i,e,u),R(n,e,null),e.autofocus&&e.focus(),t=!0,l||(a=[B(K.call(null,e,"btn btn-sm btn-link m-1 p-0")),B(X.call(null,e,{content:"Edit in Stackblitz"})),G(e,"click",s[22])],l=!0)},p(i,u){N(e,"svelte-v70n3d",!0)},i(i){t||(k(n.$$.fragment,i),t=!0)},o(i){E(n.$$.fragment,i),t=!1},d(i){i&&v(e),H(n),l=!1,Z(a)}}}function de(s){let e,n,t,l,a=s[11].length>1&&me(s);return t=new rt({props:{component:dt,code:s[9],fileName:s[6],language:s[7]?s[8]:void 0,$$slots:{default:[ct]},$$scope:{ctx:s}}}),{c(){a&&a.c(),e=M(),n=D("div"),U(t.$$.fragment),this.h()},l(r){a&&a.l(r),e=O(r),n=S(r,"DIV",{class:!0});var o=y(n);A(t.$$.fragment,o),o.forEach(v),this.h()},h(){z(n,"class","border border-top-0")},m(r,o){a&&a.m(r,o),I(r,e,o),I(r,n,o),R(t,n,null),l=!0},p(r,o){r[11].length>1?a?a.p(r,o):(a=me(r),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null);const i={};o&512&&(i.code=r[9]),o&64&&(i.fileName=r[6]),o&384&&(i.language=r[7]?r[8]:void 0),o&268435456&&(i.$$scope={dirty:o,ctx:r}),t.$set(i)},i(r){l||(k(t.$$.fragment,r),l=!0)},o(r){E(t.$$.fragment,r),l=!1},d(r){r&&(v(e),v(n)),a&&a.d(r),H(t)}}}function me(s){let e,n=re(s[11]),t=[];for(let l=0;l<n.length;l+=1)t[l]=he(ce(s,n,l));return{c(){e=D("ul");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=S(l,"UL",{class:!0});var a=y(e);for(let r=0;r<t.length;r+=1)t[r].l(a);a.forEach(v),this.h()},h(){z(e,"class","nav nav-underline p-3 border-start border-end")},m(l,a){I(l,e,a);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null)},p(l,a){if(a&2112){n=re(l[11]);let r;for(r=0;r<n.length;r+=1){const o=ce(l,n,r);t[r]?t[r].p(o,a):(t[r]=he(o),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=n.length}},d(l){l&&v(e),Pe(t,l)}}}function he(s){let e,n,t=s[25]+"",l,a,r,o;function i(){return s[23](s[25])}return{c(){e=D("li"),n=D("button"),l=Ue(t),a=M(),this.h()},l(u){e=S(u,"LI",{class:!0});var h=y(e);n=S(h,"BUTTON",{class:!0});var g=y(n);l=Re(g,t),g.forEach(v),a=O(h),h.forEach(v),this.h()},h(){z(n,"class","nav-link"),N(n,"active",s[6]===s[25]),z(e,"class","nav-item")},m(u,h){I(u,e,h),T(e,n),T(n,l),T(e,a),r||(o=G(n,"click",i),r=!0)},p(u,h){s=u,h&2048&&t!==(t=s[25]+"")&&He(l,t),h&2112&&N(n,"active",s[6]===s[25])},d(u){u&&v(e),r=!1,o()}}}function ct(s){let e,n='<span class="visually-hidden">Loading...</span>';return{c(){e=D("div"),e.innerHTML=n,this.h()},l(t){e=S(t,"DIV",{class:!0,role:!0,"data-svelte-h":!0}),ke(e)!=="svelte-15rvxc2"&&(e.innerHTML=n),this.h()},h(){z(e,"class","spinner-border text-primary-emphasis"),z(e,"role","status")},m(t,l){I(t,e,l)},p:Ae,d(t){t&&v(e)}}}function ut(s){let e,n,t,l,a,r,o,i,u,h,g,L,f=s[12]&&ue(),p=[{title:s[1]},{}],w={};for(let d=0;d<p.length;d+=1)w=V(w,p[d]);let c=s[4]&&fe(s),m=s[0]&&de(s);return{c(){e=D("div"),n=D("div"),f&&f.c(),t=M(),l=D("iframe"),i=M(),c&&c.c(),u=M(),m&&m.c(),this.h()},l(d){e=S(d,"DIV",{class:!0});var b=y(e);n=S(b,"DIV",{class:!0});var C=y(n);f&&f.l(C),t=O(C),l=S(C,"IFRAME",{title:!0}),y(l).forEach(v),C.forEach(v),i=O(b),c&&c.l(b),u=O(b),m&&m.l(b),b.forEach(v),this.h()},h(){P(l,w),N(l,"svelte-v70n3d",!0),z(n,"class",o=le(`position-relative ${s[3]?"border-bottom":"border"} iframe-container`)+" svelte-v70n3d"),z(e,"class","mb-4 py-2 px-0 px-sm-3")},m(d,b){I(d,e,b),T(e,n),f&&f.m(n,null),T(n,t),T(n,l),T(e,i),c&&c.m(e,null),T(e,u),m&&m.m(e,null),h=!0,g||(L=[B(K.call(null,l,"demo-sample d-block")),B(a=ft.call(null,l,s[10])),B(r=s[14].call(null,l,s[5]))],g=!0)},p(d,[b]){d[12]?f||(f=ue(),f.c(),f.m(n,t)):f&&(f.d(1),f=null),P(l,w=J(p,[(!h||b&2)&&{title:d[1]},b&1056&&{}])),a&&ne(a.update)&&b&1024&&a.update.call(null,d[10]),r&&ne(r.update)&&b&32&&r.update.call(null,d[5]),N(l,"svelte-v70n3d",!0),(!h||b&8&&o!==(o=le(`position-relative ${d[3]?"border-bottom":"border"} iframe-container`)+" svelte-v70n3d"))&&z(n,"class",o),d[4]?c?(c.p(d,b),b&16&&k(c,1)):(c=fe(d),c.c(),k(c,1),c.m(e,u)):c&&(j(),E(c,1,1,()=>{c=null}),q()),d[0]?m?(m.p(d,b),b&1&&k(m,1)):(m=de(d),m.c(),k(m,1),m.m(e,null)):m&&(j(),E(m,1,1,()=>{m=null}),q())},i(d){h||(k(c),k(m),h=!0)},o(d){E(c),E(m),h=!1},d(d){d&&v(e),f&&f.d(),c&&c.d(),m&&m.d(),g=!1,Z(L)}}}const ft=(s,e)=>{const n=t=>s.contentWindow?.location.replace(new URL(t,window.location.href));return n(e),{update:n}},dt=()=>_e(()=>import("./Code.CaqpZQHt.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);function mt(s,e,n){let t,l,a,r,o,i,u,h,g,L;Q(s,Ke,_=>n(8,h=_)),Q(s,Qe,_=>n(20,g=_));let{title:f}=e,{sample:p}=e,{noresize:w=!1}=e,{height:c}=e,{isDoc:m=!1}=e,{urlParameters:d=void 0}=e,{showButtons:b=!0}=e,{showCode:C=!1}=e,$="";async function De(_,Ie,Ce,Ne){n(9,$=_?await Ce.files[Ie].files[Ne]():"")}const{showSpinner$:x,handlerDirective:Se}=ot(c,!w);Q(s,x,_=>n(12,L=_));const ze=()=>n(0,C=!C),Te=async()=>(await _e(async()=>{const{openInStackblitz:_}=await import("./index.Bcm_kmTT.js");return{openInStackblitz:_}},__vite__mapDeps([11,7]),import.meta.url)).openInStackblitz(p,h),ye=_=>n(6,r=_);return s.$$set=_=>{"title"in _&&n(1,f=_.title),"sample"in _&&n(2,p=_.sample),"noresize"in _&&n(15,w=_.noresize),"height"in _&&n(16,c=_.height),"isDoc"in _&&n(3,m=_.isDoc),"urlParameters"in _&&n(17,d=_.urlParameters),"showButtons"in _&&n(4,b=_.showButtons),"showCode"in _&&n(0,C=_.showCode)},s.$$.update=()=>{s.$$.dirty&260&&n(7,t=p.files[h].entryPoint==="placeholder"),s.$$.dirty&132&&n(18,l=t?"placeholder/placeholdersample":`${p.componentName}/${p.sampleName}`.toLowerCase()),s.$$.dirty&260&&n(11,a=Object.keys(p.files[h].files)),s.$$.dirty&260&&n(6,r=p.files[h].entryPoint),s.$$.dirty&260&&n(19,o=p.files[h].complementaryUrl),s.$$.dirty&325&&De(C,h,p,r),s.$$.dirty&1835264&&n(5,i=`${g}${h}/samples${o}/#/${l}`),s.$$.dirty&131104&&n(10,u=i+(d?`#${JSON.stringify(d)}`:""))},[C,f,p,m,b,i,r,t,h,$,u,a,L,x,Se,w,c,d,l,o,g,ze,Te,ye]}class Lt extends Le{constructor(e){super(),Ee(this,e,mt,ut,pe,{title:1,sample:2,noresize:15,height:16,isDoc:3,urlParameters:17,showButtons:4,showCode:0})}}export{Lt as S,oe as h,Ye as u};