import{p as C,d as w,b as u,a as g,t as x,l as S,g as d,q as k,k as c,T as n,s as h,f as j,j as v,r as z,w as D,Q as H,n as L}from"./AppCommon-Cm-6NtnE.js";import{S as b}from"./Slider-CzL3LJKn.js";import{a as f}from"./actions-gBvwwZne.js";/* empty css               */import{c as N}from"./directive-CKEccryv-gyIcW13B.js";import"./slider-DYrwS7Mv-Cl4Whmzg.js";import"./writables-DCiBdIBK-BYLEJlA0.js";import"./resizeObserver-uPfEp7Vt.js";import"./extendWidget-CKqcYLS9.js";import"./Slot-HBv0E13p.js";import"./snippet-DaCt2Zif.js";import"./config-CGoDt1jV.js";import"./config-CLQxp5Vy.js";import"./index-client-CP1GwSUe.js";var q=x('<button><svg xmlns="http://www.w3.org/2000/svg" fill="var(--bs-slider-handle-color)" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"></path></svg></button>');function y(m,s){C(s,!0);var t=q();const i=k(()=>({}));let a;w(()=>a=S(t,a,{...d(i)})),f(t,(o,r)=>N(o,r),()=>"custom-handle"),f(t,(o,r)=>s.directives.handleDirective(o,r),()=>({item:s.item})),u(m,t),g()}var A=x("<h2>Slider with custom labels</h2> <!> <hr> <h2>Slider with custom handle</h2> <!>",1);function U(m){let s=c(n([70])),t=c(n([50]));var i=A(),a=h(j(i),2);b(a,{min:0,max:100,stepSize:1,get values(){return d(s)},set values(e){v(s,n(e))},className:"au-custom-slider-container",label:(e,l)=>{let _=()=>l==null?void 0:l().value;var p=z();w(()=>L(p,`${_()??""}%`)),u(e,p)},$$slots:{label:!0}});var o=h(a,6);b(o,{min:0,max:100,stepSize:1,get values(){return d(t)},set values(e){v(t,n(e))},className:"au-custom-slider-container",handle:(e,l=H)=>{y(e,D(l))},$$slots:{handle:!0}}),u(m,i)}export{U as default};
