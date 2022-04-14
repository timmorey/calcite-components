/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, h, Listen, Prop } from "@stencil/core";
import { POPOVER_REFERENCE } from "../popover/resources";
import { queryElementRoots, queryElementsRoots } from "../../utils/dom";
/**
 * @slot - A slot for adding elements that reference a 'calcite-popover' by the 'selector' property.
 */
export class PopoverManager {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * CSS Selector to match reference elements for popovers. Reference elements will be identified by this selector in order to open their associated popover.
     * @default `[data-calcite-popover-reference]`
     */
    this.selector = `[${POPOVER_REFERENCE}]`;
    /**
     * Automatically closes any currently open popovers when clicking outside of a popover.
     */
    this.autoClose = false;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.queryPopover = (composedPath) => {
      const { el } = this;
      if (!composedPath.includes(el)) {
        return null;
      }
      const referenceElement = composedPath.find((pathEl) => { var _a; return (_a = pathEl === null || pathEl === void 0 ? void 0 : pathEl.hasAttribute) === null || _a === void 0 ? void 0 : _a.call(pathEl, POPOVER_REFERENCE); });
      if (!referenceElement) {
        return null;
      }
      const id = referenceElement.getAttribute(POPOVER_REFERENCE);
      return queryElementRoots(el, { id });
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return h("slot", null);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  closeOpenPopovers(event) {
    const { autoClose, el } = this;
    const popoverSelector = "calcite-popover";
    const composedPath = event.composedPath();
    const popover = this.queryPopover(composedPath);
    if (popover) {
      popover.toggle();
      return;
    }
    if (autoClose) {
      queryElementsRoots(el, popoverSelector)
        .filter((popover) => popover.open && !composedPath.includes(popover))
        .forEach((popover) => popover.toggle(false));
    }
  }
  static get is() { return "calcite-popover-manager"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["popover-manager.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["popover-manager.css"]
  }; }
  static get properties() { return {
    "selector": {
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
        "tags": [{
            "name": "default",
            "text": "`[data-calcite-popover-reference]`"
          }],
        "text": "CSS Selector to match reference elements for popovers. Reference elements will be identified by this selector in order to open their associated popover."
      },
      "attribute": "selector",
      "reflect": false,
      "defaultValue": "`[${POPOVER_REFERENCE}]`"
    },
    "autoClose": {
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
        "text": "Automatically closes any currently open popovers when clicking outside of a popover."
      },
      "attribute": "auto-close",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "click",
      "method": "closeOpenPopovers",
      "target": "window",
      "capture": true,
      "passive": false
    }]; }
}
