import{j as e,r}from"./App-XNADZBio.js";import{S as t}from"./slider-DLdA-y4u-BBhfHqQb.js";/* empty css               */import{u as l}from"./directive-Kqp31pwt-CpBdIrAv.js";import"./config-CCs_7nqP.js";import"./config-B1OT1TA4.js";import"./directive-DCYlDznf-D2hjAqcK.js";import"./widget-DAs9_HQ1-Dcw9QXPm.js";import"./stores-B8YEDwZq-BUsucSP7.js";import"./slider-CA_fszn7-BblmgUA8.js";import"./writables-DoU_XYTX-Dq9jyVLj.js";import"./resizeObserver--RK5JGtg.js";import"./extendWidget-B-unuY20.js";const a=s=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"position-relative cup-container",children:e.jsx("div",{className:"cup",children:e.jsx("div",{className:"cup-fill-parent",children:e.jsx("div",{className:"cup-fill",style:{height:`${s.state.progressDisplayOptions[0].height}%`},children:s.state.progressDisplayOptions[0].height>=50?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bubble bubble-1"}),e.jsx("div",{className:"bubble bubble-2"}),e.jsx("div",{className:"bubble bubble-3"})]}):null})})})}),e.jsx("button",{className:"coffee-indicator",...l(s.widget.directives.handleDirective,{item:s.state.sortedHandles[0]}),children:""+s.state.sortedHandles[0].value})]}),o=a,S=()=>{const[s,i]=r.useState([50]);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Fully custom slider"}),e.jsx(t,{min:0,max:100,stepSize:1,values:s,onValuesChange:i,slotStructure:o,vertical:!0,className:"custom-slider"})]})};export{S as default};
