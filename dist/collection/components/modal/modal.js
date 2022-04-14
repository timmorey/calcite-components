/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, Event, h, Host, Listen, Method, Prop, State, Watch } from "@stencil/core";
import { ensureId, focusElement, getSlotted, isCalciteFocusable } from "../../utils/dom";
import { queryShadowRoot } from "@a11y/focus-trap/shadow";
import { isFocusable, isHidden } from "@a11y/focus-trap/focusable";
import { TEXT, SLOTS, CSS, ICONS } from "./resources";
import { createObserver } from "../../utils/observers";
import { connectConditionalSlotComponent, disconnectConditionalSlotComponent } from "../../utils/conditionalSlot";
const isFocusableExtended = (el) => {
  return isCalciteFocusable(el) || isFocusable(el);
};
const getFocusableElements = (el) => {
  return queryShadowRoot(el, isHidden, isFocusableExtended);
};
/**
 * @slot header - a slot for adding a modal header
 * @slot content - a slot for adding modal content
 * @slot primary - a slot for adding a primary button
 * @slot secondary - a slot for adding a secondary button
 * @slot back - a slot for adding a back button
 */
export class Modal {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Add the active attribute to open the modal */
    this.active = false;
    /** Optionally pass a function to run before close */
    this.beforeClose = () => Promise.resolve();
    /** Disables the display a close button within the Modal */
    this.disableCloseButton = false;
    /** Disables the closing of the Modal when clicked outside. */
    this.disableOutsideClose = false;
    /** Aria label for the close button */
    this.intlClose = TEXT.close;
    /** Flag to disable the default close on escape behavior */
    this.disableEscape = false;
    /** specify the scale of modal, defaults to m */
    this.scale = "m";
    /** Set the width of the modal. Can use stock sizes or pass a number (in pixels) */
    this.width = "m";
    /** Background color of modal content */
    this.backgroundColor = "white";
    /** Turn off spacing around the content area slot */
    this.noPadding = false;
    //--------------------------------------------------------------------------
    //
    //  Variables
    //
    //--------------------------------------------------------------------------
    this.hasFooter = true;
    this.mutationObserver = createObserver("mutation", () => this.updateFooterVisibility());
    this.activeTransitionProp = "opacity";
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.transitionEnd = (event) => {
      if (event.propertyName === this.activeTransitionProp) {
        this.active ? this.calciteModalOpen.emit() : this.calciteModalClose.emit();
      }
    };
    this.openEnd = () => {
      this.setFocus();
      this.el.removeEventListener("calciteModalOpen", this.openEnd);
    };
    this.handleOutsideClose = () => {
      if (this.disableOutsideClose) {
        return;
      }
      this.close();
    };
    /** Close the modal, first running the `beforeClose` method */
    this.close = () => {
      return this.beforeClose(this.el).then(() => {
        this.active = false;
        focusElement(this.previousActiveElement);
        this.removeOverflowHiddenClass();
      });
    };
    this.focusFirstElement = () => {
      focusElement(this.disableCloseButton ? getFocusableElements(this.el)[0] : this.closeButtonEl);
    };
    this.focusLastElement = () => {
      const focusableElements = getFocusableElements(this.el).filter((el) => !el.getAttribute("data-focus-fence"));
      if (focusableElements.length > 0) {
        focusElement(focusableElements[focusableElements.length - 1]);
      }
      else {
        focusElement(this.closeButtonEl);
      }
    };
    this.updateFooterVisibility = () => {
      this.hasFooter = !!getSlotted(this.el, [SLOTS.back, SLOTS.primary, SLOTS.secondary]);
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    // when modal initially renders, if active was set we need to open as watcher doesn't fire
    if (this.active) {
      this.open();
    }
  }
  connectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
    this.updateFooterVisibility();
    connectConditionalSlotComponent(this);
  }
  disconnectedCallback() {
    var _a;
    this.removeOverflowHiddenClass();
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    disconnectConditionalSlotComponent(this);
  }
  render() {
    return (h(Host, { "aria-describedby": this.contentId, "aria-labelledby": this.titleId, "aria-modal": "true", role: "dialog" },
      h("calcite-scrim", { class: CSS.scrim, onClick: this.handleOutsideClose }),
      this.renderStyle(),
      h("div", { class: "modal", onTransitionEnd: this.transitionEnd },
        h("div", { "data-focus-fence": true, onFocus: this.focusLastElement, tabindex: "0" }),
        h("div", { class: CSS.header },
          this.renderCloseButton(),
          h("header", { class: CSS.title },
            h("slot", { name: CSS.header }))),
        h("div", { class: {
            content: true,
            "content--spaced": !this.noPadding,
            "content--no-footer": !this.hasFooter
          }, ref: (el) => (this.modalContent = el) },
          h("slot", { name: SLOTS.content })),
        this.renderFooter(),
        h("div", { "data-focus-fence": true, onFocus: this.focusFirstElement, tabindex: "0" }))));
  }
  renderFooter() {
    return this.hasFooter ? (h("div", { class: CSS.footer, key: "footer" },
      h("span", { class: CSS.back },
        h("slot", { name: SLOTS.back })),
      h("span", { class: CSS.secondary },
        h("slot", { name: SLOTS.secondary })),
      h("span", { class: CSS.primary },
        h("slot", { name: SLOTS.primary })))) : null;
  }
  renderCloseButton() {
    return !this.disableCloseButton ? (h("button", { "aria-label": this.intlClose, class: CSS.close, key: "button", onClick: this.close, ref: (el) => (this.closeButtonEl = el), title: this.intlClose },
      h("calcite-icon", { icon: ICONS.close, scale: this.scale === "s" ? "s" : this.scale === "m" ? "m" : this.scale === "l" ? "l" : null }))) : null;
  }
  renderStyle() {
    const hasCustomWidth = !isNaN(parseInt(`${this.width}`));
    return hasCustomWidth ? (h("style", null, `
        .modal {
          max-width: ${this.width}px !important;
        }
        @media screen and (max-width: ${this.width}px) {
          .modal {
            height: 100% !important;
            max-height: 100% !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            border-radius: 0 !important;
          }
          .content {
            flex: 1 1 auto !important;
            max-height: unset !important;
          }
        }
      `)) : null;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  handleEscape(e) {
    if (this.active && !this.disableEscape && e.key === "Escape") {
      this.close();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Focus first interactive element
   * @deprecated use `setFocus` instead.
   */
  async focusElement(el) {
    if (el) {
      el.focus();
    }
    return this.setFocus();
  }
  /**
   * Sets focus on the component.
   *
   * By default, will try to focus on any focusable content. If there is none, it will focus on the close button.
   * If you want to focus on the close button, you can use the `close-button` focus ID.
   */
  async setFocus(focusId) {
    const closeButton = this.closeButtonEl;
    return focusElement(focusId === "close-button" ? closeButton : getFocusableElements(this.el)[0] || closeButton);
  }
  /** Set the scroll top of the modal content */
  async scrollContent(top = 0, left = 0) {
    if (this.modalContent) {
      if (this.modalContent.scrollTo) {
        this.modalContent.scrollTo({ top, left, behavior: "smooth" });
      }
      else {
        this.modalContent.scrollTop = top;
        this.modalContent.scrollLeft = left;
      }
    }
  }
  async toggleModal(value, oldValue) {
    if (value !== oldValue) {
      if (value) {
        this.open();
      }
      else if (!value) {
        this.close();
      }
    }
  }
  /** Open the modal */
  open() {
    this.previousActiveElement = document.activeElement;
    this.el.addEventListener("calciteModalOpen", this.openEnd);
    this.active = true;
    const titleEl = getSlotted(this.el, SLOTS.header);
    const contentEl = getSlotted(this.el, SLOTS.content);
    this.titleId = ensureId(titleEl);
    this.contentId = ensureId(contentEl);
    document.documentElement.classList.add(CSS.overflowHidden);
  }
  removeOverflowHiddenClass() {
    document.documentElement.classList.remove(CSS.overflowHidden);
  }
  static get is() { return "calcite-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["modal.css"]
  }; }
  static get properties() { return {
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
        "text": "Add the active attribute to open the modal"
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    },
    "beforeClose": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(el: HTMLElement) => Promise<void>",
        "resolved": "(el: HTMLElement) => Promise<void>",
        "references": {
          "HTMLElement": {
            "location": "global"
          },
          "Promise": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Optionally pass a function to run before close"
      },
      "defaultValue": "() => Promise.resolve()"
    },
    "disableCloseButton": {
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
        "text": "Disables the display a close button within the Modal"
      },
      "attribute": "disable-close-button",
      "reflect": false,
      "defaultValue": "false"
    },
    "disableOutsideClose": {
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
        "text": "Disables the closing of the Modal when clicked outside."
      },
      "attribute": "disable-outside-close",
      "reflect": false,
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Aria label for the close button"
      },
      "attribute": "intl-close",
      "reflect": false,
      "defaultValue": "TEXT.close"
    },
    "docked": {
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
        "text": "Prevent the modal from taking up the entire screen on mobile"
      },
      "attribute": "docked",
      "reflect": true
    },
    "firstFocus": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "HTMLElement",
        "resolved": "HTMLElement",
        "references": {
          "HTMLElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Specify an element to focus when the modal is first opened"
      }
    },
    "disableEscape": {
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
        "text": "Flag to disable the default close on escape behavior"
      },
      "attribute": "disable-escape",
      "reflect": false,
      "defaultValue": "false"
    },
    "scale": {
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the scale of modal, defaults to m"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "width": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "Scale | number",
        "resolved": "\"l\" | \"m\" | \"s\" | number",
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
        "tags": [],
        "text": "Set the width of the modal. Can use stock sizes or pass a number (in pixels)"
      },
      "attribute": "width",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "fullscreen": {
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
        "text": "Set the modal to always be fullscreen (overrides width)"
      },
      "attribute": "fullscreen",
      "reflect": true
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"red\" | \"blue\"",
        "resolved": "\"blue\" | \"red\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Adds a color bar at the top for visual impact,\nUse color to add importance to destructive/workflow dialogs."
      },
      "attribute": "color",
      "reflect": true
    },
    "backgroundColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ModalBackgroundColor",
        "resolved": "\"grey\" | \"white\"",
        "references": {
          "ModalBackgroundColor": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Background color of modal content"
      },
      "attribute": "background-color",
      "reflect": true,
      "defaultValue": "\"white\""
    },
    "noPadding": {
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
        "text": "Turn off spacing around the content area slot"
      },
      "attribute": "no-padding",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "hasFooter": {}
  }; }
  static get events() { return [{
      "method": "calciteModalOpen",
      "name": "calciteModalOpen",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fired when the modal finishes the open animation"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calciteModalClose",
      "name": "calciteModalClose",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fired when the modal finishes the close animation"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "focusElement": {
      "complexType": {
        "signature": "(el?: HTMLElement) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "HTMLElement": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Focus first interactive element",
        "tags": [{
            "name": "deprecated",
            "text": "use `setFocus` instead."
          }]
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
        "text": "Sets focus on the component.\n\nBy default, will try to focus on any focusable content. If there is none, it will focus on the close button.\nIf you want to focus on the close button, you can use the `close-button` focus ID.",
        "tags": []
      }
    },
    "scrollContent": {
      "complexType": {
        "signature": "(top?: number, left?: number) => Promise<void>",
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
        "text": "Set the scroll top of the modal content",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "active",
      "methodName": "toggleModal"
    }]; }
  static get listeners() { return [{
      "name": "keyup",
      "method": "handleEscape",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
