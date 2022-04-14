var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function o(e){try{s(n.next(e))}catch(e){i(e)}}function f(e){try{s(n["throw"](e))}catch(e){i(e)}}function s(e){e.done?r(e.value):a(e.value).then(o,f)}s((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:f(0),throw:f(1),return:f(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function f(e){return function(t){return s([e,t])}}function s(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */System.register(["./p-b18c5709.system.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.a}],execute:function(){e({c:vt,f:ut,u:pt});var r="top";var n="bottom";var a="right";var i="left";var o="auto";var f=[r,n,a,i];var s="start";var c="end";var u="clippingParents";var l="viewport";var v="popper";var p="reference";var d=f.reduce((function(e,t){return e.concat([t+"-"+s,t+"-"+c])}),[]);var h=[].concat(f,[o]).reduce((function(e,t){return e.concat([t,t+"-"+s,t+"-"+c])}),[]);var m="beforeRead";var g="read";var y="afterRead";var b="beforeMain";var w="main";var x="afterMain";var O="beforeWrite";var j="write";var E="afterWrite";var D=[m,g,y,b,w,x,O,j,E];function A(e){return e?(e.nodeName||"").toLowerCase():null}function k(e){if(e==null){return window}if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t?t.defaultView||window:window}return e}function M(e){var t=k(e).Element;return e instanceof t||e instanceof Element}function P(e){var t=k(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function L(e){if(typeof ShadowRoot==="undefined"){return false}var t=k(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function W(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{};var n=t.attributes[e]||{};var a=t.elements[e];if(!P(a)||!A(a)){return}Object.assign(a.style,r);Object.keys(n).forEach((function(e){var t=n[e];if(t===false){a.removeAttribute(e)}else{a.setAttribute(e,t===true?"":t)}}))}))}function B(e){var t=e.state;var r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,r.popper);t.styles=r;if(t.elements.arrow){Object.assign(t.elements.arrow.style,r.arrow)}return function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e];var a=t.attributes[e]||{};var i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]);var o=i.reduce((function(e,t){e[t]="";return e}),{});if(!P(n)||!A(n)){return}Object.assign(n.style,o);Object.keys(a).forEach((function(e){n.removeAttribute(e)}))}))}}var H={name:"applyStyles",enabled:true,phase:"write",fn:W,effect:B,requires:["computeStyles"]};function T(e){return e.split("-")[0]}var R=Math.max;var S=Math.min;var _=Math.round;function C(e,t){if(t===void 0){t=false}var r=e.getBoundingClientRect();var n=1;var a=1;if(P(e)&&t){var i=e.offsetHeight;var o=e.offsetWidth;if(o>0){n=_(r.width)/o||1}if(i>0){a=_(r.height)/i||1}}return{width:r.width/n,height:r.height/a,top:r.top/a,right:r.right/n,bottom:r.bottom/a,left:r.left/n,x:r.left/n,y:r.top/a}}function q(e){var t=C(e);var r=e.offsetWidth;var n=e.offsetHeight;if(Math.abs(t.width-r)<=1){r=t.width}if(Math.abs(t.height-n)<=1){n=t.height}return{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function V(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t)){return true}else if(r&&L(r)){var n=t;do{if(n&&e.isSameNode(n)){return true}n=n.parentNode||n.host}while(n)}return false}function N(e){return k(e).getComputedStyle(e)}function I(e){return["table","td","th"].indexOf(A(e))>=0}function F(e){return((M(e)?e.ownerDocument:e.document)||window.document).documentElement}function U(e){if(A(e)==="html"){return e}return e.assignedSlot||e.parentNode||(L(e)?e.host:null)||F(e)}function z(e){if(!P(e)||N(e).position==="fixed"){return null}return e.offsetParent}function X(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1;var r=navigator.userAgent.indexOf("Trident")!==-1;if(r&&P(e)){var n=N(e);if(n.position==="fixed"){return null}}var a=U(e);if(L(a)){a=a.host}while(P(a)&&["html","body"].indexOf(A(a))<0){var i=N(a);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none"){return a}else{a=a.parentNode}}return null}function Y(e){var t=k(e);var r=z(e);while(r&&I(r)&&N(r).position==="static"){r=z(r)}if(r&&(A(r)==="html"||A(r)==="body"&&N(r).position==="static")){return t}return r||X(e)||t}function G(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function J(e,t,r){return R(e,S(t,r))}function K(e,t,r){var n=J(e,t,r);return n>r?r:n}function Q(){return{top:0,right:0,bottom:0,left:0}}function Z(e){return Object.assign({},Q(),e)}function $(e,t){return t.reduce((function(t,r){t[r]=e;return t}),{})}var ee=function e(t,r){t=typeof t==="function"?t(Object.assign({},r.rects,{placement:r.placement})):t;return Z(typeof t!=="number"?t:$(t,f))};function te(e){var t;var o=e.state,f=e.name,s=e.options;var c=o.elements.arrow;var u=o.modifiersData.popperOffsets;var l=T(o.placement);var v=G(l);var p=[i,a].indexOf(l)>=0;var d=p?"height":"width";if(!c||!u){return}var h=ee(s.padding,o);var m=q(c);var g=v==="y"?r:i;var y=v==="y"?n:a;var b=o.rects.reference[d]+o.rects.reference[v]-u[v]-o.rects.popper[d];var w=u[v]-o.rects.reference[v];var x=Y(c);var O=x?v==="y"?x.clientHeight||0:x.clientWidth||0:0;var j=b/2-w/2;var E=h[g];var D=O-m[d]-h[y];var A=O/2-m[d]/2+j;var k=J(E,A,D);var M=v;o.modifiersData[f]=(t={},t[M]=k,t.centerOffset=k-A,t)}function re(e){var t=e.state,r=e.options;var n=r.element,a=n===void 0?"[data-popper-arrow]":n;if(a==null){return}if(typeof a==="string"){a=t.elements.popper.querySelector(a);if(!a){return}}if(!V(t.elements.popper,a)){return}t.elements.arrow=a}var ne={name:"arrow",enabled:true,phase:"main",fn:te,effect:re,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ae(e){return e.split("-")[1]}var ie={top:"auto",right:"auto",bottom:"auto",left:"auto"};function oe(e){var t=e.x,r=e.y;var n=window;var a=n.devicePixelRatio||1;return{x:_(t*a)/a||0,y:_(r*a)/a||0}}function fe(e){var t;var o=e.popper,f=e.popperRect,s=e.placement,u=e.variation,l=e.offsets,v=e.position,p=e.gpuAcceleration,d=e.adaptive,h=e.roundOffsets,m=e.isFixed;var g=l.x,y=g===void 0?0:g,b=l.y,w=b===void 0?0:b;var x=typeof h==="function"?h({x:y,y:w}):{x:y,y:w};y=x.x;w=x.y;var O=l.hasOwnProperty("x");var j=l.hasOwnProperty("y");var E=i;var D=r;var A=window;if(d){var M=Y(o);var P="clientHeight";var L="clientWidth";if(M===k(o)){M=F(o);if(N(M).position!=="static"&&v==="absolute"){P="scrollHeight";L="scrollWidth"}}M=M;if(s===r||(s===i||s===a)&&u===c){D=n;var W=m&&M===A&&A.visualViewport?A.visualViewport.height:M[P];w-=W-f.height;w*=p?1:-1}if(s===i||(s===r||s===n)&&u===c){E=a;var B=m&&M===A&&A.visualViewport?A.visualViewport.width:M[L];y-=B-f.width;y*=p?1:-1}}var H=Object.assign({position:v},d&&ie);var T=h===true?oe({x:y,y:w}):{x:y,y:w};y=T.x;w=T.y;if(p){var R;return Object.assign({},H,(R={},R[D]=j?"0":"",R[E]=O?"0":"",R.transform=(A.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",R))}return Object.assign({},H,(t={},t[D]=j?w+"px":"",t[E]=O?y+"px":"",t.transform="",t))}function se(e){var t=e.state,r=e.options;var n=r.gpuAcceleration,a=n===void 0?true:n,i=r.adaptive,o=i===void 0?true:i,f=r.roundOffsets,s=f===void 0?true:f;var c={placement:T(t.placement),variation:ae(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};if(t.modifiersData.popperOffsets!=null){t.styles.popper=Object.assign({},t.styles.popper,fe(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:s})))}if(t.modifiersData.arrow!=null){t.styles.arrow=Object.assign({},t.styles.arrow,fe(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:false,roundOffsets:s})))}t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var ce={name:"computeStyles",enabled:true,phase:"beforeWrite",fn:se,data:{}};var ue={passive:true};function le(e){var t=e.state,r=e.instance,n=e.options;var a=n.scroll,i=a===void 0?true:a,o=n.resize,f=o===void 0?true:o;var s=k(t.elements.popper);var c=[].concat(t.scrollParents.reference,t.scrollParents.popper);if(i){c.forEach((function(e){e.addEventListener("scroll",r.update,ue)}))}if(f){s.addEventListener("resize",r.update,ue)}return function(){if(i){c.forEach((function(e){e.removeEventListener("scroll",r.update,ue)}))}if(f){s.removeEventListener("resize",r.update,ue)}}}var ve={name:"eventListeners",enabled:true,phase:"write",fn:function e(){},effect:le,data:{}};var pe={left:"right",right:"left",bottom:"top",top:"bottom"};function de(e){return e.replace(/left|right|bottom|top/g,(function(e){return pe[e]}))}var he={start:"end",end:"start"};function me(e){return e.replace(/start|end/g,(function(e){return he[e]}))}function ge(e){var t=k(e);var r=t.pageXOffset;var n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function ye(e){return C(F(e)).left+ge(e).scrollLeft}function be(e){var t=k(e);var r=F(e);var n=t.visualViewport;var a=r.clientWidth;var i=r.clientHeight;var o=0;var f=0;if(n){a=n.width;i=n.height;if(!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){o=n.offsetLeft;f=n.offsetTop}}return{width:a,height:i,x:o+ye(e),y:f}}function we(e){var t;var r=F(e);var n=ge(e);var a=(t=e.ownerDocument)==null?void 0:t.body;var i=R(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0);var o=R(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0);var f=-n.scrollLeft+ye(e);var s=-n.scrollTop;if(N(a||r).direction==="rtl"){f+=R(r.clientWidth,a?a.clientWidth:0)-i}return{width:i,height:o,x:f,y:s}}function xe(e){var t=N(e),r=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function Oe(e){if(["html","body","#document"].indexOf(A(e))>=0){return e.ownerDocument.body}if(P(e)&&xe(e)){return e}return Oe(U(e))}function je(e,t){var r;if(t===void 0){t=[]}var n=Oe(e);var a=n===((r=e.ownerDocument)==null?void 0:r.body);var i=k(n);var o=a?[i].concat(i.visualViewport||[],xe(n)?n:[]):n;var f=t.concat(o);return a?f:f.concat(je(U(o)))}function Ee(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function De(e){var t=C(e);t.top=t.top+e.clientTop;t.left=t.left+e.clientLeft;t.bottom=t.top+e.clientHeight;t.right=t.left+e.clientWidth;t.width=e.clientWidth;t.height=e.clientHeight;t.x=t.left;t.y=t.top;return t}function Ae(e,t){return t===l?Ee(be(e)):M(t)?De(t):Ee(we(F(e)))}function ke(e){var t=je(U(e));var r=["absolute","fixed"].indexOf(N(e).position)>=0;var n=r&&P(e)?Y(e):e;if(!M(n)){return[]}return t.filter((function(e){return M(e)&&V(e,n)&&A(e)!=="body"}))}function Me(e,t,r){var n=t==="clippingParents"?ke(e):[].concat(t);var a=[].concat(n,[r]);var i=a[0];var o=a.reduce((function(t,r){var n=Ae(e,r);t.top=R(n.top,t.top);t.right=S(n.right,t.right);t.bottom=S(n.bottom,t.bottom);t.left=R(n.left,t.left);return t}),Ae(e,i));o.width=o.right-o.left;o.height=o.bottom-o.top;o.x=o.left;o.y=o.top;return o}function Pe(e){var t=e.reference,o=e.element,f=e.placement;var u=f?T(f):null;var l=f?ae(f):null;var v=t.x+t.width/2-o.width/2;var p=t.y+t.height/2-o.height/2;var d;switch(u){case r:d={x:v,y:t.y-o.height};break;case n:d={x:v,y:t.y+t.height};break;case a:d={x:t.x+t.width,y:p};break;case i:d={x:t.x-o.width,y:p};break;default:d={x:t.x,y:t.y}}var h=u?G(u):null;if(h!=null){var m=h==="y"?"height":"width";switch(l){case s:d[h]=d[h]-(t[m]/2-o[m]/2);break;case c:d[h]=d[h]+(t[m]/2-o[m]/2);break}}return d}function Le(e,t){if(t===void 0){t={}}var i=t,o=i.placement,s=o===void 0?e.placement:o,c=i.boundary,d=c===void 0?u:c,h=i.rootBoundary,m=h===void 0?l:h,g=i.elementContext,y=g===void 0?v:g,b=i.altBoundary,w=b===void 0?false:b,x=i.padding,O=x===void 0?0:x;var j=Z(typeof O!=="number"?O:$(O,f));var E=y===v?p:v;var D=e.rects.popper;var A=e.elements[w?E:y];var k=Me(M(A)?A:A.contextElement||F(e.elements.popper),d,m);var P=C(e.elements.reference);var L=Pe({reference:P,element:D,strategy:"absolute",placement:s});var W=Ee(Object.assign({},D,L));var B=y===v?W:P;var H={top:k.top-B.top+j.top,bottom:B.bottom-k.bottom+j.bottom,left:k.left-B.left+j.left,right:B.right-k.right+j.right};var T=e.modifiersData.offset;if(y===v&&T){var R=T[s];Object.keys(H).forEach((function(e){var t=[a,n].indexOf(e)>=0?1:-1;var i=[r,n].indexOf(e)>=0?"y":"x";H[e]+=R[i]*t}))}return H}function We(e,t){if(t===void 0){t={}}var r=t,n=r.placement,a=r.boundary,i=r.rootBoundary,o=r.padding,s=r.flipVariations,c=r.allowedAutoPlacements,u=c===void 0?h:c;var l=ae(n);var v=l?s?d:d.filter((function(e){return ae(e)===l})):f;var p=v.filter((function(e){return u.indexOf(e)>=0}));if(p.length===0){p=v}var m=p.reduce((function(t,r){t[r]=Le(e,{placement:r,boundary:a,rootBoundary:i,padding:o})[T(r)];return t}),{});return Object.keys(m).sort((function(e,t){return m[e]-m[t]}))}function Be(e){if(T(e)===o){return[]}var t=de(e);return[me(e),t,me(t)]}function He(e){var t=e.state,f=e.options,c=e.name;if(t.modifiersData[c]._skip){return}var u=f.mainAxis,l=u===void 0?true:u,v=f.altAxis,p=v===void 0?true:v,d=f.fallbackPlacements,h=f.padding,m=f.boundary,g=f.rootBoundary,y=f.altBoundary,b=f.flipVariations,w=b===void 0?true:b,x=f.allowedAutoPlacements;var O=t.options.placement;var j=T(O);var E=j===O;var D=d||(E||!w?[de(O)]:Be(O));var A=[O].concat(D).reduce((function(e,r){return e.concat(T(r)===o?We(t,{placement:r,boundary:m,rootBoundary:g,padding:h,flipVariations:w,allowedAutoPlacements:x}):r)}),[]);var k=t.rects.reference;var M=t.rects.popper;var P=new Map;var L=true;var W=A[0];for(var B=0;B<A.length;B++){var H=A[B];var R=T(H);var S=ae(H)===s;var _=[r,n].indexOf(R)>=0;var C=_?"width":"height";var q=Le(t,{placement:H,boundary:m,rootBoundary:g,altBoundary:y,padding:h});var V=_?S?a:i:S?n:r;if(k[C]>M[C]){V=de(V)}var N=de(V);var I=[];if(l){I.push(q[R]<=0)}if(p){I.push(q[V]<=0,q[N]<=0)}if(I.every((function(e){return e}))){W=H;L=false;break}P.set(H,I)}if(L){var F=w?3:1;var U=function e(t){var r=A.find((function(e){var r=P.get(e);if(r){return r.slice(0,t).every((function(e){return e}))}}));if(r){W=r;return"break"}};for(var z=F;z>0;z--){var X=U(z);if(X==="break")break}}if(t.placement!==W){t.modifiersData[c]._skip=true;t.placement=W;t.reset=true}}var Te={name:"flip",enabled:true,phase:"main",fn:He,requiresIfExists:["offset"],data:{_skip:false}};function Re(e,t,r){if(r===void 0){r={x:0,y:0}}return{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Se(e){return[r,a,n,i].some((function(t){return e[t]>=0}))}function _e(e){var t=e.state,r=e.name;var n=t.rects.reference;var a=t.rects.popper;var i=t.modifiersData.preventOverflow;var o=Le(t,{elementContext:"reference"});var f=Le(t,{altBoundary:true});var s=Re(o,n);var c=Re(f,a,i);var u=Se(s);var l=Se(c);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:l};t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}var Ce={name:"hide",enabled:true,phase:"main",requiresIfExists:["preventOverflow"],fn:_e};function qe(e,t,n){var o=T(e);var f=[i,r].indexOf(o)>=0?-1:1;var s=typeof n==="function"?n(Object.assign({},t,{placement:e})):n,c=s[0],u=s[1];c=c||0;u=(u||0)*f;return[i,a].indexOf(o)>=0?{x:u,y:c}:{x:c,y:u}}function Ve(e){var t=e.state,r=e.options,n=e.name;var a=r.offset,i=a===void 0?[0,0]:a;var o=h.reduce((function(e,r){e[r]=qe(r,t.rects,i);return e}),{});var f=o[t.placement],s=f.x,c=f.y;if(t.modifiersData.popperOffsets!=null){t.modifiersData.popperOffsets.x+=s;t.modifiersData.popperOffsets.y+=c}t.modifiersData[n]=o}var Ne={name:"offset",enabled:true,phase:"main",requires:["popperOffsets"],fn:Ve};function Ie(e){var t=e.state,r=e.name;t.modifiersData[r]=Pe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Fe={name:"popperOffsets",enabled:true,phase:"read",fn:Ie,data:{}};function Ue(e){return e==="x"?"y":"x"}function ze(e){var t=e.state,o=e.options,f=e.name;var c=o.mainAxis,u=c===void 0?true:c,l=o.altAxis,v=l===void 0?false:l,p=o.boundary,d=o.rootBoundary,h=o.altBoundary,m=o.padding,g=o.tether,y=g===void 0?true:g,b=o.tetherOffset,w=b===void 0?0:b;var x=Le(t,{boundary:p,rootBoundary:d,padding:m,altBoundary:h});var O=T(t.placement);var j=ae(t.placement);var E=!j;var D=G(O);var A=Ue(D);var k=t.modifiersData.popperOffsets;var M=t.rects.reference;var P=t.rects.popper;var L=typeof w==="function"?w(Object.assign({},t.rects,{placement:t.placement})):w;var W=typeof L==="number"?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L);var B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null;var H={x:0,y:0};if(!k){return}if(u){var _;var C=D==="y"?r:i;var V=D==="y"?n:a;var N=D==="y"?"height":"width";var I=k[D];var F=I+x[C];var U=I-x[V];var z=y?-P[N]/2:0;var X=j===s?M[N]:P[N];var Z=j===s?-P[N]:-M[N];var $=t.elements.arrow;var ee=y&&$?q($):{width:0,height:0};var te=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Q();var re=te[C];var ne=te[V];var ie=J(0,M[N],ee[N]);var oe=E?M[N]/2-z-ie-re-W.mainAxis:X-ie-re-W.mainAxis;var fe=E?-M[N]/2+z+ie+ne+W.mainAxis:Z+ie+ne+W.mainAxis;var se=t.elements.arrow&&Y(t.elements.arrow);var ce=se?D==="y"?se.clientTop||0:se.clientLeft||0:0;var ue=(_=B==null?void 0:B[D])!=null?_:0;var le=I+oe-ue-ce;var ve=I+fe-ue;var pe=J(y?S(F,le):F,I,y?R(U,ve):U);k[D]=pe;H[D]=pe-I}if(v){var de;var he=D==="x"?r:i;var me=D==="x"?n:a;var ge=k[A];var ye=A==="y"?"height":"width";var be=ge+x[he];var we=ge-x[me];var xe=[r,i].indexOf(O)!==-1;var Oe=(de=B==null?void 0:B[A])!=null?de:0;var je=xe?be:ge-M[ye]-P[ye]-Oe+W.altAxis;var Ee=xe?ge+M[ye]+P[ye]-Oe-W.altAxis:we;var De=y&&xe?K(je,ge,Ee):J(y?je:be,ge,y?Ee:we);k[A]=De;H[A]=De-ge}t.modifiersData[f]=H}var Xe={name:"preventOverflow",enabled:true,phase:"main",fn:ze,requiresIfExists:["offset"]};function Ye(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ge(e){if(e===k(e)||!P(e)){return ge(e)}else{return Ye(e)}}function Je(e){var t=e.getBoundingClientRect();var r=_(t.width)/e.offsetWidth||1;var n=_(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Ke(e,t,r){if(r===void 0){r=false}var n=P(t);var a=P(t)&&Je(t);var i=F(t);var o=C(e,a);var f={scrollLeft:0,scrollTop:0};var s={x:0,y:0};if(n||!n&&!r){if(A(t)!=="body"||xe(i)){f=Ge(t)}if(P(t)){s=C(t,true);s.x+=t.clientLeft;s.y+=t.clientTop}else if(i){s.x=ye(i)}}return{x:o.left+f.scrollLeft-s.x,y:o.top+f.scrollTop-s.y,width:o.width,height:o.height}}function Qe(e){var t=new Map;var r=new Set;var n=[];e.forEach((function(e){t.set(e.name,e)}));function a(e){r.add(e.name);var i=[].concat(e.requires||[],e.requiresIfExists||[]);i.forEach((function(e){if(!r.has(e)){var n=t.get(e);if(n){a(n)}}}));n.push(e)}e.forEach((function(e){if(!r.has(e.name)){a(e)}}));return n}function Ze(e){var t=Qe(e);return D.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}function $e(e){var t;return function(){if(!t){t=new Promise((function(r){Promise.resolve().then((function(){t=undefined;r(e())}))}))}return t}}function et(e){var t=e.reduce((function(e,t){var r=e[t.name];e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t;return e}),{});return Object.keys(t).map((function(e){return t[e]}))}var tt={placement:"bottom",modifiers:[],strategy:"absolute"};function rt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return!t.some((function(e){return!(e&&typeof e.getBoundingClientRect==="function")}))}function nt(e){if(e===void 0){e={}}var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,a=t.defaultOptions,i=a===void 0?tt:a;return function e(t,r,a){if(a===void 0){a=i}var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},tt,i),modifiersData:{},elements:{reference:t,popper:r},attributes:{},styles:{}};var f=[];var s=false;var c={state:o,setOptions:function e(a){var f=typeof a==="function"?a(o.options):a;l();o.options=Object.assign({},i,o.options,f);o.scrollParents={reference:M(t)?je(t):t.contextElement?je(t.contextElement):[],popper:je(r)};var s=Ze(et([].concat(n,o.options.modifiers)));o.orderedModifiers=s.filter((function(e){return e.enabled}));u();return c.update()},forceUpdate:function e(){if(s){return}var t=o.elements,r=t.reference,n=t.popper;if(!rt(r,n)){return}o.rects={reference:Ke(r,Y(n),o.options.strategy==="fixed"),popper:q(n)};o.reset=false;o.placement=o.options.placement;o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var a=0;a<o.orderedModifiers.length;a++){if(o.reset===true){o.reset=false;a=-1;continue}var i=o.orderedModifiers[a],f=i.fn,u=i.options,l=u===void 0?{}:u,v=i.name;if(typeof f==="function"){o=f({state:o,options:l,name:v,instance:c})||o}}},update:$e((function(){return new Promise((function(e){c.forceUpdate();e(o)}))})),destroy:function e(){l();s=true}};if(!rt(t,r)){return c}c.setOptions(a).then((function(e){if(!s&&a.onFirstUpdate){a.onFirstUpdate(e)}}));function u(){o.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=r===void 0?{}:r,a=e.effect;if(typeof a==="function"){var i=a({state:o,name:t,instance:c,options:n});var s=function e(){};f.push(i||s)}}))}function l(){f.forEach((function(e){return e()}));f=[]}return c}}var at=[ve,Fe,ce,H,Ne,Te,Xe,ne,Ce];var it=nt({defaultModifiers:at});var ot=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"];var ft=e("d","bottom-leading");var st=e("p",["top-start","top","top-end","bottom-start","bottom","bottom-end"]);var ct=e("C",{animation:"calcite-popper-anim",animationActive:"calcite-popper-anim--active"});function ut(e,t){var r=e.filter((function(e){return ot.includes(e)}));if(r.length!==e.length){console.warn("".concat(t.tagName,": Invalid value found in: flipPlacements. Try any of these: ").concat(ot.map((function(e){return'"'.concat(e,'"')})).join(", ").trim()),{el:t})}return r}function lt(e,r){var n=["left","right"];var a=["start","end"];if(t(e)==="rtl"){n.reverse();a.reverse()}return r.replace(/-leading/gi,"-".concat(a[0])).replace(/-trailing/gi,"-".concat(a[1])).replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}function vt(e){var t=e.referenceEl,r=e.el,n=e.placement,a=e.overlayPositioning,i=a===void 0?"absolute":a,o=e.modifiers;if(!t){return null}return it(t,r,{strategy:i,placement:lt(r,n),modifiers:o})}function pt(e){var t=e.el,r=e.modifiers,n=e.placement,a=e.popper;return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(i){switch(i.label){case 0:e=lt(t,n);return[4,a.setOptions({modifiers:r,placement:e})];case 1:i.sent();return[2]}}))}))}function dt(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))}var ht=4;var mt=e("a",Math.ceil(dt(ht,ht)))}}}));