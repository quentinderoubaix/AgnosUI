import{p as f,s as $,b as e,f as u,k as v,e as _,c as P,a as b,t as k,d as x,a5 as L,h as i,r as w,M as z}from"./AppCommon-D_B8a5G6.js";import{P as C}from"./Pagination-CxPFzlZr.js";import"./pageFactory-BMdGxeJT-YRXGOaJv.js";import"./extendWidget-CKD28wu-.js";import"./directive-CKEccryv-BAfxyCuh.js";import"./pagination-DQTcHLgn-CgQeKzK9.js";import"./writables-DoU_XYTX-DPIJ9iVk.js";import"./Slot-Bt2_y6gy.js";import"./snippet-CHDzym81.js";import"./config-BmaADpVL.js";import"./config-CpwOCg7e.js";import"./actions-B64vG8Da.js";import"./class-1L5W2JgY.js";var y=k("<p>A pagination with hrefs provided for each pagination element:</p> <p>Page hash: <small> </small></p> <!>",1);function K(r,p){f(p,!0);const n=$(),a=()=>x(L,"$hash$",n);let m=z(()=>+(a().split("#")[1]??4));const h=t=>`#${a().split("#")[0]}#${t}`,l=t=>location.hash=`#${a().split("#")[0]}#${t}`;var s=y(),o=e(u(s),2),g=e(i(o)),c=i(g),d=e(o,2);C(d,{get page(){return v(m)},collectionSize:60,boundaryLinks:!0,ariaLabel:"Page navigation with customized hrefs",pageLink:h,onPageChange:l}),_(()=>w(c,"#"+a())),P(r,s),b()}export{K as default};