/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Event, h, Listen, Element, Prop, Watch, Host, Build, Method } from "@stencil/core";
import { getElementDir } from "../../utils/dom";
import { connectLabel, disconnectLabel } from "../../utils/label";
import { connectForm, disconnectForm, HiddenFormInputSlot } from "../../utils/form";
import { updateHostInteraction } from "../../utils/interactive";
/**
 * @slot - A slot for adding `calcite-radio-group-item`s.
 */
export class RadioGroup {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** specify the appearance style of the radio group, defaults to solid. */
    this.appearance = "solid";
    /** is the radio group disabled  */
    this.disabled = false;
    /**
     * When true, makes the component required for form-submission.
     *
     * @internal
     */
    this.required = false;
    /** specify the layout of the radio group, defaults to horizontal */
    this.layout = "horizontal";
    /** The scale of the radio group */
    this.scale = "m";
    /** The value of the selectedItem */
    this.value = null;
    /** specify the width of the group, defaults to auto */
    this.width = "auto";
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.handleClick = (event) => {
      if (event.target.localName === "calcite-radio-group-item") {
        this.selectItem(event.target, true);
      }
    };
  }
  valueHandler(value) {
    const items = this.getItems();
    items.forEach((item) => (item.checked = item.value === value));
  }
  handleSelectedItemChange(newItem, oldItem) {
    this.value = newItem === null || newItem === void 0 ? void 0 : newItem.value;
    if (newItem === oldItem) {
      return;
    }
    const items = this.getItems();
    const match = Array.from(items)
      .filter((item) => item === newItem)
      .pop();
    if (match) {
      this.selectItem(match);
    }
    else if (items[0]) {
      items[0].tabIndex = 0;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    const items = this.getItems();
    const lastChecked = Array.from(items)
      .filter((item) => item.checked)
      .pop();
    if (lastChecked) {
      this.selectItem(lastChecked);
    }
    else if (items[0]) {
      items[0].tabIndex = 0;
    }
  }
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
  render() {
    return (h(Host, { onClick: this.handleClick, role: "radiogroup" },
      h("slot", null),
      h(HiddenFormInputSlot, { component: this })));
  }
  handleSelected(event) {
    event.stopPropagation();
    event.preventDefault();
    this.selectItem(event.target);
  }
  handleKeyDown(event) {
    const keys = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", " "];
    const key = event.key;
    const { el, selectedItem } = this;
    if (keys.indexOf(key) === -1) {
      return;
    }
    let adjustedKey = key;
    if (getElementDir(el) === "rtl") {
      if (key === "ArrowRight") {
        adjustedKey = "ArrowLeft";
      }
      if (key === "ArrowLeft") {
        adjustedKey = "ArrowRight";
      }
    }
    const items = this.getItems();
    let selectedIndex = -1;
    items.forEach((item, index) => {
      if (item === selectedItem) {
        selectedIndex = index;
      }
    });
    switch (adjustedKey) {
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        const previous = selectedIndex < 1 ? items.item(items.length - 1) : items.item(selectedIndex - 1);
        this.selectItem(previous, true);
        return;
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        const next = selectedIndex === -1 ? items.item(1) : items.item(selectedIndex + 1) || items.item(0);
        this.selectItem(next, true);
        return;
      case " ":
        event.preventDefault();
        this.selectItem(event.target, true);
        return;
      default:
        return;
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    (_a = (this.selectedItem || this.getItems()[0])) === null || _a === void 0 ? void 0 : _a.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.setFocus();
  }
  getItems() {
    return this.el.querySelectorAll("calcite-radio-group-item");
  }
  selectItem(selected, emit = false) {
    if (selected === this.selectedItem) {
      return;
    }
    const items = this.getItems();
    let match = null;
    items.forEach((item) => {
      const matches = item.value === selected.value;
      if ((matches && !item.checked) || (!matches && item.checked)) {
        item.checked = matches;
      }
      item.tabIndex = matches ? 0 : -1;
      if (matches) {
        match = item;
        if (emit) {
          this.calciteRadioGroupChange.emit(match.value);
        }
      }
    });
    this.selectedItem = match;
    if (Build.isBrowser && match) {
      match.focus();
    }
  }
  static get is() { return "calcite-radio-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["radio-group.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["radio-group.css"]
  }; }
  static get properties() { return {
    "appearance": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "RadioAppearance",
        "resolved": "\"outline\" | \"solid\"",
        "references": {
          "RadioAppearance": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the appearance style of the radio group, defaults to solid."
      },
      "attribute": "appearance",
      "reflect": true,
      "defaultValue": "\"solid\""
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
        "text": "is the radio group disabled"
      },
      "attribute": "disabled",
      "reflect": true,
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
    "layout": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Layout",
        "resolved": "\"grid\" | \"horizontal\" | \"vertical\"",
        "references": {
          "Layout": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the layout of the radio group, defaults to horizontal"
      },
      "attribute": "layout",
      "reflect": true,
      "defaultValue": "\"horizontal\""
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
        "text": "The group's name. Gets submitted with the form."
      },
      "attribute": "name",
      "reflect": false
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
        "text": "The scale of the radio group"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
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
        "text": "The value of the selectedItem"
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "null"
    },
    "selectedItem": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "HTMLCalciteRadioGroupItemElement",
        "resolved": "HTMLCalciteRadioGroupItemElement",
        "references": {
          "HTMLCalciteRadioGroupItemElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The group's selected item."
      }
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
        "text": "specify the width of the group, defaults to auto"
      },
      "attribute": "width",
      "reflect": true,
      "defaultValue": "\"auto\""
    }
  }; }
  static get events() { return [{
      "method": "calciteRadioGroupChange",
      "name": "calciteRadioGroupChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fired when the selected option changes, event detail is the new value"
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
      "propName": "value",
      "methodName": "valueHandler"
    }, {
      "propName": "selectedItem",
      "methodName": "handleSelectedItemChange"
    }]; }
  static get listeners() { return [{
      "name": "calciteRadioGroupItemChange",
      "method": "handleSelected",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "keydown",
      "method": "handleKeyDown",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
