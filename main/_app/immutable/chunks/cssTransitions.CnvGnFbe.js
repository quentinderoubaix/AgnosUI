import{n as d}from"./stores.BlGEPBY0.js";import{e as c,f as p}from"./app.P_Upt_2z.js";function l(o=document.body){o.getBoundingClientRect()}const w=(o,t)=>{t&&t.length>0&&o.classList.add(...t)},C=(o,t)=>{t&&t.length>0&&o.classList.remove(...t)};function b(o){return window.getComputedStyle(o).transitionProperty!=="none"}function f(o){const{transitionDelay:t,transitionDuration:r}=window.getComputedStyle(o),n=parseFloat(t),i=parseFloat(r);return(n+i)*1e3}const S=o=>async(t,r,n,i,u)=>{const m=o(t,r,n,u)??d;if(n&&b(t)){const s=c(i,"abort"),e=c(t,"transitionend"),a=p(f(t));await Promise.race([s.promise,e.promise,a.promise]),s.unsubscribe(),e.unsubscribe(),a.unsubscribe()}i.aborted||m()};export{w as a,l as b,S as c,C as r};