import{ac as n,ai as De,ad as be,ag as we,p as Fe,s as Ie,P as ge,L as Le,e as v,R as he,b as $e,g as ke,c as I,a as Te,t as Z,d as b,u as xe,M as Ne,h as X,r as Ce,q as L,k as x,O as fe}from"./AppCommon-CRrVgjjK.js";import{a as r}from"./actions-DMIFV9qL.js";import{t as ye}from"./class-zI9kEawh.js";import{S as _e}from"./Slot-Do_YzuMi.js";import{c as Se}from"./config-D6r3EYnL.js";import{c as Pe,o as Ae,a as Me,b as Ee}from"./floatingUI-vEzbPOSa.js";import{c as Oe}from"./focustrack-XdHrgh6L.js";import{c as Be}from"./navManager-C2D2dSuT.js";import{w as He,l as Re,B as ze,z as We,s as qe,g as Ue,E as je,k as ve,h as k,c as Y}from"./directive-CKEccryv-CZ-m_LIt.js";import{e as Ge}from"./extendWidget--tzkYf88.js";const Je={id:void 0,ariaLabel:"Select",open:!1,disabled:!1,items:[],filterText:"",loading:!1,selected:[],navSelector:c=>c.querySelectorAll(".au-select-badge,input"),itemIdFn:c=>""+c,onOpenChange:ve,onFilterTextChange:ve,onSelectedChange:ve,allowedPlacements:["bottom-start","top-start","bottom-end","top-end"],className:"",menuClassName:"",menuItemClassName:"",badgeClassName:""};function Qe(c){const[{id$:C,open$:d,filterText$:K,items$:ee,itemIdFn$:T,onOpenChange$:A,onFilterTextChange$:te,onSelectedChange$:se,allowedPlacements$:M,navSelector$:ie,className$:ae,badgeClassName$:E,ariaLabel$:O,menuClassName$:_,...D},N]=He(Je,c),{selected$:w}=D,p=n(()=>C()??Re()),B=ze(K,te),{hasFocus$:oe,directive:ne}=Oe(),u=We(A,[d,oe],([t,e])=>t&&e),y=n(()=>{const t=new Map,e=T();for(const i of w()){const o=e(i);t.set(o,{item:i,id:e(i),selected:!0})}return t}),re=n(()=>[...y().values()]),h=function(){const t=De(0);return be(t,e=>{const{length:i}=F();e!=null&&(i?e<0?e=i-1:e>=i&&(e=0):e=void 0),t.set(e)})}(),H=n(()=>{const t=new Map;if(u()){const e=y(),i=T();for(const o of ee()){const l=i(o);t.set(l,{item:o,id:l,selected:e.has(l)})}}return t}),F=n(()=>u()?[...H().values()]:[]),R=n(()=>{const t=F(),e=h();return t.length&&e!=null?t[e]:void 0}),{directives:{floatingDirective:le,referenceDirective:z},stores:{placement$:W}}=Pe({props:{computePositionOptions:be(n(()=>({middleware:[Ae(5),Me({allowedPlacements:M()}),Ee()]})))}}),{directive:ce,refreshElements:de,focusFirst:pe,focusLast:ue,focusLeft:q,focusRight:$}=Be(),U=n(()=>({keys:{Home:pe,End:ue,ArrowLeft:q,ArrowRight:$},selector:ie()})),m=(t,e)=>{const i=t.target;de(),s.api.unselect(e),i instanceof HTMLElement&&setTimeout(()=>{q({event:t,referenceElement:i})||$({event:t,referenceElement:i})}),t.preventDefault()},j=k(()=>({attributes:{role:"combobox","aria-haspopup":"listbox","aria-expanded":n(()=>`${u()}`),"aria-controls":n(()=>`${p()}-menu`)}})),G=k(t=>({attributes:{tabindex:-1,class:E},classNames:{"au-select-badge":!0},events:{keydown:e=>{let i=!1;switch(e.key){case"Backspace":case"Delete":{m(e,t().item),i=!0;break}}i&&e.preventDefault()}}})),J=k(()=>({attributes:{role:"listbox",id:n(()=>`${p()}-menu`),"data-popper-placement":W,class:_},events:{mousedown:t=>t.preventDefault()}})),Q=k(t=>({attributes:{role:"option","aria-selected":n(()=>`${t().selected}`),style:"cursor: pointer"},classNames:{"au-select-item":!0,selected:n(()=>t().selected)},events:{click:()=>s.api.toggleItem(t().item)}})),me=k(()=>({attributes:{id:p(),type:"text","aria-label":O(),"aria-autocomplete":"list",autocorrect:"off",autocapitalize:"none",autocomplete:"off"},classNames:{"au-select-input":!0},events:{input:t=>{const e=t.target.value;we(()=>{u.set(e!=null&&e!==""),B.set(e)})},keydown:({ctrlKey:t,key:e,preventDefault:i})=>{let o=!0;switch(e){case"ArrowDown":{u()?t?s.api.highlightLast():s.api.highlightNext():(s.api.open(),s.api.highlightFirst());break}case"ArrowUp":t?s.api.highlightFirst():s.api.highlightPrevious();break;case"Enter":{const l=R();l&&s.api.toggleItem(l.item);break}case"Escape":u.set(!1);break;default:o=!1}o&&i()}}})),a=k(t=>({events:{click:e=>{m(e,t().item)}}})),s={...qe({id$:p,visibleItems$:F,highlighted$:R,open$:u,selectedContexts$:re,filterText$:B,placement$:W,className$:ae,badgeClassName$:E,ariaLabel$:O,menuClassName$:_,...D}),patch:N,api:{clear(){w.set([])},select(t){s.api.toggleItem(t,!0)},unselect(t){s.api.toggleItem(t,!1)},toggleItem(t,e){const i=T(),o=i(t),g=y().has(o);e==null&&(e=!g),!(e&&!H().has(o)||!e&&!g)&&w.update(f=>{var V;if(f=[...f],e&&!g)f.push(t);else if(!e&&g){const S=f.findIndex(P=>i(P)===o);f.splice(S,1)}return(V=se())==null||V(f),f})},clearText(){},highlight(t){const e=F().findIndex(i=>i.item===t);h.set(e===-1?void 0:e)},highlightFirst(){h.set(0)},highlightPrevious(){h.update(t=>t!=null?t-1:-1)},highlightNext(){h.update(t=>t!=null?t+1:1/0)},highlightLast(){h.set(-1)},open:()=>s.api.toggle(!0),close:()=>s.api.toggle(!1),toggle(t){u.update(e=>t??!e)}},directives:{hasFocusDirective:ne,floatingDirective:le,referenceDirective:z,inputContainerDirective:Ue(je(ce,U),j),badgeAttributesDirective:G,menuAttributesDirective:J,itemAttributesDirective:Q,inputDirective:me,badgeCloseButtonDirective:a},actions:{}};return s}const Ve={badgeLabel:({itemContext:c})=>c.item,itemLabel:({itemContext:c})=>c.item},Xe=Ge(Qe,Ve,{}),Ye=Xe;var Ze=Z("<div><!></div>"),Ke=Z("<li><!></li>"),et=Z("<ul></ul>"),tt=Z("<div><div><!> <input></div> <!></div>");function ut(c,C){Fe(C,!0);const d=Ie(),K=()=>b(H,"$className$",d),ee=()=>b(u,"$selectedContexts$",d),T=()=>b(y,"$badgeLabel$",d),A=()=>b(R,"$state$",d),te=()=>b(F,"$filterText$",d),se=()=>b(ne,"$open$",d),M=()=>b(h,"$visibleItems$",d),ie=()=>b(oe,"$highlighted$",d),ae=()=>b(re,"$itemLabel$",d),E=(a,s)=>{let t=()=>s==null?void 0:s().itemContext;var e=xe();v(()=>Ce(e,t().item)),I(a,e)},O=(a,s)=>{let t=()=>s==null?void 0:s().itemContext;var e=xe();v(()=>Ce(e,t().item)),I(a,e)};let _=ge(C,"open",15,!1),D=ge(C,"filterText",15),N=ge(C,"selected",15),w=Ne(C,["$$slots","$$events","$$legacy","open","filterText","selected"]);const p=Se({factory:Ye,widgetName:"select",props:{...w,open:_(),filterText:D(),selected:N()},defaultConfig:{badgeLabel:E,itemLabel:O},events:{onOpenChange(a){_(a)},onSelectedChange:a=>{N(a)},onFilterTextChange:a=>{D(a)}}}),B=p.api,{stores:{highlighted$:oe,open$:ne,selectedContexts$:u,badgeLabel$:y,itemLabel$:re,visibleItems$:h,className$:H,filterText$:F},state$:R,directives:{floatingDirective:le,hasFocusDirective:z,referenceDirective:W,inputContainerDirective:ce,badgeAttributesDirective:de,menuAttributesDirective:pe,itemAttributesDirective:ue,inputDirective:q}}=p;Le(()=>p.patchChangedProps({...w,open:_(),filterText:D(),selected:N()}));var $=tt();let U;v(()=>U=L($,U,{}));var m=X($);let j;v(()=>j=L(m,j,{}));var G=X(m);he(G,1,ee,a=>a.id,(a,s)=>{var t=Ze();let e;v(()=>e=L(t,e,{}));var i=X(t),o=fe(()=>({state:A(),widget:p,itemContext:x(s)}));_e(i,{get content(){return T()},get props(){return x(o)}}),r(t,(l,g)=>de(l,g),()=>x(s)),I(a,t)});var J=$e(G,2);let Q;v(()=>Q=L(J,Q,{value:te()}));var me=$e(m,2);return ke(me,()=>se()&&M().length>0,a=>{var s=et();let t;v(()=>t=L(s,t,{})),he(s,5,M,e=>e.id,(e,i)=>{var o=Ke();const l=fe(()=>x(i)===ie());let g;v(()=>g=L(o,g,{}));var f=X(o),V=fe(()=>({state:A(),widget:p,itemContext:x(i)}));_e(f,{get content(){return ae()},get props(){return x(V)}}),v(()=>ye(o,"text-bg-primary",x(l))),r(o,(S,P)=>Y(S,P),()=>"dropdown-item position-relative"),r(o,(S,P)=>ue(S,P),()=>x(i)),I(e,o)}),r(s,e=>z(e)),r(s,e=>le(e)),r(s,e=>pe(e)),r(s,(e,i)=>Y(e,i),()=>"dropdown-menu show"),I(a,s)}),r(J,a=>q(a)),r(m,a=>z(a)),r(m,a=>ce(a)),r(m,(a,s)=>Y(a,s),()=>"d-flex align-items-center flex-wrap gap-1"),r($,a=>W(a)),r($,(a,s)=>Y(a,s),()=>"au-select dropdown border border-1 p-1 mb-3 d-block "+K()),I(c,$),Te({api:B})}export{ut as S};
