/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-98559b14.js');
const resources = require('./resources-4a1fb311.js');
const label = require('./label-c09f7403.js');
const form = require('./form-6bfb0719.js');
const popper = require('./popper-66b55be9.js');
const interactive = require('./interactive-9760231e.js');
require('./locale-91604756.js');
require('./number-d3ea17c4.js');
require('./dom-be217a15.js');
require('./guid-21b03b4f.js');

const inputDatePickerCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:inline-block;width:100%;overflow:visible;vertical-align:top;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.calendar-picker-wrapper{position:static;width:100%;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.input-wrapper{position:relative}:host([range]) .input-container{display:-ms-flexbox;display:flex}:host([range]) .input-wrapper{-ms-flex:1 1 auto;flex:1 1 auto}:host([range]) .horizontal-arrow-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-width:1px;border-left-width:0px;border-right-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);padding-top:0px;padding-bottom:0px;padding-left:0.25rem;padding-right:0.25rem}:host([range][layout=vertical]) .input-wrapper{width:100%}:host([range][layout=vertical]) .input-container{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start}:host([range][layout=vertical]) .calendar-picker-wrapper--end{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}:host([range][layout=vertical]) .vertical-arrow-container{top:1.5rem;position:absolute;left:0px;z-index:10;margin-left:1px;margin-right:1px;background-color:var(--calcite-ui-foreground-1);padding-left:0.625rem;padding-right:0.625rem}:host([scale=s][range]:not([layout=vertical])) .calendar-picker-wrapper{width:216px}:host([scale=m][range]:not([layout=vertical])) .calendar-picker-wrapper{width:286px}:host([scale=l][range]:not([layout=vertical])) .calendar-picker-wrapper{width:398px}.menu-container{display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0);visibility:hidden;pointer-events:none}.menu-container .calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}.menu-container[data-popper-placement^=bottom] .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.menu-container[data-popper-placement^=top] .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}.menu-container[data-popper-placement^=left] .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}.menu-container[data-popper-placement^=right] .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.menu-container[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}:host([active]) .menu-container{pointer-events:initial;visibility:visible}.menu-container--active .menu-container .calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}.menu-container--active .menu-container[data-popper-placement^=bottom] .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.menu-container--active .menu-container[data-popper-placement^=top] .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}.menu-container--active .menu-container[data-popper-placement^=left] .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}.menu-container--active .menu-container[data-popper-placement^=right] .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.menu-container--active .menu-container[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.input .calcite-input__wrapper{margin-top:0px}:host([range][layout=vertical][scale=m]) .vertical-arrow-container{top:1.5rem;padding-left:0.75rem}:host([range][layout=vertical][scale=m]) .vertical-arrow-container calcite-icon{height:0.75rem;width:0.75rem;min-width:0px}:host([range][layout=vertical][scale=l]) .vertical-arrow-container{top:2.25rem;padding-left:0.875rem;padding-right:0.875rem}:host([range][layout=vertical][active]) .vertical-arrow-container{display:none}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const InputDatePicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteDatePickerChange = index.createEvent(this, "calciteDatePickerChange", 7);
    this.calciteDatePickerRangeChange = index.createEvent(this, "calciteDatePickerRangeChange", 7);
    this.calciteInputDatePickerChange = index.createEvent(this, "calciteInputDatePickerChange", 7);
    this.calciteInputDatePickerOpen = index.createEvent(this, "calciteInputDatePickerOpen", 7);
    this.calciteInputDatePickerClose = index.createEvent(this, "calciteInputDatePickerClose", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /**
     * When false, the component won't be interactive.
     */
    this.disabled = false;
    /** Expand or collapse when calendar does not have input */
    this.active = false;
    /** Localized string for "previous month" (used for aria label)
     * @default "Previous month"
     */
    this.intlPrevMonth = resources.TEXT.prevMonth;
    /** Localized string for "next month" (used for aria label)
     * @default "Next month"
     */
    this.intlNextMonth = resources.TEXT.nextMonth;
    /** Localized string for "year" (used for aria label)
     * @default "Year"
     */
    this.intlYear = resources.TEXT.year;
    /** BCP 47 language tag for desired language and country format */
    this.locale = document.documentElement.lang || "en";
    /** specify the scale of the date picker */
    this.scale = "m";
    /**
     * Determines where the date-picker component will be positioned relative to the input.
     * @default "bottom-leading"
     */
    this.placement = popper.defaultMenuPlacement;
    /** Range mode activation */
    this.range = false;
    /**
     * When true, makes the component required for form-submission.
     *
     * @internal
     */
    this.required = false;
    /** Describes the type of positioning to use for the overlaid content. If your element is in a fixed container, use the 'fixed' value. */
    this.overlayPositioning = "absolute";
    /** Disables the default behaviour on the third click of narrowing or extending the range and instead starts a new range. */
    this.proximitySelectionDisabled = false;
    /** Layout */
    this.layout = "horizontal";
    this.focusedInput = "start";
    this.activeTransitionProp = "opacity";
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.setFilteredPlacements = () => {
      const { el, flipPlacements } = this;
      this.filteredFlipPlacements = flipPlacements
        ? popper.filterComputedPlacements(flipPlacements, el)
        : null;
    };
    this.transitionEnd = (event) => {
      if (event.propertyName === this.activeTransitionProp) {
        this.active
          ? this.calciteInputDatePickerOpen.emit()
          : this.calciteInputDatePickerClose.emit();
      }
    };
    this.setStartInput = (el) => {
      this.startInput = el;
    };
    this.setEndInput = (el) => {
      this.endInput = el;
    };
    this.deactivate = () => {
      this.active = false;
    };
    this.keyUpHandler = (e) => {
      if (e.key === "Escape") {
        this.active = false;
      }
    };
    this.inputBlur = (e) => {
      this.blur(e.detail);
    };
    this.startInputFocus = () => {
      this.active = true;
      this.focusedInput = "start";
    };
    this.endInputFocus = () => {
      this.active = true;
      this.focusedInput = "end";
    };
    this.inputInput = (e) => {
      this.input(e.detail.value);
    };
    this.setMenuEl = (el) => {
      if (el) {
        this.menuEl = el;
        this.createPopper();
      }
    };
    this.setStartWrapper = (el) => {
      this.startWrapper = el;
      this.setReferenceEl();
    };
    this.setEndWrapper = (el) => {
      this.endWrapper = el;
      this.setReferenceEl();
    };
    /**
     * Event handler for when the selected date changes
     */
    this.handleDateChange = (event) => {
      if (this.range) {
        return;
      }
      this.value = resources.dateToISO(event.detail);
    };
    this.handleDateRangeChange = (event) => {
      var _a, _b;
      if (!this.range || !event.detail) {
        return;
      }
      const { startDate, endDate } = event.detail;
      this.start = resources.dateToISO(startDate);
      this.end = resources.dateToISO(endDate);
      this.value = [this.start, this.end];
      if (this.shouldFocusRangeEnd()) {
        (_a = this.endInput) === null || _a === void 0 ? void 0 : _a.setFocus();
      }
      else if (this.shouldFocusRangeStart()) {
        (_b = this.startInput) === null || _b === void 0 ? void 0 : _b.setFocus();
      }
    };
  }
  handleDisabledChange(value) {
    if (!value) {
      this.active = false;
    }
  }
  valueHandler(value) {
    if (Array.isArray(value)) {
      this.valueAsDate = value.map((v) => resources.dateFromISO(v));
      this.start = value[0];
      this.end = value[1];
    }
    else if (value) {
      this.valueAsDate = resources.dateFromISO(value);
      this.start = "";
      this.end = "";
    }
    else {
      this.valueAsDate = undefined;
      this.start = undefined;
      this.end = undefined;
    }
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements();
  }
  onMinChanged(min) {
    this.minAsDate = resources.dateFromISO(min);
  }
  onMaxChanged(max) {
    this.maxAsDate = resources.dateFromISO(max);
  }
  activeHandler() {
    if (!this.disabled) {
      this.reposition();
      return;
    }
    this.active = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  handleDateOrRangeChange() {
    this.calciteInputDatePickerChange.emit();
  }
  calciteDaySelectHandler() {
    if (this.shouldFocusRangeStart() || this.shouldFocusRangeEnd()) {
      return;
    }
    this.active = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Updates the position of the component. */
  async setFocus() {
    var _a;
    (_a = this.startInput) === null || _a === void 0 ? void 0 : _a.setFocus();
  }
  /** Updates the position of the component. */
  async reposition() {
    const { placement, popper: popper$1, menuEl } = this;
    const modifiers = this.getModifiers();
    popper$1
      ? await popper.updatePopper({
        el: menuEl,
        modifiers,
        placement,
        popper: popper$1
      })
      : this.createPopper();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    if (Array.isArray(this.value)) {
      this.valueAsDate = this.value.map((v) => resources.dateFromISO(v));
      this.start = this.value[0];
      this.end = this.value[1];
    }
    else if (this.value) {
      this.valueAsDate = resources.dateFromISO(this.value);
      this.start = "";
      this.end = "";
    }
    if (this.start) {
      this.startAsDate = resources.dateFromISO(this.start);
    }
    if (this.end) {
      this.endAsDate = resources.dateFromISO(this.end);
    }
    if (this.min) {
      this.minAsDate = resources.dateFromISO(this.min);
    }
    if (this.max) {
      this.maxAsDate = resources.dateFromISO(this.max);
    }
    this.createPopper();
    label.connectLabel(this);
    form.connectForm(this);
    this.setFilteredPlacements();
  }
  async componentWillLoad() {
    await this.loadLocaleData();
    this.onMinChanged(this.min);
    this.onMaxChanged(this.max);
  }
  disconnectedCallback() {
    this.destroyPopper();
    label.disconnectLabel(this);
    form.disconnectForm(this);
  }
  componentDidRender() {
    interactive.updateHostInteraction(this);
  }
  render() {
    var _a, _b;
    const { disabled } = this;
    const date = resources.dateFromRange(this.range ? this.startAsDate : this.valueAsDate, this.minAsDate, this.maxAsDate);
    const endDate = this.range
      ? resources.dateFromRange(this.endAsDate, this.minAsDate, this.maxAsDate)
      : null;
    const formattedEndDate = endDate ? endDate.toLocaleDateString(this.locale) : "";
    const formattedDate = date ? date.toLocaleDateString(this.locale) : "";
    return (index.h(index.Host, { onBlur: this.deactivate, onKeyUp: this.keyUpHandler, role: "application" }, this.localeData && (index.h("div", { "aria-expanded": this.active.toString(), class: "input-container", role: "application" }, index.h("div", { class: "input-wrapper", ref: this.setStartWrapper }, index.h("calcite-input", { class: `input ${this.layout === "vertical" && this.range ? `no-bottom-border` : ``}`, disabled: disabled, icon: "calendar", label: label.getLabelText(this), "number-button-type": "none", onCalciteInputBlur: this.inputBlur, onCalciteInputFocus: this.startInputFocus, onCalciteInputInput: this.inputInput, placeholder: (_a = this.localeData) === null || _a === void 0 ? void 0 : _a.placeholder, ref: this.setStartInput, scale: this.scale, type: "text", value: formattedDate })), index.h("div", { "aria-hidden": (!this.active).toString(), class: {
        "menu-container": true,
        "menu-container--active": this.active
      }, ref: this.setMenuEl }, index.h("div", { class: {
        ["calendar-picker-wrapper"]: true,
        ["calendar-picker-wrapper--end"]: this.focusedInput === "end",
        [popper.CSS.animation]: true,
        [popper.CSS.animationActive]: this.active
      }, onTransitionEnd: this.transitionEnd }, index.h("calcite-date-picker", { activeRange: this.focusedInput, endAsDate: this.endAsDate, headingLevel: this.headingLevel, intlNextMonth: this.intlNextMonth, intlPrevMonth: this.intlPrevMonth, intlYear: this.intlYear, locale: this.locale, max: this.max, maxAsDate: this.maxAsDate, min: this.min, minAsDate: this.minAsDate, onCalciteDatePickerChange: this.handleDateChange, onCalciteDatePickerRangeChange: this.handleDateRangeChange, proximitySelectionDisabled: this.proximitySelectionDisabled, range: this.range, scale: this.scale, startAsDate: this.startAsDate, tabIndex: 0, valueAsDate: this.valueAsDate }))), this.range && this.layout === "horizontal" && (index.h("div", { class: "horizontal-arrow-container" }, index.h("calcite-icon", { flipRtl: true, icon: "arrow-right", scale: "s" }))), this.range && this.layout === "vertical" && this.scale !== "s" && (index.h("div", { class: "vertical-arrow-container" }, index.h("calcite-icon", { icon: "arrow-down", scale: "s" }))), this.range && (index.h("div", { class: "input-wrapper", ref: this.setEndWrapper }, index.h("calcite-input", { class: {
        input: true,
        "border-top-color-one": this.layout === "vertical" && this.range
      }, disabled: disabled, icon: "calendar", "number-button-type": "none", onCalciteInputBlur: this.inputBlur, onCalciteInputFocus: this.endInputFocus, onCalciteInputInput: this.inputInput, placeholder: (_b = this.localeData) === null || _b === void 0 ? void 0 : _b.placeholder, ref: this.setEndInput, scale: this.scale, type: "text", value: formattedEndDate }))))), index.h(form.HiddenFormInputSlot, { component: this })));
  }
  setReferenceEl() {
    const { focusedInput, layout, endWrapper, startWrapper } = this;
    this.referenceEl =
      focusedInput === "end" || layout === "vertical"
        ? endWrapper || startWrapper
        : startWrapper || endWrapper;
    this.createPopper();
  }
  onLabelClick() {
    this.setFocus();
  }
  getModifiers() {
    const flipModifier = {
      name: "flip",
      enabled: true
    };
    flipModifier.options = {
      fallbackPlacements: this.filteredFlipPlacements || popper.popperMenuComputedPlacements
    };
    const eventListenerModifier = {
      name: "eventListeners",
      enabled: this.active
    };
    return [flipModifier, eventListenerModifier];
  }
  createPopper() {
    this.destroyPopper();
    const { menuEl, placement, referenceEl, overlayPositioning } = this;
    if (!menuEl || !referenceEl) {
      return;
    }
    const modifiers = this.getModifiers();
    this.popper = popper.createPopper({
      el: menuEl,
      modifiers,
      overlayPositioning,
      placement,
      referenceEl
    });
  }
  destroyPopper() {
    const { popper } = this;
    if (popper) {
      popper.destroy();
    }
    this.popper = null;
  }
  startWatcher(start) {
    this.startAsDate = resources.dateFromISO(start);
  }
  endWatcher(end) {
    this.endAsDate = resources.dateFromISO(end);
  }
  async loadLocaleData() {
    const { locale } = this;
    this.localeData = await resources.getLocaleData(locale);
  }
  clearCurrentValue() {
    if (!this.range) {
      this.value = "";
      return;
    }
    const { focusedInput } = this;
    if (focusedInput === "start") {
      this.value = Array.isArray(this.value) ? ["", this.value[1] || ""] : [""];
      this.start = undefined;
    }
    else if (focusedInput === "end") {
      this.value = Array.isArray(this.value) ? [this.value[0] || "", ""] : ["", ""];
      this.end = undefined;
    }
  }
  /**
   * If inputted string is a valid date, update value/active
   */
  input(value) {
    const date = this.getDateFromInput(value);
    if (!date) {
      this.clearCurrentValue();
      return;
    }
    if (!this.range) {
      this.value = resources.dateToISO(date);
      this.calciteDatePickerChange.emit(date);
      return;
    }
    const { focusedInput } = this;
    if (focusedInput === "start") {
      if (!this.startAsDate || !resources.sameDate(date, this.startAsDate)) {
        const startDateISO = resources.dateToISO(date);
        this.value = Array.isArray(this.value)
          ? [startDateISO, this.value[1] || ""]
          : [startDateISO];
        this.start = startDateISO;
        this.calciteDatePickerRangeChange.emit({
          startDate: date,
          endDate: this.endAsDate
        });
      }
    }
    else if (focusedInput === "end") {
      if (!this.endAsDate || !resources.sameDate(date, this.endAsDate)) {
        const endDateISO = resources.dateToISO(date);
        this.value = Array.isArray(this.value)
          ? [this.value[0] || "", endDateISO]
          : ["", endDateISO];
        this.end = endDateISO;
        this.calciteDatePickerRangeChange.emit({
          startDate: this.startAsDate,
          endDate: date
        });
      }
    }
  }
  /**
   * Clean up invalid date from input on blur
   */
  blur(target) {
    const { locale, focusedInput, endAsDate, range, startAsDate, valueAsDate } = this;
    const date = this.getDateFromInput(target.value);
    if (!date) {
      if (!range && valueAsDate) {
        target.value = Array.isArray(valueAsDate)
          ? valueAsDate[focusedInput === "end" ? 1 : 0].toLocaleDateString(locale)
          : valueAsDate.toLocaleDateString(locale);
      }
      else if (focusedInput === "start" && startAsDate) {
        target.value = startAsDate.toLocaleDateString(locale);
      }
      else if (focusedInput === "end" && endAsDate) {
        target.value = endAsDate.toLocaleDateString(locale);
      }
    }
  }
  shouldFocusRangeStart() {
    return !!(this.endAsDate &&
      !this.startAsDate &&
      this.focusedInput === "end" &&
      this.startInput);
  }
  shouldFocusRangeEnd() {
    return !!(this.startAsDate &&
      !this.endAsDate &&
      this.focusedInput === "start" &&
      this.endInput);
  }
  /**
   * Find a date from input string
   * return false if date is invalid, or out of range
   */
  getDateFromInput(value) {
    if (!this.localeData) {
      return false;
    }
    const { separator } = this.localeData;
    const { day, month, year } = resources.parseDateString(value, this.localeData);
    const validDay = day > 0;
    const validMonth = month > -1;
    const date = new Date(year, month, day);
    date.setFullYear(year);
    const validDate = !isNaN(date.getTime());
    const validLength = value.split(separator).filter((c) => c).length > 2;
    const validYear = year.toString().length > 0;
    if (validDay &&
      validMonth &&
      validDate &&
      validLength &&
      validYear &&
      resources.inRange(date, this.min, this.max)) {
      return date;
    }
    return false;
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "disabled": ["handleDisabledChange"],
    "value": ["valueHandler"],
    "flipPlacements": ["flipPlacementsHandler"],
    "min": ["onMinChanged"],
    "max": ["onMaxChanged"],
    "active": ["activeHandler"],
    "layout": ["setReferenceEl"],
    "focusedInput": ["setReferenceEl"],
    "start": ["startWatcher"],
    "end": ["endWatcher"],
    "locale": ["loadLocaleData"]
  }; }
};
InputDatePicker.style = inputDatePickerCss;

exports.calcite_input_date_picker = InputDatePicker;
