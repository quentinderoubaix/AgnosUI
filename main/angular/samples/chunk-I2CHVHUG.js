import{a as T}from"./chunk-TO6AFQXH.js";import{B as M,C as k,D as S,H as E}from"./chunk-DDPBEREB.js";import{K as V}from"./chunk-UQV7GR2W.js";import{$a as _,Bb as A,Cb as d,Eb as v,Jb as h,Ma as o,Ya as m,Za as y,_a as u,ba as w,bb as b,db as s,fa as C,ga as g,gb as f,kb as r,lb as l,ob as D,rb as I,sb as p,vb as x}from"./chunk-HHNAUMXU.js";function B(i,a){if(i&1&&(r(0,"div",9)(1,"div"),d(2),l()()),i&2){let e=p(),t=e.state,n=e.widget,c=p();s("accordion-collapse ",t.itemCollapseClass,""),u("aria-labelledby","",t.itemId,"-toggle"),x("id","",t.itemId,"-collapse"),_("auUse",n.directives.collapseDirective),o(),s("accordion-body ",t.itemBodyClass,""),o(),v(" ",c.BODY," ")}}function O(i,a){if(i&1){let e=D();r(0,"div",5)(1,"p",6),d(2),l(),r(3,"button",7),I("click",function(){let c=C(e).widget;return g(c.actions.click())}),d(4," Toggle first "),l()(),m(5,B,3,10,"div",8)}if(i&2){let e=a.state;s("",e.itemHeaderClass," accordion-button accordion-header custom-header justify-content-between"),b("collapsed",!e.itemVisible),o(2),v("First panel - ",e.itemVisible?"opened":"collapsed",""),o(),s("btn btn-link p-0 ",e.itemButtonClass,""),b("collapsed",!e.itemVisible),x("id","",e.itemId,"-toggle"),u("aria-controls","",e.itemId,"-collapse"),_("disabled",e.itemDisabled),y("aria-disabled",e.itemDisabled)("aria-expanded",e.itemVisible),o(2),f(5,e.shouldBeInDOM?5:-1)}}function P(i,a){if(i&1&&(r(0,"div",9)(1,"div"),d(2),l()()),i&2){let e=p(),t=e.state,n=e.widget,c=p();s("accordion-collapse ",t.itemCollapseClass,""),u("aria-labelledby","",t.itemId,"-toggle"),x("id","",t.itemId,"-collapse"),_("auUse",n.directives.collapseDirective),o(),s("accordion-body ",t.itemBodyClass,""),o(),v(" ",c.BODY," ")}}function U(i,a){if(i&1){let e=D();r(0,"div",5)(1,"p",6),d(2,"Second panel"),l(),r(3,"div")(4,"button",7),I("click",function(){let c=C(e).widget;return g(c.actions.click())}),d(5," Toggle second "),l(),r(6,"button",10),I("click",function(){C(e);let n=p();return g(n.thirdDisabled=!n.thirdDisabled)}),d(7),l(),r(8,"button",11),I("click",function(){C(e),p();let n=A(1);return g(n.api.collapseAll())}),d(9,"Collapse all"),l()()(),m(10,P,3,10,"div",8)}if(i&2){let e=a.state,t=p();s("",e.itemHeaderClass," accordion-button accordion-header custom-header justify-content-between"),b("collapsed",!e.itemVisible),o(4),s("btn btn-sm btn-outline-primary me-2 ",e.itemButtonClass,""),b("collapsed",!e.itemVisible),x("id","",e.itemId,"-toggle"),u("aria-controls","",e.itemId,"-collapse"),_("disabled",e.itemDisabled),y("aria-disabled",e.itemDisabled)("aria-expanded",e.itemVisible),o(3),v(" ",t.thirdDisabled?"En":"Dis","able third "),o(3),f(10,e.shouldBeInDOM?10:-1)}}function Y(i,a){i&1&&(r(0,"p",13),d(1,"[I'm\xA0disabled]"),l())}function j(i,a){if(i&1&&(r(0,"div",9)(1,"div"),d(2),l()()),i&2){let e=p(),t=e.state,n=e.widget,c=p();s("accordion-collapse ",t.itemCollapseClass,""),u("aria-labelledby","",t.itemId,"-toggle"),x("id","",t.itemId,"-collapse"),_("auUse",n.directives.collapseDirective),o(),s("accordion-body ",t.itemBodyClass,""),o(),v(" ",c.BODY," ")}}function F(i,a){if(i&1){let e=D();r(0,"div",5)(1,"button",7),I("click",function(){let c=C(e).widget;return g(c.actions.click())}),d(2," Third panel "),l(),m(3,Y,2,0,"p",12),l(),m(4,j,3,10,"div",8)}if(i&2){let e=a.state,t=p();s("",e.itemHeaderClass," accordion-button accordion-header custom-header justify-content-between"),b("collapsed",!e.itemVisible),o(),s("p-0 btn btn-link container-fluid text-start ",e.itemButtonClass,""),b("collapsed",!e.itemVisible),x("id","",e.itemId,"-toggle"),u("aria-controls","",e.itemId,"-collapse"),_("disabled",e.itemDisabled),y("aria-disabled",e.itemDisabled)("aria-expanded",e.itemVisible),o(2),f(3,t.thirdDisabled?3:-1),o(),f(4,e.shouldBeInDOM?4:-1)}}var K=(()=>{let a=class a{constructor(){this.thirdDisabled=!1,this.BODY=T}};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=w({type:a,selectors:[["ng-component"]],standalone:!0,features:[h],decls:8,vars:1,consts:[["auAccordion",""],["accordion","auAccordion"],["auAccordionItem",""],["auAccordionItemStructure",""],["auAccordionItem","",3,"auItemDisabled"],["role","heading","aria-level","2"],[1,"m-0"],["type","button",3,"id","disabled","click"],[3,"auUse","id","class"],[3,"auUse","id"],["type","button",1,"btn","btn-sm","btn-outline-secondary","me-2",3,"click"],["type","button",1,"btn","btn-sm","btn-outline-danger","me-2",3,"click"],["class","text-muted m-0 small"],[1,"text-muted","m-0","small"]],template:function(n,c){n&1&&(r(0,"div",0,1)(2,"div",2),m(3,O,6,17,"ng-template",3),l(),r(4,"div",2),m(5,U,11,17,"ng-template",3),l(),r(6,"div",4),m(7,F,5,17,"ng-template",3),l()()),n&2&&(o(6),_("auItemDisabled",c.thirdDisabled))},dependencies:[E,V,S,k,M],styles:[".custom-header[_ngcontent-%COMP%]:after{content:none!important}"]});let i=a;return i})();export{K as default};
