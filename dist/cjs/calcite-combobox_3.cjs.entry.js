/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-98559b14.js');
const debounce = require('./debounce-c3a0f36f.js');
const forIn = require('./forIn-140e3c62.js');
const popper = require('./popper-66b55be9.js');
const guid = require('./guid-21b03b4f.js');
const dom = require('./dom-be217a15.js');
const label = require('./label-c09f7403.js');
const form = require('./form-6bfb0719.js');
const observers = require('./observers-cf003b0e.js');
const interactive = require('./interactive-9760231e.js');
const conditionalSlot = require('./conditionalSlot-e1792d8e.js');

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = debounce.Symbol ? debounce.Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (forIn.isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (debounce.isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  string = toString(string);
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string;
}

const filter = (data, value) => {
  const escapedValue = escapeRegExp(value);
  const regex = new RegExp(escapedValue, "i");
  if (data.length === 0) {
    console.warn(`No data was passed to the filter function.
    The data argument should be an array of objects`);
  }
  const find = (input, RE) => {
    var _a;
    if ((_a = input) === null || _a === void 0 ? void 0 : _a.constant) {
      return true;
    }
    let found = false;
    forIn.forIn(input, (val) => {
      if (typeof val === "function") {
        return;
      }
      if (Array.isArray(val) || (typeof val === "object" && val !== null)) {
        if (find(val, RE)) {
          found = true;
        }
      }
      else if (RE.test(val)) {
        found = true;
      }
    });
    return found;
  };
  const result = data.filter((item) => {
    return find(item, regex);
  });
  return result;
};

const ComboboxItem$1 = "CALCITE-COMBOBOX-ITEM";
const ComboboxItemGroup$1 = "CALCITE-COMBOBOX-ITEM-GROUP";
const ComboboxChildSelector = `${ComboboxItem$1}, ${ComboboxItemGroup$1}`;
const TEXT = {
  removeTag: "Remove tag"
};

function getAncestors(element) {
  var _a, _b;
  const parent = (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.closest(ComboboxChildSelector);
  const grandparent = (_b = parent === null || parent === void 0 ? void 0 : parent.parentElement) === null || _b === void 0 ? void 0 : _b.closest(ComboboxChildSelector);
  return [parent, grandparent].filter((el) => el);
}
function getItemAncestors(item) {
  var _a;
  return (((_a = item.ancestors) === null || _a === void 0 ? void 0 : _a.filter((el) => el.nodeName === "CALCITE-COMBOBOX-ITEM")) || []);
}
function getItemChildren(item) {
  return dom.nodeListToArray(item.querySelectorAll("calcite-combobox-item"));
}
function hasActiveChildren(node) {
  const items = dom.nodeListToArray(node.querySelectorAll("calcite-combobox-item"));
  return items.filter((item) => item.selected).length > 0;
}
function getDepth(element) {
  const result = document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group", element, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  return result.snapshotLength;
}

const comboboxCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:block}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-input-height:1.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-input-height:2rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-input-height:2.75rem}.wrapper{display:-ms-flexbox;display:flex;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);padding:calc(var(--calcite-combobox-item-spacing-unit-s) / 4) var(--calcite-combobox-item-spacing-unit-l)}:host(:focus-within) .wrapper,.wrapper--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.wrapper--single{padding:0 var(--calcite-combobox-item-spacing-unit-l);cursor:pointer;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.grid-input{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px}.input{-ms-flex-positive:1;flex-grow:1;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-style:none;background-color:transparent;padding:0px;font-family:inherit;color:var(--calcite-ui-text-1);font-size:inherit;height:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);min-width:120px;margin-bottom:var(--calcite-combobox-item-spacing-unit-s)}.input:focus{outline:2px solid transparent;outline-offset:2px}.input--transparent{opacity:0}.input--single{margin-bottom:0px;margin-top:0px;padding:0px}.wrapper--active .input-single{cursor:text}.input--hidden{pointer-events:none;width:0px;min-width:0px;opacity:0}.input--icon{padding:0 var(--calcite-combobox-item-spacing-unit-l)}.input-wrap{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1}.input-wrap--single{-ms-flex:1 1 0%;flex:1 1 0%;overflow:hidden}.label{pointer-events:none;display:-ms-flexbox;display:flex;max-width:100%;-ms-flex:1 1 auto;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px;font-weight:var(--calcite-font-weight-normal);height:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height)}.label--spaced{padding-top:0px;padding-bottom:0px;padding-left:var(--calcite-combobox-item-spacing-unit-l);padding-right:var(--calcite-combobox-item-spacing-unit-l)}.icon-end,.icon-start{display:-ms-flexbox;display:flex;width:1rem;cursor:pointer;-ms-flex-align:center;align-items:center}.icon-end{-ms-flex:none;flex:none}.popper-container{width:100%;display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0);visibility:hidden;pointer-events:none}.popper-container .calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}.popper-container[data-popper-placement^=bottom] .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.popper-container[data-popper-placement^=top] .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}.popper-container[data-popper-placement^=left] .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}.popper-container[data-popper-placement^=right] .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.popper-container[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.popper-container--active{pointer-events:initial;visibility:visible}.screen-readers-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{max-height:100vh;overflow-y:auto;background-color:var(--calcite-ui-foreground-1);width:var(--calcite-dropdown-width)}.list{margin:0px;display:block;padding:0px}.list--hide{height:0px;overflow:hidden}.chip{margin-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);margin-inline:0 var(--calcite-combobox-item-spacing-unit-s);max-width:100%}.chip--active{background-color:var(--calcite-ui-foreground-3)}.item{display:block}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const isGroup = (el) => el.tagName === ComboboxItemGroup$1;
const itemUidPrefix = "combobox-item-";
const chipUidPrefix = "combobox-chip-";
const labelUidPrefix = "combobox-label-";
const listboxUidPrefix = "combobox-listbox-";
const inputUidPrefix = "combobox-input-";
const Combobox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteLookupChange = index.createEvent(this, "calciteLookupChange", 7);
    this.calciteComboboxChange = index.createEvent(this, "calciteComboboxChange", 7);
    this.calciteComboboxFilterChange = index.createEvent(this, "calciteComboboxFilterChange", 7);
    this.calciteComboboxChipDismiss = index.createEvent(this, "calciteComboboxChipDismiss", 7);
    this.calciteComboboxOpen = index.createEvent(this, "calciteComboboxOpen", 7);
    this.calciteComboboxClose = index.createEvent(this, "calciteComboboxClose", 7);
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
    this.mutationObserver = observers.createObserver("mutation", () => this.updateItems());
    this.resizeObserver = observers.createObserver("resize", () => this.setMaxScrollerHeight());
    this.guid = guid.guid();
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
        ? popper.filterComputedPlacements(flipPlacements, el)
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
      return debounce.debounce((text) => {
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
    this.emitCalciteLookupChange = debounce.debounce(this.internalCalciteLookupChangeEvent, 0);
    this.internalComboboxChangeEvent = () => {
      const { selectedItems } = this;
      this.calciteComboboxChange.emit({ selectedItems });
    };
    this.emitComboboxChange = debounce.debounce(this.internalComboboxChangeEvent, 0);
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
    const { popper: popper$1, menuEl } = this;
    const modifiers = this.getModifiers();
    popper$1
      ? await popper.updatePopper({
        el: menuEl,
        modifiers,
        placement: popper.defaultMenuPlacement,
        popper: popper$1
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
    label.connectLabel(this);
    form.connectForm(this);
    this.setFilteredPlacements();
  }
  componentWillLoad() {
    this.updateItems();
  }
  componentDidLoad() {
    form.afterConnectDefaultValueSet(this, this.getValue());
  }
  componentDidRender() {
    if (this.el.offsetHeight !== this.inputHeight) {
      this.reposition();
      this.inputHeight = this.el.offsetHeight;
    }
    interactive.updateHostInteraction(this);
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    (_b = this.resizeObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
    this.destroyPopper();
    label.disconnectLabel(this);
    form.disconnectForm(this);
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
      fallbackPlacements: this.filteredFlipPlacements || popper.popperMenuComputedPlacements
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
    this.popper = popper.createPopper({
      el: menuEl,
      modifiers,
      overlayPositioning,
      placement: popper.defaultMenuPlacement,
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
    const items = Array.from(this.el.querySelectorAll(ComboboxItem$1));
    return items.filter((item) => !item.disabled);
  }
  getGroupItems() {
    return Array.from(this.el.querySelectorAll(ComboboxItemGroup$1));
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
      const item = document.createElement(ComboboxItem$1);
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
      return (index.h("calcite-chip", { class: chipClasses, dismissLabel: intlRemoveTag, dismissible: true, icon: item.icon, id: item.guid ? `${chipUidPrefix}${item.guid}` : null, key: item.textLabel, onCalciteChipDismiss: (event) => this.calciteChipDismissHandler(event, item), scale: scale, title: label, value: item.value }, label));
    });
  }
  renderInput() {
    const { guid, active, disabled, placeholder, selectionMode, needsIcon, selectedItems } = this;
    const single = selectionMode === "single";
    const selectedItem = selectedItems[0];
    const showLabel = !active && single && !!selectedItem;
    return (index.h("span", { class: {
        "input-wrap": true,
        "input-wrap--single": single
      } }, showLabel && (index.h("span", { class: {
        label: true,
        "label--spaced": needsIcon
      }, key: "label" }, selectedItem.textLabel)), index.h("input", { "aria-activedescendant": this.activeDescendant, "aria-autocomplete": "list", "aria-controls": `${listboxUidPrefix}${guid}`, "aria-label": label.getLabelText(this), class: {
        input: true,
        "input--single": true,
        "input--transparent": this.activeChipIndex > -1,
        "input--hidden": showLabel,
        "input--icon": single && needsIcon
      }, disabled: disabled, id: `${inputUidPrefix}${guid}`, key: "input", onBlur: this.comboboxBlurHandler, onFocus: this.comboboxFocusHandler, onInput: this.inputHandler, placeholder: placeholder, ref: (el) => (this.textInput = el), type: "text" })));
  }
  renderListBoxOptions() {
    return this.visibleItems.map((item) => (index.h("li", { "aria-selected": (!!item.selected).toString(), id: item.guid ? `${itemUidPrefix}${item.guid}` : null, role: "option", tabindex: "-1" }, item.textLabel)));
  }
  renderPopperContainer() {
    const { active, setMenuEl, setListContainerEl } = this;
    const classes = {
      "list-container": true,
      [popper.CSS.animation]: true,
      [popper.CSS.animationActive]: active
    };
    return (index.h("div", { "aria-hidden": "true", class: { "popper-container": true, "popper-container--active": active }, ref: setMenuEl }, index.h("div", { class: classes, onTransitionEnd: this.transitionEnd, ref: setListContainerEl }, index.h("ul", { class: { list: true, "list--hide": !active } }, index.h("slot", null)))));
  }
  renderIconStart() {
    const { selectionMode, needsIcon, selectedItems } = this;
    const selectedItem = selectedItems[0];
    return (selectionMode === "single" &&
      needsIcon && (index.h("span", { class: "icon-start" }, (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.icon) && (index.h("calcite-icon", { class: "selected-icon", icon: selectedItem.icon, scale: "s" })))));
  }
  renderIconEnd() {
    const { active } = this;
    return (index.h("span", { class: "icon-end" }, index.h("calcite-icon", { icon: active ? "chevron-up" : "chevron-down", scale: "s" })));
  }
  render() {
    const { active, guid, label } = this;
    const single = this.selectionMode === "single";
    return (index.h(index.Host, { onKeyDown: this.keydownHandler }, index.h("div", { "aria-autocomplete": "list", "aria-expanded": active.toString(), "aria-haspopup": "listbox", "aria-labelledby": `${labelUidPrefix}${guid}`, "aria-owns": `${listboxUidPrefix}${guid}`, class: {
        wrapper: true,
        "wrapper--single": single || !this.selectedItems.length,
        "wrapper--active": active
      }, onClick: this.clickHandler, ref: this.setReferenceEl, role: "combobox" }, index.h("div", { class: "grid-input" }, this.renderIconStart(), !single && this.renderChips(), index.h("label", { class: "screen-readers-only", htmlFor: `${inputUidPrefix}${guid}`, id: `${labelUidPrefix}${guid}` }, label), this.renderInput()), this.renderIconEnd()), index.h("ul", { "aria-labelledby": `${labelUidPrefix}${guid}`, "aria-multiselectable": "true", class: "screen-readers-only", id: `${listboxUidPrefix}${guid}`, role: "listbox", tabIndex: -1 }, this.renderListBoxOptions()), this.renderPopperContainer(), index.h(form.HiddenFormInputSlot, { component: this })));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "active": ["activeHandler"],
    "disabled": ["handleDisabledChange"],
    "maxItems": ["maxItemsHandler"],
    "value": ["valueHandler"],
    "flipPlacements": ["flipPlacementsHandler"],
    "selectedItems": ["selectedItemsHandler"],
    "text": ["textHandler"]
  }; }
};
Combobox.style = comboboxCss;

const CSS$1 = {
  icon: "icon",
  iconActive: "icon--active",
  custom: "icon--custom",
  dot: "icon--dot",
  single: "label--single",
  label: "label",
  active: "label--active",
  selected: "label--selected",
  title: "title",
  textContainer: "text-container"
};

const comboboxItemCss = "@charset \"UTF-8\";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent:1rem}.container{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  )}:host(:focus){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host,ul{margin:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0px;outline:2px solid transparent;outline-offset:2px}.label{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;width:100%;min-width:100%;cursor:pointer;-ms-flex-align:center;align-items:center;color:var(--calcite-ui-text-3);-webkit-text-decoration-line:none;text-decoration-line:none;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;padding:var(--calcite-combobox-item-spacing-unit-s) var(--calcite-combobox-item-spacing-unit-l)}:host([disabled]) .label{cursor:default}.label--selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.label--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.label:hover,.label:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);-webkit-text-decoration-line:none;text-decoration-line:none;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.title{padding:0 var(--calcite-combobox-item-spacing-unit-l)}.icon{display:-ms-inline-flexbox;display:inline-flex;opacity:0;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-border-1)}.icon--indent{-webkit-padding-start:var(--calcite-combobox-item-indent-value);padding-inline-start:var(--calcite-combobox-item-indent-value)}.icon--custom{margin-top:-1px;color:var(--calcite-ui-text-3)}.icon--active{color:var(--calcite-ui-text-1)}.icon--dot{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;min-width:var(--calcite-combobox-item-spacing-unit-l)}.icon--dot:before{text-align:start;content:\"•\"}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-ui-brand)}:host(:hover[disabled]) .icon{opacity:1}";

const ComboboxItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteComboboxItemChange = index.createEvent(this, "calciteComboboxItemChange", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /** When true, the item cannot be clicked and is visually muted. */
    this.disabled = false;
    /** Set this to true to pre-select an item. Toggles when an item is checked/unchecked. */
    this.selected = false;
    /** True when item is highlighted either from keyboard or mouse hover */
    this.active = false;
    /** Unique identifier, used for accessibility */
    this.guid = guid.guid();
    this.scale = "m";
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.itemClickHandler = (event) => {
      event.preventDefault();
      if (this.disabled) {
        return;
      }
      this.selected = !this.selected;
    };
  }
  selectedWatchHandler() {
    this.calciteComboboxItemChange.emit(this.el);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.ancestors = getAncestors(this.el);
    this.scale = dom.getElementProp(this.el, "scale", this.scale);
    conditionalSlot.connectConditionalSlotComponent(this);
  }
  disconnectedCallback() {
    conditionalSlot.disconnectConditionalSlotComponent(this);
  }
  componentDidRender() {
    interactive.updateHostInteraction(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Used to toggle the selection state. By default this won't trigger an event.
   * The first argument allows the value to be coerced, rather than swapping values.
   */
  async toggleSelected(coerce) {
    if (this.disabled) {
      return;
    }
    this.selected = typeof coerce === "boolean" ? coerce : !this.selected;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderIcon(isSingle) {
    const { icon, disabled, selected } = this;
    const level = `${CSS$1.icon}--indent`;
    const defaultIcon = isSingle ? "dot" : "check";
    const iconPath = disabled ? "circle-disallowed" : defaultIcon;
    const showDot = isSingle && !icon && !disabled;
    return showDot ? (index.h("span", { class: {
        [CSS$1.icon]: true,
        [CSS$1.dot]: true,
        [level]: true
      } })) : (index.h("calcite-icon", { class: {
        [CSS$1.icon]: !icon,
        [CSS$1.custom]: !!icon,
        [CSS$1.iconActive]: icon && selected,
        [level]: true
      }, icon: icon || iconPath, scale: "s" }));
  }
  renderChildren() {
    if (dom.getSlotted(this.el)) {
      return (index.h("ul", { key: "default-slot-container" }, index.h("slot", null)));
    }
    return null;
  }
  render() {
    const isSingleSelect = dom.getElementProp(this.el, "selection-mode", "multi") === "single";
    const classes = {
      [CSS$1.label]: true,
      [CSS$1.selected]: this.selected,
      [CSS$1.active]: this.active,
      [CSS$1.single]: isSingleSelect
    };
    const depth = getDepth(this.el);
    return (index.h(index.Host, { "aria-hidden": "true" }, index.h("div", { class: `container scale--${this.scale}`, style: { "--calcite-combobox-item-spacing-indent-multiplier": `${depth}` } }, index.h("li", { class: classes, id: this.guid, onClick: this.itemClickHandler }, this.renderIcon(isSingleSelect), index.h("span", { class: CSS$1.title }, this.textLabel)), this.renderChildren())));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "selected": ["selectedWatchHandler"]
  }; }
};
ComboboxItem.style = comboboxItemCss;

const CSS = {
  list: "list",
  label: "label",
  title: "title"
};

const comboboxItemGroupCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent-1:0.5rem;--calcite-combobox-item-spacing-indent-2:1rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent-1:0.75rem;--calcite-combobox-item-spacing-indent-2:1.5rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent-1:1rem;--calcite-combobox-item-spacing-indent-2:2rem}:host,.list{margin:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0px;outline:2px solid transparent;outline-offset:2px}.label{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;width:100%;min-width:0px;max-width:100%;color:var(--calcite-ui-text-3)}.label--indent-1{-webkit-padding-start:var(--calcite-combobox-item-spacing-indent-1);padding-inline-start:var(--calcite-combobox-item-spacing-indent-1)}.label--indent-2{-webkit-padding-start:var(--calcite-combobox-item-spacing-indent-2);padding-inline-start:var(--calcite-combobox-item-spacing-indent-2)}.title{border:0 solid;display:block;-ms-flex:1 1 0%;flex:1 1 0%;border-bottom-width:1px;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2);word-wrap:break-word;word-break:break-word;border-bottom-color:var(--calcite-ui-border-3);padding:var(--calcite-combobox-item-spacing-unit-l) 0;margin-left:var(--calcite-combobox-item-spacing-unit-s);margin-right:var(--calcite-combobox-item-spacing-unit-s)}";

const ComboboxItemGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.guid = guid.guid();
    this.scale = "m";
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.ancestors = getAncestors(this.el);
    this.scale = dom.getElementProp(this.el, "scale", this.scale);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { el, scale } = this;
    const indent = `${CSS.label}--indent-${getDepth(el)}`;
    return (index.h("ul", { "aria-labelledby": this.guid, class: { [CSS.list]: true, [`scale--${scale}`]: true }, role: "group" }, index.h("li", { class: { [CSS.label]: true, [indent]: true }, id: this.guid, role: "presentation" }, index.h("span", { class: CSS.title }, this.label)), index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
ComboboxItemGroup.style = comboboxItemGroupCss;

exports.calcite_combobox = Combobox;
exports.calcite_combobox_item = ComboboxItem;
exports.calcite_combobox_item_group = ComboboxItemGroup;
