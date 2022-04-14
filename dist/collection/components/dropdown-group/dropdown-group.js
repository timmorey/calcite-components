/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, Event, h, Host, Listen, Prop } from "@stencil/core";
import { getElementProp } from "../../utils/dom";
import { CSS } from "./resources";
/**
 * @slot - A slot for adding `calcite-dropdown-item`s.
 */
export class DropdownGroup {
  constructor() {
    /** specify the selection mode - multi (allow any number of (or no) active items), single (allow and require one active item),
     none (no active items), defaults to single */
    this.selectionMode = "single";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.groupPosition = this.getGroupPosition();
  }
  render() {
    const scale = this.scale || getElementProp(this.el, "scale", "m");
    const groupTitle = this.groupTitle ? (h("span", { "aria-hidden": "true", class: "dropdown-title" }, this.groupTitle)) : null;
    const dropdownSeparator = this.groupPosition > 0 ? h("div", { class: "dropdown-separator", role: "separator" }) : null;
    return (h(Host, { role: "menu" },
      h("div", { class: {
          container: true,
          [CSS.containerSmall]: scale === "s",
          [CSS.containerMedium]: scale === "m",
          [CSS.containerLarge]: scale === "l"
        }, title: this.groupTitle },
        dropdownSeparator,
        groupTitle,
        h("slot", null))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  updateActiveItemOnChange(event) {
    this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
    this.requestedDropdownItem = event.detail.requestedDropdownItem;
    this.calciteDropdownItemChange.emit({
      requestedDropdownGroup: this.requestedDropdownGroup,
      requestedDropdownItem: this.requestedDropdownItem
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  getGroupPosition() {
    return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"), this.el);
  }
  static get is() { return "calcite-dropdown-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["dropdown-group.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["dropdown-group.css"]
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
        "text": "optionally set a group title for display"
      },
      "attribute": "group-title",
      "reflect": true
    },
    "selectionMode": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "SelectionMode",
        "resolved": "\"multi\" | \"none\" | \"single\"",
        "references": {
          "SelectionMode": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the selection mode - multi (allow any number of (or no) active items), single (allow and require one active item),\nnone (no active items), defaults to single"
      },
      "attribute": "selection-mode",
      "reflect": true,
      "defaultValue": "\"single\""
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
        "text": "Specifies the size of the action."
      },
      "attribute": "scale",
      "reflect": true
    }
  }; }
  static get events() { return [{
      "method": "calciteDropdownItemChange",
      "name": "calciteDropdownItemChange",
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
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "calciteDropdownItemSelect",
      "method": "updateActiveItemOnChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
