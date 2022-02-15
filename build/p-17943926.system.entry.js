var __awaiter=this&&this.__awaiter||function(i,t,e,a){function n(i){return i instanceof e?i:new e((function(t){t(i)}))}return new(e||(e=Promise))((function(e,r){function o(i){try{l(a.next(i))}catch(i){r(i)}}function c(i){try{l(a["throw"](i))}catch(i){r(i)}}function l(i){i.done?e(i.value):n(i.value).then(o,c)}l((a=a.apply(i,t||[])).next())}))};var __generator=this&&this.__generator||function(i,t){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},a,n,r,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(i){return function(t){return l([i,t])}}function l(o){if(a)throw new TypeError("Generator is already executing.");while(e)try{if(a=1,n&&(r=o[0]&2?n["return"]:o[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;if(n=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:e.label++;return{value:o[1],done:false};case 5:e.label++;n=o[1];o=[0];continue;case 7:o=e.ops.pop();e.trys.pop();continue;default:if(!(r=e.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){e=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){e.label=o[1];break}if(o[0]===6&&e.label<r[1]){e.label=r[1];r=o;break}if(r&&e.label<r[2]){e.label=r[2];e.ops.push(o);break}if(r[2])e.ops.pop();e.trys.pop();continue}o=t.call(i,e)}catch(i){o=[6,i];n=0}finally{a=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */System.register(["./p-40b4e596.system.js","./p-ec9bab33.system.js","./p-e020662f.system.js","./p-9d8ffd44.system.js","./p-ac4aec20.system.js"],(function(i){"use strict";var t,e,a,n,r,o,c,l;return{setters:[function(i){t=i.r;e=i.c;a=i.h;n=i.g},function(i){r=i.g},function(i){o=i.g},function(i){c=i.c;l=i.d},function(){}],execute:function(){var s={title:"title",close:"close",chipImageContainer:"chip-image-container",calciteChipIcon:"calcite-chip--icon"};var p={close:"Close"};var u={image:"image"};var d={close:"x"};var m="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){height:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-unit-l:0.5rem;--calcite-chip-spacing-unit-s:0.25rem}:host([scale=s]) .chip-image-container{height:1.25rem;width:1.25rem}:host([scale=m]){height:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-unit-l:0.75rem;--calcite-chip-spacing-unit-s:6px}:host([scale=m]) .chip-image-container{height:1.5rem;width:1.5rem;-webkit-padding-start:0.25rem;padding-inline-start:0.25rem}:host([scale=l]){height:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-unit-l:1rem;--calcite-chip-spacing-unit-s:0.5rem}:host([scale=l]) .chip-image-container{height:2rem;width:2rem;padding-left:0.25rem}:host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-inline-flexbox;display:inline-flex;cursor:default;-ms-flex-align:center;align-items:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container{display:-ms-inline-flexbox;display:inline-flex;height:100%;max-width:100%;-ms-flex-align:center;align-items:center}.title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host span{padding:0 var(--calcite-chip-spacing-unit-l)}:host([dismissible]) span{padding-inline:var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s)}:host([icon]:not([dismissible])) span{padding:0 var(--calcite-chip-spacing-unit-l)}:host button{margin:0px;display:-ms-inline-flexbox;display:inline-flex;max-height:100%;min-height:100%;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;-webkit-appearance:none;border-start-start-radius:0;border-start-end-radius:50px;border-end-end-radius:50px;border-end-start-radius:0;padding:0 var(--calcite-chip-spacing-unit-s);color:inherit;--calcite-chip-transparent-hover:var(--calcite-button-transparent-hover);--calcite-chip-transparent-press:var(--calcite-button-transparent-press)}:host button:hover{background-color:var(--calcite-chip-transparent-hover)}:host button:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host button:active{background-color:var(--calcite-chip-transparent-press)}.chip-image-container{display:-ms-inline-flexbox;display:inline-flex;border-radius:50%;overflow:hidden}:host slot[name=image]::slotted(*){display:-ms-flexbox;display:flex;height:100%;width:100%;border-radius:50%;overflow:hidden}.calcite-chip--icon{position:relative;margin-top:0px;margin-bottom:0px;display:-ms-inline-flexbox;display:inline-flex;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-margin-end:0;margin-inline-end:0;-webkit-margin-start:var(--calcite-chip-spacing-unit-l);margin-inline-start:var(--calcite-chip-spacing-unit-l);border-start-start-radius:0;border-start-end-radius:50px;border-end-end-radius:50px;border-end-start-radius:0}:host([color=blue][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-info);color:var(--calcite-ui-text-inverse)}:host([color=red][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-danger);color:var(--calcite-ui-text-inverse)}:host([color=yellow][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-warning);color:#151515}:host([color=green][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-success);color:#151515}:host([color=grey][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host([color=grey][appearance=solid]) button,:host([color=grey][appearance=solid]) calcite-icon{color:var(--calcite-ui-text-3)}:host([color=blue][appearance=clear]){border-color:var(--calcite-ui-info)}:host([color=blue][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-info)}:host([color=red][appearance=clear]){border-color:var(--calcite-ui-danger)}:host([color=red][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-danger)}:host([color=yellow][appearance=clear]){border-color:var(--calcite-ui-warning)}:host([color=yellow][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-warning)}:host([color=green][appearance=clear]){border-color:var(--calcite-ui-success)}:host([color=green][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-success)}:host([color=grey][appearance=clear]){border-color:var(--calcite-ui-border-1)}:host([color=grey][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-text-3)}";var h=i("calcite_chip",function(){function i(i){var a=this;t(this,i);this.calciteChipDismiss=e(this,"calciteChipDismiss",7);this.appearance="solid";this.color="grey";this.dismissible=false;this.dismissLabel=p.close;this.iconFlipRtl=false;this.scale="m";this.closeClickHandler=function(i){i.preventDefault();a.calciteChipDismiss.emit(a.el)};this.guid=o()}i.prototype.connectedCallback=function(){c(this)};i.prototype.disconnectedCallback=function(){l(this)};i.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var i;return __generator(this,(function(t){(i=this.closeButton)===null||i===void 0?void 0:i.focus();return[2]}))}))};i.prototype.renderChipImage=function(){var i=this.el;var t=r(i,u.image);return t?a("div",{class:s.chipImageContainer,key:"image"},a("slot",{name:u.image})):null};i.prototype.render=function(){var i=this;var t=a("calcite-icon",{class:s.calciteChipIcon,flipRtl:this.iconFlipRtl,icon:this.icon,scale:"s"});var e=a("button",{"aria-describedby":this.guid,"aria-label":this.dismissLabel,class:s.close,onClick:this.closeClickHandler,ref:function(t){return i.closeButton=t}},a("calcite-icon",{icon:d.close,scale:"s"}));return a("div",{class:"container"},this.renderChipImage(),this.icon?t:null,a("span",{class:s.title,id:this.guid},a("slot",null)),this.dismissible?e:null)};Object.defineProperty(i.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return i}());h.style=m}}}));