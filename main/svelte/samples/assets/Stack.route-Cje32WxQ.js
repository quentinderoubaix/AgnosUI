import{S as D,i as T,s as E,l as q,e as u,k as w,a as _,b as l,u as x,n as p,f as n,x as F}from"./AppCommon-B0o63QXa.js";import{o as L}from"./modalService-_lzm2qcd.js";import"./Modal-CjVs_54F.js";import"./Slot-JnYlUU0G.js";import"./config-BYJKBt5K.js";import"./stores-DWGGzlfa.js";import"./writables-DoU_XYTX-BIu_hqgK.js";import"./baseTransitions-Bz75Pr4B.js";import"./promise-CY2U8bTP-DQ8Un8Cc.js";import"./directive-Bt_Lk6nS.js";import"./fade-7-Etejps-1g8IqJ6t.js";import"./simpleClassTransition-DN_3yd6i.js";import"./cssTransitions-KtCtrXBG.js";function N(i){let t,r,s,a,m,f,k,d,c,C,h,b,y,S;return{c(){t=q("This is a modal"),r=u("br"),s=u("br"),a=w(),m=u("button"),m.textContent="Launch other modal",f=u("br"),k=w(),d=u("button"),d.textContent="Enable backdrop",c=u("button"),c.textContent="Disable backdrop",C=u("br"),h=w(),b=u("button"),b.textContent="Close",_(m,"class","btn btn-outline-primary m-1"),_(d,"class","btn btn-outline-secondary m-1"),_(c,"class","btn btn-outline-secondary m-1"),_(b,"class","btn btn-outline-secondary m-1")},m(e,o){l(e,t,o),l(e,r,o),l(e,s,o),l(e,a,o),l(e,m,o),l(e,f,o),l(e,k,o),l(e,d,o),l(e,c,o),l(e,C,o),l(e,h,o),l(e,b,o),y||(S=[x(m,"click",i[2]),x(d,"click",i[3]),x(c,"click",i[4]),x(b,"click",i[5])],y=!0)},p,i:p,o:p,d(e){e&&(n(t),n(r),n(s),n(a),n(m),n(f),n(k),n(d),n(c),n(C),n(h),n(b)),y=!1,F(S)}}}function O(i,t,r){let{widget:s}=t,{state:a}=t;const m=()=>L({slotTitle:"Other modal",slotDefault:M,container:a.modalElement}),f=()=>s.api.patch({backdrop:!0}),k=()=>s.api.patch({backdrop:!1}),d=()=>s.api.close();return i.$$set=c=>{"widget"in c&&r(0,s=c.widget),"state"in c&&r(1,a=c.state)},[s,a,m,f,k,d]}class M extends D{constructor(t){super(),T(this,t,O,N,E,{widget:0,state:1})}}function j(i){let t,r,s;return{c(){t=u("button"),t.textContent="Launch demo modal",_(t,"class","btn btn-primary")},m(a,m){l(a,t,m),r||(s=x(t,"click",i[0]),r=!0)},p,i:p,o:p,d(a){a&&n(t),r=!1,s()}}}function v(i){return[()=>L({slotTitle:"First modal",className:"modal-sm",slotDefault:M})]}class W extends D{constructor(t){super(),T(this,t,v,j,E,{})}}export{W as default};