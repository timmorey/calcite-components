/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, Event, h, Prop } from "@stencil/core";
import { getSlotted } from "../../utils/dom";
import { CSS, SLOTS, TEXT } from "./resources";
import { connectConditionalSlotComponent, disconnectConditionalSlotComponent } from "../../utils/conditionalSlot";
/** Cards do not include a grid or bounding container
 * - cards will expand to fit the width of their container
 */
/**
 * @slot - A slot for adding subheader/description content.
 * @slot thumbnail - A slot for adding a thumbnail to the card.
 * @slot title - A slot for adding a card title.
 * @slot subtitle - A slot for adding a card subtitle or short summary.
 * @slot footer-leading - A slot for adding a leading footer.
 * @slot footer-trailing - A slot for adding a trailing footer.
 */
export class Card {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /**  When true, the cards content is waiting to be loaded. This state shows a busy indicator.*/
    this.loading = false;
    /** Indicates whether the card is selected. */
    this.selected = false;
    /** Indicates whether the card is selectable. */
    this.selectable = false;
    /** string to override English loading text
     * @default "Loading"
     */
    this.intlLoading = TEXT.loading;
    /** string to override English select text for checkbox when selectable is true
     * @default "Select"
     */
    this.intlSelect = TEXT.select;
    /** string to override English deselect text for checkbox when selectable is true
     * @default "Deselect"
     */
    this.intlDeselect = TEXT.deselect;
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.cardSelectClick = () => {
      this.selectCard();
    };
    this.cardSelectKeyDown = (e) => {
      switch (e.key) {
        case " ":
        case "Enter":
          this.selectCard();
          e.preventDefault();
          break;
      }
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    connectConditionalSlotComponent(this);
  }
  disonnectedCallback() {
    disconnectConditionalSlotComponent(this);
  }
  render() {
    return (h("div", { class: "calcite-card-container" },
      this.loading ? (h("div", { class: "calcite-card-loader-container" },
        h("calcite-loader", { active: true, label: this.intlLoading }))) : null,
      h("section", { "aria-busy": this.loading.toString(), class: { [CSS.container]: true } },
        this.selectable ? this.renderCheckbox() : null,
        this.renderThumbnail(),
        this.renderHeader(),
        h("div", { class: "card-content" },
          h("slot", null)),
        this.renderFooter())));
  }
  selectCard() {
    this.selected = !this.selected;
    this.calciteCardSelect.emit();
  }
  renderThumbnail() {
    return getSlotted(this.el, SLOTS.thumbnail) ? (h("div", { class: CSS.thumbnailWrapper, key: "thumbnail-wrapper" },
      h("slot", { name: SLOTS.thumbnail }))) : null;
  }
  renderCheckbox() {
    const checkboxLabel = this.selected ? this.intlDeselect : this.intlSelect;
    return (h("calcite-label", { class: CSS.checkboxWrapper, onClick: this.cardSelectClick, onKeyDown: this.cardSelectKeyDown },
      h("calcite-checkbox", { checked: this.selected, label: checkboxLabel })));
  }
  renderHeader() {
    const { el } = this;
    const title = getSlotted(el, SLOTS.title);
    const subtitle = getSlotted(el, SLOTS.subtitle);
    const hasHeader = title || subtitle;
    return hasHeader ? (h("header", { class: CSS.header },
      h("slot", { name: SLOTS.title }),
      h("slot", { name: SLOTS.subtitle }))) : null;
  }
  renderFooter() {
    const { el } = this;
    const leadingFooter = getSlotted(el, SLOTS.footerLeading);
    const trailingFooter = getSlotted(el, SLOTS.footerTrailing);
    const hasFooter = leadingFooter || trailingFooter;
    return hasFooter ? (h("footer", { class: CSS.footer },
      h("slot", { name: SLOTS.footerLeading }),
      h("slot", { name: SLOTS.footerTrailing }))) : null;
  }
  static get is() { return "calcite-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["card.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["card.css"]
  }; }
  static get properties() { return {
    "loading": {
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
        "text": "When true, the cards content is waiting to be loaded. This state shows a busy indicator."
      },
      "attribute": "loading",
      "reflect": true,
      "defaultValue": "false"
    },
    "selected": {
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
        "text": "Indicates whether the card is selected."
      },
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
    },
    "selectable": {
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
        "text": "Indicates whether the card is selectable."
      },
      "attribute": "selectable",
      "reflect": true,
      "defaultValue": "false"
    },
    "intlLoading": {
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
        "tags": [{
            "name": "default",
            "text": "\"Loading\""
          }],
        "text": "string to override English loading text"
      },
      "attribute": "intl-loading",
      "reflect": false,
      "defaultValue": "TEXT.loading"
    },
    "intlSelect": {
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
            "text": "\"Select\""
          }],
        "text": "string to override English select text for checkbox when selectable is true"
      },
      "attribute": "intl-select",
      "reflect": false,
      "defaultValue": "TEXT.select"
    },
    "intlDeselect": {
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
            "text": "\"Deselect\""
          }],
        "text": "string to override English deselect text for checkbox when selectable is true"
      },
      "attribute": "intl-deselect",
      "reflect": false,
      "defaultValue": "TEXT.deselect"
    }
  }; }
  static get events() { return [{
      "method": "calciteCardSelect",
      "name": "calciteCardSelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fired when a selectable card is selected"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
}
