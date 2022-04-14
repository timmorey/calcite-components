/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, h, Prop, Element, Event, Host, Watch } from "@stencil/core";
import { getElementProp } from "../../utils/dom";
import { SLOTS, CSS } from "./resources";
export class RadioGroupItem {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Indicates whether the control is checked. */
    this.checked = false;
    /** flip the icon in rtl */
    this.iconFlipRtl = false;
    /** optionally used with icon, select where to position the icon */
    this.iconPosition = "start";
  }
  handleCheckedChange() {
    this.calciteRadioGroupItemChange.emit();
  }
  render() {
    const { checked, value } = this;
    const scale = getElementProp(this.el, "scale", "m");
    const appearance = getElementProp(this.el, "appearance", "solid");
    const layout = getElementProp(this.el, "layout", "horizontal");
    const iconEl = (h("calcite-icon", { class: CSS.radioGroupItemIcon, flipRtl: this.iconFlipRtl, icon: this.icon, scale: "s" }));
    return (h(Host, { "aria-checked": checked.toString(), role: "radio" },
      h("label", { class: {
          "label--scale-s": scale === "s",
          "label--scale-m": scale === "m",
          "label--scale-l": scale === "l",
          "label--horizontal": layout === "horizontal",
          "label--outline": appearance === "outline"
        } },
        this.icon && this.iconPosition === "start" ? iconEl : null,
        h("slot", null, value),
        h("slot", { name: SLOTS.input }),
        this.icon && this.iconPosition === "end" ? iconEl : null)));
  }
  static get is() { return "calcite-radio-group-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["radio-group-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["radio-group-item.css"]
  }; }
  static get properties() { return {
    "checked": {
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
        "text": "Indicates whether the control is checked."
      },
      "attribute": "checked",
      "reflect": true,
      "defaultValue": "false"
    },
    "icon": {
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
        "text": "optionally pass an icon to display - accepts Calcite UI icon names"
      },
      "attribute": "icon",
      "reflect": true
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
    "iconPosition": {
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "optionally used with icon, select where to position the icon"
      },
      "attribute": "icon-position",
      "reflect": true,
      "defaultValue": "\"start\""
    },
    "value": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any | null",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The control's value."
      },
      "attribute": "value",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "calciteRadioGroupItemChange",
      "name": "calciteRadioGroupItemChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "internal",
            "text": undefined
          }],
        "text": "Fires when the item has been selected."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "checked",
      "methodName": "handleCheckedChange"
    }]; }
}
