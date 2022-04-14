/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, Prop, h } from "@stencil/core";
import { CSS, TEXT } from "./resources";
/**
 * @slot - A slot for adding custom content, primarily loading information.
 */
export class Scrim {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /** string to override English loading text
     * @default "Loading"
     */
    this.intlLoading = TEXT.loading;
    /**
     * Determines if the component will have the loader overlay.
     * Otherwise, will render opaque disabled state.
     */
    this.loading = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Method
  //
  // --------------------------------------------------------------------------
  render() {
    const { el, loading, intlLoading } = this;
    const hasContent = el.innerHTML.trim().length > 0;
    const loaderNode = loading ? h("calcite-loader", { active: true, label: intlLoading }) : null;
    const contentNode = hasContent ? (h("div", { class: CSS.content },
      h("slot", null))) : null;
    return (h("div", { class: CSS.scrim },
      loaderNode,
      contentNode));
  }
  static get is() { return "calcite-scrim"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["scrim.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["scrim.css"]
  }; }
  static get properties() { return {
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
        "text": "Determines if the component will have the loader overlay.\nOtherwise, will render opaque disabled state."
      },
      "attribute": "loading",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
}
