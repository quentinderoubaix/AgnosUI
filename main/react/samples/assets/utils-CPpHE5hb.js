import{a as o}from"./utils-CQXJJenU.js";import{g as t}from"./pagination-sJZws_Rh-CNxSou1o.js";import{g as r}from"./rating-NKqav0__-BHs6_Lc9.js";import{c as b}from"./collapse-CVjUhnIz-CTQJmzKC.js";import{f as g}from"./fade-uOobJKgw-BzWpDnkF.js";import{u as s}from"./stores-B8YEDwZq-BRy6vnb9.js";const u={log:{value:a=>console.log(a),label:"Log"},noop:{value:()=>{},label:"Noop"},collapse:{value:b,label:"Collapse"},fade:{value:g,label:"Fade"},ratingValueFunction:{value:r().ariaValueTextFn,label:"RatingValue"},heartsRatingValue:{value:(a,e)=>`${a} ${a===1?"heart":"hearts"} out of ${e} ${e===1?"heart":"hearts"}`,label:"HeartsRatingValue"},starRatingValue:{value:(a,e)=>`${a} ${a===1?"star":"stars"} out of ${e} ${e===1?"star":"stars"}`,label:"StarRatingValue"},starIconRating:{value:r().slotStar,label:"StarIconRating"},heartIconRating:{value:({fill:a})=>String.fromCharCode(a===100?9829:9825),label:"HeartIconRating"},defaultPageFactory:{value:t().pagesFactory,label:"DefaultPageFactory"},simpleLabel:{value:t().ariaPageLabel,label:"SimpleLabel"},pageLabel:{value:(a,e)=>`Page ${a} of ${e}`,label:"PageLabel"},slotNumberLabel:{value:t().slotNumberLabel,label:"SlotNumberLabel"},sliderLabelHandleDefault:{value:a=>`${a}`,label:"SliderLabelHandleDefault"},sliderValueTextUnits:{value:a=>`${a} units`,label:"SliderValueTextUnits"}},i=a=>{const e={...a};for(const[n,l]of Object.entries(e))u[l==null?void 0:l.value]!==void 0&&(e[n]=u[l.value].value);return e};function $(){return{config:i(s(o).config),props:i(s(o).props)}}export{$ as u};