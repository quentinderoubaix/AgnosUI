import{k as p,T as a,g as i,j as n,s as o,d as c,b as j,t as b,e,n as u}from"./AppCommon-Cm-6NtnE.js";import{S as x}from"./Slider-CzL3LJKn.js";import"./actions-gBvwwZne.js";import"./slider-DYrwS7Mv-Cl4Whmzg.js";import"./directive-CKEccryv-gyIcW13B.js";import"./writables-DCiBdIBK-BYLEJlA0.js";import"./resizeObserver-uPfEp7Vt.js";import"./extendWidget-CKqcYLS9.js";import"./Slot-HBv0E13p.js";import"./snippet-DaCt2Zif.js";import"./config-CGoDt1jV.js";import"./config-CLQxp5Vy.js";import"./index-client-CP1GwSUe.js";var z=b('<div class="d-flex" style="height: 350px"><div class="col-6" style="height: 300px"><!> <div class="mt-3"> </div></div> <div class="col-6" style="height: 300px"><!> <div class="mt-3"> </div></div></div>');function E(g){let r=p(a([10,40])),s=p(a([40]));var l=z(),v=e(l),m=e(v);x(m,{min:0,max:100,stepSize:1,vertical:!0,get values(){return i(r)},set values(t){n(r,a(t))},className:"my-0"});var _=o(m,2),f=e(_);c(()=>{var t;return u(f,`Form control values: ${((t=i(r))==null?void 0:t.join(", "))??""}`)});var h=o(v,2),d=e(h);x(d,{min:0,max:100,stepSize:1,vertical:!0,get values(){return i(s)},set values(t){n(s,a(t))},className:"my-0"});var y=o(d,2),S=e(y);c(()=>{var t;return u(S,`From control value: ${((t=i(s))==null?void 0:t.join(", "))??""}`)}),j(g,l)}export{E as default};