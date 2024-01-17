import{S as L,i as H,s as P,Q as T,j as h,c as U,f as k,n as p,g,m as A,p as _,t as E,a as M,h as b,d as N,U as Q,k as v,q as y,u as w}from"./index-audc9xPN.js";import{S as z}from"./Select-gbAmxUp7.js";import"./config-dpeud9jt.js";import"./func-tK0QDe5R.js";import"./stores-93x2sLOD.js";import"./floatingUI-IvQI_d24.js";import"./directive-jQwxL3gW.js";import"./promise-VWLek1Fy.js";import"./focustrack-_Q6G7UW1.js";import"./Slot-2RgHhmjF.js";function B(l,e){let n;return(...s)=>{n&&clearTimeout(n),n=setTimeout(()=>{l(...s)},e)}}const D=l=>{let e;return(...n)=>(e==null||e.abort(),e=new AbortController,l(e.signal,...n))};function F(l,e,n){const s=l.slice();return s[7]=e[n],s}function q(l){const e=l[10].item;l[7]=e}function G(l){let e,n=l[10].item.title+"",s,c,u,a,f,o;function r(){return l[5](l[11],l[10])}return{c(){e=h("a"),s=v(n),u=k(),a=h("button"),p(e,"href",c=`${C}${l[10].item.pageid}`),p(e,"target","_blank"),p(e,"rel","noreferrer"),p(a,"type","button"),p(a,"class","btn-close ms-1 wiki-btn-close"),p(a,"aria-label","Close")},m(t,i){g(t,e,i),_(e,s),g(t,u,i),g(t,a,i),f||(o=y(a,"click",r),f=!0)},p(t,i){l=t,i&1024&&n!==(n=l[10].item.title+"")&&w(s,n),i&1024&&c!==(c=`${C}${l[10].item.pageid}`)&&p(e,"href",c)},d(t){t&&(b(e),b(u),b(a)),f=!1,o()}}}function J(l){q(l);let e,n,s=l[7].title+"",c,u,a,f=l[7].snippet+"",o,r;return{c(){e=h("label"),n=h("div"),c=v(s),u=k(),a=h("div"),o=v(f),p(n,"class","fw-bold"),p(a,"class","text-wrap wiki-desc"),p(e,"for",r=""+l[10].id),p(e,"slot","item")},m(t,i){g(t,e,i),_(e,n),_(n,c),_(e,u),_(e,a),_(a,o)},p(t,i){q(t),i&1024&&s!==(s=t[7].title+"")&&w(c,s),i&1024&&f!==(f=t[7].snippet+"")&&w(o,f),i&1024&&r!==(r=""+t[10].id)&&p(e,"for",r)},d(t){t&&b(e)}}}function j(l){let e;return{c(){e=v("none")},m(n,s){g(n,e,s)},d(n){n&&b(e)}}}function I(l){let e,n=l[7].title+"",s,c;return{c(){e=h("a"),s=v(n),p(e,"href",c=`${C}${l[7].pageid}`),p(e,"class","pe-2")},m(u,a){g(u,e,a),_(e,s)},p(u,a){a&2&&n!==(n=u[7].title+"")&&w(s,n),a&2&&c!==(c=`${C}${u[7].pageid}`)&&p(e,"href",c)},d(u){u&&b(e)}}}function K(l){let e,n,s,c,u,a;n=new z({props:{items:l[0],itemIdFn:l[2],onFilterTextChange:l[3],onSelectedChange:l[4],badgeClassName:"badge text-bg-light d-flex align-items-center",$$slots:{item:[J,({itemContext:t})=>({10:t}),({itemContext:t})=>t?1024:0],badgeLabel:[G,({itemContext:t,widget:i})=>({10:t,11:i}),({itemContext:t,widget:i})=>(t?1024:0)|(i?2048:0)]},$$scope:{ctx:l}}});let f=T(l[1]),o=[];for(let t=0;t<f.length;t+=1)o[t]=I(F(l,f,t));let r=null;return f.length||(r=j()),{c(){e=h("div"),U(n.$$.fragment),s=k(),c=h("span"),c.textContent="Selection:",u=k();for(let t=0;t<o.length;t+=1)o[t].c();r&&r.c(),p(c,"class","fw-bold"),p(e,"class","custom-select my-auto mb-3")},m(t,i){g(t,e,i),A(n,e,null),_(e,s),_(e,c),_(e,u);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(e,null);r&&r.m(e,null),a=!0},p(t,[i]){const d={};if(i&1&&(d.items=t[0]),i&7168&&(d.$$scope={dirty:i,ctx:t}),n.$set(d),i&2){f=T(t[1]);let m;for(m=0;m<f.length;m+=1){const $=F(t,f,m);o[m]?o[m].p($,i):(o[m]=I($),o[m].c(),o[m].m(e,null))}for(;m<o.length;m+=1)o[m].d(1);o.length=f.length,f.length?r&&(r.d(1),r=null):r||(r=j(),r.c(),r.m(e,null))}},i(t){a||(E(n.$$.fragment,t),a=!0)},o(t){M(n.$$.fragment,t),a=!1},d(t){t&&b(e),N(n),Q(o,t),r&&r.d()}}}const C="https://en.wikipedia.org/?curid=";function O(l){const e=document.createElement("div");return e.innerHTML=l,e.innerText}function R(l,e,n){let s=[],c=[];const u=t=>"page-"+t.pageid,a=B(D(async(t,i)=>{var $;const m=await(await fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch="+i,{signal:t})).json();n(0,s=(($=m.query)==null?void 0:$.search.map(S=>({...S,snippet:O(S.snippet)})))??[])}),200),f=new Intl.Collator("en").compare;function o(t){n(1,c=(t.detail||[]).sort((i,d)=>f(i.title,d.title)))}return[s,c,u,a,o,(t,i)=>t.api.unselect(i.item)]}class ie extends L{constructor(e){super(),H(this,e,R,K,P,{})}}export{ie as default};