import{E as T}from"./chunk-JRRF5PEA.js";import"./chunk-SBJUXELN.js";import"./chunk-DMXSLBKY.js";import{$a as v,Bb as l,Db as k,Ib as u,La as y,Q as b,W as c,_ as m,ha as _,hb as A,ia as h,ib as g,jb as P,kb as r,lb as a,mb as p,ob as I,pb as o,qb as S}from"./chunk-WXQMDDQY.js";function E(t,n){if(t&1){let e=I();r(0,"au-component",1),o("auHidden",function(){let s=_(e).$implicit,D=S();return h(D.removeAlert(s))}),a()}if(t&2){let e=n.$implicit;v("auAnimated",e.animated)("auAnimatedOnInit",e.animatedOnInit)("auDismissible",e.dismissible)("auType",e.type)("auChildren",e.children)}}var d=class t{constructor(){this.alerts=[]}add(n){this.alerts.push(n)}remove(n){this.alerts=this.alerts.filter(e=>e!==n)}clear(){this.alerts=[]}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}},f=class t{constructor(){this.alertContainerService=c(d)}removeAlert(n){this.alertContainerService.remove(n)}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-alert-child"]],standalone:!0,features:[u],decls:2,vars:0,consts:[["auAlert","",3,"auAnimated","auAnimatedOnInit","auDismissible","auType","auChildren"],["auAlert","",3,"auHidden","auAnimated","auAnimatedOnInit","auDismissible","auType","auChildren"]],template:function(e,i){e&1&&g(0,E,1,5,"au-component",0,A),e&2&&P(i.alertContainerService.alerts)},dependencies:[T],encapsulation:2})}},C=class t{constructor(){this.alertContainerService=c(d)}addError(){this.alertContainerService.add({type:"danger",children:"Error",dismissible:!0,animated:!0})}addWarning(){this.alertContainerService.add({type:"warning",children:"Warning",dismissible:!0,animated:!0})}addInfo(){this.alertContainerService.add({type:"info",children:"Info",dismissible:!0,animated:!0})}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=m({type:t,selectors:[["ng-component"]],standalone:!0,features:[u],decls:10,vars:1,consts:[[1,"btn","btn-primary","addError","me-1",3,"click"],[1,"btn","btn-primary","addInfo","me-1",3,"click"],[1,"btn","btn-primary","addWarning","me-1",3,"click"],[1,"alertCount","mb-3"]],template:function(e,i){e&1&&(r(0,"button",0),o("click",function(){return i.addError()}),l(1,"Add error"),a(),r(2,"button",1),o("click",function(){return i.addInfo()}),l(3,"Add info"),a(),r(4,"button",2),o("click",function(){return i.addWarning()}),l(5,"Add warning"),a(),p(6,"br"),r(7,"div",3),l(8),a(),p(9,"app-alert-child")),e&2&&(y(8),k("Alerts in the service: ",i.alertContainerService.alerts.length,""))},dependencies:[f],encapsulation:2})}};export{f as ChildComponent,C as default};
