import{G as B,H as Je,a9 as $e,a8 as Qe,S as Xe,i as Ye,s as Ve,Q as me,e as R,k as ve,a as h,b as j,r as ee,x as se,u as te,y as le,X as Ke,Y as Oe,z as oe,t as v,d as k,f as G,w as Ae,N as Ze,h as L,B as q,M as ke,c as z,m as U,g as W,af as ye,q as _e,a1 as xe,ag as et,P as ge,p as He,C as pe,D as de,I as J,J as Q,K as X,L as Y}from"./AppCommon-TiDPFPMK.js";import{c as tt,S as Re}from"./Slot-CbrzWcII.js";import{c as st,o as lt,a as ot,b as nt}from"./floatingUI-CWlMl81B.js";import{c as at}from"./focustrack-DCo-pucq.js";import{c as it}from"./navManager-D5aTy6Um.js";import{g as rt,h as ct}from"./directive-DDb3YD5o-CdQo3NBV.js";import{w as ft,d as ut,c as _t,s as mt,a as Ce}from"./stores-CzF8MSUm.js";const gt={id:void 0,ariaLabel:"Select",open:!1,disabled:!1,items:[],filterText:"",loading:!1,selected:[],navSelector:t=>t.querySelectorAll(".au-select-badge,input"),itemIdFn:t=>""+t,onOpenChange:Ce,onFilterTextChange:Ce,onSelectedChange:Ce,allowedPlacements:["bottom-start","top-start","bottom-end","top-end"],className:"",menuClassName:"",menuItemClassName:"",badgeClassName:"",slotBadgeLabel:({itemContext:t})=>t.item,slotItem:({itemContext:t})=>t.item};function pt(t){const[{id$:e,open$:l,filterText$:s,items$:o,itemIdFn$:n,onOpenChange$:p,onFilterTextChange$:c,onSelectedChange$:m,allowedPlacements$:r,navSelector$:i,...a},_]=ft(gt,t),{selected$:I}=a,C=B(()=>e()??rt()),d=ut(s,c),{hasFocus$:b,directive:N}=at(),D=_t(p,[l,b],([u,g])=>u&&g),K=B(()=>{const u=new Map,g=n();for(const w of I()){const F=g(w);u.set(F,{item:w,id:g(w),selected:!0})}return u}),ne=B(()=>[...K().values()]),M=function(){const u=Je(0);return $e(u,g=>{const{length:w}=P();g!=null&&(w?g<0?g=w-1:g>=w&&(g=0):g=void 0),u.set(g)})}(),O=B(()=>{const u=new Map;if(D()){const g=K(),w=n();for(const F of o()){const S=w(F);u.set(S,{item:F,id:S,selected:g.has(S)})}}return u}),P=B(()=>D()?[...O().values()]:[]),A=B(()=>{const u=P(),g=M();return u.length&&g!=null?u[g]:void 0}),{directives:{floatingDirective:E,referenceDirective:he},stores:{placement$:ae}}=st({props:{computePositionOptions:$e(B(()=>({middleware:[lt(5),ot({allowedPlacements:r()}),nt()]})))}}),{directive:ie,refreshElements:re,focusFirst:ce,focusLast:fe,focusLeft:V,focusRight:Z}=it(),ue=B(()=>({keys:{Home:ce,End:fe,ArrowLeft:V,ArrowRight:Z},selector:i()})),y=(u,g)=>{const w=u.target;re(),$.api.unselect(g),w instanceof HTMLElement&&setTimeout(()=>{V({event:u,referenceElement:w})||Z({event:u,referenceElement:w})}),u.preventDefault()},$={...mt({id$:C,visibleItems$:P,highlighted$:A,open$:D,selectedContexts$:ne,filterText$:d,placement$:ae,...a}),patch:_,api:{clear(){I.set([])},select(u){$.api.toggleItem(u,!0)},unselect(u){$.api.toggleItem(u,!1)},toggleItem(u,g){const w=n(),F=w(u),H=K().has(F);g==null&&(g=!H),!(g&&!O().has(F)||!g&&!H)&&I.update(T=>{var x;if(T=[...T],g&&!H)T.push(u);else if(!g&&H){const be=T.findIndex(we=>w(we)===F);T.splice(be,1)}return(x=m())==null||x(T),T})},clearText(){},highlight(u){const g=P().findIndex(w=>w.item===u);M.set(g===-1?void 0:g)},highlightFirst(){M.set(0)},highlightPrevious(){M.update(u=>u!=null?u-1:-1)},highlightNext(){M.update(u=>u!=null?u+1:1/0)},highlightLast(){M.set(-1)},open:()=>$.api.toggle(!0),close:()=>$.api.toggle(!1),toggle(u){D.update(g=>u??!g)}},directives:{hasFocusDirective:N,floatingDirective:E,referenceDirective:he,inputContainerDirective:ct(ie,ue)},actions:{onInput({target:u}){const g=u.value;Qe(()=>{D.set(g!=null&&g!==""),d.set(g)})},onRemoveBadgeClick(u,g){y(u,g)},onInputKeydown(u){const{ctrlKey:g,key:w}=u;let F=!0;switch(w){case"ArrowDown":{D()?g?$.api.highlightLast():$.api.highlightNext():($.api.open(),$.api.highlightFirst());break}case"ArrowUp":g?$.api.highlightFirst():$.api.highlightPrevious();break;case"Enter":{const S=A();S&&$.api.toggleItem(S.item);break}case"Escape":D.set(!1);break;default:F=!1}F&&u.preventDefault()},onBadgeKeydown(u,g){let w=!1;switch(u.key){case"Backspace":case"Delete":{y(u,g),w=!0;break}}w&&u.preventDefault()}}};return $}const dt=pt;function Le(t,e,l){const s=t.slice();s[50]=e[l];const o=s[50]===s[13];s[51]=o;const n=s[50].selected;return s[52]=n,s}const ht=t=>({itemContext:t[1]&524288,state:t[1]&67108864,widget:t[1]&128}),Ie=t=>({itemContext:t[50],state:t[57],widget:t[38]}),bt=t=>({itemContext:t[1]&524288,state:t[1]&67108864,widget:t[1]&128}),Fe=t=>({itemContext:t[50],state:t[57],widget:t[38]}),wt=t=>t[1]&16777216,Ct=t=>({}),Ne=t=>({...t[55]});function Se(t,e,l){const s=t.slice();return s[50]=e[l],s}const vt=t=>({itemContext:t[1]&524288,state:t[1]&67108864,widget:t[1]&128}),De=t=>({itemContext:t[50],state:t[57],widget:t[38]}),$t=t=>({itemContext:t[1]&524288,state:t[1]&67108864,widget:t[1]&128}),Te=t=>({itemContext:t[50],state:t[57],widget:t[38]}),kt=t=>t[1]&16777216,Lt=t=>({}),Me=t=>({...t[55]});function It(t){let e;const l=t[43].badgeLabel,s=J(l,t,t[47],De);return{c(){s&&s.c()},m(o,n){s&&s.m(o,n),e=!0},p(o,n){s&&s.p&&(!e||n[1]&67698816)&&Q(s,l,o,o[47],e?Y(l,o[47],n,vt):X(o[47]),De)},i(o){e||(v(s,o),e=!0)},o(o){k(s,o),e=!1},d(o){s&&s.d(o)}}}function Ft(t){let e;const l=t[43].item,s=J(l,t,t[47],Te);return{c(){s&&s.c()},m(o,n){s&&s.m(o,n),e=!0},p(o,n){s&&s.p&&(!e||n[1]&67698816)&&Q(s,l,o,o[47],e?Y(l,o[47],n,$t):X(o[47]),Te)},i(o){e||(v(s,o),e=!0)},o(o){k(s,o),e=!1},d(o){s&&s.d(o)}}}function Nt(t){let e,l,s;const o=[t[55]];var n=t[56];function p(c,m){let r={$$slots:{item:[Ft,({itemContext:i,state:a,widget:_})=>({50:i,57:a,38:_}),({itemContext:i,state:a,widget:_})=>[0,(i?524288:0)|(a?67108864:0)|(_?128:0)]],badgeLabel:[It,({itemContext:i,state:a,widget:_})=>({50:i,57:a,38:_}),({itemContext:i,state:a,widget:_})=>[0,(i?524288:0)|(a?67108864:0)|(_?128:0)]]},$$scope:{ctx:c}};for(let i=0;i<o.length;i+=1)r=q(r,o[i]);return m!==void 0&&m[1]&16777216&&(r=q(r,pe(o,[de(c[55])]))),{props:r}}return n&&(e=ge(n,p(t))),{c(){e&&z(e.$$.fragment),l=He()},m(c,m){e&&U(e,c,m),j(c,l,m),s=!0},p(c,m){if(m[1]&33554432&&n!==(n=c[56])){if(e){le();const r=e;k(r.$$.fragment,1,0,()=>{W(r,1)}),oe()}n?(e=ge(n,p(c,m)),z(e.$$.fragment),v(e.$$.fragment,1),U(e,l.parentNode,l)):e=null}else if(n){const r=m[1]&16777216?pe(o,[de(c[55])]):{};m[1]&67698816&&(r.$$scope={dirty:m,ctx:c}),e.$set(r)}},i(c){s||(e&&v(e.$$.fragment,c),s=!0)},o(c){e&&k(e.$$.fragment,c),s=!1},d(c){c&&G(l),e&&W(e,c)}}}function St(t){let e;const l=t[43].badgeLabel,s=J(l,t,t[47],Me);return{c(){s&&s.c()},m(o,n){s&&s.m(o,n),e=!0},p(o,n){s&&s.p&&(!e||n[1]&16842752)&&Q(s,l,o,o[47],kt(n)||!e?X(o[47]):Y(l,o[47],n,Lt),Me)},i(o){e||(v(s,o),e=!0)},o(o){k(s,o),e=!1},d(o){s&&s.d(o)}}}function Pe(t,e){let l,s,o,n,p,c;s=new Re({props:{slotContent:e[6],props:{state:e[7],widget:e[38],itemContext:e[50]},$$slots:{slot:[St,({props:r})=>({55:r}),({props:r})=>[0,r?16777216:0]],default:[Nt,({component:r,props:i})=>({56:r,55:i}),({component:r,props:i})=>[0,(r?33554432:0)|(i?16777216:0)]]},$$scope:{ctx:e}}});function m(...r){return e[45](e[50],...r)}return{key:t,first:null,c(){l=R("div"),z(s.$$.fragment),h(l,"tabindex","-1"),h(l,"class",o=`au-select-badge me-1 ${e[5]}`),this.first=l},m(r,i){j(r,l,i),U(s,l,null),n=!0,p||(c=se(l,"keydown",m),p=!0)},p(r,i){e=r;const a={};i[0]&64&&(a.slotContent=e[6]),i[0]&144&&(a.props={state:e[7],widget:e[38],itemContext:e[50]}),i[1]&50397184&&(a.$$scope={dirty:i,ctx:e}),s.$set(a),(!n||i[0]&32&&o!==(o=`au-select-badge me-1 ${e[5]}`))&&h(l,"class",o)},i(r){n||(v(s.$$.fragment,r),n=!0)},o(r){k(s.$$.fragment,r),n=!1},d(r){r&&G(l),W(s),p=!1,c()}}}function Be(t){let e,l=[],s=new Map,o,n,p,c,m=me(t[10]);const r=i=>i[50].id;for(let i=0;i<m.length;i+=1){let a=Le(t,m,i),_=r(a);s.set(_,l[i]=Ee(_,a))}return{c(){e=R("ul");for(let i=0;i<l.length;i+=1)l[i].c();h(e,"role","listbox"),h(e,"id",t[1]),h(e,"class",o="dropdown-menu show "+t[11]),h(e,"data-popper-placement",t[12])},m(i,a){j(i,e,a);for(let _=0;_<l.length;_+=1)l[_]&&l[_].m(e,null);n=!0,p||(c=[te(t[35].call(null,e)),te(t[34].call(null,e)),se(e,"mousedown",ye(t[44]))],p=!0)},p(i,a){a[0]&58496|a[1]&118030464&&(m=me(i[10]),le(),l=Ke(l,a,r,1,i,m,s,e,Oe,Ee,null,Le),oe()),(!n||a[0]&2)&&h(e,"id",i[1]),(!n||a[0]&2048&&o!==(o="dropdown-menu show "+i[11]))&&h(e,"class",o),(!n||a[0]&4096)&&h(e,"data-popper-placement",i[12])},i(i){if(!n){for(let a=0;a<m.length;a+=1)v(l[a]);n=!0}},o(i){for(let a=0;a<l.length;a+=1)k(l[a]);n=!1},d(i){i&&G(e);for(let a=0;a<l.length;a+=1)l[a].d();p=!1,Ae(c)}}}function Dt(t){let e;const l=t[43].badgeLabel,s=J(l,t,t[47],Ie);return{c(){s&&s.c()},m(o,n){s&&s.m(o,n),e=!0},p(o,n){s&&s.p&&(!e||n[1]&67698816)&&Q(s,l,o,o[47],e?Y(l,o[47],n,ht):X(o[47]),Ie)},i(o){e||(v(s,o),e=!0)},o(o){k(s,o),e=!1},d(o){s&&s.d(o)}}}function Tt(t){let e;const l=t[43].item,s=J(l,t,t[47],Fe);return{c(){s&&s.c()},m(o,n){s&&s.m(o,n),e=!0},p(o,n){s&&s.p&&(!e||n[1]&67698816)&&Q(s,l,o,o[47],e?Y(l,o[47],n,bt):X(o[47]),Fe)},i(o){e||(v(s,o),e=!0)},o(o){k(s,o),e=!1},d(o){s&&s.d(o)}}}function Mt(t){let e,l,s;const o=[t[55]];var n=t[56];function p(c,m){let r={$$slots:{item:[Tt,({itemContext:i,state:a,widget:_})=>({50:i,57:a,38:_}),({itemContext:i,state:a,widget:_})=>[0,(i?524288:0)|(a?67108864:0)|(_?128:0)]],badgeLabel:[Dt,({itemContext:i,state:a,widget:_})=>({50:i,57:a,38:_}),({itemContext:i,state:a,widget:_})=>[0,(i?524288:0)|(a?67108864:0)|(_?128:0)]]},$$scope:{ctx:c}};for(let i=0;i<o.length;i+=1)r=q(r,o[i]);return m!==void 0&&m[1]&16777216&&(r=q(r,pe(o,[de(c[55])]))),{props:r}}return n&&(e=ge(n,p(t))),{c(){e&&z(e.$$.fragment),l=He()},m(c,m){e&&U(e,c,m),j(c,l,m),s=!0},p(c,m){if(m[1]&33554432&&n!==(n=c[56])){if(e){le();const r=e;k(r.$$.fragment,1,0,()=>{W(r,1)}),oe()}n?(e=ge(n,p(c,m)),z(e.$$.fragment),v(e.$$.fragment,1),U(e,l.parentNode,l)):e=null}else if(n){const r=m[1]&16777216?pe(o,[de(c[55])]):{};m[1]&67698816&&(r.$$scope={dirty:m,ctx:c}),e.$set(r)}},i(c){s||(e&&v(e.$$.fragment,c),s=!0)},o(c){e&&k(e.$$.fragment,c),s=!1},d(c){c&&G(l),e&&W(e,c)}}}function Pt(t){let e;const l=t[43].item,s=J(l,t,t[47],Ne);return{c(){s&&s.c()},m(o,n){s&&s.m(o,n),e=!0},p(o,n){s&&s.p&&(!e||n[1]&16842752)&&Q(s,l,o,o[47],wt(n)||!e?X(o[47]):Y(l,o[47],n,Ct),Ne)},i(o){e||(v(s,o),e=!0)},o(o){k(s,o),e=!1},d(o){s&&s.d(o)}}}function Ee(t,e){let l,s,o,n,p,c,m,r;s=new Re({props:{slotContent:e[15],props:{state:e[7],widget:e[38],itemContext:e[50]},$$slots:{slot:[Pt,({props:a})=>({55:a}),({props:a})=>[0,a?16777216:0]],default:[Mt,({component:a,props:_})=>({56:a,55:_}),({component:a,props:_})=>[0,(a?33554432:0)|(_?16777216:0)]]},$$scope:{ctx:e}}});function i(){return e[46](e[50])}return{key:t,first:null,c(){l=R("li"),z(s.$$.fragment),o=ve(),h(l,"role","option"),h(l,"aria-selected",n=e[52]),h(l,"class",p=`au-select-item dropdown-item position-relative ${e[14]}`),_e(l,"text-bg-primary",e[51]),_e(l,"selected",e[52]),xe(l,"cursor","pointer"),this.first=l},m(a,_){j(a,l,_),U(s,l,null),ee(l,o),c=!0,m||(r=se(l,"click",i),m=!0)},p(a,_){e=a;const I={};_[0]&32768&&(I.slotContent=e[15]),_[0]&1152&&(I.props={state:e[7],widget:e[38],itemContext:e[50]}),_[1]&50397184&&(I.$$scope={dirty:_,ctx:e}),s.$set(I),(!c||_[0]&1024&&n!==(n=e[52]))&&h(l,"aria-selected",n),(!c||_[0]&16384&&p!==(p=`au-select-item dropdown-item position-relative ${e[14]}`))&&h(l,"class",p),(!c||_[0]&25600)&&_e(l,"text-bg-primary",e[51]),(!c||_[0]&17408)&&_e(l,"selected",e[52])},i(a){c||(v(s.$$.fragment,a),c=!0)},o(a){k(s.$$.fragment,a),c=!1},d(a){a&&G(l),W(s),m=!1,r()}}}function Bt(t){let e,l,s=[],o=new Map,n,p,c,m,r,i,a,_=me(t[4]);const I=d=>d[50].id;for(let d=0;d<_.length;d+=1){let b=Se(t,_,d),N=I(b);o.set(N,s[d]=Pe(N,b))}let C=t[3]&&t[10].length>0&&Be(t);return{c(){e=R("div"),l=R("div");for(let d=0;d<s.length;d+=1)s[d].c();n=ve(),p=R("input"),c=ve(),C&&C.c(),h(p,"id",t[0]),h(p,"aria-label",t[8]),h(p,"type","text"),h(p,"class","au-select-input flex-grow-1 border-0"),p.value=t[9],h(p,"aria-autocomplete","list"),h(p,"autocorrect","off"),h(p,"autocapitalize","none"),h(p,"autocomplete","off"),h(l,"role","combobox"),h(l,"class","d-flex align-items-center flex-wrap"),h(l,"aria-controls",t[1]),h(l,"aria-haspopup","listbox"),h(l,"aria-expanded",t[3]),h(e,"class",m="au-select dropdown border border-1 p-1 mb-3 d-block "+t[2])},m(d,b){j(d,e,b),ee(e,l);for(let N=0;N<s.length;N+=1)s[N]&&s[N].m(l,null);ee(l,n),ee(l,p),ee(e,c),C&&C.m(e,null),r=!0,i||(a=[se(p,"input",t[31]),se(p,"keydown",t[32]),te(t[35].call(null,l)),te(t[37].call(null,l)),te(t[36].call(null,e))],i=!0)},p(d,b){b[0]&240|b[1]&118030468&&(_=me(d[4]),le(),s=Ke(s,b,I,1,d,_,o,l,Oe,Pe,n,Se),oe()),(!r||b[0]&1)&&h(p,"id",d[0]),(!r||b[0]&256)&&h(p,"aria-label",d[8]),(!r||b[0]&512&&p.value!==d[9])&&(p.value=d[9]),(!r||b[0]&2)&&h(l,"aria-controls",d[1]),(!r||b[0]&8)&&h(l,"aria-expanded",d[3]),d[3]&&d[10].length>0?C?(C.p(d,b),b[0]&1032&&v(C,1)):(C=Be(d),C.c(),v(C,1),C.m(e,null)):C&&(le(),k(C,1,1,()=>{C=null}),oe()),(!r||b[0]&4&&m!==(m="au-select dropdown border border-1 p-1 mb-3 d-block "+d[2]))&&h(e,"class",m)},i(d){if(!r){for(let b=0;b<_.length;b+=1)v(s[b]);v(C),r=!0}},o(d){for(let b=0;b<s.length;b+=1)k(s[b]);k(C),r=!1},d(d){d&&G(e);for(let b=0;b<s.length;b+=1)s[b].d();C&&C.d(),i=!1,Ae(a)}}}function Et(t,e,l){let s,o,n,p,c,m,r,i,a,_,I,C,d,b,N,D,{$$slots:K={},$$scope:ne}=e;const M=Ze(K);let{open:O=!1}=e,{filterText:P=void 0}=e,{selected:A=void 0}=e;const E=tt({factory:dt,widgetName:"select",$$slots:M,$$props:e,events:{onOpenChange(f){l(39,O=f)},onSelectedChange:f=>{l(41,A=f)},onFilterTextChange:f=>{l(40,P=f)}}}),he=E.api,{stores:{id$:ae,ariaLabel$:ie,badgeClassName$:re,className$:ce,filterText$:fe,highlighted$:V,menuClassName$:Z,menuItemClassName$:ue,open$:y,placement$:$,selectedContexts$:u,slotBadgeLabel$:g,slotItem$:w,visibleItems$:F},state$:S,actions:{onInput:H,onInputKeydown:T,onBadgeKeydown:x},directives:{floatingDirective:be,hasFocusDirective:we,referenceDirective:qe,inputContainerDirective:ze}}=E;L(t,ae,f=>l(0,o=f)),L(t,ie,f=>l(8,a=f)),L(t,re,f=>l(5,m=f)),L(t,ce,f=>l(2,n=f)),L(t,fe,f=>l(9,_=f)),L(t,V,f=>l(13,b=f)),L(t,Z,f=>l(11,C=f)),L(t,ue,f=>l(14,N=f)),L(t,y,f=>l(3,p=f)),L(t,$,f=>l(12,d=f)),L(t,u,f=>l(4,c=f)),L(t,g,f=>l(6,r=f)),L(t,w,f=>l(15,D=f)),L(t,F,f=>l(10,I=f)),L(t,S,f=>l(7,i=f));function Ue(f){et.call(this,t,f)}const We=(f,Ge)=>x(Ge,f.item),je=f=>E.api.toggleItem(f.item);return t.$$set=f=>{l(48,e=q(q({},e),ke(f))),"open"in f&&l(39,O=f.open),"filterText"in f&&l(40,P=f.filterText),"selected"in f&&l(41,A=f.selected),"$$scope"in f&&l(47,ne=f.$$scope)},t.$$.update=()=>{E.patchChangedProps(e),t.$$.dirty[0]&1&&l(1,s=`${o}-menu`)},e=ke(e),[o,s,n,p,c,m,r,i,a,_,I,C,d,b,N,D,ae,ie,re,ce,fe,V,Z,ue,y,$,u,g,w,F,S,H,T,x,be,we,qe,ze,E,O,P,A,he,K,Ue,We,je,ne]}class Kt extends Xe{constructor(e){super(),Ye(this,e,Et,Bt,Ve,{open:39,filterText:40,selected:41,api:42},null,[-1,-1])}get api(){return this.$$.ctx[42]}}const Wt=Kt;export{Wt as S};