import{d as U,l as H,m as L,o as $}from"./chunk-JTOYIAPR.js";import{Ab as j,Bb as B,Cb as _,La as l,P as C,T as w,Ta as I,Ua as S,Ya as x,Za as O,_ as p,a as M,ab as N,b as E,eb as P,fb as k,ga as c,gb as r,ha as h,hb as s,ib as D,ka as F,lb as R,mb as m,nb as u,oa as V,pa as g,vb as a,wb as v,yb as T,zb as G}from"./chunk-EL7BL32O.js";var W=new w("");var q={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},_e=E(M({},q),{"[class.ng-submitted]":"isSubmitted"});function X(A,f){if(A&1){let e=R();r(0,"input",2),m("blur",function(){c(e);let i=u();return h(i.onTouched())})("mouseleave",function(){c(e);let i=u();return h(i._widget.actions.leave())})("mouseenter",function(){let i=c(e).$index,n=u();return h(n._widget.actions.hover(i+1))})("click",function(){let i=c(e).$index,n=u();return h(n._widget.actions.click(i+1))}),s()}if(A&2){let e=f.$index,t=u();O("checked",e+1===t.state().visibleRating),x("aria-label",t.getAriaLabel(e))}}var o=class o extends H{constructor(){super(...arguments);this.maxRating=g(void 0,{transform:$});this.rating=I(0);this.ariaLabel=g();this.className=g();this.hover=V();this.leave=V();this._widget=L({factory:U,widgetName:"rating",events:{onHover:e=>this.hover.emit(e),onLeave:e=>this.leave.emit(e),onRatingChange:e=>{this.rating.set(e),this.onChange(e)}}});this.onChange=e=>{};this.onTouched=()=>{}}writeValue(e){this._widget.patch({rating:e})}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._widget.patch({disabled:e})}trackByIndex(e){return e}getAriaLabel(e){return`${this._widget.stores.ariaLabel$()} star ${e+1}`}};o.\u0275fac=(()=>{let e;return function(i){return(e||(e=F(o)))(i||o)}})(),o.\u0275cmp=p({type:o,selectors:[["app-rating"]],inputs:{maxRating:[1,"maxRating"],rating:[1,"rating"],ariaLabel:[1,"ariaLabel"],className:[1,"className"]},outputs:{rating:"ratingChange",hover:"hover",leave:"leave"},standalone:!0,features:[B([{provide:W,useExisting:C(()=>o),multi:!0}]),S,_],decls:3,vars:2,consts:[[1,"rating"],["type","radio","name","rating-1",1,"mask","mask-star",3,"checked"],["type","radio","name","rating-1",1,"mask","mask-star",3,"blur","mouseleave","mouseenter","click","checked"]],template:function(t,i){t&1&&(r(0,"div",0),P(1,X,1,2,"input",1,i.trackByIndex,!0),s()),t&2&&(N(i.state().className),l(),k(i.state().stars))},encapsulation:2,changeDetection:0});var y=o;var d=class d{constructor(){this.rating=3;this.hovered=0;this.left=0}};d.\u0275fac=function(e){return new(e||d)},d.\u0275cmp=p({type:d,selectors:[["ng-component"]],standalone:!0,features:[_],decls:13,vars:4,consts:[[3,"ratingChange","hover","leave","rating"],["id","defaultRating"],["id","defaultHovered"],["id","defaultLeft"]],template:function(e,t){e&1&&(r(0,"app-rating",0),j("ratingChange",function(n){return G(t.rating,n)||(t.rating=n),n}),m("hover",function(n){return t.hovered=n})("leave",function(n){return t.left=n}),s(),r(1,"div"),a(2," Current rate: "),r(3,"span",1),a(4),s(),D(5,"br"),a(6," Hovered: "),r(7,"span",2),a(8),s(),D(9,"br"),a(10," Left: "),r(11,"span",3),a(12),s()()),e&2&&(T("rating",t.rating),l(4),v(t.rating),l(4),v(t.hovered),l(4),v(t.left))},dependencies:[y],encapsulation:2});var b=d;export{b as default};