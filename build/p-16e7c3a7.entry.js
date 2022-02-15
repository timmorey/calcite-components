/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
import{r as t,c as i,h as a,g as n}from"./p-687deef3.js";import{d as s,g as e}from"./p-8f3a3e4e.js";import{c as r,d as o,g as l}from"./p-9a7c4812.js";import{c}from"./p-0a5d059d.js";import"./p-8a63221d.js";let h=class{constructor(a){t(this,a),this.calciteInlineEditableEditCancel=i(this,"calciteInlineEditableEditCancel",7),this.calciteInlineEditableEditConfirm=i(this,"calciteInlineEditableEditConfirm",7),this.calciteInlineEditableEnableEditingChange=i(this,"calciteInlineEditableEnableEditingChange",7),this.disabled=!1,this.editingEnabled=!1,this.loading=!1,this.controls=!1,this.intlEnableEditing="Click to edit",this.intlCancelEditing="Cancel",this.intlConfirmChanges="Save",this.mutationObserver=c("mutation",(()=>this.mutationObserverCallback())),this.transitionEnd=()=>{!this.editingEnabled&&this.shouldEmitCancel&&this.calciteInlineEditableEditCancel.emit()},this.enableEditing=()=>{var t,i;this.valuePriorToEditing=null===(t=this.inputElement)||void 0===t?void 0:t.value,this.editingEnabled=!0,null===(i=this.inputElement)||void 0===i||i.setFocus(),this.calciteInlineEditableEnableEditingChange.emit()},this.disableEditing=()=>{this.editingEnabled=!1},this.cancelEditing=()=>{this.inputElement&&(this.inputElement.value=this.valuePriorToEditing),this.disableEditing(),this.enableEditingButton.setFocus()},this.escapeKeyHandler=async t=>{var i;"Escape"===t.key?this.cancelEditing():"Tab"===t.key&&this.shouldShowControls&&(t.shiftKey||t.target!==this.inputElement||(t.preventDefault(),this.cancelEditingButton.setFocus()),t.shiftKey&&t.target===this.cancelEditingButton&&(t.preventDefault(),t.stopPropagation(),null===(i=this.inputElement)||void 0===i||i.setFocus()))},this.cancelEditingHandler=async t=>{t.preventDefault(),t.stopPropagation(),this.cancelEditing()},this.enableEditingHandler=async t=>{t.preventDefault(),t.stopPropagation(),this.disabled||this.editingEnabled||this.enableEditing()},this.confirmChangesHandler=async t=>{t.preventDefault(),t.stopPropagation(),this.calciteInlineEditableEditConfirm.emit();try{this.afterConfirm&&(this.loading=!0,await this.afterConfirm(),this.disableEditing(),this.enableEditingButton.setFocus())}catch(t){}finally{this.loading=!1}}}disabledWatcher(t){this.inputElement&&(this.inputElement.disabled=t)}editingEnabledWatcher(t,i){this.inputElement&&(this.inputElement.editingEnabled=t),!t&&i&&(this.shouldEmitCancel=!0)}connectedCallback(){var t;r(this),null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0}),this.mutationObserverCallback()}disconnectedCallback(){var t;o(this),null===(t=this.mutationObserver)||void 0===t||t.disconnect()}render(){return a("div",{class:"wrapper",onClick:this.enableEditingHandler,onKeyDown:this.escapeKeyHandler,onTransitionEnd:this.transitionEnd},a("div",{class:"input-wrapper"},a("slot",null)),a("div",{class:"controls-wrapper"},a("calcite-button",{appearance:"transparent",class:"enable-editing-button",color:"neutral",disabled:this.disabled,iconStart:"pencil",label:this.intlEnableEditing,onClick:this.enableEditingHandler,ref:t=>this.enableEditingButton=t,scale:this.scale,style:{opacity:this.editingEnabled?"0":"1",width:this.editingEnabled?"0":"inherit"},type:"button"}),this.shouldShowControls&&[a("div",{class:"cancel-editing-button-wrapper"},a("calcite-button",{appearance:"transparent",class:"cancel-editing-button",color:"neutral",disabled:this.disabled,iconStart:"x",label:this.intlCancelEditing,onClick:this.cancelEditingHandler,ref:t=>this.cancelEditingButton=t,scale:this.scale,type:"button"})),a("calcite-button",{appearance:"solid",class:"confirm-changes-button",color:"blue",disabled:this.disabled,iconStart:"check",label:this.intlConfirmChanges,loading:this.loading,onClick:this.confirmChangesHandler,scale:this.scale,type:"button"})]))}blurHandler(){this.controls||this.disableEditing()}async setFocus(){var t,i;this.editingEnabled?null===(t=this.inputElement)||void 0===t||t.setFocus():null===(i=this.enableEditingButton)||void 0===i||i.setFocus()}mutationObserverCallback(){var t;this.updateSlottedInput(),this.scale=this.scale||(null===(t=this.inputElement)||void 0===t?void 0:t.scale)||s(this.el,"scale",void 0)}onLabelClick(){this.setFocus()}updateSlottedInput(){const t=e(this.el,{matches:"calcite-input"});this.inputElement=t,t&&(this.inputElement.disabled=this.disabled,this.inputElement.label=this.inputElement.label||l(this))}get shouldShowControls(){return this.editingEnabled&&this.controls}get el(){return n(this)}static get watchers(){return{disabled:["disabledWatcher"],editingEnabled:["editingEnabledWatcher"]}}};h.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}:host([scale=s]) .controls-wrapper{height:1.5rem}:host([scale=m]) .controls-wrapper{height:2rem}:host([scale=l]) .controls-wrapper{height:2.75rem}:host(:not([editing-enabled]):not([disabled])) .wrapper:hover{background-color:var(--calcite-ui-foreground-2)}.wrapper{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.wrapper .input-wrapper{-ms-flex:1 1 0%;flex:1 1 0%}.controls-wrapper{display:-ms-flexbox;display:flex}:host([disabled]) .cancel-editing-button-wrapper{border-color:var(--calcite-ui-border-2)}";export{h as calcite_inline_editable}