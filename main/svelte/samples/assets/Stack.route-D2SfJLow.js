import{j as l,p as e,b as c,f as u,c as m,a as s,t as b,i as d,w as k,P as v}from"./AppCommon-CHMWAYUs.js";import{o as p}from"./modalService-CzNMsql6.js";import"./Modal-a5_haeRw.js";import"./actions-DuaCxCQE.js";import"./class-CpJXf2wP.js";import"./modal-BEVbQExQ-DwP7x8my.js";import"./writables-DoU_XYTX-EUJry9Cf.js";import"./directive-CKEccryv-DchTFd9J.js";import"./baseTransitions-B9ugZAUu.js";import"./promise-CY2U8bTP-CRYFPrGb.js";import"./fade-uOobJKgw-BEPRHjn9.js";import"./simpleClassTransition-CjxII6GL.js";import"./cssTransitions-BcR-vTR8.js";import"./extendWidget-C7OLjdxS.js";import"./Slot-obbjdEGN.js";import"./snippet-BpnQ07FJ.js";import"./config-CBsgdVTw.js";import"./config-Dx2j-Ppr.js";var h=(o,t)=>p({title:"Other modal",children:t.state.children,container:t.state.modalElement}),f=(o,t)=>t.api.patch({backdrop:!0}),y=(o,t)=>t.api.patch({backdrop:!1}),g=(o,t)=>t.api.close(),E=b('This is a modal<br><br> <button class="btn btn-outline-primary m-1">Launch other modal</button><br> <button class="btn btn-outline-secondary m-1">Enable backdrop</button><button class="btn btn-outline-secondary m-1">Disable backdrop</button><br> <button class="btn btn-outline-secondary m-1">Close</button>',1);function L(o,t){e(t,!0);var r=E(),a=c(u(r),4);a.__click=[h,t];var i=c(a,3);i.__click=[f,t];var n=c(i);n.__click=[y,t];var _=c(n,3);_.__click=[g,t],m(o,r),s()}l(["click"]);var M=(o,t)=>p({title:"First modal",className:"modal-sm",children:t}),S=b('<button class="btn btn-primary">Launch demo modal</button>');function K(o,t){e(t,!1);const r=(i,n=v)=>{L(i,k(n))};d();var a=S();a.__click=[M,r],m(o,a),s()}l(["click"]);export{K as default};