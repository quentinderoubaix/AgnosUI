import{S as M,i as N,s as F,c as L,f as b,k as d,l as v,q as c,m as O,g as r,v as y,C as $,x as T,t as j,a as z,h as m,d as A,B,n as E,e as G}from"./AppCommon-Bd7c79Sv.js";import{M as H}from"./Modal-DYvE4QU4.js";import{m as I,a as J}from"./modal-Bcc7Xh5d-CkiWXlU-.js";import"./Slot-B-1aNIfN.js";import"./config-7DR8110l.js";import"./directive-DCYlDznf-BpL-Dr8e.js";import"./fade-uOobJKgw-Ctkn7kYm.js";import"./simpleClassTransition-bN2mWGYM.js";import"./cssTransitions-XSnXFvdA.js";import"./promise-CY2U8bTP-BIDBx_3M.js";import"./extendWidget-CVqNTE4N.js";import"./writables-DoU_XYTX-CFj4tTmW.js";import"./baseTransitions-CCeAxBow.js";function K(a){let t;return{c(){t=v("Do you want to save your changes?")},m(o,e){r(o,t,e)},d(o){o&&m(t)}}}function P(a){let t,o,e,u,i;return{c(){t=d("button"),t.textContent="Yes",o=b(),e=d("button"),e.textContent="No",c(t,"type","button"),c(t,"class","btn btn-outline-primary"),c(e,"type","button"),c(e,"class","btn btn-outline-danger")},m(l,p){r(l,t,p),r(l,o,p),r(l,e,p),u||(i=[$(t,"click",a[3]),$(e,"click",a[4])],u=!0)},p:E,d(l){l&&(m(t),m(o),m(e)),u=!1,B(i)}}}function Q(a){let t,o,e,u,i,l,p,_,h,k,f,C,Y,w,g,S,D={slotTitle:"Save changes",fullscreen:a[2],$$slots:{footer:[P],default:[K]},$$scope:{ctx:a}};return t=new H({props:D}),a[5](t),{c(){L(t.$$.fragment),o=b(),e=d("button"),e.textContent="Launch demo modal",u=b(),i=d("div"),l=d("input"),p=b(),_=d("label"),_.textContent="Fullscreen",h=b(),k=d("hr"),f=b(),C=d("div"),Y=v(a[1]),c(e,"type","button"),c(e,"class","btn btn-primary"),c(l,"class","form-check-input"),c(l,"type","checkbox"),c(l,"role","switch"),c(l,"id","fullscreen"),c(_,"class","form-check-label"),c(_,"for","fullscreen"),c(i,"class","form-check form-switch mt-3"),c(C,"data-testid","message")},m(s,n){O(t,s,n),r(s,o,n),r(s,e,n),r(s,u,n),r(s,i,n),y(i,l),l.checked=a[2],y(i,p),y(i,_),r(s,h,n),r(s,k,n),r(s,f,n),r(s,C,n),y(C,Y),w=!0,g||(S=[$(e,"click",a[6]),$(l,"change",a[7])],g=!0)},p(s,[n]){const q={};n&4&&(q.fullscreen=s[2]),n&257&&(q.$$scope={dirty:n,ctx:s}),t.$set(q),n&4&&(l.checked=s[2]),(!w||n&2)&&T(Y,s[1])},i(s){w||(j(t.$$.fragment,s),w=!0)},o(s){z(t.$$.fragment,s),w=!1},d(s){s&&(m(o),m(e),m(u),m(i),m(h),m(k),m(f),m(C)),a[5](null),A(t,s),g=!1,B(S)}}}function R(a,t,o){let e,u="",i=!1;const l=()=>e.api.close(!0),p=()=>e.api.close(!1);function _(f){G[f?"unshift":"push"](()=>{e=f,o(0,e)})}const h=async()=>{o(1,u="");const f=await e.api.open();f===I?o(1,u="You clicked on the close button."):f===J?o(1,u="You clicked outside the modal."):o(1,u=`You answered the question with "${f?"Yes":"No"}".`)};function k(){i=this.checked,o(2,i)}return[e,u,i,l,p,_,h,k]}class ie extends M{constructor(t){super(),N(this,t,R,Q,F,{})}}export{ie as default};
