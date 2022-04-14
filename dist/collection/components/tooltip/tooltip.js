/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, Host, Method, Prop, State, Watch, h } from "@stencil/core";
import { CSS, TOOLTIP_REFERENCE, ARIA_DESCRIBED_BY } from "./resources";
import { guid } from "../../utils/guid";
import { defaultOffsetDistance, createPopper, updatePopper, CSS as PopperCSS } from "../../utils/popper";
import { queryElementRoots } from "../../utils/dom";
/**
 * @slot - A slot for adding text.
 */
export class Tooltip {
  constructor() {
    /**
     * Offset the position of the tooltip away from the reference element.
     * @default 6
     */
    this.offsetDistance = defaultOffsetDistance;
    /**
     * Offset the position of the tooltip along the reference element.
     */
    this.offsetSkidding = 0;
    /**
     * Display and position the component.
     */
    this.open = false;
    /** Describes the type of positioning to use for the overlaid content. If your element is in a fixed container, use the 'fixed' value. */
    this.overlayPositioning = "absolute";
    /**
     * Determines where the component will be positioned relative to the referenceElement.
     * @see [PopperPlacement](https://github.com/Esri/calcite-components/blob/master/src/utils/popper.ts#L25)
     */
    this.placement = "auto";
    this.guid = `calcite-tooltip-${guid()}`;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setUpReferenceElement = () => {
      this.removeReferences();
      this.effectiveReferenceElement = this.getReferenceElement();
      const { el, referenceElement, effectiveReferenceElement } = this;
      if (referenceElement && !effectiveReferenceElement) {
        console.warn(`${el.tagName}: reference-element id "${referenceElement}" was not found.`, {
          el
        });
      }
      this.addReferences();
      this.createPopper();
    };
    this.getId = () => {
      return this.el.id || this.guid;
    };
    this.addReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      const id = this.getId();
      effectiveReferenceElement.setAttribute(TOOLTIP_REFERENCE, id);
      effectiveReferenceElement.setAttribute(ARIA_DESCRIBED_BY, id);
    };
    this.removeReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      effectiveReferenceElement.removeAttribute(TOOLTIP_REFERENCE);
      effectiveReferenceElement.removeAttribute(ARIA_DESCRIBED_BY);
    };
    this.show = () => {
      this.open = true;
    };
    this.hide = () => {
      this.open = false;
    };
  }
  offsetDistanceOffsetHandler() {
    this.reposition();
  }
  offsetSkiddingHandler() {
    this.reposition();
  }
  openHandler() {
    this.reposition();
  }
  placementHandler() {
    this.reposition();
  }
  referenceElementHandler() {
    this.setUpReferenceElement();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  componentWillLoad() {
    this.setUpReferenceElement();
  }
  componentDidLoad() {
    this.reposition();
  }
  disconnectedCallback() {
    this.removeReferences();
    this.destroyPopper();
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Updates the position of the component. */
  async reposition() {
    const { popper, el, placement } = this;
    const modifiers = this.getModifiers();
    popper
      ? await updatePopper({
        el,
        modifiers,
        placement,
        popper
      })
      : this.createPopper();
  }
  getReferenceElement() {
    const { referenceElement, el } = this;
    return ((typeof referenceElement === "string"
      ? queryElementRoots(el, { id: referenceElement })
      : referenceElement) || null);
  }
  getModifiers() {
    const { arrowEl, offsetDistance, offsetSkidding } = this;
    const arrowModifier = {
      name: "arrow",
      enabled: true,
      options: {
        element: arrowEl
      }
    };
    const offsetModifier = {
      name: "offset",
      enabled: true,
      options: {
        offset: [offsetSkidding, offsetDistance]
      }
    };
    const eventListenerModifier = {
      name: "eventListeners",
      enabled: this.open
    };
    return [arrowModifier, offsetModifier, eventListenerModifier];
  }
  createPopper() {
    this.destroyPopper();
    const { el, placement, effectiveReferenceElement: referenceEl, overlayPositioning } = this;
    const modifiers = this.getModifiers();
    this.popper = createPopper({
      el,
      modifiers,
      placement,
      overlayPositioning,
      referenceEl
    });
  }
  destroyPopper() {
    const { popper } = this;
    if (popper) {
      popper.destroy();
    }
    this.popper = null;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { effectiveReferenceElement, label, open } = this;
    const displayed = effectiveReferenceElement && open;
    const hidden = !displayed;
    return (h(Host, { "aria-hidden": hidden.toString(), "aria-label": label, "calcite-hydrated-hidden": hidden, id: this.getId(), role: "tooltip" },
      h("div", { class: {
          [PopperCSS.animation]: true,
          [PopperCSS.animationActive]: displayed
        } },
        h("div", { class: CSS.arrow, ref: (arrowEl) => (this.arrowEl = arrowEl) }),
        h("div", { class: CSS.container },
          h("slot", null)))));
  }
  static get is() { return "calcite-tooltip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tooltip.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tooltip.css"]
  }; }
  static get properties() { return {
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Accessible name for the component"
      },
      "attribute": "label",
      "reflect": false
    },
    "offsetDistance": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "name": "default",
            "text": "6"
          }],
        "text": "Offset the position of the tooltip away from the reference element."
      },
      "attribute": "offset-distance",
      "reflect": true,
      "defaultValue": "defaultOffsetDistance"
    },
    "offsetSkidding": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Offset the position of the tooltip along the reference element."
      },
      "attribute": "offset-skidding",
      "reflect": true,
      "defaultValue": "0"
    },
    "open": {
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
        "text": "Display and position the component."
      },
      "attribute": "open",
      "reflect": true,
      "defaultValue": "false"
    },
    "overlayPositioning": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "OverlayPositioning",
        "resolved": "\"absolute\" | \"fixed\"",
        "references": {
          "OverlayPositioning": {
            "location": "import",
            "path": "../../utils/popper"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Describes the type of positioning to use for the overlaid content. If your element is in a fixed container, use the 'fixed' value."
      },
      "attribute": "overlay-positioning",
      "reflect": false,
      "defaultValue": "\"absolute\""
    },
    "placement": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PopperPlacement",
        "resolved": "Placement | PlacementRtl | VariationRtl",
        "references": {
          "PopperPlacement": {
            "location": "import",
            "path": "../../utils/popper"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "name": "see",
            "text": "[PopperPlacement](https://github.com/Esri/calcite-components/blob/master/src/utils/popper.ts#L25)"
          }],
        "text": "Determines where the component will be positioned relative to the referenceElement."
      },
      "attribute": "placement",
      "reflect": true,
      "defaultValue": "\"auto\""
    },
    "referenceElement": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "HTMLElement | string",
        "resolved": "HTMLElement | string",
        "references": {
          "HTMLElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Reference HTMLElement used to position this component according to the placement property. As a convenience, a string ID of the reference element can be used. However, setting this property to use an HTMLElement is preferred so that the component does not need to query the DOM for the referenceElement."
      },
      "attribute": "reference-element",
      "reflect": false
    }
  }; }
  static get states() { return {
    "effectiveReferenceElement": {}
  }; }
  static get methods() { return {
    "reposition": {
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
        "text": "Updates the position of the component.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "offsetDistance",
      "methodName": "offsetDistanceOffsetHandler"
    }, {
      "propName": "offsetSkidding",
      "methodName": "offsetSkiddingHandler"
    }, {
      "propName": "open",
      "methodName": "openHandler"
    }, {
      "propName": "placement",
      "methodName": "placementHandler"
    }, {
      "propName": "referenceElement",
      "methodName": "referenceElementHandler"
    }]; }
}
