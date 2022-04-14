/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, h, Listen, Prop, Element } from "@stencil/core";
import { TOOLTIP_REFERENCE, TOOLTIP_DELAY_MS } from "../tooltip/resources";
import { queryElementRoots } from "../../utils/dom";
/**
 * @slot - A slot for adding elements that reference a 'calcite-tooltip' by the 'selector' property.
 */
export class TooltipManager {
  constructor() {
    this.hoverTimeouts = new WeakMap();
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * CSS Selector to match reference elements for tooltips. Reference elements will be identified by this selector in order to open their associated tooltip.
     * @default `[data-calcite-tooltip-reference]`
     */
    this.selector = `[${TOOLTIP_REFERENCE}]`;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.queryTooltip = (composedPath) => {
      const { el } = this;
      if (!composedPath.includes(el)) {
        return null;
      }
      const referenceElement = composedPath.find((pathEl) => { var _a; return (_a = pathEl === null || pathEl === void 0 ? void 0 : pathEl.hasAttribute) === null || _a === void 0 ? void 0 : _a.call(pathEl, TOOLTIP_REFERENCE); });
      if (!referenceElement) {
        return null;
      }
      const id = referenceElement.getAttribute(TOOLTIP_REFERENCE);
      return queryElementRoots(el, { id });
    };
    this.clearHoverTimeout = (tooltip) => {
      const { hoverTimeouts } = this;
      if (hoverTimeouts.has(tooltip)) {
        window.clearTimeout(hoverTimeouts.get(tooltip));
        hoverTimeouts.delete(tooltip);
      }
    };
    this.closeExistingTooltip = () => {
      const { tooltipEl } = this;
      if (tooltipEl) {
        this.toggleTooltip(tooltipEl, false);
      }
    };
    this.focusTooltip = ({ tooltip, value }) => {
      this.closeExistingTooltip();
      if (value) {
        this.clearHoverTimeout(tooltip);
      }
      this.toggleTooltip(tooltip, value);
    };
    this.toggleTooltip = (tooltip, value) => {
      tooltip.open = value;
      if (value) {
        this.tooltipEl = tooltip;
      }
    };
    this.hoverToggle = ({ tooltip, value }) => {
      const { hoverTimeouts } = this;
      hoverTimeouts.delete(tooltip);
      if (value) {
        this.closeExistingTooltip();
      }
      this.toggleTooltip(tooltip, value);
    };
    this.hoverTooltip = ({ tooltip, value }) => {
      this.clearHoverTimeout(tooltip);
      const { hoverTimeouts } = this;
      const timeoutId = window.setTimeout(() => this.hoverToggle({ tooltip, value }), TOOLTIP_DELAY_MS || 0);
      hoverTimeouts.set(tooltip, timeoutId);
    };
    this.activeTooltipHover = (event) => {
      const { tooltipEl, hoverTimeouts } = this;
      const { type } = event;
      if (!tooltipEl) {
        return;
      }
      if (type === "mouseover" && event.composedPath().includes(tooltipEl)) {
        this.clearHoverTimeout(tooltipEl);
      }
      else if (type === "mouseout" && !hoverTimeouts.has(tooltipEl)) {
        this.hoverTooltip({ tooltip: tooltipEl, value: false });
      }
    };
    this.hoverEvent = (event, value) => {
      const tooltip = this.queryTooltip(event.composedPath());
      this.activeTooltipHover(event);
      if (!tooltip) {
        return;
      }
      this.hoverTooltip({ tooltip, value });
    };
    this.focusEvent = (event, value) => {
      const tooltip = this.queryTooltip(event.composedPath());
      if (!tooltip || tooltip === this.clickedTooltip) {
        this.clickedTooltip = null;
        return;
      }
      this.focusTooltip({ tooltip, value });
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
  keyUpHandler(event) {
    if (event.key === "Escape") {
      const { tooltipEl } = this;
      if (tooltipEl) {
        this.clearHoverTimeout(tooltipEl);
        this.toggleTooltip(tooltipEl, false);
      }
    }
  }
  mouseEnterShow(event) {
    this.hoverEvent(event, true);
  }
  mouseLeaveHide(event) {
    this.hoverEvent(event, false);
  }
  clickHandler(event) {
    this.clickedTooltip = this.queryTooltip(event.composedPath());
  }
  focusShow(event) {
    this.focusEvent(event, true);
  }
  blurHide(event) {
    this.focusEvent(event, false);
  }
  static get is() { return "calcite-tooltip-manager"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tooltip-manager.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tooltip-manager.css"]
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
            "text": "`[data-calcite-tooltip-reference]`"
          }],
        "text": "CSS Selector to match reference elements for tooltips. Reference elements will be identified by this selector in order to open their associated tooltip."
      },
      "attribute": "selector",
      "reflect": false,
      "defaultValue": "`[${TOOLTIP_REFERENCE}]`"
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "keyup",
      "method": "keyUpHandler",
      "target": "document",
      "capture": false,
      "passive": false
    }, {
      "name": "mouseover",
      "method": "mouseEnterShow",
      "target": undefined,
      "capture": true,
      "passive": true
    }, {
      "name": "mouseout",
      "method": "mouseLeaveHide",
      "target": undefined,
      "capture": true,
      "passive": true
    }, {
      "name": "click",
      "method": "clickHandler",
      "target": undefined,
      "capture": true,
      "passive": false
    }, {
      "name": "focus",
      "method": "focusShow",
      "target": undefined,
      "capture": true,
      "passive": false
    }, {
      "name": "blur",
      "method": "blurHide",
      "target": undefined,
      "capture": true,
      "passive": false
    }]; }
}
