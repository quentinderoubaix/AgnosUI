import{n as m}from"./stores.RTPgjjqg.js";import{p as c,a as p}from"./directive.CCq-ftMi.js";function b(o){return window.getComputedStyle(o).transitionProperty!=="none"}function f(o){const{transitionDelay:t,transitionDuration:r}=window.getComputedStyle(o),n=parseFloat(t),i=parseFloat(r);return(n+i)*1e3}const l=o=>async(t,r,n,i,u)=>{const d=o(t,r,n,u)??m;if(n&&b(t)){const s=c(i,"abort"),a=c(t,"transitionend"),e=p(f(t));await Promise.race([s.promise,a.promise,e.promise]),s.unsubscribe(),a.unsubscribe(),e.unsubscribe()}i.aborted||d()};function w(o=document.body){o.getBoundingClientRect()}const C=(o,t)=>{t&&t.length>0&&o.classList.add(...t)},S=(o,t)=>{t&&t.length>0&&o.classList.remove(...t)};export{C as a,w as b,l as c,S as r};
