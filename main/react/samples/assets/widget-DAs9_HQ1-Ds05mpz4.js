import{k as c}from"./stores-bzJrTsnV.js";import{r as s}from"./App-XNADZBio.js";import{u as n}from"./stores-B8YEDwZq-DmEjO4KH.js";function h(u,e={},t){const r=s.useMemo(()=>u({...t,props:{...t==null?void 0:t.props,...e}}),[]),a=s.useRef(e);return s.useEffect(()=>{const o=c(a.current,e);a.current=e,o&&r.patch(o)},[e]),[n(r.state$),r]}export{h as u};