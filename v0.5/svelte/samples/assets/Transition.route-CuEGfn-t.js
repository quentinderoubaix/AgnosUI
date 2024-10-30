import{ai as b,h as P,p as kt,u as gt,i as xt,s as a,e as n,c as Q,d as N,b as T,ar as r,a as yt,t as w,x as s,l as Tt,g as A,n as p,au as wt,j as At,k as Vt}from"./AppCommon-Cm-6NtnE.js";import{a as Ot}from"./actions-gBvwwZne.js";import{t as f}from"./class-CZUVYx7F.js";import{b as v}from"./input-DVSvjeX4.js";import{c as V,a as S}from"./collapse-CVjUhnIz-D8uAhyOF.js";import{f as U}from"./fade-uOobJKgw-CA5Q4wdK.js";import{c as It}from"./baseTransitions-B-oSxy54.js";import"./shared-CeO5upHl.js";import"./directive-CKEccryv-gyIcW13B.js";import"./cssTransitions-Crcz6VTe.js";import"./promise-CY2U8bTP-Di3LO9sj.js";import"./simpleClassTransition-Ct7U0yg9.js";import"./writables-DCiBdIBK-BYLEJlA0.js";const k=b(V),g=b(!0),x=b(!1),Dt=b(!0),y=b(!0);var Ft=(o,t)=>t(V),Rt=(o,t)=>t(S),Bt=(o,t)=>t(U),zt=(o,t)=>t(),Ht=(o,t)=>t(void 0,!0),jt=(o,t)=>t(void 0,!1),qt=w('<div><div class="card" style="width: 300px;"><div class="card-body">You can collapse this card by clicking Toggle</div></div></div>'),Ct=w('<div class="transition-inner"><div class="h6 mt-2">Transition:</div> <div class="d-flex flex-wrap gap-2"><button type="button" class="btn btn-sm btn-outline-secondary">Vertical collapse</button> <button type="button" class="btn btn-sm btn-outline-secondary">Horizontal collapse</button> <button type="button" class="btn btn-sm btn-outline-secondary">Fade</button></div> <div class="h6 mt-2">Other properties:</div> <label class="form-check"><input type="checkbox" class="form-check-input">Animated</label> <label class="form-check"><input type="checkbox" class="form-check-input">Animated on init</label> <label class="form-check"><input type="checkbox" class="form-check-input">Remove from DOM</label> <label class="form-check mb-2"><input type="checkbox" class="form-check-input">Visible</label> <div class="d-flex flex-wrap gap-2"><button type="button" class="btn btn-outline-primary">Toggle</button> <button type="button" class="btn btn-outline-primary">Toggle with animation</button> <button type="button" class="btn btn-outline-primary">Toggle without animation</button></div> <ul class="mt-2"><li> </li> <li> </li> <li> </li> <li> </li></ul> <!></div>');function Mt(o,t){kt(t,!1);const e=gt(),c=()=>s(y,"$paramRemoveFromDom$",e),l=()=>s(k,"$paramTransition$",e),d=()=>s(g,"$paramAnimated$",e),W=()=>s(x,"$paramAnimatedOnInit$",e),X=()=>s(D,"$checkBoxVisible$",e),Z=()=>s(I,"$visible$",e),tt=()=>s(it,"$transitioning$",e),at=()=>s(nt,"$shown$",e),O=()=>s(et,"$hidden$",e),{stores:{visible$:I,transitioning$:it,shown$:nt,hidden$:et},api:{toggle:m},directives:{directive:ot},patch:st}=It({props:{animatedOnInit:x,animated:g,visible:Dt,transition:k}}),D={subscribe:I.subscribe,set:i=>st({visible:i})},_=i=>{m(!1,!1),r(y,!0),r(k,i)};xt();var F=Ct(),R=a(n(F),2),u=n(R);u.__click=[Ft,_];var $=a(u,2);$.__click=[Rt,_];var B=a($,2);B.__click=[Bt,_];var z=a(R,4),rt=n(z),H=a(z,2),ct=n(H),j=a(H,2),lt=n(j),q=a(j,2),bt=n(q),C=a(q,2),M=n(C);M.__click=[zt,m];var Y=a(M,2);Y.__click=[Ht,m];var mt=a(Y,2);mt.__click=[jt,m];var E=a(C,2),G=n(E),pt=n(G),J=a(G,2),vt=n(J),K=a(J,2),dt=n(K),_t=a(K,2),ut=n(_t),$t=a(E,2);Q($t,()=>!c()||!O(),i=>{var h=qt();const ht=wt(()=>({}));let L;N(()=>L=Tt(h,L,{style:"max-width: 300px;",...A(ht)})),Ot(h,ft=>ot(ft)),T(i,h)}),N(()=>{f(u,"active",l()===V),f($,"active",l()===S),f(B,"active",l()===U),p(pt,`visible = ${Z()??""}`),p(vt,`transitioning = ${tt()??""}`),p(dt,`shown = ${at()??""}`),p(ut,`hidden = ${O()??""}`)}),v(rt,d,i=>r(g,i)),v(ct,W,i=>r(x,i)),v(lt,c,i=>r(y,i)),v(bt,X,i=>r(D,i)),T(o,F),yt()}P(["click"]);var Yt=(o,t)=>At(t,!A(t)),Et=w('<div class="demo-transition mb-3"><button id="toggle-component" class="btn btn-outline-secondary">Toggle component</button> <!></div>');function aa(o){let t=Vt(!0);var e=Et(),c=n(e);c.__click=[Yt,t];var l=a(c,2);Q(l,()=>A(t),d=>{Mt(d,{})}),T(o,e)}P(["click"]);export{aa as default};