import{p as z,f as A,b as i,h as r,Q as B,k as a,c as v,a as E,t as f,j as F,n as o,R as n,e as G,r as H,S as J}from"./AppCommon-CC-VkUgW.js";import{b as h}from"./input-DacpPey5.js";import{b as K}from"./select-Hq1gNp9J.js";import{b as L}from"./this-BpCy0nt8.js";import{A as M}from"./Alert-BiomAe2y.js";import"./shared-DQoMxUaM.js";import"./actions-D-dhIHRy.js";import"./Slot-9PryA5S7.js";import"./snippet-hepiiy-w.js";import"./alert-BZyrc6h_-opiM1DRI.js";import"./common-BHk3fJTO-MNBAYIFY.js";import"./baseTransitions-uDH1MRPt.js";import"./writables-DoU_XYTX-slp4MWt3.js";import"./directive-CKEccryv-BuQmRVBG.js";import"./promise-CY2U8bTP-FiA19x-Q.js";import"./extendWidget-wveUl8Yn.js";import"./fade-uOobJKgw-CGZdjDpc.js";import"./simpleClassTransition-B3bjBBtd.js";import"./cssTransitions-DzsLCwoN.js";import"./config-DXyDsFs3.js";import"./config-BOSa1FB8.js";import"./index-client-CGLt60GO.js";var j=(t=>(t.success="success",t.info="info",t.warning="warning",t.danger="danger",t.primary="primary",t.secondary="secondary",t.light="light",t.dark="dark",t))(j||{}),N=f("<option> </option>"),U=f(`<h4 class="alert-heading">Well done!</h4> <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing
		within an alert works with this kind of content.</p> <hr> <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>`,1),V=f('<button class="btn btn-primary showAlert" type="button">Show alert</button> <br> <br> <div class="d-flex flex-column"><div class="d-flex form-group"><label class="align-self-center me-3" for="typeSelect">Alert type:</label> <select id="typeSelect" class="form-select w-auto"></select></div> <label><input class="form-check-input me-1" type="checkbox">Animated on init</label> <label><input class="form-check-input me-1" type="checkbox">Animated</label> <label><input class="dismissibleInput form-check-input me-1" type="checkbox">Dismissible</label></div> <br> <br> <!>',1);function ge(t,W){z(W,!0);let p,c=n(!0),m=n(!0),u=n(!0),d=n("success");const $=Object.entries(j).map(e=>({value:e[1],label:e[0]}));var g=V(),_=A(g);_.__click=()=>p.api.open();var y=i(_,6),k=r(y),x=i(r(k),2);B(x,21,()=>$,J,(e,b)=>{let l=()=>a(b).value,T=()=>a(b).label;var s=N(),O={},q=r(s);G(()=>{O!==(O=l())&&(s.value=(s.__value=l())==null?"":l()),H(q,T())}),v(e,s)});var w=i(k,2),C=r(w),I=i(w,2),D=r(I),P=i(I,2),Q=r(P),R=i(y,6);L(M(R,{get dismissible(){return a(u)},get animatedOnInit(){return a(c)},get animated(){return a(m)},get type(){return a(d)},children:(e,b)=>{var l=U();v(e,l)},$$slots:{default:!0}}),e=>p=e,()=>p),K(x,()=>a(d),e=>o(d,e)),h(C,()=>a(c),e=>o(c,e)),h(D,()=>a(m),e=>o(m,e)),h(Q,()=>a(u),e=>o(u,e)),v(t,g),E()}F(["click"]);export{ge as default};
