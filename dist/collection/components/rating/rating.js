/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, Event, Fragment, h, Listen, Method, Prop, State } from "@stencil/core";
import { guid } from "../../utils/guid";
import { connectLabel, disconnectLabel } from "../../utils/label";
import { connectForm, disconnectForm, HiddenFormInputSlot } from "../../utils/form";
import { TEXT } from "./resources";
import { updateHostInteraction } from "../../utils/interactive";
export class Rating {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /** specify the scale of the component, defaults to m */
    this.scale = "m";
    /** the value of the rating component */
    this.value = 0;
    /** is the rating component in a selectable mode */
    this.readOnly = false;
    /** is the rating component in a selectable mode */
    this.disabled = false;
    /** Show average and count data summary chip (if available) */
    this.showChip = false;
    /** Localized string for "Rating" (used for aria label)
     * @default "Rating"
     */
    this.intlRating = TEXT.rating;
    /** Localized string for labelling each star, `${num}` in the string will be replaced by the number
     * @default "Stars: ${num}"
     */
    this.intlStars = TEXT.stars;
    /**
     * When true, makes the component required for form-submission.
     *
     * @internal
     */
    this.required = false;
    this.guid = `calcite-ratings-${guid()}`;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
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
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  blurHandler() {
    this.hasFocus = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderStars() {
    return [1, 2, 3, 4, 5].map((i) => {
      const selected = this.value >= i;
      const average = this.average && !this.value && i <= this.average;
      const hovered = i <= this.hoverValue;
      const fraction = this.average && this.average + 1 - i;
      const partial = !this.value && !hovered && fraction > 0 && fraction < 1;
      const focused = this.hasFocus && this.focusValue === i;
      return (h("span", { class: { wrapper: true } },
        h("label", { class: { star: true, focused, selected, average, hovered, partial }, htmlFor: `${this.guid}-${i}`, onMouseOver: () => {
            this.hoverValue = i;
          } },
          h("calcite-icon", { "aria-hidden": "true", class: "icon", icon: selected || average || this.readOnly ? "star-f" : "star", scale: this.scale }),
          partial && (h("div", { class: "fraction", style: { width: `${fraction * 100}%` } },
            h("calcite-icon", { icon: "star-f", scale: this.scale }))),
          h("span", { class: "visually-hidden" }, this.intlStars.replace("${num}", `${i}`))),
        h("input", { checked: i === this.value, class: "visually-hidden", disabled: this.disabled || this.readOnly, id: `${this.guid}-${i}`, name: this.guid, onChange: () => this.updateValue(i), onClick: (event) => 
          // click is fired from the the component's label, so we treat this as an internal event
          event.stopPropagation(), onFocus: () => {
            this.hasFocus = true;
            this.focusValue = i;
          }, ref: (el) => (i === 1 || i === this.value) && (this.inputFocusRef = el), type: "radio", value: i })));
    });
  }
  render() {
    const { disabled, intlRating, showChip, scale, count, average } = this;
    return (h(Fragment, null,
      h("fieldset", { class: "fieldset", disabled: disabled, onBlur: () => (this.hoverValue = null), onMouseLeave: () => (this.hoverValue = null), onTouchEnd: () => (this.hoverValue = null) },
        h("legend", { class: "visually-hidden" }, intlRating),
        this.renderStars()),
      (count || average) && showChip ? (h("calcite-chip", { scale: scale, value: count === null || count === void 0 ? void 0 : count.toString() },
        !!average && h("span", { class: "number--average" }, average.toString()),
        !!count && h("span", { class: "number--count" },
          "(", count === null || count === void 0 ? void 0 :
          count.toString(),
          ")"))) : null,
      h(HiddenFormInputSlot, { component: this })));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.setFocus();
  }
  updateValue(value) {
    this.value = value;
    this.calciteRatingChange.emit({ value });
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    this.inputFocusRef.focus();
  }
  static get is() { return "calcite-rating"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["rating.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["rating.css"]
  }; }
  static get properties() { return {
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
        "text": "specify the scale of the component, defaults to m"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "value": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "the value of the rating component"
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "0"
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
        "text": "is the rating component in a selectable mode"
      },
      "attribute": "read-only",
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
        "text": "is the rating component in a selectable mode"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "showChip": {
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
        "text": "Show average and count data summary chip (if available)"
      },
      "attribute": "show-chip",
      "reflect": true,
      "defaultValue": "false"
    },
    "count": {
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
        "text": "optionally pass a number of previous ratings to display"
      },
      "attribute": "count",
      "reflect": true
    },
    "average": {
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
        "text": "optionally pass a cumulative average rating to display"
      },
      "attribute": "average",
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
        "text": "The name of the rating"
      },
      "attribute": "name",
      "reflect": true
    },
    "intlRating": {
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
            "text": "\"Rating\""
          }],
        "text": "Localized string for \"Rating\" (used for aria label)"
      },
      "attribute": "intl-rating",
      "reflect": false,
      "defaultValue": "TEXT.rating"
    },
    "intlStars": {
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
            "text": "\"Stars: ${num}\""
          }],
        "text": "Localized string for labelling each star, `${num}` in the string will be replaced by the number"
      },
      "attribute": "intl-stars",
      "reflect": false,
      "defaultValue": "TEXT.stars"
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
    }
  }; }
  static get states() { return {
    "hoverValue": {},
    "focusValue": {},
    "hasFocus": {}
  }; }
  static get events() { return [{
      "method": "calciteRatingChange",
      "name": "calciteRatingChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fires when the rating value has changed."
      },
      "complexType": {
        "original": "{ value: number }",
        "resolved": "{ value: number; }",
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
  static get listeners() { return [{
      "name": "blur",
      "method": "blurHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
