/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { b as getSlotted } from './dom.js';
import { H as Heading } from './Heading.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot.js';
import { u as updateHostInteraction } from './interactive.js';
import { g as guid } from './guid.js';
import { d as defineCustomElement$9 } from './action.js';
import { d as defineCustomElement$8 } from './action-menu.js';
import { d as defineCustomElement$7 } from './handle.js';
import { d as defineCustomElement$6 } from './icon.js';
import { d as defineCustomElement$5 } from './loader.js';
import { d as defineCustomElement$4 } from './popover.js';
import { d as defineCustomElement$3 } from './scrim.js';
import { d as defineCustomElement$2 } from './tooltip-manager.js';

const CSS = {
  article: "article",
  content: "content",
  headerContainer: "header-container",
  icon: "icon",
  statusIcon: "status-icon",
  toggle: "toggle",
  toggleIcon: "toggle-icon",
  title: "title",
  heading: "heading",
  header: "header",
  button: "button",
  summary: "summary",
  controlContainer: "control-container",
  valid: "valid",
  invalid: "invalid",
  loading: "loading"
};
const TEXT = {
  collapse: "Collapse",
  expand: "Expand",
  loading: "Loading",
  options: "Options"
};
const SLOTS = {
  icon: "icon",
  control: "control",
  headerMenuActions: "header-menu-actions"
};
const ICONS = {
  opened: "chevron-up",
  closed: "chevron-down",
  valid: "check-circle",
  invalid: "exclamation-mark-triangle",
  refresh: "refresh"
};
const HEADING_LEVEL = 4;

const blockCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-direction:column;flex-direction:column;border-width:0px;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding:0px;-webkit-transition-property:margin;transition-property:margin;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);-ms-flex-preferred-size:auto;flex-basis:auto}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:-ms-flexbox;display:flex;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-align:center;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{-ms-flex:1 1 auto;flex:1 1 auto;padding:0.5rem}h1.heading{font-size:var(--calcite-font-size-2);line-height:1.5rem}h2.heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}h3.heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}h4.heading,h5.heading{font-size:var(--calcite-font-size--1);line-height:1rem}.header{-ms-flex-pack:start;justify-content:flex-start;padding:0px}.header,.toggle{grid-area:header}.header-container{display:grid;-ms-flex-align:stretch;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:\"handle header control menu\";grid-column:header-start/menu-end;grid-row:1/2}.toggle{margin:0px;display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;border-style:none;padding:0px;font-family:inherit;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-ui-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0px;padding:0.75rem}.header .title .heading{padding:0px;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-ui-text-2);-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.summary{margin-top:0.125rem;padding:0px;font-size:var(--calcite-font-size--2);color:var(--calcite-ui-text-3);word-wrap:break-word;word-break:break-word}.icon{-webkit-margin-start:0.75rem;margin-inline-start:0.75rem;-webkit-margin-end:0px;margin-inline-end:0px;margin-block:0.75rem}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}.status-icon.loading{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.toggle-icon{margin-top:0.75rem;margin-bottom:0.75rem;-ms-flex-item-align:center;align-self:center;justify-self:end;color:var(--calcite-ui-text-3);-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-margin-end:1rem;margin-inline-end:1rem;-webkit-margin-start:auto;margin-inline-start:auto}.toggle:hover .toggle-icon{color:var(--calcite-ui-text-1)}.content{position:relative}@keyframes in{0%{opacity:0}100%{opacity:1}}.content{-webkit-animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem}.control-container{margin:0px;display:-ms-flexbox;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}:host([open]){margin-top:0.5rem;margin-bottom:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-ui-text-1)}";

const Block = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteBlockToggle = createEvent(this, "calciteBlockToggle", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * When true, this block will be collapsible.
     */
    this.collapsible = false;
    /**
     * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
     */
    this.disabled = false;
    /**
     * When true, displays a drag handle in the header.
     */
    this.dragHandle = false;
    /** string to override English loading text
     * @default "Loading"
     */
    this.intlLoading = TEXT.loading;
    /** Text string used for the actions menu
     * @default "Options"
     */
    this.intlOptions = TEXT.options;
    /**
     * When true, content is waiting to be loaded. This state shows a busy indicator.
     */
    this.loading = false;
    /**
     * When true, the block's content will be displayed.
     */
    this.open = false;
    this.guid = guid();
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.onHeaderClick = () => {
      this.open = !this.open;
      this.calciteBlockToggle.emit();
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentDidRender() {
    updateHostInteraction(this);
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
  renderScrim() {
    const { loading } = this;
    const defaultSlot = h("slot", null);
    return [loading ? h("calcite-scrim", { loading: loading }) : null, defaultSlot];
  }
  renderIcon() {
    const { el, status } = this;
    const showingLoadingStatus = this.loading && !this.open;
    const statusIcon = showingLoadingStatus ? ICONS.refresh : ICONS[status];
    const hasIcon = getSlotted(el, SLOTS.icon) || statusIcon;
    const iconEl = !statusIcon ? (h("slot", { key: "icon-slot", name: SLOTS.icon })) : (h("calcite-icon", { class: {
        [CSS.statusIcon]: true,
        [CSS.valid]: status == "valid",
        [CSS.invalid]: status == "invalid",
        [CSS.loading]: showingLoadingStatus
      }, icon: statusIcon, scale: "m" }));
    return hasIcon ? h("div", { class: CSS.icon }, iconEl) : null;
  }
  renderTitle() {
    const { heading, headingLevel, summary } = this;
    return heading || summary ? (h("div", { class: CSS.title }, h(Heading, { class: CSS.heading, level: headingLevel || HEADING_LEVEL }, heading), summary ? h("div", { class: CSS.summary }, summary) : null)) : null;
  }
  render() {
    const { collapsible, el, intlCollapse, intlExpand, loading, open, intlLoading } = this;
    const toggleLabel = open ? intlCollapse || TEXT.collapse : intlExpand || TEXT.expand;
    const headerContent = (h("header", { class: CSS.header }, this.renderIcon(), this.renderTitle()));
    const hasControl = !!getSlotted(el, SLOTS.control);
    const hasMenuActions = !!getSlotted(el, SLOTS.headerMenuActions);
    const collapseIcon = open ? ICONS.opened : ICONS.closed;
    const { guid } = this;
    const regionId = `${guid}-region`;
    const buttonId = `${guid}-button`;
    const headerNode = (h("div", { class: CSS.headerContainer }, this.dragHandle ? h("calcite-handle", null) : null, collapsible ? (h("button", { "aria-controls": regionId, "aria-expanded": collapsible ? open.toString() : null, "aria-label": toggleLabel, class: CSS.toggle, id: buttonId, onClick: this.onHeaderClick, title: toggleLabel }, headerContent, !hasControl && !hasMenuActions ? (h("calcite-icon", { "aria-hidden": "true", class: CSS.toggleIcon, icon: collapseIcon, scale: "s" })) : null)) : (headerContent), loading ? (h("calcite-loader", { inline: true, "is-active": true, label: intlLoading })) : hasControl ? (h("div", { class: CSS.controlContainer }, h("slot", { name: SLOTS.control }))) : null, hasMenuActions ? (h("calcite-action-menu", { label: this.intlOptions || TEXT.options }, h("slot", { name: SLOTS.headerMenuActions }))) : null));
    return (h(Host, null, h("article", { "aria-busy": loading.toString(), class: {
        [CSS.article]: true
      } }, headerNode, h("section", { "aria-expanded": this.open.toString(), "aria-labelledby": buttonId, class: CSS.content, hidden: !open, id: regionId }, this.renderScrim()))));
  }
  get el() { return this; }
  static get style() { return blockCss; }
}, [1, "calcite-block", {
    "collapsible": [4],
    "disabled": [516],
    "dragHandle": [516, "drag-handle"],
    "heading": [1],
    "headingLevel": [2, "heading-level"],
    "intlCollapse": [1, "intl-collapse"],
    "intlExpand": [1, "intl-expand"],
    "intlLoading": [1, "intl-loading"],
    "intlOptions": [1, "intl-options"],
    "loading": [516],
    "open": [1540],
    "status": [513],
    "summary": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-block", "calcite-action", "calcite-action-menu", "calcite-handle", "calcite-icon", "calcite-loader", "calcite-popover", "calcite-scrim", "calcite-tooltip-manager"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-block":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Block);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "calcite-action-menu":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "calcite-handle":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "calcite-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "calcite-tooltip-manager":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteBlock = Block;
const defineCustomElement = defineCustomElement$1;

export { CalciteBlock, defineCustomElement };
