import{L as w,O as F}from"./chunk-JRRF5PEA.js";import{ea as v,fa as V,ha as y,la as h,ma as M}from"./chunk-SBJUXELN.js";import"./chunk-DMXSLBKY.js";import{$a as f,Bb as n,Db as s,Eb as C,Fb as c,Gb as S,Ib as g,La as t,Sa as p,_ as m,kb as a,lb as i,mb as r}from"./chunk-WXQMDDQY.js";var u=class d{constructor(){this.sliderControl=new V([10,40,50,60,90]);this.sliderValues=p([10,40])}static{this.\u0275fac=function(o){return new(o||d)}}static{this.\u0275cmp=m({type:d,selectors:[["ng-component"]],standalone:!0,features:[g],decls:9,vars:4,consts:[["auSlider","","auMin","0","auMax","100","auStepSize","1",3,"formControl"],["auSlider","","auMin","0","auMax","100","auStepSize","1",3,"auValuesChange","auValues"]],template:function(o,e){o&1&&(a(0,"h2"),n(1,"Slider with form control"),i(),r(2,"div",0),n(3),r(4,"hr"),a(5,"h2"),n(6,"Slider with values"),i(),a(7,"div",1),S("auValuesChange",function(l){return c(e.sliderValues,l)||(e.sliderValues=l),l}),i(),n(8)),o&2&&(t(2),f("formControl",e.sliderControl),t(),s(" Form control values: ",e.sliderControl.value==null?null:e.sliderControl.value.join(", ")," "),t(4),C("auValues",e.sliderValues),t(),s(" Values: ",e.sliderValues().join(", ")," "))},dependencies:[F,w,M,v,y,h],encapsulation:2})}};export{u as default};
