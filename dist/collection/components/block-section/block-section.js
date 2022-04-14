/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, Event, Prop, h, Host } from "@stencil/core";
import { getElementDir } from "../../utils/dom";
import { CSS, ICONS, TEXT } from "./resources";
import { guid } from "../../utils/guid";
/**
 * @slot - A slot for adding content to the block section.
 */
export class BlockSection {
  constructor() {
    /**
     * When true, the block's section content will be displayed.
     */
    this.open = false;
    /**
     * This property determines the look of the section toggle.
     * If the value is "switch", a toggle-switch will be displayed.
     * If the value is "button", a clickable header is displayed.
     */
    this.toggleDisplay = "button";
    this.guid = guid();
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleHeaderKeyDown = (event) => {
      if (event.key === " " || event.key === "Enter") {
        this.toggleSection();
        event.preventDefault();
        event.stopPropagation();
      }
    };
    this.toggleSection = () => {
      this.open = !this.open;
      this.calciteBlockSectionToggle.emit();
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderStatusIcon() {
    var _a;
    const { status } = this;
    const statusIcon = (_a = ICONS[status]) !== null && _a !== void 0 ? _a : false;
    const statusIconClasses = {
      [CSS.statusIcon]: true,
      [CSS.valid]: status == "valid",
      [CSS.invalid]: status == "invalid"
    };
    return !!statusIcon ? (h("calcite-icon", { class: statusIconClasses, icon: statusIcon, scale: "s" })) : null;
  }
  render() {
    const { el, intlCollapse, intlExpand, open, text, toggleDisplay } = this;
    const dir = getElementDir(el);
    const arrowIcon = open
      ? ICONS.menuOpen
      : dir === "rtl"
        ? ICONS.menuClosedLeft
        : ICONS.menuClosedRight;
    const toggleLabel = open ? intlCollapse || TEXT.collapse : intlExpand || TEXT.expand;
    const { guid } = this;
    const regionId = `${guid}-region`;
    const buttonId = `${guid}-button`;
    const headerNode = toggleDisplay === "switch" ? (h("div", { "aria-controls": regionId, "aria-label": toggleLabel, class: {
        [CSS.toggle]: true,
        [CSS.toggleSwitch]: true
      }, id: buttonId, onClick: this.toggleSection, onKeyDown: this.handleHeaderKeyDown, tabIndex: 0, title: toggleLabel },
      h("div", { class: CSS.toggleSwitchContent },
        h("span", { class: CSS.toggleSwitchText }, text)),
      h("calcite-switch", { checked: open, label: toggleLabel, scale: "s", tabIndex: -1 }),
      this.renderStatusIcon())) : (h("button", { "aria-controls": regionId, "aria-label": toggleLabel, class: {
        [CSS.sectionHeader]: true,
        [CSS.toggle]: true
      }, id: buttonId, name: toggleLabel, onClick: this.toggleSection },
      h("calcite-icon", { icon: arrowIcon, scale: "s" }),
      h("span", { class: CSS.sectionHeaderText }, text),
      this.renderStatusIcon()));
    return (h(Host, null,
      headerNode,
      h("section", { "aria-expanded": open.toString(), "aria-labelledby": buttonId, class: CSS.content, hidden: !open, id: regionId },
        h("slot", null))));
  }
  static get is() { return "calcite-block-section"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["block-section.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["block-section.css"]
  }; }
  static get properties() { return {
    "intlCollapse": {
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
        "text": "Tooltip used for the toggle when expanded."
      },
      "attribute": "intl-collapse",
      "reflect": false
    },
    "intlExpand": {
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
        "text": "Tooltip used for the toggle when collapsed."
      },
      "attribute": "intl-expand",
      "reflect": false
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
        "text": "When true, the block's section content will be displayed."
      },
      "attribute": "open",
      "reflect": true,
      "defaultValue": "false"
    },
    "status": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Status",
        "resolved": "\"idle\" | \"invalid\" | \"valid\"",
        "references": {
          "Status": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "BlockSection status. Adds indicator to show valid or invalid status."
      },
      "attribute": "status",
      "reflect": true
    },
    "text": {
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
        "text": "Text displayed in the button."
      },
      "attribute": "text",
      "reflect": false
    },
    "toggleDisplay": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "BlockSectionToggleDisplay",
        "resolved": "\"button\" | \"switch\"",
        "references": {
          "BlockSectionToggleDisplay": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "This property determines the look of the section toggle.\nIf the value is \"switch\", a toggle-switch will be displayed.\nIf the value is \"button\", a clickable header is displayed."
      },
      "attribute": "toggle-display",
      "reflect": true,
      "defaultValue": "\"button\""
    }
  }; }
  static get events() { return [{
      "method": "calciteBlockSectionToggle",
      "name": "calciteBlockSectionToggle",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the header has been clicked."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
}
