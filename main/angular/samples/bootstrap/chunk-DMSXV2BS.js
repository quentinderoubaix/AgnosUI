import{S as C,ca as S,e as D,ea as h,ga as M,la as E}from"./chunk-SBJUXELN.js";import"./chunk-DMXSLBKY.js";import{$a as u,Bb as a,Eb as f,Fb as g,Gb as v,Ib as y,La as m,Lb as b,Sa as d,_ as p,kb as o,lb as r,mb as s}from"./chunk-WXQMDDQY.js";var _=D((e,i)=>{console.log("Directive has been executed on node ",e.id);let n=t=>{console.log(i,t.target)};return e.addEventListener("click",n),{update:t=>i=t,destroy:()=>{e.removeEventListener("click",n),console.log("Destroy function executed ",e.id)}}});var k=(e,i)=>[e,i],l=class e{constructor(){this.config=d("focus element clicked");this.createSampleDirective=_}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=p({type:e,selectors:[["ng-component"]],standalone:!0,features:[y],decls:10,vars:5,consts:[[3,"auUse"],["id","test",1,"btn","btn-primary"],["id","test2",1,"btn","btn-primary"],["id","clickText","type","text","aria-label","text input to configure the directive",1,"form-control",3,"ngModelChange","ngModel"]],template:function(n,t){n&1&&(o(0,"div",0)(1,"button",1),a(2,"button 1"),r(),o(3,"button",2),a(4,"button 2"),r()(),s(5,"hr"),o(6,"input",3),v("ngModelChange",function(c){return g(t.config,c)||(t.config=c),c}),r(),s(7,"hr"),o(8,"span"),a(9,"(Open the console to see the outputs)"),r()),n&2&&(u("auUse",b(2,k,t.createSampleDirective,t.config())),m(6),f("ngModel",t.config))},dependencies:[C,E,S,h,M],encapsulation:2})}};export{l as default};
