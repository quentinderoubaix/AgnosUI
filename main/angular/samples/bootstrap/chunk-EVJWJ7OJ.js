import{Q as W,t as L,u as A,v as V,w as N,x as z}from"./chunk-FYCQ4Y2Q.js";import"./chunk-LTN2D4M5.js";import"./chunk-DMXSLBKY.js";import{$a as v,Ab as _,Bb as g,Cb as I,Db as E,Eb as d,Fb as f,Gb as C,Ib as D,La as m,Sa as h,Ya as c,_ as w,gb as y,ha as u,ia as s,kb as r,lb as l,mb as b,ob as T,pb as S,qb as p}from"./chunk-WXQMDDQY.js";function k(n,t){n&1&&g(0,"Prev")}function M(n,t){n&1&&g(0,"Next")}function F(n,t){if(n&1&&g(0),n&2){let e=t.displayedPage,i=p();I(i.getPageSymbol(e))}}function B(n,t){if(n&1){let e=T();r(0,"li",7)(1,"div",8)(2,"label",9),g(3,"Page"),l(),r(4,"input",10,0),S("keyup.enter",function(){u(e);let o=_(5),a=p().widget,P=p();return s(P.handleTheChange(o,a))})("blur",function(){u(e);let o=_(5),a=p().widget,P=p();return s(P.handleTheChange(o,a))})("input",function(){u(e);let o=_(5),a=p(2);return s(a.formatInput(o))}),l(),r(6,"span",11),g(7),l()()()}if(n&2){let e=p().state;m(4),v("value",e.page),m(3),E(" of ",e.pages.length,"")}}function G(n,t){if(n&1&&c(0,B,8,2,"li",7),n&2){let e=t.state;y(e.pages.length>0?0:-1)}}var H=/[^0-9]/g,x=class n{constructor(){this.customPage=h(4)}getPageSymbol(t){return["A","B","C","D","E","F"][t-1]}formatInput(t){t.value=t.value.replace(H,"")}handleTheChange(t,e){let i=t.value,o=parseInt(i);e.api.select(o),t.value=e.stores.page$().toString()}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=w({type:n,selectors:[["ng-component"]],standalone:!0,features:[D],decls:11,vars:2,consts:[["i",""],["auPagination","","auCollectionSize","60","auAriaLabel","Page navigation with customized links",3,"auPageChange","auPage"],["auPaginationPrevious",""],["auPaginationNext",""],["auPaginationNumber",""],["auPagination","","auCollectionSize","60","auAriaLabel","Page navigation with customized pages",3,"auPageChange","auPage"],["auPaginationPages",""],[1,"au-custom-pages-item"],[1,"mb-3","d-flex","flex-nowrap","px-2"],["id","paginationInputLabel","for","paginationInput",1,"col-form-label","me-2","ms-1"],["type","text","inputmode","numeric","pattern","[0-9]*","id","paginationInput","aria-labelledby","paginationInputLabel paginationDescription",1,"form-control","custom-pages-input",2,"width","2.5rem",3,"keyup.enter","blur","input","value"],["id","paginationDescription",1,"col-form-label","text-nowrap","px-2"]],template:function(e,i){e&1&&(r(0,"p"),g(1,"A pagination with customized links:"),l(),r(2,"nav",1),C("auPageChange",function(a){return f(i.customPage,a)||(i.customPage=a),a}),c(3,k,1,0,"ng-template",2)(4,M,1,0,"ng-template",3)(5,F,1,1,"ng-template",4),l(),b(6,"hr"),r(7,"p"),g(8,"A pagination with customized pages:"),l(),r(9,"nav",5),C("auPageChange",function(a){return f(i.customPage,a)||(i.customPage=a),a}),c(10,G,1,1,"ng-template",6),l()),e&2&&(m(2),d("auPage",i.customPage),m(7),d("auPage",i.customPage))},dependencies:[W,z,L,A,V,N],encapsulation:2})}};export{x as default};
