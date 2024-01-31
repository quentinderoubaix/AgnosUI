import{a as _,b as re,c as oe,d as l,j as se,o as ie,p as H,r as ae}from"./chunk-Z7SX3R6A.js";import{$ as E,Aa as W,Ba as X,Ca as J,Da as Q,Ea as ee,Fa as m,Ja as te,Na as L,S as y,U as h,Va as T,Y as I,Z as c,Zb as ne,a as O,b as $,ma as K,pa as z,qa as Z,ra as N,sa as Y,ta as w,ua as P,va as S,wa as g,xa as v,ya as G,za as q}from"./chunk-CDYQJW4G.js";var x=class extends oe{constructor(){super(...arguments),this.supportsDOMEvents=!0}},F=class s extends x{static makeCurrent(){re(new s)}onAndCancel(e,o,t){return e.addEventListener(o,t),()=>{e.removeEventListener(o,t)}}dispatchEvent(e,o){e.dispatchEvent(o)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,o){return o=o||this.getDefaultDocument(),o.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,o){return o==="window"?window:o==="document"?e:o==="body"?e.body:null}getBaseHref(e){let o=ge();return o==null?null:ve(o)}resetBaseElement(){M=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return se(document.cookie,e)}},M=null;function ge(){return M=M||document.querySelector("base"),M?M.getAttribute("href"):null}function ve(s){return new URL(s,document.baseURI).pathname}var Ee=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac});let s=e;return s})(),U=new I("EventManagerPlugins"),le=(()=>{let e=class e{constructor(t,n){this._zone=n,this._eventNameToPlugin=new Map,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,r){return this._findPluginFor(n).addEventListener(t,n,r)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(i=>i.supports(t)),!n)throw new y(5101,!1);return this._eventNameToPlugin.set(t,n),n}};e.\u0275fac=function(n){return new(n||e)(c(U),c(T))},e.\u0275prov=h({token:e,factory:e.\u0275fac});let s=e;return s})(),R=class{constructor(e){this._doc=e}},k="ng-app-id",fe=(()=>{let e=class e{constructor(t,n,r,i={}){this.doc=t,this.appId=n,this.nonce=r,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=H(i),this.resetHostNodes()}addStyles(t){for(let n of t)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(t){for(let n of t)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(n=>n.remove()),t.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let n of this.getAllStyles())this.addStyleToHost(t,n)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let n of this.hostNodes)this.addStyleToHost(n,t)}onStyleRemoved(t){let n=this.styleRef;n.get(t)?.elements?.forEach(r=>r.remove()),n.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${k}="${this.appId}"]`);if(t?.length){let n=new Map;return t.forEach(r=>{r.textContent!=null&&n.set(r.textContent,r)}),n}return null}changeUsageCount(t,n){let r=this.styleRef;if(r.has(t)){let i=r.get(t);return i.usage+=n,i.usage}return r.set(t,{usage:n,elements:[]}),n}getStyleElement(t,n){let r=this.styleNodesInDOM,i=r?.get(n);if(i?.parentNode===t)return r.delete(n),i.removeAttribute(k),i;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=n,this.platformIsServer&&a.setAttribute(k,this.appId),t.appendChild(a),a}}addStyleToHost(t,n){let r=this.getStyleElement(t,n),i=this.styleRef,a=i.get(n)?.elements;a?a.push(r):i.set(n,{elements:[r],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}};e.\u0275fac=function(n){return new(n||e)(c(l),c(N),c(P,8),c(w))},e.\u0275prov=h({token:e,factory:e.\u0275fac});let s=e;return s})(),j={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},V=/%COMP%/g,he="%COMP%",we=`_nghost-${he}`,Se=`_ngcontent-${he}`,Te=!0,Me=new I("RemoveStylesOnCompDestroy",{providedIn:"root",factory:()=>Te});function Ce(s){return Se.replace(V,s)}function De(s){return we.replace(V,s)}function pe(s,e){return e.map(o=>o.replace(V,s))}var ce=(()=>{let e=class e{constructor(t,n,r,i,a,u,d,f=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=i,this.doc=a,this.platformId=u,this.ngZone=d,this.nonce=f,this.rendererByCompId=new Map,this.platformIsServer=H(u),this.defaultRenderer=new C(t,a,d,this.platformIsServer)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===E.ShadowDom&&(n=$(O({},n),{encapsulation:E.Emulated}));let r=this.getOrCreateRenderer(t,n);return r instanceof b?r.applyToHost(t):r instanceof D&&r.applyStyles(),r}getOrCreateRenderer(t,n){let r=this.rendererByCompId,i=r.get(n.id);if(!i){let a=this.doc,u=this.ngZone,d=this.eventManager,f=this.sharedStylesHost,p=this.removeStylesOnCompDestroy,A=this.platformIsServer;switch(n.encapsulation){case E.Emulated:i=new b(d,f,n,this.appId,p,a,u,A);break;case E.ShadowDom:return new B(d,f,t,n,a,u,this.nonce,A);default:i=new D(d,f,n,p,a,u,A);break}r.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(n){return new(n||e)(c(le),c(fe),c(N),c(Me),c(l),c(w),c(T),c(P))},e.\u0275prov=h({token:e,factory:e.\u0275fac});let s=e;return s})(),C=class{constructor(e,o,t,n){this.eventManager=e,this.doc=o,this.ngZone=t,this.platformIsServer=n,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,o){return o?this.doc.createElementNS(j[o]||o,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,o){(ue(e)?e.content:e).appendChild(o)}insertBefore(e,o,t){e&&(ue(e)?e.content:e).insertBefore(o,t)}removeChild(e,o){e&&e.removeChild(o)}selectRootElement(e,o){let t=typeof e=="string"?this.doc.querySelector(e):e;if(!t)throw new y(-5104,!1);return o||(t.textContent=""),t}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,o,t,n){if(n){o=n+":"+o;let r=j[n];r?e.setAttributeNS(r,o,t):e.setAttribute(o,t)}else e.setAttribute(o,t)}removeAttribute(e,o,t){if(t){let n=j[t];n?e.removeAttributeNS(n,o):e.removeAttribute(`${t}:${o}`)}else e.removeAttribute(o)}addClass(e,o){e.classList.add(o)}removeClass(e,o){e.classList.remove(o)}setStyle(e,o,t,n){n&(S.DashCase|S.Important)?e.style.setProperty(o,t,n&S.Important?"important":""):e.style[o]=t}removeStyle(e,o,t){t&S.DashCase?e.style.removeProperty(o):e.style[o]=""}setProperty(e,o,t){e!=null&&(e[o]=t)}setValue(e,o){e.nodeValue=o}listen(e,o,t){if(typeof e=="string"&&(e=_().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${o}`);return this.eventManager.addEventListener(e,o,this.decoratePreventDefault(t))}decoratePreventDefault(e){return o=>{if(o==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(o)):e(o))===!1&&o.preventDefault()}}};function ue(s){return s.tagName==="TEMPLATE"&&s.content!==void 0}var B=class extends C{constructor(e,o,t,n,r,i,a,u){super(e,r,i,u),this.sharedStylesHost=o,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=pe(n.id,n.styles);for(let f of d){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=f,this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,o){return super.appendChild(this.nodeOrShadowRoot(e),o)}insertBefore(e,o,t){return super.insertBefore(this.nodeOrShadowRoot(e),o,t)}removeChild(e,o){return super.removeChild(this.nodeOrShadowRoot(e),o)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},D=class extends C{constructor(e,o,t,n,r,i,a,u){super(e,r,i,a),this.sharedStylesHost=o,this.removeStylesOnCompDestroy=n,this.styles=u?pe(u,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},b=class extends D{constructor(e,o,t,n,r,i,a,u){let d=n+"-"+t.id;super(e,o,t,r,i,a,u,d),this.contentAttr=Ce(d),this.hostAttr=De(d)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,o){let t=super.createElement(e,o);return super.setAttribute(t,this.contentAttr,""),t}},Re=(()=>{let e=class e extends R{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,r){return t.addEventListener(n,r,!1),()=>this.removeEventListener(t,n,r)}removeEventListener(t,n,r){return t.removeEventListener(n,r)}};e.\u0275fac=function(n){return new(n||e)(c(l))},e.\u0275prov=h({token:e,factory:e.\u0275fac});let s=e;return s})(),de=["alt","control","meta","shift"],be={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ae={alt:s=>s.altKey,control:s=>s.ctrlKey,meta:s=>s.metaKey,shift:s=>s.shiftKey},Oe=(()=>{let e=class e extends R{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,n,r){let i=e.parseEventName(n),a=e.eventCallback(i.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>_().onAndCancel(t,i.domEventName,a))}static parseEventName(t){let n=t.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let i=e._normalizeKey(n.pop()),a="",u=n.indexOf("code");if(u>-1&&(n.splice(u,1),a="code."),de.forEach(f=>{let p=n.indexOf(f);p>-1&&(n.splice(p,1),a+=f+".")}),a+=i,n.length!=0||i.length===0)return null;let d={};return d.domEventName=r,d.fullKey=a,d}static matchEventFullKeyCode(t,n){let r=be[t.key]||t.key,i="";return n.indexOf("code.")>-1&&(r=t.code,i="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),de.forEach(a=>{if(a!==r){let u=Ae[a];u(t)&&(i+=a+".")}}),i+=r,i===n)}static eventCallback(t,n,r){return i=>{e.matchEventFullKeyCode(i,t)&&r.runGuarded(()=>n(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}};e.\u0275fac=function(n){return new(n||e)(c(l))},e.\u0275prov=h({token:e,factory:e.\u0275fac});let s=e;return s})();function yt(s,e){return ne(O({rootComponent:s},Ie(e)))}function Ie(s){return{appProviders:[...He,...s?.providers??[]],platformProviders:_e}}function Ne(){F.makeCurrent()}function Pe(){return new L}function Le(){return Z(document),document}var _e=[{provide:w,useValue:ie},{provide:Y,useValue:Ne,multi:!0},{provide:l,useFactory:Le,deps:[]}];var He=[{provide:K,useValue:"root"},{provide:L,useFactory:Pe,deps:[]},{provide:U,useClass:Re,multi:!0,deps:[l,T,w]},{provide:U,useClass:Oe,multi:!0,deps:[l]},ce,fe,le,{provide:te,useExisting:ce},{provide:ae,useClass:Ee,deps:[]},[]];function ke(){return new je(c(l))}var je=(()=>{let e=class e{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}};e.\u0275fac=function(n){return new(n||e)(c(l))},e.\u0275prov=h({token:e,factory:function(n){let r=null;return n?r=new n:r=ke(),r},providedIn:"root"});let s=e;return s})();var xe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=h({token:e,factory:function(n){let r=null;return n?r=new(n||e):r=c(me),r},providedIn:"root"});let s=e;return s})();function Fe(s){return new me(s.get(l))}var me=(()=>{let e=class e extends xe{constructor(t){super(),this._doc=t}sanitize(t,n){if(n==null)return null;switch(t){case m.NONE:return n;case m.HTML:return v(n,"HTML")?g(n):ee(this._doc,String(n)).toString();case m.STYLE:return v(n,"Style")?g(n):n;case m.SCRIPT:if(v(n,"Script"))return g(n);throw new y(5200,!1);case m.URL:return v(n,"URL")?g(n):Q(String(n));case m.RESOURCE_URL:if(v(n,"ResourceURL"))return g(n);throw new y(5201,!1);default:throw new y(5202,!1)}}bypassSecurityTrustHtml(t){return G(t)}bypassSecurityTrustStyle(t){return q(t)}bypassSecurityTrustScript(t){return W(t)}bypassSecurityTrustUrl(t){return X(t)}bypassSecurityTrustResourceUrl(t){return J(t)}};e.\u0275fac=function(n){return new(n||e)(c(l))},e.\u0275prov=h({token:e,factory:function(n){let r=null;return n?r=new n:r=Fe(c(z)),r},providedIn:"root"});let s=e;return s})();export{yt as a,je as b,xe as c};
