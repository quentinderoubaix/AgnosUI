import{g as h,r as f,j as a}from"./index-qoEqhzEW.js";import{c as x}from"./pagination-C_gYTMDt-oCwscL9X.js";import{u as b,S as c}from"./config-HaG-qiNL.js";import{t as v}from"./stores-CeiBlAbJ.js";const j=x;var g={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var n={}.hasOwnProperty;function e(){for(var s="",l=0;l<arguments.length;l++){var o=arguments[l];o&&(s=i(s,r(o)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return e.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var l="";for(var o in s)n.call(s,o)&&s[o]&&(l=i(l,o));return l}function i(s,l){return l?s?s+" "+l:s+l:s}t.exports?(e.default=e,t.exports=e):window.classNames=e})()})(g);var N=g.exports;const d=h(N),u=f.forwardRef(({disabled:t,active:n,ariaLabel:e,activeLabel:r,className:i,children:s,href:l,...o},m)=>a.jsx("li",{ref:m,"aria-current":n?"page":void 0,className:d("page-item",{active:n,disabled:t}),children:a.jsxs("a",{className:d("page-link",i),"aria-label":e||void 0,...o,href:l,tabIndex:t?-1:void 0,"aria-disabled":t||void 0,children:[s,n&&r&&a.jsx("span",{className:"visually-hidden",children:r})]})}));u.displayName="PageItem";const p=f.forwardRef(({children:t,...n},e)=>a.jsx(u,{...n,ref:e,children:a.jsx("span",{"aria-hidden":"true",children:t})}));p.displayName="NavButton";function L(t){const{widget:n,state:e}=t,r=[];for(let i=0;i<e.pages.length;i++)e.pages[i]===-1?r.push(a.jsxs("li",{className:"page-item disabled",children:[a.jsx("div",{className:"page-link au-ellipsis","aria-hidden":"true",children:a.jsx(c,{slotContent:e.slotEllipsis,props:t})}),a.jsx("span",{className:"visually-hidden",children:e.ariaEllipsisLabel})]},"Ellipsis"+i)):r.push(a.jsx(u,{className:"au-page",disabled:e.disabled,active:e.pages[i]===e.page,onClick:s=>n.actions.select(e.pages[i],s.nativeEvent),href:e.pagesHrefs[i],ariaLabel:e.pagesLabel[i],activeLabel:e.activeLabel,children:a.jsx(c,{slotContent:e.slotNumberLabel,props:{...t,displayedPage:e.pages[i]}})},e.pages[i]));return r.length?a.jsx(a.Fragment,{children:r}):null}const y={slotPages:L,slotStructure:P};function P(t){const{widget:n,state:e}=t,r=[],i=[];return e.boundaryLinks&&r.push(a.jsx(p,{className:"au-first",ariaLabel:e.ariaFirstLabel,href:e.pagesHrefs[0],onClick:s=>n.actions.first(s.nativeEvent),disabled:e.previousDisabled,children:a.jsx(c,{slotContent:e.slotFirst,props:t})},"first")),e.directionLinks&&r.push(a.jsx(p,{className:"au-previous",ariaLabel:e.ariaPreviousLabel,href:e.directionsHrefs.previous,onClick:s=>n.actions.previous(s.nativeEvent),disabled:e.previousDisabled,children:a.jsx(c,{slotContent:e.slotPrevious,props:t})},"prev")),e.directionLinks&&i.push(a.jsx(p,{className:"au-next",ariaLabel:e.ariaNextLabel,href:e.directionsHrefs.next,onClick:s=>n.actions.next(s.nativeEvent),disabled:e.nextDisabled,children:a.jsx(c,{slotContent:e.slotNext,props:t})},"next")),e.boundaryLinks&&i.push(a.jsx(p,{className:"au-last",ariaLabel:e.ariaLastLabel,href:e.pagesHrefs.at(-1),onClick:s=>n.actions.last(s.nativeEvent),disabled:e.nextDisabled,children:a.jsx(c,{slotContent:e.slotLast,props:t})},"last")),a.jsxs(a.Fragment,{children:[a.jsxs("ul",{className:d("au-pagination","pagination",e.size?`pagination-${e.size}`:"",e.className),children:[r,a.jsx(c,{slotContent:e.slotPages,props:t}),i]}),a.jsx("div",{"aria-live":"polite",className:"visually-hidden",children:e.page&&`Current page is ${e.page}`})]})}function w(t){const[n,e]=b(j,t,"pagination",y),r={state:n,widget:v(e)};return a.jsx("nav",{"aria-label":n.ariaLabel,children:a.jsx(c,{slotContent:n.slotStructure,props:r})})}export{w as P};