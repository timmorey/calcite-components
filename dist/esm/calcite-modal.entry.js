/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-73638693.js';
import { f as focusElement, g as getSlotted, e as ensureId, i as isCalciteFocusable } from './dom-3f012371.js';
import { c as createObserver } from './observers-7d85a111.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot-912b4669.js';
import './guid-a53704be.js';

/**
 * Traverses the slots of the open shadowroots and returns all children matching the query.
 * @param {ShadowRoot | HTMLElement} root
 * @param skipNode
 * @param isMatch
 * @param {number} maxDepth
 * @param {number} depth
 * @returns {HTMLElement[]}
 */
function queryShadowRoot(root, skipNode, isMatch, maxDepth = 20, depth = 0) {
    let matches = [];
    // If the depth is above the max depth, abort the searching here.
    if (depth >= maxDepth) {
        return matches;
    }
    // Traverses a slot element
    const traverseSlot = ($slot) => {
        // Only check nodes that are of the type Node.ELEMENT_NODE
        // Read more here https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
        const assignedNodes = $slot.assignedNodes().filter(node => node.nodeType === 1);
        if (assignedNodes.length > 0) {
            return queryShadowRoot(assignedNodes[0].parentElement, skipNode, isMatch, maxDepth, depth + 1);
        }
        return [];
    };
    // Go through each child and continue the traversing if necessary
    // Even though the typing says that children can't be undefined, Edge 15 sometimes gives an undefined value.
    // Therefore we fallback to an empty array if it is undefined.
    const children = Array.from(root.children || []);
    for (const $child of children) {
        // Check if the node and its descendants should be skipped
        if (skipNode($child)) {
            continue;
        }
        // If the child matches we always add it
        if (isMatch($child)) {
            matches.push($child);
        }
        if ($child.shadowRoot != null) {
            matches.push(...queryShadowRoot($child.shadowRoot, skipNode, isMatch, maxDepth, depth + 1));
        }
        else if ($child.tagName === "SLOT") {
            matches.push(...traverseSlot($child));
        }
        else {
            matches.push(...queryShadowRoot($child, skipNode, isMatch, maxDepth, depth + 1));
        }
    }
    return matches;
}

/**
 * Returns whether the element is hidden.
 * @param $elem
 */
function isHidden($elem) {
    return $elem.hasAttribute("hidden")
        || ($elem.hasAttribute("aria-hidden") && $elem.getAttribute("aria-hidden") !== "false")
        // A quick and dirty way to check whether the element is hidden.
        // For a more fine-grained check we could use "window.getComputedStyle" but we don't because of bad performance.
        // If the element has visibility set to "hidden" or "collapse", display set to "none" or opacity set to "0" through CSS
        // we won't be able to catch it here. We accept it due to the huge performance benefits.
        || $elem.style.display === `none`
        || $elem.style.opacity === `0`
        || $elem.style.visibility === `hidden`
        || $elem.style.visibility === `collapse`;
    // If offsetParent is null we can assume that the element is hidden
    // https://stackoverflow.com/questions/306305/what-would-make-offsetparent-null
    //|| $elem.offsetParent == null;
}
/**
 * Returns whether the element is disabled.
 * @param $elem
 */
function isDisabled($elem) {
    return $elem.hasAttribute("disabled")
        || ($elem.hasAttribute("aria-disabled") && $elem.getAttribute("aria-disabled") !== "false");
}
/**
 * Determines whether an element is focusable.
 * Read more here: https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus/1600194#1600194
 * Or here: https://stackoverflow.com/questions/18261595/how-to-check-if-a-dom-element-is-focusable
 * @param $elem
 */
function isFocusable($elem) {
    // Discard elements that are removed from the tab order.
    if ($elem.getAttribute("tabindex") === "-1" || isHidden($elem) || isDisabled($elem)) {
        return false;
    }
    return (
    // At this point we know that the element can have focus (eg. won't be -1) if the tabindex attribute exists
    $elem.hasAttribute("tabindex")
        // Anchor tags or area tags with a href set
        || ($elem instanceof HTMLAnchorElement || $elem instanceof HTMLAreaElement) && $elem.hasAttribute("href")
        // Form elements which are not disabled
        || ($elem instanceof HTMLButtonElement
            || $elem instanceof HTMLInputElement
            || $elem instanceof HTMLTextAreaElement
            || $elem instanceof HTMLSelectElement)
        // IFrames
        || $elem instanceof HTMLIFrameElement);
}

const CSS = {
  title: "title",
  header: "header",
  footer: "footer",
  scrim: "scrim",
  back: "back",
  close: "close",
  secondary: "secondary",
  primary: "primary",
  overflowHidden: "overflow-hidden"
};
const ICONS = {
  close: "x"
};
const SLOTS = {
  content: "content",
  header: "header",
  back: "back",
  secondary: "secondary",
  primary: "primary"
};
const TEXT = {
  close: "Close"
};

const modalCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:fixed;top:0px;right:0px;bottom:0px;left:0px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;overflow-y:hidden;color:var(--calcite-ui-text-2);opacity:0;visibility:hidden !important;-webkit-transition:visibility 0ms linear 300ms, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear 300ms, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);z-index:101}:host([scale=s]){--calcite-modal-padding:0.75rem;--calcite-modal-padding-large:1rem;--calcite-modal-title-text:var(--calcite-font-size-1);--calcite-modal-content-text:var(--calcite-font-size--1)}:host([scale=m]){--calcite-modal-padding:1rem;--calcite-modal-padding-large:1.25rem;--calcite-modal-title-text:var(--calcite-font-size-2);--calcite-modal-content-text:var(--calcite-font-size-0)}:host([scale=l]){--calcite-modal-padding:1.25rem;--calcite-modal-padding-large:1.5rem;--calcite-modal-title-text:var(--calcite-font-size-3);--calcite-modal-content-text:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:rgba(0, 0, 0, 0.75);position:fixed;top:0px;right:0px;bottom:0px;left:0px;display:-ms-flexbox;display:flex;overflow-y:hidden}.modal{pointer-events:none;float:none;margin:1.5rem;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;width:100%;-ms-flex-direction:column;flex-direction:column;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);opacity:0;--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);overflow:hidden;z-index:102;-webkit-overflow-scrolling:touch;visibility:hidden;-webkit-transition:visibility 0ms linear 300ms, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear 300ms, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);-webkit-transform:translate3d(0, 20px, 0);transform:translate3d(0, 20px, 0)}:host([active]){opacity:1;visibility:visible !important;-webkit-transition-delay:0ms;transition-delay:0ms}:host([active]) .modal{pointer-events:auto;visibility:visible;opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);-webkit-transition-delay:0ms;transition-delay:0ms}.header{display:-ms-flexbox;display:flex;min-width:0px;max-width:100%;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;border-width:0px;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);-ms-flex:0 0 auto;flex:0 0 auto;z-index:2}.close{-ms-flex-order:2;order:2;margin:0px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;border-start-end-radius:0.25rem;padding:var(--calcite-modal-padding);-ms-flex:0 0 auto;flex:0 0 auto}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.close:hover,.close:focus,.close:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.title{-ms-flex-order:1;order:1;display:-ms-flexbox;display:flex;min-width:0px;-ms-flex-align:center;align-items:center;-ms-flex:1 1 auto;flex:1 1 auto;padding:var(--calcite-modal-padding) var(--calcite-modal-padding-large)}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1);font-size:var(--calcite-modal-title-text)}.content{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;height:100%;overflow:auto;background-color:var(--calcite-ui-foreground-1);padding:0px;max-height:calc(100vh - 12rem);z-index:1}.content--spaced{padding:var(--calcite-modal-padding) var(--calcite-modal-padding-large)}.content--no-footer{border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-content-text)}:host([background-color=grey]) .content{background-color:var(--calcite-ui-background)}.footer{margin-top:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;width:100%;-ms-flex-pack:justify;justify-content:space-between;border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem;border-width:0px;border-top-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);-ms-flex:0 0 auto;flex:0 0 auto;padding:var(--calcite-modal-padding) var(--calcite-modal-padding-large);z-index:2}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;-webkit-margin-end:auto;margin-inline-end:auto}.secondary{margin-left:0.25rem;margin-right:0.25rem;display:block}slot[name=primary]{display:block}:host([width=small]) .modal{width:auto}:host([width=s]) .modal{max-width:32rem}@media screen and (max-width: 35rem){:host([width=s]) .modal{margin:0px}:host([width=s]) .modal{height:100%}:host([width=s]) .modal{max-height:100%}:host([width=s]) .modal{width:100%}:host([width=s]) .modal{max-width:100%}:host([width=s]) .modal{border-radius:0px}:host([width=s]) .content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=s][docked]){-ms-flex-align:end;align-items:flex-end}}:host([width=m]) .modal{max-width:48rem}@media screen and (max-width: 51rem){:host([width=m]) .modal{margin:0px}:host([width=m]) .modal{height:100%}:host([width=m]) .modal{max-height:100%}:host([width=m]) .modal{width:100%}:host([width=m]) .modal{max-width:100%}:host([width=m]) .modal{border-radius:0px}:host([width=m]) .content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=m][docked]){-ms-flex-align:end;align-items:flex-end}}:host([width=l]) .modal{max-width:94rem}@media screen and (max-width: 97rem){:host([width=l]) .modal{margin:0px}:host([width=l]) .modal{height:100%}:host([width=l]) .modal{max-height:100%}:host([width=l]) .modal{width:100%}:host([width=l]) .modal{max-width:100%}:host([width=l]) .modal{border-radius:0px}:host([width=l]) .content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=l][docked]){-ms-flex-align:end;align-items:flex-end}}:host([fullscreen]){background-color:transparent}:host([fullscreen]) .modal{margin:0px;height:100%;max-height:100%;width:100%;max-width:100%;-webkit-transform:translate3D(0, 20px, 0) scale(0.95);transform:translate3D(0, 20px, 0) scale(0.95)}:host([fullscreen]) .content{max-height:100%;-ms-flex:1 1 auto;flex:1 1 auto}:host([active][fullscreen]) .modal{-webkit-transform:translate3D(0, 0, 0) scale(1);transform:translate3D(0, 0, 0) scale(1)}:host([active][fullscreen]) .header{border-radius:0}:host([active][fullscreen]) .footer{border-radius:0}:host([docked]) .modal{height:auto}:host([docked]) .content{height:auto;-ms-flex:1 1 auto;flex:1 1 auto}@media screen and (max-width: 860px){:host([docked]) .modal{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}:host([docked]) .close{border-start-end-radius:var(--calcite-border-radius)}}:host([color=red]) .modal{border-color:var(--calcite-ui-danger)}:host([color=blue]) .modal{border-color:var(--calcite-ui-info)}:host([color=red]) .modal,:host([color=blue]) .modal{border-width:0px;border-top-width:4px;border-style:solid}:host([color=red]) .header,:host([color=blue]) .header{border-radius:0.25rem;border-bottom-right-radius:0px;border-bottom-left-radius:0px}@media screen and (max-width: 860px){slot[name=header]::slotted(*),*::slotted([slot=header]){font-size:var(--calcite-font-size-1)}.footer{position:-webkit-sticky;position:sticky}.footer{bottom:0px}}@media screen and (max-width: 480px){.footer{-ms-flex-direction:column;flex-direction:column}.back,.secondary{margin:0px}.back,.secondary{margin-bottom:0.25rem}}";

