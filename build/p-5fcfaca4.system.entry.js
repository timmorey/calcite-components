var __awaiter=this&&this.__awaiter||function(t,e,a,i){function n(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,r){function o(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i["throw"](t))}catch(t){r(t)}}function l(t){t.done?a(t.value):n(t.value).then(o,s)}l((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var a={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,n,r,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return l([t,e])}}function l(o){if(i)throw new TypeError("Generator is already executing.");while(a)try{if(i=1,n&&(r=o[0]&2?n["return"]:o[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;if(n=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:a.label++;return{value:o[1],done:false};case 5:a.label++;n=o[1];o=[0];continue;case 7:o=a.ops.pop();a.trys.pop();continue;default:if(!(r=a.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){a=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(o[0]===6&&a.label<r[1]){a.label=r[1];r=o;break}if(r&&a.label<r[2]){a.label=r[2];a.ops.push(o);break}if(r[2])a.ops.pop();a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t];n=0}finally{i=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */System.register(["./p-40b4e596.system.js","./p-ac9607f2.system.js","./p-f7f83da7.system.js","./p-4de6f4fd.system.js","./p-ac4aec20.system.js","./p-e020662f.system.js","./p-ec9bab33.system.js","./p-9d8ffd44.system.js","./p-1d6404b5.system.js"],(function(t){"use strict";var e,a,i,n,r,o,s,l,c,d,f,m,u,h,p,w,b,v,g,y,k,x,D,_,A,I,S,L,C,j,E;return{setters:[function(t){e=t.r;a=t.c;i=t.h;n=t.g;r=t.H},function(t){o=t.S},function(t){s=t.m;l=t.d;c=t.a;d=t.s;f=t.h;m=t.g;u=t.k;h=t.i;p=t.b;w=t.c;b=t.r;v=t.e;g=t.f;y=t.j;k=t.l;x=t.L;D=t.I;_=t.C;A=t.S},function(t){I=t.g},function(t){S=t.c},function(t){L=t.g},function(t){C=t.g},function(t){j=t.c;E=t.d},function(){}],execute:function(){var F={container:"container",handle:"handle"};var z;(function(t){t["grip"]="grip"})(z||(z={}));var H="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}calcite-value-list-item:last-of-type{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header{margin-bottom:0.25rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;background-color:var(--calcite-ui-foreground-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:-webkit-sticky;position:sticky;top:0px;z-index:10}calcite-filter{margin-bottom:1px}";var P=t("calcite_value_list",function(){function t(t){var i=this;e(this,t);this.calciteListChange=a(this,"calciteListChange",7);this.calciteListOrderChange=a(this,"calciteListOrderChange",7);this.disabled=false;this.dragEnabled=false;this.filterEnabled=false;this.loading=false;this.multiple=false;this.selectionFollowsFocus=false;this.selectedValues=new Map;this.dataForFilter=[];this.lastSelectedItem=null;this.mutationObserver=S("mutation",s.bind(this));this.setFilterEl=function(t){i.filterEl=t};this.deselectRemovedItems=l.bind(this);this.deselectSiblingItems=c.bind(this);this.selectSiblings=d.bind(this);this.handleFilter=f.bind(this);this.getItemData=m.bind(this);this.keyDownHandler=function(t){var e=t.composedPath().find((function(t){var e;return((e=t.dataset)===null||e===void 0?void 0:e.jsHandle)!==undefined}));var a=t.composedPath().find((function(t){var e;return((e=t.tagName)===null||e===void 0?void 0:e.toLowerCase())==="calcite-value-list-item"}));if(!e||!a.handleActivated){u.call(i,t);return}var n=i.items;if(t.key!=="ArrowUp"&&t.key!=="ArrowDown"||n.length<=1){return}t.preventDefault();var r=i.el;var o=t.key==="ArrowDown"?1:-1;var s=n.indexOf(a);var l=I(s+o,n.length);if(l===n.length-1){r.appendChild(a)}else{var c=r.children[l];var d=c===a.nextElementSibling?c.nextElementSibling:c;r.insertBefore(a,d)}i.items=i.getItems();i.calciteListOrderChange.emit(i.items.map((function(t){var e=t.value;return e})));requestAnimationFrame((function(){return e.focus()}));a.handleActivated=true}}t.prototype.connectedCallback=function(){h.call(this);p.call(this)};t.prototype.componentDidLoad=function(){this.setUpDragAndDrop()};t.prototype.disconnectedCallback=function(){w.call(this);this.cleanUpDragAndDrop()};t.prototype.calciteListItemRemoveHandler=function(t){b.call(this,t)};t.prototype.calciteListItemChangeHandler=function(t){v.call(this,t)};t.prototype.calciteListItemPropsChangeHandler=function(t){t.stopPropagation();this.setUpFilter()};t.prototype.calciteListItemValueChangeHandler=function(t){g.call(this,t)};t.prototype.getItems=function(){return Array.from(this.el.querySelectorAll("calcite-value-list-item"))};t.prototype.setUpItems=function(){y.call(this,"calcite-value-list-item")};t.prototype.setUpFilter=function(){if(this.filterEnabled){this.dataForFilter=this.getItemData()}};t.prototype.setUpDragAndDrop=function(){var t=this;this.cleanUpDragAndDrop();if(!this.dragEnabled){return}this.sortable=o.create(this.el,{dataIdAttr:"id",handle:"."+F.handle,draggable:"calcite-value-list-item",group:this.group,onSort:function(){t.items=Array.from(t.el.querySelectorAll("calcite-value-list-item"));var e=t.items.map((function(t){return t.value}));t.calciteListOrderChange.emit(e)}})};t.prototype.cleanUpDragAndDrop=function(){var t;(t=this.sortable)===null||t===void 0?void 0:t.destroy();this.sortable=null};t.prototype.getSelectedItems=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.selectedValues]}))}))};t.prototype.setFocus=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,k.call(this,t)]}))}))};t.prototype.getIconType=function(){var t=null;if(this.dragEnabled){t=z.grip}return t};t.prototype.render=function(){return i(x,{onKeyDown:this.keyDownHandler,props:this})};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());P.style=H;var U={drag:"drag"};var O={actionsEnd:"actions-end",actionsStart:"actions-start"};var R="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{margin-bottom:1px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-transition:background-color var(--calcite-animation-timing), -webkit-box-shadow var(--calcite-animation-timing);transition:background-color var(--calcite-animation-timing), -webkit-box-shadow var(--calcite-animation-timing);transition:background-color var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing);transition:background-color var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing), -webkit-box-shadow var(--calcite-animation-timing)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}calcite-pick-list-item{position:relative;margin:0px;-ms-flex-positive:1;flex-grow:1;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([active]),:host([selected]){--tw-shadow:0 0 0 1px var(--calcite-ui-brand);--tw-shadow-colored:0 0 0 1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.handle{display:-ms-flexbox;display:flex;cursor:move;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-style:none;background-color:transparent;padding-top:0px;padding-bottom:0px;padding-left:0.25rem;padding-right:0.25rem;color:var(--calcite-ui-text-1);color:var(--calcite-ui-border-1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}";var B=t("calcite_value_list_item",function(){function t(t){var i=this;e(this,t);this.calciteListItemRemove=a(this,"calciteListItemRemove",7);this.disabled=false;this.disableDeselect=false;this.nonInteractive=false;this.handleActivated=false;this.icon=null;this.removable=false;this.selected=false;this.pickListItem=null;this.guid="calcite-value-list-item-"+L();this.getPickListRef=function(t){return i.pickListItem=t};this.handleKeyDown=function(t){if(t.key===" "){i.handleActivated=!i.handleActivated}};this.handleBlur=function(){i.handleActivated=false};this.handleSelectChange=function(t){i.selected=t.detail.selected}}t.prototype.connectedCallback=function(){j(this)};t.prototype.disconnectedCallback=function(){E(this)};t.prototype.toggleSelected=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.pickListItem.toggleSelected(t);return[2]}))}))};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){(t=this.pickListItem)===null||t===void 0?void 0:t.setFocus();return[2]}))}))};t.prototype.calciteListItemChangeHandler=function(t){t.detail.item=this.el};t.prototype.renderActionsEnd=function(){var t=this.el;var e=C(t,O.actionsEnd);return e?i("slot",{name:O.actionsEnd,slot:A.actionsEnd}):null};t.prototype.renderActionsStart=function(){var t=this.el;var e=C(t,O.actionsStart);return e?i("slot",{name:O.actionsStart,slot:A.actionsStart}):null};t.prototype.renderHandle=function(){var t;var e=this.icon;if(e===D.grip){return i("span",{"aria-pressed":this.handleActivated.toString(),class:(t={},t[_.handle]=true,t[_.handleActivated]=this.handleActivated,t),"data-js-handle":true,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,role:"button",tabindex:"0"},i("calcite-icon",{icon:U.drag,scale:"s"}))}};t.prototype.render=function(){return i(r,{id:this.el.id||this.guid},this.renderHandle(),i("calcite-pick-list-item",{description:this.description,disableDeselect:this.disableDeselect,disabled:this.disabled,label:this.label,metadata:this.metadata,nonInteractive:this.nonInteractive,onCalciteListItemChange:this.handleSelectChange,ref:this.getPickListRef,removable:this.removable,selected:this.selected,value:this.value},this.renderActionsStart(),this.renderActionsEnd()))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());B.style=R}}}));