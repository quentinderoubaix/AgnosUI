import{S as b,i as h,s as y,o as B,b as c,y as H,d as p,n as v,z as w,t as u,f as i,h as C,B as A,c as f,m as l,C as I,D as S,g as _,k as j,l as $}from"./AppCommon-y_dNMLXh.js";import{A as q,I as g}from"./Item-HMSDrKNN.js";import{h as z}from"./utils-IM3DZ4Xj.js";import"./stores-c_iyYwJ1.js";import"./func-tK0QDe5R.js";import"./baseTransitions-vladx3jZ.js";import"./writables-P9C6Vzbc.js";import"./promise-wuy4HpSq.js";import"./directive-NtTUdlF8.js";import"./collapse-NY0yX5cQ.js";import"./cssTransitions-bzzw4xjr.js";import"./dom-2S7XI5EU.js";import"./config-KEHpgnI6.js";import"./Slot-Os0R4NEQ.js";import"./fade-SkkMgF6I.js";import"./rating-Wgz0IVlP.js";import"./pagination-r2DbHw_s.js";function D(a){let t;return{c(){t=$("Header 1")},m(o,r){c(o,t,r)},d(o){o&&i(t)}}}function N(a){let t;return{c(){t=$("Body 1")},m(o,r){c(o,t,r)},d(o){o&&i(t)}}}function P(a){let t;return{c(){t=$("Header 2")},m(o,r){c(o,t,r)},d(o){o&&i(t)}}}function x(a){let t;return{c(){t=$("Body 2")},m(o,r){c(o,t,r)},d(o){o&&i(t)}}}function E(a){let t,o,r,s;return t=new g({props:{$$slots:{itemBody:[N],itemHeader:[D]},$$scope:{ctx:a}}}),r=new g({props:{$$slots:{itemBody:[x],itemHeader:[P]},$$scope:{ctx:a}}}),{c(){f(t.$$.fragment),o=j(),f(r.$$.fragment)},m(e,n){l(t,e,n),c(e,o,n),l(r,e,n),s=!0},p(e,n){const m={};n&4&&(m.$$scope={dirty:n,ctx:e}),t.$set(m);const d={};n&4&&(d.$$scope={dirty:n,ctx:e}),r.$set(d)},i(e){s||(u(t.$$.fragment,e),u(r.$$.fragment,e),s=!0)},o(e){p(t.$$.fragment,e),p(r.$$.fragment,e),s=!1},d(e){e&&i(o),_(t,e),_(r,e)}}}function k(a){let t,o;const r=[a[0]];let s={$$slots:{default:[E]},$$scope:{ctx:a}};for(let e=0;e<r.length;e+=1)s=A(s,r[e]);return t=new q({props:s}),{c(){f(t.$$.fragment)},m(e,n){l(t,e,n),o=!0},p(e,n){const m=n&1?I(r,[S(e[0])]):{};n&4&&(m.$$scope={dirty:n,ctx:e}),t.$set(m)},i(e){o||(u(t.$$.fragment,e),o=!0)},o(e){p(t.$$.fragment,e),o=!1},d(e){_(t,e)}}}function F(a){let t=a[0],o,r,s=k(a);return{c(){s.c(),o=B()},m(e,n){s.m(e,n),c(e,o,n),r=!0},p(e,[n]){n&1&&y(t,t=e[0])?(H(),p(s,1,1,v),w(),s=k(e),s.c(),u(s,1),s.m(o.parentNode,o)):s.p(e,n)},i(e){r||(u(s),r=!0)},o(e){p(s),r=!1},d(e){e&&i(o),s.d(e)}}}function G(a,t,o){let r;const s=z("accordion");return C(a,s,e=>o(0,r=e)),[r,s]}class re extends b{constructor(t){super(),h(this,t,G,F,y,{})}}export{re as default};
