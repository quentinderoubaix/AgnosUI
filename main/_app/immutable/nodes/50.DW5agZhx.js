import{s as g,e as w,c as C,b as x,f as u,m as E,i as v,a as P,g as D,n as h}from"../chunks/scheduler.DDKLfDno.js";import{S as y,i as S,c as l,b as i,m as c,t as m,a as f,e as $}from"../chunks/index.DMnRV_Lo.js";import{S as d}from"../chunks/Section.CQ7u55r_.js";import I from"../chunks/Code.4LavDfay.js";import{_ as b}from"../chunks/preload-helper.Dch09mLN.js";function k(a){let e,r,t;return r=new I({props:{code:a[0],language:"scss"}}),{c(){e=w("div"),l(r.$$.fragment),this.h()},l(n){e=C(n,"DIV",{class:!0});var s=x(e);i(r.$$.fragment,s),s.forEach(u),this.h()},h(){E(e,"class","mb-4 py-2 px-0 px-sm-3")},m(n,s){v(n,e,s),c(r,e,null),t=!0},p(n,[s]){const o={};s&1&&(o.code=n[0]),r.$set(o)},i(n){t||(m(r.$$.fragment,n),t=!0)},o(n){f(r.$$.fragment,n),t=!1},d(n){n&&u(e),$(r)}}}function A(a,e,r){let{style:t}=e,n="";async function s(o){r(0,n=await o.css())}return a.$$set=o=>{"style"in o&&r(1,t=o.style)},a.$$.update=()=>{a.$$.dirty&2&&s(t)},[n,t]}class V extends y{constructor(e){super(),S(this,e,A,k,g,{style:1})}}const L={fileName:"_slider",docMarker:"slider-css-vars",css:()=>b(()=>import("../chunks/_slider.DoMrN0a5.js"),[],import.meta.url).then(a=>a.default)},M={fileName:"_variables",docMarker:"slider-vars",css:()=>b(()=>import("../chunks/_variables.BOmT3c9h.js"),[],import.meta.url).then(a=>a.default)};function N(a){let e,r;return e=new V({props:{style:L}}),{c(){l(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,n){c(e,t,n),r=!0},p:h,i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){$(e,t)}}}function O(a){let e,r;return e=new V({props:{style:M}}),{c(){l(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,n){c(e,t,n),r=!0},p:h,i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){$(e,t)}}}function R(a){let e,r,t,n;return e=new d({props:{label:"CSS Variables",level:2,$$slots:{default:[N]},$$scope:{ctx:a}}}),t=new d({props:{label:"SCSS Variables",level:2,$$slots:{default:[O]},$$scope:{ctx:a}}}),{c(){l(e.$$.fragment),r=P(),l(t.$$.fragment)},l(s){i(e.$$.fragment,s),r=D(s),i(t.$$.fragment,s)},m(s,o){c(e,s,o),v(s,r,o),c(t,s,o),n=!0},p(s,[o]){const p={};o&1&&(p.$$scope={dirty:o,ctx:s}),e.$set(p);const _={};o&1&&(_.$$scope={dirty:o,ctx:s}),t.$set(_)},i(s){n||(m(e.$$.fragment,s),m(t.$$.fragment,s),n=!0)},o(s){f(e.$$.fragment,s),f(t.$$.fragment,s),n=!1},d(s){s&&u(r),$(e,s),$(t,s)}}}class F extends y{constructor(e){super(),S(this,e,null,R,g,{})}}export{F as component};
