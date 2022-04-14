/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { proxyCustomElement, HTMLElement, h, Fragment } from '@stencil/core/internal/client';
import { b as getSlotted } from './dom.js';
import { S as SLOTS$1, d as defineCustomElement$5 } from './action-menu.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot.js';
import { d as defineCustomElement$6 } from './action.js';
import { d as defineCustomElement$4 } from './icon.js';
import { d as defineCustomElement$3 } from './loader.js';
import { d as defineCustomElement$2 } from './popover.js';
import { d as defineCustomElement$1 } from './tooltip-manager.js';

const SLOTS = {
  menuActions: "menu-actions",
  menuTooltip: "menu-tooltip"
};
const TEXT = {
  more: "More"
};
const ICONS = {
  menu: "ellipsis"
};

const actionGroupCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0px;--calcite-action-group-columns:3}:host([columns=\"1\"]){--calcite-action-group-columns:1}:host([columns=\"2\"]){--calcite-action-group-columns:2}:host([columns=\"3\"]){--calcite-action-group-columns:3}:host([columns=\"4\"]){--calcite-action-group-columns:4}:host([columns=\"5\"]){--calcite-action-group-columns:5}:host([columns=\"6\"]){--calcite-action-group-columns:6}:host(:first-child){padding-top:0px}:host([layout=horizontal]){-ms-flex-direction:row;flex-direction:row}:host([layout=grid]){display:grid;place-content:stretch;gap:1px;background-color:var(--calcite-ui-background);padding:1px;grid-template-columns:repeat(var(--calcite-action-group-columns), auto)}";

const ActionGroup = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * Indicates whether widget is expanded.
     */
    this.expanded = false;
    /**
     * Indicates the horizontal, vertical, or grid layout of the component.
     */
    this.layout = "vertical";
    /**
     * Opens the action menu.
     */
    this.menuOpen = false;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setMenuOpen = (event) => {
      this.menuOpen = !!event.detail;
    };
  }
  expandedHandler() {
    this.menuOpen = false;
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
  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------
  renderTooltip() {
    const { el } = this;
    const hasTooltip = getSlotted(el, SLOTS.menuTooltip);
    return hasTooltip ? h("slot", { name: SLOTS.menuTooltip, slot: SLOTS$1.tooltip }) : null;
  }
  renderMenu() {
    const { el, expanded, intlMore, menuOpen, scale } = this;
    const hasMenuItems = getSlotted(el, SLOTS.menuActions);
    return hasMenuItems ? (h("calcite-action-menu", { expanded: expanded, flipPlacements: ["left", "right"], label: intlMore || TEXT.more, onCalciteActionMenuOpenChange: this.setMenuOpen, open: menuOpen, placement: "leading-start", scale: scale }, h("calcite-action", { icon: ICONS.menu, scale: scale, slot: SLOTS$1.trigger, text: intlMore || TEXT.more, textEnabled: expanded }), h("slot", { name: SLOTS.menuActions }), this.renderTooltip())) : null;
  }
  render() {
    return (h(Fragment, null, h("slot", null), this.renderMenu()));
  }
  get el() { return this; }
  static get watchers() { return {
    "expanded": ["expandedHandler"]
  }; }
  static get style() { return actionGroupCss; }
}, [1, "calcite-action-group", {
    "expanded": [516],
    "layout": [513],
    "columns": [514],
    "intlMore": [1, "intl-more"],
    "menuOpen": [1540, "menu-open"],
    "scale": [513]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-action-group", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover", "calcite-tooltip-manager"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-action-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionGroup);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "calcite-action-menu":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "calcite-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "calcite-tooltip-manager":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { ActionGroup as A, SLOTS as S, defineCustomElement as d };
