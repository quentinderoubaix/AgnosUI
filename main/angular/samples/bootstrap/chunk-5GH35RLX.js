import"./chunk-BYXBJQAS.js";import"./chunk-SN2DU26T.js";import{M as z,a as F,g as M,h as R}from"./chunk-XXOOVFKV.js";import{Q as D,S as w,ba as B,c as g,ea as O,ga as V,h as A,la as x}from"./chunk-NOFNVHQY.js";import{m as I,n as y}from"./chunk-PTAQICO2.js";import{$a as v,Bb as i,Db as _,Ib as C,Lb as E,Ma as r,Nb as s,Ob as p,bb as u,ca as h,db as b,ib as T,mb as t,nb as n,ob as k,rb as l,sb as $}from"./chunk-G54KZPDD.js";var q=(a,o)=>({transition:a,animated:o}),G=(a,o)=>[a,o];function J(a,o){if(a&1&&(t(0,"div",9),s(1,"async"),s(2,"async"),t(3,"div",10)(4,"div",11),i(5,"You can collapse this card by clicking Toggle"),n()()()),a&2){let S=$();u("auUse",E(8,G,S.transition.directives.directive,E(5,q,p(1,1,S.paramTransition$),p(2,3,S.paramAnimated$))))}}var H=g(M),P=g(!0),U=g(!1),K=g(!0),N=g(!0),Y=(()=>{let o=class o{constructor(){this.bootstrap={collapseHorizontalTransition:R,collapseVerticalTransition:M,fadeTransition:F},this.paramTransition$=H,this.paramAnimated$=P,this.paramAnimatedOnInit$=U,this.paramRemoveFromDom$=N,this.transition=A({props:{animatedOnInit:U,animated:P,visible:K}}),this.state=D(this.transition.state$)}changeTransition(f){this.transition.api.toggle(!1,!1),N.set(!0),H.set(f)}};o.\u0275fac=function(d){return new(d||o)},o.\u0275cmp=h({type:o,selectors:[["app-transition-inner"]],standalone:!0,features:[C],decls:49,vars:31,consts:[[1,"transition-inner"],[1,"h6","mt-2"],[1,"d-flex","flex-wrap","gap-2"],["type","button",1,"btn","btn-sm","btn-outline-secondary",3,"click"],[1,"form-check"],["type","checkbox",1,"form-check-input",3,"ngModelChange","ngModel"],[1,"form-check","mb-2"],["type","button",1,"btn","btn-outline-primary",3,"click"],[1,"mt-2"],[2,"max-width","300px",3,"auUse"],[1,"card",2,"width","300px"],[1,"card-body"]],template:function(d,e){d&1&&(t(0,"div",0)(1,"div",1),i(2,"Transition:"),n(),t(3,"div",2)(4,"button",3),s(5,"async"),l("click",function(){return e.changeTransition(e.bootstrap.collapseVerticalTransition)}),i(6," Vertical collapse "),n(),t(7,"button",3),s(8,"async"),l("click",function(){return e.changeTransition(e.bootstrap.collapseHorizontalTransition)}),i(9," Horizontal collapse "),n(),t(10,"button",3),s(11,"async"),l("click",function(){return e.changeTransition(e.bootstrap.fadeTransition)}),i(12," Fade "),n()(),t(13,"div",1),i(14,"Other properties:"),n(),t(15,"label",4)(16,"input",5),s(17,"async"),l("ngModelChange",function(c){return e.paramAnimated$.set(c)}),n(),i(18,"Animated"),n(),t(19,"label",4)(20,"input",5),s(21,"async"),l("ngModelChange",function(c){return e.paramAnimatedOnInit$.set(c)}),n(),i(22,"Animated on init"),n(),t(23,"label",4)(24,"input",5),s(25,"async"),l("ngModelChange",function(c){return e.paramRemoveFromDom$.set(c)}),n(),i(26,"Remove from DOM"),n(),t(27,"label",6)(28,"input",5),s(29,"async"),l("ngModelChange",function(c){return e.transition.patch({visible:c})}),n(),i(30,"Visible"),n(),t(31,"div",2)(32,"button",7),l("click",function(){return e.transition.api.toggle()}),i(33,"Toggle"),n(),t(34,"button",7),l("click",function(){return e.transition.api.toggle(void 0,!0)}),i(35,"Toggle with animation"),n(),t(36,"button",7),l("click",function(){return e.transition.api.toggle(void 0,!1)}),i(37,"Toggle without animation"),n()(),t(38,"ul",8)(39,"li"),i(40),n(),t(41,"li"),i(42),n(),t(43,"li"),i(44),n(),t(45,"li"),i(46),n()(),v(47,J,6,11,"div",9),s(48,"async"),n()),d&2&&(r(4),b("active",p(5,15,e.paramTransition$)===e.bootstrap.collapseVerticalTransition),r(3),b("active",p(8,17,e.paramTransition$)===e.bootstrap.collapseHorizontalTransition),r(3),b("active",p(11,19,e.paramTransition$)===e.bootstrap.fadeTransition),r(6),u("ngModel",p(17,21,e.paramAnimated$)),r(4),u("ngModel",p(21,23,e.paramAnimatedOnInit$)),r(4),u("ngModel",p(25,25,e.paramRemoveFromDom$)),r(4),u("ngModel",p(29,27,e.transition.stores.visible$)),r(12),_("visible = ",e.state().visible,""),r(2),_("transitioning = ",e.state().transitioning,""),r(2),_("shown = ",e.state().shown,""),r(2),_("hidden = ",e.state().hidden,""),r(),T(47,p(48,29,e.paramRemoveFromDom$)===!1||e.state().hidden===!1?47:-1))},dependencies:[z,w,x,B,O,V,y,I],encapsulation:2,changeDetection:0});let a=o;return a})();function L(a,o){a&1&&k(0,"app-transition-inner")}var se=(()=>{let o=class o{constructor(){this.showComponent=!0}};o.\u0275fac=function(d){return new(d||o)},o.\u0275cmp=h({type:o,selectors:[["ng-component"]],standalone:!0,features:[C],decls:4,vars:1,consts:[[1,"demo-transition","mb-3"],["id","toggle-component",1,"btn","btn-outline-secondary",3,"click"]],template:function(d,e){d&1&&(t(0,"div",0)(1,"button",1),l("click",function(){return e.showComponent=!e.showComponent}),i(2,"Toggle component"),n(),v(3,L,1,0,"app-transition-inner"),n()),d&2&&(r(3),T(3,e.showComponent?3:-1))},dependencies:[y,Y],encapsulation:2,changeDetection:0});let a=o;return a})();export{se as default};
