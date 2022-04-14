/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { P as POPOVER_REFERENCE } from './resources.js';
import { q as queryElementRoots, j as queryElementsRoots } from './dom.js';

const popoverManagerCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:block}";

const PopoverManager = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
     * CSS Selector to match reference elements for popovers. Reference elements will be identified by this selector in order to open their associated popover.
     * @default `[data-calcite-popover-reference]`
     */
    this.selector = `[${POPOVER_REFERENCE}]`;
    /**
     * Automatically closes any currently open popovers when clicking outside of a popover.
     */
    this.autoClose = false;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.queryPopover = (composedPath) => {
      const { el } = this;
      if (!composedPath.includes(el)) {
        return null;
      }
      const referenceElement = composedPath.find((pathEl) => { var _a; return (_a = pathEl === null || pathEl === void 0 ? void 0 : pathEl.hasAttribute) === null || _a === void 0 ? void 0 : _a.call(pathEl, POPOVER_REFERENCE); });
      if (!referenceElement) {
        return null;
      }
      const id = referenceElement.getAttribute(POPOVER_REFERENCE);
      return queryElementRoots(el, { id });
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return h("slot", null);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  closeOpenPopovers(event) {
    const { autoClose, el } = this;
    const popoverSelector = "calcite-popover";
    const composedPath = event.composedPath();
    const popover = this.queryPopover(composedPath);
    if (popover) {
      popover.toggle();
      return;
    }
    if (autoClose) {
      queryElementsRoots(el, popoverSelector)
        .filter((popover) => popover.open && !composedPath.includes(popover))
        .forEach((popover) => popover.toggle(false));
    }
  }
  get el() { return this; }
  static get style() { return popoverManagerCss; }
}, [1, "calcite-popover-manager", {
    "selector": [1],
    "autoClose": [516, "auto-close"]
  }, [[10, "click", "closeOpenPopovers"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-popover-manager"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-popover-manager":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PopoverManager);
      }
      break;
  } });
}
defineCustomElement$1();

const CalcitePopoverManager = PopoverManager;
const defineCustomElement = defineCustomElement$1;

export { CalcitePopoverManager, defineCustomElement };
