/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, Host, h, Prop, Listen, Event, Method, Watch, State } from "@stencil/core";
import { guid } from "../../utils/guid";
import { formatTimeString, isValidTime, localizeTimeString } from "../../utils/time";
import { connectLabel, disconnectLabel, getLabelText } from "../../utils/label";
import { connectForm, disconnectForm, HiddenFormInputSlot } from "../../utils/form";
import { updateHostInteraction } from "../../utils/interactive";
export class InputTimePicker {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** The active state of the time input */
    this.active = false;
    /** The disabled state of the time input */
    this.disabled = false;
    /**
     * BCP 47 language tag for desired language and country format
     * @internal
     */
    this.locale = document.documentElement.lang || navigator.language || "en";
    /**
     * When true, makes the component required for form-submission.
     *
     * @internal
     */
    this.required = false;
    /** The scale (size) of the time input */
    this.scale = "m";
    /**
     * Determines where the popover will be positioned relative to the input.
     * @see [PopperPlacement](https://github.com/Esri/calcite-components/blob/master/src/utils/popper.ts#L25)
     */
    this.placement = "auto";
    /** number (seconds) that specifies the granularity that the value must adhere to */
    this.step = 60;
    /** The selected time in UTC (always 24-hour format) */
    this.value = null;
    /** whether the value of the input was changed as a result of user typing or not */
    this.internalValueChange = false;
    this.previousValidValue = null;
    this.referenceElementId = `input-time-picker-${guid()}`;
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.calciteInputBlurHandler = () => {
      this.active = false;
      const shouldIncludeSeconds = this.shouldIncludeSeconds();
      const localizedInputValue = localizeTimeString(this.calciteInputEl.value, this.locale, shouldIncludeSeconds);
      this.setInputValue(localizedInputValue || localizeTimeString(this.value, this.locale, shouldIncludeSeconds));
    };
    this.calciteInputFocusHandler = () => {
      this.active = true;
    };
    this.calciteInputInputHandler = (event) => {
      const target = event.target;
      this.setValue({ value: target.value });
    };
    this.timePickerChangeHandler = (event) => {
      event.stopPropagation();
      const target = event.target;
      const value = target.value;
      this.setValue({ value, origin: "time-picker" });
    };
    this.setCalciteInputEl = (el) => {
      this.calciteInputEl = el;
    };
    this.setCalciteTimePickerEl = (el) => {
      this.calciteTimePickerEl = el;
    };
    this.setInputValue = (newInputValue) => {
      if (!this.calciteInputEl) {
        return;
      }
      this.calciteInputEl.value = newInputValue;
    };
    this.setValue = ({ value, origin = "input" }) => {
      const previousValue = this.value;
      const newValue = formatTimeString(value);
      const newLocalizedValue = localizeTimeString(newValue, this.locale, this.shouldIncludeSeconds());
      this.internalValueChange = origin !== "external" && origin !== "loading";
      const shouldEmit = origin !== "loading" &&
        origin !== "external" &&
        ((value !== this.previousValidValue && !value) ||
          !!(!this.previousValidValue && newValue) ||
          (newValue !== this.previousValidValue && newValue));
      if (value) {
        if (shouldEmit) {
          this.previousValidValue = newValue;
        }
        if (newValue && newValue !== this.value) {
          this.value = newValue;
        }
        this.localizedValue = newLocalizedValue;
      }
      else {
        this.value = value;
        this.localizedValue = null;
      }
      if (origin === "time-picker" || origin === "external") {
        this.setInputValue(newLocalizedValue);
      }
      if (shouldEmit) {
        const changeEvent = this.calciteInputTimePickerChange.emit();
        if (changeEvent.defaultPrevented) {
          this.internalValueChange = false;
          this.value = previousValue;
          this.setInputValue(previousValue);
          this.previousValidValue = previousValue;
        }
        else {
          this.previousValidValue = newValue;
        }
      }
    };
  }
  activeHandler() {
    if (this.disabled) {
      this.active = false;
    }
  }
  handleDisabledChange(value) {
    if (!value) {
      this.active = false;
    }
  }
  localeWatcher(newLocale) {
    this.setInputValue(localizeTimeString(this.value, newLocale, this.shouldIncludeSeconds()));
  }
  valueWatcher(newValue) {
    if (!this.internalValueChange) {
      this.setValue({ value: newValue, origin: "external" });
    }
    this.internalValueChange = false;
  }
  clickHandler(event) {
    if (event.composedPath().includes(this.calciteTimePickerEl)) {
      return;
    }
    this.setFocus();
  }
  keyUpHandler(event) {
    if (event.key === "Escape" && this.active) {
      this.active = false;
    }
  }
  timePickerBlurHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    this.active = false;
  }
  timePickerFocusHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    this.active = true;
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    this.calciteInputEl.setFocus();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  onLabelClick() {
    this.setFocus();
  }
  shouldIncludeSeconds() {
    return this.step < 60;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    if (this.value) {
      this.setValue({ value: isValidTime(this.value) ? this.value : undefined, origin: "loading" });
    }
    connectLabel(this);
    connectForm(this);
  }
  componentDidLoad() {
    this.setInputValue(this.localizedValue);
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
    const popoverId = `${this.referenceElementId}-popover`;
    return (h(Host, null,
      h("div", { "aria-controls": popoverId, "aria-haspopup": "dialog", "aria-label": this.name, "aria-owns": popoverId, id: this.referenceElementId, role: "combobox" },
        h("calcite-input", { disabled: this.disabled, icon: "clock", label: getLabelText(this), onCalciteInputBlur: this.calciteInputBlurHandler, onCalciteInputFocus: this.calciteInputFocusHandler, onCalciteInputInput: this.calciteInputInputHandler, ref: this.setCalciteInputEl, scale: this.scale, step: this.step })),
      h("calcite-popover", { id: popoverId, label: "Time Picker", open: this.active, placement: this.placement, referenceElement: this.referenceElementId },
        h("calcite-time-picker", { intlHour: this.intlHour, intlHourDown: this.intlHourDown, intlHourUp: this.intlHourUp, intlMeridiem: this.intlMeridiem, intlMeridiemDown: this.intlMeridiemDown, intlMeridiemUp: this.intlMeridiemUp, intlMinute: this.intlMinute, intlMinuteDown: this.intlMinuteDown, intlMinuteUp: this.intlMinuteUp, intlSecond: this.intlSecond, intlSecondDown: this.intlSecondDown, intlSecondUp: this.intlSecondUp, lang: this.locale, onCalciteTimePickerChange: this.timePickerChangeHandler, ref: this.setCalciteTimePickerEl, scale: this.scale, step: this.step, value: this.value })),
      h(HiddenFormInputSlot, { component: this })));
  }
  static get is() { return "calcite-input-time-picker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["input-time-picker.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["input-time-picker.css"]
  }; }
  static get properties() { return {
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
        "text": "The active state of the time input"
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    },
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
        "text": "The disabled state of the time input"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "intlHour": {
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
        "text": "aria-label for the hour input"
      },
      "attribute": "intl-hour",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "aria-label for the hour down button"
      },
      "attribute": "intl-hour-down",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "aria-label for the hour up button"
      },
      "attribute": "intl-hour-up",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "aria-label for the meridiem (am/pm) input"
      },
      "attribute": "intl-meridiem",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "aria-label for the meridiem (am/pm) down button"
      },
      "attribute": "intl-meridiem-down",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "aria-label for the meridiem (am/pm) up button"
      },
      "attribute": "intl-meridiem-up",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "aria-label for the minute input"
      },
      "attribute": "intl-minute",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "aria-label for the minute down button"
      },
      "attribute": "intl-minute-down",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "aria-label for the minute up button"
      },
      "attribute": "intl-minute-up",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "aria-label for the second input"
      },
      "attribute": "intl-second",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "aria-label for the second down button"
      },
      "attribute": "intl-second-down",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "aria-label for the second up button"
      },
      "attribute": "intl-second-up",
      "reflect": false
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
        "text": "The name of the time input"
      },
      "attribute": "name",
      "reflect": false
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
        "text": "The scale (size) of the time input"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "placement": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PopperPlacement",
        "resolved": "Placement | PlacementRtl | VariationRtl",
        "references": {
          "PopperPlacement": {
            "location": "import",
            "path": "../../utils/popper"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "name": "see",
            "text": "[PopperPlacement](https://github.com/Esri/calcite-components/blob/master/src/utils/popper.ts#L25)"
          }],
        "text": "Determines where the popover will be positioned relative to the input."
      },
      "attribute": "placement",
      "reflect": true,
      "defaultValue": "\"auto\""
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
    "localizedValue": {}
  }; }
  static get events() { return [{
      "method": "calciteInputTimePickerChange",
      "name": "calciteInputTimePickerChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fires when the time value is changed as a result of user input."
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
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
        "text": "Sets focus on the component.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "active",
      "methodName": "activeHandler"
    }, {
      "propName": "disabled",
      "methodName": "handleDisabledChange"
    }, {
      "propName": "locale",
      "methodName": "localeWatcher"
    }, {
      "propName": "value",
      "methodName": "valueWatcher"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "clickHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "keyup",
      "method": "keyUpHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteTimePickerBlur",
      "method": "timePickerBlurHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteTimePickerFocus",
      "method": "timePickerFocusHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
