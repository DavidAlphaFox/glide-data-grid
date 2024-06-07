import{r as g}from"./index-BMVQvedj.js";import{r as Y}from"./index-wocATsGp.js";var H=function(e,r){return H=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])},H(e,r)};function Z(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");H(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}var M=function(){return M=Object.assign||function(r){for(var n,t=1,i=arguments.length;t<i;t++){n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(r[u]=n[u])}return r},M.apply(this,arguments)};function ee(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]]);return n}var $=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function te(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var P=te,re=typeof $=="object"&&$&&$.Object===Object&&$,ne=re,ie=ne,ae=typeof self=="object"&&self&&self.Object===Object&&self,oe=ie||ae||Function("return this")(),G=oe,ce=G,fe=function(){return ce.Date.now()},ue=fe,se=/\s/;function de(e){for(var r=e.length;r--&&se.test(e.charAt(r)););return r}var le=de,he=le,ve=/^\s+/;function ge(e){return e&&e.slice(0,he(e)+1).replace(ve,"")}var be=ge,me=G,ye=me.Symbol,U=ye,W=U,q=Object.prototype,pe=q.hasOwnProperty,Oe=q.toString,z=W?W.toStringTag:void 0;function _e(e){var r=pe.call(e,z),n=e[z];try{e[z]=void 0;var t=!0}catch{}var i=Oe.call(e);return t&&(r?e[z]=n:delete e[z]),i}var Te=_e,Re=Object.prototype,we=Re.toString;function Ee(e){return we.call(e)}var Se=Ee,D=U,je=Te,ze=Se,$e="[object Null]",xe="[object Undefined]",A=D?D.toStringTag:void 0;function He(e){return e==null?e===void 0?xe:$e:A&&A in Object(e)?je(e):ze(e)}var Me=He;function ke(e){return e!=null&&typeof e=="object"}var Pe=ke,Ie=Me,We=Pe,De="[object Symbol]";function Ae(e){return typeof e=="symbol"||We(e)&&Ie(e)==De}var Ne=Ae,Le=be,N=P,Fe=Ne,L=NaN,Ce=/^[-+]0x[0-9a-f]+$/i,Ge=/^0b[01]+$/i,Ue=/^0o[0-7]+$/i,qe=parseInt;function Be(e){if(typeof e=="number")return e;if(Fe(e))return L;if(N(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=N(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Le(e);var n=Ge.test(e);return n||Ue.test(e)?qe(e.slice(2),n?2:8):Ce.test(e)?L:+e}var Xe=Be,Ve=P,x=ue,F=Xe,Je="Expected a function",Ke=Math.max,Qe=Math.min;function Ye(e,r,n){var t,i,u,l,o,h,s=0,c=!1,f=!1,a=!0;if(typeof e!="function")throw new TypeError(Je);r=F(r)||0,Ve(n)&&(c=!!n.leading,f="maxWait"in n,u=f?Ke(F(n.maxWait)||0,r):u,a="trailing"in n?!!n.trailing:a);function v(d){var m=t,y=i;return t=i=void 0,s=d,l=e.apply(y,m),l}function p(d){return s=d,o=setTimeout(b,r),c?v(d):l}function w(d){var m=d-h,y=d-s,j=r-m;return f?Qe(j,u-y):j}function O(d){var m=d-h,y=d-s;return h===void 0||m>=r||m<0||f&&y>=u}function b(){var d=x();if(O(d))return _(d);o=setTimeout(b,w(d))}function _(d){return o=void 0,a&&t?v(d):(t=i=void 0,l)}function E(){o!==void 0&&clearTimeout(o),s=0,t=h=i=o=void 0}function S(){return o===void 0?l:_(x())}function R(){var d=x(),m=O(d);if(t=arguments,i=this,h=d,m){if(o===void 0)return p(h);if(f)return clearTimeout(o),o=setTimeout(b,r),v(h)}return o===void 0&&(o=setTimeout(b,r)),l}return R.cancel=E,R.flush=S,R}var B=Ye,Ze=B,et=P,tt="Expected a function";function rt(e,r,n){var t=!0,i=!0;if(typeof e!="function")throw new TypeError(tt);return et(n)&&(t="leading"in n?!!n.leading:t,i="trailing"in n?!!n.trailing:i),Ze(e,r,{leading:t,maxWait:r,trailing:i})}var nt=rt,X=function(e,r,n,t){switch(r){case"debounce":return B(e,n,t);case"throttle":return nt(e,n,t);default:return e}},k=function(e){return typeof e=="function"},T=function(){return typeof window>"u"},C=function(e){return e instanceof Element||e instanceof HTMLDocument},V=function(e,r,n,t){return function(i){var u=i.width,l=i.height;r(function(o){return o.width===u&&o.height===l||o.width===u&&!t||o.height===l&&!n?o:(e&&k(e)&&e(u,l),{width:u,height:l})})}};(function(e){Z(r,e);function r(n){var t=e.call(this,n)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var s=t.props,c=s.targetRef,f=s.observerOptions;if(!T()){c&&c.current&&(t.targetRef.current=c.current);var a=t.getElement();a&&(t.observableElement&&t.observableElement===a||(t.observableElement=a,t.resizeObserver.observe(a,f)))}},t.getElement=function(){var s=t.props,c=s.querySelector,f=s.targetDomEl;if(T())return null;if(c)return document.querySelector(c);if(f&&C(f))return f;if(t.targetRef&&C(t.targetRef.current))return t.targetRef.current;var a=Y.findDOMNode(t);if(!a)return null;var v=t.getRenderType();switch(v){case"renderProp":return a;case"childFunction":return a;case"child":return a;case"childArray":return a;default:return a.parentElement}},t.createResizeHandler=function(s){var c=t.props,f=c.handleWidth,a=f===void 0?!0:f,v=c.handleHeight,p=v===void 0?!0:v,w=c.onResize;if(!(!a&&!p)){var O=V(w,t.setState.bind(t),a,p);s.forEach(function(b){var _=b&&b.contentRect||{},E=_.width,S=_.height,R=!t.skipOnMount&&!T();R&&O({width:E,height:S}),t.skipOnMount=!1})}},t.getRenderType=function(){var s=t.props,c=s.render,f=s.children;return k(c)?"renderProp":k(f)?"childFunction":g.isValidElement(f)?"child":Array.isArray(f)?"childArray":"parent"};var i=n.skipOnMount,u=n.refreshMode,l=n.refreshRate,o=l===void 0?1e3:l,h=n.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=i,t.targetRef=g.createRef(),t.observableElement=null,T()||(t.resizeHandler=X(t.createResizeHandler,u,o,h),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}return r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){T()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var n=this.props,t=n.render,i=n.children,u=n.nodeType,l=u===void 0?"div":u,o=this.state,h=o.width,s=o.height,c={width:h,height:s,targetRef:this.targetRef},f=this.getRenderType(),a;switch(f){case"renderProp":return t&&t(c);case"childFunction":return a=i,a(c);case"child":if(a=i,a.type&&typeof a.type=="string"){c.targetRef;var v=ee(c,["targetRef"]);return g.cloneElement(a,v)}return g.cloneElement(a,c);case"childArray":return a=i,a.map(function(p){return!!p&&g.cloneElement(p,c)});default:return g.createElement(l,null)}},r})(g.PureComponent);var it=T()?g.useEffect:g.useLayoutEffect;function ct(e){e===void 0&&(e={});var r=e.skipOnMount,n=r===void 0?!1:r,t=e.refreshMode,i=e.refreshRate,u=i===void 0?1e3:i,l=e.refreshOptions,o=e.handleWidth,h=o===void 0?!0:o,s=e.handleHeight,c=s===void 0?!0:s,f=e.targetRef,a=e.observerOptions,v=e.onResize,p=g.useRef(n),w=g.useRef(null),O=f??w,b=g.useRef(),_=g.useState({width:void 0,height:void 0}),E=_[0],S=_[1];return it(function(){if(!T()){var R=V(v,S,h,c),d=function(y){!h&&!c||y.forEach(function(j){var I=j&&j.contentRect||{},J=I.width,K=I.height,Q=!p.current&&!T();Q&&R({width:J,height:K}),p.current=!1})};b.current=X(d,t,u,l);var m=new window.ResizeObserver(b.current);return O.current&&m.observe(O.current,a),function(){m.disconnect();var y=b.current;y&&y.cancel&&y.cancel()}}},[t,u,l,h,c,v,a,O.current]),M({ref:O},E)}export{ct as u};
