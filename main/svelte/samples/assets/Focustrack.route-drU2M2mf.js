import{p as U,R as V,U as N,V as W,W as X,e as c,b as s,h as a,Q as z,c as d,a as B,n as G,t as u,j as J,k as i,q as K,g as M,f as P,r as x,S as T,X as Y}from"./AppCommon-CC-VkUgW.js";import{a as y}from"./actions-D-dhIHRy.js";import{f as F}from"./index-client-CGLt60GO.js";import{c as Z,a as $}from"./focustrack-9hjk9Hwz.js";import{c as tt}from"./directive-CKEccryv-BuQmRVBG.js";var at=(v,o)=>G(o,N([])),et=u("with id <strong> </strong>",1),st=u("<li><strong> </strong> <!></li>"),rt=u('<div class="demo-focustrack"><div><h5>Container</h5> <input class="form-control" type="text" placeholder="Focusable input" id="focusableInput"><br> <input class="form-control" type="text" placeholder="Other focusable input" id="otherFocusableInput"></div> <input class="form-control" type="text" placeholder="Disabled input" id="disabledInput" disabled><br> <div class="form-check mb-2"><input class="form-check-input" type="checkbox" id="containerHasFocus" disabled> <label class="form-check-label" for="containerHasFocus">Focus in container</label></div> <div class="d-flex justify-content-between"><div>Active element history:</div> <button class="btn btn-sm btn-primary">Clear</button></div> <div class="card my-2"><div class="card-body"><ul class="mb-0"></ul></div></div></div>');function dt(v,o){U(o,!0);const{hasFocus$:w,directive:C}=Z(),E=F(w),l=F($);let n=V(N([]));W(()=>{l.current,X(()=>{var t,e;return i(n).push({tagName:(t=l.current)==null?void 0:t.tagName.toLowerCase(),id:((e=l.current)==null?void 0:e.id)||void 0})})});var p=rt(),r=a(p);let m;c(()=>m=K(r,m,{}));var b=s(r,5),H=a(b),f=s(b,2),I=s(a(f),2);I.__click=[at,n];var j=s(f,2),D=a(j),S=a(D);z(S,21,()=>i(n),T,(t,e)=>{let q=()=>i(e).tagName,h=()=>i(e).id;var _=st(),g=a(_),A=a(g),L=s(g,2);M(L,h,O=>{var k=et(),Q=s(P(k)),R=a(Q);c(()=>x(R,h())),d(O,k)}),c(()=>x(A,q())),d(t,_)}),c(()=>Y(H,E.current)),y(r,t=>C(t)),y(r,(t,e)=>tt(t,e),()=>"my-2 p-2 border"),d(v,p),B()}J(["click"]);export{dt as default};
