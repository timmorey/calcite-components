/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { l as localizeNumber, c as getOrder, b as dateFromRange, n as nextMonth, p as prevMonth, e as parseNumber } from './date.js';
import { H as Heading } from './Heading.js';
import { d as defineCustomElement$1 } from './icon.js';

const datePickerMonthHeaderCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}.header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding-top:0px;padding-bottom:0px;padding-left:0.25rem;padding-right:0.25rem}:host([scale=s]) .text{margin-top:0.5rem;margin-bottom:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s]) .chevron{height:2.25rem}:host([scale=m]) .text{margin-top:0.75rem;margin-bottom:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m]) .chevron{height:3rem}:host([scale=l]) .text{margin-top:1rem;margin-bottom:1rem;font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .chevron{height:3.5rem}.chevron{margin-left:-0.25rem;margin-right:-0.25rem;-webkit-box-sizing:content-box;box-sizing:content-box;display:-ms-flexbox;display:flex;-ms-flex-positive:0;flex-grow:0;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-style:none;background-color:var(--calcite-ui-foreground-1);padding-left:0.25rem;padding-right:0.25rem;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;width:14.2857142857%}.chevron:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.chevron:hover,.chevron:focus{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}.chevron:active{background-color:var(--calcite-ui-foreground-3)}.chevron[aria-disabled=true]{pointer-events:none;opacity:0}.text{margin-top:auto;margin-bottom:auto;width:100%;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:center;line-height:1}.text-nreverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.month,.year,.suffix{margin-left:0.25rem;margin-right:0.25rem;margin-top:auto;margin-bottom:auto;display:inline-block;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-ui-text-1);font-size:inherit}.year{position:relative;width:3rem;border-style:none;background-color:transparent;text-align:center;font-family:inherit;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;z-index:2}.year:hover{-webkit-transition-duration:100ms;transition-duration:100ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-property:outline-color;transition-property:outline-color;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}.year:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.year--suffix{width:4rem;text-align:left}.year-wrap{position:relative}.suffix{position:absolute;top:0px;left:0px;width:4rem;white-space:nowrap;text-align:left}.suffix__invisible{visibility:hidden}";

