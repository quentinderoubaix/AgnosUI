import{S as C,i as g,s as w,c as Y,k as b,e as _,l as $,a as m,m as q,b as p,q as S,r as k,v as D,t as M,d as N,f as d,g as j,j as v,n as x,w as B}from"./AppCommon-x_Pou3HJ.js";import{M as L,m as O,a as T}from"./Modal-kaafgyGa.js";import"./Slot-rOMveQaN.js";import"./config-_PzESuX8.js";import"./func-tK0QDe5R.js";import"./stores-eSvBfKaN.js";import"./writables-YlwXMbL6.js";import"./baseTransitions-8-DIYFII.js";import"./promise-3Ulg97W2.js";import"./directive-IUcq6b7E.js";import"./fade-Y35Pyel7.js";import"./cssTransitions--DfpABRS.js";import"./dom-2S7XI5EU.js";function z(l){let e;return{c(){e=$("Do you want to save your changes?")},m(o,t){p(o,e,t)},d(o){o&&d(e)}}}function A(l){let e,o,t,n,a;return{c(){e=_("button"),e.textContent="Yes",o=b(),t=_("button"),t.textContent="No",m(e,"type","button"),m(e,"class","btn btn-outline-primary"),m(t,"type","button"),m(t,"class","btn btn-outline-danger")},m(i,r){p(i,e,r),p(i,o,r),p(i,t,r),n||(a=[k(e,"click",l[2]),k(t,"click",l[3])],n=!0)},p:x,d(i){i&&(d(e),d(o),d(t)),n=!1,B(a)}}}function E(l){let e,o,t,n,a,i,r,f,u,y={slotTitle:"Save changes",$$slots:{footer:[A],default:[z]},$$scope:{ctx:l}};return e=new L({props:y}),l[4](e),{c(){Y(e.$$.fragment),o=b(),t=_("button"),t.textContent="Launch demo modal",n=b(),a=_("div"),i=$(l[1]),m(t,"type","button"),m(t,"class","btn btn-primary"),m(a,"class","mt-3"),m(a,"data-testid","message")},m(s,c){q(e,s,c),p(s,o,c),p(s,t,c),p(s,n,c),p(s,a,c),S(a,i),r=!0,f||(u=k(t,"click",l[5]),f=!0)},p(s,[c]){const h={};c&65&&(h.$$scope={dirty:c,ctx:s}),e.$set(h),(!r||c&2)&&D(i,s[1])},i(s){r||(M(e.$$.fragment,s),r=!0)},o(s){N(e.$$.fragment,s),r=!1},d(s){s&&(d(o),d(t),d(n),d(a)),l[4](null),j(e,s),f=!1,u()}}}function F(l,e,o){let t,n="";const a=()=>t.api.close(!0),i=()=>t.api.close(!1);function r(u){v[u?"unshift":"push"](()=>{t=u,o(0,t)})}return[t,n,a,i,r,async()=>{o(1,n="");const u=await t.api.open();u===O?o(1,n="You clicked on the close button."):u===T?o(1,n="You clicked outside the modal."):o(1,n=`You answered the question with "${u?"Yes":"No"}".`)}]}class tt extends C{constructor(e){super(),g(this,e,F,E,w,{})}}export{tt as default};