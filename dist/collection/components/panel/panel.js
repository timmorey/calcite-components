/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, Event, Method, Prop, Watch, h, Fragment } from "@stencil/core";
import { CSS, HEADING_LEVEL, ICONS, SLOTS, TEXT } from "./resources";
import { getElementDir, getSlotted } from "../../utils/dom";
import { Heading } from "../functional/Heading";
import { SLOTS as ACTION_MENU_SLOTS } from "../action-menu/resources";
import { connectConditionalSlotComponent, disconnectConditionalSlotComponent } from "../../utils/conditionalSlot";
import { updateHostInteraction } from "../../utils/interactive";
/**
 * @slot - A slot for adding custom content.
 * @slot header-actions-start - A slot for adding actions or content to the start side of the panel header.
 * @slot header-actions-end - A slot for adding actions or content to the end side of the panel header.
 * @slot header-content - A slot for adding custom content to the header.
 * @slot header-menu-actions - A slot for adding an overflow menu with actions inside a dropdown.
 * @slot fab - A slot for adding a `calcite-fab` (floating action button) to perform an action.
 * @slot footer-actions - A slot for adding buttons to the footer.
 * @slot footer - A slot for adding custom content to the footer.
 */
export class Panel {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * Hides the panel.
     */
    this.dismissed = false;
    /**
     * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
     */
    this.disabled = false;
    /**
     * Displays a close button in the trailing side of the header.
     */
    this.dismissible = false;
    /**
     * Shows a back button in the header.
     */
    this.showBackButton = false;
    /**
     * When true, content is waiting to be loaded. This state shows a busy indicator.
     */
    this.loading = false;
    /**
     * Opens the action menu.
     */
    this.menuOpen = false;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setContainerRef = (node) => {
      this.containerEl = node;
    };
    this.setDismissRef = (node) => {
      this.dismissButtonEl = node;
    };
    this.setBackRef = (node) => {
      this.backButtonEl = node;
    };
    this.panelKeyDownHandler = (event) => {
      if (event.key === "Escape") {
        this.dismiss();
      }
    };
    this.dismiss = () => {
      this.dismissed = true;
    };
    this.panelScrollHandler = () => {
      this.calcitePanelScroll.emit();
    };
    this.backButtonClick = () => {
      this.calcitePanelBackClick.emit();
    };
  }
  dismissedHandler() {
    this.calcitePanelDismissedChange.emit();
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
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus(focusId) {
    var _a, _b, _c;
    if (focusId === "dismiss-button") {
      (_a = this.dismissButtonEl) === null || _a === void 0 ? void 0 : _a.setFocus();
      return;
    }
    if (focusId === "back-button") {
      (_b = this.backButtonEl) === null || _b === void 0 ? void 0 : _b.setFocus();
      return;
    }
    (_c = this.containerEl) === null || _c === void 0 ? void 0 : _c.focus();
  }
  /** Scrolls panel content to a particular set of coordinates.
   *
   * ```
   *   myCalcitePanel.scrollContentTo({
   *     left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
   *     top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
   *     behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
   *   });
   * ```
   */
  async scrollContentTo(options) {
    var _a;
    (_a = this.panelScrollEl) === null || _a === void 0 ? void 0 : _a.scrollTo(options);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderBackButton() {
    const { el } = this;
    const rtl = getElementDir(el) === "rtl";
    const { showBackButton, intlBack, backButtonClick } = this;
    const label = intlBack || TEXT.back;
    const icon = rtl ? ICONS.backRight : ICONS.backLeft;
    return showBackButton ? (h("calcite-action", { "aria-label": label, class: CSS.backButton, icon: icon, key: "back-button", onClick: backButtonClick, ref: this.setBackRef, scale: "s", slot: SLOTS.headerActionsStart, text: label })) : null;
  }
  renderHeaderContent() {
    const { heading, headingLevel, summary } = this;
    const headingNode = heading ? (h(Heading, { class: CSS.heading, level: headingLevel || HEADING_LEVEL }, heading)) : null;
    const summaryNode = summary ? h("span", { class: CSS.summary }, summary) : null;
    return headingNode || summaryNode ? (h("div", { class: CSS.headerContent, key: "header-content" },
      headingNode,
      summaryNode)) : null;
  }
  /**
   * Allows user to override the entire header-content node.
   */
  renderHeaderSlottedContent() {
    return (h("div", { class: CSS.headerContent, key: "slotted-header-content" },
      h("slot", { name: SLOTS.headerContent })));
  }
  renderHeaderStartActions() {
    const { el } = this;
    const hasStartActions = getSlotted(el, SLOTS.headerActionsStart);
    return hasStartActions ? (h("div", { class: { [CSS.headerActionsStart]: true, [CSS.headerActions]: true }, key: "header-actions-start" },
      h("slot", { name: SLOTS.headerActionsStart }))) : null;
  }
  renderHeaderActionsEnd() {
    const { dismiss, dismissible, el, intlClose } = this;
    const text = intlClose || TEXT.close;
    const dismissibleNode = dismissible ? (h("calcite-action", { "aria-label": text, icon: ICONS.close, onClick: dismiss, ref: this.setDismissRef, text: text })) : null;
    const slotNode = h("slot", { name: SLOTS.headerActionsEnd });
    const hasEndActions = getSlotted(el, SLOTS.headerActionsEnd);
    return hasEndActions || dismissibleNode ? (h("div", { class: { [CSS.headerActionsEnd]: true, [CSS.headerActions]: true }, key: "header-actions-end" },
      slotNode,
      dismissibleNode)) : null;
  }
  renderMenu() {
    const { el, intlOptions, menuOpen } = this;
    const hasMenuItems = getSlotted(el, SLOTS.headerMenuActions);
    return hasMenuItems ? (h("calcite-action-menu", { flipPlacements: ["top", "bottom"], key: "menu", label: intlOptions || TEXT.options, open: menuOpen, placement: "bottom-end" },
      h("calcite-action", { icon: ICONS.menu, slot: ACTION_MENU_SLOTS.trigger, text: intlOptions || TEXT.options }),
      h("slot", { name: SLOTS.headerMenuActions }))) : null;
  }
  renderHeaderNode() {
    const { el, showBackButton } = this;
    const backButtonNode = this.renderBackButton();
    const hasHeaderSlottedContent = getSlotted(el, SLOTS.headerContent);
    const headerContentNode = hasHeaderSlottedContent
      ? this.renderHeaderSlottedContent()
      : this.renderHeaderContent();
    const actionsNodeStart = this.renderHeaderStartActions();
    const actionsNodeEnd = this.renderHeaderActionsEnd();
    const headerMenuNode = this.renderMenu();
    return actionsNodeStart ||
      headerContentNode ||
      actionsNodeEnd ||
      headerMenuNode ||
      showBackButton ? (h("header", { class: CSS.header },
      backButtonNode,
      actionsNodeStart,
      headerContentNode,
      actionsNodeEnd,
      headerMenuNode)) : null;
  }
  renderFooterNode() {
    const { el } = this;
    const hasFooterSlottedContent = getSlotted(el, SLOTS.footer);
    const hasFooterActions = getSlotted(el, SLOTS.footerActions);
    return hasFooterSlottedContent || hasFooterActions ? (h("footer", { class: CSS.footer, key: "footer" },
      hasFooterSlottedContent ? h("slot", { key: "footer-slot", name: SLOTS.footer }) : null,
      hasFooterActions ? h("slot", { key: "footer-actions-slot", name: SLOTS.footerActions }) : null)) : null;
  }
  renderContent() {
    const { el } = this;
    const hasFab = getSlotted(el, SLOTS.fab);
    const defaultSlotNode = h("slot", { key: "default-slot" });
    const contentWrapperKey = "content-wrapper";
    return hasFab ? (h("div", { class: { [CSS.contentWrapper]: true, [CSS.contentHeight]: true }, key: contentWrapperKey, onScroll: this.panelScrollHandler, ref: (el) => (this.panelScrollEl = el), tabIndex: 0 },
      h("section", { class: CSS.contentContainer }, defaultSlotNode),
      this.renderFab())) : (h("section", { class: { [CSS.contentWrapper]: true, [CSS.contentContainer]: true }, key: contentWrapperKey, onScroll: this.panelScrollHandler, ref: (el) => (this.panelScrollEl = el), tabIndex: 0 }, defaultSlotNode));
  }
  renderFab() {
    return (h("div", { class: CSS.fabContainer },
      h("slot", { name: SLOTS.fab })));
  }
  render() {
    const { dismissed, dismissible, loading, panelKeyDownHandler } = this;
    const panelNode = (h("article", { "aria-busy": loading.toString(), class: CSS.container, hidden: dismissible && dismissed, onKeyDown: panelKeyDownHandler, ref: this.setContainerRef, tabIndex: dismissible ? 0 : -1 },
      this.renderHeaderNode(),
      this.renderContent(),
      this.renderFooterNode()));
    return (h(Fragment, null,
      loading ? h("calcite-scrim", { loading: loading }) : null,
      panelNode));
  }
  static get is() { return "calcite-panel"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["panel.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["panel.css"]
  }; }
  static get properties() { return {
    "dismissed": {
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
        "text": "Hides the panel."
      },
      "attribute": "dismissed",
      "reflect": true,
      "defaultValue": "false"
    },
    "beforeBack": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "() => Promise<void>",
        "resolved": "() => Promise<void>",
        "references": {
          "Promise": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "When provided, this method will be called before it is removed from the parent flow."
      }
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
        "text": "Displays a close button in the trailing side of the header."
      },
      "attribute": "dismissible",
      "reflect": true,
      "defaultValue": "false"
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
    "showBackButton": {
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
        "text": "Shows a back button in the header."
      },
      "attribute": "show-back-button",
      "reflect": true,
      "defaultValue": "false"
    },
    "intlBack": {
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
        "text": "'Back' text string."
      },
      "attribute": "intl-back",
      "reflect": false
    },
    "heightScale": {
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Specifies the maximum height of the panel."
      },
      "attribute": "height-scale",
      "reflect": true
    },
    "widthScale": {
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "This sets width of the panel."
      },
      "attribute": "width-scale",
      "reflect": true
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
    "intlClose": {
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
        "text": "'Close' text string for the close button. The close button will only be shown when 'dismissible' is true."
      },
      "attribute": "intl-close",
      "reflect": false
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
        "tags": [],
        "text": "'Options' text string for the actions menu."
      },
      "attribute": "intl-options",
      "reflect": false
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
    "summary": {
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
        "text": "Summary text. A description displayed underneath the heading."
      },
      "attribute": "summary",
      "reflect": false
    },
    "menuOpen": {
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
        "text": "Opens the action menu."
      },
      "attribute": "menu-open",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "calcitePanelDismissedChange",
      "name": "calcitePanelDismissedChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the close button has been clicked."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calcitePanelScroll",
      "name": "calcitePanelScroll",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the content has been scrolled."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calcitePanelBackClick",
      "name": "calcitePanelBackClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the back button has been clicked."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "setFocus": {
      "complexType": {
        "signature": "(focusId?: \"dismiss-button\" | \"back-button\") => Promise<void>",
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
    "scrollContentTo": {
      "complexType": {
        "signature": "(options?: ScrollToOptions) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "ScrollToOptions": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Scrolls panel content to a particular set of coordinates.\n\n```\n myCalcitePanel.scrollContentTo({\n   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.\n   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element\n   behavior: \"auto\" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).\n });\n```",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "dismissed",
      "methodName": "dismissedHandler"
    }]; }
}
