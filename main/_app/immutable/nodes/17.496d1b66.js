import{s as l}from"../chunks/scheduler.3bfaf327.js";import{S as i,i as p,r as m,u,v as f,d as _,t as d,w as g}from"../chunks/index.b4698ddd.js";import{P as c}from"../chunks/Playground.37585a46.js";import{g as P}from"../chunks/alert.b1ae1407.js";import{_ as a}from"../chunks/preload-helper.a4192956.js";import{d as y}from"../chunks/api.7796d10b.js";const V={componentName:"alert",sampleName:"playground",files:{angular:{entryPoint:"playground.component.ts",files:{"playground.component.ts":()=>a(()=>import("../chunks/playground.route.9849177e.js"),[],import.meta.url).then(e=>e.default)}},react:{entryPoint:"playground.tsx",files:{"playground.tsx":()=>a(()=>import("../chunks/Playground.route.13869e0f.js"),[],import.meta.url).then(e=>e.default)}},svelte:{entryPoint:"playground.svelte",files:{"playground.svelte":()=>a(()=>import("../chunks/Playground.route.2cdc4cab.js"),[],import.meta.url).then(e=>e.default)}}}};function v(e){let o,n;return o=new c({props:{sample:V,config:P(),doc:y,listPropsValues:e[0]}}),{c(){m(o.$$.fragment)},l(t){u(o.$$.fragment,t)},m(t,r){f(o,t,r),n=!0},p(t,[r]){const s={};r&1&&(s.listPropsValues=t[0]),o.$set(s)},i(t){n||(_(o.$$.fragment,t),n=!0)},o(t){d(o.$$.fragment,t),n=!1},d(t){g(o,t)}}}function $(e,o,n){let{listPropsValues:t={onVisibleChange:["noop","log"],onShown:["noop","log"],transition:["fade"],onHidden:["noop","log"]}}=o;return e.$$set=r=>{"listPropsValues"in r&&n(0,t=r.listPropsValues)},[t]}class C extends i{constructor(o){super(),p(this,o,$,v,l,{listPropsValues:0})}}export{C as component};