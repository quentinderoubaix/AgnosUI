import{F as Me,G as je,H as K,I as Se,S as se,i as oe,s as U,J as S,e as G,a as p,b as k,y as ne,K as w,L as v,M as D,t as _,d as $,f as N,h as Q,C as y,N as R,O as we,k as Fe,p as X,z as Y,B as Z,c as P,q as re,P as me,r as ve,m as E,u as We,v as qe,D as F,g as M,Q as J,E as L,o as ze}from"./AppCommon-BOxWgjna.js";import{w as De,s as Ve,m as Ke,n as Ge,t as Je}from"./stores-B87gTu8W.js";import{c as Le}from"./baseTransitions--DQkCTQy.js";import{c as Qe}from"./collapse-BQC9zBIz-Dv3w3bTJ.js";import{n as z}from"./func-DR0n-ShK-fOTgS_tI.js";import{t as O,a as A,b as H}from"./writables-DoU_XYTX-BHEb_Y4I.js";import{r as Re,d as Ue,b as Xe}from"./directive-D6udPRHE.js";import{g as Ye}from"./dom-B9Oy3i4s-Hs1W5kAC.js";import{c as ye}from"./config-DyhhiuGV.js";import{S as ae}from"./Slot-DkSUQ1p6.js";const Ae=Symbol("accordion-api");function Ze(t){Me(Ae,t)}function xe(){return je(Ae)}function et(t,e,o){let s;return e.length==2?(o=o??e[0],s=e.find(i=>i!==o)):e.length>2&&(s=e[0]),s&&t.forEach(i=>{i.state$().itemId!==s&&i.state$().itemVisible&&i.patch({itemVisible:!1})}),t}function te(t,e){return t.find(o=>o.state$().itemId===e)}const h={closeOthers:!1,onShown:z,onHidden:z,className:"",itemId:"",itemDestroyOnHide:!0,itemDisabled:!1,itemVisible:!1,itemAnimated:!0,itemTransition:Qe,itemHeadingTag:"",onItemShown:z,onItemHidden:z,onItemVisibleChange:z,slotItemStructure:void 0,slotItemBody:void 0,slotItemHeader:void 0,itemClass:"",itemHeaderClass:"",itemButtonClass:"",itemBodyContainerClass:"",itemBodyClass:""},Te={itemId:h.itemId,itemDestroyOnHide:h.itemDestroyOnHide,itemDisabled:h.itemDisabled,itemVisible:h.itemVisible,itemAnimated:h.itemAnimated,itemTransition:h.itemTransition,onItemShown:h.onItemShown,onItemHidden:h.onItemHidden,onItemVisibleChange:h.onItemVisibleChange,slotItemStructure:h.slotItemStructure,slotItemBody:h.slotItemBody,slotItemHeader:h.slotItemHeader,itemClass:h.itemClass,itemHeaderClass:h.itemHeaderClass,itemButtonClass:h.itemButtonClass,itemBodyContainerClass:h.itemBodyContainerClass,itemBodyClass:h.itemBodyClass,itemHeadingTag:h.itemHeadingTag},ce=Object.keys(Te),tt={closeOthers:O,onShown:A,onHidden:A,itemId:H,itemDestroyOnHide:O,itemDisabled:O,itemVisible:O,itemAnimated:O,itemTransition:A,onItemShown:A,onItemHidden:A,onItemVisibleChange:A,itemClass:H,itemHeaderClass:H,itemButtonClass:H,itemBodyContainerClass:H,itemBodyClass:H,itemHeadingTag:H},it={itemId:H,itemDestroyOnHide:O,itemDisabled:O,itemVisible:O,itemAnimated:O,itemTransition:A,onItemShown:A,onItemHidden:A,onItemVisibleChange:A,itemClass:H,itemHeaderClass:H,itemButtonClass:H,itemBodyContainerClass:H,itemBodyClass:H,itemHeadingTag:H};function st(t,e,o){const[{itemAnimated$:s,itemTransition$:i,itemDestroyOnHide$:n,onItemShown$:c,onItemHidden$:a,onItemVisibleChange$:r,itemVisible$:l,itemId$:m,itemDisabled$:d,...f},V]=De(Te,o,it),u=Se(!1),g=K(()=>Ye()),B=K(()=>m()||g()),W=K(()=>n()===!1||!q.state$().hidden),q=Le({props:{transition:i,visible:l,onVisibleChange:r,animated:s,animatedOnInit:!1,initDone:u,onHidden:()=>{e()(B()),a()()},onShown:()=>{t()(B()),c()()}}});return{...Ve({itemVisible$:l,itemId$:B,shouldBeInDOM$:W,itemDisabled$:d,...f}),patch:V,actions:{click:()=>{d()||l.update(j=>!j)}},api:{initDone:()=>{u.set(!0)},collapse:()=>{l.set(!1)},expand:()=>{l.set(!0)},toggle:()=>{l.update(j=>!j)}},directives:{collapseDirective:Xe(q.directives.directive),accordionItemDirective:z}}}function ot(t){const[{closeOthers$:e,onShown$:o,onHidden$:s,itemId$:i,itemAnimated$:n,itemClass$:c,itemDisabled$:a,itemVisible$:r,itemTransition$:l,itemDestroyOnHide$:m,itemBodyClass$:d,itemButtonClass$:f,itemBodyContainerClass$:V,itemHeaderClass$:u,itemHeadingTag$:g,onItemVisibleChange$:B,onItemHidden$:W,onItemShown$:q,slotItemStructure$:j,slotItemBody$:x,slotItemHeader$:I,...Oe},ke]=De(h,t,tt),Ne={itemId:i,itemClass:c,itemAnimated:n,itemDisabled:a,itemVisible:r,itemTransition:l,itemDestroyOnHide:m,itemBodyClass:d,itemButtonClass:f,itemBodyContainerClass:V,itemHeaderClass:u,itemHeadingTag:g,onItemVisibleChange:B,onItemHidden:W,onItemShown:q,slotItemStructure:j,slotItemBody:x,slotItemHeader:I},T=Re(),ee=K(()=>{const b=[];return T().forEach(C=>{C.state$().itemVisible&&b.push(C.state$().itemId)}),b}),le=Se(ee()[0]),Pe=K(()=>{e()&&(et(T(),ee(),le()),le.set(ee()[0]))}),Ee=K(()=>{Pe()});return{...Ve({itemsWidget$:T,...Oe}),patch:ke,actions:{},api:{expand:b=>{var C;(C=te(T(),b))==null||C.api.expand()},collapse:b=>{var C;(C=te(T(),b))==null||C.api.collapse()},toggle:b=>{var C;(C=te(T(),b))==null||C.api.toggle()},expandAll:()=>{T().forEach(b=>b.api.expand())},collapseAll:()=>{T().forEach(b=>b.api.collapse())},registerItem:b=>{const C=st(o,s,{config:Ke(ce,Ge(ce,b==null?void 0:b.config),Ne),props:b==null?void 0:b.props});return C.directives.accordionItemDirective=()=>({destroy:T.register(C)}),C}},directives:{accordionDirective:Ue(Ee)}}}const nt=ot;function at(t){let e,o,s,i,n;const c=t[6].default,a=S(c,t,t[5],null);return{c(){e=G("div"),a&&a.c(),p(e,"class",o="accordion "+t[0])},m(r,l){k(r,e,l),a&&a.m(e,null),s=!0,i||(n=ne(t[1].call(null,e)),i=!0)},p(r,[l]){a&&a.p&&(!s||l&32)&&w(a,c,r,r[5],s?D(c,r[5],l,null):v(r[5]),null),(!s||l&1&&o!==(o="accordion "+r[0]))&&p(e,"class",o)},i(r){s||(_(a,r),s=!0)},o(r){$(a,r),s=!1},d(r){r&&N(e),a&&a.d(r),i=!1,n()}}}function lt(t,e,o){let s,{$$slots:i={},$$scope:n}=e;const c=we(i);let{itemVisible:a=void 0}=e;const r=ye({factory:nt,widgetName:"accordion",$$slots:c,$$props:e,events:{onItemVisibleChange:f=>{o(3,a=f)}}}),l=r.api,{directives:{accordionDirective:m},stores:{className$:d}}=r;return Q(t,d,f=>o(0,s=f)),Ze(r.api),t.$$set=f=>{o(8,e=y(y({},e),R(f))),"itemVisible"in f&&o(3,a=f.itemVisible),"$$scope"in f&&o(5,n=f.$$scope)},t.$$.update=()=>{r.patchChangedProps(e)},e=R(e),[s,m,d,a,l,n,i]}class ti extends se{constructor(e){super(),oe(this,e,lt,at,U,{itemVisible:3,api:4})}get api(){return this.$$.ctx[4]}}const rt=t=>({state:t&1,widget:t&2}),de=t=>({slot:"itemBody",state:t[0],widget:t[1]}),mt=t=>({state:t&1,widget:t&2}),ue=t=>({slot:"itemHeader",state:t[0],widget:t[1]}),ct=t=>({state:t&1,widget:t&2}),fe=t=>({slot:"itemStructure",state:t[0],widget:t[1]}),dt=t=>t&512,ut=t=>({}),_e=t=>({slot:"slot",...t[9]}),ft=t=>({state:t&1,widget:t&2}),ge=t=>({slot:"itemBody",state:t[0],widget:t[1]}),_t=t=>({state:t&1,widget:t&2}),pe=t=>({slot:"itemHeader",state:t[0],widget:t[1]}),gt=t=>({state:t&1,widget:t&2}),$e=t=>({slot:"itemStructure",state:t[0],widget:t[1]}),pt=t=>t&512,$t=t=>({}),he=t=>({slot:"slot",...t[9]});function ht(t){let e;const o=t[6].itemBody,s=S(o,t,t[7],ge);return{c(){s&&s.c()},m(i,n){s&&s.m(i,n),e=!0},p(i,n){s&&s.p&&(!e||n&131)&&w(s,o,i,i[7],e?D(o,i[7],n,ft):v(i[7]),ge)},i(i){e||(_(s,i),e=!0)},o(i){$(s,i),e=!1},d(i){s&&s.d(i)}}}function It(t){let e;const o=t[6].itemHeader,s=S(o,t,t[7],pe);return{c(){s&&s.c()},m(i,n){s&&s.m(i,n),e=!0},p(i,n){s&&s.p&&(!e||n&131)&&w(s,o,i,i[7],e?D(o,i[7],n,_t):v(i[7]),pe)},i(i){e||(_(s,i),e=!0)},o(i){$(s,i),e=!1},d(i){s&&s.d(i)}}}function bt(t){let e;const o=t[6].itemStructure,s=S(o,t,t[7],$e);return{c(){s&&s.c()},m(i,n){s&&s.m(i,n),e=!0},p(i,n){s&&s.p&&(!e||n&131)&&w(s,o,i,i[7],e?D(o,i[7],n,gt):v(i[7]),$e)},i(i){e||(_(s,i),e=!0)},o(i){$(s,i),e=!1},d(i){s&&s.d(i)}}}function Ct(t){let e,o,s;const i=[t[9]];var n=t[10];function c(a,r){let l={$$slots:{itemStructure:[bt,({widget:m,state:d})=>({1:m,0:d}),({widget:m,state:d})=>(m?2:0)|(d?1:0)],itemHeader:[It,({widget:m,state:d})=>({1:m,0:d}),({widget:m,state:d})=>(m?2:0)|(d?1:0)],itemBody:[ht,({widget:m,state:d})=>({1:m,0:d}),({widget:m,state:d})=>(m?2:0)|(d?1:0)]},$$scope:{ctx:a}};for(let m=0;m<i.length;m+=1)l=y(l,i[m]);return r!==void 0&&r&512&&(l=y(l,F(i,[L(a[9])]))),{props:l}}return n&&(e=J(n,c(t))),{c(){e&&P(e.$$.fragment),o=X()},m(a,r){e&&E(e,a,r),k(a,o,r),s=!0},p(a,r){if(r&1024&&n!==(n=a[10])){if(e){Y();const l=e;$(l.$$.fragment,1,0,()=>{M(l,1)}),Z()}n?(e=J(n,c(a,r)),P(e.$$.fragment),_(e.$$.fragment,1),E(e,o.parentNode,o)):e=null}else if(n){const l=r&512?F(i,[L(a[9])]):{};r&131&&(l.$$scope={dirty:r,ctx:a}),e.$set(l)}},i(a){s||(e&&_(e.$$.fragment,a),s=!0)},o(a){e&&$(e.$$.fragment,a),s=!1},d(a){a&&N(o),e&&M(e,a)}}}function Ht(t){let e;const o=t[6].itemHeader,s=S(o,t,t[7],he);return{c(){s&&s.c()},m(i,n){s&&s.m(i,n),e=!0},p(i,n){s&&s.p&&(!e||n&640)&&w(s,o,i,i[7],pt(n)||!e?v(i[7]):D(o,i[7],n,$t),he)},i(i){e||(_(s,i),e=!0)},o(i){$(s,i),e=!1},d(i){s&&s.d(i)}}}function ie(t){let e,o,s,i,n,c,a,r,l,m,d;s=new ae({props:{slotContent:t[0].slotItemHeader,props:t[5],$$slots:{slot:[Ht,({props:u})=>({9:u}),({props:u})=>u?512:0],default:[Ct,({component:u,props:g})=>({10:u,9:g}),({component:u,props:g})=>(u?1024:0)|(g?512:0)]},$$scope:{ctx:t}}});let f=[{class:r="accordion-header "+t[0].itemHeaderClass}],V={};for(let u=0;u<f.length;u+=1)V=y(V,f[u]);return{c(){e=G(t[2]),o=G("button"),P(s.$$.fragment),p(o,"type","button"),p(o,"id",t[3]),p(o,"class",i="accordion-button "+t[0].itemButtonClass),o.disabled=n=t[0].itemDisabled,p(o,"aria-controls",t[4]),p(o,"aria-disabled",c=t[0].itemDisabled),p(o,"aria-expanded",a=t[0].itemVisible),re(o,"collapsed",!t[0].itemVisible),me(t[2])(e,V)},m(u,g){k(u,e,g),ve(e,o),E(s,o,null),l=!0,m||(d=We(o,"click",function(){qe(t[1].actions.click)&&t[1].actions.click.apply(this,arguments)}),m=!0)},p(u,g){t=u;const B={};g&1&&(B.slotContent=t[0].slotItemHeader),g&32&&(B.props=t[5]),g&1667&&(B.$$scope={dirty:g,ctx:t}),s.$set(B),(!l||g&8)&&p(o,"id",t[3]),(!l||g&1&&i!==(i="accordion-button "+t[0].itemButtonClass))&&p(o,"class",i),(!l||g&1&&n!==(n=t[0].itemDisabled))&&(o.disabled=n),(!l||g&16)&&p(o,"aria-controls",t[4]),(!l||g&1&&c!==(c=t[0].itemDisabled))&&p(o,"aria-disabled",c),(!l||g&1&&a!==(a=t[0].itemVisible))&&p(o,"aria-expanded",a),(!l||g&1)&&re(o,"collapsed",!t[0].itemVisible),me(t[2])(e,V=F(f,[(!l||g&1&&r!==(r="accordion-header "+t[0].itemHeaderClass))&&{class:r}]))},i(u){l||(_(s.$$.fragment,u),l=!0)},o(u){$(s.$$.fragment,u),l=!1},d(u){u&&N(e),M(s),m=!1,d()}}}function Ie(t){let e,o,s,i,n,c,a,r;return s=new ae({props:{slotContent:t[0].slotItemBody,props:t[5],$$slots:{slot:[Dt,({props:l})=>({9:l}),({props:l})=>l?512:0],default:[vt,({component:l,props:m})=>({10:l,9:m}),({component:l,props:m})=>(l?1024:0)|(m?512:0)]},$$scope:{ctx:t}}}),{c(){e=G("div"),o=G("div"),P(s.$$.fragment),p(o,"class",i="accordion-body "+t[0].itemBodyClass),p(e,"class",n="accordion-collapse "+t[0].itemBodyContainerClass),p(e,"id",t[4]),p(e,"aria-labelledby",t[3])},m(l,m){k(l,e,m),ve(e,o),E(s,o,null),c=!0,a||(r=ne(t[1].directives.collapseDirective(e)),a=!0)},p(l,m){const d={};m&1&&(d.slotContent=l[0].slotItemBody),m&32&&(d.props=l[5]),m&1667&&(d.$$scope={dirty:m,ctx:l}),s.$set(d),(!c||m&1&&i!==(i="accordion-body "+l[0].itemBodyClass))&&p(o,"class",i),(!c||m&1&&n!==(n="accordion-collapse "+l[0].itemBodyContainerClass))&&p(e,"class",n),(!c||m&16)&&p(e,"id",l[4]),(!c||m&8)&&p(e,"aria-labelledby",l[3])},i(l){c||(_(s.$$.fragment,l),c=!0)},o(l){$(s.$$.fragment,l),c=!1},d(l){l&&N(e),M(s),a=!1,r()}}}function Bt(t){let e;const o=t[6].itemBody,s=S(o,t,t[7],de);return{c(){s&&s.c()},m(i,n){s&&s.m(i,n),e=!0},p(i,n){s&&s.p&&(!e||n&131)&&w(s,o,i,i[7],e?D(o,i[7],n,rt):v(i[7]),de)},i(i){e||(_(s,i),e=!0)},o(i){$(s,i),e=!1},d(i){s&&s.d(i)}}}function St(t){let e;const o=t[6].itemHeader,s=S(o,t,t[7],ue);return{c(){s&&s.c()},m(i,n){s&&s.m(i,n),e=!0},p(i,n){s&&s.p&&(!e||n&131)&&w(s,o,i,i[7],e?D(o,i[7],n,mt):v(i[7]),ue)},i(i){e||(_(s,i),e=!0)},o(i){$(s,i),e=!1},d(i){s&&s.d(i)}}}function wt(t){let e;const o=t[6].itemStructure,s=S(o,t,t[7],fe);return{c(){s&&s.c()},m(i,n){s&&s.m(i,n),e=!0},p(i,n){s&&s.p&&(!e||n&131)&&w(s,o,i,i[7],e?D(o,i[7],n,ct):v(i[7]),fe)},i(i){e||(_(s,i),e=!0)},o(i){$(s,i),e=!1},d(i){s&&s.d(i)}}}function vt(t){let e,o,s;const i=[t[9]];var n=t[10];function c(a,r){let l={$$slots:{itemStructure:[wt,({widget:m,state:d})=>({1:m,0:d}),({widget:m,state:d})=>(m?2:0)|(d?1:0)],itemHeader:[St,({widget:m,state:d})=>({1:m,0:d}),({widget:m,state:d})=>(m?2:0)|(d?1:0)],itemBody:[Bt,({widget:m,state:d})=>({1:m,0:d}),({widget:m,state:d})=>(m?2:0)|(d?1:0)]},$$scope:{ctx:a}};for(let m=0;m<i.length;m+=1)l=y(l,i[m]);return r!==void 0&&r&512&&(l=y(l,F(i,[L(a[9])]))),{props:l}}return n&&(e=J(n,c(t))),{c(){e&&P(e.$$.fragment),o=X()},m(a,r){e&&E(e,a,r),k(a,o,r),s=!0},p(a,r){if(r&1024&&n!==(n=a[10])){if(e){Y();const l=e;$(l.$$.fragment,1,0,()=>{M(l,1)}),Z()}n?(e=J(n,c(a,r)),P(e.$$.fragment),_(e.$$.fragment,1),E(e,o.parentNode,o)):e=null}else if(n){const l=r&512?F(i,[L(a[9])]):{};r&131&&(l.$$scope={dirty:r,ctx:a}),e.$set(l)}},i(a){s||(e&&_(e.$$.fragment,a),s=!0)},o(a){e&&$(e.$$.fragment,a),s=!1},d(a){a&&N(o),e&&M(e,a)}}}function Dt(t){let e;const o=t[6].itemBody,s=S(o,t,t[7],_e);return{c(){s&&s.c()},m(i,n){s&&s.m(i,n),e=!0},p(i,n){s&&s.p&&(!e||n&640)&&w(s,o,i,i[7],dt(n)||!e?v(i[7]):D(o,i[7],n,ut),_e)},i(i){e||(_(s,i),e=!0)},o(i){$(s,i),e=!1},d(i){s&&s.d(i)}}}function Vt(t){let e=t[2],o,s,i,n=t[2]&&ie(t),c=t[0].shouldBeInDOM&&Ie(t);return{c(){n&&n.c(),o=Fe(),c&&c.c(),s=X()},m(a,r){n&&n.m(a,r),k(a,o,r),c&&c.m(a,r),k(a,s,r),i=!0},p(a,[r]){a[2]?e?U(e,a[2])?(n.d(1),n=ie(a),e=a[2],n.c(),n.m(o.parentNode,o)):n.p(a,r):(n=ie(a),e=a[2],n.c(),n.m(o.parentNode,o)):e&&(n.d(1),n=null,e=a[2]),a[0].shouldBeInDOM?c?(c.p(a,r),r&1&&_(c,1)):(c=Ie(a),c.c(),_(c,1),c.m(s.parentNode,s)):c&&(Y(),$(c,1,1,()=>{c=null}),Z())},i(a){i||(_(n,a),_(c),i=!0)},o(a){$(n,a),$(c),i=!1},d(a){a&&(N(o),N(s)),n&&n.d(a),c&&c.d(a)}}}function yt(t,e,o){let s,i,n,c,{$$slots:a={},$$scope:r}=e,{state:l}=e,{widget:m}=e;const d=new RegExp("^h[1-6]$");return t.$$set=f=>{"state"in f&&o(0,l=f.state),"widget"in f&&o(1,m=f.widget),"$$scope"in f&&o(7,r=f.$$scope)},t.$$.update=()=>{t.$$.dirty&3&&o(5,s={widget:m,state:l}),t.$$.dirty&1&&o(4,i=l.itemId+"-collapse"),t.$$.dirty&1&&o(3,n=l.itemId+"-toggle"),t.$$.dirty&1&&o(2,c=d.test(l.itemHeadingTag)?l.itemHeadingTag:"h2")},[l,m,c,n,i,s,a,r]}class At extends se{constructor(e){super(),oe(this,e,yt,Vt,U,{state:0,widget:1})}}const Tt=At,Ot=t=>({state:t&2097152,widget:t&512}),be=t=>({slot:"itemBody",state:t[21],widget:t[9]}),kt=t=>({state:t&2097152,widget:t&512}),Ce=t=>({slot:"itemHeader",state:t[21],widget:t[9]}),Nt=t=>({state:t&2097152,widget:t&512}),He=t=>({slot:"itemStructure",state:t[21],widget:t[9]}),Pt=t=>t&524288,Et=t=>({}),Be=t=>({slot:"slot",...t[19]});function Mt(t){let e;const o=t[13].itemBody,s=S(o,t,t[14],be);return{c(){s&&s.c()},m(i,n){s&&s.m(i,n),e=!0},p(i,n){s&&s.p&&(!e||n&2114048)&&w(s,o,i,i[14],e?D(o,i[14],n,Ot):v(i[14]),be)},i(i){e||(_(s,i),e=!0)},o(i){$(s,i),e=!1},d(i){s&&s.d(i)}}}function jt(t){let e;const o=t[13].itemHeader,s=S(o,t,t[14],Ce);return{c(){s&&s.c()},m(i,n){s&&s.m(i,n),e=!0},p(i,n){s&&s.p&&(!e||n&2114048)&&w(s,o,i,i[14],e?D(o,i[14],n,kt):v(i[14]),Ce)},i(i){e||(_(s,i),e=!0)},o(i){$(s,i),e=!1},d(i){s&&s.d(i)}}}function Ft(t){let e;const o=t[13].itemStructure,s=S(o,t,t[14],He);return{c(){s&&s.c()},m(i,n){s&&s.m(i,n),e=!0},p(i,n){s&&s.p&&(!e||n&2114048)&&w(s,o,i,i[14],e?D(o,i[14],n,Nt):v(i[14]),He)},i(i){e||(_(s,i),e=!0)},o(i){$(s,i),e=!1},d(i){s&&s.d(i)}}}function Wt(t){let e,o,s;const i=[t[19]];var n=t[20];function c(a,r){let l={$$slots:{itemStructure:[Ft,({widget:m,state:d})=>({9:m,21:d}),({widget:m,state:d})=>(m?512:0)|(d?2097152:0)],itemHeader:[jt,({widget:m,state:d})=>({9:m,21:d}),({widget:m,state:d})=>(m?512:0)|(d?2097152:0)],itemBody:[Mt,({widget:m,state:d})=>({9:m,21:d}),({widget:m,state:d})=>(m?512:0)|(d?2097152:0)]},$$scope:{ctx:a}};for(let m=0;m<i.length;m+=1)l=y(l,i[m]);return r!==void 0&&r&524288&&(l=y(l,F(i,[L(a[19])]))),{props:l}}return n&&(e=J(n,c(t))),{c(){e&&P(e.$$.fragment),o=X()},m(a,r){e&&E(e,a,r),k(a,o,r),s=!0},p(a,r){if(r&1048576&&n!==(n=a[20])){if(e){Y();const l=e;$(l.$$.fragment,1,0,()=>{M(l,1)}),Z()}n?(e=J(n,c(a,r)),P(e.$$.fragment),_(e.$$.fragment,1),E(e,o.parentNode,o)):e=null}else if(n){const l=r&524288?F(i,[L(a[19])]):{};r&2114048&&(l.$$scope={dirty:r,ctx:a}),e.$set(l)}},i(a){s||(e&&_(e.$$.fragment,a),s=!0)},o(a){e&&$(e.$$.fragment,a),s=!1},d(a){a&&N(o),e&&M(e,a)}}}function qt(t){let e;const o=t[13].itemStructure,s=S(o,t,t[14],Be);return{c(){s&&s.c()},m(i,n){s&&s.m(i,n),e=!0},p(i,n){s&&s.p&&(!e||n&540672)&&w(s,o,i,i[14],Pt(n)||!e?v(i[14]):D(o,i[14],n,Et),Be)},i(i){e||(_(s,i),e=!0)},o(i){$(s,i),e=!1},d(i){s&&s.d(i)}}}function zt(t){let e,o,s,i,n,c;return o=new ae({props:{slotContent:t[3],props:t[0],$$slots:{slot:[qt,({props:a})=>({19:a}),({props:a})=>a?524288:0],default:[Wt,({component:a,props:r})=>({20:a,19:r}),({component:a,props:r})=>(a?1048576:0)|(r?524288:0)]},$$scope:{ctx:t}}}),{c(){e=G("div"),P(o.$$.fragment),p(e,"class",s="accordion-item "+t[1]),p(e,"id",t[2])},m(a,r){k(a,e,r),E(o,e,null),i=!0,n||(c=ne(t[7].call(null,e)),n=!0)},p(a,[r]){const l={};r&8&&(l.slotContent=a[3]),r&1&&(l.props=a[0]),r&1589248&&(l.$$scope={dirty:r,ctx:a}),o.$set(l),(!i||r&2&&s!==(s="accordion-item "+a[1]))&&p(e,"class",s),(!i||r&4)&&p(e,"id",a[2])},i(a){i||(_(o.$$.fragment,a),i=!0)},o(a){$(o.$$.fragment,a),i=!1},d(a){a&&N(e),M(o),n=!1,c()}}}const Kt={slotItemStructure:Tt};function Gt(t,e,o){let s,i,n,c,a,{$$slots:r={},$$scope:l}=e;const m=we(r),d=xe(),{registerItem:f}=d;let{itemVisible:V=void 0}=e;const u=ye({factory:f,$$slots:m,$$props:e,defaultConfig:Kt,events:{onItemVisibleChange:I=>{o(10,V=I)}}}),{stores:{itemId$:g,itemClass$:B,slotItemStructure$:W},directives:{accordionItemDirective:q},state$:j}=u;Q(t,g,I=>o(2,c=I)),Q(t,B,I=>o(1,n=I)),Q(t,W,I=>o(3,a=I)),Q(t,j,I=>o(12,i=I));const x=u.api;return ze(()=>{u.api.initDone()}),t.$$set=I=>{o(17,e=y(y({},e),R(I))),"itemVisible"in I&&o(10,V=I.itemVisible),"$$scope"in I&&o(14,l=I.$$scope)},t.$$.update=()=>{u.patchChangedProps(e),t.$$.dirty&4096&&o(0,s={widget:Je(u),state:i})},e=R(e),[s,n,c,a,g,B,W,q,j,u,V,x,i,r,l]}class ii extends se{constructor(e){super(),oe(this,e,Gt,zt,U,{itemVisible:10,api:11})}get api(){return this.$$.ctx[11]}}export{ti as A,ii as I};