import{j as s,r as o}from"./App-DI9ur9y5.js";import{u as a}from"./config-DDWCLHBi.js";import{u as l}from"./directive-DNXkB1Wc-BT0zWdco.js";import{S as c}from"./close_icon-DR10euea.js";import{c as m}from"./alert-BZyrc6h_-DFjRl-Tu.js";import{c as d}from"./simpleClassTransition-BgeDgH8O.js";import"./directive-CKEccryv-BXYvEkQs.js";import"./stores-B90XF8Sy-7qJUtm0j.js";import"./common-BHk3fJTO-hjcHjfEI.js";import"./baseTransitions-C7uvcCOg.js";import"./writables-DoU_XYTX-CmGvgT4E.js";import"./promise-CY2U8bTP-D7Q2lx8N.js";import"./cssTransitions-RkXy3lNs.js";const h=({state:e,api:t,directives:r,children:n})=>s.jsxs("div",{role:"alert",className:`flex alert ${e.className}`,...l(r.transitionDirective),children:[n,e.dismissible&&s.jsx("button",{className:"btn btn-sm btn-circle btn-ghost ms-auto",onClick:t.close,"aria-label":`${e.ariaCloseButtonLabel}`,children:s.jsx(c,{})})]}),i=e=>{const t=d({showClasses:["transition-opacity"],hideClasses:["opacity-0"],animationPendingHideClasses:["opacity-0","transition-opacity"]}),r=a(m,e,"alert",{transition:t});return s.jsx(s.Fragment,{children:!r.state.hidden&&s.jsx(h,{...r,children:e.children})})},y=()=>{const[e,t]=o.useState(!0);return s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"btn btn-primary",onClick:()=>t(!0),children:"Reset Alert"}),s.jsxs("div",{className:"flex flex-col gap-3 mt-3",children:[s.jsxs(i,{className:"alert-success",visible:e,onVisibleChange:t,children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),s.jsx("span",{children:"Alert is a success!"})]}),s.jsxs(i,{className:"alert-error",dismissible:!1,children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),s.jsx("span",{children:"Alert is an error!"})]})]})]})};export{y as default};