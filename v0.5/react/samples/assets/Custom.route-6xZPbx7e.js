import{r as o,j as a}from"./App-DzjsJVPi.js";import{P as r}from"./pagination-5jlJWfFj-DjXsXVhv.js";import{W as u}from"./config-DsZWmgdO.js";import"./slot-C-87TY4d.js";import"./index-B8c1qUxc.js";import"./directive-DNXkB1Wc-vM-qq65p.js";import"./directive-CKEccryv-BrWl76X8.js";import"./pageFactory-CZZJDqOh-6b3apN76.js";import"./extendWidget-DH8OAK3L.js";import"./pagination-DwDRot6q-EEtIn65_.js";import"./writables-DCiBdIBK-CaNqvQxH.js";import"./config-CksNrV0_.js";import"./widget-DaA-pe23-BBb8HF9F.js";import"./stores-B90XF8Sy-C-A2iTqV.js";const d=/[^0-9]/g;function x({state:e,api:n}){const[p,i]=o.useState(e.page.toString());function l(t){t.key==="Enter"&&s(t)}function s(t){const m=t.currentTarget.value,c=parseInt(m);n.select(c),i(e.page.toString())}function g(t){i(t.currentTarget.value.replace(d,""))}return o.useEffect(()=>{i(e.page.toString())},[e.page]),e.pages.length&&a.jsx("li",{className:"au-custom-pages-item",children:a.jsxs("div",{className:"mb-3 d-flex flex-nowrap px-2",children:[a.jsx("label",{id:"paginationInputLabel",htmlFor:"paginationInput",className:"col-form-label me-2 ms-1",children:"Page"}),a.jsx("input",{value:p,type:"text",inputMode:"numeric",pattern:"[0-9]*",className:"form-control custom-pages-input",id:"paginationInput",onInput:g,onBlur:s,onKeyUp:l,"aria-labelledby":"paginationInputLabel paginationDescription",style:{width:"2.5rem"}}),a.jsxs("span",{id:"paginationDescription",className:"col-form-label text-nowrap px-2",children:[" ","of ",e.pages.length]})]})})}const h=({displayedPage:e})=>["A","B","C","D","E","F"][e-1],z=()=>{const[e,n]=o.useState(4);return a.jsxs(u,{pagination:{collectionSize:60},children:[a.jsx("p",{children:"A pagination with customized links:"}),a.jsx(r,{ariaLabel:"Page navigation with customized links",previousPageLabel:"Prev",nextPageLabel:"Next",numberLabel:h,page:e,onPageChange:n}),a.jsx("hr",{}),a.jsx("p",{children:"A pagination with customized pages:"}),a.jsx(r,{page:e,onPageChange:n,pagesDisplay:x,ariaLabel:"Page navigation with customized pages"})]})};export{z as default};