var Z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function L(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ee(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function o(){return this instanceof o?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var n=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(r,o,n.get?n:{enumerable:!0,get:function(){return e[o]}})}),r}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var S=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;function z(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function H(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var o=Object.getOwnPropertyNames(t).map(function(f){return t[f]});if(o.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(f){n[f]=f}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var G=H()?Object.assign:function(e,t){for(var r,o=z(e),n,f=1;f<arguments.length;f++){r=Object(arguments[f]);for(var c in r)B.call(r,c)&&(o[c]=r[c]);if(S){n=S(r);for(var i=0;i<n.length;i++)V.call(r,n[i])&&(o[n[i]]=r[n[i]])}}return o},P={exports:{}},u={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=G,y=60103,k=60106;u.Fragment=60107;u.StrictMode=60108;u.Profiler=60114;var R=60109,$=60110,A=60112;u.Suspense=60113;var x=60115,I=60116;if(typeof Symbol=="function"&&Symbol.for){var a=Symbol.for;y=a("react.element"),k=a("react.portal"),u.Fragment=a("react.fragment"),u.StrictMode=a("react.strict_mode"),u.Profiler=a("react.profiler"),R=a("react.provider"),$=a("react.context"),A=a("react.forward_ref"),u.Suspense=a("react.suspense"),x=a("react.memo"),I=a("react.lazy")}var E=typeof Symbol=="function"&&Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q={};function d(e,t,r){this.props=e,this.context=t,this.refs=q,this.updater=r||M}d.prototype.isReactComponent={};d.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")};d.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function F(){}F.prototype=d.prototype;function j(e,t,r){this.props=e,this.context=t,this.refs=q,this.updater=r||M}var O=j.prototype=new F;O.constructor=j;g(O,d.prototype);O.isPureReactComponent=!0;var b={current:null},N=Object.prototype.hasOwnProperty,U={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,r){var o,n={},f=null,c=null;if(t!=null)for(o in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(f=""+t.key),t)N.call(t,o)&&!U.hasOwnProperty(o)&&(n[o]=t[o]);var i=arguments.length-2;if(i===1)n.children=r;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];n.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)n[o]===void 0&&(n[o]=i[o]);return{$$typeof:y,type:e,key:f,ref:c,props:n,_owner:b.current}}function K(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function w(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function Q(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var C=/\/+/g;function _(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Q(""+e.key):t.toString(36)}function m(e,t,r,o,n){var f=typeof e;(f==="undefined"||f==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(f){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case y:case k:c=!0}}if(c)return c=e,n=n(c),e=o===""?"."+_(c,0):o,Array.isArray(n)?(r="",e!=null&&(r=e.replace(C,"$&/")+"/"),m(n,t,r,"",function(l){return l})):n!=null&&(w(n)&&(n=K(n,r+(!n.key||c&&c.key===n.key?"":(""+n.key).replace(C,"$&/")+"/")+e)),t.push(n)),1;if(c=0,o=o===""?".":o+":",Array.isArray(e))for(var i=0;i<e.length;i++){f=e[i];var s=o+_(f,i);c+=m(f,t,r,s,n)}else if(s=J(e),typeof s=="function")for(e=s.call(e),i=0;!(f=e.next()).done;)f=f.value,s=o+_(f,i++),c+=m(f,t,r,s,n);else if(f==="object")throw t=""+e,Error(v(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function h(e,t,r){if(e==null)return e;var o=[],n=0;return m(e,o,"","",function(f){return t.call(r,f,n++)}),o}function W(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(r){e._status===0&&(r=r.default,e._status=1,e._result=r)},function(r){e._status===0&&(e._status=2,e._result=r)})}if(e._status===1)return e._result;throw e._result}var T={current:null};function p(){var e=T.current;if(e===null)throw Error(v(321));return e}var Y={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:g};u.Children={map:h,forEach:function(e,t,r){h(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return h(e,function(){t++}),t},toArray:function(e){return h(e,function(t){return t})||[]},only:function(e){if(!w(e))throw Error(v(143));return e}};u.Component=d;u.PureComponent=j;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y;u.cloneElement=function(e,t,r){if(e==null)throw Error(v(267,e));var o=g({},e.props),n=e.key,f=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(f=t.ref,c=b.current),t.key!==void 0&&(n=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)N.call(t,s)&&!U.hasOwnProperty(s)&&(o[s]=t[s]===void 0&&i!==void 0?i[s]:t[s])}var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:y,type:e.type,key:n,ref:f,props:o,_owner:c}};u.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:$,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:R,_context:e},e.Consumer=e};u.createElement=D;u.createFactory=function(e){var t=D.bind(null,e);return t.type=e,t};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:A,render:e}};u.isValidElement=w;u.lazy=function(e){return{$$typeof:I,_payload:{_status:-1,_result:e},_init:W}};u.memo=function(e,t){return{$$typeof:x,type:e,compare:t===void 0?null:t}};u.useCallback=function(e,t){return p().useCallback(e,t)};u.useContext=function(e,t){return p().useContext(e,t)};u.useDebugValue=function(){};u.useEffect=function(e,t){return p().useEffect(e,t)};u.useImperativeHandle=function(e,t,r){return p().useImperativeHandle(e,t,r)};u.useLayoutEffect=function(e,t){return p().useLayoutEffect(e,t)};u.useMemo=function(e,t){return p().useMemo(e,t)};u.useReducer=function(e,t,r){return p().useReducer(e,t,r)};u.useRef=function(e){return p().useRef(e)};u.useState=function(e){return p().useState(e)};u.version="17.0.2";P.exports=u;var X=P.exports;const te=L(X);export{te as R,ee as a,Z as c,L as g,G as o,X as r};
