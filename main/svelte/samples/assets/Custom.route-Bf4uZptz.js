import{S as N,i as q,s as A,e as v,a as Z,b as d,y as E,v as F,n as S,f as m,j as k,a2 as H,k as _,c as L,m as j,a3 as x,t as y,d as z,g as D}from"./AppCommon-BQfqEbA1.js";import{S as M}from"./Slider-D5iYQHcE.js";/* empty css               */import"./Slot-DRAmnckK.js";import"./config-DIEd8l74.js";import"./stores-DK5sBMf5.js";import"./directive-DK26z0CB.js";import"./writables-DoU_XYTX-fhSIwKq4.js";import"./resizeObserver-C8NxvLIr.js";function G(i){let t,l,s,a;return{c(){t=v("button"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="var(--bs-slider-handle-color)" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"></path></svg>',Z(t,"class","custom-handle")},m(n,r){d(n,t,r),s||(a=E(l=i[1].directives.handleDirective(t,{item:i[0]})),s=!0)},p(n,[r]){l&&F(l.update)&&r&1&&l.update.call(null,{item:n[0]})},i:S,o:S,d(n){n&&m(t),s=!1,a()}}}function I(i,t,l){let{item:s}=t,{widget:a}=t;return i.$$set=n=>{"item"in n&&l(0,s=n.item),"widget"in n&&l(1,a=n.widget)},[s,a]}class J extends N{constructor(t){super(),q(this,t,I,G,A,{item:0,widget:1})}}function K(i){let t,l,s,a,n,r,f,c,g,u,h,p;function B(e){i[2](e)}let b={min:0,max:100,stepSize:1,slotLabel:O,className:"au-custom-slider-container"};i[0]!==void 0&&(b.values=i[0]),s=new M({props:b}),k.push(()=>H(s,"values",B));function T(e){i[3](e)}let w={min:0,max:100,stepSize:1,slotHandle:J,className:"au-custom-slider-container"};return i[1]!==void 0&&(w.values=i[1]),u=new M({props:w}),k.push(()=>H(u,"values",T)),{c(){t=v("h2"),t.textContent="Slider with custom labels",l=_(),L(s.$$.fragment),n=_(),r=v("hr"),f=_(),c=v("h2"),c.textContent="Slider with custom handle",g=_(),L(u.$$.fragment)},m(e,o){d(e,t,o),d(e,l,o),j(s,e,o),d(e,n,o),d(e,r,o),d(e,f,o),d(e,c,o),d(e,g,o),j(u,e,o),p=!0},p(e,[o]){const C={};!a&&o&1&&(a=!0,C.values=e[0],x(()=>a=!1)),s.$set(C);const $={};!h&&o&2&&(h=!0,$.values=e[1],x(()=>h=!1)),u.$set($)},i(e){p||(y(s.$$.fragment,e),y(u.$$.fragment,e),p=!0)},o(e){z(s.$$.fragment,e),z(u.$$.fragment,e),p=!1},d(e){e&&(m(t),m(l),m(n),m(r),m(f),m(c),m(g)),D(s,e),D(u,e)}}}const O=({value:i})=>""+i+"%";function P(i,t,l){let s=[70],a=[50];function n(f){s=f,l(0,s)}function r(f){a=f,l(1,a)}return[s,a,n,r]}class se extends N{constructor(t){super(),q(this,t,P,K,A,{})}}export{se as default};
