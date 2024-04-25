import{S as K,i as V,s as X,q as J,b as m,n as y,f as c,e as h,k as $,p as L,a as f,a4 as M,v as w,C as I,x as H,B as O,j as z,a5 as T,c as A,m as D,a6 as N,t as R,d as q,g as B}from"./AppCommon-Z65tc74F.js";import{P as F}from"./Pagination-7CF_uQIT.js";import"./Slot-I6WTrXyh.js";import"./config-D4eiDves.js";import"./directive-DCYlDznf-yhePTX7e.js";import"./pageFactory-C8ZmJXYi-C8fNnM7T.js";import"./extendWidget-BhYiMpAS.js";import"./pagination--GkwduJn-BM47wNEB.js";import"./writables-DoU_XYTX-Diupydw_.js";function G(a){let i,e,t,o,s,p,_,g,l,u=a[0].pages.length+"",d,v,k;return{c(){i=h("li"),e=h("div"),t=h("label"),t.textContent="Page",o=$(),s=h("input"),_=$(),g=h("span"),l=L("of "),d=L(u),f(t,"id","paginationInputLabel"),f(t,"for","paginationInput"),f(t,"class","col-form-label me-2 ms-1"),s.value=p=a[0].page,f(s,"type","text"),f(s,"inputmode","numeric"),f(s,"pattern","[0-9]*"),f(s,"class","form-control custom-pages-input"),f(s,"id","paginationInput"),f(s,"aria-labelledby","paginationInputLabel paginationDescription"),M(s,"width","2.5rem"),f(g,"id","paginationDescription"),f(g,"class","col-form-label text-nowrap px-2"),f(e,"class","mb-3 d-flex flex-nowrap px-2"),f(i,"class","au-custom-pages-item")},m(b,P){m(b,i,P),w(i,e),w(e,t),w(e,o),w(e,s),a[5](s),w(e,_),w(e,g),w(g,l),w(g,d),v||(k=[I(s,"keydown",a[2]),I(s,"blur",a[3]),I(s,"input",W)],v=!0)},p(b,P){P&1&&p!==(p=b[0].page)&&s.value!==p&&(s.value=p),P&1&&u!==(u=b[0].pages.length+"")&&H(d,u)},d(b){b&&c(i),a[5](null),v=!1,O(k)}}}function Q(a){let i,e=a[0].pages.length>0&&G(a);return{c(){e&&e.c(),i=J()},m(t,o){e&&e.m(t,o),m(t,i,o)},p(t,[o]){t[0].pages.length>0?e?e.p(t,o):(e=G(t),e.c(),e.m(i.parentNode,i)):e&&(e.d(1),e=null)},i:y,o:y,d(t){t&&c(i),e&&e.d(t)}}}const U=/[^0-9]/g;function W(a){a.currentTarget.value=a.currentTarget.value.replace(U,"")}function Y(a,i,e){let{state:t}=i,{widget:o}=i,s;function p(l){l.key==="Enter"&&_(l)}function _(l){const u=l.currentTarget.value,d=parseInt(u);o.actions.select(d),e(1,s.value=o.stores.page$().toString(),s)}function g(l){z[l?"unshift":"push"](()=>{s=l,e(1,s)})}return a.$$set=l=>{"state"in l&&e(0,t=l.state),"widget"in l&&e(4,o=l.widget)},[t,s,p,_,o,g]}class Z extends K{constructor(i){super(),V(this,i,Y,Q,X,{state:0,widget:4})}}function x(a){let i=j(a[3])+"",e;return{c(){e=L(i)},m(t,o){m(t,e,o)},p(t,o){o&8&&i!==(i=j(t[3])+"")&&H(e,i)},d(t){t&&c(e)}}}function ee(a){let i,e,t,o,s,p,_,g,l,u,d,v;function k(n){a[1](n)}let b={collectionSize:60,slotPrevious:"Prev",slotNext:"Next",ariaLabel:"Page navigation with customized links",$$slots:{numberLabel:[x,({displayedPage:n})=>({3:n}),({displayedPage:n})=>n?8:0]},$$scope:{ctx:a}};a[0]!==void 0&&(b.page=a[0]),t=new F({props:b}),z.push(()=>T(t,"page",k));function P(n){a[2](n)}let E={collectionSize:60,slotPages:Z,ariaLabel:"Page navigation with customized pages"};return a[0]!==void 0&&(E.page=a[0]),u=new F({props:E}),z.push(()=>T(u,"page",P)),{c(){i=h("p"),i.textContent="A pagination with customized links:",e=$(),A(t.$$.fragment),s=$(),p=h("hr"),_=$(),g=h("p"),g.textContent="A pagination with customized pages:",l=$(),A(u.$$.fragment)},m(n,r){m(n,i,r),m(n,e,r),D(t,n,r),m(n,s,r),m(n,p,r),m(n,_,r),m(n,g,r),m(n,l,r),D(u,n,r),v=!0},p(n,[r]){const C={};r&24&&(C.$$scope={dirty:r,ctx:n}),!o&&r&1&&(o=!0,C.page=n[0],N(()=>o=!1)),t.$set(C);const S={};!d&&r&1&&(d=!0,S.page=n[0],N(()=>d=!1)),u.$set(S)},i(n){v||(R(t.$$.fragment,n),R(u.$$.fragment,n),v=!0)},o(n){q(t.$$.fragment,n),q(u.$$.fragment,n),v=!1},d(n){n&&(c(i),c(e),c(s),c(p),c(_),c(g),c(l)),B(t,n),B(u,n)}}}function j(a){return["A","B","C","D","E","F"][a-1]}function te(a,i,e){let t=4;function o(p){t=p,e(0,t)}function s(p){t=p,e(0,t)}return[t,o,s]}class ge extends K{constructor(i){super(),V(this,i,te,ee,X,{})}}export{ge as default};
