import{G as Q,O as B,R as P,T as f,V as k}from"./chunk-UQV7GR2W.js";import{$a as l,Ab as H,Cb as m,Jb as d,Ma as s,Va as v,Wa as x,Ya as p,_ as S,aa as g,ba as c,bb as F,cb as _,da as C,ha as h,hb as D,ib as T,jb as I,kb as i,lb as r,mb as b,sb as w,wb as E,xb as N,zb as M}from"./chunk-HHNAUMXU.js";function j(e,t){}function q(e,t){if(e&1&&(i(0,"span",1),p(1,j,0,0,"ng-template",2),r()),e&2){let u=t.$implicit,a=w();s(),l("auSlot",a.state().slotStar)("auSlotProps",u)}}var y=(()=>{let t=class t{constructor(){this.templateRef=S(E)}static ngTemplateContextGuard(a,n){return!0}};t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=C({type:t,selectors:[["ng-template","appRatingStar",""]],standalone:!0});let e=t;return e})(),z=(()=>{let t=class t extends B{constructor(){super(...arguments),this._widget=P({factory:Q,widgetName:"rating",defaultConfig:{readonly:!0},events:{onHover:()=>{},onLeave:()=>{},onRatingChange:()=>{}}})}ngAfterContentChecked(){this._widget.patchSlots({slotStar:this.slotStarFromContent?.templateRef})}};t.\u0275fac=(()=>{let a;return function(o){return(a||(a=h(t)))(o||t)}})(),t.\u0275cmp=c({type:t,selectors:[["app-rating-readonly"]],contentQueries:function(n,o,A){if(n&1&&N(A,y,5),n&2){let R;M(R=H())&&(o.slotStarFromContent=R.first)}},inputs:{slotStar:"slotStar",rating:[g.HasDecoratorInputTransform,"rating","rating",f],maxRating:[g.HasDecoratorInputTransform,"maxRating","maxRating",f],className:"className"},standalone:!0,features:[x,v,d],decls:3,vars:2,consts:[[1,"d-inline-flex","au-rating"],[1,"au-rating-star"],[3,"auSlot","auSlotProps"],["class","au-rating-star"]],template:function(n,o){n&1&&(i(0,"div",0),T(1,q,2,2,"span",3,D),r()),n&2&&(_(o.state().className),s(),I(o.state().stars))},dependencies:[k],encapsulation:2,changeDetection:0});let e=t;return e})();function G(e,t){if(e&1&&(i(0,"span",4),m(1,"\u2605"),r()),e&2){let u=t.fill,a=t.index;F("filled",u===100)("bad",a<3)}}var Z=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c({type:t,selectors:[["ng-component"]],standalone:!0,features:[d],decls:7,vars:4,consts:[[3,"rating","maxRating"],[1,"mt-2"],["className","rating-custom",3,"rating","maxRating"],["appRatingStar",""],[1,"star"]],template:function(n,o){n&1&&(i(0,"div"),m(1,"The readonly rating without slot:"),r(),b(2,"app-rating-readonly",0),i(3,"div",1),m(4,"Using a slot to customize the display:"),r(),i(5,"app-rating-readonly",2),p(6,G,2,4,"ng-template",3),r()),n&2&&(s(2),l("rating",7)("maxRating",10),s(3),l("rating",7)("maxRating",10))},dependencies:[z,y],styles:[`.rating-custom .star{font-size:150%;color:#b0c4de}.rating-custom .filled{color:#1e90ff}.rating-custom .bad{color:#deb0b0}.rating-custom .filled.bad{color:#ff1e1e}
`],encapsulation:2});let e=t;return e})();export{Z as default};
