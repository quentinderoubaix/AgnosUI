import{G as g,F as a,a8 as y,E as p,D as b}from"./index-KDviNLTK.js";import{i as d}from"./func-tK0QDe5R.js";import{b as C,f as W}from"./stores-erwhNRks.js";const u=(t,e,o=1/0)=>{if(e!==void 0)if(typeof e=="object"&&e&&o>=1)for(const s of Object.keys(e))t[s]=u(t[s]??{},e[s],o-1);else return e;return t},S=(t,e=d)=>{const o=g({}),s=e===d?t:a(()=>e(u({},t==null?void 0:t(),2)));return y(a(()=>u(u({},s==null?void 0:s(),2),o(),2)),{...o,own$:o,adaptedParent$:s,parent$:t})},h=Symbol("useSvelteSlot");function F(t){let e={};return o=>{const s=W(e,o);e=o,s&&t(s)}}const x=(t,e)=>e?(...o)=>{t(...o),e(...o)}:t,j=t=>{const e=g(void 0,{equal:Object.is});return y(a(()=>x(t,e())),{set:e.set,update:e.update})},v=({factory:t,$$slots:e,defaultConfig:o,widgetConfig:s,events:n})=>{const r=C(o),c={};for(const[i,m]of Object.entries(e))m&&(c[`slot${i[0].toUpperCase()}${i.substring(1)}`]=h);const l={};for(const i of Object.keys(n))l[i]=j(n[i]);const f=t({config:a(()=>({...r(),...s==null?void 0:s(),...c})),props:l});return{...f,patchChangedProps:F(f.patch)}},I=t=>typeof t=="function"&&!!t.prototype&&(t.prototype.$set||/^Proxy</.test(t.name))||typeof(t==null?void 0:t.render)=="function",P=(t=Symbol("widgetsConfig"))=>{const e=n=>{const r=p(t),c=S(r,n);return b(t,c),c},o=n=>{const r=p(t);return a(()=>r==null?void 0:r()[n])};return{widgetsDefaultConfigKey:t,createWidgetsDefaultConfig:e,getContextWidgetConfig:o,callWidgetFactory:({factory:n,widgetName:r=null,$$slots:c,defaultConfig:l={},events:f})=>v({factory:n,$$slots:c,defaultConfig:l,widgetConfig:r?o(r):null,events:f})}},{widgetsDefaultConfigKey:q,createWidgetsDefaultConfig:D,getContextWidgetConfig:G,callWidgetFactory:R}=P();export{D as a,R as c,I as i,h as u};
