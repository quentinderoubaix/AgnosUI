import{s as i}from"../chunks/scheduler.ACMTHqcQ.js";import{S as l,i as p,r as m,u,v as c,d,t as f,w as g}from"../chunks/index.1CRi8snO.js";import{P as _}from"../chunks/Playground.WH-r8NTh.js";import{_ as a}from"../chunks/preload-helper.0HuHagjb.js";import{g as P,d as y}from"../chunks/api.8YRJAapR.js";const V={componentName:"accordion",sampleName:"playground",files:{angular:{entryPoint:"playground.component.ts",files:{"playground.component.ts":()=>a(()=>import("../chunks/playground.route.t-GjyZj-.js"),__vite__mapDeps([]),import.meta.url).then(e=>e.default)}},react:{entryPoint:"playground.tsx",files:{"playground.tsx":()=>a(()=>import("../chunks/Playground.route.eF5oVpMq.js"),__vite__mapDeps([]),import.meta.url).then(e=>e.default)}},svelte:{entryPoint:"playground.svelte",files:{"playground.svelte":()=>a(()=>import("../chunks/Playground.route.XeLt1yB9.js"),__vite__mapDeps([]),import.meta.url).then(e=>e.default)}}}};function v(e){let t,n;return t=new _({props:{sample:V,config:P(),doc:y,listPropsValues:e[0]}}),{c(){m(t.$$.fragment)},l(o){u(t.$$.fragment,o)},m(o,r){c(t,o,r),n=!0},p(o,[r]){const s={};r&1&&(s.listPropsValues=o[0]),t.$set(s)},i(o){n||(d(t.$$.fragment,o),n=!0)},o(o){f(t.$$.fragment,o),n=!1},d(o){g(t,o)}}}function $(e,t,n){let{listPropsValues:o={onShown:["noop","log"],onHidden:["noop","log"],itemTransition:["collapse","fade"],onItemShown:["noop","log"],onItemHidden:["noop","log"],onItemVisibleChange:["noop","log"]}}=t;return e.$$set=r=>{"listPropsValues"in r&&n(0,o=r.listPropsValues)},[o]}class A extends l{constructor(t){super(),p(this,t,$,v,i,{listPropsValues:0})}}export{A as component};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}