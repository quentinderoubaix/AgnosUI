import{E as e}from"./AppCommon-Cd2V92GK.js";import{e as u}from"./extendWidget-BeG-05nW.js";import{d as l,c as a}from"./directive-DwbtadSh-FwMOzFhq.js";import{t as n,h as m}from"./writables-DoU_XYTX-CwJRpCZy.js";import{c as d}from"./common-ChAYSEMp-DPTU_ufD.js";const p={autoHide:!0,delay:5e3},f={autoHide:n,delay:m(0,1/0,{strict:!0})};function g(r){let o;const t=u(d,p,f)(r),s=e(()=>{clearTimeout(o),t.stores.autoHide$()&&(o=setTimeout(()=>t.api.close(),t.stores.delay$()))}),i=a(()=>({attributes:{role:"alert","aria-atomic":"true",class:e(()=>t.stores.className$())},classNames:{"au-toast":!0,toast:!0}})),c=a(()=>({attributes:{type:"button","aria-label":e(()=>t.stores.ariaCloseButtonLabel$())},events:{click:t.api.close}}));return{...t,directives:{...t.directives,autoHideDirective:l(s),bodyDirective:i,closeButtonDirective:c}}}export{g as c};