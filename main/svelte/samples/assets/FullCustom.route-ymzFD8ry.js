import{p as h,g as F,e as k,c as m,a as w,t as _,h as s,T as N,k as e,n as o,a6 as S,b as u,V as x,w as T,P as V,j as $,r as y}from"./AppCommon-CHMWAYUs.js";import{P as q}from"./Progressbar-eUHhcNWr.js";import"./actions-DuaCxCQE.js";import"./progressbar-SWdDtjxf-CsTfU5qG.js";import"./writables-DoU_XYTX-EUJry9Cf.js";import"./directive-CKEccryv-DchTFd9J.js";import"./extendWidget-C7OLjdxS.js";import"./Slot-obbjdEGN.js";import"./snippet-BpnQ07FJ.js";import"./config-CBsgdVTw.js";import"./config-Dx2j-Ppr.js";import"./class-CpJXf2wP.js";import"./style-Bk7ejTAN.js";var z=_('<div class="bubble bubble-1"></div> <div class="bubble bubble-2"></div> <div class="bubble bubble-3"></div>',1),A=_('<div class="position-relative" style="height: 300px"><div class="cup"><div class="cup-fill-parent"><div class="cup-fill"><!></div></div></div></div>');function B(i,a){h(a,!0);var t=A(),r=s(t),d=s(r),l=s(d),v=s(l);F(v,()=>a.state.percentage>=50,c=>{var p=z();m(c,p)}),k(()=>N(l,"style",`height: ${1.7*a.state.percentage}px;`)),m(i,t),w()}const E=(i,a)=>{o(a,!0)},G=(i,a)=>{o(a,!e(a))},H=(i,a,t)=>{o(a,0),o(t,!1)};var J=_('<div class="d-flex align-items-center flex-wrap"><div style="width: 350px"><!></div> <div class="d-flex flex-column justify-content-evenly h-100 ms-5"><div class="btn-group" role="group"><button class="btn btn-outline-primary">Start</button> <button class="btn btn-outline-primary"> </button> <button class="btn btn-outline-primary">Reset</button></div> <p class="mt-3"><span> </span></p></div></div>');function rt(i,a){h(a,!0);let t=x(0),r=x(!1);const d=setInterval(()=>{e(r)&&e(t)<100&&o(t,e(t)+10)},500);S(()=>{clearInterval(d)});var l=J(),v=s(l),c=s(v);q(c,{get value(){return e(t)},structure:(I,D=V)=>{B(I,T(D))},$$slots:{structure:!0}});var p=u(v,2),f=s(p),b=s(f);b.__click=[E,r];var n=u(b,2);n.__click=[G,r];var P=s(n),g=u(n,2);g.__click=[H,t,r];var R=u(f,2),j=s(R),C=s(j);k(()=>{b.disabled=e(t)>0,n.disabled=e(t)===0||e(t)>=100,y(P,e(r)?"Pause":"Resume"),g.disabled=e(t)===0,y(C,e(t)===0?"Need to wake up.":e(t)<100?`Retrieving coffee... ${e(t)}%`:"Ready to work !")}),m(i,l),w()}$(["click"]);export{rt as default};