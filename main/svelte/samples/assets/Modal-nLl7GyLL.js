import{p as O,f as S,s as y,d as C,b as l,a as T,t as c,M as H,e as f,c as M,l as B,P as z,v as E,Q as F}from"./AppCommon-BIOVedX1.js";import{a as n}from"./actions-7pTMrPq9.js";import{s as A}from"./class-DOHDOVt-.js";import{c as G,m as I,a as J}from"./modal-Cx3OgTln-Iku29FmZ.js";import{f as N}from"./fade-uOobJKgw-Cvu94tAj.js";import{e as K}from"./extendWidget-B5qQLZwf.js";import{t as L}from"./writables-DCiBdIBK-DYBhYJMH.js";import{S as k}from"./Slot-DPwmoMlC.js";import{c as R}from"./config-OFHUKBGn.js";import{c as w}from"./directive-CKEccryv-CY3XbVHQ.js";const U={contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0,fullscreen:!1},X={backdropTransition:N,modalTransition:N},Y={fullscreen:L,contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0},Z=K(G,U,Y,X),$=Z,kt=I,Ct=J;var tt=c("<button></button>"),et=c('<h5 class="modal-title"><!></h5> <!>',1);function ot(g,t){O(t,!0);let v=H(t,["$$slots","$$events","$$legacy"]);var u=et(),s=S(u),p=f(s);k(p,{get content(){return t.state.title},get props(){return v}});var m=y(s,2);C(m,()=>t.state.closeButton,_=>{var o=tt();let a;M(()=>a=B(o,a,{})),n(o,(r,x)=>w(r,x),()=>"btn-close"),n(o,r=>t.directives.closeButtonDirective(r)),l(_,o)}),l(g,u),T()}var at=c('<div class="modal-header"><!></div>'),rt=c('<div class="modal-footer"><!></div>'),it=c('<!> <div class="modal-body"><!></div> <!>',1);function st(g,t){O(t,!0);let v=H(t,["$$slots","$$events","$$legacy"]);var u=it(),s=S(u);C(s,()=>t.state.title,o=>{var a=at(),r=f(a);k(r,{get content(){return t.state.header},get props(){return v}}),l(o,a)});var p=y(s,2),m=f(p);k(m,{get content(){return t.state.children},get props(){return v}});var _=y(p,2);C(_,()=>t.state.footer,o=>{var a=rt(),r=f(a);k(r,{get content(){return t.state.footer},get props(){return v}}),l(o,a)}),l(g,u),T()}var dt=c("<div></div>"),nt=c('<div><div><div class="modal-content"><!></div></div></div>'),lt=c("<!> <!>",1);function Dt(g,t){O(t,!0);const v=(i,e=F)=>{st(i,E(e))},u=(i,e=F)=>{ot(i,E(e))};let s=z(t,"visible",15),p=H(t,["$$slots","$$events","$$legacy","visible"]);const m=R({factory:$,widgetName:"modal",get props(){return{...p,visible:s()}},enablePatchChanged:!0,defaultConfig:{header:u,structure:v},events:{onVisibleChange:i=>{s(i)}}}),_=m.api,{directives:{backdropDirective:o,backdropPortalDirective:a,modalDirective:r,modalPortalDirective:x},state:D}=m;var V=lt(),W=S(V);C(W,()=>!D.backdropHidden,i=>{var e=dt();let b;M(()=>b=B(e,b,{})),n(e,(d,P)=>w(d,P),()=>"modal-backdrop"),n(e,d=>a(d)),n(e,d=>o(d)),l(i,e)});var Q=y(W,2);return C(Q,()=>!D.hidden,i=>{var e=nt();let b;M(()=>b=B(e,b,{}));var d=f(e),P=f(d),j=f(P);k(j,{get content(){return D.structure},props:m}),M(()=>A(d,`modal-dialog ${(D.fullscreen?"modal-fullscreen":"")??""}`)),n(e,(h,q)=>w(h,q),()=>"modal d-block"),n(e,h=>x(h)),n(e,h=>r(h)),l(i,e)}),l(g,V),T({api:_})}export{Dt as M,kt as a,Ct as e};
