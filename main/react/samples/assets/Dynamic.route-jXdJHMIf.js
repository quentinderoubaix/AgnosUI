import{r as n,j as t}from"./App-XNADZBio.js";import{A as a}from"./alert-BOEWPNEW-Gzbyy_Px.js";import"./extendWidget-C4d1tfEs.js";import"./baseTransitions-DnNfiD54.js";import"./stores-B4F_j8QF.js";import"./writables-DoU_XYTX-B5IK4zXo.js";import"./promise-CY2U8bTP-B6m5TA-Q.js";import"./directive-DuBTvXZs.js";import"./fade-7-Etejps-E7iXvyyY.js";import"./simpleClassTransition-CB4y02XN.js";import"./cssTransitions-BiCvyljD.js";import"./slot-DrPnuT9k.js";import"./config-DQAExDHC.js";import"./widget-DAs9_HQ1-DwZAIgDx.js";import"./stores-B8YEDwZq-C-BlpjsT.js";import"./directive-CX0hxCpP-BH7-OCNH.js";const s=n.createContext([]),o=n.createContext(null);let d=0;function m(r,e){switch(e.type){case"add":return[...r,{...e.payload,id:d++}];case"remove":return r.filter(i=>i!==e.alert)}}const N=()=>{const[r,e]=n.useReducer(m,[]);return t.jsxs(t.Fragment,{children:[t.jsx("button",{className:"btn btn-primary addError me-1",onClick:()=>e({type:"add",payload:{type:"danger",slotDefault:"Error",dismissible:!0,animated:!0}}),children:"Add error"}),t.jsx("button",{className:"btn btn-primary addInfo me-1",onClick:()=>e({type:"add",payload:{type:"info",slotDefault:"Info",dismissible:!0,animated:!0}}),children:"Add info"}),t.jsx("button",{className:"btn btn-primary addWarning me-1",onClick:()=>e({type:"add",payload:{type:"warning",slotDefault:"Warning",dismissible:!0,animated:!0}}),children:"Add warning"}),t.jsx("br",{}),t.jsxs("div",{className:"alertCount mb-3",children:["Alerts in the service: ",r.length]}),t.jsx(s.Provider,{value:r,children:t.jsx(o.Provider,{value:e,children:t.jsx(l,{})})})]})},l=()=>{const r=n.useContext(s),e=n.useContext(o);return t.jsx(t.Fragment,{children:r==null?void 0:r.map(i=>t.jsx(a,{animatedOnInit:i.animatedOnInit,animated:i.animated,dismissible:i.dismissible,type:i.type,slotDefault:i.slotDefault,onHidden:()=>e({type:"remove",alert:i})},`${i.id}`))})};export{N as default};