import{r as e,j as t}from"./App-XNADZBio.js";import{R as r}from"./rating-Cvad2Z2H-DeH4_ixQ.js";import{W as m}from"./config-CCs_7nqP.js";import"./directive-Kqp31pwt-CpBdIrAv.js";import"./directive-DCYlDznf-D2hjAqcK.js";import"./rating-CNQcp5pm-5ljrNsL1.js";import"./rating-BR5wD7y2-PNvDhEe6.js";import"./writables-DoU_XYTX-Dq9jyVLj.js";import"./extendWidget-B-unuY20.js";import"./config-B1OT1TA4.js";import"./widget-DAs9_HQ1-Dcw9QXPm.js";import"./stores-B8YEDwZq-BUsucSP7.js";const o=function({fill:n}){const a=["star"];n===100&&a.push("full");const i={width:`${n}%`};return t.jsxs("span",{className:a.join(" "),children:[" ",t.jsx("span",{className:"half",style:i,children:"♥"}),"♥"," "]})},R=()=>{const[n,a]=e.useState({}),[i,c]=e.useState(3);function s(l){a({...n,...l})}return t.jsxs(m,{rating:n,children:[t.jsx(r,{rating:i,onRatingChange:c}),t.jsxs("div",{className:"mt-3",children:["Disabled: ",t.jsxs("div",{id:"btn-config-disabled",className:"btn-group mb-2",children:[t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.disabled?"active":""}`,onClick:()=>s({disabled:!0}),children:"true"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.disabled?"":"active"}`,onClick:()=>s({disabled:!1}),children:"false"})]}),t.jsx("br",{}),"maxRating: ",t.jsxs("div",{id:"btn-config-maxRating",className:"btn-group mb-2",children:[t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.maxRating===40?"active":""}`,onClick:()=>s({maxRating:40}),children:"40"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.maxRating===30?"active":""}`,onClick:()=>s({maxRating:30}),children:"30"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.maxRating===20?"active":""}`,onClick:()=>s({maxRating:20}),children:"20"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.maxRating===void 0?"active":""}`,onClick:()=>s({maxRating:void 0}),children:"undefined"})]}),t.jsx("br",{}),"className: ",t.jsxs("div",{id:"btn-config-className",className:"btn-group mb-2",children:[t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.className==="fs-1"?"active":""}`,onClick:()=>s({className:"fs-1"}),children:"fs-1"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.className==="fs-2"?"active":""}`,onClick:()=>s({className:"fs-2"}),children:"fs-2"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.className===void 0?"active":""}`,onClick:()=>s({className:void 0}),children:"undefined"})]}),t.jsx("br",{}),"slotStar: ",t.jsxs("div",{id:"btn-config-slotStar",className:"btn-group mb-2",children:[t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.slotStar===o?"active":""}`,onClick:()=>s({slotStar:o}),children:"custom"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.slotStar==="*"?"active":""}`,onClick:()=>s({slotStar:"*"}),children:"'*'"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.slotStar===void 0?"active":""}`,onClick:()=>s({slotStar:void 0}),children:"undefined"})]})]})]})};export{R as default};
