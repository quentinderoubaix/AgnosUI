import{S as F,i as N,s as T,e as $,l as g,c,k as P,a as V,b as k,r as a,m as d,t as v,d as _,f as q,g as x}from"./AppCommon-B0o63QXa.js";import{P as b}from"./Progressbar-DiNTTIFn.js";import"./Slot-JnYlUU0G.js";import"./config-BYJKBt5K.js";import"./stores-DWGGzlfa.js";import"./writables-DoU_XYTX-BIu_hqgK.js";function j(i){let t;return{c(){t=g("Step 4 out of 5")},m(r,m){k(r,t,m)},d(r){r&&q(t)}}}function y(i){let t,r,m,s,h,u,S,n,w,l,C,o,p;return s=new b({props:{min:1,max:5,value:4,ariaValueTextFn:z,$$slots:{default:[j]},$$scope:{ctx:i}}}),n=new b({props:{value:63,className:"text-bg-info",striped:!0,animated:!0}}),o=new b({props:{height:"1.5rem",value:47}}),{c(){t=$("div"),r=$("div"),m=g(`A progressbar using custom values for minimum and maximum:
		`),c(s.$$.fragment),h=P(),u=$("div"),S=g(`A striped animated progress bar:
		`),c(n.$$.fragment),w=P(),l=$("div"),C=g(`Changing the height:
		`),c(o.$$.fragment),V(t,"class","d-flex flex-column gap-2")},m(e,f){k(e,t,f),a(t,r),a(r,m),d(s,r,null),a(t,h),a(t,u),a(u,S),d(n,u,null),a(t,w),a(t,l),a(l,C),d(o,l,null),p=!0},p(e,[f]){const A={};f&1&&(A.$$scope={dirty:f,ctx:e}),s.$set(A)},i(e){p||(v(s.$$.fragment,e),v(n.$$.fragment,e),v(o.$$.fragment,e),p=!0)},o(e){_(s.$$.fragment,e),_(n.$$.fragment,e),_(o.$$.fragment,e),p=!1},d(e){e&&q(t),x(s),x(n),x(o)}}}const z=(i,t,r)=>`Step ${i} out of ${r}`;class J extends F{constructor(t){super(),N(this,t,null,y,T,{})}}export{J as default};