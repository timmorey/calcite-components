/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Prop, Element, Listen, Method, Event, h, State, Host } from "@stencil/core";
import { guid } from "../../utils/guid";
import { nodeListToArray } from "../../utils/dom";
/**
 * @slot - A slot for adding custom content.
 */
export class Tab {
  constructor() {
    /**
     * Show this tab
     */
    this.active = false;
    /** @internal Parent tabs component scale value */
    this.scale = "m";
    this.guid = `calcite-tab-title-${guid()}`;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const id = this.el.id || this.guid;
    return (h(Host, { "aria-expanded": this.active.toString(), "aria-labelledby": this.labeledBy, id: id, role: "tabpanel" },
      h("section", null,
        h("slot", null))));
  }
  connectedCallback() {
    this.parentTabsEl = this.el.closest("calcite-tabs");
  }
  componentDidLoad() {
    this.calciteTabRegister.emit();
  }
  componentWillRender() {
    var _a;
    this.scale = (_a = this.parentTabsEl) === null || _a === void 0 ? void 0 : _a.scale;
  }
  disconnectedCallback() {
    var _a;
    // Dispatching to body in order to be listened by other elements that are still connected to the DOM.
    (_a = document.body) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new CustomEvent("calciteTabUnregister", {
      detail: this.el
    }));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  internalTabChangeHandler(event) {
    const targetTabsEl = event
      .composedPath()
      .find((el) => el.tagName === "CALCITE-TABS");
    // to allow `<calcite-tabs>` to be nested we need to make sure this
    // `calciteTabChange` event was actually fired from a within the same
    // `<calcite-tabs>` that is the a parent of this tab.
    if (targetTabsEl !== this.parentTabsEl) {
      return;
    }
    if (this.tab) {
      this.active = this.tab === event.detail.tab;
    }
    else {
      this.getTabIndex().then((index) => {
        this.active = index === event.detail.tab;
      });
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Return the index of this tab within the tab array
   */
  async getTabIndex() {
    return Array.prototype.indexOf.call(nodeListToArray(this.el.parentElement.children).filter((e) => e.matches("calcite-tab")), this.el);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * @internal
   */
  async updateAriaInfo(tabIds = [], titleIds = []) {
    this.labeledBy = titleIds[tabIds.indexOf(this.el.id)] || null;
  }
  static get is() { return "calcite-tab"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tab.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tab.css"]
  }; }
  static get properties() { return {
    "tab": {
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
        "text": "Optionally include a unique name for this tab,\nbe sure to also set this name on the associated title."
      },
      "attribute": "tab",
      "reflect": true
    },
    "active": {
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
        "text": "Show this tab"
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    },
    "scale": {
      "type": "string",
      "mutable": true,
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
        "tags": [{
            "name": "internal",
            "text": "Parent tabs component scale value"
          }],
        "text": ""
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    }
  }; }
  static get states() { return {
    "labeledBy": {}
  }; }
  static get events() { return [{
      "method": "calciteTabRegister",
      "name": "calciteTabRegister",
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
  static get methods() { return {
    "getTabIndex": {
      "complexType": {
        "signature": "() => Promise<number>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<number>"
      },
      "docs": {
        "text": "Return the index of this tab within the tab array",
        "tags": []
      }
    },
    "updateAriaInfo": {
      "complexType": {
        "signature": "(tabIds?: string[], titleIds?: string[]) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "internal",
            "text": undefined
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "calciteInternalTabChange",
      "method": "internalTabChangeHandler",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
