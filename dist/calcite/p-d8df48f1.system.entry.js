var __awaiter=this&&this.__awaiter||function(t,i,n,e){function a(t){return t instanceof n?t:new n((function(i){i(t)}))}return new(n||(n=Promise))((function(n,r){function o(t){try{s(e.next(t))}catch(t){r(t)}}function l(t){try{s(e["throw"](t))}catch(t){r(t)}}function s(t){t.done?n(t.value):a(t.value).then(o,l)}s((e=e.apply(t,i||[])).next())}))};var __generator=this&&this.__generator||function(t,i){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},e,a,r,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(t){return function(i){return s([t,i])}}function s(o){if(e)throw new TypeError("Generator is already executing.");while(n)try{if(e=1,a&&(r=o[0]&2?a["return"]:o[0]?a["throw"]||((r=a["return"])&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;if(a=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;a=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){n.label=o[1];break}if(o[0]===6&&n.label<r[1]){n.label=r[1];r=o;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(o);break}if(r[2])n.ops.pop();n.trys.pop();continue}o=i.call(t,n)}catch(t){o=[6,t];a=0}finally{e=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */System.register(["./p-6a9fef86.system.js","./p-b18c5709.system.js","./p-1554e3fc.system.js","./p-e2afe2fb.system.js","./p-ea9c71f6.system.js","./p-d0501de1.system.js"],(function(t){"use strict";var i,n,e,a,r,o,l,s,c,u,d;return{setters:[function(t){i=t.r;n=t.c;e=t.h;a=t.g},function(t){r=t.d;o=t.g},function(t){l=t.c;s=t.d;c=t.g},function(t){u=t.c},function(t){d=t.u},function(){}],execute:function(){var f={wrapper:"wrapper",confirmChangesButton:"confirm-changes-button",cancelEditingButton:"cancel-editing-button",inputWrapper:"input-wrapper",cancelEditingButtonWrapper:"cancel-editing-button-wrapper",enableEditingButton:"enable-editing-button",controlsWrapper:"controls-wrapper"};var p={intlEnablingEditing:"Click to edit",intlCancelEditing:"Cancel",intlConfirmChanges:"Save"};var h="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}:host([scale=s]) .controls-wrapper{height:1.5rem}:host([scale=m]) .controls-wrapper{height:2rem}:host([scale=l]) .controls-wrapper{height:2.75rem}:host(:not([editing-enabled]):not([disabled])) .wrapper:hover{background-color:var(--calcite-ui-foreground-2)}.wrapper{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.wrapper .input-wrapper{-ms-flex:1 1 0%;flex:1 1 0%}.controls-wrapper{display:-ms-flexbox;display:flex}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) .cancel-editing-button-wrapper{border-color:var(--calcite-ui-border-2)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}";var b=t("calcite_inline_editable",function(){function t(t){var e=this;i(this,t);this.calciteInlineEditableEditCancel=n(this,"calciteInlineEditableEditCancel",7);this.calciteInlineEditableEditConfirm=n(this,"calciteInlineEditableEditConfirm",7);this.calciteInlineEditableEnableEditingChange=n(this,"calciteInlineEditableEnableEditingChange",7);this.disabled=false;this.editingEnabled=false;this.loading=false;this.controls=false;this.intlEnableEditing=p.intlEnablingEditing;this.intlCancelEditing=p.intlCancelEditing;this.intlConfirmChanges=p.intlConfirmChanges;this.mutationObserver=u("mutation",(function(){return e.mutationObserverCallback()}));this.transitionEnd=function(){if(!e.editingEnabled&&!!e.shouldEmitCancel){e.calciteInlineEditableEditCancel.emit()}};this.enableEditing=function(){var t,i;e.valuePriorToEditing=(t=e.inputElement)===null||t===void 0?void 0:t.value;e.editingEnabled=true;(i=e.inputElement)===null||i===void 0?void 0:i.setFocus();e.calciteInlineEditableEnableEditingChange.emit()};this.disableEditing=function(){e.editingEnabled=false};this.cancelEditing=function(){if(e.inputElement){e.inputElement.value=e.valuePriorToEditing}e.disableEditing();e.enableEditingButton.setFocus()};this.escapeKeyHandler=function(t){return __awaiter(e,void 0,void 0,(function(){var i;return __generator(this,(function(n){if(t.key!=="Escape"){if(t.key==="Tab"&&this.shouldShowControls){if(!t.shiftKey&&t.target===this.inputElement){t.preventDefault();this.cancelEditingButton.setFocus()}if(!!t.shiftKey&&t.target===this.cancelEditingButton){t.preventDefault();(i=this.inputElement)===null||i===void 0?void 0:i.setFocus()}}return[2]}this.cancelEditing();return[2]}))}))};this.cancelEditingHandler=function(t){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(i){t.preventDefault();this.cancelEditing();return[2]}))}))};this.enableEditingHandler=function(t){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(i){if(this.disabled||t.target===this.cancelEditingButton||t.target===this.confirmEditingButton){return[2]}t.preventDefault();if(!this.editingEnabled){this.enableEditing()}return[2]}))}))};this.confirmChangesHandler=function(t){return __awaiter(e,void 0,void 0,(function(){var i;return __generator(this,(function(n){switch(n.label){case 0:t.preventDefault();this.calciteInlineEditableEditConfirm.emit();n.label=1;case 1:n.trys.push([1,4,5,6]);if(!this.afterConfirm)return[3,3];this.loading=true;return[4,this.afterConfirm()];case 2:n.sent();this.disableEditing();this.enableEditingButton.setFocus();n.label=3;case 3:return[3,6];case 4:i=n.sent();return[3,6];case 5:this.loading=false;return[7];case 6:return[2]}}))}))}}t.prototype.disabledWatcher=function(t){if(this.inputElement){this.inputElement.disabled=t}};t.prototype.editingEnabledWatcher=function(t,i){if(this.inputElement){this.inputElement.editingEnabled=t}if(!t&&!!i){this.shouldEmitCancel=true}};t.prototype.connectedCallback=function(){var t;l(this);(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true});this.mutationObserverCallback()};t.prototype.disconnectedCallback=function(){var t;s(this);(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect()};t.prototype.componentDidRender=function(){d(this)};t.prototype.render=function(){var t=this;return e("div",{class:f.wrapper,onClick:this.enableEditingHandler,onKeyDown:this.escapeKeyHandler,onTransitionEnd:this.transitionEnd},e("div",{class:f.inputWrapper},e("slot",null)),e("div",{class:f.controlsWrapper},e("calcite-button",{appearance:"transparent",class:f.enableEditingButton,color:"neutral",disabled:this.disabled,iconStart:"pencil",label:this.intlEnableEditing,onClick:this.enableEditingHandler,ref:function(i){return t.enableEditingButton=i},scale:this.scale,style:{opacity:this.editingEnabled?"0":"1",width:this.editingEnabled?"0":"inherit"},type:"button"}),this.shouldShowControls&&[e("div",{class:f.cancelEditingButtonWrapper},e("calcite-button",{appearance:"transparent",class:f.cancelEditingButton,color:"neutral",disabled:this.disabled,iconStart:"x",label:this.intlCancelEditing,onClick:this.cancelEditingHandler,ref:function(i){return t.cancelEditingButton=i},scale:this.scale,type:"button"})),e("calcite-button",{appearance:"solid",class:f.confirmChangesButton,color:"blue",disabled:this.disabled,iconStart:"check",label:this.intlConfirmChanges,loading:this.loading,onClick:this.confirmChangesHandler,ref:function(i){return t.confirmEditingButton=i},scale:this.scale,type:"button"})]))};t.prototype.blurHandler=function(){if(!this.controls){this.disableEditing()}};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var t,i;return __generator(this,(function(n){if(this.editingEnabled){(t=this.inputElement)===null||t===void 0?void 0:t.setFocus()}else{(i=this.enableEditingButton)===null||i===void 0?void 0:i.setFocus()}return[2]}))}))};t.prototype.mutationObserverCallback=function(){var t;this.updateSlottedInput();this.scale=this.scale||((t=this.inputElement)===null||t===void 0?void 0:t.scale)||r(this.el,"scale",undefined)};t.prototype.onLabelClick=function(){this.setFocus()};t.prototype.updateSlottedInput=function(){var t=o(this.el,{matches:"calcite-input"});this.inputElement=t;if(!t){return}this.inputElement.disabled=this.disabled;this.inputElement.label=this.inputElement.label||c(this)};Object.defineProperty(t.prototype,"shouldShowControls",{get:function(){return this.editingEnabled&&this.controls},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledWatcher"],editingEnabled:["editingEnabledWatcher"]}},enumerable:false,configurable:true});return t}());b.style=h}}}));