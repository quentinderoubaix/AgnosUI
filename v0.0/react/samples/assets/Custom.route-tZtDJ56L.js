import{r as a,j as s,R as x}from"./index-9Fgqnjnm.js";import{S as f}from"./select-B6gvTT0a.js";import"./func-B0ufEirG.js";import"./floatingUI-p2td4s2-.js";import"./directive-l8lfCTE7.js";import"./promise-8x5-Wnj7.js";import"./stores-MWtmIrHD.js";import"./focustrack-z4viAelh.js";import"./config-wKsGJoCh.js";import"./widget-PJHTrfIz.js";import"./slot-gDzFyRzn.js";function j(t,e){let r;return(...o)=>{r&&clearTimeout(r),r=setTimeout(()=>{t(...o)},e)}}const w=t=>{let e;return(...r)=>(e==null||e.abort(),e=new AbortController,t(e.signal,...r))},d="https://en.wikipedia.org/?curid=",S=new Intl.Collator("en").compare;function k(t){const e=document.createElement("div");return e.innerHTML=t,e.innerText}const p=t=>"page-"+t.pageid,F=({itemContext:t,widget:e})=>s.jsxs(s.Fragment,{children:[s.jsx("a",{href:d+t.item.pageid,target:"_blank",rel:"noreferrer",children:t.item.title}),s.jsx("button",{type:"button",className:"btn-close ms-1 wiki-btn-close","aria-label":"Close",onClick:()=>e.api.unselect(t.item)})]}),C=({itemContext:t})=>{const e=t.item;return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"fw-bold",children:e.title}),s.jsx("div",{className:"text-wrap wiki-desc",children:e.snippet})]})},P=()=>{const[t,e]=a.useState([]),[r,o]=a.useState([]),[,u]=a.useState(void 0),g=a.useCallback(j(w(async(n,i)=>{var c;u(i);const b=await(await fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch="+i,{signal:n})).json();e(((c=b.query)==null?void 0:c.search.map(m=>({...m,snippet:k(m.snippet)})))??[])}),200),[]),h=a.useCallback(n=>{o((n||[]).sort((i,l)=>S(i.title,l.title)))},[]);return s.jsxs("div",{className:"custom-select my-auto mb-3",children:[s.jsx(f,{items:t,itemIdFn:p,onFilterTextChange:g,onSelectedChange:h,slotBadgeLabel:F,slotItem:C,badgeClassName:"badge text-bg-light d-flex align-items-center"}),s.jsx("span",{className:"fw-bold",children:"Selection: "}),r.map(n=>s.jsx(x.Fragment,{children:s.jsx("a",{href:`${d}${n.pageid}`,className:"pe-2",children:n.title})},p(n))),!r.length&&s.jsx(s.Fragment,{children:"none"})]})};export{P as default};