import{r as i,j as t}from"./App-XNADZBio.js";import{e as m,c as u}from"./extendWidget-VZ4lQYeg.js";import{b as d}from"./writables-DoU_XYTX-DoV7pQAs.js";import{S as o}from"./slot-DrPnuT9k.js";import{u as p}from"./config-DQAExDHC.js";import{u as f}from"./directive-CX0hxCpP-BC0sPI_1.js";const g={type:"primary"},b={type:d},j=m(u,g,b),x=j,h=e=>t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"alert-body",children:t.jsx(o,{slotContent:e.state.slotDefault,props:e})}),e.state.dismissible?t.jsx("button",{type:"button",className:"btn-close",onClick:e.widget.api.close,"aria-label":e.state.ariaCloseButtonLabel}):null]}),y={slotStructure:h},$=i.forwardRef(function(a,l){const[r,s]=p(x,a,"alert",{...y,slotDefault:a.children}),n=f(s.directives.transitionDirective);i.useImperativeHandle(l,()=>s.api,[]);const c={state:r,widget:s};return t.jsx(t.Fragment,{children:r.hidden?null:t.jsx("div",{className:`au-alert alert alert-${r.type} ${r.className} ${r.dismissible?"alert-dismissible":""}`,role:"alert",ref:n,children:t.jsx(o,{slotContent:r.slotStructure,props:c})})})});export{$ as A};