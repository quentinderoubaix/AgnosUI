import{r as t,j as a}from"./index-YYSjci1i.js";import{S as p}from"./select-J9-F_KPj.js";import"./func-B0ufEirG.js";import"./floatingUI-3euwnFi1.js";import"./directive-YYywsOGr.js";import"./promise-8x5-Wnj7.js";import"./stores-UfNM2YcX.js";import"./focustrack-SQxpMq5t.js";import"./config-jTA8BTDm.js";import"./widget-fi-AiOGS.js";import"./slot-_g_4tWt3.js";const n=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],b=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],u=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],y=()=>{const[s]=t.useState([...n,...b,...u]),[r,o]=t.useState([]),[i,c]=t.useState(void 0),l=t.useCallback(e=>{c(e),o(e?s.filter(m=>m.toLowerCase().startsWith(e)):s.slice(0,10))},[]);return a.jsx("div",{style:{height:"400px"},children:a.jsx("div",{className:"mb-3",children:a.jsx(p,{items:r,filterText:i,onFilterTextChange:l,badgeClassName:"badge text-bg-light"})})})};export{y as default};