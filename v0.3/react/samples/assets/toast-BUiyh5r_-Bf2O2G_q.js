import{r as c,j as e}from"./App-XNADZBio.js";import{u as m,S as s}from"./config-CCs_7nqP.js";import{a as i}from"./directive-Kqp31pwt-CpBdIrAv.js";import{c as u}from"./toast-8tWp6x89-oIZl_NBT.js";import{e as f}from"./extendWidget-B-unuY20.js";import{f as v}from"./fade-uOobJKgw-CncxQG4y.js";import{k as r}from"./directive-DCYlDznf-D2hjAqcK.js";const p={slotStructure:void 0,slotDefault:void 0,slotHeader:void 0},j={transition:v},g=f(u,p,{},j),b=g,D=t=>e.jsxs("div",{className:"toast-header",children:[e.jsx(s,{slotContent:t.state.slotHeader,props:t}),t.state.dismissible&&e.jsx("button",{...i([r,"btn-close me-0 ms-auto"],t.widget.directives.closeButtonDirective)})]}),h=t=>e.jsx("button",{...i([r,"btn-close btn-close-white me-2 m-auto"],t.widget.directives.closeButtonDirective)}),T=t=>e.jsxs(e.Fragment,{children:[t.state.slotHeader&&e.jsx(D,{...t}),e.jsx("div",{className:"toast-body",children:e.jsx(s,{slotContent:t.state.slotDefault,props:t})}),t.state.dismissible&&!t.state.slotHeader&&e.jsx(h,{...t})]}),H={slotStructure:T},w=t=>e.jsx("div",{...i([r,`toast ${t.state.dismissible?"toast-dismissible":""} ${t.state.slotHeader?"":"d-flex"}`],t.widget.directives.transitionDirective,t.widget.directives.autoHideDirective,t.widget.directives.bodyDirective),children:e.jsx(s,{slotContent:t.state.slotStructure,props:t})}),y=c.forwardRef(function(a,n){const[o,d]=m(b,a,"toast",{...H,slotDefault:a.children});c.useImperativeHandle(n,()=>d.api,[]);const l={state:o,widget:d};return e.jsx(e.Fragment,{children:!o.hidden&&e.jsx(w,{...l})})});export{y as T};