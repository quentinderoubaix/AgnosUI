import{S as E,i as F,s as G,l as K,e as b,ag as k,a as c,r as z,b as p,v as D,w as H,y as O,z as P,n as L,f as _,B as Q,j,a5 as x,k as g,c as B,m as N,a6 as q,t as y,d as A,g as M}from"./AppCommon-Z65tc74F.js";import{S as Z}from"./Slider-BJAgl3Md.js";/* empty css               */import{c as R}from"./directive-DCYlDznf-yhePTX7e.js";import"./Slot-I6WTrXyh.js";import"./config-D4eiDves.js";import"./slider-CA_fszn7-3AOyFqmm.js";import"./writables-DoU_XYTX-Diupydw_.js";import"./resizeObserver-Bx-yHYQA.js";import"./extendWidget-BhYiMpAS.js";function T(n){let t,i,s,l,a,f,d=[{}],m={};for(let o=0;o<d.length;o+=1)m=K(m,d[o]);return{c(){t=b("button"),i=k("svg"),s=k("path"),c(s,"stroke-linecap","round"),c(s,"stroke-linejoin","round"),c(s,"d","M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"),c(i,"xmlns","http://www.w3.org/2000/svg"),c(i,"fill","var(--bs-slider-handle-color)"),c(i,"viewBox","0 0 24 24"),c(i,"stroke-width","1.5"),c(i,"stroke","currentColor"),z(t,m)},m(o,r){p(o,t,r),D(t,i),D(i,s),t.autofocus&&t.focus(),a||(f=[H(R.call(null,t,"custom-handle")),H(l=n[1].directives.handleDirective(t,{item:n[0]}))],a=!0)},p(o,[r]){z(t,m=O(d,[r&3&&{}])),l&&P(l.update)&&r&1&&l.update.call(null,{item:o[0]})},i:L,o:L,d(o){o&&_(t),a=!1,Q(f)}}}function U(n,t,i){let{item:s}=t,{widget:l}=t;return n.$$set=a=>{"item"in a&&i(0,s=a.item),"widget"in a&&i(1,l=a.widget)},[s,l]}class V extends E{constructor(t){super(),F(this,t,U,T,G,{item:0,widget:1})}}function W(n){let t,i,s,l,a,f,d,m,o,r,h,v;function I(e){n[2](e)}let w={min:0,max:100,stepSize:1,slotLabel:X,className:"au-custom-slider-container"};n[0]!==void 0&&(w.values=n[0]),s=new Z({props:w}),j.push(()=>x(s,"values",I));function J(e){n[3](e)}let C={min:0,max:100,stepSize:1,slotHandle:V,className:"au-custom-slider-container"};return n[1]!==void 0&&(C.values=n[1]),r=new Z({props:C}),j.push(()=>x(r,"values",J)),{c(){t=b("h2"),t.textContent="Slider with custom labels",i=g(),B(s.$$.fragment),a=g(),f=b("hr"),d=g(),m=b("h2"),m.textContent="Slider with custom handle",o=g(),B(r.$$.fragment)},m(e,u){p(e,t,u),p(e,i,u),N(s,e,u),p(e,a,u),p(e,f,u),p(e,d,u),p(e,m,u),p(e,o,u),N(r,e,u),v=!0},p(e,[u]){const $={};!l&&u&1&&(l=!0,$.values=e[0],q(()=>l=!1)),s.$set($);const S={};!h&&u&2&&(h=!0,S.values=e[1],q(()=>h=!1)),r.$set(S)},i(e){v||(y(s.$$.fragment,e),y(r.$$.fragment,e),v=!0)},o(e){A(s.$$.fragment,e),A(r.$$.fragment,e),v=!1},d(e){e&&(_(t),_(i),_(a),_(f),_(d),_(m),_(o)),M(s,e),M(r,e)}}}const X=({value:n})=>""+n+"%";function Y(n,t,i){let s=[70],l=[50];function a(d){s=d,i(0,s)}function f(d){l=d,i(1,l)}return[s,l,a,f]}class de extends E{constructor(t){super(),F(this,t,Y,W,G,{})}}export{de as default};
