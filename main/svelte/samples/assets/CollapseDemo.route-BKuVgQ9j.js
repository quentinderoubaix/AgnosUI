import{S as y,i as D,s as L,e as h,p as M,k as T,a as _,u as C,b as w,v as g,C as S,x as q,t as v,D as z,d as b,E as B,f as x,h as k,K as E,l as H,r as I,w as K,L as N,M as V,N as j,c as A,m as F,g as G}from"./AppCommon-FWy1SVRQ.js";import{c as J}from"./baseTransitions-B5GUGUfo.js";import{c as O}from"./collapse-CVjUhnIz-DQzZ6AgQ.js";import"./writables-DoU_XYTX-BHqOJdHa.js";import"./directive-DCYlDznf-gMBfoBMh.js";import"./promise-CY2U8bTP-DVzDPihB.js";import"./cssTransitions-UEV2Cgkj.js";const P=`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100">
    <rect class="horizontal" x="20" y="45" width="60" height="10" fill="currentColor" />
    <rect class="vertical" x="45" y="20" width="10" height="60" fill="currentColor" />
</svg>`;function $(a){let e,s,t,r,f;const u=a[9].default,o=E(u,a,a[8],null);let m=[{id:"collapse-content"},{}],c={};for(let l=0;l<m.length;l+=1)c=H(c,m[l]);return{c(){e=h("div"),s=h("div"),o&&o.c(),_(s,"class","card-body"),I(e,c)},m(l,p){w(l,e,p),g(e,s),o&&o.m(s,null),t=!0,r||(f=K(a[6].call(null,e)),r=!0)},p(l,p){o&&o.p&&(!t||p&256)&&N(o,u,l,l[8],t?j(u,l[8],p,null):V(l[8]),null)},i(l){t||(v(o,l),t=!0)},o(l){b(o,l),t=!1},d(l){l&&x(e),o&&o.d(l),r=!1,f()}}}function Q(a){let e,s,t,r,f,u,o,m,c,l,p,n=!a[2]&&$(a);return{c(){e=h("div"),s=h("div"),t=h("button"),r=M(a[0]),f=T(),u=h("span"),m=T(),n&&n.c(),_(u,"class","ms-1 collapse-icon"),C(u,"expanded",a[1]),_(t,"type","button"),_(t,"id","collapse-toggle"),_(t,"class","btn toggle-button"),_(t,"aria-controls","collapse-content"),_(t,"aria-expanded",o=a[1]||void 0),_(s,"class","card-header p-0"),_(e,"class","card")},m(d,i){w(d,e,i),g(e,s),g(s,t),g(t,r),g(t,f),g(t,u),u.innerHTML=P,g(e,m),n&&n.m(e,null),c=!0,l||(p=S(t,"click",a[10]),l=!0)},p(d,[i]){(!c||i&1)&&q(r,d[0]),(!c||i&2)&&C(u,"expanded",d[1]),(!c||i&2&&o!==(o=d[1]||void 0))&&_(t,"aria-expanded",o),d[2]?n&&(z(),b(n,1,1,()=>{n=null}),B()):n?(n.p(d,i),i&4&&v(n,1)):(n=$(d),n.c(),v(n,1),n.m(e,null))},i(d){c||(v(n),c=!0)},o(d){b(n),c=!1},d(d){d&&x(e),n&&n.d(),l=!1,p()}}}function R(a,e,s){let t,r,{$$slots:f={},$$scope:u}=e,{headerText:o}=e,{expanded:m=!1}=e;const{stores:{visible$:c,hidden$:l},api:{toggle:p},directives:{directive:n}}=J({props:{visible:m,transition:O}});k(a,c,i=>s(1,t=i)),k(a,l,i=>s(2,r=i));const d=()=>p();return a.$$set=i=>{"headerText"in i&&s(0,o=i.headerText),"expanded"in i&&s(7,m=i.expanded),"$$scope"in i&&s(8,u=i.$$scope)},[o,t,r,c,l,p,n,m,u,f,d]}class U extends y{constructor(e){super(),D(this,e,R,Q,L,{headerText:0,expanded:7})}}function W(a){let e;return{c(){e=M("Content to display / hide.")},m(s,t){w(s,e,t)},d(s){s&&x(e)}}}function X(a){let e,s;return e=new U({props:{headerText:"Toggle content",expanded:!0,$$slots:{default:[W]},$$scope:{ctx:a}}}),{c(){A(e.$$.fragment)},m(t,r){F(e,t,r),s=!0},p(t,[r]){const f={};r&1&&(f.$$scope={dirty:r,ctx:t}),e.$set(f)},i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){G(e,t)}}}class ne extends y{constructor(e){super(),D(this,e,null,X,L,{})}}export{ne as default};
