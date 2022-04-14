/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { n as normalizeHex, i as isValidHex, a as isLonghandHex, r as rgbToHex, b as hexChar } from './utils.js';
import { c as color, d as defineCustomElement$4 } from './color-picker-swatch.js';
import { f as focusElement } from './dom.js';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './input.js';
import { d as defineCustomElement$1 } from './progress.js';

const CSS$1 = {
  container: "container",
  controlSection: "control-section",
  hexOptions: "color-hex-options",
  section: "section",
  header: "header",
  control: "control",
  splitSection: "section--split",
  colorModeContainer: "color-mode-container",
  colorMode: "color-mode",
  channels: "channels",
  channel: "channel",
  savedColors: "saved-colors",
  savedColorsSection: "saved-colors-section",
  saveColor: "save-color",
  deleteColor: "delete-color",
  savedColorsButtons: "saved-colors-buttons",
  headerHex: "header--hex",
  colorFieldAndSlider: "color-field-and-slider",
  colorFieldAndSliderInteractive: "color-field-and-slider--interactive",
  colorFieldAndSliderWrap: "color-field-and-slider-wrap",
  scope: "scope",
  hueScope: "scope--hue",
  colorFieldScope: "scope--color-field",
  savedColor: "saved-color"
};
const DEFAULT_COLOR$1 = color("#007AC2");
const DEFAULT_STORAGE_KEY_PREFIX = "calcite-color-";
const RGB_LIMITS = {
  r: 255,
  g: 255,
  b: 255
};
const HSV_LIMITS = {
  h: 360,
  s: 100,
  v: 100
};
const TEXT = {
  b: "B",
  blue: "Blue",
  deleteColor: "Delete color",
  g: "G",
  green: "Green",
  h: "H",
  hsv: "HSV",
  hex: "Hex",
  hue: "Hue",
  noColor: "No color",
  r: "R",
  red: "Red",
  rgb: "RGB",
  s: "S",
  saturation: "Saturation",
  saveColor: "Save color",
  saved: "Saved",
  v: "V",
  value: "Value"
};
const DIMENSIONS = {
  s: {
    slider: {
      height: 10,
      width: 160
    },
    colorField: {
      height: 80,
      width: 160
    },
    thumb: {
      radius: 8
    }
  },
  m: {
    slider: {
      height: 14,
      width: 272
    },
    colorField: {
      height: 150,
      width: 272
    },
    thumb: {
      radius: 10
    }
  },
  l: {
    slider: {
      height: 16,
      width: 464
    },
    colorField: {
      height: 200,
      width: 464
    },
    thumb: {
      radius: 12
    }
  }
};

const CSS = {
  container: "container",
  preview: "preview",
  input: "input"
};

const colorPickerHexInputCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}.container{display:inline-grid;width:100%;-ms-flex-align:center;align-items:center;grid-template-columns:1fr auto}.preview{grid-column:2/3;pointer-events:none;margin-top:0px;margin-bottom:0px;margin-left:0.25rem;margin-right:0.25rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;z-index:1}.preview,.input{grid-row:1}.input{grid-column:1/3;width:100%;text-transform:uppercase}";

