import{S,i as x,s as y,K,l as L,e as p,k,p as D,a as v,r as M,b as F,v as d,C,w,L as N,M as P,N as W,x as j,t as H,d as q,f as B,B as z,c as A,m as E,g as G}from"./AppCommon-FWy1SVRQ.js";import{c as I}from"./simpleClassTransition-DRHDHaw8.js";import{c as J}from"./directive-DCYlDznf-gMBfoBMh.js";import{c as O}from"./baseTransitions-B5GUGUfo.js";import"./cssTransitions-UEV2Cgkj.js";import"./promise-CY2U8bTP-DVzDPihB.js";import"./writables-DoU_XYTX-BHqOJdHa.js";function Q(i){let t,e,s,o,a,m,f,u,_,r,c,$;const g=i[5].default,l=K(g,i,i[4],null);let T=[{}],b={};for(let n=0;n<T.length;n+=1)b=L(b,T[n]);return{c(){t=p("div"),e=p("div"),s=p("div"),l&&l.c(),o=k(),a=p("button"),a.textContent="Hide again.",m=k(),f=p("div"),u=p("button"),_=D(i[0]),v(a,"class","btn btn-outline-secondary"),v(s,"class","flip-card-front"),v(u,"class","btn btn-outline-primary"),v(f,"class","flip-card-back"),M(e,b),v(t,"class","flip-card")},m(n,h){F(n,t,h),d(t,e),d(e,s),l&&l.m(s,null),d(s,o),d(s,a),d(e,m),d(e,f),d(f,u),d(u,_),r=!0,c||($=[C(a,"click",i[6]),C(u,"click",i[7]),w(J.call(null,e,"flip-card-inner")),w(i[3].call(null,e))],c=!0)},p(n,[h]){l&&l.p&&(!r||h&16)&&N(l,g,n,n[4],r?W(g,n[4],h,null):P(n[4]),null),(!r||h&1)&&j(_,n[0])},i(n){r||(H(l,n),r=!0)},o(n){q(l,n),r=!1},d(n){n&&B(t),l&&l.d(n),c=!1,z($)}}}function R(i,t,e){let{$$slots:s={},$$scope:o}=t,{hiddenText:a}=t;const{api:{show:m,hide:f},directives:{directive:u}}=O({props:{visible:!1,transition:I({hideClasses:["hide"],animationPendingHideClasses:["hide"]})}}),_=()=>f(),r=()=>m();return i.$$set=c=>{"hiddenText"in c&&e(0,a=c.hiddenText),"$$scope"in c&&e(4,o=c.$$scope)},[a,m,f,u,o,s,_,r]}class U extends S{constructor(t){super(),x(this,t,R,Q,y,{hiddenText:0})}}function V(i){let t;return{c(){t=D("Some new content !")},m(e,s){F(e,t,s)},d(e){e&&B(t)}}}function X(i){let t,e;return t=new U({props:{hiddenText:"What is hiding behing this ?",$$slots:{default:[V]},$$scope:{ctx:i}}}),{c(){A(t.$$.fragment)},m(s,o){E(t,s,o),e=!0},p(s,[o]){const a={};o&1&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){e||(H(t.$$.fragment,s),e=!0)},o(s){q(t.$$.fragment,s),e=!1},d(s){G(t,s)}}}class at extends S{constructor(t){super(),x(this,t,null,X,y,{})}}export{at as default};
