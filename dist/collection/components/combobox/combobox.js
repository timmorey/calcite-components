/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Component, h, Prop, State, Listen, Event, Element, Method, Watch, Host } from "@stencil/core";
import { filter } from "../../utils/filter";
import { debounce } from "lodash-es";
import { createPopper, updatePopper, CSS as PopperCSS, popperMenuComputedPlacements, defaultMenuPlacement, filterComputedPlacements } from "../../utils/popper";
import { guid } from "../../utils/guid";
import { ComboboxChildSelector, ComboboxItem, ComboboxItemGroup, TEXT } from "./resources";
import { getItemAncestors, getItemChildren, hasActiveChildren } from "./utils";
import { connectLabel, disconnectLabel, getLabelText } from "../../utils/label";
import { afterConnectDefaultValueSet, connectForm, disconnectForm, HiddenFormInputSlot } from "../../utils/form";
import { createObserver } from "../../utils/observers";
import { updateHostInteraction } from "../../utils/interactive";
const isGroup = (el) => el.tagName === ComboboxItemGroup;
const itemUidPrefix = "combobox-item-";
const chipUidPrefix = "combobox-chip-";
const labelUidPrefix = "combobox-label-";
const listboxUidPrefix = "combobox-listbox-";
const inputUidPrefix = "combobox-input-";
/**
 * @slot - A slot for adding `calcite-combobox-item`s.
 */
