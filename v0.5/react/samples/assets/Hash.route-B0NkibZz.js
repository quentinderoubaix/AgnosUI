import{r as o,j as a}from"./App-DzjsJVPi.js";import{h as n}from"./hashUtil-C_kSI7VB.js";import{P as p}from"./pagination-5jlJWfFj-DjXsXVhv.js";import{W as m}from"./config-DsZWmgdO.js";import{u as l}from"./stores-B90XF8Sy-C-A2iTqV.js";import"./directive-CKEccryv-BrWl76X8.js";import"./slot-C-87TY4d.js";import"./index-B8c1qUxc.js";import"./directive-DNXkB1Wc-vM-qq65p.js";import"./pageFactory-CZZJDqOh-6b3apN76.js";import"./extendWidget-DH8OAK3L.js";import"./pagination-DwDRot6q-EEtIn65_.js";import"./writables-DCiBdIBK-CaNqvQxH.js";import"./config-CksNrV0_.js";import"./widget-DaA-pe23-BBb8HF9F.js";const w=()=>{const i=l(n),r=+(i.split("#")[1]??4),e=o.useCallback(t=>location.hash=`#${i.split("#")[0]}#${t}`,[]),s=o.useCallback(t=>`#${i.split("#")[0]}#${t}`,[]);return a.jsx(a.Fragment,{children:a.jsxs(m,{pagination:{collectionSize:60},children:[a.jsx("p",{children:"A pagination with hrefs provided for each pagination element:"}),a.jsxs("p",{children:["Page hash: ",a.jsx("small",{children:"#"+i})]}),a.jsx(p,{ariaLabel:"Page navigation with customized hrefs",page:r,boundaryLinks:!0,pageLink:s,onPageChange:e})]})})};export{w as default};