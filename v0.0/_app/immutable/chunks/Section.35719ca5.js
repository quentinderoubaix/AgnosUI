import{s as y,c as M,u as j,g as q,d as B,h as k,w as D}from"./scheduler.f4aa3cfc.js";import{S as I,i as O,g as p,s as E,h as w,j as b,c as L,f as u,k as h,a as A,y as c,d as z,t as C,m as T,r as U,n as F,u as G,D as N,v as H,o as J,w as K}from"./index.320fb0b4.js";import{g as P}from"./tooltip.e82d4e6f.js";import{S as Q}from"./Svg.2a8a482d.js";const R=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
</svg>`;function g(r){let a,o,f,n,s,m,t,e,l;s=new Q({props:{className:"icon-24 align-middle",svg:R}});let v=[{id:r[2]},{class:e=k(r[3])+" svelte-1fw63p"}],d={};for(let i=0;i<v.length;i+=1)d=D(d,v[i]);return{c(){a=p("h"+r[0]),o=T(r[1]),f=E(),n=p("a"),U(s.$$.fragment),this.h()},l(i){a=w(i,("h"+r[0]||"null").toUpperCase(),{id:!0,class:!0});var _=b(a);o=F(_,r[1]),f=L(_),n=w(_,"A",{class:!0,href:!0,"aria-label":!0});var S=b(n);G(s.$$.fragment,S),S.forEach(u),_.forEach(u),this.h()},h(){h(n,"class","anchor-link svelte-1fw63p"),h(n,"href",m="#"+r[2]),h(n,"aria-label",t="link to "+r[1]),N("h"+r[0])(a,d)},m(i,_){A(i,a,_),c(a,o),c(a,f),c(a,n),H(s,n,null),l=!0},p(i,_){(!l||_&2)&&J(o,i[1]),(!l||_&4&&m!==(m="#"+i[2]))&&h(n,"href",m),(!l||_&2&&t!==(t="link to "+i[1]))&&h(n,"aria-label",t),N("h"+i[0])(a,d=P(v,[(!l||_&4)&&{id:i[2]},(!l||_&8&&e!==(e=k(i[3])+" svelte-1fw63p"))&&{class:e}]))},i(i){l||(z(s.$$.fragment,i),l=!0)},o(i){C(s.$$.fragment,i),l=!1},d(i){i&&u(a),K(s)}}}function V(r){let a,o="h"+r[0],f,n,s="h"+r[0]&&g(r);const m=r[5].default,t=M(m,r,r[4],null);return{c(){a=p("section"),s&&s.c(),f=E(),t&&t.c(),this.h()},l(e){a=w(e,"SECTION",{class:!0});var l=b(a);s&&s.l(l),f=L(l),t&&t.l(l),l.forEach(u),this.h()},h(){h(a,"class","svelte-1fw63p")},m(e,l){A(e,a,l),s&&s.m(a,null),c(a,f),t&&t.m(a,null),n=!0},p(e,[l]){"h"+e[0]?o?y(o,"h"+e[0])?(s.d(1),s=g(e),o="h"+e[0],s.c(),s.m(a,f)):s.p(e,l):(s=g(e),o="h"+e[0],s.c(),s.m(a,f)):o&&(s.d(1),s=null,o="h"+e[0]),t&&t.p&&(!n||l&16)&&j(t,m,e,e[4],n?B(m,e[4],l,null):q(e[4]),null)},i(e){n||(z(t,e),n=!0)},o(e){C(s,e),C(t,e),n=!1},d(e){e&&u(a),s&&s.d(e),t&&t.d(e)}}}function W(r,a,o){let{$$slots:f={},$$scope:n}=a,{level:s}=a,{label:m}=a,{id:t}=a,{headerClassName:e=void 0}=a;return r.$$set=l=>{"level"in l&&o(0,s=l.level),"label"in l&&o(1,m=l.label),"id"in l&&o(2,t=l.id),"headerClassName"in l&&o(3,e=l.headerClassName),"$$scope"in l&&o(4,n=l.$$scope)},[s,m,t,e,n,f]}class x extends I{constructor(a){super(),O(this,a,W,V,y,{level:0,label:1,id:2,headerClassName:3})}}export{x as S};
