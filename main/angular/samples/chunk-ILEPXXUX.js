import{v as D,w as M}from"./chunk-CHR5L6JN.js";import"./chunk-4CHY45IH.js";import"./chunk-P5E4G5XL.js";import"./chunk-Z7SX3R6A.js";import{Eb as b,Fb as i,Mb as k,Sb as V,_ as x,_a as g,ba as C,ga as o,ha as r,mb as l,nb as c,ob as _,qb as u,ub as a,vb as w}from"./chunk-CDYQJW4G.js";function S(s,t){if(s&1){let d=u();i(0," This is a modal"),_(1,"br")(2,"br"),l(3,"button",2),a("click",function(){let e=o(d).state,p=w(),f=b(3);return r(p.modalService.open({slotTitle:"Other modal",slotDefault:f,container:e.modalElement}))}),i(4," Launch other modal"),c(),_(5,"br"),l(6,"button",3),a("click",function(){let e=o(d).widget;return r(e.api.patch({backdrop:!0}))}),i(7,"Enable backdrop"),c(),l(8,"button",3),a("click",function(){let e=o(d).widget;return r(e.api.patch({backdrop:!1}))}),i(9,"Disable backdrop"),c(),_(10,"br"),l(11,"button",3),a("click",function(){let e=o(d).widget;return r(e.api.close())}),i(12,"Close"),c()}}var F=(()=>{let t=class t{constructor(){this.modalService=x(M)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=C({type:t,selectors:[["ng-component"]],standalone:!0,features:[k],decls:4,vars:0,consts:[[1,"btn","btn-primary",3,"click"],["recursiveModal",""],[1,"btn","btn-outline-primary","m-1",3,"click"],[1,"btn","btn-outline-secondary","m-1",3,"click"]],template:function(n,e){if(n&1){let p=u();l(0,"button",0),a("click",function(){o(p);let h=b(3);return r(e.modalService.open({slotTitle:"First modal",className:"modal-sm",slotDefault:h}))}),i(1," Launch demo modal "),c(),g(2,S,13,0,"ng-template",null,1,V)}},dependencies:[D],encapsulation:2});let s=t;return s})();export{F as default};
