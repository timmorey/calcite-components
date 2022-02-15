/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
import{r as t,c as i,h as a,H as e,g as n}from"./p-687deef3.js";import{a as o,d as r}from"./p-8f3a3e4e.js";import{c as l,d as s}from"./p-9a7c4812.js";import{c,d as m,H as d}from"./p-a737d230.js";import"./p-8a63221d.js";let p=class{constructor(a){t(this,a),this.calciteRadioGroupChange=i(this,"calciteRadioGroupChange",7),this.appearance="solid",this.disabled=!1,this.required=!1,this.layout="horizontal",this.scale="m",this.value=null,this.width="auto",this.handleClick=t=>{"calcite-radio-group-item"===t.target.localName&&this.selectItem(t.target,!0)}}valueHandler(t){this.getItems().forEach((i=>i.checked=i.value===t))}handleSelectedItemChange(t,i){if(this.value=null==t?void 0:t.value,t===i)return;const a=this.getItems(),e=Array.from(a).filter((i=>i===t)).pop();e?this.selectItem(e):a[0]&&(a[0].tabIndex=0)}componentWillLoad(){const t=this.getItems(),i=Array.from(t).filter((t=>t.checked)).pop();i?this.selectItem(i):t[0]&&(t[0].tabIndex=0)}connectedCallback(){l(this),c(this)}disconnectedCallback(){s(this),m(this)}render(){return a(e,{onClick:this.handleClick,role:"radiogroup",tabIndex:this.disabled?-1:null},a("slot",null),a(d,{component:this}))}handleSelected(t){t.stopPropagation(),t.preventDefault(),this.selectItem(t.target)}handleKeyDown(t){const i=t.key,{el:a,selectedItem:e}=this;if(-1===["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(i))return;let n=i;"rtl"===o(a)&&("ArrowRight"===i&&(n="ArrowLeft"),"ArrowLeft"===i&&(n="ArrowRight"));const r=this.getItems();let l=-1;switch(r.forEach(((t,i)=>{t===e&&(l=i)})),n){case"ArrowLeft":case"ArrowUp":t.preventDefault();const i=r.item(l<1?r.length-1:l-1);return void this.selectItem(i,!0);case"ArrowRight":case"ArrowDown":t.preventDefault();const a=-1===l?r.item(1):r.item(l+1)||r.item(0);return void this.selectItem(a,!0);case" ":return t.preventDefault(),void this.selectItem(t.target,!0);default:return}}async setFocus(){var t;null===(t=this.selectedItem||this.getItems()[0])||void 0===t||t.focus()}onLabelClick(){this.setFocus()}getItems(){return this.el.querySelectorAll("calcite-radio-group-item")}selectItem(t,i=!1){if(t===this.selectedItem)return;const a=this.getItems();let e=null;a.forEach((a=>{const n=a.value===t.value;(n&&!a.checked||!n&&a.checked)&&(a.checked=n),a.tabIndex=n?0:-1,n&&(e=a,i&&this.calciteRadioGroupChange.emit(e.value))})),this.selectedItem=e,e&&e.focus()}get el(){return n(this)}static get watchers(){return{value:["valueHandler"],selectedItem:["handleSelectedItemChange"]}}};p.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;background-color:var(--calcite-ui-foreground-1);width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;outline:1px solid var(--calcite-ui-border-input);outline-offset:-1px}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-item-align:start;align-self:flex-start}:host([width=full]){width:100%;min-width:-moz-fit-content;min-width:-webkit-fit-content;min-width:fit-content}:host([width=full]) ::slotted(calcite-radio-group-item){-ms-flex:1 1 auto;flex:1 1 auto}:host([width=full][layout=vertical]) ::slotted(calcite-radio-group-item){-ms-flex-pack:start;justify-content:flex-start}::slotted(calcite-radio-group-item[checked]),::slotted(calcite-radio-group-item:focus){z-index:0}:host([disabled]){pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";let f=class{constructor(a){t(this,a),this.calciteRadioGroupItemChange=i(this,"calciteRadioGroupItemChange",7),this.checked=!1,this.iconFlipRtl=!1,this.iconPosition="start"}handleCheckedChange(){this.calciteRadioGroupItemChange.emit()}render(){const{checked:t,value:i}=this,n=r(this.el,"scale","m"),o=r(this.el,"appearance","solid"),l=r(this.el,"layout","horizontal"),s=a("calcite-icon",{class:"radio-group-item-icon",flipRtl:this.iconFlipRtl,icon:this.icon,scale:"s"});return a(e,{"aria-checked":t.toString(),role:"radio"},a("label",{class:{"label--scale-s":"s"===n,"label--scale-m":"m"===n,"label--scale-l":"l"===n,"label--horizontal":"horizontal"===l,"label--outline":"outline"===o}},this.icon&&"start"===this.iconPosition?s:null,a("slot",null,i),a("slot",{name:"input"}),this.icon&&"end"===this.iconPosition?s:null))}get el(){return n(this)}static get watchers(){return{checked:["handleCheckedChange"]}}};f.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-item-align:stretch;align-self:stretch;font-weight:var(--calcite-font-weight-normal);-webkit-transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out, border-color var(--calcite-animation-timing) ease-in-out;transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out, border-color var(--calcite-animation-timing) ease-in-out}:host label{pointer-events:none;margin:0.125rem;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center;color:var(--calcite-ui-text-3);-webkit-transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out, border-color var(--calcite-internal-animation-timing-fast) ease-in-out, color var(--calcite-internal-animation-timing-fast) ease-in-out;transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out, border-color var(--calcite-internal-animation-timing-fast) ease-in-out, color var(--calcite-internal-animation-timing-fast) ease-in-out}.label--horizontal{-ms-flex-pack:center;justify-content:center}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-1px}.label--scale-s{padding-left:0.5rem;padding-right:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-top:0.125rem;padding-bottom:0.125rem}.label--scale-m{padding-left:0.75rem;padding-right:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-top:0.375rem;padding-bottom:0.375rem}.label--scale-l{padding-left:1rem;padding-right:1rem;padding-top:0.625rem;padding-bottom:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host(:hover) label{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:active) label{background-color:var(--calcite-ui-foreground-3)}:host([checked]) label{cursor:default;border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-brand);color:var(--calcite-ui-background)}:host([checked]) .label--outline{border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);color:var(--calcite-ui-brand)}::slotted(input){display:none}.radio-group-item-icon{position:relative;margin:0px;display:-ms-inline-flexbox;display:inline-flex;line-height:inherit}:host([icon-position=start]) .label--scale-s .radio-group-item-icon{-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}:host([icon-position=end]) .label--scale-s .radio-group-item-icon{-webkit-margin-end:unset;margin-inline-end:unset;-webkit-margin-start:0.5rem;margin-inline-start:0.5rem}:host([icon-position=start]) .label--scale-m .radio-group-item-icon{-webkit-margin-end:0.75rem;margin-inline-end:0.75rem}:host([icon-position=end]) .label--scale-m .radio-group-item-icon{-webkit-margin-end:unset;margin-inline-end:unset;-webkit-margin-start:0.75rem;margin-inline-start:0.75rem}:host([icon-position=start]) .label--scale-l .radio-group-item-icon{-webkit-margin-end:1rem;margin-inline-end:1rem}:host([icon-position=end]) .label--scale-l .radio-group-item-icon{-webkit-margin-end:unset;margin-inline-end:unset;-webkit-margin-start:1rem;margin-inline-start:1rem}";export{p as calcite_radio_group,f as calcite_radio_group_item}