/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-98559b14.js');
const dom = require('./dom-be217a15.js');
require('./guid-21b03b4f.js');

var StatusIconDefaults;
(function (StatusIconDefaults) {
  StatusIconDefaults["valid"] = "check-circle";
  StatusIconDefaults["invalid"] = "exclamation-mark-triangle";
  StatusIconDefaults["idle"] = "information";
})(StatusIconDefaults || (StatusIconDefaults = {}));

const inputMessageCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([active][scale=m]),:host([active][scale=l]){--calcite-input-message-spacing-value:0.25rem}:host{visibility:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;height:0px;width:100%;-ms-flex-align:center;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);opacity:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}:host([active]){visibility:visible;height:auto;opacity:1;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}:host([active][scale=m]),:host([active][scale=l]){margin-top:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{pointer-events:none;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-ui-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-ui-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-ui-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-ui-brand)}:host([status][active]){font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([status][active][scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([status][active][scale=m]){margin-top:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([status][active][scale=l]){margin-top:0.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}";

const InputMessage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Indicates whether the message is displayed. */
    this.active = false;
    /** specify the scale of the input, defaults to m */
    this.scale = "m";
    /** specify the status of the input field, determines message and icons */
    this.status = "idle";
  }
  handleIconEl() {
    this.requestedIcon = dom.setRequestedIcon(StatusIconDefaults, this.icon, this.status);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.status = dom.getElementProp(this.el, "status", this.status);
    this.scale = dom.getElementProp(this.el, "scale", this.scale);
    this.requestedIcon = dom.setRequestedIcon(StatusIconDefaults, this.icon, this.status);
  }
  render() {
    const hidden = !this.active;
    return (index.h(index.Host, { "calcite-hydrated-hidden": hidden }, this.renderIcon(this.requestedIcon), index.h("slot", null)));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  renderIcon(iconName) {
    if (iconName) {
      return index.h("calcite-icon", { class: "calcite-input-message-icon", icon: iconName, scale: "s" });
    }
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "status": ["handleIconEl"],
    "icon": ["handleIconEl"]
  }; }
};
InputMessage.style = inputMessageCss;

exports.calcite_input_message = InputMessage;
