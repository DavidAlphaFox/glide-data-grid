import{j as o}from"./marked.esm-dbrxtycE.js";import"./index-BMVQvedj.js";import{D as i}from"./data-editor-all-C9hcoUW8.js";import{B as l,D as m,u as d,d as p}from"./utils-7uAHTxyF.js";import{S as u}from"./story-utils-K2EZnGjM.js";import"./iframe-Fk_u7jHw.js";import"../sb-preview/runtime.js";import"./image-window-loader-yqErE2qL.js";import"./throttle-7EuXLZa7.js";import"./_baseIteratee-WTHxv43n.js";import"./flatten-qRvRBp6y.js";import"./scrolling-data-grid-uh1hcvUd.js";import"./index-PWBWJyi_.js";import"./index.esm-Ejw8GwRl.js";import"./index-wocATsGp.js";const j={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>o(u,{children:o(l,{title:"One Hundred Thousand Columns",description:o(m,{children:"Data grid supports way more columns than you will ever need. Also this is rendering 10 million cells but that's not important."}),children:o(t,{})})})]},r=()=>{const{cols:t,getCellContent:a}=d(1e5);return o(i,{...p,getCellContent:a,columns:t,rows:1e3})};var e,s,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100_000);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={1000} />;
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const k=["OneHundredThousandCols"];export{r as OneHundredThousandCols,k as __namedExportsOrder,j as default};
