import{r as l,j as e}from"./App-DzjsJVPi.js";import{A as p,a}from"./accordion-BX1iR5BO-D5BwhX_K.js";import{B as h}from"./body-DBRiX_SX.js";import{u as i}from"./directive-DNXkB1Wc-vM-qq65p.js";import"./slot-C-87TY4d.js";import"./directive-CKEccryv-BrWl76X8.js";import"./config-DsZWmgdO.js";import"./config-CksNrV0_.js";import"./widget-DaA-pe23-BBb8HF9F.js";import"./stores-B90XF8Sy-C-A2iTqV.js";import"./accordion-BGv150k9-B-RPSwaj.js";import"./baseTransitions-BTWrZiPl.js";import"./writables-DCiBdIBK-CaNqvQxH.js";import"./promise-CY2U8bTP-BBXElGUG.js";import"./collapse-CVjUhnIz-DC-QW7j_.js";import"./cssTransitions-CcrXbQiX.js";import"./extendWidget-DH8OAK3L.js";const E=()=>{const c=l.useRef(null),[n,d]=l.useState(!1),s=({slotContext:{state:t,directives:r}})=>e.jsx(e.Fragment,{children:t.shouldBeInDOM?e.jsx("div",{className:"accordion-collapse",...i(r.bodyContainerDirective),children:e.jsx("div",{className:"accordion-body",...i(r.bodyDirective),children:h})}):null}),m=t=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`accordion-button accordion-header custom-header justify-content-between ${t.state.visible?"":"collapsed"}`,role:"heading","aria-level":2,...i(t.directives.headerDirective),children:[e.jsxs("p",{className:"m-0",children:["First panel - ",t.state.visible?"opened":"collapsed"]}),e.jsx("button",{type:"button",className:`btn btn-link p-0 ${t.state.buttonClassName} au-accordion-item-button`,...i(t.directives.toggleDirective),children:"Toggle first"})]}),e.jsx(s,{slotContext:t})]}),u=t=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`accordion-button accordion-header custom-header justify-content-between ${t.state.visible?"":"collapsed"}`,role:"heading","aria-level":2,...i(t.directives.headerDirective),children:[e.jsx("p",{className:"m-0",children:"Second panel"}),e.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",className:`btn btn-sm btn-outline-primary ${t.state.buttonClassName} au-accordion-item-button`,...i(t.directives.toggleDirective),children:"Toggle second"}),e.jsxs("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:()=>d(r=>!r),children:[n?"En":"Dis","able third"]}),e.jsx("button",{type:"button",className:"btn btn-sm btn-outline-danger",onClick:()=>{var r,o;return(o=(r=c.current)==null?void 0:r.collapseAll)==null?void 0:o.call(r)},children:"Collapse all"})]})]}),e.jsx(s,{slotContext:t})]}),b=t=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`accordion-button accordion-header custom-header justify-content-between ${t.state.visible?"":"collapsed"}`,role:"heading","aria-level":2,...i(t.directives.headerDirective),children:[e.jsx("button",{type:"button",className:`p-0 btn btn-link container-fluid text-start ${t.state.buttonClassName} au-accordion-item-button`,...i(t.directives.toggleDirective),children:"Third panel"}),t.state.disabled&&e.jsx("p",{className:"text-muted m-0 small",children:"[I'm disabled]"})]}),e.jsx(s,{slotContext:t})]});return e.jsxs(p,{ref:c,children:[e.jsx(a,{structure:m}),e.jsx(a,{structure:u}),e.jsx(a,{structure:b,disabled:n})]})};export{E as default};