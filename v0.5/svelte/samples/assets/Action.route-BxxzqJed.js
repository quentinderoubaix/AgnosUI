import{h as _,p as g,s as c,c as C,b as d,a as h,t as b,O as $,e as a,d as A,U as T,f as S,g as U,j as w,T as B,r as L,w as M,Q as N,k as W}from"./AppCommon-Cm-6NtnE.js";import{T as j}from"./Toast-BI8AZfHx.js";import{h as f}from"./html-Cj3QBDSr.js";import{b as z}from"./check-circle-fill-BFB53SSU.js";import{S as D}from"./Slot-HBv0E13p.js";import{a as F}from"./config-CGoDt1jV.js";import"./actions-gBvwwZne.js";import"./class-CZUVYx7F.js";import"./toast-CpvsibAI-DANnJ4lG.js";import"./extendWidget-CKqcYLS9.js";import"./directive-CKEccryv-gyIcW13B.js";import"./writables-DCiBdIBK-BYLEJlA0.js";import"./common-Banw3FYN-B7RGMRwh.js";import"./baseTransitions-B-oSxy54.js";import"./promise-CY2U8bTP-Di3LO9sj.js";import"./fade-uOobJKgw-CA5Q4wdK.js";import"./simpleClassTransition-Ct7U0yg9.js";import"./cssTransitions-Crcz6VTe.js";import"./snippet-DaCt2Zif.js";import"./config-CLQxp5Vy.js";import"./index-client-CP1GwSUe.js";const H=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
</svg>`;var O=()=>window.alert("Undo"),P=(r,t,o)=>o.api.close(),Q=b('<button type="button" class="btn-close btn-close-white me-2 m-auto"></button>'),R=b('<div class="d-flex w-100"><div class="d-flex align-items-center flex-grow-1 toast-body"><span class="d-flex me-2"><!></span> <!> <button type="button" class="btn btn-sm ms-auto text-bg-success"><span class="me-2"><!></span>Undo</button></div> <!></div>');function V(r,t){g(t,!0);let o=$(t,["$$slots","$$events","$$legacy"]),s=t.state;var i=R(),l=a(i),p=a(l),m=a(p);f(m,()=>z);var e=c(p,2);D(e,{get content(){return s.children},get props(){return o}});var n=c(e,2);n.__click=[O];var u=a(n),k=a(u);f(k,()=>H);var x=c(l,2);C(x,()=>s.dismissible,y=>{var v=Q();v.__click=[P,o,t],A(()=>T(v,"aria-label",s.ariaCloseButtonLabel)),d(y,v)}),d(r,i),h()}_(["click"]);var q=(r,t)=>w(t,!0),E=b('<p>To put the action in the toast simply create custom contents.</p> <p><strong>Note:</strong> When header is not present default display is <code>flex</code></p> <div class="col-auto col-md-6"><!></div> <button class="btn btn-primary mt-2">Reset</button>',1);function vt(r,t){g(t,!0);const o=(e,n=N)=>{V(e,M(n))};F().set({toast:{autoHide:!1,dismissible:!0,className:"text-bg-success",structure:o}});let s=W(!0);var i=E(),l=c(S(i),4),p=a(l);j(p,{get visible(){return U(s)},set visible(e){w(s,B(e))},children:(e,n)=>{var u=L("This is a toast with action");d(e,u)},$$slots:{default:!0}});var m=c(l,2);m.__click=[q,s],d(r,i),h()}_(["click"]);export{vt as default};