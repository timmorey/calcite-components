/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-98559b14.js');
const dom = require('./dom-be217a15.js');
const interactive = require('./interactive-9760231e.js');
const debounce = require('./debounce-c3a0f36f.js');
const forIn = require('./forIn-140e3c62.js');
require('./guid-21b03b4f.js');

const CSS = {
  container: "container",
  searchIcon: "search-icon",
  clearButton: "clear-button"
};
const TEXT = {
  filterLabel: "Filter",
  clear: "Clear filter"
};
const ICONS = {
  search: "search",
  close: "x"
};
const DEBOUNCE_TIMEOUT = 250;

const filterCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;width:100%}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{display:-ms-flexbox;display:flex;width:100%;padding:0.5rem}label{position:relative;margin-left:0.25rem;margin-right:0.25rem;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;align-items:center;overflow:hidden}input[type=text]{margin-bottom:0.25rem;width:100%;border-style:none;background-color:transparent;padding-top:0.25rem;padding-bottom:0.25rem;padding-right:0.25rem;padding-left:1.5rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);-webkit-transition:padding var(--calcite-animation-timing), -webkit-box-shadow var(--calcite-animation-timing);transition:padding var(--calcite-animation-timing), -webkit-box-shadow var(--calcite-animation-timing);transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing);transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing), -webkit-box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{width:100%}.search-icon{position:absolute;display:-ms-flexbox;display:flex;color:var(--calcite-ui-text-2);inset-inline-start:0;-webkit-transition:left var(--calcite-animation-timing), right var(--calcite-animation-timing), opacity var(--calcite-animation-timing);transition:left var(--calcite-animation-timing), right var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-ui-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type=text]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:center;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-ui-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}";

const Filter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteFilterChange = index.createEvent(this, "calciteFilterChange", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * The items to filter through. The filter uses this as the starting point, and returns items
     * that contain the string entered in the input, using a partial match and recursive search.
     *
     * This property is required.
     */
    this.items = [];
    /**
     * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
     */
    this.disabled = false;
    /**
     * The resulting items after filtering.
     *
     * @readonly
     */
    this.filteredItems = [];
    /** specify the scale of filter, defaults to m */
    this.scale = "m";
    /**
     * Filter value.
     */
    this.value = "";
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.filter = debounce.debounce((value, emit = false) => {
      const regex = new RegExp(value, "i");
      if (this.items.length === 0) {
        this.updateFiltered([], emit);
        return;
      }
      const find = (input, RE) => {
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
      const result = this.items.filter((item) => {
        return find(item, regex);
      });
      this.updateFiltered(result, emit);
    }, DEBOUNCE_TIMEOUT);
    this.inputHandler = (event) => {
      const target = event.target;
      this.value = target.value;
      this.filter(target.value, true);
    };
    this.keyDownHandler = ({ key }) => {
      if (key === "Escape") {
        this.clear();
      }
    };
    this.clear = () => {
      this.value = "";
      this.filter("", true);
      this.setFocus();
    };
  }
  watchItemsHandler() {
    this.filter(this.value);
  }
  valueHandler(value) {
    this.filter(value);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentDidRender() {
    interactive.updateHostInteraction(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.filter(this.value);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    dom.focusElement(this.textInput);
  }
  updateFiltered(filtered, emit = false) {
    this.filteredItems.length = 0;
    this.filteredItems = this.filteredItems.concat(filtered);
    if (emit) {
      this.calciteFilterChange.emit();
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { disabled, scale } = this;
    return (index.h(index.Fragment, null, index.h("div", { class: CSS.container }, index.h("label", null, index.h("calcite-input", { "aria-label": this.intlLabel || TEXT.filterLabel, disabled: disabled, icon: ICONS.search, onCalciteInputInput: this.inputHandler, onKeyDown: this.keyDownHandler, placeholder: this.placeholder, ref: (el) => {
        this.textInput = el;
      }, scale: scale, type: "text", value: this.value })), this.value ? (index.h("button", { "aria-label": this.intlClear || TEXT.clear, class: CSS.clearButton, disabled: disabled, onClick: this.clear }, index.h("calcite-icon", { icon: ICONS.close, scale: scale }))) : null)));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "items": ["watchItemsHandler"],
    "value": ["valueHandler"]
  }; }
};
Filter.style = filterCss;

exports.calcite_filter = Filter;
