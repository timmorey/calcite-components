/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-73638693.js';
import { f as focusElement } from './dom-3f012371.js';
import { c as connectLabel, d as disconnectLabel, g as getLabelText } from './label-b895faa6.js';
import { c as connectForm, d as disconnectForm, H as HiddenFormInputSlot } from './form-4b2b29b5.js';
import { u as updateHostInteraction } from './interactive-d104f01d.js';
import './guid-a53704be.js';

const switchCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]) .container{height:0.75rem}:host([scale=s]) .track{height:0.75rem;width:1.5rem}:host([scale=s]) .handle{height:0.5rem;width:0.5rem}:host([scale=m]) .container{height:1rem}:host([scale=m]) .track{height:1rem;width:2rem}:host([scale=m]) .handle{height:0.75rem;width:0.75rem}:host([scale=l]) .container{height:1.5rem}:host([scale=l]) .track{height:1.5rem;width:3rem}:host([scale=l]) .handle{height:1.25rem;width:1.25rem}:host{position:relative;display:inline-block;width:auto;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host{width:auto;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.track{pointer-events:none;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-2);vertical-align:top;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.handle{pointer-events:none;position:absolute;display:block;border-radius:9999px;border-width:2px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);top:-1px;inset-inline:-1px auto}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([checked]) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]) .handle{border-color:var(--calcite-ui-brand);inset-inline:auto -1px}:host([checked]:hover) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]:hover) .handle{border-color:var(--calcite-ui-brand-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}@media (forced-colors: active){:host([checked]) .track{background-color:canvasText}}.container:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const Switch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteSwitchChange = createEvent(this, "calciteSwitchChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** True if the switch is disabled */
    this.disabled = false;
    /** The scale of the switch */
    this.scale = "m";
    /** True if the switch is initially on
     * @deprecated use 'checked' instead.
     */
    this.switched = false;
    /** True if the switch is initially on */
    this.checked = false;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.keyDownHandler = (e) => {
      const key = e.key;
      if (!this.disabled && (key === " " || key === "Enter")) {
        this.toggle();
        e.preventDefault();
      }
    };
    this.clickHandler = () => {
      this.toggle();
    };
    this.setSwitchEl = (el) => {
      this.switchEl = el;
    };
  }
  switchedWatcher(switched) {
    this.checked = switched;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    focusElement(this.switchEl);
  }
  onLabelClick() {
    if (!this.disabled) {
      this.toggle();
      this.setFocus();
    }
  }
  toggle() {
    this.checked = !this.checked;
    this.calciteSwitchChange.emit({
      // todo: We should remove emmitting redudant props in event payload.
      // https://github.com/Esri/calcite-components/issues/3163
      switched: this.checked
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    const initiallyChecked = this.checked || this.switched;
    if (initiallyChecked) {
      // if either prop is set, we ensure both are synced initially
      this.switched = this.checked = initiallyChecked;
    }
    connectLabel(this);
    connectForm(this);
  }
  disconnectedCallback() {
    disconnectLabel(this);
    disconnectForm(this);
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return (h(Host, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, h("div", { "aria-checked": this.checked.toString(), "aria-label": getLabelText(this), class: "container", ref: this.setSwitchEl, role: "switch", tabIndex: 0 }, h("div", { class: "track" }, h("div", { class: "handle" })), h(HiddenFormInputSlot, { component: this }))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "switched": ["switchedWatcher"]
  }; }
};
Switch.style = switchCss;

export { Switch as calcite_switch };
