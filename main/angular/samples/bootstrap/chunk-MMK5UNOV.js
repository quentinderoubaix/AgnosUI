import{L as T,O as W}from"./chunk-JRRF5PEA.js";import{ba as b,ea as w,fa as f,ga as _,ha as V,la as v,ma as D}from"./chunk-SBJUXELN.js";import"./chunk-DMXSLBKY.js";import{$a as p,Bb as o,Db as h,Eb as r,Fb as d,Gb as s,Ib as S,La as a,Sa as t,_ as y,kb as l,lb as i,mb as m,pb as C}from"./chunk-WXQMDDQY.js";var M=class c{constructor(){this.sliderControl=new f([70]);this.disabledControl=new f(60);this.sliderValues=t([20]);this.disabledToggle=t(!0);this.readonlyToggle=t(!0);this.showMinMax=t(!0);this.showValues=t(!0)}ngOnInit(){this.disabledControl.disable()}handleDisabled(){this.disabledToggle()?this.disabledControl.disable():this.disabledControl.enable()}static{this.\u0275fac=function(g){return new(g||c)}}static{this.\u0275cmp=y({type:c,selectors:[["ng-component"]],standalone:!0,features:[S],decls:29,vars:12,consts:[["auSlider","","auMin","0","auMax","100","auStepSize","1",3,"formControl","auShowMinMaxLabels","auShowValueLabels"],["auSlider","","auMin","0","auMax","100","auStepSize","1",3,"auValuesChange","auValues"],["auSlider","","auMin","0","auMax","100","auStepSize","1",3,"formControl","auReadonly"],[1,"form-check","form-switch"],["type","checkbox","role","switch","id","disabled",1,"form-check-input",3,"ngModelChange","change","ngModel"],["for","disabled",1,"form-check-label"],["type","checkbox","role","switch","id","readonly",1,"form-check-input",3,"ngModelChange","ngModel"],["for","readonly",1,"form-check-label"],["type","checkbox","role","switch","id","showMinMax",1,"form-check-input",3,"ngModelChange","ngModel"],["for","showMinMax",1,"form-check-label"],["type","checkbox","role","switch","id","showValues",1,"form-check-input",3,"ngModelChange","ngModel"],["for","showValues",1,"form-check-label"]],template:function(g,e){g&1&&(l(0,"h2"),o(1,"Slider with form control"),i(),m(2,"div",0),o(3),m(4,"hr"),l(5,"h2"),o(6,"Slider with value"),i(),l(7,"div",1),s("auValuesChange",function(n){return d(e.sliderValues,n)||(e.sliderValues=n),n}),i(),o(8),m(9,"hr"),l(10,"h2"),o(11,"Disabled slider"),i(),m(12,"div",2),l(13,"div",3)(14,"input",4),s("ngModelChange",function(n){return d(e.disabledToggle,n)||(e.disabledToggle=n),n}),C("change",function(){return e.handleDisabled()}),i(),l(15,"label",5),o(16,"Disabled"),i()(),l(17,"div",3)(18,"input",6),s("ngModelChange",function(n){return d(e.readonlyToggle,n)||(e.readonlyToggle=n),n}),i(),l(19,"label",7),o(20,"Readonly"),i()(),l(21,"div",3)(22,"input",8),s("ngModelChange",function(n){return d(e.showMinMax,n)||(e.showMinMax=n),n}),i(),l(23,"label",9),o(24,"Min-Max label visibility"),i()(),l(25,"div",3)(26,"input",10),s("ngModelChange",function(n){return d(e.showValues,n)||(e.showValues=n),n}),i(),l(27,"label",11),o(28,"Value label visibility"),i()()),g&2&&(a(2),p("formControl",e.sliderControl)("auShowMinMaxLabels",e.showMinMax())("auShowValueLabels",e.showValues()),a(),h(" Form control value: ",e.sliderControl.value," "),a(4),r("auValues",e.sliderValues),a(),h(" Value: ",e.sliderValues()," "),a(4),p("formControl",e.disabledControl)("auReadonly",e.readonlyToggle()),a(2),r("ngModel",e.disabledToggle),a(4),r("ngModel",e.readonlyToggle),a(4),r("ngModel",e.showMinMax),a(4),r("ngModel",e.showValues))},dependencies:[W,T,D,b,w,V,v,_],encapsulation:2})}};export{M as default};
