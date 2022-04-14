/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, h, Prop, Element, Host, State, Listen, Watch, Method, Event, Build } from "@stencil/core";
import { getLocaleData } from "../date-picker/utils";
import { dateFromRange, inRange, dateFromISO, dateToISO, parseDateString, sameDate } from "../../utils/date";
import { TEXT } from "../date-picker/resources";
import { connectLabel, disconnectLabel, getLabelText } from "../../utils/label";
import { connectForm, disconnectForm, HiddenFormInputSlot } from "../../utils/form";
import { createPopper, updatePopper, CSS as PopperCSS, popperMenuComputedPlacements, defaultMenuPlacement, filterComputedPlacements } from "../../utils/popper";
import { updateHostInteraction } from "../../utils/interactive";
export class InputDatePicker {
  constructor() {
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
    this.intlPrevMonth = TEXT.prevMonth;
    /** Localized string for "next month" (used for aria label)
     * @default "Next month"
     */
    this.intlNextMonth = TEXT.nextMonth;
    /** Localized string for "year" (used for aria label)
     * @default "Year"
     */
    this.intlYear = TEXT.year;
    /** BCP 47 language tag for desired language and country format */
    this.locale = document.documentElement.lang || "en";
    /** specify the scale of the date picker */
    this.scale = "m";
    /**
     * Determines where the date-picker component will be positioned relative to the input.
     * @default "bottom-leading"
     */
    this.placement = defaultMenuPlacement;
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
        ? filterComputedPlacements(flipPlacements, el)
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
      this.value = dateToISO(event.detail);
    };
    this.handleDateRangeChange = (event) => {
      var _a, _b;
      if (!this.range || !event.detail) {
        return;
      }
      const { startDate, endDate } = event.detail;
      this.start = dateToISO(startDate);
      this.end = dateToISO(endDate);
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
      this.valueAsDate = value.map((v) => dateFromISO(v));
      this.start = value[0];
      this.end = value[1];
    }
    else if (value) {
      this.valueAsDate = dateFromISO(value);
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
    this.minAsDate = dateFromISO(min);
  }
  onMaxChanged(max) {
    this.maxAsDate = dateFromISO(max);
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
    const { placement, popper, menuEl } = this;
    const modifiers = this.getModifiers();
    popper
      ? await updatePopper({
        el: menuEl,
        modifiers,
        placement,
        popper
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
      this.valueAsDate = this.value.map((v) => dateFromISO(v));
      this.start = this.value[0];
      this.end = this.value[1];
    }
    else if (this.value) {
      this.valueAsDate = dateFromISO(this.value);
      this.start = "";
      this.end = "";
    }
    if (this.start) {
      this.startAsDate = dateFromISO(this.start);
    }
    if (this.end) {
      this.endAsDate = dateFromISO(this.end);
    }
    if (this.min) {
      this.minAsDate = dateFromISO(this.min);
    }
    if (this.max) {
      this.maxAsDate = dateFromISO(this.max);
    }
    this.createPopper();
    connectLabel(this);
    connectForm(this);
    this.setFilteredPlacements();
  }
  async componentWillLoad() {
    await this.loadLocaleData();
    this.onMinChanged(this.min);
    this.onMaxChanged(this.max);
  }
  disconnectedCallback() {
    this.destroyPopper();
    disconnectLabel(this);
    disconnectForm(this);
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  render() {
    var _a, _b;
    const { disabled } = this;
    const date = dateFromRange(this.range ? this.startAsDate : this.valueAsDate, this.minAsDate, this.maxAsDate);
    const endDate = this.range
      ? dateFromRange(this.endAsDate, this.minAsDate, this.maxAsDate)
      : null;
    const formattedEndDate = endDate ? endDate.toLocaleDateString(this.locale) : "";
    const formattedDate = date ? date.toLocaleDateString(this.locale) : "";
    return (h(Host, { onBlur: this.deactivate, onKeyUp: this.keyUpHandler, role: "application" },
      this.localeData && (h("div", { "aria-expanded": this.active.toString(), class: "input-container", role: "application" },
        h("div", { class: "input-wrapper", ref: this.setStartWrapper },
          h("calcite-input", { class: `input ${this.layout === "vertical" && this.range ? `no-bottom-border` : ``}`, disabled: disabled, icon: "calendar", label: getLabelText(this), "number-button-type": "none", onCalciteInputBlur: this.inputBlur, onCalciteInputFocus: this.startInputFocus, onCalciteInputInput: this.inputInput, placeholder: (_a = this.localeData) === null || _a === void 0 ? void 0 : _a.placeholder, ref: this.setStartInput, scale: this.scale, type: "text", value: formattedDate })),
        h("div", { "aria-hidden": (!this.active).toString(), class: {
            "menu-container": true,
            "menu-container--active": this.active
          }, ref: this.setMenuEl },
          h("div", { class: {
              ["calendar-picker-wrapper"]: true,
              ["calendar-picker-wrapper--end"]: this.focusedInput === "end",
              [PopperCSS.animation]: true,
              [PopperCSS.animationActive]: this.active
            }, onTransitionEnd: this.transitionEnd },
            h("calcite-date-picker", { activeRange: this.focusedInput, endAsDate: this.endAsDate, headingLevel: this.headingLevel, intlNextMonth: this.intlNextMonth, intlPrevMonth: this.intlPrevMonth, intlYear: this.intlYear, locale: this.locale, max: this.max, maxAsDate: this.maxAsDate, min: this.min, minAsDate: this.minAsDate, onCalciteDatePickerChange: this.handleDateChange, onCalciteDatePickerRangeChange: this.handleDateRangeChange, proximitySelectionDisabled: this.proximitySelectionDisabled, range: this.range, scale: this.scale, startAsDate: this.startAsDate, tabIndex: 0, valueAsDate: this.valueAsDate }))),
        this.range && this.layout === "horizontal" && (h("div", { class: "horizontal-arrow-container" },
          h("calcite-icon", { flipRtl: true, icon: "arrow-right", scale: "s" }))),
        this.range && this.layout === "vertical" && this.scale !== "s" && (h("div", { class: "vertical-arrow-container" },
          h("calcite-icon", { icon: "arrow-down", scale: "s" }))),
        this.range && (h("div", { class: "input-wrapper", ref: this.setEndWrapper },
          h("calcite-input", { class: {
              input: true,
              "border-top-color-one": this.layout === "vertical" && this.range
            }, disabled: disabled, icon: "calendar", "number-button-type": "none", onCalciteInputBlur: this.inputBlur, onCalciteInputFocus: this.endInputFocus, onCalciteInputInput: this.inputInput, placeholder: (_b = this.localeData) === null || _b === void 0 ? void 0 : _b.placeholder, ref: this.setEndInput, scale: this.scale, type: "text", value: formattedEndDate }))))),
      h(HiddenFormInputSlot, { component: this })));
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
      fallbackPlacements: this.filteredFlipPlacements || popperMenuComputedPlacements
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
    this.popper = createPopper({
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
    this.startAsDate = dateFromISO(start);
  }
  endWatcher(end) {
    this.endAsDate = dateFromISO(end);
  }
  async loadLocaleData() {
    if (!Build.isBrowser) {
      return;
    }
    const { locale } = this;
    this.localeData = await getLocaleData(locale);
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
      this.value = dateToISO(date);
      this.calciteDatePickerChange.emit(date);
      return;
    }
    const { focusedInput } = this;
    if (focusedInput === "start") {
      if (!this.startAsDate || !sameDate(date, this.startAsDate)) {
        const startDateISO = dateToISO(date);
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
      if (!this.endAsDate || !sameDate(date, this.endAsDate)) {
        const endDateISO = dateToISO(date);
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
    const { day, month, year } = parseDateString(value, this.localeData);
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
      inRange(date, this.min, this.max)) {
      return date;
    }
    return false;
  }
  static get is() { return "calcite-input-date-picker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["input-date-picker.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["input-date-picker.css"]
  }; }
  static get properties() { return {
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "When false, the component won't be interactive."
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "value": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string | string[]",
        "resolved": "string | string[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Selected date"
      },
      "attribute": "value",
      "reflect": false
    },
    "flipPlacements": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "ComputedPlacement[]",
        "resolved": "ComputedPlacement[]",
        "references": {
          "ComputedPlacement": {
            "location": "import",
            "path": "../../utils/popper"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Defines the available placements that can be used when a flip occurs."
      }
    },
    "headingLevel": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "HeadingLevel",
        "resolved": "1 | 2 | 3 | 4 | 5 | 6",
        "references": {
          "HeadingLevel": {
            "location": "import",
            "path": "../functional/Heading"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Number at which section headings should start for this component."
      },
      "attribute": "heading-level",
      "reflect": false
    },
    "valueAsDate": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "Date | Date[]",
        "resolved": "Date | Date[]",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Selected date as full date object"
      }
    },
    "startAsDate": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "use valueAsDate instead"
          }],
        "text": "Selected start date as full date object"
      }
    },
    "endAsDate": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "use valueAsDate instead"
          }],
        "text": "Selected end date as full date object"
      }
    },
    "minAsDate": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Earliest allowed date as full date object"
      }
    },
    "maxAsDate": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Latest allowed date as full date object"
      }
    },
    "min": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Earliest allowed date (\"yyyy-mm-dd\")"
      },
      "attribute": "min",
      "reflect": false
    },
    "max": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Latest allowed date (\"yyyy-mm-dd\")"
      },
      "attribute": "max",
      "reflect": false
    },
    "active": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Expand or collapse when calendar does not have input"
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    },
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The picker's name. Gets submitted with the form."
      },
      "attribute": "name",
      "reflect": false
    },
    "intlPrevMonth": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [{
            "name": "default",
            "text": "\"Previous month\""
          }],
        "text": "Localized string for \"previous month\" (used for aria label)"
      },
      "attribute": "intl-prev-month",
      "reflect": false,
      "defaultValue": "TEXT.prevMonth"
    },
    "intlNextMonth": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [{
            "name": "default",
            "text": "\"Next month\""
          }],
        "text": "Localized string for \"next month\" (used for aria label)"
      },
      "attribute": "intl-next-month",
      "reflect": false,
      "defaultValue": "TEXT.nextMonth"
    },
    "intlYear": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [{
            "name": "default",
            "text": "\"Year\""
          }],
        "text": "Localized string for \"year\" (used for aria label)"
      },
      "attribute": "intl-year",
      "reflect": false,
      "defaultValue": "TEXT.year"
    },
    "locale": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "BCP 47 language tag for desired language and country format"
      },
      "attribute": "locale",
      "reflect": false,
      "defaultValue": "document.documentElement.lang || \"en\""
    },
    "scale": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"s\" | \"m\" | \"l\"",
        "resolved": "\"l\" | \"m\" | \"s\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the scale of the date picker"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "placement": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "MenuPlacement",
        "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-leading\" | \"bottom-start\" | \"bottom-trailing\" | \"top\" | \"top-end\" | \"top-leading\" | \"top-start\" | \"top-trailing\"",
        "references": {
          "MenuPlacement": {
            "location": "import",
            "path": "../../utils/popper"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "name": "default",
            "text": "\"bottom-leading\""
          }],
        "text": "Determines where the date-picker component will be positioned relative to the input."
      },
      "attribute": "placement",
      "reflect": true,
      "defaultValue": "defaultMenuPlacement"
    },
    "range": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Range mode activation"
      },
      "attribute": "range",
      "reflect": true,
      "defaultValue": "false"
    },
    "required": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "name": "internal",
            "text": undefined
          }],
        "text": "When true, makes the component required for form-submission."
      },
      "attribute": "required",
      "reflect": true,
      "defaultValue": "false"
    },
    "start": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "use value instead"
          }],
        "text": "Selected start date"
      },
      "attribute": "start",
      "reflect": false
    },
    "end": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "use value instead"
          }],
        "text": "Selected end date"
      },
      "attribute": "end",
      "reflect": false
    },
    "overlayPositioning": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "OverlayPositioning",
        "resolved": "\"absolute\" | \"fixed\"",
        "references": {
          "OverlayPositioning": {
            "location": "import",
            "path": "../../utils/popper"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Describes the type of positioning to use for the overlaid content. If your element is in a fixed container, use the 'fixed' value."
      },
      "attribute": "overlay-positioning",
      "reflect": false,
      "defaultValue": "\"absolute\""
    },
    "proximitySelectionDisabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Disables the default behaviour on the third click of narrowing or extending the range and instead starts a new range."
      },
      "attribute": "proximity-selection-disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "layout": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"horizontal\" | \"vertical\"",
        "resolved": "\"horizontal\" | \"vertical\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Layout"
      },
      "attribute": "layout",
      "reflect": true,
      "defaultValue": "\"horizontal\""
    }
  }; }
  static get states() { return {
    "focusedInput": {},
    "localeData": {}
  }; }
  static get events() { return [{
      "method": "calciteDatePickerChange",
      "name": "calciteDatePickerChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "use `calciteInputDatePickerChange` instead."
          }],
        "text": "Trigger calcite date change when a user changes the date."
      },
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "calciteDatePickerRangeChange",
      "name": "calciteDatePickerRangeChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "see",
            "text": "[DateRangeChange](https://github.com/Esri/calcite-components/blob/master/src/components/calcite-date-picker/interfaces.ts#L1)"
          }, {
            "name": "deprecated",
            "text": "use `calciteInputDatePickerChange` instead."
          }],
        "text": "Trigger calcite date change when a user changes the date range."
      },
      "complexType": {
        "original": "DateRangeChange",
        "resolved": "DateRangeChange",
        "references": {
          "DateRangeChange": {
            "location": "import",
            "path": "../date-picker/interfaces"
          }
        }
      }
    }, {
      "method": "calciteInputDatePickerChange",
      "name": "calciteInputDatePickerChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "This event fires when the input date picker value changes."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "calciteInputDatePickerOpen",
      "name": "calciteInputDatePickerOpen",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "internal",
            "text": undefined
          }],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calciteInputDatePickerClose",
      "name": "calciteInputDatePickerClose",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "internal",
            "text": undefined
          }],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "setFocus": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Updates the position of the component.",
        "tags": []
      }
    },
    "reposition": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Updates the position of the component.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "disabled",
      "methodName": "handleDisabledChange"
    }, {
      "propName": "value",
      "methodName": "valueHandler"
    }, {
      "propName": "flipPlacements",
      "methodName": "flipPlacementsHandler"
    }, {
      "propName": "min",
      "methodName": "onMinChanged"
    }, {
      "propName": "max",
      "methodName": "onMaxChanged"
    }, {
      "propName": "active",
      "methodName": "activeHandler"
    }, {
      "propName": "layout",
      "methodName": "setReferenceEl"
    }, {
      "propName": "focusedInput",
      "methodName": "setReferenceEl"
    }, {
      "propName": "start",
      "methodName": "startWatcher"
    }, {
      "propName": "end",
      "methodName": "endWatcher"
    }, {
      "propName": "locale",
      "methodName": "loadLocaleData"
    }]; }
  static get listeners() { return [{
      "name": "calciteDatePickerChange",
      "method": "handleDateOrRangeChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteDatePickerRangeChange",
      "method": "handleDateOrRangeChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteDaySelect",
      "method": "calciteDaySelectHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
