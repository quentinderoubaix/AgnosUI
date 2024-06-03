import{s as j,k as O,e as h,t as y,a as G,c as b,b as T,f as I,d as S,g as R,m as _,i as P,h as o,j as z,w as J}from"./scheduler.DDKLfDno.js";import{S as K,i as Q,c as D,b as F,m as L,t as U,a as V,e as W}from"./index.DMnRV_Lo.js";import{A as X}from"./Alert.RCcIfGQa.js";import{p as Y}from"./stores.CwSEanm1.js";import{S as Z}from"./Svg.DVorqz_I.js";const x=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg>`,ee=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>`;function te(t){let e,r,c,s,l,i,v,w,$,p,m,A,u,E,M,f,N,C,B,d;return s=new Z({props:{svg:t[5][t[4]]}}),{c(){e=h("div"),r=h("div"),c=h("span"),D(s.$$.fragment),l=y(`
			Warning: component is `),i=h("strong"),v=y(t[3]),w=h("br"),$=G(),p=h("hr"),m=G(),A=y(t[2]),u=G(),E=h("br"),M=y(`
		If you want to contribute, please visit
		`),f=h("a"),N=y("the issues on GitHub"),C=y("."),this.h()},l(a){e=b(a,"DIV",{class:!0});var n=T(e);r=b(n,"DIV",{class:!0});var g=T(r);c=b(g,"SPAN",{class:!0});var k=T(c);F(s.$$.fragment,k),k.forEach(I),l=S(g,`
			Warning: component is `),i=b(g,"STRONG",{class:!0});var H=T(i);v=S(H,t[3]),H.forEach(I),w=b(g,"BR",{}),g.forEach(I),$=R(n),p=b(n,"HR",{}),m=R(n),A=S(n,t[2]),u=R(n),E=b(n,"BR",{}),M=S(n,`
		If you want to contribute, please visit
		`),f=b(n,"A",{href:!0,target:!0});var q=T(f);N=S(q,"the issues on GitHub"),q.forEach(I),C=S(n,"."),n.forEach(I),this.h()},h(){_(c,"class","d-flex me-2"),_(i,"class","ms-1"),_(r,"class","d-flex align-items-center"),_(f,"href",t[1]),_(f,"target","_blank"),_(e,"class",B="alert-container p-3 border border-"+t[4]+" rounded-end")},m(a,n){P(a,e,n),o(e,r),o(r,c),L(s,c,null),o(r,l),o(r,i),o(i,v),o(r,w),o(e,$),o(e,p),o(e,m),o(e,A),o(e,u),o(e,E),o(e,M),o(e,f),o(f,N),o(e,C),d=!0},p(a,n){const g={};n&16&&(g.svg=a[5][a[4]]),s.$set(g),(!d||n&8)&&z(v,a[3]),(!d||n&4)&&z(A,a[2]),(!d||n&2)&&_(f,"href",a[1]),(!d||n&16&&B!==(B="alert-container p-3 border border-"+a[4]+" rounded-end"))&&_(e,"class",B)},i(a){d||(U(s.$$.fragment,a),d=!0)},o(a){V(s.$$.fragment,a),d=!1},d(a){a&&I(e),W(s)}}}function se(t){let e,r,c={type:t[4],className:"p-0 border-0 border-start border-5 border-"+t[4],$$slots:{default:[te]},$$scope:{ctx:t}};return e=new X({props:c}),t[9](e),{c(){D(e.$$.fragment)},l(s){F(e.$$.fragment,s)},m(s,l){L(e,s,l),r=!0},p(s,[l]){const i={};l&16&&(i.type=s[4]),l&16&&(i.className="p-0 border-0 border-start border-5 border-"+s[4]),l&1054&&(i.$$scope={dirty:l,ctx:s}),e.$set(i)},i(s){r||(U(e.$$.fragment,s),r=!0)},o(s){V(e.$$.fragment,s),r=!1},d(s){t[9](null),W(e,s)}}}const re=/\/(components|services)\/([^/]+)/;function ne(t,e,r){let c,s,l,i,v,w;O(t,Y,u=>r(8,w=u));const $={info:x,warning:ee};let{status:p}=e,m;function A(u){J[u?"unshift":"push"](()=>{m=u,r(0,m)})}return t.$$set=u=>{"status"in u&&r(6,p=u.status)},t.$$.update=()=>{t.$$.dirty&64&&r(4,c=p==="inprogress"?"warning":"info"),t.$$.dirty&64&&r(3,s=p==="inprogress"?"In progress":"Beta"),t.$$.dirty&64&&r(2,l=p==="inprogress"?"This component is still under active development. More features will be added in the near future.":"This component has all the basic functionalities implemented. More polishing features might be added in the near future."),t.$$.dirty&256&&r(7,i=w.url.pathname.match(re)?.[2]),t.$$.dirty&128&&r(1,v=`https://github.com/AmadeusITGroup/AgnosUI/issues?q=is%3Aopen+is%3Aissue+label%3A%22widget%3A+${i}%22`),t.$$.dirty&129&&m?.api.open()},[m,v,l,s,c,$,p,i,w,A]}class ue extends K{constructor(e){super(),Q(this,e,ne,se,j,{status:6})}}export{ue as S,ee as a,x as b};