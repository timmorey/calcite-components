/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { proxyCustomElement, HTMLElement, h, Fragment } from '@stencil/core/internal/client';
import { b as getSlotted } from './dom.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot.js';

const CSS = {
  actionBarContainer: "action-bar-container",
  content: "content"
};
const SLOTS = {
  actionBar: "action-bar"
};

const shellCenterRowCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;background-color:transparent;overflow:hidden}.content{margin:0px;display:-ms-flexbox;display:flex;height:100%;width:100%;overflow:hidden;-ms-flex:1 0 0px;flex:1 0 0}.action-bar-container{display:-ms-flexbox;display:flex}:host([detached]){margin-left:0.5rem;margin-right:0.5rem;margin-top:0.5rem;margin-bottom:1.5rem}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}:host([detached]){-webkit-animation:in-up var(--calcite-internal-animation-timing-slow) ease-in-out;animation:in-up var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.25rem;border-width:0px;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([position=end]){-ms-flex-item-align:end;align-self:flex-end}:host([position=start]){-ms-flex-item-align:start;align-self:flex-start}:host([height-scale=s]){height:33.333333%}:host([height-scale=m]){height:70%}:host([height-scale=l]){height:100%}:host([height-scale=l][detached]){height:calc(100% - 2rem)}::slotted(calcite-panel){height:100%;width:100%}::slotted(calcite-action-bar),::slotted(calcite-action-bar[position=end]){-webkit-border-end:1px solid;border-inline-end:1px solid;border-color:var(--calcite-ui-border-3)}";

const ShellCenterRow = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
     * This property makes the content area appear like a "floating" panel.
     */
    this.detached = false;
    /**
     * Specifies the maximum height of the row.
     */
    this.heightScale = "s";
    /**
     * Arranges the component depending on the elements 'dir' property.
     */
    this.position = "end";
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
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { el } = this;
    const contentNode = (h("div", { class: CSS.content }, h("slot", null)));
    const actionBar = getSlotted(el, SLOTS.actionBar);
    const actionBarNode = actionBar ? (h("div", { class: CSS.actionBarContainer, key: "action-bar" }, h("slot", { name: SLOTS.actionBar }))) : null;
    const children = [actionBarNode, contentNode];
    if ((actionBar === null || actionBar === void 0 ? void 0 : actionBar.position) === "end") {
      children.reverse();
    }
    return h(Fragment, null, children);
  }
  get el() { return this; }
  static get style() { return shellCenterRowCss; }
}, [1, "calcite-shell-center-row", {
    "detached": [516],
    "heightScale": [513, "height-scale"],
    "position": [513]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-shell-center-row"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-shell-center-row":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ShellCenterRow);
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteShellCenterRow = ShellCenterRow;
const defineCustomElement = defineCustomElement$1;

export { CalciteShellCenterRow, defineCustomElement };
