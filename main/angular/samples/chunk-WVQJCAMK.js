import{v as O}from"./chunk-CHR5L6JN.js";import{b as U,e as x,g as P,l as V}from"./chunk-4CHY45IH.js";import{I as F,K as B,b as g,e as A,f as k,g as D,i as w}from"./chunk-P5E4G5XL.js";import{m as I,n as y}from"./chunk-Z7SX3R6A.js";import{Fb as i,Hb as _,Mb as C,Oa as a,Ob as $,Qb as s,Rb as p,_a as b,ba as h,bb as u,db as v,ib as T,mb as t,nb as n,ob as M,ub as l,vb as E}from"./chunk-CDYQJW4G.js";var q=(r,o)=>({transition:r,animation:o});function G(r,o){if(r&1&&(t(0,"div",9),s(1,"async"),s(2,"async"),t(3,"div",10)(4,"div",11),i(5,"You can collapse this card by clicking Toggle"),n()()()),r&2){let S=E();u("auUse",S.transition.directives.directive)("auUseParams",$(6,q,p(1,2,S.paramTransition$),p(2,4,S.paramAnimation$)))}}var R=g(k),z=g(!0),H=g(!1),J=g(!0),N=g(!0),Y=(()=>{let o=class o{constructor(){this.bootstrap={collapseHorizontalTransition:D,collapseVerticalTransition:k,fadeTransition:w},this.paramTransition$=R,this.paramAnimation$=z,this.paramAnimationOnInit$=H,this.paramRemoveFromDom$=N,this.transition=A({props:{animationOnInit:H,animation:z,visible:J}}),this.state=F(this.transition.state$)}changeTransition(f){this.transition.api.toggle(!1,!1),N.set(!0),R.set(f)}};o.\u0275fac=function(c){return new(c||o)},o.\u0275cmp=h({type:o,selectors:[["app-transition-inner"]],standalone:!0,features:[C],decls:45,vars:31,consts:[[1,"transition-inner"],[1,"mt-2"],["type","button",1,"ms-2","btn","btn-sm","btn-outline-secondary",3,"click"],[1,"form-check"],["type","checkbox",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"form-check","mb-2"],["type","button",1,"btn","btn-outline-primary",3,"click"],["type","button",1,"ms-2","btn","btn-outline-primary",3,"click"],["style","max-width: 300px;",3,"auUse","auUseParams"],[2,"max-width","300px",3,"auUse","auUseParams"],[1,"card",2,"width","300px"],[1,"card-body"]],template:function(c,e){c&1&&(t(0,"div",0)(1,"p",1),i(2," Transition: "),t(3,"button",2),l("click",function(){return e.changeTransition(e.bootstrap.collapseVerticalTransition)}),s(4,"async"),i(5," Vertical collapse "),n(),t(6,"button",2),l("click",function(){return e.changeTransition(e.bootstrap.collapseHorizontalTransition)}),s(7,"async"),i(8," Horizontal collapse "),n(),t(9,"button",2),l("click",function(){return e.changeTransition(e.bootstrap.fadeTransition)}),s(10,"async"),i(11," Fade "),n()(),t(12,"label",3)(13,"input",4),l("ngModelChange",function(d){return e.paramAnimation$.set(d)}),s(14,"async"),n(),i(15,"Animation"),n(),t(16,"label",3)(17,"input",4),l("ngModelChange",function(d){return e.paramAnimationOnInit$.set(d)}),s(18,"async"),n(),i(19,"Animation on init"),n(),t(20,"label",3)(21,"input",4),l("ngModelChange",function(d){return e.paramRemoveFromDom$.set(d)}),s(22,"async"),n(),i(23,"Remove from DOM"),n(),t(24,"label",5)(25,"input",4),l("ngModelChange",function(d){return e.transition.patch({visible:d})}),s(26,"async"),n(),i(27,"Visible"),n(),t(28,"button",6),l("click",function(){return e.transition.api.toggle()}),i(29,"Toggle"),n(),t(30,"button",7),l("click",function(){return e.transition.api.toggle(void 0,!0)}),i(31,"Toggle with animation"),n(),t(32,"button",7),l("click",function(){return e.transition.api.toggle(void 0,!1)}),i(33,"Toggle without animation"),n(),t(34,"ul",1)(35,"li"),i(36),n(),t(37,"li"),i(38),n(),t(39,"li"),i(40),n(),t(41,"li"),i(42),n()(),b(43,G,6,9,"div",8),s(44,"async"),n()),c&2&&(a(3),v("active",p(4,15,e.paramTransition$)===e.bootstrap.collapseVerticalTransition),a(3),v("active",p(7,17,e.paramTransition$)===e.bootstrap.collapseHorizontalTransition),a(3),v("active",p(10,19,e.paramTransition$)===e.bootstrap.fadeTransition),a(4),u("ngModel",p(14,21,e.paramAnimation$)),a(4),u("ngModel",p(18,23,e.paramAnimationOnInit$)),a(4),u("ngModel",p(22,25,e.paramRemoveFromDom$)),a(4),u("ngModel",p(26,27,e.transition.stores.visible$)),a(11),_("visible = ",e.state().visible,""),a(2),_("transitioning = ",e.state().transitioning,""),a(2),_("shown = ",e.state().shown,""),a(2),_("hidden = ",e.state().hidden,""),a(),T(43,p(44,29,e.paramRemoveFromDom$)===!1||e.state().hidden===!1?43:-1))},dependencies:[O,B,V,U,x,P,y,I],encapsulation:2,changeDetection:0});let r=o;return r})();function K(r,o){r&1&&M(0,"app-transition-inner")}var re=(()=>{let o=class o{constructor(){this.showComponent=!0}};o.\u0275fac=function(c){return new(c||o)},o.\u0275cmp=h({type:o,selectors:[["ng-component"]],standalone:!0,features:[C],decls:6,vars:1,consts:[[1,"demo-transition","mb-3"],["id","toggle-component",1,"btn","btn-outline-secondary",3,"click"]],template:function(c,e){c&1&&(t(0,"h2"),i(1,"Transition example"),n(),t(2,"div",0)(3,"button",1),l("click",function(){return e.showComponent=!e.showComponent}),i(4,"Toggle component"),n(),b(5,K,1,0,"app-transition-inner"),n()),c&2&&(a(5),T(5,e.showComponent?5:-1))},dependencies:[y,Y],encapsulation:2,changeDetection:0});let r=o;return r})();export{re as default};
