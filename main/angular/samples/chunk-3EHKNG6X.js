import{Ia as p,Ka as m,Ma as F,Pa as f,Ra as P,S as I,U as a,Ua as k,V as M,Y as h,Z as d,Za as x,_ as l,aa as B,ca as L,da as g,ea as O,fa as R,sb as N,ta as T,tb as $}from"./chunk-ZMYLT6HT.js";var H=null;function C(){return H}function Ye(i){H??=i}var U=class{},v=new h(""),b=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=a({token:t,factory:()=>l(Z),providedIn:"platform"});let i=t;return i})(),Ze=new h(""),Z=(()=>{let t=class t extends b{constructor(){super(),this._doc=l(v),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return C().getBaseHref(this._doc)}onPopState(e){let n=C().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=C().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=a({token:t,factory:()=>new t,providedIn:"platform"});let i=t;return i})();function _(i,t){if(i.length==0)return t;if(t.length==0)return i;let s=0;return i.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?i+t.substring(1):s==1?i+t:i+"/"+t}function z(i){let t=i.match(/#|\?|$/),s=t&&t.index||i.length,e=s-(i[s-1]==="/"?1:0);return i.slice(0,e)+i.slice(s)}function c(i){return i&&i[0]!=="?"?"?"+i:i}var D=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=a({token:t,factory:()=>l(W),providedIn:"root"});let i=t;return i})(),Y=new h(""),W=(()=>{let t=class t extends D{constructor(e,n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??l(v).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return _(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+c(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let u=this.prepareExternalUrl(r+c(o));this._platformLocation.pushState(e,n,u)}replaceState(e,n,r,o){let u=this.prepareExternalUrl(r+c(o));this._platformLocation.replaceState(e,n,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(d(b),d(Y,8))},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),We=(()=>{let t=class t extends D{constructor(e,n){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=_(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,o){let u=this.prepareExternalUrl(r+c(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.pushState(e,n,u)}replaceState(e,n,r,o){let u=this.prepareExternalUrl(r+c(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.replaceState(e,n,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(d(b),d(Y,8))},t.\u0275prov=a({token:t,factory:t.\u0275fac});let i=t;return i})(),K=(()=>{let t=class t{constructor(e){this._subject=new k,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=J(z(j(n))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+c(n))}normalize(e){return t.stripTrailingSlash(q(this._basePath,j(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n,complete:r})}};t.normalizeQueryParams=c,t.joinWithSlash=_,t.stripTrailingSlash=z,t.\u0275fac=function(n){return new(n||t)(d(D))},t.\u0275prov=a({token:t,factory:()=>X(),providedIn:"root"});let i=t;return i})();function X(){return new K(d(D))}function q(i,t){if(!i||!t.startsWith(i))return t;let s=t.substring(i.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function j(i){return i.replace(/\/index.html$/,"")}function J(i){if(new RegExp("^(https?:)?//").test(i)){let[,s]=i.split(/\/\/[^\/]+/);return s}return i}function Ke(i,t){t=encodeURIComponent(t);for(let s of i.split(";")){let e=s.indexOf("="),[n,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(n.trim()===t)return decodeURIComponent(r)}return null}var E=/\s+/,G=[],Xe=(()=>{let t=class t{constructor(e,n){this._ngEl=e,this._renderer=n,this.initialClasses=G,this.stateMap=new Map}set klass(e){this.initialClasses=e!=null?e.trim().split(E):G}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(E):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],r=e[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(E).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}};t.\u0275fac=function(n){return new(n||t)(f(p),f(m))},t.\u0275dir=g({type:t,selectors:[["","ngClass",""]],inputs:{klass:[B.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let i=t;return i})();var qe=(()=>{let t=class t{constructor(e){this._viewContainerRef=e,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}};t.\u0275fac=function(n){return new(n||t)(f(x))},t.\u0275dir=g({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[R]});let i=t;return i})();function Q(i,t){return new I(2100,!1)}var w=class{createSubscription(t,s){return F(()=>t.subscribe({next:s,error:e=>{throw e}}))}dispose(t){F(()=>t.unsubscribe())}},A=class{createSubscription(t,s){return t.then(s,e=>{throw e})}dispose(t){}},ee=new A,te=new w,Je=(()=>{let t=class t{constructor(e){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){return this._obj?e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue:(e&&this._subscribe(e),this._latestValue)}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n))}_selectStrategy(e){if(N(e))return ee;if($(e))return te;throw Q(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this._ref.markForCheck())}};t.\u0275fac=function(n){return new(n||t)(f(P,16))},t.\u0275pipe=O({name:"async",type:t,pure:!1,standalone:!0});let i=t;return i})();var Qe=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=L({type:t}),t.\u0275inj=M({});let i=t;return i})(),ne="browser",ie="server";function re(i){return i===ne}function et(i){return i===ie}var tt=(()=>{let t=class t{};t.\u0275prov=a({token:t,providedIn:"root",factory:()=>re(l(T))?new y(l(v),window):new S});let i=t;return i})(),y=class{constructor(t,s){this.document=t,this.window=s,this.offset=()=>[0,0]}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t){this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){let s=se(this.document,t);s&&(this.scrollToElement(s),s.focus())}setHistoryScrollRestoration(t){this.window.history.scrollRestoration=t}scrollToElement(t){let s=t.getBoundingClientRect(),e=s.left+this.window.pageXOffset,n=s.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(e-r[0],n-r[1])}};function se(i,t){let s=i.getElementById(t)||i.getElementsByName(t)[0];if(s)return s;if(typeof i.createTreeWalker=="function"&&i.body&&typeof i.body.attachShadow=="function"){let e=i.createTreeWalker(i.body,NodeFilter.SHOW_ELEMENT),n=e.currentNode;for(;n;){let r=n.shadowRoot;if(r){let o=r.getElementById(t)||r.querySelector(`[name="${t}"]`);if(o)return o}n=e.nextNode()}}return null}var S=class{setOffset(t){}getScrollPosition(){return[0,0]}scrollToPosition(t){}scrollToAnchor(t){}setHistoryScrollRestoration(t){}},V=class{};export{C as a,Ye as b,U as c,v as d,Ze as e,D as f,W as g,We as h,K as i,Ke as j,Xe as k,qe as l,Je as m,Qe as n,ne as o,et as p,tt as q,V as r};
