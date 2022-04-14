var __awaiter=this&&this.__awaiter||function(t,e,i,a){function o(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,n){function r(t){try{l(a.next(t))}catch(t){n(t)}}function s(t){try{l(a["throw"](t))}catch(t){n(t)}}function l(t){t.done?i(t.value):o(t.value).then(r,s)}l((a=a.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},a,o,n,r;return r={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return l([t,e])}}function l(r){if(a)throw new TypeError("Generator is already executing.");while(i)try{if(a=1,o&&(n=r[0]&2?o["return"]:r[0]?o["throw"]||((n=o["return"])&&n.call(o),0):o.next)&&!(n=n.call(o,r[1])).done)return n;if(o=0,n)r=[r[0]&2,n.value];switch(r[0]){case 0:case 1:n=r;break;case 4:i.label++;return{value:r[1],done:false};case 5:i.label++;o=r[1];r=[0];continue;case 7:r=i.ops.pop();i.trys.pop();continue;default:if(!(n=i.trys,n=n.length>0&&n[n.length-1])&&(r[0]===6||r[0]===2)){i=0;continue}if(r[0]===3&&(!n||r[1]>n[0]&&r[1]<n[3])){i.label=r[1];break}if(r[0]===6&&i.label<n[1]){i.label=n[1];n=r;break}if(n&&i.label<n[2]){i.label=n[2];i.ops.push(r);break}if(n[2])i.ops.pop();i.trys.pop();continue}r=e.call(t,i)}catch(t){r=[6,t];o=0}finally{a=n=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */import{r as registerInstance,c as createEvent,h,H as Host,g as getElement}from"./index-73638693.js";import{f as focusElement,g as getSlotted,e as ensureId,i as isCalciteFocusable}from"./dom-3f012371.js";import{c as createObserver}from"./observers-7d85a111.js";import{c as connectConditionalSlotComponent,d as disconnectConditionalSlotComponent}from"./conditionalSlot-912b4669.js";import"./guid-a53704be.js";function queryShadowRoot(t,e,i,a,o){if(a===void 0){a=20}if(o===void 0){o=0}var n=[];if(o>=a){return n}var r=function(t){var n=t.assignedNodes().filter((function(t){return t.nodeType===1}));if(n.length>0){return queryShadowRoot(n[0].parentElement,e,i,a,o+1)}return[]};var s=Array.from(t.children||[]);for(var l=0,c=s;l<c.length;l++){var d=c[l];if(e(d)){continue}if(i(d)){n.push(d)}if(d.shadowRoot!=null){n.push.apply(n,queryShadowRoot(d.shadowRoot,e,i,a,o+1))}else if(d.tagName==="SLOT"){n.push.apply(n,r(d))}else{n.push.apply(n,queryShadowRoot(d,e,i,a,o+1))}}return n}function isHidden(t){return t.hasAttribute("hidden")||t.hasAttribute("aria-hidden")&&t.getAttribute("aria-hidden")!=="false"||t.style.display==="none"||t.style.opacity==="0"||t.style.visibility==="hidden"||t.style.visibility==="collapse"}function isDisabled(t){return t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&t.getAttribute("aria-disabled")!=="false"}function isFocusable(t){if(t.getAttribute("tabindex")==="-1"||isHidden(t)||isDisabled(t)){return false}return t.hasAttribute("tabindex")||(t instanceof HTMLAnchorElement||t instanceof HTMLAreaElement)&&t.hasAttribute("href")||(t instanceof HTMLButtonElement||t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)||t instanceof HTMLIFrameElement}var CSS={title:"title",header:"header",footer:"footer",scrim:"scrim",back:"back",close:"close",secondary:"secondary",primary:"primary",overflowHidden:"overflow-hidden"};var ICONS={close:"x"};var SLOTS={content:"content",header:"header",back:"back",secondary:"secondary",primary:"primary"};var TEXT={close:"Close"};var modalCss="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:fixed;top:0px;right:0px;bottom:0px;left:0px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;overflow-y:hidden;color:var(--calcite-ui-text-2);opacity:0;visibility:hidden !important;-webkit-transition:visibility 0ms linear 300ms, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear 300ms, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);z-index:101}:host([scale=s]){--calcite-modal-padding:0.75rem;--calcite-modal-padding-large:1rem;--calcite-modal-title-text:var(--calcite-font-size-1);--calcite-modal-content-text:var(--calcite-font-size--1)}:host([scale=m]){--calcite-modal-padding:1rem;--calcite-modal-padding-large:1.25rem;--calcite-modal-title-text:var(--calcite-font-size-2);--calcite-modal-content-text:var(--calcite-font-size-0)}:host([scale=l]){--calcite-modal-padding:1.25rem;--calcite-modal-padding-large:1.5rem;--calcite-modal-title-text:var(--calcite-font-size-3);--calcite-modal-content-text:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:rgba(0, 0, 0, 0.75);position:fixed;top:0px;right:0px;bottom:0px;left:0px;display:-ms-flexbox;display:flex;overflow-y:hidden}.modal{pointer-events:none;float:none;margin:1.5rem;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;width:100%;-ms-flex-direction:column;flex-direction:column;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);opacity:0;--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);overflow:hidden;z-index:102;-webkit-overflow-scrolling:touch;visibility:hidden;-webkit-transition:visibility 0ms linear 300ms, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear 300ms, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);-webkit-transform:translate3d(0, 20px, 0);transform:translate3d(0, 20px, 0)}:host([active]){opacity:1;visibility:visible !important;-webkit-transition-delay:0ms;transition-delay:0ms}:host([active]) .modal{pointer-events:auto;visibility:visible;opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);-webkit-transition-delay:0ms;transition-delay:0ms}.header{display:-ms-flexbox;display:flex;min-width:0px;max-width:100%;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;border-width:0px;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);-ms-flex:0 0 auto;flex:0 0 auto;z-index:2}.close{-ms-flex-order:2;order:2;margin:0px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;border-start-end-radius:0.25rem;padding:var(--calcite-modal-padding);-ms-flex:0 0 auto;flex:0 0 auto}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.close:hover,.close:focus,.close:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.title{-ms-flex-order:1;order:1;display:-ms-flexbox;display:flex;min-width:0px;-ms-flex-align:center;align-items:center;-ms-flex:1 1 auto;flex:1 1 auto;padding:var(--calcite-modal-padding) var(--calcite-modal-padding-large)}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1);font-size:var(--calcite-modal-title-text)}.content{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;height:100%;overflow:auto;background-color:var(--calcite-ui-foreground-1);padding:0px;max-height:calc(100vh - 12rem);z-index:1}.content--spaced{padding:var(--calcite-modal-padding) var(--calcite-modal-padding-large)}.content--no-footer{border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-content-text)}:host([background-color=grey]) .content{background-color:var(--calcite-ui-background)}.footer{margin-top:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;width:100%;-ms-flex-pack:justify;justify-content:space-between;border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem;border-width:0px;border-top-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);-ms-flex:0 0 auto;flex:0 0 auto;padding:var(--calcite-modal-padding) var(--calcite-modal-padding-large);z-index:2}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;-webkit-margin-end:auto;margin-inline-end:auto}.secondary{margin-left:0.25rem;margin-right:0.25rem;display:block}slot[name=primary]{display:block}:host([width=small]) .modal{width:auto}:host([width=s]) .modal{max-width:32rem}@media screen and (max-width: 35rem){:host([width=s]) .modal{margin:0px}:host([width=s]) .modal{height:100%}:host([width=s]) .modal{max-height:100%}:host([width=s]) .modal{width:100%}:host([width=s]) .modal{max-width:100%}:host([width=s]) .modal{border-radius:0px}:host([width=s]) .content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=s][docked]){-ms-flex-align:end;align-items:flex-end}}:host([width=m]) .modal{max-width:48rem}@media screen and (max-width: 51rem){:host([width=m]) .modal{margin:0px}:host([width=m]) .modal{height:100%}:host([width=m]) .modal{max-height:100%}:host([width=m]) .modal{width:100%}:host([width=m]) .modal{max-width:100%}:host([width=m]) .modal{border-radius:0px}:host([width=m]) .content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=m][docked]){-ms-flex-align:end;align-items:flex-end}}:host([width=l]) .modal{max-width:94rem}@media screen and (max-width: 97rem){:host([width=l]) .modal{margin:0px}:host([width=l]) .modal{height:100%}:host([width=l]) .modal{max-height:100%}:host([width=l]) .modal{width:100%}:host([width=l]) .modal{max-width:100%}:host([width=l]) .modal{border-radius:0px}:host([width=l]) .content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=l][docked]){-ms-flex-align:end;align-items:flex-end}}:host([fullscreen]){background-color:transparent}:host([fullscreen]) .modal{margin:0px;height:100%;max-height:100%;width:100%;max-width:100%;-webkit-transform:translate3D(0, 20px, 0) scale(0.95);transform:translate3D(0, 20px, 0) scale(0.95)}:host([fullscreen]) .content{max-height:100%;-ms-flex:1 1 auto;flex:1 1 auto}:host([active][fullscreen]) .modal{-webkit-transform:translate3D(0, 0, 0) scale(1);transform:translate3D(0, 0, 0) scale(1)}:host([active][fullscreen]) .header{border-radius:0}:host([active][fullscreen]) .footer{border-radius:0}:host([docked]) .modal{height:auto}:host([docked]) .content{height:auto;-ms-flex:1 1 auto;flex:1 1 auto}@media screen and (max-width: 860px){:host([docked]) .modal{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}:host([docked]) .close{border-start-end-radius:var(--calcite-border-radius)}}:host([color=red]) .modal{border-color:var(--calcite-ui-danger)}:host([color=blue]) .modal{border-color:var(--calcite-ui-info)}:host([color=red]) .modal,:host([color=blue]) .modal{border-width:0px;border-top-width:4px;border-style:solid}:host([color=red]) .header,:host([color=blue]) .header{border-radius:0.25rem;border-bottom-right-radius:0px;border-bottom-left-radius:0px}@media screen and (max-width: 860px){slot[name=header]::slotted(*),*::slotted([slot=header]){font-size:var(--calcite-font-size-1)}.footer{position:-webkit-sticky;position:sticky}.footer{bottom:0px}}@media screen and (max-width: 480px){.footer{-ms-flex-direction:column;flex-direction:column}.back,.secondary{margin:0px}.back,.secondary{margin-bottom:0.25rem}}";var isFocusableExtended=function(t){return isCalciteFocusable(t)||isFocusable(t)};var getFocusableElements=function(t){return queryShadowRoot(t,isHidden,isFocusableExtended)};var Modal=function(){function t(t){var e=this;registerInstance(this,t);this.calciteModalOpen=createEvent(this,"calciteModalOpen",7);this.calciteModalClose=createEvent(this,"calciteModalClose",7);this.active=false;this.beforeClose=function(){return Promise.resolve()};this.disableCloseButton=false;this.disableOutsideClose=false;this.intlClose=TEXT.close;this.disableEscape=false;this.scale="m";this.width="m";this.backgroundColor="white";this.noPadding=false;this.hasFooter=true;this.mutationObserver=createObserver("mutation",(function(){return e.updateFooterVisibility()}));this.activeTransitionProp="opacity";this.transitionEnd=function(t){if(t.propertyName===e.activeTransitionProp){e.active?e.calciteModalOpen.emit():e.calciteModalClose.emit()}};this.openEnd=function(){e.setFocus();e.el.removeEventListener("calciteModalOpen",e.openEnd)};this.handleOutsideClose=function(){if(e.disableOutsideClose){return}e.close()};this.close=function(){return e.beforeClose(e.el).then((function(){e.active=false;focusElement(e.previousActiveElement);e.removeOverflowHiddenClass()}))};this.focusFirstElement=function(){focusElement(e.disableCloseButton?getFocusableElements(e.el)[0]:e.closeButtonEl)};this.focusLastElement=function(){var t=getFocusableElements(e.el).filter((function(t){return!t.getAttribute("data-focus-fence")}));if(t.length>0){focusElement(t[t.length-1])}else{focusElement(e.closeButtonEl)}};this.updateFooterVisibility=function(){e.hasFooter=!!getSlotted(e.el,[SLOTS.back,SLOTS.primary,SLOTS.secondary])}}t.prototype.componentWillLoad=function(){if(this.active){this.open()}};t.prototype.connectedCallback=function(){var t;(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true,subtree:true});this.updateFooterVisibility();connectConditionalSlotComponent(this)};t.prototype.disconnectedCallback=function(){var t;this.removeOverflowHiddenClass();(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect();disconnectConditionalSlotComponent(this)};t.prototype.render=function(){var t=this;return h(Host,{"aria-describedby":this.contentId,"aria-labelledby":this.titleId,"aria-modal":"true",role:"dialog"},h("calcite-scrim",{class:CSS.scrim,onClick:this.handleOutsideClose}),this.renderStyle(),h("div",{class:"modal",onTransitionEnd:this.transitionEnd},h("div",{"data-focus-fence":true,onFocus:this.focusLastElement,tabindex:"0"}),h("div",{class:CSS.header},this.renderCloseButton(),h("header",{class:CSS.title},h("slot",{name:CSS.header}))),h("div",{class:{content:true,"content--spaced":!this.noPadding,"content--no-footer":!this.hasFooter},ref:function(e){return t.modalContent=e}},h("slot",{name:SLOTS.content})),this.renderFooter(),h("div",{"data-focus-fence":true,onFocus:this.focusFirstElement,tabindex:"0"})))};t.prototype.renderFooter=function(){return this.hasFooter?h("div",{class:CSS.footer,key:"footer"},h("span",{class:CSS.back},h("slot",{name:SLOTS.back})),h("span",{class:CSS.secondary},h("slot",{name:SLOTS.secondary})),h("span",{class:CSS.primary},h("slot",{name:SLOTS.primary}))):null};t.prototype.renderCloseButton=function(){var t=this;return!this.disableCloseButton?h("button",{"aria-label":this.intlClose,class:CSS.close,key:"button",onClick:this.close,ref:function(e){return t.closeButtonEl=e},title:this.intlClose},h("calcite-icon",{icon:ICONS.close,scale:this.scale==="s"?"s":this.scale==="m"?"m":this.scale==="l"?"l":null})):null};t.prototype.renderStyle=function(){var t=!isNaN(parseInt("".concat(this.width)));return t?h("style",null,"\n        .modal {\n          max-width: ".concat(this.width,"px !important;\n        }\n        @media screen and (max-width: ").concat(this.width,"px) {\n          .modal {\n            height: 100% !important;\n            max-height: 100% !important;\n            width: 100% !important;\n            max-width: 100% !important;\n            margin: 0 !important;\n            border-radius: 0 !important;\n          }\n          .content {\n            flex: 1 1 auto !important;\n            max-height: unset !important;\n          }\n        }\n      ")):null};t.prototype.handleEscape=function(t){if(this.active&&!this.disableEscape&&t.key==="Escape"){this.close()}};t.prototype.focusElement=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(t){t.focus()}return[2,this.setFocus()]}))}))};t.prototype.setFocus=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(i){e=this.closeButtonEl;return[2,focusElement(t==="close-button"?e:getFocusableElements(this.el)[0]||e)]}))}))};t.prototype.scrollContent=function(t,e){if(t===void 0){t=0}if(e===void 0){e=0}return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){if(this.modalContent){if(this.modalContent.scrollTo){this.modalContent.scrollTo({top:t,left:e,behavior:"smooth"})}else{this.modalContent.scrollTop=t;this.modalContent.scrollLeft=e}}return[2]}))}))};t.prototype.toggleModal=function(t,e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){if(t!==e){if(t){this.open()}else if(!t){this.close()}}return[2]}))}))};t.prototype.open=function(){this.previousActiveElement=document.activeElement;this.el.addEventListener("calciteModalOpen",this.openEnd);this.active=true;var t=getSlotted(this.el,SLOTS.header);var e=getSlotted(this.el,SLOTS.content);this.titleId=ensureId(t);this.contentId=ensureId(e);document.documentElement.classList.add(CSS.overflowHidden)};t.prototype.removeOverflowHiddenClass=function(){document.documentElement.classList.remove(CSS.overflowHidden)};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{active:["toggleModal"]}},enumerable:false,configurable:true});return t}();Modal.style=modalCss;export{Modal as calcite_modal};