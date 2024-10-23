import{a as u,t as k,c as oe,d as Ve}from"../chunks/disclose-version.CAsIwiCQ.js";import{p as Z,c as d,s as o,r as i,t as S,a as ee,b as ze,a1 as Y,h as t,at as de,f as U,N as ut,L as ie,k as F,F as be}from"../chunks/runtime.CoJv2S2D.js";import{s as G,h as gt}from"../chunks/render.Hu_-JV1l.js";import{i as X}from"../chunks/if.Dy715hij.js";import{s as le}from"../chunks/snippet.De3k1p3v.js";import{g as Pe,m as Ae,s as p,r as pt,e as tt,p as Te,d as We,y as at,a as je,z as ht,A as ft}from"../chunks/stores.R1w5pOh9.js";import{t as J,s as Re,a as bt,S as O,r as _t,b as wt}from"../chunks/logo-svelte.DkJkPsp8.js";import{p as Fe,a as Ie}from"../chunks/props.C6hNWbx4.js";import{b as nt}from"../chunks/this.Cc4zxDNG.js";import{s as me,p as ve,a as j,n as $t,u as De}from"../chunks/stores.C3MyQ5Me.js";import{t as rt}from"../chunks/twitter-x.DTs9qsur.js";import{g as xt,b as kt,o as St,c as yt}from"../chunks/entry.DfSQzERD.js";import{o as Be}from"../chunks/index-client.DJXLHo62.js";import{d as we,g as At}from"../chunks/utils.CARytFSZ.js";import{g as Mt,r as re,u as ye,v as He,n as se,o as Ue,x as Lt,e as _e,t as Tt,b as It,i as st}from"../chunks/logo-typescript.CI9YwtkD.js";import{c as Ct,a as Et,f as Me}from"../chunks/cssTransitions.D3Hz910J.js";import{e as Nt}from"../chunks/svelte-element.QTQltSCQ.js";import{a as ot}from"../chunks/agnosui-logo.CxnwwfsY.js";import{i as Ft}from"../chunks/lifecycle.CFke-M2i.js";const Pt=!0,Rt=async()=>{let r;{const e=await fetch("https://www.agnosui.dev/versions.json");r=[{folder:"main",version:"PREVIEW"}].concat((await e.json()).map(n=>({...n,version:`v${n.version}`}))),r[1].version.match(/-next/)?(r[1].folder="next",r[2].folder="latest"):r[1].folder="latest"}return{versions:r,pageMeta:{title:"AgnosUI - Where web components shine",description:"Perfected component library for Svelte, React and Angular. Reactive and accessible, supports headless or Bootstrap. Providing: accordion, alert, collapse, modal, pagination, progressbar, rating, select, slider, toast, focus track, tooltip, pop-over, transition.",socialImage:"https://www.agnosui.dev/latest/agnosui-logo.png",socialImageAlt:"Icon of AgnosUI",shareUrl:"https://www.agnosui.dev/latest/"}}},ln=Object.freeze(Object.defineProperty({__proto__:null,load:Rt,prerender:Pt},Symbol.toStringTag,{value:"Module"})),it=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>`,Ut=`<svg data-v-5b7ea3a9="" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"
    class="menu-icon">
    <path d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"></path>
    <path d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"></path>
    <path d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"></path>
    <path d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"></path>
