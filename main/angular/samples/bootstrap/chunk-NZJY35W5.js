import{M as I,p as W,q as B}from"./chunk-ZYQOPGEK.js";import{H as x,I as D,ba as F,ea as E,ga as Y,la as N,ma as A}from"./chunk-XTZEDNZ5.js";import"./chunk-HJR7NZ5W.js";import{Ab as i,Bb as y,Db as S,Eb as T,Fb as v,Hb as V,La as m,_a as b,ab as M,ba as C,g as w,ka as c,la as u,lb as t,mb as n,nb as k,pb as f,qb as d,rb as g,zb as p}from"./chunk-4322ZIEN.js";function q(r,o){if(r&1){let _=f();t(0,"button",8),d("click",function(){c(_),g();let e=p(10);return u(e.api.close(!0))}),i(1,"Yes"),n(),t(2,"button",9),d("click",function(){c(_),g();let e=p(10);return u(e.api.close(!1))}),i(3,"No"),n()}}var z=(()=>{let o=class o{constructor(){this.message="",this.fullscreenToggle=!1}show(a){return w(this,null,function*(){this.message="";let e=yield a.api.open();e===D?this.message="You clicked on the close button.":e===x?this.message="You clicked outside the modal.":this.message=`You answered the question with "${e?"Yes":"No"}".`})}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=C({type:o,selectors:[["ng-component"]],standalone:!0,features:[V],decls:13,vars:3,consts:[["modal",""],["type","button",1,"btn","btn-primary",3,"click"],[1,"form-check","form-switch","mt-3"],["type","checkbox","role","switch","id","fullscreen",1,"form-check-input",3,"ngModelChange","ngModel"],["for","fullscreen",1,"form-check-label"],["data-testid","message"],["auModal","","auSlotTitle","Save changes",3,"auFullscreen"],["auModalFooter",""],["type","button",1,"btn","btn-outline-primary",3,"click"],["type","button",1,"btn","btn-outline-danger",3,"click"]],template:function(e,l){if(e&1){let h=f();t(0,"button",1),d("click",function(){c(h);let s=p(10);return u(l.show(s))}),i(1,"Launch demo modal"),n(),t(2,"div",2)(3,"input",3),v("ngModelChange",function(s){return c(h),T(l.fullscreenToggle,s)||(l.fullscreenToggle=s),u(s)}),n(),t(4,"label",4),i(5,"Fullscreen"),n()(),k(6,"hr"),t(7,"div",5),i(8),n(),t(9,"au-component",6,0),i(11," Do you want to save your changes? "),b(12,q,4,0,"ng-template",7),n()}e&2&&(m(3),S("ngModel",l.fullscreenToggle),m(5),y(l.message),m(),M("auFullscreen",l.fullscreenToggle))},dependencies:[I,B,W,A,F,E,N,Y],encapsulation:2});let r=o;return r})();export{z as default};