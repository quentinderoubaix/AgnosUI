import{r as t,j as e}from"./App-XNADZBio.js";import{c as d}from"./baseTransitions-BXsYPdIJ.js";import{c as p}from"./collapse-CVjUhnIz-Db9CIFNh.js";import{u as m}from"./directive-Kqp31pwt-CvS47PEc.js";import{u as h}from"./stores-B8YEDwZq-1XSNo5Uf.js";import"./directive-DwbtadSh-DtSUHFk6.js";import"./writables-DoU_XYTX-CGzrMkTm.js";import"./promise-CY2U8bTP-DIGlcKrP.js";import"./cssTransitions-BHIi1ynE.js";const x=s=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 100 100",...s},t.createElement("rect",{className:"horizontal",x:20,y:45,width:60,height:10,fill:"currentColor"}),t.createElement("rect",{className:"vertical",x:45,y:20,width:10,height:60,fill:"currentColor"})),v=({expanded:s,headerText:i,children:a})=>{const{state$:r,directives:{directive:l},api:{toggle:n}}=t.useMemo(()=>d({props:{visible:s,transition:p}}),[]),c=m(l),o=h(r);return e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header p-0",children:e.jsxs("button",{type:"button",id:"collapse-toggle",onClick:()=>n(),className:"btn toggle-button","aria-controls":"collapse-content","aria-expanded":o.visible||void 0,children:[i,e.jsx("span",{className:"ms-1 collapse-icon"+(o.visible?" expanded":""),children:e.jsx(x,{})})]})}),o.hidden?null:e.jsx("div",{id:"collapse-content",...c,children:e.jsx("div",{className:"card-body",children:a})})]})},u=v,T=()=>e.jsx(u,{headerText:"Toggle content",expanded:!0,children:"Content to display / hide."});export{T as default};