import{r as a,j as i}from"./App-XNADZBio.js";import{c as o}from"./simpleClassTransition-BohE_cHn.js";import{c}from"./baseTransitions-CEt0tH4X.js";import{u as l}from"./directive-Cyub5FqM-DuBiUSMn.js";import"./cssTransitions-D624oDyw.js";import"./directive-DoO5xP7d-DPc41jcO.js";import"./stores-CbKlqneq.js";import"./promise-CY2U8bTP-DyoYE_Xk.js";import"./writables-DoU_XYTX-dxvvE_8w.js";const d=({hiddenText:s,children:e})=>{const{directives:{directive:t},api:{hide:r,show:n}}=a.useMemo(()=>c({props:{visible:!1,transition:o({hideClasses:["hide"],animationPendingHideClasses:["hide"]})}}),[]);return i.jsx("div",{className:"flip-card",children:i.jsxs("div",{className:"flip-card-inner",...l(t),children:[i.jsxs("div",{className:"flip-card-front",children:[e,i.jsx("button",{className:"btn btn-outline-secondary",onClick:()=>r(),children:"Hide again."})]}),i.jsx("div",{className:"flip-card-back",children:i.jsx("button",{className:"btn btn-outline-primary",onClick:()=>n(),children:s})})]})})},m=d,C=()=>i.jsx(m,{hiddenText:"What is hiding behing this ?",children:" Some new content ! "});export{C as default};