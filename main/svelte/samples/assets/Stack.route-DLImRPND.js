import{S as q,i as E,s as L,l as D,k as d,f as w,q as _,g as n,C as h,n as p,h as l,B as F}from"./AppCommon-EGvQgKwz.js";import{o as M}from"./modalService-p-38ATms.js";import"./Modal-CeUSN2Bb.js";import"./Slot-CIXSXyWX.js";import"./config-dcf0MZy6.js";import"./directive-3-8yr-ZK-C23OGezp.js";import"./modal-CeTI4jxI-BkxHpRwS.js";import"./writables-DoU_XYTX-esNIv65O.js";import"./baseTransitions-o4G_vBWq.js";import"./promise-CY2U8bTP-CDYUm4pL.js";import"./fade-uOobJKgw-RbFJ57K3.js";import"./simpleClassTransition-CTFkEAKQ.js";import"./cssTransitions-DczX0sNo.js";import"./extendWidget-8zXnCiQz.js";function N(s){let t,r,i,a,m,f,k,u,c,C,x,b,y,S;return{c(){t=D("This is a modal"),r=d("br"),i=d("br"),a=w(),m=d("button"),m.textContent="Launch other modal",f=d("br"),k=w(),u=d("button"),u.textContent="Enable backdrop",c=d("button"),c.textContent="Disable backdrop",C=d("br"),x=w(),b=d("button"),b.textContent="Close",_(m,"class","btn btn-outline-primary m-1"),_(u,"class","btn btn-outline-secondary m-1"),_(c,"class","btn btn-outline-secondary m-1"),_(b,"class","btn btn-outline-secondary m-1")},m(e,o){n(e,t,o),n(e,r,o),n(e,i,o),n(e,a,o),n(e,m,o),n(e,f,o),n(e,k,o),n(e,u,o),n(e,c,o),n(e,C,o),n(e,x,o),n(e,b,o),y||(S=[h(m,"click",s[2]),h(u,"click",s[3]),h(c,"click",s[4]),h(b,"click",s[5])],y=!0)},p,i:p,o:p,d(e){e&&(l(t),l(r),l(i),l(a),l(m),l(f),l(k),l(u),l(c),l(C),l(x),l(b)),y=!1,F(S)}}}function O(s,t,r){let{widget:i}=t,{state:a}=t;const m=()=>M({title:"Other modal",children:B,container:a.modalElement}),f=()=>i.api.patch({backdrop:!0}),k=()=>i.api.patch({backdrop:!1}),u=()=>i.api.close();return s.$$set=c=>{"widget"in c&&r(0,i=c.widget),"state"in c&&r(1,a=c.state)},[i,a,m,f,k,u]}class B extends q{constructor(t){super(),E(this,t,O,N,L,{widget:0,state:1})}}function T(s){let t,r,i;return{c(){t=d("button"),t.textContent="Launch demo modal",_(t,"class","btn btn-primary")},m(a,m){n(a,t,m),r||(i=h(t,"click",s[0]),r=!0)},p,i:p,o:p,d(a){a&&l(t),r=!1,i()}}}function j(s){return[()=>M({title:"First modal",className:"modal-sm",children:B})]}class X extends q{constructor(t){super(),E(this,t,j,T,L,{})}}export{X as default};