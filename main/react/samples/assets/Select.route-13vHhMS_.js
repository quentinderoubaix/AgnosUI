import{r as e,j as t}from"./App-XNADZBio.js";import{S as p}from"./select-DPkDdzLr-BDc1RH4B.js";import{W as f}from"./config-BbSZcrxs.js";import"./directive-Kqp31pwt-CvS47PEc.js";import"./directive-DwbtadSh-DtSUHFk6.js";import"./floatingUI-D1jJvghS.js";import"./promise-CY2U8bTP-DIGlcKrP.js";import"./focustrack-C4Q8fVy2.js";import"./navManager-Civ0MiH-.js";import"./config-BBev6bov.js";import"./widget-DAs9_HQ1-C8LDzD_S.js";import"./stores-B8YEDwZq-1XSNo5Uf.js";function h(){const s=location.hash.split("?")[1];return new URL(s?`?${s}`:"",location.href).searchParams.get("filterText")??""}const w=()=>{const[s]=e.useState(["Action 1","Action 2","Action 3","Other 1","Other 2","Other 3"]),[i,l]=e.useState(h),a=e.useCallback(r=>l(r.target.value),[]),[n,c]=e.useState([]),[m,o]=e.useState(void 0),x=e.useCallback(r=>{o(r),c(r?s.filter(u=>u.toLowerCase().startsWith(r)):s.slice(0,10))},[]);return t.jsxs(f,{select:{filterText:i},children:[t.jsx("h2",{children:"Multiselect example"}),t.jsxs("div",{className:"mb-3",children:[t.jsx("label",{className:"form-label",children:"Multiselect"}),t.jsx(p,{items:n,filterText:m,onFilterTextChange:x})]}),t.jsxs("div",{className:"demo-select-config",children:[t.jsx("strong",{children:"Default config"}),t.jsx("br",{}),t.jsxs("label",{children:["Default filterText:",t.jsx("input",{type:"text",className:"form-control",value:i,onChange:a})]}),t.jsx("br",{}),t.jsx("button",{type:"button",className:"mt-3 btn btn-outline-secondary",onClick:()=>o(void 0),children:"Reset widget filterText"})]})]})};export{w as default};