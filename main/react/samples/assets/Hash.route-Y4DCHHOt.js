import{r as o,j as a}from"./App-UyZHUGYF.js";import{h as n}from"./hashUtil-BFUGED7K.js";import{P as p}from"./pagination-BDq1dOoH-MbnZuc9p.js";import{W as m}from"./config-1Y6v8j7l.js";import{u as l}from"./stores-B8YEDwZq-C6q6OzNB.js";import"./directive-CKEccryv--USZPHTu.js";import"./index-CDi4d8zO.js";import"./directive-Kqp31pwt-BeErbkGW.js";import"./pageFactory-BMdGxeJT-DqKbbQKg.js";import"./extendWidget-DerKog6L.js";import"./pagination-dkNo_5ex-wvCcu_PY.js";import"./writables-DoU_XYTX-CgVcPKwT.js";import"./config-DJseOYT-.js";import"./widget-DAs9_HQ1-CE3QcKJH.js";const L=()=>{const i=l(n),r=+(i.split("#")[1]??4),e=o.useCallback(t=>location.hash=`#${i.split("#")[0]}#${t}`,[]),s=o.useCallback(t=>`#${i.split("#")[0]}#${t}`,[]);return a.jsx(a.Fragment,{children:a.jsxs(m,{pagination:{collectionSize:60},children:[a.jsx("p",{children:"A pagination with hrefs provided for each pagination element:"}),a.jsxs("p",{children:["Page hash: ",a.jsx("small",{children:"#"+i})]}),a.jsx(p,{ariaLabel:"Page navigation with customized hrefs",page:r,boundaryLinks:!0,pageLink:s,onPageChange:e})]})})};export{L as default};