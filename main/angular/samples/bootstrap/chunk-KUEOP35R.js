import{q as I,z as q}from"./chunk-GDIIEU3W.js";import{aa as W,ea as H}from"./chunk-AWWQU5ES.js";import"./chunk-RIDGTTAP.js";import{Ab as M,Cb as g,Jb as u,La as r,Oa as x,Ta as v,Va as _,W as C,Za as d,_ as m,aa as R,ab as p,bc as y,cb as b,db as D,ec as P,ib as F,jb as h,kb as N,lb as i,mb as o,nb as T,ra as l,rb as w,zb as E}from"./chunk-DKG3CSSF.js";function A(e,a){}function B(e,a){if(e&1&&(i(0,"span",1),d(1,A,0,0,"ng-template",2),o()),e&2){let t=a.$implicit,n=w();r(),p("auSlot",n.state.star())("auSlotProps",t)}}var s=class e{constructor(){this.templateRef=C(x)}static ngTemplateContextGuard(a,t){return!0}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275dir=R({type:e,selectors:[["ng-template","appRatingStar",""]],standalone:!0})}},f=class e extends W{constructor(){let t=I({factory:q,widgetName:"rating",defaultConfig:{readonly:!0},slotTemplates:()=>({star:this.slotStarFromContent()?.templateRef})});super(t);this.className=l();this.rating=l.required({transform:y});this.maxRating=l.required({transform:y});this.star=l();this.slotStarFromContent=v(s);P(()=>{t.updateSlots()},{allowSignalWrites:!0})}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["app-rating-readonly"]],contentQueries:function(n,c,Q){n&1&&E(Q,c.slotStarFromContent,s,5),n&2&&M()},inputs:{className:[1,"className"],rating:[1,"rating"],maxRating:[1,"maxRating"],star:[1,"star"]},standalone:!0,features:[_,u],decls:3,vars:2,consts:[[1,"d-inline-flex","au-rating"],[1,"au-rating-star"],[3,"auSlot","auSlotProps"]],template:function(n,c){n&1&&(i(0,"div",0),h(1,B,2,2,"span",1,F),o()),n&2&&(D(c.state.className()),r(),N(c.state.stars()))},dependencies:[H],encapsulation:2,changeDetection:0})}};function j(e,a){if(e&1&&(i(0,"span",4),g(1,"\u2605"),o()),e&2){let t=a.fill,n=a.index;b("filled",t===100)("bad",n<3)}}var S=class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["ng-component"]],standalone:!0,features:[u],decls:7,vars:4,consts:[[3,"rating","maxRating"],[1,"mt-2"],["className","rating-custom",3,"rating","maxRating"],["appRatingStar",""],[1,"star"]],template:function(t,n){t&1&&(i(0,"div"),g(1,"The readonly rating without slot:"),o(),T(2,"app-rating-readonly",0),i(3,"div",1),g(4,"Using a slot to customize the display:"),o(),i(5,"app-rating-readonly",2),d(6,j,2,4,"ng-template",3),o()),t&2&&(r(2),p("rating",7)("maxRating",10),r(3),p("rating",7)("maxRating",10))},dependencies:[f,s],styles:[`.rating-custom .star{font-size:150%;color:#b0c4de}.rating-custom .filled{color:#1e90ff}.rating-custom .bad{color:#deb0b0}.rating-custom .filled.bad{color:#ff1e1e}
`],encapsulation:2})}};export{S as default};