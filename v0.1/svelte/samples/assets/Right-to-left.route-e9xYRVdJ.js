import{S as Z,i as x,s as ee,j as w,a2 as k,e as $,k as g,c as R,a as E,a1 as F,b as r,m as V,q as G,a3 as q,t as N,d as j,f as a,g as y}from"./AppCommon-vYWJRxQg.js";import{S as H}from"./Slider-X6Cj7O6W.js";import"./config-orzBmIU7.js";import"./func-tK0QDe5R.js";import"./stores-Qik-2pdq.js";import"./directive-paRKhXJF.js";import"./writables-dbn-IvPX.js";function se(t){let f,u,l,_,m,v,c,n,b,h,i,A,o,S,d,B,I,C,p,D,z;function U(e){t[4](e)}let J={min:0,max:100,stepSize:1,rtl:!0};t[0]!==void 0&&(J.values=t[0]),l=new H({props:J}),w.push(()=>k(l,"values",U));function W(e){t[5](e)}let K={min:0,max:100,stepSize:1,rtl:!0};t[1]!==void 0&&(K.values=t[1]),n=new H({props:K}),w.push(()=>k(n,"values",W));function X(e){t[6](e)}let L={min:0,max:100,stepSize:1,rtl:!0,vertical:!0,className:"my-0"};t[2]!==void 0&&(L.values=t[2]),d=new H({props:L}),w.push(()=>k(d,"values",X));function Y(e){t[7](e)}let M={min:0,max:100,stepSize:1,rtl:!0,vertical:!0,className:"my-0"};return t[3]!==void 0&&(M.values=t[3]),p=new H({props:M}),w.push(()=>k(p,"values",Y)),{c(){f=$("h2"),f.textContent="Horizontal slider",u=g(),R(l.$$.fragment),m=g(),v=$("br"),c=g(),R(n.$$.fragment),h=g(),i=$("h2"),i.textContent="Vertical slider",A=g(),o=$("div"),S=$("div"),R(d.$$.fragment),I=g(),C=$("div"),R(p.$$.fragment),E(S,"class","col-6"),F(S,"height","300px"),E(C,"class","col-6"),F(C,"height","300px"),E(o,"class","d-flex"),F(o,"height","350px")},m(e,s){r(e,f,s),r(e,u,s),V(l,e,s),r(e,m,s),r(e,v,s),r(e,c,s),V(n,e,s),r(e,h,s),r(e,i,s),r(e,A,s),r(e,o,s),G(o,S),V(d,S,null),G(o,I),G(o,C),V(p,C,null),z=!0},p(e,[s]){const O={};!_&&s&1&&(_=!0,O.values=e[0],q(()=>_=!1)),l.$set(O);const P={};!b&&s&2&&(b=!0,P.values=e[1],q(()=>b=!1)),n.$set(P);const Q={};!B&&s&4&&(B=!0,Q.values=e[2],q(()=>B=!1)),d.$set(Q);const T={};!D&&s&8&&(D=!0,T.values=e[3],q(()=>D=!1)),p.$set(T)},i(e){z||(N(l.$$.fragment,e),N(n.$$.fragment,e),N(d.$$.fragment,e),N(p.$$.fragment,e),z=!0)},o(e){j(l.$$.fragment,e),j(n.$$.fragment,e),j(d.$$.fragment,e),j(p.$$.fragment,e),z=!1},d(e){e&&(a(f),a(u),a(m),a(v),a(c),a(h),a(i),a(A),a(o)),y(l,e),y(n,e),y(d),y(p)}}}function te(t,f,u){let l=[30],_=[30,70],m=[30],v=[30,70];function c(i){l=i,u(0,l)}function n(i){_=i,u(1,_)}function b(i){m=i,u(2,m)}function h(i){v=i,u(3,v)}return[l,_,m,v,c,n,b,h]}class de extends Z{constructor(f){super(),x(this,f,te,se,ee,{})}}export{de as default};