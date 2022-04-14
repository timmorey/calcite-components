/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, Event, forceUpdate, Host, Method, Prop, State, Watch, h } from "@stencil/core";
import { CSS, ARIA_CONTROLS, ARIA_EXPANDED, HEADING_LEVEL, POPOVER_REFERENCE, TEXT, defaultPopoverPlacement } from "./resources";
import { defaultOffsetDistance, createPopper, updatePopper, CSS as PopperCSS, filterComputedPlacements } from "../../utils/popper";
import { guid } from "../../utils/guid";
import { queryElementRoots } from "../../utils/dom";
import { Heading } from "../functional/Heading";
/**
 * @slot - A slot for adding custom content.
 */
export class Popover {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * Display a close button within the Popover.
     * @deprecated use dismissible instead.
     */
    this.closeButton = false;
    /**
     * Display a close button within the Popover.
     */
    this.dismissible = false;
    /**
     * Prevents flipping the popover's placement when it starts to overlap its reference element.
     */
    this.disableFlip = false;
    /**
     * Removes the caret pointer.
     */
    this.disablePointer = false;
    /**
     * Offset the position of the popover away from the reference element.
     * @default 6
     */
    this.offsetDistance = defaultOffsetDistance;
    /**
     * Offset the position of the popover along the reference element.
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
    this.placement = defaultPopoverPlacement;
    /** Text for close button.
     * @default "Close"
     */
    this.intlClose = TEXT.close;
    this.guid = `calcite-popover-${guid()}`;
    this.activeTransitionProp = "opacity";
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setFilteredPlacements = () => {
      const { el, flipPlacements } = this;
      this.filteredFlipPlacements = flipPlacements
        ? filterComputedPlacements(flipPlacements, el)
        : null;
    };
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
    this.setExpandedAttr = () => {
      const { effectiveReferenceElement, open } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      effectiveReferenceElement.setAttribute(ARIA_EXPANDED, open.toString());
    };
    this.addReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      const id = this.getId();
      effectiveReferenceElement.setAttribute(POPOVER_REFERENCE, id);
      effectiveReferenceElement.setAttribute(ARIA_CONTROLS, id);
      this.setExpandedAttr();
    };
    this.removeReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      effectiveReferenceElement.removeAttribute(POPOVER_REFERENCE);
      effectiveReferenceElement.removeAttribute(ARIA_CONTROLS);
      effectiveReferenceElement.removeAttribute(ARIA_EXPANDED);
    };
    this.hide = () => {
      this.open = false;
    };
    this.transitionEnd = (event) => {
      if (event.propertyName === this.activeTransitionProp) {
        this.open ? this.calcitePopoverOpen.emit() : this.calcitePopoverClose.emit();
      }
    };
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements();
  }
  offsetDistanceOffsetHandler() {
    this.reposition();
  }
  offsetSkiddingHandler() {
    this.reposition();
  }
  openHandler() {
    this.reposition();
    this.setExpandedAttr();
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
  connectedCallback() {
    this.setFilteredPlacements();
  }
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
  /** Sets focus on the component. */
  async setFocus(focusId) {
    var _a;
    const { closeButtonEl } = this;
    if (focusId === "close-button" && closeButtonEl) {
      forceUpdate(closeButtonEl);
      closeButtonEl.setFocus();
      return;
    }
    (_a = this.el) === null || _a === void 0 ? void 0 : _a.focus();
  }
  /** Toggles the popover's open property. */
  async toggle(value = !this.open) {
    this.open = value;
  }
  getReferenceElement() {
    const { referenceElement, el } = this;
    return ((typeof referenceElement === "string"
      ? queryElementRoots(el, { id: referenceElement })
      : referenceElement) || null);
  }
  getModifiers() {
    const { arrowEl, disableFlip, disablePointer, offsetDistance, offsetSkidding, filteredFlipPlacements } = this;
    const flipModifier = {
      name: "flip",
      enabled: !disableFlip
    };
    if (filteredFlipPlacements) {
      flipModifier.options = {
        fallbackPlacements: filteredFlipPlacements
      };
    }
    const arrowModifier = {
      name: "arrow",
      enabled: !disablePointer
    };
    if (arrowEl) {
      arrowModifier.options = {
        element: arrowEl
      };
    }
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
    return [arrowModifier, flipModifier, offsetModifier, eventListenerModifier];
  }
  createPopper() {
    this.destroyPopper();
    const { el, placement, effectiveReferenceElement: referenceEl, overlayPositioning } = this;
    const modifiers = this.getModifiers();
    this.popper = createPopper({
      el,
      modifiers,
      overlayPositioning,
      placement,
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
  renderCloseButton() {
    const { dismissible, closeButton, intlClose } = this;
    return dismissible || closeButton ? (h("div", { class: CSS.closeButtonContainer },
      h("calcite-action", { class: CSS.closeButton, onClick: this.hide, ref: (closeButtonEl) => (this.closeButtonEl = closeButtonEl), text: intlClose },
        h("calcite-icon", { icon: "x", scale: "m" })))) : null;
  }
  renderHeader() {
    const { heading, headingLevel } = this;
    const headingNode = heading ? (h(Heading, { class: CSS.heading, level: headingLevel || HEADING_LEVEL }, heading)) : null;
    return headingNode ? (h("div", { class: CSS.header },
      headingNode,
      this.renderCloseButton())) : null;
  }
  render() {
    const { effectiveReferenceElement, heading, label, open, disablePointer } = this;
    const displayed = effectiveReferenceElement && open;
    const hidden = !displayed;
    const arrowNode = !disablePointer ? (h("div", { class: CSS.arrow, ref: (arrowEl) => (this.arrowEl = arrowEl) })) : null;
    return (h(Host, { "aria-hidden": hidden.toString(), "aria-label": label, "calcite-hydrated-hidden": hidden, id: this.getId(), role: "dialog" },
      h("div", { class: {
          [PopperCSS.animation]: true,
          [PopperCSS.animationActive]: displayed
        }, onTransitionEnd: this.transitionEnd },
        arrowNode,
        h("div", { class: {
            [CSS.hasHeader]: !!heading,
            [CSS.container]: true
          } },
          this.renderHeader(),
          h("div", { class: CSS.content },
            h("slot", null)),
          !heading ? this.renderCloseButton() : null))));
  }
  static get is() { return "calcite-popover"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["popover.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["popover.css"]
  }; }
  static get properties() { return {
    "closeButton": {
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
            "text": "use dismissible instead."
          }],
        "text": "Display a close button within the Popover."
      },
      "attribute": "close-button",
      "reflect": true,
      "defaultValue": "false"
    },
    "dismissible": {
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
        "text": "Display a close button within the Popover."
      },
      "attribute": "dismissible",
      "reflect": true,
      "defaultValue": "false"
    },
    "disableFlip": {
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
        "text": "Prevents flipping the popover's placement when it starts to overlap its reference element."
      },
      "attribute": "disable-flip",
      "reflect": true,
      "defaultValue": "false"
    },
    "disablePointer": {
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
        "text": "Removes the caret pointer."
      },
      "attribute": "disable-pointer",
      "reflect": true,
      "defaultValue": "false"
    },
    "flipPlacements": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "ComputedPlacement[]",
        "resolved": "ComputedPlacement[]",
        "references": {
          "ComputedPlacement": {
            "location": "import",
            "path": "../../utils/popper"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Defines the available placements that can be used when a flip occurs."
      }
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
        "text": "Heading text."
      },
      "attribute": "heading",
      "reflect": false
    },
    "headingLevel": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "HeadingLevel",
        "resolved": "1 | 2 | 3 | 4 | 5 | 6",
        "references": {
          "HeadingLevel": {
            "location": "import",
            "path": "../functional/Heading"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Number at which section headings should start for this component."
      },
      "attribute": "heading-level",
      "reflect": false
    },
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
        "text": "Offset the position of the popover away from the reference element."
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
        "text": "Offset the position of the popover along the reference element."
      },
      "attribute": "offset-skidding",
      "reflect": true,
      "defaultValue": "0"
    },
    "open": {
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
      "defaultValue": "defaultPopoverPlacement"
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
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Reference HTMLElement used to position this component according to the placement property. As a convenience, a string ID of the reference element can be used. However, setting this property to use an HTMLElement is preferred so that the component does not need to query the DOM for the referenceElement."
      },
      "attribute": "reference-element",
      "reflect": false
    },
    "intlClose": {
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
            "text": "\"Close\""
          }],
        "text": "Text for close button."
      },
      "attribute": "intl-close",
      "reflect": false,
      "defaultValue": "TEXT.close"
    }
  }; }
  static get states() { return {
    "effectiveReferenceElement": {}
  }; }
  static get events() { return [{
      "method": "calcitePopoverClose",
      "name": "calcitePopoverClose",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fired when the popover is closed"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calcitePopoverOpen",
      "name": "calcitePopoverOpen",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fired when the popover is opened"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
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
    },
    "setFocus": {
      "complexType": {
        "signature": "(focusId?: \"close-button\") => Promise<void>",
        "parameters": [{
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
        "text": "Sets focus on the component.",
        "tags": []
      }
    },
    "toggle": {
      "complexType": {
        "signature": "(value?: boolean) => Promise<void>",
        "parameters": [{
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
        "text": "Toggles the popover's open property.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "flipPlacements",
      "methodName": "flipPlacementsHandler"
    }, {
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
