"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[400],{5400:(I,d,i)=>{i.r(d),i.d(d,{default:()=>k});var p=i(3054),g=i(7335),A=i(6937),c=i(7216),b=i(8286),_=i(8473),l=i(3645),m=i(9134),n=i(6985);const v=(o,u)=>({transition:o,animation:u});function C(o,u){if(1&o&&(n.TgZ(0,"div",9),n.ALo(1,"async"),n.ALo(2,"async"),n.TgZ(3,"div",10)(4,"div",11),n._uU(5,"You can collapse this card by clicking Toggle"),n.qZA()()()),2&o){const a=n.oxw();n.Q6J("auUse",a.transition.directives.directive)("auUseParams",n.WLB(6,v,n.lcZ(1,2,a.paramTransition$),n.lcZ(2,4,a.paramAnimation$)))}}const T=(0,l.fZ)(c.m),h=(0,l.fZ)(!0),Z=(0,l.fZ)(!1),y=(0,l.fZ)(!0),f=(0,l.fZ)(!0);let U=(()=>{class o{constructor(){this.bootstrap={collapseHorizontalTransition:c.n,collapseVerticalTransition:c.m,fadeTransition:b.A},this.paramTransition$=T,this.paramAnimation$=h,this.paramAnimationOnInit$=Z,this.paramRemoveFromDom$=f,this.transition=(0,_.v)({props:{animationOnInit:Z,animation:h,visible:y}}),this.state=(0,g.u6)(this.transition.state$)}changeTransition(a){this.transition.api.toggle(!1,!1),f.set(!0),T.set(a)}static#n=this.\u0275fac=function(s){return new(s||o)};static#t=this.\u0275cmp=n.Xpm({type:o,selectors:[["app-transition-inner"]],standalone:!0,features:[n.jDz],decls:45,vars:31,consts:[[1,"transition-inner"],[1,"mt-2"],["type","button",1,"ms-2","btn","btn-sm","btn-outline-secondary",3,"click"],[1,"form-check"],["type","checkbox",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"form-check","mb-2"],["type","button",1,"btn","btn-outline-primary",3,"click"],["type","button",1,"ms-2","btn","btn-outline-primary",3,"click"],["style","max-width: 300px;",3,"auUse","auUseParams"],[2,"max-width","300px",3,"auUse","auUseParams"],[1,"card",2,"width","300px"],[1,"card-body"]],template:function(s,t){1&s&&(n.TgZ(0,"div",0)(1,"p",1),n._uU(2," Transition: "),n.TgZ(3,"button",2),n.NdJ("click",function(){return t.changeTransition(t.bootstrap.collapseVerticalTransition)}),n.ALo(4,"async"),n._uU(5," Vertical collapse "),n.qZA(),n.TgZ(6,"button",2),n.NdJ("click",function(){return t.changeTransition(t.bootstrap.collapseHorizontalTransition)}),n.ALo(7,"async"),n._uU(8," Horizontal collapse "),n.qZA(),n.TgZ(9,"button",2),n.NdJ("click",function(){return t.changeTransition(t.bootstrap.fadeTransition)}),n.ALo(10,"async"),n._uU(11," Fade "),n.qZA()(),n.TgZ(12,"label",3)(13,"input",4),n.NdJ("ngModelChange",function(r){return t.paramAnimation$.set(r)}),n.ALo(14,"async"),n.qZA(),n._uU(15,"Animation"),n.qZA(),n.TgZ(16,"label",3)(17,"input",4),n.NdJ("ngModelChange",function(r){return t.paramAnimationOnInit$.set(r)}),n.ALo(18,"async"),n.qZA(),n._uU(19,"Animation on init"),n.qZA(),n.TgZ(20,"label",3)(21,"input",4),n.NdJ("ngModelChange",function(r){return t.paramRemoveFromDom$.set(r)}),n.ALo(22,"async"),n.qZA(),n._uU(23,"Remove from DOM"),n.qZA(),n.TgZ(24,"label",5)(25,"input",4),n.NdJ("ngModelChange",function(r){return t.transition.patch({visible:r})}),n.ALo(26,"async"),n.qZA(),n._uU(27,"Visible"),n.qZA(),n.TgZ(28,"button",6),n.NdJ("click",function(){return t.transition.api.toggle()}),n._uU(29,"Toggle"),n.qZA(),n.TgZ(30,"button",7),n.NdJ("click",function(){return t.transition.api.toggle(void 0,!0)}),n._uU(31,"Toggle with animation"),n.qZA(),n.TgZ(32,"button",7),n.NdJ("click",function(){return t.transition.api.toggle(void 0,!1)}),n._uU(33,"Toggle without animation"),n.qZA(),n.TgZ(34,"ul",1)(35,"li"),n._uU(36),n.qZA(),n.TgZ(37,"li"),n._uU(38),n.qZA(),n.TgZ(39,"li"),n._uU(40),n.qZA(),n.TgZ(41,"li"),n._uU(42),n.qZA()(),n.YNc(43,C,6,9,"div",8),n.ALo(44,"async"),n.qZA()),2&s&&(n.xp6(3),n.ekj("active",n.lcZ(4,15,t.paramTransition$)===t.bootstrap.collapseVerticalTransition),n.xp6(3),n.ekj("active",n.lcZ(7,17,t.paramTransition$)===t.bootstrap.collapseHorizontalTransition),n.xp6(3),n.ekj("active",n.lcZ(10,19,t.paramTransition$)===t.bootstrap.fadeTransition),n.xp6(4),n.Q6J("ngModel",n.lcZ(14,21,t.paramAnimation$)),n.xp6(4),n.Q6J("ngModel",n.lcZ(18,23,t.paramAnimationOnInit$)),n.xp6(4),n.Q6J("ngModel",n.lcZ(22,25,t.paramRemoveFromDom$)),n.xp6(4),n.Q6J("ngModel",n.lcZ(26,27,t.transition.stores.visible$)),n.xp6(11),n.hij("visible = ",t.state().visible,""),n.xp6(2),n.hij("transitioning = ",t.state().transitioning,""),n.xp6(2),n.hij("shown = ",t.state().shown,""),n.xp6(2),n.hij("hidden = ",t.state().hidden,""),n.xp6(),n.um2(43,!1===n.lcZ(44,29,t.paramRemoveFromDom$)||!1===t.state().hidden?43:-1))},dependencies:[A.NS,g.r7,m.u5,m.Wl,m.JJ,m.On,p.ez,p.Ov],encapsulation:2,changeDetection:0})}return o})();function $(o,u){1&o&&n._UZ(0,"app-transition-inner")}let k=(()=>{class o{constructor(){this.showComponent=!0}static#n=this.\u0275fac=function(s){return new(s||o)};static#t=this.\u0275cmp=n.Xpm({type:o,selectors:[["ng-component"]],standalone:!0,features:[n.jDz],decls:6,vars:1,consts:[[1,"demo-transition","mb-3"],["id","toggle-component",1,"btn","btn-outline-secondary",3,"click"]],template:function(s,t){1&s&&(n.TgZ(0,"h2"),n._uU(1,"Transition example"),n.qZA(),n.TgZ(2,"div",0)(3,"button",1),n.NdJ("click",function(){return t.showComponent=!t.showComponent}),n._uU(4,"Toggle component"),n.qZA(),n.YNc(5,$,1,0,"app-transition-inner"),n.qZA()),2&s&&(n.xp6(5),n.um2(5,t.showComponent?5:-1))},dependencies:[p.ez,U],encapsulation:2,changeDetection:0})}return o})()}}]);