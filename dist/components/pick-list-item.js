/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { I as ICON_TYPES } from './resources3.js';
import { b as getSlotted } from './dom.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot.js';
import { u as updateHostInteraction } from './interactive.js';
import { d as defineCustomElement$3 } from './action.js';
import { d as defineCustomElement$2 } from './icon.js';
import { d as defineCustomElement$1 } from './loader.js';

const CSS = {
  actions: "actions",
  actionsEnd: "actions--end",
  actionsStart: "actions--start",
  description: "description",
  handle: "handle",
  handleActivated: "handle--activated",
  highlight: "highlight",
  icon: "icon",
  iconDot: "icon-dot",
  label: "label",
  remove: "remove",
  title: "title",
  textContainer: "text-container"
};
const ICONS = {
  checked: "check",
  remove: "x"
};
const SLOTS = {
  actionsEnd: "actions-end",
  actionsStart: "actions-start"
};
const TEXT = {
  remove: "Remove"
};

const pickListItemCss = "@charset \"UTF-8\";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{margin:0px;margin-bottom:1px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-transition:background-color var(--calcite-animation-timing);transition:background-color var(--calcite-animation-timing);-webkit-animation:calcite-fade-in var(--calcite-animation-timing);animation:calcite-fade-in var(--calcite-animation-timing)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}.label{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;cursor:pointer;-ms-flex-align:center;align-items:center;background-color:transparent;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.label:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.label:hover{background-color:var(--calcite-ui-foreground-2)}:host([non-interactive]:hover){background-color:var(--calcite-ui-foreground-1)}:host([non-interactive]) .label,:host([non-interactive]) .icon{pointer-events:none}.icon{margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:center;align-items:center;padding:0.25rem;color:var(--calcite-ui-brand);-ms-flex:0 0 auto;flex:0 0 auto;line-height:0}.icon:hover{background-color:var(--calcite-ui-foreground-2)}.icon-dot{display:-ms-flexbox;display:flex;width:1.5rem;-ms-flex-align:center;align-items:center;padding:0.5rem}.icon-dot:before{opacity:0;content:\"•\"}.icon calcite-icon{opacity:0}:host([selected]) .icon-dot:before,:host([selected]) .icon calcite-icon{-webkit-transition:opacity var(--calcite-animation-timing);transition:opacity var(--calcite-animation-timing);opacity:1}.text-container{pointer-events:none;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;word-wrap:break-word;word-break:break-word;overflow:hidden}.title{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}.description{margin-top:0.125rem;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}.actions{margin:0px;display:-ms-flexbox;display:flex;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:end;justify-content:flex-end}.actions--start~.label{-webkit-padding-start:0.25rem;padding-inline-start:0.25rem}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}";

const PickListItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteListItemChange = createEvent(this, "calciteListItemChange", 7);
    this.calciteListItemRemove = createEvent(this, "calciteListItemRemove", 7);
    this.calciteListItemPropsChange = createEvent(this, "calciteListItemPropsChange", 7);
    this.calciteListItemValueChange = createEvent(this, "calciteListItemValueChange", 7);
    /**
     * When true, the item cannot be clicked and is visually muted.
     */
    this.disabled = false;
    /**
     * When false, the item cannot be deselected by user interaction.
     */
    this.disableDeselect = false;
    /**
     * @internal When true, the item cannot be selected by user interaction.
     */
    this.nonInteractive = false;
    /**
     * Determines the icon SVG symbol that will be shown. Options are circle, square, grip or null.
     * @see [ICON_TYPES](https://github.com/Esri/calcite-components/blob/master/src/components/pick-list/resources.ts#L5)
     */
    this.icon = null;
    /**
     * Set this to true to display a remove action that removes the item from the list.
     */
    this.removable = false;
    /**
     * Set this to true to pre-select an item. Toggles when an item is checked/unchecked.
     */
    this.selected = false;
    /**
     * Used as an accessible label (aria-label) for the "remove item" action. Only applicable if removable is true.
     * @default "Remove"
     */
    this.intlRemove = TEXT.remove;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.pickListClickHandler = (event) => {
      if (this.disabled || (this.disableDeselect && this.selected) || this.nonInteractive) {
        return;
      }
      this.shiftPressed = event.shiftKey;
      this.selected = !this.selected;
    };
    this.pickListKeyDownHandler = (event) => {
      if (event.key === " ") {
        event.preventDefault();
        if ((this.disableDeselect && this.selected) || this.nonInteractive) {
          return;
        }
        this.selected = !this.selected;
      }
    };
    this.removeClickHandler = () => {
      this.calciteListItemRemove.emit();
    };
  }
  descriptionWatchHandler() {
    this.calciteListItemPropsChange.emit();
  }
  labelWatchHandler() {
    this.calciteListItemPropsChange.emit();
  }
  metadataWatchHandler() {
    this.calciteListItemPropsChange.emit();
  }
  selectedWatchHandler() {
    this.calciteListItemChange.emit({
      item: this.el,
      value: this.value,
      selected: this.selected,
      shiftPressed: this.shiftPressed
    });
    this.shiftPressed = false;
  }
  valueWatchHandler(newValue, oldValue) {
    this.calciteListItemValueChange.emit({ oldValue, newValue });
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
  componentDidRender() {
    updateHostInteraction(this, this.el.closest("calcite-pick-list") ? "managed" : false);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Used to toggle the selection state. By default this won't trigger an event.
   * The first argument allows the value to be coerced, rather than swapping values.
   */
  async toggleSelected(coerce) {
    this.selected = typeof coerce === "boolean" ? coerce : !this.selected;
  }
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    (_a = this.focusEl) === null || _a === void 0 ? void 0 : _a.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderIcon() {
    const { icon } = this;
    if (!icon) {
      return null;
    }
    return (h("span", { class: {
        [CSS.icon]: true,
        [CSS.iconDot]: icon === ICON_TYPES.circle
      }, onClick: this.pickListClickHandler }, icon === ICON_TYPES.square ? h("calcite-icon", { icon: ICONS.checked, scale: "s" }) : null));
  }
  renderRemoveAction() {
    return this.removable ? (h("calcite-action", { class: CSS.remove, icon: ICONS.remove, onCalciteActionClick: this.removeClickHandler, slot: SLOTS.actionsEnd, text: this.intlRemove })) : null;
  }
  renderActionsStart() {
    const { el } = this;
    const hasActionsStart = getSlotted(el, SLOTS.actionsStart);
    return hasActionsStart ? (h("div", { class: { [CSS.actions]: true, [CSS.actionsStart]: true } }, h("slot", { name: SLOTS.actionsStart }))) : null;
  }
  renderActionsEnd() {
    const { el, removable } = this;
    const hasActionsEnd = getSlotted(el, SLOTS.actionsEnd);
    return hasActionsEnd || removable ? (h("div", { class: { [CSS.actions]: true, [CSS.actionsEnd]: true } }, h("slot", { name: SLOTS.actionsEnd }), this.renderRemoveAction())) : null;
  }
  render() {
    const { description, label } = this;
    return (h(Fragment, null, this.renderIcon(), this.renderActionsStart(), h("label", { "aria-label": label, class: CSS.label, onClick: this.pickListClickHandler, onKeyDown: this.pickListKeyDownHandler, ref: (focusEl) => (this.focusEl = focusEl), tabIndex: 0 }, h("div", { "aria-checked": this.selected.toString(), class: CSS.textContainer, role: "menuitemcheckbox" }, h("span", { class: CSS.title }, label), description ? h("span", { class: CSS.description }, description) : null)), this.renderActionsEnd()));
  }
  get el() { return this; }
  static get watchers() { return {
    "description": ["descriptionWatchHandler"],
    "label": ["labelWatchHandler"],
    "metadata": ["metadataWatchHandler"],
    "selected": ["selectedWatchHandler"],
    "value": ["valueWatchHandler"]
  }; }
  static get style() { return pickListItemCss; }
}, [1, "calcite-pick-list-item", {
    "description": [513],
    "disabled": [516],
    "disableDeselect": [4, "disable-deselect"],
    "nonInteractive": [516, "non-interactive"],
    "icon": [513],
    "label": [513],
    "metadata": [16],
    "removable": [516],
    "selected": [1540],
    "intlRemove": [513, "intl-remove"],
    "value": [8],
    "toggleSelected": [64],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-pick-list-item", "calcite-action", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-pick-list-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PickListItem);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { CSS as C, PickListItem as P, SLOTS as S, defineCustomElement as d };
