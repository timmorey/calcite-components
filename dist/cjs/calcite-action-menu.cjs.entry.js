/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-98559b14.js');
const resources = require('./resources-188e5b46.js');
const dom = require('./dom-be217a15.js');
const array = require('./array-3dffa8f2.js');
const guid = require('./guid-21b03b4f.js');
const observers = require('./observers-cf003b0e.js');
const conditionalSlot = require('./conditionalSlot-e1792d8e.js');

const actionMenuCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size-1);color:var(--calcite-ui-text-2)}.menu ::slotted(calcite-action){margin:0.125rem;display:-ms-flexbox;display:flex;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}::slotted(calcite-action[active]){outline:2px solid var(--calcite-ui-brand);outline-offset:0px}.default-trigger{position:relative;height:100%;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;height:100%;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch}.menu{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;outline:2px solid transparent;outline-offset:2px}";

const SUPPORTED_BUTTON_NAV_KEYS = ["ArrowUp", "ArrowDown"];
const SUPPORTED_MENU_NAV_KEYS = ["ArrowUp", "ArrowDown", "End", "Home"];
const ActionMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteActionMenuOpenChange = index.createEvent(this, "calciteActionMenuOpenChange", 7);
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
     * Opens the action menu.
     */
    this.open = false;
    /** Describes the type of positioning to use for the overlaid content. If your element is in a fixed container, use the 'fixed' value. */
    this.overlayPositioning = "absolute";
    /**
     * Determines where the component will be positioned relative to the referenceElement.
     * @see [PopperPlacement](https://github.com/Esri/calcite-components/blob/master/src/utils/popper.ts#L25)
     */
    this.placement = "auto";
    this.actionElements = [];
    this.mutationObserver = observers.createObserver("mutation", () => this.getActions());
    this.guid = `calcite-action-menu-${guid.guid()}`;
    this.menuId = `${this.guid}-menu`;
    this.menuButtonId = `${this.guid}-menu-button`;
    this.activeMenuItemIndex = -1;
    // --------------------------------------------------------------------------
    //
    //  Component Methods
    //
    // --------------------------------------------------------------------------
    this.connectMenuButtonEl = () => {
      const { el, menuButtonId, menuId, open, label } = this;
      const menuButtonEl = dom.getSlotted(el, resources.SLOTS.trigger) || this.defaultMenuButtonEl;
      if (this.menuButtonEl === menuButtonEl) {
        return;
      }
      this.disconnectMenuButtonEl();
      this.menuButtonEl = menuButtonEl;
      this.setTooltipReferenceElement();
      if (!menuButtonEl) {
        return;
      }
      menuButtonEl.active = open;
      menuButtonEl.setAttribute("aria-controls", menuId);
      menuButtonEl.setAttribute("aria-expanded", open.toString());
      menuButtonEl.setAttribute("aria-haspopup", "true");
      if (!menuButtonEl.id) {
        menuButtonEl.id = menuButtonId;
      }
      if (!menuButtonEl.label) {
        menuButtonEl.label = label;
      }
      if (!menuButtonEl.text) {
        menuButtonEl.text = label;
      }
      menuButtonEl.addEventListener("click", this.menuButtonClick);
      menuButtonEl.addEventListener("keydown", this.menuButtonKeyDown);
      menuButtonEl.addEventListener("keyup", this.menuButtonKeyUp);
    };
    this.disconnectMenuButtonEl = () => {
      const { menuButtonEl } = this;
      if (!menuButtonEl) {
        return;
      }
      menuButtonEl.removeEventListener("click", this.menuButtonClick);
      menuButtonEl.removeEventListener("keydown", this.menuButtonKeyDown);
      menuButtonEl.removeEventListener("keyup", this.menuButtonKeyUp);
    };
    this.setDefaultMenuButtonEl = (el) => {
      this.defaultMenuButtonEl = el;
      this.connectMenuButtonEl();
    };
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleCalciteActionClick = () => {
      this.open = false;
      this.setFocus();
    };
    this.menuButtonClick = () => {
      this.toggleOpen();
    };
    this.setTooltipReferenceElement = () => {
      const { el, expanded, menuButtonEl } = this;
      const slotted = dom.getSlotted(el, resources.SLOTS.tooltip);
      const tooltip = (slotted === null || slotted === void 0 ? void 0 : slotted.tagName) === "SLOT" ? slotted.assignedElements()[0] : slotted;
      if ((tooltip === null || tooltip === void 0 ? void 0 : tooltip.tagName) === "CALCITE-TOOLTIP") {
        tooltip.referenceElement = !expanded ? menuButtonEl : null;
      }
    };
    this.updateAction = (action, index) => {
      const { guid, activeMenuItemIndex } = this;
      const id = `${guid}-action-${index}`;
      action.tabIndex = -1;
      action.setAttribute("role", "menuitem");
      if (!action.id) {
        action.id = id;
      }
      action.active = index === activeMenuItemIndex;
    };
    this.updateActions = (actions) => {
      actions === null || actions === void 0 ? void 0 : actions.forEach(this.updateAction);
    };
    this.getActions = () => {
      const { el } = this;
      const actionElements = dom.getSlotted(el, { all: true, matches: "calcite-action" });
      this.updateActions(actionElements);
      this.actionElements = actionElements;
      this.connectMenuButtonEl();
    };
    this.menuButtonKeyUp = (event) => {
      const { key } = event;
      const { actionElements } = this;
      if (!this.isValidKey(key, SUPPORTED_BUTTON_NAV_KEYS)) {
        return;
      }
      event.preventDefault();
      if (!actionElements.length) {
        return;
      }
      this.toggleOpen(true);
      this.handleActionNavigation(key, actionElements);
    };
    this.menuButtonKeyDown = (event) => {
      const { key } = event;
      if (!this.isValidKey(key, SUPPORTED_BUTTON_NAV_KEYS)) {
        return;
      }
      event.preventDefault();
    };
    this.menuActionsContainerKeyDown = (event) => {
      const { key } = event;
      const { actionElements, activeMenuItemIndex } = this;
      if (key === "Tab") {
        this.open = false;
        return;
      }
      if (key === " " || key === "Enter") {
        event.preventDefault();
        const action = actionElements[activeMenuItemIndex];
        action ? action.click() : this.toggleOpen(false);
        return;
      }
      if (this.isValidKey(key, SUPPORTED_MENU_NAV_KEYS)) {
        event.preventDefault();
      }
    };
    this.menuActionsContainerKeyUp = (event) => {
      const { key } = event;
      const { actionElements } = this;
      if (key === "Escape") {
        this.toggleOpen(false);
        return;
      }
      if (!this.isValidKey(key, SUPPORTED_MENU_NAV_KEYS)) {
        return;
      }
      event.preventDefault();
      if (!actionElements.length) {
        return;
      }
      this.handleActionNavigation(key, actionElements);
    };
    this.handleActionNavigation = (key, actions) => {
      const currentIndex = this.activeMenuItemIndex;
      if (key === "Home") {
        this.activeMenuItemIndex = 0;
      }
      if (key === "End") {
        this.activeMenuItemIndex = actions.length - 1;
      }
      if (key === "ArrowUp") {
        this.activeMenuItemIndex = array.getRoundRobinIndex(Math.max(currentIndex - 1, -1), actions.length);
      }
      if (key === "ArrowDown") {
        this.activeMenuItemIndex = array.getRoundRobinIndex(currentIndex + 1, actions.length);
      }
    };
    this.toggleOpenEnd = () => {
      this.setFocus();
      this.el.removeEventListener("calcitePopoverOpen", this.toggleOpenEnd);
    };
    this.toggleOpen = (value = !this.open) => {
      this.el.addEventListener("calcitePopoverOpen", this.toggleOpenEnd);
      this.open = value;
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
    this.getActions();
    conditionalSlot.connectConditionalSlotComponent(this);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.disconnectMenuButtonEl();
    conditionalSlot.disconnectConditionalSlotComponent(this);
  }
  expandedHandler() {
    this.open = false;
    this.setTooltipReferenceElement();
  }
  openHandler(open) {
    this.activeMenuItemIndex = this.open ? 0 : -1;
    if (this.menuButtonEl) {
      this.menuButtonEl.active = open;
    }
    this.calciteActionMenuOpenChange.emit(open);
  }
  closeCalciteActionMenuOnClick(event) {
    const composedPath = event.composedPath();
    if (composedPath.includes(this.el)) {
      return;
    }
    this.open = false;
  }
  activeMenuItemIndexHandler() {
    this.updateActions(this.actionElements);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    dom.focusElement(this.open ? this.menuEl : this.menuButtonEl);
  }
  renderMenuButton() {
    const { el, label, scale } = this;
    const menuButtonSlot = (index.h("slot", { name: resources.SLOTS.trigger }, index.h("calcite-action", { class: resources.CSS.defaultTrigger, icon: resources.ICONS.menu, ref: this.setDefaultMenuButtonEl, scale: scale, text: label })));
    return dom.getSlotted(el, resources.SLOTS.tooltip) ? (index.h("calcite-tooltip-manager", null, menuButtonSlot)) : (menuButtonSlot);
  }
  renderMenuItems() {
    const { actionElements, activeMenuItemIndex, open, menuId, menuButtonEl, label, placement, overlayPositioning, flipPlacements } = this;
    const activeAction = actionElements[activeMenuItemIndex];
    const activeDescendantId = (activeAction === null || activeAction === void 0 ? void 0 : activeAction.id) || null;
    return (index.h("calcite-popover", { disablePointer: true, flipPlacements: flipPlacements, label: label, offsetDistance: 0, open: open, overlayPositioning: overlayPositioning, placement: placement, referenceElement: menuButtonEl }, index.h("div", { "aria-activedescendant": activeDescendantId, "aria-labelledby": menuButtonEl === null || menuButtonEl === void 0 ? void 0 : menuButtonEl.id, class: resources.CSS.menu, id: menuId, onClick: this.handleCalciteActionClick, onKeyDown: this.menuActionsContainerKeyDown, onKeyUp: this.menuActionsContainerKeyUp, ref: (el) => (this.menuEl = el), role: "menu", tabIndex: -1 }, index.h("slot", null))));
  }
  render() {
    return (index.h(index.Fragment, null, this.renderMenuButton(), this.renderMenuItems(), index.h("slot", { name: resources.SLOTS.tooltip })));
  }
  getAssignedElements() {
    return Array.from(this.el.querySelectorAll("slot"))
      .map((slot) => slot.assignedElements({ flatten: true }))
      .reduce((ar, val) => ar.concat(val), []);
  }
  isValidKey(key, supportedKeys) {
    return !!supportedKeys.find((k) => k === key);
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "expanded": ["expandedHandler"],
    "open": ["openHandler"],
    "activeMenuItemIndex": ["activeMenuItemIndexHandler"]
  }; }
};
ActionMenu.style = actionMenuCss;

exports.calcite_action_menu = ActionMenu;
