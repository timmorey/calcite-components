/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-98559b14.js');
const observers = require('./observers-cf003b0e.js');

const radioButtonGroupCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;max-width:100vw}:host([layout=horizontal]){-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}:host([layout=horizontal][scale=s]){gap:1rem}:host([layout=horizontal][scale=m]){gap:1.25rem}:host([layout=horizontal][scale=l]){gap:1.5rem}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column}";

const RadioButtonGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteRadioButtonGroupChange = index.createEvent(this, "calciteRadioButtonGroupChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** The disabled state of the radio button group. */
    this.disabled = false;
    /** The radio button group's hidden status.  When a radio button group is hidden none of its options are focusable or checkable. */
    this.hidden = false;
    /** The layout direction of the radio buttons in a group. */
    this.layout = "horizontal";
    /** Requires that a value is selected for the radio button group before the parent form will submit. */
    this.required = false;
    /** The scale (size) of the radio button group. */
    this.scale = "m";
    // --------------------------------------------------------------------------
    //
    //  Private Properties
    //
    // --------------------------------------------------------------------------
    this.mutationObserver = observers.createObserver("mutation", () => this.passPropsToRadioButtons());
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.passPropsToRadioButtons = () => {
      const radioButtons = this.el.querySelectorAll("calcite-radio-button");
      if (radioButtons.length > 0) {
        radioButtons.forEach((radioButton) => {
          radioButton.disabled = this.disabled || radioButton.disabled;
          radioButton.hidden = this.hidden;
          radioButton.name = this.name;
          radioButton.required = this.required;
          radioButton.scale = this.scale;
        });
      }
    };
  }
  onDisabledChange() {
    this.passPropsToRadioButtons();
  }
  onHiddenChange() {
    this.passPropsToRadioButtons();
  }
  onLayoutChange() {
    this.passPropsToRadioButtons();
  }
  onScaleChange() {
    this.passPropsToRadioButtons();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    this.passPropsToRadioButtons();
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  radioButtonChangeHandler(event) {
    this.calciteRadioButtonGroupChange.emit(event.target.value);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return (index.h(index.Host, { role: "radiogroup" }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "disabled": ["onDisabledChange"],
    "hidden": ["onHiddenChange"],
    "layout": ["onLayoutChange"],
    "scale": ["onScaleChange"]
  }; }
};
RadioButtonGroup.style = radioButtonGroupCss;

exports.calcite_radio_button_group = RadioButtonGroup;
