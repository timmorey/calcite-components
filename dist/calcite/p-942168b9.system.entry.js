/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
System.register(["./p-6a9fef86.system.js","./p-b18c5709.system.js","./p-c3c37033.system.js","./p-d0501de1.system.js","./p-e2afe2fb.system.js"],(function(e){"use strict";var t,i,n,a,o,r,c,l,s,d,h,m,f;return{setters:[function(e){t=e.r;i=e.c;n=e.h;a=e.H;o=e.g},function(e){r=e.f;c=e.n;l=e.g;s=e.a;d=e.C;h=e.k},function(e){m=e.c;f=e.d},function(){},function(){}],execute:function(){var u;(function(e){e["Single"]="single";e["Multi"]="multi";e["Children"]="children";e["MultiChildren"]="multi-children";e["Ancestors"]="ancestors"})(u||(u={}));var p="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;outline:2px solid transparent;outline-offset:2px}";var b=e("calcite_tree",function(){function e(e){t(this,e);this.calciteTreeSelect=i(this,"calciteTreeSelect",7);this.lines=false;this.inputEnabled=false;this.scale="m";this.selectionMode=u.Single}e.prototype.componentWillRender=function(){var e=this.el.parentElement.closest("calcite-tree");this.lines=e?e.lines:this.lines;this.scale=e?e.scale:this.scale;this.selectionMode=e?e.selectionMode:this.selectionMode;this.child=!!e};e.prototype.render=function(){return n(a,{"aria-multiselectable":this.child?undefined:(this.selectionMode===u.Multi||this.selectionMode===u.MultiChildren).toString(),role:!this.child?"tree":undefined,tabIndex:this.getRootTabIndex()},n("slot",null))};e.prototype.onFocus=function(){if(!this.child){var e=this.el.querySelector("calcite-tree-item[selected]")||this.el.querySelector("calcite-tree-item");r(e)}};e.prototype.onFocusIn=function(e){var t=e.relatedTarget===this.el||!this.el.contains(e.relatedTarget);if(t){this.el.removeAttribute("tabindex")}};e.prototype.onFocusOut=function(e){var t=!this.el.contains(e.relatedTarget);if(t){this.el.tabIndex=this.getRootTabIndex()}};e.prototype.onClick=function(e){var t=e.target;var i=c(t.querySelectorAll("calcite-tree-item"));if(this.child){return}if(!this.child){e.preventDefault();e.stopPropagation()}if(this.selectionMode===u.Ancestors&&!this.child){this.updateAncestorTree(e);return}var n=this.selectionMode!==null&&(!t.hasChildren||t.hasChildren&&(this.selectionMode===u.Children||this.selectionMode===u.MultiChildren));var a=e.detail.modifyCurrentSelection&&(this.selectionMode===u.Multi||this.selectionMode===u.MultiChildren);var o=this.selectionMode===u.MultiChildren||this.selectionMode===u.Children;var r=!a&&((this.selectionMode===u.Single||this.selectionMode===u.Multi)&&i.length<=0||this.selectionMode===u.Children||this.selectionMode===u.MultiChildren);var l=this.selectionMode===u.Children||this.selectionMode===u.MultiChildren;if(!this.child){var s=[];if(n){s.push(t)}if(o){i.forEach((function(e){s.push(e)}))}if(r){var d=c(this.el.querySelectorAll("calcite-tree-item[selected]"));d.forEach((function(e){if(!s.includes(e)){e.selected=false}}))}if(l&&!e.detail.forceToggle){t.expanded=true}if(a){window.getSelection().removeAllRanges()}if(a&&t.selected||o&&e.detail.forceToggle){s.forEach((function(e){e.selected=false}))}else{s.forEach((function(e){e.selected=true}))}}this.calciteTreeSelect.emit({selected:c(this.el.querySelectorAll("calcite-tree-item")).filter((function(e){return e.selected}))})};e.prototype.keyDownHandler=function(e){var t;var i=this.el.closest("calcite-tree:not([child])");var n=e.target;if(i===this.el&&n.tagName==="CALCITE-TREE-ITEM"&&this.el.contains(n)){switch(e.key){case"ArrowDown":var a=n.nextElementSibling;if(a&&a.matches("calcite-tree-item")){a.focus();e.preventDefault()}break;case"ArrowLeft":if(n.hasChildren&&n.expanded){n.expanded=false;e.preventDefault();break}var o=n.parentElement.closest("calcite-tree-item");if(o&&(!n.hasChildren||n.expanded===false)){o.focus();e.preventDefault();break}break;case"ArrowRight":if(!n.hasChildren){break}if(n.expanded&&document.activeElement===n){(t=n.querySelector("calcite-tree-item"))===null||t===void 0?void 0:t.focus();e.preventDefault()}else{n.expanded=true;e.preventDefault()}break;case"ArrowUp":var r=n.previousElementSibling;if(r&&r.matches("calcite-tree-item")){r.focus();e.preventDefault()}break}}};e.prototype.updateAncestorTree=function(e){var t=e.target;var i=t.querySelectorAll("calcite-tree-item");var n=[];var a=t.parentElement.closest("calcite-tree-item");while(a){n.push(a);a=a.parentElement.closest("calcite-tree-item")}t.selected=!t.selected;t.indeterminate=false;if(i===null||i===void 0?void 0:i.length){i.forEach((function(e){e.selected=t.selected;e.indeterminate=false}))}if(n){n.forEach((function(e){var t=c(e.querySelectorAll("calcite-tree-item"));var i=t.filter((function(e){return e.selected}));if(i.length===0){e.selected=false;e.indeterminate=false;return}var n=i.length<t.length;e.indeterminate=n;e.selected=!n}))}this.calciteTreeSelect.emit({selected:c(this.el.querySelectorAll("calcite-tree-item")).filter((function(e){return e.selected}))})};e.prototype.getRootTabIndex=function(){return!this.child?0:-1};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return e}());b.style=p;var k={checkboxLabel:"checkbox-label",checkbox:"checkbox",chevron:"chevron",nodeContainer:"node-container",childrenContainer:"children-container",bulletPointIcon:"bullet-point",checkmarkIcon:"checkmark"};var v={children:"children"};var g={bulletPoint:"bullet-point",checkmark:"check",chevronRight:"chevron-right"};var y='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;max-width:100%;cursor:pointer;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .node-container{--calcite-tree-padding-y:0.25rem}:host([scale=s]) .node-container .checkbox,:host([scale=s]) .node-container .chevron,:host([scale=s]) .node-container .checkmark,:host([scale=s]) .node-container .bullet-point{margin-inline:0.25rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .node-container{--calcite-tree-padding-y:0.5rem}:host([scale=m]) .node-container .checkbox,:host([scale=m]) .node-container .chevron,:host([scale=m]) .node-container .checkmark,:host([scale=m]) .node-container .bullet-point{margin-inline:0.5rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .node-container{--calcite-tree-padding-y:0.75rem}:host([scale=l]) .node-container .checkbox,:host([scale=l]) .node-container .chevron,:host([scale=l]) .node-container .checkmark,:host([scale=l]) .node-container .bullet-point{margin-inline:0.75rem}:host([lines]) .children-container:after{position:absolute;top:0px;width:1px;transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;-webkit-transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;height:96%;content:"";background-color:var(--calcite-ui-border-2);z-index:-1}:host(:not([lines])) .node-container:after{display:none}::slotted(*){min-width:0px;max-width:100%;overflow-wrap:break-word;color:inherit;text-decoration:none !important}::slotted(*):hover{text-decoration:none !important}::slotted(a){width:100%;-webkit-text-decoration-line:none;text-decoration-line:none}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.checkbox{outline:2px solid transparent;outline-offset:2px;line-height:0}.checkbox-label{pointer-events:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.children-container{position:relative;height:0px;overflow:hidden;-webkit-margin-start:1.25rem;margin-inline-start:1.25rem;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0;-webkit-transition:var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out;transition:var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out;-webkit-transform-origin:top;transform-origin:top}:host([expanded])>.children-container{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1;height:auto}.node-container{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:var(--calcite-tree-padding-y) 0}.node-container .checkmark,.node-container .bullet-point{opacity:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;color:var(--calcite-ui-border-1)}.node-container:hover .checkmark,.node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark,:host([selected]) .node-container:hover .bullet-point,:host(:focus) .node-container .checkmark,:host(:focus) .node-container .bullet-point{opacity:1}:host([selected])>.node-container,:host([selected])>.node-container:hover{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selected])>.node-container .bullet-point,:host([selected])>.node-container .checkmark,:host([selected])>.node-container:hover .bullet-point,:host([selected])>.node-container:hover .checkmark{opacity:1;color:var(--calcite-ui-brand)}:host(:not([has-children])):host([scale=s])>.node-container[data-selection-mode=ancestors] .checkbox{-webkit-padding-start:1.25rem;padding-inline-start:1.25rem}:host(:not([has-children])):host([scale=m])>.node-container[data-selection-mode=ancestors] .checkbox{-webkit-padding-start:1.5rem;padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=l])>.node-container[data-selection-mode=ancestors] .checkbox{-webkit-padding-start:1.75rem;padding-inline-start:1.75rem}:host([has-children])>.node-container[data-selection-mode=ancestors] .checkbox{-webkit-margin-start:0;margin-inline-start:0}:host([has-children])>.node-container .bullet-point,:host([has-children])>.node-container .checkmark{display:none}:host([has-children][expanded]:not([selected]))>.node-container ::slotted(*){font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([has-children][selected])>.node-container[data-selection-mode=children],:host([has-children][selected])>.node-container[data-selection-mode=multi-children]{color:var(--calcite-ui-brand)}.chevron{position:relative;-ms-flex-item-align:center;align-self:center;color:var(--calcite-ui-text-3);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.calcite--rtl .chevron{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host([expanded])>.node-container>.chevron{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host([selected]) .checkmark,:host([selected]) .bullet-point{color:var(--calcite-ui-brand)}';var w=e("calcite_tree_item",function(){function e(e){var n=this;t(this,e);this.calciteTreeItemSelect=i(this,"calciteTreeItemSelect",7);this.selected=false;this.expanded=false;this.parentExpanded=false;this.depth=-1;this.hasChildren=null;this.iconClickHandler=function(e){e.stopPropagation();n.expanded=!n.expanded};this.childrenClickHandler=function(e){return e.stopPropagation()};this.updateParentIsExpanded=function(e,t){var i=l(e,v.children,{all:true,selector:"calcite-tree-item"});i.forEach((function(e){return e.parentExpanded=t}))};this.updateAncestorTree=function(){if(n.selected&&n.selectionMode===u.Ancestors){var e=[];var t=n.parentTreeItem;while(t){e.push(t);t=t.parentElement.closest("calcite-tree-item")}e.forEach((function(e){return e.indeterminate=true}));return}}}e.prototype.expandedHandler=function(e){this.updateParentIsExpanded(this.el,e)};e.prototype.getselectionMode=function(){this.isSelectionMultiLike=this.selectionMode===u.Multi||this.selectionMode===u.MultiChildren};e.prototype.connectedCallback=function(){this.parentTreeItem=this.el.parentElement.closest("calcite-tree-item");if(this.parentTreeItem){var e=this.parentTreeItem.expanded;this.updateParentIsExpanded(this.parentTreeItem,e)}m(this)};e.prototype.disconnectedCallback=function(){f(this)};e.prototype.componentWillRender=function(){this.hasChildren=!!this.el.querySelector("calcite-tree");this.depth=0;var e=this.el.closest("calcite-tree");if(!e){return}this.selectionMode=e.selectionMode;this.scale=e.scale||"m";this.lines=e.lines;var t;while(e){t=e.parentElement.closest("calcite-tree");if(t===e){break}else{e=t;this.depth=this.depth+1}}};e.prototype.componentDidLoad=function(){this.updateAncestorTree()};e.prototype.render=function(){var e,t,i,o;var r=this;var c=s(this.el)==="rtl";var l=this.selectionMode===u.Single||this.selectionMode===u.Children;var h=this.selectionMode===u.Multi||this.selectionMode===u.MultiChildren;var m=this.hasChildren?n("calcite-icon",{class:(e={},e[k.chevron]=true,e[d.rtl]=c,e),"data-test-id":"icon",icon:g.chevronRight,onClick:this.iconClickHandler,scale:"s"}):null;var f=n("slot",{key:"default-slot"});var p=this.selectionMode===u.Ancestors?n("label",{class:k.checkboxLabel,key:"checkbox-label"},n("calcite-checkbox",{checked:this.selected,class:k.checkbox,"data-test-id":"checkbox",indeterminate:this.hasChildren&&this.indeterminate,scale:this.scale,tabIndex:-1}),f):null;var b=l?g.bulletPoint:h?g.checkmark:null;var y=b?n("calcite-icon",{class:(t={},t[k.bulletPointIcon]=b===g.bulletPoint,t[k.checkmarkIcon]=b===g.checkmark,t[d.rtl]=c,t),icon:b,scale:"s"}):null;var w=!(this.parentExpanded||this.depth===1);return n(a,{"aria-expanded":this.hasChildren?this.expanded.toString():undefined,"aria-hidden":w.toString(),"aria-selected":this.selected?"true":h?"false":undefined,"calcite-hydrated-hidden":w,role:"treeitem",tabindex:this.parentExpanded||this.depth===1?"0":"-1"},n("div",{class:(i={},i[k.nodeContainer]=true,i[d.rtl]=c,i),"data-selection-mode":this.selectionMode,ref:function(e){return r.defaultSlotWrapper=e}},m,y,p?p:f),n("div",{class:(o={},o[k.childrenContainer]=true,o[d.rtl]=c,o),"data-test-id":"calcite-tree-children",onClick:this.childrenClickHandler,ref:function(e){return r.childrenSlotWrapper=e},role:this.hasChildren?"group":undefined},n("slot",{name:v.children})))};e.prototype.onClick=function(e){var t=h(this.el,"a")[0];if(t&&e.composedPath()[0].tagName.toLowerCase()!=="a"){var i=t.target===""?"_self":t.target;window.open(t.href,i)}this.calciteTreeItemSelect.emit({modifyCurrentSelection:this.selectionMode===u.Ancestors||this.isSelectionMultiLike,forceToggle:false})};e.prototype.keyDownHandler=function(e){var t;switch(e.key){case" ":this.calciteTreeItemSelect.emit({modifyCurrentSelection:this.isSelectionMultiLike,forceToggle:false});e.preventDefault();break;case"Enter":var i=c(this.el.children).find((function(e){return e.matches("a")}));if(i){i.click();this.selected=true}else{this.calciteTreeItemSelect.emit({modifyCurrentSelection:this.isSelectionMultiLike,forceToggle:false})}e.preventDefault();break;case"Home":t=this.el.closest("calcite-tree:not([child])");var n=t.querySelector("calcite-tree-item");n.focus();break;case"End":t=this.el.closest("calcite-tree:not([child])");var a=t.children[t.children.length-1];var o=c(a.children).find((function(e){return e.matches("calcite-tree")}));while(o){a=o.children[t.children.length-1];o=c(a.children).find((function(e){return e.matches("calcite-tree")}))}a.focus();break}};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{expanded:["expandedHandler"],selectionMode:["getselectionMode"]}},enumerable:false,configurable:true});return e}());w.style=y}}}));