const isFocusableExtended = (el) => {
  return isCalciteFocusable(el) || isFocusable(el);
};
const getFocusableElements = (el) => {
  return queryShadowRoot(el, isHidden, isFocusableExtended);
};
const Modal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteModalOpen = createEvent(this, "calciteModalOpen", 7);
    this.calciteModalClose = createEvent(this, "calciteModalClose", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Add the active attribute to open the modal */
    this.active = false;
    /** Optionally pass a function to run before close */
    this.beforeClose = () => Promise.resolve();
    /** Disables the display a close button within the Modal */
    this.disableCloseButton = false;
    /** Disables the closing of the Modal when clicked outside. */
    this.disableOutsideClose = false;
    /** Aria label for the close button */
    this.intlClose = TEXT.close;
    /** Flag to disable the default close on escape behavior */
    this.disableEscape = false;
    /** specify the scale of modal, defaults to m */
    this.scale = "m";
    /** Set the width of the modal. Can use stock sizes or pass a number (in pixels) */
    this.width = "m";
    /** Background color of modal content */
    this.backgroundColor = "white";
    /** Turn off spacing around the content area slot */
    this.noPadding = false;
    //--------------------------------------------------------------------------
    //
    //  Variables
    //
    //--------------------------------------------------------------------------
    this.hasFooter = true;
    this.mutationObserver = createObserver("mutation", () => this.updateFooterVisibility());
    this.activeTransitionProp = "opacity";
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.transitionEnd = (event) => {
      if (event.propertyName === this.activeTransitionProp) {
        this.active ? this.calciteModalOpen.emit() : this.calciteModalClose.emit();
      }
    };
    this.openEnd = () => {
      this.setFocus();
      this.el.removeEventListener("calciteModalOpen", this.openEnd);
    };
    this.handleOutsideClose = () => {
      if (this.disableOutsideClose) {
        return;
      }
      this.close();
    };
    /** Close the modal, first running the `beforeClose` method */
    this.close = () => {
      return this.beforeClose(this.el).then(() => {
        this.active = false;
        focusElement(this.previousActiveElement);
        this.removeOverflowHiddenClass();
      });
    };
    this.focusFirstElement = () => {
      focusElement(this.disableCloseButton ? getFocusableElements(this.el)[0] : this.closeButtonEl);
    };
    this.focusLastElement = () => {
      const focusableElements = getFocusableElements(this.el).filter((el) => !el.getAttribute("data-focus-fence"));
      if (focusableElements.length > 0) {
        focusElement(focusableElements[focusableElements.length - 1]);
      }
      else {
        focusElement(this.closeButtonEl);
      }
    };
    this.updateFooterVisibility = () => {
      this.hasFooter = !!getSlotted(this.el, [SLOTS.back, SLOTS.primary, SLOTS.secondary]);
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    // when modal initially renders, if active was set we need to open as watcher doesn't fire
    if (this.active) {
      this.open();
    }
  }
  connectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
    this.updateFooterVisibility();
    connectConditionalSlotComponent(this);
  }
  disconnectedCallback() {
    var _a;
    this.removeOverflowHiddenClass();
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    disconnectConditionalSlotComponent(this);
  }
  render() {
    return (h(Host, { "aria-describedby": this.contentId, "aria-labelledby": this.titleId, "aria-modal": "true", role: "dialog" }, h("calcite-scrim", { class: CSS.scrim, onClick: this.handleOutsideClose }), this.renderStyle(), h("div", { class: "modal", onTransitionEnd: this.transitionEnd }, h("div", { "data-focus-fence": true, onFocus: this.focusLastElement, tabindex: "0" }), h("div", { class: CSS.header }, this.renderCloseButton(), h("header", { class: CSS.title }, h("slot", { name: CSS.header }))), h("div", { class: {
        content: true,
        "content--spaced": !this.noPadding,
        "content--no-footer": !this.hasFooter
      }, ref: (el) => (this.modalContent = el) }, h("slot", { name: SLOTS.content })), this.renderFooter(), h("div", { "data-focus-fence": true, onFocus: this.focusFirstElement, tabindex: "0" }))));
  }
  renderFooter() {
    return this.hasFooter ? (h("div", { class: CSS.footer, key: "footer" }, h("span", { class: CSS.back }, h("slot", { name: SLOTS.back })), h("span", { class: CSS.secondary }, h("slot", { name: SLOTS.secondary })), h("span", { class: CSS.primary }, h("slot", { name: SLOTS.primary })))) : null;
  }
  renderCloseButton() {
    return !this.disableCloseButton ? (h("button", { "aria-label": this.intlClose, class: CSS.close, key: "button", onClick: this.close, ref: (el) => (this.closeButtonEl = el), title: this.intlClose }, h("calcite-icon", { icon: ICONS.close, scale: this.scale === "s" ? "s" : this.scale === "m" ? "m" : this.scale === "l" ? "l" : null }))) : null;
  }
  renderStyle() {
    const hasCustomWidth = !isNaN(parseInt(`${this.width}`));
    return hasCustomWidth ? (h("style", null, `
        .modal {
          max-width: ${this.width}px !important;
        }
        @media screen and (max-width: ${this.width}px) {
          .modal {
            height: 100% !important;
            max-height: 100% !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            border-radius: 0 !important;
          }
          .content {
            flex: 1 1 auto !important;
            max-height: unset !important;
          }
        }
      `)) : null;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  handleEscape(e) {
    if (this.active && !this.disableEscape && e.key === "Escape") {
      this.close();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Focus first interactive element
   * @deprecated use `setFocus` instead.
   */
  async focusElement(el) {
    if (el) {
      el.focus();
    }
    return this.setFocus();
  }
  /**
   * Sets focus on the component.
   *
   * By default, will try to focus on any focusable content. If there is none, it will focus on the close button.
   * If you want to focus on the close button, you can use the `close-button` focus ID.
   */
  async setFocus(focusId) {
    const closeButton = this.closeButtonEl;
    return focusElement(focusId === "close-button" ? closeButton : getFocusableElements(this.el)[0] || closeButton);
  }
  /** Set the scroll top of the modal content */
  async scrollContent(top = 0, left = 0) {
    if (this.modalContent) {
      if (this.modalContent.scrollTo) {
        this.modalContent.scrollTo({ top, left, behavior: "smooth" });
      }
      else {
        this.modalContent.scrollTop = top;
        this.modalContent.scrollLeft = left;
      }
    }
  }
  async toggleModal(value, oldValue) {
    if (value !== oldValue) {
      if (value) {
        this.open();
      }
      else if (!value) {
        this.close();
      }
    }
  }
  /** Open the modal */
  open() {
    this.previousActiveElement = document.activeElement;
    this.el.addEventListener("calciteModalOpen", this.openEnd);
    this.active = true;
    const titleEl = getSlotted(this.el, SLOTS.header);
    const contentEl = getSlotted(this.el, SLOTS.content);
    this.titleId = ensureId(titleEl);
    this.contentId = ensureId(contentEl);
    document.documentElement.classList.add(CSS.overflowHidden);
  }
  removeOverflowHiddenClass() {
    document.documentElement.classList.remove(CSS.overflowHidden);
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "active": ["toggleModal"]
  }; }
};
Modal.style = modalCss;

export { Modal as calcite_modal };
