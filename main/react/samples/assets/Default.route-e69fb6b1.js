import{r as t,j as e}from"./index-ffc26b19.js";import{S as p}from"./Select-30296f83.js";import"./index-50cfebd5.js";import"./utils-946c19b8.js";import"./baseTransitions-00a88573.js";import"./writables-17424135.js";import"./promise-8377987b.js";import"./fade-a3701a34.js";import"./dom-cc7faf10.js";import"./rating-a1a56b21.js";import"./focustrack-4fea73bd.js";import"./config-7593863d.js";const n=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],b=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],d=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],N=()=>{const[s]=t.useState([...n,...b,...d]),[r,o]=t.useState([]),[i,c]=t.useState(void 0),l=t.useCallback(a=>{c(a),o(a?s.filter(m=>m.toLowerCase().startsWith(a)):s.slice(0,10))},[]);return e.jsx("div",{style:{height:"400px"},children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Start typing with a, b or c"}),e.jsx(p,{items:r,filterText:i,onFilterTextChange:l,badgeClassName:"badge text-bg-light"})]})})};export{N as default};