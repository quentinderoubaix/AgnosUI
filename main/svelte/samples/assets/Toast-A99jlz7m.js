import{H as _e,S as le,i as ne,s as ae,k as P,e as B,c as C,p as L,a as m,b as g,m as k,t as c,z as q,d,B as A,f as $,g as N,r as ce,Q as S,D,E as T,J as h,K as b,L as w,M as v,u as re,C as H,O as de,h as I,N as E,q as F,y as J,x as me}from"./AppCommon-M7DUBvbC.js";import{S as V}from"./Slot-61Ngmrv5.js";import{c as pe}from"./config-GGxyuvAg.js";import{e as ge,c as $e}from"./extendWidget-CVDGeT5b.js";import{d as he}from"./directive-di1mg7Ei.js";import{t as be,h as we}from"./writables-NKRjUwfl.js";const ve={autohide:!0,delay:5e3,slotHeader:void 0},Ce={autohide:be,delay:we(0,1/0,{strict:!0})};function ke(o){let e;const n=ge($e,ve,Ce)(o),s=_e(()=>{clearTimeout(e),n.stores.autohide$()&&(e=setTimeout(()=>n.api.close(),n.stores.delay$()))});return{...n,directives:{...n.directives,autohideDirective:he(s)}}}const Ne=o=>({state:o&1,widget:o&2}),K=o=>({state:o[0],widget:o[1]}),He=o=>({state:o&1,widget:o&2}),M=o=>({slot:"header",state:o[0],widget:o[1]}),Se=o=>({state:o&1,widget:o&2}),O=o=>({slot:"structure",state:o[0],widget:o[1]}),De=o=>o&128,Te=o=>({}),Q=o=>({slot:"slot",...o[7]}),Be=o=>({state:o&1,widget:o&2}),R=o=>({state:o[0],widget:o[1]}),Le=o=>({state:o&1,widget:o&2}),G=o=>({slot:"header",state:o[0],widget:o[1]}),qe=o=>({state:o&1,widget:o&2}),U=o=>({slot:"structure",state:o[0],widget:o[1]}),Ae=o=>o&128,Fe=o=>({}),X=o=>({slot:"slot",...o[7]});function Y(o){let e,n,s,t;n=new V({props:{slotContent:o[0].slotHeader,props:o[2],$$slots:{slot:[je,({props:f})=>({7:f}),({props:f})=>f?128:0],default:[We,({component:f,props:a})=>({8:f,7:a}),({component:f,props:a})=>(f?256:0)|(a?128:0)]},$$scope:{ctx:o}}});let l=o[0].dismissible&&Z(o);return{c(){e=B("div"),C(n.$$.fragment),s=P(),l&&l.c(),m(e,"class","toast-header")},m(f,a){g(f,e,a),k(n,e,null),ce(e,s),l&&l.m(e,null),t=!0},p(f,a){const u={};a&1&&(u.slotContent=f[0].slotHeader),a&4&&(u.props=f[2]),a&451&&(u.$$scope={dirty:a,ctx:f}),n.$set(u),f[0].dismissible?l?l.p(f,a):(l=Z(f),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i(f){t||(c(n.$$.fragment,f),t=!0)},o(f){d(n.$$.fragment,f),t=!1},d(f){f&&$(e),N(n),l&&l.d()}}}function Ie(o){let e;const n=o[3].default,s=h(n,o,o[6],R);return{c(){s&&s.c()},m(t,l){s&&s.m(t,l),e=!0},p(t,l){s&&s.p&&(!e||l&67)&&b(s,n,t,t[6],e?v(n,t[6],l,Be):w(t[6]),R)},i(t){e||(c(s,t),e=!0)},o(t){d(s,t),e=!1},d(t){s&&s.d(t)}}}function Pe(o){let e;const n=o[3].header,s=h(n,o,o[6],G);return{c(){s&&s.c()},m(t,l){s&&s.m(t,l),e=!0},p(t,l){s&&s.p&&(!e||l&67)&&b(s,n,t,t[6],e?v(n,t[6],l,Le):w(t[6]),G)},i(t){e||(c(s,t),e=!0)},o(t){d(s,t),e=!1},d(t){s&&s.d(t)}}}function Ve(o){let e;const n=o[3].structure,s=h(n,o,o[6],U);return{c(){s&&s.c()},m(t,l){s&&s.m(t,l),e=!0},p(t,l){s&&s.p&&(!e||l&67)&&b(s,n,t,t[6],e?v(n,t[6],l,qe):w(t[6]),U)},i(t){e||(c(s,t),e=!0)},o(t){d(s,t),e=!1},d(t){s&&s.d(t)}}}function We(o){let e,n,s;const t=[o[7]];var l=o[8];function f(a,u){let i={$$slots:{structure:[Ve,({widget:r,state:_})=>({1:r,0:_}),({widget:r,state:_})=>(r?2:0)|(_?1:0)],header:[Pe,({widget:r,state:_})=>({1:r,0:_}),({widget:r,state:_})=>(r?2:0)|(_?1:0)],default:[Ie,({state:r,widget:_})=>({0:r,1:_}),({state:r,widget:_})=>(r?1:0)|(_?2:0)]},$$scope:{ctx:a}};for(let r=0;r<t.length;r+=1)i=H(i,t[r]);return u!==void 0&&u&128&&(i=H(i,D(t,[T(a[7])]))),{props:i}}return l&&(e=S(l,f(o))),{c(){e&&C(e.$$.fragment),n=L()},m(a,u){e&&k(e,a,u),g(a,n,u),s=!0},p(a,u){if(u&256&&l!==(l=a[8])){if(e){q();const i=e;d(i.$$.fragment,1,0,()=>{N(i,1)}),A()}l?(e=S(l,f(a,u)),C(e.$$.fragment),c(e.$$.fragment,1),k(e,n.parentNode,n)):e=null}else if(l){const i=u&128?D(t,[T(a[7])]):{};u&67&&(i.$$scope={dirty:u,ctx:a}),e.$set(i)}},i(a){s||(e&&c(e.$$.fragment,a),s=!0)},o(a){e&&d(e.$$.fragment,a),s=!1},d(a){a&&$(n),e&&N(e,a)}}}function je(o){let e;const n=o[3].header,s=h(n,o,o[6],X);return{c(){s&&s.c()},m(t,l){s&&s.m(t,l),e=!0},p(t,l){s&&s.p&&(!e||l&192)&&b(s,n,t,t[6],Ae(l)||!e?w(t[6]):v(n,t[6],l,Fe),X)},i(t){e||(c(s,t),e=!0)},o(t){d(s,t),e=!1},d(t){s&&s.d(t)}}}function Z(o){let e,n,s,t;return{c(){e=B("button"),m(e,"type","button"),m(e,"class","btn-close me-0 ms-auto"),m(e,"aria-label",n=o[0].ariaCloseButtonLabel)},m(l,f){g(l,e,f),s||(t=re(e,"click",o[4]),s=!0)},p(l,f){f&1&&n!==(n=l[0].ariaCloseButtonLabel)&&m(e,"aria-label",n)},d(l){l&&$(e),s=!1,t()}}}function ze(o){let e;const n=o[3].default,s=h(n,o,o[6],K);return{c(){s&&s.c()},m(t,l){s&&s.m(t,l),e=!0},p(t,l){s&&s.p&&(!e||l&67)&&b(s,n,t,t[6],e?v(n,t[6],l,Ne):w(t[6]),K)},i(t){e||(c(s,t),e=!0)},o(t){d(s,t),e=!1},d(t){s&&s.d(t)}}}function Ee(o){let e;const n=o[3].header,s=h(n,o,o[6],M);return{c(){s&&s.c()},m(t,l){s&&s.m(t,l),e=!0},p(t,l){s&&s.p&&(!e||l&67)&&b(s,n,t,t[6],e?v(n,t[6],l,He):w(t[6]),M)},i(t){e||(c(s,t),e=!0)},o(t){d(s,t),e=!1},d(t){s&&s.d(t)}}}function Je(o){let e;const n=o[3].structure,s=h(n,o,o[6],O);return{c(){s&&s.c()},m(t,l){s&&s.m(t,l),e=!0},p(t,l){s&&s.p&&(!e||l&67)&&b(s,n,t,t[6],e?v(n,t[6],l,Se):w(t[6]),O)},i(t){e||(c(s,t),e=!0)},o(t){d(s,t),e=!1},d(t){s&&s.d(t)}}}function Ke(o){let e,n,s;const t=[o[7]];var l=o[8];function f(a,u){let i={$$slots:{structure:[Je,({widget:r,state:_})=>({1:r,0:_}),({widget:r,state:_})=>(r?2:0)|(_?1:0)],header:[Ee,({widget:r,state:_})=>({1:r,0:_}),({widget:r,state:_})=>(r?2:0)|(_?1:0)],default:[ze,({state:r,widget:_})=>({0:r,1:_}),({state:r,widget:_})=>(r?1:0)|(_?2:0)]},$$scope:{ctx:a}};for(let r=0;r<t.length;r+=1)i=H(i,t[r]);return u!==void 0&&u&128&&(i=H(i,D(t,[T(a[7])]))),{props:i}}return l&&(e=S(l,f(o))),{c(){e&&C(e.$$.fragment),n=L()},m(a,u){e&&k(e,a,u),g(a,n,u),s=!0},p(a,u){if(u&256&&l!==(l=a[8])){if(e){q();const i=e;d(i.$$.fragment,1,0,()=>{N(i,1)}),A()}l?(e=S(l,f(a,u)),C(e.$$.fragment),c(e.$$.fragment,1),k(e,n.parentNode,n)):e=null}else if(l){const i=u&128?D(t,[T(a[7])]):{};u&67&&(i.$$scope={dirty:u,ctx:a}),e.$set(i)}},i(a){s||(e&&c(e.$$.fragment,a),s=!0)},o(a){e&&d(e.$$.fragment,a),s=!1},d(a){a&&$(n),e&&N(e,a)}}}function Me(o){let e;const n=o[3].default,s=h(n,o,o[6],Q);return{c(){s&&s.c()},m(t,l){s&&s.m(t,l),e=!0},p(t,l){s&&s.p&&(!e||l&192)&&b(s,n,t,t[6],De(l)||!e?w(t[6]):v(n,t[6],l,Te),Q)},i(t){e||(c(s,t),e=!0)},o(t){d(s,t),e=!1},d(t){s&&s.d(t)}}}function y(o){let e,n,s,t;return{c(){e=B("button"),m(e,"type","button"),m(e,"class","btn-close btn-close-white me-2 m-auto"),m(e,"aria-label",n=o[0].ariaCloseButtonLabel)},m(l,f){g(l,e,f),s||(t=re(e,"click",o[5]),s=!0)},p(l,f){f&1&&n!==(n=l[0].ariaCloseButtonLabel)&&m(e,"aria-label",n)},d(l){l&&$(e),s=!1,t()}}}function Oe(o){let e,n,s,t,l,f,a=o[0].slotHeader&&Y(o);s=new V({props:{slotContent:o[0].slotDefault,props:o[2],$$slots:{slot:[Me,({props:i})=>({7:i}),({props:i})=>i?128:0],default:[Ke,({component:i,props:r})=>({8:i,7:r}),({component:i,props:r})=>(i?256:0)|(r?128:0)]},$$scope:{ctx:o}}});let u=o[0].dismissible&&!o[0].slotHeader&&y(o);return{c(){a&&a.c(),e=P(),n=B("div"),C(s.$$.fragment),t=P(),u&&u.c(),l=L(),m(n,"class","toast-body")},m(i,r){a&&a.m(i,r),g(i,e,r),g(i,n,r),k(s,n,null),g(i,t,r),u&&u.m(i,r),g(i,l,r),f=!0},p(i,[r]){i[0].slotHeader?a?(a.p(i,r),r&1&&c(a,1)):(a=Y(i),a.c(),c(a,1),a.m(e.parentNode,e)):a&&(q(),d(a,1,1,()=>{a=null}),A());const _={};r&1&&(_.slotContent=i[0].slotDefault),r&4&&(_.props=i[2]),r&451&&(_.$$scope={dirty:r,ctx:i}),s.$set(_),i[0].dismissible&&!i[0].slotHeader?u?u.p(i,r):(u=y(i),u.c(),u.m(l.parentNode,l)):u&&(u.d(1),u=null)},i(i){f||(c(a),c(s.$$.fragment,i),f=!0)},o(i){d(a),d(s.$$.fragment,i),f=!1},d(i){i&&($(e),$(n),$(t),$(l)),a&&a.d(i),N(s),u&&u.d(i)}}}function Qe(o,e,n){let s,{$$slots:t={},$$scope:l}=e,{state:f}=e,{widget:a}=e;const u=()=>a.api.close(),i=()=>a.api.close();return o.$$set=r=>{"state"in r&&n(0,f=r.state),"widget"in r&&n(1,a=r.widget),"$$scope"in r&&n(6,l=r.$$scope)},o.$$.update=()=>{o.$$.dirty&3&&n(2,s={widget:a,state:f})},[f,a,s,t,u,i,l]}class Re extends le{constructor(e){super(),ne(this,e,Qe,Oe,ae,{state:0,widget:1})}}const Ge=Re,Ue=ke,Xe=o=>({state:o&262144,widget:o&512}),x=o=>({state:o[18],widget:o[9]}),Ye=o=>({state:o&262144,widget:o&512}),ee=o=>({slot:"header",state:o[18],widget:o[9]}),Ze=o=>({state:o&262144,widget:o&512}),te=o=>({slot:"structure",state:o[18],widget:o[9]}),ye=o=>o&65536,xe=o=>({}),se=o=>({slot:"slot",...o[16]});function oe(o){let e,n,s,t,l,f;return n=new V({props:{slotContent:o[3],props:o[1],$$slots:{slot:[lt,({props:a})=>({16:a}),({props:a})=>a?65536:0],default:[ot,({component:a,props:u})=>({17:a,16:u}),({component:a,props:u})=>(a?131072:0)|(u?65536:0)]},$$scope:{ctx:o}}}),{c(){e=B("div"),C(n.$$.fragment),m(e,"class",s="au-toast toast "+o[0].className),m(e,"role","alert"),m(e,"aria-atomic","true"),F(e,"toast-dismissible",o[0].dismissible),F(e,"d-flex",!o[0].slotHeader)},m(a,u){g(a,e,u),k(n,e,null),t=!0,l||(f=[J(o[6].call(null,e)),J(o[7].call(null,e))],l=!0)},p(a,u){const i={};u&8&&(i.slotContent=a[3]),u&2&&(i.props=a[1]),u&204800&&(i.$$scope={dirty:u,ctx:a}),n.$set(i),(!t||u&1&&s!==(s="au-toast toast "+a[0].className))&&m(e,"class",s),(!t||u&1)&&F(e,"toast-dismissible",a[0].dismissible),(!t||u&1)&&F(e,"d-flex",!a[0].slotHeader)},i(a){t||(c(n.$$.fragment,a),t=!0)},o(a){d(n.$$.fragment,a),t=!1},d(a){a&&$(e),N(n),l=!1,me(f)}}}function et(o){let e;const n=o[12].default,s=h(n,o,o[13],x);return{c(){s&&s.c()},m(t,l){s&&s.m(t,l),e=!0},p(t,l){s&&s.p&&(!e||l&270848)&&b(s,n,t,t[13],e?v(n,t[13],l,Xe):w(t[13]),x)},i(t){e||(c(s,t),e=!0)},o(t){d(s,t),e=!1},d(t){s&&s.d(t)}}}function tt(o){let e;const n=o[12].header,s=h(n,o,o[13],ee);return{c(){s&&s.c()},m(t,l){s&&s.m(t,l),e=!0},p(t,l){s&&s.p&&(!e||l&270848)&&b(s,n,t,t[13],e?v(n,t[13],l,Ye):w(t[13]),ee)},i(t){e||(c(s,t),e=!0)},o(t){d(s,t),e=!1},d(t){s&&s.d(t)}}}function st(o){let e;const n=o[12].structure,s=h(n,o,o[13],te);return{c(){s&&s.c()},m(t,l){s&&s.m(t,l),e=!0},p(t,l){s&&s.p&&(!e||l&270848)&&b(s,n,t,t[13],e?v(n,t[13],l,Ze):w(t[13]),te)},i(t){e||(c(s,t),e=!0)},o(t){d(s,t),e=!1},d(t){s&&s.d(t)}}}function ot(o){let e,n,s;const t=[o[16]];var l=o[17];function f(a,u){let i={$$slots:{structure:[st,({widget:r,state:_})=>({9:r,18:_}),({widget:r,state:_})=>(r?512:0)|(_?262144:0)],header:[tt,({widget:r,state:_})=>({9:r,18:_}),({widget:r,state:_})=>(r?512:0)|(_?262144:0)],default:[et,({state:r,widget:_})=>({18:r,9:_}),({state:r,widget:_})=>(r?262144:0)|(_?512:0)]},$$scope:{ctx:a}};for(let r=0;r<t.length;r+=1)i=H(i,t[r]);return u!==void 0&&u&65536&&(i=H(i,D(t,[T(a[16])]))),{props:i}}return l&&(e=S(l,f(o))),{c(){e&&C(e.$$.fragment),n=L()},m(a,u){e&&k(e,a,u),g(a,n,u),s=!0},p(a,u){if(u&131072&&l!==(l=a[17])){if(e){q();const i=e;d(i.$$.fragment,1,0,()=>{N(i,1)}),A()}l?(e=S(l,f(a,u)),C(e.$$.fragment),c(e.$$.fragment,1),k(e,n.parentNode,n)):e=null}else if(l){const i=u&65536?D(t,[T(a[16])]):{};u&270848&&(i.$$scope={dirty:u,ctx:a}),e.$set(i)}},i(a){s||(e&&c(e.$$.fragment,a),s=!0)},o(a){e&&d(e.$$.fragment,a),s=!1},d(a){a&&$(n),e&&N(e,a)}}}function lt(o){let e;const n=o[12].structure,s=h(n,o,o[13],se);return{c(){s&&s.c()},m(t,l){s&&s.m(t,l),e=!0},p(t,l){s&&s.p&&(!e||l&73728)&&b(s,n,t,t[13],ye(l)||!e?w(t[13]):v(n,t[13],l,xe),se)},i(t){e||(c(s,t),e=!0)},o(t){d(s,t),e=!1},d(t){s&&s.d(t)}}}function nt(o){let e,n,s=!o[2]&&oe(o);return{c(){s&&s.c(),e=L()},m(t,l){s&&s.m(t,l),g(t,e,l),n=!0},p(t,[l]){t[2]?s&&(q(),d(s,1,1,()=>{s=null}),A()):s?(s.p(t,l),l&4&&c(s,1)):(s=oe(t),s.c(),c(s,1),s.m(e.parentNode,e))},i(t){n||(c(s),n=!0)},o(t){d(s),n=!1},d(t){t&&$(e),s&&s.d(t)}}}const at={slotStructure:Ge};function rt(o,e,n){let s,t,l,f,{$$slots:a={},$$scope:u}=e;const i=de(a),r=pe({factory:Ue,widgetName:"toast",$$slots:i,$$props:e,defaultConfig:at,events:{onVisibleChange:p=>{n(10,_=p)}}});let{visible:_=void 0}=e;const ie=r.api,{stores:{slotStructure$:W,hidden$:j},directives:{transitionDirective:ue,autohideDirective:fe},state$:z}=r;return I(o,W,p=>n(3,f=p)),I(o,j,p=>n(2,l=p)),I(o,z,p=>n(0,t=p)),o.$$set=p=>{n(14,e=H(H({},e),E(p))),"visible"in p&&n(10,_=p.visible),"$$scope"in p&&n(13,u=p.$$scope)},o.$$.update=()=>{r.patchChangedProps(e),o.$$.dirty&1&&n(1,s={widget:r,state:t})},e=E(e),[t,s,l,f,W,j,ue,fe,z,r,_,ie,a,u]}class mt extends le{constructor(e){super(),ne(this,e,rt,nt,ae,{visible:10,api:11})}get api(){return this.$$.ctx[11]}}export{mt as T};
