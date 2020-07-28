System.register(["./p-a0957ef9.system.js","./p-b6e00050.system.js","./p-6a189823.system.js"],(function(e){"use strict";var t,i,o,c,s,n,r;return{setters:[function(e){t=e.r;i=e.c;o=e.h;c=e.H;s=e.g},function(e){n=e.h},function(e){r=e.g}],execute:function(){var h=":host([hidden]){display:none}:host([scale=s]){--calcite-checkbox-size:12px}:host([scale=m]){--calcite-checkbox-size:16px}:host([scale=l]){--calcite-checkbox-size:20px}::slotted(input){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;width:var(--calcite-checkbox-size);height:var(--calcite-checkbox-size)}:host .check-svg{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus) .check-svg{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}:host .check-svg{width:var(--calcite-checkbox-size);height:var(--calcite-checkbox-size);overflow:hidden;display:inline-block;background-color:var(--calcite-ui-background);border:1px solid var(--calcite-ui-border-1);fill:var(--calcite-ui-background);pointer-events:none;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;-webkit-box-sizing:border-box;box-sizing:border-box}:host([disabled]){pointer-events:none;cursor:default}:host([disabled]) .check-svg{background-color:var(--calcite-ui-foreground-2)}:host([disabled][checked]) .check-svg,:host([disabled][indeterminate]) .check-svg{background-color:#84c1e8;border-color:#84c1e8}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-blue-1);border-color:var(--calcite-ui-blue-1)}:host(:hover),:host(:focus){outline:none}:host(:hover) .check-svg,:host(:focus) .check-svg{border-color:var(--calcite-ui-blue-1);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-1);box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-1)}";var a=e("calcite_checkbox",function(){function e(e){var o=this;t(this,e);this.calciteCheckboxChange=i(this,"calciteCheckboxChange",7);this.checked=false;this.indeterminate=false;this.name="";this.value="";this.scale="m";this.disabled=false;this.toggle=function(){if(!o.disabled){o.checked=!o.checked;o.indeterminate=false}};this.indeterminatePath="M4 7h8v2H4z";this.checkedPath="M12.753 3l-7.319 7.497L3.252 8.31 2 9.373l3.434 3.434L14 4.24z";this.getPath=function(){return o.indeterminate?o.indeterminatePath:o.checked?o.checkedPath:""};this.syncThisToProxyInput=function(){o.checked=o.inputProxy.hasAttribute("checked");o.name=o.inputProxy.name;o.value=o.inputProxy.value};this.syncProxyInputToThis=function(){o.checked?o.inputProxy.setAttribute("checked",""):o.inputProxy.removeAttribute("checked");o.inputProxy.name=o.name;o.inputProxy.value=o.value}}e.prototype.handleLabelFocus=function(e){if(!this.el.contains(e.detail.interactedEl)&&n(e.detail.labelEl,this.el)){this.toggle();this.el.focus()}};e.prototype.onClick=function(e){var t=e.target;if(this.el.closest("label")&&t===this.inputProxy||!this.el.closest("label")&&t===this.el){this.toggle()}};e.prototype.keyDownHandler=function(e){var t=r(e.key);if(t===" "||t==="Enter"){e.preventDefault();this.toggle()}};e.prototype.checkedWatcher=function(){this.calciteCheckboxChange.emit();this.checked?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked")};e.prototype.connectedCallback=function(){this.setupProxyInput();var e=["s","m","l"];if(!e.includes(this.scale))this.scale="m"};e.prototype.disconnectedCallback=function(){this.observer.disconnect()};e.prototype.componentWillRender=function(){this.syncProxyInputToThis()};e.prototype.render=function(){return o(c,{role:"checkbox","aria-checked":this.checked.toString(),tabindex:this.disabled?"-1":"0"},o("svg",{class:"check-svg",viewBox:"0 0 16 16"},o("path",{d:this.getPath()})),o("slot",null))};e.prototype.setupProxyInput=function(){this.inputProxy=this.el.querySelector("input");if(!this.inputProxy){this.inputProxy=document.createElement("input");this.inputProxy.type="checkbox";this.syncProxyInputToThis();this.el.appendChild(this.inputProxy)}this.syncThisToProxyInput();{this.observer=new MutationObserver(this.syncThisToProxyInput);this.observer.observe(this.inputProxy,{attributes:true})}};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{checked:["checkedWatcher"]}},enumerable:false,configurable:true});return e}());a.style=h}}}));