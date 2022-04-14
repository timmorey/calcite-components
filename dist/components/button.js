/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { proxyCustomElement, HTMLElement as HTMLElement$1, Build, h } from '@stencil/core/internal/client';
import { d as closestElementCrossShadowBoundary } from './dom.js';
import { c as connectLabel, d as disconnectLabel, g as getLabelText } from './label.js';
import { c as createObserver } from './observers.js';
import { u as updateHostInteraction } from './interactive.js';
import { d as defineCustomElement$2 } from './icon.js';
import { d as defineCustomElement$1 } from './loader.js';

(function(prototype) {
  if (typeof prototype.requestSubmit == "function") return

  prototype.requestSubmit = function(submitter) {
    if (submitter) {
      validateSubmitter(submitter, this);
      submitter.click();
    } else {
      submitter = document.createElement("input");
      submitter.type = "submit";
      submitter.hidden = true;
      this.appendChild(submitter);
      submitter.click();
      this.removeChild(submitter);
    }
  };

  function validateSubmitter(submitter, form) {
    submitter instanceof HTMLElement || raise(TypeError, "parameter 1 is not of type 'HTMLElement'");
    submitter.type == "submit" || raise(TypeError, "The specified element is not a submit button");
    submitter.form == form || raise(DOMException, "The specified element is not owned by this form element", "NotFoundError");
  }

  function raise(errorConstructor, message, name) {
    throw new errorConstructor("Failed to execute 'requestSubmit' on 'HTMLFormElement': " + message + ".", name)
  }
})(HTMLFormElement.prototype);

const CSS = {
  buttonLoader: "calcite-button--loader",
  content: "content",
  contentSlotted: "content--slotted",
  icon: "icon",
  iconStart: "icon--start",
  iconEnd: "icon--end",
  loadingIn: "loading-in",
  loadingOut: "loading-out",
  iconStartEmpty: "icon-start-empty",
  iconEndEmpty: "icon-end-empty"
};
const TEXT = {
  loading: "Loading"
};

const buttonCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline-block;width:auto;vertical-align:middle}:host([round]){border-radius:50px}:host([round]) a,:host([round]) button{border-radius:50px}:host button,:host a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus,:host a:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host button,:host a{--calcite-button-content-margin:0.5rem;--calcite-button-padding-x:7px;--calcite-button-padding-y:3px;padding:var(--calcite-button-padding-y) var(--calcite-button-padding-x) var(--calcite-button-padding-y) var(--calcite-button-padding-x);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;height:100%;width:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:0px;border-style:none;text-align:center;font-family:inherit;font-weight:var(--calcite-font-weight-normal);-webkit-text-decoration-line:none;text-decoration-line:none;-webkit-transition:color var(--calcite-animation-timing) ease-in-out, background-color var(--calcite-animation-timing) ease-in-out, outline-offset var(--calcite-internal-animation-timing-fast) ease-in-out, outline-color var(--calcite-internal-animation-timing-fast) ease-in-out, -webkit-box-shadow var(--calcite-animation-timing) ease-in-out;transition:color var(--calcite-animation-timing) ease-in-out, background-color var(--calcite-animation-timing) ease-in-out, outline-offset var(--calcite-internal-animation-timing-fast) ease-in-out, outline-color var(--calcite-internal-animation-timing-fast) ease-in-out, -webkit-box-shadow var(--calcite-animation-timing) ease-in-out;transition:color var(--calcite-animation-timing) ease-in-out, background-color var(--calcite-animation-timing) ease-in-out, box-shadow var(--calcite-animation-timing) ease-in-out, outline-offset var(--calcite-internal-animation-timing-fast) ease-in-out, outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;transition:color var(--calcite-animation-timing) ease-in-out, background-color var(--calcite-animation-timing) ease-in-out, box-shadow var(--calcite-animation-timing) ease-in-out, outline-offset var(--calcite-internal-animation-timing-fast) ease-in-out, outline-color var(--calcite-internal-animation-timing-fast) ease-in-out, -webkit-box-shadow var(--calcite-animation-timing) ease-in-out}:host button:hover,:host a:hover{-webkit-text-decoration-line:none;text-decoration-line:none}.content{display:-ms-flexbox;display:flex;-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-margin-start:var(--calcite-button-content-margin);margin-inline-start:var(--calcite-button-content-margin);-webkit-margin-end:var(--calcite-button-content-margin);margin-inline-end:var(--calcite-button-content-margin)}.icon-start-empty .content{-webkit-margin-start:unset;margin-inline-start:unset}.icon-end-empty .content{-webkit-margin-end:unset;margin-inline-end:unset}:host([scale=m]) button,:host([scale=m]) a{--calcite-button-content-margin:0.75rem}:host([scale=l]) button,:host([scale=l]) a{--calcite-button-content-margin:1rem}:host([width=auto]){width:auto}:host([width=half]){width:50%}:host([width=full]){width:100%}:host([alignment=center]:not([width=auto])) a,:host([alignment=center]:not([width=auto])) button{-ms-flex-pack:center;justify-content:center}:host([alignment=start]:not([width=auto])) a,:host([alignment=start]:not([width=auto])) button{-ms-flex-pack:start;justify-content:flex-start}:host([alignment=end]:not([width=auto])) a,:host([alignment=end]:not([width=auto])) button{-ms-flex-pack:end;justify-content:flex-end}:host([alignment*=space-between]:not([width=auto])) a,:host([alignment*=space-between]:not([width=auto])) button{-ms-flex-pack:justify;justify-content:space-between}:host([alignment=icon-start-space-between]:not([width=auto])) .icon--start{-webkit-margin-end:auto;margin-inline-end:auto}:host([alignment=icon-start-space-between]:not([width=auto])) a,:host([alignment=icon-start-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=icon-end-space-between]:not([width=auto])) .icon--end{-webkit-margin-start:auto;margin-inline-start:auto}:host([alignment=icon-end-space-between]:not([width=auto])) a,:host([alignment=icon-end-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=center]) a:not(.content--slotted) .icon--start+.icon--end,:host([alignment=center]) button:not(.content--slotted) .icon--start+.icon--end{-webkit-margin-start:var(--calcite-button-content-margin);margin-inline-start:var(--calcite-button-content-margin)}.icon{position:relative;margin:0px;display:-ms-inline-flexbox;display:inline-flex;font-weight:var(--calcite-font-weight-normal);line-height:inherit}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([loading]){pointer-events:none}:host([loading]) button,:host([loading]) a{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}@-webkit-keyframes loader-in{0%{width:0;opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)}100%{width:1em;opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes loader-in{0%{width:0;opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)}100%{width:1em;opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes loader-out{0%{width:1em;opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{width:0;opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)}}@keyframes loader-out{0%{width:1em;opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{width:0;opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)}}.calcite-button--loader{display:-ms-flexbox;display:flex}.calcite-button--loader calcite-loader{margin:0px;-webkit-transition:width var(--calcite-internal-animation-timing-slow) ease-in-out, opacity var(--calcite-internal-animation-timing-slow) ease-in-out, -webkit-transform var(--calcite-internal-animation-timing-slow) ease-in-out;transition:width var(--calcite-internal-animation-timing-slow) ease-in-out, opacity var(--calcite-internal-animation-timing-slow) ease-in-out, -webkit-transform var(--calcite-internal-animation-timing-slow) ease-in-out;transition:width var(--calcite-internal-animation-timing-slow) ease-in-out, opacity var(--calcite-internal-animation-timing-slow) ease-in-out, transform var(--calcite-internal-animation-timing-slow) ease-in-out;transition:width var(--calcite-internal-animation-timing-slow) ease-in-out, opacity var(--calcite-internal-animation-timing-slow) ease-in-out, transform var(--calcite-internal-animation-timing-slow) ease-in-out, -webkit-transform var(--calcite-internal-animation-timing-slow) ease-in-out}.calcite-button--loader calcite-loader.loading-in{-webkit-animation-name:loader-in;animation-name:loader-in;-webkit-animation-duration:310ms;animation-duration:310ms}.calcite-button--loader calcite-loader.loading-out{-webkit-animation-name:loader-out;animation-name:loader-out;-webkit-animation-duration:310ms;animation-duration:310ms}:host([loading]) button.content--slotted .calcite-button--loader calcite-loader,:host([loading]) a.content--slotted .calcite-button--loader calcite-loader{-webkit-margin-end:var(--calcite-button-content-margin);margin-inline-end:var(--calcite-button-content-margin)}:host([loading]) button:not(.content--slotted) .icon--start,:host([loading]) button:not(.content--slotted) .icon--end,:host([loading]) a:not(.content--slotted) .icon--start,:host([loading]) a:not(.content--slotted) .icon--end{display:none}:host([appearance=solid]) button,:host([appearance=solid]) a{border-width:1px;border-style:solid;border-color:transparent}:host([appearance=solid][color=blue]) button,:host([appearance=solid][color=blue]) a{background-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-inverse)}:host([appearance=solid][color=blue]) button:hover,:host([appearance=solid][color=blue]) button:focus,:host([appearance=solid][color=blue]) a:hover,:host([appearance=solid][color=blue]) a:focus{background-color:var(--calcite-ui-brand-hover)}:host([appearance=solid][color=blue]) button:active,:host([appearance=solid][color=blue]) a:active{background-color:var(--calcite-ui-brand-press)}:host([appearance=solid][color=blue]) button calcite-loader,:host([appearance=solid][color=blue]) a calcite-loader{color:var(--calcite-ui-text-inverse)}:host([appearance=solid][color=red]) button,:host([appearance=solid][color=red]) a{background-color:var(--calcite-ui-danger);color:var(--calcite-ui-text-inverse)}:host([appearance=solid][color=red]) button:hover,:host([appearance=solid][color=red]) button:focus,:host([appearance=solid][color=red]) a:hover,:host([appearance=solid][color=red]) a:focus{background-color:var(--calcite-ui-danger-hover)}:host([appearance=solid][color=red]) button:active,:host([appearance=solid][color=red]) a:active{background-color:var(--calcite-ui-danger-press)}:host([appearance=solid][color=red]) button calcite-loader,:host([appearance=solid][color=red]) a calcite-loader{color:var(--calcite-ui-text-inverse)}:host([appearance=solid][color=neutral]) button,:host([appearance=solid][color=neutral]) a{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}:host([appearance=solid][color=neutral]) button:hover,:host([appearance=solid][color=neutral]) button:focus,:host([appearance=solid][color=neutral]) a:hover,:host([appearance=solid][color=neutral]) a:focus{background-color:var(--calcite-ui-foreground-2)}:host([appearance=solid][color=neutral]) button:active,:host([appearance=solid][color=neutral]) a:active{background-color:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=neutral]) button calcite-loader,:host([appearance=solid][color=neutral]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=solid][color=inverse]) button,:host([appearance=solid][color=inverse]) a{color:var(--calcite-ui-text-inverse);background-color:var(--calcite-ui-inverse)}:host([appearance=solid][color=inverse]) button:hover,:host([appearance=solid][color=inverse]) button:focus,:host([appearance=solid][color=inverse]) a:hover,:host([appearance=solid][color=inverse]) a:focus{background-color:var(--calcite-ui-inverse-hover)}:host([appearance=solid][color=inverse]) button:active,:host([appearance=solid][color=inverse]) a:active{background-color:var(--calcite-ui-inverse-press)}:host([appearance=solid][color=inverse]) button calcite-loader,:host([appearance=solid][color=inverse]) a calcite-loader{color:var(--calcite-ui-text-inverse)}:host([appearance=outline]) button,:host([appearance=outline]) a{border-width:1px;border-style:solid;background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=blue]) button,:host([appearance=outline][color=blue]) a{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-brand)}:host([appearance=outline][color=blue]) button:hover,:host([appearance=outline][color=blue]) a:hover{border-color:var(--calcite-ui-brand-hover);color:var(--calcite-ui-brand-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}:host([appearance=outline][color=blue]) button:focus,:host([appearance=outline][color=blue]) a:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([appearance=outline][color=blue]) button:active,:host([appearance=outline][color=blue]) a:active{border-color:var(--calcite-ui-brand-press);color:var(--calcite-ui-brand-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press)}:host([appearance=outline][color=blue]) button calcite-loader,:host([appearance=outline][color=blue]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=outline][color=red]) button,:host([appearance=outline][color=red]) a{border-color:var(--calcite-ui-danger);color:var(--calcite-ui-danger)}:host([appearance=outline][color=red]) button:hover,:host([appearance=outline][color=red]) a:hover{border-color:var(--calcite-ui-danger-hover);color:var(--calcite-ui-danger-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-danger-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-danger-hover)}:host([appearance=outline][color=red]) button:focus,:host([appearance=outline][color=red]) a:focus{border-color:var(--calcite-ui-danger);color:var(--calcite-ui-danger);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-danger);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger)}:host([appearance=outline][color=red]) button:active,:host([appearance=outline][color=red]) a:active{border-color:var(--calcite-ui-danger-press);color:var(--calcite-ui-danger-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press)}:host([appearance=outline][color=red]) button calcite-loader,:host([appearance=outline][color=red]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=outline][color=neutral]) button,:host([appearance=outline][color=neutral]) a{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-foreground-3)}:host([appearance=outline][color=neutral]) button:hover,:host([appearance=outline][color=neutral]) a:hover{-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=outline][color=neutral]) button:focus,:host([appearance=outline][color=neutral]) a:focus{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=outline][color=neutral]) button:active,:host([appearance=outline][color=neutral]) a:active{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=outline][color=neutral]) button calcite-loader,:host([appearance=outline][color=neutral]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline][color=inverse]) button,:host([appearance=outline][color=inverse]) a{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-inverse)}:host([appearance=outline][color=inverse]) button:hover,:host([appearance=outline][color=inverse]) a:hover{border-color:var(--calcite-ui-inverse-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-inverse-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-inverse-hover)}:host([appearance=outline][color=inverse]) button:focus,:host([appearance=outline][color=inverse]) a:focus{border-color:var(--calcite-ui-inverse);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse)}:host([appearance=outline][color=inverse]) button:active,:host([appearance=outline][color=inverse]) a:active{border-color:var(--calcite-ui-inverse-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse-press)}:host([appearance=outline][color=inverse]) button calcite-loader,:host([appearance=outline][color=inverse]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=clear]) button,:host([appearance=clear]) a{border-width:1px;border-style:solid;background-color:transparent;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=blue]) button,:host([appearance=clear][color=blue]) a{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-brand)}:host([appearance=clear][color=blue]) button:hover,:host([appearance=clear][color=blue]) a:hover{border-color:var(--calcite-ui-brand-hover);color:var(--calcite-ui-brand-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}:host([appearance=clear][color=blue]) button:focus,:host([appearance=clear][color=blue]) a:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([appearance=clear][color=blue]) button:active,:host([appearance=clear][color=blue]) a:active{border-color:var(--calcite-ui-brand-press);color:var(--calcite-ui-brand-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press)}:host([appearance=clear][color=blue]) button calcite-loader,:host([appearance=clear][color=blue]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=clear][color=red]) button,:host([appearance=clear][color=red]) a{border-color:var(--calcite-ui-danger);color:var(--calcite-ui-danger)}:host([appearance=clear][color=red]) button:hover,:host([appearance=clear][color=red]) a:hover{border-color:var(--calcite-ui-danger-hover);color:var(--calcite-ui-danger-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-danger-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-danger-hover)}:host([appearance=clear][color=red]) button:focus,:host([appearance=clear][color=red]) a:focus{border-color:var(--calcite-ui-danger);color:var(--calcite-ui-danger);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-danger);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger)}:host([appearance=clear][color=red]) button:active,:host([appearance=clear][color=red]) a:active{border-color:var(--calcite-ui-danger-press);color:var(--calcite-ui-danger-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press)}:host([appearance=clear][color=red]) button calcite-loader,:host([appearance=clear][color=red]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=clear][color=neutral]) button,:host([appearance=clear][color=neutral]) a{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-foreground-3)}:host([appearance=clear][color=neutral]) button:hover,:host([appearance=clear][color=neutral]) a:hover{-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=clear][color=neutral]) button:focus,:host([appearance=clear][color=neutral]) a:focus{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=clear][color=neutral]) button:active,:host([appearance=clear][color=neutral]) a:active{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=clear][color=neutral]) button calcite-loader,:host([appearance=clear][color=neutral]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=clear][color=inverse]) button,:host([appearance=clear][color=inverse]) a{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-inverse)}:host([appearance=clear][color=inverse]) button:hover,:host([appearance=clear][color=inverse]) a:hover{border-color:var(--calcite-ui-inverse-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-inverse-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-inverse-hover)}:host([appearance=clear][color=inverse]) button:focus,:host([appearance=clear][color=inverse]) a:focus{border-color:var(--calcite-ui-inverse);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse)}:host([appearance=clear][color=inverse]) button:active,:host([appearance=clear][color=inverse]) a:active{border-color:var(--calcite-ui-inverse-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse-press)}:host([appearance=clear][color=inverse]) button calcite-loader,:host([appearance=clear][color=inverse]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline][split-child=primary]) button,:host([appearance=clear][split-child=primary]) button{border-inline-end-width:0;border-inline-start-width:1px}:host([appearance=outline][split-child=secondary]) button,:host([appearance=clear][split-child=secondary]) button{border-inline-start-width:0;border-inline-end-width:1px}:host([appearance=transparent]:not(.enable-editing-button)) button,:host([appearance=transparent]:not(.enable-editing-button)) a{background-color:transparent}:host([appearance=transparent]:not(.enable-editing-button)) button:hover,:host([appearance=transparent]:not(.enable-editing-button)) button:focus,:host([appearance=transparent]:not(.enable-editing-button)) a:hover,:host([appearance=transparent]:not(.enable-editing-button)) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent]:not(.enable-editing-button)) button:active,:host([appearance=transparent]:not(.enable-editing-button)) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=blue]) button,:host([appearance=transparent][color=blue]) a{color:var(--calcite-ui-brand)}:host([appearance=transparent][color=blue]) button:hover,:host([appearance=transparent][color=blue]) a:hover{color:var(--calcite-ui-brand-hover)}:host([appearance=transparent][color=blue]) button:focus,:host([appearance=transparent][color=blue]) a:focus{color:var(--calcite-ui-brand)}:host([appearance=transparent][color=blue]) button:active,:host([appearance=transparent][color=blue]) a:active{color:var(--calcite-ui-brand-press)}:host([appearance=transparent][color=blue]) button calcite-loader,:host([appearance=transparent][color=blue]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=transparent][color=red]) button,:host([appearance=transparent][color=red]) a{color:var(--calcite-ui-danger)}:host([appearance=transparent][color=red]) button:hover,:host([appearance=transparent][color=red]) a:hover{color:var(--calcite-ui-danger-hover)}:host([appearance=transparent][color=red]) button:focus,:host([appearance=transparent][color=red]) a:focus{color:var(--calcite-ui-danger)}:host([appearance=transparent][color=red]) button:active,:host([appearance=transparent][color=red]) a:active{color:var(--calcite-ui-danger-press)}:host([appearance=transparent][color=red]) button calcite-loader,:host([appearance=transparent][color=red]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=transparent][color=neutral]:not(.cancel-editing-button)) button,:host([appearance=transparent][color=neutral]:not(.cancel-editing-button)) a,:host([appearance=transparent][color=neutral]:not(.cancel-editing-button)) calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=transparent][color=neutral].cancel-editing-button) button{border-top-width:1px;border-bottom-width:1px;color:var(--calcite-ui-text-3);border-top-color:var(--calcite-ui-border-input);border-bottom-color:var(--calcite-ui-border-input);border-bottom-style:solid;border-top-style:solid}:host([appearance=transparent][color=neutral].cancel-editing-button) button:not(.content--slotted){--calcite-button-padding-y:0}:host([appearance=transparent][color=neutral].cancel-editing-button) button:hover{color:var(--calcite-ui-text-1)}:host([appearance=transparent][color=neutral].enable-editing-button) button{background-color:transparent}:host(.confirm-changes-button) button:focus,:host(.cancel-editing-button) button:focus,:host(.enable-editing-button) button:focus{outline-offset:-2px}:host([appearance=transparent][color=inverse]) button,:host([appearance=transparent][color=inverse]) a,:host([appearance=transparent][color=inverse]) calcite-loader{color:var(--calcite-ui-text-inverse)}:host([scale=s]) button.content--slotted,:host([scale=s]) a.content--slotted{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s][appearance=transparent]) button.content--slotted,:host([scale=s][appearance=transparent]) a.content--slotted{--calcite-button-padding-x:0.5rem;--calcite-button-padding-y:0.25rem}:host([scale=m]) button.content--slotted,:host([scale=m]) a.content--slotted{--calcite-button-padding-x:11px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]:not([appearance=transparent])) button.content--slotted,:host([scale=m]:not([appearance=transparent])) a.content--slotted{--calcite-button-padding-y:7px}:host([scale=m][appearance=transparent]) button.content--slotted,:host([scale=m][appearance=transparent]) a.content--slotted{--calcite-button-padding-x:0.75rem;--calcite-button-padding-y:0.5rem}:host([scale=l]) button.content--slotted,:host([scale=l]) a.content--slotted{--calcite-button-padding-x:15px;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]:not([appearance=transparent])) button.content--slotted,:host([scale=l]:not([appearance=transparent])) a.content--slotted{--calcite-button-padding-y:11px}:host([scale=l][appearance=transparent]) button.content--slotted,:host([scale=l][appearance=transparent]) a.content--slotted{--calcite-button-padding-x:1rem;--calcite-button-padding-y:0.75rem}:host([scale=s]) button:not(.content--slotted),:host([scale=s]) a:not(.content--slotted){--calcite-button-padding-x:0.125rem;--calcite-button-padding-y:3px;width:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-height:1.5rem}:host([scale=s][appearance=transparent]) button:not(.content--slotted),:host([scale=s][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-y:0.25rem}:host([scale=m]) button:not(.content--slotted),:host([scale=m]) a:not(.content--slotted){--calcite-button-padding-x:0.125rem;--calcite-button-padding-y:7px;width:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-height:2rem}:host([scale=m][appearance=transparent]) button:not(.content--slotted),:host([scale=m][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-y:0.5rem}:host([scale=l]) button:not(.content--slotted),:host([scale=l]) a:not(.content--slotted){--calcite-button-padding-x:0.125rem;--calcite-button-padding-y:9px;width:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-height:2.75rem}:host([scale=l][appearance=transparent]) button:not(.content--slotted),:host([scale=l][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-y:0.625rem}:host([scale=s][icon-start][icon-end]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x:23px;height:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=s][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x:1.5rem}:host([scale=m][icon-start][icon-end]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x:2rem;height:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x:33px}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x:43px;height:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted) .icon--start+.icon--end,:host([scale=l][icon-start][icon-end]) a:not(.content--slotted) .icon--start+.icon--end{-webkit-margin-start:1rem;margin-inline-start:1rem}:host([scale=l][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x:2.75rem}";

const Button = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** optionally specify alignment of button elements. */
    this.alignment = "center";
    /** specify the appearance style of the button, defaults to solid. */
    this.appearance = "solid";
    /** specify the color of the button, defaults to blue */
    this.color = "blue";
    /** is the button disabled  */
    this.disabled = false;
    /** string to override English loading text
     * @default "Loading"
     */
    this.intlLoading = TEXT.loading;
    /** optionally add a calcite-loader component to the button, disabling interaction.  */
    this.loading = false;
    /** optionally add a round style to the button  */
    this.round = false;
    /** specify the scale of the button, defaults to m */
    this.scale = "m";
    /** is the button a child of a calcite-split-button */
    this.splitChild = false;
    /** The type attribute to apply to the button */
    this.type = "button";
    /** specify the width of the button, defaults to auto */
    this.width = "auto";
    /** watches for changing text content **/
    this.mutationObserver = createObserver("mutation", () => this.updateHasContent());
    /** determine if there is slotted content for styling purposes */
    this.hasContent = false;
    /** determine if loader present for styling purposes */
    this.hasLoader = false;
    // act on a requested or nearby form based on type
    this.handleClick = () => {
      const { formEl, type } = this;
      if (this.href) {
        return;
      }
      // this.type refers to type attribute, not child element type
      if (type === "submit") {
        formEl === null || formEl === void 0 ? void 0 : formEl.requestSubmit();
      }
      else if (type === "reset") {
        formEl === null || formEl === void 0 ? void 0 : formEl.reset();
      }
    };
  }
  loadingChanged(newValue, oldValue) {
    if (!!newValue && !oldValue) {
      this.hasLoader = true;
    }
    if (!newValue && !!oldValue) {
      window.setTimeout(() => {
        this.hasLoader = false;
      }, 300);
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.hasLoader = this.loading;
    this.setupTextContentObserver();
    connectLabel(this);
    this.formEl = closestElementCrossShadowBoundary(this.el, this.form ? `#${this.form}` : "form");
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    disconnectLabel(this);
    this.formEl = null;
  }
  componentWillLoad() {
    if (Build.isBrowser) {
      this.updateHasContent();
    }
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  render() {
    const childElType = this.href ? "a" : "button";
    const Tag = childElType;
    const loaderNode = this.hasLoader ? (h("div", { class: CSS.buttonLoader }, h("calcite-loader", { active: true, class: this.loading ? CSS.loadingIn : CSS.loadingOut, inline: true, label: this.intlLoading, scale: "m" }))) : null;
    const iconStartEl = (h("calcite-icon", { class: { [CSS.icon]: true, [CSS.iconStart]: true }, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: "s" }));
    const iconEndEl = (h("calcite-icon", { class: { [CSS.icon]: true, [CSS.iconEnd]: true }, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: "s" }));
    const contentEl = (h("span", { class: CSS.content }, h("slot", null)));
    return (h(Tag, { "aria-label": getLabelText(this), class: {
        [CSS.contentSlotted]: this.hasContent,
        [CSS.iconStartEmpty]: !this.iconStart,
        [CSS.iconEndEmpty]: !this.iconEnd
      }, disabled: this.disabled || this.loading, href: childElType === "a" && this.href, name: childElType === "button" && this.name, onClick: this.handleClick, ref: (el) => (this.childEl = el), rel: childElType === "a" && this.rel, tabIndex: this.disabled || this.loading ? -1 : null, target: childElType === "a" && this.target, type: childElType === "button" && this.type }, loaderNode, this.iconStart ? iconStartEl : null, this.hasContent ? contentEl : null, this.iconEnd ? iconEndEl : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    this.childEl.focus();
  }
  updateHasContent() {
    var _a, _b;
    const slottedContent = this.el.textContent.trim().length > 0 || this.el.childNodes.length > 0;
    this.hasContent =
      this.el.childNodes.length === 1 && ((_a = this.el.childNodes[0]) === null || _a === void 0 ? void 0 : _a.nodeName) === "#text"
        ? ((_b = this.el.textContent) === null || _b === void 0 ? void 0 : _b.trim().length) > 0
        : slottedContent;
  }
  setupTextContentObserver() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.handleClick();
    this.setFocus();
  }
  get el() { return this; }
  static get watchers() { return {
    "loading": ["loadingChanged"]
  }; }
  static get style() { return buttonCss; }
}, [1, "calcite-button", {
    "alignment": [513],
    "appearance": [513],
    "label": [1],
    "color": [513],
    "disabled": [516],
    "href": [513],
    "iconEnd": [513, "icon-end"],
    "iconFlipRtl": [513, "icon-flip-rtl"],
    "iconStart": [513, "icon-start"],
    "intlLoading": [1, "intl-loading"],
    "loading": [516],
    "name": [1],
    "rel": [1],
    "form": [1],
    "round": [516],
    "scale": [513],
    "splitChild": [520, "split-child"],
    "target": [1],
    "type": [1025],
    "width": [513],
    "hasContent": [32],
    "hasLoader": [32],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-button", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Button);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { Button as B, defineCustomElement as d };
