/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
System.register(["./p-40b4e596.system.js","./p-ec9bab33.system.js","./p-9d8ffd44.system.js","./p-e020662f.system.js","./p-ac4aec20.system.js"],(function(t){"use strict";var e,i,n,a,o,r,s;return{setters:[function(t){e=t.r;i=t.h;n=t.F;a=t.g},function(t){o=t.g},function(t){r=t.c;s=t.d},function(){},function(){}],execute:function(){var c={contentStart:"content-start",contentEnd:"content-end"};var l="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .container{pointer-events:none;display:grid;grid-template-columns:repeat(1, minmax(0, 1fr));gap:0.5rem}:host .content{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;gap:0.5rem;width:10%}:host .content-container{display:-ms-flexbox;display:flex;width:100%;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:stretch;align-items:stretch;padding:0px;color:var(--calcite-ui-text-2);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host .content-slot-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--calcite-ui-foreground-1)}:host .content-slot-container:first-child{padding-right:0.75rem}:host .content-slot-container:last-child{padding-left:0.75rem}:host .heading{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .large-visual{-ms-flex-align:center;align-items:center;text-align:center;min-height:12rem}:host .large-visual .icon{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-item-align:end;align-self:flex-end}:host .large-visual .content-container{-ms-flex-item-align:center;align-self:center}:host .description{pointer-events:none;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host(:not([embed])){padding:0.75rem;-webkit-box-shadow:0 0 0 1px var(--calcite-ui-border-2);box-shadow:0 0 0 1px var(--calcite-ui-border-2)}:host(:not([embed])[href]:hover){cursor:pointer;-webkit-box-shadow:0 0 0 2px var(--calcite-ui-brand);box-shadow:0 0 0 2px var(--calcite-ui-brand)}:host(:not([embed])[href]:active){-webkit-box-shadow:0 0 0 3px var(--calcite-ui-brand);box-shadow:0 0 0 3px var(--calcite-ui-brand)}:host([icon][heading]:not([description]):not([embed])){padding:0px}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled);pointer-events:none}:host(:hover) .heading,:host([active]) .heading{color:var(--calcite-ui-text-1)}:host(:hover) .description,:host([active]) .description{color:var(--calcite-ui-text-2)}";var m=t("calcite_tile",function(){function t(t){e(this,t);this.active=false;this.disabled=false;this.embed=false;this.focused=false;this.hidden=false}t.prototype.connectedCallback=function(){r(this)};t.prototype.disconnectedCallback=function(){s(this)};t.prototype.renderTile=function(){var t=this,e=t.icon,n=t.el,a=t.heading,r=t.description;var s=a&&e&&!r;var l=s?{height:"64px",width:"64px"}:undefined;return i("div",{class:{container:true,"large-visual":s}},e&&i("div",{class:"icon"},i("calcite-icon",{icon:e,scale:"l",style:l})),i("div",{class:"content-container"},o(n,c.contentStart)?i("div",{class:"content-slot-container"},i("slot",{name:c.contentStart})):null,i("div",{class:"content"},a&&i("div",{class:"heading"},a),r&&i("div",{class:"description"},r)),o(n,c.contentEnd)?i("div",{class:"content-slot-container"},i("slot",{name:c.contentEnd})):null))};t.prototype.render=function(){return i(n,null,this.href?i("calcite-link",{disabled:this.disabled,href:this.href},this.renderTile()):this.renderTile())};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});return t}());m.style=l}}}));