export class Combobox {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /** Opens or closes the combobox */
    this.active = false;
    /** Disable combobox input */
    this.disabled = false;
    /** Specify the maximum number of combobox items (including nested children) to display before showing the scroller */
    this.maxItems = 0;
    /** Describes the type of positioning to use for the overlaid content. If your element is in a fixed container, use the 'fixed' value. */
    this.overlayPositioning = "absolute";
    /**
     * When true, makes the component required for form-submission.
     *
     * @internal
     */
    this.required = false;
    /** specify the selection mode
     * - multi: allow any number of selected items (default)
     * - single: only one selection)
     * - ancestors: like multi, but show ancestors of selected items as selected, only deepest children shown in chips
     */
    this.selectionMode = "multi";
    /** Specify the scale of the combobox, defaults to m */
    this.scale = "m";
    /** The value(s) of the selectedItem(s) */
    this.value = null;
    /** string to override the English "Remove tag" text for when an item is selected.
     * @default "Remove tag"
     */
    this.intlRemoveTag = TEXT.removeTag;
    this.internalValueChangeFlag = false;
    this.items = [];
    this.groupItems = [];
    this.selectedItems = [];
    this.visibleItems = [];
    this.activeItemIndex = -1;
    this.activeChipIndex = -1;
    this.activeDescendant = "";
    this.text = "";
    this.textInput = null;
    this.mutationObserver = createObserver("mutation", () => this.updateItems());
    this.resizeObserver = createObserver("resize", () => this.setMaxScrollerHeight());
    this.guid = guid();
    this.inputHeight = 0;
    this.ignoreSelectedEventsFlag = false;
    this.activeTransitionProp = "opacity";
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setFilteredPlacements = () => {
      const { el, flipPlacements } = this;
      this.filteredFlipPlacements = flipPlacements
        ? filterComputedPlacements(flipPlacements, el)
        : null;
    };
    this.getValue = () => {
      const items = this.selectedItems.map((item) => item === null || item === void 0 ? void 0 : item.value.toString());
      return (items === null || items === void 0 ? void 0 : items.length) ? (items.length > 1 ? items : items[0]) : "";
    };
    this.onLabelClick = () => {
      this.setFocus();
    };
    this.keydownHandler = (event) => {
      const { key } = event;
      switch (key) {
        case "Tab":
          this.activeChipIndex = -1;
          this.activeItemIndex = -1;
          if (this.allowCustomValues && this.text) {
            this.addCustomChip(this.text, true);
            event.preventDefault();
          }
          else if (this.active) {
            this.active = false;
            event.preventDefault();
          }
          break;
        case "ArrowLeft":
          this.previousChip();
          break;
        case "ArrowRight":
          this.nextChip();
          break;
        case "ArrowUp":
          this.shiftActiveItemIndex(-1);
          if (!this.comboboxInViewport()) {
            this.el.scrollIntoView();
          }
          break;
        case "ArrowDown":
          if (!this.active) {
            event.preventDefault();
            this.active = true;
          }
          this.shiftActiveItemIndex(1);
          if (!this.comboboxInViewport()) {
            this.el.scrollIntoView();
          }
          break;
        case " ":
          if (!this.textInput.value) {
            event.preventDefault();
            this.active = true;
            this.shiftActiveItemIndex(1);
          }
          break;
        case "Home":
          if (this.active) {
            event.preventDefault();
          }
          this.updateActiveItemIndex(0);
          this.scrollToActiveItem();
          if (!this.comboboxInViewport()) {
            this.el.scrollIntoView();
          }
          break;
        case "End":
          if (this.active) {
            event.preventDefault();
          }
          this.updateActiveItemIndex(this.visibleItems.length - 1);
          this.scrollToActiveItem();
          if (!this.comboboxInViewport()) {
            this.el.scrollIntoView();
          }
          break;
        case "Escape":
          this.active = false;
          break;
        case "Enter":
          if (this.activeItemIndex > -1) {
            this.toggleSelection(this.visibleItems[this.activeItemIndex]);
          }
          else if (this.activeChipIndex > -1) {
            this.removeActiveChip();
          }
          else if (this.allowCustomValues && this.text) {
            this.addCustomChip(this.text, true);
          }
          break;
        case "Delete":
        case "Backspace":
          if (this.activeChipIndex > -1) {
            this.removeActiveChip();
          }
          else if (!this.text && this.isMulti()) {
            this.removeLastChip();
          }
          break;
      }
    };
    this.toggleCloseEnd = () => {
      this.active = false;
      this.el.removeEventListener("calciteComboboxClose", this.toggleCloseEnd);
    };
    this.toggleOpenEnd = () => {
      this.active = true;
      this.el.removeEventListener("calciteComboboxOpen", this.toggleOpenEnd);
    };
    this.transitionEnd = (event) => {
      if (event.propertyName === this.activeTransitionProp) {
        this.active ? this.calciteComboboxOpen.emit() : this.calciteComboboxClose.emit();
      }
    };
    this.setMaxScrollerHeight = () => {
      const { active, listContainerEl } = this;
      if (!listContainerEl || !active) {
        return;
      }
      this.reposition();
      const maxScrollerHeight = this.getMaxScrollerHeight();
      listContainerEl.style.maxHeight = maxScrollerHeight > 0 ? `${maxScrollerHeight}px` : "";
      this.reposition();
    };
    this.calciteChipDismissHandler = (event, comboboxItem) => {
      this.active = false;
      const selection = this.items.find((item) => item === comboboxItem);
      if (selection) {
        this.toggleSelection(selection, false);
      }
      this.calciteComboboxChipDismiss.emit(event.detail);
    };
    this.clickHandler = (event) => {
      if (event.composedPath().some((node) => node.tagName === "CALCITE-CHIP")) {
        return;
      }
      this.active = !this.active;
      this.updateActiveItemIndex(0);
      this.setFocus();
    };
    this.setInactiveIfNotContained = (event) => {
      const composedPath = event.composedPath();
      if (!this.active || composedPath.includes(this.el) || composedPath.includes(this.referenceEl)) {
        return;
      }
      if (this.allowCustomValues && this.text.trim().length) {
        this.addCustomChip(this.text);
      }
      if (this.selectionMode === "single") {
        if (this.textInput) {
          this.textInput.value = "";
        }
        this.text = "";
        this.filterItems("");
        this.updateActiveItemIndex(-1);
      }
      this.active = false;
    };
    this.setMenuEl = (el) => {
      this.menuEl = el;
    };
    this.setListContainerEl = (el) => {
      this.resizeObserver.observe(el);
      this.listContainerEl = el;
    };
    this.setReferenceEl = (el) => {
      this.referenceEl = el;
    };
    this.inputHandler = (event) => {
      const value = event.target.value;
      this.text = value;
      this.filterItems(value);
      if (value) {
        this.activeChipIndex = -1;
      }
    };
    this.filterItems = (() => {
      const find = (item, filteredData) => item &&
        filteredData.some(({ label, value }) => {
          if (isGroup(item)) {
            return value === item.label || value === item.label;
          }
          return (value === item.textLabel ||
            value === item.value ||
            label === item.textLabel ||
            label === item.value);
        });
      return debounce((text) => {
        const filteredData = filter(this.data, text);
        const items = this.getCombinedItems();
        items.forEach((item) => {
          const hidden = !find(item, filteredData);
          item.hidden = hidden;
          const [parent, grandparent] = item.ancestors;
          if (find(parent, filteredData) || find(grandparent, filteredData)) {
            item.hidden = false;
          }
          if (!hidden) {
            item.ancestors.forEach((ancestor) => (ancestor.hidden = false));
          }
        });
        this.visibleItems = this.getVisibleItems();
        this.calciteComboboxFilterChange.emit({ visibleItems: [...this.visibleItems], text: text });
      }, 100);
    })();
    this.internalCalciteLookupChangeEvent = () => {
      this.calciteLookupChange.emit(this.selectedItems);
    };
    this.emitCalciteLookupChange = debounce(this.internalCalciteLookupChangeEvent, 0);
    this.internalComboboxChangeEvent = () => {
      const { selectedItems } = this;
      this.calciteComboboxChange.emit({ selectedItems });
    };
    this.emitComboboxChange = debounce(this.internalComboboxChangeEvent, 0);
    this.updateItems = () => {
      this.items = this.getItems();
      this.groupItems = this.getGroupItems();
      this.data = this.getData();
      this.selectedItems = this.getSelectedItems();
      this.visibleItems = this.getVisibleItems();
      this.needsIcon = this.getNeedsIcon();
      if (!this.allowCustomValues) {
        this.setMaxScrollerHeight();
      }
    };
    this.scrollToActiveItem = () => {
      const activeItem = this.visibleItems[this.activeItemIndex];
      const height = this.calculateSingleItemHeight(activeItem);
      const { offsetHeight, scrollTop } = this.listContainerEl;
      if (offsetHeight + scrollTop < activeItem.offsetTop + height) {
        this.listContainerEl.scrollTop = activeItem.offsetTop - offsetHeight + height;
      }
      else if (activeItem.offsetTop < scrollTop) {
        this.listContainerEl.scrollTop = activeItem.offsetTop;
      }
    };
    this.comboboxFocusHandler = () => {
      var _a;
      (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
    };
    this.comboboxBlurHandler = (event) => {
      this.setInactiveIfNotContained(event);
    };
  }
  activeHandler() {
    if (this.disabled) {
      this.active = false;
      return;
    }
    this.reposition();
  }
  handleDisabledChange(value) {
    if (!value) {
      this.active = false;
    }
  }
  maxItemsHandler() {
    this.setMaxScrollerHeight();
  }
  valueHandler(value) {
    if (!this.internalValueChangeFlag) {
      const items = this.getItems();
      if (Array.isArray(value)) {
        items.forEach((item) => (item.selected = value.includes(item.value)));
      }
      else if (value) {
        items.forEach((item) => (item.selected = value === item.value));
      }
      else {
        items.forEach((item) => (item.selected = false));
      }
      this.updateItems();
    }
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  documentClickHandler(event) {
    this.setInactiveIfNotContained(event);
  }
  calciteComboboxItemChangeHandler(event) {
    if (this.ignoreSelectedEventsFlag) {
      return;
    }
    const target = event.target;
    this.toggleSelection(target, target.selected);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Updates the position of the component. */
  async reposition() {
    const { popper, menuEl } = this;
    const modifiers = this.getModifiers();
    popper
      ? await updatePopper({
        el: menuEl,
        modifiers,
        placement: defaultMenuPlacement,
        popper
      })
      : this.createPopper();
  }
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
    this.activeChipIndex = -1;
    this.activeItemIndex = -1;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    this.internalValueChangeFlag = true;
    this.value = this.getValue();
    this.internalValueChangeFlag = false;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
    this.createPopper();
    connectLabel(this);
    connectForm(this);
    this.setFilteredPlacements();
  }
  componentWillLoad() {
    this.updateItems();
  }
  componentDidLoad() {
    afterConnectDefaultValueSet(this, this.getValue());
  }
  componentDidRender() {
    if (this.el.offsetHeight !== this.inputHeight) {
      this.reposition();
      this.inputHeight = this.el.offsetHeight;
    }
    updateHostInteraction(this);
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    (_b = this.resizeObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
    this.destroyPopper();
    disconnectLabel(this);
    disconnectForm(this);
  }
  selectedItemsHandler() {
    this.internalValueChangeFlag = true;
    this.value = this.getValue();
    this.internalValueChangeFlag = false;
  }
  /** when search text is cleared, reset active to  */
  textHandler() {
    this.updateActiveItemIndex(-1);
  }
  comboboxInViewport() {
    const bounding = this.el.getBoundingClientRect();
    return (bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight));
  }
  getModifiers() {
    const flipModifier = {
      name: "flip",
      enabled: true
    };
    flipModifier.options = {
      fallbackPlacements: this.filteredFlipPlacements || popperMenuComputedPlacements
    };
    const eventListenerModifier = {
      name: "eventListeners",
      enabled: this.active
    };
    return [flipModifier, eventListenerModifier];
  }
  createPopper() {
    this.destroyPopper();
    const { menuEl, referenceEl, overlayPositioning } = this;
    const modifiers = this.getModifiers();
    this.popper = createPopper({
      el: menuEl,
      modifiers,
      overlayPositioning,
      placement: defaultMenuPlacement,
      referenceEl
    });
  }
  destroyPopper() {
    const { popper } = this;
    if (popper) {
      popper.destroy();
    }
    this.popper = null;
  }
  getMaxScrollerHeight() {
    const items = this.getCombinedItems().filter((item) => !item.hidden);
    const { maxItems } = this;
    let itemsToProcess = 0;
    let maxScrollerHeight = 0;
    if (items.length > maxItems) {
      items.forEach((item) => {
        if (itemsToProcess < maxItems && maxItems > 0) {
          const height = this.calculateSingleItemHeight(item);
          if (height > 0) {
            maxScrollerHeight += height;
            itemsToProcess++;
          }
        }
      });
    }
    return maxScrollerHeight;
  }
  calculateSingleItemHeight(item) {
    let height = item.offsetHeight;
    // if item has children items, don't count their height twice
    const children = Array.from(item.querySelectorAll(ComboboxChildSelector));
    children
      .map((child) => child === null || child === void 0 ? void 0 : child.offsetHeight)
      .forEach((offsetHeight) => {
      height -= offsetHeight;
    });
    return height;
  }
  getCombinedItems() {
    return [...this.groupItems, ...this.items];
  }
  toggleSelection(item, value = !item.selected) {
    if (!item) {
      return;
    }
    if (this.isMulti()) {
      item.selected = value;
      this.updateAncestors(item);
      this.selectedItems = this.getSelectedItems();
      this.emitCalciteLookupChange();
      this.emitComboboxChange();
      this.resetText();
      this.filterItems("");
    }
    else {
      this.ignoreSelectedEventsFlag = true;
      this.items.forEach((el) => (el.selected = el === item ? value : false));
      this.ignoreSelectedEventsFlag = false;
      this.selectedItems = this.getSelectedItems();
      this.emitComboboxChange();
      if (this.textInput) {
        this.textInput.value = item.textLabel;
      }
      this.active = false;
      this.updateActiveItemIndex(-1);
      this.resetText();
      this.filterItems("");
    }
  }
  updateAncestors(item) {
    if (this.selectionMode !== "ancestors") {
      return;
    }
    const ancestors = getItemAncestors(item);
    const children = getItemChildren(item);
    if (item.selected) {
      ancestors.forEach((el) => {
        el.selected = true;
      });
    }
    else {
      children.forEach((el) => (el.selected = false));
      [...ancestors].forEach((el) => {
        if (!hasActiveChildren(el)) {
          el.selected = false;
        }
      });
    }
  }
  getVisibleItems() {
    return this.items.filter((item) => !item.hidden);
  }
  getSelectedItems() {
    if (!this.isMulti()) {
      const match = this.items.find(({ selected }) => selected);
      return match ? [match] : [];
    }
    return (this.items
      .filter((item) => item.selected && (this.selectionMode !== "ancestors" || !hasActiveChildren(item)))
      /** Preserve order of entered tags */
      .sort((a, b) => {
      const aIdx = this.selectedItems.indexOf(a);
      const bIdx = this.selectedItems.indexOf(b);
      if (aIdx > -1 && bIdx > -1) {
        return aIdx - bIdx;
      }
      return bIdx - aIdx;
    }));
  }
  getData() {
    return this.items.map((item) => ({
      constant: item.constant,
      value: item.value,
      label: item.textLabel,
      guid: item.guid
    }));
  }
  getNeedsIcon() {
    return this.selectionMode === "single" && this.items.some((item) => item.icon);
  }
  resetText() {
    if (this.textInput) {
      this.textInput.value = "";
    }
    this.text = "";
  }
  getItems() {
    const items = Array.from(this.el.querySelectorAll(ComboboxItem));
    return items.filter((item) => !item.disabled);
  }
  getGroupItems() {
    return Array.from(this.el.querySelectorAll(ComboboxItemGroup));
  }
  addCustomChip(value, focus) {
    const existingItem = this.items.find((el) => el.textLabel === value);
    if (existingItem) {
      this.toggleSelection(existingItem, true);
    }
    else {
      if (!this.isMulti()) {
        this.toggleSelection(this.selectedItems[this.selectedItems.length - 1], false);
      }
      const item = document.createElement(ComboboxItem);
      item.value = value;
      item.textLabel = value;
      item.selected = true;
      this.el.appendChild(item);
      this.resetText();
      if (focus) {
        this.setFocus();
      }
      this.updateItems();
      this.filterItems("");
      this.emitCalciteLookupChange();
      this.emitComboboxChange();
    }
  }
  removeActiveChip() {
    this.toggleSelection(this.selectedItems[this.activeChipIndex], false);
    this.setFocus();
  }
  removeLastChip() {
    this.toggleSelection(this.selectedItems[this.selectedItems.length - 1], false);
    this.setFocus();
  }
  previousChip() {
    if (this.text) {
      return;
    }
    const length = this.selectedItems.length - 1;
    const active = this.activeChipIndex;
    this.activeChipIndex = active === -1 ? length : Math.max(active - 1, 0);
    this.updateActiveItemIndex(-1);
    this.focusChip();
  }
  nextChip() {
    if (this.text || this.activeChipIndex === -1) {
      return;
    }
    const last = this.selectedItems.length - 1;
    const newIndex = this.activeChipIndex + 1;
    if (newIndex > last) {
      this.activeChipIndex = -1;
      this.setFocus();
    }
    else {
      this.activeChipIndex = newIndex;
      this.focusChip();
    }
    this.updateActiveItemIndex(-1);
  }
  focusChip() {
    var _a;
    const guid = (_a = this.selectedItems[this.activeChipIndex]) === null || _a === void 0 ? void 0 : _a.guid;
    const chip = guid
      ? this.referenceEl.querySelector(`#${chipUidPrefix}${guid}`)
      : null;
    chip === null || chip === void 0 ? void 0 : chip.setFocus();
  }
  shiftActiveItemIndex(delta) {
    const { length } = this.visibleItems;
    const newIndex = (this.activeItemIndex + length + delta) % length;
    this.updateActiveItemIndex(newIndex);
    this.scrollToActiveItem();
  }
  updateActiveItemIndex(index) {
    var _a;
    this.activeItemIndex = index;
    let activeDescendant = null;
    this.visibleItems.forEach((el, i) => {
      if (i === index) {
        el.active = true;
        activeDescendant = el.guid;
      }
      else {
        el.active = false;
      }
    });
    this.activeDescendant = activeDescendant;
    if (this.activeItemIndex > -1) {
      this.activeChipIndex = -1;
      (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
    }
  }
  isMulti() {
    return this.selectionMode !== "single";
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderChips() {
    const { activeChipIndex, scale, selectionMode, intlRemoveTag } = this;
    return this.selectedItems.map((item, i) => {
      const chipClasses = {
        chip: true,
        "chip--active": activeChipIndex === i
      };
      const ancestors = [...getItemAncestors(item)].reverse();
      const pathLabel = [...ancestors, item].map((el) => el.textLabel);
      const label = selectionMode !== "ancestors" ? item.textLabel : pathLabel.join(" / ");
      return (h("calcite-chip", { class: chipClasses, dismissLabel: intlRemoveTag, dismissible: true, icon: item.icon, id: item.guid ? `${chipUidPrefix}${item.guid}` : null, key: item.textLabel, onCalciteChipDismiss: (event) => this.calciteChipDismissHandler(event, item), scale: scale, title: label, value: item.value }, label));
    });
  }
  renderInput() {
    const { guid, active, disabled, placeholder, selectionMode, needsIcon, selectedItems } = this;
    const single = selectionMode === "single";
    const selectedItem = selectedItems[0];
    const showLabel = !active && single && !!selectedItem;
    return (h("span", { class: {
        "input-wrap": true,
        "input-wrap--single": single
      } },
      showLabel && (h("span", { class: {
          label: true,
          "label--spaced": needsIcon
        }, key: "label" }, selectedItem.textLabel)),
      h("input", { "aria-activedescendant": this.activeDescendant, "aria-autocomplete": "list", "aria-controls": `${listboxUidPrefix}${guid}`, "aria-label": getLabelText(this), class: {
          input: true,
          "input--single": true,
          "input--transparent": this.activeChipIndex > -1,
          "input--hidden": showLabel,
          "input--icon": single && needsIcon
        }, disabled: disabled, id: `${inputUidPrefix}${guid}`, key: "input", onBlur: this.comboboxBlurHandler, onFocus: this.comboboxFocusHandler, onInput: this.inputHandler, placeholder: placeholder, ref: (el) => (this.textInput = el), type: "text" })));
  }
  renderListBoxOptions() {
    return this.visibleItems.map((item) => (h("li", { "aria-selected": (!!item.selected).toString(), id: item.guid ? `${itemUidPrefix}${item.guid}` : null, role: "option", tabindex: "-1" }, item.textLabel)));
  }
  renderPopperContainer() {
    const { active, setMenuEl, setListContainerEl } = this;
    const classes = {
      "list-container": true,
      [PopperCSS.animation]: true,
      [PopperCSS.animationActive]: active
    };
    return (h("div", { "aria-hidden": "true", class: { "popper-container": true, "popper-container--active": active }, ref: setMenuEl },
      h("div", { class: classes, onTransitionEnd: this.transitionEnd, ref: setListContainerEl },
        h("ul", { class: { list: true, "list--hide": !active } },
          h("slot", null)))));
  }
  renderIconStart() {
    const { selectionMode, needsIcon, selectedItems } = this;
    const selectedItem = selectedItems[0];
    return (selectionMode === "single" &&
      needsIcon && (h("span", { class: "icon-start" }, (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.icon) && (h("calcite-icon", { class: "selected-icon", icon: selectedItem.icon, scale: "s" })))));
  }
  renderIconEnd() {
    const { active } = this;
    return (h("span", { class: "icon-end" },
      h("calcite-icon", { icon: active ? "chevron-up" : "chevron-down", scale: "s" })));
  }
  render() {
    const { active, guid, label } = this;
    const single = this.selectionMode === "single";
    return (h(Host, { onKeyDown: this.keydownHandler },
      h("div", { "aria-autocomplete": "list", "aria-expanded": active.toString(), "aria-haspopup": "listbox", "aria-labelledby": `${labelUidPrefix}${guid}`, "aria-owns": `${listboxUidPrefix}${guid}`, class: {
          wrapper: true,
          "wrapper--single": single || !this.selectedItems.length,
          "wrapper--active": active
        }, onClick: this.clickHandler, ref: this.setReferenceEl, role: "combobox" },
        h("div", { class: "grid-input" },
          this.renderIconStart(),
          !single && this.renderChips(),
          h("label", { class: "screen-readers-only", htmlFor: `${inputUidPrefix}${guid}`, id: `${labelUidPrefix}${guid}` }, label),
          this.renderInput()),
        this.renderIconEnd()),
      h("ul", { "aria-labelledby": `${labelUidPrefix}${guid}`, "aria-multiselectable": "true", class: "screen-readers-only", id: `${listboxUidPrefix}${guid}`, role: "listbox", tabIndex: -1 }, this.renderListBoxOptions()),
      this.renderPopperContainer(),
      h(HiddenFormInputSlot, { component: this })));
  }
  static get is() { return "calcite-combobox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["combobox.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["combobox.css"]
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
        "text": "Opens or closes the combobox"
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
        "text": "Disable combobox input"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "label": {
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
        "text": "Aria label for combobox (required)"
      },
      "attribute": "label",
      "reflect": false
    },
    "placeholder": {
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
        "text": "Placeholder text for input"
      },
      "attribute": "placeholder",
      "reflect": false
    },
    "maxItems": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Specify the maximum number of combobox items (including nested children) to display before showing the scroller"
      },
      "attribute": "max-items",
      "reflect": false,
      "defaultValue": "0"
    },
    "name": {
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
        "text": "The name of the switch input"
      },
      "attribute": "name",
      "reflect": true
    },
    "allowCustomValues": {
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
        "text": "Allow entry of custom values which are not in the original set of items"
      },
      "attribute": "allow-custom-values",
      "reflect": false
    },
    "overlayPositioning": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "OverlayPositioning",
        "resolved": "\"absolute\" | \"fixed\"",
        "references": {
          "OverlayPositioning": {
            "location": "import",
            "path": "../../utils/popper"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Describes the type of positioning to use for the overlaid content. If your element is in a fixed container, use the 'fixed' value."
      },
      "attribute": "overlay-positioning",
      "reflect": false,
      "defaultValue": "\"absolute\""
    },
    "required": {
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
            "name": "internal",
            "text": undefined
          }],
        "text": "When true, makes the component required for form-submission."
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "selectionMode": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ComboboxSelectionMode",
        "resolved": "\"ancestors\" | \"multi\" | \"single\"",
        "references": {
          "ComboboxSelectionMode": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the selection mode\n- multi: allow any number of selected items (default)\n- single: only one selection)\n- ancestors: like multi, but show ancestors of selected items as selected, only deepest children shown in chips"
      },
      "attribute": "selection-mode",
      "reflect": true,
      "defaultValue": "\"multi\""
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
        "text": "Specify the scale of the combobox, defaults to m"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "value": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string | string[]",
        "resolved": "string | string[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The value(s) of the selectedItem(s)"
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "null"
    },
    "intlRemoveTag": {
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
            "text": "\"Remove tag\""
          }],
        "text": "string to override the English \"Remove tag\" text for when an item is selected."
      },
      "attribute": "intl-remove-tag",
      "reflect": false,
      "defaultValue": "TEXT.removeTag"
    },
    "flipPlacements": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "ComputedPlacement[]",
        "resolved": "ComputedPlacement[]",
        "references": {
          "ComputedPlacement": {
            "location": "import",
            "path": "../../utils/popper"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Defines the available placements that can be used when a flip occurs."
      }
    }
  }; }
  static get states() { return {
    "items": {},
    "groupItems": {},
    "selectedItems": {},
    "visibleItems": {},
    "needsIcon": {},
    "activeItemIndex": {},
    "activeChipIndex": {},
    "activeDescendant": {},
    "text": {}
  }; }
  static get events() { return [{
      "method": "calciteLookupChange",
      "name": "calciteLookupChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "use calciteComboboxChange instead"
          }],
        "text": "Called when the selected items set changes"
      },
      "complexType": {
        "original": "HTMLCalciteComboboxItemElement[]",
        "resolved": "HTMLCalciteComboboxItemElement[]",
        "references": {
          "HTMLCalciteComboboxItemElement": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "calciteComboboxChange",
      "name": "calciteComboboxChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Called when the selected item(s) changes."
      },
      "complexType": {
        "original": "{ selectedItems: HTMLCalciteComboboxItemElement[] }",
        "resolved": "{ selectedItems: HTMLCalciteComboboxItemElement[]; }",
        "references": {
          "HTMLCalciteComboboxItemElement": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "calciteComboboxFilterChange",
      "name": "calciteComboboxFilterChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Called when the user has entered text to filter the options list"
      },
      "complexType": {
        "original": "{\n    visibleItems: HTMLCalciteComboboxItemElement[];\n    text: string;\n  }",
        "resolved": "{ visibleItems: HTMLCalciteComboboxItemElement[]; text: string; }",
        "references": {
          "HTMLCalciteComboboxItemElement": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "calciteComboboxChipDismiss",
      "name": "calciteComboboxChipDismiss",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Called when a selected item in the combobox is dismissed via its chip *"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calciteComboboxOpen",
      "name": "calciteComboboxOpen",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "internal",
            "text": undefined
          }],
        "text": "Fired when the combobox is opened"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calciteComboboxClose",
      "name": "calciteComboboxClose",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "internal",
            "text": undefined
          }],
        "text": "Fired when the combobox is closed"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "reposition": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Updates the position of the component.",
        "tags": []
      }
    },
    "setFocus": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
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
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "active",
      "methodName": "activeHandler"
    }, {
      "propName": "disabled",
      "methodName": "handleDisabledChange"
    }, {
      "propName": "maxItems",
      "methodName": "maxItemsHandler"
    }, {
      "propName": "value",
      "methodName": "valueHandler"
    }, {
      "propName": "flipPlacements",
      "methodName": "flipPlacementsHandler"
    }, {
      "propName": "selectedItems",
      "methodName": "selectedItemsHandler"
    }, {
      "propName": "text",
      "methodName": "textHandler"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "documentClickHandler",
      "target": "document",
      "capture": false,
      "passive": false
    }, {
      "name": "calciteComboboxItemChange",
      "method": "calciteComboboxItemChangeHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
