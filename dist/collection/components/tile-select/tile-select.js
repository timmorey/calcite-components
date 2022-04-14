/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, Event, h, Prop, Listen, Watch, State, Method } from "@stencil/core";
import { guid } from "../../utils/guid";
import { CSS } from "./resources";
import { updateHostInteraction } from "../../utils/interactive";
/**
 * @slot - A slot for adding custom content.
 */
export class TileSelect {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** The checked state of the tile select. */
    this.checked = false;
    /** The disabled state of the tile select. */
    this.disabled = false;
    /** The hidden state of the tile select. */
    this.hidden = false;
    /** Display an interactive radio or checkbox. */
    this.inputEnabled = false;
    /** The side of the tile that the radio or checkbox appears on when inputEnabled is true. */
    this.inputAlignment = "start";
    /** The selection mode of the tile select: radio (single) or checkbox (multiple). */
    this.type = "radio";
    /** specify the width of the tile, defaults to auto */
    this.width = "auto";
    this.guid = `calcite-tile-select-${guid()}`;
    //--------------------------------------------------------------------------
    //
    //  State
    //
    //--------------------------------------------------------------------------
    /** The focused state of the tile-select. */
    this.focused = false;
  }
  checkedChanged(newChecked) {
    this.input.checked = newChecked;
  }
  nameChanged(newName) {
    this.input.name = newName;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    this.input.setFocus();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  checkboxChangeHandler(event) {
    const checkbox = event.target;
    if (checkbox === this.input) {
      this.checked = checkbox.checked;
    }
    event.stopPropagation();
    this.calciteTileSelectChange.emit();
  }
  checkboxFocusBlurHandler(event) {
    const checkbox = event.target;
    if (checkbox === this.input) {
      this.focused = event.detail;
    }
    event.stopPropagation();
  }
  radioButtonChangeHandler(event) {
    const radioButton = event.target;
    if (radioButton === this.input) {
      this.checked = radioButton.checked;
    }
    event.stopPropagation();
    this.calciteTileSelectChange.emit();
  }
  radioButtonCheckedChangeHandler(event) {
    const radioButton = event.target;
    if (radioButton === this.input) {
      this.checked = radioButton.checked;
    }
    event.stopPropagation();
  }
  radioButtonFocusBlurHandler(event) {
    const radioButton = event.target;
    if (radioButton === this.input) {
      this.focused = radioButton.focused;
    }
    event.stopPropagation();
  }
  click(event) {
    const target = event.target;
    const targets = ["calcite-tile", "calcite-tile-select"];
    if (targets.includes(target.localName)) {
      this.input.click();
    }
  }
  mouseenter() {
    if (this.input.localName === "calcite-radio-button") {
      this.input.hovered = true;
    }
    if (this.input.localName === "calcite-checkbox") {
      this.input.hovered = true;
    }
  }
  mouseleave() {
    if (this.input.localName === "calcite-radio-button") {
      this.input.hovered = false;
    }
    if (this.input.localName === "calcite-checkbox") {
      this.input.hovered = false;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.renderInput();
  }
  disconnectedCallback() {
    this.input.parentNode.removeChild(this.input);
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderInput() {
    this.input = document.createElement(this.type === "radio" ? "calcite-radio-button" : "calcite-checkbox");
    this.input.checked = this.checked;
    this.input.disabled = this.disabled;
    this.input.hidden = this.hidden;
    this.input.id = this.guid;
    this.input.label = this.heading || this.name || "";
    if (this.name) {
      this.input.name = this.name;
    }
    if (this.value) {
      this.input.value = this.value != null ? this.value.toString() : "";
    }
    this.el.insertAdjacentElement("beforeend", this.input);
  }
  render() {
    const { checked, description, disabled, focused, heading, icon, inputAlignment, inputEnabled, width } = this;
    return (h("div", { class: {
        checked,
        container: true,
        [CSS.description]: Boolean(description),
        [CSS.descriptionOnly]: Boolean(!heading && !icon && description),
        disabled,
        focused,
        [CSS.heading]: Boolean(heading),
        [CSS.headingOnly]: heading && !icon && !description,
        [CSS.icon]: Boolean(icon),
        [CSS.iconOnly]: !heading && icon && !description,
        [CSS.inputAlignmentEnd]: inputAlignment === "end",
        [CSS.inputAlignmentStart]: inputAlignment === "start",
        [CSS.inputEnabled]: inputEnabled,
        [CSS.largeVisual]: heading && icon && !description,
        [CSS.widthAuto]: width === "auto",
        [CSS.widthFull]: width === "full"
      } },
      h("calcite-tile", { active: checked, description: description, embed: true, heading: heading, icon: icon }),
      h("slot", null)));
  }
  static get is() { return "calcite-tile-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tile-select.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tile-select.css"]
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
        "text": "The checked state of the tile select."
      },
      "attribute": "checked",
      "reflect": true,
      "defaultValue": "false"
    },
    "description": {
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
        "text": "The description text that appears beneath the heading of the tile."
      },
      "attribute": "description",
      "reflect": true
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
        "text": "The disabled state of the tile select."
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "heading": {
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
        "text": "The heading text that appears between the icon and description of the tile."
      },
      "attribute": "heading",
      "reflect": true
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
        "text": "The hidden state of the tile select."
      },
      "attribute": "hidden",
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
        "text": "The icon that appears at the top of the tile."
      },
      "attribute": "icon",
      "reflect": true
    },
    "name": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The name of the tile select.  This name will appear in form submissions as either a radio or checkbox identifier based on the `type` property."
      },
      "attribute": "name",
      "reflect": true
    },
    "inputEnabled": {
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
        "text": "Display an interactive radio or checkbox."
      },
      "attribute": "input-enabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "inputAlignment": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Extract<\"end\" | \"start\", Alignment>",
        "resolved": "\"end\" | \"start\"",
        "references": {
          "Extract": {
            "location": "global"
          },
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
        "text": "The side of the tile that the radio or checkbox appears on when inputEnabled is true."
      },
      "attribute": "input-alignment",
      "reflect": true,
      "defaultValue": "\"start\""
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TileSelectType",
        "resolved": "\"checkbox\" | \"radio\"",
        "references": {
          "TileSelectType": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The selection mode of the tile select: radio (single) or checkbox (multiple)."
      },
      "attribute": "type",
      "reflect": true,
      "defaultValue": "\"radio\""
    },
    "value": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The value of the tile select.  This value will appear in form submissions when this tile select is checked."
      },
      "attribute": "value",
      "reflect": false
    },
    "width": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Extract<\"auto\" | \"full\", Width>",
        "resolved": "\"auto\" | \"full\"",
        "references": {
          "Extract": {
            "location": "global"
          },
          "Width": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the width of the tile, defaults to auto"
      },
      "attribute": "width",
      "reflect": true,
      "defaultValue": "\"auto\""
    }
  }; }
  static get states() { return {
    "focused": {}
  }; }
  static get events() { return [{
      "method": "calciteTileSelectChange",
      "name": "calciteTileSelectChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emits a custom change event.  For checkboxes, it emits when the checkbox is checked or unchecked.  For radios it only emits when it is checked."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
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
      "propName": "checked",
      "methodName": "checkedChanged"
    }, {
      "propName": "name",
      "methodName": "nameChanged"
    }]; }
  static get listeners() { return [{
      "name": "calciteCheckboxChange",
      "method": "checkboxChangeHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteInternalCheckboxFocus",
      "method": "checkboxFocusBlurHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteInternalCheckboxBlur",
      "method": "checkboxFocusBlurHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteRadioButtonChange",
      "method": "radioButtonChangeHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteInternalRadioButtonCheckedChange",
      "method": "radioButtonCheckedChangeHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteInternalRadioButtonFocus",
      "method": "radioButtonFocusBlurHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteInternalRadioButtonBlur",
      "method": "radioButtonFocusBlurHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "click",
      "method": "click",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "mouseenter",
      "method": "mouseenter",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "mouseleave",
      "method": "mouseleave",
      "target": undefined,
      "capture": false,
      "passive": true
    }]; }
}
