import{r as t,j as e}from"./index-Z3YCqocd.js";import{S as o}from"./slider-Ed6DCvKH.js";import"./config-KHHtDFt7.js";import"./func-B0ufEirG.js";import"./widget-1Eaz3jJB.js";import"./stores-gdIqLMrW.js";import"./directive-8xXkNhJC.js";import"./writables-0-l6sQIu.js";const h=()=>{const[r,i]=t.useState([10,40,50,60,90]),[s,a]=t.useState([10,40]);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Slider with form control"}),e.jsx(o,{min:0,max:100,stepSize:1,values:r,onValuesChange:i}),"Form control values: ",r==null?void 0:r.join(", "),e.jsx("hr",{}),e.jsx("h2",{children:"Slider with values"}),e.jsx(o,{min:0,max:100,stepSize:1,values:s,onValuesChange:a}),"Values: ",s.join(", ")]})};export{h as default};