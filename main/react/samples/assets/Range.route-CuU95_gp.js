import{r as s,j as e}from"./App-DHhP8U0X.js";import{S as o}from"./slider-DMIinwEC-DTPJBF-m.js";import"./stores-B4F_j8QF.js";import"./directive-GSGkMcBJ.js";import"./writables-DoU_XYTX-B5IK4zXo.js";import"./resizeObserver-CD0IU7t2.js";import"./directive-CX0hxCpP-Cj2tDrhJ.js";import"./config-BbThgUal.js";import"./widget-DAs9_HQ1-BMVDwHFs.js";import"./stores-B8YEDwZq-DfBENgOA.js";import"./slot-Is8FqGrj.js";const V=()=>{const[r,i]=s.useState([10,40,50,60,90]),[t,a]=s.useState([10,40]);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Slider with form control"}),e.jsx(o,{min:0,max:100,stepSize:1,values:r,onValuesChange:i}),"Form control values: ",r==null?void 0:r.join(", "),e.jsx("hr",{}),e.jsx("h2",{children:"Slider with values"}),e.jsx(o,{min:0,max:100,stepSize:1,values:t,onValuesChange:a}),"Values: ",t.join(", ")]})};export{V as default};