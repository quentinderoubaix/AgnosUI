import{r as e,j as t}from"./App-D2FAakDZ.js";import{S as u}from"./select-CEXxOyRB-CADZdw0i.js";import{W as f}from"./config-87LujZOd.js";import"./directive-3-8yr-ZK-C5h7Dwqe.js";import"./floatingUI-BIINKrA-.js";import"./promise-CY2U8bTP-2vXpUa_S.js";import"./focustrack-BCVH7QM3.js";import"./navManager-DmYmZNH8.js";import"./extendWidget-CY6dlHOY.js";import"./directive-Kqp31pwt-o0igtPiy.js";import"./index-D735YuCH.js";import"./config-CX1h717Z.js";import"./widget-DAs9_HQ1-B1NkVbjP.js";import"./stores-B8YEDwZq-CVwKZ0x1.js";function h(){const s=location.hash.split("?")[1];return new URL(s?`?${s}`:"",location.href).searchParams.get("filterText")??""}const A=()=>{const[s]=e.useState(["Action 1","Action 2","Action 3","Other 1","Other 2","Other 3"]),[i,l]=e.useState(h),a=e.useCallback(r=>l(r.target.value),[]),[n,c]=e.useState([]),[m,o]=e.useState(void 0),x=e.useCallback(r=>{o(r),c(r?s.filter(p=>p.toLowerCase().startsWith(r)):s.slice(0,10))},[]);return t.jsxs(f,{select:{filterText:i},children:[t.jsx("h2",{children:"Multiselect example"}),t.jsxs("div",{className:"mb-3",children:[t.jsx("label",{className:"form-label",children:"Multiselect"}),t.jsx(u,{items:n,filterText:m,onFilterTextChange:x})]}),t.jsxs("div",{className:"demo-select-config",children:[t.jsx("strong",{children:"Default config"}),t.jsx("br",{}),t.jsxs("label",{children:["Default filterText:",t.jsx("input",{type:"text",className:"form-control",value:i,onChange:a})]}),t.jsx("br",{}),t.jsx("button",{type:"button",className:"mt-3 btn btn-outline-secondary",onClick:()=>o(void 0),children:"Reset widget filterText"})]})]})};export{A as default};