import{j as o}from"./index-ffc26b19.js";import{R as a}from"./Rating-6c82bab8.js";import"./index-50cfebd5.js";import"./utils-946c19b8.js";import"./baseTransitions-00a88573.js";import"./writables-17424135.js";import"./promise-8377987b.js";import"./fade-a3701a34.js";import"./dom-cc7faf10.js";import"./rating-a1a56b21.js";import"./focustrack-4fea73bd.js";import"./config-7593863d.js";const i=({fill:r,index:s})=>{const t=["star"];return r===100&&t.push("filled"),s<3&&t.push("bad"),o.jsx("span",{className:t.join(" "),children:"★"})},R=()=>o.jsx(a,{className:"rating-custom",rating:7,slotStar:i,ariaLabel:"custom rating"});export{R as default};