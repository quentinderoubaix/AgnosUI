import{j as r,R as ke}from"./App-XNADZBio.js";import{w as He,c as i,o as Pe,a as xe,s as _e,b as Ee,t as Fe}from"./stores-B4F_j8QF.js";import{e as U,m as X,k as $}from"./directive-GSGkMcBJ.js";import{g as ie,e as ae,h as Ne,t as V,a as Y}from"./writables-DoU_XYTX-DoV7pQAs.js";import{c as ze}from"./resizeObserver-CD0IU7t2.js";import{u as y}from"./directive-CX0hxCpP-srOUdzTw.js";import{u as Oe}from"./config-DQAExDHC.js";import{S as L}from"./slot-DrPnuT9k.js";const Ae=/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/;function G(t){var o;const d=(""+t).match(Ae);return Math.max(0,(((o=d[1])==null?void 0:o.length)??0)-(+d[2]||0))}const J={min:0,max:100,stepSize:1,readonly:!1,disabled:!1,vertical:!1,className:"",ariaLabelHandle:t=>""+t,ariaValueText:t=>""+t,onValuesChange:Ee,values:[0],showValueLabels:!0,showMinMaxLabels:!0,rtl:!1,slotStructure:void 0,slotLabel:({value:t})=>""+t,slotHandle:void 0},Te={min:ae,max:ae,stepSize:Ne(0,1/0,{strict:!0}),readonly:V,disabled:V,vertical:V,ariaLabelHandle:Y,ariaValueText:Y,onValuesChange:Y,values:ie,showValueLabels:V,showMinMaxLabels:V,rtl:V},We=(t,o,d,b,c)=>{const h=Math.pow(10,c);if(t>=d)return d;if(t<=o)return o;const g=Math.floor((t-o)*h/b);return+(((t-o)*h%b<b/2?g:g+1)*b/h+o).toFixed(c)},F=(t,o,d,b)=>{o.update(c=>(c=[...c],c[t]=c[t]+d*b,c))},N=(t,o,d)=>t&&o?d?1:-1:t&&!o?-1:!t&&o?d?-1:1:!t&&!o?-1:1;function Be(t){const[{min$:o,max$:d,stepSize$:b,rtl$:c,values$:h,ariaLabelHandle$:g,ariaValueText$:se,onValuesChange$:re,showValueLabels$:z,showMinMaxLabels$:O,...A},le]=He(J,t,Te),{vertical$:u,disabled$:R,readonly$:K}=A;let _=-1;const w=i(()=>{const e=o(),a=d();return e===a?J.min:Math.min(e,a)}),j=i(()=>{const e=o(),a=d();return e===a?J.max:Math.max(e,a)}),Q=i(()=>Math.max(G(b()),G(w()),G(j()))),ne=i(()=>b()*Math.pow(10,Q())),v=Pe(h,re,e=>{const a=w(),s=j(),n=ne(),l=Q();return e.map(m=>We(m,a,s,n,l))},ie.equal),{directive:oe,element$:ce}=U(),{directive:ue,element$:de}=U(),{directive:me,element$:be}=U(),{directive:ve,dimensions$:T}=ze(),M=xe({}),E=i(()=>{var e;return T(),M(),((e=ce())==null?void 0:e.getBoundingClientRect())??{}},{equal:Object.is}),pe=i(()=>{var e;return T(),M(),((e=de())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,a)=>Object.is(e,a)}),fe=i(()=>{var e;return T(),M(),((e=be())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,a)=>Object.is(e,a)}),he=i(()=>u()?E().top:E().left),W=i(()=>u()?E().height:E().width),Z=i(()=>[...v()].sort((e,a)=>e-a)),ge=i(()=>v().map((e,a)=>({id:a,value:e})).sort((e,a)=>e.value-a.value)),De=i(()=>{const e=g(),a=se();return ge().map((s,n)=>({...s,ariaLabel:e(s.value,n,s.id),ariaValueText:a(s.value,n,s.id)}))}),S=i(()=>v().map(e=>je(e))),B=i(()=>[...S()].sort((e,a)=>e-a)),Le=i(()=>pe().width/W()*100),we=i(()=>fe().width/W()*100),I=i(()=>{if(O()){if(!z())return!0}else return!1;const e=Le();return c()?!S().some(a=>100-a>100-e-1):!S().some(a=>a<e+1)}),C=i(()=>{if(O()){if(!z())return!0}else return!1;const e=we();return c()?!S().some(a=>100-a<e+1):!S().some(a=>a>100-e-1)}),$e=i(()=>{const e=v();return e.length==2&&Math.abs(e[0]-e[1])<10}),k=i(()=>!R()&&!K()),ee=i(()=>{const e=B(),a=(e[0]+e[1])/2;return u()||e.length!=2?0:c()?100-a:a}),te=i(()=>{const e=B(),a=100-(e[0]+e[1])/2;return u()&&e.length==2?c()?100-a:a:0}),H=i(()=>{const e=u(),a=c();return S().map((s,n)=>({left:a?e?null:100-s:e?null:s,top:a?e?s:null:e?100-s:null}))}),ye=i(()=>{const e=u(),a=B(),s=c();return a.length===1?[{left:e||s?null:0,right:e?null:s?0:null,bottom:e?s?null:0:null,top:e&&s?0:null,width:e?100:a[0],height:e?a[0]:100}]:a.map((n,l,m)=>({left:e||s?null:n,right:e?null:s?m[l]:null,bottom:e?s?null:n:null,top:e&&s?m[l]:null,width:e?100:l===m.length-1?n:m[l+1]-n,height:e?l===m.length-1?n:m[l+1]-n:100})).slice(0,a.length-1)}),je=e=>{const a=w();return(e-a)*100/(j()-a)},Se=e=>{const a=v();if(a.length===1)return 0;const s=Z(),n=s.find(f=>f>e*100),l=n?s.indexOf(n):s.length-1,m=s[l-1]+(s[l]-s[l-1])/2,x=s[e*100<=m?l-1:l];return a.indexOf(x)},q=(e,a)=>{if(k()){const s=W(),n=he();let l=u()?(s-e+n)/s:(e-n)/s;l=c()?1-l:l;const m=a??Se(l),x=l*(j()-w())+w();v.update(f=>(f=[...f],f[m]=x,f))}},p=i(()=>!u()),Ve=$(()=>({attributes:{"aria-disabled":i(()=>R()?"true":void 0),class:A.className$},classNames:{"au-slider":!0,"au-slider-vertical":u,"au-slider-horizontal":p,disabled:R}})),Re=$(()=>({classNames:{"au-slider-label-vertical":u,"au-slider-label-vertical-min":u,"au-slider-label":p,"au-slider-label-min":p,"au-slider-rtl":c,invisible:i(()=>!I())}})),Me=$(()=>({classNames:{"au-slider-label-vertical":u,"au-slider-label-vertical-max":u,"au-slider-label":p,"au-slider-label-max":p,"au-slider-rtl":c,invisible:i(()=>!C())}})),P={..._e({min$:w,max$:j,stepSize$:b,values$:v,sortedValues$:Z,sortedHandles$:De,minValueLabelDisplay$:I,maxValueLabelDisplay$:C,combinedLabelDisplay$:$e,interactive$:k,combinedLabelPositionLeft$:ee,combinedLabelPositionTop$:te,progressDisplayOptions$:ye,handleDisplayOptions$:H,showValueLabels$:z,showMinMaxLabels$:O,rtl$:c,...A}),patch:le,api:{},directives:{sliderDirective:X(oe,ve,Ve),progressDisplayDirective:$(e=>({styles:{left:i(()=>e().option.left+"%"),right:i(()=>e().option.right+"%"),top:i(()=>e().option.top+"%"),bottom:i(()=>e().option.bottom+"%"),width:i(()=>e().option.width+"%"),height:i(()=>e().option.height+"%")},classNames:{"au-slider-progress":!0}})),clickableAreaDirective:$(()=>({events:{click:e=>P.actions.click(e)},classNames:{"au-slider-clickable-area":p,"au-slider-clickable-area-vertical":u}})),handleDirective:$(e=>({events:{keydown:a=>P.actions.keydown(a,e().item.id),mousedown:a=>P.actions.mouseDown(a,e().item.id),touchstart:a=>P.actions.touchStart(a,e().item.id)},attributes:{role:"slider","aria-valuemin":w,"aria-valuemax":j,"aria-valuenow":i(()=>e().item.value),"aria-valuetext":i(()=>e().item.ariaValueText),"aria-label":i(()=>e().item.ariaLabel),"aria-orientation":i(()=>u()?"vertical":void 0),"aria-disabled":i(()=>R()?"true":void 0),disabled:R,"aria-readonly":i(()=>K()?"true":void 0)},styles:{left:i(()=>H()[e().item.id].left+"%"),top:i(()=>H()[e().item.id].top+"%")},classNames:{"au-slider-handle":!0,"au-slider-handle-vertical":u,"au-slider-handle-horizontal":p}})),minLabelDirective:X(ue,Re),maxLabelDirective:X(me,Me),combinedHandleLabelDisplayDirective:$(()=>({classNames:{"au-slider-label-vertical":u,"au-slider-label-vertical-now":u,"au-slider-label":p,"au-slider-label-now":p},styles:{left:i(()=>ee()+"%"),top:i(()=>te()+"%")}})),handleLabelDisplayDirective:$(e=>({classNames:{"au-slider-label-vertical":u,"au-slider-label-vertical-now":u,"au-slider-label":p,"au-slider-label-now":p},styles:{left:i(()=>H()[e().index].left+"%"),top:i(()=>H()[e().index].top+"%")}}))},actions:{click(e){q(u()?e.clientY:e.clientX)},keydown(e,a){const{key:s}=e,n=c(),l=b(),m=w(),x=j(),f=u();if(k()){switch(s){case"ArrowDown":F(a,v,l,N(f,n,!0));break;case"ArrowLeft":F(a,v,l,N(f,n,!1));break;case"ArrowUp":F(a,v,l,-1*N(f,n,!0));break;case"ArrowRight":F(a,v,l,-1*N(f,n,!1));break;case"Home":v.update(D=>(D=[...D],D[a]=m,D));break;case"End":v.update(D=>(D=[...D],D[a]=x,D));break;case"PageUp":break;case"PageDown":break;default:return}e.preventDefault(),e.stopPropagation()}},mouseDown(e,a){e.preventDefault();const s=e.target,n=l=>{l.preventDefault();const m=u()?l.clientY:l.clientX;s.focus(),_!==m&&(_=m,q(m,a))};k()&&(M.set({}),s.focus(),document.addEventListener("mousemove",n),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",n)},{once:!0}))},touchStart(e,a){e.preventDefault();const s=n=>{n.preventDefault();const l=u()?n.touches[0].clientY:n.touches[0].clientX;e.target.focus(),_!==l&&(_=l,q(l,a))};k()&&(M.set({}),e.target.focus(),document.addEventListener("touchmove",s),document.addEventListener("touchend",()=>{document.removeEventListener("touchmove",s),document.removeEventListener("touchcancel",s)},{once:!0}),document.addEventListener("touchcancel",()=>{document.removeEventListener("touchmove",s),document.removeEventListener("touchend",s)},{once:!0}))}}};return P}const qe=Be,Ue=t=>{const o=y(t.widget.directives.handleDirective,{item:t.item});return r.jsx("button",{ref:o,children:" "})},Xe=({directive:t,option:o})=>{const d=y(t,{option:o});return r.jsx("div",{ref:d})},Ye=({directive:t,index:o,children:d})=>{const b=y(t,{index:o});return r.jsx("div",{ref:b,children:d})},Ge=t=>{const o=y(t.widget.directives.clickableAreaDirective),d=y(t.widget.directives.minLabelDirective),b=y(t.widget.directives.maxLabelDirective),c=y(t.widget.directives.combinedHandleLabelDisplayDirective);return r.jsxs(r.Fragment,{children:[t.state.progressDisplayOptions.map((h,g)=>r.jsx(Xe,{directive:t.widget.directives.progressDisplayDirective,option:h},g)),r.jsx("div",{ref:o}),t.state.showMinMaxLabels?r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:d,children:r.jsx(L,{slotContent:t.state.slotLabel,props:{value:t.state.min,...t}})}),r.jsx("div",{ref:b,children:r.jsx(L,{slotContent:t.state.slotLabel,props:{value:t.state.max,...t}})})]}):r.jsx(r.Fragment,{}),t.state.showValueLabels&&t.state.combinedLabelDisplay?r.jsx("div",{ref:c,children:t.state.rtl?r.jsxs(r.Fragment,{children:[r.jsx(L,{slotContent:t.state.slotLabel,props:{value:t.state.sortedValues[1],...t}})," - ",r.jsx(L,{slotContent:t.state.slotLabel,props:{value:t.state.sortedValues[0],...t}})]}):r.jsxs(r.Fragment,{children:[r.jsx(L,{slotContent:t.state.slotLabel,props:{value:t.state.sortedValues[0],...t}})," - ",r.jsx(L,{slotContent:t.state.slotLabel,props:{value:t.state.sortedValues[1],...t}})]})}):r.jsx(r.Fragment,{}),t.state.sortedHandles.map((h,g)=>r.jsxs(ke.Fragment,{children:[r.jsx(L,{slotContent:t.state.slotHandle,props:{item:h,...t}}),t.state.showValueLabels&&!t.state.combinedLabelDisplay?r.jsx(Ye,{directive:t.widget.directives.handleLabelDisplayDirective,index:g,children:r.jsx(L,{slotContent:t.state.slotLabel,props:{value:t.state.values[g],...t}})}):r.jsx(r.Fragment,{})]},h.id))]})},Je={slotStructure:Ge,slotHandle:Ue};function it(t){const[o,d]=Oe(qe,t,"slider",{...Je}),b={state:o,widget:Fe(d)},c=y(d.directives.sliderDirective);return r.jsx("div",{ref:c,children:r.jsx(L,{slotContent:o.slotStructure,props:b})})}export{it as S};
