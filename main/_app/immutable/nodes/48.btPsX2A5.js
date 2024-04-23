import{s as i,n as s}from"../chunks/scheduler.DHbooxev.js";import{S as r,i as c,c as l,b as p,m,t as d,a as h,e as u}from"../chunks/index.BK_xdHAZ.js";import{A as f}from"../chunks/ApiDoc.DLphaBr_.js";const b=[{name:"animated",description:"If `true`, alert closing will be animated.\n\nAnimation is triggered  when clicked on the close button (×),\nvia the `.close()` function or the visible prop is changed",fileName:"core/src/components/alert/common.ts",start:{line:72,character:2,position:2257},end:{line:72,character:20,position:2275},type:"boolean",defaultValue:"true"},{name:"animatedOnInit",description:"If `true`, alert opening will be animated.\n\nAnimation is triggered  when the `.open()` function is called\nor the visible prop is changed",fileName:"core/src/components/alert/common.ts",start:{line:65,character:2,position:2041},end:{line:65,character:26,position:2065},type:"boolean",defaultValue:"false"},{name:"ariaCloseButtonLabel",description:"Accessibility close button label",fileName:"core/src/components/alert/common.ts",start:{line:26,character:2,position:1016},end:{line:26,character:31,position:1045},type:"string",defaultValue:"'Close'"},{name:"autoHide",description:"If `true` automatically hides the toast after the delay.",fileName:"core/src/components/toast/toast.ts",start:{line:16,character:2,position:862},end:{line:16,character:20,position:880},type:"boolean",defaultValue:"true"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"delay",description:"Delay in milliseconds before hiding the toast.",fileName:"core/src/components/toast/toast.ts",start:{line:20,character:2,position:943},end:{line:20,character:16,position:957},type:"number",defaultValue:"5000"},{name:"dismissible",description:"If `true`, alert can be dismissed by the user.\nThe close button (×) will be displayed and you can be notified of the event with the (close) output.",fileName:"core/src/components/alert/common.ts",start:{line:17,character:2,position:869},end:{line:17,character:23,position:890},type:"boolean",defaultValue:"true"},{name:"onHidden",description:"Callback called when the alert is hidden.",fileName:"core/src/components/alert/common.ts",start:{line:45,character:2,position:1512},end:{line:45,character:23,position:1533},type:"() => void",defaultValue:"() => {}"},{name:"onShown",description:"Callback called when the alert is shown.",fileName:"core/src/components/alert/common.ts",start:{line:50,character:2,position:1591},end:{line:50,character:22,position:1611},type:"() => void",defaultValue:"() => {}"},{name:"onVisibleChange",description:"Callback called when the alert visibility changed.",fileName:"core/src/components/alert/common.ts",start:{line:40,character:2,position:1409},end:{line:40,character:46,position:1453},type:"(visible: boolean) => void",defaultValue:"() => {}"},{name:"slotDefault",description:"Template for the toast content",fileName:"core-bootstrap/src/components/toast/toast.ts",start:{line:20,character:2,position:866},end:{line:20,character:41,position:905},type:"SlotContent<ToastContext>",defaultValue:"undefined"},{name:"slotHeader",description:"Header template for the toast component",fileName:"core-bootstrap/src/components/toast/toast.ts",start:{line:24,character:2,position:961},end:{line:24,character:40,position:999},type:"SlotContent<ToastContext>",defaultValue:"undefined"},{name:"slotStructure",description:"Global template for the toast component",fileName:"core-bootstrap/src/components/toast/toast.ts",start:{line:16,character:2,position:778},end:{line:16,character:43,position:819},type:"SlotContent<ToastContext>",defaultValue:"undefined"},{name:"transition",description:`The transition function will be executed when the alert is displayed or hidden.

Depending on the value of CommonAlertProps.animatedOnInit, the animation can be optionally skipped during the showing process.`,fileName:"core/src/components/alert/common.ts",start:{line:57,character:2,position:1851},end:{line:57,character:27,position:1876},type:'(element: SSRHTMLElement, direction: "show" | "hide", animated: boolean, signal: AbortSignal, context: object) => Promise<void>',defaultValue:"fadeTransition"},{name:"visible",description:"If `true` the alert is visible to the user",fileName:"core/src/components/alert/common.ts",start:{line:21,character:2,position:949},end:{line:21,character:19,position:966},type:"boolean",defaultValue:"true"}],y=[{name:"ariaCloseButtonLabel",description:"Accessibility close button label",fileName:"core/src/components/alert/common.ts",start:{line:26,character:2,position:1016},end:{line:26,character:31,position:1045},type:"string"},{name:"autoHide",description:"If `true` automatically hides the toast after the delay.",fileName:"core/src/components/toast/toast.ts",start:{line:16,character:2,position:862},end:{line:16,character:20,position:880},type:"boolean"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"delay",description:"Delay in milliseconds before hiding the toast.",fileName:"core/src/components/toast/toast.ts",start:{line:20,character:2,position:943},end:{line:20,character:16,position:957},type:"number"},{name:"dismissible",description:"If `true`, alert can be dismissed by the user.\nThe close button (×) will be displayed and you can be notified of the event with the (close) output.",fileName:"core/src/components/alert/common.ts",start:{line:17,character:2,position:869},end:{line:17,character:23,position:890},type:"boolean"},{name:"hidden",description:"Is `true` when the alert is hidden. Compared to `visible`, this is updated after the transition is executed.",fileName:"core/src/components/alert/common.ts",start:{line:33,character:2,position:1248},end:{line:33,character:18,position:1264},type:"boolean"},{name:"slotDefault",description:"Template for the toast content",fileName:"core-bootstrap/src/components/toast/toast.ts",start:{line:20,character:2,position:866},end:{line:20,character:41,position:905},type:"SlotContent<ToastContext>"},{name:"slotHeader",description:"Header template for the toast component",fileName:"core-bootstrap/src/components/toast/toast.ts",start:{line:24,character:2,position:961},end:{line:24,character:40,position:999},type:"SlotContent<ToastContext>"},{name:"slotStructure",description:"Global template for the toast component",fileName:"core-bootstrap/src/components/toast/toast.ts",start:{line:16,character:2,position:778},end:{line:16,character:43,position:819},type:"SlotContent<ToastContext>"},{name:"visible",description:"If `true` the alert is visible to the user",fileName:"core/src/components/alert/common.ts",start:{line:21,character:2,position:949},end:{line:21,character:19,position:966},type:"boolean"}],g=[{name:"close",description:"Triggers alert closing programmatically (same as clicking on the close button (×)).",fileName:"core/src/components/alert/common.ts",start:{line:79,character:2,position:2412},end:{line:79,character:16,position:2426},type:"() => void"},{name:"open",description:"Triggers the alert to be displayed for the user.",fileName:"core/src/components/alert/common.ts",start:{line:84,character:2,position:2492},end:{line:84,character:15,position:2505},type:"() => void"}],N={props:b,state:y,api:g};function C(n){let e,o;return e=new f({props:{doc:N}}),{c(){l(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,a){m(e,t,a),o=!0},p:s,i(t){o||(d(e.$$.fragment,t),o=!0)},o(t){h(e.$$.fragment,t),o=!1},d(t){u(e,t)}}}class V extends r{constructor(e){super(),c(this,e,null,C,i,{})}}export{V as component};