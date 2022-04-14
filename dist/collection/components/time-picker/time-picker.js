/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, h, Prop, Event, Watch, State, Listen, Method } from "@stencil/core";
import { isActivationKey, numberKeys } from "../../utils/key";
import { isValidNumber } from "../../utils/number";
import { formatTimePart, maxTenthForMinuteAndSecond, getMeridiem, isValidTime, localizeTimeStringToParts, parseTimeString, localizeTimePart, getLocaleHourCycle, getTimeParts } from "../../utils/time";
import { CSS, TEXT } from "./resources";
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export class TimePicker {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** aria-label for the hour input
     * @default "Hour"
     */
    this.intlHour = TEXT.hour;
    /** aria-label for the hour down button
     * @default "Decrease hour"
     */
    this.intlHourDown = TEXT.hourDown;
    /** aria-label for the hour up button
     * @default "Increase hour"
     */
    this.intlHourUp = TEXT.hourUp;
    /** aria-label for the meridiem (am/pm) input
     * @default "AM/PM"
     */
    this.intlMeridiem = TEXT.meridiem;
    /** aria-label for the meridiem (am/pm) down button
     * @default "Decrease AM/PM"
     */
    this.intlMeridiemDown = TEXT.meridiemDown;
    /** aria-label for the meridiem (am/pm) up button
     * @default "Increase AM/PM"
     */
    this.intlMeridiemUp = TEXT.meridiemUp;
    /** aria-label for the minute input
     * @default "Minute"
     */
    this.intlMinute = TEXT.minute;
    /** aria-label for the minute down button
     * @default "Decrease minute"
     */
    this.intlMinuteDown = TEXT.minuteDown;
    /** aria-label for the minute up button
     * @default "Increase minute"
     */
    this.intlMinuteUp = TEXT.minuteUp;
    /** aria-label for the second input
     * @default "Second"
     */
    this.intlSecond = TEXT.second;
    /** aria-label for the second down button
     * @default "Decrease second"
     */
    this.intlSecondDown = TEXT.secondDown;
    /** aria-label for the second up button
     * @default "Increase second"
     */
    this.intlSecondUp = TEXT.secondUp;
    /**
     * BCP 47 language tag for desired language and country format
     * @internal
     */
    this.locale = document.documentElement.lang || navigator.language || "en";
    /** The scale (size) of the time picker */
    this.scale = "m";
    /** number (seconds) that specifies the granularity that the value must adhere to */
    this.step = 60;
    /** The selected time in UTC (always 24-hour format) */
    this.value = null;
    this.showSecond = this.step < 60;
    this.decrementHour = () => {
      const newHour = !this.hour ? 0 : this.hour === "00" ? 23 : parseInt(this.hour) - 1;
      this.setValuePart("hour", newHour);
    };
    this.decrementMeridiem = () => {
      const newMeridiem = this.meridiem === "PM" ? "AM" : "PM";
      this.setValuePart("meridiem", newMeridiem);
    };
    this.decrementMinuteOrSecond = (key) => {
      let newValue;
      if (isValidNumber(this[key])) {
        const valueAsNumber = parseInt(this[key]);
        newValue = valueAsNumber === 0 ? 59 : valueAsNumber - 1;
      }
      else {
        newValue = 59;
      }
      this.setValuePart(key, newValue);
    };
    this.decrementMinute = () => {
      this.decrementMinuteOrSecond("minute");
    };
    this.decrementSecond = () => {
      this.decrementMinuteOrSecond("second");
    };
    this.focusHandler = (event) => {
      this.activeEl = event.currentTarget;
    };
    this.hourDownButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.decrementHour();
      }
    };
    this.hourKeyDownHandler = (event) => {
      const key = event.key;
      if (numberKeys.includes(key)) {
        const keyAsNumber = parseInt(key);
        let newHour;
        if (isValidNumber(this.hour)) {
          switch (this.hourCycle) {
            case "12":
              newHour =
                this.hour === "01" && keyAsNumber >= 0 && keyAsNumber <= 2
                  ? `1${keyAsNumber}`
                  : keyAsNumber;
              break;
            case "24":
              if (this.hour === "01") {
                newHour = `1${keyAsNumber}`;
              }
              else if (this.hour === "02" && keyAsNumber >= 0 && keyAsNumber <= 3) {
                newHour = `2${keyAsNumber}`;
              }
              else {
                newHour = keyAsNumber;
              }
              break;
          }
        }
        else {
          newHour = keyAsNumber;
        }
        this.setValuePart("hour", newHour);
      }
      else {
        switch (key) {
          case "Backspace":
          case "Delete":
            this.setValuePart("hour", null);
            break;
          case "ArrowDown":
            event.preventDefault();
            this.decrementHour();
            break;
          case "ArrowUp":
            event.preventDefault();
            this.incrementHour();
            break;
          case " ":
          case "Spacebar":
            event.preventDefault();
            break;
        }
      }
    };
    this.hourUpButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.incrementHour();
      }
    };
    this.incrementMeridiem = () => {
      const newMeridiem = this.meridiem === "AM" ? "PM" : "AM";
      this.setValuePart("meridiem", newMeridiem);
    };
    this.incrementHour = () => {
      const newHour = isValidNumber(this.hour)
        ? this.hour === "23"
          ? 0
          : parseInt(this.hour) + 1
        : 1;
      this.setValuePart("hour", newHour);
    };
    this.incrementMinuteOrSecond = (key) => {
      const newValue = isValidNumber(this[key])
        ? this[key] === "59"
          ? 0
          : parseInt(this[key]) + 1
        : 0;
      this.setValuePart(key, newValue);
    };
    this.incrementMinute = () => {
      this.incrementMinuteOrSecond("minute");
    };
    this.incrementSecond = () => {
      this.incrementMinuteOrSecond("second");
    };
    this.meridiemDownButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.decrementMeridiem();
      }
    };
    this.meridiemKeyDownHandler = (event) => {
      switch (event.key) {
        case "a":
          this.setValuePart("meridiem", "AM");
          break;
        case "p":
          this.setValuePart("meridiem", "PM");
          break;
        case "Backspace":
        case "Delete":
          this.setValuePart("meridiem", null);
          break;
        case "ArrowUp":
          event.preventDefault();
          this.incrementMeridiem();
          break;
        case "ArrowDown":
          event.preventDefault();
          this.decrementMeridiem();
          break;
        case " ":
        case "Spacebar":
          event.preventDefault();
          break;
      }
    };
    this.meridiemUpButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.incrementMeridiem();
      }
    };
    this.minuteDownButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.decrementMinute();
      }
    };
    this.minuteKeyDownHandler = (event) => {
      const key = event.key;
      if (numberKeys.includes(key)) {
        const keyAsNumber = parseInt(key);
        let newMinute;
        if (isValidNumber(this.minute) && this.minute.startsWith("0")) {
          const minuteAsNumber = parseInt(this.minute);
          newMinute =
            minuteAsNumber > maxTenthForMinuteAndSecond
              ? keyAsNumber
              : `${minuteAsNumber}${keyAsNumber}`;
        }
        else {
          newMinute = keyAsNumber;
        }
        this.setValuePart("minute", newMinute);
      }
      else {
        switch (key) {
          case "Backspace":
          case "Delete":
            this.setValuePart("minute", null);
            break;
          case "ArrowDown":
            event.preventDefault();
            this.decrementMinute();
            break;
          case "ArrowUp":
            event.preventDefault();
            this.incrementMinute();
            break;
          case " ":
          case "Spacebar":
            event.preventDefault();
            break;
        }
      }
    };
    this.minuteUpButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.incrementMinute();
      }
    };
    this.secondDownButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.decrementSecond();
      }
    };
    this.secondKeyDownHandler = (event) => {
      const key = event.key;
      if (numberKeys.includes(key)) {
        const keyAsNumber = parseInt(key);
        let newSecond;
        if (isValidNumber(this.second) && this.second.startsWith("0")) {
          const secondAsNumber = parseInt(this.second);
          newSecond =
            secondAsNumber > maxTenthForMinuteAndSecond
              ? keyAsNumber
              : `${secondAsNumber}${keyAsNumber}`;
        }
        else {
          newSecond = keyAsNumber;
        }
        this.setValuePart("second", newSecond);
      }
      else {
        switch (key) {
          case "Backspace":
          case "Delete":
            this.setValuePart("second", null);
            break;
          case "ArrowDown":
            event.preventDefault();
            this.decrementSecond();
            break;
          case "ArrowUp":
            event.preventDefault();
            this.incrementSecond();
            break;
          case " ":
          case "Spacebar":
            event.preventDefault();
            break;
        }
      }
    };
    this.secondUpButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.incrementSecond();
      }
    };
    this.setHourEl = (el) => (this.hourEl = el);
    this.setMeridiemEl = (el) => (this.meridiemEl = el);
    this.setMinuteEl = (el) => (this.minuteEl = el);
    this.setSecondEl = (el) => (this.secondEl = el);
    this.setValue = (value, emit = true) => {
      if (isValidTime(value)) {
        const { hour, minute, second } = parseTimeString(value);
        const { localizedHour, localizedHourSuffix, localizedMinute, localizedMinuteSuffix, localizedSecond, localizedSecondSuffix, localizedMeridiem } = localizeTimeStringToParts(value, this.locale);
        this.localizedHour = localizedHour;
        this.localizedHourSuffix = localizedHourSuffix;
        this.localizedMinute = localizedMinute;
        this.localizedMinuteSuffix = localizedMinuteSuffix;
        this.localizedSecond = localizedSecond;
        this.localizedSecondSuffix = localizedSecondSuffix;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        if (localizedMeridiem) {
          this.localizedMeridiem = localizedMeridiem;
          this.meridiem = getMeridiem(this.hour);
          const formatParts = getTimeParts(value, this.locale);
          this.meridiemOrder = this.getMeridiemOrder(formatParts);
        }
      }
      else {
        this.hour = null;
        this.localizedHour = null;
        this.localizedHourSuffix = null;
        this.localizedMeridiem = null;
        this.localizedMinute = null;
        this.localizedMinuteSuffix = null;
        this.localizedSecond = null;
        this.localizedSecondSuffix = null;
        this.meridiem = null;
        this.minute = null;
        this.second = null;
        this.value = null;
      }
      if (emit) {
        this.calciteTimePickerChange.emit();
      }
    };
    this.setValuePart = (key, value, emit = true) => {
      var _a;
      if (key === "meridiem") {
        this.meridiem = value;
        if (isValidNumber(this.hour)) {
          const hourAsNumber = parseInt(this.hour);
          switch (value) {
            case "AM":
              if (hourAsNumber >= 12) {
                this.hour = formatTimePart(hourAsNumber - 12);
              }
              break;
            case "PM":
              if (hourAsNumber < 12) {
                this.hour = formatTimePart(hourAsNumber + 12);
              }
              break;
          }
          this.localizedHour = localizeTimePart(this.hour, "hour", this.locale);
        }
      }
      else {
        this[key] = typeof value === "number" ? formatTimePart(value) : value;
        this[`localized${capitalize(key)}`] = localizeTimePart(this[key], key, this.locale);
      }
      if (this.hour && this.minute) {
        const showSeconds = this.second && this.showSecond;
        this.value = `${this.hour}:${this.minute}:${showSeconds ? this.second : "00"}`;
      }
      else {
        this.value = null;
      }
      this.localizedMeridiem = this.value
        ? ((_a = localizeTimeStringToParts(this.value, this.locale)) === null || _a === void 0 ? void 0 : _a.localizedMeridiem) || null
        : localizeTimePart(this.meridiem, "meridiem", this.locale);
      if (emit) {
        this.calciteTimePickerChange.emit();
      }
    };
  }
  localeWatcher(newLocale) {
    this.hourCycle = getLocaleHourCycle(newLocale);
    this.setValue(this.value, false);
  }
  valueWatcher(newValue) {
    this.setValue(newValue, false);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  hostBlurHandler() {
    this.calciteTimePickerBlur.emit();
  }
  hostFocusHandler() {
    this.calciteTimePickerFocus.emit();
  }
  keyDownHandler(event) {
    const key = event.key;
    switch (this.activeEl) {
      case this.hourEl:
        if (key === "ArrowRight") {
          this.setFocus("minute");
        }
        break;
      case this.minuteEl:
        switch (key) {
          case "ArrowLeft":
            this.setFocus("hour");
            break;
          case "ArrowRight":
            if (this.step !== 60) {
              this.setFocus("second");
            }
            else if (this.hourCycle === "12") {
              this.setFocus("meridiem");
            }
            break;
        }
        break;
      case this.secondEl:
        switch (key) {
          case "ArrowLeft":
            this.setFocus("minute");
            break;
          case "ArrowRight":
            if (this.hourCycle === "12") {
              this.setFocus("meridiem");
            }
            break;
        }
        break;
      case this.meridiemEl:
        switch (key) {
          case "ArrowLeft":
            if (this.step !== 60) {
              this.setFocus("second");
            }
            else {
              this.setFocus("minute");
            }
            break;
        }
        break;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus(target) {
    var _a;
    (_a = this[`${target || "hour"}El`]) === null || _a === void 0 ? void 0 : _a.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  buttonActivated(event) {
    const key = event.key;
    if (key === " ") {
      event.preventDefault();
    }
    return isActivationKey(key);
  }
  getMeridiemOrder(formatParts) {
    const isRTLKind = this.locale === "ar" || this.locale === "he";
    if (formatParts && !isRTLKind) {
      const index = formatParts.findIndex((parts) => {
        return parts.value === this.localizedMeridiem;
      });
      return index;
    }
    return 0;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.setValue(this.value, false);
    this.hourCycle = getLocaleHourCycle(this.locale);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const hourIsNumber = isValidNumber(this.hour);
    const iconScale = this.scale === "s" || this.scale === "m" ? "s" : "m";
    const minuteIsNumber = isValidNumber(this.minute);
    const secondIsNumber = isValidNumber(this.second);
    const showMeridiem = this.hourCycle === "12";
    return (h("div", { class: {
        [CSS.timePicker]: true,
        [CSS.showMeridiem]: showMeridiem,
        [CSS.showSecond]: this.showSecond,
        [CSS[`scale-${this.scale}`]]: true
      }, dir: "ltr" },
      h("div", { class: CSS.column, role: "group" },
        h("span", { "aria-label": this.intlHourUp, class: {
            [CSS.button]: true,
            [CSS.buttonHourUp]: true,
            [CSS.buttonTopLeft]: true
          }, onClick: this.incrementHour, onKeyDown: this.hourUpButtonKeyDownHandler, role: "button", tabIndex: -1 },
          h("calcite-icon", { icon: "chevron-up", scale: iconScale })),
        h("span", { "aria-label": this.intlHour, "aria-valuemax": "23", "aria-valuemin": "1", "aria-valuenow": (hourIsNumber && parseInt(this.hour)) || "0", "aria-valuetext": this.hour, class: {
            [CSS.input]: true,
            [CSS.hour]: true
          }, onFocus: this.focusHandler, onKeyDown: this.hourKeyDownHandler, ref: this.setHourEl, role: "spinbutton", tabIndex: 0 }, this.localizedHour || "--"),
        h("span", { "aria-label": this.intlHourDown, class: {
            [CSS.button]: true,
            [CSS.buttonHourDown]: true,
            [CSS.buttonBottomLeft]: true
          }, onClick: this.decrementHour, onKeyDown: this.hourDownButtonKeyDownHandler, role: "button", tabIndex: -1 },
          h("calcite-icon", { icon: "chevron-down", scale: iconScale }))),
      h("span", { class: CSS.delimiter }, this.localizedHourSuffix),
      h("div", { class: CSS.column, role: "group" },
        h("span", { "aria-label": this.intlMinuteUp, class: {
            [CSS.button]: true,
            [CSS.buttonMinuteUp]: true
          }, onClick: this.incrementMinute, onKeyDown: this.minuteUpButtonKeyDownHandler, role: "button", tabIndex: -1 },
          h("calcite-icon", { icon: "chevron-up", scale: iconScale })),
        h("span", { "aria-label": this.intlMinute, "aria-valuemax": "12", "aria-valuemin": "1", "aria-valuenow": (minuteIsNumber && parseInt(this.minute)) || "0", "aria-valuetext": this.minute, class: {
            [CSS.input]: true,
            [CSS.minute]: true
          }, onFocus: this.focusHandler, onKeyDown: this.minuteKeyDownHandler, ref: this.setMinuteEl, role: "spinbutton", tabIndex: 0 }, this.localizedMinute || "--"),
        h("span", { "aria-label": this.intlMinuteDown, class: {
            [CSS.button]: true,
            [CSS.buttonMinuteDown]: true
          }, onClick: this.decrementMinute, onKeyDown: this.minuteDownButtonKeyDownHandler, role: "button", tabIndex: -1 },
          h("calcite-icon", { icon: "chevron-down", scale: iconScale }))),
      this.showSecond && h("span", { class: CSS.delimiter }, this.localizedMinuteSuffix),
      this.showSecond && (h("div", { class: CSS.column, role: "group" },
        h("span", { "aria-label": this.intlSecondUp, class: {
            [CSS.button]: true,
            [CSS.buttonSecondUp]: true
          }, onClick: this.incrementSecond, onKeyDown: this.secondUpButtonKeyDownHandler, role: "button", tabIndex: -1 },
          h("calcite-icon", { icon: "chevron-up", scale: iconScale })),
        h("span", { "aria-label": this.intlSecond, "aria-valuemax": "59", "aria-valuemin": "0", "aria-valuenow": (secondIsNumber && parseInt(this.second)) || "0", "aria-valuetext": this.second, class: {
            [CSS.input]: true,
            [CSS.second]: true
          }, onFocus: this.focusHandler, onKeyDown: this.secondKeyDownHandler, ref: this.setSecondEl, role: "spinbutton", tabIndex: 0 }, this.localizedSecond || "--"),
        h("span", { "aria-label": this.intlSecondDown, class: {
            [CSS.button]: true,
            [CSS.buttonSecondDown]: true
          }, onClick: this.decrementSecond, onKeyDown: this.secondDownButtonKeyDownHandler, role: "button", tabIndex: -1 },
          h("calcite-icon", { icon: "chevron-down", scale: iconScale })))),
      this.localizedSecondSuffix && (h("span", { class: CSS.delimiter }, this.localizedSecondSuffix)),
      showMeridiem && (h("div", { class: {
          [CSS.column]: true,
          [CSS.meridiemStart]: this.meridiemOrder === 0
        }, role: "group" },
        h("span", { "aria-label": this.intlMeridiemUp, class: {
            [CSS.button]: true,
            [CSS.buttonMeridiemUp]: true,
            [CSS.buttonTopRight]: true
          }, onClick: this.incrementMeridiem, onKeyDown: this.meridiemUpButtonKeyDownHandler, role: "button", tabIndex: -1 },
          h("calcite-icon", { icon: "chevron-up", scale: iconScale })),
        h("span", { "aria-label": this.intlMeridiem, "aria-valuemax": "2", "aria-valuemin": "1", "aria-valuenow": (this.meridiem === "PM" && "2") || "1", "aria-valuetext": this.meridiem, class: {
            [CSS.input]: true,
            [CSS.meridiem]: true
          }, onFocus: this.focusHandler, onKeyDown: this.meridiemKeyDownHandler, ref: this.setMeridiemEl, role: "spinbutton", tabIndex: 0 }, this.localizedMeridiem || "--"),
        h("span", { "aria-label": this.intlMeridiemDown, class: {
            [CSS.button]: true,
            [CSS.buttonMeridiemDown]: true,
            [CSS.buttonBottomRight]: true
          }, onClick: this.decrementMeridiem, onKeyDown: this.meridiemDownButtonKeyDownHandler, role: "button", tabIndex: -1 },
          h("calcite-icon", { icon: "chevron-down", scale: iconScale }))))));
  }
  static get is() { return "calcite-time-picker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["time-picker.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["time-picker.css"]
  }; }
  static get properties() { return {
    "intlHour": {
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
        "tags": [{
            "name": "default",
            "text": "\"Hour\""
          }],
        "text": "aria-label for the hour input"
      },
      "attribute": "intl-hour",
      "reflect": false,
      "defaultValue": "TEXT.hour"
    },
    "intlHourDown": {
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
        "tags": [{
            "name": "default",
            "text": "\"Decrease hour\""
          }],
        "text": "aria-label for the hour down button"
      },
      "attribute": "intl-hour-down",
      "reflect": false,
      "defaultValue": "TEXT.hourDown"
    },
    "intlHourUp": {
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
        "tags": [{
            "name": "default",
            "text": "\"Increase hour\""
          }],
        "text": "aria-label for the hour up button"
      },
      "attribute": "intl-hour-up",
      "reflect": false,
      "defaultValue": "TEXT.hourUp"
    },
    "intlMeridiem": {
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
        "tags": [{
            "name": "default",
            "text": "\"AM/PM\""
          }],
        "text": "aria-label for the meridiem (am/pm) input"
      },
      "attribute": "intl-meridiem",
      "reflect": false,
      "defaultValue": "TEXT.meridiem"
    },
    "intlMeridiemDown": {
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
        "tags": [{
            "name": "default",
            "text": "\"Decrease AM/PM\""
          }],
        "text": "aria-label for the meridiem (am/pm) down button"
      },
      "attribute": "intl-meridiem-down",
      "reflect": false,
      "defaultValue": "TEXT.meridiemDown"
    },
    "intlMeridiemUp": {
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
        "tags": [{
            "name": "default",
            "text": "\"Increase AM/PM\""
          }],
        "text": "aria-label for the meridiem (am/pm) up button"
      },
      "attribute": "intl-meridiem-up",
      "reflect": false,
      "defaultValue": "TEXT.meridiemUp"
    },
    "intlMinute": {
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
        "tags": [{
            "name": "default",
            "text": "\"Minute\""
          }],
        "text": "aria-label for the minute input"
      },
      "attribute": "intl-minute",
      "reflect": false,
      "defaultValue": "TEXT.minute"
    },
    "intlMinuteDown": {
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
        "tags": [{
            "name": "default",
            "text": "\"Decrease minute\""
          }],
        "text": "aria-label for the minute down button"
      },
      "attribute": "intl-minute-down",
      "reflect": false,
      "defaultValue": "TEXT.minuteDown"
    },
    "intlMinuteUp": {
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
        "tags": [{
            "name": "default",
            "text": "\"Increase minute\""
          }],
        "text": "aria-label for the minute up button"
      },
      "attribute": "intl-minute-up",
      "reflect": false,
      "defaultValue": "TEXT.minuteUp"
    },
    "intlSecond": {
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
        "tags": [{
            "name": "default",
            "text": "\"Second\""
          }],
        "text": "aria-label for the second input"
      },
      "attribute": "intl-second",
      "reflect": false,
      "defaultValue": "TEXT.second"
    },
    "intlSecondDown": {
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
        "tags": [{
            "name": "default",
            "text": "\"Decrease second\""
          }],
        "text": "aria-label for the second down button"
      },
      "attribute": "intl-second-down",
      "reflect": false,
      "defaultValue": "TEXT.secondDown"
    },
    "intlSecondUp": {
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
        "tags": [{
            "name": "default",
            "text": "\"Increase second\""
          }],
        "text": "aria-label for the second up button"
      },
      "attribute": "intl-second-up",
      "reflect": false,
      "defaultValue": "TEXT.secondUp"
    },
    "locale": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "name": "internal",
            "text": undefined
          }],
        "text": "BCP 47 language tag for desired language and country format"
      },
      "attribute": "lang",
      "reflect": false,
      "defaultValue": "document.documentElement.lang || navigator.language || \"en\""
    },
    "scale": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Scale",
        "resolved": "\"l\" | \"m\" | \"s\"",
        "references": {
          "Scale": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The scale (size) of the time picker"
      },
      "attribute": "scale",
      "reflect": false,
      "defaultValue": "\"m\""
    },
    "step": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "number (seconds) that specifies the granularity that the value must adhere to"
      },
      "attribute": "step",
      "reflect": false,
      "defaultValue": "60"
    },
    "value": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The selected time in UTC (always 24-hour format)"
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "null"
    }
  }; }
  static get states() { return {
    "hour": {},
    "hourCycle": {},
    "localizedHour": {},
    "localizedHourSuffix": {},
    "localizedMeridiem": {},
    "localizedMinute": {},
    "localizedMinuteSuffix": {},
    "localizedSecond": {},
    "localizedSecondSuffix": {},
    "meridiem": {},
    "minute": {},
    "second": {},
    "showSecond": {}
  }; }
  static get events() { return [{
      "method": "calciteTimePickerBlur",
      "name": "calciteTimePickerBlur",
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
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "calciteTimePickerChange",
      "name": "calciteTimePickerChange",
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
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }, {
      "method": "calciteTimePickerFocus",
      "name": "calciteTimePickerFocus",
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
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "setFocus": {
      "complexType": {
        "signature": "(target: TimePart) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "TimePart": {
            "location": "import",
            "path": "../../utils/time"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Sets focus on the component.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "locale",
      "methodName": "localeWatcher"
    }, {
      "propName": "value",
      "methodName": "valueWatcher"
    }]; }
  static get listeners() { return [{
      "name": "blur",
      "method": "hostBlurHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "focus",
      "method": "hostFocusHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "keydown",
      "method": "keyDownHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