const DatePickerMonthHeader = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteDatePickerSelect = createEvent(this, "calciteDatePickerSelect", 7);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Increment year on UP/DOWN keys
     */
    this.onYearKey = (e) => {
      const localizedYear = e.target.value;
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          this.setYear({ localizedYear, offset: -1 });
          break;
        case "ArrowUp":
          e.preventDefault();
          this.setYear({ localizedYear, offset: 1 });
          break;
      }
    };
    this.onYearChange = (event) => {
      this.setYear({ localizedYear: event.target.value });
    };
    this.onYearInput = (event) => {
      this.setYear({ localizedYear: event.target.value, commit: false });
    };
    this.prevMonthClick = (e) => {
      this.handleArrowClick(e, this.prevMonthDate);
    };
    this.prevMonthKeydown = (e) => {
      const key = e.key;
      if (key === " " || key === "Enter") {
        this.prevMonthClick(e);
      }
    };
    this.nextMonthClick = (e) => {
      this.handleArrowClick(e, this.nextMonthDate);
    };
    this.nextMonthKeydown = (e) => {
      const key = e.key;
      if (key === " " || key === "Enter") {
        this.nextMonthClick(e);
      }
    };
    /*
     * Update active month on clicks of left/right arrows
     */
    this.handleArrowClick = (e, date) => {
      e === null || e === void 0 ? void 0 : e.preventDefault();
      e.stopPropagation();
      this.calciteDatePickerSelect.emit(date);
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.setNextPrevMonthDates();
  }
  render() {
    return h("div", { class: "header" }, this.renderContent());
  }
  renderContent() {
    var _a;
    if (!this.activeDate || !this.localeData) {
      return null;
    }
    const activeMonth = this.activeDate.getMonth();
    const { months, unitOrder } = this.localeData;
    const localizedMonth = (months.wide || months.narrow || months.abbreviated)[activeMonth];
    const localizedYear = localizeNumber(this.activeDate.getFullYear(), this.localeData);
    const iconScale = this.scale === "l" ? "m" : "s";
    const order = getOrder(unitOrder);
    const reverse = order.indexOf("y") < order.indexOf("m");
    const suffix = (_a = this.localeData.year) === null || _a === void 0 ? void 0 : _a.suffix;
    return (h(Fragment, null, h("a", { "aria-disabled": (this.prevMonthDate.getMonth() === activeMonth).toString(), "aria-label": this.intlPrevMonth, class: "chevron", href: "#", onClick: this.prevMonthClick, onKeyDown: this.prevMonthKeydown, role: "button", tabindex: this.prevMonthDate.getMonth() === activeMonth ? -1 : 0 }, h("calcite-icon", { "flip-rtl": true, icon: "chevron-left", scale: iconScale })), h("div", { class: { text: true, "text--reverse": reverse } }, h(Heading, { class: "month", level: this.headingLevel }, localizedMonth), h("span", { class: "year-wrap" }, h("input", { "aria-label": this.intlYear, class: {
        year: true,
        "year--suffix": !!suffix
      }, inputmode: "numeric", maxlength: "4", minlength: "1", onChange: this.onYearChange, onInput: this.onYearInput, onKeyDown: this.onYearKey, pattern: "\\d*", ref: (el) => (this.yearInput = el), type: "text", value: localizedYear }), suffix && (h("span", { class: "suffix" }, h("span", { "aria-hidden": "true", class: "suffix__invisible" }, localizedYear), " " + suffix)))), h("a", { "aria-disabled": (this.nextMonthDate.getMonth() === activeMonth).toString(), "aria-label": this.intlNextMonth, class: "chevron", href: "#", onClick: this.nextMonthClick, onKeyDown: this.nextMonthKeydown, role: "button", tabindex: this.nextMonthDate.getMonth() === activeMonth ? -1 : 0 }, h("calcite-icon", { "flip-rtl": true, icon: "chevron-right", scale: iconScale }))));
  }
  setNextPrevMonthDates() {
    if (!this.activeDate) {
      return;
    }
    this.nextMonthDate = dateFromRange(nextMonth(this.activeDate), this.min, this.max);
    this.prevMonthDate = dateFromRange(prevMonth(this.activeDate), this.min, this.max);
  }
  getInRangeDate({ localizedYear, offset = 0 }) {
    const { min, max, activeDate, localeData } = this;
    const parsedYear = parseNumber(localizedYear, localeData);
    const length = parsedYear.toString().length;
    const year = isNaN(parsedYear) ? false : parsedYear + offset;
    const inRange = year && (!min || min.getFullYear() <= year) && (!max || max.getFullYear() >= year);
    // if you've supplied a year and it's in range
    if (year && inRange && length === localizedYear.length) {
      const nextDate = new Date(activeDate);
      nextDate.setFullYear(year);
      return dateFromRange(nextDate, min, max);
    }
  }
  /**
   * Parse localized year string from input,
   * set to active if in range
   */
  setYear({ localizedYear, commit = true, offset = 0 }) {
    const { yearInput, activeDate, localeData } = this;
    const inRangeDate = this.getInRangeDate({ localizedYear, offset });
    // if you've supplied a year and it's in range, update active date
    if (inRangeDate) {
      this.calciteDatePickerSelect.emit(inRangeDate);
    }
    if (commit) {
      yearInput.value = localizeNumber((inRangeDate || activeDate).getFullYear(), localeData);
    }
  }
  get el() { return this; }
  static get watchers() { return {
    "min": ["setNextPrevMonthDates"],
    "max": ["setNextPrevMonthDates"],
    "activeDate": ["setNextPrevMonthDates"]
  }; }
  static get style() { return datePickerMonthHeaderCss; }
}, [1, "calcite-date-picker-month-header", {
    "selectedDate": [16],
    "activeDate": [16],
    "headingLevel": [2, "heading-level"],
    "min": [16],
    "max": [16],
    "locale": [1],
    "intlPrevMonth": [1, "intl-prev-month"],
    "intlNextMonth": [1, "intl-next-month"],
    "intlYear": [1, "intl-year"],
    "scale": [513],
    "localeData": [16],
    "nextMonthDate": [32],
    "prevMonthDate": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-date-picker-month-header", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-date-picker-month-header":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DatePickerMonthHeader);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { DatePickerMonthHeader as D, defineCustomElement as d };
