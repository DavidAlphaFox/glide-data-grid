import{j as o}from"./marked.esm-dbrxtycE.js";import"./index-BMVQvedj.js";import{D as n}from"./data-editor-all-C9hcoUW8.js";import{B as l,D as m,u as p,d as c}from"./utils-7uAHTxyF.js";import{S as d}from"./story-utils-K2EZnGjM.js";import"./iframe-Fk_u7jHw.js";import"../sb-preview/runtime.js";import"./image-window-loader-yqErE2qL.js";import"./throttle-7EuXLZa7.js";import"./_baseIteratee-WTHxv43n.js";import"./flatten-qRvRBp6y.js";import"./scrolling-data-grid-uh1hcvUd.js";import"./index-PWBWJyi_.js";import"./index.esm-Ejw8GwRl.js";import"./index-wocATsGp.js";const S={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>o(d,{children:o(l,{title:"One Million Rows",description:o(m,{children:"Data grid supports over 1 million rows. Your limit is mostly RAM."}),children:o(t,{})})})]},r=()=>{const{cols:t,getCellContent:a}=p(6);return o(n,{...c,getCellContent:a,columns:t,rowHeight:31,rows:1e6,rowMarkers:"number"})};var e,s,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowHeight={31} rows={1_000_000} rowMarkers="number" />;
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const b=["OneMillionRows"];export{r as OneMillionRows,b as __namedExportsOrder,S as default};