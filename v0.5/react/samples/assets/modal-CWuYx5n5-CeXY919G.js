import{a as l,j as t,r as i,c as m}from"./App-DzjsJVPi.js";import{S as s}from"./slot-C-87TY4d.js";import{a as d,u as p}from"./directive-DNXkB1Wc-vM-qq65p.js";import{c as u}from"./index-B8c1qUxc.js";import{u as f}from"./config-DsZWmgdO.js";import{c as v,m as j,a as h}from"./modal-DP-4I7vf-C0vArpX1.js";import{f as c}from"./fade-uOobJKgw-DqfTw5Cx.js";import{e as x}from"./extendWidget-DH8OAK3L.js";import{t as D}from"./writables-DCiBdIBK-CaNqvQxH.js";import{c as n}from"./directive-CKEccryv-BrWl76X8.js";const g={contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0,fullscreen:!1},k={backdropTransition:c,modalTransition:c},M={fullscreen:D,contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0},b=x(v,g,M,k),N=({children:e,container:o})=>o?l.createPortal(e,o):t.jsx(t.Fragment,{children:e}),B=b,q=j,z=h,E=({directive:e})=>t.jsx("button",{className:"btn-close",...p(e)}),w=e=>t.jsxs(t.Fragment,{children:[t.jsx("h5",{className:"modal-title",children:t.jsx(s,{slotContent:e.state.title,props:e})}),e.state.closeButton&&t.jsx(E,{directive:e.directives.closeButtonDirective})]}),y=e=>t.jsxs(t.Fragment,{children:[e.state.title&&t.jsx("div",{className:"modal-header",children:t.jsx(s,{slotContent:e.state.header,props:e})}),t.jsx("div",{className:"modal-body",children:t.jsx(s,{slotContent:e.state.children,props:e})}),e.state.footer&&t.jsx("div",{className:"modal-footer",children:t.jsx(s,{slotContent:e.state.footer,props:e})})]}),P=({directives:e})=>t.jsx("div",{...d([n,"modal-backdrop"],e.backdropDirective)}),S=e=>{const{fullscreen:o}=e.state;return t.jsx("div",{...d([n,"modal d-block"],e.directives.modalDirective),children:t.jsx("div",{className:u("modal-dialog",{"modal-fullscreen":o}),children:t.jsx("div",{className:"modal-content",children:t.jsx(s,{slotContent:e.state.structure,props:e})})})})},F=i.forwardRef(function(o,r){const a=f(B,o,"modal",{header:w,structure:y});return i.useImperativeHandle(r,()=>a.api,[]),t.jsxs(N,{container:a.state.container,children:[!a.state.backdropHidden&&t.jsx(P,{...a}),!a.state.hidden&&t.jsx(S,{...a})]})});async function A(e){const o=m.createRoot(document.createElement("div"));try{return await(await new Promise(a=>{o.render(t.jsx(F,{...e,ref:a}))})).open()}finally{o.unmount()}}export{F as M,q as a,z as e,A as o};