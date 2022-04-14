var __awaiter=this&&this.__awaiter||function(t,a,e,n){function i(t){return t instanceof e?t:new e((function(a){a(t)}))}return new(e||(e=Promise))((function(e,r){function o(t){try{l(n.next(t))}catch(t){r(t)}}function c(t){try{l(n["throw"](t))}catch(t){r(t)}}function l(t){t.done?e(t.value):i(t.value).then(o,c)}l((n=n.apply(t,a||[])).next())}))};var __generator=this&&this.__generator||function(t,a){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,i,r,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(t){return function(a){return l([t,a])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(e)try{if(n=1,i&&(r=o[0]&2?i["return"]:o[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;if(i=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:e.label++;return{value:o[1],done:false};case 5:e.label++;i=o[1];o=[0];continue;case 7:o=e.ops.pop();e.trys.pop();continue;default:if(!(r=e.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){e=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){e.label=o[1];break}if(o[0]===6&&e.label<r[1]){e.label=r[1];r=o;break}if(r&&e.label<r[2]){e.label=r[2];e.ops.push(o);break}if(r[2])e.ops.pop();e.trys.pop();continue}o=a.call(t,e)}catch(t){o=[6,t];i=0}finally{n=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */System.register(["./p-6a9fef86.system.js","./p-e2afe2fb.system.js"],(function(t){"use strict";var a,e,n,i;return{setters:[function(t){a=t.r;e=t.h;n=t.g},function(t){i=t.c}],execute:function(){var r={frame:"frame",frameAdvancing:"frame--advancing",frameRetreating:"frame--retreating"};var o="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:-ms-flexbox;display:flex;width:100%;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:stretch;align-items:stretch;background-color:transparent;overflow:hidden}:host .frame{position:relative;margin:0px;display:-ms-flexbox;display:flex;width:100%;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch;padding:0px}:host ::slotted(calcite-panel){height:100%}:host ::slotted(.calcite-match-height:last-child){display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;overflow:hidden}:host .frame--advancing{-webkit-animation:calcite-frame-advance var(--calcite-animation-timing);animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{-webkit-animation:calcite-frame-retreat var(--calcite-animation-timing);animation:calcite-frame-retreat var(--calcite-animation-timing)}@-webkit-keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5}0%{-webkit-transform:translate3d(50px, 0, 0);transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1}100%{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5}0%{-webkit-transform:translate3d(50px, 0, 0);transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1}100%{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@-webkit-keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5}0%{-webkit-transform:translate3d(-50px, 0, 0);transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1}100%{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5}0%{-webkit-transform:translate3d(-50px, 0, 0);transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1}100%{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}";var c=t("calcite_flow",function(){function t(t){var e=this;a(this,t);this.panelCount=0;this.flowDirection=null;this.panels=[];this.getFlowDirection=function(t,a){var e=t>1;var n=t&&a>1;if(!n&&!e){return null}return a<t?"retreating":"advancing"};this.updateFlowProps=function(){var t=e.panels;var a=Array.from(e.el.querySelectorAll("calcite-panel"));var n=t.length;var i=a.length;var r=a[i-1];var o=a[i-2];if(i&&r){a.forEach((function(t){t.showBackButton=i>1;t.hidden=t!==r}))}if(o){o.menuOpen=false}e.panels=a;if(n!==i){var c=e.getFlowDirection(n,i);e.panelCount=i;e.flowDirection=c}};this.panelItemMutationObserver=i("mutation",this.updateFlowProps)}t.prototype.back=function(){return __awaiter(this,void 0,void 0,(function(){var t,a;return __generator(this,(function(e){t=this.el.querySelector("calcite-panel:last-child");if(!t){return[2]}a=t.beforeBack?t.beforeBack:function(){return Promise.resolve()};return[2,a.call(t).then((function(){t.remove();return t}))]}))}))};t.prototype.connectedCallback=function(){var t;(t=this.panelItemMutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true,subtree:true});this.updateFlowProps()};t.prototype.disconnectedCallback=function(){var t;(t=this.panelItemMutationObserver)===null||t===void 0?void 0:t.disconnect()};t.prototype.handleCalcitePanelBackClick=function(){this.back()};t.prototype.render=function(){var t;var a=this,n=a.flowDirection,i=a.panelCount;var o=(t={},t[r.frame]=true,t[r.frameAdvancing]=n==="advancing",t[r.frameRetreating]=n==="retreating",t);return e("div",{class:o,key:i},e("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());c.style=o}}}));