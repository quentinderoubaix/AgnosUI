function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as f,n as c}from"../chunks/scheduler.-4Rzn4Bj.js";import{S as d,i as $,c as m,b as l,m as s,t as u,a as _,e as p}from"../chunks/index.BbxhXv5b.js";import{_ as o}from"../chunks/preload-helper.Dch09mLN.js";import{S as g}from"../chunks/Sample.CWy0a3om.js";import{S as v}from"../chunks/Section.lRGgQk04.js";const E={componentName:"rating",style:"daisyui",sampleName:"default",files:{angular:{complementaryUrl:"/daisyui",entryPoint:"default.component.ts",files:{"default.component.ts":()=>o(()=>import("../chunks/default.route.DqMbFYZK.js"),__vite__mapDeps([]),import.meta.url).then(r=>r.default),"rating.component.ts":()=>o(()=>import("../chunks/rating.component.wSMSzPKb.js"),__vite__mapDeps([]),import.meta.url).then(r=>r.default),"rating.component.html":()=>o(()=>import("../chunks/rating.component.lo_qPyDU.js"),__vite__mapDeps([]),import.meta.url).then(r=>r.default)}},react:{complementaryUrl:"/daisyui",entryPoint:"default.tsx",files:{"default.tsx":()=>o(()=>import("../chunks/Default.route.CY6ty1z-.js"),__vite__mapDeps([]),import.meta.url).then(r=>r.default),"Rating.tsx":()=>o(()=>import("../chunks/Rating.Dm9f2uQ1.js"),__vite__mapDeps([]),import.meta.url).then(r=>r.default)}},svelte:{complementaryUrl:"/daisyui",entryPoint:"default.svelte",files:{"default.svelte":()=>o(()=>import("../chunks/Default.route.DJuZugAj.js"),__vite__mapDeps([]),import.meta.url).then(r=>r.default),"Rating.svelte":()=>o(()=>import("../chunks/Rating.RPpC7tZI.js"),__vite__mapDeps([]),import.meta.url).then(r=>r.default)}}}};function y(r){let e,a;return e=new g({props:{title:"DaisyUI example",sample:E,height:395}}),{c(){m(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,n){s(e,t,n),a=!0},p:c,i(t){a||(u(e.$$.fragment,t),a=!0)},o(t){_(e.$$.fragment,t),a=!1},d(t){p(e,t)}}}function h(r){let e,a;return e=new v({props:{label:"DaisyUI",id:"default",level:2,$$slots:{default:[y]},$$scope:{ctx:r}}}),{c(){m(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,n){s(e,t,n),a=!0},p(t,[n]){const i={};n&1&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){a||(u(e.$$.fragment,t),a=!0)},o(t){_(e.$$.fragment,t),a=!1},d(t){p(e,t)}}}class A extends d{constructor(e){super(),$(this,e,null,h,f,{})}}export{A as component};