import{r as t,j as a}from"./App-DI9ur9y5.js";import{S as p}from"./select-CMqzewJR-_CCMxavc.js";import"./slot-Cdz7cIIo.js";import"./directive-DNXkB1Wc-BT0zWdco.js";import"./directive-CKEccryv-BXYvEkQs.js";import"./index-DYzswQoO.js";import"./config-Cj4vTRwM.js";import"./config-DDWCLHBi.js";import"./stores-B90XF8Sy-7qJUtm0j.js";import"./floatingUI-xDXX4152.js";import"./promise-CY2U8bTP-D7Q2lx8N.js";import"./focustrack-CicyDi2C.js";import"./navManager-Cn248sWl.js";import"./extendWidget-BdAld2Yx.js";const n=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],b=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],u=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],L=()=>{const[s]=t.useState([...n,...b,...u]),[r,o]=t.useState([]),[i,c]=t.useState(void 0),l=t.useCallback(e=>{c(e),o(e?s.filter(m=>m.toLowerCase().startsWith(e)):s.slice(0,10))},[]);return a.jsx("div",{style:{height:"400px"},children:a.jsx("div",{className:"mb-3",children:a.jsx(p,{items:r,filterText:i,onFilterTextChange:l,badgeClassName:"badge text-bg-light"})})})};export{L as default};