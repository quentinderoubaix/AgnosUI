import{i}from"./stores.b1e3cbdd.js";import{a as r}from"./scheduler.f4aa3cfc.js";function l(t,n=""){return`AgnosUI - ${t}`+(n?` for ${n}`:"")}function g(t,n=""){return`${t} widget of AgnosUI`+(n?` for ${n}`:"")}function p(t){return t.replaceAll("\r","").split(`

`)}const s=/^\([^(]*\)[^=]*=>/,c=/^function/,u=/^Slot/;function d(t){return s.test(t)||c.test(t)?"function":u.test(t)?"slot":t}function x(t){let n;function e(o){n=o}return r(()=>{i.patch({elements:n?t(n):[]})}),e}export{g as a,x as c,l as g,d as n,p as t};
