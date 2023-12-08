"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3],{4003:(E,C,o)=>{o.r(C),o.d(C,{ChildComponent:()=>u,default:()=>c});var d=o(3865),e=o(6442);function m(i,p){if(1&i){const s=e.EpF();e.TgZ(0,"au-component",0),e.NdJ("auHidden",function(){const f=e.CHM(s).$implicit,_=e.oxw();return e.KtG(_.removeAlert(f))}),e.qZA()}if(2&i){const s=p.$implicit;e.Q6J("auAnimation",s.animation)("auAnimationOnInit",s.animationOnInit)("auDismissible",s.dismissible)("auType",s.type)("auSlotDefault",s.slotDefault)}}let D=(()=>{class i{constructor(){this.alerts=[]}add(s){this.alerts.push(s)}remove(s){this.alerts=this.alerts.filter(r=>r!==s)}clear(){this.alerts=[]}static#t=this.\u0275fac=function(r){return new(r||i)};static#e=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),u=(()=>{class i{constructor(s){this.alertContainerService=s}removeAlert(s){this.alertContainerService.remove(s)}static#t=this.\u0275fac=function(r){return new(r||i)(e.Y36(D))};static#e=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-alert-child"]],standalone:!0,features:[e.jDz],decls:2,vars:0,consts:[["auAlert","",3,"auAnimation","auAnimationOnInit","auDismissible","auType","auSlotDefault","auHidden"],["auAlert","",3,"auAnimation","auAnimationOnInit","auDismissible","auType","auSlotDefault"]],template:function(r,t){1&r&&e.SjG(0,m,1,5,"au-component",1,e.x6l),2&r&&e.wJu(t.alertContainerService.alerts)},dependencies:[d.wx],encapsulation:2})}return i})(),c=(()=>{class i{constructor(s){this.alertContainerService=s}addError(){this.alertContainerService.add({type:"danger",slotDefault:"Error",dismissible:!0,animation:!0})}addWarning(){this.alertContainerService.add({type:"warning",slotDefault:"Warning",dismissible:!0,animation:!0})}addInfo(){this.alertContainerService.add({type:"info",slotDefault:"Info",dismissible:!0,animation:!0})}static#t=this.\u0275fac=function(r){return new(r||i)(e.Y36(D))};static#e=this.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],standalone:!0,features:[e.jDz],decls:10,vars:1,consts:[[1,"btn","btn-primary","addError","me-1",3,"click"],[1,"btn","btn-primary","addInfo","me-1",3,"click"],[1,"btn","btn-primary","addWarning","me-1",3,"click"],[1,"alertCount","mb-3"]],template:function(r,t){1&r&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return t.addError()}),e._uU(1,"Add error"),e.qZA(),e.TgZ(2,"button",1),e.NdJ("click",function(){return t.addInfo()}),e._uU(3,"Add info"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return t.addWarning()}),e._uU(5,"Add warning"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"div",3),e._uU(8),e.qZA(),e._UZ(9,"app-alert-child")),2&r&&(e.xp6(8),e.hij("Alerts in the service: ",t.alertContainerService.alerts.length,""))},dependencies:[u],encapsulation:2})}return i})()},3928:(E,C,o)=>{o.d(C,{i:()=>e});var d=o(6442);let e=(()=>{class m{constructor(){this.templateRef=(0,d.f3M)(d.Rgc)}ngOnInit(){this.auSlotDefault.update(u=>({...u,slotDefault:this.templateRef}))}static#t=this.\u0275fac=function(c){return new(c||m)};static#e=this.\u0275dir=d.lG2({type:m,selectors:[["","auSlotDefault",""]],inputs:{auSlotDefault:"auSlotDefault"},standalone:!0})}return m})()},2389:(E,C,o)=>{o.d(C,{e:()=>m,r:()=>D});var d=o(7791),e=o(6442);const m=(u,c)=>{const i=(0,e.f3M)(e.SBq);let p=u?.(i.nativeElement,c);function s(){return r.apply(this,arguments)}function r(){return(r=(0,d.Z)(function*(){const _=p;p=void 0,u=void 0,_?.destroy&&(yield 0,_.destroy?.())})).apply(this,arguments)}function f(){return(f=(0,d.Z)(function*(_,A){_!==u?(s(),u=_,c=A,_&&(yield 0,u===_&&!p&&(p=u(i.nativeElement,c)))):A!=c&&(c=A,yield 0,p?.update?.(c))})).apply(this,arguments)}return(0,e.f3M)(e.ktI).onDestroy(s),{update:function t(_,A){return f.apply(this,arguments)}}};let D=(()=>{class u{#t=m();ngOnChanges(){this.#t.update(this.use,this.params)}static#e=this.\u0275fac=function(p){return new(p||u)};static#n=this.\u0275dir=e.lG2({type:u,selectors:[["","auUse",""]],inputs:{use:["auUse","use"],params:["auUseParams","params"]},standalone:!0,features:[e.TTD]})}return u})()},3865:(E,C,o)=>{o.d(C,{ho:()=>P,lA:()=>y,wx:()=>W});var d=o(8176),e=o(1358),m=o(3939),D=o(1756),u=o(5261),c=o(1177),i=o(9844),p=o(2389),s=o(3928),r=o(7947),t=o(6442);const f=["structure"];function _(n,g){}function A(n,g){if(1&n){const a=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){t.CHM(a);const h=t.oxw().widget;return t.KtG(h.api.close())}),t.qZA()}if(2&n){const a=t.oxw().state;t.uIk("aria-label",a.ariaCloseButtonLabel)}}const T=(n,g)=>({state:n,widget:g});function O(n,g){if(1&n&&(t.TgZ(0,"div",2),t.YNc(1,_,0,0,"ng-template",3),t.qZA(),t.YNc(2,A,1,1,"button",4)),2&n){const a=g.state,l=g.widget;t.xp6(1),t.Q6J("auSlot",a.slotDefault)("auSlotProps",t.WLB(3,T,a,l)),t.xp6(1),t.um2(2,a.dismissible?2:-1)}}const M=["auAlert",""];function b(n,g){1&n&&t.Hsn(0)}function I(n,g){}function R(n,g){if(1&n&&(t.TgZ(0,"div",2),t.YNc(1,I,0,0,"ng-template",3),t.qZA()),2&n){const a=t.oxw();t.IyS("au-alert alert alert-",a.state().type," ",a.state().className," ",a.state().dismissible?"alert-dismissible":"",""),t.Q6J("auUse",a.widget.directives.transitionDirective),t.xp6(1),t.Q6J("auSlot",a.state().slotStructure)("auSlotProps",t.WLB(8,T,a.state(),a.widget))}}const U=["*"];let P=(()=>{class n{constructor(){this.templateRef=(0,t.f3M)(t.Rgc)}static ngTemplateContextGuard(a,l){return!0}static#t=this.\u0275fac=function(l){return new(l||n)};static#e=this.\u0275dir=t.lG2({type:n,selectors:[["ng-template","auAlertBody",""]],standalone:!0})}return n})(),y=(()=>{class n{constructor(){this.templateRef=(0,t.f3M)(t.Rgc)}static ngTemplateContextGuard(a,l){return!0}static#t=this.\u0275fac=function(l){return new(l||n)};static#e=this.\u0275dir=t.lG2({type:n,selectors:[["ng-template","auAlertStructure",""]],standalone:!0})}return n})();const B={slotStructure:new e.T((()=>{class n{static#t=this.\u0275fac=function(l){return new(l||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],viewQuery:function(l,h){if(1&l&&t.Gf(f,7),2&l){let S;t.iGM(S=t.CRH())&&(h.structure=S.first)}},standalone:!0,features:[t.jDz],decls:2,vars:0,consts:[["auAlertStructure",""],["structure",""],[1,"alert-body"],[3,"auSlot","auSlotProps"],["type","button","class","btn-close"],["type","button",1,"btn-close",3,"click"]],template:function(l,h){1&l&&t.YNc(0,O,3,6,"ng-template",0,1,t.W1O)},dependencies:[d.N,y],encapsulation:2,changeDetection:0})}return n})(),"structure")};let W=(()=>{class n{constructor(){this.visibleChange=new t.vpe,this.hidden=new t.vpe,this.shown=new t.vpe,this.defaultSlots=(0,r.fZ)(B),this._widget=(0,m.B)({factory:D.el,widgetName:"alert",defaultConfig:this.defaultSlots,events:{onVisibleChange:a=>this.visibleChange.emit(a),onShown:()=>this.shown.emit(),onHidden:()=>this.hidden.emit()}}),this.widget=(0,u.K)(this._widget),this.api=this._widget.api,this.state=(0,c.u6)(this._widget.state$)}ngAfterContentChecked(){this._widget.patchSlots({slotDefault:this.slotDefaultFromContent?.templateRef,slotStructure:this.slotStructureFromContent?.templateRef})}ngOnChanges(a){(0,c.YW)(this._widget.patch,a)}static#t=this.\u0275fac=function(l){return new(l||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["","auAlert",""]],contentQueries:function(l,h,S){if(1&l&&(t.Suo(S,P,5),t.Suo(S,y,5)),2&l){let v;t.iGM(v=t.CRH())&&(h.slotDefaultFromContent=v.first),t.iGM(v=t.CRH())&&(h.slotStructureFromContent=v.first)}},inputs:{type:["auType","type"],dismissible:["auDismissible","dismissible",i.P],transition:["auTransition","transition"],visible:["auVisible","visible",i.P],animationOnInit:["auAnimationOnInit","animationOnInit",i.P],animation:["auAnimation","animation",i.P],ariaCloseButtonLabel:["auAriaCloseButtonLabel","ariaCloseButtonLabel"],slotDefault:["auSlotDefault","slotDefault"],slotStructure:["auSlotStructure","slotStructure"],className:["auClassName","className"]},outputs:{visibleChange:"auVisibleChange",hidden:"auHidden",shown:"auShown"},standalone:!0,features:[t.Xq5,t.TTD,t.jDz],attrs:M,ngContentSelectors:U,decls:2,vars:2,consts:[[3,"auSlotDefault"],["role","alert",3,"auUse","class"],["role","alert",3,"auUse"],[3,"auSlot","auSlotProps"]],template:function(l,h){1&l&&(t.F$t(),t.YNc(0,b,1,0,"ng-template",0)(1,R,2,11,"div",1)),2&l&&(t.Q6J("auSlotDefault",h.defaultSlots),t.xp6(1),t.um2(1,h.state().hidden?-1:1))},dependencies:[d.N,p.r,s.i],encapsulation:2,changeDetection:0})}return n})()}}]);