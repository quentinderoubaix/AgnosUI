import{q as I,y as q}from"./chunk-JRRF5PEA.js";import{W as P,_ as W}from"./chunk-SBJUXELN.js";import"./chunk-DMXSLBKY.js";import{$a as p,Bb as g,Ib as u,La as r,Oa as x,Ta as v,Ua as _,W as R,Ya as d,_ as m,aa as S,ac as y,bb as b,cb as D,dc as M,hb as h,ib as F,jb as w,kb as i,lb as o,mb as N,qb as T,ra as l,yb as E,zb as H}from"./chunk-WXQMDDQY.js";function A(t,a){}function B(t,a){if(t&1&&(i(0,"span",1),d(1,A,0,0,"ng-template",2),o()),t&2){let e=a.$implicit,n=T();r(),p("auSlot",n.state().star)("auSlotProps",e)}}var s=class t{constructor(){this.templateRef=R(x)}static ngTemplateContextGuard(a,e){return!0}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275dir=S({type:t,selectors:[["ng-template","appRatingStar",""]],standalone:!0})}},f=class t extends P{constructor(){super();this._widget=I({factory:q,widgetName:"rating",defaultConfig:{readonly:!0},events:{onHover:()=>{},onLeave:()=>{},onRatingChange:()=>{}}});this.className=l();this.rating=l.required({transform:y});this.maxRating=l.required({transform:y});this.star=l();this.slotStarFromContent=v(s);M(()=>{this._widget.patchSlots({star:this.slotStarFromContent()?.templateRef})},{allowSignalWrites:!0})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-rating-readonly"]],contentQueries:function(n,c,Q){n&1&&E(Q,c.slotStarFromContent,s,5),n&2&&H()},inputs:{className:[1,"className"],rating:[1,"rating"],maxRating:[1,"maxRating"],star:[1,"star"]},standalone:!0,features:[_,u],decls:3,vars:2,consts:[[1,"d-inline-flex","au-rating"],[1,"au-rating-star"],[3,"auSlot","auSlotProps"]],template:function(n,c){n&1&&(i(0,"div",0),F(1,B,2,2,"span",1,h),o()),n&2&&(D(c.state().className),r(),w(c.state().stars))},dependencies:[W],encapsulation:2,changeDetection:0})}};function j(t,a){if(t&1&&(i(0,"span",4),g(1,"\u2605"),o()),t&2){let e=a.fill,n=a.index;b("filled",e===100)("bad",n<3)}}var C=class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=m({type:t,selectors:[["ng-component"]],standalone:!0,features:[u],decls:7,vars:4,consts:[[3,"rating","maxRating"],[1,"mt-2"],["className","rating-custom",3,"rating","maxRating"],["appRatingStar",""],[1,"star"]],template:function(e,n){e&1&&(i(0,"div"),g(1,"The readonly rating without slot:"),o(),N(2,"app-rating-readonly",0),i(3,"div",1),g(4,"Using a slot to customize the display:"),o(),i(5,"app-rating-readonly",2),d(6,j,2,4,"ng-template",3),o()),e&2&&(r(2),p("rating",7)("maxRating",10),r(3),p("rating",7)("maxRating",10))},dependencies:[f,s],styles:[`.rating-custom .star{font-size:150%;color:#b0c4de}.rating-custom .filled{color:#1e90ff}.rating-custom .bad{color:#deb0b0}.rating-custom .filled.bad{color:#ff1e1e}
`],encapsulation:2})}};export{C as default};
