/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import Sortable from "sortablejs";
import { Component, Element, Event, h, Listen, Method, Prop, State } from "@stencil/core";
import { CSS, ICON_TYPES } from "./resources";
import { calciteListFocusOutHandler, calciteListItemChangeHandler, calciteListItemValueChangeHandler, cleanUpObserver, deselectSiblingItems, deselectRemovedItems, getItemData, handleFilter, initialize, initializeObserver, keyDownHandler, mutationObserverCallback, removeItem, selectSiblings, setFocus, setUpItems, moveItemIndex } from "../pick-list/shared-list-logic";
import List from "../pick-list/shared-list-render";
import { createObserver } from "../../utils/observers";
import { updateHostInteraction } from "../../utils/interactive";
/**
 * @slot - A slot for adding `calcite-value-list-item` elements. Items are displayed as a vertical list.
 * @slot menu-actions - A slot for adding a button + menu combo for performing actions like sorting.
 */
export class ValueList {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
     */
    this.disabled = false;
    /**
     * When true, the items will be sortable via drag and drop.
     */
    this.dragEnabled = false;
    /**
     * When true, an input appears at the top of the list that can be used by end users to filter items in the list.
     */
    this.filterEnabled = false;
    /**
     * When true, content is waiting to be loaded. This state shows a busy indicator.
     */
    this.loading = false;
    /**
     * Multiple Works similar to standard radio buttons and checkboxes.
     * When true, a user can select multiple items at a time.
     * When false, only a single item can be selected at a time
     * and selecting a new item will deselect any other selected items.
     */
    this.multiple = false;
    /**
     * When true and single-selection is enabled, the selection will change when navigating items via the keyboard.
     */
    this.selectionFollowsFocus = false;
    // --------------------------------------------------------------------------
    //
    //  Private Properties
    //
    // --------------------------------------------------------------------------
    this.selectedValues = new Map();
    this.dataForFilter = [];
    this.lastSelectedItem = null;
    this.mutationObserver = createObserver("mutation", mutationObserverCallback.bind(this));
    this.setFilterEl = (el) => {
      this.filterEl = el;
    };
    this.deselectRemovedItems = deselectRemovedItems.bind(this);
    this.deselectSiblingItems = deselectSiblingItems.bind(this);
    this.selectSiblings = selectSiblings.bind(this);
    this.handleFilter = handleFilter.bind(this);
    this.getItemData = getItemData.bind(this);
    this.keyDownHandler = (event) => {
      const handleElement = event
        .composedPath()
        .find((item) => { var _a; return ((_a = item.dataset) === null || _a === void 0 ? void 0 : _a.jsHandle) !== undefined; });
      const item = event
        .composedPath()
        .find((item) => { var _a; return ((_a = item.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "calcite-value-list-item"; });
      // Only trigger keyboard sorting when the internal drag handle is focused and activated
      if (!handleElement || !item.handleActivated) {
        keyDownHandler.call(this, event);
        return;
      }
      const { items } = this;
      if ((event.key !== "ArrowUp" && event.key !== "ArrowDown") || items.length <= 1) {
        return;
      }
      event.preventDefault();
      const { el } = this;
      const nextIndex = moveItemIndex(this, item, event.key === "ArrowUp" ? "up" : "down");
      if (nextIndex === items.length - 1) {
        el.appendChild(item);
      }
      else {
        const itemAtNextIndex = el.children[nextIndex];
        const insertionReferenceItem = itemAtNextIndex === item.nextElementSibling
          ? itemAtNextIndex.nextElementSibling
          : itemAtNextIndex;
        el.insertBefore(item, insertionReferenceItem);
      }
      this.items = this.getItems();
      this.calciteListOrderChange.emit(this.items.map(({ value }) => value));
      requestAnimationFrame(() => handleElement.focus());
      item.handleActivated = true;
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    initialize.call(this);
    initializeObserver.call(this);
  }
  componentDidLoad() {
    this.setUpDragAndDrop();
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  disconnectedCallback() {
    cleanUpObserver.call(this);
    this.cleanUpDragAndDrop();
  }
  calciteListFocusOutHandler(event) {
    calciteListFocusOutHandler.call(this, event);
  }
  calciteListItemRemoveHandler(event) {
    removeItem.call(this, event);
  }
  calciteListItemChangeHandler(event) {
    calciteListItemChangeHandler.call(this, event);
  }
  calciteListItemPropsChangeHandler(event) {
    event.stopPropagation();
    this.setUpFilter();
  }
  calciteListItemValueChangeHandler(event) {
    calciteListItemValueChangeHandler.call(this, event);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  getItems() {
    return Array.from(this.el.querySelectorAll("calcite-value-list-item"));
  }
  setUpItems() {
    setUpItems.call(this, "calcite-value-list-item");
  }
  setUpFilter() {
    if (this.filterEnabled) {
      this.dataForFilter = this.getItemData();
    }
  }
  setUpDragAndDrop() {
    this.cleanUpDragAndDrop();
    if (!this.dragEnabled) {
      return;
    }
    this.sortable = Sortable.create(this.el, {
      dataIdAttr: "id",
      handle: `.${CSS.handle}`,
      draggable: "calcite-value-list-item",
      group: this.group,
      onSort: () => {
        this.items = Array.from(this.el.querySelectorAll("calcite-value-list-item"));
        const values = this.items.map((item) => item.value);
        this.calciteListOrderChange.emit(values);
      }
    });
  }
  cleanUpDragAndDrop() {
    var _a;
    (_a = this.sortable) === null || _a === void 0 ? void 0 : _a.destroy();
    this.sortable = null;
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Returns the currently selected items */
  async getSelectedItems() {
    return this.selectedValues;
  }
  /** Sets focus on the component. */
  async setFocus(focusId) {
    return setFocus.call(this, focusId);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  getIconType() {
    let type = null;
    if (this.dragEnabled) {
      type = ICON_TYPES.grip;
    }
    return type;
  }
  render() {
    return h(List, { onKeyDown: this.keyDownHandler, props: this });
  }
  static get is() { return "calcite-value-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["value-list.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["value-list.css"]
  }; }
  static get properties() { return {
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
    "dragEnabled": {
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
        "text": "When true, the items will be sortable via drag and drop."
      },
      "attribute": "drag-enabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "filterEnabled": {
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
        "text": "When true, an input appears at the top of the list that can be used by end users to filter items in the list."
      },
      "attribute": "filter-enabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "filterPlaceholder": {
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
        "text": "Placeholder text for the filter input field."
      },
      "attribute": "filter-placeholder",
      "reflect": true
    },
    "group": {
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
        "text": "The list's group identifier.\n\nTo drag elements from one list into another, both lists must have the same group value."
      },
      "attribute": "group",
      "reflect": false
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
    "multiple": {
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
        "text": "Multiple Works similar to standard radio buttons and checkboxes.\nWhen true, a user can select multiple items at a time.\nWhen false, only a single item can be selected at a time\nand selecting a new item will deselect any other selected items."
      },
      "attribute": "multiple",
      "reflect": true,
      "defaultValue": "false"
    },
    "selectionFollowsFocus": {
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
        "text": "When true and single-selection is enabled, the selection will change when navigating items via the keyboard."
      },
      "attribute": "selection-follows-focus",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "selectedValues": {},
    "dataForFilter": {}
  }; }
  static get events() { return [{
      "method": "calciteListChange",
      "name": "calciteListChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when any of the item selections have changed."
      },
      "complexType": {
        "original": "Map<string, HTMLCalciteValueListItemElement>",
        "resolved": "Map<string, HTMLCalciteValueListItemElement>",
        "references": {
          "Map": {
            "location": "global"
          },
          "HTMLCalciteValueListItemElement": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "calciteListOrderChange",
      "name": "calciteListOrderChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the order of the list has changed."
      },
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "getSelectedItems": {
      "complexType": {
        "signature": "() => Promise<Map<string, HTMLCalciteValueListItemElement>>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "Map": {
            "location": "global"
          },
          "HTMLCalciteValueListItemElement": {
            "location": "global"
          }
        },
        "return": "Promise<Map<string, HTMLCalciteValueListItemElement>>"
      },
      "docs": {
        "text": "Returns the currently selected items",
        "tags": []
      }
    },
    "setFocus": {
      "complexType": {
        "signature": "(focusId?: ListFocusId) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "ListFocusId": {
            "location": "import",
            "path": "../pick-list/shared-list-logic"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Sets focus on the component.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "focusout",
      "method": "calciteListFocusOutHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteListItemRemove",
      "method": "calciteListItemRemoveHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteListItemChange",
      "method": "calciteListItemChangeHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteListItemPropsChange",
      "method": "calciteListItemPropsChangeHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteListItemValueChange",
      "method": "calciteListItemValueChangeHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
