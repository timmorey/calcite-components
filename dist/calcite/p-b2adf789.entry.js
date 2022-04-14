/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import{r as t,c as a,h as i,g as e}from"./p-778443d9.js";import{g as o}from"./p-37950845.js";import{c as n,d as r}from"./p-abd0ab3c.js";import"./p-f1267686.js";import"./p-d2c3e3c8.js";const s=class{constructor(i){t(this,i),this.calciteCardSelect=a(this,"calciteCardSelect",7),this.loading=!1,this.selected=!1,this.selectable=!1,this.intlLoading="Loading",this.intlSelect="Select",this.intlDeselect="Deselect",this.cardSelectClick=()=>{this.selectCard()},this.cardSelectKeyDown=t=>{switch(t.key){case" ":case"Enter":this.selectCard(),t.preventDefault()}}}connectedCallback(){n(this)}disonnectedCallback(){r(this)}render(){return i("div",{class:"calcite-card-container"},this.loading?i("div",{class:"calcite-card-loader-container"},i("calcite-loader",{active:!0,label:this.intlLoading})):null,i("section",{"aria-busy":this.loading.toString(),class:{container:!0}},this.selectable?this.renderCheckbox():null,this.renderThumbnail(),this.renderHeader(),i("div",{class:"card-content"},i("slot",null)),this.renderFooter()))}selectCard(){this.selected=!this.selected,this.calciteCardSelect.emit()}renderThumbnail(){return o(this.el,"thumbnail")?i("div",{class:"thumbnail-wrapper",key:"thumbnail-wrapper"},i("slot",{name:"thumbnail"})):null}renderCheckbox(){return i("calcite-label",{class:"checkbox-wrapper",onClick:this.cardSelectClick,onKeyDown:this.cardSelectKeyDown},i("calcite-checkbox",{checked:this.selected,label:this.selected?this.intlDeselect:this.intlSelect}))}renderHeader(){const{el:t}=this,a=o(t,"title"),e=o(t,"subtitle");return a||e?i("header",{class:"header"},i("slot",{name:"title"}),i("slot",{name:"subtitle"})):null}renderFooter(){const{el:t}=this,a=o(t,"footer-leading"),e=o(t,"footer-trailing");return a||e?i("footer",{class:"footer"},i("slot",{name:"footer-leading"}),i("slot",{name:"footer-trailing"})):null}get el(){return e(this)}};s.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;max-width:100%}:host .calcite-card-container{position:relative;display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:var(--calcite-border-radius-base)}:host .calcite-card-container:hover{--tw-shadow:0 4px 16px 0 rgba(0, 0, 0, 0.08), 0 2px 8px 0 rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 16px 0 var(--tw-shadow-color), 0 2px 8px 0 var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);z-index:1}:host .calcite-card-container:active{--tw-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 1px 6px -1px var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-transition-duration:75ms;transition-duration:75ms;z-index:1}.container{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column}:host([loading]) .calcite-card-container *:not(calcite-loader):not(.calcite-card-loader-container){pointer-events:none;opacity:0}:host([loading]) .calcite-card-loader-container{position:absolute;top:0px;right:0px;bottom:0px;left:0px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header,.footer{display:-ms-flexbox;display:flex;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.75rem;padding-bottom:0.25rem}.header{-ms-flex-direction:column;flex-direction:column}.footer{margin-top:auto;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.25rem;padding-bottom:0.75rem}.card-content{padding:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3)}:host([selectable]) .calcite-card-container:active{--tw-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 1px 6px -1px var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-brand)}slot[name=title]::slotted(*),*::slotted([slot=title]){margin:0px;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){margin:0px;margin-top:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){min-width:100%;max-width:100%}slot[name=footer-leading]::slotted(*),*::slotted([slot=footer-leading]){-ms-flex-item-align:center;align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375;-webkit-margin-end:auto;margin-inline-end:auto}slot[name=footer-trailing]::slotted(*),*::slotted([slot=footer-trailing]){-ms-flex-item-align:center;align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375}.thumbnail-wrapper{font-size:var(--calcite-font-size-0);line-height:1.375}.checkbox-wrapper{position:absolute;margin:0px;padding:0px;top:0.5rem;inset-inline-end:0.5rem}";export{s as calcite_card}