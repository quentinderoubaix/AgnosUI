import{S as ee,i as te,s as le,T as P,e as o,k,p as Y,c as ne,a as d,U as se,b as a,v as m,V as Q,m as ie,C as T,t as oe,d as ae,f as c,W as ce,g as pe,B as re,X as ue,n as S,Y as me,j as fe}from"./AppCommon-FWy1SVRQ.js";import{A as de}from"./Alert-DCgqvYjS.js";import"./Slot-D3m9il8U.js";import"./config-RbihkhwJ.js";import"./directive-DCYlDznf-gMBfoBMh.js";import"./alert-Dlf-BV98-BwfpRWTY.js";import"./common-DRdsw5m8-CC4z5oZa.js";import"./baseTransitions-B5GUGUfo.js";import"./writables-DoU_XYTX-BHqOJdHa.js";import"./promise-CY2U8bTP-DVzDPihB.js";import"./extendWidget-BGOiPh-Z.js";import"./fade-uOobJKgw-DvQA_-gJ.js";import"./simpleClassTransition-DRHDHaw8.js";import"./cssTransitions-UEV2Cgkj.js";function R(t,l,p){const i=t.slice();return i[13]=l[p].value,i[14]=l[p].label,i}function Z(t){let l,p=t[14]+"",i;return{c(){l=o("option"),i=Y(p),l.__value=t[13],ue(l,l.__value)},m(_,b){a(_,l,b),m(l,i)},p:S,d(_){_&&c(l)}}}function _e(t){let l,p,i,_,b,w,s;return{c(){l=o("h4"),l.textContent="Well done!",p=k(),i=o("p"),i.textContent=`Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing
		within an alert works with this kind of content.`,_=k(),b=o("hr"),w=k(),s=o("p"),s.textContent="Whenever you need to, be sure to use margin utilities to keep things nice and tidy.",d(l,"class","alert-heading"),d(s,"class","mb-0")},m(r,f){a(r,l,f),a(r,p,f),a(r,i,f),a(r,_,f),a(r,b,f),a(r,w,f),a(r,s,f)},p:S,d(r){r&&(c(l),c(p),c(i),c(_),c(b),c(w),c(s))}}}function he(t){let l,p,i,_,b,w,s,r,f,q,g,B,W,C,D,u,U,I,J,K,V,O,L,z,A,E,F,G,$,X,H,M,j=P(t[5]),h=[];for(let e=0;e<j.length;e+=1)h[e]=Z(R(t,j,e));let x={dismissible:t[3],animatedOnInit:t[1],animated:t[2],type:t[4],$$slots:{default:[_e]},$$scope:{ctx:t}};return $=new de({props:x}),t[11]($),{c(){l=o("button"),l.textContent="Show alert",p=k(),i=o("br"),_=k(),b=o("br"),w=k(),s=o("div"),r=o("div"),f=o("label"),f.textContent="Alert type:",q=k(),g=o("select");for(let e=0;e<h.length;e+=1)h[e].c();B=k(),W=o("label"),C=o("input"),D=Y("Animated on init"),u=k(),U=o("label"),I=o("input"),J=Y("Animated"),K=k(),V=o("label"),O=o("input"),L=Y("Dismissible"),z=k(),A=o("br"),E=k(),F=o("br"),G=k(),ne($.$$.fragment),d(l,"class","btn btn-primary showAlert"),d(l,"type","button"),d(f,"class","align-self-center me-3"),d(f,"for","typeSelect"),d(g,"id","typeSelect"),d(g,"class","form-select w-auto"),t[4]===void 0&&se(()=>t[7].call(g)),d(r,"class","d-flex form-group"),d(C,"class","form-check-input me-1"),d(C,"type","checkbox"),d(I,"class","form-check-input me-1"),d(I,"type","checkbox"),d(O,"class","dismissibleInput form-check-input me-1"),d(O,"type","checkbox"),d(s,"class","d-flex flex-column")},m(e,n){a(e,l,n),a(e,p,n),a(e,i,n),a(e,_,n),a(e,b,n),a(e,w,n),a(e,s,n),m(s,r),m(r,f),m(r,q),m(r,g);for(let v=0;v<h.length;v+=1)h[v]&&h[v].m(g,null);Q(g,t[4],!0),m(s,B),m(s,W),m(W,C),C.checked=t[1],m(W,D),m(s,u),m(s,U),m(U,I),I.checked=t[2],m(U,J),m(s,K),m(s,V),m(V,O),O.checked=t[3],m(V,L),a(e,z,n),a(e,A,n),a(e,E,n),a(e,F,n),a(e,G,n),ie($,e,n),X=!0,H||(M=[T(l,"click",t[6]),T(g,"change",t[7]),T(C,"change",t[8]),T(I,"change",t[9]),T(O,"change",t[10])],H=!0)},p(e,[n]){if(n&32){j=P(e[5]);let y;for(y=0;y<j.length;y+=1){const N=R(e,j,y);h[y]?h[y].p(N,n):(h[y]=Z(N),h[y].c(),h[y].m(g,null))}for(;y<h.length;y+=1)h[y].d(1);h.length=j.length}n&48&&Q(g,e[4]),n&2&&(C.checked=e[1]),n&4&&(I.checked=e[2]),n&8&&(O.checked=e[3]);const v={};n&8&&(v.dismissible=e[3]),n&2&&(v.animatedOnInit=e[1]),n&4&&(v.animated=e[2]),n&16&&(v.type=e[4]),n&131072&&(v.$$scope={dirty:n,ctx:e}),$.$set(v)},i(e){X||(oe($.$$.fragment,e),X=!0)},o(e){ae($.$$.fragment,e),X=!1},d(e){e&&(c(l),c(p),c(i),c(_),c(b),c(w),c(s),c(z),c(A),c(E),c(F),c(G)),ce(h,e),t[11](null),pe($,e),H=!1,re(M)}}}function be(t,l,p){let i,[_,b,w]=[!0,!0,!0],s="success";var r=(u=>(u.success="success",u.info="info",u.warning="warning",u.danger="danger",u.primary="primary",u.secondary="secondary",u.light="light",u.dark="dark",u))(r||{});const f=Object.entries(r).map(u=>({value:u[1],label:u[0]})),q=()=>i.api.open();function g(){s=me(this),p(4,s),p(5,f)}function B(){_=this.checked,p(1,_)}function W(){b=this.checked,p(2,b)}function C(){w=this.checked,p(3,w)}function D(u){fe[u?"unshift":"push"](()=>{i=u,p(0,i)})}return[i,_,b,w,s,f,q,g,B,W,C,D]}class De extends ee{constructor(l){super(),te(this,l,be,he,le,{})}}export{De as default};
