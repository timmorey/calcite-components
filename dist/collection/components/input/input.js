/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, Event, h, Host, Method, Prop, State, Watch } from "@stencil/core";
import { getElementDir, getElementProp, getSlotted, setRequestedIcon } from "../../utils/dom";
import { CSS, INPUT_TYPE_ICONS, SLOTS } from "./resources";
import { connectLabel, disconnectLabel, getLabelText } from "../../utils/label";
import { connectForm, disconnectForm, HiddenFormInputSlot } from "../../utils/form";
import { getDecimalSeparator, delocalizeNumberString, localizeNumberString } from "../../utils/locale";
import { numberKeys } from "../../utils/key";
import { isValidNumber, parseNumberString, sanitizeNumberString } from "../../utils/number";
import { CSS_UTILITY, TEXT } from "../../utils/resources";
import { decimalPlaces } from "../../utils/math";
import { createObserver } from "../../utils/observers";
import { updateHostInteraction } from "../../utils/interactive";
/**
 * @slot action - A slot for positioning a button next to an input
 */
export class Input {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** specify the alignment of the value of the input */
    this.alignment = "start";
    /** should the input autofocus */
    this.autofocus = false;
    /** optionally display a clear button that displays when field has a value
     * shows by default for search, time, date
     * will not display for type="textarea" */
    this.clearable = false;
    /** is the input disabled  */
    this.disabled = false;
    /** for number values, displays the locale's group separator */
    this.groupSeparator = false;
    /** when true, the component will not be visible */
    this.hidden = false;
    /**
     * string to override English loading text
     * @default "Loading"
     */
    this.intlLoading = TEXT.loading;
    /** flip the icon in rtl */
    this.iconFlipRtl = false;
    /** specify if the input is in loading state */
    this.loading = false;
    /** BCP 47 language tag for desired language and country format */
    this.locale = document.documentElement.lang || "en";
    /**
     * Toggles locale formatting for numbers.
     * @internal
     */
    this.localeFormat = false;
    /** specify the placement of the number buttons */
    this.numberButtonType = "vertical";
    /** When true, a field cannot be modified. */
    this.readOnly = false;
    /** is the input required */
    this.required = false;
    /** specify the scale of the input, defaults to m */
    this.scale = "m";
    /** specify the status of the input field, determines message and icons */
    this.status = "idle";
    /** @internal adds inline styles for text input when slotted in calcite-inline-editable */
    this.editingEnabled = false;
    /**
     * specify the input type
     *
     * Note that the following types add type-specific icons by default: `date`, `email`, `password`, `search`, `tel`, `time`
     */
    this.type = "text";
    /** input value */
    this.value = "";
    /** keep track of the rendered child type */
    this.childElType = "input";
    /** whether the value of the input was changed as a result of user typing or not */
    this.internalValueChange = false;
    this.mutationObserver = createObserver("mutation", () => this.setDisabledAction());
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.keyDownHandler = (event) => {
      /* prevent default behavior for input to move the cursor to the beginning of the input with every ArrowUp press */
      if (event.key === "ArrowUp") {
        event.preventDefault();
      }
      if (this.readOnly || this.disabled) {
        return;
      }
      if (this.isClearable && event.key === "Escape") {
        this.clearInputValue(event);
        event.preventDefault();
      }
    };
    this.clearInputValue = (nativeEvent) => {
      this.setValue({
        committing: true,
        nativeEvent,
        value: ""
      });
    };
    this.inputBlurHandler = () => {
      if (this.type === "number") {
        this.setValue({ value: this.value });
      }
      this.calciteInputBlur.emit({
        element: this.childEl,
        value: this.value
      });
      if (this.preFocusValue !== this.value) {
        this.calciteInputChange.emit();
      }
    };
    this.inputFocusHandler = (event) => {
      const slottedActionEl = getSlotted(this.el, "action");
      if (event.target !== slottedActionEl) {
        this.setFocus();
      }
      this.calciteInputFocus.emit({
        element: this.childEl,
        value: this.value
      });
      this.preFocusValue = this.value;
    };
    this.inputInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      this.setValue({
        nativeEvent,
        value: nativeEvent.target.value
      });
    };
    this.inputKeyDownHandler = (event) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "Enter") {
        this.calciteInputChange.emit();
      }
    };
    this.inputNumberInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      const value = nativeEvent.target.value;
      const delocalizedValue = delocalizeNumberString(value, this.locale);
      if (nativeEvent.inputType === "insertFromPaste") {
        if (!isValidNumber(delocalizedValue)) {
          nativeEvent.preventDefault();
        }
        this.setValue({
          nativeEvent,
          value: parseNumberString(delocalizedValue)
        });
        this.childNumberEl.value = this.localizedValue;
      }
      else {
        this.setValue({
          nativeEvent,
          value: delocalizedValue
        });
      }
    };
    this.inputNumberKeyDownHandler = (event) => {
      if (this.type !== "number" || this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "ArrowUp") {
        this.nudgeNumberValue("up", event);
        return;
      }
      if (event.key === "ArrowDown") {
        this.nudgeNumberValue("down", event);
        return;
      }
      const supportedKeys = [
        ...numberKeys,
        "ArrowLeft",
        "ArrowRight",
        "Backspace",
        "Delete",
        "Enter",
        "Escape",
        "Tab"
      ];
      if (event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }
      const isShiftTabEvent = event.shiftKey && event.key === "Tab";
      if (supportedKeys.includes(event.key) && (!event.shiftKey || isShiftTabEvent)) {
        if (event.key === "Enter") {
          this.calciteInputChange.emit();
        }
        return;
      }
      const decimalSeparator = getDecimalSeparator(this.locale);
      if (event.key === decimalSeparator) {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && this.childNumberEl.value.indexOf(decimalSeparator) === -1) {
          return;
        }
      }
      if (/[eE]/.test(event.key)) {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && !/[eE]/.test(this.childNumberEl.value)) {
          return;
        }
      }
      if (event.key === "-") {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && this.childNumberEl.value.split("-").length <= 2) {
          return;
        }
      }
      event.preventDefault();
    };
    this.nudgeNumberValue = (direction, nativeEvent) => {
      if ((nativeEvent instanceof KeyboardEvent && nativeEvent.repeat) || this.type !== "number") {
        return;
      }
      const inputMax = this.maxString ? parseFloat(this.maxString) : null;
      const inputMin = this.minString ? parseFloat(this.minString) : null;
      const valueNudgeDelayInMs = 100;
      this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
      if (this.nudgeNumberValueIntervalId) {
        window.clearInterval(this.nudgeNumberValueIntervalId);
      }
      let firstValueNudge = true;
      this.nudgeNumberValueIntervalId = window.setInterval(() => {
        if (firstValueNudge) {
          firstValueNudge = false;
          return;
        }
        this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
      }, valueNudgeDelayInMs);
    };
    this.numberButtonMouseUpAndMouseOutHandler = () => {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    };
    this.numberButtonMouseDownHandler = (event) => {
      event.preventDefault();
      const direction = event.target.dataset.adjustment;
      this.nudgeNumberValue(direction, event);
    };
    this.setChildElRef = (el) => {
      this.childEl = el;
    };
    this.setChildNumberElRef = (el) => {
      this.childNumberEl = el;
    };
    this.setInputValue = (newInputValue) => {
      if (this.type === "text" && !this.childEl) {
        return;
      }
      if (this.type === "number" && !this.childNumberEl) {
        return;
      }
      this[`child${this.type === "number" ? "Number" : ""}El`].value = newInputValue;
    };
    this.setPreviousValue = (newPreviousValue) => {
      this.previousValue =
        this.type === "number"
          ? isValidNumber(newPreviousValue)
            ? newPreviousValue
            : ""
          : newPreviousValue;
    };
    this.setValue = ({ committing = false, nativeEvent, origin = "internal", value }) => {
      const previousLocalizedValue = this.type === "number"
        ? localizeNumberString(this.previousValue, this.locale, this.groupSeparator)
        : "";
      const sanitizedValue = this.type === "number" ? sanitizeNumberString(value) : value;
      const newValue = this.type === "number" && value && !sanitizedValue
        ? isValidNumber(this.previousValue)
          ? this.previousValue
          : ""
        : sanitizedValue;
      const newLocalizedValue = this.type === "number"
        ? localizeNumberString(newValue, this.locale, this.groupSeparator)
        : "";
      this.internalValueChange = origin === "internal" && this.value !== newValue;
      this.setPreviousValue(this.value);
      this.value = newValue;
      if (this.type === "number") {
        this.localizedValue = newLocalizedValue;
      }
      if (origin === "external") {
        this.setInputValue(this.type === "number" ? newLocalizedValue : newValue);
      }
      if (nativeEvent) {
        const calciteInputInputEvent = this.calciteInputInput.emit({
          element: this.childEl,
          nativeEvent,
          value: this.value
        });
        if (calciteInputInputEvent.defaultPrevented) {
          this.value = this.previousValue;
          this.localizedValue = previousLocalizedValue;
        }
        else if (committing) {
          this.calciteInputChange.emit();
        }
      }
    };
    this.inputKeyUpHandler = () => {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    };
  }
  disabledWatcher() {
    this.setDisabledAction();
  }
  /** watcher to update number-to-string for max */
  maxWatcher() {
    var _a;
    this.maxString = ((_a = this.max) === null || _a === void 0 ? void 0 : _a.toString()) || null;
  }
  /** watcher to update number-to-string for min */
  minWatcher() {
    var _a;
    this.minString = ((_a = this.min) === null || _a === void 0 ? void 0 : _a.toString()) || null;
  }
  valueWatcher(newValue) {
    if (!this.internalValueChange) {
      this.setValue({
        origin: "external",
        value: newValue == null || newValue == ""
          ? ""
          : this.type === "number"
            ? isValidNumber(newValue)
              ? newValue
              : this.previousValue || ""
            : newValue
      });
      this.warnAboutInvalidNumberValue(newValue);
    }
    this.internalValueChange = false;
  }
  updateRequestedIcon() {
    this.requestedIcon = setRequestedIcon(INPUT_TYPE_ICONS, this.icon, this.type);
  }
  get isClearable() {
    return !this.isTextarea && (this.clearable || this.type === "search") && this.value.length > 0;
  }
  get isTextarea() {
    return this.childElType === "textarea";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    this.scale = getElementProp(this.el, "scale", this.scale);
    this.status = getElementProp(this.el, "status", this.status);
    this.inlineEditableEl = this.el.closest("calcite-inline-editable");
    if (this.inlineEditableEl) {
      this.editingEnabled = this.inlineEditableEl.editingEnabled || false;
    }
    this.setPreviousValue(this.value);
    if (this.type === "number") {
      this.warnAboutInvalidNumberValue(this.value);
      this.setValue({
        origin: "loading",
        value: isValidNumber(this.value) ? this.value : ""
      });
    }
    connectLabel(this);
    connectForm(this);
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true });
    this.setDisabledAction();
  }
  disconnectedCallback() {
    var _a;
    disconnectLabel(this);
    disconnectForm(this);
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  componentWillLoad() {
    var _a, _b;
    this.childElType = this.type === "textarea" ? "textarea" : "input";
    this.maxString = (_a = this.max) === null || _a === void 0 ? void 0 : _a.toString();
    this.minString = (_b = this.min) === null || _b === void 0 ? void 0 : _b.toString();
    this.requestedIcon = setRequestedIcon(INPUT_TYPE_ICONS, this.icon, this.type);
  }
  componentShouldUpdate(newValue, oldValue, property) {
    if (this.type === "number" && property === "value" && newValue && !isValidNumber(newValue)) {
      this.setValue({
        value: oldValue
      });
      return false;
    }
    return true;
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    var _a, _b;
    if (this.type === "number") {
      (_a = this.childNumberEl) === null || _a === void 0 ? void 0 : _a.focus();
    }
    else {
      (_b = this.childEl) === null || _b === void 0 ? void 0 : _b.focus();
    }
  }
  onLabelClick() {
    this.setFocus();
  }
  incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent) {
    const { value } = this;
    const inputStep = this.step === "any" ? 1 : Math.abs(this.step || 1);
    const inputVal = value && value !== "" ? parseFloat(value) : 0;
    const adjustment = direction === "up" ? 1 : -1;
    const nudgedValue = inputVal + inputStep * adjustment;
    const finalValue = (typeof inputMin === "number" && !isNaN(inputMin) && nudgedValue < inputMin) ||
      (typeof inputMax === "number" && !isNaN(inputMax) && nudgedValue > inputMax)
      ? inputVal
      : nudgedValue;
    const inputValPlaces = decimalPlaces(inputVal);
    const inputStepPlaces = decimalPlaces(inputStep);
    this.setValue({
      committing: true,
      nativeEvent,
      value: finalValue.toFixed(Math.max(inputValPlaces, inputStepPlaces))
    });
  }
  onFormReset() {
    this.setValue({
      value: this.defaultValue
    });
  }
  syncHiddenFormInput(input) {
    var _a, _b, _c, _d;
    if (this.type === "number") {
      input.type = "number";
      input.min = (_b = (_a = this.min) === null || _a === void 0 ? void 0 : _a.toString(10)) !== null && _b !== void 0 ? _b : "";
      input.max = (_d = (_c = this.max) === null || _c === void 0 ? void 0 : _c.toString(10)) !== null && _d !== void 0 ? _d : "";
    }
    else if (this.type === "text") {
      input.type = "text";
      if (this.minLength != null) {
        input.minLength = this.minLength;
      }
      if (this.maxLength != null) {
        input.maxLength = this.maxLength;
      }
    }
    else if (this.type === "password") {
      input.type = "password";
    }
  }
  setDisabledAction() {
    const slottedActionEl = getSlotted(this.el, "action");
    if (!slottedActionEl) {
      return;
    }
    this.disabled
      ? slottedActionEl.setAttribute("disabled", "")
      : slottedActionEl.removeAttribute("disabled");
  }
  warnAboutInvalidNumberValue(value) {
    if (this.type === "number" && value && !isValidNumber(value)) {
      console.warn(`The specified value "${value}" cannot be parsed, or is out of range.`);
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const dir = getElementDir(this.el);
    const loader = (h("div", { class: CSS.loader },
      h("calcite-progress", { label: this.intlLoading, type: "indeterminate" })));
    const inputClearButton = (h("button", { class: CSS.clearButton, disabled: this.disabled || this.readOnly, onClick: this.clearInputValue, tabIndex: this.disabled ? -1 : 0, type: "button" },
      h("calcite-icon", { icon: "x", scale: "s" })));
    const iconEl = (h("calcite-icon", { class: CSS.inputIcon, flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: "s" }));
    const isHorizontalNumberButton = this.numberButtonType === "horizontal";
    const numberButtonsHorizontalUp = (h("button", { class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton
      }, "data-adjustment": "up", disabled: this.disabled || this.readOnly, onMouseDown: this.numberButtonMouseDownHandler, onMouseOut: this.numberButtonMouseUpAndMouseOutHandler, onMouseUp: this.numberButtonMouseUpAndMouseOutHandler, tabIndex: -1, type: "button" },
      h("calcite-icon", { icon: "chevron-up", scale: "s" })));
    const numberButtonsHorizontalDown = (h("button", { class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton
      }, "data-adjustment": "down", disabled: this.disabled || this.readOnly, onMouseDown: this.numberButtonMouseDownHandler, onMouseOut: this.numberButtonMouseUpAndMouseOutHandler, onMouseUp: this.numberButtonMouseUpAndMouseOutHandler, tabIndex: -1, type: "button" },
      h("calcite-icon", { icon: "chevron-down", scale: "s" })));
    const numberButtonsVertical = (h("div", { class: CSS.numberButtonWrapper },
      numberButtonsHorizontalUp,
      numberButtonsHorizontalDown));
    const prefixText = h("div", { class: CSS.prefix }, this.prefixText);
    const suffixText = h("div", { class: CSS.suffix }, this.suffixText);
    const localeNumberInput = this.type === "number" ? (h("input", { "aria-label": getLabelText(this), autofocus: this.autofocus ? true : null, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.el.enterKeyHint, inputMode: this.el.inputMode, key: "localized-input", maxLength: this.maxLength, minLength: this.minLength, name: undefined, onBlur: this.inputBlurHandler, onFocus: this.inputFocusHandler, onInput: this.inputNumberInputHandler, onKeyDown: this.inputNumberKeyDownHandler, onKeyUp: this.inputKeyUpHandler, placeholder: this.placeholder || "", readOnly: this.readOnly, ref: this.setChildNumberElRef, type: "text", value: this.localizedValue })) : null;
    const childEl = this.type !== "number"
      ? [
        h(this.childElType, { "aria-label": getLabelText(this), autofocus: this.autofocus ? true : null, class: {
            [CSS.editingEnabled]: this.editingEnabled,
            [CSS.inlineChild]: !!this.inlineEditableEl
          }, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.el.enterKeyHint, inputMode: this.el.inputMode, max: this.maxString, maxLength: this.maxLength, min: this.minString, minLength: this.minLength, name: this.name, onBlur: this.inputBlurHandler, onFocus: this.inputFocusHandler, onInput: this.inputInputHandler, onKeyDown: this.inputKeyDownHandler, onKeyUp: this.inputKeyUpHandler, placeholder: this.placeholder || "", readOnly: this.readOnly, ref: this.setChildElRef, required: this.required ? true : null, step: this.step, tabIndex: this.disabled || (this.inlineEditableEl && !this.editingEnabled) ? -1 : null, type: this.type, value: this.value }),
        this.isTextarea ? (h("div", { class: CSS.resizeIconWrapper },
          h("calcite-icon", { icon: "chevron-down", scale: "s" }))) : null
      ]
      : null;
    return (h(Host, { onClick: this.inputFocusHandler, onKeyDown: this.keyDownHandler },
      h("div", { class: { [CSS.inputWrapper]: true, [CSS_UTILITY.rtl]: dir === "rtl" } },
        this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly
          ? numberButtonsHorizontalDown
          : null,
        this.prefixText ? prefixText : null,
        h("div", { class: CSS.wrapper },
          localeNumberInput,
          childEl,
          this.isClearable ? inputClearButton : null,
          this.requestedIcon ? iconEl : null,
          this.loading ? loader : null),
        h("div", { class: CSS.actionWrapper },
          h("slot", { name: SLOTS.action })),
        this.type === "number" && this.numberButtonType === "vertical" && !this.readOnly
          ? numberButtonsVertical
          : null,
        this.suffixText ? suffixText : null,
        this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly
          ? numberButtonsHorizontalUp
          : null,
        h(HiddenFormInputSlot, { component: this }))));
  }
  static get is() { return "calcite-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["input.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["input.css"]
  }; }
  static get properties() { return {
    "alignment": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Position",
        "resolved": "\"end\" | \"start\"",
        "references": {
          "Position": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the alignment of the value of the input"
      },
      "attribute": "alignment",
      "reflect": true,
      "defaultValue": "\"start\""
    },
    "autofocus": {
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
        "text": "should the input autofocus"
      },
      "attribute": "autofocus",
      "reflect": false,
      "defaultValue": "false"
    },
    "clearable": {
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
        "text": "optionally display a clear button that displays when field has a value\nshows by default for search, time, date\nwill not display for type=\"textarea\""
      },
      "attribute": "clearable",
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
        "text": "is the input disabled"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "groupSeparator": {
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
        "text": "for number values, displays the locale's group separator"
      },
      "attribute": "group-separator",
      "reflect": false,
      "defaultValue": "false"
    },
    "hidden": {
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
        "text": "when true, the component will not be visible"
      },
      "attribute": "hidden",
      "reflect": false,
      "defaultValue": "false"
    },
    "icon": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "string | boolean",
        "resolved": "boolean | string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "when used as a boolean set to true, show a default recommended icon for certain\ninput types (tel, password, email, date, time, search). You can also pass a\ncalcite-ui-icon name to this prop to display a requested icon for any input type"
      },
      "attribute": "icon",
      "reflect": true
    },
    "intlLoading": {
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
            "text": "\"Loading\""
          }],
        "text": "string to override English loading text"
      },
      "attribute": "intl-loading",
      "reflect": false,
      "defaultValue": "TEXT.loading"
    },
    "iconFlipRtl": {
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
        "text": "flip the icon in rtl"
      },
      "attribute": "icon-flip-rtl",
      "reflect": true,
      "defaultValue": "false"
    },
    "label": {
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
        "text": "Applies to the aria-label attribute on the button or hyperlink"
      },
      "attribute": "label",
      "reflect": false
    },
    "loading": {
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
        "text": "specify if the input is in loading state"
      },
      "attribute": "loading",
      "reflect": true,
      "defaultValue": "false"
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
    "localeFormat": {
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
        "text": "Toggles locale formatting for numbers."
      },
      "attribute": "locale-format",
      "reflect": false,
      "defaultValue": "false"
    },
    "max": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "input max"
      },
      "attribute": "max",
      "reflect": true
    },
    "min": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "input min"
      },
      "attribute": "min",
      "reflect": true
    },
    "maxlength": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "use maxLength instead"
          }],
        "text": "Maximum length of text input."
      },
      "attribute": "maxlength",
      "reflect": true
    },
    "maxLength": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Maximum length of the input value"
      },
      "attribute": "max-length",
      "reflect": true
    },
    "minLength": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Minimum length of the text input"
      },
      "attribute": "min-length",
      "reflect": true
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
        "text": "The name of the input"
      },
      "attribute": "name",
      "reflect": true
    },
    "numberButtonType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "InputPlacement",
        "resolved": "\"horizontal\" | \"none\" | \"vertical\"",
        "references": {
          "InputPlacement": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "specify the placement of the number buttons"
      },
      "attribute": "number-button-type",
      "reflect": true,
      "defaultValue": "\"vertical\""
    },
    "placeholder": {
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
        "text": "explicitly whitelist placeholder attribute"
      },
      "attribute": "placeholder",
      "reflect": false
    },
    "prefixText": {
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
        "text": "optionally add prefix"
      },
      "attribute": "prefix-text",
      "reflect": false
    },
    "readOnly": {
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
        "text": "When true, a field cannot be modified."
      },
      "attribute": "read-only",
      "reflect": false,
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
        "tags": [],
        "text": "is the input required"
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "scale": {
      "type": "string",
      "mutable": true,
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
        "text": "specify the scale of the input, defaults to m"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "status": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "Status",
        "resolved": "\"idle\" | \"invalid\" | \"valid\"",
        "references": {
          "Status": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the status of the input field, determines message and icons"
      },
      "attribute": "status",
      "reflect": true,
      "defaultValue": "\"idle\""
    },
    "step": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "number | \"any\"",
        "resolved": "\"any\" | number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "input step"
      },
      "attribute": "step",
      "reflect": true
    },
    "suffixText": {
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
        "text": "optionally add suffix  *"
      },
      "attribute": "suffix-text",
      "reflect": false
    },
    "editingEnabled": {
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
        "tags": [{
            "name": "internal",
            "text": "adds inline styles for text input when slotted in calcite-inline-editable"
          }],
        "text": ""
      },
      "attribute": "editing-enabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| \"color\"\n    | \"date\"\n    | \"datetime-local\"\n    | \"email\"\n    | \"file\"\n    | \"image\"\n    | \"month\"\n    | \"number\"\n    | \"password\"\n    | \"search\"\n    | \"tel\"\n    | \"text\"\n    | \"textarea\"\n    | \"time\"\n    | \"url\"\n    | \"week\"",
        "resolved": "\"color\" | \"date\" | \"datetime-local\" | \"email\" | \"file\" | \"image\" | \"month\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"textarea\" | \"time\" | \"url\" | \"week\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the input type\n\nNote that the following types add type-specific icons by default: `date`, `email`, `password`, `search`, `tel`, `time`"
      },
      "attribute": "type",
      "reflect": true,
      "defaultValue": "\"text\""
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
        "text": "input value"
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
  static get states() { return {
    "localizedValue": {}
  }; }
  static get events() { return [{
      "method": "calciteInputFocus",
      "name": "calciteInputFocus",
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
      "method": "calciteInputBlur",
      "name": "calciteInputBlur",
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
      "method": "calciteInputInput",
      "name": "calciteInputInput",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "This event fires each time a new value is typed."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calciteInputChange",
      "name": "calciteInputChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "This event fires each time a new value is typed and committed."
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
      "propName": "disabled",
      "methodName": "disabledWatcher"
    }, {
      "propName": "max",
      "methodName": "maxWatcher"
    }, {
      "propName": "min",
      "methodName": "minWatcher"
    }, {
      "propName": "value",
      "methodName": "valueWatcher"
    }, {
      "propName": "icon",
      "methodName": "updateRequestedIcon"
    }, {
      "propName": "type",
      "methodName": "updateRequestedIcon"
    }]; }
}