const DEFAULT_COLOR = color();
const ColorPickerHexInput = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteColorPickerHexInputChange = createEvent(this, "calciteColorPickerHexInputChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /**
     * When false, empty color (null) will be allowed as a value. Otherwise, a color value is always enforced by the component.
     *
     * When true, clearing the input and blurring will restore the last valid color set. When false, it will set it to empty.
     */
    this.allowEmpty = false;
    /**
     * Label used for the hex input.
     * @default "Hex"
     */
    this.intlHex = TEXT.hex;
    /**
     * Label used for the hex input when there is no color selected.
     * @default "No color"
     */
    this.intlNoColor = TEXT.noColor;
    /**
     * The component's scale.
     */
    this.scale = "m";
    /**
     * The hex value.
     */
    this.value = normalizeHex(DEFAULT_COLOR.hex());
    this.onCalciteInputBlur = () => {
      const node = this.inputNode;
      const inputValue = node.value;
      const hex = `#${inputValue}`;
      const willClearValue = this.allowEmpty && !inputValue;
      if (willClearValue || (isValidHex(hex) && isLonghandHex(hex))) {
        return;
      }
      // manipulating DOM directly since rerender doesn't update input value
      node.value =
        this.allowEmpty && !this.internalColor
          ? ""
          : this.formatForInternalInput(rgbToHex(this.internalColor.object()));
    };
    this.onInputChange = () => {
      this.internalSetValue(this.inputNode.value, this.value);
    };
    /**
     * The last valid/selected color. Used as a fallback if an invalid hex code is entered.
     */
    this.internalColor = DEFAULT_COLOR;
    this.previousNonNullValue = this.value;
    this.storeInputRef = (node) => {
      this.inputNode = node;
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    const { allowEmpty, value } = this;
    if (value) {
      const normalized = normalizeHex(value);
      if (isValidHex(normalized)) {
        this.internalSetValue(normalized, normalized, false);
      }
      return;
    }
    if (allowEmpty) {
      this.internalSetValue(null, null, false);
    }
  }
  handleValueChange(value, oldValue) {
    this.internalSetValue(value, oldValue, false);
  }
  // using @Listen as a workaround for VDOM listener not firing
  onInputKeyDown(event) {
    const { altKey, ctrlKey, metaKey, shiftKey } = event;
    const { internalColor, value } = this;
    const key = event.key;
    if (key === "Tab" || key === "Enter") {
      this.onInputChange();
      return;
    }
    const isNudgeKey = key === "ArrowDown" || key === "ArrowUp";
    const oldValue = this.value;
    if (isNudgeKey) {
      if (!value) {
        this.internalSetValue(this.previousNonNullValue, oldValue);
        event.preventDefault();
        return;
      }
      const direction = key === "ArrowUp" ? 1 : -1;
      const bump = shiftKey ? 10 : 1;
      this.internalSetValue(normalizeHex(this.nudgeRGBChannels(internalColor, bump * direction).hex()), oldValue);
      event.preventDefault();
      return;
    }
    const withModifiers = altKey || ctrlKey || metaKey;
    const singleChar = key.length === 1;
    const validHexChar = hexChar.test(key);
    if (singleChar && !withModifiers && !validHexChar) {
      event.preventDefault();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const { intlHex, value } = this;
    const hexInputValue = this.formatForInternalInput(value);
    return (h("div", { class: CSS.container }, h("calcite-input", { class: CSS.input, label: intlHex, maxLength: 6, onCalciteInputBlur: this.onCalciteInputBlur, onCalciteInputChange: this.onInputChange, prefixText: "#", ref: this.storeInputRef, scale: this.scale, value: hexInputValue }), hexInputValue ? (h("calcite-color-picker-swatch", { active: true, class: CSS.preview, color: `#${hexInputValue}`, scale: this.scale })) : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    focusElement(this.inputNode);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  internalSetValue(value, oldValue, emit = true) {
    if (value) {
      const normalized = normalizeHex(value);
      if (isValidHex(normalized)) {
        const { internalColor } = this;
        const changed = !internalColor || normalized !== normalizeHex(internalColor.hex());
        this.internalColor = color(normalized);
        this.previousNonNullValue = normalized;
        this.value = normalized;
        if (changed && emit) {
          this.calciteColorPickerHexInputChange.emit();
        }
        return;
      }
    }
    else if (this.allowEmpty) {
      this.internalColor = null;
      this.value = null;
      if (emit) {
        this.calciteColorPickerHexInputChange.emit();
      }
      return;
    }
    this.value = oldValue;
  }
  formatForInternalInput(hex) {
    return hex ? hex.replace("#", "") : "";
  }
  nudgeRGBChannels(color$1, amount) {
    return color.rgb(color$1.array().map((channel) => channel + amount));
  }
  get el() { return this; }
  static get watchers() { return {
    "value": ["handleValueChange"]
  }; }
  static get style() { return colorPickerHexInputCss; }
}, [1, "calcite-color-picker-hex-input", {
    "allowEmpty": [4, "allow-empty"],
    "intlHex": [1, "intl-hex"],
    "intlNoColor": [1, "intl-no-color"],
    "scale": [513],
    "value": [1537],
    "internalColor": [32],
    "setFocus": [64]
  }, [[2, "keydown", "onInputKeyDown"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-color-picker-hex-input", "calcite-color-picker-swatch", "calcite-icon", "calcite-input", "calcite-progress"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-color-picker-hex-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ColorPickerHexInput);
      }
      break;
    case "calcite-color-picker-swatch":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "calcite-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { CSS$1 as C, DEFAULT_COLOR$1 as D, HSV_LIMITS as H, RGB_LIMITS as R, TEXT as T, DIMENSIONS as a, DEFAULT_STORAGE_KEY_PREFIX as b, ColorPickerHexInput as c, defineCustomElement as d };
