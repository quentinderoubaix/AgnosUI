import{r as s,j as e}from"./App-XNADZBio.js";import{S as o}from"./slider-efGg_IZL-DxJgnHXs.js";import"./directive-_62WM8Ul-DhygzKo7.js";import"./stores-CbKlqneq.js";import"./directive-DpAaJgAE-dbIg0imW.js";import"./config-CU1Tiraw.js";import"./config-BTRBURgK.js";import"./widget-DAs9_HQ1-B1ddsW-J.js";import"./stores-B8YEDwZq-BRy6vnb9.js";import"./slider-prMWxT2I-CGK-xr-r.js";import"./writables-DoU_XYTX-dxvvE_8w.js";import"./resizeObserver-DQfjhnqs.js";const f=()=>{const[r,i]=s.useState([10,40,50,60,90]),[t,a]=s.useState([10,40]);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Slider with form control"}),e.jsx(o,{min:0,max:100,stepSize:1,values:r,onValuesChange:i}),"Form control values: ",r==null?void 0:r.join(", "),e.jsx("hr",{}),e.jsx("h2",{children:"Slider with values"}),e.jsx(o,{min:0,max:100,stepSize:1,values:t,onValuesChange:a}),"Values: ",t.join(", ")]})};export{f as default};