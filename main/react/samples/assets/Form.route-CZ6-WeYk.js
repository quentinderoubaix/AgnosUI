import{r as o,j as e}from"./App-XNADZBio.js";import{R as c}from"./rating-fKarU8Tg-DfFFvmFa.js";import"./index-NhItVb7F.js";import"./rating-BfsrniLy-BmZ-Fnht.js";import"./stores-B4F_j8QF.js";import"./directive-DuBTvXZs.js";import"./writables-DoU_XYTX-B5IK4zXo.js";import"./slot-DrPnuT9k.js";import"./config-DQAExDHC.js";import"./widget-DAs9_HQ1-DwZAIgDx.js";import"./stores-B8YEDwZq-C-BlpjsT.js";import"./directive-CX0hxCpP-BH7-OCNH.js";const R=()=>{const[a,n]=o.useState({value:0,valid:!1,invalid:!0,disabled:!1});function s(l){const i=l.value??a.value,t=!(l.disabled??a.disabled),r=i>=1,d={...a,...l,value:i,valid:t&&r,invalid:t&&!r};n(d)}return e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"form-label",id:"ratingLabel",children:"Rating of your experience"}),e.jsx("br",{}),e.jsx(c,{rating:a.value,disabled:a.disabled,onRatingChange:l=>s({value:l}),ariaLabelledBy:"ratingLabel"}),e.jsxs("div",{id:"form-msg",className:"form-text small",children:[a.valid&&e.jsx("div",{className:"text-success",children:"Thanks!"}),a.invalid&&e.jsx("div",{className:"text-danger-emphasis",children:"Please rate us"})]}),e.jsxs("pre",{children:["Model:"," ",e.jsx("span",{id:"form-model",children:e.jsx("b",{children:a.value})})]}),e.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[e.jsx("button",{id:"form-btn-enable",className:`btn btn-sm btn-outline-${a.disabled?"danger":"success"}`,onClick:()=>s({disabled:!a.disabled}),children:a.disabled?"control disabled":" control enabled"})," ",e.jsx("button",{id:"form-btn-clear",className:"btn btn-sm btn-outline-primary",onClick:()=>s({value:0}),children:"Clear"})]})]})};export{R as default};