</svg>`,zt=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg>`,Wt=({dimension:r="height",showClasses:e,hideClasses:n,animationPendingClasses:s}={})=>Ct((a,f,v,$)=>{if(v&&Mt(a)){let{maxSize:g,minSize:l}=$;g||(re(a,s),re(a,n),ye(a,e),g=a.getBoundingClientRect()[r]+"px",$.maxSize=g),l||(re(a,s),re(a,e),ye(a,n),l=a.getBoundingClientRect()[r]+"px",$.minSize=l),re(a,e),re(a,n);const c=f==="show"?[l,g]:[g,l];a.style[r]=c[0],He(a),ye(a,s),He(a),a.style[r]=c[1]}else re(a,f==="show"?n:e);return()=>{re(a,s),ye(a,f==="show"?e:n),a.style[r]=""}}),jt={dimension:"height",hideClasses:["collapse"],showClasses:["collapse","show"],animationPendingClasses:["collapsing"]},Bt=Wt(jt);var Ot=(r,e)=>e(),Vt=k('<div class="mb-2"><button class="btn p-1 d-flex align-items-center btn-header fw-semibold w-100 justify-content-between svelte-mavml1"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" class="ms-1 svelte-mavml1"><rect class="horizontal svelte-mavml1" x="20" y="45" width="60" height="10" fill="currentColor"></rect><rect class="vertical svelte-mavml1" x="45" y="20" width="10" height="60" fill="currentColor"></rect></svg></button> <div><!></div></div>');function Dt(r,e){Z(e,!0);const n=me(),s=()=>j(g,"$visible$",n),a=()=>j(f,"$paramAnimated$",n),f=Pe(!1),v=x(xt(ve)),$=Pe(v);Be(()=>(f.set(!0),ve.subscribe(_=>{$()===!1&&$.set(x(_))})));const{stores:{visible$:g},api:{toggle:l},directives:{directive:c}}=Et({props:{animated:f,animatedOnInit:f,visible:$}});function x(_){return e.path.some(L=>_.url.pathname?.includes(L.path))}var y=Vt(),m=d(y);m.__click=[Ot,l];var b=d(m),M=o(b),w=o(d(M));i(M),i(m);var h=o(m,2);let I;S(()=>I=Ae(h,I,{},"svelte-mavml1"));var E=d(h);le(E,()=>e.children),i(h),i(y),S(()=>{p(m,"aria-expanded",s()),G(b,`${e.headerText??""} `),J(w,"expanded",s())}),se(h,(_,L)=>Ue(_,L),()=>"contents"),se(h,(_,L)=>c(_,L),()=>({transition:Bt,animated:a()})),u(r,y),ee()}we(["click"]);const qe="focusin",Ge="focusout",Ht=pt(null,{onUse({set:r}){function e(){r(document.activeElement)}e();const n=document.documentElement;function s(){setTimeout(e)}return n.addEventListener(qe,e,{capture:!0}),n.addEventListener(Ge,s,{capture:!0}),()=>{n.removeEventListener(qe,e,{capture:!0}),n.removeEventListener(Ge,s,{capture:!0})}},equal:Object.is});function qt(){const{elements$:r,directive:e}=Lt(),n=tt(()=>{const s=Ht();if(!s)return!1;for(const a of r())if(a===s||a.contains(s))return!0;return!1});return{directive:e,hasFocus$:n}}const Gt=r=>{r.preventDefault()};var Xt=k("<div></div>"),Jt=k('<div><button type="button"><!></button> <!></div>');function Le(r,e){Z(e,!0);let n=de(!1);const{hasFocus$:s,directive:a}=qt(),f=Me(s);ze(()=>{Y(n,Ie(f.current))});function v(w,h){h===0&&w.focus()}const $=()=>Y(n,!t(n));let g=Fe(e,"btnClass",3,""),l=Fe(e,"placement",3,"start"),c=Fe(e,"dropdownClass",3,"");const x=w=>{w.preventDefault(),w.target.focus()};var y=Jt(),m=d(y);m.__mousedown=[Gt],m.__click=$;var b=d(m);le(b,()=>e.buttonSnip),i(m);var M=o(m,2);X(M,()=>t(n),w=>{var h=Xt();let I;S(()=>I=Ae(h,I,{"data-bs-popper":"absolute"},"svelte-1cdjb5")),_e(h,23,()=>e.items,E=>E.id,(E,_,L)=>{var B=oe(),H=U(B);Nt(H,()=>t(_).tag,!1,(z,W)=>{var P=()=>{t(_).tag==="button"&&t(_).onclick(),$()};let R;S(()=>R=Ae(z,R,{href:t(_).tag==="a"?t(_).href:void 0,"aria-current":t(_).isSelected?"page":!1,onpointerdown:x,onclick:P},"svelte-1cdjb5",z.namespaceURI!==ut,z.nodeName.includes("-"))),S(()=>J(z,"active",t(_).isSelected)),se(z,(V,q)=>v(V,q),()=>t(L)),se(z,(V,q)=>Ue(V,q),()=>"dropdown-item d-flex align-items-center");var N=oe(),C=U(N);le(C,()=>e.itemSnip,()=>t(_),()=>t(L)),u(W,N)}),u(E,B)}),i(h),S(()=>J(h,"show",t(n))),se(h,E=>a(E)),se(h,(E,_)=>Ue(E,_),()=>"dropdown-menu dropdown-menu-"+l()+" position-absolute"),u(w,h)}),i(y),S(()=>{Re(y,`dropdown ${c()??""} svelte-1cdjb5`),Re(m,`btn dropdown-toggle align-items-center d-flex ${g()??""} svelte-1cdjb5`),p(m,"aria-label",e.ariaLabel),p(m,"aria-expanded",t(n))}),u(r,y),ee()}we(["mousedown","click"]);let Kt=0;var Qt=k('<!> <span class="fwk-name svelte-17s8l5c"> </span>',1),Yt=k("<!> ",1),Zt=k('<strong class="d-flex w-100 align-items-center fw-semibold">Framework</strong> <!>',1),ea=k('<!> <span class="pkg-name svelte-17s8l5c"> </span>',1),ta=k("<!> ",1),aa=k('<strong class="d-flex w-100 align-items-center fw-semibold">Package</strong> <!> <hr>',1),na=k('<a class="menu-item menu-item-sidenav d-flex align-items-center justify-content-between"> </a>'),ra=k('<span class="badge text-bg-warning">In progress</span>'),sa=k('<span class="badge text-bg-info">Beta</span>'),oa=k('<a class="menu-item menu-item-sidenav d-flex align-items-center justify-content-between"> <!> <!></a>'),ia=k("<div></div>"),la=k("<!> <!>",1),ca=k('<nav class="w-100 mt-1"><!> <!> <!></nav>');function lt(r,e){Z(e,!0);const n=me(),s=()=>j(ve,"$page",n),a=()=>j(We,"$selectedApiFramework$",n),f=()=>j(Te,"$pathToRoot$",n),v=/^(.*\/)(angular|react|svelte|typescript)(\/.*)$/,$=/^(.*\/api\/)(angular|react|svelte|typescript)\/(bootstrap|headless)(\/.*)$/;let g=F(()=>s().url.pathname.match(v)),l=F(()=>s().url.pathname.match($));const c=(Kt+=1)-1+"-",x=bt.replace(/id="([^"]+)"/g,`id="${c}$1"`).replace(/url\(#([^)]+)/g,`url(#${c}$1`);let y=F(()=>t(g)?[...s().data.includesPkg?[{tag:"a",id:"Typescript",href:`${t(g)[1]}typescript${t(g)[3]}`,isSelected:a()==="typescript",logo:Tt}]:[],{tag:"a",id:"Angular",href:`${t(g)[1]}angular${t(g)[3]}`,isSelected:a()==="angular",logo:x},{tag:"a",id:"React",href:`${t(g)[1]}react${t(g)[3]}`,isSelected:a()==="react",logo:_t},{tag:"a",id:"Svelte",href:`${t(g)[1]}svelte${t(g)[3]}`,isSelected:a()==="svelte",logo:wt}]:[]),m=F(()=>t(y).find(_=>_.isSelected)),b=F(()=>t(l)?[{tag:"a",id:"Headless",href:`${t(l)[1]}${t(l)[2]}/headless${t(l)[4]}`,isSelected:s().params.type==="headless",logo:ot},{tag:"a",id:"Bootstrap",href:`${t(l)[1]}${t(l)[2]}/bootstrap${t(l)[4]}`,isSelected:s().params.type==="bootstrap",logo:It}]:[]),M=F(()=>t(b).find(_=>_.isSelected));var w=ca(),h=d(w);X(h,()=>s().data.includesFwk,_=>{var L=Zt(),B=o(U(L),2);Le(B,{ariaLabel:"choose the framework",get items(){return t(y)},dropdownClass:"mb-2 mt-1",btnClass:"btn-outline-primary",buttonSnip:W=>{var P=Qt(),R=U(P);O(R,{get svg(){return t(m).logo},className:"icon-20 align-middle me-3"});var N=o(R,2),C=d(N);i(N),S(()=>G(C,t(m).id)),u(W,P)},itemSnip:(W,P=be)=>{var R=Yt(),N=U(R);O(N,{get svg(){return P().logo},className:"icon-20 align-middle me-3"});var C=o(N);S(()=>G(C,` ${P().id??""}`)),u(W,R)},$$slots:{buttonSnip:!0,itemSnip:!0}}),u(_,L)});var I=o(h,2);X(I,()=>s().data.includesPkg,_=>{var L=aa(),B=o(U(L),2);Le(B,{ariaLabel:"choose the package",get items(){return t(b)},dropdownClass:"mb-2 mt-1",btnClass:"btn-outline-primary",buttonSnip:W=>{var P=ea(),R=U(P);O(R,{get svg(){return t(M).logo},className:"icon-20 align-middle me-3"});var N=o(R,2),C=d(N);i(N),S(()=>G(C,t(M).id)),u(W,P)},itemSnip:(W,P=be)=>{var R=ta(),N=U(R);O(N,{get svg(){return P().logo},className:"icon-20 align-middle me-3"});var C=o(N);S(()=>G(C,` ${P().id??""}`)),u(W,R)},$$slots:{buttonSnip:!0,itemSnip:!0}}),ie(2),u(_,L)});var E=o(I,2);_e(E,1,()=>s().data.menu??[],({title:_,submenu:L,path:B})=>_,(_,L)=>{let B=()=>t(L).title,H=()=>t(L).submenu,z=()=>t(L).path;var W=la(),P=U(W);X(P,z,N=>{var C=na();const V=F(()=>s().url.pathname?.includes(z()));var q=d(C);i(C),S(()=>{p(C,"aria-current",t(V)?"page":void 0),p(C,"href",`${f()??""}${z()??""}`),J(C,"active",t(V)),G(q,B())}),u(N,C)});var R=o(P,2);X(R,H,N=>{Dt(N,{get headerText(){return B()},get path(){return H()},children:(C,V)=>{var q=ia();_e(q,21,H,({label:ue,status:ae,path:ge,subpath:pe,slug:ne})=>ne,(ue,ae)=>{let ge=()=>t(ae).label,pe=()=>t(ae).status,ne=()=>t(ae).path,Ce=()=>t(ae).subpath;var A=oa();const T=F(()=>s().url.pathname?.includes(ne()));var D=d(A),te=o(D);X(te,()=>pe()==="inprogress",K=>{var Q=ra();u(K,Q)});var ce=o(te,2);X(ce,()=>pe()==="beta",K=>{var Q=sa();u(K,Q)}),i(A),S(()=>{p(A,"aria-current",t(T)?"page":void 0),p(A,"href",`${f()??""}${ne()??""}${Ce()??""??""}`),J(A,"active",t(T)),G(D,`${ge()??""} `)}),u(ue,A)}),i(q),u(C,q)},$$slots:{default:!0}})}),u(_,W)}),i(w),u(r,w),ee()}var da=k("<a> </a>"),va=k('<div class="ms-2 mt-1 border-start-1"><div class="d-none d-lg-block fw-bold pb-2 mb-1">On this page</div> <div></div></div>');function ct(r,e){Z(e,!0);const{elements$:n,visibleElements$:s}=at,a=Me(n),f=Me(s),v=F(()=>a.current.map(l=>{const c=f.current.has(l),x=l.querySelector("h1,h2,h3");if(x){const y=[`menu-item menu-item-toc rounded-end toc-${x.tagName.toLowerCase()}`];return c&&y.push("active"),{label:x.innerText,href:x.querySelector("a")?.getAttribute("href")??"",classname:y.join(" "),isVisible:c}}else return{label:"",href:"",classname:"",isVisible:c}}));var $=oe(),g=U($);X(g,()=>a.current.length,l=>{var c=va(),x=o(d(c),2);_e(x,21,()=>t(v),st,(y,m)=>{let b=()=>t(m).label,M=()=>t(m).classname,w=()=>t(m).href,h=()=>t(m).isVisible;var I=da(),E=d(I);i(I),S(()=>{Re(I,M()),p(I,"aria-current",h()?"page":void 0),p(I,"href",w()),G(E,b())}),u(y,I)}),i(x),i(c),u(l,c)}),u(r,$),ee()}var ma=k('<dialog class="svelte-alncmg"><div class="menu-title text-center border-bottom pb-2 svelte-alncmg"><span class="menu-title-text svelte-alncmg"> </span> <button type="button" class="btn-close pb-3 pe-3 svelte-alncmg" aria-label="Close menu"></button></div> <!></dialog>');function dt(r,e){Z(e,!0);let n;ze(()=>{e.open&&n.showModal()});function s(l){const c=l.target.tagName.toLowerCase(),x=l.target.className.includes?.("btn-header")||l.target.className.includes?.("dropdown-toggle");(c==="button"&&!x||c==="a"&&!l.target.className.includes?.("dropdown-item"))&&n.close()}var a=ma();nt(a,l=>n=l,()=>n),a.__click=s;var f=d(a),v=d(f),$=d(v);i(v),ie(2),i(f);var g=o(f,2);le(g,()=>e.children),i(a),S(()=>G($,e.title)),At("close",a,function(...l){e.onclose?.apply(this,l)}),u(r,a),ee()}we(["click"]);var ua=(r,e)=>{Y(e,!0)},ga=(r,e)=>{Y(e,!0)},pa=k('<div class="d-flex align-items-center justify-content-between"><button class="d-md-none text-dark-emphasis d-flex align-items-center btn btn-link link-underline link-underline-opacity-0"><!><span class="menu-text">Menu</span></button> <button class="text-dark-emphasis d-flex align-items-center btn btn-link link-underline link-underline-opacity-0"><span class="menu-text">On this page</span> <!></button></div> <!>',1);function ha(r){let e=de(!1),n=de(!1),s=F(()=>t(e)?"Menu":t(n)?"On this page":""),a=F(()=>t(e)||t(n));function f(){Y(e,Ie(Y(n,!1)))}var v=pa(),$=U(v),g=d($);g.__click=[ua,e];var l=d(g);O(l,{svg:Ut,className:"icon-20 me-1"}),ie(),i(g);var c=o(g,2);c.__click=[ga,n];var x=o(d(c),2);O(x,{svg:zt,className:"icon-20 me-1"}),i(c),i($);var y=o($,2);dt(y,{get title(){return t(s)},get open(){return t(a)},onclose:f,children:(m,b)=>{var M=oe(),w=U(M);X(w,()=>t(e),h=>{lt(h,{})},h=>{ct(h,{})}),u(m,M)},$$slots:{default:!0}}),S(()=>{p(g,"aria-expanded",t(e)),p(c,"aria-expanded",t(n))}),u(r,v)}we(["click"]);const fa=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>`;var ba=(r,e)=>{Y(e,!0)},_a=k('<hr> <a class="nav-link svelte-1anas1w">API</a>',1),wa=k('<nav class="navbar navbar-light flex-column align-items-stretch"><a class="nav-item nav-link svelte-1anas1w">Documentation</a> <!> <hr> <a class="nav-item nav-link svelte-1anas1w">Blog</a> <hr></nav> <div class="d-flex justify-content-center"><a class="nav-link" href="https://github.com/AmadeusITGroup/AgnosUI" aria-label="link to GitHub repository" target="_blank"><!></a> <a class="nav-link ms-3" href="https://twitter.com/AgnosUI" aria-label="link to twitter / x account" target="_blank"><!></a></div>',1),$a=k('<button class="btn d-flex align-items-center px-0" aria-label="open the mobile menu"><!></button> <!>',1);function xa(r,e){Z(e,!0);const n=me(),s=()=>j(ve,"$page",n),a=()=>j(Te,"$pathToRoot$",n),f=()=>j(je,"$selectedFramework$",n),v=()=>j(We,"$selectedApiFramework$",n);let $=de(!1);function g(){Y($,!1)}let l=F(()=>s().route.id?.startsWith("/api/"));var c=$a(),x=U(c);x.__click=[ba,$];var y=d(x);O(y,{svg:fa,className:"icon-20 me-1"}),i(x);var m=o(x,2);dt(m,{title:"AgnosUI",get open(){return t($)},onclose:g,children:(b,M)=>{var w=wa(),h=U(w),I=d(h);S(()=>p(I,"aria-current",s().route.id?.startsWith("/docs/")?"page":void 0));const E=F(()=>s().route.id?.startsWith("/docs/"));var _=o(I,2);X(_,()=>!0,N=>{var C=_a(),V=o(U(C),2);S(()=>{p(V,"href",`${a()??""}api/${v()??""}/bootstrap/types`),p(V,"aria-current",t(l)?"page":void 0),J(V,"active",t(l))}),u(N,C)});var L=o(_,4);S(()=>p(L,"aria-current",s().route.id?.startsWith("/blog/")?"page":void 0));const B=F(()=>s().route.id?.startsWith("/blog/"));ie(2),i(h);var H=o(h,2),z=d(H),W=d(z);O(W,{className:"icon-24 align-middle",svg:it}),i(z);var P=o(z,2),R=d(P);O(R,{className:"icon-24 align-middle",svg:rt}),i(P),i(H),S(()=>{p(I,"href",`${a()??""}docs/${f()??""}/getting-started/introduction`),J(I,"active",t(E)),p(L,"href",`${a()??""}blog/2024-02-01`),J(L,"active",t(B))}),u(b,w)},$$slots:{default:!0}}),S(()=>p(x,"aria-expanded",t($))),u(r,c),ee()}we(["click"]);function ka(r){let e=de(void 0);const n=Me($t);function s(a){Y(e,Ie(a))}return ze(()=>{n.current||at.patch({elements:t(e)?r(t(e)):[]})}),s}var Sa=k("<div><!></div>");function ya(r,e){Z(e,!0);const n=ka(v=>Array.from(v.querySelectorAll("section")));var s=Sa();let a;S(()=>a=Ae(s,a,{}));var f=d(s);le(f,()=>e.children),i(s),se(s,v=>n(v)),u(r,s),ee()}const Aa=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-half" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"/>
</svg>`,Ma=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
</svg>`,La=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
  <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>`;var Ta=k("<!> ",1),Ia=k('<div class="nav-item"><!></div>');function Xe(r,e){Z(e,!1);const n=me(),s=()=>j(f,"$themes$",n),a=Pe("auto"),f=tt(()=>[{tag:"button",id:"auto",name:"Auto",icon:Aa,onclick:()=>{v("auto")},isSelected:a()==="auto"},{tag:"button",id:"light",name:"Light",icon:La,onclick:()=>{v("light")},isSelected:a()==="light"},{tag:"button",id:"dark",name:"Dark",icon:Ma,onclick:()=>{v("dark")},isSelected:a()==="dark"}]);function v(c){a.set(c),localStorage.setItem("theme",c),$(c)}function $(c){c==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.setAttribute("data-bs-theme","dark"):document.documentElement.setAttribute("data-bs-theme",c),document.documentElement.setAttribute("data-agnos-theme",c)}Be(()=>{v(localStorage.getItem("theme")??"auto"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{a()==="auto"&&$("auto")})}),Ft();var g=Ia(),l=d(g);Le(l,{btnClass:"btn-dark-mode nav-link",ariaLabel:"toggle the dark mode",get items(){return s()},placement:"end",buttonSnip:y=>{var m=oe(),b=U(m);_e(b,1,s,st,(M,w)=>{O(M,{get svg(){return t(w).icon},get className(){return t(w).id}})}),u(y,m)},itemSnip:(y,m=be)=>{var b=Ta(),M=U(b);O(M,{className:"me-3",get svg(){return m().icon}});var w=o(M,1,!0);S(()=>G(w,m().name)),u(y,b)},$$slots:{buttonSnip:!0,itemSnip:!0}}),i(g),u(r,g),ee()}const vt=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,Je=r=>{if(typeof r!="string")throw new TypeError("Invalid argument expected string");const e=r.match(vt);if(!e)throw new Error(`Invalid argument not valid semver ('${r}' received)`);return e.shift(),e},Ke=r=>r==="*"||r==="x"||r==="X",Qe=r=>{const e=parseInt(r,10);return isNaN(e)?r:e},Ca=(r,e)=>typeof r!=typeof e?[String(r),String(e)]:[r,e],Ea=(r,e)=>{if(Ke(r)||Ke(e))return 0;const[n,s]=Ca(Qe(r),Qe(e));return n>s?1:n<s?-1:0},Ye=(r,e)=>{for(let n=0;n<Math.max(r.length,e.length);n++){const s=Ea(r[n]||"0",e[n]||"0");if(s!==0)return s}return 0},Na=(r,e)=>{const n=Je(r),s=Je(e),a=n.pop(),f=s.pop(),v=Ye(n,s);return v!==0?v:a&&f?Ye(a.split("."),f.split(".")):a||f?a?-1:1:0},Fa=(r,e,n)=>{Pa(n);const s=Na(r,e);return mt[n].includes(s)},mt={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1],"!=":[-1,1]},Ze=Object.keys(mt),Pa=r=>{if(Ze.indexOf(r)===-1)throw new Error(`Invalid operator, expected one of ${Ze.join("|")}`)},Ra=r=>typeof r=="string"&&/^[v\d]/.test(r)&&vt.test(r);var Ua=k('<div class="nav-item"><!></div>');function et(r,e){Z(e,!0);const n=me(),s=()=>j(ve,"$page",n),a=()=>j(Te,"$pathToRoot$",n),f=()=>j(je,"$selectedFramework$",n);let v=F(()=>e.versions.find(b=>b.version==="v0.0.0")??e.versions[0]),$=F(()=>e.versions.map(b=>({tag:"a",id:b.folder,version:b.version,href:b.version==="PREVIEW"||s().route.id==="/"||s().data.since&&Ra(s().data.since)&&Fa(s().data.since,b.version,"<=")?s().url.pathname.replace(`/${t(v).folder}/`,`/${b.folder}/`):`${a().replace(t(v).folder,b.folder)}docs/${f()}/getting-started/introduction`,isSelected:t(v).folder===b.folder})));const g=/-next/;let l=F(()=>!!e.versions[1]?.version?.match?.(g));const c=(b,M,w)=>w?b===1?`Next (${M})`:b===2?`Latest (${M})`:M:b===1?`Latest (${M})`:M;var x=Ua(),y=d(x),m=F(()=>`nav-link ${(t(v).version==="PREVIEW"||t(v).folder==="next"?"badge text-bg-warning":"")??""}`);Le(y,{ariaLabel:"select the version of agnosui",get btnClass(){return t(m)},get items(){return t($)},placement:"end",buttonSnip:w=>{ie();var h=Ve();S(()=>G(h,t(v).version)),u(w,h)},itemSnip:(w,h=be,I=be)=>{ie();var E=Ve();S(()=>G(E,c(I(),h().version,t(l)))),u(w,E)},$$slots:{buttonSnip:!0,itemSnip:!0}}),i(x),u(r,x),ee()}var za=k('<link rel="canonical"> <meta itemprop="name"> <meta itemprop="description"> <meta name="description"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"> <meta property="twitter:domain" content="www.agnosui.dev"> <meta property="twitter:url"> <meta name="twitter:image"> <meta name="twitter:image:alt"> <meta name="twitter:description"> <meta name="og:title"> <meta name="og:description"> <meta name="og:url"> <meta name="og:site_name" content="AgnosUI"> <meta name="og:locale" content="en"> <meta name="og:type" content="website"> <meta property="og:image">',1),Wa=k('<a class="nav-link">API</a>'),ja=k('<div class="container-xxl"><div class="row flex-wrap flex-sm-nowrap align-content-between"><aside class="demo-sidebar mx-lg-4 mx-xl-5 d-none d-md-flex align-items-center align-items-sm-start col-auto side-menu me-3 svelte-17s38gt"><!></aside> <div class="pb-4 col"><div class="demo-mobile-menu d-block d-lg-none svelte-17s38gt"><!></div> <!></div> <div class="ms-lg-4 ms-xl-5 demo-toc d-none d-lg-flex col-auto side-menu me-auto svelte-17s38gt"><!></div></div></div>'),Ba=k('<div class="agnos-ui svelte-17s38gt"><nav class="navbar-nav demo-nav-top navbar z-1 svelte-17s38gt"><div class="container-xxl"><a class="navbar-brand mx-lg-4 mx-xl-5 d-flex align-items-center"><!> AgnosUI</a> <div class="align-items-center d-none d-md-flex gap-3"><div class="d-flex align-items-center"></div> <a class="nav-link">Documentation</a> <!> <a class="nav-link">Blog</a> <div class="vr my-1"></div> <!> <div class="vr my-1"></div> <!> <div class="vr my-1"></div> <a class="nav-link" href="https://github.com/AmadeusITGroup/AgnosUI" aria-label="link to GitHub repository" target="_blank"><!></a> <a class="nav-link" href="https://twitter.com/AgnosUI" aria-label="link to twitter / x account" target="_blank"><!></a></div> <div class="align-items-center d-flex d-md-none gap-3"><!> <!> <!></div></div></nav> <div class="demo-main d-flex flex-column z-0 svelte-17s38gt"><!></div></div>');function cn(r,e){Z(e,!0);const n=me(),s=()=>j(ft,"$routeLevel$",n),a=()=>j(ve,"$page",n),f=()=>j(ht,"$canonicalURL$",n),v=()=>j(Te,"$pathToRoot$",n),$=()=>j(je,"$selectedFramework$",n),g=()=>j(We,"$selectedApiFramework$",n);let l=de(!1);const c=()=>{De.check()};let x=F(()=>s()===0),y=F(()=>a().route.id?.startsWith("/api/"));Be(()=>{const A=De.subscribe(T=>Y(l,Ie(T)));return navigator.serviceWorker?.addEventListener("controllerchange",c),()=>{A(),navigator.serviceWorker?.removeEventListener("controllerchange",c)}}),kt(({willUnload:A,to:T})=>{t(l)&&!A&&T?.url&&(location.href=T.url.href)}),St(A=>{if(document.startViewTransition)return new Promise(T=>{document.startViewTransition(async()=>{T(),await A.complete})})});let m;const b=/\/docs\/(angular|react|svelte)\/([^#?]*)([#?].*)?$/;yt(A=>{if(!A.to?.url?.hash){const T=A.to?.url?.href?.match(b)?.[2],D=A.from?.url?.href?.match(b)?.[2];(!T||!D||T!==D)&&m.scrollTo(0,0)}});const M={capture:()=>m.scrollTop,restore:A=>m.scrollTo(0,A)};var w=Ba();gt(A=>{var T=za(),D=U(T),te=o(D,2),ce=o(te,2),K=o(ce,2),Q=o(K,4),$e=o(Q,4),xe=o($e,2),he=o(xe,2),ke=o(he,2),Se=o(ke,2),Ee=o(Se,2),fe=o(Ee,2),Ne=o(fe,8);S(()=>{p(D,"href",f()),p(te,"content",a().data.pageMeta.title),p(ce,"content",a().data.pageMeta.description),p(K,"content",a().data.pageMeta.description),p(Q,"content",a().data.pageMeta.title),p($e,"content",a().data.pageMeta.shareUrl),p(xe,"content",a().data.pageMeta.socialImage),p(he,"content",a().data.pageMeta.socialImageAlt),p(ke,"content",a().data.pageMeta.description),p(Se,"content",a().data.pageMeta.title),p(Ee,"content",a().data.pageMeta.description),p(fe,"content",a().data.pageMeta.shareUrl),p(Ne,"content",a().data.pageMeta.socialImage)}),u(A,T)});var h=d(w),I=d(h),E=d(I),_=d(E);O(_,{svg:ot,className:"agnosui-logo-brand me-2"}),ie(),i(E);var L=o(E,2),B=o(d(L),2);S(()=>p(B,"aria-current",a().route.id?.startsWith("/docs/")?"page":void 0));const H=F(()=>a().route.id?.startsWith("/docs/"));var z=o(B,2);X(z,()=>!0,A=>{var T=Wa();S(()=>{p(T,"href",`${v()??""}api/${g()??""}/bootstrap/types`),p(T,"aria-current",t(y)?"page":void 0),J(T,"active",t(y))}),u(A,T)});var W=o(z,2);S(()=>p(W,"aria-current",a().route.id?.startsWith("/blog/")?"page":void 0));const P=F(()=>a().route.id?.startsWith("/blog/"));var R=o(W,4);Xe(R,{});var N=o(R,4);et(N,{get versions(){return e.data.versions}});var C=o(N,4),V=d(C);O(V,{className:"icon-24 align-middle",svg:it}),i(C);var q=o(C,2),Oe=d(q);O(Oe,{className:"icon-24 align-middle",svg:rt}),i(q),i(L);var ue=o(L,2),ae=d(ue);Xe(ae,{});var ge=o(ae,2);et(ge,{get versions(){return e.data.versions}});var pe=o(ge,2);xa(pe,{}),i(ue),i(I),i(h);var ne=o(h,2);nt(ne,A=>m=A,()=>m);var Ce=d(ne);return X(Ce,()=>t(x),A=>{var T=oe(),D=U(T);le(D,()=>e.children),u(A,T)},A=>{var T=ja(),D=d(T),te=d(D),ce=d(te);lt(ce,{}),i(te);var K=o(te,2),Q=d(K),$e=d(Q);ha($e),i(Q);var xe=o(Q,2);ya(xe,{children:(Se,Ee)=>{var fe=oe(),Ne=U(fe);le(Ne,()=>e.children),u(Se,fe)},$$slots:{default:!0}}),i(K);var he=o(K,2),ke=d(he);ct(ke,{}),i(he),i(D),i(T),u(A,T)}),i(ne),i(w),S(()=>{p(E,"href",v()),p(B,"href",`${v()??""}docs/${$()??""}/getting-started/introduction`),J(B,"active",t(H)),p(W,"href",`${v()??""}blog/2024-02-01`),J(W,"active",t(P))}),u(r,w),ee({snapshot:M})}export{cn as component,ln as universal};