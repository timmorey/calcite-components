/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, Event, h, Host, Listen, Prop, State, Watch } from "@stencil/core";
import { getElementDir, filterDirectChildren } from "../../utils/dom";
import { createObserver } from "../../utils/observers";
/**
 * @slot - A slot for adding `calcite-tab-title`s.
 */
export class TabNav {
  constructor() {
    /** @internal Parent tabs component scale value */
    this.scale = "m";
    /** @internal Parent tabs component layout value */
    this.layout = "inline";
    /** @internal Parent tabs component position value */
    this.position = "below";
    /** @internal Parent tabs component bordered value when layout is "inline" */
    this.bordered = false;
    this.animationActiveDuration = 0.3;
    this.resizeObserver = createObserver("resize", () => {
      // remove active indicator transition duration during resize to prevent wobble
      this.activeIndicatorEl.style.transitionDuration = "0s";
      this.updateActiveWidth();
      this.updateOffsetPosition();
    });
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.handleContainerScroll = () => {
      // remove active indicator transition duration while container is scrolling to prevent wobble
      this.activeIndicatorEl.style.transitionDuration = "0s";
      this.updateOffsetPosition();
    };
  }
  async selectedTabChanged() {
    if (localStorage &&
      this.storageId &&
      this.selectedTab !== undefined &&
      this.selectedTab !== null) {
      localStorage.setItem(`calcite-tab-nav-${this.storageId}`, JSON.stringify(this.selectedTab));
    }
    this.calciteInternalTabChange.emit({
      tab: this.selectedTab
    });
    this.selectedTabEl = await this.getTabTitleById(this.selectedTab);
  }
  selectedTabElChanged() {
    this.updateOffsetPosition();
    this.updateActiveWidth();
    // reset the animation time on tab selection
    this.activeIndicatorEl.style.transitionDuration = `${this.animationActiveDuration}s`;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    this.parentTabsEl = this.el.closest("calcite-tabs");
    (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  componentWillLoad() {
    const storageKey = `calcite-tab-nav-${this.storageId}`;
    if (localStorage && this.storageId && localStorage.getItem(storageKey)) {
      const storedTab = JSON.parse(localStorage.getItem(storageKey));
      this.selectedTab = storedTab;
    }
  }
  componentWillRender() {
    const { parentTabsEl } = this;
    this.layout = parentTabsEl === null || parentTabsEl === void 0 ? void 0 : parentTabsEl.layout;
    this.position = parentTabsEl === null || parentTabsEl === void 0 ? void 0 : parentTabsEl.position;
    this.scale = parentTabsEl === null || parentTabsEl === void 0 ? void 0 : parentTabsEl.scale;
    this.bordered = parentTabsEl === null || parentTabsEl === void 0 ? void 0 : parentTabsEl.bordered;
    // fix issue with active tab-title not lining up with blue indicator
    if (this.selectedTabEl) {
      this.updateOffsetPosition();
    }
  }
  componentDidRender() {
    // if every tab title is active select the first tab.
    if (this.tabTitles.length &&
      this.tabTitles.every((title) => !title.active) &&
      !this.selectedTab) {
      this.tabTitles[0].getTabIdentifier().then((tab) => {
        this.calciteInternalTabChange.emit({
          tab
        });
      });
    }
  }
  render() {
    const dir = getElementDir(this.el);
    const width = `${this.indicatorWidth}px`;
    const offset = `${this.indicatorOffset}px`;
    const indicatorStyle = dir !== "rtl" ? { width, left: offset } : { width, right: offset };
    return (h(Host, { role: "tablist" },
      h("div", { class: "tab-nav", onScroll: this.handleContainerScroll, ref: (el) => (this.tabNavEl = el) },
        h("div", { class: "tab-nav-active-indicator-container", ref: (el) => (this.activeIndicatorContainerEl = el) },
          h("div", { class: "tab-nav-active-indicator", ref: (el) => (this.activeIndicatorEl = el), style: indicatorStyle })),
        h("slot", null))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  focusPreviousTabHandler(e) {
    const currentIndex = this.getIndexOfTabTitle(e.target, this.enabledTabTitles);
    const previousTab = this.enabledTabTitles[currentIndex - 1] ||
      this.enabledTabTitles[this.enabledTabTitles.length - 1];
    previousTab.focus();
    e.stopPropagation();
    e.preventDefault();
  }
  focusNextTabHandler(e) {
    const currentIndex = this.getIndexOfTabTitle(e.target, this.enabledTabTitles);
    const nextTab = this.enabledTabTitles[currentIndex + 1] || this.enabledTabTitles[0];
    nextTab.focus();
    e.stopPropagation();
    e.preventDefault();
  }
  internalActivateTabHandler(e) {
    this.selectedTab = e.detail.tab
      ? e.detail.tab
      : this.getIndexOfTabTitle(e.target);
    e.stopPropagation();
    e.preventDefault();
  }
  activateTabHandler(e) {
    this.calciteTabChange.emit({
      tab: this.selectedTab
    });
    e.stopPropagation();
    e.preventDefault();
  }
  /**
   * Check for active tabs on register and update selected
   */
  updateTabTitles(e) {
    if (e.target.active) {
      this.selectedTab = e.detail;
    }
  }
  globalInternalTabChangeHandler(e) {
    if (this.syncId &&
      e.target !== this.el &&
      e.target.syncId === this.syncId &&
      this.selectedTab !== e.detail.tab) {
      this.selectedTab = e.detail.tab;
      e.stopPropagation();
    }
  }
  updateOffsetPosition() {
    var _a, _b, _c, _d, _e;
    const dir = getElementDir(this.el);
    const navWidth = (_a = this.activeIndicatorContainerEl) === null || _a === void 0 ? void 0 : _a.offsetWidth;
    const tabLeft = (_b = this.selectedTabEl) === null || _b === void 0 ? void 0 : _b.offsetLeft;
    const tabWidth = (_c = this.selectedTabEl) === null || _c === void 0 ? void 0 : _c.offsetWidth;
    const offsetRight = navWidth - (tabLeft + tabWidth);
    this.indicatorOffset =
      dir !== "rtl" ? tabLeft - ((_d = this.tabNavEl) === null || _d === void 0 ? void 0 : _d.scrollLeft) : offsetRight + ((_e = this.tabNavEl) === null || _e === void 0 ? void 0 : _e.scrollLeft);
  }
  updateActiveWidth() {
    var _a;
    this.indicatorWidth = (_a = this.selectedTabEl) === null || _a === void 0 ? void 0 : _a.offsetWidth;
  }
  getIndexOfTabTitle(el, tabTitles = this.tabTitles) {
    // In most cases, since these indexes correlate with tab contents, we want to consider all tab titles.
    // However, when doing relative index operations, it makes sense to pass in this.enabledTabTitles as the 2nd arg.
    return tabTitles.indexOf(el);
  }
  async getTabTitleById(id) {
    return Promise.all(this.tabTitles.map((el) => el.getTabIdentifier())).then((ids) => {
      return this.tabTitles[ids.indexOf(id)];
    });
  }
  get tabTitles() {
    return filterDirectChildren(this.el, "calcite-tab-title");
  }
  get enabledTabTitles() {
    return filterDirectChildren(this.el, "calcite-tab-title:not([disabled])");
  }
  static get is() { return "calcite-tab-nav"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tab-nav.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tab-nav.css"]
  }; }
  static get properties() { return {
    "storageId": {
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
        "text": "Name to use when saving selected tab data to localStorage"
      },
      "attribute": "storage-id",
      "reflect": false
    },
    "syncId": {
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
        "text": "Pass the same string to multiple tab navs to keep them all in sync if one changes"
      },
      "attribute": "sync-id",
      "reflect": false
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
            "text": "Parent tabs component scale value"
          }],
        "text": ""
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
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
      "reflect": true,
      "defaultValue": "\"inline\""
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
            "text": "Parent tabs component position value"
          }],
        "text": ""
      },
      "attribute": "position",
      "reflect": true,
      "defaultValue": "\"below\""
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
            "text": "Parent tabs component bordered value when layout is \"inline\""
          }],
        "text": ""
      },
      "attribute": "bordered",
      "reflect": true,
      "defaultValue": "false"
    },
    "indicatorOffset": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "name": "internal",
            "text": undefined
          }],
        "text": ""
      },
      "attribute": "indicator-offset",
      "reflect": false
    },
    "indicatorWidth": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "name": "internal",
            "text": undefined
          }],
        "text": ""
      },
      "attribute": "indicator-width",
      "reflect": false
    }
  }; }
  static get states() { return {
    "selectedTab": {},
    "selectedTabEl": {}
  }; }
  static get events() { return [{
      "method": "calciteTabChange",
      "name": "calciteTabChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "see",
            "text": "[TabChangeEventDetail](https://github.com/Esri/calcite-components/blob/master/src/components/tab/interfaces.ts#L1)"
          }],
        "text": "Emitted when the active tab changes"
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
      "method": "calciteInternalTabChange",
      "name": "calciteInternalTabChange",
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
        "original": "TabChangeEventDetail",
        "resolved": "TabChangeEventDetail",
        "references": {
          "TabChangeEventDetail": {
            "location": "import",
            "path": "../tab/interfaces"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "selectedTab",
      "methodName": "selectedTabChanged"
    }, {
      "propName": "selectedTabEl",
      "methodName": "selectedTabElChanged"
    }]; }
  static get listeners() { return [{
      "name": "calciteTabsFocusPrevious",
      "method": "focusPreviousTabHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteTabsFocusNext",
      "method": "focusNextTabHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteInternalTabsActivate",
      "method": "internalActivateTabHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteTabsActivate",
      "method": "activateTabHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteTabTitleRegister",
      "method": "updateTabTitles",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteInternalTabChange",
      "method": "globalInternalTabChangeHandler",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
