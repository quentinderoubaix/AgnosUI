import{p as b,e as v,c as g,a as x,t as d,L as h,q as $,r as P,h as y,b as m,f as w}from"./AppCommon-CC-VkUgW.js";import{a as c}from"./actions-D-dhIHRy.js";import{c as N}from"./config-BOSa1FB8.js";import{c as _}from"./progressbar-SWdDtjxf-BtUkBTnR.js";import{c as D}from"./directive-CKEccryv-BuQmRVBG.js";import"./index-client-CGLt60GO.js";import"./writables-DoU_XYTX-slp4MWt3.js";var C=d("<progress></progress>");function u(i,t){b(t,!0);let s=h(t,["$$slots","$$events","$$legacy"]);const{state:e,directives:{ariaDirective:l}}=N({factory:_,widgetName:"progressbar",props:s,enablePatchChanged:!0});var r=C();let a;v(()=>a=$(r,a,{value:e.value,max:e.max})),c(r,o=>l(o)),c(r,(o,n)=>D(o,n),()=>"progress "+e.className),g(i,r),x()}var R=d("<div> </div>");function f(i,t){b(t,!0);let s=h(t,["$$slots","$$events","$$legacy"]);const{state:e,directives:{ariaDirective:l}}=N({factory:_,widgetName:"progressbar",props:s,enablePatchChanged:!0}),r=new Intl.NumberFormat("default",{style:"percent",minimumFractionDigits:0,maximumFractionDigits:1});var a=R();let o;v(()=>o=$(a,o,{style:`--thickness: 0.4rem; --value:${e.percentage??""};`}));var n=y(a);v(()=>P(n,r.format(e.percentage/100))),c(a,p=>l(p)),c(a,(p,F)=>D(p,F),()=>"radial-progress "+e.className),g(i,a),x()}var k=d('<h2 class="text-lg mb-2">Simple progressbars</h2> <!> <!> <h2 class="text-lg mt-4 mb-2">Radial progress</h2> <div class="flex gap-6"><!> <!></div>',1);function A(i){var t=k(),s=m(w(t),2);u(s,{className:"progress-primary",value:20});var e=m(s,2);u(e,{className:"progress-info",value:4,max:5});var l=m(e,4),r=y(l);f(r,{className:"text-primary",min:10,max:20,value:13});var a=m(r,2);f(a,{className:"bg-info text-info-content border-4 border-info",min:9,max:20,value:17}),g(i,t)}export{A as default};
