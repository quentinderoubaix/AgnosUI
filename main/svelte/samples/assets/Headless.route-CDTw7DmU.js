import{p as b,Q as C,e as u,c as i,a as S,t as p,u as N,L as w,r as k,k as v,S as z,h as A,M as F,b as x,f as H}from"./AppCommon-CC-VkUgW.js";import{s as L,t as _}from"./class-CcTXRr1B.js";/* empty css               */import{c as M}from"./config-DXyDsFs3.js";import{e as P}from"./rating.gen-DEacGmma.js";import{S as Q}from"./Slot-9PryA5S7.js";import"./config-BOSa1FB8.js";import"./directive-CKEccryv-BuQmRVBG.js";import"./index-client-CGLt60GO.js";import"./rating-C1UqlpFs-C8ABBFZC.js";import"./rating-D6x1NWZU-DKO4qgnH.js";import"./writables-DoU_XYTX-slp4MWt3.js";import"./extendWidget-wveUl8Yn.js";import"./snippet-hepiiy-w.js";var T=p('<span class="au-rating-star"><!></span>'),U=p("<div></div>");function h(d,s){b(s,!0);const o=(r,t)=>{let f=()=>t==null?void 0:t().fill;var l=N();u(()=>k(l,String.fromCharCode(f()===100?9733:9734))),i(r,l)};let m=w(s,["$$slots","$$events","$$legacy"]);const{state:n,api:c}=M({factory:P,widgetName:"rating",defaultConfig:{star:o},get props(){return{...m,readonly:!0}},enablePatchChanged:!0}),a=c;var e=U();return C(e,21,()=>n.stars,z,(r,t)=>{let f=()=>v(t).fill,l=()=>v(t).index;var g=T(),y=A(g),R=F(()=>({fill:f(),index:l()}));Q(y,{get content(){return n.star},get props(){return v(R)}}),i(r,g)}),u(()=>L(e,`d-inline-flex au-rating ${n.className??""}`)),i(d,e),S({api:a})}var W=p('<span class="star">&#9733;</span>'),j=p('<div>The readonly rating without slot:</div> <!> <div class="mt-2">Using a slot to customize the display:</div> <!>',1);function tt(d){var s=j(),o=x(H(s),2);h(o,{rating:7,maxRating:10});var m=x(o,4);h(m,{rating:7,maxRating:10,className:"rating-custom",star:(c,a)=>{let e=()=>a==null?void 0:a().index,r=()=>a==null?void 0:a().fill;var t=W();u(()=>{_(t,"filled",r()===100),_(t,"bad",e()<3)}),i(c,t)},$$slots:{star:!0}}),i(d,s)}export{tt as default};
