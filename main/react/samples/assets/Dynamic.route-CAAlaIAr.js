import{r as n,j as t}from"./App-XNADZBio.js";import{A as a}from"./alert-l-LZauqa-DFoQnZ-s.js";import"./config-CU1Tiraw.js";import"./config-BTRBURgK.js";import"./stores-CbKlqneq.js";import"./widget-DAs9_HQ1-B1ddsW-J.js";import"./stores-B8YEDwZq-BRy6vnb9.js";import"./directive-_62WM8Ul-DhygzKo7.js";import"./directive-DpAaJgAE-dbIg0imW.js";import"./alert-BTHyVmn--B2AQLbpB.js";import"./common-DHmYrg1A-D_z4bs1J.js";import"./baseTransitions-B0Uz6_1l.js";import"./writables-DoU_XYTX-dxvvE_8w.js";import"./promise-CY2U8bTP-DyoYE_Xk.js";import"./extendWidget-DH6bFaPr.js";import"./fade-uOobJKgw-BzWpDnkF.js";import"./simpleClassTransition-Dce6AlwW.js";import"./cssTransitions-DrZIx6sh.js";const o=n.createContext([]),s=n.createContext(null);let d=0;function m(r,e){switch(e.type){case"add":return[...r,{...e.payload,id:d++}];case"remove":return r.filter(i=>i!==e.alert)}}const w=()=>{const[r,e]=n.useReducer(m,[]);return t.jsxs(t.Fragment,{children:[t.jsx("button",{className:"btn btn-primary addError me-1",onClick:()=>e({type:"add",payload:{type:"danger",slotDefault:"Error",dismissible:!0,animated:!0}}),children:"Add error"}),t.jsx("button",{className:"btn btn-primary addInfo me-1",onClick:()=>e({type:"add",payload:{type:"info",slotDefault:"Info",dismissible:!0,animated:!0}}),children:"Add info"}),t.jsx("button",{className:"btn btn-primary addWarning me-1",onClick:()=>e({type:"add",payload:{type:"warning",slotDefault:"Warning",dismissible:!0,animated:!0}}),children:"Add warning"}),t.jsx("br",{}),t.jsxs("div",{className:"alertCount mb-3",children:["Alerts in the service: ",r.length]}),t.jsx(o.Provider,{value:r,children:t.jsx(s.Provider,{value:e,children:t.jsx(l,{})})})]})},l=()=>{const r=n.useContext(o),e=n.useContext(s);return t.jsx(t.Fragment,{children:r==null?void 0:r.map(i=>t.jsx(a,{animatedOnInit:i.animatedOnInit,animated:i.animated,dismissible:i.dismissible,type:i.type,slotDefault:i.slotDefault,onHidden:()=>e({type:"remove",alert:i})},`${i.id}`))})};export{w as default};