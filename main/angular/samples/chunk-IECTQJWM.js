import{c as v,e as h,g as y,l as D}from"./chunk-4CHY45IH.js";import{K as g}from"./chunk-P5E4G5XL.js";import"./chunk-Z7SX3R6A.js";import{Fb as c,Mb as f,Oa as p,ba as d,bb as s,mb as i,nb as o,ob as l,ub as u}from"./chunk-CDYQJW4G.js";var S=(t,e)=>{console.log("Directive has been executed on node ",t.id);let m=n=>{console.log(e,n.target)};return t.addEventListener("click",m),{update:n=>e=n,destroy:()=>{t.removeEventListener("click",m),console.log("Destroy function executed ",t.id)}}};var L=(()=>{let e=class e{constructor(){this.config="focus element clicked",this.createSampleDirective=S}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=d({type:e,selectors:[["ng-component"]],standalone:!0,features:[f],decls:10,vars:3,consts:[[3,"auUse","auUseParams"],["id","test",1,"btn","btn-primary"],["id","test2",1,"btn","btn-primary"],["id","clickText","type","text",1,"form-control",3,"ngModel","ngModelChange"]],template:function(r,a){r&1&&(i(0,"div",0)(1,"button",1),c(2,"button 1"),o(),i(3,"button",2),c(4,"button 2"),o()(),l(5,"hr"),i(6,"input",3),u("ngModelChange",function(b){return a.config=b}),o(),l(7,"hr"),i(8,"span"),c(9,"(Open the console to see the outputs)"),o()),r&2&&(s("auUse",a.createSampleDirective)("auUseParams",a.config),p(6),s("ngModel",a.config))},dependencies:[g,D,v,h,y],encapsulation:2});let t=e;return t})();export{L as default};
