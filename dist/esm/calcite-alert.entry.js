/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-73638693.js';
import { s as setRequestedIcon, g as getSlotted } from './dom-3f012371.js';
import { S as StatusIcons } from './interfaces-de185544.js';
import './guid-a53704be.js';

const TEXT = {
  intlClose: "Close"
};
const DURATIONS = {
  slow: 14000,
  medium: 10000,
  fast: 6000
};
const SLOTS = {
  title: "title",
  message: "message",
  link: "link"
};

const alertCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-alert-width:40em;--calcite-alert-spacing-token-small:0.5rem;--calcite-alert-spacing-token-large:0.75rem}:host([scale=s]) slot[name=title]::slotted(*),:host([scale=s]) *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) slot[name=message]::slotted(*),:host([scale=s]) *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) slot[name=link]::slotted(*),:host([scale=s]) *::slotted([slot=link]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .alert-queue-count{margin-left:0.5rem;margin-right:0.5rem}:host([scale=s]) .container{--calcite-alert-min-height:3.5rem}:host([scale=s]) .alert-close{padding:0.5rem}:host([scale=m]){--calcite-alert-width:50em;--calcite-alert-spacing-token-small:0.75rem;--calcite-alert-spacing-token-large:1rem}:host([scale=m]) slot[name=title]::slotted(*),:host([scale=m]) *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) slot[name=message]::slotted(*),:host([scale=m]) *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) slot[name=link]::slotted(*),:host([scale=m]) *::slotted([slot=link]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .alert-queue-count{margin-left:0.75rem;margin-right:0.75rem}:host([scale=m]) .container{--calcite-alert-min-height:4.1875rem}:host([scale=l]){--calcite-alert-width:60em;--calcite-alert-spacing-token-small:1rem;--calcite-alert-spacing-token-large:1.25rem}:host([scale=l]) slot[name=title]::slotted(*),:host([scale=l]) *::slotted([slot=title]){margin-bottom:0.25rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) slot[name=message]::slotted(*),:host([scale=l]) *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) slot[name=link]::slotted(*),:host([scale=l]) *::slotted([slot=link]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .alert-queue-count{margin-left:1rem;margin-right:1rem}:host([scale=l]) .container{--calcite-alert-min-height:5.625rem}:host{--calcite-alert-edge-distance:2rem;display:block}:host .container{pointer-events:none;position:fixed;margin-top:0px;margin-bottom:0px;margin-left:auto;margin-right:auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);opacity:0;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius);border-top:0px solid transparent;border-left:1px solid var(--calcite-ui-border-3);border-right:1px solid var(--calcite-ui-border-3);border-bottom:1px solid var(--calcite-ui-border-3);min-height:var(--calcite-alert-min-height);width:var(--calcite-alert-width);max-width:calc(100% - (var(--calcite-alert-edge-distance) * 2 + 2px));max-height:0;z-index:101;-webkit-transition:var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out;transition:var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out}:host .container.bottom,:host .container.top{inset-inline-end:0;inset-inline-start:0}:host .container[class*=bottom]{-webkit-transform:translate3d(0, var(--calcite-alert-edge-distance), 0);transform:translate3d(0, var(--calcite-alert-edge-distance), 0);inset-block-end:var(--calcite-alert-edge-distance)}:host .container[class*=top]{-webkit-transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), 0);transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), 0);inset-block-start:var(--calcite-alert-edge-distance)}:host .container[class*=-start]{inset-inline-start:var(--calcite-alert-edge-distance);inset-inline-end:auto}:host .container[class*=-end]{inset-inline-end:var(--calcite-alert-edge-distance);inset-inline-start:auto}.container{display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.alert-close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.alert-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([active]) .container:not(.queued){max-height:100%;border-top-width:2px;opacity:1;pointer-events:initial}:host([active]) .container:not(.queued)[class*=bottom]{-webkit-transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), inherit);transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), inherit)}:host([active]) .container:not(.queued)[class*=top]{-webkit-transform:translate3d(0, var(--calcite-alert-edge-distance), inherit);transform:translate3d(0, var(--calcite-alert-edge-distance), inherit)}slot[name=title]::slotted(*),*::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}slot[name=message]::slotted(*),*::slotted([slot=message]){margin:0px;display:inline;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}slot[name=link]::slotted(*),*::slotted([slot=link]){display:-ms-inline-flexbox;display:inline-flex;color:var(--calcite-ui-text-link)}.alert-content{-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;overflow-wrap:break-word;background-color:var(--calcite-ui-foreground-1);-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;padding-block:var(--calcite-alert-spacing-token-small);padding-inline:0 var(--calcite-alert-spacing-token-small);border-bottom-left-radius:var(--calcite-border-radius);border-bottom-right-radius:var(--calcite-border-radius)}.alert-content:first-of-type:not(:only-child){-webkit-padding-start:var(--calcite-alert-spacing-token-large);padding-inline-start:var(--calcite-alert-spacing-token-large)}.alert-content:only-child{padding:var(--calcite-alert-spacing-token-small)}.alert-icon{-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;background-color:var(--calcite-ui-foreground-1);padding-top:0px;padding-bottom:0px}.alert-close{-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;cursor:pointer;-ms-flex-item-align:stretch;align-self:stretch;border-style:none;background-color:var(--calcite-ui-foreground-1);padding-top:0px;padding-bottom:0px;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;overflow:hidden;border-end-end-radius:var(--calcite-border-radius)}.alert-close:hover,.alert-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.alert-close:active{background-color:var(--calcite-ui-foreground-3)}.alert-queue-count{visibility:hidden;display:-ms-flexbox;display:flex;cursor:default;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-item-align:stretch;align-self:stretch;background-color:var(--calcite-ui-foreground-1);text-align:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);opacity:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;overflow:hidden;border-left:0px solid transparent;border-right:0px solid transparent;border-top-right-radius:0}.alert-queue-count.active{visibility:visible;opacity:1}:host([auto-dismiss])>.alert-queue-count{-webkit-border-end:0px solid transparent;border-inline-end:0px solid transparent}.alert-dismiss-progress{position:absolute;left:0px;right:0px;display:block;width:100%;overflow:hidden;top:-2px;height:2px;z-index:103;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.alert-dismiss-progress:after{position:absolute;top:0px;display:block;height:2px;content:\"\";background-color:var(--calcite-alert-dismiss-progress-background);z-index:104;inset-inline-end:0}:host([color=blue]) .container{border-top-color:var(--calcite-ui-info)}:host([color=blue]) .container .alert-icon{color:var(--calcite-ui-info)}:host([color=red]) .container{border-top-color:var(--calcite-ui-danger)}:host([color=red]) .container .alert-icon{color:var(--calcite-ui-danger)}:host([color=yellow]) .container{border-top-color:var(--calcite-ui-warning)}:host([color=yellow]) .container .alert-icon{color:var(--calcite-ui-warning)}:host([color=green]) .container{border-top-color:var(--calcite-ui-success)}:host([color=green]) .container .alert-icon{color:var(--calcite-ui-success)}:host([auto-dismiss-duration=fast]) .alert-dismiss-progress:after{-webkit-animation:dismissProgress 6000ms ease-out;animation:dismissProgress 6000ms ease-out}:host([auto-dismiss-duration=medium]) .alert-dismiss-progress:after{-webkit-animation:dismissProgress 10000ms ease-out;animation:dismissProgress 10000ms ease-out}:host([auto-dismiss-duration=slow]) .alert-dismiss-progress:after{-webkit-animation:dismissProgress 14000ms ease-out;animation:dismissProgress 14000ms ease-out}@-webkit-keyframes dismissProgress{0%{width:0px}0%{opacity:0.75}100%{width:100%}100%{opacity:1}}@keyframes dismissProgress{0%{width:0px}0%{opacity:0.75}100%{width:100%}100%{opacity:1}}";

const Alert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteAlertClose = createEvent(this, "calciteAlertClose", 7);
    this.calciteAlertOpen = createEvent(this, "calciteAlertOpen", 7);
    this.calciteAlertSync = createEvent(this, "calciteAlertSync", 7);
    this.calciteAlertRegister = createEvent(this, "calciteAlertRegister", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //---------------------------------------------------------------------------
    /** Is the alert currently active or not */
    this.active = false;
    /** Close the alert automatically (recommended for passive, non-blocking alerts) */
    this.autoDismiss = false;
    /** Duration of autoDismiss (only used with `autoDismiss`) */
    this.autoDismissDuration = this.autoDismiss ? "medium" : null;
    /** Color for the alert (will apply to top border and icon) */
    this.color = "blue";
    /** string to override English close text
     * @default "Close"
     */
    this.intlClose = TEXT.intlClose;
    /** specify the placement of the alert */
    this.placement = "bottom";
    /** specify the scale of the alert, defaults to m */
    this.scale = "m";
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    /** the list of queued alerts */
    this.queue = [];
    /** the count of queued alerts */
    this.queueLength = 0;
    /** is the alert queued */
    this.queued = false;
    this.autoDismissTimeoutId = null;
    this.trackTimer = Date.now();
    this.activeTransitionProp = "opacity";
    /** close and emit the closed alert and the queue */
    this.closeAlert = () => {
      this.autoDismissTimeoutId = null;
      this.queued = false;
      this.active = false;
      this.queue = this.queue.filter((e) => e !== this.el);
      this.determineActiveAlert();
      this.calciteAlertSync.emit({ queue: this.queue });
    };
    this.transitionEnd = (event) => {
      if (event.propertyName === this.activeTransitionProp) {
        this.active
          ? this.calciteAlertOpen.emit({
            el: this.el,
            queue: this.queue
          })
          : this.calciteAlertClose.emit({
            el: this.el,
            queue: this.queue
          });
      }
    };
  }
  watchActive() {
    if (this.active && !this.queued) {
      this.calciteAlertRegister.emit();
    }
    if (!this.active) {
      this.queue = this.queue.filter((e) => e !== this.el);
      this.calciteAlertSync.emit({ queue: this.queue });
    }
  }
  updateRequestedIcon() {
    this.requestedIcon = setRequestedIcon(StatusIcons, this.icon, this.color);
  }
  updateDuration() {
    if (this.autoDismiss && this.autoDismissTimeoutId) {
      window.clearTimeout(this.autoDismissTimeoutId);
      this.autoDismissTimeoutId = window.setTimeout(() => this.closeAlert(), DURATIONS[this.autoDismissDuration] - (Date.now() - this.trackTimer));
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    if (this.active && !this.queued) {
      this.calciteAlertRegister.emit();
    }
  }
  componentWillLoad() {
    this.requestedIcon = setRequestedIcon(StatusIcons, this.icon, this.color);
  }
  disconnectedCallback() {
    window.clearTimeout(this.autoDismissTimeoutId);
  }
  render() {
    const closeButton = (h("button", { "aria-label": this.intlClose, class: "alert-close", onClick: this.closeAlert, ref: (el) => (this.closeButton = el), type: "button" }, h("calcite-icon", { icon: "x", scale: this.scale === "l" ? "m" : "s" })));
    const queueText = `+${this.queueLength > 2 ? this.queueLength - 1 : 1}`;
    const queueCount = (h("div", { class: `${this.queueLength > 1 ? "active " : ""}alert-queue-count` }, h("calcite-chip", { scale: this.scale, value: queueText }, queueText)));
    const { active, autoDismiss, label, placement, queued, requestedIcon } = this;
    const role = autoDismiss ? "alert" : "alertdialog";
    const hidden = !active;
    return (h(Host, { "aria-hidden": hidden.toString(), "aria-label": label, "calcite-hydrated-hidden": hidden, role: role }, h("div", { class: {
        container: true,
        queued,
        [placement]: true
      }, onTransitionEnd: this.transitionEnd }, requestedIcon ? (h("div", { class: "alert-icon" }, h("calcite-icon", { icon: requestedIcon, scale: this.scale === "l" ? "m" : "s" }))) : null, h("div", { class: "alert-content" }, h("slot", { name: SLOTS.title }), h("slot", { name: SLOTS.message }), h("slot", { name: SLOTS.link })), queueCount, !autoDismiss ? closeButton : null, active && !queued && autoDismiss ? h("div", { class: "alert-dismiss-progress" }) : null)));
  }
  // when an alert is opened or closed, update queue and determine active alert
  alertSync(event) {
    if (this.queue !== event.detail.queue) {
      this.queue = event.detail.queue;
    }
    this.queueLength = this.queue.length;
    this.determineActiveAlert();
  }
  // when an alert is first registered, trigger a queue sync to get queue
  alertRegister() {
    if (this.active && !this.queue.includes(this.el)) {
      this.queued = true;
      this.queue.push(this.el);
    }
    this.calciteAlertSync.emit({ queue: this.queue });
    this.determineActiveAlert();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    const alertLinkEl = getSlotted(this.el, { selector: "calcite-link" });
    if (!this.closeButton && !alertLinkEl) {
      return;
    }
    else if (alertLinkEl) {
      alertLinkEl.setFocus();
    }
    else if (this.closeButton) {
      this.closeButton.focus();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /** determine which alert is active */
  determineActiveAlert() {
    var _a;
    if (((_a = this.queue) === null || _a === void 0 ? void 0 : _a[0]) === this.el) {
      this.openAlert();
      if (this.autoDismiss && !this.autoDismissTimeoutId) {
        this.trackTimer = Date.now();
        this.autoDismissTimeoutId = window.setTimeout(() => this.closeAlert(), DURATIONS[this.autoDismissDuration]);
      }
    }
    else {
      return;
    }
  }
  /** emit the opened alert and the queue */
  openAlert() {
    window.clearTimeout(this.queueTimeout);
    this.queueTimeout = window.setTimeout(() => (this.queued = false), 300);
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "active": ["watchActive"],
    "icon": ["updateRequestedIcon"],
    "color": ["updateRequestedIcon"],
    "autoDismissDuration": ["updateDuration"]
  }; }
};
Alert.style = alertCss;

export { Alert as calcite_alert };
