import{s}from"../chunks/scheduler.sZeTUDDy.js";import{S as l,i as c,c as p,b as m,m as d,t as u,a as h,e as f}from"../chunks/index.D-uqoLVu.js";import{P as b}from"../chunks/Playground.DJ_xy523.js";import{_ as a}from"../chunks/preload-helper.Dch09mLN.js";import{e as g}from"../chunks/Alert.Bt_4gjRz.js";const y={componentName:"alert",style:"bootstrap",sampleName:"playground",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"playground.component.ts",files:{"playground.component.ts":()=>a(()=>import("../chunks/playground.route.B42C0qKA.js"),[],import.meta.url).then(o=>o.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"playground.tsx",files:{"playground.tsx":()=>a(()=>import("../chunks/Playground.route.MGVZ9X7P.js"),[],import.meta.url).then(o=>o.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"playground.svelte",files:{"playground.svelte":()=>a(()=>import("../chunks/Playground.route.CBwVFdJs.js"),[],import.meta.url).then(o=>o.default)}}}},_=[{name:"animated",description:"If `true`, alert closing will be animated.\n\nAnimation is triggered  when clicked on the close button (×),\nvia the `.close()` function or the visible prop is changed",fileName:"core/src/components/alert/common.ts",start:{line:100,character:2,position:2510},end:{line:100,character:20,position:2528},type:"boolean",defaultValue:"true"},{name:"animatedOnInit",description:"If `true`, alert opening will be animated.\n\nAnimation is triggered  when the `.open()` function is called\nor the visible prop is changed",fileName:"core/src/components/alert/common.ts",start:{line:91,character:2,position:2265},end:{line:91,character:26,position:2289},type:"boolean",defaultValue:"false"},{name:"ariaCloseButtonLabel",description:"Accessibility close button label",fileName:"core/src/components/alert/common.ts",start:{line:30,character:2,position:1015},end:{line:30,character:31,position:1044},type:"string",defaultValue:"'Close'"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:7,character:2,position:143},end:{line:7,character:20,position:161},type:"string",defaultValue:"''"},{name:"dismissible",description:"If `true`, alert can be dismissed by the user.\nThe close button (×) will be displayed and you can be notified of the event with the (close) output.",fileName:"core/src/components/alert/common.ts",start:{line:17,character:2,position:807},end:{line:17,character:23,position:828},type:"boolean",defaultValue:"true"},{name:"onHidden",description:"Callback called when the alert is hidden.",fileName:"core/src/components/alert/common.ts",start:{line:59,character:2,position:1617},end:{line:59,character:23,position:1638},type:"() => void",defaultValue:"() => {}"},{name:"onShown",description:"Callback called when the alert is shown.",fileName:"core/src/components/alert/common.ts",start:{line:69,character:2,position:1749},end:{line:69,character:22,position:1769},type:"() => void",defaultValue:"() => {}"},{name:"onVisibleChange",description:"Callback called when the alert visibility changed.",fileName:"core/src/components/alert/common.ts",start:{line:49,character:2,position:1461},end:{line:49,character:46,position:1505},type:"(visible: boolean) => void",defaultValue:"() => {}"},{name:"transition",description:"The transition function will be executed when the alert is displayed or hidden.\n\nDepending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.",fileName:"core/src/components/alert/common.ts",start:{line:81,character:2,position:2045},end:{line:81,character:27,position:2070},type:'(element: SSRHTMLElement, direction: "show" | "hide", animated: boolean, signal: AbortSignal, context: object) => Promise<void>',defaultValue:"async () => {}"},{name:"visible",description:"If `true` the alert is visible to the user",fileName:"core/src/components/alert/common.ts",start:{line:23,character:2,position:916},end:{line:23,character:19,position:933},type:"boolean",defaultValue:"true"}],v=[{name:"ariaCloseButtonLabel",description:"Accessibility close button label",fileName:"core/src/components/alert/common.ts",start:{line:30,character:2,position:1015},end:{line:30,character:31,position:1044},type:"string"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:7,character:2,position:143},end:{line:7,character:20,position:161},type:"string"},{name:"dismissible",description:"If `true`, alert can be dismissed by the user.\nThe close button (×) will be displayed and you can be notified of the event with the (close) output.",fileName:"core/src/components/alert/common.ts",start:{line:17,character:2,position:807},end:{line:17,character:23,position:828},type:"boolean"},{name:"hidden",description:"Is `true` when the alert is hidden. Compared to `visible`, this is updated after the transition is executed.",fileName:"core/src/components/alert/common.ts",start:{line:37,character:2,position:1247},end:{line:37,character:18,position:1263},type:"boolean"},{name:"visible",description:"If `true` the alert is visible to the user",fileName:"core/src/components/alert/common.ts",start:{line:23,character:2,position:916},end:{line:23,character:19,position:933},type:"boolean"}],w=[{name:"close",description:"Triggers alert closing programmatically (same as clicking on the close button (×)).",fileName:"core/src/components/alert/common.ts",start:{line:107,character:2,position:2665},end:{line:107,character:16,position:2679},type:"() => void"},{name:"open",description:"Triggers the alert to be displayed for the user.",fileName:"core/src/components/alert/common.ts",start:{line:112,character:2,position:2745},end:{line:112,character:15,position:2758},type:"() => void"}],N={props:_,state:v,api:w};function V(o){let t,n;return t=new b({props:{sample:y,config:g(),doc:N,listPropsValues:o[0]}}),{c(){p(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,i){d(t,e,i),n=!0},p(e,[i]){const r={};i&1&&(r.listPropsValues=e[0]),t.$set(r)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){f(t,e)}}}function P(o,t,n){let{listPropsValues:e={onVisibleChange:["noop","log"],onShown:["noop","log"],transition:["fade"],onHidden:["noop","log"]}}=t;return o.$$set=i=>{"listPropsValues"in i&&n(0,e=i.listPropsValues)},[e]}class $ extends l{constructor(t){super(),c(this,t,P,V,s,{listPropsValues:0})}}export{$ as component};