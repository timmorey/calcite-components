/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
var freeGlobal=typeof global=="object"&&global&&global.Object===Object&&global;var freeSelf=typeof self=="object"&&self&&self.Object===Object&&self;var root=freeGlobal||freeSelf||Function("return this")();var Symbol=root.Symbol;var objectProto$1=Object.prototype;var hasOwnProperty=objectProto$1.hasOwnProperty;var nativeObjectToString$1=objectProto$1.toString;var symToStringTag$1=Symbol?Symbol.toStringTag:undefined;function getRawTag(e){var t=hasOwnProperty.call(e,symToStringTag$1),r=e[symToStringTag$1];try{e[symToStringTag$1]=undefined;var n=true}catch(e){}var i=nativeObjectToString$1.call(e);if(n){if(t){e[symToStringTag$1]=r}else{delete e[symToStringTag$1]}}return i}var objectProto=Object.prototype;var nativeObjectToString=objectProto.toString;function objectToString(e){return nativeObjectToString.call(e)}var nullTag="[object Null]",undefinedTag="[object Undefined]";var symToStringTag=Symbol?Symbol.toStringTag:undefined;function baseGetTag(e){if(e==null){return e===undefined?undefinedTag:nullTag}return symToStringTag&&symToStringTag in Object(e)?getRawTag(e):objectToString(e)}function isObjectLike(e){return e!=null&&typeof e=="object"}var symbolTag="[object Symbol]";function isSymbol(e){return typeof e=="symbol"||isObjectLike(e)&&baseGetTag(e)==symbolTag}var reWhitespace=/\s/;function trimmedEndIndex(e){var t=e.length;while(t--&&reWhitespace.test(e.charAt(t))){}return t}var reTrimStart=/^\s+/;function baseTrim(e){return e?e.slice(0,trimmedEndIndex(e)+1).replace(reTrimStart,""):e}function isObject(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var NAN=0/0;var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;var reIsBinary=/^0b[01]+$/i;var reIsOctal=/^0o[0-7]+$/i;var freeParseInt=parseInt;function toNumber(e){if(typeof e=="number"){return e}if(isSymbol(e)){return NAN}if(isObject(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=isObject(t)?t+"":t}if(typeof e!="string"){return e===0?e:+e}e=baseTrim(e);var r=reIsBinary.test(e);return r||reIsOctal.test(e)?freeParseInt(e.slice(2),r?2:8):reIsBadHex.test(e)?NAN:+e}var now=function(){return root.Date.now()};var FUNC_ERROR_TEXT="Expected a function";var nativeMax=Math.max,nativeMin=Math.min;function debounce(e,t,r){var n,i,a,o,u,f,c=0,l=false,s=false,b=true;if(typeof e!="function"){throw new TypeError(FUNC_ERROR_TEXT)}t=toNumber(t)||0;if(isObject(r)){l=!!r.leading;s="maxWait"in r;a=s?nativeMax(toNumber(r.maxWait)||0,t):a;b="trailing"in r?!!r.trailing:b}function g(t){var r=n,a=i;n=i=undefined;c=t;o=e.apply(a,r);return o}function T(e){c=e;u=setTimeout(m,t);return l?g(e):o}function d(e){var r=e-f,n=e-c,i=t-r;return s?nativeMin(i,a-n):i}function v(e){var r=e-f,n=e-c;return f===undefined||r>=t||r<0||s&&n>=a}function m(){var e=now();if(v(e)){return y(e)}u=setTimeout(m,d(e))}function y(e){u=undefined;if(b&&n){return g(e)}n=i=undefined;return o}function S(){if(u!==undefined){clearTimeout(u)}c=0;n=f=i=u=undefined}function j(){return u===undefined?o:y(now())}function O(){var e=now(),r=v(e);n=arguments;i=this;f=e;if(r){if(u===undefined){return T(f)}if(s){clearTimeout(u);u=setTimeout(m,t);return g(f)}}if(u===undefined){u=setTimeout(m,t)}return o}O.cancel=S;O.flush=j;return O}export{Symbol as S,isSymbol as a,baseGetTag as b,isObjectLike as c,debounce as d,freeGlobal as f,isObject as i,root as r};