import{f as b,k as c,u as $,c as u,b as i,n as r,e as Y,t as _,j as C,V as v,h,r as D}from"./AppCommon-CHMWAYUs.js";import{b as M}from"./input-Cv_k4R2i.js";import{b as N}from"./this-C0uP3rtE.js";import{M as j,e as q,a as B}from"./Modal-a5_haeRw.js";import"./shared-xCvzPCev.js";import"./actions-DuaCxCQE.js";import"./class-CpJXf2wP.js";import"./modal-BEVbQExQ-DwP7x8my.js";import"./writables-DoU_XYTX-EUJry9Cf.js";import"./directive-CKEccryv-DchTFd9J.js";import"./baseTransitions-B9ugZAUu.js";import"./promise-CY2U8bTP-CRYFPrGb.js";import"./fade-uOobJKgw-BEPRHjn9.js";import"./simpleClassTransition-CjxII6GL.js";import"./cssTransitions-BcR-vTR8.js";import"./extendWidget-C7OLjdxS.js";import"./Slot-obbjdEGN.js";import"./snippet-BpnQ07FJ.js";import"./config-CBsgdVTw.js";import"./config-Dx2j-Ppr.js";var F=_('<button type="button" class="btn btn-outline-primary">Yes</button> <button type="button" class="btn btn-outline-danger">No</button>',1),L=_('<!> <button type="button" class="btn btn-primary">Launch demo modal</button> <div class="form-check form-switch mt-3"><input class="form-check-input" type="checkbox" role="switch" id="fullscreen"> <label class="form-check-label" for="fullscreen">Fullscreen</label></div> <hr> <div data-testid="message"> </div>',1);function et(k){let e,o=v(""),l=v(!1);var m=L(),p=b(m);N(j(p,{title:"Save changes",get fullscreen(){return c(l)},footer:a=>{var n=F(),s=b(n);s.__click=()=>e.api.close(!0);var w=i(s,2);w.__click=()=>e.api.close(!1),u(a,n)},children:(a,n)=>{var s=$("Do you want to save your changes?");u(a,s)},$$slots:{footer:!0,default:!0}}),a=>e=a,()=>e);var d=i(p,2);d.__click=async()=>{r(o,"");const t=await e.api.open();t===q?r(o,"You clicked on the close button."):t===B?r(o,"You clicked outside the modal."):r(o,`You answered the question with "${t?"Yes":"No"}".`)};var f=i(d,2),g=h(f),y=i(f,4),x=h(y);Y(()=>D(x,c(o))),M(g,()=>c(l),t=>r(l,t)),u(k,m)}C(["click"]);export{et as default};