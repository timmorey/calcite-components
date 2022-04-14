/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-98559b14.js');
const dom = require('./dom-be217a15.js');
const conditionalSlot = require('./conditionalSlot-e1792d8e.js');
require('./guid-21b03b4f.js');
require('./observers-cf003b0e.js');

const CSS = {
  container: "container",
  header: "header",
  footer: "footer",
  title: "title",
  subtitle: "subtitle",
  thumbnailWrapper: "thumbnail-wrapper",
  checkboxWrapper: "checkbox-wrapper"
};
const SLOTS = {
  thumbnail: "thumbnail",
  title: "title",
  subtitle: "subtitle",
  footerLeading: "footer-leading",
  footerTrailing: "footer-trailing"
};
const TEXT = {
  select: "Select",
  deselect: "Deselect",
  loading: "Loading"
};

const cardCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;max-width:100%}:host .calcite-card-container{position:relative;display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:var(--calcite-border-radius-base)}:host .calcite-card-container:hover{--tw-shadow:0 4px 16px 0 rgba(0, 0, 0, 0.08), 0 2px 8px 0 rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 16px 0 var(--tw-shadow-color), 0 2px 8px 0 var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);z-index:1}:host .calcite-card-container:active{--tw-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 1px 6px -1px var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-transition-duration:75ms;transition-duration:75ms;z-index:1}.container{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column}:host([loading]) .calcite-card-container *:not(calcite-loader):not(.calcite-card-loader-container){pointer-events:none;opacity:0}:host([loading]) .calcite-card-loader-container{position:absolute;top:0px;right:0px;bottom:0px;left:0px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header,.footer{display:-ms-flexbox;display:flex;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.75rem;padding-bottom:0.25rem}.header{-ms-flex-direction:column;flex-direction:column}.footer{margin-top:auto;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.25rem;padding-bottom:0.75rem}.card-content{padding:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3)}:host([selectable]) .calcite-card-container:active{--tw-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 1px 6px -1px var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-brand)}slot[name=title]::slotted(*),*::slotted([slot=title]){margin:0px;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){margin:0px;margin-top:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){min-width:100%;max-width:100%}slot[name=footer-leading]::slotted(*),*::slotted([slot=footer-leading]){-ms-flex-item-align:center;align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375;-webkit-margin-end:auto;margin-inline-end:auto}slot[name=footer-trailing]::slotted(*),*::slotted([slot=footer-trailing]){-ms-flex-item-align:center;align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375}.thumbnail-wrapper{font-size:var(--calcite-font-size-0);line-height:1.375}.checkbox-wrapper{position:absolute;margin:0px;padding:0px;top:0.5rem;inset-inline-end:0.5rem}";

const Card = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteCardSelect = index.createEvent(this, "calciteCardSelect", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /**  When true, the cards content is waiting to be loaded. This state shows a busy indicator.*/
    this.loading = false;
    /** Indicates whether the card is selected. */
    this.selected = false;
    /** Indicates whether the card is selectable. */
    this.selectable = false;
    /** string to override English loading text
     * @default "Loading"
     */
    this.intlLoading = TEXT.loading;
    /** string to override English select text for checkbox when selectable is true
     * @default "Select"
     */
    this.intlSelect = TEXT.select;
    /** string to override English deselect text for checkbox when selectable is true
     * @default "Deselect"
     */
    this.intlDeselect = TEXT.deselect;
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.cardSelectClick = () => {
      this.selectCard();
    };
    this.cardSelectKeyDown = (e) => {
      switch (e.key) {
        case " ":
        case "Enter":
          this.selectCard();
          e.preventDefault();
          break;
      }
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    conditionalSlot.connectConditionalSlotComponent(this);
  }
  disonnectedCallback() {
    conditionalSlot.disconnectConditionalSlotComponent(this);
  }
  render() {
    return (index.h("div", { class: "calcite-card-container" }, this.loading ? (index.h("div", { class: "calcite-card-loader-container" }, index.h("calcite-loader", { active: true, label: this.intlLoading }))) : null, index.h("section", { "aria-busy": this.loading.toString(), class: { [CSS.container]: true } }, this.selectable ? this.renderCheckbox() : null, this.renderThumbnail(), this.renderHeader(), index.h("div", { class: "card-content" }, index.h("slot", null)), this.renderFooter())));
  }
  selectCard() {
    this.selected = !this.selected;
    this.calciteCardSelect.emit();
  }
  renderThumbnail() {
    return dom.getSlotted(this.el, SLOTS.thumbnail) ? (index.h("div", { class: CSS.thumbnailWrapper, key: "thumbnail-wrapper" }, index.h("slot", { name: SLOTS.thumbnail }))) : null;
  }
  renderCheckbox() {
    const checkboxLabel = this.selected ? this.intlDeselect : this.intlSelect;
    return (index.h("calcite-label", { class: CSS.checkboxWrapper, onClick: this.cardSelectClick, onKeyDown: this.cardSelectKeyDown }, index.h("calcite-checkbox", { checked: this.selected, label: checkboxLabel })));
  }
  renderHeader() {
    const { el } = this;
    const title = dom.getSlotted(el, SLOTS.title);
    const subtitle = dom.getSlotted(el, SLOTS.subtitle);
    const hasHeader = title || subtitle;
    return hasHeader ? (index.h("header", { class: CSS.header }, index.h("slot", { name: SLOTS.title }), index.h("slot", { name: SLOTS.subtitle }))) : null;
  }
  renderFooter() {
    const { el } = this;
    const leadingFooter = dom.getSlotted(el, SLOTS.footerLeading);
    const trailingFooter = dom.getSlotted(el, SLOTS.footerTrailing);
    const hasFooter = leadingFooter || trailingFooter;
    return hasFooter ? (index.h("footer", { class: CSS.footer }, index.h("slot", { name: SLOTS.footerLeading }), index.h("slot", { name: SLOTS.footerTrailing }))) : null;
  }
  get el() { return index.getElement(this); }
};
Card.style = cardCss;

exports.calcite_card = Card;
