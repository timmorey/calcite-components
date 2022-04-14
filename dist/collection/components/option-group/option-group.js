/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, h, Prop, Watch, Event, Fragment } from "@stencil/core";
/**
 * @slot - A slot for adding `calcite-option`s.
 */
export class OptionGroup {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * When true, it prevents selection from any of its associated options.
     */
    this.disabled = false;
  }
  handlePropChange() {
    this.calciteOptionGroupChange.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  render() {
    return (h(Fragment, null,
      h("div", null, this.label),
      h("slot", null)));
  }
  static get is() { return "calcite-option-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["option-group.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["option-group.css"]
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
        "text": "When true, it prevents selection from any of its associated options."
      },
      "attribute": "disabled",
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
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The group label. This property is required."
      },
      "attribute": "label",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "calciteOptionGroupChange",
      "name": "calciteOptionGroupChange",
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
  static get watchers() { return [{
      "propName": "disabled",
      "methodName": "handlePropChange"
    }, {
      "propName": "label",
      "methodName": "handlePropChange"
    }]; }
}
