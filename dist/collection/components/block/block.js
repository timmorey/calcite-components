/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, Event, h, Host, Prop } from "@stencil/core";
import { CSS, HEADING_LEVEL, ICONS, SLOTS, TEXT } from "./resources";
import { getSlotted } from "../../utils/dom";
import { Heading } from "../functional/Heading";
import { connectConditionalSlotComponent, disconnectConditionalSlotComponent } from "../../utils/conditionalSlot";
import { updateHostInteraction } from "../../utils/interactive";
import { guid } from "../../utils/guid";
/**
 * @slot - A slot for adding content to the block.
 * @slot icon - A slot for adding a leading header icon.
 * @slot control - A slot for adding a single HTML input element in a header.
 * @slot header-menu-actions - a slot for adding an overflow menu with actions inside a dropdown.
 */
export class Block {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * When true, this block will be collapsible.
     */
    this.collapsible = false;
    /**
     * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
     */
    this.disabled = false;
    /**
     * When true, displays a drag handle in the header.
     */
    this.dragHandle = false;
    /** string to override English loading text
     * @default "Loading"
     */
    this.intlLoading = TEXT.loading;
    /** Text string used for the actions menu
     * @default "Options"
     */
    this.intlOptions = TEXT.options;
    /**
     * When true, content is waiting to be loaded. This state shows a busy indicator.
     */
    this.loading = false;
    /**
     * When true, the block's content will be displayed.
     */
    this.open = false;
    this.guid = guid();
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.onHeaderClick = () => {
      this.open = !this.open;
      this.calciteBlockToggle.emit();
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentDidRender() {
    updateHostInteraction(this);
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
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderScrim() {
    const { loading } = this;
    const defaultSlot = h("slot", null);
    return [loading ? h("calcite-scrim", { loading: loading }) : null, defaultSlot];
  }
  renderIcon() {
    const { el, status } = this;
    const showingLoadingStatus = this.loading && !this.open;
    const statusIcon = showingLoadingStatus ? ICONS.refresh : ICONS[status];
    const hasIcon = getSlotted(el, SLOTS.icon) || statusIcon;
    const iconEl = !statusIcon ? (h("slot", { key: "icon-slot", name: SLOTS.icon })) : (h("calcite-icon", { class: {
        [CSS.statusIcon]: true,
        [CSS.valid]: status == "valid",
        [CSS.invalid]: status == "invalid",
        [CSS.loading]: showingLoadingStatus
      }, icon: statusIcon, scale: "m" }));
    return hasIcon ? h("div", { class: CSS.icon }, iconEl) : null;
  }
  renderTitle() {
    const { heading, headingLevel, summary } = this;
    return heading || summary ? (h("div", { class: CSS.title },
      h(Heading, { class: CSS.heading, level: headingLevel || HEADING_LEVEL }, heading),
      summary ? h("div", { class: CSS.summary }, summary) : null)) : null;
  }
  render() {
    const { collapsible, el, intlCollapse, intlExpand, loading, open, intlLoading } = this;
    const toggleLabel = open ? intlCollapse || TEXT.collapse : intlExpand || TEXT.expand;
    const headerContent = (h("header", { class: CSS.header },
      this.renderIcon(),
      this.renderTitle()));
    const hasControl = !!getSlotted(el, SLOTS.control);
    const hasMenuActions = !!getSlotted(el, SLOTS.headerMenuActions);
    const collapseIcon = open ? ICONS.opened : ICONS.closed;
    const { guid } = this;
    const regionId = `${guid}-region`;
    const buttonId = `${guid}-button`;
    const headerNode = (h("div", { class: CSS.headerContainer },
      this.dragHandle ? h("calcite-handle", null) : null,
      collapsible ? (h("button", { "aria-controls": regionId, "aria-expanded": collapsible ? open.toString() : null, "aria-label": toggleLabel, class: CSS.toggle, id: buttonId, onClick: this.onHeaderClick, title: toggleLabel },
        headerContent,
        !hasControl && !hasMenuActions ? (h("calcite-icon", { "aria-hidden": "true", class: CSS.toggleIcon, icon: collapseIcon, scale: "s" })) : null)) : (headerContent),
      loading ? (h("calcite-loader", { inline: true, "is-active": true, label: intlLoading })) : hasControl ? (h("div", { class: CSS.controlContainer },
        h("slot", { name: SLOTS.control }))) : null,
      hasMenuActions ? (h("calcite-action-menu", { label: this.intlOptions || TEXT.options },
        h("slot", { name: SLOTS.headerMenuActions }))) : null));
    return (h(Host, null,
      h("article", { "aria-busy": loading.toString(), class: {
          [CSS.article]: true
        } },
        headerNode,
        h("section", { "aria-expanded": this.open.toString(), "aria-labelledby": buttonId, class: CSS.content, hidden: !open, id: regionId }, this.renderScrim()))));
  }
  static get is() { return "calcite-block"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["block.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["block.css"]
  }; }
  static get properties() { return {
    "collapsible": {
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
        "text": "When true, this block will be collapsible."
      },
      "attribute": "collapsible",
      "reflect": false,
      "defaultValue": "false"
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
    "dragHandle": {
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
        "text": "When true, displays a drag handle in the header."
      },
      "attribute": "drag-handle",
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
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Block heading."
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
    "intlOptions": {
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
            "text": "\"Options\""
          }],
        "text": "Text string used for the actions menu"
      },
      "attribute": "intl-options",
      "reflect": false,
      "defaultValue": "TEXT.options"
    },
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
        "text": "When true, content is waiting to be loaded. This state shows a busy indicator."
      },
      "attribute": "loading",
      "reflect": true,
      "defaultValue": "false"
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
        "text": "When true, the block's content will be displayed."
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
        "text": "Block status. Updates or adds icon to show related icon and color."
      },
      "attribute": "status",
      "reflect": true
    },
    "summary": {
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
        "text": "Block summary."
      },
      "attribute": "summary",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "calciteBlockToggle",
      "name": "calciteBlockToggle",
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
