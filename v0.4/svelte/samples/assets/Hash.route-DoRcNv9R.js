import{S as P,i as k,s as v,k as h,f as d,l as b,c as C,g as c,v as $,m as L,x as w,t as S,a as y,h as f,d as z,b as q,a4 as x}from"./AppCommon-EGvQgKwz.js";import{P as A}from"./Pagination-DCUt3Rcv.js";import"./Slot-CIXSXyWX.js";import"./config-dcf0MZy6.js";import"./directive-3-8yr-ZK-C23OGezp.js";import"./pageFactory-C8ZmJXYi-DyJlSjiz.js";import"./extendWidget-8zXnCiQz.js";import"./pagination-BpPHKQsH-Vfz41Vcl.js";import"./writables-DoU_XYTX-esNIv65O.js";function H(e){let o,r,n,s,m,l="#"+e[0],a,g,p,u;return p=new A({props:{page:e[1],collectionSize:60,boundaryLinks:!0,ariaLabel:"Page navigation with customized hrefs",pageLink:e[2],onPageChange:e[3]}}),{c(){o=h("p"),o.textContent="A pagination with hrefs provided for each pagination element:",r=d(),n=h("p"),s=b("Page hash: "),m=h("small"),a=b(l),g=d(),C(p.$$.fragment)},m(t,i){c(t,o,i),c(t,r,i),c(t,n,i),$(n,s),$(n,m),$(m,a),c(t,g,i),L(p,t,i),u=!0},p(t,[i]){(!u||i&1)&&l!==(l="#"+t[0])&&w(a,l);const _={};i&2&&(_.page=t[1]),p.$set(_)},i(t){u||(S(p.$$.fragment,t),u=!0)},o(t){y(p.$$.fragment,t),u=!1},d(t){t&&(f(o),f(r),f(n),f(g)),z(p,t)}}}function j(e,o,r){let n,s;q(e,x,a=>r(0,s=a));const m=a=>`#${s.split("#")[0]}#${a}`,l=a=>location.hash=`#${s.split("#")[0]}#${a}`;return e.$$.update=()=>{e.$$.dirty&1&&r(1,n=+(s.split("#")[1]??4))},[s,n,m,l]}class N extends P{constructor(o){super(),k(this,o,j,H,v,{})}}export{N as default};