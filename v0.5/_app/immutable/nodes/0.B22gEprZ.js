import{a as v,t as y,c as de,d as Oe}from"../chunks/disclose-version.CXIfM4OQ.js";import{p as K,c as d,s as o,r as i,t as L,i as t,a as Q,k as C,b as ze,a1 as te,at as be,f as R,N as vt,L as ve,o as _e}from"../chunks/runtime.D-xWURpp.js";import{s as q,h as ut}from"../chunks/render.BBF2jv39.js";import{i as G}from"../chunks/if.BahRe87o.js";import{s as ue}from"../chunks/snippet.B-of5ABw.js";import{g as Fe,s as h,m as Me,r as mt,e as Ye,p as Ie,d as Ue,y as Ze,a as je,z as gt,A as pt}from"../chunks/stores.8zrR0iEK.js";import{t as X,s as Pe,a as ht,S as W,r as ft,b as bt}from"../chunks/logo-svelte.D6UXaULV.js";import{b as et}from"../chunks/this.BjunJ43-.js";import{d as $e,s as pe,a as z,k as _t}from"../chunks/store.D0vaWVf2.js";import{t as tt}from"../chunks/twitter-x.DTs9qsur.js";import{g as wt,b as $t,o as xt,a as kt}from"../chunks/entry.LhS15AiT.js";import{p as ge,n as St,u as yt}from"../chunks/stores.CpUC2rXn.js";import{p as Ee,a as Be}from"../chunks/props.Cfo5Qphd.js";import{f as At,r as se,q as Ae,u as Ve,l as ce,n as Re,v as Mt,e as we,t as Tt,b as Lt,i as at}from"../chunks/logo-typescript.hwVaD_RX.js";import{o as nt}from"../chunks/index-client.DjecZhrU.js";import{c as It,a as Ct,f as Te}from"../chunks/cssTransitions.BpYBjoUY.js";import{e as Nt}from"../chunks/svelte-element.C90H1i8Q.js";import{a as rt}from"../chunks/agnosui-logo.CxnwwfsY.js";import{i as Et}from"../chunks/lifecycle.uv1NZcTQ.js";const Ft=!0,Pt=async()=>{let r;{const e=await fetch("https://www.agnosui.dev/versions.json");r=[{folder:"main",version:"PREVIEW"}].concat((await e.json()).map(n=>({...n,version:`v${n.version}`}))),r[1].version.match(/-next/)?(r[1].folder="next",r[2].folder="latest"):r[1].folder="latest"}return{versions:r,pageMeta:{title:"AgnosUI - Where components shine",description:"Perfected component library for Svelte, React and Angular. Reactive and accessible, supports headless or Bootstrap. Providing: accordion, alert, collapse, modal, pagination, progressbar, rating, select, slider, toast, focus track, tooltip, pop-over, transition.",socialImage:"https://www.agnosui.dev/latest/agnosui-logo.png",socialImageAlt:"Icon of AgnosUI",shareUrl:"https://www.agnosui.dev/latest/"}}},on=Object.freeze(Object.defineProperty({__proto__:null,load:Pt,prerender:Ft},Symbol.toStringTag,{value:"Module"})),st=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>`,Rt=`<svg data-v-5b7ea3a9="" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"
    class="menu-icon">
    <path d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"></path>
    <path d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"></path>
    <path d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"></path>
    <path d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"></path>
