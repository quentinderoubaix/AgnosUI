import{p as k,s as v,d as y,b as f,a as T,t as w,e as a,h as C,l as F,g as D,n as H,q as P,r as S}from"./AppCommon-Cm-6NtnE.js";import{s as W}from"./snippet-DaCt2Zif.js";import{a as m}from"./actions-gBvwwZne.js";import{c as q}from"./simpleClassTransition-Ct7U0yg9.js";import{c as $}from"./config-CGoDt1jV.js";import{c as j}from"./baseTransitions-B-oSxy54.js";import{c as z}from"./directive-CKEccryv-gyIcW13B.js";import"./cssTransitions-Crcz6VTe.js";import"./promise-CY2U8bTP-Di3LO9sj.js";import"./config-CLQxp5Vy.js";import"./index-client-CP1GwSUe.js";import"./writables-DCiBdIBK-BYLEJlA0.js";var A=(i,t)=>t(),B=(i,t)=>t(),E=w('<div class="flip-card"><div><div class="flip-card-front"><!> <button class="btn btn-outline-secondary">Hide again.</button></div> <div class="flip-card-back"><button class="btn btn-outline-primary"> </button></div></div></div>');function G(i,t){k(t,!0);const{api:{show:o,hide:s},directives:{directive:_}}=$({factory:j,props:{visible:!1,transition:q({hideClasses:["hide"],animationPendingHideClasses:["hide"]})}});var n=E(),e=a(n);const u=P(()=>({}));let c;var d=a(e),l=a(d);W(l,()=>t.children);var b=v(l,2);b.__click=[A,s];var h=v(d,2),p=a(h);p.__click=[B,o];var g=a(p);y(()=>{c=F(e,c,{...D(u)}),H(g,t.hiddenText)}),m(e,(r,x)=>z(r,x),()=>"flip-card-inner"),m(e,r=>_(r)),f(i,n),T()}C(["click"]);function Y(i){G(i,{hiddenText:"What is hiding behing this ?",children:(t,o)=>{var s=S("Some new content !");f(t,s)},$$slots:{default:!0}})}export{Y as default};
