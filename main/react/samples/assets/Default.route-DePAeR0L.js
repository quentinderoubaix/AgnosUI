import{j as e,r as g}from"./App-XNADZBio.js";import{u as m}from"./config-B1OT1TA4.js";import{u as o}from"./directive-Kqp31pwt-CpBdIrAv.js";import{c}from"./index-Bh3NuAq4.js";import{c as n}from"./progressbar-DuRX7_my-CMF6cfNX.js";import"./directive-DCYlDznf-D2hjAqcK.js";import"./widget-DAs9_HQ1-Dcw9QXPm.js";import"./stores-B8YEDwZq-BUsucSP7.js";import"./writables-DoU_XYTX-Dq9jyVLj.js";function t(r){const[s,a]=m(n,r,"progressbar");return e.jsx("progress",{className:c("progress",s.className),value:s.value,max:s.max,...o(a.directives.ariaDirective)})}function i(r){const[s,a]=m(n,r,"progressbar"),l=g.useMemo(()=>new Intl.NumberFormat("default",{style:"percent",minimumFractionDigits:0,maximumFractionDigits:1}),[]),p={"--thickness":"0.4rem","--value":s.percentage};return e.jsx("div",{className:c("radial-progress",s.className),style:p,...o(a.directives.ariaDirective),children:l.format(s.percentage/100)})}const D=()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-lg mb-2",children:"Simple progressbars"}),e.jsx(t,{className:"progress-primary",value:20}),e.jsx(t,{className:"progress-info",value:4,max:5}),e.jsx("h2",{className:"text-lg mt-4 mb-2",children:"Radial progress"}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx(i,{className:"text-primary",min:10,max:20,value:13}),e.jsx(i,{className:"bg-info text-info-content border-4 border-info",min:9,max:20,value:17})]})]});export{D as default};
