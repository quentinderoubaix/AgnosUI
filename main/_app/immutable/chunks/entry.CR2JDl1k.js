import{o as ft}from"./index-client.DJXLHo62.js";import{F as O,g as ut,aG as dt,av as ht}from"./runtime.CoJv2S2D.js";function De(e,t,n){if(e==null)return t(void 0),n&&n(void 0),O;const r=e.subscribe(t,n);return r.unsubscribe?()=>r.unsubscribe():r}new URL("sveltekit-internal://");function pt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function gt(e){return e.split("%25").map(decodeURI).join("%25")}function _t(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function ue({href:e}){return e.split("#")[0]}const mt=["href","pathname","search","toString","toJSON"];function yt(e,t,n){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,s){if(s==="get"||s==="getAll"||s==="has")return o=>(n(o),a[s](o));t();const i=Reflect.get(a,s);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of mt)Object.defineProperty(r,a,{get(){return t(),e[a]},enumerable:!0,configurable:!0});return r}const wt="/__data.json",vt=".html__data.json";function bt(e){return e.endsWith(".html")?e.replace(/\.html$/,vt):e.replace(/\/$/,"")+wt}function At(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function kt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const Fe=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:t?.method||"GET")!=="GET"&&q.delete(me(e)),Fe(e,t));const q=new Map;function Et(e,t){const n=me(e,t),r=document.querySelector(n);if(r?.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&q.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=kt(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function St(e,t,n){if(q.size>0){const r=me(e,n),a=q.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(a.body,a.init);q.delete(r)}}return window.fetch(t,n)}function me(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${At(...a)}"]`}return r}const Rt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function It(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Tt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return de(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return de(String.fromCharCode(...c.slice(2).split("-").map(g=>parseInt(g,16))));const d=Rt.exec(c),[,p,u,f,h]=d;return t.push({name:f,matcher:h,optional:!!p,rest:!!u,chained:u?l===1&&i[0]==="":!1}),u?"(.*?)":p?"([^/]*)?":"([^/]+?)"}return de(c)}).join("")}).join("")}/?$`),params:t}}function xt(e){return!/^\([^)]+\)$/.test(e)}function Tt(e){return e.slice(1).split("/").filter(xt)}function Ut(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=t[o+1],p=a[o+1];d&&!d.rest&&d.optional&&p&&c.chained&&(i=0),!d&&!p&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function de(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Lt({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,l,d]])=>{const{pattern:p,params:u}=It(o),f={id:o,exec:h=>{const g=p.exec(h);if(g)return Ut(g,u,r)},errors:[1,...d||[]].map(h=>e[h]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function Ve(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Te(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const N=[];function Pt(e,t){return{subscribe:ae(e,t).subscribe}}function ae(e,t=O){let n=null;const r=new Set;function a(o){if(dt(e,o)&&(e=o,n)){const c=!N.length;for(const l of r)l[1](),N.push(l,e);if(c){for(let l=0;l<N.length;l+=2)N[l][0](N[l+1]);N.length=0}}}function s(o){a(o(e))}function i(o,c=O){const l=[o,c];return r.add(l),r.size===1&&(n=t(a,s)||O),o(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}function fn(e,t,n){const r=!Array.isArray(e),a=r?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=t.length<2;return Pt(n,(i,o)=>{let c=!1;const l=[];let d=0,p=O;const u=()=>{if(d)return;p();const h=t(r?l[0]:l,i,o);s?i(h):p=typeof h=="function"?h:O},f=a.map((h,g)=>De(h,A=>{l[g]=A,d&=~(1<<g),c&&u()},()=>{d|=1<<g}));return c=!0,u(),function(){ut(f),p(),c=!1}})}function un(e){let t;return De(e,n=>t=n)(),t}const I=globalThis.__sveltekit_1lmlxku?.base??"",Nt=globalThis.__sveltekit_1lmlxku?.assets??I,Ct="d8971b3318f72a081b403faf55d83bbad84f1f29",Be="sveltekit:snapshot",qe="sveltekit:scroll",Ge="sveltekit:states",Ot="sveltekit:pageurl",j="sveltekit:history",M="sveltekit:navigation",J={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},W=location.origin;function Me(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function ye(){return{x:pageXOffset,y:pageYOffset}}function C(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Ue={...J,"":J.hover};function He(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function Ke(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=He(e)}}function pe(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!r||oe(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),s=n?.origin===W&&e.hasAttribute("download");return{url:n,external:a,target:r,download:s}}function X(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=C(o,"preload-code")),a===null&&(a=C(o,"preload-data")),t===null&&(t=C(o,"keepfocus")),n===null&&(n=C(o,"noscroll")),s===null&&(s=C(o,"reload")),i===null&&(i=C(o,"replacestate")),o=He(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ue[r??"off"],preload_data:Ue[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Le(e){const t=ae(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}function jt(){const{set:e,subscribe:t}=ae(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${Nt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Ct;return i&&(e(!0),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function oe(e,t){return e.origin!==W||!e.pathname.startsWith(t)}function Pe(e){const t=Dt(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const $t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Dt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=$t.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const Ft=-1,Vt=-2,Bt=-3,qt=-4,Gt=-5,Mt=-6;function Ht(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===Ft)return;if(s===Bt)return NaN;if(s===qt)return 1/0;if(s===Gt)return-1/0;if(s===Mt)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=t?.[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const d=new Set;r[s]=d;for(let f=1;f<o.length;f+=1)d.add(a(o[f]));break;case"Map":const p=new Map;r[s]=p;for(let f=1;f<o.length;f+=2)p.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const u=Object.create(null);r[s]=u;for(let f=1;f<o.length;f+=2)u[o[f]]=a(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],h=o[1],g=Pe(h),A=new f(g);r[s]=A;break}case"ArrayBuffer":{const f=o[1],h=Pe(f);r[s]=h;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const d=o[l];d!==Vt&&(c[l]=a(d))}}else{const c={};r[s]=c;for(const l in o){const d=o[l];c[l]=a(d)}}return r[s]}return a(0)}const We=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...We];const Kt=new Set([...We]);[...Kt];function Wt(e){return e.filter(t=>t!=null)}class se{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(t,n){this.status=t,this.location=n}}class we extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const Yt="x-sveltekit-invalidated",zt="x-sveltekit-trailing-slash";function Z(e){return e instanceof se||e instanceof we?e.status:500}function Jt(e){return e instanceof we?e.text:"Internal Error"}const P=Ve(qe)??{},H=Ve(Be)??{},U={url:Le({}),page:Le({}),navigating:ae(null),updated:jt()};function ve(e){P[e]=ye()}function Xt(e,t){let n=e+1;for(;P[n];)delete P[n],n+=1;for(n=t+1;H[n];)delete H[n],n+=1}function D(e){return location.href=e.href,new Promise(()=>{})}async function ze(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(I||"/");e&&await e.update()}}function Ne(){}let ie,ge,Q,x,_e,F;const Je=[],ee=[];let T=null;const be=[],Xe=[];let L=[],m={branch:[],error:null,url:null},Ae=!1,te=!1,Ce=!0,K=!1,B=!1,Ze=!1,ke=!1,Ee,v,R,S,ne;const G=new Set;async function dn(e,t,n){document.URL!==location.href&&(location.href=location.href),F=e,ie=Lt(e),x=document.documentElement,_e=t,ge=e.nodes[0],Q=e.nodes[1],ge(),Q(),v=history.state?.[j],R=history.state?.[M],v||(v=R=Date.now(),history.replaceState({...history.state,[j]:v,[M]:R},""));const r=P[v];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await on(_e,n):rn(location.href,{replaceState:!0}),an()}function Zt(){Je.length=0,ke=!1}function Qe(e){ee.some(t=>t?.snapshot)&&(H[e]=ee.map(t=>t?.snapshot?.capture()))}function et(e){H[e]?.forEach((t,n)=>{ee[n]?.snapshot?.restore(t)})}function Oe(){ve(v),Te(qe,P),Qe(R),Te(Be,H)}async function tt(e,t,n,r){return z({type:"goto",url:Me(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(ke=!0)}})}async function Qt(e){if(e.id!==T?.id){const t={};G.add(t),T={id:e.id,token:t,promise:rt({...e,preload:t}).then(n=>(G.delete(t),n.type==="loaded"&&n.state.error&&(T=null),n))}}return T.promise}async function he(e){const t=ie.find(n=>n.exec(at(e)));t&&await Promise.all([...t.layouts,t.leaf].map(n=>n?.[1]()))}function nt(e,t,n){m=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),S=e.props.page,Ee=new F.root({target:t,props:{...e.props,stores:U,components:ee},hydrate:n,sync:!1}),et(R);const a={from:null,to:{params:m.params,route:{id:m.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};L.forEach(s=>s(a)),te=!0}function re({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(I&&(e.pathname===I||e.pathname===I+"/"))o="always";else for(const f of n)f?.slash!==void 0&&(o=f.slash);e.pathname=pt(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:Wt(n).map(f=>f.node.component),page:S}};i!==void 0&&(c.props.form=i);let l={},d=!S,p=0;for(let f=0;f<Math.max(n.length,m.branch.length);f+=1){const h=n[f],g=m.branch[f];h?.data!==g?.data&&(d=!0),h&&(l={...l,...h.data},d&&(c.props[`data_${p}`]=l),p+=1)}return(!m.url||e.href!==m.url.href||m.error!==a||i!==void 0&&i!==S.form||d)&&(c.props.page={error:a,params:t,route:{id:s?.id??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:S.data}),c}async function Se({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if(l.universal?.load){let d=function(...u){for(const f of u){const{href:h}=new URL(f,n);c.dependencies.add(h)}};const p={route:new Proxy(a,{get:(u,f)=>(o&&(c.route=!0),u[f])}),params:new Proxy(r,{get:(u,f)=>(o&&c.params.add(f),u[f])}),data:s?.data??null,url:yt(n,()=>{o&&(c.url=!0)},u=>{o&&c.search_params.add(u)}),async fetch(u,f){let h;u instanceof Request?(h=u.url,f={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:u.headers,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...f}):h=u;const g=new URL(h,n);return o&&d(g.href),g.origin===n.origin&&(h=g.href.slice(n.origin.length)),te?St(h,g.href,f):Et(h,f)},setHeaders:()=>{},depends:d,parent(){return o&&(c.parent=!0),t()},untrack(u){o=!1;try{return u()}finally{o=!0}}};i=await l.universal.load.call(null,p)??null}return{node:l,loader:e,server:s,universal:l.universal?.load?{type:"data",data:i,uses:c}:null,data:i??s?.data??null,slash:l.universal?.trailingSlash??s?.slash}}function je(e,t,n,r,a,s){if(ke)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==m.params[i])return!0;for(const i of a.dependencies)if(Je.some(o=>o(new URL(i))))return!0;return!1}function Re(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}function en(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function $e({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:S,constructors:[]}}}async function rt({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if(T?.id===e)return G.delete(T.token),T.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(_=>_?.().catch(()=>{})),l.forEach(_=>_?.[1]().catch(()=>{}));let d=null;const p=m.url?e!==m.url.pathname+m.url.search:!1,u=m.route?a.id!==m.route.id:!1,f=en(m.url,n);let h=!1;const g=l.map((_,y)=>{const E=m.branch[y],b=!!_?.[0]&&(E?.loader!==_[1]||je(h,u,p,f,E.server?.uses,r));return b&&(h=!0),b});if(g.some(Boolean)){try{d=await it(n,g)}catch(_){const y=await $(_,{url:n,params:r,route:{id:e}});return G.has(s)?$e({error:y,url:n,params:r,route:a}):ce({status:Z(_),error:y,url:n,route:a})}if(d.type==="redirect")return d}const A=d?.nodes;let k=!1;const V=l.map(async(_,y)=>{if(!_)return;const E=m.branch[y],b=A?.[y];if((!b||b.type==="skip")&&_[1]===E?.loader&&!je(k,u,p,f,E.universal?.uses,r))return E;if(k=!0,b?.type==="error")throw b;return Se({loader:_[1],url:n,params:r,route:a,parent:async()=>{const le={};for(let fe=0;fe<y;fe+=1)Object.assign(le,(await V[fe])?.data);return le},server_data_node:Re(b===void 0&&_[0]?{type:"skip"}:b??null,_[0]?E?.server:void 0)})});for(const _ of V)_.catch(()=>{});const w=[];for(let _=0;_<l.length;_+=1)if(l[_])try{w.push(await V[_])}catch(y){if(y instanceof Ye)return{type:"redirect",location:y.location};if(G.has(s))return $e({error:await $(y,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let E=Z(y),b;if(A?.includes(y))E=y.status??E,b=y.error;else if(y instanceof se)b=y.body;else{if(await U.updated.check())return await ze(),await D(n);b=await $(y,{params:r,url:n,route:{id:a.id}})}const Y=await tn(_,w,i);return Y?re({url:n,params:r,branch:w.slice(0,Y.idx).concat(Y.node),status:E,error:b,route:a}):await st(n,{id:a.id},b,E)}else w.push(void 0);return re({url:n,params:r,branch:w,status:200,error:null,route:a,form:t?void 0:null})}async function tn(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:e,error:t,url:n,route:r}){const a={};let s=null;if(F.server_loads[0]===0)try{const l=await it(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;s=l.nodes[0]??null}catch{(n.origin!==W||n.pathname!==location.pathname||Ae)&&await D(n)}const o=await Se({loader:ge,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Re(s)}),c={node:await Q(),loader:Q,universal:null,server:null,data:null};return re({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}function Ie(e,t){if(!e||oe(e,I))return;let n;try{n=F.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=at(n);for(const a of ie){const s=a.exec(r);if(s)return{id:e.pathname+e.search,invalidating:t,route:a,params:_t(s),url:e}}}function at(e){return gt(e.slice(I.length)||"/")}function ot({url:e,type:t,intent:n,delta:r}){let a=!1;const s=lt(m,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return K||be.forEach(o=>o(i)),a?null:s}async function z({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=Ne,block:d=Ne}){const p=Ie(t,!1),u=ot({url:t,type:e,delta:n?.delta,intent:p});if(!u){d();return}const f=v,h=R;l(),K=!0,te&&U.navigating.set(u.navigation),ne=c;let g=p&&await rt(p);if(!g){if(oe(t,I))return await D(t);g=await st(t,{id:null},await $(new we(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=p?.url||t,ne!==c)return u.reject(new Error("navigation aborted")),!1;if(g.type==="redirect")if(o>=20)g=await ce({status:500,error:await $(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return tt(new URL(g.location,t).href,{},o+1,c),!1;else g.props.page.status>=400&&await U.updated.check()&&(await ze(),await D(t));if(Zt(),ve(f),Qe(h),g.props.page.url.pathname!==t.pathname&&(t.pathname=g.props.page.url.pathname),i=n?n.state:i,!n){const w=s?0:1,_={[j]:v+=w,[M]:R+=w,[Ge]:i};(s?history.replaceState:history.pushState).call(history,_,"",t),s||Xt(v,R)}if(T=null,g.props.page.state=i,te){m=g.state,g.props.page&&(g.props.page.url=t);const w=(await Promise.all(Xe.map(_=>_(u.navigation)))).filter(_=>typeof _=="function");if(w.length>0){let _=function(){L=L.filter(y=>!w.includes(y))};w.push(_),L.push(...w)}Ee.$set(g.props),Ze=!0}else nt(g,_e,!1);const{activeElement:A}=document;await ht();const k=n?n.scroll:a?ye():null;if(Ce){const w=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));k?scrollTo(k.x,k.y):w?w.scrollIntoView():scrollTo(0,0)}const V=document.activeElement!==A&&document.activeElement!==document.body;!r&&!V&&sn(),Ce=!0,g.props.page&&(S=g.props.page),K=!1,e==="popstate"&&et(R),u.fulfil(void 0),L.forEach(w=>w(u.navigation)),U.navigating.set(null)}async function st(e,t,n,r){return e.origin===W&&e.pathname===location.pathname&&!Ae?await ce({status:r,error:n,url:e,route:t}):await D(e)}function nn(){let e;x.addEventListener("mousemove",s=>{const i=s.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function t(s){r(s.composedPath()[0],1)}x.addEventListener("mousedown",t),x.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting&&(he(i.target.href),n.unobserve(i.target))},{threshold:0});function r(s,i){const o=Ke(s,x);if(!o)return;const{url:c,external:l,download:d}=pe(o,I);if(l||d)return;const p=X(o),u=c&&m.url.pathname+m.url.search===c.pathname+c.search;if(!p.reload&&!u)if(i<=p.preload_data){const f=Ie(c,!1);f&&Qt(f)}else i<=p.preload_code&&he(c.pathname)}function a(){n.disconnect();for(const s of x.querySelectorAll("a")){const{url:i,external:o,download:c}=pe(s,I);if(o||c)continue;const l=X(s);l.reload||(l.preload_code===J.viewport&&n.observe(s),l.preload_code===J.eager&&he(i.pathname))}}L.push(a),a()}function $(e,t){if(e instanceof se)return e.body;const n=Z(e),r=Jt(e);return F.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function xe(e,t){ft(()=>(e.push(t),()=>{const n=e.indexOf(t);e.splice(n,1)}))}function hn(e){xe(L,e)}function pn(e){xe(be,e)}function gn(e){xe(Xe,e)}function rn(e,t={}){return e=Me(e),e.origin!==W?Promise.reject(new Error("goto: invalid URL")):tt(e,t,0)}function an(){history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(Oe(),!K){const r=lt(m,void 0,null,"leave"),a={...r.navigation,cancel:()=>{n=!0,r.reject(new Error("navigation cancelled"))}};be.forEach(s=>s(a))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Oe()}),navigator.connection?.saveData||nn(),x.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=Ke(t.composedPath()[0],x);if(!n)return;const{url:r,external:a,target:s,download:i}=pe(n,I);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const o=X(n);if(!(n instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;if(a||o.reload){ot({url:r,type:"link"})?K=!0:t.preventDefault();return}const[l,d]=r.href.split("#");if(d!==void 0&&l===ue(location)){const[,p]=m.url.href.split("#");if(p===d){t.preventDefault(),d===""||d==="top"&&n.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):n.ownerDocument.getElementById(decodeURIComponent(d))?.scrollIntoView();return}if(B=!0,ve(v),e(r),!o.replace_state)return;B=!1}t.preventDefault(),await new Promise(p=>{requestAnimationFrame(()=>{setTimeout(p,0)}),setTimeout(p,100)}),z({type:"link",url:r,keepfocus:o.keepfocus,noscroll:o.noscroll,replace_state:o.replace_state??r.href===location.href})}),x.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if((r?.formTarget||n.target)==="_blank"||(r?.formMethod||n.method)!=="get")return;const i=new URL(r?.hasAttribute("formaction")&&r?.formAction||n.action);if(oe(i,I))return;const o=t.target,c=X(o);if(c.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(o),d=r?.getAttribute("name");d&&l.append(d,r?.getAttribute("value")??""),i.search=new URLSearchParams(l).toString(),z({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[j]){const n=t.state[j];if(ne={},n===v)return;const r=P[n],a=t.state[Ge]??{},s=new URL(t.state[Ot]??location.href),i=t.state[M],o=ue(location)===ue(m.url);if(i===R&&(Ze||o)){e(s),P[v]=ye(),r&&scrollTo(r.x,r.y),a!==S.state&&(S={...S,state:a},Ee.$set({page:S})),v=n;return}const l=n-v;await z({type:"popstate",url:s,popped:{state:a,scroll:r,delta:l},accept:()=>{v=n,R=i},block:()=>{history.go(-l)},nav_token:ne})}else if(!B){const n=new URL(location.href);e(n)}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[j]:++v,[M]:R},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&U.navigating.set(null)});function e(t){m.url=t,U.page.set({...S,url:t}),U.page.notify()}}async function on(e,{status:t=200,error:n,node_ids:r,params:a,route:s,data:i,form:o}){Ae=!0;const c=new URL(location.href);({params:a={},route:s={id:null}}=Ie(c,!1)||{});let l;try{const d=r.map(async(f,h)=>{const g=i[h];return g?.uses&&(g.uses=ct(g.uses)),Se({loader:F.nodes[f],url:c,params:a,route:s,parent:async()=>{const A={};for(let k=0;k<h;k+=1)Object.assign(A,(await d[k]).data);return A},server_data_node:Re(g)})}),p=await Promise.all(d),u=ie.find(({id:f})=>f===s.id);if(u){const f=u.layouts;for(let h=0;h<f.length;h++)f[h]||p.splice(h,0,void 0)}l=re({url:c,params:a,branch:p,status:t,error:n,form:o,route:u??null})}catch(d){if(d instanceof Ye){await D(new URL(d.location,location.href));return}l=await ce({status:Z(d),error:await $(d,{url:c,params:a,route:s}),url:c,route:s})}l.props.page&&(l.props.page.state={}),nt(l,e,!0)}async function it(e,t){const n=new URL(e);n.pathname=bt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(zt,"1"),n.searchParams.append(Yt,t.map(a=>a?"1":"0").join(""));const r=await Fe(n.href);if(!r.ok){let a;throw r.headers.get("content-type")?.includes("application/json")?a=await r.json():r.status===404?a="Not Found":r.status===500&&(a="Internal Error"),new se(r.status,a)}return new Promise(async a=>{const s=new Map,i=r.body.getReader(),o=new TextDecoder;function c(d){return Ht(d,{Promise:p=>new Promise((u,f)=>{s.set(p,{fulfil:u,reject:f})})})}let l="";for(;;){const{done:d,value:p}=await i.read();if(d&&!l)break;for(l+=!p&&l?`
`:o.decode(p,{stream:!0});;){const u=l.indexOf(`
`);if(u===-1)break;const f=JSON.parse(l.slice(0,u));if(l=l.slice(u+1),f.type==="redirect")return a(f);if(f.type==="data")f.nodes?.forEach(h=>{h?.type==="data"&&(h.uses=ct(h.uses),h.data=c(h.data))}),a(f);else if(f.type==="chunk"){const{id:h,data:g,error:A}=f,k=s.get(h);s.delete(h),A?k.reject(c(A)):k.fulfil(c(g))}}}})}function ct(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function sn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function lt(e,t,n,r){let a,s;const i=new Promise((c,l)=>{a=c,s=l});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:n&&{params:t?.params??null,route:{id:t?.route?.id??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}export{U as a,pn as b,hn as c,fn as d,dn as e,un as g,gn as o,De as s};
