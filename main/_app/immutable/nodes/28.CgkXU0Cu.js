function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as f,n as c}from"../chunks/scheduler.-4Rzn4Bj.js";import{S as d,i as $,c as l,b as m,m as s,t as u,a as p,d as _}from"../chunks/index.DuhoGsBs.js";import{_ as o}from"../chunks/preload-helper.BQ24v_F8.js";import{S as g}from"../chunks/Sample.C_usodd9.js";import{S as v}from"../chunks/Section.tzzob-uA.js";const E={componentName:"pagination",style:"daisyui",sampleName:"default",files:{angular:{complementaryUrl:"/daisyui",entryPoint:"default.component.ts",files:{"default.component.ts":()=>o(()=>import("../chunks/default.route.BeEnsQ-q.js"),__vite__mapDeps([]),import.meta.url).then(a=>a.default),"pagination.component.ts":()=>o(()=>import("../chunks/pagination.component.xuFl2NtF.js"),__vite__mapDeps([]),import.meta.url).then(a=>a.default),"pagination.component.html":()=>o(()=>import("../chunks/pagination.component.zJuz8YQ-.js"),__vite__mapDeps([]),import.meta.url).then(a=>a.default)}},react:{complementaryUrl:"/daisyui",entryPoint:"default.tsx",files:{"default.tsx":()=>o(()=>import("../chunks/Default.route.YPTLOjYW.js"),__vite__mapDeps([]),import.meta.url).then(a=>a.default),"Pagination.tsx":()=>o(()=>import("../chunks/Pagination.BpUDc4iZ.js"),__vite__mapDeps([]),import.meta.url).then(a=>a.default)}},svelte:{complementaryUrl:"/daisyui",entryPoint:"default.svelte",files:{"default.svelte":()=>o(()=>import("../chunks/Default.route.BSAF1sbE.js"),__vite__mapDeps([]),import.meta.url).then(a=>a.default),"Pagination.svelte":()=>o(()=>import("../chunks/Pagination.iKll_yci.js"),__vite__mapDeps([]),import.meta.url).then(a=>a.default)}}}};function P(a){let e,n;return e=new g({props:{title:"Tailwind example",sample:E,height:395}}),{c(){l(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,r){s(e,t,r),n=!0},p:c,i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){_(e,t)}}}function h(a){let e,n;return e=new v({props:{label:"Tailwind",id:"default",level:2,$$slots:{default:[P]},$$scope:{ctx:a}}}),{c(){l(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,r){s(e,t,r),n=!0},p(t,[r]){const i={};r&1&&(i.$$scope={dirty:r,ctx:t}),e.$set(i)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){_(e,t)}}}class I extends d{constructor(e){super(),$(this,e,null,h,f,{})}}export{I as component};