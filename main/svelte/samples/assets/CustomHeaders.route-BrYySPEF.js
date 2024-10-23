import{p as U,s as V,i as W,f as O,b as _,c as I,a as X,t as k,d as Z,e as d,g as A,h,j as $,k as L,l as tt,n as et,q as b,r as K}from"./AppCommon-CHMWAYUs.js";import{a as t}from"./actions-DuaCxCQE.js";import{t as q}from"./class-CpJXf2wP.js";import{b as ot}from"./this-C0uP3rtE.js";import{A as it,I as E}from"./Item-DZ2uYZR0.js";import{w as rt}from"./config-Dx2j-Ppr.js";import{B as F}from"./body-DBRiX_SX.js";import{c as p}from"./directive-CKEccryv-DchTFd9J.js";import"./snippet-BpnQ07FJ.js";import"./config-CBsgdVTw.js";import"./accordion-BTu1y5n6-L03T6p2F.js";import"./baseTransitions-B9ugZAUu.js";import"./writables-DoU_XYTX-EUJry9Cf.js";import"./promise-CY2U8bTP-CRYFPrGb.js";import"./collapse-CVjUhnIz-B8JOvzBg.js";import"./cssTransitions-BcR-vTR8.js";import"./extendWidget-C7OLjdxS.js";import"./Slot-obbjdEGN.js";var at=k("<div><div></div></div>"),st=k('<div><p class="m-0"> </p> <button>Toggle first</button></div> <!>',1),nt=(H,M)=>L(M).api.collapseAll(),dt=k("<div><div></div></div>"),lt=k('<div><p class="m-0">Second panel</p> <div class="d-flex flex-wrap gap-2"><button>Toggle second</button> <button type="button" class="btn btn-sm btn-outline-secondary"> </button> <button type="button" class="btn btn-sm btn-outline-danger">Collapse all</button></div></div> <!>',1),ct=k(`<p class="text-muted m-0 small">[I'm&nbsp;disabled]</p>`),vt=k("<div><div></div></div>"),ut=k("<div><button>Third panel</button> <!></div> <!>",1),bt=k("<!> <!> <!>",1);function gt(H,M){U(M,!1);const Q=V(),P=()=>Z(S,"$thirdItemDisabled$",Q);let N=tt();const S=rt(!1);W(),ot(it(H,{children:(T,pt)=>{var Y=bt(),z=O(Y);E(z,{structure:(j,o)=>{let v=()=>o==null?void 0:o().state,l=()=>o==null?void 0:o().directives;var D=st(),i=O(D);let y;d(()=>y=b(i,y,{role:"heading","aria-level":2}));var m=h(i),f=h(m),x=_(m,2);let C;d(()=>C=b(x,C,{type:"button"}));var n=_(i,2);A(n,()=>v().shouldBeInDOM,e=>{var c=at();let r;d(()=>r=b(c,r,{}));var a=h(c);let u;d(()=>u=b(a,u,{})),a.textContent=F,t(a,(s,B)=>p(s,B),()=>"accordion-body"),t(a,s=>l().bodyDirective(s)),t(c,(s,B)=>p(s,B),()=>"accordion-collapse"),t(c,s=>l().bodyContainerDirective(s)),I(e,c)}),d(()=>{q(i,"collapsed",!v().visible),K(f,`First panel - ${(v().visible?"opened":"collapsed")??""}`)}),t(x,e=>l().toggleDirective(e)),t(x,(e,c)=>p(e,c),()=>"btn btn-link p-0 "+v().buttonClassName+" au-accordion-item-button"),t(i,e=>l().headerDirective(e)),t(i,(e,c)=>p(e,c),()=>"accordion-button accordion-header custom-header justify-content-between"),I(j,D)},$$slots:{structure:!0}});var G=_(z,2);E(G,{structure:(j,o)=>{let v=()=>o==null?void 0:o().state,l=()=>o==null?void 0:o().directives;var D=lt(),i=O(D);let y;d(()=>y=b(i,y,{role:"heading","aria-level":2}));var m=_(h(i),2),f=h(m);let x;d(()=>x=b(f,x,{type:"button"}));var C=_(f,2);C.__click=()=>S.update(r=>!r);var n=h(C),e=_(C,2);e.__click=[nt,N];var c=_(i,2);A(c,()=>v().shouldBeInDOM,r=>{var a=dt();let u;d(()=>u=b(a,u,{}));var s=h(a);let B;d(()=>B=b(s,B,{})),s.textContent=F,t(s,(w,g)=>p(w,g),()=>"accordion-body"),t(s,w=>l().bodyDirective(w)),t(a,(w,g)=>p(w,g),()=>"accordion-collapse"),t(a,w=>l().bodyContainerDirective(w)),I(r,a)}),d(()=>{q(i,"collapsed",!v().visible),K(n,`${(P()?"En":"Dis")??""}able third`)}),t(f,r=>l().toggleDirective(r)),t(f,(r,a)=>p(r,a),()=>"btn btn-sm btn-outline-primary "+v().buttonClassName+" au-accordion-item-button"),t(i,r=>l().headerDirective(r)),t(i,(r,a)=>p(r,a),()=>"accordion-button accordion-header custom-header justify-content-between"),I(j,D)},$$slots:{structure:!0}});var R=_(G,2);E(R,{get disabled(){return P()},structure:(j,o)=>{let v=()=>o==null?void 0:o().state,l=()=>o==null?void 0:o().directives;var D=ut(),i=O(D);let y;d(()=>y=b(i,y,{role:"heading","aria-level":2}));var m=h(i);let f;d(()=>f=b(m,f,{type:"button"}));var x=_(m,2);A(x,()=>v().disabled,n=>{var e=ct();I(n,e)});var C=_(i,2);A(C,()=>v().shouldBeInDOM,n=>{var e=vt();let c;d(()=>c=b(e,c,{}));var r=h(e);let a;d(()=>a=b(r,a,{})),r.textContent=F,t(r,(u,s)=>p(u,s),()=>"accordion-body"),t(r,u=>l().bodyDirective(u)),t(e,(u,s)=>p(u,s),()=>"accordion-collapse"),t(e,u=>l().bodyContainerDirective(u)),I(n,e)}),d(()=>q(i,"collapsed",!v().visible)),t(m,n=>l().toggleDirective(n)),t(m,(n,e)=>p(n,e),()=>"p-0 btn btn-link container-fluid text-start "+v().buttonClassName+" au-accordion-item-button"),t(i,n=>l().headerDirective(n)),t(i,(n,e)=>p(n,e),()=>"accordion-header accordion-button custom-header justify-content-between"),I(j,D)},$$slots:{structure:!0}}),I(T,Y)},$$slots:{default:!0},$$legacy:!0}),T=>et(N,T),()=>L(N)),X()}$(["click"]);export{gt as default};