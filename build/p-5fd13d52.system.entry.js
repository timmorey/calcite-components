var __awaiter=this&&this.__awaiter||function(e,t,a,n){function i(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,r){function o(e){try{l(n.next(e))}catch(e){r(e)}}function s(e){try{l(n["throw"](e))}catch(e){r(e)}}function l(e){e.done?a(e.value):i(e.value).then(o,s)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var a={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,i,r,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,i&&(r=o[0]&2?i["return"]:o[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;if(i=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:a.label++;return{value:o[1],done:false};case 5:a.label++;i=o[1];o=[0];continue;case 7:o=a.ops.pop();a.trys.pop();continue;default:if(!(r=a.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){a=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(o[0]===6&&a.label<r[1]){a.label=r[1];r=o;break}if(r&&a.label<r[2]){a.label=r[2];a.ops.push(o);break}if(r[2])a.ops.pop();a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e];i=0}finally{n=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */System.register(["./p-40b4e596.system.js","./p-e2047621.system.js","./p-e020662f.system.js","./p-ec9bab33.system.js","./p-27555c55.system.js"],(function(e){"use strict";var t,a,n,i,r,o,s,l,c,p,f,m,d,u;return{setters:[function(e){t=e.r;a=e.c;n=e.f;i=e.h;r=e.H;o=e.g},function(e){s=e.d;l=e.u;c=e.c;p=e.C},function(e){f=e.g},function(e){m=e.q;d=e.h},function(e){u=e.H}],execute:function(){var h={container:"container",arrow:"arrow",imageContainer:"image-container",closeButtonContainer:"close-button-container",closeButton:"close-button",content:"content",hasHeader:"has-header",header:"header",headerContent:"header-content",heading:"heading"};var b={close:"Close"};var v="data-calcite-popover-reference";var w="aria-controls";var y="aria-expanded";var g=2;var x='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host([data-popper-placement^=bottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^=top]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^=left]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^=right]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top]) .arrow{bottom:-4px}:host([data-popper-placement^=bottom]) .arrow{top:-4px}:host([data-popper-placement^=left]) .arrow{right:-4px}:host([data-popper-placement^=right]) .arrow{left:-4px}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-popper-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:start;justify-content:flex-start;border-width:0px;border-bottom-width:1px;border-style:solid;background-color:var(--calcite-ui-foreground-1);border-bottom-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;white-space:normal;padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1)}.container.has-header{-ms-flex-direction:column;flex-direction:column}.content{display:-ms-flexbox;display:flex;height:100%;width:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-item-align:center;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex:0 0 auto;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){height:100%}';var k=e("calcite_popover",function(){function e(e){var n=this;t(this,e);this.calcitePopoverClose=a(this,"calcitePopoverClose",7);this.calcitePopoverOpen=a(this,"calcitePopoverOpen",7);this.closeButton=false;this.dismissible=false;this.disableFlip=false;this.disablePointer=false;this.offsetDistance=s;this.offsetSkidding=0;this.open=false;this.overlayPositioning="absolute";this.placement="auto";this.intlClose=b.close;this.guid="calcite-popover-"+f();this.activeTransitionProp="opacity";this.setUpReferenceElement=function(){n.removeReferences();n.effectiveReferenceElement=n.getReferenceElement();var e=n,t=e.el,a=e.referenceElement,i=e.effectiveReferenceElement;if(a&&!i){console.warn(t.tagName+': reference-element id "'+a+'" was not found.',{el:t})}n.addReferences();n.createPopper()};this.getId=function(){return n.el.id||n.guid};this.setExpandedAttr=function(){var e=n,t=e.effectiveReferenceElement,a=e.open;if(!t){return}t.setAttribute(y,a.toString())};this.addReferences=function(){var e=n.effectiveReferenceElement;if(!e){return}var t=n.getId();e.setAttribute(v,t);e.setAttribute(w,t);n.setExpandedAttr()};this.removeReferences=function(){var e=n.effectiveReferenceElement;if(!e){return}e.removeAttribute(v);e.removeAttribute(w);e.removeAttribute(y)};this.hide=function(){n.open=false};this.transitionEnd=function(e){if(e.propertyName===n.activeTransitionProp){n.open?n.calcitePopoverOpen.emit():n.calcitePopoverClose.emit()}}}e.prototype.offsetDistanceOffsetHandler=function(){this.reposition()};e.prototype.offsetSkiddingHandler=function(){this.reposition()};e.prototype.openHandler=function(){this.reposition();this.setExpandedAttr()};e.prototype.placementHandler=function(){this.reposition()};e.prototype.referenceElementHandler=function(){this.setUpReferenceElement()};e.prototype.componentWillLoad=function(){this.setUpReferenceElement()};e.prototype.componentDidLoad=function(){this.reposition()};e.prototype.disconnectedCallback=function(){this.removeReferences();this.destroyPopper()};e.prototype.reposition=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,a,n,i,r;return __generator(this,(function(o){switch(o.label){case 0:e=this,t=e.popper,a=e.el,n=e.placement;i=this.getModifiers();if(!t)return[3,2];return[4,l({el:a,modifiers:i,placement:n,popper:t})];case 1:r=o.sent();return[3,3];case 2:r=this.createPopper();o.label=3;case 3:r;return[2]}}))}))};e.prototype.setFocus=function(e){return __awaiter(this,void 0,void 0,(function(){var t,a;return __generator(this,(function(i){a=this.closeButtonEl;if(e==="close-button"&&a){n(a);a.setFocus();return[2]}(t=this.el)===null||t===void 0?void 0:t.focus();return[2]}))}))};e.prototype.toggle=function(e){if(e===void 0){e=!this.open}return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.open=e;return[2]}))}))};e.prototype.getReferenceElement=function(){var e=this,t=e.referenceElement,a=e.el;return(typeof t==="string"?m(a,{id:t}):t)||null};e.prototype.getModifiers=function(){var e=this,t=e.arrowEl,a=e.flipPlacements,n=e.disableFlip,i=e.disablePointer,r=e.offsetDistance,o=e.offsetSkidding;var s={name:"flip",enabled:!n};if(a){s.options={fallbackPlacements:a}}var l={name:"arrow",enabled:!i};if(t){l.options={element:t}}var c={name:"offset",enabled:true,options:{offset:[o,r]}};return[l,s,c]};e.prototype.createPopper=function(){this.destroyPopper();var e=this,t=e.el,a=e.placement,n=e.effectiveReferenceElement,i=e.overlayPositioning;var r=this.getModifiers();this.popper=c({el:t,modifiers:r,overlayPositioning:i,placement:a,referenceEl:n})};e.prototype.destroyPopper=function(){var e=this.popper;if(e){e.destroy()}this.popper=null};e.prototype.renderCloseButton=function(){var e=this;var t=this,a=t.dismissible,n=t.closeButton,r=t.intlClose;return a||n?i("div",{class:h.closeButtonContainer},i("calcite-action",{class:h.closeButton,onClick:this.hide,ref:function(t){return e.closeButtonEl=t},text:r},i("calcite-icon",{icon:"x",scale:"m"}))):null};e.prototype.renderHeader=function(){var e=this,t=e.heading,a=e.headingLevel;var n=t?i(u,{class:h.heading,level:a||g},t):null;return n?i("div",{class:h.header},n,this.renderCloseButton()):null};e.prototype.render=function(){var e,t;var a=this;var n=this,o=n.effectiveReferenceElement,s=n.heading,l=n.label,c=n.open,f=n.disablePointer;var m=o&&c;var d=!m;var u=!f?i("div",{class:h.arrow,ref:function(e){return a.arrowEl=e}}):null;return i(r,{"aria-hidden":d.toString(),"aria-label":l,"calcite-hydrated-hidden":d,id:this.getId(),role:"dialog"},i("div",{class:(e={},e[p.animation]=true,e[p.animationActive]=m,e),onTransitionEnd:this.transitionEnd},u,i("div",{class:(t={},t[h.hasHeader]=!!s,t[h.container]=true,t)},this.renderHeader(),i("div",{class:h.content},i("slot",null)),!s?this.renderCloseButton():null)))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}},enumerable:false,configurable:true});return e}());k.style=x;var D="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}";var _=e("calcite_popover_manager",function(){function e(e){var a=this;t(this,e);this.selector="["+v+"]";this.autoClose=false;this.queryPopover=function(e){var t=a.el;if(!e.includes(t)){return null}var n=e.find((function(e){var t;return(t=e===null||e===void 0?void 0:e.hasAttribute)===null||t===void 0?void 0:t.call(e,v)}));if(!n){return null}var i=n.getAttribute(v);return m(t,{id:i})}}e.prototype.render=function(){return i("slot",null)};e.prototype.closeOpenPopovers=function(e){var t=this,a=t.autoClose,n=t.el;var i="calcite-popover";var r=e.composedPath();var o=this.queryPopover(r);if(o){o.toggle();return}if(a){d(n,i).filter((function(e){return e.open&&!r.includes(e)})).forEach((function(e){return e.toggle(false)}))}};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return e}());_.style=D}}}));