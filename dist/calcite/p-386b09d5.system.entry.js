var __awaiter=this&&this.__awaiter||function(t,n,e,a){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,r){function o(t){try{s(a.next(t))}catch(t){r(t)}}function c(t){try{s(a["throw"](t))}catch(t){r(t)}}function s(t){t.done?e(t.value):i(t.value).then(o,c)}s((a=a.apply(t,n||[])).next())}))};var __generator=this&&this.__generator||function(t,n){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},a,i,r,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(t){return function(n){return s([t,n])}}function s(o){if(a)throw new TypeError("Generator is already executing.");while(e)try{if(a=1,i&&(r=o[0]&2?i["return"]:o[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;if(i=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:e.label++;return{value:o[1],done:false};case 5:e.label++;i=o[1];o=[0];continue;case 7:o=e.ops.pop();e.trys.pop();continue;default:if(!(r=e.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){e=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){e.label=o[1];break}if(o[0]===6&&e.label<r[1]){e.label=r[1];r=o;break}if(r&&e.label<r[2]){e.label=r[2];e.ops.push(o);break}if(r[2])e.ops.pop();e.trys.pop();continue}o=n.call(t,e)}catch(t){o=[6,t];i=0}finally{a=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */System.register(["./p-6a9fef86.system.js","./p-b18c5709.system.js","./p-e2afe2fb.system.js","./p-d0501de1.system.js"],(function(t){"use strict";var n,e,a,i,r,o,c;return{setters:[function(t){n=t.a;e=t.r;a=t.h;i=t.H;r=t.g},function(t){o=t.a},function(t){c=t.c},function(){}],execute:function(){var s={icon:"icon",flipRtl:"flip-rtl"};var l={};var f={};var u={s:16,m:24,l:32};function m(t){var e=t.icon,a=t.scale;return __awaiter(this,void 0,void 0,(function(){var t,i,r,o,c,s;return __generator(this,(function(m){switch(m.label){case 0:t=u[a];i=h(e);r=i.charAt(i.length-1)==="F";o=r?i.substring(0,i.length-1):i;c="".concat(o).concat(t).concat(r?"F":"");if(l[c]){return[2,l[c]]}if(!f[c]){f[c]=fetch(n("./assets/icon/".concat(c,".json"))).then((function(t){return t.json()})).catch((function(){console.error('"'.concat(c,'" is not a valid calcite-ui-icon name'));return""}))}return[4,f[c]];case 1:s=m.sent();l[c]=s;return[2,s]}}))}))}function h(t){var n=!isNaN(Number(t.charAt(0)));var e=t.split("-");if(e.length===1){return n?"i".concat(t):t}return e.map((function(t,e){if(e===0){return n?"i".concat(t.toUpperCase()):t}return t.charAt(0).toUpperCase()+t.slice(1)})).join("")}var p="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){height:1rem;width:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){height:1.5rem;width:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){height:2rem;width:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}";var b=t("calcite_icon",function(){function t(t){e(this,t);this.icon=null;this.flipRtl=false;this.scale="m";this.visible=false}t.prototype.connectedCallback=function(){var t=this;this.waitUntilVisible((function(){t.visible=true;t.loadIconPathData()}))};t.prototype.disconnectedCallback=function(){var t;(t=this.intersectionObserver)===null||t===void 0?void 0:t.disconnect();this.intersectionObserver=null};t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.loadIconPathData();return[2]}))}))};t.prototype.render=function(){var t;var n=this,e=n.el,r=n.flipRtl,c=n.pathData,l=n.scale,f=n.textLabel;var m=o(e);var h=u[l];var p=!!f;var b=[].concat(c||"");return a(i,{"aria-hidden":(!p).toString(),"aria-label":p?f:null,role:p?"img":null},a("svg",{class:(t={},t[s.flipRtl]=m==="rtl"&&r,t.svg=true,t),fill:"currentColor",height:"100%",viewBox:"0 0 ".concat(h," ").concat(h),width:"100%",xmlns:"http://www.w3.org/2000/svg"},b.map((function(t){return typeof t==="string"?a("path",{d:t}):a("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})}))))};t.prototype.loadIconPathData=function(){return __awaiter(this,void 0,void 0,(function(){var t,n,e,a,i;return __generator(this,(function(r){switch(r.label){case 0:t=this,n=t.icon,e=t.scale,a=t.visible;if(!n||!a){return[2]}i=this;return[4,m({icon:n,scale:e})];case 1:i.pathData=r.sent();return[2]}}))}))};t.prototype.waitUntilVisible=function(t){var n=this;this.intersectionObserver=c("intersection",(function(e){e.forEach((function(e){if(e.isIntersecting){n.intersectionObserver.disconnect();n.intersectionObserver=null;t()}}))}),{rootMargin:"50px"});if(!this.intersectionObserver){t();return}this.intersectionObserver.observe(this.el)};Object.defineProperty(t,"assetsDirs",{get:function(){return["assets"]},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}},enumerable:false,configurable:true});return t}());b.style=p}}}));