/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { r as registerInstance, c as createEvent, h, F as Fragment, g as getElement } from './index-73638693.js';

const CSS = {
  page: "page",
  selected: "is-selected",
  previous: "previous",
  next: "next",
  disabled: "is-disabled",
  ellipsis: "ellipsis",
  ellipsisStart: "ellipsis--start",
  ellipsisEnd: "ellipsis--end"
};
const TEXT = {
  nextLabel: "Next",
  previousLabel: "Previous"
};

const paginationCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-pagination-spacing:0.25rem 0.5rem}:host([scale=s]) .previous,:host([scale=s]) .next,:host([scale=s]) .page{height:1.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .previous,:host([scale=s]) .next{padding-left:0.25rem;padding-right:0.25rem}:host([scale=m]){--calcite-pagination-spacing:0.5rem 0.75rem}:host([scale=m]) .previous,:host([scale=m]) .next,:host([scale=m]) .page{height:2rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .previous,:host([scale=m]) .next{padding-left:0.5rem;padding-right:0.5rem}:host([scale=l]){--calcite-pagination-spacing:0.75rem 1rem}:host([scale=l]) .previous,:host([scale=l]) .next,:host([scale=l]) .page{height:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .previous,:host([scale=l]) .next{padding-left:1rem;padding-right:1rem}:host{display:-ms-flexbox;display:flex;-webkit-writing-mode:horizontal-tb;-ms-writing-mode:lr-tb;writing-mode:horizontal-tb}:host button{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.previous,.next,.page{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:center;align-items:center;border-style:none;--tw-border-opacity:0;background-color:transparent;font-family:inherit;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-3);border-top:2px solid transparent;border-bottom:2px solid transparent}.previous:hover,.next:hover,.page:hover{color:var(--calcite-ui-text-1);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.page:hover{border-bottom-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-brand)}.previous:hover,.next:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-brand)}.previous:active,.next:active{background-color:var(--calcite-ui-foreground-3)}.previous.is-disabled,.next.is-disabled{pointer-events:none;background-color:transparent}.previous.is-disabled>calcite-icon,.next.is-disabled>calcite-icon{opacity:var(--calcite-ui-opacity-disabled)}.next{margin-right:0px}.page,.ellipsis{padding:var(--calcite-pagination-spacing)}.ellipsis{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end;color:var(--calcite-ui-text-3)}";

const maxPagesDisplayed = 5;
const Pagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calcitePaginationUpdate = createEvent(this, "calcitePaginationUpdate", 7);
    this.calcitePaginationChange = createEvent(this, "calcitePaginationChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /** number of items per page */
    this.num = 20;
    /** index of item that should begin the page */
    this.start = 1;
    /** total number of items */
    this.total = 0;
    /** Used as an accessible label (aria-label) for the next button
     * @default "Next"
     */
    this.textLabelNext = TEXT.nextLabel;
    /** Used as an accessible label (aria-label) of the previous button
     * @default "Previous"
     */
    this.textLabelPrevious = TEXT.previousLabel;
    /** The scale of the pagination */
    this.scale = "m";
    this.previousClicked = () => {
      this.previousPage().then();
      this.emitUpdate();
    };
    this.nextClicked = () => {
      this.nextPage();
      this.emitUpdate();
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Go to the next page of results */
  async nextPage() {
    this.start = Math.min(this.getLastStart(), this.start + this.num);
  }
  /** Go to the previous page of results */
  async previousPage() {
    this.start = Math.max(1, this.start - this.num);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  getLastStart() {
    const { total, num } = this;
    const lastStart = total % num === 0 ? total - num : Math.floor(total / num) * num;
    return lastStart + 1;
  }
  showLeftEllipsis() {
    return Math.floor(this.start / this.num) > 3;
  }
  showRightEllipsis() {
    return (this.total - this.start) / this.num > 3;
  }
  emitUpdate() {
    const changePayload = {
      start: this.start,
      total: this.total,
      num: this.num
    };
    this.calcitePaginationChange.emit(changePayload);
    this.calcitePaginationUpdate.emit(changePayload);
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderPages() {
    const lastStart = this.getLastStart();
    let end;
    let nextStart;
    // if we don't need ellipses render the whole set
    if (this.total / this.num <= maxPagesDisplayed) {
      nextStart = 1 + this.num;
      end = lastStart - this.num;
    }
    else {
      // if we're within max pages of page 1
      if (this.start / this.num < maxPagesDisplayed - 1) {
        nextStart = 1 + this.num;
        end = 1 + 4 * this.num;
      }
      else {
        // if we're within max pages of last page
        if (this.start + 3 * this.num >= this.total) {
          nextStart = lastStart - 4 * this.num;
          end = lastStart - this.num;
        }
        else {
          nextStart = this.start - this.num;
          end = this.start + this.num;
        }
      }
    }
    const pages = [];
    while (nextStart <= end) {
      pages.push(nextStart);
      nextStart = nextStart + this.num;
    }
    return pages.map((page) => this.renderPage(page));
  }
  renderPage(start) {
    const page = Math.floor(start / this.num) + (this.num === 1 ? 0 : 1);
    return (h("button", { class: {
        [CSS.page]: true,
        [CSS.selected]: start === this.start
      }, onClick: () => {
        this.start = start;
        this.emitUpdate();
      } }, page));
  }
  renderLeftEllipsis() {
    if (this.total / this.num > maxPagesDisplayed && this.showLeftEllipsis()) {
      return h("span", { class: `${CSS.ellipsis} ${CSS.ellipsisStart}` }, "\u2026");
    }
  }
  renderRightEllipsis() {
    if (this.total / this.num > maxPagesDisplayed && this.showRightEllipsis()) {
      return h("span", { class: `${CSS.ellipsis} ${CSS.ellipsisEnd}` }, "\u2026");
    }
  }
  render() {
    const { total, num, start } = this;
    const prevDisabled = num === 1 ? start <= num : start < num;
    const nextDisabled = num === 1 ? start + num > total : start + num > total;
    return (h(Fragment, null, h("button", { "aria-label": this.textLabelPrevious, class: {
        [CSS.previous]: true,
        [CSS.disabled]: prevDisabled
      }, disabled: prevDisabled, onClick: this.previousClicked }, h("calcite-icon", { flipRtl: true, icon: "chevronLeft", scale: "s" })), total > num ? this.renderPage(1) : null, this.renderLeftEllipsis(), this.renderPages(), this.renderRightEllipsis(), this.renderPage(this.getLastStart()), h("button", { "aria-label": this.textLabelNext, class: {
        [CSS.next]: true,
        [CSS.disabled]: nextDisabled
      }, disabled: nextDisabled, onClick: this.nextClicked }, h("calcite-icon", { flipRtl: true, icon: "chevronRight", scale: "s" }))));
  }
  get el() { return getElement(this); }
};
Pagination.style = paginationCss;

export { Pagination as calcite_pagination };
