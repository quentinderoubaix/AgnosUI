function y(){}function k(t,n){for(const e in n)t[e]=n[e];return t}function F(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function w(t){return t()}function M(){return Object.create(null)}function j(t){t.forEach(w)}function E(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function A(t){return Object.keys(t).length===0}function C(t,...n){if(t==null){for(const o of n)o(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function B(t,n,e){t.$$.on_destroy.push(C(n,e))}function G(t,n,e,o){if(t){const r=m(t,n,e,o);return t[0](r)}}function m(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function P(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],_=Math.max(n.dirty.length,r.length);for(let u=0;u<_;u+=1)a[u]=n.dirty[u]|r[u];return a}return n.dirty|r}return n.dirty}function U(t,n,e,o,r,a){if(r){const _=m(n,e,o,a);t.p(_,r)}}function v(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function H(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function I(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}function J(t){return t??""}function K(t){return t&&E(t.destroy)?t.destroy:y}let l;function d(t){l=t}function f(){if(!l)throw new Error("Function called outside component initialization");return l}function L(t){f().$$.on_mount.push(t)}function N(t){f().$$.after_update.push(t)}function Q(t){f().$$.on_destroy.push(t)}function R(t,n){return f().$$.context.set(t,n),n}function T(t){return f().$$.context.get(t)}const i=[],g=[];let s=[];const b=[],x=Promise.resolve();let p=!1;function O(){p||(p=!0,x.then(z))}function V(){return O(),x}function q(t){s.push(t)}const h=new Set;let c=0;function z(){if(c!==0)return;const t=l;do{try{for(;c<i.length;){const n=i[c];c++,d(n),D(n.$$)}}catch(n){throw i.length=0,c=0,n}for(d(null),i.length=0,c=0;g.length;)g.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];h.has(e)||(h.add(e),e())}s.length=0}while(i.length);for(;b.length;)b.pop()();p=!1,h.clear(),d(t)}function D(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}function W(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{A,q as B,W as C,l as D,w as E,i as F,O as G,N as a,g as b,G as c,P as d,B as e,J as f,v as g,R as h,E as i,T as j,F as k,f as l,d as m,y as n,L as o,z as p,I as q,j as r,S as s,V as t,U as u,k as v,H as w,K as x,Q as y,M as z};
