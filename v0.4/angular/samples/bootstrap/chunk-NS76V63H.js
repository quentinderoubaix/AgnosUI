import{o as P,w as k}from"./chunk-7UZCEIVY.js";import{W as Q,Z as g,_ as B}from"./chunk-L7LSTPNE.js";import"./chunk-RIVCGYQY.js";import{$a as p,Bb as m,Ib as d,Ma as s,Pa as v,Xa as x,Ya as S,Z as R,ba as c,bb as l,da as C,db as _,eb as F,jb as D,kb as T,lb as b,mb as i,na as h,nb as r,ob as w,sb as E,wb as N,yb as I,zb as M}from"./chunk-DSSB452B.js";function W(e,t){}function j(e,t){if(e&1&&(i(0,"span",1),p(1,W,0,0,"ng-template",2),r()),e&2){let u=t.$implicit,a=E();s(),l("auSlot",a.state().star)("auSlotProps",u)}}var f=(()=>{let t=class t{constructor(){this.templateRef=R(v)}static ngTemplateContextGuard(a,n){return!0}};t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=C({type:t,selectors:[["ng-template","appRatingStar",""]],standalone:!0});let e=t;return e})(),z=(()=>{let t=class t extends Q{constructor(){super(...arguments),this._widget=P({factory:k,widgetName:"rating",defaultConfig:{readonly:!0},events:{onHover:()=>{},onLeave:()=>{},onRatingChange:()=>{}}})}ngAfterContentChecked(){this._widget.patchSlots({star:this.slotStarFromContent?.templateRef})}};t.\u0275fac=(()=>{let a;return function(o){return(a||(a=h(t)))(o||t)}})(),t.\u0275cmp=c({type:t,selectors:[["app-rating-readonly"]],contentQueries:function(n,o,A){if(n&1&&N(A,f,5),n&2){let y;I(y=M())&&(o.slotStarFromContent=y.first)}},inputs:{star:"star",rating:[2,"rating","rating",g],maxRating:[2,"maxRating","maxRating",g],className:"className"},standalone:!0,features:[S,x,d],decls:3,vars:2,consts:[[1,"d-inline-flex","au-rating"],[1,"au-rating-star"],[3,"auSlot","auSlotProps"]],template:function(n,o){n&1&&(i(0,"div",0),T(1,j,2,2,"span",1,D),r()),n&2&&(F(o.state().className),s(),b(o.state().stars))},dependencies:[B],encapsulation:2,changeDetection:0});let e=t;return e})();function q(e,t){if(e&1&&(i(0,"span",4),m(1,"\u2605"),r()),e&2){let u=t.fill,a=t.index;_("filled",u===100)("bad",a<3)}}var Y=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c({type:t,selectors:[["ng-component"]],standalone:!0,features:[d],decls:7,vars:4,consts:[[3,"rating","maxRating"],[1,"mt-2"],["className","rating-custom",3,"rating","maxRating"],["appRatingStar",""],[1,"star"]],template:function(n,o){n&1&&(i(0,"div"),m(1,"The readonly rating without slot:"),r(),w(2,"app-rating-readonly",0),i(3,"div",1),m(4,"Using a slot to customize the display:"),r(),i(5,"app-rating-readonly",2),p(6,q,2,4,"ng-template",3),r()),n&2&&(s(2),l("rating",7)("maxRating",10),s(3),l("rating",7)("maxRating",10))},dependencies:[z,f],styles:[`.rating-custom .star{font-size:150%;color:#b0c4de}.rating-custom .filled{color:#1e90ff}.rating-custom .bad{color:#deb0b0}.rating-custom .filled.bad{color:#ff1e1e}
`],encapsulation:2});let e=t;return e})();export{Y as default};