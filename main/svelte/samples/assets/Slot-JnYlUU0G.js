import{S as z,i as B,s as J,p as K,b as m,z as L,d as u,B as M,t as a,f as d,J as S,K as h,L as C,M as v,l as w,w as q,n as c}from"./AppCommon-B0o63QXa.js";import{u as N,i as j}from"./config-BYJKBt5K.js";const y=n=>({component:n&1,props:n&2}),k=n=>({component:n[0],props:n[1]}),A=n=>({props:n&2}),g=n=>({props:n[1]});function D(n){let s;const e=n[3].default,t=S(e,n,n[2],k);return{c(){t&&t.c()},m(o,i){t&&t.m(o,i),s=!0},p(o,i){t&&t.p&&(!s||i&7)&&h(t,e,o,o[2],s?v(e,o[2],i,y):C(o[2]),k)},i(o){s||(a(t,o),s=!0)},o(o){u(t,o),s=!1},d(o){t&&t.d(o)}}}function E(n){let s=n[0](n[1])+"",e;return{c(){e=w(s)},m(t,o){m(t,e,o)},p(t,o){o&3&&s!==(s=t[0](t[1])+"")&&q(e,s)},i:c,o:c,d(t){t&&d(e)}}}function F(n){let s;return{c(){s=w(n[0])},m(e,t){m(e,s,t)},p(e,t){t&1&&q(s,e[0])},i:c,o:c,d(e){e&&d(s)}}}function G(n){let s;const e=n[3].slot,t=S(e,n,n[2],g);return{c(){t&&t.c()},m(o,i){t&&t.m(o,i),s=!0},p(o,i){t&&t.p&&(!s||i&6)&&h(t,e,o,o[2],s?v(e,o[2],i,A):C(o[2]),g)},i(o){s||(a(t,o),s=!0)},o(o){u(t,o),s=!1},d(o){t&&t.d(o)}}}function H(n){let s,e,t,o,i;const _=[G,F,E,D],f=[];function b(l,r){return r&1&&(s=null),l[0]===N?0:typeof l[0]=="string"?1:(s==null&&(s=!!(l[0]&&!j(l[0]))),s?2:l[0]?3:-1)}return~(e=b(n,-1))&&(t=f[e]=_[e](n)),{c(){t&&t.c(),o=K()},m(l,r){~e&&f[e].m(l,r),m(l,o,r),i=!0},p(l,[r]){let p=e;e=b(l,r),e===p?~e&&f[e].p(l,r):(t&&(L(),u(f[p],1,1,()=>{f[p]=null}),M()),~e?(t=f[e],t?t.p(l,r):(t=f[e]=_[e](l),t.c()),a(t,1),t.m(o.parentNode,o)):t=null)},i(l){i||(a(t),i=!0)},o(l){u(t),i=!1},d(l){l&&d(o),~e&&f[e].d(l)}}}function I(n,s,e){let{$$slots:t={},$$scope:o}=s,{slotContent:i=null}=s,{props:_}=s;return n.$$set=f=>{"slotContent"in f&&e(0,i=f.slotContent),"props"in f&&e(1,_=f.props),"$$scope"in f&&e(2,o=f.$$scope)},[i,_,o,t]}class O extends z{constructor(s){super(),B(this,s,I,H,J,{slotContent:0,props:1})}}const R=O;export{R as S};