import{ab as g,a7 as i,aa as b,H as p,G as m}from"./AppCommon-EGvQgKwz.js";import{i as y,d as W,f as C}from"./directive-3-8yr-ZK-C23OGezp.js";const u=(t,e,o=1/0)=>{if(e!==void 0)if(typeof e=="object"&&e&&o>=1){t||(t={});for(const n of Object.keys(e))Object.prototype.hasOwnProperty.call(e,n)&&(n==="__proto__"||n==="constructor"||(t[n]=u(t[n],e[n],o-1)))}else return e;return t},S=(t,e=y)=>{const o=g({}),n=e===y?t:i(()=>e(u({},t==null?void 0:t(),2)));return b(i(()=>u(u({},n==null?void 0:n(),2),o(),2)),{...o,own$:o,adaptedParent$:n,parent$:t})},j=Symbol("useSvelteSlot");function x(t,e){return o=>{const n=C(t,o);t=o,n&&e(n)}}const F=(t,e)=>e?(...o)=>{t(...o),e(...o)}:t,O=(t,e)=>{const o=g(e,{equal:Object.is});return b(i(()=>F(t,o())),{set:o.set,update:o.update})},P=({factory:t,$$slots:e,defaultConfig:o,widgetConfig:n,events:c,$$props:r})=>{const s=W(o),l={};if(e)for(const[a,h]of Object.entries(e))h&&(l[a==="default"?"children":a]=j);const f={...r};if(c)for(const a of Object.keys(c))f[a]=O(c[a],r[a]);const d=t({config:i(()=>({...s(),...n==null?void 0:n(),...l})),props:f});return{...d,patchChangedProps:x(r,d.patch)}},I=t=>typeof t=="function"&&!!t.prototype&&(t.prototype.$set||/^Proxy</.test(t.name))||typeof(t==null?void 0:t.render)=="function",v=(t=Symbol("widgetsConfig"))=>{const e=c=>{const r=p(t),s=S(r,c);return m(t,s),s},o=c=>{const r=p(t);return i(()=>r==null?void 0:r()[c])};return{widgetsDefaultConfigKey:t,createWidgetsDefaultConfig:e,getContextWidgetConfig:o,callWidgetFactory:({factory:c,widgetName:r=null,$$slots:s,defaultConfig:l={},events:f,$$props:d})=>P({factory:c,$$slots:s,defaultConfig:l,widgetConfig:r?o(r):null,events:f,$$props:d})}},{widgetsDefaultConfigKey:q,createWidgetsDefaultConfig:E,getContextWidgetConfig:G,callWidgetFactory:H}=v();export{H as c,I as i,j as u,v as w};
