import{r as o,j as e}from"./App-XNADZBio.js";import{c as m}from"./resizeObserver-n-diwjeL.js";import{u as d}from"./directive-CX0hxCpP-BC0sPI_1.js";import{u as b}from"./stores-B8YEDwZq-C-BlpjsT.js";import"./stores-B4F_j8QF.js";import"./directive-BdyRzOoi.js";const z=()=>{var a;const i=o.useMemo(m,[]),[n,r]=o.useState(180),c=d(i.directive),s=b(i.dimensions$),t=(a=s==null?void 0:s.contentRect)==null?void 0:a.height,h=()=>{r((t||0)+50)},l=()=>{r(t?t-50:0)};return e.jsxs("div",{className:"demo-resize-observer",children:[e.jsx("label",{htmlFor:"resizable",children:"Resizable textarea:"}),e.jsx("textarea",{ref:c,name:"resizable",id:"resizable",rows:6,cols:50,style:{height:n},className:`form-control ${t&&t>200?"fontsize":""}`,defaultValue:`This simple example is using the resizeObserver feature from @agnos-ui/core and displays the height of the textarea below it.
Modify the height to more than 200 px and see the font size changing.`}),e.jsxs("div",{children:["Textarea content height: ",e.jsx("span",{id:"dynamic-height",children:t}),"px"]}),e.jsx("button",{type:"button",className:"btn btn-primary m-2",id:"decreaseHeight",onClick:l,children:"Height --"}),e.jsx("button",{type:"button",className:"btn btn-primary m-2",id:"increaseHeight",onClick:h,children:"Height ++"})]})};export{z as default};