</svg>`,zt=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg>`,Ut=({dimension:r="height",showClasses:e,hideClasses:n,animationPendingClasses:s}={})=>It((a,x,m,g)=>{if(m&&At(a)){let{maxSize:u,minSize:l}=g;u||(se(a,s),se(a,n),Ae(a,e),u=a.getBoundingClientRect()[r]+"px",g.maxSize=u),l||(se(a,s),se(a,e),Ae(a,n),l=a.getBoundingClientRect()[r]+"px",g.minSize=l),se(a,e),se(a,n);const c=x==="show"?[l,u]:[u,l];a.style[r]=c[0],Ve(a),Ae(a,s),Ve(a),a.style[r]=c[1]}else se(a,x==="show"?n:e);return()=>{se(a,s),Ae(a,x==="show"?e:n),a.style[r]=""}}),jt={dimension:"height",hideClasses:["collapse"],showClasses:["collapse","show"],animationPendingClasses:["collapsing"]},Bt=Ut(jt);var Ot=(r,e)=>e(),Vt=y('<div class="mb-2"><button class="btn p-1 d-flex align-items-center btn-header fw-semibold w-100 justify-content-between svelte-mavml1"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" class="ms-1 svelte-mavml1"><rect class="horizontal svelte-mavml1" x="20" y="45" width="60" height="10" fill="currentColor"></rect><rect class="vertical svelte-mavml1" x="45" y="20" width="10" height="60" fill="currentColor"></rect></svg></button> <div><!></div></div>');function Wt(r,e){K(e,!0);const n=pe(),s=()=>z(g,"$visible$",n),a=Fe(!1),x=c(wt(ge)),m=Fe(x);nt(()=>(a.set(!0),ge.subscribe(w=>{m()===!1&&m.set(c(w))})));const{stores:{visible$:g},api:{toggle:u},directives:{directive:l}}=Ct({props:{animated:a,animatedOnInit:a,visible:m,transition:Bt}});function c(w){return e.path.some($=>w.url.pathname?.includes($.path))}var k=Vt(),f=d(k);f.__click=[Ot,u];var b=d(f),_=o(b),M=o(d(_));i(_),i(f);var p=o(f,2);const S=C(()=>({}));let I;var B=d(p);ue(B,()=>e.children),i(p),i(k),L(()=>{h(f,"aria-expanded",s()),q(b,`${e.headerText??""} `),X(M,"expanded",s()),I=Me(p,I,{...t(S)},"svelte-mavml1")}),ce(p,(w,$)=>Re(w,$),()=>"contents"),ce(p,w=>l(w)),v(r,k),Q()}$e(["click"]);const We="focusin",De="focusout",Dt=mt(null,{onUse({set:r}){function e(){r(document.activeElement)}e();const n=document.documentElement;function s(){setTimeout(e)}return n.addEventListener(We,e,{capture:!0}),n.addEventListener(De,s,{capture:!0}),()=>{n.removeEventListener(We,e,{capture:!0}),n.removeEventListener(De,s,{capture:!0})}},equal:Object.is});function Ht(){const{elements$:r,directive:e}=Mt(),n=Ye(()=>{const s=Dt();if(!s)return!1;for(const a of r())if(a===s||a.contains(s))return!0;return!1});return{directive:e,hasFocus$:n}}const qt=r=>{r.preventDefault()};var Gt=y("<div></div>"),Xt=y('<div><button type="button"><!></button> <!></div>');function Le(r,e){K(e,!0);let n=be(!1);const{hasFocus$:s,directive:a}=Ht(),x=Te(s);ze(()=>{te(n,Be(x.current))});function m(p,S){S===0&&p.focus()}const g=()=>te(n,!t(n));let u=Ee(e,"btnClass",3,""),l=Ee(e,"placement",3,"start"),c=Ee(e,"dropdownClass",3,"");const k=p=>{p.preventDefault(),p.target.focus()};var f=Xt(),b=d(f);b.__mousedown=[qt],b.__click=g;var _=d(b);ue(_,()=>e.buttonSnip),i(b);var M=o(b,2);G(M,()=>t(n),p=>{var S=Gt();const I=C(()=>({}));let B;we(S,23,()=>e.items,w=>w.id,(w,$,O)=>{var V=de(),U=R(V);const j=C(()=>({}));Nt(U,()=>t($).tag,!1,(T,P)=>{var E=()=>{t($).tag==="button"&&t($).onclick(),g()};let N;L(()=>{N=Me(T,N,{href:t($).tag==="a"?t($).href:void 0,"aria-current":t($).isSelected?"page":!1,onpointerdown:k,onclick:E,...t(j)},"svelte-1cdjb5",T.namespaceURI===vt,T.nodeName.includes("-")),X(T,"active",t($).isSelected)}),ce(T,(oe,Z)=>m(oe,Z),()=>t(O)),ce(T,(oe,Z)=>Re(oe,Z),()=>"dropdown-item d-flex align-items-center");var D=de(),Y=R(D);ue(Y,()=>e.itemSnip,()=>t($),()=>t(O)),v(P,D)}),v(w,V)}),i(S),L(()=>{B=Me(S,B,{"data-bs-popper":"absolute",...t(I)},"svelte-1cdjb5"),X(S,"show",t(n))}),ce(S,w=>a(w)),ce(S,(w,$)=>Re(w,$),()=>"dropdown-menu dropdown-menu-"+l()+" position-absolute"),v(p,S)}),i(f),L(()=>{Pe(f,`dropdown ${c()??""} svelte-1cdjb5`),Pe(b,`btn dropdown-toggle align-items-center d-flex ${u()??""} svelte-1cdjb5`),h(b,"aria-label",e.ariaLabel),h(b,"aria-expanded",t(n))}),v(r,f),Q()}$e(["mousedown","click"]);let Jt=0;var Kt=y('<!> <span class="fwk-name svelte-17s8l5c"> </span>',1),Qt=y("<!> ",1),Yt=y('<strong class="d-flex w-100 align-items-center fw-semibold">Framework</strong> <!>',1),Zt=y('<!> <span class="pkg-name svelte-17s8l5c"> </span>',1),ea=y("<!> ",1),ta=y('<strong class="d-flex w-100 align-items-center fw-semibold">Package</strong> <!> <hr>',1),aa=y('<a class="menu-item menu-item-sidenav d-flex align-items-center justify-content-between"> </a>'),na=y('<span class="badge text-bg-warning">In progress</span>'),ra=y('<span class="badge text-bg-info">Beta</span>'),sa=y('<a class="menu-item menu-item-sidenav d-flex align-items-center justify-content-between"> <!> <!></a>'),oa=y("<div></div>"),ia=y("<!> <!>",1),la=y('<nav class="w-100 mt-1"><!> <!> <!></nav>');function ot(r,e){K(e,!0);const n=pe(),s=()=>z(ge,"$page",n),a=()=>z(Ue,"$selectedApiFramework$",n),x=()=>z(Ie,"$pathToRoot$",n),m=/^(.*\/)(angular|react|svelte|typescript)(\/.*)$/,g=/^(.*\/api\/)(angular|react|svelte|typescript)\/(bootstrap|headless)(\/.*)$/;let u=C(()=>s().url.pathname.match(m)),l=C(()=>s().url.pathname.match(g));const c=(Jt+=1)-1+"-",k=ht.replace(/id="([^"]+)"/g,`id="${c}$1"`).replace(/url\(#([^)]+)/g,`url(#${c}$1`);let f=C(()=>t(u)?[...s().data.includesPkg?[{tag:"a",id:"Typescript",href:`${t(u)[1]}typescript${t(u)[3]}`,isSelected:a()==="typescript",logo:Tt}]:[],{tag:"a",id:"Angular",href:`${t(u)[1]}angular${t(u)[3]}`,isSelected:a()==="angular",logo:k},{tag:"a",id:"React",href:`${t(u)[1]}react${t(u)[3]}`,isSelected:a()==="react",logo:ft},{tag:"a",id:"Svelte",href:`${t(u)[1]}svelte${t(u)[3]}`,isSelected:a()==="svelte",logo:bt}]:[]),b=C(()=>t(f).find(w=>w.isSelected)),_=C(()=>t(l)?[{tag:"a",id:"Headless",href:`${t(l)[1]}${t(l)[2]}/headless${t(l)[4]}`,isSelected:s().params.type==="headless",logo:rt},{tag:"a",id:"Bootstrap",href:`${t(l)[1]}${t(l)[2]}/bootstrap${t(l)[4]}`,isSelected:s().params.type==="bootstrap",logo:Lt}]:[]),M=C(()=>t(_).find(w=>w.isSelected));var p=la(),S=d(p);G(S,()=>s().data.includesFwk,w=>{var $=Yt(),O=o(R($),2);Le(O,{ariaLabel:"choose the framework",get items(){return t(f)},dropdownClass:"mb-2 mt-1",btnClass:"btn-outline-primary",buttonSnip:j=>{var T=Kt(),P=R(T);W(P,{get svg(){return t(b).logo},className:"icon-20 align-middle me-3"});var E=o(P,2),N=d(E,!0);i(E),L(()=>q(N,t(b).id)),v(j,T)},itemSnip:(j,T=_e)=>{var P=Qt(),E=R(P);W(E,{get svg(){return T().logo},className:"icon-20 align-middle me-3"});var N=o(E);L(()=>q(N,` ${T().id??""}`)),v(j,P)},$$slots:{buttonSnip:!0,itemSnip:!0}}),v(w,$)});var I=o(S,2);G(I,()=>s().data.includesPkg,w=>{var $=ta(),O=o(R($),2);Le(O,{ariaLabel:"choose the package",get items(){return t(_)},dropdownClass:"mb-2 mt-1",btnClass:"btn-outline-primary",buttonSnip:j=>{var T=Zt(),P=R(T);W(P,{get svg(){return t(M).logo},className:"icon-20 align-middle me-3"});var E=o(P,2),N=d(E,!0);i(E),L(()=>q(N,t(M).id)),v(j,T)},itemSnip:(j,T=_e)=>{var P=ea(),E=R(P);W(E,{get svg(){return T().logo},className:"icon-20 align-middle me-3"});var N=o(E);L(()=>q(N,` ${T().id??""}`)),v(j,P)},$$slots:{buttonSnip:!0,itemSnip:!0}}),ve(2),v(w,$)});var B=o(I,2);we(B,1,()=>s().data.menu??[],({title:w,submenu:$,path:O})=>w,(w,$)=>{let O=()=>t($).title,V=()=>t($).submenu,U=()=>t($).path;var j=ia(),T=R(j);G(T,U,E=>{var N=aa();const D=C(()=>s().url.pathname?.includes(U()));var Y=d(N,!0);i(N),L(()=>{h(N,"aria-current",t(D)?"page":void 0),h(N,"href",`${x()??""}${U()??""}`),X(N,"active",t(D)),q(Y,O())}),v(E,N)});var P=o(T,2);G(P,V,E=>{Wt(E,{get headerText(){return O()},get path(){return V()},children:(N,D)=>{var Y=oa();we(Y,21,V,({label:Z,status:ae,path:xe,subpath:ie,slug:me})=>me,(Z,ae)=>{let xe=()=>t(ae).label,ie=()=>t(ae).status,me=()=>t(ae).path,F=()=>t(ae).subpath;var A=sa();const H=C(()=>s().url.pathname?.includes(me()));var ee=d(A),le=o(ee);G(le,()=>ie()==="inprogress",J=>{var re=na();v(J,re)});var ne=o(le,2);G(ne,()=>ie()==="beta",J=>{var re=ra();v(J,re)}),i(A),L(()=>{h(A,"aria-current",t(H)?"page":void 0),h(A,"href",`${x()??""}${me()??""}${F()??""??""}`),X(A,"active",t(H)),q(ee,`${xe()??""} `)}),v(Z,A)}),i(Y),v(N,Y)},$$slots:{default:!0}})}),v(w,j)}),i(p),v(r,p),Q()}var ca=y("<a> </a>"),da=y('<div class="ms-2 mt-1 border-start-1"><div class="d-none d-lg-block fw-bold pb-2 mb-1">On this page</div> <div></div></div>');function it(r,e){K(e,!0);const{elements$:n,visibleElements$:s}=Ze,a=Te(n),x=Te(s),m=C(()=>a.current.map(l=>{const c=x.current.has(l),k=l.querySelector("h1,h2,h3");if(k){const f=[`menu-item menu-item-toc rounded-end toc-${k.tagName.toLowerCase()}`];return c&&f.push("active"),{label:k.innerText,href:k.querySelector("a")?.getAttribute("href")??"",classname:f.join(" "),isVisible:c}}else return{label:"",href:"",classname:"",isVisible:c}}));var g=de(),u=R(g);G(u,()=>a.current.length,l=>{var c=da(),k=o(d(c),2);we(k,21,()=>t(m),at,(f,b)=>{let _=()=>t(b).label,M=()=>t(b).classname,p=()=>t(b).href,S=()=>t(b).isVisible;var I=ca(),B=d(I,!0);i(I),L(()=>{Pe(I,M()),h(I,"aria-current",S()?"page":void 0),h(I,"href",p()),q(B,_())}),v(f,I)}),i(k),i(c),v(l,c)}),v(r,g),Q()}var va=y('<dialog class="svelte-alncmg"><div class="menu-title text-center border-bottom pb-2 svelte-alncmg"><span class="menu-title-text svelte-alncmg"> </span> <button type="button" class="btn-close pb-3 pe-3 svelte-alncmg" aria-label="Close menu"></button></div> <!></dialog>');function lt(r,e){K(e,!0);let n;ze(()=>{e.open&&n.showModal()});function s(l){const c=l.target.tagName.toLowerCase(),k=l.target.className.includes?.("btn-header")||l.target.className.includes?.("dropdown-toggle");(c==="button"&&!k||c==="a"&&!l.target.className.includes?.("dropdown-item"))&&n.close()}var a=va();et(a,l=>n=l,()=>n),a.__click=s;var x=d(a),m=d(x),g=d(m,!0);i(m),ve(2),i(x);var u=o(x,2);ue(u,()=>e.children),i(a),L(()=>q(g,e.title)),_t("close",a,function(...l){e.onclose?.apply(this,l)}),v(r,a),Q()}$e(["click"]);var ua=(r,e)=>{te(e,!0)},ma=(r,e)=>{te(e,!0)},ga=y('<div class="d-flex align-items-center justify-content-between"><button class="d-md-none text-dark-emphasis d-flex align-items-center btn btn-link link-underline link-underline-opacity-0"><!><span class="menu-text">Menu</span></button> <button class="text-dark-emphasis d-flex align-items-center btn btn-link link-underline link-underline-opacity-0"><span class="menu-text">On this page</span> <!></button></div> <!>',1);function pa(r){let e=be(!1),n=be(!1),s=C(()=>t(e)?"Menu":t(n)?"On this page":""),a=C(()=>t(e)||t(n));function x(){te(e,Be(te(n,!1)))}var m=ga(),g=R(m),u=d(g);u.__click=[ua,e];var l=d(u);W(l,{svg:Rt,className:"icon-20 me-1"}),ve(),i(u);var c=o(u,2);c.__click=[ma,n];var k=o(d(c),2);W(k,{svg:zt,className:"icon-20 me-1"}),i(c),i(g);var f=o(g,2);lt(f,{get title(){return t(s)},get open(){return t(a)},onclose:x,children:(b,_)=>{var M=de(),p=R(M);G(p,()=>t(e),S=>{ot(S,{})},S=>{it(S,{})}),v(b,M)},$$slots:{default:!0}}),L(()=>{h(u,"aria-expanded",t(e)),h(c,"aria-expanded",t(n))}),v(r,m)}$e(["click"]);const ha=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>`;var fa=(r,e)=>{te(e,!0)},ba=y('<hr> <a class="nav-link svelte-1anas1w">API</a>',1),_a=y('<nav class="navbar navbar-light flex-column align-items-stretch"><a class="nav-item nav-link svelte-1anas1w">Documentation</a> <!> <hr> <a class="nav-item nav-link svelte-1anas1w">Blog</a> <hr></nav> <div class="d-flex justify-content-center"><a class="nav-link" href="https://github.com/AmadeusITGroup/AgnosUI" aria-label="link to GitHub repository" target="_blank"><!></a> <a class="nav-link ms-3" href="https://twitter.com/AgnosUI" aria-label="link to twitter / x account" target="_blank"><!></a></div>',1),wa=y('<button class="btn d-flex align-items-center px-0" aria-label="open the mobile menu"><!></button> <!>',1);function $a(r,e){K(e,!0);const n=pe(),s=()=>z(ge,"$page",n),a=()=>z(Ie,"$pathToRoot$",n),x=()=>z(je,"$selectedFramework$",n),m=()=>z(Ue,"$selectedApiFramework$",n);let g=be(!1);function u(){te(g,!1)}let l=C(()=>s().route.id?.startsWith("/api/"));var c=wa(),k=R(c);k.__click=[fa,g];var f=d(k);W(f,{svg:ha,className:"icon-20 me-1"}),i(k);var b=o(k,2);lt(b,{title:"AgnosUI",get open(){return t(g)},onclose:u,children:(_,M)=>{var p=_a(),S=R(p),I=d(S);L(()=>h(I,"aria-current",s().route.id?.startsWith("/docs/")?"page":void 0));const B=C(()=>s().route.id?.startsWith("/docs/"));var w=o(I,2);G(w,()=>!0,E=>{var N=ba(),D=o(R(N),2);L(()=>{h(D,"href",`${a()??""}api/${m()??""}/bootstrap/types`),h(D,"aria-current",t(l)?"page":void 0),X(D,"active",t(l))}),v(E,N)});var $=o(w,4);L(()=>h($,"aria-current",s().route.id?.startsWith("/blog/")?"page":void 0));const O=C(()=>s().route.id?.startsWith("/blog/"));ve(2),i(S);var V=o(S,2),U=d(V),j=d(U);W(j,{className:"icon-24 align-middle",svg:st}),i(U);var T=o(U,2),P=d(T);W(P,{className:"icon-24 align-middle",svg:tt}),i(T),i(V),L(()=>{h(I,"href",`${a()??""}docs/${x()??""}/getting-started/introduction`),X(I,"active",t(B)),h($,"href",`${a()??""}blog/2024-02-01`),X($,"active",t(O))}),v(_,p)},$$slots:{default:!0}}),L(()=>h(k,"aria-expanded",t(g))),v(r,c),Q()}$e(["click"]);function xa(r){let e=be(void 0);const n=Te(St);function s(a){te(e,Be(a))}return ze(()=>{n.current||Ze.patch({elements:t(e)?r(t(e)):[]})}),s}var ka=y("<div><!></div>");function Sa(r,e){K(e,!0);const n=xa(g=>Array.from(g.querySelectorAll("section")));var s=ka();const a=C(()=>({}));let x;var m=d(s);ue(m,()=>e.children),i(s),L(()=>x=Me(s,x,{...t(a)})),ce(s,g=>n(g)),v(r,s),Q()}const ya=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-half" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"/>
</svg>`,Aa=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
</svg>`,Ma=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
  <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>`;var Ta=y("<!> ",1),La=y('<div class="nav-item"><!></div>');function He(r,e){K(e,!1);const n=pe(),s=()=>z(x,"$themes$",n),a=Fe("auto"),x=Ye(()=>[{tag:"button",id:"auto",name:"Auto",icon:ya,onclick:()=>{m("auto")},isSelected:a()==="auto"},{tag:"button",id:"light",name:"Light",icon:Ma,onclick:()=>{m("light")},isSelected:a()==="light"},{tag:"button",id:"dark",name:"Dark",icon:Aa,onclick:()=>{m("dark")},isSelected:a()==="dark"}]);function m(c){a.set(c),localStorage.setItem("theme",c),g(c)}function g(c){c==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.setAttribute("data-bs-theme","dark"):document.documentElement.setAttribute("data-bs-theme",c),document.documentElement.setAttribute("data-agnos-theme",c)}nt(()=>{m(localStorage.getItem("theme")??"auto"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{a()==="auto"&&g("auto")})}),Et();var u=La(),l=d(u);Le(l,{btnClass:"btn-dark-mode nav-link",ariaLabel:"toggle the dark mode",get items(){return s()},placement:"end",buttonSnip:f=>{var b=de(),_=R(b);we(_,1,s,at,(M,p)=>{W(M,{get svg(){return t(p).icon},get className(){return t(p).id}})}),v(f,b)},itemSnip:(f,b=_e)=>{var _=Ta(),M=R(_);W(M,{className:"me-3",get svg(){return b().icon}});var p=o(M,1,!0);L(()=>q(p,b().name)),v(f,_)},$$slots:{buttonSnip:!0,itemSnip:!0}}),i(u),v(r,u),Q()}const ct=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,qe=r=>{if(typeof r!="string")throw new TypeError("Invalid argument expected string");const e=r.match(ct);if(!e)throw new Error(`Invalid argument not valid semver ('${r}' received)`);return e.shift(),e},Ge=r=>r==="*"||r==="x"||r==="X",Xe=r=>{const e=parseInt(r,10);return isNaN(e)?r:e},Ia=(r,e)=>typeof r!=typeof e?[String(r),String(e)]:[r,e],Ca=(r,e)=>{if(Ge(r)||Ge(e))return 0;const[n,s]=Ia(Xe(r),Xe(e));return n>s?1:n<s?-1:0},Je=(r,e)=>{for(let n=0;n<Math.max(r.length,e.length);n++){const s=Ca(r[n]||"0",e[n]||"0");if(s!==0)return s}return 0},Na=(r,e)=>{const n=qe(r),s=qe(e),a=n.pop(),x=s.pop(),m=Je(n,s);return m!==0?m:a&&x?Je(a.split("."),x.split(".")):a||x?a?-1:1:0},Ea=(r,e,n)=>{Fa(n);const s=Na(r,e);return dt[n].includes(s)},dt={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1],"!=":[-1,1]},Ke=Object.keys(dt),Fa=r=>{if(Ke.indexOf(r)===-1)throw new Error(`Invalid operator, expected one of ${Ke.join("|")}`)},Pa=r=>typeof r=="string"&&/^[v\d]/.test(r)&&ct.test(r);var Ra=y('<div class="nav-item"><!></div>');function Qe(r,e){K(e,!0);const n=pe(),s=()=>z(ge,"$page",n),a=()=>z(Ie,"$pathToRoot$",n),x=()=>z(je,"$selectedFramework$",n);let m=C(()=>e.versions.find(_=>_.version==="v0.5.0-next.0")??e.versions[0]),g=C(()=>e.versions.map(_=>({tag:"a",id:_.folder,version:_.version,href:_.version==="PREVIEW"||s().route.id==="/"||s().data.since&&Pa(s().data.since)&&Ea(s().data.since,_.version,"<=")?s().url.pathname.replace(`/${t(m).folder}/`,`/${_.folder}/`):`${a().replace(t(m).folder,_.folder)}docs/${x()}/getting-started/introduction`,isSelected:t(m).folder===_.folder})));const u=/-next/;let l=C(()=>!!e.versions[1]?.version?.match?.(u));const c=(_,M,p)=>p?_===1?`Next (${M})`:_===2?`Latest (${M})`:M:_===1?`Latest (${M})`:M;var k=Ra(),f=d(k),b=C(()=>`nav-link ${(t(m).version==="PREVIEW"||t(m).folder==="next"?"badge text-bg-warning":"")??""}`);Le(f,{ariaLabel:"select the version of agnosui",get btnClass(){return t(b)},get items(){return t(g)},placement:"end",buttonSnip:p=>{ve();var S=Oe();L(()=>q(S,t(m).version)),v(p,S)},itemSnip:(p,S=_e,I=_e)=>{ve();var B=Oe();L(()=>q(B,c(I(),S().version,t(l)))),v(p,B)},$$slots:{buttonSnip:!0,itemSnip:!0}}),i(k),v(r,k),Q()}var za=y('<link rel="canonical"> <meta itemprop="name"> <meta itemprop="description"> <meta name="description"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"> <meta property="twitter:domain" content="www.agnosui.dev"> <meta property="twitter:url"> <meta name="twitter:image"> <meta name="twitter:image:alt"> <meta name="twitter:description"> <meta name="og:title"> <meta name="og:description"> <meta name="og:url"> <meta name="og:site_name" content="AgnosUI"> <meta name="og:locale" content="en"> <meta name="og:type" content="website"> <meta property="og:image">',1),Ua=y('<a class="nav-link">API</a>'),ja=y('<div class="container-xxl"><div class="row flex-wrap flex-sm-nowrap align-content-between"><aside class="demo-sidebar mx-lg-4 mx-xl-5 d-none d-md-flex align-items-center align-items-sm-start col-auto side-menu me-3 svelte-17s38gt"><!></aside> <div class="pb-4 col"><div class="demo-mobile-menu d-block d-lg-none svelte-17s38gt"><!></div> <!></div> <div class="ms-lg-4 ms-xl-5 demo-toc d-none d-lg-flex col-auto side-menu me-auto svelte-17s38gt"><!></div></div></div>'),Ba=y('<div class="agnos-ui svelte-17s38gt"><nav class="navbar-nav demo-nav-top navbar z-1 svelte-17s38gt"><div class="container-xxl"><a class="navbar-brand mx-lg-4 mx-xl-5 d-flex align-items-center"><!> AgnosUI</a> <div class="align-items-center d-none d-md-flex gap-3"><div class="d-flex align-items-center"></div> <a class="nav-link">Documentation</a> <!> <a class="nav-link">Blog</a> <div class="vr my-1"></div> <!> <div class="vr my-1"></div> <!> <div class="vr my-1"></div> <a class="nav-link" href="https://github.com/AmadeusITGroup/AgnosUI" aria-label="link to GitHub repository" target="_blank"><!></a> <a class="nav-link" href="https://twitter.com/AgnosUI" aria-label="link to twitter / x account" target="_blank"><!></a></div> <div class="align-items-center d-flex d-md-none gap-3"><!> <!> <!></div></div></nav> <div class="demo-main d-flex flex-column z-0 svelte-17s38gt"><!></div></div>');function ln(r,e){K(e,!0);const n=pe(),s=()=>z(pt,"$routeLevel$",n),a=()=>z(ge,"$page",n),x=()=>z(yt,"$updated",n),m=()=>z(gt,"$canonicalURL$",n),g=()=>z(Ie,"$pathToRoot$",n),u=()=>z(je,"$selectedFramework$",n),l=()=>z(Ue,"$selectedApiFramework$",n);let c=C(()=>s()===0),k=C(()=>a().route.id?.startsWith("/api/"));$t(({willUnload:F,to:A})=>{x()&&!F&&A?.url&&(location.href=A.url.href)}),xt(F=>{if(document.startViewTransition)return new Promise(A=>{document.startViewTransition(async()=>{A(),await F.complete})})});let f;const b=/\/docs\/(angular|react|svelte)\/([^#?]*)([#?].*)?$/;kt(F=>{if(!F.to?.url?.hash){const A=F.to?.url?.href?.match(b)?.[2],H=F.from?.url?.href?.match(b)?.[2];(!A||!H||A!==H)&&f.scrollTo(0,0)}});const _={capture:()=>f.scrollTop,restore:F=>f.scrollTo(0,F)};var M=Ba();ut(F=>{var A=za(),H=R(A),ee=o(H,2),le=o(ee,2),ne=o(le,2),J=o(ne,4),re=o(J,4),ke=o(re,2),he=o(ke,2),Se=o(he,2),ye=o(Se,2),Ce=o(ye,2),fe=o(Ce,2),Ne=o(fe,8);L(()=>{h(H,"href",m()),h(ee,"content",a().data.pageMeta.title),h(le,"content",a().data.pageMeta.description),h(ne,"content",a().data.pageMeta.description),h(J,"content",a().data.pageMeta.title),h(re,"content",a().data.pageMeta.shareUrl),h(ke,"content",a().data.pageMeta.socialImage),h(he,"content",a().data.pageMeta.socialImageAlt),h(Se,"content",a().data.pageMeta.description),h(ye,"content",a().data.pageMeta.title),h(Ce,"content",a().data.pageMeta.description),h(fe,"content",a().data.pageMeta.shareUrl),h(Ne,"content",a().data.pageMeta.socialImage)}),v(F,A)});var p=d(M),S=d(p),I=d(S),B=d(I);W(B,{svg:rt,className:"agnosui-logo-brand me-2"}),ve(),i(I);var w=o(I,2),$=o(d(w),2);L(()=>h($,"aria-current",a().route.id?.startsWith("/docs/")?"page":void 0));const O=C(()=>a().route.id?.startsWith("/docs/"));var V=o($,2);G(V,()=>!0,F=>{var A=Ua();L(()=>{h(A,"href",`${g()??""}api/${l()??""}/bootstrap/types`),h(A,"aria-current",t(k)?"page":void 0),X(A,"active",t(k))}),v(F,A)});var U=o(V,2);L(()=>h(U,"aria-current",a().route.id?.startsWith("/blog/")?"page":void 0));const j=C(()=>a().route.id?.startsWith("/blog/"));var T=o(U,4);He(T,{});var P=o(T,4);Qe(P,{get versions(){return e.data.versions}});var E=o(P,4),N=d(E);W(N,{className:"icon-24 align-middle",svg:st}),i(E);var D=o(E,2),Y=d(D);W(Y,{className:"icon-24 align-middle",svg:tt}),i(D),i(w);var oe=o(w,2),Z=d(oe);He(Z,{});var ae=o(Z,2);Qe(ae,{get versions(){return e.data.versions}});var xe=o(ae,2);$a(xe,{}),i(oe),i(S),i(p);var ie=o(p,2);et(ie,F=>f=F,()=>f);var me=d(ie);return G(me,()=>t(c),F=>{var A=de(),H=R(A);ue(H,()=>e.children),v(F,A)},F=>{var A=ja(),H=d(A),ee=d(H),le=d(ee);ot(le,{}),i(ee);var ne=o(ee,2),J=d(ne),re=d(J);pa(re),i(J);var ke=o(J,2);Sa(ke,{children:(ye,Ce)=>{var fe=de(),Ne=R(fe);ue(Ne,()=>e.children),v(ye,fe)},$$slots:{default:!0}}),i(ne);var he=o(ne,2),Se=d(he);it(Se,{}),i(he),i(H),i(A),v(F,A)}),i(ie),i(M),L(()=>{h(I,"href",g()),h($,"href",`${g()??""}docs/${u()??""}/getting-started/introduction`),X($,"active",t(O)),h(U,"href",`${g()??""}blog/2024-02-01`),X(U,"active",t(j))}),v(r,M),Q({snapshot:_})}export{ln as component,on as universal};