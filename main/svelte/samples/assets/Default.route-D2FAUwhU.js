import{S as ie,i as te,s as se,Q as T,e as L,k as S,l as B,a as t,b as N,r as k,v as M,n as z,f as F,U as fe,h as C,B as V,M as X,x as w,q as Y,$ as _e,c as ce,m as pe,t as me,d as ge,g as he}from"./AppCommon-Cd2V92GK.js";import{c as ke}from"./pagination-sJZws_Rh-BwCV6B2d.js";import{c as ve}from"./config-BqJFzlNt.js";import"./stores-BJ2FkST_.js";import"./writables-DoU_XYTX-Dp6nIauL.js";const Le=ke;function Z(a,e,l){const i=a.slice();return i[0]=e[l],i[38]=l,i}function y(a){let e,l,i,s,r,f;return{c(){e=L("button"),l=L("span"),l.textContent="«",t(l,"aria-hidden","true"),t(e,"class","join-item btn btn-outline"),t(e,"aria-label",a[4]),e.disabled=a[5],t(e,"aria-disabled",i=a[5]?"true":null),t(e,"tabindex",s=a[5]?-1:void 0)},m(n,u){N(n,e,u),k(e,l),r||(f=w(e,"click",a[31]),r=!0)},p(n,u){u[0]&16&&t(e,"aria-label",n[4]),u[0]&32&&(e.disabled=n[5]),u[0]&32&&i!==(i=n[5]?"true":null)&&t(e,"aria-disabled",i),u[0]&32&&s!==(s=n[5]?-1:void 0)&&t(e,"tabindex",s)},d(n){n&&F(e),r=!1,f()}}}function $(a){let e,l,i,s,r,f;return{c(){e=L("button"),l=L("span"),l.textContent="‹",t(l,"aria-hidden","true"),t(e,"class","join-item btn btn-outline"),e.disabled=a[5],t(e,"aria-label",a[7]),t(e,"tabindex",i=a[5]?-1:void 0),t(e,"aria-disabled",s=a[5]?"true":null)},m(n,u){N(n,e,u),k(e,l),r||(f=w(e,"click",a[32]),r=!0)},p(n,u){u[0]&32&&(e.disabled=n[5]),u[0]&128&&t(e,"aria-label",n[7]),u[0]&32&&i!==(i=n[5]?-1:void 0)&&t(e,"tabindex",i),u[0]&32&&s!==(s=n[5]?"true":null)&&t(e,"aria-disabled",s)},d(n){n&&F(e),r=!1,f()}}}function x(a){let e,l=a[8].activeLabel+"",i;return{c(){e=L("span"),i=B(l),t(e,"class","sr-only")},m(s,r){N(s,e,r),k(e,i)},p(s,r){r[0]&256&&l!==(l=s[8].activeLabel+"")&&M(i,l)},d(s){s&&F(e)}}}function ee(a){let e,l=a[0]+"",i,s,r,f,n,u,j,c=a[8].page===a[0]&&x(a);function P(){return a[33](a[0])}return{c(){e=L("button"),i=B(l),s=S(),c&&c.c(),t(e,"class","join-item btn btn-outline"),t(e,"aria-current",r=a[0]===a[8].page?"page":null),t(e,"tabindex",f=a[0]===-1||a[8].disabled?-1:void 0),e.disabled=n=a[0]===-1||a[8].disabled,Y(e,"btn-active",a[0]===a[8].page)},m(_,b){N(_,e,b),k(e,i),k(e,s),c&&c.m(e,null),u||(j=w(e,"click",function(){_e(a[0]===-1?ne:P)&&(a[0]===-1?ne:P).apply(this,arguments)}),u=!0)},p(_,b){a=_,b[0]&256&&l!==(l=a[0]+"")&&M(i,l),a[8].page===a[0]?c?c.p(a,b):(c=x(a),c.c(),c.m(e,null)):c&&(c.d(1),c=null),b[0]&256&&r!==(r=a[0]===a[8].page?"page":null)&&t(e,"aria-current",r),b[0]&256&&f!==(f=a[0]===-1||a[8].disabled?-1:void 0)&&t(e,"tabindex",f),b[0]&256&&n!==(n=a[0]===-1||a[8].disabled)&&(e.disabled=n),b[0]&256&&Y(e,"btn-active",a[0]===a[8].page)},d(_){_&&F(e),c&&c.d(),u=!1,j()}}}function ae(a){let e,l,i,s,r,f;return{c(){e=L("button"),l=L("span"),l.textContent="›",t(l,"aria-hidden","true"),t(e,"class","join-item btn btn-outline"),e.disabled=a[9],t(e,"aria-label",a[10]),t(e,"tabindex",i=a[9]?-1:void 0),t(e,"aria-disabled",s=a[9]?"true":null)},m(n,u){N(n,e,u),k(e,l),r||(f=w(e,"click",a[34]),r=!0)},p(n,u){u[0]&512&&(e.disabled=n[9]),u[0]&1024&&t(e,"aria-label",n[10]),u[0]&512&&i!==(i=n[9]?-1:void 0)&&t(e,"tabindex",i),u[0]&512&&s!==(s=n[9]?"true":null)&&t(e,"aria-disabled",s)},d(n){n&&F(e),r=!1,f()}}}function le(a){let e,l,i,s,r,f;return{c(){e=L("button"),l=L("span"),l.textContent="»",t(l,"aria-hidden","true"),t(e,"class","join-item btn btn-outline"),t(e,"aria-label",a[11]),e.disabled=a[9],t(e,"tabindex",i=a[9]?-1:void 0),t(e,"aria-disabled",s=a[9]?"true":null)},m(n,u){N(n,e,u),k(e,l),r||(f=w(e,"click",a[35]),r=!0)},p(n,u){u[0]&2048&&t(e,"aria-label",n[11]),u[0]&512&&(e.disabled=n[9]),u[0]&512&&i!==(i=n[9]?-1:void 0)&&t(e,"tabindex",i),u[0]&512&&s!==(s=n[9]?"true":null)&&t(e,"aria-disabled",s)},d(n){n&&F(e),r=!1,f()}}}function Ce(a){let e,l,i,s,r,f,n,u,j,c=`Current page is ${a[12]}`,P,_=a[3]&&y(a),b=a[6]&&$(a),D=T(a[8].pages),g=[];for(let o=0;o<D.length;o+=1)g[o]=ee(Z(a,D,o));let p=a[6]&&ae(a),h=a[3]&&le(a);return{c(){e=L("nav"),l=L("div"),_&&_.c(),i=S(),b&&b.c(),s=S();for(let o=0;o<g.length;o+=1)g[o].c();r=S(),p&&p.c(),f=S(),h&&h.c(),u=S(),j=L("div"),P=B(c),t(l,"class",n="join "+a[2]),t(j,"aria-live","polite"),t(j,"class","sr-only"),t(e,"aria-label",a[1])},m(o,v){N(o,e,v),k(e,l),_&&_.m(l,null),k(l,i),b&&b.m(l,null),k(l,s);for(let m=0;m<g.length;m+=1)g[m]&&g[m].m(l,null);k(l,r),p&&p.m(l,null),k(l,f),h&&h.m(l,null),k(e,u),k(e,j),k(j,P)},p(o,v){if(o[3]?_?_.p(o,v):(_=y(o),_.c(),_.m(l,i)):_&&(_.d(1),_=null),o[6]?b?b.p(o,v):(b=$(o),b.c(),b.m(l,s)):b&&(b.d(1),b=null),v[0]&8448){D=T(o[8].pages);let m;for(m=0;m<D.length;m+=1){const q=Z(o,D,m);g[m]?g[m].p(q,v):(g[m]=ee(q),g[m].c(),g[m].m(l,r))}for(;m<g.length;m+=1)g[m].d(1);g.length=D.length}o[6]?p?p.p(o,v):(p=ae(o),p.c(),p.m(l,f)):p&&(p.d(1),p=null),o[3]?h?h.p(o,v):(h=le(o),h.c(),h.m(l,null)):h&&(h.d(1),h=null),v[0]&4&&n!==(n="join "+o[2])&&t(l,"class",n),v[0]&4096&&c!==(c=`Current page is ${o[12]}`)&&M(P,c),v[0]&2&&t(e,"aria-label",o[1])},i:z,o:z,d(o){o&&F(e),_&&_.d(),b&&b.d(),fe(g,o),p&&p.d(),h&&h.d()}}}const ne=()=>{};function je(a,e,l){let i,s,r,f,n,u,j,c,P,_,b,D,{page:g=void 0}=e;const p=ve({factory:Le,widgetName:"pagination",$$props:e,events:{onPageChange:d=>{l(0,g=d)}}}),h=p.api,{stores:{page$:o,boundaryLinks$:v,directionLinks$:m,nextDisabled$:q,previousDisabled$:Q,ariaLabel$:U,ariaFirstLabel$:W,ariaPreviousLabel$:A,ariaNextLabel$:E,ariaLastLabel$:G,className$:H},state$:I,actions:{first:J,previous:K,next:O,last:R}}=p;C(a,o,d=>l(12,D=d)),C(a,v,d=>l(3,r=d)),C(a,m,d=>l(6,u=d)),C(a,q,d=>l(9,P=d)),C(a,Q,d=>l(5,n=d)),C(a,U,d=>l(1,i=d)),C(a,W,d=>l(4,f=d)),C(a,A,d=>l(7,j=d)),C(a,E,d=>l(10,_=d)),C(a,G,d=>l(11,b=d)),C(a,H,d=>l(2,s=d)),C(a,I,d=>l(8,c=d));const ue=()=>J(),oe=()=>K(),re=d=>p.actions.select(d),de=()=>O(),be=()=>R();return a.$$set=d=>{l(36,e=V(V({},e),X(d))),"page"in d&&l(0,g=d.page)},a.$$.update=()=>{p.patchChangedProps(e)},e=X(e),[g,i,s,r,f,n,u,j,c,P,_,b,D,p,o,v,m,q,Q,U,W,A,E,G,H,I,J,K,O,R,h,ue,oe,re,de,be]}class Pe extends ie{constructor(e){super(),te(this,e,je,Ce,se,{page:0,api:30},null,[-1,-1])}get api(){return this.$$.ctx[30]}}function De(a){let e,l;return e=new Pe({props:{collectionSize:40,boundaryLinks:!0}}),{c(){ce(e.$$.fragment)},m(i,s){pe(e,i,s),l=!0},p:z,i(i){l||(me(e.$$.fragment,i),l=!0)},o(i){ge(e.$$.fragment,i),l=!1},d(i){he(e,i)}}}class ze extends ie{constructor(e){super(),te(this,e,null,De,se,{})}}export{ze as default};
