/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const progressCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:block;width:100%}.track,.bar{position:absolute;top:0px;height:2px}.track{z-index:0;width:100%;overflow:hidden;background:var(--calcite-ui-border-3)}.bar{z-index:0;background-color:var(--calcite-ui-brand)}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{width:20%;-webkit-animation:looping-progress-bar-ani 2200ms linear infinite;animation:looping-progress-bar-ani 2200ms linear infinite}.reversed{animation-direction:reverse}.text{padding-left:0px;padding-right:0px;padding-top:1rem;padding-bottom:0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium)}@-webkit-keyframes looping-progress-bar-ani{0%{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}50%{width:40%}100%{-webkit-transform:translate3d(600%, 0, 0);transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani{0%{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}50%{width:40%}100%{-webkit-transform:translate3d(600%, 0, 0);transform:translate3d(600%, 0, 0)}}";

const Progress = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /** Use indeterminate if finding actual progress value is impossible */
    this.type = "determinate";
    /** Fraction completed, in the range of 0 - 1.0 */
    this.value = 0;
    /** For indeterminate progress bars, reverse the animation direction */
    this.reversed = false;
  }
  render() {
    const isDeterminate = this.type === "determinate";
    const barStyles = isDeterminate ? { width: `${this.value * 100}%` } : {};
    return (h("div", { "aria-label": this.label || this.text, "aria-valuemax": 1, "aria-valuemin": 0, "aria-valuenow": this.value, role: "progressbar" }, h("div", { class: "track" }, h("div", { class: {
        bar: true,
        indeterminate: this.type === "indeterminate",
        reversed: this.reversed
      }, style: barStyles })), this.text ? h("div", { class: "text" }, this.text) : null));
  }
  get el() { return this; }
  static get style() { return progressCss; }
}, [1, "calcite-progress", {
    "type": [1],
    "value": [2],
    "label": [1],
    "text": [1],
    "reversed": [4]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-progress"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Progress);
      }
      break;
  } });
}
defineCustomElement();

export { Progress as P, defineCustomElement as d };
