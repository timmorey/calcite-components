/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, Event, h, Prop, Host } from "@stencil/core";
import { labelDisconnectedEvent, labelConnectedEvent } from "../../utils/label";
import { CSS } from "./resources";
/**
 * @slot - A slot for adding text and a component that can be labeled.
 */
export class Label {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** specify the text alignment of the label */
    this.alignment = "start";
    /**
     * specify the status of the label and any child input / input messages
     * @deprecated set directly on child element instead
     */
    this.status = "idle";
    /** specify the scale of the label, defaults to m */
    this.scale = "m";
    /** is the wrapped element positioned inline with the label slotted text */
    this.layout = "default";
    /** eliminates any space around the label */
    this.disableSpacing = false;
    /**
     * is the label disabled
     *
     * @deprecated use the `disabled` property on the interactive components instead
     */
    this.disabled = false;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.labelClickHandler = (event) => {
      this.calciteInternalLabelClick.emit({
        sourceEvent: event
      });
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    document.dispatchEvent(new CustomEvent(labelConnectedEvent));
  }
  disconnectedCallback() {
    document.dispatchEvent(new CustomEvent(labelDisconnectedEvent));
  }
  render() {
    return (h(Host, { onClick: this.labelClickHandler },
      h("div", { class: CSS.container },
        h("slot", null))));
  }
  static get is() { return "calcite-label"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["label.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["label.css"]
  }; }
  static get properties() { return {
    "alignment": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Alignment",
        "resolved": "\"center\" | \"end\" | \"start\"",
        "references": {
          "Alignment": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the text alignment of the label"
      },
      "attribute": "alignment",
      "reflect": true,
      "defaultValue": "\"start\""
    },
    "status": {
      "type": "string",
      "mutable": false,
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
        "tags": [{
            "name": "deprecated",
            "text": "set directly on child element instead"
          }],
        "text": "specify the status of the label and any child input / input messages"
      },
      "attribute": "status",
      "reflect": true,
      "defaultValue": "\"idle\""
    },
    "for": {
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
        "text": "The id of the input associated with the label"
      },
      "attribute": "for",
      "reflect": true
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
        "text": "specify the scale of the label, defaults to m"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "layout": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"inline\" | \"inline-space-between\" | \"default\"",
        "resolved": "\"default\" | \"inline\" | \"inline-space-between\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "is the wrapped element positioned inline with the label slotted text"
      },
      "attribute": "layout",
      "reflect": true,
      "defaultValue": "\"default\""
    },
    "disableSpacing": {
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
        "text": "eliminates any space around the label"
      },
      "attribute": "disable-spacing",
      "reflect": false,
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
        "tags": [{
            "name": "deprecated",
            "text": "use the `disabled` property on the interactive components instead"
          }],
        "text": "is the label disabled"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "calciteInternalLabelClick",
      "name": "calciteInternalLabelClick",
      "bubbles": false,
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
        "original": "{\n    sourceEvent: MouseEvent;\n  }",
        "resolved": "{ sourceEvent: MouseEvent; }",
        "references": {
          "MouseEvent": {
            "location": "global"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
}
