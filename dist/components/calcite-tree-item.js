/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { T as TreeSelectionMode } from './interfaces2.js';
import { b as getSlotted, a as getElementDir, C as CSS_UTILITY, e as filterDirectChildren, n as nodeListToArray } from './dom.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot.js';
import { d as defineCustomElement$3 } from './checkbox.js';
import { d as defineCustomElement$2 } from './icon.js';

const CSS = {
  checkboxLabel: "checkbox-label",
  checkbox: "checkbox",
  chevron: "chevron",
  nodeContainer: "node-container",
  childrenContainer: "children-container",
  bulletPointIcon: "bullet-point",
  checkmarkIcon: "checkmark"
};
const SLOTS = {
  children: "children"
};
const ICONS = {
  bulletPoint: "bullet-point",
  checkmark: "check",
  chevronRight: "chevron-right"
};

const treeItemCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;max-width:100%;cursor:pointer;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .node-container{--calcite-tree-padding-y:0.25rem}:host([scale=s]) .node-container .checkbox,:host([scale=s]) .node-container .chevron,:host([scale=s]) .node-container .checkmark,:host([scale=s]) .node-container .bullet-point{margin-inline:0.25rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .node-container{--calcite-tree-padding-y:0.5rem}:host([scale=m]) .node-container .checkbox,:host([scale=m]) .node-container .chevron,:host([scale=m]) .node-container .checkmark,:host([scale=m]) .node-container .bullet-point{margin-inline:0.5rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .node-container{--calcite-tree-padding-y:0.75rem}:host([scale=l]) .node-container .checkbox,:host([scale=l]) .node-container .chevron,:host([scale=l]) .node-container .checkmark,:host([scale=l]) .node-container .bullet-point{margin-inline:0.75rem}:host([lines]) .children-container:after{position:absolute;top:0px;width:1px;transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;-webkit-transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;height:96%;content:\"\";background-color:var(--calcite-ui-border-2);z-index:-1}:host(:not([lines])) .node-container:after{display:none}::slotted(*){min-width:0px;max-width:100%;overflow-wrap:break-word;color:inherit;text-decoration:none !important}::slotted(*):hover{text-decoration:none !important}::slotted(a){width:100%;-webkit-text-decoration-line:none;text-decoration-line:none}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.checkbox{outline:2px solid transparent;outline-offset:2px;line-height:0}.checkbox-label{pointer-events:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.children-container{position:relative;height:0px;overflow:hidden;-webkit-margin-start:1.25rem;margin-inline-start:1.25rem;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0;-webkit-transition:var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out;transition:var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out;-webkit-transform-origin:top;transform-origin:top}:host([expanded])>.children-container{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1;height:auto}.node-container{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:var(--calcite-tree-padding-y) 0}.node-container .checkmark,.node-container .bullet-point{opacity:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;color:var(--calcite-ui-border-1)}.node-container:hover .checkmark,.node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark,:host([selected]) .node-container:hover .bullet-point,:host(:focus) .node-container .checkmark,:host(:focus) .node-container .bullet-point{opacity:1}:host([selected])>.node-container,:host([selected])>.node-container:hover{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selected])>.node-container .bullet-point,:host([selected])>.node-container .checkmark,:host([selected])>.node-container:hover .bullet-point,:host([selected])>.node-container:hover .checkmark{opacity:1;color:var(--calcite-ui-brand)}:host(:not([has-children])):host([scale=s])>.node-container[data-selection-mode=ancestors] .checkbox{-webkit-padding-start:1.25rem;padding-inline-start:1.25rem}:host(:not([has-children])):host([scale=m])>.node-container[data-selection-mode=ancestors] .checkbox{-webkit-padding-start:1.5rem;padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=l])>.node-container[data-selection-mode=ancestors] .checkbox{-webkit-padding-start:1.75rem;padding-inline-start:1.75rem}:host([has-children])>.node-container[data-selection-mode=ancestors] .checkbox{-webkit-margin-start:0;margin-inline-start:0}:host([has-children])>.node-container .bullet-point,:host([has-children])>.node-container .checkmark{display:none}:host([has-children][expanded]:not([selected]))>.node-container ::slotted(*){font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([has-children][selected])>.node-container[data-selection-mode=children],:host([has-children][selected])>.node-container[data-selection-mode=multi-children]{color:var(--calcite-ui-brand)}.chevron{position:relative;-ms-flex-item-align:center;align-self:center;color:var(--calcite-ui-text-3);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.calcite--rtl .chevron{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host([expanded])>.node-container>.chevron{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host([selected]) .checkmark,:host([selected]) .bullet-point{color:var(--calcite-ui-brand)}";

const TreeItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteTreeItemSelect = createEvent(this, "calciteTreeItemSelect", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Is the item currently selected */
    this.selected = false;
    /** True if the item is in an expanded state */
    this.expanded = false;
    /** @internal Is the parent of this item expanded? */
    this.parentExpanded = false;
    /** @internal What level of depth is this item at? */
    this.depth = -1;
    /** @internal Does this tree item have a tree inside it? */
    this.hasChildren = null;
    this.iconClickHandler = (event) => {
      event.stopPropagation();
      this.expanded = !this.expanded;
    };
    this.childrenClickHandler = (event) => event.stopPropagation();
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.updateParentIsExpanded = (el, expanded) => {
      const items = getSlotted(el, SLOTS.children, {
        all: true,
        selector: "calcite-tree-item"
      });
      items.forEach((item) => (item.parentExpanded = expanded));
    };
    this.updateAncestorTree = () => {
      if (this.selected && this.selectionMode === TreeSelectionMode.Ancestors) {
        const ancestors = [];
        let parent = this.parentTreeItem;
        while (parent) {
          ancestors.push(parent);
          parent = parent.parentElement.closest("calcite-tree-item");
        }
        ancestors.forEach((item) => (item.indeterminate = true));
        return;
      }
    };
  }
  expandedHandler(newValue) {
    this.updateParentIsExpanded(this.el, newValue);
  }
  getselectionMode() {
    this.isSelectionMultiLike =
      this.selectionMode === TreeSelectionMode.Multi ||
        this.selectionMode === TreeSelectionMode.MultiChildren;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.parentTreeItem = this.el.parentElement.closest("calcite-tree-item");
    if (this.parentTreeItem) {
      const { expanded } = this.parentTreeItem;
      this.updateParentIsExpanded(this.parentTreeItem, expanded);
    }
    connectConditionalSlotComponent(this);
  }
  disconnectedCallback() {
    disconnectConditionalSlotComponent(this);
  }
  componentWillRender() {
    this.hasChildren = !!this.el.querySelector("calcite-tree");
    this.depth = 0;
    let parentTree = this.el.closest("calcite-tree");
    if (!parentTree) {
      return;
    }
    this.selectionMode = parentTree.selectionMode;
    this.scale = parentTree.scale || "m";
    this.lines = parentTree.lines;
    let nextParentTree;
    while (parentTree) {
      nextParentTree = parentTree.parentElement.closest("calcite-tree");
      if (nextParentTree === parentTree) {
        break;
      }
      else {
        parentTree = nextParentTree;
        this.depth = this.depth + 1;
      }
    }
  }
  componentDidLoad() {
    this.updateAncestorTree();
  }
  render() {
    const rtl = getElementDir(this.el) === "rtl";
    const showBulletPoint = this.selectionMode === TreeSelectionMode.Single ||
      this.selectionMode === TreeSelectionMode.Children;
    const showCheckmark = this.selectionMode === TreeSelectionMode.Multi ||
      this.selectionMode === TreeSelectionMode.MultiChildren;
    const chevron = this.hasChildren ? (h("calcite-icon", { class: {
        [CSS.chevron]: true,
        [CSS_UTILITY.rtl]: rtl
      }, "data-test-id": "icon", icon: ICONS.chevronRight, onClick: this.iconClickHandler, scale: "s" })) : null;
    const defaultSlotNode = h("slot", { key: "default-slot" });
    const checkbox = this.selectionMode === TreeSelectionMode.Ancestors ? (h("label", { class: CSS.checkboxLabel, key: "checkbox-label" }, h("calcite-checkbox", { checked: this.selected, class: CSS.checkbox, "data-test-id": "checkbox", indeterminate: this.hasChildren && this.indeterminate, scale: this.scale, tabIndex: -1 }), defaultSlotNode)) : null;
    const selectedIcon = showBulletPoint
      ? ICONS.bulletPoint
      : showCheckmark
        ? ICONS.checkmark
        : null;
    const bulletOrCheckIcon = selectedIcon ? (h("calcite-icon", { class: {
        [CSS.bulletPointIcon]: selectedIcon === ICONS.bulletPoint,
        [CSS.checkmarkIcon]: selectedIcon === ICONS.checkmark,
        [CSS_UTILITY.rtl]: rtl
      }, icon: selectedIcon, scale: "s" })) : null;
    const hidden = !(this.parentExpanded || this.depth === 1);
    return (h(Host, { "aria-expanded": this.hasChildren ? this.expanded.toString() : undefined, "aria-hidden": hidden.toString(), "aria-selected": this.selected ? "true" : showCheckmark ? "false" : undefined, "calcite-hydrated-hidden": hidden, role: "treeitem", tabindex: this.parentExpanded || this.depth === 1 ? "0" : "-1" }, h("div", { class: {
        [CSS.nodeContainer]: true,
        [CSS_UTILITY.rtl]: rtl
      }, "data-selection-mode": this.selectionMode, ref: (el) => (this.defaultSlotWrapper = el) }, chevron, bulletOrCheckIcon, checkbox ? checkbox : defaultSlotNode), h("div", { class: {
        [CSS.childrenContainer]: true,
        [CSS_UTILITY.rtl]: rtl
      }, "data-test-id": "calcite-tree-children", onClick: this.childrenClickHandler, ref: (el) => (this.childrenSlotWrapper = el), role: this.hasChildren ? "group" : undefined }, h("slot", { name: SLOTS.children }))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onClick(e) {
    // Solve for if the item is clicked somewhere outside the slotted anchor.
    // Anchor is triggered anywhere you click
    const [link] = filterDirectChildren(this.el, "a");
    if (link && e.composedPath()[0].tagName.toLowerCase() !== "a") {
      const target = link.target === "" ? "_self" : link.target;
      window.open(link.href, target);
    }
    this.calciteTreeItemSelect.emit({
      modifyCurrentSelection: this.selectionMode === TreeSelectionMode.Ancestors || this.isSelectionMultiLike,
      forceToggle: false
    });
  }
  keyDownHandler(e) {
    let root;
    switch (e.key) {
      case " ":
        this.calciteTreeItemSelect.emit({
          modifyCurrentSelection: this.isSelectionMultiLike,
          forceToggle: false
        });
        e.preventDefault();
        break;
      case "Enter":
        // activates a node, i.e., performs its default action. For parent nodes, one possible default action is to open or close the node. In single-select trees where selection does not follow focus (see note below), the default action is typically to select the focused node.
        const link = nodeListToArray(this.el.children).find((e) => e.matches("a"));
        if (link) {
          link.click();
          this.selected = true;
        }
        else {
          this.calciteTreeItemSelect.emit({
            modifyCurrentSelection: this.isSelectionMultiLike,
            forceToggle: false
          });
        }
        e.preventDefault();
        break;
      case "Home":
        root = this.el.closest("calcite-tree:not([child])");
        const firstNode = root.querySelector("calcite-tree-item");
        firstNode.focus();
        break;
      case "End":
        root = this.el.closest("calcite-tree:not([child])");
        let currentNode = root.children[root.children.length - 1]; // last child
        let currentTree = nodeListToArray(currentNode.children).find((e) => e.matches("calcite-tree"));
        while (currentTree) {
          currentNode = currentTree.children[root.children.length - 1];
          currentTree = nodeListToArray(currentNode.children).find((e) => e.matches("calcite-tree"));
        }
        currentNode.focus();
        break;
    }
  }
  get el() { return this; }
  static get watchers() { return {
    "expanded": ["expandedHandler"],
    "selectionMode": ["getselectionMode"]
  }; }
  static get style() { return treeItemCss; }
}, [1, "calcite-tree-item", {
    "selected": [1540],
    "expanded": [1540],
    "parentExpanded": [4, "parent-expanded"],
    "depth": [1538],
    "hasChildren": [1540, "has-children"],
    "lines": [1540],
    "inputEnabled": [4, "input-enabled"],
    "scale": [1537],
    "indeterminate": [516],
    "selectionMode": [1025, "selection-mode"]
  }, [[0, "click", "onClick"], [0, "keydown", "keyDownHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tree-item", "calcite-checkbox", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-tree-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TreeItem);
      }
      break;
    case "calcite-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteTreeItem = TreeItem;
const defineCustomElement = defineCustomElement$1;

export { CalciteTreeItem, defineCustomElement };
