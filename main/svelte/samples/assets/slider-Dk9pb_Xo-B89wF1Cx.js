import{E as a,F as Pe}from"./AppCommon-Cd2V92GK.js";import{w as ke,C as _e,D as q,s as Ee,a as W,c as D,b as Re}from"./directive-DwbtadSh-BZ7DGJEn.js";import{g as te,e as ee,h as Se,t as $,a as U}from"./writables-DoU_XYTX-CyXwBtTT.js";import{c as Ne}from"./resizeObserver-B6pvamOu.js";const ze=/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/;function X(s){var c;const d=(""+s).match(ze);return Math.max(0,(((c=d[1])==null?void 0:c.length)??0)-(+d[2]||0))}const Y={min:0,max:100,stepSize:1,readonly:!1,disabled:!1,vertical:!1,className:"",ariaLabelHandle:s=>""+s,ariaValueText:s=>""+s,onValuesChange:Re,values:[0],showValueLabels:!0,showMinMaxLabels:!0,rtl:!1,slotStructure:void 0,slotLabel:({value:s})=>""+s,slotHandle:void 0},He={min:ee,max:ee,stepSize:Se(0,1/0,{strict:!0}),readonly:$,disabled:$,vertical:$,ariaLabelHandle:U,ariaValueText:U,onValuesChange:U,values:te,showValueLabels:$,showMinMaxLabels:$,rtl:$},Oe=(s,c,d,v,o)=>{const y=Math.pow(10,o);if(s>=d)return d;if(s<=c)return c;const E=Math.floor((s-c)*y/v);return+(((s-c)*y%v<v/2?E:E+1)*v/y+c).toFixed(o)},N=(s,c,d,v)=>{c.update(o=>(o=[...o],o[s]=o[s]+d*v,o))},z=(s,c,d)=>s&&c?d?1:-1:s&&!c?-1:!s&&c?d?-1:1:!s&&!c?-1:1,b=s=>s!=null?`${s}%`:"";function je(s){const[{min$:c,max$:d,stepSize$:v,rtl$:o,values$:y,ariaLabelHandle$:E,ariaValueText$:ae,onValuesChange$:ie,showValueLabels$:H,showMinMaxLabels$:O,...T},le]=ke(Y,s,He),{vertical$:n,disabled$:V,readonly$:C}=T;let R=-1;const g=a(()=>{const e=c(),t=d();return e===t?Y.min:Math.min(e,t)}),L=a(()=>{const e=c(),t=d();return e===t?Y.max:Math.max(e,t)}),G=a(()=>Math.max(X(v()),X(g()),X(L()))),re=a(()=>v()*Math.pow(10,G())),m=_e(y,ie,e=>{const t=g(),i=L(),r=re(),l=G();return e.map(u=>Oe(u,t,i,r,l))},te.equal),{directive:se,element$:ne}=q(),{directive:oe,element$:ce}=q(),{directive:ue,element$:de}=q(),{directive:me,dimensions$:A}=Ne(),M=Pe({}),S=a(()=>{var e;return A(),M(),((e=ne())==null?void 0:e.getBoundingClientRect())??{}},{equal:Object.is}),be=a(()=>{var e;return A(),M(),((e=ce())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),ve=a(()=>{var e;return A(),M(),((e=de())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),fe=a(()=>n()?S().top:S().left),B=a(()=>n()?S().height:S().width),J=a(()=>[...m()].sort((e,t)=>e-t)),pe=a(()=>m().map((e,t)=>({id:t,value:e})).sort((e,t)=>e.value-t.value)),he=a(()=>{const e=E(),t=ae();return pe().map((i,r)=>({...i,ariaLabel:e(i.value,r,i.id),ariaValueText:t(i.value,r,i.id)}))}),w=a(()=>m().map(e=>$e(e))),F=a(()=>[...w()].sort((e,t)=>e-t)),ge=a(()=>be().width/B()*100),De=a(()=>ve().width/B()*100),K=a(()=>{if(O()){if(!H())return!0}else return!1;const e=ge();return o()?!w().some(t=>100-t>100-e-1):!w().some(t=>t<e+1)}),Q=a(()=>{if(O()){if(!H())return!0}else return!1;const e=De();return o()?!w().some(t=>100-t<e+1):!w().some(t=>t>100-e-1)}),Le=a(()=>{const e=m();return e.length==2&&Math.abs(e[0]-e[1])<10}),x=a(()=>!V()&&!C()),Z=a(()=>{const e=F(),t=(e[0]+e[1])/2;return n()||e.length!=2?0:o()?100-t:t}),I=a(()=>{const e=F(),t=100-(e[0]+e[1])/2;return n()&&e.length==2?o()?100-t:t:0}),P=a(()=>{const e=n(),t=o();return w().map((i,r)=>({left:t?e?null:100-i:e?null:i,top:t?e?i:null:e?100-i:null}))}),we=a(()=>{const e=n(),t=F(),i=o();return t.length===1?[{left:e||i?null:0,right:e?null:i?0:null,bottom:e?i?null:0:null,top:e&&i?0:null,width:e?100:t[0],height:e?t[0]:100}]:t.map((r,l,u)=>({left:e||i?null:r,right:e?null:i?u[l]:null,bottom:e?i?null:r:null,top:e&&i?u[l]:null,width:e?100:l===u.length-1?r:u[l+1]-r,height:e?l===u.length-1?r:u[l+1]-r:100})).slice(0,t.length-1)}),$e=e=>{const t=g();return(e-t)*100/(L()-t)},ye=e=>{const t=m();if(t.length===1)return 0;const i=J(),r=i.find(p=>p>e*100),l=r?i.indexOf(r):i.length-1,u=i[l-1]+(i[l]-i[l-1])/2,_=i[e*100<=u?l-1:l];return t.indexOf(_)},j=(e,t)=>{if(x()){const i=B(),r=fe();let l=n()?(i-e+r)/i:(e-r)/i;l=o()?1-l:l;const u=t??ye(l),_=l*(L()-g())+g();m.update(p=>(p=[...p],p[u]=_,p))}},f=a(()=>!n()),Ve=D(()=>({attributes:{"aria-disabled":a(()=>V()?"true":void 0),class:T.className$},classNames:{"au-slider":!0,"au-slider-vertical":n,"au-slider-horizontal":f,disabled:V}})),Me=D(()=>({classNames:{"au-slider-label-vertical":n,"au-slider-label-vertical-min":n,"au-slider-label":f,"au-slider-label-min":f,"au-slider-rtl":o,invisible:a(()=>!K())}})),xe=D(()=>({classNames:{"au-slider-label-vertical":n,"au-slider-label-vertical-max":n,"au-slider-label":f,"au-slider-label-max":f,"au-slider-rtl":o,invisible:a(()=>!Q())}})),k={...Ee({min$:g,max$:L,stepSize$:v,values$:m,sortedValues$:J,sortedHandles$:he,minValueLabelDisplay$:K,maxValueLabelDisplay$:Q,combinedLabelDisplay$:Le,interactive$:x,combinedLabelPositionLeft$:Z,combinedLabelPositionTop$:I,progressDisplayOptions$:we,handleDisplayOptions$:P,showValueLabels$:H,showMinMaxLabels$:O,rtl$:o,...T}),patch:le,api:{},directives:{sliderDirective:W(se,me,Ve),progressDisplayDirective:D(e=>({styles:{left:a(()=>b(e().option.left)),right:a(()=>b(e().option.right)),top:a(()=>b(e().option.top)),bottom:a(()=>b(e().option.bottom)),width:a(()=>b(e().option.width)),height:a(()=>b(e().option.height))},classNames:{"au-slider-progress":!0}})),clickableAreaDirective:D(()=>({events:{click:e=>k.actions.click(e)},classNames:{"au-slider-clickable-area":f,"au-slider-clickable-area-vertical":n}})),handleDirective:D(e=>({events:{keydown:t=>k.actions.keydown(t,e().item.id),mousedown:t=>k.actions.mouseDown(t,e().item.id),touchstart:t=>k.actions.touchStart(t,e().item.id)},attributes:{role:"slider","aria-valuemin":g,"aria-valuemax":L,"aria-valuenow":a(()=>e().item.value),"aria-valuetext":a(()=>e().item.ariaValueText),"aria-label":a(()=>e().item.ariaLabel),"aria-orientation":a(()=>n()?"vertical":void 0),"aria-disabled":a(()=>V()?"true":void 0),disabled:V,"aria-readonly":a(()=>C()?"true":void 0)},styles:{left:a(()=>b(P()[e().item.id].left)),top:a(()=>b(P()[e().item.id].top))},classNames:{"au-slider-handle":!0,"au-slider-handle-vertical":n,"au-slider-handle-horizontal":f}})),minLabelDirective:W(oe,Me),maxLabelDirective:W(ue,xe),combinedHandleLabelDisplayDirective:D(()=>({classNames:{"au-slider-label-vertical":n,"au-slider-label-vertical-now":n,"au-slider-label":f,"au-slider-label-now":f},styles:{left:a(()=>b(Z())),top:a(()=>b(I()))}})),handleLabelDisplayDirective:D(e=>({classNames:{"au-slider-label-vertical":n,"au-slider-label-vertical-now":n,"au-slider-label":f,"au-slider-label-now":f},styles:{left:a(()=>b(P()[e().index].left)),top:a(()=>b(P()[e().index].top))}}))},actions:{click(e){j(n()?e.clientY:e.clientX)},keydown(e,t){const{key:i}=e,r=o(),l=v(),u=g(),_=L(),p=n();if(x()){switch(i){case"ArrowDown":N(t,m,l,z(p,r,!0));break;case"ArrowLeft":N(t,m,l,z(p,r,!1));break;case"ArrowUp":N(t,m,l,-1*z(p,r,!0));break;case"ArrowRight":N(t,m,l,-1*z(p,r,!1));break;case"Home":m.update(h=>(h=[...h],h[t]=u,h));break;case"End":m.update(h=>(h=[...h],h[t]=_,h));break;case"PageUp":break;case"PageDown":break;default:return}e.preventDefault(),e.stopPropagation()}},mouseDown(e,t){e.preventDefault();const i=e.target,r=l=>{l.preventDefault();const u=n()?l.clientY:l.clientX;i.focus(),R!==u&&(R=u,j(u,t))};x()&&(M.set({}),i.focus(),document.addEventListener("mousemove",r),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",r)},{once:!0}))},touchStart(e,t){e.preventDefault();const i=r=>{r.preventDefault();const l=n()?r.touches[0].clientY:r.touches[0].clientX;e.target.focus(),R!==l&&(R=l,j(l,t))};x()&&(M.set({}),e.target.focus(),document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",()=>{document.removeEventListener("touchmove",i),document.removeEventListener("touchcancel",i)},{once:!0}),document.addEventListener("touchcancel",()=>{document.removeEventListener("touchmove",i),document.removeEventListener("touchend",i)},{once:!0}))}}};return k}export{je as c};