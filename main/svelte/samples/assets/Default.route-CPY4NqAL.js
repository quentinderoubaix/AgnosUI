import{b as a,f as b,k as i,n as r,e as _,c as $,t as y,h as d,l as m,r as k}from"./AppCommon-CHMWAYUs.js";import{P as o}from"./Pagination-CMfDfIML.js";import"./pageFactory-BMdGxeJT-QVv_xqau.js";import"./extendWidget-C7OLjdxS.js";import"./directive-CKEccryv-DchTFd9J.js";import"./pagination-DQTcHLgn-CIraD6oW.js";import"./writables-DoU_XYTX-EUJry9Cf.js";import"./Slot-obbjdEGN.js";import"./snippet-BpnQ07FJ.js";import"./config-CBsgdVTw.js";import"./config-Dx2j-Ppr.js";import"./actions-DuaCxCQE.js";import"./class-CpJXf2wP.js";var z=y('<h5>Basic pagination:</h5> <!> <h5>No direction links:</h5> <!> <h5>With boundary links:</h5> <!> <div class="mb-3">Current page: <span id="defaultPage"> </span></div> <h5>Disabled pagination:</h5> <!>',1);function E(u){let e=m(4),n=m(1);var p=z(),s=a(b(p),2);o(s,{get page(){return i(e)},set page(t){r(e,t)},collectionSize:60,$$legacy:!0});var l=a(s,4);o(l,{get page(){return i(e)},set page(t){r(e,t)},collectionSize:60,directionLinks:!1,$$legacy:!0});var g=a(l,4);o(g,{get page(){return i(e)},set page(t){r(e,t)},collectionSize:60,boundaryLinks:!0,$$legacy:!0});var c=a(g,2),f=a(d(c)),h=d(f),v=a(c,4);o(v,{get page(){return i(n)},set page(t){r(n,t)},collectionSize:60,disabled:!0,ariaLabel:"Disabled pagination",$$legacy:!0}),_(()=>k(h,i(e))),$(u,p)}export{E as default};