import{p as N,b as a,f as P,k,n as f,W as w,u as r,c as e,a as C,t as D,V as H,h as o,j as V}from"./AppCommon-D_B8a5G6.js";import{T as i}from"./Toast-ChbJd54i.js";import{a as W}from"./config-BmaADpVL.js";import"./actions-B64vG8Da.js";import"./class-1L5W2JgY.js";import"./Slot-Bt2_y6gy.js";import"./snippet-CHDzym81.js";import"./toast-m-dpsTSI-Ce09RZoS.js";import"./extendWidget-CKD28wu-.js";import"./directive-CKEccryv-BAfxyCuh.js";import"./writables-DoU_XYTX-DPIJ9iVk.js";import"./common-BHk3fJTO-BZ6sOBnn.js";import"./baseTransitions-ChaN5dzC.js";import"./promise-CY2U8bTP-Bo1v6H0G.js";import"./fade-uOobJKgw-DmiXSsM0.js";import"./simpleClassTransition-B748OgGR.js";import"./cssTransitions-spK9RCdk.js";import"./config-CpwOCg7e.js";var j=(p,d)=>f(d,!0),B=D(`<p class="mb-2">Color schemes are based on the Bootstrap classes, in order to have out-of-the-box text accessibility use the helper classes <code>.text-bg-*</code>,
	e.g. <code>.text.bg-primary</code></p> <!> <button class="btn btn-primary my-2">Reset</button> <h3>Variations</h3> <div class="row gy-2 gx-3"><div class="col-auto"><!></div> <div class="col-auto"><!></div> <div class="col-auto"><!></div> <div class="col-auto"><!></div></div>`,1);function Z(p,d){N(d,!0),W().set({toast:{autoHide:!1,dismissible:!1}});let c=H(!0);var m=B(),v=a(P(m),2);i(v,{className:"text-bg-primary",header:"I am header",autoHide:!1,dismissible:!0,get visible(){return k(c)},set visible(t){f(c,w(t))},children:(t,l)=>{var s=r("Simple primary toast");e(t,s)},$$slots:{default:!0}});var n=a(v,2);n.__click=[j,c];var $=a(n,4),u=o($),g=o(u);i(g,{className:"text-bg-success",children:(t,l)=>{var s=r("This is a success toast");e(t,s)},$$slots:{default:!0}});var b=a(u,2),x=o(b);i(x,{className:"text-bg-danger",children:(t,l)=>{var s=r("This is an error toast");e(t,s)},$$slots:{default:!0}});var h=a(b,2),_=o(h);i(_,{className:"text-bg-info",children:(t,l)=>{var s=r("This is an info toast");e(t,s)},$$slots:{default:!0}});var y=a(h,2),T=o(y);i(T,{className:"text-bg-warning",children:(t,l)=>{var s=r("This is a warning toast");e(t,s)},$$slots:{default:!0}}),e(p,m),C()}V(["click"]);export{Z as default};