/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { b as getSlotted } from './dom.js';
import { g as guid } from './guid.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot.js';
import { d as defineCustomElement$1 } from './icon.js';

const CSS = {
  title: "title",
  close: "close",
  chipImageContainer: "chip-image-container",
  calciteChipIcon: "calcite-chip--icon"
};
const TEXT = {
  close: "Close"
};
const SLOTS = {
  image: "image"
};
const ICONS = {
  close: "x"
};

const chipCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){height:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-unit-l:0.5rem;--calcite-chip-spacing-unit-s:0.25rem}:host([scale=s]) .chip-image-container{height:1.25rem;width:1.25rem}:host([scale=m]){height:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-unit-l:0.75rem;--calcite-chip-spacing-unit-s:6px}:host([scale=m]) .chip-image-container{height:1.5rem;width:1.5rem;-webkit-padding-start:0.25rem;padding-inline-start:0.25rem}:host([scale=l]){height:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-unit-l:1rem;--calcite-chip-spacing-unit-s:0.5rem}:host([scale=l]) .chip-image-container{height:2rem;width:2rem;padding-left:0.25rem}:host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-inline-flexbox;display:inline-flex;cursor:default;-ms-flex-align:center;align-items:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container{display:-ms-inline-flexbox;display:inline-flex;height:100%;max-width:100%;-ms-flex-align:center;align-items:center}.title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host span{padding:0 var(--calcite-chip-spacing-unit-l)}:host([dismissible]) span{padding-inline:var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s)}:host([icon]:not([dismissible])) span{padding:0 var(--calcite-chip-spacing-unit-l)}:host button{margin:0px;display:-ms-inline-flexbox;display:inline-flex;max-height:100%;min-height:100%;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;-webkit-appearance:none;border-start-start-radius:0;border-start-end-radius:50px;border-end-end-radius:50px;border-end-start-radius:0;padding:0 var(--calcite-chip-spacing-unit-s);color:inherit;--calcite-chip-transparent-hover:var(--calcite-button-transparent-hover);--calcite-chip-transparent-press:var(--calcite-button-transparent-press)}:host button:hover{background-color:var(--calcite-chip-transparent-hover)}:host button:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host button:active{background-color:var(--calcite-chip-transparent-press)}.chip-image-container{display:-ms-inline-flexbox;display:inline-flex;border-radius:50%;overflow:hidden}:host slot[name=image]::slotted(*){display:-ms-flexbox;display:flex;height:100%;width:100%;border-radius:50%;overflow:hidden}.calcite-chip--icon{position:relative;margin-top:0px;margin-bottom:0px;display:-ms-inline-flexbox;display:inline-flex;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-margin-end:0;margin-inline-end:0;-webkit-margin-start:var(--calcite-chip-spacing-unit-l);margin-inline-start:var(--calcite-chip-spacing-unit-l);border-start-start-radius:0;border-start-end-radius:50px;border-end-end-radius:50px;border-end-start-radius:0}:host([color=blue][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-info);color:var(--calcite-ui-text-inverse)}:host([color=red][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-danger);color:var(--calcite-ui-text-inverse)}:host([color=yellow][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-warning);color:#151515}:host([color=green][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-success);color:#151515}:host([color=grey][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host([color=grey][appearance=solid]) button,:host([color=grey][appearance=solid]) calcite-icon{color:var(--calcite-ui-text-3)}:host([color=blue][appearance=clear]){border-color:var(--calcite-ui-info)}:host([color=blue][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-info)}:host([color=red][appearance=clear]){border-color:var(--calcite-ui-danger)}:host([color=red][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-danger)}:host([color=yellow][appearance=clear]){border-color:var(--calcite-ui-warning)}:host([color=yellow][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-warning)}:host([color=green][appearance=clear]){border-color:var(--calcite-ui-success)}:host([color=green][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-success)}:host([color=grey][appearance=clear]){border-color:var(--calcite-ui-border-1)}:host([color=grey][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-text-3)}";

const Chip = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteChipDismiss = createEvent(this, "calciteChipDismiss", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /** specify the appearance style of the button, defaults to solid. */
    this.appearance = "solid";
    /** specify the color of the button, defaults to blue */
    this.color = "grey";
    /** Optionally show a button the user can click to dismiss the chip */
    this.dismissible = false;
    /** Aria label for the "x" button
     * @default "Close"
     */
    this.dismissLabel = TEXT.close;
    /** flip the icon in rtl */
    this.iconFlipRtl = false;
    /** specify the scale of the chip, defaults to m */
    this.scale = "m";
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.closeClickHandler = (event) => {
      event.preventDefault();
      this.calciteChipDismiss.emit(this.el);
    };
    this.guid = guid();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    connectConditionalSlotComponent(this);
  }
  disconnectedCallback() {
    disconnectConditionalSlotComponent(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    (_a = this.closeButton) === null || _a === void 0 ? void 0 : _a.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderChipImage() {
    const { el } = this;
    const hasChipImage = getSlotted(el, SLOTS.image);
    return hasChipImage ? (h("div", { class: CSS.chipImageContainer, key: "image" }, h("slot", { name: SLOTS.image }))) : null;
  }
  render() {
    const iconEl = (h("calcite-icon", { class: CSS.calciteChipIcon, flipRtl: this.iconFlipRtl, icon: this.icon, scale: "s" }));
    const closeButton = (h("button", { "aria-describedby": this.guid, "aria-label": this.dismissLabel, class: CSS.close, onClick: this.closeClickHandler, ref: (el) => (this.closeButton = el) }, h("calcite-icon", { icon: ICONS.close, scale: "s" })));
    return (h("div", { class: "container" }, this.renderChipImage(), this.icon ? iconEl : null, h("span", { class: CSS.title, id: this.guid }, h("slot", null)), this.dismissible ? closeButton : null));
  }
  get el() { return this; }
  static get style() { return chipCss; }
}, [1, "calcite-chip", {
    "appearance": [513],
    "color": [513],
    "dismissible": [516],
    "dismissLabel": [1, "dismiss-label"],
    "icon": [513],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "scale": [513],
    "value": [8],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-chip", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-chip":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Chip);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { Chip as C, defineCustomElement as d };
