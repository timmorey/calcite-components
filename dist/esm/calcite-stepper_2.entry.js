/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { r as registerInstance, c as createEvent, h, g as getElement, H as Host } from './index-73638693.js';
import { d as getElementProp } from './dom-3f012371.js';
import { u as updateHostInteraction } from './interactive-d104f01d.js';
import './guid-a53704be.js';

const stepperCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:-ms-flexbox;display:flex;width:100%;min-width:100%;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:justify;justify-content:space-between}:host([layout=vertical]){-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column}:host ::slotted(.calcite-stepper-content){display:-ms-flexbox;display:flex;width:100%;min-width:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap}";

const Stepper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteStepperItemChange = createEvent(this, "calciteStepperItemChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /** optionally display a status icon next to the step title */
    this.icon = false;
    /** specify the layout of stepper, defaults to horizontal */
    this.layout = "horizontal";
    /** optionally display the number next to the step title */
    this.numbered = false;
    /** specify the scale of stepper, defaults to m */
    this.scale = "m";
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    /** created list of Stepper items */
    this.items = [];
    /** sorted list of Stepper items */
    this.sortedItems = [];
  }
  // watch for removal of disabled to register step
  contentWatcher() {
    if (this.layout === "horizontal") {
      if (!this.stepperContentContainer && this.requestedContent) {
        this.addHorizontalContentContainer();
      }
      this.updateContent(this.requestedContent);
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentDidLoad() {
    // if no stepper items are set as active, default to the first one
    if (!this.currentPosition) {
      this.calciteStepperItemChange.emit({
        position: 0
      });
    }
  }
  componentWillLoad() {
    if (this.layout === "horizontal" && !this.stepperContentContainer) {
      this.addHorizontalContentContainer();
    }
  }
  render() {
    return h("slot", null);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  calciteStepperItemKeyEvent(e) {
    const item = e.detail.item;
    const itemToFocus = e.target;
    const isFirstItem = this.itemIndex(itemToFocus) === 0;
    const isLastItem = this.itemIndex(itemToFocus) === this.sortedItems.length - 1;
    switch (item.key) {
      case "ArrowDown":
      case "ArrowRight":
        if (isLastItem) {
          this.focusFirstItem();
        }
        else {
          this.focusNextItem(itemToFocus);
        }
        break;
      case "ArrowUp":
      case "ArrowLeft":
        if (isFirstItem) {
          this.focusLastItem();
        }
        else {
          this.focusPrevItem(itemToFocus);
        }
        break;
      case "Home":
        this.focusFirstItem();
        break;
      case "End":
        this.focusLastItem();
        break;
    }
  }
  registerItem(event) {
    const item = {
      item: event.target,
      position: event.detail.position,
      content: event.detail.content
    };
    if (item.content && item.item.active) {
      this.requestedContent = item.content;
    }
    if (!this.items.includes(item)) {
      this.items.push(item);
    }
    this.sortedItems = this.sortItems();
  }
  updateItem(event) {
    if (event.detail.content) {
      this.requestedContent = event.detail.content;
    }
    this.currentPosition = event.detail.position;
    this.calciteStepperItemChange.emit({
      position: this.currentPosition
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** set the next step as active */
  async nextStep() {
    this.currentPosition =
      this.currentPosition + 1 < this.items.length
        ? this.currentPosition + 1
        : this.currentPosition;
    this.emitChangedItem();
  }
  /** set the previous step as active */
  async prevStep() {
    this.currentPosition =
      this.currentPosition - 1 >= 0 ? this.currentPosition - 1 : this.currentPosition;
    this.emitChangedItem();
  }
  /** set the requested step as active */
  async goToStep(num) {
    this.currentPosition = num - 1;
    this.emitChangedItem();
  }
  /** set the first step as active */
  async startStep() {
    this.currentPosition = 0;
    this.emitChangedItem();
  }
  /** set the last step as active */
  async endStep() {
    this.currentPosition = this.items.length - 1;
    this.emitChangedItem();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  addHorizontalContentContainer() {
    this.stepperContentContainer = document.createElement("div");
    this.stepperContentContainer.classList.add("calcite-stepper-content");
    this.el.insertAdjacentElement("beforeend", this.stepperContentContainer);
  }
  emitChangedItem() {
    this.calciteStepperItemChange.emit({
      position: this.currentPosition
    });
  }
  focusFirstItem() {
    const firstItem = this.sortedItems[0];
    this.focusElement(firstItem);
  }
  focusLastItem() {
    const lastItem = this.sortedItems[this.sortedItems.length - 1];
    this.focusElement(lastItem);
  }
  focusNextItem(e) {
    const index = this.itemIndex(e);
    const nextItem = this.sortedItems[index + 1] || this.sortedItems[0];
    this.focusElement(nextItem);
  }
  focusPrevItem(e) {
    const index = this.itemIndex(e);
    const prevItem = this.sortedItems[index - 1] || this.sortedItems[this.sortedItems.length - 1];
    this.focusElement(prevItem);
  }
  itemIndex(e) {
    return this.sortedItems.indexOf(e);
  }
  focusElement(item) {
    const target = item;
    target.focus();
  }
  sortItems() {
    const items = Array.from(this.items)
      .filter((a) => !a.item.disabled)
      .sort((a, b) => a.position - b.position)
      .map((a) => a.item);
    return [...Array.from(new Set(items))];
  }
  updateContent(content) {
    this.stepperContentContainer.innerHTML = "";
    this.stepperContentContainer.append(...content);
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "requestedContent": ["contentWatcher"]
  }; }
};
Stepper.style = stepperCss;

const stepperItemCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-stepper-item-spacing-unit-s:0.25rem;--calcite-stepper-item-spacing-unit-m:0.75rem;--calcite-stepper-item-spacing-unit-l:1rem;font-size:var(--calcite-font-size--1);line-height:1rem;-webkit-margin-end:0.25rem;margin-inline-end:0.25rem}:host([scale=s]) .stepper-item-subtitle{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-stepper-item-spacing-unit-s:0.5rem;--calcite-stepper-item-spacing-unit-m:1rem;--calcite-stepper-item-spacing-unit-l:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}:host([scale=m]) .stepper-item-subtitle{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-stepper-item-spacing-unit-s:0.75rem;--calcite-stepper-item-spacing-unit-m:1.25rem;--calcite-stepper-item-spacing-unit-l:1.5rem;font-size:var(--calcite-font-size-1);line-height:1.5rem;-webkit-margin-end:0.75rem;margin-inline-end:0.75rem}:host([scale=l]) .stepper-item-subtitle{font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column;margin-bottom:var(--calcite-stepper-item-spacing-unit-s)}:host .container{position:relative;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;cursor:pointer;-ms-flex-direction:column;flex-direction:column;border-width:0px;border-top-width:2px;border-style:solid;border-color:var(--calcite-ui-border-3);color:var(--calcite-ui-text-3);-webkit-text-decoration-line:none;text-decoration-line:none;outline:2px solid transparent;outline-offset:2px;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host .stepper-item-header{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:start;align-items:flex-start}:host .stepper-item-content,:host .stepper-item-header{-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);padding-block:var(--calcite-stepper-item-spacing-unit-l);-webkit-padding-end:var(--calcite-stepper-item-spacing-unit-m);padding-inline-end:var(--calcite-stepper-item-spacing-unit-m);text-align:start}:host .stepper-item-header *{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .stepper-item-content{display:none;width:100%;-ms-flex-direction:column;flex-direction:column;font-size:var(--calcite-font-size--2);line-height:1.375}:host .stepper-item-icon{-webkit-margin-end:var(--calcite-stepper-item-spacing-unit-m);margin-inline-end:var(--calcite-stepper-item-spacing-unit-m);margin-top:1px;display:-ms-inline-flexbox;display:inline-flex;height:0.75rem;-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:start;align-self:flex-start;color:var(--calcite-ui-text-3);opacity:var(--calcite-ui-opacity-disabled);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .stepper-item-header-text{-ms-flex-direction:column;flex-direction:column;text-align:initial;-webkit-margin-end:auto;margin-inline-end:auto}:host .stepper-item-title,:host .stepper-item-subtitle{display:-ms-flexbox;display:flex;width:100%}:host .stepper-item-title{margin-bottom:0.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}:host .stepper-item-subtitle{color:var(--calcite-ui-text-3)}:host .stepper-item-number{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-3);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-margin-end:var(--calcite-stepper-item-spacing-unit-m);margin-inline-end:var(--calcite-stepper-item-spacing-unit-m)}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([complete]) .container{border-color:rgba(0, 122, 194, 0.5)}:host([complete]) .container .stepper-item-icon{color:var(--calcite-ui-brand)}:host([error]) .container{border-top-color:var(--calcite-ui-danger)}:host([error]) .container .stepper-item-number{color:var(--calcite-ui-danger)}:host([error]) .container .stepper-item-icon{opacity:1;color:var(--calcite-ui-danger)}:host(:hover:not([disabled]):not([active])) .container,:host(:focus:not([disabled]):not([active])) .container{border-top-color:var(--calcite-ui-brand)}:host(:hover:not([disabled]):not([active])) .container .stepper-item-title,:host(:focus:not([disabled]):not([active])) .container .stepper-item-title{color:var(--calcite-ui-text-1)}:host(:hover:not([disabled]):not([active])) .container .stepper-item-subtitle,:host(:focus:not([disabled]):not([active])) .container .stepper-item-subtitle{color:var(--calcite-ui-text-2)}:host([error]:hover:not([disabled]):not([active])) .container,:host([error]:focus:not([disabled]):not([active])) .container{border-top-color:var(--calcite-ui-danger-hover)}:host([active]) .container{border-top-color:var(--calcite-ui-brand)}:host([active]) .container .stepper-item-title{color:var(--calcite-ui-text-1)}:host([active]) .container .stepper-item-subtitle{color:var(--calcite-ui-text-2)}:host([active]) .container .stepper-item-number{color:var(--calcite-ui-brand)}:host([active]) .container .stepper-item-icon{color:var(--calcite-ui-brand);opacity:1}:host([layout=vertical]) .container{margin-left:0px;margin-right:0px;margin-top:0px;-ms-flex:1 1 auto;flex:1 1 auto;border-top-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-top:0px;padding-bottom:0px;border-inline-start-width:2px;-webkit-padding-start:var(--calcite-stepper-item-spacing-unit-l);padding-inline-start:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical]) .container .stepper-item-icon{-ms-flex-order:3;order:3;margin-top:1px;margin-bottom:0px;-webkit-padding-start:var(--calcite-stepper-item-spacing-unit-s);padding-inline-start:var(--calcite-stepper-item-spacing-unit-s);-webkit-margin-start:auto;margin-inline-start:auto}:host([layout=vertical]) .container .stepper-item-header{-webkit-padding-end:0px;padding-inline-end:0px}:host([layout=vertical]) .container .stepper-item-content{padding:0px}:host([layout=vertical][active]) .container .stepper-item-content{display:-ms-flexbox;display:flex}:host([layout=vertical][active]) .container .stepper-item-content ::slotted(:last-child){margin-bottom:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical][complete]) .container{border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][complete]:hover:not([disabled]):not([active])) .container,:host([layout=vertical][complete]:focus:not([disabled]):not([active])) .container{border-color:var(--calcite-ui-brand)}:host([layout=vertical][error]) .container{border-color:var(--calcite-ui-danger)}:host([layout=vertical][active]) .container{border-color:var(--calcite-ui-brand)}:host([layout=vertical]:hover:not([disabled]):not([active])) .container,:host([layout=vertical]:focus:not([disabled]):not([active])) .container{border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][error]:hover:not([disabled]):not([active])) .container,:host([layout=vertical][error]:focus:not([disabled]):not([active])) .container{border-color:var(--calcite-ui-danger-hover)}";

const StepperItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteStepperItemKeyEvent = createEvent(this, "calciteStepperItemKeyEvent", 7);
    this.calciteStepperItemSelect = createEvent(this, "calciteStepperItemSelect", 7);
    this.calciteStepperItemRegister = createEvent(this, "calciteStepperItemRegister", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /** is the step active */
    this.active = false;
    /** has the step been completed */
    this.complete = false;
    /** does the step contain an error that needs to be resolved by the user */
    this.error = false;
    /** is the step disabled and not navigable to by a user */
    this.disabled = false;
    /** should the items display an icon based on status */
    /** @internal */
    this.icon = false;
    /** optionally display the step number next to the title and subtitle */
    /** @internal */
    this.numbered = false;
    /** the scale of the item */
    /** @internal */
    this.scale = "m";
  }
  // watch for removal of disabled to register step
  disabledWatcher() {
    this.registerStepperItem();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.icon = getElementProp(this.el, "icon", false);
    this.numbered = getElementProp(this.el, "numbered", false);
    this.layout = getElementProp(this.el, "layout", false);
    this.scale = getElementProp(this.el, "scale", "m");
    this.parentStepperEl = this.el.parentElement;
  }
  componentDidLoad() {
    this.itemPosition = this.getItemPosition();
    this.itemContent = this.getItemContent();
    this.registerStepperItem();
    if (this.active) {
      this.emitRequestedItem();
    }
  }
  componentDidUpdate() {
    if (this.active) {
      this.emitRequestedItem();
    }
  }
  componentDidRender() {
    updateHostInteraction(this, true);
  }
  render() {
    return (h(Host, { "aria-expanded": this.active.toString(), onClick: () => this.emitRequestedItem() }, h("div", { class: "container" }, h("div", { class: "stepper-item-header" }, this.icon ? this.renderIcon() : null, this.numbered ? (h("div", { class: "stepper-item-number" }, this.getItemPosition() + 1, ".")) : null, h("div", { class: "stepper-item-header-text" }, h("span", { class: "stepper-item-title" }, this.itemTitle), h("span", { class: "stepper-item-subtitle" }, this.itemSubtitle))), h("div", { class: "stepper-item-content" }, h("slot", null)))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyDownHandler(e) {
    if (!this.disabled && e.target === this.el) {
      switch (e.key) {
        case " ":
        case "Enter":
          this.emitRequestedItem();
          e.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
        case "Home":
        case "End":
          this.calciteStepperItemKeyEvent.emit({ item: e });
          e.preventDefault();
          break;
      }
    }
  }
  updateActiveItemOnChange(event) {
    if (event.target === this.parentStepperEl ||
      event.composedPath().includes(this.parentStepperEl)) {
      this.activePosition = event.detail.position;
      this.determineActiveItem();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  renderIcon() {
    const path = this.active
      ? "circleF"
      : this.error
        ? "exclamationMarkCircleF"
        : this.complete
          ? "checkCircleF"
          : "circle";
    return h("calcite-icon", { class: "stepper-item-icon", icon: path, scale: "s" });
  }
  determineActiveItem() {
    this.active = !this.disabled && this.itemPosition === this.activePosition;
  }
  registerStepperItem() {
    this.calciteStepperItemRegister.emit({
      position: this.itemPosition,
      content: this.itemContent
    });
  }
  emitRequestedItem() {
    if (!this.disabled) {
      this.calciteStepperItemSelect.emit({
        position: this.itemPosition,
        content: this.itemContent
      });
    }
  }
  getItemContent() {
    var _a;
    // todo: Remove IE/Edge specific code.
    return ((_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot"))
      ? this.el.shadowRoot.querySelector("slot").assignedNodes({ flatten: true })
      : this.el.querySelector(".stepper-item-content")
        ? this.el.querySelector(".stepper-item-content").childNodes
        : null;
  }
  getItemPosition() {
    return Array.prototype.indexOf.call(this.parentStepperEl.querySelectorAll("calcite-stepper-item"), this.el);
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "disabled": ["disabledWatcher"]
  }; }
};
StepperItem.style = stepperItemCss;

export { Stepper as calcite_stepper, StepperItem as calcite_stepper_item };
