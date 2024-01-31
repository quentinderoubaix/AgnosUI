import{G as $,aa as Mt}from"./AppCommon-y_dNMLXh.js";import{e as rt,m as dt,d as mt}from"./directive-NtTUdlF8.js";import{d as Ht}from"./promise-wuy4HpSq.js";import{w as Wt,s as Nt}from"./stores-c_iyYwJ1.js";const At=["top","right","bottom","left"],pt=["start","end"],gt=At.reduce((t,e)=>t.concat(e,e+"-"+pt[0],e+"-"+pt[1]),[]),W=Math.min,E=Math.max,Q=Math.round,J=Math.floor,N=t=>({x:t,y:t}),Vt={left:"right",right:"left",bottom:"top",top:"bottom"},kt={start:"end",end:"start"};function st(t,e,n){return E(t,W(e,n))}function z(t,e){return typeof t=="function"?t(e):t}function I(t){return t.split("-")[0]}function P(t){return t.split("-")[1]}function Rt(t){return t==="x"?"y":"x"}function ct(t){return t==="y"?"height":"width"}function G(t){return["top","bottom"].includes(I(t))?"y":"x"}function lt(t){return Rt(G(t))}function _t(t,e,n){n===void 0&&(n=!1);const o=P(t),i=lt(t),s=ct(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=ht(r)),[r,ht(r)]}function zt(t){return t.replace(/start|end/g,e=>kt[e])}function ht(t){return t.replace(/left|right|bottom|top/g,e=>Vt[e])}function It(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ct(t){return typeof t!="number"?It(t):{top:t,right:t,bottom:t,left:t}}function Z(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function wt(t,e,n){let{reference:o,floating:i}=t;const s=G(e),r=lt(e),l=ct(r),c=I(e),a=s==="y",m=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,g=o[l]/2-i[l]/2;let f;switch(c){case"top":f={x:m,y:o.y-i.height};break;case"bottom":f={x:m,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-i.width,y:u};break;default:f={x:o.x,y:o.y}}switch(P(e)){case"start":f[r]-=g*(n&&a?-1:1);break;case"end":f[r]+=g*(n&&a?-1:1);break}return f}const Yt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,l=s.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:m,y:u}=wt(a,o,c),g=o,f={},d=0;for(let h=0;h<l.length;h++){const{name:x,fn:w}=l[h],{x:y,y:v,data:C,reset:O}=await w({x:m,y:u,initialPlacement:o,placement:g,strategy:i,middlewareData:f,rects:a,platform:r,elements:{reference:t,floating:e}});m=y??m,u=v??u,f={...f,[x]:{...f[x],...C}},O&&d<=50&&(d++,typeof O=="object"&&(O.placement&&(g=O.placement),O.rects&&(a=O.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):O.rects),{x:m,y:u}=wt(a,g,c)),h=-1)}return{x:m,y:u,placement:g,strategy:i,middlewareData:f}};async function U(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:m="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=z(e,t),d=Ct(f),x=l[g?u==="floating"?"reference":"floating":u],w=Z(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(x)))==null||n?x:x.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:a,rootBoundary:m,strategy:c})),y=u==="floating"?{...r.floating,x:o,y:i}:r.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),C=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},O=Z(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:v,strategy:c}):y);return{top:(w.top-O.top+d.top)/C.y,bottom:(O.bottom-w.bottom+d.bottom)/C.y,left:(w.left-O.left+d.left)/C.x,right:(O.right-w.right+d.right)/C.x}}const Xt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:l,middlewareData:c}=e,{element:a,padding:m=0}=z(t,e)||{};if(a==null)return{};const u=Ct(m),g={x:n,y:o},f=lt(i),d=ct(f),h=await r.getDimensions(a),x=f==="y",w=x?"top":"left",y=x?"bottom":"right",v=x?"clientHeight":"clientWidth",C=s.reference[d]+s.reference[f]-g[f]-s.floating[d],O=g[f]-s.reference[f],A=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let T=A?A[v]:0;(!T||!await(r.isElement==null?void 0:r.isElement(A)))&&(T=l.floating[v]||s.floating[d]);const p=C/2-O/2,b=T/2-h[d]/2-1,R=W(u[w],b),D=W(u[y],b),B=R,Y=T-h[d]-D,k=T/2-h[d]/2+p,nt=st(B,k,Y),ot=!c.arrow&&P(i)!=null&&k!==nt&&s.reference[d]/2-(k<B?R:D)-h[d]/2<0,it=ot?k<B?k-B:k-Y:0;return{[f]:g[f]+it,data:{[f]:nt,centerOffset:k-nt-it,...ot&&{alignmentOffset:it}},reset:ot}}});function jt(t,e,n){return(t?[...n.filter(i=>P(i)===t),...n.filter(i=>P(i)!==t)]:n.filter(i=>I(i)===i)).filter(i=>t?P(i)===t||(e?zt(i)!==i:!1):!0)}const Ut=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:s,middlewareData:r,placement:l,platform:c,elements:a}=e,{crossAxis:m=!1,alignment:u,allowedPlacements:g=gt,autoAlignment:f=!0,...d}=z(t,e),h=u!==void 0||g===gt?jt(u||null,f,g):g,x=await U(e,d),w=((n=r.autoPlacement)==null?void 0:n.index)||0,y=h[w];if(y==null)return{};const v=_t(y,s,await(c.isRTL==null?void 0:c.isRTL(a.floating)));if(l!==y)return{reset:{placement:h[0]}};const C=[x[I(y)],x[v[0]],x[v[1]]],O=[...((o=r.autoPlacement)==null?void 0:o.overflows)||[],{placement:y,overflows:C}],A=h[w+1];if(A)return{data:{index:w+1,overflows:O},reset:{placement:A}};const T=O.map(R=>{const D=P(R.placement);return[R.placement,D&&m?R.overflows.slice(0,2).reduce((B,Y)=>B+Y,0):R.overflows[0],R.overflows]}).sort((R,D)=>R[1]-D[1]),b=((i=T.filter(R=>R[2].slice(0,P(R[0])?2:3).every(D=>D<=0))[0])==null?void 0:i[0])||T[0][0];return b!==l?{data:{index:w+1,overflows:O},reset:{placement:b}}:{}}}};function yt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function xt(t){return At.some(e=>t[e]>=0)}const qt=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=z(t,e);switch(o){case"referenceHidden":{const s=await U(e,{...i,elementContext:"reference"}),r=yt(s,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:xt(r)}}}case"escaped":{const s=await U(e,{...i,altBoundary:!0}),r=yt(s,n.floating);return{data:{escapedOffsets:r,escaped:xt(r)}}}default:return{}}}}};async function Gt(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=I(n),l=P(n),c=G(n)==="y",a=["left","top"].includes(r)?-1:1,m=s&&c?-1:1,u=z(e,t);let{mainAxis:g,crossAxis:f,alignmentAxis:d}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof d=="number"&&(f=l==="end"?d*-1:d),c?{x:f*m,y:g*a}:{x:g*a,y:f*m}}const Ae=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:l}=e,c=await Gt(e,t);return r===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:s+c.y,data:{...c,placement:r}}}}},Kt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:x=>{let{x:w,y}=x;return{x:w,y}}},...c}=z(t,e),a={x:n,y:o},m=await U(e,c),u=G(I(i)),g=Rt(u);let f=a[g],d=a[u];if(s){const x=g==="y"?"top":"left",w=g==="y"?"bottom":"right",y=f+m[x],v=f-m[w];f=st(y,f,v)}if(r){const x=u==="y"?"top":"left",w=u==="y"?"bottom":"right",y=d+m[x],v=d-m[w];d=st(y,d,v)}const h=l.fn({...e,[g]:f,[u]:d});return{...h,data:{x:h.x-n,y:h.y-o}}}}},Jt=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:s}=e,{apply:r=()=>{},...l}=z(t,e),c=await U(e,l),a=I(n),m=P(n),u=G(n)==="y",{width:g,height:f}=o.floating;let d,h;a==="top"||a==="bottom"?(d=a,h=m===(await(i.isRTL==null?void 0:i.isRTL(s.floating))?"start":"end")?"left":"right"):(h=a,d=m==="end"?"top":"bottom");const x=f-c[d],w=g-c[h],y=!e.middlewareData.shift;let v=x,C=w;if(u){const A=g-c.left-c.right;C=m||y?W(w,A):A}else{const A=f-c.top-c.bottom;v=m||y?W(x,A):A}if(y&&!m){const A=E(c.left,0),T=E(c.right,0),p=E(c.top,0),b=E(c.bottom,0);u?C=g-2*(A!==0||T!==0?A+T:E(c.left,c.right)):v=f-2*(p!==0||b!==0?p+b:E(c.top,c.bottom))}await r({...e,availableWidth:C,availableHeight:v});const O=await i.getDimensions(s.floating);return g!==O.width||f!==O.height?{reset:{rects:!0}}:{}}}};function V(t){return Tt(t)?(t.nodeName||"").toLowerCase():"#document"}function S(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function H(t){var e;return(e=(Tt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Tt(t){return t instanceof Node||t instanceof S(t).Node}function M(t){return t instanceof Element||t instanceof S(t).Element}function F(t){return t instanceof HTMLElement||t instanceof S(t).HTMLElement}function vt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof S(t).ShadowRoot}function K(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Qt(t){return["table","td","th"].includes(V(t))}function at(t){const e=ft(),n=L(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Et(t){let e=j(t);for(;F(e)&&!tt(e);){if(at(e))return e;e=j(e)}return null}function ft(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function tt(t){return["html","body","#document"].includes(V(t))}function L(t){return S(t).getComputedStyle(t)}function et(t){return M(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function j(t){if(V(t)==="html")return t;const e=t.assignedSlot||t.parentNode||vt(t)&&t.host||H(t);return vt(e)?e.host:e}function St(t){const e=j(t);return tt(e)?t.ownerDocument?t.ownerDocument.body:t.body:F(e)&&K(e)?e:St(e)}function q(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=St(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=S(i);return s?e.concat(r,r.visualViewport||[],K(i)?i:[],r.frameElement&&n?q(r.frameElement):[]):e.concat(i,q(i,[],n))}function Lt(t){const e=L(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=F(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,l=Q(n)!==s||Q(o)!==r;return l&&(n=s,o=r),{width:n,height:o,$:l}}function ut(t){return M(t)?t:t.contextElement}function X(t){const e=ut(t);if(!F(e))return N(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Lt(e);let r=(s?Q(n.width):n.width)/o,l=(s?Q(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const Zt=N(0);function $t(t){const e=S(t);return!ft()||!e.visualViewport?Zt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function te(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==S(t)?!1:e}function _(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=ut(t);let r=N(1);e&&(o?M(o)&&(r=X(o)):r=X(t));const l=te(s,n,o)?$t(s):N(0);let c=(i.left+l.x)/r.x,a=(i.top+l.y)/r.y,m=i.width/r.x,u=i.height/r.y;if(s){const g=S(s),f=o&&M(o)?S(o):o;let d=g.frameElement;for(;d&&o&&f!==g;){const h=X(d),x=d.getBoundingClientRect(),w=L(d),y=x.left+(d.clientLeft+parseFloat(w.paddingLeft))*h.x,v=x.top+(d.clientTop+parseFloat(w.paddingTop))*h.y;c*=h.x,a*=h.y,m*=h.x,u*=h.y,c+=y,a+=v,d=S(d).frameElement}}return Z({width:m,height:u,x:c,y:a})}const ee=[":popover-open",":modal"];function Dt(t){let e=!1,n=0,o=0;function i(s){try{e=e||t.matches(s)}catch{}}if(ee.forEach(s=>{i(s)}),e){const s=Et(t);if(s){const r=s.getBoundingClientRect();n=r.x,o=r.y}}return[e,n,o]}function ne(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=H(o),[r]=e?Dt(e.floating):[!1];if(o===s||r)return n;let l={scrollLeft:0,scrollTop:0},c=N(1);const a=N(0),m=F(o);if((m||!m&&i!=="fixed")&&((V(o)!=="body"||K(s))&&(l=et(o)),F(o))){const u=_(o);c=X(o),a.x=u.x+o.clientLeft,a.y=u.y+o.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+a.x,y:n.y*c.y-l.scrollTop*c.y+a.y}}function oe(t){return Array.from(t.getClientRects())}function Pt(t){return _(H(t)).left+et(t).scrollLeft}function ie(t){const e=H(t),n=et(t),o=t.ownerDocument.body,i=E(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=E(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Pt(t);const l=-n.scrollTop;return L(o).direction==="rtl"&&(r+=E(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:l}}function re(t,e){const n=S(t),o=H(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,l=0,c=0;if(i){s=i.width,r=i.height;const a=ft();(!a||a&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:s,height:r,x:l,y:c}}function se(t,e){const n=_(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=F(t)?X(t):N(1),r=t.clientWidth*s.x,l=t.clientHeight*s.y,c=i*s.x,a=o*s.y;return{width:r,height:l,x:c,y:a}}function bt(t,e,n){let o;if(e==="viewport")o=re(t,n);else if(e==="document")o=ie(H(t));else if(M(e))o=se(e,n);else{const i=$t(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return Z(o)}function Ft(t,e){const n=j(t);return n===e||!M(n)||tt(n)?!1:L(n).position==="fixed"||Ft(n,e)}function ce(t,e){const n=e.get(t);if(n)return n;let o=q(t,[],!1).filter(l=>M(l)&&V(l)!=="body"),i=null;const s=L(t).position==="fixed";let r=s?j(t):t;for(;M(r)&&!tt(r);){const l=L(r),c=at(r);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||K(r)&&!c&&Ft(t,r))?o=o.filter(m=>m!==r):i=l,r=j(r)}return e.set(t,o),o}function le(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?ce(e,this._c):[].concat(n),o],l=r[0],c=r.reduce((a,m)=>{const u=bt(e,m,i);return a.top=E(u.top,a.top),a.right=W(u.right,a.right),a.bottom=W(u.bottom,a.bottom),a.left=E(u.left,a.left),a},bt(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function ae(t){const{width:e,height:n}=Lt(t);return{width:e,height:n}}function fe(t,e,n,o){const i=F(e),s=H(e),r=n==="fixed",l=_(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const a=N(0);if(i||!i&&!r)if((V(e)!=="body"||K(s))&&(c=et(e)),i){const h=_(e,!0,r,e);a.x=h.x+e.clientLeft,a.y=h.y+e.clientTop}else s&&(a.x=Pt(s));let m=l.left+c.scrollLeft-a.x,u=l.top+c.scrollTop-a.y;const[g,f,d]=Dt(o);return g&&(m+=f,u+=d,i&&(m+=e.clientLeft,u+=e.clientTop)),{x:m,y:u,width:l.width,height:l.height}}function Ot(t,e){return!F(t)||L(t).position==="fixed"?null:e?e(t):t.offsetParent}function Bt(t,e){const n=S(t);if(!F(t))return n;let o=Ot(t,e);for(;o&&Qt(o)&&L(o).position==="static";)o=Ot(o,e);return o&&(V(o)==="html"||V(o)==="body"&&L(o).position==="static"&&!at(o))?n:o||Et(t)||n}const ue=async function(t){const e=this.getOffsetParent||Bt,n=this.getDimensions;return{reference:fe(t.reference,await e(t.floating),t.strategy,t.floating),floating:{x:0,y:0,...await n(t.floating)}}};function de(t){return L(t).direction==="rtl"}const me={convertOffsetParentRelativeRectToViewportRelativeRect:ne,getDocumentElement:H,getClippingRect:le,getOffsetParent:Bt,getElementRects:ue,getClientRects:oe,getDimensions:ae,getScale:X,isElement:M,isRTL:de};function pe(t,e){let n=null,o;const i=H(t);function s(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function r(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const{left:a,top:m,width:u,height:g}=t.getBoundingClientRect();if(l||e(),!u||!g)return;const f=J(m),d=J(i.clientWidth-(a+u)),h=J(i.clientHeight-(m+g)),x=J(a),y={rootMargin:-f+"px "+-d+"px "+-h+"px "+-x+"px",threshold:E(0,W(1,c))||1};let v=!0;function C(O){const A=O[0].intersectionRatio;if(A!==c){if(!v)return r();A?r(!1,A):o=setTimeout(()=>{r(!1,1e-7)},100)}v=!1}try{n=new IntersectionObserver(C,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,y)}n.observe(t)}return r(!0),s}function ge(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=ut(t),m=i||s?[...a?q(a):[],...q(e)]:[];m.forEach(w=>{i&&w.addEventListener("scroll",n,{passive:!0}),s&&w.addEventListener("resize",n)});const u=a&&l?pe(a,n):null;let g=-1,f=null;r&&(f=new ResizeObserver(w=>{let[y]=w;y&&y.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var v;(v=f)==null||v.observe(e)})),n()}),a&&!c&&f.observe(a),f.observe(e));let d,h=c?_(t):null;c&&x();function x(){const w=_(t);h&&(w.x!==h.x||w.y!==h.y||w.width!==h.width||w.height!==h.height)&&n(),h=w,d=requestAnimationFrame(x)}return n(),()=>{var w;m.forEach(y=>{i&&y.removeEventListener("scroll",n),s&&y.removeEventListener("resize",n)}),u==null||u(),(w=f)==null||w.disconnect(),f=null,c&&cancelAnimationFrame(d)}}const Re=Ut,Ce=Kt,Te=Jt,Ee=qt,he=Xt,we=(t,e,n)=>{const o=new Map,i={platform:me,...n},s={...i.platform,_c:o};return Yt(t,e,{...i,platform:s})},ye={computePositionOptions:{},autoUpdateOptions:{},arrowOptions:{}},Se=t=>{const[{autoUpdateOptions$:e,computePositionOptions$:n,arrowOptions$:o},i]=Wt(ye,t),{directive:s,element$:r}=rt(),{directive:l,element$:c}=rt(),{directive:a,element$:m}=rt(),u=$(()=>{const p=m();if(!p)return null;const b=o();return typeof b=="function"?R=>({...b(R),element:p}):{...b,element:p}}),g=$(()=>{let p=n();const b=u();return b&&(p={...p,middleware:[...p.middleware??[],he(b)]}),p}),f=Mt([r,c,g,e],([p,b,R,D],B)=>{if(p&&b){const Y=ge(b,p,()=>{B(we(b,p,R))},D);return()=>{B(null),Y()}}},null),d=Ht(f,null),h=$(()=>{var p;return(p=d())==null?void 0:p.placement}),x=$(()=>{var p;return(p=d())==null?void 0:p.middlewareData}),w=$(()=>{var p;return(p=d())==null?void 0:p.x}),y=$(()=>{var p;return(p=d())==null?void 0:p.y}),v=$(()=>{var p;return(p=d())==null?void 0:p.strategy}),C=$(()=>{var p,b;return(b=(p=x())==null?void 0:p.arrow)==null?void 0:b.x}),O=$(()=>{var p,b;return(b=(p=x())==null?void 0:p.arrow)==null?void 0:b.y}),A=$(()=>{const p=r();p&&(p.style.left=`${w()??0}px`,p.style.top=`${y()??0}px`)}),T=$(()=>{const p=m();if(p){const b=C(),R=O();p.style.left=b!=null?`${b}px`:"",p.style.top=R!=null?`${R}px`:""}});return{patch:i,...Nt({x$:w,y$:y,strategy$:v,placement$:h,middlewareData$:x}),directives:{referenceDirective:l,floatingDirective:dt(s,mt(A)),arrowDirective:dt(a,mt(T))}}};export{Re as a,Te as b,Se as c,Ee as h,Ae as o,Ce as s};
