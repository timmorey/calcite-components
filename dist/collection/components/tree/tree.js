/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, Element, Prop, Host, Event, Listen, h } from "@stencil/core";
import { focusElement, nodeListToArray } from "../../utils/dom";
import { TreeSelectionMode } from "./interfaces";
/**
 * @slot - A slot for `calcite-tree-item` elements.
 */
export class Tree {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Display indentation guide lines */
    this.lines = false;
    /** Display input
     * @deprecated use "ancestors" selection-mode for checkbox input
     */
    this.inputEnabled = false;
    /** Specify the scale of the tree, defaults to m */
    this.scale = "m";
    /** Customize how tree selection works (single, multi, children, multi-children, ancestors)
     * @default "single"
     * @see [TreeSelectionMode](https://github.com/Esri/calcite-components/blob/master/src/components/tree/interfaces.ts#L5)
     */
    this.selectionMode = TreeSelectionMode.Single;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillRender() {
    const parent = this.el.parentElement.closest("calcite-tree");
    this.lines = parent ? parent.lines : this.lines;
    this.scale = parent ? parent.scale : this.scale;
    this.selectionMode = parent ? parent.selectionMode : this.selectionMode;
    this.child = !!parent;
  }
  render() {
    return (h(Host, { "aria-multiselectable": this.child
        ? undefined
        : (this.selectionMode === TreeSelectionMode.Multi ||
          this.selectionMode === TreeSelectionMode.MultiChildren).toString(), role: !this.child ? "tree" : undefined, tabIndex: this.getRootTabIndex() },
      h("slot", null)));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onFocus() {
    if (!this.child) {
      const focusTarget = this.el.querySelector("calcite-tree-item[selected]") ||
        this.el.querySelector("calcite-tree-item");
      focusElement(focusTarget);
    }
  }
  onFocusIn(event) {
    const focusedFromRootOrOutsideTree = event.relatedTarget === this.el || !this.el.contains(event.relatedTarget);
    if (focusedFromRootOrOutsideTree) {
      // gives user the ability to tab into external elements (modifying tabindex property will not work in firefox)
      this.el.removeAttribute("tabindex");
    }
  }
  onFocusOut(event) {
    const willFocusOutsideTree = !this.el.contains(event.relatedTarget);
    if (willFocusOutsideTree) {
      this.el.tabIndex = this.getRootTabIndex();
    }
  }
  onClick(e) {
    const target = e.target;
    const childItems = nodeListToArray(target.querySelectorAll("calcite-tree-item"));
    if (this.child) {
      return;
    }
    if (!this.child) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (this.selectionMode === TreeSelectionMode.Ancestors && !this.child) {
      this.updateAncestorTree(e);
      return;
    }
    const shouldSelect = this.selectionMode !== null &&
      (!target.hasChildren ||
        (target.hasChildren &&
          (this.selectionMode === TreeSelectionMode.Children ||
            this.selectionMode === TreeSelectionMode.MultiChildren)));
    const shouldModifyToCurrentSelection = e.detail.modifyCurrentSelection &&
      (this.selectionMode === TreeSelectionMode.Multi ||
        this.selectionMode === TreeSelectionMode.MultiChildren);
    const shouldSelectChildren = this.selectionMode === TreeSelectionMode.MultiChildren ||
      this.selectionMode === TreeSelectionMode.Children;
    const shouldClearCurrentSelection = !shouldModifyToCurrentSelection &&
      (((this.selectionMode === TreeSelectionMode.Single ||
        this.selectionMode === TreeSelectionMode.Multi) &&
        childItems.length <= 0) ||
        this.selectionMode === TreeSelectionMode.Children ||
        this.selectionMode === TreeSelectionMode.MultiChildren);
    const shouldExpandTarget = this.selectionMode === TreeSelectionMode.Children ||
      this.selectionMode === TreeSelectionMode.MultiChildren;
    if (!this.child) {
      const targetItems = [];
      if (shouldSelect) {
        targetItems.push(target);
      }
      if (shouldSelectChildren) {
        childItems.forEach((treeItem) => {
          targetItems.push(treeItem);
        });
      }
      if (shouldClearCurrentSelection) {
        const selectedItems = nodeListToArray(this.el.querySelectorAll("calcite-tree-item[selected]"));
        selectedItems.forEach((treeItem) => {
          if (!targetItems.includes(treeItem)) {
            treeItem.selected = false;
          }
        });
      }
      if (shouldExpandTarget && !e.detail.forceToggle) {
        target.expanded = true;
      }
      if (shouldModifyToCurrentSelection) {
        window.getSelection().removeAllRanges();
      }
      if ((shouldModifyToCurrentSelection && target.selected) ||
        (shouldSelectChildren && e.detail.forceToggle)) {
        targetItems.forEach((treeItem) => {
          treeItem.selected = false;
        });
      }
      else {
        targetItems.forEach((treeItem) => {
          treeItem.selected = true;
        });
      }
    }
    this.calciteTreeSelect.emit({
      selected: nodeListToArray(this.el.querySelectorAll("calcite-tree-item")).filter((i) => i.selected)
    });
  }
  keyDownHandler(event) {
    var _a;
    const root = this.el.closest("calcite-tree:not([child])");
    const target = event.target;
    if (root === this.el && target.tagName === "CALCITE-TREE-ITEM" && this.el.contains(target)) {
      switch (event.key) {
        case "ArrowDown":
          const next = target.nextElementSibling;
          if (next && next.matches("calcite-tree-item")) {
            next.focus();
            event.preventDefault();
          }
          break;
        case "ArrowLeft":
          // When focus is on an open node, closes the node.
          if (target.hasChildren && target.expanded) {
            target.expanded = false;
            event.preventDefault();
            break;
          }
          // When focus is on a child node that is also either an end node or a closed node, moves focus to its parent node.
          const parentItem = target.parentElement.closest("calcite-tree-item");
          if (parentItem && (!target.hasChildren || target.expanded === false)) {
            parentItem.focus();
            event.preventDefault();
            break;
          }
          // When focus is on a root node that is also either an end node or a closed node, does nothing.
          break;
        case "ArrowRight":
          if (!target.hasChildren) {
            break;
          }
          if (target.expanded && document.activeElement === target) {
            // When focus is on an open node, moves focus to the first child node.
            (_a = target.querySelector("calcite-tree-item")) === null || _a === void 0 ? void 0 : _a.focus();
            event.preventDefault();
          }
          else {
            // When focus is on a closed node, opens the node; focus does not move.
            target.expanded = true;
            event.preventDefault();
          }
          // When focus is on an end node, does nothing.
          break;
        case "ArrowUp":
          const previous = target.previousElementSibling;
          if (previous && previous.matches("calcite-tree-item")) {
            previous.focus();
            event.preventDefault();
          }
          break;
      }
    }
  }
  updateAncestorTree(e) {
    const item = e.target;
    const children = item.querySelectorAll("calcite-tree-item");
    const ancestors = [];
    let parent = item.parentElement.closest("calcite-tree-item");
    while (parent) {
      ancestors.push(parent);
      parent = parent.parentElement.closest("calcite-tree-item");
    }
    item.selected = !item.selected;
    item.indeterminate = false;
    if (children === null || children === void 0 ? void 0 : children.length) {
      children.forEach((el) => {
        el.selected = item.selected;
        el.indeterminate = false;
      });
    }
    if (ancestors) {
      ancestors.forEach((ancestor) => {
        const descendants = nodeListToArray(ancestor.querySelectorAll("calcite-tree-item"));
        const activeDescendants = descendants.filter((el) => el.selected);
        if (activeDescendants.length === 0) {
          ancestor.selected = false;
          ancestor.indeterminate = false;
          return;
        }
        const indeterminate = activeDescendants.length < descendants.length;
        ancestor.indeterminate = indeterminate;
        ancestor.selected = !indeterminate;
      });
    }
    this.calciteTreeSelect.emit({
      selected: nodeListToArray(this.el.querySelectorAll("calcite-tree-item")).filter((i) => i.selected)
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  getRootTabIndex() {
    return !this.child ? 0 : -1;
  }
  static get is() { return "calcite-tree"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tree.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tree.css"]
  }; }
  static get properties() { return {
    "lines": {
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
        "text": "Display indentation guide lines"
      },
      "attribute": "lines",
      "reflect": true,
      "defaultValue": "false"
    },
    "inputEnabled": {
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
            "text": "use \"ancestors\" selection-mode for checkbox input"
          }],
        "text": "Display input"
      },
      "attribute": "input-enabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "child": {
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
            "text": "If this tree is nested within another tree, set to false"
          }],
        "text": ""
      },
      "attribute": "child",
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
        "tags": [],
        "text": "Specify the scale of the tree, defaults to m"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "selectionMode": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "TreeSelectionMode",
        "resolved": "TreeSelectionMode.Ancestors | TreeSelectionMode.Children | TreeSelectionMode.Multi | TreeSelectionMode.MultiChildren | TreeSelectionMode.Single",
        "references": {
          "TreeSelectionMode": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "name": "default",
            "text": "\"single\""
          }, {
            "name": "see",
            "text": "[TreeSelectionMode](https://github.com/Esri/calcite-components/blob/master/src/components/tree/interfaces.ts#L5)"
          }],
        "text": "Customize how tree selection works (single, multi, children, multi-children, ancestors)"
      },
      "attribute": "selection-mode",
      "reflect": true,
      "defaultValue": "TreeSelectionMode.Single"
    }
  }; }
  static get events() { return [{
      "method": "calciteTreeSelect",
      "name": "calciteTreeSelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "see",
            "text": "[TreeSelectDetail](https://github.com/Esri/calcite-components/blob/master/src/components/tree/interfaces.ts#L1)"
          }],
        "text": "Emitted when user selects/deselects tree items. An object including an array of selected items will be passed in the event's `detail` property."
      },
      "complexType": {
        "original": "TreeSelectDetail",
        "resolved": "TreeSelectDetail",
        "references": {
          "TreeSelectDetail": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "focus",
      "method": "onFocus",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "focusin",
      "method": "onFocusIn",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "focusout",
      "method": "onFocusOut",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteTreeItemSelect",
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
