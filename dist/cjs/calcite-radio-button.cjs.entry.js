/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-98559b14.js');
const guid = require('./guid-21b03b4f.js');
const dom = require('./dom-be217a15.js');
const label = require('./label-c09f7403.js');
const form = require('./form-6bfb0719.js');
const array = require('./array-3dffa8f2.js');
const interactive = require('./interactive-9760231e.js');

const CSS = {
  container: "container"
};

const radioButtonCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;cursor:pointer}:host .container{position:relative;outline:2px solid transparent;outline-offset:2px}:host .radio{cursor:pointer;border-radius:9999px;background-color:var(--calcite-ui-foreground-1);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([hovered]) .radio,:host(:not([checked])[focused]:not([disabled])) .radio{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) .radio{cursor:default;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hovered][disabled]) .radio{-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([scale=s]){--calcite-radio-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-radio-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-radio-size:var(--calcite-font-size-0)}.radio{height:var(--calcite-radio-size);max-width:var(--calcite-radio-size);min-width:var(--calcite-radio-size)}:host([scale=s][checked]) .radio,:host([hovered][scale=s][checked][disabled]) .radio{-webkit-box-shadow:inset 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 4px var(--calcite-ui-brand)}:host([scale=s][focused][checked]:not([disabled])) .radio{-webkit-box-shadow:inset 0 0 0 4px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 4px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand)}:host([scale=m][checked]) .radio,:host([hovered][scale=m][checked][disabled]) .radio{-webkit-box-shadow:inset 0 0 0 5px var(--calcite-ui-brand);box-shadow:inset 0 0 0 5px var(--calcite-ui-brand)}:host([scale=m][focused][checked]:not([disabled])) .radio{-webkit-box-shadow:inset 0 0 0 5px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 5px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand)}:host([scale=l][checked]) .radio,:host([hovered][scale=l][checked][disabled]) .radio{-webkit-box-shadow:inset 0 0 0 6px var(--calcite-ui-brand);box-shadow:inset 0 0 0 6px var(--calcite-ui-brand)}:host([scale=l][focused][checked]:not([disabled])) .radio{-webkit-box-shadow:inset 0 0 0 6px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 6px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand)}@media (forced-colors: active){:host([checked]) .radio::after,:host([checked][disabled]) .radio::after{content:\"\";width:var(--calcite-radio-size);height:var(--calcite-radio-size);background-color:windowText;display:block}}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const RadioButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteInternalRadioButtonBlur = index.createEvent(this, "calciteInternalRadioButtonBlur", 7);
    this.calciteRadioButtonChange = index.createEvent(this, "calciteRadioButtonChange", 7);
    this.calciteInternalRadioButtonCheckedChange = index.createEvent(this, "calciteInternalRadioButtonCheckedChange", 7);
    this.calciteInternalRadioButtonFocus = index.createEvent(this, "calciteInternalRadioButtonFocus", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** The checked state of the radio button. */
    this.checked = false;
    /** The disabled state of the radio button. */
    this.disabled = false;
    /**
     * The focused state of the radio button.
     * @internal
     */
    this.focused = false;
    /** The radio button's hidden status.  When a radio button is hidden it is not focusable or checkable. */
    this.hidden = false;
    /**
     * The hovered state of the radio button.
     * @internal
     */
    this.hovered = false;
    /** Requires that a value is selected for the radio button group before the parent form will submit. */
    this.required = false;
    /** The scale (size) of the radio button. `scale` is passed as a property automatically from `calcite-radio-button-group`. */
    this.scale = "m";
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.selectItem = (items, selectedIndex) => {
      items[selectedIndex].click();
    };
    this.queryButtons = () => {
      return Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter((radioButton) => radioButton.name === this.name);
    };
    this.isDefaultSelectable = () => {
      const radioButtons = this.queryButtons();
      return !radioButtons.some((radioButton) => radioButton.checked) && radioButtons[0] === this.el;
    };
    this.check = () => {
      if (this.disabled) {
        return;
      }
      this.uncheckAllRadioButtonsInGroup();
      this.checked = true;
      this.calciteRadioButtonChange.emit();
      this.setFocus();
    };
    this.clickHandler = () => {
      this.check();
    };
    this.setContainerEl = (el) => {
      this.containerEl = el;
    };
    this.handleKeyDown = (event) => {
      const keys = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", " "];
      const key = event.key;
      const { el } = this;
      if (keys.indexOf(key) === -1) {
        return;
      }
      if (key === " ") {
        this.check();
        return;
      }
      let adjustedKey = key;
      if (dom.getElementDir(el) === "rtl") {
        if (key === "ArrowRight") {
          adjustedKey = "ArrowLeft";
        }
        if (key === "ArrowLeft") {
          adjustedKey = "ArrowRight";
        }
      }
      const radioButtons = Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden]")).filter((radioButton) => radioButton.name === this.name);
      let currentIndex = 0;
      const radioButtonsLength = radioButtons.length;
      radioButtons.some((item, index) => {
        if (item.checked) {
          currentIndex = index;
          return true;
        }
      });
      switch (adjustedKey) {
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          this.selectItem(radioButtons, array.getRoundRobinIndex(Math.max(currentIndex - 1, -1), radioButtonsLength));
          return;
        case "ArrowRight":
        case "ArrowDown":
          event.preventDefault();
          this.selectItem(radioButtons, array.getRoundRobinIndex(currentIndex + 1, radioButtonsLength));
          return;
        default:
          return;
      }
    };
    this.onContainerBlur = () => {
      this.focused = false;
      this.calciteInternalRadioButtonBlur.emit();
    };
    this.onContainerFocus = () => {
      if (!this.disabled) {
        this.focused = true;
        this.calciteInternalRadioButtonFocus.emit();
      }
    };
  }
  checkedChanged(newChecked) {
    if (newChecked) {
      this.uncheckOtherRadioButtonsInGroup();
    }
    this.calciteInternalRadioButtonCheckedChange.emit(newChecked);
  }
  nameChanged() {
    this.checkLastRadioButton();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    if (!this.disabled) {
      dom.focusElement(this.containerEl);
    }
  }
  onLabelClick(event) {
    if (!this.disabled && !this.hidden) {
      this.uncheckOtherRadioButtonsInGroup();
      const label = event.currentTarget;
      const radioButton = label.for
        ? this.rootNode.querySelector(`calcite-radio-button[id="${label.for}"]`)
        : label.querySelector(`calcite-radio-button[name="${this.name}"]`);
      if (radioButton) {
        radioButton.checked = true;
        radioButton.focused = true;
      }
      this.calciteRadioButtonChange.emit();
      this.setFocus();
    }
  }
  checkLastRadioButton() {
    const radioButtons = this.queryButtons();
    const checkedRadioButtons = radioButtons.filter((radioButton) => radioButton.checked);
    if ((checkedRadioButtons === null || checkedRadioButtons === void 0 ? void 0 : checkedRadioButtons.length) > 1) {
      const lastCheckedRadioButton = checkedRadioButtons[checkedRadioButtons.length - 1];
      checkedRadioButtons
        .filter((checkedRadioButton) => checkedRadioButton !== lastCheckedRadioButton)
        .forEach((checkedRadioButton) => {
        checkedRadioButton.checked = false;
        checkedRadioButton.emitCheckedChange();
      });
    }
  }
  /** @internal */
  async emitCheckedChange() {
    this.calciteInternalRadioButtonCheckedChange.emit();
  }
  uncheckAllRadioButtonsInGroup() {
    const radioButtons = this.queryButtons();
    radioButtons.forEach((radioButton) => {
      if (radioButton.checked) {
        radioButton.checked = false;
        radioButton.focused = false;
      }
    });
  }
  uncheckOtherRadioButtonsInGroup() {
    const radioButtons = this.queryButtons();
    const otherRadioButtons = radioButtons.filter((radioButton) => radioButton.guid !== this.guid);
    otherRadioButtons.forEach((otherRadioButton) => {
      if (otherRadioButton.checked) {
        otherRadioButton.checked = false;
        otherRadioButton.focused = false;
      }
    });
  }
  getTabIndex() {
    if (this.disabled) {
      return undefined;
    }
    return this.checked || this.isDefaultSelectable() ? 0 : -1;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  mouseenter() {
    this.hovered = true;
  }
  mouseleave() {
    this.hovered = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.rootNode = this.el.getRootNode();
    this.guid = this.el.id || `calcite-radio-button-${guid.guid()}`;
    if (this.name) {
      this.checkLastRadioButton();
    }
    label.connectLabel(this);
    form.connectForm(this);
  }
  componentDidLoad() {
    if (this.focused && !this.disabled) {
      this.setFocus();
    }
  }
  disconnectedCallback() {
    label.disconnectLabel(this);
    form.disconnectForm(this);
  }
  componentDidRender() {
    interactive.updateHostInteraction(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const tabIndex = this.getTabIndex();
    return (index.h(index.Host, { onClick: this.clickHandler, onKeyDown: this.handleKeyDown }, index.h("div", { "aria-checked": this.checked.toString(), "aria-label": label.getLabelText(this), class: CSS.container, onBlur: this.onContainerBlur, onFocus: this.onContainerFocus, ref: this.setContainerEl, role: "radio", tabIndex: tabIndex }, index.h("div", { class: "radio" })), index.h(form.HiddenFormInputSlot, { component: this })));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "checked": ["checkedChanged"],
    "name": ["nameChanged"]
  }; }
};
RadioButton.style = radioButtonCss;

exports.calcite_radio_button = RadioButton;
