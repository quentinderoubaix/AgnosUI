import{j as r,R as we}from"./index-Dax5Jokt.js";import{c as o,w as ye,n as je}from"./func-BRtNsj1u.js";import{e as z,m as Ve,u as B}from"./directive-BmjLQEqc.js";import{w as Se,a as Me,s as Pe,t as Re}from"./stores-m8eykaCI.js";import{g as K,e as Y,h as Ee,t as D,a as T}from"./writables-BNxSaSLV.js";import{c as Oe}from"./resizeObserver-BDrmKy96.js";import{u as ke,S as v}from"./config-CNDNVnKa.js";const He=/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/;function W(e){var d;const n=(""+e).match(He);return Math.max(0,(((d=n[1])==null?void 0:d.length)??0)-(+n[2]||0))}const A={min:0,max:100,stepSize:1,readonly:!1,disabled:!1,vertical:!1,className:"",ariaLabelHandle:e=>""+e,ariaValueText:e=>""+e,onValuesChange:je,values:[0],showValueLabels:!0,showMinMaxLabels:!0,rtl:!1,slotStructure:void 0,slotLabel:({value:e})=>""+e,slotHandle:void 0},Ne={min:Y,max:Y,stepSize:Ee(0,1/0,{strict:!0}),readonly:D,disabled:D,vertical:D,ariaLabelHandle:T,ariaValueText:T,onValuesChange:T,values:K,showValueLabels:D,showMinMaxLabels:D,rtl:D},Fe=(e,n,d,u,c)=>{const w=Math.pow(10,c);if(e>=d)return d;if(e<=n)return n;const S=Math.floor((e-n)*w/u);return+(((e-n)*w%u<u/2?S:S+1)*u/w+n).toFixed(c)},R=(e,n,d,u)=>{n.update(c=>(c=[...c],c[e]=c[e]+d*u,c))},E=(e,n,d)=>e&&n?d?1:-1:e&&!n?-1:!e&&n?d?-1:1:!e&&!n?-1:1;function _e(e){const[{min$:n,max$:d,stepSize$:u,rtl$:c,values$:w,ariaLabelHandle$:S,ariaValueText$:G,onValuesChange$:J,showValueLabels$:O,showMinMaxLabels$:k,...q},Q]=Se(A,e,Ne),{vertical$:f,disabled$:Z,readonly$:I}=q;let M=-1;const g=o(()=>{const a=n(),t=d();return a===t?A.min:Math.min(a,t)}),$=o(()=>{const a=n(),t=d();return a===t?A.max:Math.max(a,t)}),U=o(()=>Math.max(W(u()),W(g()),W($()))),x=o(()=>u()*Math.pow(10,U())),b=Me(w,J,a=>{const t=g(),s=$(),l=x(),i=U();return a.map(m=>Fe(m,t,s,l,i))},K.equal),{directive:C,element$:ee}=z(),{directive:ae,element$:te}=z(),{directive:se,element$:ie}=z(),{directive:re,dimensions$:H}=Oe(),y=ye({}),P=o(()=>{var a;return H(),y(),((a=ee())==null?void 0:a.getBoundingClientRect())??{}},{equal:Object.is}),le=o(()=>{var a;return H(),y(),((a=te())==null?void 0:a.getBoundingClientRect())??{}},{equal:(a,t)=>Object.is(a,t)}),ne=o(()=>{var a;return H(),y(),((a=ie())==null?void 0:a.getBoundingClientRect())??{}},{equal:(a,t)=>Object.is(a,t)}),ce=o(()=>f()?P().top:P().left),N=o(()=>f()?P().height:P().width),X=o(()=>[...b()].sort((a,t)=>a-t)),ue=o(()=>b().map((a,t)=>({id:t,value:a})).sort((a,t)=>a.value-t.value)),oe=o(()=>{const a=S(),t=G();return ue().map((s,l)=>({...s,ariaLabel:a(s.value,l,s.id),ariaValueText:t(s.value,l,s.id)}))}),L=o(()=>b().map(a=>Le(a))),F=o(()=>[...L()].sort((a,t)=>a-t)),de=o(()=>le().width/N()*100),me=o(()=>ne().width/N()*100),be=o(()=>{if(k()){if(!O())return!0}else return!1;const a=de();return c()?!L().some(t=>100-t>100-a-1):!L().some(t=>t<a+1)}),fe=o(()=>{if(k()){if(!O())return!0}else return!1;const a=me();return c()?!L().some(t=>100-t<a+1):!L().some(t=>t>100-a-1)}),he=o(()=>{const a=b();return a.length==2&&Math.abs(a[0]-a[1])<10}),j=o(()=>!Z()&&!I()),pe=o(()=>{const a=F(),t=(a[0]+a[1])/2;return f()||a.length!=2?0:c()?100-t:t}),ve=o(()=>{const a=F(),t=100-(a[0]+a[1])/2;return f()&&a.length==2?c()?100-t:t:0}),ge=o(()=>{const a=f(),t=c();return L().map((s,l)=>({left:t?a?null:100-s:a?null:s,top:t?a?s:null:a?100-s:null}))}),$e=o(()=>{const a=f(),t=F(),s=c();return t.length===1?[{left:a||s?null:0,right:a?null:s?0:null,bottom:a?s?null:0:null,top:a&&s?0:null,width:a?100:t[0],height:a?t[0]:100}]:t.map((l,i,m)=>({left:a||s?null:l,right:a?null:s?m[i]:null,bottom:a?s?null:l:null,top:a&&s?m[i]:null,width:a?100:i===m.length-1?l:m[i+1]-l,height:a?i===m.length-1?l:m[i+1]-l:100})).slice(0,t.length-1)}),Le=a=>{const t=g();return(a-t)*100/($()-t)},De=a=>{const t=b();if(t.length===1)return 0;const s=X(),l=s.find(h=>h>a*100),i=l?s.indexOf(l):s.length-1,m=s[i-1]+(s[i]-s[i-1])/2,V=s[a*100<=m?i-1:i];return t.indexOf(V)},_=(a,t)=>{if(j()){const s=N(),l=ce();let i=f()?(s-a+l)/s:(a-l)/s;i=c()?1-i:i;const m=t??De(i),V=i*($()-g())+g();b.update(h=>(h=[...h],h[m]=V,h))}};return{...Pe({min$:g,max$:$,stepSize$:u,values$:b,sortedValues$:X,sortedHandles$:oe,minValueLabelDisplay$:be,maxValueLabelDisplay$:fe,combinedLabelDisplay$:he,isInteractable$:j,combinedLabelPositionLeft$:pe,combinedLabelPositionTop$:ve,progressDisplayOptions$:$e,handleDisplayOptions$:ge,showValueLabels$:O,showMinMaxLabels$:k,rtl$:c,...q}),patch:Q,api:{},directives:{sliderDirective:Ve(C,re),minLabelDirective:ae,maxLabelDirective:se},actions:{click(a){_(f()?a.clientY:a.clientX)},keydown(a,t){const{key:s}=a,l=c(),i=u(),m=g(),V=$(),h=f();if(j()){switch(s){case"ArrowDown":R(t,b,i,E(h,l,!0));break;case"ArrowLeft":R(t,b,i,E(h,l,!1));break;case"ArrowUp":R(t,b,i,-1*E(h,l,!0));break;case"ArrowRight":R(t,b,i,-1*E(h,l,!1));break;case"Home":b.update(p=>(p=[...p],p[t]=m,p));break;case"End":b.update(p=>(p=[...p],p[t]=V,p));break;case"PageUp":break;case"PageDown":break;default:return}a.preventDefault(),a.stopPropagation()}},mouseDown(a,t){a.preventDefault();const s=a.target,l=i=>{i.preventDefault();const m=f()?i.clientY:i.clientX;s.focus(),M!==m&&(M=m,_(m,t))};j()&&(y.set({}),s.focus(),document.addEventListener("mousemove",l),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",l)},{once:!0}))},touchStart(a,t){a.preventDefault();const s=l=>{l.preventDefault();const i=f()?l.touches[0].clientY:l.touches[0].clientX;a.target.focus(),M!==i&&(M=i,_(i,t))};j()&&(y.set({}),a.target.focus(),document.addEventListener("touchmove",s),document.addEventListener("touchend",()=>{document.removeEventListener("touchmove",s),document.removeEventListener("touchcancel",s)},{once:!0}),document.addEventListener("touchcancel",()=>{document.removeEventListener("touchmove",s),document.removeEventListener("touchend",s)},{once:!0}))}}}}const ze=_e,Te=e=>r.jsx("button",{className:`au-slider-handle ${e.state.vertical?"au-slider-handle-vertical":"au-slider-handle-horizontal"}`,role:"slider","aria-valuemin":e.state.min,"aria-valuemax":e.state.max,"aria-valuenow":e.item.value,"aria-valuetext":e.item.ariaValueText,"aria-label":e.item.ariaLabel,"aria-readonly":e.state.readonly?"true":void 0,"aria-disabled":e.state.disabled?"true":void 0,"aria-orientation":e.state.vertical?"vertical":void 0,disabled:e.state.disabled,style:{top:`${e.state.handleDisplayOptions[e.item.id].top}%`,left:`${e.state.handleDisplayOptions[e.item.id].left}%`},onKeyDown:n=>e.widget.actions.keydown(n.nativeEvent,e.item.id),onMouseDown:n=>e.widget.actions.mouseDown(n.nativeEvent,e.item.id),onTouchStart:n=>e.widget.actions.touchStart(n.nativeEvent,e.item.id),children:" "}),We=e=>{const n=B(e.widget.directives.minLabelDirective),d=B(e.widget.directives.maxLabelDirective);return r.jsxs(r.Fragment,{children:[e.state.progressDisplayOptions.map((u,c)=>r.jsx("div",{className:"au-slider-progress",style:{left:`${u.left}%`,right:`${u.right}%`,bottom:`${u.bottom}%`,top:`${u.top}%`,width:`${u.width}%`,height:`${u.height}%`}},c)),r.jsx("div",{className:e.state.vertical?"au-slider-clickable-area-vertical":"au-slider-clickable-area",onClick:u=>e.widget.actions.click(u)}),e.state.showMinMaxLabels?r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:n,className:`${e.state.rtl?"au-slider-rtl":""} ${e.state.vertical?"au-slider-label-vertical au-slider-label-vertical-min":"au-slider-label au-slider-label-min"} ${e.state.minValueLabelDisplay?"":" invisible"}
						`,children:r.jsx(v,{slotContent:e.state.slotLabel,props:{value:e.state.min,...e}})}),r.jsx("div",{ref:d,className:`${e.state.rtl?"au-slider-rtl":""} ${e.state.vertical?"au-slider-label-vertical au-slider-label-vertical-max":"au-slider-label au-slider-label-max"} ${e.state.maxValueLabelDisplay?"":" invisible"}`,children:r.jsx(v,{slotContent:e.state.slotLabel,props:{value:e.state.max,...e}})})]}):r.jsx(r.Fragment,{}),e.state.showValueLabels&&e.state.combinedLabelDisplay?r.jsx("div",{className:e.state.vertical?"au-slider-label-vertical au-slider-label-vertical-now":"au-slider-label au-slider-label-now",style:{left:`${e.state.combinedLabelPositionLeft}%`,top:`${e.state.combinedLabelPositionTop}%`},children:e.state.rtl?r.jsxs(r.Fragment,{children:[r.jsx(v,{slotContent:e.state.slotLabel,props:{value:e.state.sortedValues[1],...e}})," - ",r.jsx(v,{slotContent:e.state.slotLabel,props:{value:e.state.sortedValues[0],...e}})]}):r.jsxs(r.Fragment,{children:[r.jsx(v,{slotContent:e.state.slotLabel,props:{value:e.state.sortedValues[0],...e}})," - ",r.jsx(v,{slotContent:e.state.slotLabel,props:{value:e.state.sortedValues[1],...e}})]})}):r.jsx(r.Fragment,{}),e.state.sortedHandles.map((u,c)=>r.jsxs(we.Fragment,{children:[r.jsx(v,{slotContent:e.state.slotHandle,props:{item:u,...e}}),e.state.showValueLabels&&!e.state.combinedLabelDisplay?r.jsx("div",{className:e.state.vertical?"au-slider-label-vertical au-slider-label-vertical-now":"au-slider-label au-slider-label-now",style:{left:`${e.state.handleDisplayOptions[c].left}%`,top:`${e.state.handleDisplayOptions[c].top}%`},children:r.jsx(v,{slotContent:e.state.slotLabel,props:{value:e.state.values[c],...e}})}):r.jsx(r.Fragment,{})]},u.id))]})},Ae={slotStructure:We,slotHandle:Te};function Je(e){const[n,d]=ke(ze,e,"slider",{...Ae}),u={state:n,widget:Re(d)},c=B(d.directives.sliderDirective);return r.jsx("div",{ref:c,className:`au-slider ${e.vertical?"au-slider-vertical":"au-slider-horizontal"} ${e.className?e.className:""} ${e.disabled?" disabled":""}`,"aria-disabled":e.disabled?"true":void 0,children:r.jsx(v,{slotContent:n.slotStructure,props:u})})}export{Je as S};