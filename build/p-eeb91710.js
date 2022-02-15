/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
import{a as t}from"./p-8f3a3e4e.js";var n="top",e="bottom",r="right",o="left",i=[n,e,r,o],a=i.reduce((function(t,n){return t.concat([n+"-start",n+"-end"])}),[]),u=[].concat(i,["auto"]).reduce((function(t,n){return t.concat([n,n+"-start",n+"-end"])}),[]),f=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function c(t){return t?(t.nodeName||"").toLowerCase():null}function p(t){if(null==t)return window;if("[object Window]"!==t.toString()){var n=t.ownerDocument;return n&&n.defaultView||window}return t}function s(t){return t instanceof p(t).Element||t instanceof Element}function l(t){return t instanceof p(t).HTMLElement||t instanceof HTMLElement}function d(t){return"undefined"!=typeof ShadowRoot&&(t instanceof p(t).ShadowRoot||t instanceof ShadowRoot)}function v(t){return t.split("-")[0]}var b=Math.max,m=Math.min,h=Math.round;function y(t,n){void 0===n&&(n=!1);var e=t.getBoundingClientRect(),r=1,o=1;if(l(t)&&n){var i=t.offsetHeight,a=t.offsetWidth;a>0&&(r=h(e.width)/a||1),i>0&&(o=h(e.height)/i||1)}return{width:e.width/r,height:e.height/o,top:e.top/o,right:e.right/r,bottom:e.bottom/o,left:e.left/r,x:e.left/r,y:e.top/o}}function g(t){var n=y(t),e=t.offsetWidth,r=t.offsetHeight;return Math.abs(n.width-e)<=1&&(e=n.width),Math.abs(n.height-r)<=1&&(r=n.height),{x:t.offsetLeft,y:t.offsetTop,width:e,height:r}}function x(t,n){var e=n.getRootNode&&n.getRootNode();if(t.contains(n))return!0;if(e&&d(e)){var r=n;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function w(t){return p(t).getComputedStyle(t)}function O(t){return["table","td","th"].indexOf(c(t))>=0}function j(t){return((s(t)?t.ownerDocument:t.document)||window.document).documentElement}function M(t){return"html"===c(t)?t:t.assignedSlot||t.parentNode||(d(t)?t.host:null)||j(t)}function k(t){return l(t)&&"fixed"!==w(t).position?t.offsetParent:null}function E(t){for(var n=p(t),e=k(t);e&&O(e)&&"static"===w(e).position;)e=k(e);return e&&("html"===c(e)||"body"===c(e)&&"static"===w(e).position)?n:e||function(t){var n=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&l(t)&&"fixed"===w(t).position)return null;for(var e=M(t);l(e)&&["html","body"].indexOf(c(e))<0;){var r=w(e);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||n&&"filter"===r.willChange||n&&r.filter&&"none"!==r.filter)return e;e=e.parentNode}return null}(t)||n}function A(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function P(t,n,e){return b(t,m(n,e))}function q(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function B(t,n){return n.reduce((function(n,e){return n[e]=t,n}),{})}function R(t){return t.split("-")[1]}var S={top:"auto",right:"auto",bottom:"auto",left:"auto"};function W(t){var i,a=t.popper,u=t.popperRect,f=t.placement,c=t.variation,s=t.offsets,l=t.position,d=t.gpuAcceleration,v=t.adaptive,b=t.roundOffsets,m=t.isFixed,y=s.x,g=void 0===y?0:y,x=s.y,O=void 0===x?0:x,M="function"==typeof b?b({x:g,y:O}):{x:g,y:O};g=M.x,O=M.y;var k=s.hasOwnProperty("x"),A=s.hasOwnProperty("y"),P=o,q=n,B=window;if(v){var R=E(a),W="clientHeight",L="clientWidth";R===p(a)&&"static"!==w(R=j(a)).position&&"absolute"===l&&(W="scrollHeight",L="scrollWidth"),R=R,(f===n||(f===o||f===r)&&"end"===c)&&(q=e,O-=(m&&B.visualViewport?B.visualViewport.height:R[W])-u.height,O*=d?1:-1),f!==o&&(f!==n&&f!==e||"end"!==c)||(P=r,g-=(m&&B.visualViewport?B.visualViewport.width:R[L])-u.width,g*=d?1:-1)}var T,H=Object.assign({position:l},v&&S),I=!0===b?function(t){var n=t.y,e=window.devicePixelRatio||1;return{x:h(t.x*e)/e||0,y:h(n*e)/e||0}}({x:g,y:O}):{x:g,y:O};return g=I.x,O=I.y,Object.assign({},H,d?((T={})[q]=A?"0":"",T[P]=k?"0":"",T.transform=(B.devicePixelRatio||1)<=1?"translate("+g+"px, "+O+"px)":"translate3d("+g+"px, "+O+"px, 0)",T):((i={})[q]=A?O+"px":"",i[P]=k?g+"px":"",i.transform="",i))}var L={passive:!0},T={left:"right",right:"left",bottom:"top",top:"bottom"};function H(t){return t.replace(/left|right|bottom|top/g,(function(t){return T[t]}))}var I={start:"end",end:"start"};function C(t){return t.replace(/start|end/g,(function(t){return I[t]}))}function z(t){var n=p(t);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function $(t){return y(j(t)).left+z(t).scrollLeft}function D(t){var n=w(t);return/auto|scroll|overlay|hidden/.test(n.overflow+n.overflowY+n.overflowX)}function F(t){return["html","body","#document"].indexOf(c(t))>=0?t.ownerDocument.body:l(t)&&D(t)?t:F(M(t))}function U(t,n){var e;void 0===n&&(n=[]);var r=F(t),o=r===(null==(e=t.ownerDocument)?void 0:e.body),i=p(r),a=o?[i].concat(i.visualViewport||[],D(r)?r:[]):r,u=n.concat(a);return o?u:u.concat(U(M(a)))}function V(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function _(t,n){return"viewport"===n?V(function(t){var n=p(t),e=j(t),r=n.visualViewport,o=e.clientWidth,i=e.clientHeight,a=0,u=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,u=r.offsetTop)),{width:o,height:i,x:a+$(t),y:u}}(t)):s(n)?function(t){var n=y(t);return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}(n):V(function(t){var n,e=j(t),r=z(t),o=null==(n=t.ownerDocument)?void 0:n.body,i=b(e.scrollWidth,e.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=b(e.scrollHeight,e.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),u=-r.scrollLeft+$(t),f=-r.scrollTop;return"rtl"===w(o||e).direction&&(u+=b(e.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:u,y:f}}(j(t)))}function G(t){var i,a=t.reference,u=t.element,f=t.placement,c=f?v(f):null,p=f?R(f):null,s=a.x+a.width/2-u.width/2,l=a.y+a.height/2-u.height/2;switch(c){case n:i={x:s,y:a.y-u.height};break;case e:i={x:s,y:a.y+a.height};break;case r:i={x:a.x+a.width,y:l};break;case o:i={x:a.x-u.width,y:l};break;default:i={x:a.x,y:a.y}}var d=c?A(c):null;if(null!=d){var b="y"===d?"height":"width";switch(p){case"start":i[d]=i[d]-(a[b]/2-u[b]/2);break;case"end":i[d]=i[d]+(a[b]/2-u[b]/2)}}return i}function J(t,o){void 0===o&&(o={});var a=o.placement,u=void 0===a?t.placement:a,f=o.boundary,p=void 0===f?"clippingParents":f,d=o.rootBoundary,v=void 0===d?"viewport":d,h=o.elementContext,g=void 0===h?"popper":h,O=o.altBoundary,k=void 0!==O&&O,A=o.padding,P=void 0===A?0:A,R=q("number"!=typeof P?P:B(P,i)),S=t.rects.popper,W=t.elements[k?"popper"===g?"reference":"popper":g],L=function(t,n,e){var r="clippingParents"===n?function(t){var n=U(M(t)),e=["absolute","fixed"].indexOf(w(t).position)>=0&&l(t)?E(t):t;return s(e)?n.filter((function(t){return s(t)&&x(t,e)&&"body"!==c(t)})):[]}(t):[].concat(n),o=[].concat(r,[e]),i=o.reduce((function(n,e){var r=_(t,e);return n.top=b(r.top,n.top),n.right=m(r.right,n.right),n.bottom=m(r.bottom,n.bottom),n.left=b(r.left,n.left),n}),_(t,o[0]));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}(s(W)?W:W.contextElement||j(t.elements.popper),p,v),T=y(t.elements.reference),H=G({reference:T,element:S,strategy:"absolute",placement:u}),I=V(Object.assign({},S,H)),C="popper"===g?I:T,z={top:L.top-C.top+R.top,bottom:C.bottom-L.bottom+R.bottom,left:L.left-C.left+R.left,right:C.right-L.right+R.right},$=t.modifiersData.offset;if("popper"===g&&$){var D=$[u];Object.keys(z).forEach((function(t){var o=[r,e].indexOf(t)>=0?1:-1,i=[n,e].indexOf(t)>=0?"y":"x";z[t]+=D[i]*o}))}return z}function K(t,n){void 0===n&&(n={});var e=n.boundary,r=n.rootBoundary,o=n.padding,f=n.flipVariations,c=n.allowedAutoPlacements,p=void 0===c?u:c,s=R(n.placement),l=s?f?a:a.filter((function(t){return R(t)===s})):i,d=l.filter((function(t){return p.indexOf(t)>=0}));0===d.length&&(d=l);var b=d.reduce((function(n,i){return n[i]=J(t,{placement:i,boundary:e,rootBoundary:r,padding:o})[v(i)],n}),{});return Object.keys(b).sort((function(t,n){return b[t]-b[n]}))}function N(t,n,e){return void 0===e&&(e={x:0,y:0}),{top:t.top-n.height-e.y,right:t.right-n.width+e.x,bottom:t.bottom-n.height+e.y,left:t.left-n.width-e.x}}function Q(t){return[n,r,e,o].some((function(n){return t[n]>=0}))}function X(t,n,e){void 0===e&&(e=!1);var r,o,i=l(n),a=l(n)&&function(t){var n=t.getBoundingClientRect(),e=h(n.width)/t.offsetWidth||1,r=h(n.height)/t.offsetHeight||1;return 1!==e||1!==r}(n),u=j(n),f=y(t,a),s={scrollLeft:0,scrollTop:0},d={x:0,y:0};return(i||!i&&!e)&&(("body"!==c(n)||D(u))&&(s=(r=n)!==p(r)&&l(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:z(r)),l(n)?((d=y(n,!0)).x+=n.clientLeft,d.y+=n.clientTop):u&&(d.x=$(u))),{x:f.left+s.scrollLeft-d.x,y:f.top+s.scrollTop-d.y,width:f.width,height:f.height}}function Y(t){var n=new Map,e=new Set,r=[];function o(t){e.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!e.has(t)){var r=n.get(t);r&&o(r)}})),r.push(t)}return t.forEach((function(t){n.set(t.name,t)})),t.forEach((function(t){e.has(t.name)||o(t)})),r}var Z={placement:"bottom",modifiers:[],strategy:"absolute"};function tt(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return!n.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function nt(t){void 0===t&&(t={});var n=t.defaultModifiers,e=void 0===n?[]:n,r=t.defaultOptions,o=void 0===r?Z:r;return function(t,n,r){void 0===r&&(r=o);var i,a,u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Z,o),modifiersData:{},elements:{reference:t,popper:n},attributes:{},styles:{}},c=[],p=!1,l={state:u,setOptions:function(r){var i="function"==typeof r?r(u.options):r;d(),u.options=Object.assign({},o,u.options,i),u.scrollParents={reference:s(t)?U(t):t.contextElement?U(t.contextElement):[],popper:U(n)};var a,p,v=function(t){var n=Y(t);return f.reduce((function(t,e){return t.concat(n.filter((function(t){return t.phase===e})))}),[])}((a=[].concat(e,u.options.modifiers),p=a.reduce((function(t,n){var e=t[n.name];return t[n.name]=e?Object.assign({},e,n,{options:Object.assign({},e.options,n.options),data:Object.assign({},e.data,n.data)}):n,t}),{}),Object.keys(p).map((function(t){return p[t]}))));return u.orderedModifiers=v.filter((function(t){return t.enabled})),u.orderedModifiers.forEach((function(t){var n=t.options,e=t.effect;if("function"==typeof e){var r=e({state:u,name:t.name,instance:l,options:void 0===n?{}:n});c.push(r||function(){})}})),l.update()},forceUpdate:function(){if(!p){var t=u.elements,n=t.reference,e=t.popper;if(tt(n,e)){u.rects={reference:X(n,E(e),"fixed"===u.options.strategy),popper:g(e)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach((function(t){return u.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<u.orderedModifiers.length;r++)if(!0!==u.reset){var o=u.orderedModifiers[r],i=o.fn,a=o.options;"function"==typeof i&&(u=i({state:u,options:void 0===a?{}:a,name:o.name,instance:l})||u)}else u.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(t){l.forceUpdate(),t(u)}))},function(){return a||(a=new Promise((function(t){Promise.resolve().then((function(){a=void 0,t(i())}))}))),a}),destroy:function(){d(),p=!0}};if(!tt(t,n))return l;function d(){c.forEach((function(t){return t()})),c=[]}return l.setOptions(r).then((function(t){!p&&r.onFirstUpdate&&r.onFirstUpdate(t)})),l}}var et=nt({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var n=t.state,e=t.instance,r=t.options,o=r.scroll,i=void 0===o||o,a=r.resize,u=void 0===a||a,f=p(n.elements.popper),c=[].concat(n.scrollParents.reference,n.scrollParents.popper);return i&&c.forEach((function(t){t.addEventListener("scroll",e.update,L)})),u&&f.addEventListener("resize",e.update,L),function(){i&&c.forEach((function(t){t.removeEventListener("scroll",e.update,L)})),u&&f.removeEventListener("resize",e.update,L)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var n=t.state;n.modifiersData[t.name]=G({reference:n.rects.reference,element:n.rects.popper,strategy:"absolute",placement:n.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var n=t.state,e=t.options,r=e.gpuAcceleration,o=void 0===r||r,i=e.adaptive,a=void 0===i||i,u=e.roundOffsets,f=void 0===u||u,c={placement:v(n.placement),variation:R(n.placement),popper:n.elements.popper,popperRect:n.rects.popper,gpuAcceleration:o,isFixed:"fixed"===n.options.strategy};null!=n.modifiersData.popperOffsets&&(n.styles.popper=Object.assign({},n.styles.popper,W(Object.assign({},c,{offsets:n.modifiersData.popperOffsets,position:n.options.strategy,adaptive:a,roundOffsets:f})))),null!=n.modifiersData.arrow&&(n.styles.arrow=Object.assign({},n.styles.arrow,W(Object.assign({},c,{offsets:n.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-placement":n.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var n=t.state;Object.keys(n.elements).forEach((function(t){var e=n.styles[t]||{},r=n.attributes[t]||{},o=n.elements[t];l(o)&&c(o)&&(Object.assign(o.style,e),Object.keys(r).forEach((function(t){var n=r[t];!1===n?o.removeAttribute(t):o.setAttribute(t,!0===n?"":n)})))}))},effect:function(t){var n=t.state,e={popper:{position:n.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(n.elements.popper.style,e.popper),n.styles=e,n.elements.arrow&&Object.assign(n.elements.arrow.style,e.arrow),function(){Object.keys(n.elements).forEach((function(t){var r=n.elements[t],o=n.attributes[t]||{},i=Object.keys(n.styles.hasOwnProperty(t)?n.styles[t]:e[t]).reduce((function(t,n){return t[n]="",t}),{});l(r)&&c(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(t){r.removeAttribute(t)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.name,a=t.options.offset,f=void 0===a?[0,0]:a,c=u.reduce((function(t,i){return t[i]=function(t,e,i){var a=v(t),u=[o,n].indexOf(a)>=0?-1:1,f="function"==typeof i?i(Object.assign({},e,{placement:t})):i,c=f[0],p=f[1];return c=c||0,p=(p||0)*u,[o,r].indexOf(a)>=0?{x:p,y:c}:{x:c,y:p}}(i,e.rects,f),t}),{}),p=c[e.placement],s=p.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=p.x,e.modifiersData.popperOffsets.y+=s),e.modifiersData[i]=c}},{name:"flip",enabled:!0,phase:"main",fn:function(t){var i=t.state,a=t.options,u=t.name;if(!i.modifiersData[u]._skip){for(var f=a.mainAxis,c=void 0===f||f,p=a.altAxis,s=void 0===p||p,l=a.fallbackPlacements,d=a.padding,b=a.boundary,m=a.rootBoundary,h=a.altBoundary,y=a.flipVariations,g=void 0===y||y,x=a.allowedAutoPlacements,w=i.options.placement,O=v(w),j=l||(O!==w&&g?function(t){if("auto"===v(t))return[];var n=H(t);return[C(t),n,C(n)]}(w):[H(w)]),M=[w].concat(j).reduce((function(t,n){return t.concat("auto"===v(n)?K(i,{placement:n,boundary:b,rootBoundary:m,padding:d,flipVariations:g,allowedAutoPlacements:x}):n)}),[]),k=i.rects.reference,E=i.rects.popper,A=new Map,P=!0,q=M[0],B=0;B<M.length;B++){var S=M[B],W=v(S),L="start"===R(S),T=[n,e].indexOf(W)>=0,I=T?"width":"height",z=J(i,{placement:S,boundary:b,rootBoundary:m,altBoundary:h,padding:d}),$=T?L?r:o:L?e:n;k[I]>E[I]&&($=H($));var D=H($),F=[];if(c&&F.push(z[W]<=0),s&&F.push(z[$]<=0,z[D]<=0),F.every((function(t){return t}))){q=S,P=!1;break}A.set(S,F)}if(P)for(var U=function(t){var n=M.find((function(n){var e=A.get(n);if(e)return e.slice(0,t).every((function(t){return t}))}));if(n)return q=n,"break"},V=g?3:1;V>0&&"break"!==U(V);V--);i.placement!==q&&(i.modifiersData[u]._skip=!0,i.placement=q,i.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var i=t.state,a=t.options,u=t.name,f=a.mainAxis,c=void 0===f||f,p=a.altAxis,s=void 0!==p&&p,l=a.tether,d=void 0===l||l,h=a.tetherOffset,y=void 0===h?0:h,x=J(i,{boundary:a.boundary,rootBoundary:a.rootBoundary,padding:a.padding,altBoundary:a.altBoundary}),w=v(i.placement),O=R(i.placement),j=!O,M=A(w),k="x"===M?"y":"x",q=i.modifiersData.popperOffsets,B=i.rects.reference,S=i.rects.popper,W="function"==typeof y?y(Object.assign({},i.rects,{placement:i.placement})):y,L="number"==typeof W?{mainAxis:W,altAxis:W}:Object.assign({mainAxis:0,altAxis:0},W),T=i.modifiersData.offset?i.modifiersData.offset[i.placement]:null,H={x:0,y:0};if(q){if(c){var I,C="y"===M?n:o,z="y"===M?e:r,$="y"===M?"height":"width",D=q[M],F=D+x[C],U=D-x[z],V=d?-S[$]/2:0,_="start"===O?B[$]:S[$],G="start"===O?-S[$]:-B[$],K=i.elements.arrow,N=d&&K?g(K):{width:0,height:0},Q=i.modifiersData["arrow#persistent"]?i.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},X=Q[C],Y=Q[z],Z=P(0,B[$],N[$]),tt=j?B[$]/2-V-Z-X-L.mainAxis:_-Z-X-L.mainAxis,nt=j?-B[$]/2+V+Z+Y+L.mainAxis:G+Z+Y+L.mainAxis,et=i.elements.arrow&&E(i.elements.arrow),rt=null!=(I=null==T?void 0:T[M])?I:0,ot=D+nt-rt,it=P(d?m(F,D+tt-rt-(et?"y"===M?et.clientTop||0:et.clientLeft||0:0)):F,D,d?b(U,ot):U);q[M]=it,H[M]=it-D}if(s){var at,ut=q[k],ft="y"===k?"height":"width",ct=ut+x["x"===M?n:o],pt=ut-x["x"===M?e:r],st=-1!==[n,o].indexOf(w),lt=null!=(at=null==T?void 0:T[k])?at:0,dt=st?ct:ut-B[ft]-S[ft]-lt+L.altAxis,vt=st?ut+B[ft]+S[ft]-lt-L.altAxis:pt,bt=d&&st?function(t,n,e){var r=P(t,n,e);return r>e?e:r}(dt,ut,vt):P(d?dt:ct,ut,d?vt:pt);q[k]=bt,H[k]=bt-ut}i.modifiersData[u]=H}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(t){var a,u=t.state,f=t.name,c=t.options,p=u.elements.arrow,s=u.modifiersData.popperOffsets,l=v(u.placement),d=A(l),b=[o,r].indexOf(l)>=0?"height":"width";if(p&&s){var m=function(t,n){return q("number"!=typeof(t="function"==typeof t?t(Object.assign({},n.rects,{placement:n.placement})):t)?t:B(t,i))}(c.padding,u),h=g(p),y="y"===d?n:o,x="y"===d?e:r,w=u.rects.reference[b]+u.rects.reference[d]-s[d]-u.rects.popper[b],O=s[d]-u.rects.reference[d],j=E(p),M=j?"y"===d?j.clientHeight||0:j.clientWidth||0:0,k=M/2-h[b]/2+(w/2-O/2),R=P(m[y],k,M-h[b]-m[x]);u.modifiersData[f]=((a={})[d]=R,a.centerOffset=R-k,a)}},effect:function(t){var n=t.state,e=t.options.element,r=void 0===e?"[data-popper-arrow]":e;null!=r&&("string"!=typeof r||(r=n.elements.popper.querySelector(r)))&&x(n.elements.popper,r)&&(n.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var n=t.state,e=t.name,r=n.rects.reference,o=n.rects.popper,i=n.modifiersData.preventOverflow,a=J(n,{elementContext:"reference"}),u=J(n,{altBoundary:!0}),f=N(a,r),c=N(u,o,i),p=Q(f),s=Q(c);n.modifiersData[e]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:s},n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":s})}}]});const rt={animation:"calcite-popper-anim",animationActive:"calcite-popper-anim--active"};function ot(n,e){const r=["left","right"],o=["start","end"];return"rtl"===t(n)&&(r.reverse(),o.reverse()),e.replace(/-leading/gi,`-${o[0]}`).replace(/-trailing/gi,`-${o[1]}`).replace(/leading/gi,r[0]).replace(/trailing/gi,r[1])}function it({referenceEl:t,el:n,placement:e,overlayPositioning:r="absolute",modifiers:o}){return t?et(t,n,{strategy:r,placement:ot(n,e),modifiers:o}):null}async function at({el:t,modifiers:n,placement:e,popper:r}){const o=ot(t,e);await r.setOptions({modifiers:n,placement:o})}const ut=Math.ceil((4,Math.sqrt(Math.pow(4,2)+Math.pow(4,2))));export{rt as C,it as c,ut as d,at as u}