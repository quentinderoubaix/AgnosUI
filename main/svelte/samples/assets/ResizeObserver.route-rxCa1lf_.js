import{p as H,b as o,h as l,e as b,c as R,a as k,n as f,k as e,U as O,t as w,M as D,R as M,j as T,q as j,r as q}from"./AppCommon-CC-VkUgW.js";import{a as u}from"./actions-D-dhIHRy.js";import{t as S}from"./class-CcTXRr1B.js";import{s as U}from"./style-Bk7ejTAN.js";import{f as V}from"./index-client-CGLt60GO.js";import{c as $}from"./resizeObserver-Bzch6C5S.js";import{c as A}from"./directive-CKEccryv-BuQmRVBG.js";function B(n,i,t){f(i,e(t)+50)}function C(n,i,t){f(i,O(e(t)?e(t)-50:0))}var E=w('<div class="demo-resize-observer"><label for="resizable">Resizable textarea:</label> <textarea></textarea> <div>Textarea content height: <span id="dynamic-height"> </span>px</div> <button type="button" class="btn btn-primary m-2" id="decreaseHeight">Height --</button> <button type="button" class="btn btn-primary m-2" id="increaseHeight">Height ++</button></div>');function P(n,i){H(i,!0);const{dimensions$:t,directive:v}=$(),g=V(t);let r=D(()=>{var s;return((s=g.current)==null?void 0:s.contentRect.height)??0}),c=M(180);var h=E(),a=o(l(h),2);let m;b(()=>m=j(a,m,{name:"resizable",id:"resizable",rows:"6",cols:"50",value:`This simple example is using the resizeObserver feature from @agnos-ui/core and displays the height of the textarea below it.
Modify the height to more than 200 px and see the font size changing.`}));var p=o(a,2),x=o(l(p)),_=l(x),d=o(p,2);d.__click=[C,c,r];var z=o(d,2);z.__click=[B,c,r],b(()=>{S(a,"fontsize",e(r)&&e(r)>200),U(a,"height",e(c)+"px",void 0,!0),q(_,e(r))}),u(a,s=>v(s)),u(a,(s,y)=>A(s,y),()=>"form-control"),R(n,h),k()}T(["click"]);export{P as default};
