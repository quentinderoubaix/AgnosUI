import{j as s,R as p}from"./App-XNADZBio.js";import{c as u}from"./index-n9d6TPNH.js";import{u as t}from"./directive-CX0hxCpP-BC0sPI_1.js";import{u as m}from"./config-DQAExDHC.js";import{S as i}from"./slot-DrPnuT9k.js";import{t as v}from"./stores-B4F_j8QF.js";const j=e=>{const a=t(e.widget.directives.handleDirective,{item:e.item});return s.jsx("button",{ref:a,children:" "})},f=({directive:e,option:a})=>{const r=t(e,{option:a});return s.jsx("div",{ref:r})},b=({directive:e,index:a,children:r})=>{const d=t(e,{index:a});return s.jsx("div",{ref:d,children:r})},g=e=>{const a=t(e.widget.directives.clickableAreaDirective),r=t(e.widget.directives.minLabelDirective),d=t(e.widget.directives.maxLabelDirective),n=t(e.widget.directives.combinedHandleLabelDisplayDirective);return s.jsxs(s.Fragment,{children:[e.state.progressDisplayOptions.map((l,c)=>s.jsx(f,{directive:e.widget.directives.progressDisplayDirective,option:l},c)),s.jsx("div",{ref:a}),e.state.showMinMaxLabels?s.jsxs(s.Fragment,{children:[s.jsx("div",{ref:r,children:s.jsx(i,{slotContent:e.state.slotLabel,props:{value:e.state.min,...e}})}),s.jsx("div",{ref:d,children:s.jsx(i,{slotContent:e.state.slotLabel,props:{value:e.state.max,...e}})})]}):s.jsx(s.Fragment,{}),e.state.showValueLabels&&e.state.combinedLabelDisplay?s.jsx("div",{ref:n,children:e.state.rtl?s.jsxs(s.Fragment,{children:[s.jsx(i,{slotContent:e.state.slotLabel,props:{value:e.state.sortedValues[1],...e}})," - ",s.jsx(i,{slotContent:e.state.slotLabel,props:{value:e.state.sortedValues[0],...e}})]}):s.jsxs(s.Fragment,{children:[s.jsx(i,{slotContent:e.state.slotLabel,props:{value:e.state.sortedValues[0],...e}})," - ",s.jsx(i,{slotContent:e.state.slotLabel,props:{value:e.state.sortedValues[1],...e}})]})}):s.jsx(s.Fragment,{}),e.state.sortedHandles.map((l,c)=>s.jsxs(p.Fragment,{children:[s.jsx(i,{slotContent:e.state.slotHandle,props:{item:l,...e}}),e.state.showValueLabels&&!e.state.combinedLabelDisplay?s.jsx(b,{directive:e.widget.directives.handleLabelDisplayDirective,index:c,children:s.jsx(i,{slotContent:e.state.slotLabel,props:{value:e.state.values[c],...e}})}):s.jsx(s.Fragment,{})]},l.id))]})},o={slotStructure:g,slotHandle:j};function R(e){const[a,r]=m(u,e,"slider",{...o}),d={state:a,widget:v(r)},n=t(r.directives.sliderDirective);return s.jsx("div",{ref:n,children:s.jsx(i,{slotContent:a.slotStructure,props:d})})}export{R as S};