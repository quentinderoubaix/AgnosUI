import{r,j as e}from"./index-5Gi3VjGg.js";import{S as a}from"./slider-cO8h8SfK.js";import"./config-CbEWpOIZ.js";import"./func-DcknktoK.js";import"./widget-fCsT7X_a.js";import"./stores-FUL-6A0x.js";import"./directive-VyARMTuz.js";import"./writables-g9mw6FFw.js";const u=()=>{const[s,l]=r.useState([10,40]),[t,i]=r.useState([40]);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"d-flex",style:{height:"350px"},children:[e.jsxs("div",{className:"col-6",style:{height:"300px"},children:[e.jsx(a,{min:0,max:100,stepSize:1,vertical:!0,values:s,onValuesChange:l,className:"my-0"}),e.jsxs("div",{className:"mt-3",children:["Form control values: ",s==null?void 0:s.join(", ")]})]}),e.jsxs("div",{className:"col-6",style:{height:"300px"},children:[e.jsx(a,{min:0,max:100,stepSize:1,vertical:!0,values:t,onValuesChange:i,className:"my-0"}),e.jsxs("div",{className:"mt-3",children:["From control value: ",t]})]})]})})};export{u as default};