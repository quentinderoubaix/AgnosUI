import{g as A,c as b}from"./common-Bb1EFVcj.BOJGbRz0.js";import{a as h}from"./baseTransitions.BHno9ikJ.js";import{h as v,i as x,c as P,b as S,g as y}from"./stores.D6Weu2dJ.js";import{f as C}from"./fade-uOobJKgw.Dnpipdt9.js";function D(){return{...A()}}const $=b,w=(u,g,m,s)=>t=>{const a=v(g,t,m),o=t?.config,p=x(o)?P(()=>({...s,...o()})):{...s,...o??{}},r=u({props:t?.props,config:p});return{...r,...S({...r.stores,...a}),patch:d=>y(()=>{let e;for(const[n,i]of Object.entries(d??{})){const c=a[`${n}$`];c?c.set(i):(e||(e={}),e[n]=i)}e&&r.patch(e)})}},f={slotStructure:void 0,slotDefault:void 0,type:"primary"},l={transition:C},W={type:h};function V(){return{...D(),...f,...l}}const k=w($,f,W,l);export{k as c,V as g};