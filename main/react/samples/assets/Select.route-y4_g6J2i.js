import{r as e,j as t}from"./index-5Gi3VjGg.js";import{S as p}from"./select-8EtmnFT-.js";import{W as f}from"./config-CbEWpOIZ.js";import"./func-DcknktoK.js";import"./floatingUI-EnFj5VFf.js";import"./directive-VyARMTuz.js";import"./promise-2z3lKB8W.js";import"./stores-FUL-6A0x.js";import"./focustrack-QJfYtv1O.js";import"./navManager-HLY5vyad.js";import"./dom-HY1qC9Vk.js";import"./slot-lVj29Rpa.js";import"./widget-fCsT7X_a.js";function h(){const s=location.hash.split("?")[1];return new URL(s?`?${s}`:"",location.href).searchParams.get("filterText")??""}const y=()=>{const[s]=e.useState(["Action 1","Action 2","Action 3","Other 1","Other 2","Other 3"]),[i,l]=e.useState(h),a=e.useCallback(r=>l(r.target.value),[]),[n,c]=e.useState([]),[m,o]=e.useState(void 0),x=e.useCallback(r=>{o(r),c(r?s.filter(u=>u.toLowerCase().startsWith(r)):s.slice(0,10))},[]);return t.jsxs(f,{select:{filterText:i},children:[t.jsx("h2",{children:"Multiselect example"}),t.jsxs("div",{className:"mb-3",children:[t.jsx("label",{className:"form-label",children:"Multiselect"}),t.jsx(p,{items:n,filterText:m,onFilterTextChange:x})]}),t.jsxs("div",{className:"demo-select-config",children:[t.jsx("strong",{children:"Default config"}),t.jsx("br",{}),t.jsxs("label",{children:["Default filterText:",t.jsx("input",{type:"text",className:"form-control",value:i,onChange:a})]}),t.jsx("br",{}),t.jsx("button",{type:"button",className:"mt-3 btn btn-outline-secondary",onClick:()=>o(void 0),children:"Reset widget filterText"})]})]})};export{y as default};