var __awaiter=this&&this.__awaiter||function(e,t,i,n){function a(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function o(e){try{l(n.next(e))}catch(e){r(e)}}function c(e){try{l(n["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):a(e.value).then(o,c)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,a,r,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,a&&(r=o[0]&2?a["return"]:o[0]?a["throw"]||((r=a["return"])&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;if(a=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:i.label++;return{value:o[1],done:false};case 5:i.label++;a=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){i=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(o[0]===6&&i.label<r[1]){i.label=r[1];r=o;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(o);break}if(r[2])i.ops.pop();i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e];a=0}finally{n=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */import{r as registerInstance,c as createEvent,h,H as Host,g as getElement}from"./index-73638693.js";import{g as guid}from"./guid-a53704be.js";import{i as isValidNumber,n as numberKeys,c as isActivationKey}from"./number-c0a5f71a.js";import{c as connectLabel,d as disconnectLabel,g as getLabelText}from"./label-b895faa6.js";import{c as connectForm,d as disconnectForm,H as HiddenFormInputSlot}from"./form-4b2b29b5.js";import{u as updateHostInteraction}from"./interactive-d104f01d.js";import"./dom-3f012371.js";var maxTenthForMinuteAndSecond=5;function createLocaleDateTimeFormatter(e,t){if(t===void 0){t=true}try{var i={hour:"2-digit",minute:"2-digit",timeZone:"UTC"};if(t){i.second="2-digit"}return new Intl.DateTimeFormat(e,i)}catch(t){throw new Error("Invalid locale supplied while attempting to create a DateTime formatter: ".concat(e))}}function formatTimePart(e){var t=e.toString();return e>=0&&e<=9?t.padStart(2,"0"):t}function formatTimeString(e){if(!isValidTime(e)){return null}var t=e.split(":"),i=t[0],n=t[1],a=t[2];var r=formatTimePart(parseInt(i));var o=formatTimePart(parseInt(n));if(a){var c=formatTimePart(parseInt(a));return"".concat(r,":").concat(o,":").concat(c)}return"".concat(r,":").concat(o)}function getLocaleHourCycle(e){var t=createLocaleDateTimeFormatter(e);var i=t.formatToParts(new Date(Date.UTC(0,0,0,0,0,0)));return getLocalizedTimePart("meridiem",i)?"12":"24"}function getLocalizedTimePart(e,t){var i,n,a,r;if(!e||!t){return null}if(e==="hourSuffix"){var o=t.indexOf(t.find((function(e){var t=e.type;return t==="hour"})));var c=t.indexOf(t.find((function(e){var t=e.type;return t==="minute"})));var l=t[o+1];return l&&l.type==="literal"&&c-o===2?((i=l.value)===null||i===void 0?void 0:i.trim())||null:null}if(e==="minuteSuffix"){var c=t.indexOf(t.find((function(e){var t=e.type;return t==="minute"})));var s=t.indexOf(t.find((function(e){var t=e.type;return t==="second"})));var u=t[c+1];return u&&u.type==="literal"&&s-c===2?((n=u.value)===null||n===void 0?void 0:n.trim())||null:null}if(e==="secondSuffix"){var s=t.indexOf(t.find((function(e){var t=e.type;return t==="second"})));var m=t[s+1];return m&&m.type==="literal"?((a=m.value)===null||a===void 0?void 0:a.trim())||null:null}return((r=t.find((function(t){var i=t.type;return e=="meridiem"?i==="dayPeriod":i===e})))===null||r===void 0?void 0:r.value)||null}function getMeridiem(e){if(!isValidNumber(e)){return null}var t=parseInt(e);return t>=0&&t<=11?"AM":"PM"}function isValidTime(e){if(!e||e.startsWith(":")||e.endsWith(":")){return false}var t=e.split(":");var i=t.length>1&&t.length<4;if(!i){return false}var n=t[0],a=t[1],r=t[2];var o=parseInt(t[0]);var c=parseInt(t[1]);var l=parseInt(t[2]);var s=isValidNumber(n)&&o>=0&&o<24;var u=isValidNumber(a)&&c>=0&&c<60;var m=isValidNumber(r)&&l>=0&&l<60;if(s&&u&&!r||s&&u&&m){return true}}function isValidTimePart(e,t){if(t==="meridiem"){return e==="AM"||e==="PM"}if(!isValidNumber(e)){return false}var i=Number(e);return t==="hour"?i>=0&&i<24:i>=0&&i<60}function localizeTimePart(e,t,i){if(!isValidTimePart(e,t)){return}var n=parseInt(e);var a=new Date(Date.UTC(0,0,0,t==="hour"?n:t==="meridiem"?e==="AM"?0:12:0,t==="minute"?n:0,t==="second"?n:0));if(!a){return}var r=createLocaleDateTimeFormatter(i);var o=r.formatToParts(a);return getLocalizedTimePart(t,o)}function localizeTimeString(e,t,i){if(t===void 0){t="en"}if(i===void 0){i=true}if(!isValidTime(e)){return null}var n=parseTimeString(e),a=n.hour,r=n.minute,o=n.second,c=o===void 0?"0":o;var l=new Date(Date.UTC(0,0,0,parseInt(a),parseInt(r),parseInt(c)));var s=createLocaleDateTimeFormatter(t,i);return(s===null||s===void 0?void 0:s.format(l))||null}function localizeTimeStringToParts(e,t){if(t===void 0){t="en"}if(!isValidTime(e)){return null}var i=parseTimeString(e),n=i.hour,a=i.minute,r=i.second,o=r===void 0?"0":r;var c=new Date(Date.UTC(0,0,0,parseInt(n),parseInt(a),parseInt(o)));if(c){var l=createLocaleDateTimeFormatter(t);var s=l.formatToParts(c);return{localizedHour:getLocalizedTimePart("hour",s),localizedHourSuffix:getLocalizedTimePart("hourSuffix",s),localizedMinute:getLocalizedTimePart("minute",s),localizedMinuteSuffix:getLocalizedTimePart("minuteSuffix",s),localizedSecond:getLocalizedTimePart("second",s),localizedSecondSuffix:getLocalizedTimePart("secondSuffix",s),localizedMeridiem:getLocalizedTimePart("meridiem",s)}}return null}function getTimeParts(e,t){if(t===void 0){t="en"}if(!isValidTime(e)){return null}var i=parseTimeString(e),n=i.hour,a=i.minute,r=i.second,o=r===void 0?"0":r;var c=new Date(Date.UTC(0,0,0,parseInt(n),parseInt(a),parseInt(o)));if(c){var l=createLocaleDateTimeFormatter(t);var s=l.formatToParts(c);return s}return null}function parseTimeString(e){if(isValidTime(e)){var t=e.split(":"),i=t[0],n=t[1],a=t[2];return{hour:i,minute:n,second:a}}return{hour:null,minute:null,second:null}}var inputTimePickerCss="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";var InputTimePicker=function(){function e(e){var t=this;registerInstance(this,e);this.calciteInputTimePickerChange=createEvent(this,"calciteInputTimePickerChange",7);this.active=false;this.disabled=false;this.locale=document.documentElement.lang||navigator.language||"en";this.required=false;this.scale="m";this.placement="auto";this.step=60;this.value=null;this.internalValueChange=false;this.previousValidValue=null;this.referenceElementId="input-time-picker-".concat(guid());this.calciteInputBlurHandler=function(){t.active=false;var e=t.shouldIncludeSeconds();var i=localizeTimeString(t.calciteInputEl.value,t.locale,e);t.setInputValue(i||localizeTimeString(t.value,t.locale,e))};this.calciteInputFocusHandler=function(){t.active=true};this.calciteInputInputHandler=function(e){var i=e.target;t.setValue({value:i.value})};this.timePickerChangeHandler=function(e){e.stopPropagation();var i=e.target;var n=i.value;t.setValue({value:n,origin:"time-picker"})};this.setCalciteInputEl=function(e){t.calciteInputEl=e};this.setCalciteTimePickerEl=function(e){t.calciteTimePickerEl=e};this.setInputValue=function(e){if(!t.calciteInputEl){return}t.calciteInputEl.value=e};this.setValue=function(e){var i=e.value,n=e.origin,a=n===void 0?"input":n;var r=t.value;var o=formatTimeString(i);var c=localizeTimeString(o,t.locale,t.shouldIncludeSeconds());t.internalValueChange=a!=="external"&&a!=="loading";var l=a!=="loading"&&a!=="external"&&(i!==t.previousValidValue&&!i||!!(!t.previousValidValue&&o)||o!==t.previousValidValue&&o);if(i){if(l){t.previousValidValue=o}if(o&&o!==t.value){t.value=o}t.localizedValue=c}else{t.value=i;t.localizedValue=null}if(a==="time-picker"||a==="external"){t.setInputValue(c)}if(l){var s=t.calciteInputTimePickerChange.emit();if(s.defaultPrevented){t.internalValueChange=false;t.value=r;t.setInputValue(r);t.previousValidValue=r}else{t.previousValidValue=o}}}}e.prototype.activeHandler=function(){if(this.disabled){this.active=false}};e.prototype.handleDisabledChange=function(e){if(!e){this.active=false}};e.prototype.localeWatcher=function(e){this.setInputValue(localizeTimeString(this.value,e,this.shouldIncludeSeconds()))};e.prototype.valueWatcher=function(e){if(!this.internalValueChange){this.setValue({value:e,origin:"external"})}this.internalValueChange=false};e.prototype.clickHandler=function(e){if(e.composedPath().includes(this.calciteTimePickerEl)){return}this.setFocus()};e.prototype.keyUpHandler=function(e){if(e.key==="Escape"&&this.active){this.active=false}};e.prototype.timePickerBlurHandler=function(e){e.preventDefault();e.stopPropagation();this.active=false};e.prototype.timePickerFocusHandler=function(e){e.preventDefault();e.stopPropagation();this.active=true};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.calciteInputEl.setFocus();return[2]}))}))};e.prototype.onLabelClick=function(){this.setFocus()};e.prototype.shouldIncludeSeconds=function(){return this.step<60};e.prototype.connectedCallback=function(){if(this.value){this.setValue({value:isValidTime(this.value)?this.value:undefined,origin:"loading"})}connectLabel(this);connectForm(this)};e.prototype.componentDidLoad=function(){this.setInputValue(this.localizedValue)};e.prototype.disconnectedCallback=function(){disconnectLabel(this);disconnectForm(this)};e.prototype.componentDidRender=function(){updateHostInteraction(this)};e.prototype.render=function(){var e="".concat(this.referenceElementId,"-popover");return h(Host,null,h("div",{"aria-controls":e,"aria-haspopup":"dialog","aria-label":this.name,"aria-owns":e,id:this.referenceElementId,role:"combobox"},h("calcite-input",{disabled:this.disabled,icon:"clock",label:getLabelText(this),onCalciteInputBlur:this.calciteInputBlurHandler,onCalciteInputFocus:this.calciteInputFocusHandler,onCalciteInputInput:this.calciteInputInputHandler,ref:this.setCalciteInputEl,scale:this.scale,step:this.step})),h("calcite-popover",{id:e,label:"Time Picker",open:this.active,placement:this.placement,referenceElement:this.referenceElementId},h("calcite-time-picker",{intlHour:this.intlHour,intlHourDown:this.intlHourDown,intlHourUp:this.intlHourUp,intlMeridiem:this.intlMeridiem,intlMeridiemDown:this.intlMeridiemDown,intlMeridiemUp:this.intlMeridiemUp,intlMinute:this.intlMinute,intlMinuteDown:this.intlMinuteDown,intlMinuteUp:this.intlMinuteUp,intlSecond:this.intlSecond,intlSecondDown:this.intlSecondDown,intlSecondUp:this.intlSecondUp,lang:this.locale,onCalciteTimePickerChange:this.timePickerChangeHandler,ref:this.setCalciteTimePickerEl,scale:this.scale,step:this.step,value:this.value})),h(HiddenFormInputSlot,{component:this}))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{active:["activeHandler"],disabled:["handleDisabledChange"],locale:["localeWatcher"],value:["valueWatcher"]}},enumerable:false,configurable:true});return e}();InputTimePicker.style=inputTimePickerCss;var CSS={button:"button",buttonBottomLeft:"button--bottom-left",buttonBottomRight:"button--bottom-right",buttonHourDown:"button--hour-down",buttonHourUp:"button--hour-up",buttonMeridiemDown:"button--meridiem-down",buttonMeridiemUp:"button--meridiem-up",buttonMinuteDown:"button--minute-down",buttonMinuteUp:"button--minute-up",buttonSecondDown:"button--second-down",buttonSecondUp:"button--second-up",buttonTopLeft:"button--top-left",buttonTopRight:"button--top-right",column:"column",delimiter:"delimiter",hour:"hour",input:"input",meridiem:"meridiem",minute:"minute",second:"second",showMeridiem:"show-meridiem",showSecond:"show-second","scale-s":"scale-s","scale-m":"scale-m","scale-l":"scale-l",timePicker:"time-picker",meridiemStart:"meridiem--start"};var TEXT={hour:"Hour",hourDown:"Decrease hour",hourUp:"Increase hour",meridiem:"AM/PM",meridiemDown:"Decrease AM/PM",meridiemUp:"Increase AM/PM",minute:"Minute",minuteDown:"Decrease minute",minuteUp:"Increase minute",second:"Second",secondDown:"Decrease second",secondUp:"Increase second"};var timePickerCss="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline-block}.time-picker{display:-ms-flexbox;display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-align:center;align-items:center;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius)}.time-picker .column{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.time-picker .meridiem--start{-ms-flex-order:-1;order:-1}.time-picker .button{display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--calcite-ui-foreground-1)}.time-picker .button:hover,.time-picker .button:focus{background-color:var(--calcite-ui-foreground-2);outline:2px solid transparent;outline-offset:2px}.time-picker .button:active{background-color:var(--calcite-ui-foreground-3)}.time-picker .button.top-left{border-top-left-radius:var(--calcite-border-radius)}.time-picker .button.bottom-left{border-bottom-left-radius:var(--calcite-border-radius)}.time-picker .button.top-right{border-top-right-radius:var(--calcite-border-radius)}.time-picker .button.bottom-right{border-bottom-right-radius:var(--calcite-border-radius)}.time-picker .button calcite-icon{color:var(--calcite-ui-text-3)}.time-picker .input{display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium)}.time-picker .input:hover{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-2);box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-2)}.time-picker .input:focus,.time-picker .input:hover:focus{outline:2px solid transparent;outline-offset:2px;-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}.time-picker.scale-s{font-size:var(--calcite-font-size--1)}.time-picker.scale-s .button,.time-picker.scale-s .input{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.25rem;padding-bottom:0.25rem}.time-picker.scale-s:not(.show-meridiem) .delimiter:last-child{-webkit-padding-end:0.75rem;padding-inline-end:0.75rem}.time-picker.scale-m{font-size:var(--calcite-font-size-0)}.time-picker.scale-m .button,.time-picker.scale-m .input{padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem}.time-picker.scale-m:not(.show-meridiem) .delimiter:last-child{-webkit-padding-end:1rem;padding-inline-end:1rem}.time-picker.scale-l{font-size:var(--calcite-font-size-1)}.time-picker.scale-l .button,.time-picker.scale-l .input{padding-left:1.25rem;padding-right:1.25rem;padding-top:0.75rem;padding-bottom:0.75rem}.time-picker.scale-l:not(.show-meridiem) .delimiter:last-child{-webkit-padding-end:1.25rem;padding-inline-end:1.25rem}";function capitalize(e){return e.charAt(0).toUpperCase()+e.slice(1)}var TimePicker=function(){function e(e){var t=this;registerInstance(this,e);this.calciteTimePickerBlur=createEvent(this,"calciteTimePickerBlur",7);this.calciteTimePickerChange=createEvent(this,"calciteTimePickerChange",7);this.calciteTimePickerFocus=createEvent(this,"calciteTimePickerFocus",7);this.intlHour=TEXT.hour;this.intlHourDown=TEXT.hourDown;this.intlHourUp=TEXT.hourUp;this.intlMeridiem=TEXT.meridiem;this.intlMeridiemDown=TEXT.meridiemDown;this.intlMeridiemUp=TEXT.meridiemUp;this.intlMinute=TEXT.minute;this.intlMinuteDown=TEXT.minuteDown;this.intlMinuteUp=TEXT.minuteUp;this.intlSecond=TEXT.second;this.intlSecondDown=TEXT.secondDown;this.intlSecondUp=TEXT.secondUp;this.locale=document.documentElement.lang||navigator.language||"en";this.scale="m";this.step=60;this.value=null;this.showSecond=this.step<60;this.decrementHour=function(){var e=!t.hour?0:t.hour==="00"?23:parseInt(t.hour)-1;t.setValuePart("hour",e)};this.decrementMeridiem=function(){var e=t.meridiem==="PM"?"AM":"PM";t.setValuePart("meridiem",e)};this.decrementMinuteOrSecond=function(e){var i;if(isValidNumber(t[e])){var n=parseInt(t[e]);i=n===0?59:n-1}else{i=59}t.setValuePart(e,i)};this.decrementMinute=function(){t.decrementMinuteOrSecond("minute")};this.decrementSecond=function(){t.decrementMinuteOrSecond("second")};this.focusHandler=function(e){t.activeEl=e.currentTarget};this.hourDownButtonKeyDownHandler=function(e){if(t.buttonActivated(e)){t.decrementHour()}};this.hourKeyDownHandler=function(e){var i=e.key;if(numberKeys.includes(i)){var n=parseInt(i);var a=void 0;if(isValidNumber(t.hour)){switch(t.hourCycle){case"12":a=t.hour==="01"&&n>=0&&n<=2?"1".concat(n):n;break;case"24":if(t.hour==="01"){a="1".concat(n)}else if(t.hour==="02"&&n>=0&&n<=3){a="2".concat(n)}else{a=n}break}}else{a=n}t.setValuePart("hour",a)}else{switch(i){case"Backspace":case"Delete":t.setValuePart("hour",null);break;case"ArrowDown":e.preventDefault();t.decrementHour();break;case"ArrowUp":e.preventDefault();t.incrementHour();break;case" ":case"Spacebar":e.preventDefault();break}}};this.hourUpButtonKeyDownHandler=function(e){if(t.buttonActivated(e)){t.incrementHour()}};this.incrementMeridiem=function(){var e=t.meridiem==="AM"?"PM":"AM";t.setValuePart("meridiem",e)};this.incrementHour=function(){var e=isValidNumber(t.hour)?t.hour==="23"?0:parseInt(t.hour)+1:1;t.setValuePart("hour",e)};this.incrementMinuteOrSecond=function(e){var i=isValidNumber(t[e])?t[e]==="59"?0:parseInt(t[e])+1:0;t.setValuePart(e,i)};this.incrementMinute=function(){t.incrementMinuteOrSecond("minute")};this.incrementSecond=function(){t.incrementMinuteOrSecond("second")};this.meridiemDownButtonKeyDownHandler=function(e){if(t.buttonActivated(e)){t.decrementMeridiem()}};this.meridiemKeyDownHandler=function(e){switch(e.key){case"a":t.setValuePart("meridiem","AM");break;case"p":t.setValuePart("meridiem","PM");break;case"Backspace":case"Delete":t.setValuePart("meridiem",null);break;case"ArrowUp":e.preventDefault();t.incrementMeridiem();break;case"ArrowDown":e.preventDefault();t.decrementMeridiem();break;case" ":case"Spacebar":e.preventDefault();break}};this.meridiemUpButtonKeyDownHandler=function(e){if(t.buttonActivated(e)){t.incrementMeridiem()}};this.minuteDownButtonKeyDownHandler=function(e){if(t.buttonActivated(e)){t.decrementMinute()}};this.minuteKeyDownHandler=function(e){var i=e.key;if(numberKeys.includes(i)){var n=parseInt(i);var a=void 0;if(isValidNumber(t.minute)&&t.minute.startsWith("0")){var r=parseInt(t.minute);a=r>maxTenthForMinuteAndSecond?n:"".concat(r).concat(n)}else{a=n}t.setValuePart("minute",a)}else{switch(i){case"Backspace":case"Delete":t.setValuePart("minute",null);break;case"ArrowDown":e.preventDefault();t.decrementMinute();break;case"ArrowUp":e.preventDefault();t.incrementMinute();break;case" ":case"Spacebar":e.preventDefault();break}}};this.minuteUpButtonKeyDownHandler=function(e){if(t.buttonActivated(e)){t.incrementMinute()}};this.secondDownButtonKeyDownHandler=function(e){if(t.buttonActivated(e)){t.decrementSecond()}};this.secondKeyDownHandler=function(e){var i=e.key;if(numberKeys.includes(i)){var n=parseInt(i);var a=void 0;if(isValidNumber(t.second)&&t.second.startsWith("0")){var r=parseInt(t.second);a=r>maxTenthForMinuteAndSecond?n:"".concat(r).concat(n)}else{a=n}t.setValuePart("second",a)}else{switch(i){case"Backspace":case"Delete":t.setValuePart("second",null);break;case"ArrowDown":e.preventDefault();t.decrementSecond();break;case"ArrowUp":e.preventDefault();t.incrementSecond();break;case" ":case"Spacebar":e.preventDefault();break}}};this.secondUpButtonKeyDownHandler=function(e){if(t.buttonActivated(e)){t.incrementSecond()}};this.setHourEl=function(e){return t.hourEl=e};this.setMeridiemEl=function(e){return t.meridiemEl=e};this.setMinuteEl=function(e){return t.minuteEl=e};this.setSecondEl=function(e){return t.secondEl=e};this.setValue=function(e,i){if(i===void 0){i=true}if(isValidTime(e)){var n=parseTimeString(e),a=n.hour,r=n.minute,o=n.second;var c=localizeTimeStringToParts(e,t.locale),l=c.localizedHour,s=c.localizedHourSuffix,u=c.localizedMinute,m=c.localizedMinuteSuffix,d=c.localizedSecond,p=c.localizedSecondSuffix,h=c.localizedMeridiem;t.localizedHour=l;t.localizedHourSuffix=s;t.localizedMinute=u;t.localizedMinuteSuffix=m;t.localizedSecond=d;t.localizedSecondSuffix=p;t.hour=a;t.minute=r;t.second=o;if(h){t.localizedMeridiem=h;t.meridiem=getMeridiem(t.hour);var f=getTimeParts(e,t.locale);t.meridiemOrder=t.getMeridiemOrder(f)}}else{t.hour=null;t.localizedHour=null;t.localizedHourSuffix=null;t.localizedMeridiem=null;t.localizedMinute=null;t.localizedMinuteSuffix=null;t.localizedSecond=null;t.localizedSecondSuffix=null;t.meridiem=null;t.minute=null;t.second=null;t.value=null}if(i){t.calciteTimePickerChange.emit()}};this.setValuePart=function(e,i,n){if(n===void 0){n=true}var a;if(e==="meridiem"){t.meridiem=i;if(isValidNumber(t.hour)){var r=parseInt(t.hour);switch(i){case"AM":if(r>=12){t.hour=formatTimePart(r-12)}break;case"PM":if(r<12){t.hour=formatTimePart(r+12)}break}t.localizedHour=localizeTimePart(t.hour,"hour",t.locale)}}else{t[e]=typeof i==="number"?formatTimePart(i):i;t["localized".concat(capitalize(e))]=localizeTimePart(t[e],e,t.locale)}if(t.hour&&t.minute){var o=t.second&&t.showSecond;t.value="".concat(t.hour,":").concat(t.minute,":").concat(o?t.second:"00")}else{t.value=null}t.localizedMeridiem=t.value?((a=localizeTimeStringToParts(t.value,t.locale))===null||a===void 0?void 0:a.localizedMeridiem)||null:localizeTimePart(t.meridiem,"meridiem",t.locale);if(n){t.calciteTimePickerChange.emit()}}}e.prototype.localeWatcher=function(e){this.hourCycle=getLocaleHourCycle(e);this.setValue(this.value,false)};e.prototype.valueWatcher=function(e){this.setValue(e,false)};e.prototype.hostBlurHandler=function(){this.calciteTimePickerBlur.emit()};e.prototype.hostFocusHandler=function(){this.calciteTimePickerFocus.emit()};e.prototype.keyDownHandler=function(e){var t=e.key;switch(this.activeEl){case this.hourEl:if(t==="ArrowRight"){this.setFocus("minute")}break;case this.minuteEl:switch(t){case"ArrowLeft":this.setFocus("hour");break;case"ArrowRight":if(this.step!==60){this.setFocus("second")}else if(this.hourCycle==="12"){this.setFocus("meridiem")}break}break;case this.secondEl:switch(t){case"ArrowLeft":this.setFocus("minute");break;case"ArrowRight":if(this.hourCycle==="12"){this.setFocus("meridiem")}break}break;case this.meridiemEl:switch(t){case"ArrowLeft":if(this.step!==60){this.setFocus("second")}else{this.setFocus("minute")}break}break}};e.prototype.setFocus=function(e){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(i){(t=this["".concat(e||"hour","El")])===null||t===void 0?void 0:t.focus();return[2]}))}))};e.prototype.buttonActivated=function(e){var t=e.key;if(t===" "){e.preventDefault()}return isActivationKey(t)};e.prototype.getMeridiemOrder=function(e){var t=this;var i=this.locale==="ar"||this.locale==="he";if(e&&!i){var n=e.findIndex((function(e){return e.value===t.localizedMeridiem}));return n}return 0};e.prototype.connectedCallback=function(){this.setValue(this.value,false);this.hourCycle=getLocaleHourCycle(this.locale)};e.prototype.render=function(){var e,t,i,n,a,r,o,c,l,s,u,m,d,p;var f=isValidNumber(this.hour);var v=this.scale==="s"||this.scale==="m"?"s":"m";var b=isValidNumber(this.minute);var w=isValidNumber(this.second);var k=this.hourCycle==="12";return h("div",{class:(e={},e[CSS.timePicker]=true,e[CSS.showMeridiem]=k,e[CSS.showSecond]=this.showSecond,e[CSS["scale-".concat(this.scale)]]=true,e),dir:"ltr"},h("div",{class:CSS.column,role:"group"},h("span",{"aria-label":this.intlHourUp,class:(t={},t[CSS.button]=true,t[CSS.buttonHourUp]=true,t[CSS.buttonTopLeft]=true,t),onClick:this.incrementHour,onKeyDown:this.hourUpButtonKeyDownHandler,role:"button",tabIndex:-1},h("calcite-icon",{icon:"chevron-up",scale:v})),h("span",{"aria-label":this.intlHour,"aria-valuemax":"23","aria-valuemin":"1","aria-valuenow":f&&parseInt(this.hour)||"0","aria-valuetext":this.hour,class:(i={},i[CSS.input]=true,i[CSS.hour]=true,i),onFocus:this.focusHandler,onKeyDown:this.hourKeyDownHandler,ref:this.setHourEl,role:"spinbutton",tabIndex:0},this.localizedHour||"--"),h("span",{"aria-label":this.intlHourDown,class:(n={},n[CSS.button]=true,n[CSS.buttonHourDown]=true,n[CSS.buttonBottomLeft]=true,n),onClick:this.decrementHour,onKeyDown:this.hourDownButtonKeyDownHandler,role:"button",tabIndex:-1},h("calcite-icon",{icon:"chevron-down",scale:v}))),h("span",{class:CSS.delimiter},this.localizedHourSuffix),h("div",{class:CSS.column,role:"group"},h("span",{"aria-label":this.intlMinuteUp,class:(a={},a[CSS.button]=true,a[CSS.buttonMinuteUp]=true,a),onClick:this.incrementMinute,onKeyDown:this.minuteUpButtonKeyDownHandler,role:"button",tabIndex:-1},h("calcite-icon",{icon:"chevron-up",scale:v})),h("span",{"aria-label":this.intlMinute,"aria-valuemax":"12","aria-valuemin":"1","aria-valuenow":b&&parseInt(this.minute)||"0","aria-valuetext":this.minute,class:(r={},r[CSS.input]=true,r[CSS.minute]=true,r),onFocus:this.focusHandler,onKeyDown:this.minuteKeyDownHandler,ref:this.setMinuteEl,role:"spinbutton",tabIndex:0},this.localizedMinute||"--"),h("span",{"aria-label":this.intlMinuteDown,class:(o={},o[CSS.button]=true,o[CSS.buttonMinuteDown]=true,o),onClick:this.decrementMinute,onKeyDown:this.minuteDownButtonKeyDownHandler,role:"button",tabIndex:-1},h("calcite-icon",{icon:"chevron-down",scale:v}))),this.showSecond&&h("span",{class:CSS.delimiter},this.localizedMinuteSuffix),this.showSecond&&h("div",{class:CSS.column,role:"group"},h("span",{"aria-label":this.intlSecondUp,class:(c={},c[CSS.button]=true,c[CSS.buttonSecondUp]=true,c),onClick:this.incrementSecond,onKeyDown:this.secondUpButtonKeyDownHandler,role:"button",tabIndex:-1},h("calcite-icon",{icon:"chevron-up",scale:v})),h("span",{"aria-label":this.intlSecond,"aria-valuemax":"59","aria-valuemin":"0","aria-valuenow":w&&parseInt(this.second)||"0","aria-valuetext":this.second,class:(l={},l[CSS.input]=true,l[CSS.second]=true,l),onFocus:this.focusHandler,onKeyDown:this.secondKeyDownHandler,ref:this.setSecondEl,role:"spinbutton",tabIndex:0},this.localizedSecond||"--"),h("span",{"aria-label":this.intlSecondDown,class:(s={},s[CSS.button]=true,s[CSS.buttonSecondDown]=true,s),onClick:this.decrementSecond,onKeyDown:this.secondDownButtonKeyDownHandler,role:"button",tabIndex:-1},h("calcite-icon",{icon:"chevron-down",scale:v}))),this.localizedSecondSuffix&&h("span",{class:CSS.delimiter},this.localizedSecondSuffix),k&&h("div",{class:(u={},u[CSS.column]=true,u[CSS.meridiemStart]=this.meridiemOrder===0,u),role:"group"},h("span",{"aria-label":this.intlMeridiemUp,class:(m={},m[CSS.button]=true,m[CSS.buttonMeridiemUp]=true,m[CSS.buttonTopRight]=true,m),onClick:this.incrementMeridiem,onKeyDown:this.meridiemUpButtonKeyDownHandler,role:"button",tabIndex:-1},h("calcite-icon",{icon:"chevron-up",scale:v})),h("span",{"aria-label":this.intlMeridiem,"aria-valuemax":"2","aria-valuemin":"1","aria-valuenow":this.meridiem==="PM"&&"2"||"1","aria-valuetext":this.meridiem,class:(d={},d[CSS.input]=true,d[CSS.meridiem]=true,d),onFocus:this.focusHandler,onKeyDown:this.meridiemKeyDownHandler,ref:this.setMeridiemEl,role:"spinbutton",tabIndex:0},this.localizedMeridiem||"--"),h("span",{"aria-label":this.intlMeridiemDown,class:(p={},p[CSS.button]=true,p[CSS.buttonMeridiemDown]=true,p[CSS.buttonBottomRight]=true,p),onClick:this.decrementMeridiem,onKeyDown:this.meridiemDownButtonKeyDownHandler,role:"button",tabIndex:-1},h("calcite-icon",{icon:"chevron-down",scale:v}))))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{locale:["localeWatcher"],value:["valueWatcher"]}},enumerable:false,configurable:true});return e}();TimePicker.style=timePickerCss;export{InputTimePicker as calcite_input_time_picker,TimePicker as calcite_time_picker};