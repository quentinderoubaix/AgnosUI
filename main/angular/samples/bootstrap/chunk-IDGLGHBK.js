import{B as P,C as L,D as A,O as R}from"./chunk-JRRF5PEA.js";import"./chunk-SBJUXELN.js";import"./chunk-DMXSLBKY.js";import{$a as w,Bb as s,Cb as m,Ib as M,Ja as u,La as r,Sa as d,Ya as g,_ as v,_a as C,a as x,b,d as S,gb as y,ha as T,hb as k,ia as h,ib as I,jb as F,kb as l,lb as a,ob as E,pb as _,qb as p}from"./chunk-WXQMDDQY.js";function N(n,t){let e;return(...i)=>{e&&clearTimeout(e),e=setTimeout(()=>{n(...i)},t)}}var U=n=>{let t;return(...e)=>(t?.abort(),t=new AbortController,n(t.signal,...e))};function D(n,t){if(n&1){let e=E();l(0,"a",5),s(1),a(),l(2,"button",6),_("click",function(c){let o=T(e),W=o.itemContext,B=o.widget;return h(B.actions.onRemoveBadgeClick(c,W.item))}),a()}if(n&2){let e=t.itemContext,i=p();C("href",i.basePageUrl+e.item.pageid,u),r(),m(e.item.title)}}function H(n,t){if(n&1&&(l(0,"div",4),s(1),a(),l(2,"div",7),s(3),a()),n&2){let e=t.itemContext;r(),m(e.item.title),r(2),m(e.item.snippet)}}function O(n,t){if(n&1&&(l(0,"a",8),s(1),a()),n&2){let e=t.$implicit,i=p(2);C("href",i.basePageUrl+e.pageid,u),r(),m(e.title)}}function z(n,t){if(n&1&&I(0,O,2,2,"a",8,k),n&2){let e=p();F(e.selected())}}function q(n,t){n&1&&s(0," none ")}var V=new Intl.Collator("en").compare;function j(n){let t=document.createElement("div");return t.innerHTML=n,t.innerText}var f=class n{constructor(){this.basePageUrl="https://en.wikipedia.org/?curid=";this.items=d([]);this.selected=d([]);this.onFilterTextChange=N(U((t,e)=>S(this,null,function*(){let c=yield(yield fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch="+e,{signal:t})).json();this.items.set(c.query?.search.map(o=>b(x({},o),{snippet:j(o.snippet)}))??[])})),200)}itemIdFn(t){return"page-"+t.pageid}navSelector(t){return t.querySelectorAll("a,button,input")}onSelectedChange(t){this.selected.set((t||[]).sort((e,i)=>V(e.title,i.title)))}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=v({type:n,selectors:[["ng-component"]],standalone:!0,features:[M],decls:8,vars:4,consts:[[1,"custom-select","my-auto","mb-3"],["auSelect","","auBadgeClassName","badge text-bg-light d-flex align-items-center",3,"auFilterTextChange","auSelectedChange","auItems","auItemIdFn","auNavSelector"],["auSelectBadgeLabel",""],["auSelectItemLabel",""],[1,"fw-bold"],["target","_blank","rel","noreferrer"],["type","button","aria-label","Close",1,"btn-close","ms-1","wiki-btn-close",3,"click"],[1,"text-wrap","wiki-desc"],[1,"pe-2"]],template:function(e,i){e&1&&(l(0,"div",0)(1,"div",1),_("auFilterTextChange",function(o){return i.onFilterTextChange(o)})("auSelectedChange",function(o){return i.onSelectedChange(o)}),g(2,D,3,2,"ng-template",2)(3,H,4,2,"ng-template",3),a(),l(4,"span",4),s(5,"Selection: "),a(),g(6,z,2,0)(7,q,1,0),a()),e&2&&(r(),w("auItems",i.items())("auItemIdFn",i.itemIdFn)("auNavSelector",i.navSelector),r(5),y(i.selected.length?6:7))},dependencies:[R,A,P,L],styles:[".custom-select[_ngcontent-%COMP%]{max-width:500px;height:400px}.au-select[_ngcontent-%COMP%]   .wiki-desc[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;-moz-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2}.wiki-btn-close[_ngcontent-%COMP%]{font-size:10px}"]})}};export{f as default};
