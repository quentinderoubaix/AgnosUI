import{S as x,i as C,s as g,e as h,l as b,k as y,a as d,b as u,r as _,x as w,v as D,n as m,f as p}from"./AppCommon-Cd2V92GK.js";import{o as v}from"./modalService-DDKFzSgC.js";import"./Modal-qx1TPwH6.js";import"./Slot-Cs0vz58g.js";import"./config-BL_3m_ND.js";import"./directive-DwbtadSh-BZ7DGJEn.js";import"./writables-DoU_XYTX-CyXwBtTT.js";import"./baseTransitions-CW6NQKqH.js";import"./promise-CY2U8bTP-DnAuZGpf.js";import"./fade-uOobJKgw-3-7zaNEZ.js";import"./simpleClassTransition-COs3QIb-.js";import"./cssTransitions-BhMFJpsR.js";import"./extendWidget-BmWsYFik.js";function H(a){let t,n,e=a[1].contentData.name+"",o,r,s,i,f,k;return{c(){t=h("p"),n=b("Hello, "),o=b(e),r=b("!"),s=y(),i=h("button"),i.textContent="Close",d(i,"type","button"),d(i,"class","btn btn-outline-primary")},m(l,c){u(l,t,c),_(t,n),_(t,o),_(t,r),u(l,s,c),u(l,i,c),f||(k=w(i,"click",a[2]),f=!0)},p(l,[c]){c&2&&e!==(e=l[1].contentData.name+"")&&D(o,e)},i:m,o:m,d(l){l&&(p(t),p(s),p(i)),f=!1,k()}}}function M(a,t,n){let{widget:e}=t,{state:o}=t;const r=()=>e.api.close();return a.$$set=s=>{"widget"in s&&n(0,e=s.widget),"state"in s&&n(1,o=s.state)},[e,o,r]}class S extends x{constructor(t){super(),C(this,t,M,H,g,{widget:0,state:1})}}function q(a){let t,n,e;return{c(){t=h("button"),t.textContent="Launch demo modal",d(t,"type","button"),d(t,"class","btn btn-primary")},m(o,r){u(o,t,r),n||(e=w(t,"click",a[1]),n=!0)},p:m,i:m,o:m,d(o){o&&p(t),n=!1,e()}}}function L(a){const t=()=>v({slotTitle:"Hi there!",slotDefault:S,contentData:{name:"World"}});return[t,()=>t()]}class O extends x{constructor(t){super(),C(this,t,L,q,g,{})}}export{O as default};