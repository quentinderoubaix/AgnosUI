import{n as m}from"./stores.7cd7b1fc.js";const d=(o,t)=>{let n;const r=new Promise(e=>n=e);let i=()=>{o.removeEventListener(t,s),i=m};const s=e=>{e.target===o&&(n(e),i())};return o.addEventListener(t,s),{promise:r,unsubscribe(){i()}}},b=o=>{let t;return{promise:new Promise(n=>{t=setTimeout(()=>{t=void 0,n()},o)}),unsubscribe(){t&&(clearTimeout(t),t=void 0)}}};function p(o){return window.getComputedStyle(o).transitionProperty!=="none"}function f(o){const{transitionDelay:t,transitionDuration:n}=window.getComputedStyle(o),r=parseFloat(t),i=parseFloat(n);return(r+i)*1e3}const v=o=>async(t,n,r,i,s)=>{const e=o(t,n,r,s)??m;if(r&&p(t)){const a=d(i,"abort"),c=d(t,"transitionend"),u=b(f(t));await Promise.race([a.promise,c.promise,u.promise]),a.unsubscribe(),c.unsubscribe(),u.unsubscribe()}i.aborted||e()};function w(o=document.body){o.getBoundingClientRect()}const g=(o,t)=>{t&&t.length>0&&o.classList.add(...t)},y=(o,t)=>{t&&t.length>0&&o.classList.remove(...t)};export{g as a,w as b,v as c,y as r};