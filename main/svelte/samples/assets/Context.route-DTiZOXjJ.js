import{S as k,i as v,s as w,e as _,k as $,c as g,b as p,m as d,t as x,d as C,f as r,g as b,p as z,x as A}from"./AppCommon-Z65tc74F.js";import{P as S}from"./Pagination-7CF_uQIT.js";import"./Slot-I6WTrXyh.js";import"./config-D4eiDves.js";import"./directive-DCYlDznf-yhePTX7e.js";import"./pageFactory-C8ZmJXYi-C8fNnM7T.js";import"./extendWidget-BhYiMpAS.js";import"./pagination--GkwduJn-BM47wNEB.js";import"./writables-DoU_XYTX-Diupydw_.js";function B(m){let n=["A","B","C","D","E","F"][m[0]-1]+"",s;return{c(){s=z(n)},m(e,i){p(e,s,i)},p(e,i){i&1&&n!==(n=["A","B","C","D","E","F"][e[0]-1]+"")&&A(s,n)},d(e){e&&r(s)}}}function D(m){let n,s,e,i,l,u,a,f;return e=new S({props:{collectionSize:60}}),a=new S({props:{collectionSize:60,$$slots:{numberLabel:[B,({displayedPage:t})=>({0:t}),({displayedPage:t})=>t?1:0]},$$scope:{ctx:m}}}),{c(){n=_("p"),n.textContent="The default look of the pagination:",s=$(),g(e.$$.fragment),i=$(),l=_("p"),l.textContent="Changing the slot displaying the page number to use letters instead:",u=$(),g(a.$$.fragment)},m(t,o){p(t,n,o),p(t,s,o),d(e,t,o),p(t,i,o),p(t,l,o),p(t,u,o),d(a,t,o),f=!0},p(t,[o]){const c={};o&3&&(c.$$scope={dirty:o,ctx:t}),a.$set(c)},i(t){f||(x(e.$$.fragment,t),x(a.$$.fragment,t),f=!0)},o(t){C(e.$$.fragment,t),C(a.$$.fragment,t),f=!1},d(t){t&&(r(n),r(s),r(i),r(l),r(u)),b(e,t),b(a,t)}}}class G extends k{constructor(n){super(),v(this,n,null,D,w,{})}}export{G as default};
