/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-98559b14.js');
const guid = require('./guid-21b03b4f.js');
const label = require('./label-c09f7403.js');
const form = require('./form-6bfb0719.js');
const interactive = require('./interactive-9760231e.js');
require('./dom-be217a15.js');

const TEXT = {
  rating: "Rating",
  stars: "Stars: ${num}"
};

const ratingCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){height:1.5rem;--calcite-rating-spacing-unit:0.25rem}:host([scale=m]){height:2rem;--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){height:2.75rem;--calcite-rating-spacing-unit:0.75rem}:host([read-only]){pointer-events:none}.fieldset{margin:0px;display:-ms-flexbox;display:flex;border-width:0px;padding:0px}.wrapper{display:inline-block;-webkit-margin-end:var(--calcite-rating-spacing-unit);margin-inline-end:var(--calcite-rating-spacing-unit)}.star{position:relative;display:-ms-flexbox;display:flex;cursor:pointer;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;color:var(--calcite-ui-border-input);-webkit-transition:var(--calcite-animation-timing);transition:var(--calcite-animation-timing);-webkit-transform:scale(1);transform:scale(1)}.star:active{-webkit-transform:scale(1.1);transform:scale(1.1)}.focused{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.average,.fraction{color:var(--calcite-ui-warning)}.hovered,.selected,:host([read-only]) .average,:host([read-only]) .fraction{color:var(--calcite-ui-brand)}.hovered:not(.selected){-webkit-transform:scale(0.9);transform:scale(0.9)}:host .fraction{pointer-events:none;position:absolute;top:0px;overflow:hidden;-webkit-transition:var(--calcite-animation-timing);transition:var(--calcite-animation-timing);inset-inline-start:0}calcite-chip{pointer-events:none;cursor:default}.number--average{font-weight:var(--calcite-font-weight-bold)}.number--count{color:var(--calcite-ui-text-2);font-style:italic}.number--count:not(:first-child){-webkit-margin-start:var(--calcite-rating-spacing-unit);margin-inline-start:var(--calcite-rating-spacing-unit)}.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const Rating = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteRatingChange = index.createEvent(this, "calciteRatingChange", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /** specify the scale of the component, defaults to m */
    this.scale = "m";
    /** the value of the rating component */
    this.value = 0;
    /** is the rating component in a selectable mode */
    this.readOnly = false;
    /** is the rating component in a selectable mode */
    this.disabled = false;
    /** Show average and count data summary chip (if available) */
    this.showChip = false;
    /** Localized string for "Rating" (used for aria label)
     * @default "Rating"
     */
    this.intlRating = TEXT.rating;
    /** Localized string for labelling each star, `${num}` in the string will be replaced by the number
     * @default "Stars: ${num}"
     */
    this.intlStars = TEXT.stars;
    /**
     * When true, makes the component required for form-submission.
     *
     * @internal
     */
    this.required = false;
    this.guid = `calcite-ratings-${guid.guid()}`;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    label.connectLabel(this);
    form.connectForm(this);
  }
  disconnectedCallback() {
    label.disconnectLabel(this);
    form.disconnectForm(this);
  }
  componentDidRender() {
    interactive.updateHostInteraction(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  blurHandler() {
    this.hasFocus = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderStars() {
    return [1, 2, 3, 4, 5].map((i) => {
      const selected = this.value >= i;
      const average = this.average && !this.value && i <= this.average;
      const hovered = i <= this.hoverValue;
      const fraction = this.average && this.average + 1 - i;
      const partial = !this.value && !hovered && fraction > 0 && fraction < 1;
      const focused = this.hasFocus && this.focusValue === i;
      return (index.h("span", { class: { wrapper: true } }, index.h("label", { class: { star: true, focused, selected, average, hovered, partial }, htmlFor: `${this.guid}-${i}`, onMouseOver: () => {
          this.hoverValue = i;
        } }, index.h("calcite-icon", { "aria-hidden": "true", class: "icon", icon: selected || average || this.readOnly ? "star-f" : "star", scale: this.scale }), partial && (index.h("div", { class: "fraction", style: { width: `${fraction * 100}%` } }, index.h("calcite-icon", { icon: "star-f", scale: this.scale }))), index.h("span", { class: "visually-hidden" }, this.intlStars.replace("${num}", `${i}`))), index.h("input", { checked: i === this.value, class: "visually-hidden", disabled: this.disabled || this.readOnly, id: `${this.guid}-${i}`, name: this.guid, onChange: () => this.updateValue(i), onClick: (event) => 
        // click is fired from the the component's label, so we treat this as an internal event
        event.stopPropagation(), onFocus: () => {
          this.hasFocus = true;
          this.focusValue = i;
        }, ref: (el) => (i === 1 || i === this.value) && (this.inputFocusRef = el), type: "radio", value: i })));
    });
  }
  render() {
    const { disabled, intlRating, showChip, scale, count, average } = this;
    return (index.h(index.Fragment, null, index.h("fieldset", { class: "fieldset", disabled: disabled, onBlur: () => (this.hoverValue = null), onMouseLeave: () => (this.hoverValue = null), onTouchEnd: () => (this.hoverValue = null) }, index.h("legend", { class: "visually-hidden" }, intlRating), this.renderStars()), (count || average) && showChip ? (index.h("calcite-chip", { scale: scale, value: count === null || count === void 0 ? void 0 : count.toString() }, !!average && index.h("span", { class: "number--average" }, average.toString()), !!count && index.h("span", { class: "number--count" }, "(", count === null || count === void 0 ? void 0 :
      count.toString(), ")"))) : null, index.h(form.HiddenFormInputSlot, { component: this })));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.setFocus();
  }
  updateValue(value) {
    this.value = value;
    this.calciteRatingChange.emit({ value });
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    this.inputFocusRef.focus();
  }
  get el() { return index.getElement(this); }
};
Rating.style = ratingCss;

exports.calcite_rating = Rating;
