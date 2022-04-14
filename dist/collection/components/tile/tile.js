/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, Fragment, h, Prop } from "@stencil/core";
import { SLOTS } from "./resources";
import { getSlotted } from "../../utils/dom";
import { connectConditionalSlotComponent, disconnectConditionalSlotComponent } from "../../utils/conditionalSlot";
import { updateHostInteraction } from "../../utils/interactive";
/**
 * @slot content-start - A slot for adding non-actionable elements before the tile content.
 * @slot content-end - A slot for adding non-actionable elements after the tile content.
 */
export class Tile {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** The active state of the tile. */
    this.active = false;
    /**
     * When true, prevents interaction.
     */
    this.disabled = false;
    /** The embed mode of the tile.  When true, renders without a border and padding for use by other components. */
    this.embed = false;
    /**
     * The focused state of the tile.
     * @internal
     */
    this.focused = false;
    /** The hidden state of the tile. */
    this.hidden = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    connectConditionalSlotComponent(this);
  }
  disconnectedCallback() {
    disconnectConditionalSlotComponent(this);
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderTile() {
    const { icon, el, heading, description } = this;
    const isLargeVisual = heading && icon && !description;
    const iconStyle = isLargeVisual
      ? {
        height: "64px",
        width: "64px"
      }
      : undefined;
    return (h("div", { class: { container: true, "large-visual": isLargeVisual } },
      icon && (h("div", { class: "icon" },
        h("calcite-icon", { icon: icon, scale: "l", style: iconStyle }))),
      h("div", { class: "content-container" },
        getSlotted(el, SLOTS.contentStart) ? (h("div", { class: "content-slot-container" },
          h("slot", { name: SLOTS.contentStart }))) : null,
        h("div", { class: "content" },
          heading && h("div", { class: "heading" }, heading),
          description && h("div", { class: "description" }, description)),
        getSlotted(el, SLOTS.contentEnd) ? (h("div", { class: "content-slot-container" },
          h("slot", { name: SLOTS.contentEnd }))) : null)));
  }
  render() {
    return (h(Fragment, null, this.href ? (h("calcite-link", { disabled: this.disabled, href: this.href }, this.renderTile())) : (this.renderTile())));
  }
  static get is() { return "calcite-tile"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tile.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tile.css"]
  }; }
  static get properties() { return {
    "active": {
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
        "text": "The active state of the tile."
      },
      "attribute": "active",
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
        "text": "When true, prevents interaction."
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "embed": {
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
        "text": "The embed mode of the tile.  When true, renders without a border and padding for use by other components."
      },
      "attribute": "embed",
      "reflect": true,
      "defaultValue": "false"
    },
    "focused": {
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
        "text": "The focused state of the tile."
      },
      "attribute": "focused",
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
        "text": "The hidden state of the tile."
      },
      "attribute": "hidden",
      "reflect": true,
      "defaultValue": "false"
    },
    "href": {
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
        "text": "The (optional) url for the tile. (Only applies when embed is set to false)"
      },
      "attribute": "href",
      "reflect": true
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
    }
  }; }
  static get elementRef() { return "el"; }
}
