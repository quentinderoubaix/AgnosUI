import{s as y,a as T,e as v,t as P,r as G,f as _,g as j,c as k,b as C,d as B,m as d,y as g,i as w,h as b,j as U,n as S,k as H,q as V,z as J}from"./scheduler.glrc_Tno.js";import{g as q,e as I}from"./app.eBEO1FF0.js";import{S as K,i as M}from"./index.jFp1C5mp.js";import{s as O,a as Q,p as W}from"./stores.Nu6Q01Lj.js";import{p as X}from"./stores.1rzxPYsa.js";function R(s,t,a){const e=s.slice();e[1]=t[a].title,e[7]=t[a].key,e[8]=t[a].path;const l=e[4]===e[7];return e[9]=l,e}function z(s){let t,a="In progress";return{c(){t=v("span"),t.textContent=a,this.h()},l(e){t=k(e,"SPAN",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-xz5ijk"&&(t.textContent=a),this.h()},h(){d(t,"class","col-auto badge text-bg-warning")},m(e,l){w(e,t,l)},d(e){e&&_(t)}}}function D(s){let t,a="Beta";return{c(){t=v("span"),t.textContent=a,this.h()},l(e){t=k(e,"SPAN",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-cjtgga"&&(t.textContent=a),this.h()},h(){d(t,"class","col-auto badge text-bg-primary")},m(e,l){w(e,t,l)},d(e){e&&_(t)}}}function F(s){let t,a=I(s[2]),e=[];for(let l=0;l<a.length;l+=1)e[l]=L(R(s,a,l));return{c(){t=v("ul");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=k(l,"UL",{class:!0,role:!0});var r=C(t);for(let n=0;n<e.length;n+=1)e[n].l(r);r.forEach(_),this.h()},h(){d(t,"class","nav-tabs px-4 px-lg-5 d-flex flex-nowrap content-tabset justify-content-start nav"),d(t,"role","tablist")},m(l,r){w(l,t,r);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(t,null)},p(l,r){if(r&60){a=I(l[2]);let n;for(n=0;n<a.length;n+=1){const m=R(l,a,n);e[n]?e[n].p(m,r):(e[n]=L(m),e[n].c(),e[n].m(t,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=a.length}},d(l){l&&_(t),J(e,l)}}}function L(s){let t,a,e=s[1]+"",l,r,n,m;return{c(){t=v("li"),a=v("a"),l=P(e),m=T(),this.h()},l(h){t=k(h,"LI",{class:!0,role:!0});var f=C(t);a=k(f,"A",{href:!0,role:!0,class:!0,"aria-selected":!0});var i=C(a);l=B(i,e),i.forEach(_),m=j(f),f.forEach(_),this.h()},h(){d(a,"href",r=`${s[5]}docs/${s[3]}${s[8]}`),d(a,"role","tab"),d(a,"class","nav-link link-body-emphasis"),d(a,"aria-selected",n=s[9]),g(a,"active",s[9]),d(t,"class","nav-item"),d(t,"role","presentation")},m(h,f){w(h,t,f),b(t,a),b(a,l),b(t,m)},p(h,f){f&4&&e!==(e=h[1]+"")&&U(l,e),f&44&&r!==(r=`${h[5]}docs/${h[3]}${h[8]}`)&&d(a,"href",r),f&20&&n!==(n=h[9])&&d(a,"aria-selected",n),f&20&&g(a,"active",h[9])},d(h){h&&_(t)}}}function Y(s){let t,a,e,l,r,n,m,h,f;document.title=t=q(s[1],s[3]);let i=s[0]==="inprogress"&&z(),u=s[0]==="beta"&&D(),c=s[2].length&&F(s);return{c(){a=T(),e=v("header"),l=v("div"),r=v("h1"),n=P(s[1]),m=T(),i&&i.c(),h=T(),u&&u.c(),f=T(),c&&c.c(),this.h()},l(o){G("svelte-1fpim28",document.head).forEach(_),a=j(o),e=k(o,"HEADER",{class:!0});var A=C(e);l=k(A,"DIV",{class:!0});var E=C(l);r=k(E,"H1",{class:!0});var N=C(r);n=B(N,s[1]),N.forEach(_),m=j(E),i&&i.l(E),h=j(E),u&&u.l(E),E.forEach(_),f=j(A),c&&c.l(A),A.forEach(_),this.h()},h(){d(r,"class","text-primary col-auto me-2 me-md-none mb-0 p-0 p-md-3 text-center text-md-start"),d(l,"class","row align-items-center w-100"),g(l,"pb-3",s[2].length),d(e,"class","au-header bg-light pt-3 px-4 px-lg-5 d-flex mb-4 align-items-center title svelte-q1c5tl"),g(e,"rounded",!s[2].length),g(e,"rounded-top",s[2].length),g(e,"pb-5",s[2].length),g(e,"pb-3",!s[2].length)},m(o,p){w(o,a,p),w(o,e,p),b(e,l),b(l,r),b(r,n),b(l,m),i&&i.m(l,null),b(l,h),u&&u.m(l,null),b(e,f),c&&c.m(e,null)},p(o,[p]){p&10&&t!==(t=q(o[1],o[3]))&&(document.title=t),p&2&&U(n,o[1]),o[0]==="inprogress"?i||(i=z(),i.c(),i.m(l,h)):i&&(i.d(1),i=null),o[0]==="beta"?u||(u=D(),u.c(),u.m(l,null)):u&&(u.d(1),u=null),p&4&&g(l,"pb-3",o[2].length),o[2].length?c?c.p(o,p):(c=F(o),c.c(),c.m(e,null)):c&&(c.d(1),c=null),p&4&&g(e,"rounded",!o[2].length),p&4&&g(e,"rounded-top",o[2].length),p&4&&g(e,"pb-5",o[2].length),p&4&&g(e,"pb-3",!o[2].length)},i:S,o:S,d(o){o&&(_(a),_(e)),i&&i.d(),u&&u.d(),c&&c.d()}}}function Z(s,t,a){let e,l,r,n,m;H(s,X,i=>a(6,l=i)),H(s,O,i=>a(3,r=i)),H(s,Q,i=>a(4,n=i)),H(s,W,i=>a(5,m=i));let{title:h}=t,{status:f=""}=t;return s.$$set=i=>{"title"in i&&a(1,h=i.title),"status"in i&&a(0,f=i.status)},s.$$.update=()=>{s.$$.dirty&64&&a(2,e=l.data.tabs??[])},[f,h,e,r,n,m,l]}class ae extends K{constructor(t){super(),M(this,t,Z,Y,y,{title:1,status:0})}}export{ae as H};
