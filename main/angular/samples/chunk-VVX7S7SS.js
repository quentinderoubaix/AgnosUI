import{H as V,o as S,p as E,q as I,r as D,s as A}from"./chunk-DDPBEREB.js";import"./chunk-UQV7GR2W.js";import{$a as d,Bb as f,Cb as g,Db as b,Eb as y,Jb as T,Ma as m,Ya as _,ba as C,fa as s,ga as c,gb as v,kb as r,lb as l,mb as h,ob as w,rb as P,sb as p}from"./chunk-HHNAUMXU.js";function z(e,n){e&1&&g(0,"Prev")}function k(e,n){e&1&&g(0,"Next")}function L(e,n){if(e&1&&g(0),e&2){let o=n.displayedPage,t=p();b(t.getPageSymbol(o))}}function N(e,n){if(e&1){let o=w();r(0,"li",7)(1,"div",8)(2,"label",9),g(3,"Page"),l(),r(4,"input",10,11),P("keyup.enter",function(){s(o);let i=f(5),a=p().widget,u=p();return c(u.handleTheChange(i,a))})("blur",function(){s(o);let i=f(5),a=p().widget,u=p();return c(u.handleTheChange(i,a))})("input",function(){s(o);let i=f(5),a=p(2);return c(a.formatInput(i))}),l(),r(6,"span",12),g(7),l()()()}if(e&2){let o=p().state;m(4),d("value",o.page),m(3),y(" of ",o.pages.length,"")}}function F(e,n){if(e&1&&_(0,N,8,2,"li",6),e&2){let o=n.state;v(0,o.pages.length>0?0:-1)}}var M=/[^0-9]/g,U=(()=>{let n=class n{constructor(){this.customPage=4}getPageSymbol(t){return["A","B","C","D","E","F"][t-1]}formatInput(t){t.value=t.value.replace(M,"")}handleTheChange(t,i){let a=t.value,u=parseInt(a);i.actions.select(u),t.value=i.stores.page$().toString()}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=C({type:n,selectors:[["ng-component"]],standalone:!0,features:[T],decls:11,vars:2,consts:[["auPagination","","auCollectionSize","60","auAriaLabel","Page navigation with customized links",3,"auPage","auPageChange"],["auPaginationPrevious",""],["auPaginationNext",""],["auPaginationNumber",""],["auPagination","","auCollectionSize","60","auAriaLabel","Page navigation with customized pages",3,"auPage","auPageChange"],["auPaginationPages",""],["class","au-custom-pages-item"],[1,"au-custom-pages-item"],[1,"mb-3","d-flex","flex-nowrap","px-2"],["id","paginationInputLabel","for","paginationInput",1,"col-form-label","me-2","ms-1"],["type","text","inputmode","numeric","pattern","[0-9]*","id","paginationInput","aria-labelledby","paginationInputLabel paginationDescription",1,"form-control","custom-pages-input",2,"width","2.5rem",3,"value","keyup.enter","blur","input"],["i",""],["id","paginationDescription",1,"col-form-label","text-nowrap","px-2"]],template:function(i,a){i&1&&(r(0,"p"),g(1,"A pagination with customized links:"),l(),r(2,"nav",0),P("auPageChange",function(x){return a.customPage=x}),_(3,z,1,0,"ng-template",1)(4,k,1,0,"ng-template",2)(5,L,1,1,"ng-template",3),l(),h(6,"hr"),r(7,"p"),g(8,"A pagination with customized pages:"),l(),r(9,"nav",4),P("auPageChange",function(x){return a.customPage=x}),_(10,F,1,1,"ng-template",5),l()),i&2&&(m(2),d("auPage",a.customPage),m(7),d("auPage",a.customPage))},dependencies:[V,A,S,E,I,D],encapsulation:2});let e=n;return e})();export{U as default};
