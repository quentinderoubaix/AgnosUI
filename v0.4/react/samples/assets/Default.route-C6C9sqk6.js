import{j as s,r}from"./App-A0XPvMD_.js";import{u as o}from"./config-DBGVES8N.js";import{S as l}from"./close_icon-DDcBS9D2.js";import{c}from"./toast-BzxextBQ-Bu0Fz4s_.js";import"./directive-3-8yr-ZK-C5h7Dwqe.js";import"./widget-DAs9_HQ1-8frXUQXT.js";import"./stores-B8YEDwZq-l6gu5SAM.js";import"./extendWidget-CY6dlHOY.js";import"./writables-DoU_XYTX-8sqxFTfY.js";import"./common-CO5b5G_J-DpA-iyBL.js";import"./baseTransitions-DgRqyQuv.js";import"./promise-CY2U8bTP-2vXpUa_S.js";const i=e=>{const[t,{api:a}]=o(c,e,"toast");return s.jsx(s.Fragment,{children:!t.hidden&&s.jsxs("div",{className:`alert ${t.className} flex`,children:[e.children,t.dismissible&&s.jsx("button",{className:"btn btn-sm btn-circle btn-ghost",onClick:a.close,"aria-label":`${t.ariaCloseButtonLabel}`,children:s.jsx(l,{})})]})})},C=()=>{const[e,t]=r.useState(!0);return s.jsxs("div",{className:"h-[215px]",children:[s.jsx("button",{className:"btn btn-primary",onClick:()=>t(!0),children:"Reset Toast"}),s.jsxs("div",{className:"toast",children:[s.jsx(i,{className:"alert-success",visible:e,onVisibleChange:t,children:"This is a success toast"}),s.jsx(i,{className:"alert-error",dismissible:!1,children:"This is an error toast"})]})]})};export{C as default};