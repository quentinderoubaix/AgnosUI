import{S as H,i as M,s as O,V as q,e as h,a as d,b as _,t as m,D as Q,E as T,d as g,f as p,Y as V,R as W,h as S,l as N,Q as F,c as v,k as R,m as w,v as Y,g as b,U as P,q as A,y as U,F as j,M as G,N as I,O as J,P as K,u as C}from"./AppCommon-Z65tc74F.js";/* empty css               */import{c as L,S as X}from"./Slot-I6WTrXyh.js";import{c as Z}from"./rating-Cm90PBJi.js";import"./config-D4eiDves.js";import"./directive-DCYlDznf-yhePTX7e.js";import"./rating-CNQcp5pm-t-e6Yhi-.js";import"./rating-BR5wD7y2-EcD5KZNB.js";import"./writables-DoU_XYTX-Diupydw_.js";import"./extendWidget-BhYiMpAS.js";function z(r,t,o){const a=r.slice();return a[12]=t[o].fill,a[13]=t[o].index,a}const x=r=>r&65536,tt=r=>({}),B=r=>({...r[16]});function et(r){let t,o,a;const l=[r[16]];var e=r[17];function f(n,i){let s={};for(let c=0;c<l.length;c+=1)s=N(s,l[c]);return i!==void 0&&i&65536&&(s=N(s,U(l,[j(n[16])]))),{props:s}}return e&&(t=P(e,f(r))),{c(){t&&v(t.$$.fragment),o=A()},m(n,i){t&&w(t,n,i),_(n,o,i),a=!0},p(n,i){if(i&131072&&e!==(e=n[17])){if(t){Q();const s=t;g(s.$$.fragment,1,0,()=>{b(s,1)}),T()}e?(t=P(e,f(n,i)),v(t.$$.fragment),m(t.$$.fragment,1),w(t,o.parentNode,o)):t=null}else if(e){const s=i&65536?U(l,[j(n[16])]):{};t.$set(s)}},i(n){a||(t&&m(t.$$.fragment,n),a=!0)},o(n){t&&g(t.$$.fragment,n),a=!1},d(n){n&&p(o),t&&b(t,n)}}}function st(r){let t;const o=r[7].star,a=G(o,r,r[8],B);return{c(){a&&a.c()},m(l,e){a&&a.m(l,e),t=!0},p(l,e){a&&a.p&&(!t||e&65792)&&I(a,o,l,l[8],x(e)||!t?J(l[8]):K(o,l[8],e,tt),B)},i(l){t||(m(a,l),t=!0)},o(l){g(a,l),t=!1},d(l){a&&a.d(l)}}}function D(r){let t,o,a,l;return o=new X({props:{slotContent:r[2],props:{fill:r[12],index:r[13]},$$slots:{slot:[st,({props:e})=>({16:e}),({props:e})=>e?65536:0],default:[et,({component:e,props:f})=>({17:e,16:f}),({component:e,props:f})=>(e?131072:0)|(f?65536:0)]},$$scope:{ctx:r}}}),{c(){t=h("span"),v(o.$$.fragment),a=R(),d(t,"class","au-rating-star")},m(e,f){_(e,t,f),w(o,t,null),Y(t,a),l=!0},p(e,f){const n={};f&4&&(n.slotContent=e[2]),f&2&&(n.props={fill:e[12],index:e[13]}),f&196864&&(n.$$scope={dirty:f,ctx:e}),o.$set(n)},i(e){l||(m(o.$$.fragment,e),l=!0)},o(e){g(o.$$.fragment,e),l=!1},d(e){e&&p(t),b(o)}}}function nt(r){let t,o,a,l=q(r[1]),e=[];for(let n=0;n<l.length;n+=1)e[n]=D(z(r,l,n));const f=n=>g(e[n],1,1,()=>{e[n]=null});return{c(){t=h("div");for(let n=0;n<e.length;n+=1)e[n].c();d(t,"class",o="d-inline-flex au-rating "+r[0])},m(n,i){_(n,t,i);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,null);a=!0},p(n,[i]){if(i&196870){l=q(n[1]);let s;for(s=0;s<l.length;s+=1){const c=z(n,l,s);e[s]?(e[s].p(c,i),m(e[s],1)):(e[s]=D(c),e[s].c(),m(e[s],1),e[s].m(t,null))}for(Q(),s=l.length;s<e.length;s+=1)f(s);T()}(!a||i&1&&o!==(o="d-inline-flex au-rating "+n[0]))&&d(t,"class",o)},i(n){if(!a){for(let i=0;i<l.length;i+=1)m(e[i]);a=!0}},o(n){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)g(e[i]);a=!1},d(n){n&&p(t),V(e,n)}}}function at(r,t,o){let a,l,e,{$$slots:f={},$$scope:n}=t;const i=W(f),s=L({factory:Z,widgetName:"rating",$$slots:i,$$props:{...t,readonly:!0},events:{onRatingChange:()=>{}}}),c=s.api,{stores:{stars$:$,className$:k,slotStar$:y}}=s;return S(r,$,u=>o(1,l=u)),S(r,k,u=>o(0,a=u)),S(r,y,u=>o(2,e=u)),r.$$set=u=>{o(10,t=N(N({},t),F(u))),"$$scope"in u&&o(8,n=u.$$scope)},r.$$.update=()=>{s.patchChangedProps(t)},t=F(t),[a,l,e,$,k,y,c,f,n]}class E extends H{constructor(t){super(),M(this,t,at,nt,O,{api:6})}get api(){return this.$$.ctx[6]}}function ot(r){let t;return{c(){t=h("span"),t.textContent="★",d(t,"slot","star"),d(t,"class","star"),C(t,"filled",r[0]===100),C(t,"bad",r[1]<3)},m(o,a){_(o,t,a)},p(o,a){a&1&&C(t,"filled",o[0]===100),a&2&&C(t,"bad",o[1]<3)},d(o){o&&p(t)}}}function lt(r){let t,o,a,l,e,f,n,i;return a=new E({props:{rating:7,maxRating:10}}),n=new E({props:{rating:7,maxRating:10,className:"rating-custom",$$slots:{star:[ot,({fill:s,index:c})=>({0:s,1:c}),({fill:s,index:c})=>(s?1:0)|(c?2:0)]},$$scope:{ctx:r}}}),{c(){t=h("div"),t.textContent="The readonly rating without slot:",o=R(),v(a.$$.fragment),l=R(),e=h("div"),e.textContent="Using a slot to customize the display:",f=R(),v(n.$$.fragment),d(e,"class","mt-2")},m(s,c){_(s,t,c),_(s,o,c),w(a,s,c),_(s,l,c),_(s,e,c),_(s,f,c),w(n,s,c),i=!0},p(s,[c]){const $={};c&7&&($.$$scope={dirty:c,ctx:s}),n.$set($)},i(s){i||(m(a.$$.fragment,s),m(n.$$.fragment,s),i=!0)},o(s){g(a.$$.fragment,s),g(n.$$.fragment,s),i=!1},d(s){s&&(p(t),p(o),p(l),p(e),p(f)),b(a,s),b(n,s)}}}class $t extends H{constructor(t){super(),M(this,t,null,lt,O,{})}}export{$t as default};
