var T=Object.defineProperty;var A=(e,t,a)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var x=(e,t,a)=>(A(e,typeof t!="symbol"?t+"":t,a),a);import{s as v,a as B,j as b}from"./marked.esm-dbrxtycE.js";import{r as c}from"./index-BMVQvedj.js";import{S as E,U as $,E as I,G as n,D as R,a as l}from"./image-window-loader-yqErE2qL.js";import{y as o}from"./index-PWBWJyi_.js";import{w as M}from"./_baseIteratee-WTHxv43n.js";import{u as U}from"./index.esm-Ejw8GwRl.js";import{n as z}from"./flatten-qRvRBp6y.js";o.seed(1337);function P(e){return!!e}function O(e,t){var i;const a=e.data;if(typeof a==typeof t.data)return{...t,data:a};switch(t.kind){case n.Uri:return M(a)?{...t,data:a[0]}:{...t,data:(a==null?void 0:a.toString())??""};case n.Boolean:return M(a)?{...t,data:a[0]!==void 0}:e.kind===n.Boolean?{...t,data:e.data}:{...t,data:!!P(a)};case n.Image:return M(a)?{...t,data:[a[0]]}:{...t,data:[(a==null?void 0:a.toString())??""]};case n.Number:return{...t,data:0};case n.Text:case n.Markdown:return M(a)?{...t,data:a[0].toString()??""}:{...t,data:((i=e.data)==null?void 0:i.toString())??""};case n.Custom:return t}R()}function S(e){const{getContent:t,...a}=e;return a}const J=v("div")({name:"ColumnAddButton",class:"c4uqbye",propsAsIs:!1}),G=v("div")({name:"BeautifulStyle",class:"b1bsqg7n",propsAsIs:!1}),Q=v("span")({name:"PropName",class:"piiq54i",propsAsIs:!1}),Z=v("p")({name:"Description",class:"d1k3yj19",propsAsIs:!1}),ee=v("p")({name:"MoreInfo",class:"m1j0dy02",propsAsIs:!1}),te=e=>{const{title:t,children:a,description:i,className:d,scale:r}=e,{ref:C,width:k,height:g}=U();return B(G,{className:d+(E.value?" firefox":""),children:[b("h1",{children:t}),i,b("div",{style:{scale:r},className:"sizer",children:b("div",{className:"sizer-clip",ref:C,children:b("div",{style:{position:"relative",width:k??100,height:g??100},children:a})})})]})};function V(e,t){return{title:`Column ${e}`,id:`Column ${e}`,group:t?`Group ${Math.round(e/3)}`:void 0,icon:l.HeaderString,hasMenu:!1,getContent:()=>{const a=o.lorem.word();return{kind:n.Text,data:a,displayData:a,allowOverlay:!0,readonly:!0}}}}function N(e,t){const a=[{title:"First name",id:"First name",group:t?"Name":void 0,icon:l.HeaderString,hasMenu:!1,getContent:()=>{const r=o.name.firstName();return{kind:n.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"Last name",id:"Last name",group:t?"Name":void 0,icon:l.HeaderString,hasMenu:!1,getContent:()=>{const r=o.name.lastName();return{kind:n.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"Avatar",id:"Avatar",group:t?"Info":void 0,icon:l.HeaderImage,hasMenu:!1,getContent:()=>{const r=Math.round(Math.random()*100);return{kind:n.Image,data:[`https://picsum.photos/id/${r}/900/900`],displayData:[`https://picsum.photos/id/${r}/40/40`],allowOverlay:!0,readonly:!0}}},{title:"Email",id:"Email",group:t?"Info":void 0,icon:l.HeaderString,hasMenu:!1,getContent:()=>{const r=o.internet.email();return{kind:n.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"Title",id:"Title",group:t?"Info":void 0,icon:l.HeaderString,hasMenu:!1,getContent:()=>{const r=o.name.jobTitle();return{kind:n.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"More Info",id:"More Info",group:t?"Info":void 0,icon:l.HeaderUri,hasMenu:!1,getContent:()=>{const r=o.internet.url();return{kind:n.Uri,displayData:r,data:r,hoverEffect:!0,allowOverlay:!0,readonly:!0,onClickUri:C=>{window.open(r,"_blank"),C.preventDefault()}}}}];if(e<a.length)return a.slice(0,e);const i=e-a.length,d=[...new Array(i)].map((r,C)=>V(C+a.length,t));return[...a,...d]}class H{constructor(){x(this,"cachedContent",new Map)}get(t,a){const i=this.cachedContent.get(t);if(i!==void 0)return i[a]}set(t,a,i){let d=this.cachedContent.get(t);d===void 0&&this.cachedContent.set(t,d=[]),d[a]=i}}function ae(e,t=!0,a=!1){const i=c.useRef(new H),[d,r]=c.useState(()=>N(e,a));c.useEffect(()=>{r(N(e,a))},[a,e]);const C=c.useCallback((u,f)=>{r(s=>{const p=s.findIndex(D=>D.title===u.title),y=[...s];return y.splice(p,1,{...s[p],width:f}),y})},[]),k=c.useMemo(()=>d.map(S),[d]),g=c.useRef(d);g.current=d;const h=c.useCallback(([u,f])=>{let s=i.current.get(u,f);return s===void 0&&(s=g.current[u].getContent(),!t&&$(s)&&(s={...s,readonly:t}),i.current.set(u,f,s)),s},[t]),w=c.useCallback(([u,f],s)=>{i.current.set(u,f,s)},[]),m=c.useCallback(([u,f],s)=>{let p=i.current.get(u,f);if(p===void 0&&(p=d[u].getContent()),I(s)&&I(p)){const y=O(s,p);i.current.set(u,f,{...y,displayData:typeof y.data=="string"?y.data:y.displayData,lastUpdated:performance.now()})}},[d]);return{cols:k,getCellContent:h,onColumnResize:C,setCellValue:m,setCellValueRaw:w}}const ne=v("kbd")({name:"KeyName",class:"kcvwzr4",propsAsIs:!1}),re={smoothScrollX:!0,smoothScrollY:!0,getCellsForSelection:!0,width:"100%"};function oe(e){switch(e.kind){case n.Boolean:return{...e,data:!1};case n.Image:return{...e,data:[],displayData:[]};case n.Drilldown:case n.Bubble:return{...e,data:[]};case n.Uri:case n.Markdown:return{...e,data:""};case n.Text:return{...e,data:"",displayData:""};case n.Number:return{...e,data:0,displayData:""}}return e}function j(){return[{title:"Row ID",width:120,icon:l.HeaderRowID,hasMenu:!1,getContent:()=>({kind:n.RowID,data:o.datatype.uuid(),allowOverlay:!0})},{title:"Protected",width:120,icon:l.HeaderCode,hasMenu:!1,getContent:()=>({kind:n.Protected,data:o.finance.bitcoinAddress(),allowOverlay:!1})},{title:"Loading",width:120,icon:l.HeaderString,hasMenu:!1,getContent:()=>({kind:n.Loading,allowOverlay:!1,skeletonWidth:70,skeletonWidthVariability:25})},{title:"Text",width:120,icon:l.HeaderCode,hasMenu:!1,getContent:()=>{const e=o.name.firstName();return{kind:n.Text,data:e,displayData:e,allowOverlay:!0,hoverEffect:!0,themeOverride:{cellVerticalPadding:8,cellHorizontalPadding:8},hoverEffectTheme:{bgColor:"#f4f4f4",fullSize:!0}}}},{title:"Number",width:120,icon:l.HeaderNumber,hasMenu:!1,getContent:()=>{const e=o.datatype.number(100);return{kind:n.Number,data:e,displayData:`${e}`,allowOverlay:!0,hoverEffect:!0,themeOverride:{cellVerticalPadding:8,cellHorizontalPadding:8},hoverEffectTheme:{bgColor:"#f4f4f4",fullSize:!0}}}},{title:"Boolean",width:120,icon:l.HeaderBoolean,hasMenu:!1,getContent:()=>{const e=Math.random(),t=e<.1?void 0:e<.2?null:e<.6;return{kind:n.Boolean,data:t,allowOverlay:!1,readonly:!1}}},{title:"Image",width:120,icon:l.HeaderImage,hasMenu:!1,getContent:()=>({kind:n.Image,data:[`${o.image.animals(40,40)}?random=${o.datatype.number(1e5)}`],allowOverlay:!0,readonly:!0})},{title:"Uri",width:120,icon:l.HeaderUri,hasMenu:!1,getContent:()=>{const e=o.internet.url();return{kind:n.Uri,data:e,allowOverlay:!0,hoverEffect:!0,onClickUri:()=>{window.open(e,"_blank")}}}},{title:"Markdown",width:120,icon:l.HeaderMarkdown,hasMenu:!1,getContent:()=>{const e=`# Title
Hello my name is *${o.name.firstName()}*

## TODO:
Try out [Glide](https://www.glideapps.com/)
`;return{kind:n.Markdown,data:e,allowOverlay:!0}}},{title:"Bubble",width:120,icon:l.HeaderArray,hasMenu:!1,getContent:()=>({kind:n.Bubble,data:[o.lorem.word(),o.lorem.word(),o.lorem.word()],allowOverlay:!0})},{title:"Drilldown",width:120,icon:l.HeaderArray,hasMenu:!1,getContent:()=>({kind:n.Drilldown,data:[{text:o.address.cityName(),img:`${o.image.nature(40,40)}?random=${o.datatype.number(1e5)}`},{text:o.address.cityName(),img:`${o.image.nature(40,40)}?random=${o.datatype.number(1e5)}`}],allowOverlay:!0})}]}function se(){const e=c.useRef(new H),[t,a]=c.useState(j),i=c.useCallback((h,w)=>{a(m=>{const u=m.findIndex(s=>s.title===h.title),f=[...m];return f.splice(u,1,{...m[u],width:w}),f})},[]),d=c.useMemo(()=>t.map(S),[t]),[r,C]=c.useState(0),k=c.useCallback(([h,w])=>{z(r);let m=e.current.get(h,w);return m===void 0&&(m=t[h].getContent(),e.current.set(h,w,m)),m},[t,r]),g=c.useCallback(([h,w],m,u,f)=>{var p;let s=e.current.get(h,w);if(s===void 0&&(s=t[h].getContent()),I(m)&&I(s)){const y=O(m,s);e.current.set(h,w,{...y,displayData:u===!0?void 0:((p=y.data)==null?void 0:p.toString())??""}),f===!0&&C(D=>D+1)}},[t]);return{cols:d,getCellContent:k,onColumnResize:i,setCellValue:g}}export{te as B,J as C,Z as D,ne as K,ee as M,Q as P,se as a,G as b,oe as c,re as d,ae as u};
