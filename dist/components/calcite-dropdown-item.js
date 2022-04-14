/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { g as getElementProp } from './dom.js';
import { d as defineCustomElement$2 } from './icon.js';

const CSS = {
  containerLink: "container--link",
  containerSmall: "container--s",
  containerMedium: "container--m",
  containerLarge: "container--l",
  containerMulti: "container--multi-selection",
  containerSingle: "container--single-selection",
  containerNone: "container--none-selection"
};

const dropdownItemCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}.container--s{padding-top:0.25rem;padding-bottom:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;-webkit-padding-end:0.5rem;padding-inline-end:0.5rem;-webkit-padding-start:1.5rem;padding-inline-start:1.5rem}.container--m{padding-top:0.5rem;padding-bottom:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;-webkit-padding-end:0.75rem;padding-inline-end:0.75rem;-webkit-padding-start:2rem;padding-inline-start:2rem}.container--l{padding-top:0.75rem;padding-bottom:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;-webkit-padding-end:1rem;padding-inline-end:1rem;-webkit-padding-start:2.5rem;padding-inline-start:2.5rem}.container--s.container--none-selection{-webkit-padding-start:0.25rem;padding-inline-start:0.25rem}.container--s.container--none-selection .dropdown-link{-webkit-padding-start:0px;padding-inline-start:0px}.container--m.container--none-selection{-webkit-padding-start:0.5rem;padding-inline-start:0.5rem}.container--m.container--none-selection .dropdown-link{-webkit-padding-start:0px;padding-inline-start:0px}.container--l.container--none-selection{-webkit-padding-start:0.75rem;padding-inline-start:0.75rem}.container--l.container--none-selection .dropdown-link{-webkit-padding-start:0px;padding-inline-start:0px}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}.container{position:relative;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;cursor:pointer;-ms-flex-align:center;align-items:center;color:var(--calcite-ui-text-3);-webkit-text-decoration-line:none;text-decoration-line:none;outline:2px solid transparent;outline-offset:2px;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.dropdown-item-content{-ms-flex:1 1 auto;flex:1 1 auto;-webkit-padding-end:auto;padding-inline-end:auto;-webkit-padding-start:0.25rem;padding-inline-start:0.25rem}:host,.container--link a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.container--link{padding:0px}.container--link a{position:relative;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;cursor:pointer;-ms-flex-align:center;align-items:center;color:var(--calcite-ui-text-3);-webkit-text-decoration-line:none;text-decoration-line:none;outline:2px solid transparent;outline-offset:2px;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.container--s .dropdown-link{padding-top:0.25rem;padding-bottom:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;-webkit-padding-end:0.5rem;padding-inline-end:0.5rem;-webkit-padding-start:1.5rem;padding-inline-start:1.5rem}.container--m .dropdown-link{padding-top:0.5rem;padding-bottom:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;-webkit-padding-end:0.75rem;padding-inline-end:0.75rem;-webkit-padding-start:2rem;padding-inline-start:2rem}.container--l .dropdown-link{padding-top:0.75rem;padding-bottom:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;-webkit-padding-end:1rem;padding-inline-end:1rem;-webkit-padding-start:2.5rem;padding-inline-start:2.5rem}:host(:hover) .container,:host(:active) .container{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);-webkit-text-decoration-line:none;text-decoration-line:none}:host(:hover) .container--link .dropdown-link,:host(:active) .container--link .dropdown-link{color:var(--calcite-ui-text-1)}:host(:focus) .container{color:var(--calcite-ui-text-1);-webkit-text-decoration-line:none;text-decoration-line:none}:host(:active) .container{background-color:var(--calcite-ui-foreground-3)}:host(:hover) .container:before,:host(:active) .container:before,:host(:focus) .container:before{opacity:1}:host([active]) .container:not(.container--none-selection),:host([active]) .container--link .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([active]) .container:not(.container--none-selection):before,:host([active]) .container--link .dropdown-link:before{opacity:1;color:var(--calcite-ui-brand)}:host([active]) .container:not(.container--none-selection) calcite-icon,:host([active]) .container--link .dropdown-link calcite-icon{color:var(--calcite-ui-brand)}.container--multi-selection:before,.container--none-selection:before{display:none}.container--s:before{inset-inline-start:0.5rem}.container--m:before{inset-inline-start:0.75rem}.container--l:before{inset-inline-start:1rem}.dropdown-item-icon{position:absolute;opacity:0;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(0.9);transform:scale(0.9)}.container--s .dropdown-item-icon{inset-inline-start:0.25rem}.container--m .dropdown-item-icon{inset-inline-start:0.5rem}.container--l .dropdown-item-icon{inset-inline-start:0.75rem}:host(:hover) .dropdown-item-icon{color:var(--calcite-ui-border-1);opacity:1}:host([active]) .dropdown-item-icon{color:var(--calcite-ui-brand);opacity:1}.container--s .dropdown-item-icon-start{-webkit-margin-end:0.5rem;margin-inline-end:0.5rem;-webkit-margin-start:0.25rem;margin-inline-start:0.25rem}.container--s .dropdown-item-icon-end{-webkit-margin-start:0.5rem;margin-inline-start:0.5rem}.container--m .dropdown-item-icon-start{-webkit-margin-end:0.75rem;margin-inline-end:0.75rem;-webkit-margin-start:0.25rem;margin-inline-start:0.25rem}.container--m .dropdown-item-icon-end{-webkit-margin-start:0.75rem;margin-inline-start:0.75rem}.container--l .dropdown-item-icon-start{-webkit-margin-end:1rem;margin-inline-end:1rem;-webkit-margin-start:0.25rem;margin-inline-start:0.25rem}.container--l .dropdown-item-icon-end{-webkit-margin-start:1rem;margin-inline-start:1rem}";

const DropdownItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteDropdownItemSelect = createEvent(this, "calciteDropdownItemSelect", 7);
    this.calciteDropdownItemKeyEvent = createEvent(this, "calciteDropdownItemKeyEvent", 7);
    this.calciteDropdownCloseRequest = createEvent(this, "calciteDropdownCloseRequest", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /** Indicates whether the item is active. */
    this.active = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    this.el.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.initialize();
  }
  connectedCallback() {
    this.initialize();
  }
  render() {
    const scale = getElementProp(this.el, "scale", "m");
    const iconStartEl = (h("calcite-icon", { class: "dropdown-item-icon-start", flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: "s" }));
    const contentNode = (h("span", { class: "dropdown-item-content" }, h("slot", null)));
    const iconEndEl = (h("calcite-icon", { class: "dropdown-item-icon-end", flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: "s" }));
    const slottedContent = this.iconStart && this.iconEnd
      ? [iconStartEl, contentNode, iconEndEl]
      : this.iconStart
        ? [iconStartEl, h("slot", null)]
        : this.iconEnd
          ? [contentNode, iconEndEl]
          : contentNode;
    const contentEl = !this.href ? (slottedContent) : (h("a", { "aria-label": this.label, class: "dropdown-link", href: this.href, ref: (el) => (this.childLink = el), rel: this.rel, target: this.target }, slottedContent));
    const itemRole = this.href
      ? null
      : this.selectionMode === "single"
        ? "menuitemradio"
        : this.selectionMode === "multi"
          ? "menuitemcheckbox"
          : "menuitem";
    const itemAria = this.selectionMode !== "none" ? this.active.toString() : null;
    return (h(Host, { "aria-checked": itemAria, role: itemRole, tabindex: "0" }, h("div", { class: {
        container: true,
        [CSS.containerLink]: !!this.href,
        [CSS.containerSmall]: scale === "s",
        [CSS.containerMedium]: scale === "m",
        [CSS.containerLarge]: scale === "l",
        [CSS.containerMulti]: this.selectionMode === "multi",
        [CSS.containerSingle]: this.selectionMode === "single",
        [CSS.containerNone]: this.selectionMode === "none"
      } }, this.selectionMode !== "none" ? (h("calcite-icon", { class: "dropdown-item-icon", icon: this.selectionMode === "multi" ? "check" : "bullet-point", scale: "s" })) : null, contentEl)));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onClick() {
    this.emitRequestedItem();
  }
  keyDownHandler(e) {
    switch (e.key) {
      case " ":
        this.emitRequestedItem();
        if (this.href) {
          e.preventDefault();
          this.childLink.click();
        }
        break;
      case "Enter":
        this.emitRequestedItem();
        if (this.href) {
          this.childLink.click();
        }
        break;
      case "Escape":
        this.calciteDropdownCloseRequest.emit();
        break;
      case "Tab":
      case "ArrowUp":
      case "ArrowDown":
      case "Home":
      case "End":
        this.calciteDropdownItemKeyEvent.emit({ keyboardEvent: e });
        break;
    }
    e.preventDefault();
  }
  updateActiveItemOnChange(event) {
    const parentEmittedChange = event.composedPath().includes(this.parentDropdownGroupEl);
    if (parentEmittedChange) {
      this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
      this.requestedDropdownItem = event.detail.requestedDropdownItem;
      this.determineActiveItem();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  initialize() {
    this.selectionMode = getElementProp(this.el, "selection-mode", "single");
    this.parentDropdownGroupEl = this.el.closest("calcite-dropdown-group");
    if (this.selectionMode === "none") {
      this.active = false;
    }
  }
  determineActiveItem() {
    switch (this.selectionMode) {
      case "multi":
        if (this.el === this.requestedDropdownItem) {
          this.active = !this.active;
        }
        break;
      case "single":
        if (this.el === this.requestedDropdownItem) {
          this.active = true;
        }
        else if (this.requestedDropdownGroup === this.parentDropdownGroupEl) {
          this.active = false;
        }
        break;
      case "none":
        this.active = false;
        break;
    }
  }
  emitRequestedItem() {
    this.calciteDropdownItemSelect.emit({
      requestedDropdownItem: this.el,
      requestedDropdownGroup: this.parentDropdownGroupEl
    });
  }
  get el() { return this; }
  static get style() { return dropdownItemCss; }
}, [1, "calcite-dropdown-item", {
    "active": [1540],
    "iconFlipRtl": [513, "icon-flip-rtl"],
    "iconStart": [513, "icon-start"],
    "iconEnd": [513, "icon-end"],
    "href": [513],
    "label": [1],
    "rel": [1],
    "target": [1],
    "setFocus": [64]
  }, [[0, "click", "onClick"], [0, "keydown", "keyDownHandler"], [16, "calciteDropdownItemChange", "updateActiveItemOnChange"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-dropdown-item", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-dropdown-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DropdownItem);
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

const CalciteDropdownItem = DropdownItem;
const defineCustomElement = defineCustomElement$1;

export { CalciteDropdownItem, defineCustomElement };
