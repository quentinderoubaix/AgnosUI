import{p as u,f as l,e as d,b,c as f,a as m,t as v,k as n,n as g,R as h,q as k}from"./AppCommon-CC-VkUgW.js";import{a as x}from"./actions-D-dhIHRy.js";import{a as y}from"./input-DacpPey5.js";import{a as _}from"./directive-CKEccryv-BuQmRVBG.js";import"./shared-DQoMxUaM.js";const D=_((t,o)=>{console.log("Directive has been executed on node ",t.id);const e=a=>{console.log(o,a.target)};return t.addEventListener("click",e),{update:a=>o=a,destroy:()=>{t.removeEventListener("click",e),console.log("Destroy function executed ",t.id)}}});var L=v('<div><button class="btn btn-primary" id="test">button 1</button> <button class="btn btn-primary" id="test2">button 2</button></div> <hr> <input class="form-control" id="clickText" type="text" aria-label="text input to configure the directive"> <hr> <span>(Open the console to see the outputs)</span>',1);function S(t,o){u(o,!0);let e=h("focus element clicked");var a=L(),s=l(a);let i;d(()=>i=k(s,i,{}));var c=b(s,4);x(s,(r,p)=>D(r,p),()=>n(e)),y(c,()=>n(e),r=>g(e,r)),f(t,a),m()}export{S as default};
