import{j as k,p as h,v as D,f as _,g as I,c as u,a as y,b as g,h as d,e as P,U as z,t as x,X as E,r as w,i as T,k as v,n as b,u as A,w as C,P as S,l as F}from"./AppCommon-CHMWAYUs.js";import{P as f}from"./Pagination-CMfDfIML.js";import"./pageFactory-BMdGxeJT-QVv_xqau.js";import"./extendWidget-C7OLjdxS.js";import"./directive-CKEccryv-DchTFd9J.js";import"./pagination-DQTcHLgn-CIraD6oW.js";import"./writables-DoU_XYTX-EUJry9Cf.js";import"./Slot-obbjdEGN.js";import"./snippet-BpnQ07FJ.js";import"./config-CBsgdVTw.js";import"./config-Dx2j-Ppr.js";import"./actions-DuaCxCQE.js";import"./class-CpJXf2wP.js";function G(o,t){o.key==="Enter"&&t(o)}var R=x('<li class="au-custom-pages-item"><div class="mb-3 d-flex flex-nowrap px-2"><label id="paginationInputLabel" for="paginationInput" class="col-form-label me-2 ms-1">Page</label> <input type="text" inputmode="numeric" pattern="[0-9]*" class="form-control custom-pages-input" id="paginationInput" aria-labelledby="paginationInputLabel paginationDescription" style="width: 2.5rem"> <span id="paginationDescription" class="col-form-label text-nowrap px-2"> </span></div></li>');function X(o,t){h(t,!0);const c=/[^0-9]/g;function n(a){const e=a.currentTarget.value,i=parseInt(e);t.api.select(i),a.currentTarget.value=t.state.page.toString()}function l(a){a.currentTarget.value=a.currentTarget.value.replace(c,"")}var r=D(),m=_(r);I(m,()=>t.state.pages.length>0,a=>{var e=R(),i=d(e),s=g(d(i),2);s.__keydown=[G,n],s.__input=l;var p=g(s,2),L=d(p);P(()=>{E(s,t.state.page),w(L,`of ${t.state.pages.length??""}`)}),z("blur",s,n),u(a,e)}),u(o,r),y()}k(["keydown","input"]);var j=x("<p>A pagination with customized links:</p> <!> <hr> <p>A pagination with customized pages:</p> <!>",1);function Z(o,t){h(t,!1);const c=a=>["A","B","C","D","E","F"][a-1];let n=F(4);T();var l=j(),r=g(_(l),2);f(r,{get page(){return v(n)},set page(e){b(n,e)},collectionSize:60,previousPageLabel:"Prev",nextPageLabel:"Next",ariaLabel:"Page navigation with customized links",numberLabel:(e,i)=>{let s=()=>i==null?void 0:i().displayedPage;var p=A();P(()=>w(p,c(s()))),u(e,p)},$$slots:{numberLabel:!0},$$legacy:!0});var m=g(r,6);f(m,{get page(){return v(n)},set page(e){b(n,e)},collectionSize:60,ariaLabel:"Page navigation with customized pages",pagesDisplay:(e,i=S)=>{X(e,C(i))},$$slots:{pagesDisplay:!0},$$legacy:!0}),u(o,l),y()}export{Z as default};