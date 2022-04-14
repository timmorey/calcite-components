/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { g as guid } from './guid.js';
import { k as intersects } from './dom.js';
import { d as decimalPlaces, c as clamp } from './math.js';
import { c as connectLabel, d as disconnectLabel } from './label.js';
import { c as connectForm, d as disconnectForm, a as afterConnectDefaultValueSet, H as HiddenFormInputSlot } from './form.js';
import { u as updateHostInteraction } from './interactive.js';
import { d as defineCustomElement$2 } from './graph.js';

const sliderCss = "@charset \"UTF-8\";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}.scale--s{--calcite-slider-handle-size:10px;--calcite-slider-handle-extension-height:6.5px;--calcite-slider-container-font-size:var(--calcite-font-size--3)}.scale--s .handle__label,.scale--s .tick__label{line-height:.75rem}.scale--m{--calcite-slider-handle-size:14px;--calcite-slider-handle-extension-height:8px;--calcite-slider-container-font-size:var(--calcite-font-size--2)}.scale--m .handle__label,.scale--m .tick__label{line-height:1rem}.scale--l{--calcite-slider-handle-size:16px;--calcite-slider-handle-extension-height:10.5px;--calcite-slider-container-font-size:var(--calcite-font-size--1)}.scale--l .handle__label,.scale--l .tick__label{line-height:1rem}.handle__label,.tick__label{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);font-size:var(--calcite-slider-container-font-size)}:host{display:block}.container{position:relative;display:block;padding:calc(var(--calcite-slider-handle-size) * 0.5);margin:calc(var(--calcite-slider-handle-size) * 0.5) 0;--calcite-slider-full-handle-height:calc(\n    var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height)\n  )}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) .track__range,:host([disabled]) .tick--active{background-color:var(--calcite-ui-text-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-6px}.scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-8px}.scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-9px}:host([precise]:not([has-histogram])) .container .thumb--value{--calcite-slider-thumb-y-offset:calc(var(--calcite-slider-full-handle-height) * -1)}.thumb-container{position:relative;max-width:100%}.thumb{--calcite-slider-thumb-x-offset:calc(var(--calcite-slider-handle-size) * 0.5);position:absolute;margin:0px;display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;border-style:none;background-color:transparent;padding:0px;font-family:inherit;outline:2px solid transparent;outline-offset:2px;-webkit-transform:translate(var(--calcite-slider-thumb-x-offset), var(--calcite-slider-thumb-y-offset));transform:translate(var(--calcite-slider-thumb-x-offset), var(--calcite-slider-thumb-y-offset))}.thumb .handle__label.static,.thumb .handle__label.transformed{position:absolute;top:0px;bottom:0px;opacity:0}.thumb .handle__label.hyphen::after{content:\"—\";display:inline-block;width:1em}.thumb .handle__label.hyphen--wrap{display:-ms-flexbox;display:flex}.thumb .handle{-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:9999px;background-color:var(--calcite-ui-foreground-1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;height:var(--calcite-slider-handle-size);width:var(--calcite-slider-handle-size);-webkit-box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;-webkit-transition:border var(--calcite-internal-animation-timing-medium) ease, background-color var(--calcite-internal-animation-timing-medium) ease, -webkit-box-shadow var(--calcite-animation-timing) ease;transition:border var(--calcite-internal-animation-timing-medium) ease, background-color var(--calcite-internal-animation-timing-medium) ease, -webkit-box-shadow var(--calcite-animation-timing) ease;transition:border var(--calcite-internal-animation-timing-medium) ease, background-color var(--calcite-internal-animation-timing-medium) ease, box-shadow var(--calcite-animation-timing) ease;transition:border var(--calcite-internal-animation-timing-medium) ease, background-color var(--calcite-internal-animation-timing-medium) ease, box-shadow var(--calcite-animation-timing) ease, -webkit-box-shadow var(--calcite-animation-timing) ease}.thumb .handle-extension{width:0.125rem;height:var(--calcite-slider-handle-extension-height);background-color:var(--calcite-ui-text-3)}.thumb:hover .handle{-webkit-box-shadow:0 0 0 3px var(--calcite-ui-brand) inset;box-shadow:0 0 0 3px var(--calcite-ui-brand) inset}.thumb:hover .handle-extension{background-color:var(--calcite-ui-brand)}.thumb:focus .handle{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.thumb:focus .handle-extension{background-color:var(--calcite-ui-brand)}.thumb.thumb--minValue{-webkit-transform:translate(calc(var(--calcite-slider-thumb-x-offset) * -1), var(--calcite-slider-thumb-y-offset));transform:translate(calc(var(--calcite-slider-thumb-x-offset) * -1), var(--calcite-slider-thumb-y-offset))}.thumb.thumb--precise{--calcite-slider-thumb-y-offset:-2px}:host([label-handles]) .thumb{--calcite-slider-thumb-x-offset:50%}:host([label-handles]):host(:not([has-histogram])) .scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-23px}:host([label-handles]):host(:not([has-histogram])) .scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-30px}:host([label-handles]):host(:not([has-histogram])) .scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-32px}:host([has-histogram][label-handles]) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--minValue.thumb--precise .handle__label{margin-top:0.5em}:host(:not([has-histogram]):not([precise])) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--value .handle__label{margin-bottom:0.5em}:host([label-handles][precise]):host(:not([has-histogram])) .scale--s .thumb--value{--calcite-slider-thumb-y-offset:-33px}:host([label-handles][precise]):host(:not([has-histogram])) .scale--m .thumb--value{--calcite-slider-thumb-y-offset:-44px}:host([label-handles][precise]):host(:not([has-histogram])) .scale--l .thumb--value{--calcite-slider-thumb-y-offset:-49px}.thumb:focus .handle,.thumb--active .handle{background-color:var(--calcite-ui-brand);-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}.thumb:hover.thumb--precise:after,.thumb:focus.thumb--precise:after,.thumb--active.thumb--precise:after{background-color:var(--calcite-ui-brand)}.track{position:relative;height:0.125rem;border-radius:0px;background-color:var(--calcite-ui-border-2);-webkit-transition:all var(--calcite-internal-animation-timing-medium) ease-in;transition:all var(--calcite-internal-animation-timing-medium) ease-in}.track__range{position:absolute;top:0px;height:0.125rem;background-color:var(--calcite-ui-brand)}.container--range .track__range:hover{cursor:ew-resize}.container--range .track__range:after{position:absolute;width:100%;content:\"\";top:calc(var(--calcite-slider-full-handle-height) * 0.5 * -1);height:calc(var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height))}.tick{position:absolute;height:0.25rem;width:0.125rem;border-width:1px;border-style:solid;background-color:var(--calcite-ui-border-input);border-color:var(--calcite-ui-foreground-1);top:-2px;pointer-events:none;-webkit-margin-start:calc(-1 * 0.125rem);margin-inline-start:calc(-1 * 0.125rem)}.tick--active{background-color:var(--calcite-ui-brand)}.tick__label{pointer-events:none;margin-top:0.875rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.tick__label--min{-webkit-transition:opacity var(--calcite-animation-timing);transition:opacity var(--calcite-animation-timing)}.tick__label--max{-webkit-transition:opacity var(--calcite-internal-animation-timing-fast);transition:opacity var(--calcite-internal-animation-timing-fast)}:host([has-histogram][label-handles]) .tick__label--min,:host([has-histogram][label-handles]) .tick__label--max,:host([has-histogram][precise]) .tick__label--min,:host([has-histogram][precise]) .tick__label--max{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}.graph{color:var(--calcite-ui-foreground-3);height:48px}:host([label-ticks][ticks]) .container{padding-bottom:calc(0.875rem + var(--calcite-slider-container-font-size))}:host([has-histogram]):host([precise][label-handles]) .container{padding-bottom:calc(var(--calcite-slider-full-handle-height) + 1em)}:host([has-histogram]):host([label-handles]:not([precise])) .container{padding-bottom:calc(var(--calcite-slider-handle-size) * 0.5 + 1em)}:host([has-histogram]):host([precise]:not([label-handles])) .container{padding-bottom:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container{padding-top:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container--range{padding-bottom:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([label-handles]:not([precise])) .container{padding-top:calc(var(--calcite-slider-full-handle-height) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container{padding-top:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container--range{padding-bottom:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

