import{s as X,w as I,i as k,f as m,l as F,u as B,o as j,p as O,t as y,d as L,j as tt,n as et,e as S,a as G,c as A,b as D,g as H,m as h,D as st,a1 as Et,G as U,a6 as ft,a5 as Wt,k as R,a0 as ut,X as Dt,a7 as Ft,h as $,C as Bt,r as jt}from"../chunks/scheduler.-4Rzn4Bj.js";import{S as J,i as Q,g as Y,a as g,e as Z,t as d,c as T,b as V,m as E,d as W}from"../chunks/index.DuhoGsBs.js";import{H as Ot}from"../chunks/Header.DNR_PuDj.js";import{g as nt,a as lt}from"../chunks/spread.CgU5AtxT.js";import{t as Pt,d as z,l as Mt,f as St,m as At,o as ct,h as yt,s as Lt}from"../chunks/stores.BQj8HhE3.js";import{c as Vt}from"../chunks/alert-L1xBl4NT.BdnZKiDG.js";import{p as Nt}from"../chunks/stores.GT4bEDwD.js";import{S as Gt}from"../chunks/Svg.CVA30Y_d.js";import{g as _t}from"../chunks/app.B0lh-Je3.js";const It=Symbol("useSvelteSlot");function Ht(n,t){return l=>{const e=Mt(n,l);n=l,e&&t(e)}}const Rt=(n,t)=>t?(...l)=>{n(...l),t(...l)}:n,Ut=(n,t)=>{const l=St(t,{equal:Object.is});return At(z(()=>Rt(n,l())),{set:l.set,update:l.update})},qt=({factory:n,$$slots:t,defaultConfig:l,widgetConfig:e,events:s,$$props:r})=>{const f=Pt(l),o={};for(const[u,c]of Object.entries(t))c&&(o[`slot${u[0].toUpperCase()}${u.substring(1)}`]=It);const i={...r};for(const u of Object.keys(s))i[u]=Ut(s[u],r[u]);const a=n({config:z(()=>({...f(),...e?.(),...o})),props:i});return{...a,patchChangedProps:Ht(r,a.patch)}},zt=n=>typeof n=="function"&&!!n.prototype&&(n.prototype.$set||/^Proxy</.test(n.name))||typeof n?.render=="function",Xt=n=>({component:n&1,props:n&2}),pt=n=>({component:n[0],props:n[1]}),Jt=n=>({props:n&2}),dt=n=>({props:n[1]});function Qt(n){let t;const l=n[3].default,e=F(l,n,n[2],pt);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&7)&&B(e,l,s,s[2],t?O(l,s[2],r,Xt):j(s[2]),pt)},i(s){t||(d(e,s),t=!0)},o(s){g(e,s),t=!1},d(s){e&&e.d(s)}}}function Yt(n){let t=n[0](n[1])+"",l;return{c(){l=y(t)},l(e){l=L(e,t)},m(e,s){k(e,l,s)},p(e,s){s&3&&t!==(t=e[0](e[1])+"")&&tt(l,t)},i:et,o:et,d(e){e&&m(l)}}}function Zt(n){let t;return{c(){t=y(n[0])},l(l){t=L(l,n[0])},m(l,e){k(l,t,e)},p(l,e){e&1&&tt(t,l[0])},i:et,o:et,d(l){l&&m(t)}}}function Kt(n){let t;const l=n[3].slot,e=F(l,n,n[2],dt);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&6)&&B(e,l,s,s[2],t?O(l,s[2],r,Jt):j(s[2]),dt)},i(s){t||(d(e,s),t=!0)},o(s){g(e,s),t=!1},d(s){e&&e.d(s)}}}function xt(n){let t,l,e,s,r;const f=[Kt,Zt,Yt,Qt],o=[];function i(a,u){return u&1&&(t=null),a[0]===It?0:typeof a[0]=="string"?1:(t==null&&(t=!!(a[0]&&!zt(a[0]))),t?2:a[0]?3:-1)}return~(l=i(n,-1))&&(e=o[l]=f[l](n)),{c(){e&&e.c(),s=I()},l(a){e&&e.l(a),s=I()},m(a,u){~l&&o[l].m(a,u),k(a,s,u),r=!0},p(a,[u]){let c=l;l=i(a,u),l===c?~l&&o[l].p(a,u):(e&&(Y(),g(o[c],1,1,()=>{o[c]=null}),Z()),~l?(e=o[l],e?e.p(a,u):(e=o[l]=f[l](a),e.c()),d(e,1),e.m(s.parentNode,s)):e=null)},i(a){r||(d(e),r=!0)},o(a){g(e),r=!1},d(a){a&&m(s),~l&&o[l].d(a)}}}function te(n,t,l){let{$$slots:e={},$$scope:s}=t,{slotContent:r=null}=t,{props:f}=t;return n.$$set=o=>{"slotContent"in o&&l(0,r=o.slotContent),"props"in o&&l(1,f=o.props),"$$scope"in o&&l(2,s=o.$$scope)},[r,f,s,e]}class ee extends J{constructor(t){super(),Q(this,t,te,xt,X,{slotContent:0,props:1})}}const Tt=ee,se=n=>({state:n&1,widget:n&2}),mt=n=>({state:n[0],widget:n[1]}),ne=n=>({state:n&1,widget:n&2}),gt=n=>({state:n[0],widget:n[1]}),le=n=>n&64,oe=n=>({}),ht=n=>({...n[6]});function re(n){let t;const l=n[3].default,e=F(l,n,n[5],mt);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&35)&&B(e,l,s,s[5],t?O(l,s[5],r,se):j(s[5]),mt)},i(s){t||(d(e,s),t=!0)},o(s){g(e,s),t=!1},d(s){e&&e.d(s)}}}function ae(n){let t;const l=n[3].structure,e=F(l,n,n[5],gt);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&35)&&B(e,l,s,s[5],t?O(l,s[5],r,ne):j(s[5]),gt)},i(s){t||(d(e,s),t=!0)},o(s){g(e,s),t=!1},d(s){e&&e.d(s)}}}function ie(n){let t,l,e;const s=[n[6]];var r=n[7];function f(o,i){let a={$$slots:{structure:[ae,({state:u,widget:c})=>({0:u,1:c}),({state:u,widget:c})=>(u?1:0)|(c?2:0)],default:[re,({state:u,widget:c})=>({0:u,1:c}),({state:u,widget:c})=>(u?1:0)|(c?2:0)]},$$scope:{ctx:o}};for(let u=0;u<s.length;u+=1)a=U(a,s[u]);return i!==void 0&&i&64&&(a=U(a,nt(s,[lt(o[6])]))),{props:a}}return r&&(t=st(r,f(n))),{c(){t&&T(t.$$.fragment),l=I()},l(o){t&&V(t.$$.fragment,o),l=I()},m(o,i){t&&E(t,o,i),k(o,l,i),e=!0},p(o,i){if(i&128&&r!==(r=o[7])){if(t){Y();const a=t;g(a.$$.fragment,1,0,()=>{W(a,1)}),Z()}r?(t=st(r,f(o,i)),T(t.$$.fragment),d(t.$$.fragment,1),E(t,l.parentNode,l)):t=null}else if(r){const a=i&64?nt(s,[lt(o[6])]):{};i&35&&(a.$$scope={dirty:i,ctx:o}),t.$set(a)}},i(o){e||(t&&d(t.$$.fragment,o),e=!0)},o(o){t&&g(t.$$.fragment,o),e=!1},d(o){o&&m(l),t&&W(t,o)}}}function fe(n){let t;const l=n[3].default,e=F(l,n,n[5],ht);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&96)&&B(e,l,s,s[5],le(r)||!t?j(s[5]):O(l,s[5],r,oe),ht)},i(s){t||(d(e,s),t=!0)},o(s){g(e,s),t=!1},d(s){e&&e.d(s)}}}function bt(n){let t,l,e,s;return{c(){t=S("button"),this.h()},l(r){t=A(r,"BUTTON",{type:!0,class:!0,"aria-label":!0}),D(t).forEach(m),this.h()},h(){h(t,"type","button"),h(t,"class","btn-close"),h(t,"aria-label",l=n[0].ariaCloseButtonLabel)},m(r,f){k(r,t,f),e||(s=Et(t,"click",n[4]),e=!0)},p(r,f){f&1&&l!==(l=r[0].ariaCloseButtonLabel)&&h(t,"aria-label",l)},d(r){r&&m(t),e=!1,s()}}}function ue(n){let t,l,e,s,r;l=new Tt({props:{slotContent:n[0].slotDefault,props:n[2],$$slots:{slot:[fe,({props:o})=>({6:o}),({props:o})=>o?64:0],default:[ie,({component:o,props:i})=>({7:o,6:i}),({component:o,props:i})=>(o?128:0)|(i?64:0)]},$$scope:{ctx:n}}});let f=n[0].dismissible&&bt(n);return{c(){t=S("div"),T(l.$$.fragment),e=G(),f&&f.c(),s=I(),this.h()},l(o){t=A(o,"DIV",{class:!0});var i=D(t);V(l.$$.fragment,i),i.forEach(m),e=H(o),f&&f.l(o),s=I(),this.h()},h(){h(t,"class","alert-body")},m(o,i){k(o,t,i),E(l,t,null),k(o,e,i),f&&f.m(o,i),k(o,s,i),r=!0},p(o,[i]){const a={};i&1&&(a.slotContent=o[0].slotDefault),i&4&&(a.props=o[2]),i&227&&(a.$$scope={dirty:i,ctx:o}),l.$set(a),o[0].dismissible?f?f.p(o,i):(f=bt(o),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null)},i(o){r||(d(l.$$.fragment,o),r=!0)},o(o){g(l.$$.fragment,o),r=!1},d(o){o&&(m(t),m(e),m(s)),W(l),f&&f.d(o)}}}function ce(n,t,l){let e,{$$slots:s={},$$scope:r}=t,{state:f}=t,{widget:o}=t;const i=()=>o.api.close();return n.$$set=a=>{"state"in a&&l(0,f=a.state),"widget"in a&&l(1,o=a.widget),"$$scope"in a&&l(5,r=a.$$scope)},n.$$.update=()=>{n.$$.dirty&3&&l(2,e={widget:o,state:f})},[f,o,e,s,i,r]}class _e extends J{constructor(t){super(),Q(this,t,ce,ue,X,{state:0,widget:1})}}const pe=_e,x=(n,t,l=1/0)=>{if(t!==void 0)if(typeof t=="object"&&t&&l>=1){n||(n={});for(const e of Object.keys(t))Object.prototype.hasOwnProperty.call(t,e)&&(e==="__proto__"||e==="constructor"||(n[e]=x(n[e],t[e],l-1)))}else return t;return n},de=(n,t=ct)=>{const l=St({}),e=t===ct?n:z(()=>t(x({},n?.(),2)));return At(z(()=>x(x({},e?.(),2),l(),2)),{...l,own$:l,adaptedParent$:e,parent$:n})},me=(n=Symbol("widgetsConfig"))=>{const t=s=>{const r=ft(n),f=de(r,s);return Wt(n,f),f},l=s=>{const r=ft(n);return z(()=>r?.()[s])};return{widgetsDefaultConfigKey:n,createWidgetsDefaultConfig:t,getContextWidgetConfig:l,callWidgetFactory:({factory:s,widgetName:r=null,$$slots:f,defaultConfig:o={},events:i,$$props:a})=>qt({factory:s,$$slots:f,defaultConfig:o,widgetConfig:r?l(r):null,events:i,$$props:a})}},{widgetsDefaultConfigKey:Je,createWidgetsDefaultConfig:Qe,getContextWidgetConfig:Ye,callWidgetFactory:ge}=me(),he=Vt,be=n=>({state:n&131072,widget:n&256}),$t=n=>({state:n[17],widget:n[8]}),$e=n=>({state:n&131072,widget:n&256}),wt=n=>({state:n[17],widget:n[8]}),we=n=>n&32768,ve=n=>({}),vt=n=>({...n[15]});function Ct(n){let t,l,e,s,r,f;return l=new Tt({props:{slotContent:n[3],props:n[1],$$slots:{slot:[Ae,({props:o})=>({15:o}),({props:o})=>o?32768:0],default:[Se,({component:o,props:i})=>({16:o,15:i}),({component:o,props:i})=>(o?65536:0)|(i?32768:0)]},$$scope:{ctx:n}}}),{c(){t=S("div"),T(l.$$.fragment),this.h()},l(o){t=A(o,"DIV",{class:!0,role:!0});var i=D(t);V(l.$$.fragment,i),i.forEach(m),this.h()},h(){h(t,"class",e="au-alert alert alert-"+n[0].type+" "+n[0].className+" "+(n[0].dismissible?"alert-dismissible":"")),h(t,"role","alert")},m(o,i){k(o,t,i),E(l,t,null),s=!0,r||(f=Dt(n[6].call(null,t)),r=!0)},p(o,i){const a={};i&8&&(a.slotContent=o[3]),i&2&&(a.props=o[1]),i&102400&&(a.$$scope={dirty:i,ctx:o}),l.$set(a),(!s||i&1&&e!==(e="au-alert alert alert-"+o[0].type+" "+o[0].className+" "+(o[0].dismissible?"alert-dismissible":"")))&&h(t,"class",e)},i(o){s||(d(l.$$.fragment,o),s=!0)},o(o){g(l.$$.fragment,o),s=!1},d(o){o&&m(t),W(l),r=!1,f()}}}function Ce(n){let t;const l=n[11].default,e=F(l,n,n[12],$t);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&135424)&&B(e,l,s,s[12],t?O(l,s[12],r,be):j(s[12]),$t)},i(s){t||(d(e,s),t=!0)},o(s){g(e,s),t=!1},d(s){e&&e.d(s)}}}function ke(n){let t;const l=n[11].structure,e=F(l,n,n[12],wt);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&135424)&&B(e,l,s,s[12],t?O(l,s[12],r,$e):j(s[12]),wt)},i(s){t||(d(e,s),t=!0)},o(s){g(e,s),t=!1},d(s){e&&e.d(s)}}}function Se(n){let t,l,e;const s=[n[15]];var r=n[16];function f(o,i){let a={$$slots:{structure:[ke,({state:u,widget:c})=>({17:u,8:c}),({state:u,widget:c})=>(u?131072:0)|(c?256:0)],default:[Ce,({state:u,widget:c})=>({17:u,8:c}),({state:u,widget:c})=>(u?131072:0)|(c?256:0)]},$$scope:{ctx:o}};for(let u=0;u<s.length;u+=1)a=U(a,s[u]);return i!==void 0&&i&32768&&(a=U(a,nt(s,[lt(o[15])]))),{props:a}}return r&&(t=st(r,f(n))),{c(){t&&T(t.$$.fragment),l=I()},l(o){t&&V(t.$$.fragment,o),l=I()},m(o,i){t&&E(t,o,i),k(o,l,i),e=!0},p(o,i){if(i&65536&&r!==(r=o[16])){if(t){Y();const a=t;g(a.$$.fragment,1,0,()=>{W(a,1)}),Z()}r?(t=st(r,f(o,i)),T(t.$$.fragment),d(t.$$.fragment,1),E(t,l.parentNode,l)):t=null}else if(r){const a=i&32768?nt(s,[lt(o[15])]):{};i&135424&&(a.$$scope={dirty:i,ctx:o}),t.$set(a)}},i(o){e||(t&&d(t.$$.fragment,o),e=!0)},o(o){t&&g(t.$$.fragment,o),e=!1},d(o){o&&m(l),t&&W(t,o)}}}function Ae(n){let t;const l=n[11].structure,e=F(l,n,n[12],vt);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&36864)&&B(e,l,s,s[12],we(r)||!t?j(s[12]):O(l,s[12],r,ve),vt)},i(s){t||(d(e,s),t=!0)},o(s){g(e,s),t=!1},d(s){e&&e.d(s)}}}function Ne(n){let t,l,e=!n[2]&&Ct(n);return{c(){e&&e.c(),t=I()},l(s){e&&e.l(s),t=I()},m(s,r){e&&e.m(s,r),k(s,t,r),l=!0},p(s,[r]){s[2]?e&&(Y(),g(e,1,1,()=>{e=null}),Z()):e?(e.p(s,r),r&4&&d(e,1)):(e=Ct(s),e.c(),d(e,1),e.m(t.parentNode,t))},i(s){l||(d(e),l=!0)},o(s){g(e),l=!1},d(s){s&&m(t),e&&e.d(s)}}}const Ie={slotStructure:pe};function Te(n,t,l){let e,s,r,f,{$$slots:o={},$$scope:i}=t;const a=Ft(o),u=ge({factory:he,widgetName:"alert",$$slots:a,$$props:t,defaultConfig:Ie,events:{onVisibleChange:w=>{l(9,c=w)}}});let{visible:c=void 0}=t;const _=u.api,{stores:{slotStructure$:p,hidden$:C},directives:{transitionDirective:q},state$:N}=u;return R(n,p,w=>l(3,f=w)),R(n,C,w=>l(2,r=w)),R(n,N,w=>l(0,s=w)),n.$$set=w=>{l(13,t=U(U({},t),ut(w))),"visible"in w&&l(9,c=w.visible),"$$scope"in w&&l(12,i=w.$$scope)},n.$$.update=()=>{u.patchChangedProps(t),n.$$.dirty&1&&l(1,e={widget:u,state:s})},t=ut(t),[s,e,r,f,p,C,q,N,u,c,_,o,i]}class Ee extends J{constructor(t){super(),Q(this,t,Te,Ne,X,{visible:9,api:10})}get api(){return this.$$.ctx[10]}}const We=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg>`,De=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>`;function Fe(n){let t,l,e,s,r,f,o,i,a,u,c,_,p,C,q,N,w,ot,K,P;return s=new Gt({props:{svg:n[5][n[4]]}}),{c(){t=S("div"),l=S("div"),e=S("span"),T(s.$$.fragment),r=y(`
			Warning: component is `),f=S("strong"),o=y(n[3]),i=S("br"),a=G(),u=S("hr"),c=G(),_=y(n[2]),p=G(),C=S("br"),q=y(`
		If you want to contribute, please visit
		`),N=S("a"),w=y("the issues on GitHub"),ot=y("."),this.h()},l(v){t=A(v,"DIV",{class:!0});var b=D(t);l=A(b,"DIV",{class:!0});var M=D(l);e=A(M,"SPAN",{class:!0});var rt=D(e);V(s.$$.fragment,rt),rt.forEach(m),r=L(M,`
			Warning: component is `),f=A(M,"STRONG",{class:!0});var at=D(f);o=L(at,n[3]),at.forEach(m),i=A(M,"BR",{}),M.forEach(m),a=H(b),u=A(b,"HR",{}),c=H(b),_=L(b,n[2]),p=H(b),C=A(b,"BR",{}),q=L(b,`
		If you want to contribute, please visit
		`),N=A(b,"A",{href:!0,target:!0});var it=D(N);w=L(it,"the issues on GitHub"),it.forEach(m),ot=L(b,"."),b.forEach(m),this.h()},h(){h(e,"class","d-flex me-2"),h(f,"class","ms-1"),h(l,"class","d-flex align-items-center"),h(N,"href",n[1]),h(N,"target","_blank"),h(t,"class",K="alert-container p-3 border border-"+n[4]+" rounded-end")},m(v,b){k(v,t,b),$(t,l),$(l,e),E(s,e,null),$(l,r),$(l,f),$(f,o),$(l,i),$(t,a),$(t,u),$(t,c),$(t,_),$(t,p),$(t,C),$(t,q),$(t,N),$(N,w),$(t,ot),P=!0},p(v,b){const M={};b&16&&(M.svg=v[5][v[4]]),s.$set(M),(!P||b&8)&&tt(o,v[3]),(!P||b&4)&&tt(_,v[2]),(!P||b&2)&&h(N,"href",v[1]),(!P||b&16&&K!==(K="alert-container p-3 border border-"+v[4]+" rounded-end"))&&h(t,"class",K)},i(v){P||(d(s.$$.fragment,v),P=!0)},o(v){g(s.$$.fragment,v),P=!1},d(v){v&&m(t),W(s)}}}function Be(n){let t,l,e={type:n[4],className:"p-0 border-0 border-start border-5 border-"+n[4],$$slots:{default:[Fe]},$$scope:{ctx:n}};return t=new Ee({props:e}),n[9](t),{c(){T(t.$$.fragment)},l(s){V(t.$$.fragment,s)},m(s,r){E(t,s,r),l=!0},p(s,[r]){const f={};r&16&&(f.type=s[4]),r&16&&(f.className="p-0 border-0 border-start border-5 border-"+s[4]),r&1054&&(f.$$scope={dirty:r,ctx:s}),t.$set(f)},i(s){l||(d(t.$$.fragment,s),l=!0)},o(s){g(t.$$.fragment,s),l=!1},d(s){n[9](null),W(t,s)}}}const je=/\/(components|services)\/([^/]+)/;function Oe(n,t,l){let e,s,r,f,o,i;R(n,Nt,p=>l(8,i=p));const a={info:We,warning:De};let{status:u}=t,c;function _(p){Bt[p?"unshift":"push"](()=>{c=p,l(0,c)})}return n.$$set=p=>{"status"in p&&l(6,u=p.status)},n.$$.update=()=>{n.$$.dirty&64&&l(4,e=u==="inprogress"?"warning":"info"),n.$$.dirty&64&&l(3,s=u==="inprogress"?"In progress":"Beta"),n.$$.dirty&64&&l(2,r=u==="inprogress"?"This component is still under active development. More features will be added in the near future.":"This component has all the basic functionalities implemented. More polishing features might be added in the near future."),n.$$.dirty&256&&l(7,f=i.url.pathname.match(je)?.[2]),n.$$.dirty&128&&l(1,o=`https://github.com/AmadeusITGroup/AgnosUI/issues?q=is%3Aopen+is%3Aissue+label%3A%22widget%3A+${f}%22`),n.$$.dirty&129&&c?.api.open()},[c,o,r,s,e,a,u,f,i,_]}class Pe extends J{constructor(t){super(),Q(this,t,Oe,Be,X,{status:6})}}function kt(n){let t,l;return t=new Pe({props:{status:n[0].data.status}}),{c(){T(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,s){E(t,e,s),l=!0},p(e,s){const r={};s&1&&(r.status=e[0].data.status),t.$set(r)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){g(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function Me(n){let t,l,e,s,r,f,o,i;s=new Ot({props:{title:n[0].data.title,status:n[0].data.status}});let a=n[0].data.status!=="stable"&&kt(n);const u=n[7].default,c=F(u,n,n[6],null);return{c(){t=S("meta"),e=G(),T(s.$$.fragment),r=G(),f=S("div"),a&&a.c(),o=G(),c&&c.c(),this.h()},l(_){const p=jt("svelte-scbsvd",document.head);t=A(p,"META",{name:!0,content:!0}),p.forEach(m),e=H(_),V(s.$$.fragment,_),r=H(_),f=A(_,"DIV",{class:!0});var C=D(f);a&&a.l(C),o=H(C),c&&c.l(C),C.forEach(m),this.h()},h(){h(t,"name","description"),h(t,"content",l=_t(n[1],n[2])),h(f,"class","main-content")},m(_,p){$(document.head,t),k(_,e,p),E(s,_,p),k(_,r,p),k(_,f,p),a&&a.m(f,null),$(f,o),c&&c.m(f,null),i=!0},p(_,[p]){(!i||p&6&&l!==(l=_t(_[1],_[2])))&&h(t,"content",l);const C={};p&1&&(C.title=_[0].data.title),p&1&&(C.status=_[0].data.status),s.$set(C),_[0].data.status!=="stable"?a?(a.p(_,p),p&1&&d(a,1)):(a=kt(_),a.c(),d(a,1),a.m(f,o)):a&&(Y(),g(a,1,1,()=>{a=null}),Z()),c&&c.p&&(!i||p&64)&&B(c,u,_,_[6],i?O(u,_[6],p,null):j(_[6]),null)},i(_){i||(d(s.$$.fragment,_),d(a),d(c,_),i=!0)},o(_){g(s.$$.fragment,_),g(a),g(c,_),i=!1},d(_){_&&(m(e),m(r),m(f)),m(t),W(s,_),a&&a.d(),c&&c.d(_)}}}function ye(n,t,l){let e,s,r,f,o,i;R(n,Nt,c=>l(0,f=c)),R(n,yt,c=>l(5,o=c)),R(n,Lt,c=>l(2,i=c));let{$$slots:a={},$$scope:u}=t;return n.$$set=c=>{"$$scope"in c&&l(6,u=c.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&l(4,e=f.data.tabs??[]),n.$$.dirty&48&&l(3,s=e.find(c=>c.key===o)),n.$$.dirty&9&&l(1,r=`${f.data.title} ${s?.title.toLowerCase()??""}`)},[f,r,i,s,e,o,u,a]}class Ze extends J{constructor(t){super(),Q(this,t,ye,Me,X,{})}}export{Ze as component};
