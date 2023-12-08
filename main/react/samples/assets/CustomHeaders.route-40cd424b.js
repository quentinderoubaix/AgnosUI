import{r as d,j as i}from"./index-ffc26b19.js";import{u as p}from"./utils-946c19b8.js";import{A as h,a as r}from"./Accordion-b3fb6c44.js";import{B as j}from"./body-92e21e3d.js";import"./index-50cfebd5.js";import"./baseTransitions-00a88573.js";import"./writables-17424135.js";import"./promise-8377987b.js";import"./fade-a3701a34.js";import"./dom-cc7faf10.js";import"./rating-a1a56b21.js";import"./focustrack-4fea73bd.js";import"./config-7593863d.js";const A=()=>{const l=d.useRef(),[c,n]=d.useState(!1),t=e=>{const{state:a,widget:s}=e.slotContext,u=p(s.directives.collapseDirective);return i.jsx(i.Fragment,{children:a.shouldBeInDOM?i.jsx("div",{className:`accordion-collapse ${a.itemCollapseClass}`,id:`${a.itemId}-collapse`,"aria-labelledby":`${a.itemId}-toggle`,ref:u,children:i.jsx("div",{className:`accordion-body ${a.itemBodyClass}`,children:j})}):null})},m=e=>i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:`${e.state.itemHeaderClass} accordion-button accordion-header custom-header justify-content-between ${e.state.itemVisible?"":"collapsed"}`,role:"heading","aria-level":2,children:[i.jsxs("p",{className:"m-0",children:["First panel - ",e.state.itemVisible?"opened":"collapsed"]}),i.jsx("button",{type:"button",id:`${e.state.itemId}-toggle`,onClick:e.widget.actions.click,className:`btn btn-link p-0 ${e.state.itemButtonClass} ${e.state.itemVisible?"":"collapsed"}`,disabled:e.state.itemDisabled,"aria-controls":`${e.state.itemId}-collapse`,"aria-disabled":e.state.itemDisabled,"aria-expanded":e.state.itemVisible,children:"Toggle first"})]}),i.jsx(t,{slotContext:e})]}),o=e=>i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:`${e.state.itemHeaderClass} accordion-button accordion-header custom-header justify-content-between ${e.state.itemVisible?"":"collapsed"}`,role:"heading","aria-level":2,children:[i.jsx("p",{className:"m-0",children:"Second panel"}),i.jsxs("div",{children:[i.jsx("button",{type:"button",className:`btn btn-sm btn-outline-primary me-2 ${e.state.itemButtonClass} ${e.state.itemVisible?"":"collapsed"}`,id:`${e.state.itemId}-toggle`,onClick:e.widget.actions.click,disabled:e.state.itemDisabled,"aria-controls":`${e.state.itemId}-collapse`,"aria-disabled":e.state.itemDisabled,"aria-expanded":e.state.itemVisible,children:"Toggle second"}),i.jsxs("button",{type:"button",className:"btn btn-sm btn-outline-secondary me-2",onClick:()=>n(a=>!a),children:[c?"En":"Dis","able third"]}),i.jsx("button",{type:"button",className:"btn btn-sm btn-outline-danger me-2",onClick:()=>{var a,s;return(s=(a=l.current)==null?void 0:a.collapseAll)==null?void 0:s.call(a)},children:"Collapse all"})]})]}),i.jsx(t,{slotContext:e})]}),b=e=>i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:`${e.state.itemHeaderClass} accordion-button accordion-header custom-header justify-content-between ${e.state.itemVisible?"":"collapsed"}`,role:"heading","aria-level":2,children:[i.jsx("button",{type:"button",className:`p-0 btn btn-link container-fluid text-start ${e.state.itemButtonClass} ${e.state.itemVisible?"":"collapsed"} `,id:`${e.state.itemId}-toggle`,onClick:e.widget.actions.click,disabled:e.state.itemDisabled,"aria-disabled":e.state.itemDisabled,"aria-controls":`${e.state.itemId}-collapse`,"aria-expanded":e.state.itemVisible,children:"Third panel"}),e.state.itemDisabled?i.jsx("p",{className:"text-muted m-0 small",children:"[I'm disabled]"}):i.jsx(i.Fragment,{})]}),i.jsx(t,{slotContext:e})]});return i.jsxs(h,{ref:l,children:[i.jsx(r,{slotItemStructure:m}),i.jsx(r,{slotItemStructure:o}),i.jsx(r,{slotItemStructure:b,itemDisabled:c})]})};export{A as default};