function isRange(value) {
  return Array.isArray(value);
}
const Slider = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteSliderInput = createEvent(this, "calciteSliderInput", 7);
    this.calciteSliderChange = createEvent(this, "calciteSliderChange", 7);
    this.calciteSliderUpdate = createEvent(this, "calciteSliderUpdate", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Disable and gray out the slider */
    this.disabled = false;
    /** Indicates if a histogram is present */
    this.hasHistogram = false;
    /** Label handles with their numeric value */
    this.labelHandles = false;
    /** Label tick marks with their numeric value. */
    this.labelTicks = false;
    /** Maximum selectable value */
    this.max = 100;
    /** Minimum selectable value */
    this.min = 0;
    /**
     * When true, the slider will display values from high to low.
     *
     * Note that this value will be ignored if the slider has an associated histogram.
     */
    this.mirrored = false;
    /** Use finer point for handles */
    this.precise = false;
    /**
     * When true, makes the component required for form-submission.
     */
    this.required = false;
    /** When true, enables snap selection along the step interval */
    this.snap = false;
    /** Interval to move on up/down keys */
    this.step = 1;
    /** Currently selected number (if single select) */
    this.value = 0;
    /**
     * Specify the scale of the slider, defaults to m
     */
    this.scale = "m";
    this.guid = `calcite-slider-${guid()}`;
    this.activeProp = "value";
    this.minMaxValueRange = null;
    this.minValueDragRange = null;
    this.maxValueDragRange = null;
    this.tickValues = [];
    this.dragUpdate = (event) => {
      event.preventDefault();
      if (this.dragProp) {
        const value = this.translate(event.clientX || event.pageX);
        if (isRange(this.value) && this.dragProp === "minMaxValue") {
          if (this.minValueDragRange && this.maxValueDragRange && this.minMaxValueRange) {
            const newMinValue = value - this.minValueDragRange;
            const newMaxValue = value + this.maxValueDragRange;
            if (newMaxValue <= this.max &&
              newMinValue >= this.min &&
              newMaxValue - newMinValue === this.minMaxValueRange) {
              this.minValue = this.clamp(newMinValue, "minValue");
              this.maxValue = this.clamp(newMaxValue, "maxValue");
            }
          }
          else {
            this.minValueDragRange = value - this.minValue;
            this.maxValueDragRange = this.maxValue - value;
            this.minMaxValueRange = this.maxValue - this.minValue;
          }
        }
        else {
          this.setValue(this.dragProp, this.clamp(value, this.dragProp));
        }
      }
    };
    this.dragEnd = (event) => {
      this.removeDragListeners();
      this.focusActiveHandle(event.clientX);
      if (this.lastDragPropValue != this[this.dragProp]) {
        this.emitChange();
      }
      this.dragProp = null;
      this.lastDragPropValue = null;
      this.minValueDragRange = null;
      this.maxValueDragRange = null;
      this.minMaxValueRange = null;
    };
    /**
     * Set the reference of the track Element
     * @internal
     * @param node
     */
    this.storeTrackRef = (node) => {
      this.trackEl = node;
    };
  }
  histogramWatcher(newHistogram) {
    this.hasHistogram = !!newHistogram;
  }
  valueHandler() {
    this.setMinMaxFromValue();
  }
  minMaxValueHandler() {
    this.setValueFromMinMax();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.setMinMaxFromValue();
    this.setValueFromMinMax();
    connectLabel(this);
    connectForm(this);
  }
  disconnectedCallback() {
    disconnectLabel(this);
    disconnectForm(this);
    this.removeDragListeners();
  }
  componentWillLoad() {
    this.tickValues = this.generateTickValues();
    if (!isRange(this.value)) {
      this.value = this.clamp(this.value);
    }
    afterConnectDefaultValueSet(this, this.value);
    if (this.snap && !isRange(this.value)) {
      this.value = this.getClosestStep(this.value);
    }
    if (this.histogram) {
      this.hasHistogram = true;
    }
  }
  componentDidRender() {
    if (this.labelHandles) {
      this.adjustHostObscuredHandleLabel("value");
      if (isRange(this.value)) {
        this.adjustHostObscuredHandleLabel("minValue");
        if (!(this.precise && !this.hasHistogram)) {
          this.hyphenateCollidingRangeHandleLabels();
        }
      }
    }
    this.hideObscuredBoundingTickLabels();
    updateHostInteraction(this);
  }
  render() {
    const id = this.el.id || this.guid;
    const maxProp = isRange(this.value) ? "maxValue" : "value";
    const value = isRange(this.value) ? this.maxValue : this.value;
    const min = this.minValue || this.min;
    const useMinValue = this.shouldUseMinValue();
    const minInterval = this.getUnitInterval(useMinValue ? this.minValue : min) * 100;
    const maxInterval = this.getUnitInterval(value) * 100;
    const mirror = this.shouldMirror();
    const leftThumbOffset = `${mirror ? 100 - minInterval : minInterval}%`;
    const rightThumbOffset = `${mirror ? maxInterval : 100 - maxInterval}%`;
    const valueIsRange = isRange(this.value);
    const handle = (h("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: () => this.dragStart(maxProp), ref: (el) => (this.maxHandle = el), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0 }, h("div", { class: "handle" })));
    const labeledHandle = (h("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: () => this.dragStart(maxProp), ref: (el) => (this.maxHandle = el), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0 }, h("span", { "aria-hidden": "true", class: "handle__label handle__label--value" }, value ? value.toLocaleString() : value), h("span", { "aria-hidden": "true", class: "handle__label handle__label--value static" }, value ? value.toLocaleString() : value), h("span", { "aria-hidden": "true", class: "handle__label handle__label--value transformed" }, value ? value.toLocaleString() : value), h("div", { class: "handle" })));
    const histogramLabeledHandle = (h("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: () => this.dragStart(maxProp), ref: (el) => (this.maxHandle = el), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0 }, h("div", { class: "handle" }), h("span", { "aria-hidden": "true", class: "handle__label handle__label--value" }, value ? value.toLocaleString() : value), h("span", { "aria-hidden": "true", class: "handle__label handle__label--value static" }, value ? value.toLocaleString() : value), h("span", { "aria-hidden": "true", class: "handle__label handle__label--value transformed" }, value ? value.toLocaleString() : value)));
    const preciseHandle = (h("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: () => this.dragStart(maxProp), ref: (el) => (this.maxHandle = el), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0 }, h("div", { class: "handle" }), h("div", { class: "handle-extension" })));
    const histogramPreciseHandle = (h("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: () => this.dragStart(maxProp), ref: (el) => (this.maxHandle = el), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0 }, h("div", { class: "handle-extension" }), h("div", { class: "handle" })));
    const labeledPreciseHandle = (h("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: () => this.dragStart(maxProp), ref: (el) => (this.maxHandle = el), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0 }, h("span", { "aria-hidden": "true", class: "handle__label handle__label--value" }, value ? value.toLocaleString() : value), h("span", { "aria-hidden": "true", class: "handle__label handle__label--value static" }, value ? value.toLocaleString() : value), h("span", { "aria-hidden": "true", class: "handle__label handle__label--value transformed" }, value ? value.toLocaleString() : value), h("div", { class: "handle" }), h("div", { class: "handle-extension" })));
    const histogramLabeledPreciseHandle = (h("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: () => this.dragStart(maxProp), ref: (el) => (this.maxHandle = el), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0 }, h("div", { class: "handle-extension" }), h("div", { class: "handle" }), h("span", { "aria-hidden": "true", class: "handle__label handle__label--value" }, value ? value.toLocaleString() : value), h("span", { "aria-hidden": "true", class: "handle__label handle__label--value static" }, value ? value.toLocaleString() : value), h("span", { "aria-hidden": "true", class: "handle__label handle__label--value transformed" }, value ? value.toLocaleString() : value)));
    const minHandle = (h("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue"
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: () => this.dragStart("minValue"), ref: (el) => (this.minHandle = el), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0 }, h("div", { class: "handle" })));
    const minLabeledHandle = (h("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue"
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: () => this.dragStart("minValue"), ref: (el) => (this.minHandle = el), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0 }, h("span", { "aria-hidden": "true", class: "handle__label handle__label--minValue" }, this.minValue && this.minValue.toLocaleString()), h("span", { "aria-hidden": "true", class: "handle__label handle__label--minValue static" }, this.minValue && this.minValue.toLocaleString()), h("span", { "aria-hidden": "true", class: "handle__label handle__label--minValue transformed" }, this.minValue && this.minValue.toLocaleString()), h("div", { class: "handle" })));
    const minHistogramLabeledHandle = (h("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue"
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: () => this.dragStart("minValue"), ref: (el) => (this.minHandle = el), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0 }, h("div", { class: "handle" }), h("span", { "aria-hidden": "true", class: "handle__label handle__label--minValue" }, this.minValue && this.minValue.toLocaleString()), h("span", { "aria-hidden": "true", class: "handle__label handle__label--minValue static" }, this.minValue && this.minValue.toLocaleString()), h("span", { "aria-hidden": "true", class: "handle__label handle__label--minValue transformed" }, this.minValue && this.minValue.toLocaleString())));
    const minPreciseHandle = (h("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue",
        "thumb--precise": true
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: () => this.dragStart("minValue"), ref: (el) => (this.minHandle = el), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0 }, h("div", { class: "handle-extension" }), h("div", { class: "handle" })));
    const minLabeledPreciseHandle = (h("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue",
        "thumb--precise": true
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: () => this.dragStart("minValue"), ref: (el) => (this.minHandle = el), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0 }, h("div", { class: "handle-extension" }), h("div", { class: "handle" }), h("span", { "aria-hidden": "true", class: "handle__label handle__label--minValue" }, this.minValue && this.minValue.toLocaleString()), h("span", { "aria-hidden": "true", class: "handle__label handle__label--minValue static" }, this.minValue && this.minValue.toLocaleString()), h("span", { "aria-hidden": "true", class: "handle__label handle__label--minValue transformed" }, this.minValue && this.minValue.toLocaleString())));
    return (h(Host, { id: id, onTouchStart: this.handleTouchStart }, h("div", { class: {
        ["container"]: true,
        ["container--range"]: valueIsRange,
        [`scale--${this.scale}`]: true
      } }, this.renderGraph(), h("div", { class: "track", ref: this.storeTrackRef }, h("div", { class: "track__range", onPointerDown: () => this.dragStart("minMaxValue"), style: {
        left: `${mirror ? 100 - maxInterval : minInterval}%`,
        right: `${mirror ? minInterval : 100 - maxInterval}%`
      } }), h("div", { class: "ticks" }, this.tickValues.map((tick) => {
      const tickOffset = `${this.getUnitInterval(tick) * 100}%`;
      let activeTicks = tick >= min && tick <= value;
      if (useMinValue) {
        activeTicks = tick >= this.minValue && tick <= this.maxValue;
      }
      return (h("span", { class: {
          tick: true,
          "tick--active": activeTicks
        }, style: {
          left: mirror ? "" : tickOffset,
          right: mirror ? tickOffset : ""
        } }, this.renderTickLabel(tick)));
    }))), h("div", { class: "thumb-container" }, !this.precise && !this.labelHandles && valueIsRange && minHandle, !this.hasHistogram &&
      !this.precise &&
      this.labelHandles &&
      valueIsRange &&
      minLabeledHandle, this.precise && !this.labelHandles && valueIsRange && minPreciseHandle, this.precise && this.labelHandles && valueIsRange && minLabeledPreciseHandle, this.hasHistogram &&
      !this.precise &&
      this.labelHandles &&
      valueIsRange &&
      minHistogramLabeledHandle, !this.precise && !this.labelHandles && handle, !this.hasHistogram && !this.precise && this.labelHandles && labeledHandle, !this.hasHistogram && this.precise && !this.labelHandles && preciseHandle, this.hasHistogram && this.precise && !this.labelHandles && histogramPreciseHandle, !this.hasHistogram && this.precise && this.labelHandles && labeledPreciseHandle, this.hasHistogram && !this.precise && this.labelHandles && histogramLabeledHandle, this.hasHistogram &&
      this.precise &&
      this.labelHandles &&
      histogramLabeledPreciseHandle, h(HiddenFormInputSlot, { component: this })))));
  }
  renderGraph() {
    return this.histogram ? (h("calcite-graph", { class: "graph", colorStops: this.histogramStops, data: this.histogram, highlightMax: isRange(this.value) ? this.maxValue : this.value, highlightMin: isRange(this.value) ? this.minValue : this.min, max: this.max, min: this.min })) : null;
  }
  renderTickLabel(tick) {
    const valueIsRange = isRange(this.value);
    const isMinTickLabel = tick === this.min;
    const isMaxTickLabel = tick === this.max;
    const tickLabel = (h("span", { class: {
        tick__label: true,
        "tick__label--min": isMinTickLabel,
        "tick__label--max": isMaxTickLabel
      } }, tick.toLocaleString()));
    if (this.labelTicks && !this.hasHistogram && !valueIsRange) {
      return tickLabel;
    }
    if (this.labelTicks &&
      !this.hasHistogram &&
      valueIsRange &&
      !this.precise &&
      !this.labelHandles) {
      return tickLabel;
    }
    if (this.labelTicks &&
      !this.hasHistogram &&
      valueIsRange &&
      !this.precise &&
      this.labelHandles) {
      return tickLabel;
    }
    if (this.labelTicks &&
      !this.hasHistogram &&
      valueIsRange &&
      this.precise &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    if (this.labelTicks && this.hasHistogram && !this.precise && !this.labelHandles) {
      return tickLabel;
    }
    if (this.labelTicks &&
      this.hasHistogram &&
      this.precise &&
      !this.labelHandles &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    if (this.labelTicks &&
      this.hasHistogram &&
      !this.precise &&
      this.labelHandles &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    if (this.labelTicks &&
      this.hasHistogram &&
      this.precise &&
      this.labelHandles &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    return null;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyDownHandler(event) {
    const mirror = this.shouldMirror();
    const { activeProp, max, min, pageStep, step } = this;
    const value = this[activeProp];
    const key = event.key;
    if (key === "Enter" || key === " ") {
      event.preventDefault();
      return;
    }
    let adjustment;
    if (key === "ArrowUp" || key === "ArrowRight") {
      const directionFactor = mirror && key === "ArrowRight" ? -1 : 1;
      adjustment = value + step * directionFactor;
    }
    else if (key === "ArrowDown" || key === "ArrowLeft") {
      const directionFactor = mirror && key === "ArrowLeft" ? -1 : 1;
      adjustment = value - step * directionFactor;
    }
    else if (key === "PageUp") {
      if (pageStep) {
        adjustment = value + pageStep;
      }
    }
    else if (key === "PageDown") {
      if (pageStep) {
        adjustment = value - pageStep;
      }
    }
    else if (key === "Home") {
      adjustment = min;
    }
    else if (key === "End") {
      adjustment = max;
    }
    if (isNaN(adjustment)) {
      return;
    }
    event.preventDefault();
    const fixedDecimalAdjustment = Number(adjustment.toFixed(decimalPlaces(step)));
    this.setValue(activeProp, this.clamp(fixedDecimalAdjustment, activeProp));
  }
  clickHandler(event) {
    this.focusActiveHandle(event.clientX);
  }
  pointerDownHandler(event) {
    const x = event.clientX || event.pageX;
    const position = this.translate(x);
    let prop = "value";
    if (isRange(this.value)) {
      const inRange = position >= this.minValue && position <= this.maxValue;
      if (inRange && this.lastDragProp === "minMaxValue") {
        prop = "minMaxValue";
      }
      else {
        const closerToMax = Math.abs(this.maxValue - position) < Math.abs(this.minValue - position);
        prop = closerToMax || position > this.maxValue ? "maxValue" : "minValue";
      }
    }
    this.lastDragPropValue = this[prop];
    this.dragStart(prop);
    const isThumbActive = this.el.shadowRoot.querySelector(".thumb:active");
    if (!isThumbActive) {
      this.setValue(prop, this.clamp(position, prop));
    }
  }
  handleTouchStart(event) {
    // needed to prevent extra click at the end of a handle drag
    event.preventDefault();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    const handle = this.minHandle ? this.minHandle : this.maxHandle;
    handle.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  setValueFromMinMax() {
    const { minValue, maxValue } = this;
    if (typeof minValue === "number" && typeof maxValue === "number") {
      this.value = [minValue, maxValue];
    }
  }
  setMinMaxFromValue() {
    const { value } = this;
    if (isRange(value)) {
      this.minValue = value[0];
      this.maxValue = value[1];
    }
  }
  onLabelClick() {
    this.setFocus();
  }
  shouldMirror() {
    return this.mirrored && !this.hasHistogram;
  }
  shouldUseMinValue() {
    if (!isRange(this.value)) {
      return false;
    }
    return ((this.hasHistogram && this.maxValue === 0) || (!this.hasHistogram && this.minValue === 0));
  }
  generateTickValues() {
    const ticks = [];
    let current = this.min;
    while (this.ticks && current < this.max + this.ticks) {
      ticks.push(Math.min(current, this.max));
      current = current + this.ticks;
    }
    return ticks;
  }
  dragStart(prop) {
    this.dragProp = prop;
    this.lastDragProp = this.dragProp;
    this.activeProp = prop;
    document.addEventListener("pointermove", this.dragUpdate);
    document.addEventListener("pointerup", this.dragEnd);
    document.addEventListener("pointercancel", this.dragEnd);
  }
  focusActiveHandle(valueX) {
    switch (this.dragProp) {
      case "minValue":
        this.minHandle.focus();
        break;
      case "maxValue":
        this.maxHandle.focus();
        break;
      case "minMaxValue":
        this.getClosestHandle(valueX).focus();
        break;
    }
  }
  emitInput() {
    this.calciteSliderInput.emit();
    this.calciteSliderUpdate.emit();
  }
  emitChange() {
    this.calciteSliderChange.emit();
  }
  removeDragListeners() {
    document.removeEventListener("pointermove", this.dragUpdate);
    document.removeEventListener("pointerup", this.dragEnd);
    document.removeEventListener("pointercancel", this.dragEnd);
  }
  /**
   * Set the prop value if changed at the component level
   * @param valueProp
   * @param value
   */
  setValue(valueProp, value) {
    const oldValue = this[valueProp];
    const valueChanged = oldValue !== value;
    if (!valueChanged) {
      return;
    }
    this[valueProp] = value;
    const dragging = this.dragProp;
    if (!dragging) {
      this.emitChange();
    }
    this.emitInput();
  }
  /**
   * If number is outside range, constrain to min or max
   * @internal
   */
  clamp(value, prop) {
    value = clamp(value, this.min, this.max);
    // ensure that maxValue and minValue don't swap positions
    if (prop === "maxValue") {
      value = Math.max(value, this.minValue);
    }
    if (prop === "minValue") {
      value = Math.min(value, this.maxValue);
    }
    return value;
  }
  /**
   * Translate a pixel position to value along the range
   * @internal
   */
  translate(x) {
    const range = this.max - this.min;
    const { left, width } = this.trackEl.getBoundingClientRect();
    const percent = (x - left) / width;
    const mirror = this.shouldMirror();
    const clampedValue = this.clamp(this.min + range * (mirror ? 1 - percent : percent));
    let value = Number(clampedValue.toFixed(decimalPlaces(this.step)));
    if (this.snap && this.step) {
      value = this.getClosestStep(value);
    }
    return value;
  }
  /**
   * Get closest allowed value along stepped values
   * @internal
   */
  getClosestStep(num) {
    num = Number(this.clamp(num).toFixed(decimalPlaces(this.step)));
    if (this.step) {
      const step = Math.round(num / this.step) * this.step;
      num = Number(this.clamp(step).toFixed(decimalPlaces(this.step)));
    }
    return num;
  }
  getClosestHandle(valueX) {
    return this.getDistanceX(this.maxHandle, valueX) > this.getDistanceX(this.minHandle, valueX)
      ? this.minHandle
      : this.maxHandle;
  }
  getDistanceX(el, valueX) {
    return Math.abs(el.getBoundingClientRect().left - valueX);
  }
  getFontSizeForElement(element) {
    return Number(window.getComputedStyle(element).getPropertyValue("font-size").match(/\d+/)[0]);
  }
  /**
   * Get position of value along range as fractional value
   * @return {number} number in the unit interval [0,1]
   * @internal
   */
  getUnitInterval(num) {
    num = this.clamp(num);
    const range = this.max - this.min;
    return (num - this.min) / range;
  }
  adjustHostObscuredHandleLabel(name) {
    const label = this.el.shadowRoot.querySelector(`.handle__label--${name}`);
    const labelStatic = this.el.shadowRoot.querySelector(`.handle__label--${name}.static`);
    const labelTransformed = this.el.shadowRoot.querySelector(`.handle__label--${name}.transformed`);
    const labelStaticBounds = labelStatic.getBoundingClientRect();
    const labelStaticOffset = this.getHostOffset(labelStaticBounds.left, labelStaticBounds.right);
    label.style.transform = `translateX(${labelStaticOffset}px)`;
    labelTransformed.style.transform = `translateX(${labelStaticOffset}px)`;
  }
  hyphenateCollidingRangeHandleLabels() {
    const { shadowRoot } = this.el;
    const mirror = this.shouldMirror();
    const leftModifier = mirror ? "value" : "minValue";
    const rightModifier = mirror ? "minValue" : "value";
    const leftValueLabel = shadowRoot.querySelector(`.handle__label--${leftModifier}`);
    const leftValueLabelStatic = shadowRoot.querySelector(`.handle__label--${leftModifier}.static`);
    const leftValueLabelTransformed = shadowRoot.querySelector(`.handle__label--${leftModifier}.transformed`);
    const leftValueLabelStaticHostOffset = this.getHostOffset(leftValueLabelStatic.getBoundingClientRect().left, leftValueLabelStatic.getBoundingClientRect().right);
    const rightValueLabel = shadowRoot.querySelector(`.handle__label--${rightModifier}`);
    const rightValueLabelStatic = shadowRoot.querySelector(`.handle__label--${rightModifier}.static`);
    const rightValueLabelTransformed = shadowRoot.querySelector(`.handle__label--${rightModifier}.transformed`);
    const rightValueLabelStaticHostOffset = this.getHostOffset(rightValueLabelStatic.getBoundingClientRect().left, rightValueLabelStatic.getBoundingClientRect().right);
    const labelFontSize = this.getFontSizeForElement(leftValueLabel);
    const labelTransformedOverlap = this.getRangeLabelOverlap(leftValueLabelTransformed, rightValueLabelTransformed);
    const hyphenLabel = leftValueLabel;
    const labelOffset = labelFontSize / 2;
    if (labelTransformedOverlap > 0) {
      hyphenLabel.classList.add("hyphen", "hyphen--wrap");
      if (rightValueLabelStaticHostOffset === 0 && leftValueLabelStaticHostOffset === 0) {
        // Neither handle overlaps the host boundary
        let leftValueLabelTranslate = labelTransformedOverlap / 2 - labelOffset;
        leftValueLabelTranslate =
          Math.sign(leftValueLabelTranslate) === -1
            ? Math.abs(leftValueLabelTranslate)
            : -leftValueLabelTranslate;
        const leftValueLabelTransformedHostOffset = this.getHostOffset(leftValueLabelTransformed.getBoundingClientRect().left +
          leftValueLabelTranslate -
          labelOffset, leftValueLabelTransformed.getBoundingClientRect().right +
          leftValueLabelTranslate -
          labelOffset);
        let rightValueLabelTranslate = labelTransformedOverlap / 2;
        const rightValueLabelTransformedHostOffset = this.getHostOffset(rightValueLabelTransformed.getBoundingClientRect().left + rightValueLabelTranslate, rightValueLabelTransformed.getBoundingClientRect().right + rightValueLabelTranslate);
        if (leftValueLabelTransformedHostOffset !== 0) {
          leftValueLabelTranslate += leftValueLabelTransformedHostOffset;
          rightValueLabelTranslate += leftValueLabelTransformedHostOffset;
        }
        if (rightValueLabelTransformedHostOffset !== 0) {
          leftValueLabelTranslate += rightValueLabelTransformedHostOffset;
          rightValueLabelTranslate += rightValueLabelTransformedHostOffset;
        }
        leftValueLabel.style.transform = `translateX(${leftValueLabelTranslate}px)`;
        leftValueLabelTransformed.style.transform = `translateX(${leftValueLabelTranslate - labelOffset}px)`;
        rightValueLabel.style.transform = `translateX(${rightValueLabelTranslate}px)`;
        rightValueLabelTransformed.style.transform = `translateX(${rightValueLabelTranslate}px)`;
      }
      else if (leftValueLabelStaticHostOffset > 0 || rightValueLabelStaticHostOffset > 0) {
        // labels overlap host boundary on the left side
        leftValueLabel.style.transform = `translateX(${leftValueLabelStaticHostOffset + labelOffset}px)`;
        rightValueLabel.style.transform = `translateX(${labelTransformedOverlap + rightValueLabelStaticHostOffset}px)`;
        rightValueLabelTransformed.style.transform = `translateX(${labelTransformedOverlap + rightValueLabelStaticHostOffset}px)`;
      }
      else if (leftValueLabelStaticHostOffset < 0 || rightValueLabelStaticHostOffset < 0) {
        // labels overlap host boundary on the right side
        let leftValueLabelTranslate = Math.abs(leftValueLabelStaticHostOffset) + labelTransformedOverlap - labelOffset;
        leftValueLabelTranslate =
          Math.sign(leftValueLabelTranslate) === -1
            ? Math.abs(leftValueLabelTranslate)
            : -leftValueLabelTranslate;
        leftValueLabel.style.transform = `translateX(${leftValueLabelTranslate}px)`;
        leftValueLabelTransformed.style.transform = `translateX(${leftValueLabelTranslate - labelOffset}px)`;
      }
    }
    else {
      hyphenLabel.classList.remove("hyphen", "hyphen--wrap");
      leftValueLabel.style.transform = `translateX(${leftValueLabelStaticHostOffset}px)`;
      leftValueLabelTransformed.style.transform = `translateX(${leftValueLabelStaticHostOffset}px)`;
      rightValueLabel.style.transform = `translateX(${rightValueLabelStaticHostOffset}px)`;
      rightValueLabelTransformed.style.transform = `translateX(${rightValueLabelStaticHostOffset}px)`;
    }
  }
  /**
   * Hides bounding tick labels that are obscured by either handle.
   */
  hideObscuredBoundingTickLabels() {
    const valueIsRange = isRange(this.value);
    if (!this.hasHistogram && !valueIsRange && !this.labelHandles && !this.precise) {
      return;
    }
    if (!this.hasHistogram && !valueIsRange && this.labelHandles && !this.precise) {
      return;
    }
    if (!this.hasHistogram && !valueIsRange && !this.labelHandles && this.precise) {
      return;
    }
    if (!this.hasHistogram && !valueIsRange && this.labelHandles && this.precise) {
      return;
    }
    if (!this.hasHistogram && valueIsRange && !this.precise) {
      return;
    }
    if (this.hasHistogram && !this.precise && !this.labelHandles) {
      return;
    }
    const minHandle = this.el.shadowRoot.querySelector(".thumb--minValue");
    const maxHandle = this.el.shadowRoot.querySelector(".thumb--value");
    const minTickLabel = this.el.shadowRoot.querySelector(".tick__label--min");
    const maxTickLabel = this.el.shadowRoot.querySelector(".tick__label--max");
    if (!minHandle && maxHandle && minTickLabel && maxTickLabel) {
      minTickLabel.style.opacity = this.isMinTickLabelObscured(minTickLabel, maxHandle) ? "0" : "1";
      maxTickLabel.style.opacity = this.isMaxTickLabelObscured(maxTickLabel, maxHandle) ? "0" : "1";
    }
    if (minHandle && maxHandle && minTickLabel && maxTickLabel) {
      minTickLabel.style.opacity =
        this.isMinTickLabelObscured(minTickLabel, minHandle) ||
          this.isMinTickLabelObscured(minTickLabel, maxHandle)
          ? "0"
          : "1";
      maxTickLabel.style.opacity =
        this.isMaxTickLabelObscured(maxTickLabel, minHandle) ||
          (this.isMaxTickLabelObscured(maxTickLabel, maxHandle) && this.hasHistogram)
          ? "0"
          : "1";
    }
  }
  /**
   * Returns an integer representing the number of pixels to offset on the left or right side based on desired position behavior.
   * @internal
   */
  getHostOffset(leftBounds, rightBounds) {
    const hostBounds = this.el.getBoundingClientRect();
    const buffer = 7;
    if (leftBounds + buffer < hostBounds.left) {
      return hostBounds.left - leftBounds - buffer;
    }
    if (rightBounds - buffer > hostBounds.right) {
      return -(rightBounds - hostBounds.right) + buffer;
    }
    return 0;
  }
  /**
   * Returns an integer representing the number of pixels that the two given span elements are overlapping, taking into account
   * a space in between the two spans equal to the font-size set on them to account for the space needed to render a hyphen.
   * @param leftLabel
   * @param rightLabel
   */
  getRangeLabelOverlap(leftLabel, rightLabel) {
    const leftLabelBounds = leftLabel.getBoundingClientRect();
    const rightLabelBounds = rightLabel.getBoundingClientRect();
    const leftLabelFontSize = this.getFontSizeForElement(leftLabel);
    const rangeLabelOverlap = leftLabelBounds.right + leftLabelFontSize - rightLabelBounds.left;
    return Math.max(rangeLabelOverlap, 0);
  }
  /**
   * Returns a boolean value representing if the minLabel span element is obscured (being overlapped) by the given handle div element.
   * @param minLabel
   * @param handle
   */
  isMinTickLabelObscured(minLabel, handle) {
    const minLabelBounds = minLabel.getBoundingClientRect();
    const handleBounds = handle.getBoundingClientRect();
    return intersects(minLabelBounds, handleBounds);
  }
  /**
   * Returns a boolean value representing if the maxLabel span element is obscured (being overlapped) by the given handle div element.
   * @param maxLabel
   * @param handle
   */
  isMaxTickLabelObscured(maxLabel, handle) {
    const maxLabelBounds = maxLabel.getBoundingClientRect();
    const handleBounds = handle.getBoundingClientRect();
    return intersects(maxLabelBounds, handleBounds);
  }
  get el() { return this; }
  static get watchers() { return {
    "histogram": ["histogramWatcher"],
    "value": ["valueHandler"],
    "minValue": ["minMaxValueHandler"],
    "maxValue": ["minMaxValueHandler"]
  }; }
  static get style() { return sliderCss; }
}, [1, "calcite-slider", {
    "disabled": [516],
    "hasHistogram": [1540, "has-histogram"],
    "histogram": [16],
    "histogramStops": [16],
    "labelHandles": [516, "label-handles"],
    "labelTicks": [516, "label-ticks"],
    "max": [514],
    "maxLabel": [1, "max-label"],
    "maxValue": [1026, "max-value"],
    "min": [514],
    "minLabel": [1, "min-label"],
    "minValue": [1026, "min-value"],
    "mirrored": [516],
    "name": [513],
    "pageStep": [2, "page-step"],
    "precise": [4],
    "required": [516],
    "snap": [4],
    "step": [2],
    "ticks": [2],
    "value": [1538],
    "scale": [1],
    "activeProp": [32],
    "minMaxValueRange": [32],
    "minValueDragRange": [32],
    "maxValueDragRange": [32],
    "tickValues": [32],
    "setFocus": [64]
  }, [[0, "keydown", "keyDownHandler"], [0, "click", "clickHandler"], [1, "pointerdown", "pointerDownHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-slider", "calcite-graph"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-slider":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Slider);
      }
      break;
    case "calcite-graph":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteSlider = Slider;
const defineCustomElement = defineCustomElement$1;

export { CalciteSlider, defineCustomElement };
