import{x as d}from"./chunk-DDPBEREB.js";import"./chunk-UQV7GR2W.js";import{$a as r,Jb as u,Ma as o,ba as n,kb as l,lb as c,rb as m}from"./chunk-HHNAUMXU.js";var C=(()=>{let t=class t{constructor(){this.wordsA=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],this.wordsB=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],this.wordsC=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],this.mainList=[...this.wordsA,...this.wordsB,...this.wordsC],this.items=this.mainList.slice(0,10)}onFilterTextChange(a){let e=this.mainList;this.items=a?e.filter(i=>i.toLowerCase().startsWith(a)):e.slice(0,10)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n({type:t,selectors:[["ng-component"]],standalone:!0,features:[u],decls:3,vars:2,consts:[[2,"height","400px"],[1,"mb-3"],["auSelect","","auBadgeClassName","badge text-bg-light",3,"auItems","auFilterText","auFilterTextChange"]],template:function(e,i){e&1&&(l(0,"div",0)(1,"div",1)(2,"div",2),m("auFilterTextChange",function(h){return i.onFilterTextChange(h)}),c()()()),e&2&&(o(2),r("auItems",i.items)("auFilterText",i.filterText))},dependencies:[d],encapsulation:2});let s=t;return s})();export{C as default};
