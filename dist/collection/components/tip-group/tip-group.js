/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Prop, h } from "@stencil/core";
/**
 * @slot - A slot for adding `calcite-tip`s.
 */
export class TipGroup {
  render() {
    return h("slot", null);
  }
  static get is() { return "calcite-tip-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tip-group.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tip-group.css"]
  }; }
  static get properties() { return {
    "groupTitle": {
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
        "text": "The title used for all nested tips."
      },
      "attribute": "group-title",
      "reflect": false
    }
  }; }
}
