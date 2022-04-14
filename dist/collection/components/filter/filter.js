/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, Event, Prop, h, Method, Fragment, Watch } from "@stencil/core";
import { debounce, forIn } from "lodash-es";
import { CSS, ICONS, TEXT, DEBOUNCE_TIMEOUT } from "./resources";
import { focusElement } from "../../utils/dom";
import { updateHostInteraction } from "../../utils/interactive";
export class Filter {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * The items to filter through. The filter uses this as the starting point, and returns items
     * that contain the string entered in the input, using a partial match and recursive search.
     *
     * This property is required.
     */
    this.items = [];
    /**
     * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
     */
    this.disabled = false;
    /**
     * The resulting items after filtering.
     *
     * @readonly
     */
    this.filteredItems = [];
    /** specify the scale of filter, defaults to m */
    this.scale = "m";
    /**
     * Filter value.
     */
    this.value = "";
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.filter = debounce((value, emit = false) => {
      const regex = new RegExp(value, "i");
      if (this.items.length === 0) {
        this.updateFiltered([], emit);
        return;
      }
      const find = (input, RE) => {
        let found = false;
        forIn(input, (val) => {
          if (typeof val === "function") {
            return;
          }
          if (Array.isArray(val) || (typeof val === "object" && val !== null)) {
            if (find(val, RE)) {
              found = true;
            }
          }
          else if (RE.test(val)) {
            found = true;
          }
        });
        return found;
      };
      const result = this.items.filter((item) => {
        return find(item, regex);
      });
      this.updateFiltered(result, emit);
    }, DEBOUNCE_TIMEOUT);
    this.inputHandler = (event) => {
      const target = event.target;
      this.value = target.value;
      this.filter(target.value, true);
    };
    this.keyDownHandler = ({ key }) => {
      if (key === "Escape") {
        this.clear();
      }
    };
    this.clear = () => {
      this.value = "";
      this.filter("", true);
      this.setFocus();
    };
  }
  watchItemsHandler() {
    this.filter(this.value);
  }
  valueHandler(value) {
    this.filter(value);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentDidRender() {
    updateHostInteraction(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.filter(this.value);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    focusElement(this.textInput);
  }
  updateFiltered(filtered, emit = false) {
    this.filteredItems.length = 0;
    this.filteredItems = this.filteredItems.concat(filtered);
    if (emit) {
      this.calciteFilterChange.emit();
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { disabled, scale } = this;
    return (h(Fragment, null,
      h("div", { class: CSS.container },
        h("label", null,
          h("calcite-input", { "aria-label": this.intlLabel || TEXT.filterLabel, disabled: disabled, icon: ICONS.search, onCalciteInputInput: this.inputHandler, onKeyDown: this.keyDownHandler, placeholder: this.placeholder, ref: (el) => {
              this.textInput = el;
            }, scale: scale, type: "text", value: this.value })),
        this.value ? (h("button", { "aria-label": this.intlClear || TEXT.clear, class: CSS.clearButton, disabled: disabled, onClick: this.clear },
          h("calcite-icon", { icon: ICONS.close, scale: scale }))) : null)));
  }
  static get is() { return "calcite-filter"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["filter.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["filter.css"]
  }; }
  static get properties() { return {
    "items": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "object[]",
        "resolved": "object[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The items to filter through. The filter uses this as the starting point, and returns items\nthat contain the string entered in the input, using a partial match and recursive search.\n\nThis property is required."
      },
      "defaultValue": "[]"
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
        "text": "When true, disabled prevents interaction. This state shows items with lower opacity/grayed."
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "filteredItems": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "object[]",
        "resolved": "object[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "name": "readonly",
            "text": undefined
          }],
        "text": "The resulting items after filtering."
      },
      "defaultValue": "[]"
    },
    "intlClear": {
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
        "text": "A text label that will appear on the clear button."
      },
      "attribute": "intl-clear",
      "reflect": false
    },
    "intlLabel": {
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
        "text": "A text label that will appear next to the input field."
      },
      "attribute": "intl-label",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Placeholder text for the input element's placeholder attribute"
      },
      "attribute": "placeholder",
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
        "text": "specify the scale of filter, defaults to m"
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
        "text": "Filter value."
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
  static get events() { return [{
      "method": "calciteFilterChange",
      "name": "calciteFilterChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "This event fires when the filter text changes."
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
      "propName": "items",
      "methodName": "watchItemsHandler"
    }, {
      "propName": "value",
      "methodName": "valueHandler"
    }]; }
}
