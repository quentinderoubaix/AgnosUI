import{S as x,i as C,s as g,j as h,k as b,f as y,n as d,g as u,p as _,q as w,u as D,x as m,h as p}from"./index-KDviNLTK.js";import{o as q}from"./modalService-6tkhf4oo.js";import"./Modal-mh9eClAZ.js";import"./Slot-slqeI5Fu.js";import"./config-wWulXurV.js";import"./func-tK0QDe5R.js";import"./stores-erwhNRks.js";import"./writables-jMYMxDHp.js";import"./baseTransitions-kY1G7fH9.js";import"./promise-YW_RJYt6.js";import"./directive-GeNB6-_w.js";import"./fade-JIgvwVKg.js";import"./cssTransitions-P3C2Wo21.js";import"./dom-2S7XI5EU.js";function H(a){let t,n,e=a[1].contentData.name+"",o,r,s,i,f,k;return{c(){t=h("p"),n=b("Hello, "),o=b(e),r=b("!"),s=y(),i=h("button"),i.textContent="Close",d(i,"type","button"),d(i,"class","btn btn-outline-primary")},m(l,c){u(l,t,c),_(t,n),_(t,o),_(t,r),u(l,s,c),u(l,i,c),f||(k=w(i,"click",a[2]),f=!0)},p(l,[c]){c&2&&e!==(e=l[1].contentData.name+"")&&D(o,e)},i:m,o:m,d(l){l&&(p(t),p(s),p(i)),f=!1,k()}}}function M(a,t,n){let{widget:e}=t,{state:o}=t;const r=()=>e.api.close();return a.$$set=s=>{"widget"in s&&n(0,e=s.widget),"state"in s&&n(1,o=s.state)},[e,o,r]}class S extends x{constructor(t){super(),C(this,t,M,H,g,{widget:0,state:1})}}function j(a){let t,n,e;return{c(){t=h("button"),t.textContent="Launch demo modal",d(t,"type","button"),d(t,"class","btn btn-primary")},m(o,r){u(o,t,r),n||(e=w(t,"click",a[1]),n=!0)},p:m,i:m,o:m,d(o){o&&p(t),n=!1,e()}}}function v(a){const t=()=>q({slotTitle:"Hi there!",slotDefault:S,contentData:{name:"World"}});return[t,()=>t()]}class P extends x{constructor(t){super(),C(this,t,v,j,g,{})}}export{P as default};
