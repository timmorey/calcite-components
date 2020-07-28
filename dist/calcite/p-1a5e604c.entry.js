import{r as t,c as e,h as i,H as a,g as o}from"./p-c1f86727.js";import{g as s}from"./p-9c90d370.js";import{g as r}from"./p-569a5c63.js";function n(t,e,i,a=20,o=0){let s=[];if(o>=a)return s;const r=t=>{const s=t.assignedNodes().filter(t=>1===t.nodeType);return s.length>0?n(s[0].parentElement,e,i,a,o+1):[]},l=Array.from(t.children||[]);for(const d of l)e(d)||(i(d)&&s.push(d),null!=d.shadowRoot?s.push(...n(d.shadowRoot,e,i,a,o+1)):"SLOT"===d.tagName?s.push(...r(d)):s.push(...n(d,e,i,a,o+1)));return s}function l(t){return t.hasAttribute("hidden")||t.hasAttribute("aria-hidden")&&"false"!==t.getAttribute("aria-hidden")||"none"===t.style.display||"0"===t.style.opacity||"hidden"===t.style.visibility||"collapse"===t.style.visibility}function d(t){return"-1"!==t.getAttribute("tabindex")&&!l(t)&&!function(t){return t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&"false"!==t.getAttribute("aria-disabled")}(t)&&(t.hasAttribute("tabindex")||(t instanceof HTMLAnchorElement||t instanceof HTMLAreaElement)&&t.hasAttribute("href")||t instanceof HTMLButtonElement||t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t instanceof HTMLIFrameElement)}let c=new Map;const m=document.createElement("template");m.innerHTML='\n\t<div id="start"></div>\n\t<slot></slot>\n\t<div id="backup"></div>\n\t<div id="end"></div>\n';class h extends HTMLElement{constructor(){super(),this.debounceId=Math.random().toString(),this._focused=!1,this.attachShadow({mode:"open"}).appendChild(m.content.cloneNode(!0)),this.focusLastElement=this.focusLastElement.bind(this),this.focusFirstElement=this.focusFirstElement.bind(this),this.onFocusIn=this.onFocusIn.bind(this),this.onFocusOut=this.onFocusOut.bind(this)}static get observedAttributes(){return["inactive"]}get inactive(){return this.hasAttribute("inactive")}set inactive(t){t?this.setAttribute("inactive",""):this.removeAttribute("inactive")}get focused(){return this._focused}connectedCallback(){this.$backup=this.shadowRoot.querySelector("#backup"),this.$start=this.shadowRoot.querySelector("#start"),this.$end=this.shadowRoot.querySelector("#end"),this.$start.addEventListener("focus",this.focusLastElement),this.$end.addEventListener("focus",this.focusFirstElement),this.addEventListener("focusin",this.onFocusIn),this.addEventListener("focusout",this.onFocusOut),this.render()}disconnectedCallback(){this.$start.removeEventListener("focus",this.focusLastElement),this.$end.removeEventListener("focus",this.focusFirstElement),this.removeEventListener("focusin",this.onFocusIn),this.removeEventListener("focusout",this.onFocusOut)}attributeChangedCallback(){this.render()}focusFirstElement(){this.trapFocus()}focusLastElement(){this.trapFocus(!0)}getFocusableElements(){return n(this,l,d)}trapFocus(t){if(this.inactive)return;let e=this.getFocusableElements();e.length>0?(t?e[e.length-1].focus():e[0].focus(),this.$backup.setAttribute("tabindex","-1")):(this.$backup.setAttribute("tabindex","0"),this.$backup.focus())}onFocusIn(){this.updateFocused(!0)}onFocusOut(){this.updateFocused(!1)}updateFocused(t){!function(t,e,i){const a=c.get(i);null!=a&&window.clearTimeout(a),c.set(i,window.setTimeout(()=>{t(),c.delete(i)},0))}(()=>{this.focused!==t&&(this._focused=t,this.render())},0,this.debounceId)}render(){this.isConnected&&(this.$start.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.$end.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.focused?this.setAttribute("focused",""):this.removeAttribute("focused"))}}window&&window.customElements&&window.customElements.define("focus-trap",h);const u=class{constructor(i){t(this,i),this.calciteModalOpen=e(this,"calciteModalOpen",7),this.calciteModalClose=e(this,"calciteModalClose",7),this.beforeClose=()=>Promise.resolve(),this.intlClose="Close",this.scale="m",this.width="m",this.backgroundColor="white"}componentWillLoad(){this.active&&this.open()}render(){const t=s(this.el);return i(a,{dir:t,role:"dialog","aria-modal":"true","is-active":this.isActive},i("calcite-scrim",{class:"scrim",theme:"dark"}),this.renderStyle(),i("div",{class:"modal"},i("div",{"data-focus-fence":"true",tabindex:"0",onFocus:this.focusLastElement.bind(this)}),i("div",{class:"modal__header"},this.renderCloseButton(),i("header",{class:"modal__title"},i("slot",{name:"header"}))),i("div",{class:{modal__content:!0,"modal__content--spaced":!this.noPadding},ref:t=>this.modalContent=t},i("slot",{name:"content"})),this.renderFooter(),i("div",{"data-focus-fence":"true",tabindex:"0",onFocus:this.focusFirstElement.bind(this)})))}renderFooter(){return this.el.querySelector("[slot=back], [slot=secondary], [slot=primary]")?i("div",{class:"modal__footer"},i("span",{class:"modal__back"},i("slot",{name:"back"})),i("span",{class:"modal__secondary"},i("slot",{name:"secondary"})),i("span",{class:"modal__primary"},i("slot",{name:"primary"}))):null}renderCloseButton(){return this.disableCloseButton?null:i("button",{class:"modal__close","aria-label":this.intlClose,title:this.intlClose,ref:t=>this.closeButtonEl=t,onClick:()=>this.close()},i("calcite-icon",{icon:"x",scale:"l"}))}renderStyle(){return isNaN(parseInt(""+this.width))?null:i("style",null,`\n        .modal {\n          max-width: ${this.width}px;\n        }\n        @media screen and (max-width: ${this.width}px) {\n          .modal {\n            height: 100%;\n            max-height: 100%;\n            width: 100%;\n            max-width: 100%;\n            margin: 0;\n            border-radius: 0;\n          }\n          .modal__content {\n            flex: 1 1 auto;\n            max-height: unset;\n          }\n          .modal__header,\n          .modal__footer {\n            flex: inherit;\n          }\n        }\n      `)}handleEscape(t){this.active&&!this.disableEscape&&"Escape"===r(t.key)&&this.beforeClose(this.el).then(()=>{this.active=!1})}async focusElement(t){var e;if(t)return void t.focus();const i=n(this.el,l,d);i.length>0?i[0].focus():null===(e=this.closeButtonEl)||void 0===e||e.focus()}async scrollContent(t=0,e=0){this.modalContent&&(this.modalContent.scrollTo?this.modalContent.scrollTo({top:t,left:e,behavior:"smooth"}):(this.modalContent.scrollTop=t,this.modalContent.scrollLeft=e))}async toggleModal(t,e){t!==e&&(t?this.open():t||this.close())}open(){this.previousActiveElement=document.activeElement,this.isActive=!0,setTimeout(()=>{this.focusElement(this.firstFocus),this.calciteModalOpen.emit()},300),document.documentElement.classList.add("overflow-hidden")}close(){return this.beforeClose(this.el).then(()=>{var t;this.isActive=!1,null===(t=this.previousActiveElement)||void 0===t||t.focus(),document.documentElement.classList.remove("overflow-hidden"),setTimeout(()=>this.calciteModalClose.emit(),300)})}focusFirstElement(){var t;null===(t=this.closeButtonEl)||void 0===t||t.focus()}focusLastElement(){var t;const e=n(this.el,l,d).filter(t=>!t.getAttribute("data-focus-fence"));e.length>0?e[e.length-1].focus():null===(t=this.closeButtonEl)||void 0===t||t.focus()}get el(){return o(this)}static get watchers(){return{active:["toggleModal"]}}};u.style=":host([hidden]){display:none}:host{position:fixed;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow-y:hidden;color:var(--calcite-ui-text-2);opacity:0;visibility:hidden !important;-webkit-transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);z-index:101;--calcite-modal-title-padding:12px 16px;--calcite-modal-title-text:20px;--calcite-modal-content-padding:16px;--calcite-modal-content-text:16px;--calcite-modal-close-padding:12px;--calcite-modal-footer-padding:12px}:host([scale=s]){--calcite-modal-title-padding:8px 12px;--calcite-modal-title-text:18px;--calcite-modal-content-padding:12px;--calcite-modal-content-text:14px;--calcite-modal-close-padding:8px;--calcite-modal-footer-padding:8px}:host([scale=l]){--calcite-modal-title-padding:16px 20px;--calcite-modal-title-text:26px;--calcite-modal-content-padding:20px;--calcite-modal-content-text:18px;--calcite-modal-close-padding:16px;--calcite-modal-footer-padding:16px}.scrim{position:fixed;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;overflow-y:hidden}.modal{-webkit-box-sizing:border-box;box-sizing:border-box;z-index:102;float:none;text-align:left;-webkit-overflow-scrolling:touch;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:row-wrap;flex-wrap:row-wrap;opacity:0;visibility:hidden;pointer-events:none;-webkit-transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);-webkit-transform:translate3d(0, 20px, 0);transform:translate3d(0, 20px, 0);background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.32);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.32);border-radius:var(--calcite-border-radius);margin:1.5rem;width:100%}.modal__close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.modal__close.modal__close:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}:host([is-active]){visibility:visible !important;opacity:1;-webkit-transition-delay:0ms;transition-delay:0ms}:host([is-active]) .modal{pointer-events:auto;visibility:visible;opacity:1;-webkit-transition-delay:0ms;transition-delay:0ms;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([dir=rtl]) .modal{text-align:right}.modal__header{background-color:var(--calcite-ui-foreground-1);-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;max-width:100%;min-width:0;z-index:2;border-bottom:1px solid var(--calcite-ui-border-3);border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.modal__close{padding:var(--calcite-modal-close-padding);margin:0;-ms-flex-order:2;order:2;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition-delay:300ms;transition-delay:300ms;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;background-color:transparent;-webkit-appearance:none;border:none;color:var(--calcite-ui-text-1);outline:none;cursor:pointer;border-radius:0 var(--calcite-border-radius) 0 0}.modal__close calcite-icon{pointer-events:none;vertical-align:-2px}.modal__close:hover,.modal__close:focus{background-color:var(--calcite-ui-foreground-2)}.modal__close:active{background-color:var(--calcite-ui-foreground-3)}:host([dir=rtl]) .modal__close{border-radius:var(--calcite-border-radius) 0 0 0}.modal__title{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:var(--calcite-modal-title-padding);-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-order:1;order:1;min-width:0}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0;font-weight:400;font-size:var(--calcite-modal-title-text);color:var(--calcite-ui-text-1)}.modal__content{position:relative;padding:0;height:100%;overflow:auto;max-height:calc(100vh - 12rem);overflow-y:auto;display:block;background-color:var(--calcite-ui-foreground-1);-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.modal__content--spaced{padding:var(--calcite-modal-content-padding)}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-content-text);line-height:1.5}:host([background-color=grey]) .modal__content{background-color:var(--calcite-ui-background)}.modal__footer{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-pack:justify;justify-content:space-between;padding:var(--calcite-modal-footer-padding);margin-top:auto;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:0 0 var(--calcite-border-radius) var(--calcite-border-radius);width:100%;background-color:var(--calcite-ui-foreground-1);border-top:1px solid var(--calcite-ui-border-3);z-index:2}.modal__footer--hide-back .modal__back,.modal__footer--hide-secondary .modal__secondary{display:none}.modal__back{display:block;margin-right:auto}:host([dir=rtl]) .modal__back{margin-left:auto;margin-right:unset}.modal__secondary{display:block;margin:0 0.375rem}slot[name=primary]{display:block}:host([width=small]) .modal{width:auto}:host([width=s]) .modal{max-width:32rem}@media screen and (max-width: 35rem){:host([width=s]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([width=s]) .modal__content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=s]) .modal__header,:host([width=s]) .modal__footer{-ms-flex:inherit;flex:inherit}:host([width=s][docked]){-ms-flex-align:end;align-items:flex-end}}:host([width=m]) .modal{max-width:48rem}@media screen and (max-width: 51rem){:host([width=m]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([width=m]) .modal__content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=m]) .modal__header,:host([width=m]) .modal__footer{-ms-flex:inherit;flex:inherit}:host([width=m][docked]){-ms-flex-align:end;align-items:flex-end}}:host([width=l]) .modal{max-width:94rem}@media screen and (max-width: 97rem){:host([width=l]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([width=l]) .modal__content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=l]) .modal__header,:host([width=l]) .modal__footer{-ms-flex:inherit;flex:inherit}:host([width=l][docked]){-ms-flex-align:end;align-items:flex-end}}:host([fullscreen]){background-color:transparent}:host([fullscreen]) .modal{-webkit-transform:translate3D(0, 20px, 0) scale(0.95);transform:translate3D(0, 20px, 0) scale(0.95);height:100%;max-height:100%;width:100%;max-width:100%;margin:0}:host([fullscreen]) .modal__content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:100%}:host([fullscreen]) .modal__header,:host([fullscreen]) .modal__footer{-ms-flex:inherit;flex:inherit}:host([is-active][fullscreen]) .modal{-webkit-transform:translate3D(0, 0, 0) scale(1);transform:translate3D(0, 0, 0) scale(1)}:host([is-active][fullscreen]) .modal__header{border-radius:0}:host([is-active][fullscreen]) .modal__footer{border-radius:0}:host([docked]) .modal{height:auto !important}:host([docked]) .modal__content{height:auto;-ms-flex:1 1 auto;flex:1 1 auto}@media screen and (max-width: 860px){:host([docked]) .modal{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}:host([docked]) .modal__close{border-radius:0 var(--calcite-border-radius) 0 0}}@media screen and (max-width: 860px){:host([docked][dir=rtl]) .modal__close{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}}:host([color=red]) .modal{border-top:4px solid var(--calcite-ui-red-1)}:host([color=blue]) .modal{border-top:4px solid var(--calcite-ui-blue-1)}:host([color=red]) .modal__header,:host([color=blue]) .modal__header{border-radius:var(--calcite-border-radius)}@media screen and (max-width: 860px){slot[name=header]::slotted(*),*::slotted([slot=header]){font-size:1.2019rem;line-height:1.5}}@media screen and (max-width: 860px) and (max-width: 859px){slot[name=header]::slotted(*),*::slotted([slot=header]){font-size:1.1305rem}}@media screen and (max-width: 860px) and (max-width: 479px){slot[name=header]::slotted(*),*::slotted([slot=header]){font-size:1.0625rem}}@media screen and (max-width: 860px){.modal__title{padding:0.375rem 1.0125rem}}@media screen and (max-width: 860px){.modal__close{padding:0.75rem}}@media screen and (max-width: 860px){.modal__content--spaced{padding:1.0125rem}}@media screen and (max-width: 860px){.modal__footer{position:-webkit-sticky;position:sticky;bottom:0}}@media screen and (max-width: 480px){.modal__footer{-ms-flex-direction:column;flex-direction:column}.modal__back,.modal__secondary{margin:0;margin-bottom:0.375rem}}";export{u as calcite_modal}