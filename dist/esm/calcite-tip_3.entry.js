/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { r as registerInstance, c as createEvent, h, F as Fragment, g as getElement } from './index-73638693.js';
import { g as getSlotted, a as getElementDir } from './dom-3f012371.js';
import { H as Heading, c as constrainHeadingLevel } from './Heading-47fc2908.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot-912b4669.js';
import { c as createObserver } from './observers-7d85a111.js';
import './guid-a53704be.js';

const CSS$1 = {
  header: "header",
  heading: "heading",
  close: "close",
  container: "container",
  tipContainer: "tip-container",
  tipContainerAdvancing: "tip-container--advancing",
  tipContainerRetreating: "tip-container--retreating",
  pagination: "pagination",
  pagePosition: "page-position",
  pageNext: "page-next",
  pagePrevious: "page-previous"
};
const ICONS$1 = {
  chevronLeft: "chevron-left",
  chevronRight: "chevron-right",
  close: "x"
};
const TEXT$1 = {
  defaultGroupTitle: "Tips",
  defaultPaginationLabel: "Tip",
  close: "Close",
  previous: "Previous",
  next: "Next"
};
const HEADING_LEVEL$1 = 2;

const CSS = {
  container: "container",
  header: "header",
  heading: "heading",
  close: "close",
  imageFrame: "image-frame",
  content: "content",
  info: "info"
};
const ICONS = {
  close: "x"
};
const SLOTS = {
  thumbnail: "thumbnail"
};
const TEXT = {
  close: "Close"
};
const HEADING_LEVEL = (HEADING_LEVEL$1 + 1);

const tipCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;margin:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}.container{width:100%;padding:1rem}:host([dismissed]),:host([dismissed]) .container{display:none}:host([selected]) .container{margin:0px;border-style:none;padding:0px}.header{margin:0px;display:-ms-flexbox;display:flex;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-align:center;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{-ms-flex:1 1 auto;flex:1 1 auto;padding:0.5rem}h1.heading{font-size:var(--calcite-font-size-2);line-height:1.5rem}h2.heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}h3.heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}h4.heading,h5.heading{font-size:var(--calcite-font-size--1);line-height:1rem}.header{margin-bottom:0.5rem}.header .heading{padding:0px;color:var(--calcite-ui-text-1)}.container[hidden]{display:none}.content{display:-ms-flexbox;display:flex}.info{padding-top:0px;padding-bottom:0px;padding-left:1rem;padding-right:1rem;width:70%}.info:only-child{width:100%;padding-left:0px;padding-right:0px}::slotted(p){margin-top:0px}::slotted(a){outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;color:var(--calcite-ui-brand)}::slotted(a:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.image-frame{width:25%}.image-frame img{max-width:100%}::slotted(img){max-width:100%}";

const Tip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteTipDismiss = createEvent(this, "calciteTipDismiss", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * No longer displays the tip.
     */
    this.dismissed = false;
    /**
     * Indicates whether the tip can be dismissed.
     */
    this.nonDismissible = false;
    /**
     * The selected state of the tip if it is being used inside a `calcite-tip-manager`.
     */
    this.selected = false;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.hideTip = () => {
      this.dismissed = true;
      this.calciteTipDismiss.emit();
    };
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
  renderHeader() {
    var _a;
    const { heading, headingLevel, el } = this;
    const parentLevel = (_a = el.closest("calcite-tip-manager")) === null || _a === void 0 ? void 0 : _a.headingLevel;
    const relativeLevel = parentLevel ? constrainHeadingLevel(parentLevel + 1) : null;
    const level = headingLevel || relativeLevel || HEADING_LEVEL;
    return heading ? (h("header", { class: CSS.header }, h(Heading, { class: CSS.heading, level: level }, heading))) : null;
  }
  renderDismissButton() {
    const { nonDismissible, hideTip, intlClose } = this;
    const text = intlClose || TEXT.close;
    return !nonDismissible ? (h("calcite-action", { class: CSS.close, icon: ICONS.close, onClick: hideTip, scale: "l", text: text })) : null;
  }
  renderImageFrame() {
    const { el } = this;
    return getSlotted(el, SLOTS.thumbnail) ? (h("div", { class: CSS.imageFrame, key: "thumbnail" }, h("slot", { name: SLOTS.thumbnail }))) : null;
  }
  renderInfoNode() {
    return (h("div", { class: CSS.info }, h("slot", null)));
  }
  renderContent() {
    return (h("div", { class: CSS.content }, this.renderImageFrame(), this.renderInfoNode()));
  }
  render() {
    return (h(Fragment, null, h("article", { class: CSS.container }, this.renderHeader(), this.renderContent()), this.renderDismissButton()));
  }
  get el() { return getElement(this); }
};
Tip.style = tipCss;

const tipGroupCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}::slotted(calcite-tip){margin:0px;border-style:none}:host-context(calcite-tip-manager){margin-top:0.75rem;margin-bottom:0.75rem}:host-context(calcite-tip-manager) ::slotted(calcite-tip){padding:1rem}";

const TipGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("slot", null);
  }
};
TipGroup.style = tipGroupCss;

const tipManagerCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2);--calcite-tip-manager-height:19vh}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host([closed]){display:none}.header{margin:0px;display:-ms-flexbox;display:flex;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-align:center;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{-ms-flex:1 1 auto;flex:1 1 auto;padding:0.5rem}h1.heading{font-size:var(--calcite-font-size-2);line-height:1.5rem}h2.heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}h3.heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}h4.heading,h5.heading{font-size:var(--calcite-font-size--1);line-height:1rem}.header{border-width:0px;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-top:0px;padding-bottom:0px;-webkit-padding-end:0px;padding-inline-end:0px;-webkit-padding-start:1rem;padding-inline-start:1rem}.header h2.heading{padding:0px;font-size:var(--calcite-font-size-1);line-height:1.5rem;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-1)}.container{position:relative;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;overflow:hidden;min-height:150px}.container:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.tip-container{margin-top:1px;display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center;overflow:auto;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing);height:var(--calcite-tip-manager-height)}.tip-container:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}::slotted(calcite-tip){border-style:none;padding:0.75rem;max-width:var(--calcite-tip-max-width)}.tip-container--advancing{-webkit-animation-name:tip-advance;animation-name:tip-advance}.tip-container--retreating{-webkit-animation-name:tip-retreat;animation-name:tip-retreat}.pagination{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding-left:0px;padding-right:0px;padding-top:0.75rem;padding-bottom:0.5rem}.page-position{margin-top:0px;margin-bottom:0px;margin-left:0.5rem;margin-right:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}@-webkit-keyframes tip-advance{0%{opacity:0}0%{-webkit-transform:translate3d(50px, 0, 0) scale(0.99);transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1}100%{-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}@keyframes tip-advance{0%{opacity:0}0%{-webkit-transform:translate3d(50px, 0, 0) scale(0.99);transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1}100%{-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}@-webkit-keyframes tip-retreat{0%{opacity:0}0%{-webkit-transform:translate3d(-50px, 0, 0) scale(0.99);transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1}100%{-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}@keyframes tip-retreat{0%{opacity:0}0%{-webkit-transform:translate3d(-50px, 0, 0) scale(0.99);transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1}100%{-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}";

const TipManager = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteTipManagerToggle = createEvent(this, "calciteTipManagerToggle", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * Closed state of the `calcite-tip-manager`.
     */
    this.closed = false;
    this.mutationObserver = createObserver("mutation", () => this.setUpTips());
    this.hideTipManager = () => {
      this.closed = true;
      this.calciteTipManagerToggle.emit();
    };
    this.previousClicked = () => {
      this.previousTip();
    };
    this.nextClicked = () => {
      this.nextTip();
    };
    this.tipManagerKeyUpHandler = (event) => {
      if (event.target !== this.container) {
        return;
      }
      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          this.nextTip();
          break;
        case "ArrowLeft":
          event.preventDefault();
          this.previousTip();
          break;
        case "Home":
          event.preventDefault();
          this.selectedIndex = 0;
          break;
        case "End":
          event.preventDefault();
          this.selectedIndex = this.total - 1;
          break;
      }
    };
    this.storeContainerRef = (el) => {
      this.container = el;
    };
  }
  closedChangeHandler() {
    this.direction = null;
    this.calciteTipManagerToggle.emit();
  }
  selectedChangeHandler() {
    this.showSelectedTip();
    this.updateGroupTitle();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    this.setUpTips();
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Selects the next tip to display */
  async nextTip() {
    this.direction = "advancing";
    const nextIndex = this.selectedIndex + 1;
    this.selectedIndex = (nextIndex + this.total) % this.total;
  }
  /** Selects the previous tip to display */
  async previousTip() {
    this.direction = "retreating";
    const previousIndex = this.selectedIndex - 1;
    this.selectedIndex = (previousIndex + this.total) % this.total;
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  setUpTips() {
    const tips = Array.from(this.el.querySelectorAll("calcite-tip"));
    this.total = tips.length;
    if (this.total === 0) {
      return;
    }
    const selectedTip = this.el.querySelector("calcite-tip[selected]");
    this.tips = tips;
    this.selectedIndex = selectedTip ? tips.indexOf(selectedTip) : 0;
    tips.forEach((tip) => {
      tip.nonDismissible = true;
    });
    this.showSelectedTip();
    this.updateGroupTitle();
  }
  showSelectedTip() {
    this.tips.forEach((tip, index) => {
      const isSelected = this.selectedIndex === index;
      tip.selected = isSelected;
      tip.hidden = !isSelected;
    });
  }
  updateGroupTitle() {
    const selectedTip = this.tips[this.selectedIndex];
    const tipParent = selectedTip.closest("calcite-tip-group");
    this.groupTitle = (tipParent === null || tipParent === void 0 ? void 0 : tipParent.groupTitle) || this.intlDefaultTitle || TEXT$1.defaultGroupTitle;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderPagination() {
    const dir = getElementDir(this.el);
    const { selectedIndex, tips, total, intlNext, intlPrevious, intlPaginationLabel } = this;
    const nextLabel = intlNext || TEXT$1.next;
    const previousLabel = intlPrevious || TEXT$1.previous;
    const paginationLabel = intlPaginationLabel || TEXT$1.defaultPaginationLabel;
    return tips.length > 1 ? (h("footer", { class: CSS$1.pagination }, h("calcite-action", { class: CSS$1.pagePrevious, icon: dir === "ltr" ? ICONS$1.chevronLeft : ICONS$1.chevronRight, onClick: this.previousClicked, scale: "m", text: previousLabel }), h("span", { class: CSS$1.pagePosition }, `${paginationLabel} ${selectedIndex + 1}/${total}`), h("calcite-action", { class: CSS$1.pageNext, icon: dir === "ltr" ? ICONS$1.chevronRight : ICONS$1.chevronLeft, onClick: this.nextClicked, scale: "m", text: nextLabel }))) : null;
  }
  render() {
    const { closed, direction, headingLevel, groupTitle, selectedIndex, intlClose, total } = this;
    const closeLabel = intlClose || TEXT$1.close;
    if (total === 0) {
      return null;
    }
    return (h("section", { "aria-hidden": closed.toString(), class: CSS$1.container, hidden: closed, onKeyUp: this.tipManagerKeyUpHandler, ref: this.storeContainerRef, tabIndex: 0 }, h("header", { class: CSS$1.header }, h(Heading, { class: CSS$1.heading, level: headingLevel || HEADING_LEVEL$1 }, groupTitle), h("calcite-action", { class: CSS$1.close, onClick: this.hideTipManager, scale: "m", text: closeLabel }, h("calcite-icon", { icon: ICONS$1.close, scale: "m" }))), h("div", { class: {
        [CSS$1.tipContainer]: true,
        [CSS$1.tipContainerAdvancing]: !closed && direction === "advancing",
        [CSS$1.tipContainerRetreating]: !closed && direction === "retreating"
      }, key: selectedIndex, tabIndex: 0 }, h("slot", null)), this.renderPagination()));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "closed": ["closedChangeHandler"],
    "selectedIndex": ["selectedChangeHandler"]
  }; }
};
TipManager.style = tipManagerCss;

export { Tip as calcite_tip, TipGroup as calcite_tip_group, TipManager as calcite_tip_manager };
