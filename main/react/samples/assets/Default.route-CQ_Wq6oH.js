import{r as o,j as e}from"./App-XNADZBio.js";import{P as a}from"./pagination-X2bugeX--BmdDfltK.js";import"./config-BbSZcrxs.js";import"./config-BBev6bov.js";import"./directive-DwbtadSh-DtSUHFk6.js";import"./widget-DAs9_HQ1-C8LDzD_S.js";import"./stores-B8YEDwZq-1XSNo5Uf.js";import"./index-Bh3NuAq4.js";import"./directive-Kqp31pwt-CvS47PEc.js";import"./pagination-Bd42tSat-DqO0oAkT.js";import"./writables-DoU_XYTX-CGzrMkTm.js";const P=()=>{const[i,n]=o.useState(4),[t,s]=o.useState(1);return e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:"Basic pagination:"}),e.jsx(a,{page:i,collectionSize:60,onPageChange:n}),e.jsx("h5",{children:"No direction links:"}),e.jsx(a,{page:i,collectionSize:60,directionLinks:!1,onPageChange:n}),e.jsx("h5",{children:"With boundary links:"}),e.jsx(a,{page:i,collectionSize:60,boundaryLinks:!0,onPageChange:n}),e.jsxs("div",{className:"mb-3",children:["Current page: ",e.jsx("span",{id:"defaultPage",children:i})]}),e.jsx("h5",{children:"Disabled pagination:"}),e.jsx(a,{page:t,collectionSize:60,ariaLabel:"Disabled pagination",disabled:!0,onPageChange:s})]})};export{P as default};