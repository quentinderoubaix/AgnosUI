import{_ as i}from"./preload-helper.Dch09mLN.js";const S=500,$=20,k=300,N="https://stackblitz.com",T=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],F=["project","search","ports","settings"],C=["light","dark"],M=["editor","preview"],O={clickToLoad:t=>p("ctl",t),devToolsHeight:t=>D("devtoolsheight",t),forceEmbedLayout:t=>p("embed",t),hideDevTools:t=>p("hidedevtools",t),hideExplorer:t=>p("hideExplorer",t),hideNavigation:t=>p("hideNavigation",t),openFile:t=>j("file",t),showSidebar:t=>U("showSidebar",t),sidebarView:t=>E("sidebarView",t,F),startScript:t=>j("startScript",t),terminalHeight:t=>D("terminalHeight",t),theme:t=>E("theme",t,C),view:t=>E("view",t,M),zenMode:t=>p("zenMode",t)};function A(t={}){const e=Object.entries(t).map(([r,o])=>o!=null&&O.hasOwnProperty(r)?O[r](o):"").filter(Boolean);return e.length?`?${e.join("&")}`:""}function p(t,e){return e===!0?`${t}=1`:""}function U(t,e){return typeof e=="boolean"?`${t}=${e?"1":"0"}`:""}function D(t,e){if(typeof e=="number"&&!Number.isNaN(e)){const r=Math.min(100,Math.max(0,e));return`${t}=${encodeURIComponent(Math.round(r))}`}return""}function E(t,e="",r=[]){return r.includes(e)?`${t}=${encodeURIComponent(e)}`:""}function j(t,e){return(Array.isArray(e)?e:[e]).filter(o=>typeof o=="string"&&o.trim()!=="").map(o=>`${t}=${encodeURIComponent(o)}`).join("&")}function w(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function y(t,e){return`${R(e)}${t}${A(e)}`}function v(t,e){const r={forceEmbedLayout:!0};return e&&typeof e=="object"&&Object.assign(r,e),`${R(r)}${t}${A(r)}`}function R(t={}){return(typeof t.origin=="string"?t.origin:N).replace(/\/$/,"")}function P(t,e,r){if(!e||!t||!t.parentNode)throw new Error("Invalid Element");t.id&&(e.id=t.id),t.className&&(e.className=t.className),q(e,r),t.replaceWith(e)}function b(t){if(typeof t=="string"){const e=document.getElementById(t);if(!e)throw new Error(`Could not find element with id '${t}'`);return e}else if(t instanceof HTMLElement)return t;throw new Error(`Invalid element: ${t}`)}function I(t){return t&&t.newWindow===!1?"_self":"_blank"}function q(t,e={}){const r=Object.hasOwnProperty.call(e,"height")?`${e.height}`:`${k}`,o=Object.hasOwnProperty.call(e,"width")?`${e.width}`:void 0;t.setAttribute("height",r),o?t.setAttribute("width",o):t.setAttribute("style","width:100%;")}class x{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:r}){return new Promise((o,n)=>{const s=w();this.pending[s]={resolve:o,reject:n},this.port.postMessage({type:e,payload:{...r,__reqid:s}})})}messageListener(e){if(typeof e.data.payload?.__reqid!="string")return;const{type:r,payload:o}=e.data,{__reqid:n,__success:s,__error:a}=o;this.pending[n]&&(s?this.pending[n].resolve(this.cleanResult(o)):this.pending[n].reject(a?`${r}: ${a}`:r),delete this.pending[n])}cleanResult(e){const r={...e};return delete r.__reqid,delete r.__success,delete r.__error,Object.keys(r).length?r:null}}class H{constructor(e,r){this.editor={openFile:o=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:o}}),setCurrentFile:o=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:o}}),setTheme:o=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:o}}),setView:o=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:o}}),showSidebar:(o=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:o}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(o=>o?.url??null),setUrl:(o="/")=>{if(typeof o!="string"||!o.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${o}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:o}})}},this._rdc=new x(e),Object.defineProperty(this.preview,"origin",{value:typeof r.previewOrigin=="string"?r.previewOrigin:null,writable:!1})}applyFsDiff(e){const r=o=>o!==null&&typeof o=="object";if(!r(e)||!r(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const m=[];class K{constructor(e){this.id=w(),this.element=e,this.pending=new Promise((r,o)=>{const n=({data:c,ports:l})=>{c?.action==="SDK_INIT_SUCCESS"&&c.id===this.id&&(this.vm=new H(l[0],c.payload),r(this.vm),a())},s=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function a(){window.clearInterval(d),window.removeEventListener("message",n)}window.addEventListener("message",n),s();let u=0;const d=window.setInterval(()=>{if(this.vm){a();return}if(u>=$){a(),o("Timeout: Unable to establish a connection with the StackBlitz VM"),m.forEach((c,l)=>{c.id===this.id&&m.splice(l,1)});return}u++,s()},S)}),m.push(this)}}const B=t=>{const e=t instanceof Element?"element":"id";return m.find(r=>r[e]===t)??null};function W(t,e){const r=document.createElement("input");return r.type="hidden",r.name=t,r.value=e,r}function G(t){return t.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function L({template:t,title:e,description:r,dependencies:o,files:n,settings:s}){if(!T.includes(t)){const c=T.map(l=>`'${l}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${c}`)}const a=[],u=(c,l,V="")=>{a.push(W(c,typeof l=="string"?l:V))};u("project[title]",e),typeof r=="string"&&r.length>0&&u("project[description]",r),u("project[template]",t,"javascript"),o&&(t==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):u("project[dependencies]",JSON.stringify(o))),s&&u("project[settings]",JSON.stringify(s)),Object.entries(n).forEach(([c,l])=>{u(`project[files][${G(c)}]`,l)});const d=document.createElement("form");return d.method="POST",d.setAttribute("style","display:none!important;"),d.append(...a),d}function J(t,e){const r=L(t);return r.action=v("/run",e),r.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${r.outerHTML}
  <script>document.getElementById('${r.id}').submit();<\/script>
</body>
</html>`}function z(t,e){const r=L(t);r.action=y("/run",e),r.target=I(e),document.body.appendChild(r),r.submit(),document.body.removeChild(r)}function h(t){return t?.contentWindow?(B(t)??new K(t)).pending:Promise.reject("Provided element is not an iframe.")}function X(t,e){z(t,e)}function Y(t,e){const r=y(`/edit/${t}`,e),o=I(e);window.open(r,o)}function Q(t,e){const r=y(`/github/${t}`,e),o=I(e);window.open(r,o)}function Z(t,e,r){const o=b(t),n=J(e,r),s=document.createElement("iframe");return P(o,s,r),s.contentDocument?.write(n),h(s)}function tt(t,e,r){const o=b(t),n=document.createElement("iframe");return n.src=v(`/edit/${e}`,r),P(o,n,r),h(n)}function et(t,e,r){const o=b(t),n=document.createElement("iframe");return n.src=v(`/github/${e}`,r),P(o,n,r),h(n)}const rt={connect:h,embedGithubProject:et,embedProject:Z,embedProjectId:tt,openGithubProject:Q,openProject:X,openProjectId:Y},f=t=>t.style==="bootstrap",g=t=>t.style==="daisyui",_=(t,e="",r,o=()=>!0)=>async(n,s)=>{o(s)&&await Promise.all(Object.keys(t).map(async a=>{const u=e+(r&&a.startsWith(r)?a.substring(r.length):a);n.files[u]=await t[a]()}))},ot=()=>({angular:[_(Object.assign({"./angular-bootstrap/angular.json":()=>i(()=>import("./angular.DCJnSRFU.js"),[],import.meta.url).then(t=>t.default),"./angular-bootstrap/index.html":()=>i(()=>import("./index.CcxmJVOD.js"),[],import.meta.url).then(t=>t.default),"./angular-bootstrap/package-lock.json":()=>i(()=>import("./package-lock.BBsFFrDp.js"),[],import.meta.url).then(t=>t.default),"./angular-bootstrap/package.json":()=>i(()=>import("./package.DygIcWL6.js"),[],import.meta.url).then(t=>t.default),"./angular-bootstrap/src/main.css":()=>i(()=>import("./main.B2sGN3i3.js"),[],import.meta.url).then(t=>t.default),"./angular-bootstrap/src/polyfills.ts":()=>i(()=>import("./polyfills.cvO7zebP.js"),[],import.meta.url).then(t=>t.default),"./angular-bootstrap/src/raw-loader.d.ts":()=>i(()=>import("./raw-loader.d.C5Bwl_T2.js"),[],import.meta.url).then(t=>t.default),"./angular-bootstrap/tsconfig.json":()=>i(()=>import("./tsconfig.Bu5yzqH-.js"),[],import.meta.url).then(t=>t.default)}),"","./angular-bootstrap/",f),_(Object.assign({"./angular-daisyui/angular.json":()=>i(()=>import("./angular.DiDbew3E.js"),[],import.meta.url).then(t=>t.default),"./angular-daisyui/index.html":()=>i(()=>import("./index.C6ZEeM9O.js"),[],import.meta.url).then(t=>t.default),"./angular-daisyui/package-lock.json":()=>i(()=>import("./package-lock.oxz-DgBQ.js"),[],import.meta.url).then(t=>t.default),"./angular-daisyui/package.json":()=>i(()=>import("./package.CtTURMnc.js"),[],import.meta.url).then(t=>t.default),"./angular-daisyui/postcss.config.js":()=>i(()=>import("./postcss.config.CzuMRqzA.js"),[],import.meta.url).then(t=>t.default),"./angular-daisyui/src/main.css":()=>i(()=>import("./main.BFrcTqNa.js"),[],import.meta.url).then(t=>t.default),"./angular-daisyui/src/polyfills.ts":()=>i(()=>import("./polyfills.0Vyd12dT.js"),[],import.meta.url).then(t=>t.default),"./angular-daisyui/src/raw-loader.d.ts":()=>i(()=>import("./raw-loader.d.CihDBm0o.js"),[],import.meta.url).then(t=>t.default),"./angular-daisyui/tailwind.config.js":()=>i(()=>import("./tailwind.config.DyUSCsLe.js"),[],import.meta.url).then(t=>t.default),"./angular-daisyui/tsconfig.json":()=>i(()=>import("./tsconfig.BnRlGn3b.js"),[],import.meta.url).then(t=>t.default)}),"","./angular-daisyui/",g),async(t,e)=>{t.files["src/main.ts"]=`import {bootstrapApplication} from '@angular/platform-browser';
import MainComponent from './${e.files.angular.entryPoint.replace(/\.ts$/,"")}';
bootstrapApplication(MainComponent).catch((err) => console.error(err));`}],react:[_(Object.assign({"./react-bootstrap/index.html":()=>i(()=>import("./index.wkvL4Lmo.js"),[],import.meta.url).then(t=>t.default),"./react-bootstrap/package-lock.json":()=>i(()=>import("./package-lock.DRyVU9l5.js"),[],import.meta.url).then(t=>t.default),"./react-bootstrap/package.json":()=>i(()=>import("./package.BWjBxmD4.js"),[],import.meta.url).then(t=>t.default),"./react-bootstrap/src/main.css":()=>i(()=>import("./main.C9OmxNZT.js"),[],import.meta.url).then(t=>t.default),"./react-bootstrap/src/vite-env.d.ts":()=>i(()=>import("./vite-env.d.DWSAnUdW.js"),[],import.meta.url).then(t=>t.default),"./react-bootstrap/tsconfig.json":()=>i(()=>import("./tsconfig.DZMgzP6e.js"),[],import.meta.url).then(t=>t.default),"./react-bootstrap/vite.config.ts":()=>i(()=>import("./vite.config.Dnv89lCz.js"),[],import.meta.url).then(t=>t.default)}),"","./react-bootstrap/",f),_(Object.assign({"./react-daisyui/index.html":()=>i(()=>import("./index.B-Z1RWnS.js"),[],import.meta.url).then(t=>t.default),"./react-daisyui/package-lock.json":()=>i(()=>import("./package-lock.D02EmCpN.js"),[],import.meta.url).then(t=>t.default),"./react-daisyui/package.json":()=>i(()=>import("./package.DHuS7xhk.js"),[],import.meta.url).then(t=>t.default),"./react-daisyui/postcss.config.js":()=>i(()=>import("./postcss.config.BKQybYhv.js"),[],import.meta.url).then(t=>t.default),"./react-daisyui/src/main.css":()=>i(()=>import("./main.DONGGsAw.js"),[],import.meta.url).then(t=>t.default),"./react-daisyui/src/vite-env.d.ts":()=>i(()=>import("./vite-env.d.DaOiv1oo.js"),[],import.meta.url).then(t=>t.default),"./react-daisyui/tailwind.config.js":()=>i(()=>import("./tailwind.config.DaS2-neF.js"),[],import.meta.url).then(t=>t.default),"./react-daisyui/tsconfig.json":()=>i(()=>import("./tsconfig.D_gyzPVn.js"),[],import.meta.url).then(t=>t.default),"./react-daisyui/vite.config.ts":()=>i(()=>import("./vite.config.Dyasu8hp.js"),[],import.meta.url).then(t=>t.default)}),"","./react-daisyui/",g),async(t,e)=>{t.files["src/main.tsx"]=`import {createRoot} from "react-dom/client";
import "./main.css";
import App from ${JSON.stringify(`./${e.files.react.entryPoint.replace(/\.tsx?$/,"")}`)};
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />)`}],svelte:[_(Object.assign({"./svelte-bootstrap/index.html":()=>i(()=>import("./index.Brn_HoJF.js"),[],import.meta.url).then(t=>t.default),"./svelte-bootstrap/package-lock.json":()=>i(()=>import("./package-lock.GSShOCVe.js"),[],import.meta.url).then(t=>t.default),"./svelte-bootstrap/package.json":()=>i(()=>import("./package.DHEPa7ZK.js"),[],import.meta.url).then(t=>t.default),"./svelte-bootstrap/src/main.css":()=>i(()=>import("./main.DNJegUnv.js"),[],import.meta.url).then(t=>t.default),"./svelte-bootstrap/src/vite-env.d.ts":()=>i(()=>import("./vite-env.d.CDC67F1K.js"),[],import.meta.url).then(t=>t.default),"./svelte-bootstrap/svelte.config.js":()=>i(()=>import("./svelte.config.BtdtTcyg.js"),[],import.meta.url).then(t=>t.default),"./svelte-bootstrap/tsconfig.json":()=>i(()=>import("./tsconfig.CFQwn63q.js"),[],import.meta.url).then(t=>t.default),"./svelte-bootstrap/vite.config.ts":()=>i(()=>import("./vite.config.CdjHn5n5.js"),[],import.meta.url).then(t=>t.default)}),"","./svelte-bootstrap/",f),_(Object.assign({"./svelte-daisyui/index.html":()=>i(()=>import("./index.Br5LSNMw.js"),[],import.meta.url).then(t=>t.default),"./svelte-daisyui/package-lock.json":()=>i(()=>import("./package-lock.BYpF5UgI.js"),[],import.meta.url).then(t=>t.default),"./svelte-daisyui/package.json":()=>i(()=>import("./package.dHbLMIsX.js"),[],import.meta.url).then(t=>t.default),"./svelte-daisyui/postcss.config.js":()=>i(()=>import("./postcss.config.B3woqP4H.js"),[],import.meta.url).then(t=>t.default),"./svelte-daisyui/src/main.css":()=>i(()=>import("./main.yKcUKxqM.js"),[],import.meta.url).then(t=>t.default),"./svelte-daisyui/src/vite-env.d.ts":()=>i(()=>import("./vite-env.d.BDc_3yBB.js"),[],import.meta.url).then(t=>t.default),"./svelte-daisyui/svelte.config.js":()=>i(()=>import("./svelte.config.DWm-87YB.js"),[],import.meta.url).then(t=>t.default),"./svelte-daisyui/tailwind.config.js":()=>i(()=>import("./tailwind.config.BOKv69Dq.js"),[],import.meta.url).then(t=>t.default),"./svelte-daisyui/tsconfig.json":()=>i(()=>import("./tsconfig.CLiwry4h.js"),[],import.meta.url).then(t=>t.default),"./svelte-daisyui/vite.config.ts":()=>i(()=>import("./vite.config.BAv7YOyr.js"),[],import.meta.url).then(t=>t.default)}),"","./svelte-daisyui/",g),async(t,e)=>{t.files["src/main.ts"]=`import "./main.css";
import App from ${JSON.stringify(`./${e.files.svelte.entryPoint}`)};
const app = new App({target: document.getElementById('root')});
export default app;`,t.template="node"}]}),it=t=>{const e=ot(),r=async({files:o},n,s)=>{const a=JSON.parse(o["package.json"]);f(n)?a.devDependencies[`@agnos-ui/${s}-bootstrap`]=t:a.devDependencies[`@agnos-ui/${s}-headless`]=t,s==="svelte"&&(a.devDependencies["@agnos-ui/svelte-preprocess"]=t),o["package.json"]=JSON.stringify(a,null,"	")};return e.angular.push(r),e.svelte.push(r),e.react.push(r),e},nt=async(t,e,r)=>{const o={title:`AgnosUI ${e} demo - ${t.componentName} - ${t.sampleName} (${t.style})`,files:{},template:"node"},n=t.files[e],{entryPoint:s,files:a}=n,u=[_(a,"src/"),...r[e]];for(const c of u)await c(o,t,e);const d=[s,...Object.keys(a).filter(c=>c!=s)].map(c=>`src/${c}`).join(",");return{project:o,openFile:d}},st=()=>it("0.3.1"),at=st(),ut=async(t,e)=>{const{project:r,openFile:o}=await nt(t,e,at);rt.openProject(r,{newWindow:!0,openFile:o})};export{ut as openInStackblitz};
