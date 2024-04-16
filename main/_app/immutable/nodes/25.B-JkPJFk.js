import{s}from"../chunks/scheduler.DHbooxev.js";import{S as d,i as l,c as p,b as m,m as h,t as f,a as u,e as g}from"../chunks/index.BK_xdHAZ.js";import{P as y}from"../chunks/Playground.E9F6XIDY.js";import{_ as c}from"../chunks/preload-helper.Dch09mLN.js";import{n as a}from"../chunks/stores.XduovgBS.js";import{c as I}from"../chunks/collapse-CVjUhnIz.CKGzP4fg.js";const b={closeOthers:!1,onShown:a,onHidden:a,className:"",itemId:"",itemDestroyOnHide:!0,itemDisabled:!1,itemVisible:!1,itemAnimated:!0,itemTransition:async()=>{},itemHeadingTag:"",onItemShown:a,onItemHidden:a,onItemVisibleChange:a,slotItemStructure:void 0,slotItemBody:void 0,slotItemHeader:void 0,itemClass:"",itemHeaderClass:"",itemButtonClass:"",itemBodyContainerClass:"",itemBodyClass:""};function v(){return{...b}}const w={itemTransition:I};function C(){return{...v(),...w}}const V={componentName:"accordion",style:"bootstrap",sampleName:"playground",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"playground.component.ts",files:{"playground.component.ts":()=>c(()=>import("../chunks/playground.route.DqM2R9kP.js"),[],import.meta.url).then(t=>t.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"playground.tsx",files:{"playground.tsx":()=>c(()=>import("../chunks/Playground.route.Czqvs7sJ.js"),[],import.meta.url).then(t=>t.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"playground.svelte",files:{"playground.svelte":()=>c(()=>import("../chunks/Playground.route.ZD0HxjwP.js"),[],import.meta.url).then(t=>t.default)}}}},N=[{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"closeOthers",description:"If `true`, only one accordion-item at the time can stay open.",fileName:"core/src/components/accordion/accordion.ts",start:{line:41,character:2,position:1877},end:{line:41,character:23,position:1898},type:"boolean",defaultValue:"false"},{name:"itemAnimated",description:"If `true`, accordion-item will be animated.\n\nIt is a prop of the accordion-item.",fileName:"core/src/components/accordion/accordion.ts",start:{line:85,character:2,position:3109},end:{line:85,character:24,position:3131},type:"boolean",defaultValue:"true"},{name:"itemBodyClass",description:`CSS classes to add on the accordion-item body DOM element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:163,character:2,position:5397},end:{line:163,character:24,position:5419},type:"string",defaultValue:"''"},{name:"itemBodyContainerClass",description:`CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:157,character:2,position:5247},end:{line:157,character:33,position:5278},type:"string",defaultValue:"''"},{name:"itemButtonClass",description:`CSS classes to add on the accordion-item toggle button DOM element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:150,character:2,position:4998},end:{line:150,character:26,position:5022},type:"string",defaultValue:"''"},{name:"itemClass",description:`CSS classes to add on the accordion-item DOM element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:138,character:2,position:4707},end:{line:138,character:20,position:4725},type:"string",defaultValue:"''"},{name:"itemDestroyOnHide",description:"If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.\n\nIt is a prop of the accordion-item.",fileName:"core/src/components/accordion/accordion.ts",start:{line:66,character:2,position:2572},end:{line:66,character:29,position:2599},type:"boolean",defaultValue:"true"},{name:"itemDisabled",description:`If \`true\`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:73,character:2,position:2802},end:{line:73,character:24,position:2824},type:"boolean",defaultValue:"false"},{name:"itemHeaderClass",description:`CSS classes to add on the accordion-item header DOM element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:144,character:2,position:4846},end:{line:144,character:26,position:4870},type:"string",defaultValue:"''"},{name:"itemHeadingTag",description:`The html tag to use for the accordion-item-header.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:169,character:2,position:5530},end:{line:169,character:25,position:5553},type:"string",defaultValue:"''"},{name:"itemId",description:`The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:60,character:2,position:2351},end:{line:60,character:17,position:2366},type:"string",defaultValue:"''"},{name:"itemTransition",description:`The transition to use for the accordion-item body-container when the accordion-item is toggled.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:91,character:2,position:3287},end:{line:91,character:31,position:3316},type:'(element: SSRHTMLElement, direction: "show" | "hide", animated: boolean, signal: AbortSignal, context: object) => Promise<void>',defaultValue:"async () => {}"},{name:"itemVisible",description:"If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).\n\nIt is a prop of the accordion-item.",fileName:"core/src/components/accordion/accordion.ts",start:{line:79,character:2,position:2984},end:{line:79,character:23,position:3005},type:"boolean",defaultValue:"false"},{name:"onHidden",description:`An event fired when an item is hidden.

Event payload is the id of the item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:53,character:2,position:2131},end:{line:53,character:37,position:2166},type:"(itemId: string) => void",defaultValue:"() => {}"},{name:"onItemHidden",description:`An event fired when an item is hidden.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:103,character:2,position:3537},end:{line:103,character:27,position:3562},type:"() => void",defaultValue:"() => {}"},{name:"onItemShown",description:`An event fired when an item is shown.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:97,character:2,position:3414},end:{line:97,character:26,position:3438},type:"() => void",defaultValue:"() => {}"},{name:"onItemVisibleChange",description:`An event fired when the \`visible\` value changes.

Event payload is the new value of visible.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:111,character:2,position:3722},end:{line:111,character:50,position:3770},type:"(visible: boolean) => void",defaultValue:"() => {}"},{name:"onShown",description:`An event fired when an item is shown.

Event payload is the id of the item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:47,character:2,position:1997},end:{line:47,character:36,position:2031},type:"(itemId: string) => void",defaultValue:"() => {}"},{name:"slotItemBody",description:`Content present in the accordion body.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:126,character:2,position:4366},end:{line:126,character:50,position:4414},type:"SlotContent<AccordionItemContext>",defaultValue:"undefined"},{name:"slotItemHeader",description:`Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:132,character:2,position:4543},end:{line:132,character:52,position:4593},type:"SlotContent<AccordionItemContext>",defaultValue:"undefined"},{name:"slotItemStructure",description:`Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains \`slotItemHeader\`), while the accordion-item body container contains the accordion body (that contains \`slotItemBody\`).
The itemTransition it applied on this element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:120,character:2,position:4214},end:{line:120,character:55,position:4267},type:"SlotContent<AccordionItemContext>",defaultValue:"undefined"}],S=[{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"itemsWidget",description:"Array containing all the accordion-items contained in the accordion.",fileName:"core/src/components/accordion/accordion.ts",start:{line:176,character:2,position:5710},end:{line:176,character:37,position:5745},type:"AccordionItemWidget[]"}],_=[{name:"collapse",description:`Given the itemId, will collapse the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:191,character:2,position:6085},end:{line:191,character:33,position:6116},type:"(itemId: string) => void"},{name:"collapseAll",description:"It will collapse all the accordion-items in the accordion.",fileName:"core/src/components/accordion/accordion.ts",start:{line:207,character:2,position:6518},end:{line:207,character:22,position:6538},type:"() => void"},{name:"expand",description:`Given the itemId, will expand the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:185,character:2,position:5917},end:{line:185,character:31,position:5946},type:"(itemId: string) => void"},{name:"expandAll",description:"It will expand all the items in the accordion.\n\nIf `closeOthers` is `true` it will expand only the last accordion-item.",fileName:"core/src/components/accordion/accordion.ts",start:{line:203,character:2,position:6425},end:{line:203,character:20,position:6443},type:"() => void"},{name:"registerItem",description:"Creates a new accordionItem.",fileName:"core/src/components/accordion/accordion.ts",start:{line:211,character:2,position:6583},end:{line:211,character:82,position:6663},type:"(itemConfig?: PropsConfig<AccordionItemProps>) => AccordionItemWidget"},{name:"toggle",description:`Given the itemId, will toggle the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:197,character:2,position:6253},end:{line:197,character:31,position:6282},type:"(itemId: string) => void"}],A={props:N,state:S,api:_};function P(t){let o,n;return o=new y({props:{sample:V,config:C(),doc:A,listPropsValues:t[0]}}),{c(){p(o.$$.fragment)},l(e){m(o.$$.fragment,e)},m(e,i){h(o,e,i),n=!0},p(e,[i]){const r={};i&1&&(r.listPropsValues=e[0]),o.$set(r)},i(e){n||(f(o.$$.fragment,e),n=!0)},o(e){u(o.$$.fragment,e),n=!1},d(e){g(o,e)}}}function T(t,o,n){let{listPropsValues:e={onShown:["noop","log"],onHidden:["noop","log"],itemTransition:["collapse","fade"],onItemShown:["noop","log"],onItemHidden:["noop","log"],onItemVisibleChange:["noop","log"]}}=o;return t.$$set=i=>{"listPropsValues"in i&&n(0,e=i.listPropsValues)},[e]}class B extends d{constructor(o){super(),l(this,o,T,P,s,{listPropsValues:0})}}export{B as component};
