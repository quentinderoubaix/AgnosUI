import{S as y,i as S,s as x,c as l,k as b,m as c,b as i,t as $,d as u,f as m,g as _,l as g}from"./AppCommon-vYWJRxQg.js";import{A as d}from"./Alert-CC2f7log.js";import{a as w}from"./config-orzBmIU7.js";import"./Slot-AcoRORoM.js";import"./baseTransitions-g2tE6FNj.js";import"./writables-dbn-IvPX.js";import"./stores-Qik-2pdq.js";import"./func-tK0QDe5R.js";import"./promise-aGWTUESe.js";import"./directive-paRKhXJF.js";import"./fade-ENcBJNHo.js";import"./cssTransitions-8D-XMK8x.js";import"./dom-2S7XI5EU.js";function A(o){let t;return{c(){t=g("Simple primary alert")},m(r,s){i(r,t,s)},d(r){r&&m(t)}}}function C(o){let t;return{c(){t=g("Simple secondary alert")},m(r,s){i(r,t,s)},d(r){r&&m(t)}}}function k(o){let t,r,s,n;return t=new d({props:{type:"primary",$$slots:{default:[A]},$$scope:{ctx:o}}}),s=new d({props:{type:"secondary",$$slots:{default:[C]},$$scope:{ctx:o}}}),{c(){l(t.$$.fragment),r=b(),l(s.$$.fragment)},m(e,a){c(t,e,a),i(e,r,a),c(s,e,a),n=!0},p(e,[a]){const p={};a&1&&(p.$$scope={dirty:a,ctx:e}),t.$set(p);const f={};a&1&&(f.$$scope={dirty:a,ctx:e}),s.$set(f)},i(e){n||($(t.$$.fragment,e),$(s.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),u(s.$$.fragment,e),n=!1},d(e){e&&m(r),_(t,e),_(s,e)}}}function q(o){return w().set({alert:{dismissible:!1}}),[]}class K extends y{constructor(t){super(),S(this,t,q,k,x,{})}}export{K as default};