var __awaiter=this&&this.__awaiter||function(t,e,a,o){function n(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,r){function i(t){try{l(o.next(t))}catch(t){r(t)}}function c(t){try{l(o["throw"](t))}catch(t){r(t)}}function l(t){t.done?a(t.value):n(t.value).then(i,c)}l((o=o.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var a={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},o,n,r,i;return i={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function c(t){return function(e){return l([t,e])}}function l(i){if(o)throw new TypeError("Generator is already executing.");while(a)try{if(o=1,n&&(r=i[0]&2?n["return"]:i[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;if(n=0,r)i=[i[0]&2,r.value];switch(i[0]){case 0:case 1:r=i;break;case 4:a.label++;return{value:i[1],done:false};case 5:a.label++;n=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(r=a.trys,r=r.length>0&&r[r.length-1])&&(i[0]===6||i[0]===2)){a=0;continue}if(i[0]===3&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(i[0]===6&&a.label<r[1]){a.label=r[1];r=i;break}if(r&&a.label<r[2]){a.label=r[2];a.ops.push(i);break}if(r[2])a.ops.pop();a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t];n=0}finally{o=r=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */System.register(["./p-6a9fef86.system.js","./p-b18c5709.system.js","./p-1554e3fc.system.js","./p-e2afe2fb.system.js","./p-ea9c71f6.system.js","./p-d0501de1.system.js"],(function(t){"use strict";var e,a,o,n,r,i,c,l,s;return{setters:[function(t){e=t.r;a=t.h;o=t.g},function(t){n=t.c},function(t){r=t.c;i=t.d;c=t.g},function(t){l=t.c},function(t){s=t.u},function(){}],execute:function(){(function(t){if(typeof t.requestSubmit=="function")return;t.requestSubmit=function(t){if(t){e(t,this);t.click()}else{t=document.createElement("input");t.type="submit";t.hidden=true;this.appendChild(t);t.click();this.removeChild(t)}};function e(t,e){t instanceof HTMLElement||a(TypeError,"parameter 1 is not of type 'HTMLElement'");t.type=="submit"||a(TypeError,"The specified element is not a submit button");t.form==e||a(DOMException,"The specified element is not owned by this form element","NotFoundError")}function a(t,e,a){throw new t("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+e+".",a)}})(HTMLFormElement.prototype);var u={buttonLoader:"calcite-button--loader",content:"content",contentSlotted:"content--slotted",icon:"icon",iconStart:"icon--start",iconEnd:"icon--end",loadingIn:"loading-in",loadingOut:"loading-out",iconStartEmpty:"icon-start-empty",iconEndEmpty:"icon-end-empty"};var d={loading:"Loading"};var p="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline-block;width:auto;vertical-align:middle}:host([round]){border-radius:50px}:host([round]) a,:host([round]) button{border-radius:50px}:host button,:host a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus,:host a:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host button,:host a{--calcite-button-content-margin:0.5rem;--calcite-button-padding-x:7px;--calcite-button-padding-y:3px;padding:var(--calcite-button-padding-y) var(--calcite-button-padding-x) var(--calcite-button-padding-y) var(--calcite-button-padding-x);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;height:100%;width:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:0px;border-style:none;text-align:center;font-family:inherit;font-weight:var(--calcite-font-weight-normal);-webkit-text-decoration-line:none;text-decoration-line:none;-webkit-transition:color var(--calcite-animation-timing) ease-in-out, background-color var(--calcite-animation-timing) ease-in-out, outline-offset var(--calcite-internal-animation-timing-fast) ease-in-out, outline-color var(--calcite-internal-animation-timing-fast) ease-in-out, -webkit-box-shadow var(--calcite-animation-timing) ease-in-out;transition:color var(--calcite-animation-timing) ease-in-out, background-color var(--calcite-animation-timing) ease-in-out, outline-offset var(--calcite-internal-animation-timing-fast) ease-in-out, outline-color var(--calcite-internal-animation-timing-fast) ease-in-out, -webkit-box-shadow var(--calcite-animation-timing) ease-in-out;transition:color var(--calcite-animation-timing) ease-in-out, background-color var(--calcite-animation-timing) ease-in-out, box-shadow var(--calcite-animation-timing) ease-in-out, outline-offset var(--calcite-internal-animation-timing-fast) ease-in-out, outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;transition:color var(--calcite-animation-timing) ease-in-out, background-color var(--calcite-animation-timing) ease-in-out, box-shadow var(--calcite-animation-timing) ease-in-out, outline-offset var(--calcite-internal-animation-timing-fast) ease-in-out, outline-color var(--calcite-internal-animation-timing-fast) ease-in-out, -webkit-box-shadow var(--calcite-animation-timing) ease-in-out}:host button:hover,:host a:hover{-webkit-text-decoration-line:none;text-decoration-line:none}.content{display:-ms-flexbox;display:flex;-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-margin-start:var(--calcite-button-content-margin);margin-inline-start:var(--calcite-button-content-margin);-webkit-margin-end:var(--calcite-button-content-margin);margin-inline-end:var(--calcite-button-content-margin)}.icon-start-empty .content{-webkit-margin-start:unset;margin-inline-start:unset}.icon-end-empty .content{-webkit-margin-end:unset;margin-inline-end:unset}:host([scale=m]) button,:host([scale=m]) a{--calcite-button-content-margin:0.75rem}:host([scale=l]) button,:host([scale=l]) a{--calcite-button-content-margin:1rem}:host([width=auto]){width:auto}:host([width=half]){width:50%}:host([width=full]){width:100%}:host([alignment=center]:not([width=auto])) a,:host([alignment=center]:not([width=auto])) button{-ms-flex-pack:center;justify-content:center}:host([alignment=start]:not([width=auto])) a,:host([alignment=start]:not([width=auto])) button{-ms-flex-pack:start;justify-content:flex-start}:host([alignment=end]:not([width=auto])) a,:host([alignment=end]:not([width=auto])) button{-ms-flex-pack:end;justify-content:flex-end}:host([alignment*=space-between]:not([width=auto])) a,:host([alignment*=space-between]:not([width=auto])) button{-ms-flex-pack:justify;justify-content:space-between}:host([alignment=icon-start-space-between]:not([width=auto])) .icon--start{-webkit-margin-end:auto;margin-inline-end:auto}:host([alignment=icon-start-space-between]:not([width=auto])) a,:host([alignment=icon-start-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=icon-end-space-between]:not([width=auto])) .icon--end{-webkit-margin-start:auto;margin-inline-start:auto}:host([alignment=icon-end-space-between]:not([width=auto])) a,:host([alignment=icon-end-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=center]) a:not(.content--slotted) .icon--start+.icon--end,:host([alignment=center]) button:not(.content--slotted) .icon--start+.icon--end{-webkit-margin-start:var(--calcite-button-content-margin);margin-inline-start:var(--calcite-button-content-margin)}.icon{position:relative;margin:0px;display:-ms-inline-flexbox;display:inline-flex;font-weight:var(--calcite-font-weight-normal);line-height:inherit}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([loading]){pointer-events:none}:host([loading]) button,:host([loading]) a{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}@-webkit-keyframes loader-in{0%{width:0;opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)}100%{width:1em;opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes loader-in{0%{width:0;opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)}100%{width:1em;opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes loader-out{0%{width:1em;opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{width:0;opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)}}@keyframes loader-out{0%{width:1em;opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{width:0;opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)}}.calcite-button--loader{display:-ms-flexbox;display:flex}.calcite-button--loader calcite-loader{margin:0px;-webkit-transition:width var(--calcite-internal-animation-timing-slow) ease-in-out, opacity var(--calcite-internal-animation-timing-slow) ease-in-out, -webkit-transform var(--calcite-internal-animation-timing-slow) ease-in-out;transition:width var(--calcite-internal-animation-timing-slow) ease-in-out, opacity var(--calcite-internal-animation-timing-slow) ease-in-out, -webkit-transform var(--calcite-internal-animation-timing-slow) ease-in-out;transition:width var(--calcite-internal-animation-timing-slow) ease-in-out, opacity var(--calcite-internal-animation-timing-slow) ease-in-out, transform var(--calcite-internal-animation-timing-slow) ease-in-out;transition:width var(--calcite-internal-animation-timing-slow) ease-in-out, opacity var(--calcite-internal-animation-timing-slow) ease-in-out, transform var(--calcite-internal-animation-timing-slow) ease-in-out, -webkit-transform var(--calcite-internal-animation-timing-slow) ease-in-out}.calcite-button--loader calcite-loader.loading-in{-webkit-animation-name:loader-in;animation-name:loader-in;-webkit-animation-duration:310ms;animation-duration:310ms}.calcite-button--loader calcite-loader.loading-out{-webkit-animation-name:loader-out;animation-name:loader-out;-webkit-animation-duration:310ms;animation-duration:310ms}:host([loading]) button.content--slotted .calcite-button--loader calcite-loader,:host([loading]) a.content--slotted .calcite-button--loader calcite-loader{-webkit-margin-end:var(--calcite-button-content-margin);margin-inline-end:var(--calcite-button-content-margin)}:host([loading]) button:not(.content--slotted) .icon--start,:host([loading]) button:not(.content--slotted) .icon--end,:host([loading]) a:not(.content--slotted) .icon--start,:host([loading]) a:not(.content--slotted) .icon--end{display:none}:host([appearance=solid]) button,:host([appearance=solid]) a{border-width:1px;border-style:solid;border-color:transparent}:host([appearance=solid][color=blue]) button,:host([appearance=solid][color=blue]) a{background-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-inverse)}:host([appearance=solid][color=blue]) button:hover,:host([appearance=solid][color=blue]) button:focus,:host([appearance=solid][color=blue]) a:hover,:host([appearance=solid][color=blue]) a:focus{background-color:var(--calcite-ui-brand-hover)}:host([appearance=solid][color=blue]) button:active,:host([appearance=solid][color=blue]) a:active{background-color:var(--calcite-ui-brand-press)}:host([appearance=solid][color=blue]) button calcite-loader,:host([appearance=solid][color=blue]) a calcite-loader{color:var(--calcite-ui-text-inverse)}:host([appearance=solid][color=red]) button,:host([appearance=solid][color=red]) a{background-color:var(--calcite-ui-danger);color:var(--calcite-ui-text-inverse)}:host([appearance=solid][color=red]) button:hover,:host([appearance=solid][color=red]) button:focus,:host([appearance=solid][color=red]) a:hover,:host([appearance=solid][color=red]) a:focus{background-color:var(--calcite-ui-danger-hover)}:host([appearance=solid][color=red]) button:active,:host([appearance=solid][color=red]) a:active{background-color:var(--calcite-ui-danger-press)}:host([appearance=solid][color=red]) button calcite-loader,:host([appearance=solid][color=red]) a calcite-loader{color:var(--calcite-ui-text-inverse)}:host([appearance=solid][color=neutral]) button,:host([appearance=solid][color=neutral]) a{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}:host([appearance=solid][color=neutral]) button:hover,:host([appearance=solid][color=neutral]) button:focus,:host([appearance=solid][color=neutral]) a:hover,:host([appearance=solid][color=neutral]) a:focus{background-color:var(--calcite-ui-foreground-2)}:host([appearance=solid][color=neutral]) button:active,:host([appearance=solid][color=neutral]) a:active{background-color:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=neutral]) button calcite-loader,:host([appearance=solid][color=neutral]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=solid][color=inverse]) button,:host([appearance=solid][color=inverse]) a{color:var(--calcite-ui-text-inverse);background-color:var(--calcite-ui-inverse)}:host([appearance=solid][color=inverse]) button:hover,:host([appearance=solid][color=inverse]) button:focus,:host([appearance=solid][color=inverse]) a:hover,:host([appearance=solid][color=inverse]) a:focus{background-color:var(--calcite-ui-inverse-hover)}:host([appearance=solid][color=inverse]) button:active,:host([appearance=solid][color=inverse]) a:active{background-color:var(--calcite-ui-inverse-press)}:host([appearance=solid][color=inverse]) button calcite-loader,:host([appearance=solid][color=inverse]) a calcite-loader{color:var(--calcite-ui-text-inverse)}:host([appearance=outline]) button,:host([appearance=outline]) a{border-width:1px;border-style:solid;background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=blue]) button,:host([appearance=outline][color=blue]) a{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-brand)}:host([appearance=outline][color=blue]) button:hover,:host([appearance=outline][color=blue]) a:hover{border-color:var(--calcite-ui-brand-hover);color:var(--calcite-ui-brand-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}:host([appearance=outline][color=blue]) button:focus,:host([appearance=outline][color=blue]) a:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([appearance=outline][color=blue]) button:active,:host([appearance=outline][color=blue]) a:active{border-color:var(--calcite-ui-brand-press);color:var(--calcite-ui-brand-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press)}:host([appearance=outline][color=blue]) button calcite-loader,:host([appearance=outline][color=blue]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=outline][color=red]) button,:host([appearance=outline][color=red]) a{border-color:var(--calcite-ui-danger);color:var(--calcite-ui-danger)}:host([appearance=outline][color=red]) button:hover,:host([appearance=outline][color=red]) a:hover{border-color:var(--calcite-ui-danger-hover);color:var(--calcite-ui-danger-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-danger-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-danger-hover)}:host([appearance=outline][color=red]) button:focus,:host([appearance=outline][color=red]) a:focus{border-color:var(--calcite-ui-danger);color:var(--calcite-ui-danger);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-danger);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger)}:host([appearance=outline][color=red]) button:active,:host([appearance=outline][color=red]) a:active{border-color:var(--calcite-ui-danger-press);color:var(--calcite-ui-danger-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press)}:host([appearance=outline][color=red]) button calcite-loader,:host([appearance=outline][color=red]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=outline][color=neutral]) button,:host([appearance=outline][color=neutral]) a{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-foreground-3)}:host([appearance=outline][color=neutral]) button:hover,:host([appearance=outline][color=neutral]) a:hover{-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=outline][color=neutral]) button:focus,:host([appearance=outline][color=neutral]) a:focus{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=outline][color=neutral]) button:active,:host([appearance=outline][color=neutral]) a:active{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=outline][color=neutral]) button calcite-loader,:host([appearance=outline][color=neutral]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline][color=inverse]) button,:host([appearance=outline][color=inverse]) a{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-inverse)}:host([appearance=outline][color=inverse]) button:hover,:host([appearance=outline][color=inverse]) a:hover{border-color:var(--calcite-ui-inverse-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-inverse-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-inverse-hover)}:host([appearance=outline][color=inverse]) button:focus,:host([appearance=outline][color=inverse]) a:focus{border-color:var(--calcite-ui-inverse);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse)}:host([appearance=outline][color=inverse]) button:active,:host([appearance=outline][color=inverse]) a:active{border-color:var(--calcite-ui-inverse-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse-press)}:host([appearance=outline][color=inverse]) button calcite-loader,:host([appearance=outline][color=inverse]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=clear]) button,:host([appearance=clear]) a{border-width:1px;border-style:solid;background-color:transparent;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=blue]) button,:host([appearance=clear][color=blue]) a{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-brand)}:host([appearance=clear][color=blue]) button:hover,:host([appearance=clear][color=blue]) a:hover{border-color:var(--calcite-ui-brand-hover);color:var(--calcite-ui-brand-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}:host([appearance=clear][color=blue]) button:focus,:host([appearance=clear][color=blue]) a:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([appearance=clear][color=blue]) button:active,:host([appearance=clear][color=blue]) a:active{border-color:var(--calcite-ui-brand-press);color:var(--calcite-ui-brand-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press)}:host([appearance=clear][color=blue]) button calcite-loader,:host([appearance=clear][color=blue]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=clear][color=red]) button,:host([appearance=clear][color=red]) a{border-color:var(--calcite-ui-danger);color:var(--calcite-ui-danger)}:host([appearance=clear][color=red]) button:hover,:host([appearance=clear][color=red]) a:hover{border-color:var(--calcite-ui-danger-hover);color:var(--calcite-ui-danger-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-danger-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-danger-hover)}:host([appearance=clear][color=red]) button:focus,:host([appearance=clear][color=red]) a:focus{border-color:var(--calcite-ui-danger);color:var(--calcite-ui-danger);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-danger);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger)}:host([appearance=clear][color=red]) button:active,:host([appearance=clear][color=red]) a:active{border-color:var(--calcite-ui-danger-press);color:var(--calcite-ui-danger-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press)}:host([appearance=clear][color=red]) button calcite-loader,:host([appearance=clear][color=red]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=clear][color=neutral]) button,:host([appearance=clear][color=neutral]) a{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-foreground-3)}:host([appearance=clear][color=neutral]) button:hover,:host([appearance=clear][color=neutral]) a:hover{-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=clear][color=neutral]) button:focus,:host([appearance=clear][color=neutral]) a:focus{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=clear][color=neutral]) button:active,:host([appearance=clear][color=neutral]) a:active{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=clear][color=neutral]) button calcite-loader,:host([appearance=clear][color=neutral]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=clear][color=inverse]) button,:host([appearance=clear][color=inverse]) a{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-inverse)}:host([appearance=clear][color=inverse]) button:hover,:host([appearance=clear][color=inverse]) a:hover{border-color:var(--calcite-ui-inverse-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-inverse-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-inverse-hover)}:host([appearance=clear][color=inverse]) button:focus,:host([appearance=clear][color=inverse]) a:focus{border-color:var(--calcite-ui-inverse);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse)}:host([appearance=clear][color=inverse]) button:active,:host([appearance=clear][color=inverse]) a:active{border-color:var(--calcite-ui-inverse-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse-press)}:host([appearance=clear][color=inverse]) button calcite-loader,:host([appearance=clear][color=inverse]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline][split-child=primary]) button,:host([appearance=clear][split-child=primary]) button{border-inline-end-width:0;border-inline-start-width:1px}:host([appearance=outline][split-child=secondary]) button,:host([appearance=clear][split-child=secondary]) button{border-inline-start-width:0;border-inline-end-width:1px}:host([appearance=transparent]:not(.enable-editing-button)) button,:host([appearance=transparent]:not(.enable-editing-button)) a{background-color:transparent}:host([appearance=transparent]:not(.enable-editing-button)) button:hover,:host([appearance=transparent]:not(.enable-editing-button)) button:focus,:host([appearance=transparent]:not(.enable-editing-button)) a:hover,:host([appearance=transparent]:not(.enable-editing-button)) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent]:not(.enable-editing-button)) button:active,:host([appearance=transparent]:not(.enable-editing-button)) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=blue]) button,:host([appearance=transparent][color=blue]) a{color:var(--calcite-ui-brand)}:host([appearance=transparent][color=blue]) button:hover,:host([appearance=transparent][color=blue]) a:hover{color:var(--calcite-ui-brand-hover)}:host([appearance=transparent][color=blue]) button:focus,:host([appearance=transparent][color=blue]) a:focus{color:var(--calcite-ui-brand)}:host([appearance=transparent][color=blue]) button:active,:host([appearance=transparent][color=blue]) a:active{color:var(--calcite-ui-brand-press)}:host([appearance=transparent][color=blue]) button calcite-loader,:host([appearance=transparent][color=blue]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=transparent][color=red]) button,:host([appearance=transparent][color=red]) a{color:var(--calcite-ui-danger)}:host([appearance=transparent][color=red]) button:hover,:host([appearance=transparent][color=red]) a:hover{color:var(--calcite-ui-danger-hover)}:host([appearance=transparent][color=red]) button:focus,:host([appearance=transparent][color=red]) a:focus{color:var(--calcite-ui-danger)}:host([appearance=transparent][color=red]) button:active,:host([appearance=transparent][color=red]) a:active{color:var(--calcite-ui-danger-press)}:host([appearance=transparent][color=red]) button calcite-loader,:host([appearance=transparent][color=red]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=transparent][color=neutral]:not(.cancel-editing-button)) button,:host([appearance=transparent][color=neutral]:not(.cancel-editing-button)) a,:host([appearance=transparent][color=neutral]:not(.cancel-editing-button)) calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=transparent][color=neutral].cancel-editing-button) button{border-top-width:1px;border-bottom-width:1px;color:var(--calcite-ui-text-3);border-top-color:var(--calcite-ui-border-input);border-bottom-color:var(--calcite-ui-border-input);border-bottom-style:solid;border-top-style:solid}:host([appearance=transparent][color=neutral].cancel-editing-button) button:not(.content--slotted){--calcite-button-padding-y:0}:host([appearance=transparent][color=neutral].cancel-editing-button) button:hover{color:var(--calcite-ui-text-1)}:host([appearance=transparent][color=neutral].enable-editing-button) button{background-color:transparent}:host(.confirm-changes-button) button:focus,:host(.cancel-editing-button) button:focus,:host(.enable-editing-button) button:focus{outline-offset:-2px}:host([appearance=transparent][color=inverse]) button,:host([appearance=transparent][color=inverse]) a,:host([appearance=transparent][color=inverse]) calcite-loader{color:var(--calcite-ui-text-inverse)}:host([scale=s]) button.content--slotted,:host([scale=s]) a.content--slotted{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s][appearance=transparent]) button.content--slotted,:host([scale=s][appearance=transparent]) a.content--slotted{--calcite-button-padding-x:0.5rem;--calcite-button-padding-y:0.25rem}:host([scale=m]) button.content--slotted,:host([scale=m]) a.content--slotted{--calcite-button-padding-x:11px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]:not([appearance=transparent])) button.content--slotted,:host([scale=m]:not([appearance=transparent])) a.content--slotted{--calcite-button-padding-y:7px}:host([scale=m][appearance=transparent]) button.content--slotted,:host([scale=m][appearance=transparent]) a.content--slotted{--calcite-button-padding-x:0.75rem;--calcite-button-padding-y:0.5rem}:host([scale=l]) button.content--slotted,:host([scale=l]) a.content--slotted{--calcite-button-padding-x:15px;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]:not([appearance=transparent])) button.content--slotted,:host([scale=l]:not([appearance=transparent])) a.content--slotted{--calcite-button-padding-y:11px}:host([scale=l][appearance=transparent]) button.content--slotted,:host([scale=l][appearance=transparent]) a.content--slotted{--calcite-button-padding-x:1rem;--calcite-button-padding-y:0.75rem}:host([scale=s]) button:not(.content--slotted),:host([scale=s]) a:not(.content--slotted){--calcite-button-padding-x:0.125rem;--calcite-button-padding-y:3px;width:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-height:1.5rem}:host([scale=s][appearance=transparent]) button:not(.content--slotted),:host([scale=s][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-y:0.25rem}:host([scale=m]) button:not(.content--slotted),:host([scale=m]) a:not(.content--slotted){--calcite-button-padding-x:0.125rem;--calcite-button-padding-y:7px;width:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-height:2rem}:host([scale=m][appearance=transparent]) button:not(.content--slotted),:host([scale=m][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-y:0.5rem}:host([scale=l]) button:not(.content--slotted),:host([scale=l]) a:not(.content--slotted){--calcite-button-padding-x:0.125rem;--calcite-button-padding-y:9px;width:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-height:2.75rem}:host([scale=l][appearance=transparent]) button:not(.content--slotted),:host([scale=l][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-y:0.625rem}:host([scale=s][icon-start][icon-end]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x:23px;height:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=s][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x:1.5rem}:host([scale=m][icon-start][icon-end]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x:2rem;height:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x:33px}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x:43px;height:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted) .icon--start+.icon--end,:host([scale=l][icon-start][icon-end]) a:not(.content--slotted) .icon--start+.icon--end{-webkit-margin-start:1rem;margin-inline-start:1rem}:host([scale=l][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x:2.75rem}";var h=t("calcite_button",function(){function t(t){var a=this;e(this,t);this.alignment="center";this.appearance="solid";this.color="blue";this.disabled=false;this.intlLoading=d.loading;this.loading=false;this.round=false;this.scale="m";this.splitChild=false;this.type="button";this.width="auto";this.mutationObserver=l("mutation",(function(){return a.updateHasContent()}));this.hasContent=false;this.hasLoader=false;this.handleClick=function(){var t=a,e=t.formEl,o=t.type;if(a.href){return}if(o==="submit"){e===null||e===void 0?void 0:e.requestSubmit()}else if(o==="reset"){e===null||e===void 0?void 0:e.reset()}}}t.prototype.loadingChanged=function(t,e){var a=this;if(!!t&&!e){this.hasLoader=true}if(!t&&!!e){window.setTimeout((function(){a.hasLoader=false}),300)}};t.prototype.connectedCallback=function(){this.hasLoader=this.loading;this.setupTextContentObserver();r(this);this.formEl=n(this.el,this.form?"#".concat(this.form):"form")};t.prototype.disconnectedCallback=function(){var t;(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect();i(this);this.formEl=null};t.prototype.componentWillLoad=function(){{this.updateHasContent()}};t.prototype.componentDidRender=function(){s(this)};t.prototype.render=function(){var t,e,o;var n=this;var r=this.href?"a":"button";var i=r;var l=this.hasLoader?a("div",{class:u.buttonLoader},a("calcite-loader",{active:true,class:this.loading?u.loadingIn:u.loadingOut,inline:true,label:this.intlLoading,scale:"m"})):null;var s=a("calcite-icon",{class:(t={},t[u.icon]=true,t[u.iconStart]=true,t),flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,scale:"s"});var d=a("calcite-icon",{class:(e={},e[u.icon]=true,e[u.iconEnd]=true,e),flipRtl:this.iconFlipRtl==="end"||this.iconFlipRtl==="both",icon:this.iconEnd,scale:"s"});var p=a("span",{class:u.content},a("slot",null));return a(i,{"aria-label":c(this),class:(o={},o[u.contentSlotted]=this.hasContent,o[u.iconStartEmpty]=!this.iconStart,o[u.iconEndEmpty]=!this.iconEnd,o),disabled:this.disabled||this.loading,href:r==="a"&&this.href,name:r==="button"&&this.name,onClick:this.handleClick,ref:function(t){return n.childEl=t},rel:r==="a"&&this.rel,tabIndex:this.disabled||this.loading?-1:null,target:r==="a"&&this.target,type:r==="button"&&this.type},l,this.iconStart?s:null,this.hasContent?p:null,this.iconEnd?d:null)};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.childEl.focus();return[2]}))}))};t.prototype.updateHasContent=function(){var t,e;var a=this.el.textContent.trim().length>0||this.el.childNodes.length>0;this.hasContent=this.el.childNodes.length===1&&((t=this.el.childNodes[0])===null||t===void 0?void 0:t.nodeName)==="#text"?((e=this.el.textContent)===null||e===void 0?void 0:e.trim().length)>0:a};t.prototype.setupTextContentObserver=function(){var t;(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true,subtree:true})};t.prototype.onLabelClick=function(){this.handleClick();this.setFocus()};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{loading:["loadingChanged"]}},enumerable:false,configurable:true});return t}());h.style=p}}}));