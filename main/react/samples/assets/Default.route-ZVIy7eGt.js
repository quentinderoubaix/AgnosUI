import{r as o,j as e}from"./App-DHhP8U0X.js";import{P as a}from"./pagination-CPA-5wXD-BU7emrTR.js";import"./index-Mo-ZleON.js";import"./pagination-C_gYTMDt-_bZH_Ac2.js";import"./stores-B4F_j8QF.js";import"./writables-DoU_XYTX-B5IK4zXo.js";import"./config-BbThgUal.js";import"./widget-DAs9_HQ1-BMVDwHFs.js";import"./stores-B8YEDwZq-DfBENgOA.js";import"./slot-Is8FqGrj.js";import"./index-BHfzbLMi.js";const P=()=>{const[i,n]=o.useState(4),[t,s]=o.useState(1);return e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:"Basic pagination:"}),e.jsx(a,{page:i,collectionSize:60,onPageChange:n}),e.jsx("h5",{children:"No direction links:"}),e.jsx(a,{page:i,collectionSize:60,directionLinks:!1,onPageChange:n}),e.jsx("h5",{children:"With boundary links:"}),e.jsx(a,{page:i,collectionSize:60,boundaryLinks:!0,onPageChange:n}),e.jsxs("div",{className:"mb-3",children:["Current page: ",e.jsx("span",{id:"defaultPage",children:i})]}),e.jsx("h5",{children:"Disabled pagination:"}),e.jsx(a,{page:t,collectionSize:60,ariaLabel:"Disabled pagination",disabled:!0,onPageChange:s})]})};export{P as default};