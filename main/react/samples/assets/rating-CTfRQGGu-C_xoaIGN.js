import{j as e,R as a}from"./App-DI9ur9y5.js";import{S as o}from"./slot-Cdz7cIIo.js";import{a as c,u as d}from"./directive-DNXkB1Wc-BT0zWdco.js";import{u as m}from"./config-aYUxiFUz.js";import{c as x}from"./rating-C1UqlpFs-B8LD5BYY.js";import{c as p}from"./directive-CKEccryv-BXYvEkQs.js";const l=x;function u({star:i,state:t,directive:s}){const r={index:i.index};return e.jsxs(a.Fragment,{children:[e.jsxs("span",{className:"visually-hidden",children:["(",i.index<t.visibleRating?"*":" ",")"]}),e.jsx("span",{...d(s,r),children:e.jsx(o,{slotContent:t.star,props:i})})]},i.index)}function D(i){const{state:t,directives:{containerDirective:s,starDirective:r}}=m(l,i,"rating");return e.jsx("div",{...c([p,"d-inline-flex"],s),children:t.stars.map(n=>e.jsx(u,{star:n,state:t,directive:r},n.index))})}export{D as R,l as e};