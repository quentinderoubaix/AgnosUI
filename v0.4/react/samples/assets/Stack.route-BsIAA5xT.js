import{j as o}from"./App-A0XPvMD_.js";import{o as r}from"./modal-qidZ4ghL-M5GRXY3m.js";import"./config-aqAfPk5l.js";import"./config-DBGVES8N.js";import"./directive-3-8yr-ZK-C5h7Dwqe.js";import"./widget-DAs9_HQ1-8frXUQXT.js";import"./stores-B8YEDwZq-l6gu5SAM.js";import"./directive-Kqp31pwt-CY8MqhJI.js";import"./index-Dxk4rDO-.js";import"./modal-CeTI4jxI-DOuNjKNU.js";import"./writables-DoU_XYTX-8sqxFTfY.js";import"./baseTransitions-DgRqyQuv.js";import"./promise-CY2U8bTP-2vXpUa_S.js";import"./fade-uOobJKgw-BJsoKbPR.js";import"./simpleClassTransition-BRY6SPYR.js";import"./cssTransitions-Ba8jNhLg.js";import"./extendWidget-CY6dlHOY.js";const a=({widget:t,state:n})=>o.jsxs(o.Fragment,{children:["This is a modal",o.jsx("br",{}),o.jsx("br",{}),o.jsx("button",{className:"btn btn-outline-primary m-1",onClick:()=>r({title:"Other modal",children:a,container:n.modalElement}),children:"Launch other modal"}),o.jsx("br",{}),o.jsx("button",{className:"btn btn-outline-secondary m-1",onClick:()=>t.api.patch({backdrop:!0}),children:"Enable backdrop"}),o.jsx("button",{className:"btn btn-outline-secondary m-1",onClick:()=>t.api.patch({backdrop:!1}),children:"Disable backdrop"}),o.jsx("br",{}),o.jsx("button",{className:"btn btn-outline-secondary m-1",onClick:()=>t.api.close(),children:"Close"})]}),f=()=>o.jsx("button",{className:"btn btn-primary",onClick:()=>r({title:"First modal",className:"modal-sm",children:a}),children:"Launch demo modal"});export{f as default};