import{j as e,a as t,F as m}from"./marked.esm-dbrxtycE.js";import"./index-BMVQvedj.js";import{D as p}from"./data-editor-all-C9hcoUW8.js";import{B as u,D as d,P as s,M as C,K as n,u as h,d as D}from"./utils-7uAHTxyF.js";import{S as M}from"./story-utils-K2EZnGjM.js";import"./iframe-Fk_u7jHw.js";import"../sb-preview/runtime.js";import"./image-window-loader-yqErE2qL.js";import"./throttle-7EuXLZa7.js";import"./_baseIteratee-WTHxv43n.js";import"./flatten-qRvRBp6y.js";import"./scrolling-data-grid-uh1hcvUd.js";import"./index-PWBWJyi_.js";import"./index.esm-Ejw8GwRl.js";import"./index-wocATsGp.js";const F={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e(M,{children:e(u,{title:"Multi select columns",description:t(m,{children:[t(d,{children:["You can select multiple columns by using the ",e(s,{children:"selectedColumns"})," and"," ",e(s,{children:"onSelectedColumnsChange"})," props"]}),t(C,{children:["Here you can multi select columns by using ",e(n,{children:"Ctrl"})," (on Windows) or"," ",e(n,{children:"⌘"})," (on Mac)"]})]}),children:e(r,{})})})]},o=()=>{const{cols:r,getCellContent:c}=h(100);return e(p,{...D,getCellContent:c,rowMarkers:"both",columns:r,rows:1e5})};var l,a,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} rowMarkers="both" columns={cols} rows={100_000} />;
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const K=["MultiSelectColumns"];export{o as MultiSelectColumns,K as __namedExportsOrder,F as default};
