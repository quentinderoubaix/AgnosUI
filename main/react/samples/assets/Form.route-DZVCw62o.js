import{r as o,j as e}from"./App-XNADZBio.js";import{R as c}from"./rating-D1war3lR-B5cZVWAu.js";import"./index-CZZr4Zl5.js";import"./rating-BlPifbnP-B91vtHY-.js";import"./stores-bzJrTsnV.js";import"./directive-DDb3YD5o-DXG-hRS2.js";import"./writables-DoU_XYTX-CBor1g6-.js";import"./config-CXwd_Qkq.js";import"./config-CnQZr086.js";import"./widget-DAs9_HQ1-Ds05mpz4.js";import"./stores-B8YEDwZq-DmEjO4KH.js";import"./directive-_62WM8Ul-DAmtt5js.js";const R=()=>{const[a,n]=o.useState({value:0,valid:!1,invalid:!0,disabled:!1});function s(l){const i=l.value??a.value,t=!(l.disabled??a.disabled),r=i>=1,d={...a,...l,value:i,valid:t&&r,invalid:t&&!r};n(d)}return e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"form-label",id:"ratingLabel",children:"Rating of your experience"}),e.jsx("br",{}),e.jsx(c,{rating:a.value,disabled:a.disabled,onRatingChange:l=>s({value:l}),ariaLabelledBy:"ratingLabel"}),e.jsxs("div",{id:"form-msg",className:"form-text small",children:[a.valid&&e.jsx("div",{className:"text-success",children:"Thanks!"}),a.invalid&&e.jsx("div",{className:"text-danger-emphasis",children:"Please rate us"})]}),e.jsxs("pre",{children:["Model:"," ",e.jsx("span",{id:"form-model",children:e.jsx("b",{children:a.value})})]}),e.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[e.jsx("button",{id:"form-btn-enable",className:`btn btn-sm btn-outline-${a.disabled?"danger":"success"}`,onClick:()=>s({disabled:!a.disabled}),children:a.disabled?"control disabled":" control enabled"})," ",e.jsx("button",{id:"form-btn-clear",className:"btn btn-sm btn-outline-primary",onClick:()=>s({value:0}),children:"Clear"})]})]})};export{R as default};