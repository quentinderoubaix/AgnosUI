import{S as b,i as h,s as y,q as H,b as c,D as B,d as p,n as v,E as w,t as u,f as i,h as q,l as A,c as f,m as l,y as C,F as I,g as _,k as S,p as $}from"./AppCommon-Z65tc74F.js";import{A as j,I as g}from"./Item-DSsjHXeX.js";import{h as D}from"./utils-CE8J3lkN.js";import"./Slot-I6WTrXyh.js";import"./config-D4eiDves.js";import"./directive-DCYlDznf-yhePTX7e.js";import"./baseTransitions-BBjPZlUM.js";import"./writables-DoU_XYTX-Diupydw_.js";import"./promise-CY2U8bTP-DWYNCgaX.js";import"./collapse-CVjUhnIz-Dvcrjbag.js";import"./cssTransitions-BaZQrEJp.js";import"./extendWidget-BhYiMpAS.js";import"./pageFactory-C8ZmJXYi-C8fNnM7T.js";import"./pagination--GkwduJn-BM47wNEB.js";import"./rating-CNQcp5pm-t-e6Yhi-.js";import"./rating-BR5wD7y2-EcD5KZNB.js";import"./fade-uOobJKgw-BNW7p75N.js";import"./simpleClassTransition-BJMPXoX_.js";function E(a){let t;return{c(){t=$("Header 1")},m(o,r){c(o,t,r)},d(o){o&&i(t)}}}function F(a){let t;return{c(){t=$("Body 1")},m(o,r){c(o,t,r)},d(o){o&&i(t)}}}function N(a){let t;return{c(){t=$("Header 2")},m(o,r){c(o,t,r)},d(o){o&&i(t)}}}function P(a){let t;return{c(){t=$("Body 2")},m(o,r){c(o,t,r)},d(o){o&&i(t)}}}function x(a){let t,o,r,s;return t=new g({props:{$$slots:{itemBody:[F],itemHeader:[E]},$$scope:{ctx:a}}}),r=new g({props:{$$slots:{itemBody:[P],itemHeader:[N]},$$scope:{ctx:a}}}),{c(){f(t.$$.fragment),o=S(),f(r.$$.fragment)},m(e,n){l(t,e,n),c(e,o,n),l(r,e,n),s=!0},p(e,n){const m={};n&4&&(m.$$scope={dirty:n,ctx:e}),t.$set(m);const d={};n&4&&(d.$$scope={dirty:n,ctx:e}),r.$set(d)},i(e){s||(u(t.$$.fragment,e),u(r.$$.fragment,e),s=!0)},o(e){p(t.$$.fragment,e),p(r.$$.fragment,e),s=!1},d(e){e&&i(o),_(t,e),_(r,e)}}}function k(a){let t,o;const r=[a[0]];let s={$$slots:{default:[x]},$$scope:{ctx:a}};for(let e=0;e<r.length;e+=1)s=A(s,r[e]);return t=new j({props:s}),{c(){f(t.$$.fragment)},m(e,n){l(t,e,n),o=!0},p(e,n){const m=n&1?C(r,[I(e[0])]):{};n&4&&(m.$$scope={dirty:n,ctx:e}),t.$set(m)},i(e){o||(u(t.$$.fragment,e),o=!0)},o(e){p(t.$$.fragment,e),o=!1},d(e){_(t,e)}}}function z(a){let t=a[0],o,r,s=k(a);return{c(){s.c(),o=H()},m(e,n){s.m(e,n),c(e,o,n),r=!0},p(e,[n]){n&1&&y(t,t=e[0])?(B(),p(s,1,1,v),w(),s=k(e),s.c(),u(s,1),s.m(o.parentNode,o)):s.p(e,n)},i(e){r||(u(s),r=!0)},o(e){p(s),r=!1},d(e){e&&i(o),s.d(e)}}}function G(a,t,o){let r;const s=D("accordion");return q(a,s,e=>o(0,r=e)),[r,s]}class se extends b{constructor(t){super(),h(this,t,G,z,y,{})}}export{se as default};