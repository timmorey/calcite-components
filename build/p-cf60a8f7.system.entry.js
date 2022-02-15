/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
System.register(["./p-40b4e596.system.js","./p-ec9bab33.system.js","./p-e020662f.system.js"],(function(t){"use strict";var i,a,n,e,s,o;return{setters:[function(t){i=t.r;a=t.h;n=t.H;e=t.g},function(t){s=t.s;o=t.d},function(){}],execute:function(){var r;(function(t){t["valid"]="check-circle";t["invalid"]="exclamation-mark-triangle";t["idle"]="information"})(r||(r={}));var c="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([active][scale=m]),:host([active][scale=l]){--calcite-input-message-spacing-value:0.25rem}:host{visibility:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;height:0px;width:100%;-ms-flex-align:center;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);opacity:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}:host([active]){visibility:visible;height:auto;opacity:1;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}:host([active][scale=m]),:host([active][scale=l]){margin-top:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{pointer-events:none;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-ui-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-ui-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-ui-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-ui-brand)}:host([status][active]){font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([status][active][scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([status][active][scale=m]){margin-top:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([status][active][scale=l]){margin-top:0.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}";var l=t("calcite_input_message",function(){function t(t){i(this,t);this.active=false;this.scale="m";this.status="idle"}t.prototype.handleIconEl=function(){this.requestedIcon=s(r,this.icon,this.status)};t.prototype.connectedCallback=function(){this.status=o(this.el,"status",this.status);this.scale=o(this.el,"scale",this.scale);this.requestedIcon=s(r,this.icon,this.status)};t.prototype.render=function(){var t=!this.active;return a(n,{"calcite-hydrated-hidden":t},this.renderIcon(this.requestedIcon),a("slot",null))};t.prototype.renderIcon=function(t){if(t){return a("calcite-icon",{class:"calcite-input-message-icon",icon:t,scale:"s"})}};Object.defineProperty(t.prototype,"el",{get:function(){return e(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{status:["handleIconEl"],icon:["handleIconEl"]}},enumerable:false,configurable:true});return t}());l.style=c}}}));