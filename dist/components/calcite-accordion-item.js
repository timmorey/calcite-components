/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { g as getElementProp, a as getElementDir, C as CSS_UTILITY } from './dom.js';
import { g as guid } from './guid.js';
import { d as defineCustomElement$2 } from './icon.js';

const accordionItemCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}.icon-position--end,.icon-position--start{--calcite-accordion-item-icon-rotation:calc(90deg * -1);--calcite-accordion-item-active-icon-rotation:0deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:0deg}.icon-position--start{--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-icon-margin)}.icon-position--end{--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-icon-margin);--calcite-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-accordion-item-icon-rotation:0deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:0deg;--calcite-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;color:var(--calcite-ui-text-3);-webkit-text-decoration-line:none;text-decoration-line:none;outline:2px solid transparent;outline-offset:2px;background-color:var(--calcite-accordion-item-background, var(--calcite-ui-foreground-1))}:host .accordion-item-header{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus) .accordion-item-header{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([active]){color:var(--calcite-ui-text-1)}:host([active]) .accordion-item-content{display:block;color:var(--calcite-ui-text-1)}:host([active]) .accordion-item-header{border-bottom-color:transparent}:host .accordion-item-header{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-direction:var(--calcite-accordion-item-flex-direction);flex-direction:var(--calcite-accordion-item-flex-direction)}:host .accordion-item-icon{position:relative;margin:0px;display:-ms-inline-flexbox;display:inline-flex;color:var(--calcite-ui-text-3);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-margin-end:var(--calcite-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-accordion-item-icon-spacing-start);-webkit-margin-start:var(--calcite-accordion-item-icon-spacing-end);margin-inline-start:var(--calcite-accordion-item-icon-spacing-end)}:host .accordion-item-content,:host .accordion-item-header{padding:var(--calcite-accordion-item-padding);border-bottom:1px solid var(--calcite-accordion-item-border, var(--calcite-ui-border-2))}:host .accordion-item-header *{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .accordion-item-content{display:none;padding-top:0px;color:var(--calcite-ui-text-3);text-align:initial}:host .accordion-item-expand-icon{color:var(--calcite-ui-text-3);-webkit-margin-start:var(--calcite-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-accordion-item-icon-spacing-start);-webkit-margin-end:var(--calcite-accordion-item-icon-spacing-end);margin-inline-end:var(--calcite-accordion-item-icon-spacing-end);-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation));transform:rotate(var(--calcite-accordion-item-icon-rotation))}.calcite--rtl .accordion-item-expand-icon{-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([active]) .accordion-item-expand-icon{color:var(--calcite-ui-text-1);-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation));transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([active]) .calcite--rtl .accordion-item-expand-icon{-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .accordion-item-header-text{margin-top:0px;margin-bottom:0px;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column;padding-top:0px;padding-bottom:0px;text-align:initial;-webkit-margin-end:auto;margin-inline-end:auto}:host .accordion-item-title,:host .accordion-item-subtitle{display:-ms-flexbox;display:flex;width:100%}:host .accordion-item-title{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}:host .accordion-item-subtitle{margin-top:0.25rem;color:var(--calcite-ui-text-3)}:host(:focus) .accordion-item-title,:host(:hover) .accordion-item-title{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-icon,:host(:hover) .accordion-item-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-expand-icon,:host(:hover) .accordion-item-expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-subtitle,:host(:hover) .accordion-item-subtitle{color:var(--calcite-ui-text-2)}:host(:focus) .accordion-item-title,:host(:active) .accordion-item-title,:host([active]) .accordion-item-title{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-icon,:host(:active) .accordion-item-icon,:host([active]) .accordion-item-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-expand-icon,:host(:active) .accordion-item-expand-icon,:host([active]) .accordion-item-expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-subtitle,:host(:active) .accordion-item-subtitle,:host([active]) .accordion-item-subtitle{color:var(--calcite-ui-text-2)}";

const AccordionItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteAccordionItemKeyEvent = createEvent(this, "calciteAccordionItemKeyEvent", 7);
    this.calciteAccordionItemSelect = createEvent(this, "calciteAccordionItemSelect", 7);
    this.calciteAccordionItemClose = createEvent(this, "calciteAccordionItemClose", 7);
    this.calciteAccordionItemRegister = createEvent(this, "calciteAccordionItemRegister", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /** Indicates whether the item is active. */
    this.active = false;
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    this.guid = guid();
    /** what icon position does the parent accordion specify */
    this.iconPosition = "end";
    /** handle clicks on item header */
    this.itemHeaderClickHandler = () => this.emitRequestedItem();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.parent = this.el.parentElement;
    this.selectionMode = getElementProp(this.el, "selection-mode", "multi");
    this.iconType = getElementProp(this.el, "icon-type", "chevron");
    this.iconPosition = getElementProp(this.el, "icon-position", this.iconPosition);
  }
  componentDidLoad() {
    this.itemPosition = this.getItemPosition();
    this.calciteAccordionItemRegister.emit({
      parent: this.parent,
      position: this.itemPosition
    });
  }
  render() {
    const dir = getElementDir(this.el);
    const iconEl = h("calcite-icon", { class: "accordion-item-icon", icon: this.icon, scale: "s" });
    const { guid } = this;
    const regionId = `${guid}-region`;
    const buttonId = `${guid}-button`;
    return (h(Host, { tabindex: "0" }, h("div", { class: {
        [`icon-position--${this.iconPosition}`]: true,
        [`icon-type--${this.iconType}`]: true
      } }, h("div", { "aria-controls": regionId, class: { "accordion-item-header": true, [CSS_UTILITY.rtl]: dir === "rtl" }, id: buttonId, onClick: this.itemHeaderClickHandler, role: "button" }, this.icon ? iconEl : null, h("div", { class: "accordion-item-header-text" }, h("span", { class: "accordion-item-title" }, this.itemTitle), this.itemSubtitle ? (h("span", { class: "accordion-item-subtitle" }, this.itemSubtitle)) : null), h("calcite-icon", { class: "accordion-item-expand-icon", icon: this.iconType === "chevron"
        ? "chevronDown"
        : this.iconType === "caret"
          ? "caretDown"
          : this.active
            ? "minus"
            : "plus", scale: "s" })), h("div", { "aria-expanded": this.active.toString(), "aria-labelledby": buttonId, class: "accordion-item-content", id: regionId, role: "region" }, h("slot", null)))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyDownHandler(e) {
    if (e.target === this.el) {
      switch (e.key) {
        case " ":
        case "Enter":
          this.emitRequestedItem();
          e.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowDown":
        case "Home":
        case "End":
          this.calciteAccordionItemKeyEvent.emit({
            parent: this.parent,
            item: e
          });
          e.preventDefault();
          break;
      }
    }
  }
  updateActiveItemOnChange(event) {
    this.requestedAccordionItem = event.detail
      .requestedAccordionItem;
    if (this.el.parentNode !== this.requestedAccordionItem.parentNode) {
      return;
    }
    this.determineActiveItem();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  determineActiveItem() {
    switch (this.selectionMode) {
      case "multi":
        if (this.el === this.requestedAccordionItem) {
          this.active = !this.active;
        }
        break;
      case "single":
        this.active = this.el === this.requestedAccordionItem ? !this.active : false;
        break;
      case "single-persist":
        this.active = this.el === this.requestedAccordionItem;
        break;
    }
  }
  emitRequestedItem() {
    this.calciteAccordionItemSelect.emit({
      requestedAccordionItem: this.el
    });
  }
  getItemPosition() {
    return Array.prototype.indexOf.call(this.parent.querySelectorAll("calcite-accordion-item"), this.el);
  }
  get el() { return this; }
  static get style() { return accordionItemCss; }
}, [1, "calcite-accordion-item", {
    "active": [1540],
    "itemTitle": [1, "item-title"],
    "itemSubtitle": [1, "item-subtitle"],
    "icon": [513]
  }, [[0, "keydown", "keyDownHandler"], [16, "calciteAccordionChange", "updateActiveItemOnChange"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-accordion-item", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-accordion-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AccordionItem);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteAccordionItem = AccordionItem;
const defineCustomElement = defineCustomElement$1;

export { CalciteAccordionItem, defineCustomElement };
