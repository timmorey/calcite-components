var __awaiter=this&&this.__awaiter||function(e,t,i,n){function r(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function l(e){try{u(n.next(e))}catch(e){a(e)}}function s(e){try{u(n["throw"](e))}catch(e){a(e)}}function u(e){e.done?i(e.value):r(e.value).then(l,s)}u((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,r,a,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(e){return function(t){return u([e,t])}}function u(l){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(a=l[0]&2?r["return"]:l[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;if(r=0,a)l=[l[0]&2,a.value];switch(l[0]){case 0:case 1:a=l;break;case 4:i.label++;return{value:l[1],done:false};case 5:i.label++;r=l[1];l=[0];continue;case 7:l=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(l[0]===6&&i.label<a[1]){i.label=a[1];a=l;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(l);break}if(a[2])i.ops.pop();i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e];r=0}finally{n=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */System.register(["./p-b18c5709.system.js","./p-578f4c92.system.js","./p-f9ad7806.system.js","./p-6a9fef86.system.js"],(function(e){"use strict";var t,i,n,r,a,l;return{setters:[function(e){t=e.f;i=e.g},function(e){n=e.g},function(e){r=e.d},function(e){a=e.h;l=e.H}],execute:function(){e({I:void 0,a:_,b:w,c:v,d:V,e:h,f:g,g:j,h:F,i:d,j:m,k:y,l:p,m:o,n:C,o:O,r:I,s:k});var s=e("q",{heading:"heading",container:"container",indented:"container--indented"});var u=e("p",{parentItem:"parent-item"});var c=e("H",3);function o(){this.setUpItems();this.setUpFilter();this.deselectRemovedItems()}var f=["ArrowUp","ArrowDown"];function d(){this.setUpItems();this.setUpFilter();this.emitCalciteListChange=r(S.bind(this),0)}function v(){var e;(e=this.mutationObserver)===null||e===void 0?void 0:e.observe(this.el,{childList:true,subtree:true})}function h(){var e;(e=this.mutationObserver)===null||e===void 0?void 0:e.disconnect()}function m(e){var i=this.selectedValues;var n=e.detail,r=n.item,a=n.value,l=n.selected,s=n.shiftPressed;if(l){if(this.multiple&&s){this.selectSiblings(r)}if(!this.multiple){this.deselectSiblingItems(r)}i.set(a,r)}else{i.delete(a);if(this.multiple&&s){this.selectSiblings(r,true)}}if(!this.multiple){x(r,l);if(l){t(r)}}this.lastSelectedItem=r;this.emitCalciteListChange()}function p(e){e.stopPropagation();var t=e.detail.oldValue;var i=this.selectedValues;if(i.has(t)){var n=i.get(t);i.delete(t);i.set(e.detail.newValue,n)}}function b(e){return!!f.find((function(t){return t===e}))}function g(e){var t=this,i=t.el,n=t.items,r=t.multiple,a=t.selectedValues;if(r){return}var l=i.contains(e.relatedTarget);if(l){return}E(n).forEach((function(t){x(t,a.size===0?t.contains(e.target)||e.target===t:t.selected)}))}function y(e){var i=e.key,n=e.target;if(!b(i)){return}var r=this,a=r.items,l=r.multiple,s=r.selectionFollowsFocus;var u=a.length;var c=a.indexOf(n);if(!u||c===-1){return}e.preventDefault();var o=w(this,n,i==="ArrowUp"?"up":"down");var f=a[o];a.forEach((function(e){return x(e,e===f)}));if(!l&&s){f.selected=true}t(f)}function w(e,t,i){var r=e.items;var a=r.length;var l=r.indexOf(t);var s=i==="up"?-1:1;var u=1;var c=n(l+s*u++,a);var o=c;while(r[c].disabled){c=n(l+s*u++,a);if(c===o){break}}return c}function E(e){return e.filter((function(e){return!e.disabled}))}function S(){this.calciteListChange.emit(this.selectedValues)}function I(e){if(e.defaultPrevented){return}var t=e.target;var i=this.selectedValues;if(t.parentElement.tagName==="CALCITE-PICK-LIST-GROUP"&&t.slot===u.parentItem){t.parentElement.remove();Array.from(t.parentElement.children).forEach((function(e){return i.delete(e.value)}))}else{t.remove();i.delete(t.value)}this.emitCalciteListChange()}function x(e,t){if(e.disabled){return}if(t){e.removeAttribute("tabindex")}else{e.setAttribute("tabindex","-1")}}function O(e){return __awaiter(this,void 0,void 0,(function(){var i,n,r,a,l,s,u;return __generator(this,(function(c){switch(c.label){case 0:if(!(this.filterEnabled&&e==="filter"))return[3,2];return[4,t(this.filterEl)];case 1:c.sent();return[2];case 2:n=this,r=n.items,a=n.multiple,l=n.selectionFollowsFocus;if(r.length===0){return[2]}if(a){return[2,(i=E(r)[0])===null||i===void 0?void 0:i.setFocus()]}s=E(r);u=s.find((function(e){return e.selected}))||s[0];if(l&&u){u.selected=true}return[2,u.setFocus()]}}))}))}function C(e){var t=this;this.items=Array.from(this.el.querySelectorAll(e));var i=false;var n=this.items;n.forEach((function(e){e.icon=t.getIconType();if(!t.multiple){e.disableDeselect=true;x(e,false)}if(e.selected){i=true;x(e,true);t.selectedValues.set(e.value,e)}}));var r=n[0];if(!i&&r&&!r.disabled){x(r,true)}}function V(){var e=this;var t=this.selectedValues;var i=this.items.map((function(e){var t=e.value;return t}));t.forEach((function(t){if(!i.includes(t.value)){e.selectedValues.delete(t.value)}}))}function _(e){var t=this;this.items.forEach((function(i){if(i.value!==e.value){i.toggleSelected(false);if(t.selectedValues.has(i.value)){t.selectedValues.delete(i.value)}}}))}function k(e,t){var i=this;if(t===void 0){t=false}if(!this.lastSelectedItem){return}var n=this.items;var r=n.findIndex((function(e){return e.value===i.lastSelectedItem.value}));var a=n.findIndex((function(t){return t.value===e.value}));n.slice(Math.min(r,a),Math.max(r,a)).forEach((function(e){e.toggleSelected(!t);if(!t){i.selectedValues.set(e.value,e)}else{i.selectedValues.delete(e.value)}}))}var A;function F(e){var t=e.currentTarget.filteredItems;var n=t.map((function(e){return e.value}));var r=false;if(!A){A=new Set}var a=this.items.filter((function(e){var t=e.parentElement;var i=t.matches("calcite-pick-list-group");if(i){A.add(t)}var a=n.includes(e.value);e.hidden=!a;if(!r){r=a&&e.selected}return a}));A.forEach((function(e){var t=a.some((function(t){return e.contains(t)}));e.hidden=!t;if(!t){return}var n=i(e,"parent-item");if(n){n.hidden=false;if(a.includes(n)){Array.from(e.children).forEach((function(e){return e.hidden=false}))}}}));A.clear();if(a.length>0&&!r&&!this.multiple){x(a[0],true)}}function j(){return this.items.map((function(e){return{label:e.label,description:e.description,metadata:e.metadata,value:e.value}}))}var P={sticky:"sticky-pos"};var L;(function(e){e["circle"]="circle";e["square"]="square";e["grip"]="grip"})(L||(L=e("I",{})));var T={menuActions:"menu-actions"};var U=undefined&&undefined.__rest||function(e,t){var i={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0)i[n]=e[n];if(e!=null&&typeof Object.getOwnPropertySymbols==="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++){if(t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r]))i[n[r]]=e[n[r]]}return i};var q=e("L",(function(e){var t;var i=e.props,n=i.disabled,r=i.loading,s=i.filterEnabled,u=i.dataForFilter,c=i.handleFilter,o=i.filterPlaceholder,f=i.setFilterEl,d=U(e,["props"]);var v=a("slot",null);return a(l,Object.assign({"aria-busy":r.toString(),role:"menu"},d),a("section",null,a("header",{class:(t={},t[P.sticky]=true,t)},s?a("calcite-filter",{"aria-label":o,disabled:r||n,items:u,onCalciteFilterChange:c,placeholder:o,ref:f}):null,a("slot",{name:T.menuActions})),r?a("calcite-scrim",{loading:r}):null,v))}));var D=e("C",{actions:"actions",actionsEnd:"actions--end",actionsStart:"actions--start",description:"description",handle:"handle",handleActivated:"handle--activated",highlight:"highlight",icon:"icon",iconDot:"icon-dot",label:"label",remove:"remove",title:"title",textContainer:"text-container"});var R=e("t",{checked:"check",remove:"x"});var G=e("S",{actionsEnd:"actions-end",actionsStart:"actions-start"});var H=e("T",{remove:"Remove"})}}}));