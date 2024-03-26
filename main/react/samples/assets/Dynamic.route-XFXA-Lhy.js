import{r as i,j as e}from"./App-XNADZBio.js";import{T as p}from"./toast-BTccylx9-BmubBx41.js";import"./stores-B4F_j8QF.js";import"./extendWidget-C4d1tfEs.js";import"./baseTransitions-DnNfiD54.js";import"./writables-DoU_XYTX-B5IK4zXo.js";import"./promise-CY2U8bTP-B6m5TA-Q.js";import"./directive-DuBTvXZs.js";import"./fade-7-Etejps-E7iXvyyY.js";import"./simpleClassTransition-CB4y02XN.js";import"./cssTransitions-BiCvyljD.js";import"./config-DQAExDHC.js";import"./widget-DAs9_HQ1-DwZAIgDx.js";import"./stores-B8YEDwZq-C-BlpjsT.js";import"./slot-DrPnuT9k.js";import"./directive-CX0hxCpP-BH7-OCNH.js";var o=(a=>(a.topLeft="top-0 start-0",a.topCenter="top-0 start-50 translate-middle-x",a.topRight="top-0 end-0",a.middleLeft="top-50 start-0 translate-middle-y",a.middleCenter="top-50 start-50 translate-middle",a.middleRight="top-50 end-0 translate-middle-y",a.bottomLeft="bottom-0 start-0",a.bottomCenter="bottom-0 start-50 translate-middle-x",a.bottomRight="bottom-0 end-0",a))(o||{});let h=0;const L=()=>{const[a,m]=i.useState("top-0 start-0"),[r,n]=i.useState(new Map(Object.values(o).map(t=>[t,[]])));function d(){r.get(a).push({autoHide:!0,delay:3e3,className:a,id:h++}),n(new Map(r))}function c(t){r.set(t.className,r.get(t.className).filter(s=>s!==t))}return e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"mb-2",children:["To position toast wherever you want you should have a ",e.jsx("code",{children:"toast-container"})," with a custom position defined by CSS classes."]}),e.jsxs("p",{className:"mb-2",children:["To ",e.jsx("strong",{children:"stack"})," toasts vertically, put them in the same container."," "]}),e.jsx("div",{className:"d-flex justify-content-between",children:e.jsxs("div",{className:"d-flex form-group align-items-center",children:[e.jsxs("label",{className:"me-3",htmlFor:"positionSelect",children:["Position:"," "]}),e.jsx("select",{id:"positionSelect",className:"form-select w-auto",value:a,onChange:t=>m(t.target.value),children:Object.entries(o).map(t=>({value:t[1],label:t[0]})).map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))}),e.jsx("button",{className:"btn btn-primary addToast ms-2",onClick:()=>d(),children:"Show toast"})]})}),e.jsx("div",{className:"d-flex position-relative mt-2 w-100","aria-live":"polite","aria-atomic":"true",style:{height:"500px",backgroundColor:"gray"},children:[...r].map(([t,s])=>e.jsx("div",{className:`toast-container p-3 ${t}`,children:s.map(l=>e.jsx(p,{onHidden:()=>c(l),slotHeader:"I am header",children:"Simple toast"},`${l.id}`))},t))})]})};export{o as ToastPositions,L as default};