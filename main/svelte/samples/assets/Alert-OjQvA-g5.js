import{S as R,i as T,s as U,e as V,c as h,k as y,p as L,a as d,b as g,m as b,t as _,d as m,f as $,g as w,Q as A,z as W,B as j,D,E as B,J as v,K as k,L as S,M as N,u as x,C,O as tt,h as P,N as F,y as et}from"./AppCommon-M7DUBvbC.js";import{S as X}from"./Slot-61Ngmrv5.js";import{c as st}from"./config-GGxyuvAg.js";import{e as lt,c as ot}from"./extendWidget-CVDGeT5b.js";import{b as nt}from"./writables-NKRjUwfl.js";const rt={type:"primary"},at={type:nt},it=lt(ot,rt,at),ut=l=>({state:l&1,widget:l&2}),J=l=>({state:l[0],widget:l[1]}),ft=l=>({state:l&1,widget:l&2}),K=l=>({slot:"structure",state:l[0],widget:l[1]}),ct=l=>l&64,_t=l=>({}),M=l=>({slot:"slot",...l[6]});function mt(l){let t;const n=l[3].default,s=v(n,l,l[5],J);return{c(){s&&s.c()},m(e,r){s&&s.m(e,r),t=!0},p(e,r){s&&s.p&&(!t||r&35)&&k(s,n,e,e[5],t?N(n,e[5],r,ut):S(e[5]),J)},i(e){t||(_(s,e),t=!0)},o(e){m(s,e),t=!1},d(e){s&&s.d(e)}}}function pt(l){let t;const n=l[3].structure,s=v(n,l,l[5],K);return{c(){s&&s.c()},m(e,r){s&&s.m(e,r),t=!0},p(e,r){s&&s.p&&(!t||r&35)&&k(s,n,e,e[5],t?N(n,e[5],r,ft):S(e[5]),K)},i(e){t||(_(s,e),t=!0)},o(e){m(s,e),t=!1},d(e){s&&s.d(e)}}}function dt(l){let t,n,s;const e=[l[6]];var r=l[7];function u(o,a){let i={$$slots:{structure:[pt,({widget:f,state:c})=>({1:f,0:c}),({widget:f,state:c})=>(f?2:0)|(c?1:0)],default:[mt,({state:f,widget:c})=>({0:f,1:c}),({state:f,widget:c})=>(f?1:0)|(c?2:0)]},$$scope:{ctx:o}};for(let f=0;f<e.length;f+=1)i=C(i,e[f]);return a!==void 0&&a&64&&(i=C(i,D(e,[B(o[6])]))),{props:i}}return r&&(t=A(r,u(l))),{c(){t&&h(t.$$.fragment),n=L()},m(o,a){t&&b(t,o,a),g(o,n,a),s=!0},p(o,a){if(a&128&&r!==(r=o[7])){if(t){W();const i=t;m(i.$$.fragment,1,0,()=>{w(i,1)}),j()}r?(t=A(r,u(o,a)),h(t.$$.fragment),_(t.$$.fragment,1),b(t,n.parentNode,n)):t=null}else if(r){const i=a&64?D(e,[B(o[6])]):{};a&35&&(i.$$scope={dirty:a,ctx:o}),t.$set(i)}},i(o){s||(t&&_(t.$$.fragment,o),s=!0)},o(o){t&&m(t.$$.fragment,o),s=!1},d(o){o&&$(n),t&&w(t,o)}}}function gt(l){let t;const n=l[3].default,s=v(n,l,l[5],M);return{c(){s&&s.c()},m(e,r){s&&s.m(e,r),t=!0},p(e,r){s&&s.p&&(!t||r&96)&&k(s,n,e,e[5],ct(r)||!t?S(e[5]):N(n,e[5],r,_t),M)},i(e){t||(_(s,e),t=!0)},o(e){m(s,e),t=!1},d(e){s&&s.d(e)}}}function O(l){let t,n,s,e;return{c(){t=V("button"),d(t,"type","button"),d(t,"class","btn-close"),d(t,"aria-label",n=l[0].ariaCloseButtonLabel)},m(r,u){g(r,t,u),s||(e=x(t,"click",l[4]),s=!0)},p(r,u){u&1&&n!==(n=r[0].ariaCloseButtonLabel)&&d(t,"aria-label",n)},d(r){r&&$(t),s=!1,e()}}}function $t(l){let t,n,s,e,r;n=new X({props:{slotContent:l[0].slotDefault,props:l[2],$$slots:{slot:[gt,({props:o})=>({6:o}),({props:o})=>o?64:0],default:[dt,({component:o,props:a})=>({7:o,6:a}),({component:o,props:a})=>(o?128:0)|(a?64:0)]},$$scope:{ctx:l}}});let u=l[0].dismissible&&O(l);return{c(){t=V("div"),h(n.$$.fragment),s=y(),u&&u.c(),e=L(),d(t,"class","alert-body")},m(o,a){g(o,t,a),b(n,t,null),g(o,s,a),u&&u.m(o,a),g(o,e,a),r=!0},p(o,[a]){const i={};a&1&&(i.slotContent=o[0].slotDefault),a&4&&(i.props=o[2]),a&227&&(i.$$scope={dirty:a,ctx:o}),n.$set(i),o[0].dismissible?u?u.p(o,a):(u=O(o),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null)},i(o){r||(_(n.$$.fragment,o),r=!0)},o(o){m(n.$$.fragment,o),r=!1},d(o){o&&($(t),$(s),$(e)),w(n),u&&u.d(o)}}}function ht(l,t,n){let s,{$$slots:e={},$$scope:r}=t,{state:u}=t,{widget:o}=t;const a=()=>o.api.close();return l.$$set=i=>{"state"in i&&n(0,u=i.state),"widget"in i&&n(1,o=i.widget),"$$scope"in i&&n(5,r=i.$$scope)},l.$$.update=()=>{l.$$.dirty&3&&n(2,s={widget:o,state:u})},[u,o,s,e,a,r]}class bt extends R{constructor(t){super(),T(this,t,ht,$t,U,{state:0,widget:1})}}const wt=bt,Ct=it,vt=l=>({state:l&131072,widget:l&256}),Q=l=>({state:l[17],widget:l[8]}),kt=l=>({state:l&131072,widget:l&256}),G=l=>({slot:"structure",state:l[17],widget:l[8]}),St=l=>l&32768,Nt=l=>({}),H=l=>({slot:"slot",...l[15]});function I(l){let t,n,s,e,r,u;return n=new X({props:{slotContent:l[3],props:l[1],$$slots:{slot:[Lt,({props:o})=>({15:o}),({props:o})=>o?32768:0],default:[Bt,({component:o,props:a})=>({16:o,15:a}),({component:o,props:a})=>(o?65536:0)|(a?32768:0)]},$$scope:{ctx:l}}}),{c(){t=V("div"),h(n.$$.fragment),d(t,"class",s="au-alert alert alert-"+l[0].type+" "+l[0].className+" "+(l[0].dismissible?"alert-dismissible":"")),d(t,"role","alert")},m(o,a){g(o,t,a),b(n,t,null),e=!0,r||(u=et(l[6].call(null,t)),r=!0)},p(o,a){const i={};a&8&&(i.slotContent=o[3]),a&2&&(i.props=o[1]),a&102400&&(i.$$scope={dirty:a,ctx:o}),n.$set(i),(!e||a&1&&s!==(s="au-alert alert alert-"+o[0].type+" "+o[0].className+" "+(o[0].dismissible?"alert-dismissible":"")))&&d(t,"class",s)},i(o){e||(_(n.$$.fragment,o),e=!0)},o(o){m(n.$$.fragment,o),e=!1},d(o){o&&$(t),w(n),r=!1,u()}}}function At(l){let t;const n=l[11].default,s=v(n,l,l[12],Q);return{c(){s&&s.c()},m(e,r){s&&s.m(e,r),t=!0},p(e,r){s&&s.p&&(!t||r&135424)&&k(s,n,e,e[12],t?N(n,e[12],r,vt):S(e[12]),Q)},i(e){t||(_(s,e),t=!0)},o(e){m(s,e),t=!1},d(e){s&&s.d(e)}}}function Dt(l){let t;const n=l[11].structure,s=v(n,l,l[12],G);return{c(){s&&s.c()},m(e,r){s&&s.m(e,r),t=!0},p(e,r){s&&s.p&&(!t||r&135424)&&k(s,n,e,e[12],t?N(n,e[12],r,kt):S(e[12]),G)},i(e){t||(_(s,e),t=!0)},o(e){m(s,e),t=!1},d(e){s&&s.d(e)}}}function Bt(l){let t,n,s;const e=[l[15]];var r=l[16];function u(o,a){let i={$$slots:{structure:[Dt,({widget:f,state:c})=>({8:f,17:c}),({widget:f,state:c})=>(f?256:0)|(c?131072:0)],default:[At,({state:f,widget:c})=>({17:f,8:c}),({state:f,widget:c})=>(f?131072:0)|(c?256:0)]},$$scope:{ctx:o}};for(let f=0;f<e.length;f+=1)i=C(i,e[f]);return a!==void 0&&a&32768&&(i=C(i,D(e,[B(o[15])]))),{props:i}}return r&&(t=A(r,u(l))),{c(){t&&h(t.$$.fragment),n=L()},m(o,a){t&&b(t,o,a),g(o,n,a),s=!0},p(o,a){if(a&65536&&r!==(r=o[16])){if(t){W();const i=t;m(i.$$.fragment,1,0,()=>{w(i,1)}),j()}r?(t=A(r,u(o,a)),h(t.$$.fragment),_(t.$$.fragment,1),b(t,n.parentNode,n)):t=null}else if(r){const i=a&32768?D(e,[B(o[15])]):{};a&135424&&(i.$$scope={dirty:a,ctx:o}),t.$set(i)}},i(o){s||(t&&_(t.$$.fragment,o),s=!0)},o(o){t&&m(t.$$.fragment,o),s=!1},d(o){o&&$(n),t&&w(t,o)}}}function Lt(l){let t;const n=l[11].structure,s=v(n,l,l[12],H);return{c(){s&&s.c()},m(e,r){s&&s.m(e,r),t=!0},p(e,r){s&&s.p&&(!t||r&36864)&&k(s,n,e,e[12],St(r)||!t?S(e[12]):N(n,e[12],r,Nt),H)},i(e){t||(_(s,e),t=!0)},o(e){m(s,e),t=!1},d(e){s&&s.d(e)}}}function Pt(l){let t,n,s=!l[2]&&I(l);return{c(){s&&s.c(),t=L()},m(e,r){s&&s.m(e,r),g(e,t,r),n=!0},p(e,[r]){e[2]?s&&(W(),m(s,1,1,()=>{s=null}),j()):s?(s.p(e,r),r&4&&_(s,1)):(s=I(e),s.c(),_(s,1),s.m(t.parentNode,t))},i(e){n||(_(s),n=!0)},o(e){m(s),n=!1},d(e){e&&$(t),s&&s.d(e)}}}const Vt={slotStructure:wt};function Wt(l,t,n){let s,e,r,u,{$$slots:o={},$$scope:a}=t;const i=tt(o),f=st({factory:Ct,widgetName:"alert",$$slots:i,$$props:t,defaultConfig:Vt,events:{onVisibleChange:p=>{n(9,c=p)}}});let{visible:c=void 0}=t;const Y=f.api,{stores:{slotStructure$:q,hidden$:z},directives:{transitionDirective:Z},state$:E}=f;return P(l,q,p=>n(3,u=p)),P(l,z,p=>n(2,r=p)),P(l,E,p=>n(0,e=p)),l.$$set=p=>{n(13,t=C(C({},t),F(p))),"visible"in p&&n(9,c=p.visible),"$$scope"in p&&n(12,a=p.$$scope)},l.$$.update=()=>{f.patchChangedProps(t),l.$$.dirty&1&&n(1,s={widget:f,state:e})},t=F(t),[e,s,r,u,q,z,Z,E,f,c,Y,o,a]}class Jt extends R{constructor(t){super(),T(this,t,Wt,Pt,U,{visible:9,api:10})}get api(){return this.$$.ctx[10]}}export{Jt as A};
