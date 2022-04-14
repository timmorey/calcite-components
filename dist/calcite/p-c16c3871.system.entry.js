var __awaiter=this&&this.__awaiter||function(t,e,i,a){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function o(t){try{c(a.next(t))}catch(t){r(t)}}function l(t){try{c(a["throw"](t))}catch(t){r(t)}}function c(t){t.done?i(t.value):n(t.value).then(o,l)}c((a=a.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},a,n,r,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(t){return function(e){return c([t,e])}}function c(o){if(a)throw new TypeError("Generator is already executing.");while(i)try{if(a=1,n&&(r=o[0]&2?n["return"]:o[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;if(n=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:i.label++;return{value:o[1],done:false};case 5:i.label++;n=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){i=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(o[0]===6&&i.label<r[1]){i.label=r[1];r=o;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(o);break}if(r[2])i.ops.pop();i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t];n=0}finally{a=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */System.register(["./p-6a9fef86.system.js","./p-b18c5709.system.js","./p-ea9c71f6.system.js","./p-f9ad7806.system.js","./p-cee2b47e.system.js","./p-d0501de1.system.js"],(function(t){"use strict";var e,i,a,n,r,o,l,c,s;return{setters:[function(t){e=t.r;i=t.c;a=t.h;n=t.F;r=t.g},function(t){o=t.f},function(t){l=t.u},function(t){c=t.d},function(t){s=t.f},function(){}],execute:function(){var u={container:"container",searchIcon:"search-icon",clearButton:"clear-button"};var f={filterLabel:"Filter",clear:"Clear filter"};var m={search:"search",close:"x"};var d=250;var p="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;width:100%}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{display:-ms-flexbox;display:flex;width:100%;padding:0.5rem}label{position:relative;margin-left:0.25rem;margin-right:0.25rem;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;align-items:center;overflow:hidden}input[type=text]{margin-bottom:0.25rem;width:100%;border-style:none;background-color:transparent;padding-top:0.25rem;padding-bottom:0.25rem;padding-right:0.25rem;padding-left:1.5rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);-webkit-transition:padding var(--calcite-animation-timing), -webkit-box-shadow var(--calcite-animation-timing);transition:padding var(--calcite-animation-timing), -webkit-box-shadow var(--calcite-animation-timing);transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing);transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing), -webkit-box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{width:100%}.search-icon{position:absolute;display:-ms-flexbox;display:flex;color:var(--calcite-ui-text-2);inset-inline-start:0;-webkit-transition:left var(--calcite-animation-timing), right var(--calcite-animation-timing), opacity var(--calcite-animation-timing);transition:left var(--calcite-animation-timing), right var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-ui-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type=text]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:center;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-ui-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}";var b=t("calcite_filter",function(){function t(t){var a=this;e(this,t);this.calciteFilterChange=i(this,"calciteFilterChange",7);this.items=[];this.disabled=false;this.filteredItems=[];this.scale="m";this.value="";this.filter=c((function(t,e){if(e===void 0){e=false}var i=new RegExp(t,"i");if(a.items.length===0){a.updateFiltered([],e);return}var n=function(t,e){var i=false;s(t,(function(t){if(typeof t==="function"){return}if(Array.isArray(t)||typeof t==="object"&&t!==null){if(n(t,e)){i=true}}else if(e.test(t)){i=true}}));return i};var r=a.items.filter((function(t){return n(t,i)}));a.updateFiltered(r,e)}),d);this.inputHandler=function(t){var e=t.target;a.value=e.value;a.filter(e.value,true)};this.keyDownHandler=function(t){var e=t.key;if(e==="Escape"){a.clear()}};this.clear=function(){a.value="";a.filter("",true);a.setFocus()}}t.prototype.watchItemsHandler=function(){this.filter(this.value)};t.prototype.valueHandler=function(t){this.filter(t)};t.prototype.componentDidRender=function(){l(this)};t.prototype.componentWillLoad=function(){this.filter(this.value)};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){o(this.textInput);return[2]}))}))};t.prototype.updateFiltered=function(t,e){if(e===void 0){e=false}this.filteredItems.length=0;this.filteredItems=this.filteredItems.concat(t);if(e){this.calciteFilterChange.emit()}};t.prototype.render=function(){var t=this;var e=this,i=e.disabled,r=e.scale;return a(n,null,a("div",{class:u.container},a("label",null,a("calcite-input",{"aria-label":this.intlLabel||f.filterLabel,disabled:i,icon:m.search,onCalciteInputInput:this.inputHandler,onKeyDown:this.keyDownHandler,placeholder:this.placeholder,ref:function(e){t.textInput=e},scale:r,type:"text",value:this.value})),this.value?a("button",{"aria-label":this.intlClear||f.clear,class:u.clearButton,disabled:i,onClick:this.clear},a("calcite-icon",{icon:m.close,scale:r})):null))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{items:["watchItemsHandler"],value:["valueHandler"]}},enumerable:false,configurable:true});return t}());b.style=p}}}));