/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, h, Prop, Event, Element, Host, State, Watch, Build } from "@stencil/core";
import { getLocaleData } from "./utils";
import { dateFromRange, dateFromISO, dateToISO, getDaysDiff } from "../../utils/date";
import { HEADING_LEVEL, TEXT } from "./resources";
export class DatePicker {
  constructor() {
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
    /** Range mode activation */
    this.range = false;
    /** Disables the default behaviour on the third click of narrowing or extending the range and instead starts a new range. */
    this.proximitySelectionDisabled = false;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.keyUpHandler = (e) => {
      if (e.key === "Escape") {
        this.reset();
      }
    };
    this.monthHeaderSelectChange = (e) => {
      const date = new Date(e.detail);
      if (!this.range) {
        this.activeDate = date;
      }
      else {
        if (this.activeRange === "end") {
          this.activeEndDate = date;
        }
        else {
          this.activeStartDate = date;
        }
        this.mostRecentRangeValue = date;
      }
    };
    this.monthActiveDateChange = (e) => {
      const date = new Date(e.detail);
      if (!this.range) {
        this.activeDate = date;
      }
      else {
        if (this.activeRange === "end") {
          this.activeEndDate = date;
        }
        else {
          this.activeStartDate = date;
        }
        this.mostRecentRangeValue = date;
      }
    };
    this.monthHoverChange = (e) => {
      if (!this.startAsDate) {
        this.hoverRange = undefined;
        return;
      }
      const date = new Date(e.detail);
      this.hoverRange = {
        focused: this.activeRange || "start",
        start: this.startAsDate,
        end: this.endAsDate
      };
      if (!this.proximitySelectionDisabled) {
        if (this.endAsDate) {
          const startDiff = getDaysDiff(date, this.startAsDate);
          const endDiff = getDaysDiff(date, this.endAsDate);
          if (endDiff > 0) {
            this.hoverRange.end = date;
            this.hoverRange.focused = "end";
          }
          else if (startDiff < 0) {
            this.hoverRange.start = date;
            this.hoverRange.focused = "start";
          }
          else if (startDiff > endDiff) {
            this.hoverRange.start = date;
            this.hoverRange.focused = "start";
          }
          else {
            this.hoverRange.end = date;
            this.hoverRange.focused = "end";
          }
        }
        else {
          if (date < this.startAsDate) {
            this.hoverRange = {
              focused: "start",
              start: date,
              end: this.startAsDate
            };
          }
          else {
            this.hoverRange.end = date;
            this.hoverRange.focused = "end";
          }
        }
      }
      else {
        if (!this.endAsDate) {
          if (date < this.startAsDate) {
            this.hoverRange = {
              focused: "start",
              start: date,
              end: this.startAsDate
            };
          }
          else {
            this.hoverRange.end = date;
            this.hoverRange.focused = "end";
          }
        }
        else {
          this.hoverRange = undefined;
        }
      }
    };
    this.monthMouseOutChange = () => {
      if (this.hoverRange) {
        this.hoverRange = undefined;
      }
    };
    /**
     * Reset active date and close
     */
    this.reset = () => {
      var _a, _b, _c, _d, _e, _f;
      if (!Array.isArray(this.valueAsDate) &&
        this.valueAsDate &&
        ((_a = this.valueAsDate) === null || _a === void 0 ? void 0 : _a.getTime()) !== ((_b = this.activeDate) === null || _b === void 0 ? void 0 : _b.getTime())) {
        this.activeDate = new Date(this.valueAsDate);
      }
      if (this.startAsDate && ((_c = this.startAsDate) === null || _c === void 0 ? void 0 : _c.getTime()) !== ((_d = this.activeStartDate) === null || _d === void 0 ? void 0 : _d.getTime())) {
        this.activeStartDate = new Date(this.startAsDate);
      }
      if (this.endAsDate && ((_e = this.endAsDate) === null || _e === void 0 ? void 0 : _e.getTime()) !== ((_f = this.activeEndDate) === null || _f === void 0 ? void 0 : _f.getTime())) {
        this.activeEndDate = new Date(this.endAsDate);
      }
    };
    /**
     * Event handler for when the selected date changes
     */
    this.monthDateChange = (e) => {
      const date = new Date(e.detail);
      if (!this.range) {
        this.value = date ? dateToISO(date) : "";
        this.valueAsDate = date || null;
        this.activeDate = date || null;
        this.calciteDatePickerChange.emit(date);
        return;
      }
      if (!this.startAsDate || (!this.endAsDate && date < this.startAsDate)) {
        if (this.startAsDate) {
          this.setEndDate(new Date(this.startAsDate));
        }
        if (this.activeRange == "end") {
          this.setEndDate(date);
        }
        else {
          this.setStartDate(date);
        }
      }
      else if (!this.endAsDate) {
        this.setEndDate(date);
      }
      else {
        if (!this.proximitySelectionDisabled) {
          if (this.activeRange) {
            if (this.activeRange == "end") {
              this.setEndDate(date);
            }
            else {
              this.setStartDate(date);
            }
          }
          else {
            const startDiff = getDaysDiff(date, this.startAsDate);
            const endDiff = getDaysDiff(date, this.endAsDate);
            if (endDiff === 0 || startDiff < 0) {
              this.setStartDate(date);
            }
            else if (startDiff === 0 || endDiff < 0) {
              this.setEndDate(date);
            }
            else if (startDiff < endDiff) {
              this.setStartDate(date);
            }
            else {
              this.setEndDate(date);
            }
          }
        }
        else {
          this.setStartDate(date);
          this.endAsDate = this.activeEndDate = this.end = undefined;
        }
      }
      this.calciteDatePickerChange.emit(date);
    };
  }
  handleValueAsDate(date) {
    if (!Array.isArray(date) && date && date !== this.activeDate) {
      this.activeDate = date;
    }
  }
  handleRangeChange() {
    const { startAsDate: startDate, endAsDate: endDate } = this;
    this.activeEndDate = endDate;
    this.activeStartDate = startDate;
  }
  onMinChanged(min) {
    this.minAsDate = dateFromISO(min);
  }
  onMaxChanged(max) {
    this.maxAsDate = dateFromISO(max);
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
    }
    if (this.start) {
      this.setStartAsDate(dateFromISO(this.start));
    }
    if (this.end) {
      this.setEndAsDate(dateFromISO(this.end));
    }
    if (this.min) {
      this.minAsDate = dateFromISO(this.min);
    }
    if (this.max) {
      this.maxAsDate = dateFromISO(this.max);
    }
  }
  async componentWillLoad() {
    await this.loadLocaleData();
    this.onMinChanged(this.min);
    this.onMaxChanged(this.max);
  }
  render() {
    var _a;
    const date = dateFromRange(this.range ? this.startAsDate : this.valueAsDate, this.minAsDate, this.maxAsDate);
    const activeStartDate = this.range
      ? this.getActiveStartDate(date, this.minAsDate, this.maxAsDate)
      : this.getActiveDate(date, this.minAsDate, this.maxAsDate);
    let activeDate = activeStartDate;
    const endDate = this.range
      ? dateFromRange(this.endAsDate, this.minAsDate, this.maxAsDate)
      : null;
    const activeEndDate = this.getActiveEndDate(endDate, this.minAsDate, this.maxAsDate);
    if ((this.activeRange === "end" ||
      (((_a = this.hoverRange) === null || _a === void 0 ? void 0 : _a.focused) === "end" && (!this.proximitySelectionDisabled || endDate))) &&
      activeEndDate) {
      activeDate = activeEndDate;
    }
    if (this.range && this.mostRecentRangeValue) {
      activeDate = this.mostRecentRangeValue;
    }
    const minDate = this.range && this.activeRange
      ? this.activeRange === "start"
        ? this.minAsDate
        : date || this.minAsDate
      : this.minAsDate;
    const maxDate = this.range && this.activeRange
      ? this.activeRange === "start"
        ? endDate || this.maxAsDate
        : this.maxAsDate
      : this.maxAsDate;
    return (h(Host, { onBlur: this.reset, onKeyUp: this.keyUpHandler, role: "application" }, this.renderCalendar(activeDate, maxDate, minDate, date, endDate)));
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
  }
  startWatcher(start) {
    this.setStartAsDate(dateFromISO(start));
  }
  endWatcher(end) {
    this.setEndAsDate(dateFromISO(end));
  }
  async loadLocaleData() {
    if (!Build.isBrowser) {
      return;
    }
    const { locale } = this;
    this.localeData = await getLocaleData(locale);
  }
  /**
   * Render calcite-date-picker-month-header and calcite-date-picker-month
   */
  renderCalendar(activeDate, maxDate, minDate, date, endDate) {
    return (this.localeData && [
      h("calcite-date-picker-month-header", { activeDate: activeDate, headingLevel: this.headingLevel || HEADING_LEVEL, intlNextMonth: this.intlNextMonth, intlPrevMonth: this.intlPrevMonth, intlYear: this.intlYear, localeData: this.localeData, max: maxDate, min: minDate, onCalciteDatePickerSelect: this.monthHeaderSelectChange, scale: this.scale, selectedDate: this.activeRange === "end" ? endDate : date || new Date() }),
      h("calcite-date-picker-month", { activeDate: activeDate, endDate: this.range ? endDate : undefined, hoverRange: this.hoverRange, localeData: this.localeData, max: maxDate, min: minDate, onCalciteDatePickerActiveDateChange: this.monthActiveDateChange, onCalciteDatePickerHover: this.monthHoverChange, onCalciteDatePickerMouseOut: this.monthMouseOutChange, onCalciteDatePickerSelect: this.monthDateChange, scale: this.scale, selectedDate: this.activeRange === "end" ? endDate : date, startDate: this.range ? date : undefined })
    ]);
  }
  /**
   * Update date instance of start if valid
   */
  setStartAsDate(startDate, emit) {
    this.startAsDate = startDate;
    this.mostRecentRangeValue = this.startAsDate;
    if (emit) {
      this.calciteDatePickerRangeChange.emit({
        startDate,
        endDate: this.endAsDate
      });
    }
  }
  /**
   * Update date instance of end if valid
   */
  setEndAsDate(endDate, emit) {
    this.endAsDate = endDate;
    this.mostRecentRangeValue = this.endAsDate;
    if (emit) {
      this.calciteDatePickerRangeChange.emit({
        startDate: this.startAsDate,
        endDate
      });
    }
  }
  setEndDate(date) {
    this.end = date ? dateToISO(date) : "";
    this.setEndAsDate(date, true);
    this.activeEndDate = date || null;
  }
  setStartDate(date) {
    this.start = date ? dateToISO(date) : "";
    this.setStartAsDate(date, true);
    this.activeStartDate = date || null;
  }
  /**
   * Get an active date using the value, or current date as default
   */
  getActiveDate(value, min, max) {
    return dateFromRange(this.activeDate, min, max) || value || dateFromRange(new Date(), min, max);
  }
  getActiveStartDate(value, min, max) {
    return (dateFromRange(this.activeStartDate, min, max) || value || dateFromRange(new Date(), min, max));
  }
  getActiveEndDate(value, min, max) {
    return (dateFromRange(this.activeEndDate, min, max) || value || dateFromRange(new Date(), min, max));
  }
  static get is() { return "calcite-date-picker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["date-picker.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["date-picker.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "activeRange": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"start\" | \"end\"",
        "resolved": "\"end\" | \"start\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Active range"
      },
      "attribute": "active-range",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Selected date"
      },
      "attribute": "value",
      "reflect": false
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
    }
  }; }
  static get states() { return {
    "activeDate": {},
    "activeStartDate": {},
    "activeEndDate": {},
    "localeData": {},
    "hoverRange": {}
  }; }
  static get events() { return [{
      "method": "calciteDatePickerChange",
      "name": "calciteDatePickerChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
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
            "text": "[DateRangeChange](https://github.com/Esri/calcite-components/blob/master/src/components/date-picker/interfaces.ts#L1)"
          }],
        "text": "Trigger calcite date change when a user changes the date range."
      },
      "complexType": {
        "original": "DateRangeChange",
        "resolved": "DateRangeChange",
        "references": {
          "DateRangeChange": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "valueAsDate",
      "methodName": "handleValueAsDate"
    }, {
      "propName": "startAsDate",
      "methodName": "handleRangeChange"
    }, {
      "propName": "endAsDate",
      "methodName": "handleRangeChange"
    }, {
      "propName": "min",
      "methodName": "onMinChanged"
    }, {
      "propName": "max",
      "methodName": "onMaxChanged"
    }, {
      "propName": "value",
      "methodName": "valueHandler"
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
}
