/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Build, Component, Element, Event, h, Host, Listen, Method, Prop, State, Watch } from "@stencil/core";
import { guid } from "../../utils/guid";
import { getElementDir, getElementProp } from "../../utils/dom";
import { createObserver } from "../../utils/observers";
import { updateHostInteraction } from "../../utils/interactive";
/**
 * @slot - A slot for adding text.
 */
export class TabTitle {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Show this tab title as selected */
    this.active = false;
    /** Disable this tab title  */
    this.disabled = false;
    /** @internal Parent tabs component bordered value */
    this.bordered = false;
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    /** watches for changing text content **/
    this.mutationObserver = createObserver("mutation", () => this.updateHasText());
    /** determine if there is slotted text for styling purposes */
    this.hasText = false;
    this.guid = `calcite-tab-title-${guid()}`;
  }
  activeTabChanged() {
    if (this.active) {
      this.emitActiveTab(false);
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.setupTextContentObserver();
    this.parentTabNavEl = this.el.closest("calcite-tab-nav");
    this.parentTabsEl = this.el.closest("calcite-tabs");
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    // Dispatching to body in order to be listened by other elements that are still connected to the DOM.
    (_b = document.body) === null || _b === void 0 ? void 0 : _b.dispatchEvent(new CustomEvent("calciteTabTitleUnregister", {
      detail: this.el
    }));
  }
  componentWillLoad() {
    if (Build.isBrowser) {
      this.updateHasText();
    }
    if (this.tab && this.active) {
      this.emitActiveTab(false);
    }
  }
  componentWillRender() {
    if (this.parentTabsEl) {
      this.layout = this.parentTabsEl.layout;
      this.position = this.parentTabsEl.position;
      this.scale = this.parentTabsEl.scale;
      this.bordered = this.parentTabsEl.bordered;
    }
    // handle case when tab-nav is only parent
    if (!this.parentTabsEl && this.parentTabNavEl) {
      this.position = getElementProp(this.parentTabNavEl, "position", this.position);
      this.scale = getElementProp(this.parentTabNavEl, "scale", this.scale);
    }
  }
  render() {
    const id = this.el.id || this.guid;
    const showSideBorders = this.bordered && !this.disabled && this.layout !== "center";
    const iconStartEl = (h("calcite-icon", { class: "calcite-tab-title--icon icon-start", flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: "s" }));
    const iconEndEl = (h("calcite-icon", { class: "calcite-tab-title--icon icon-end", flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: "s" }));
    return (h(Host, { "aria-controls": this.controls, "aria-expanded": this.active.toString(), id: id, role: "tab" },
      h("a", { class: {
          container: true,
          "container--has-text": this.hasText
        }, style: showSideBorders && { width: `${this.parentTabNavEl.indicatorWidth}px` } },
        this.iconStart ? iconStartEl : null,
        h("slot", null),
        this.iconEnd ? iconEndEl : null)));
  }
  async componentDidLoad() {
    this.calciteTabTitleRegister.emit(await this.getTabIdentifier());
  }
  componentDidRender() {
    updateHostInteraction(this, true);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  internalTabChangeHandler(event) {
    const targetTabsEl = event
      .composedPath()
      .find((el) => el.tagName === "CALCITE-TABS");
    if (targetTabsEl !== this.parentTabsEl) {
      return;
    }
    if (this.tab) {
      this.active = this.tab === event.detail.tab;
    }
    else {
      this.getTabIndex().then((index) => {
        this.active = index === event.detail.tab;
      });
    }
    event.stopPropagation();
  }
  onClick() {
    this.emitActiveTab();
  }
  keyDownHandler(e) {
    switch (e.key) {
      case " ":
      case "Enter":
        this.emitActiveTab();
        e.preventDefault();
        break;
      case "ArrowRight":
        if (getElementDir(this.el) === "ltr") {
          this.calciteTabsFocusNext.emit();
        }
        else {
          this.calciteTabsFocusPrevious.emit();
        }
        break;
      case "ArrowLeft":
        if (getElementDir(this.el) === "ltr") {
          this.calciteTabsFocusPrevious.emit();
        }
        else {
          this.calciteTabsFocusNext.emit();
        }
        break;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Return the index of this title within the nav
   */
  async getTabIndex() {
    return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"), this.el);
  }
  /**
   * @internal
   */
  async getTabIdentifier() {
    return this.tab ? this.tab : this.getTabIndex();
  }
  /**
   * @internal
   */
  async updateAriaInfo(tabIds = [], titleIds = []) {
    this.controls = tabIds[titleIds.indexOf(this.el.id)] || null;
  }
  updateHasText() {
    this.hasText = this.el.textContent.trim().length > 0;
  }
  setupTextContentObserver() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
  }
  emitActiveTab(userTriggered = true) {
    if (this.disabled) {
      return;
    }
    const payload = { tab: this.tab };
    this.calciteInternalTabsActivate.emit(payload);
    if (userTriggered) {
      this.calciteTabsActivate.emit(payload);
    }
  }
  static get is() { return "calcite-tab-title"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tab-title.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tab-title.css"]
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
        "text": "Show this tab title as selected"
      },
      "attribute": "active",
      "reflect": true,
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
        "text": "Disable this tab title"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "iconEnd": {
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
        "text": "optionally pass an icon to display at the end of a tab title - accepts calcite ui icon names"
      },
      "attribute": "icon-end",
      "reflect": true
    },
    "iconFlipRtl": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "FlipContext",
        "resolved": "\"both\" | \"end\" | \"start\"",
        "references": {
          "FlipContext": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "flip the icon(s) in rtl"
      },
      "attribute": "icon-flip-rtl",
      "reflect": true
    },
    "iconStart": {
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
        "text": "optionally pass an icon to display at the start of a tab title - accepts calcite ui icon names"
      },
      "attribute": "icon-start",
      "reflect": true
    },
    "layout": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "TabLayout",
        "resolved": "\"center\" | \"inline\"",
        "references": {
          "TabLayout": {
            "location": "import",
            "path": "../tabs/interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "name": "internal",
            "text": "Parent tabs component layout value"
          }],
        "text": ""
      },
      "attribute": "layout",
      "reflect": true
    },
    "position": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "TabPosition",
        "resolved": "\"above\" | \"below\"",
        "references": {
          "TabPosition": {
            "location": "import",
            "path": "../tabs/interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "name": "internal",
            "text": "Parent tabs component or parent tab-nav component's position"
          }],
        "text": ""
      },
      "attribute": "position",
      "reflect": true
    },
    "scale": {
      "type": "string",
      "mutable": true,
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
        "tags": [{
            "name": "internal",
            "text": "Parent tabs component or parent tab-nav component's scale"
          }],
        "text": ""
      },
      "attribute": "scale",
      "reflect": true
    },
    "bordered": {
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
        "tags": [{
            "name": "internal",
            "text": "Parent tabs component bordered value"
          }],
        "text": ""
      },
      "attribute": "bordered",
      "reflect": true,
      "defaultValue": "false"
    },
    "tab": {
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
        "text": "Optionally include a unique name for the tab title,\nbe sure to also set this name on the associated tab."
      },
      "attribute": "tab",
      "reflect": true
    }
  }; }
  static get states() { return {
    "controls": {},
    "hasText": {}
  }; }
  static get events() { return [{
      "method": "calciteTabsActivate",
      "name": "calciteTabsActivate",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "see",
            "text": "[TabChangeEventDetail](https://github.com/Esri/calcite-components/blob/master/src/components/tab/interfaces.ts#L1)"
          }],
        "text": "Fires when a specific tab is activated (`event.details`)"
      },
      "complexType": {
        "original": "TabChangeEventDetail",
        "resolved": "TabChangeEventDetail",
        "references": {
          "TabChangeEventDetail": {
            "location": "import",
            "path": "../tab/interfaces"
          }
        }
      }
    }, {
      "method": "calciteInternalTabsActivate",
      "name": "calciteInternalTabsActivate",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "see",
            "text": "[TabChangeEventDetail](https://github.com/Esri/calcite-components/blob/master/src/components/tab/interfaces.ts#L1)"
          }, {
            "name": "internal",
            "text": undefined
          }],
        "text": "Fires when a specific tab is activated (`event.details`)"
      },
      "complexType": {
        "original": "TabChangeEventDetail",
        "resolved": "TabChangeEventDetail",
        "references": {
          "TabChangeEventDetail": {
            "location": "import",
            "path": "../tab/interfaces"
          }
        }
      }
    }, {
      "method": "calciteTabsFocusNext",
      "name": "calciteTabsFocusNext",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "internal",
            "text": undefined
          }],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calciteTabsFocusPrevious",
      "name": "calciteTabsFocusPrevious",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "internal",
            "text": undefined
          }],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calciteTabTitleRegister",
      "name": "calciteTabTitleRegister",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "internal",
            "text": undefined
          }],
        "text": ""
      },
      "complexType": {
        "original": "TabID",
        "resolved": "number | string",
        "references": {
          "TabID": {
            "location": "import",
            "path": "../tabs/interfaces"
          }
        }
      }
    }]; }
  static get methods() { return {
    "getTabIndex": {
      "complexType": {
        "signature": "() => Promise<number>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<number>"
      },
      "docs": {
        "text": "Return the index of this title within the nav",
        "tags": []
      }
    },
    "getTabIdentifier": {
      "complexType": {
        "signature": "() => Promise<TabID>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "TabID": {
            "location": "import",
            "path": "../tabs/interfaces"
          }
        },
        "return": "Promise<TabID>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "internal",
            "text": undefined
          }]
      }
    },
    "updateAriaInfo": {
      "complexType": {
        "signature": "(tabIds?: string[], titleIds?: string[]) => Promise<void>",
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
        "text": "",
        "tags": [{
            "name": "internal",
            "text": undefined
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "active",
      "methodName": "activeTabChanged"
    }]; }
  static get listeners() { return [{
      "name": "calciteInternalTabChange",
      "method": "internalTabChangeHandler",
      "target": "body",
      "capture": false,
      "passive": false
    }, {
      "name": "click",
      "method": "onClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "keydown",
      "method": "keyDownHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
