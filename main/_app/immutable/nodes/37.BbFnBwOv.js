import{s,n as i}from"../chunks/scheduler.DHbooxev.js";import{S as c,i as p,c as l,b as m,m as u,t as d,a as g,e as f}from"../chunks/index.BK_xdHAZ.js";import{P as b}from"../chunks/Playground.KscJA6F9.js";import{_ as o}from"../chunks/preload-helper.Dch09mLN.js";import"../chunks/stores.D6Weu2dJ.js";const h={min:0,max:100,value:0,ariaLabel:"Progressbar",className:"",ariaValueTextFn:()=>{}};function y(){return{...h}}const v={slotStructure:void 0,slotDefault:void 0,height:"",striped:!1,animated:!1,type:void 0};function _(){return{...y(),...v}}const N={componentName:"progressbar",style:"bootstrap",sampleName:"playground",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"playground.component.ts",files:{"playground.component.ts":()=>o(()=>import("../chunks/playground.route.sTE1g4yr.js"),[],import.meta.url).then(t=>t.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"playground.tsx",files:{"playground.tsx":()=>o(()=>import("../chunks/Playground.route.CJZuZk9y.js"),[],import.meta.url).then(t=>t.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"playground.svelte",files:{"playground.svelte":()=>o(()=>import("../chunks/Playground.route.CKr6Fgyt.js"),[],import.meta.url).then(t=>t.default)}}}},x=[{name:"ariaLabel",description:"The aria label.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:30,character:2,position:868},end:{line:30,character:20,position:886},type:"string",defaultValue:"'Progressbar'"},{name:"ariaValueTextFn",description:"Return the value for the 'aria-valuetext' attribute.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:66,character:2,position:1675},end:{line:66,character:91,position:1764},type:"(value: number, minimum: number, maximum: number) => string",defaultValue:"() => undefined"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"max",description:"The maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:21,character:2,position:755},end:{line:21,character:14,position:767},type:"number",defaultValue:"100"},{name:"min",description:"The minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:16,character:2,position:686},end:{line:16,character:14,position:698},type:"number",defaultValue:"0"},{name:"value",description:"The current value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:26,character:2,position:822},end:{line:26,character:16,position:836},type:"number",defaultValue:"0"}],P=[{name:"ariaLabel",description:"The aria label.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:30,character:2,position:868},end:{line:30,character:20,position:886},type:"string"},{name:"ariaValueText",description:"The aria value text.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:56,character:2,position:1391},end:{line:56,character:36,position:1425},type:"string"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"finished",description:"`true` if the value has reached its maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:52,character:2,position:1336},end:{line:52,character:20,position:1354},type:"boolean"},{name:"max",description:"The maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:21,character:2,position:755},end:{line:21,character:14,position:767},type:"number"},{name:"min",description:"The minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:16,character:2,position:686},end:{line:16,character:14,position:698},type:"number"},{name:"percentage",description:"Percentage of completion.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:44,character:2,position:1169},end:{line:44,character:21,position:1188},type:"number"},{name:"started",description:"`true` if the value is above its minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:48,character:2,position:1252},end:{line:48,character:19,position:1269},type:"boolean"},{name:"value",description:"The current value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:26,character:2,position:822},end:{line:26,character:16,position:836},type:"number"}],T=[],V={props:x,state:P,api:T};function $(t){let e,a;return e=new b({props:{sample:N,config:_(),doc:V}}),{c(){l(e.$$.fragment)},l(r){m(e.$$.fragment,r)},m(r,n){u(e,r,n),a=!0},p:i,i(r){a||(d(e.$$.fragment,r),a=!0)},o(r){g(e.$$.fragment,r),a=!1},d(r){f(e,r)}}}class R extends c{constructor(e){super(),p(this,e,null,$,s,{})}}export{R as component};