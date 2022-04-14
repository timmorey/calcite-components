/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import{r as t,c as i,h as e,H as a,g as n}from"./p-778443d9.js";import{g as s}from"./p-f1267686.js";import{i as r,n as o,c}from"./p-bc0906eb.js";import{c as l,d as h,g as u}from"./p-3edc10a9.js";import{c as m,d,H as p}from"./p-b18a27a5.js";import{u as b}from"./p-b72e725b.js";import"./p-37950845.js";function f(t,i=!0){try{const e={hour:"2-digit",minute:"2-digit",timeZone:"UTC"};return i&&(e.second="2-digit"),new Intl.DateTimeFormat(t,e)}catch(i){throw new Error(`Invalid locale supplied while attempting to create a DateTime formatter: ${t}`)}}function w(t){const i=t.toString();return t>=0&&t<=9?i.padStart(2,"0"):i}function k(t){return v("meridiem",f(t).formatToParts(new Date(Date.UTC(0,0,0,0,0,0))))?"12":"24"}function v(t,i){var e,a,n,s;if(!t||!i)return null;if("hourSuffix"===t){const t=i.indexOf(i.find((({type:t})=>"hour"===t))),a=i.indexOf(i.find((({type:t})=>"minute"===t))),n=i[t+1];return n&&"literal"===n.type&&a-t==2&&(null===(e=n.value)||void 0===e?void 0:e.trim())||null}if("minuteSuffix"===t){const t=i.indexOf(i.find((({type:t})=>"minute"===t))),e=i.indexOf(i.find((({type:t})=>"second"===t))),n=i[t+1];return n&&"literal"===n.type&&e-t==2&&(null===(a=n.value)||void 0===a?void 0:a.trim())||null}if("secondSuffix"===t){const t=i.indexOf(i.find((({type:t})=>"second"===t))),e=i[t+1];return e&&"literal"===e.type&&(null===(n=e.value)||void 0===n?void 0:n.trim())||null}return(null===(s=i.find((({type:i})=>"meridiem"==t?"dayPeriod"===i:i===t)))||void 0===s?void 0:s.value)||null}function g(t){if(!t||t.startsWith(":")||t.endsWith(":"))return!1;const i=t.split(":");if(!(i.length>1&&i.length<4))return!1;const[e,a,n]=i,s=parseInt(i[0]),o=parseInt(i[1]),c=parseInt(i[2]),l=r(e)&&s>=0&&s<24,h=r(a)&&o>=0&&o<60,u=r(n)&&c>=0&&c<60;return!!(l&&h&&!n||l&&h&&u)||void 0}function x(t,i,e){if(!function(t,i){if("meridiem"===i)return"AM"===t||"PM"===t;if(!r(t))return!1;const e=Number(t);return"hour"===i?e>=0&&e<24:e>=0&&e<60}(t,i))return;const a=parseInt(t),n=new Date(Date.UTC(0,0,0,"hour"===i?a:"meridiem"===i?"AM"===t?0:12:0,"minute"===i?a:0,"second"===i?a:0));return n?v(i,f(e).formatToParts(n)):void 0}function D(t,i="en",e=!0){if(!g(t))return null;const{hour:a,minute:n,second:s="0"}=I(t),r=new Date(Date.UTC(0,0,0,parseInt(a),parseInt(n),parseInt(s))),o=f(i,e);return(null==o?void 0:o.format(r))||null}function y(t,i="en"){if(!g(t))return null;const{hour:e,minute:a,second:n="0"}=I(t),s=new Date(Date.UTC(0,0,0,parseInt(e),parseInt(a),parseInt(n)));if(s){const t=f(i).formatToParts(s);return{localizedHour:v("hour",t),localizedHourSuffix:v("hourSuffix",t),localizedMinute:v("minute",t),localizedMinuteSuffix:v("minuteSuffix",t),localizedSecond:v("second",t),localizedSecondSuffix:v("secondSuffix",t),localizedMeridiem:v("meridiem",t)}}return null}function I(t){if(g(t)){const[i,e,a]=t.split(":");return{hour:i,minute:e,second:a}}return{hour:null,minute:null,second:null}}const M=class{constructor(e){t(this,e),this.calciteInputTimePickerChange=i(this,"calciteInputTimePickerChange",7),this.active=!1,this.disabled=!1,this.locale=document.documentElement.lang||navigator.language||"en",this.required=!1,this.scale="m",this.placement="auto",this.step=60,this.value=null,this.internalValueChange=!1,this.previousValidValue=null,this.referenceElementId=`input-time-picker-${s()}`,this.calciteInputBlurHandler=()=>{this.active=!1;const t=this.shouldIncludeSeconds(),i=D(this.calciteInputEl.value,this.locale,t);this.setInputValue(i||D(this.value,this.locale,t))},this.calciteInputFocusHandler=()=>{this.active=!0},this.calciteInputInputHandler=t=>{this.setValue({value:t.target.value})},this.timePickerChangeHandler=t=>{t.stopPropagation(),this.setValue({value:t.target.value,origin:"time-picker"})},this.setCalciteInputEl=t=>{this.calciteInputEl=t},this.setCalciteTimePickerEl=t=>{this.calciteTimePickerEl=t},this.setInputValue=t=>{this.calciteInputEl&&(this.calciteInputEl.value=t)},this.setValue=({value:t,origin:i="input"})=>{const e=this.value,a=function(t){if(!g(t))return null;const[i,e,a]=t.split(":"),n=w(parseInt(i)),s=w(parseInt(e));return a?`${n}:${s}:${w(parseInt(a))}`:`${n}:${s}`}(t),n=D(a,this.locale,this.shouldIncludeSeconds());this.internalValueChange="external"!==i&&"loading"!==i;const s="loading"!==i&&"external"!==i&&(t!==this.previousValidValue&&!t||!(this.previousValidValue||!a)||a!==this.previousValidValue&&a);t?(s&&(this.previousValidValue=a),a&&a!==this.value&&(this.value=a),this.localizedValue=n):(this.value=t,this.localizedValue=null),"time-picker"!==i&&"external"!==i||this.setInputValue(n),s&&(this.calciteInputTimePickerChange.emit().defaultPrevented?(this.internalValueChange=!1,this.value=e,this.setInputValue(e),this.previousValidValue=e):this.previousValidValue=a)}}activeHandler(){this.disabled&&(this.active=!1)}handleDisabledChange(t){t||(this.active=!1)}localeWatcher(t){this.setInputValue(D(this.value,t,this.shouldIncludeSeconds()))}valueWatcher(t){this.internalValueChange||this.setValue({value:t,origin:"external"}),this.internalValueChange=!1}clickHandler(t){t.composedPath().includes(this.calciteTimePickerEl)||this.setFocus()}keyUpHandler(t){"Escape"===t.key&&this.active&&(this.active=!1)}timePickerBlurHandler(t){t.preventDefault(),t.stopPropagation(),this.active=!1}timePickerFocusHandler(t){t.preventDefault(),t.stopPropagation(),this.active=!0}async setFocus(){this.calciteInputEl.setFocus()}onLabelClick(){this.setFocus()}shouldIncludeSeconds(){return this.step<60}connectedCallback(){this.value&&this.setValue({value:g(this.value)?this.value:void 0,origin:"loading"}),l(this),m(this)}componentDidLoad(){this.setInputValue(this.localizedValue)}disconnectedCallback(){h(this),d(this)}componentDidRender(){b(this)}render(){const t=`${this.referenceElementId}-popover`;return e(a,null,e("div",{"aria-controls":t,"aria-haspopup":"dialog","aria-label":this.name,"aria-owns":t,id:this.referenceElementId,role:"combobox"},e("calcite-input",{disabled:this.disabled,icon:"clock",label:u(this),onCalciteInputBlur:this.calciteInputBlurHandler,onCalciteInputFocus:this.calciteInputFocusHandler,onCalciteInputInput:this.calciteInputInputHandler,ref:this.setCalciteInputEl,scale:this.scale,step:this.step})),e("calcite-popover",{id:t,label:"Time Picker",open:this.active,placement:this.placement,referenceElement:this.referenceElementId},e("calcite-time-picker",{intlHour:this.intlHour,intlHourDown:this.intlHourDown,intlHourUp:this.intlHourUp,intlMeridiem:this.intlMeridiem,intlMeridiemDown:this.intlMeridiemDown,intlMeridiemUp:this.intlMeridiemUp,intlMinute:this.intlMinute,intlMinuteDown:this.intlMinuteDown,intlMinuteUp:this.intlMinuteUp,intlSecond:this.intlSecond,intlSecondDown:this.intlSecondDown,intlSecondUp:this.intlSecondUp,lang:this.locale,onCalciteTimePickerChange:this.timePickerChangeHandler,ref:this.setCalciteTimePickerEl,scale:this.scale,step:this.step,value:this.value})),e(p,{component:this}))}get el(){return n(this)}static get watchers(){return{active:["activeHandler"],disabled:["handleDisabledChange"],locale:["localeWatcher"],value:["valueWatcher"]}}};M.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";const S={button:"button",buttonBottomLeft:"button--bottom-left",buttonBottomRight:"button--bottom-right",buttonHourDown:"button--hour-down",buttonHourUp:"button--hour-up",buttonMeridiemDown:"button--meridiem-down",buttonMeridiemUp:"button--meridiem-up",buttonMinuteDown:"button--minute-down",buttonMinuteUp:"button--minute-up",buttonSecondDown:"button--second-down",buttonSecondUp:"button--second-up",buttonTopLeft:"button--top-left",buttonTopRight:"button--top-right",column:"column",delimiter:"delimiter",hour:"hour",input:"input",meridiem:"meridiem",minute:"minute",second:"second",showMeridiem:"show-meridiem",showSecond:"show-second","scale-s":"scale-s","scale-m":"scale-m","scale-l":"scale-l",timePicker:"time-picker",meridiemStart:"meridiem--start"},A=class{constructor(e){t(this,e),this.calciteTimePickerBlur=i(this,"calciteTimePickerBlur",7),this.calciteTimePickerChange=i(this,"calciteTimePickerChange",7),this.calciteTimePickerFocus=i(this,"calciteTimePickerFocus",7),this.intlHour="Hour",this.intlHourDown="Decrease hour",this.intlHourUp="Increase hour",this.intlMeridiem="AM/PM",this.intlMeridiemDown="Decrease AM/PM",this.intlMeridiemUp="Increase AM/PM",this.intlMinute="Minute",this.intlMinuteDown="Decrease minute",this.intlMinuteUp="Increase minute",this.intlSecond="Second",this.intlSecondDown="Decrease second",this.intlSecondUp="Increase second",this.locale=document.documentElement.lang||navigator.language||"en",this.scale="m",this.step=60,this.value=null,this.showSecond=this.step<60,this.decrementHour=()=>{const t=this.hour?"00"===this.hour?23:parseInt(this.hour)-1:0;this.setValuePart("hour",t)},this.decrementMeridiem=()=>{this.setValuePart("meridiem","PM"===this.meridiem?"AM":"PM")},this.decrementMinuteOrSecond=t=>{let i;if(r(this[t])){const e=parseInt(this[t]);i=0===e?59:e-1}else i=59;this.setValuePart(t,i)},this.decrementMinute=()=>{this.decrementMinuteOrSecond("minute")},this.decrementSecond=()=>{this.decrementMinuteOrSecond("second")},this.focusHandler=t=>{this.activeEl=t.currentTarget},this.hourDownButtonKeyDownHandler=t=>{this.buttonActivated(t)&&this.decrementHour()},this.hourKeyDownHandler=t=>{const i=t.key;if(o.includes(i)){const t=parseInt(i);let e;if(r(this.hour))switch(this.hourCycle){case"12":e="01"===this.hour&&t>=0&&t<=2?`1${t}`:t;break;case"24":e="01"===this.hour?`1${t}`:"02"===this.hour&&t>=0&&t<=3?`2${t}`:t}else e=t;this.setValuePart("hour",e)}else switch(i){case"Backspace":case"Delete":this.setValuePart("hour",null);break;case"ArrowDown":t.preventDefault(),this.decrementHour();break;case"ArrowUp":t.preventDefault(),this.incrementHour();break;case" ":case"Spacebar":t.preventDefault()}},this.hourUpButtonKeyDownHandler=t=>{this.buttonActivated(t)&&this.incrementHour()},this.incrementMeridiem=()=>{this.setValuePart("meridiem","AM"===this.meridiem?"PM":"AM")},this.incrementHour=()=>{const t=r(this.hour)?"23"===this.hour?0:parseInt(this.hour)+1:1;this.setValuePart("hour",t)},this.incrementMinuteOrSecond=t=>{const i=r(this[t])?"59"===this[t]?0:parseInt(this[t])+1:0;this.setValuePart(t,i)},this.incrementMinute=()=>{this.incrementMinuteOrSecond("minute")},this.incrementSecond=()=>{this.incrementMinuteOrSecond("second")},this.meridiemDownButtonKeyDownHandler=t=>{this.buttonActivated(t)&&this.decrementMeridiem()},this.meridiemKeyDownHandler=t=>{switch(t.key){case"a":this.setValuePart("meridiem","AM");break;case"p":this.setValuePart("meridiem","PM");break;case"Backspace":case"Delete":this.setValuePart("meridiem",null);break;case"ArrowUp":t.preventDefault(),this.incrementMeridiem();break;case"ArrowDown":t.preventDefault(),this.decrementMeridiem();break;case" ":case"Spacebar":t.preventDefault()}},this.meridiemUpButtonKeyDownHandler=t=>{this.buttonActivated(t)&&this.incrementMeridiem()},this.minuteDownButtonKeyDownHandler=t=>{this.buttonActivated(t)&&this.decrementMinute()},this.minuteKeyDownHandler=t=>{const i=t.key;if(o.includes(i)){const t=parseInt(i);let e;if(r(this.minute)&&this.minute.startsWith("0")){const i=parseInt(this.minute);e=i>5?t:`${i}${t}`}else e=t;this.setValuePart("minute",e)}else switch(i){case"Backspace":case"Delete":this.setValuePart("minute",null);break;case"ArrowDown":t.preventDefault(),this.decrementMinute();break;case"ArrowUp":t.preventDefault(),this.incrementMinute();break;case" ":case"Spacebar":t.preventDefault()}},this.minuteUpButtonKeyDownHandler=t=>{this.buttonActivated(t)&&this.incrementMinute()},this.secondDownButtonKeyDownHandler=t=>{this.buttonActivated(t)&&this.decrementSecond()},this.secondKeyDownHandler=t=>{const i=t.key;if(o.includes(i)){const t=parseInt(i);let e;if(r(this.second)&&this.second.startsWith("0")){const i=parseInt(this.second);e=i>5?t:`${i}${t}`}else e=t;this.setValuePart("second",e)}else switch(i){case"Backspace":case"Delete":this.setValuePart("second",null);break;case"ArrowDown":t.preventDefault(),this.decrementSecond();break;case"ArrowUp":t.preventDefault(),this.incrementSecond();break;case" ":case"Spacebar":t.preventDefault()}},this.secondUpButtonKeyDownHandler=t=>{this.buttonActivated(t)&&this.incrementSecond()},this.setHourEl=t=>this.hourEl=t,this.setMeridiemEl=t=>this.meridiemEl=t,this.setMinuteEl=t=>this.minuteEl=t,this.setSecondEl=t=>this.secondEl=t,this.setValue=(t,i=!0)=>{if(g(t)){const{hour:i,minute:e,second:a}=I(t),{localizedHour:n,localizedHourSuffix:s,localizedMinute:o,localizedMinuteSuffix:c,localizedSecond:l,localizedSecondSuffix:h,localizedMeridiem:u}=y(t,this.locale);if(this.localizedHour=n,this.localizedHourSuffix=s,this.localizedMinute=o,this.localizedMinuteSuffix=c,this.localizedSecond=l,this.localizedSecondSuffix=h,this.hour=i,this.minute=e,this.second=a,u){this.localizedMeridiem=u,this.meridiem=function(t){if(!r(t))return null;const i=parseInt(t);return i>=0&&i<=11?"AM":"PM"}(this.hour);const i=function(t,i="en"){if(!g(t))return null;const{hour:e,minute:a,second:n="0"}=I(t),s=new Date(Date.UTC(0,0,0,parseInt(e),parseInt(a),parseInt(n)));return s?f(i).formatToParts(s):null}(t,this.locale);this.meridiemOrder=this.getMeridiemOrder(i)}}else this.hour=null,this.localizedHour=null,this.localizedHourSuffix=null,this.localizedMeridiem=null,this.localizedMinute=null,this.localizedMinuteSuffix=null,this.localizedSecond=null,this.localizedSecondSuffix=null,this.meridiem=null,this.minute=null,this.second=null,this.value=null;i&&this.calciteTimePickerChange.emit()},this.setValuePart=(t,i,e=!0)=>{var a,n;if("meridiem"===t){if(this.meridiem=i,r(this.hour)){const t=parseInt(this.hour);switch(i){case"AM":t>=12&&(this.hour=w(t-12));break;case"PM":t<12&&(this.hour=w(t+12))}this.localizedHour=x(this.hour,"hour",this.locale)}}else this[t]="number"==typeof i?w(i):i,this[`localized${n=t,n.charAt(0).toUpperCase()+n.slice(1)}`]=x(this[t],t,this.locale);this.value=this.hour&&this.minute?`${this.hour}:${this.minute}:${this.second&&this.showSecond?this.second:"00"}`:null,this.localizedMeridiem=this.value?(null===(a=y(this.value,this.locale))||void 0===a?void 0:a.localizedMeridiem)||null:x(this.meridiem,"meridiem",this.locale),e&&this.calciteTimePickerChange.emit()}}localeWatcher(t){this.hourCycle=k(t),this.setValue(this.value,!1)}valueWatcher(t){this.setValue(t,!1)}hostBlurHandler(){this.calciteTimePickerBlur.emit()}hostFocusHandler(){this.calciteTimePickerFocus.emit()}keyDownHandler(t){const i=t.key;switch(this.activeEl){case this.hourEl:"ArrowRight"===i&&this.setFocus("minute");break;case this.minuteEl:switch(i){case"ArrowLeft":this.setFocus("hour");break;case"ArrowRight":60!==this.step?this.setFocus("second"):"12"===this.hourCycle&&this.setFocus("meridiem")}break;case this.secondEl:switch(i){case"ArrowLeft":this.setFocus("minute");break;case"ArrowRight":"12"===this.hourCycle&&this.setFocus("meridiem")}break;case this.meridiemEl:switch(i){case"ArrowLeft":this.setFocus(60!==this.step?"second":"minute")}}}async setFocus(t){var i;null===(i=this[`${t||"hour"}El`])||void 0===i||i.focus()}buttonActivated(t){const i=t.key;return" "===i&&t.preventDefault(),c(i)}getMeridiemOrder(t){return t&&"ar"!==this.locale&&"he"!==this.locale?t.findIndex((t=>t.value===this.localizedMeridiem)):0}connectedCallback(){this.setValue(this.value,!1),this.hourCycle=k(this.locale)}render(){const t=r(this.hour),i="s"===this.scale||"m"===this.scale?"s":"m",a=r(this.minute),n=r(this.second),s="12"===this.hourCycle;return e("div",{class:{[S.timePicker]:!0,[S.showMeridiem]:s,[S.showSecond]:this.showSecond,[S[`scale-${this.scale}`]]:!0},dir:"ltr"},e("div",{class:S.column,role:"group"},e("span",{"aria-label":this.intlHourUp,class:{[S.button]:!0,[S.buttonHourUp]:!0,[S.buttonTopLeft]:!0},onClick:this.incrementHour,onKeyDown:this.hourUpButtonKeyDownHandler,role:"button",tabIndex:-1},e("calcite-icon",{icon:"chevron-up",scale:i})),e("span",{"aria-label":this.intlHour,"aria-valuemax":"23","aria-valuemin":"1","aria-valuenow":t&&parseInt(this.hour)||"0","aria-valuetext":this.hour,class:{[S.input]:!0,[S.hour]:!0},onFocus:this.focusHandler,onKeyDown:this.hourKeyDownHandler,ref:this.setHourEl,role:"spinbutton",tabIndex:0},this.localizedHour||"--"),e("span",{"aria-label":this.intlHourDown,class:{[S.button]:!0,[S.buttonHourDown]:!0,[S.buttonBottomLeft]:!0},onClick:this.decrementHour,onKeyDown:this.hourDownButtonKeyDownHandler,role:"button",tabIndex:-1},e("calcite-icon",{icon:"chevron-down",scale:i}))),e("span",{class:S.delimiter},this.localizedHourSuffix),e("div",{class:S.column,role:"group"},e("span",{"aria-label":this.intlMinuteUp,class:{[S.button]:!0,[S.buttonMinuteUp]:!0},onClick:this.incrementMinute,onKeyDown:this.minuteUpButtonKeyDownHandler,role:"button",tabIndex:-1},e("calcite-icon",{icon:"chevron-up",scale:i})),e("span",{"aria-label":this.intlMinute,"aria-valuemax":"12","aria-valuemin":"1","aria-valuenow":a&&parseInt(this.minute)||"0","aria-valuetext":this.minute,class:{[S.input]:!0,[S.minute]:!0},onFocus:this.focusHandler,onKeyDown:this.minuteKeyDownHandler,ref:this.setMinuteEl,role:"spinbutton",tabIndex:0},this.localizedMinute||"--"),e("span",{"aria-label":this.intlMinuteDown,class:{[S.button]:!0,[S.buttonMinuteDown]:!0},onClick:this.decrementMinute,onKeyDown:this.minuteDownButtonKeyDownHandler,role:"button",tabIndex:-1},e("calcite-icon",{icon:"chevron-down",scale:i}))),this.showSecond&&e("span",{class:S.delimiter},this.localizedMinuteSuffix),this.showSecond&&e("div",{class:S.column,role:"group"},e("span",{"aria-label":this.intlSecondUp,class:{[S.button]:!0,[S.buttonSecondUp]:!0},onClick:this.incrementSecond,onKeyDown:this.secondUpButtonKeyDownHandler,role:"button",tabIndex:-1},e("calcite-icon",{icon:"chevron-up",scale:i})),e("span",{"aria-label":this.intlSecond,"aria-valuemax":"59","aria-valuemin":"0","aria-valuenow":n&&parseInt(this.second)||"0","aria-valuetext":this.second,class:{[S.input]:!0,[S.second]:!0},onFocus:this.focusHandler,onKeyDown:this.secondKeyDownHandler,ref:this.setSecondEl,role:"spinbutton",tabIndex:0},this.localizedSecond||"--"),e("span",{"aria-label":this.intlSecondDown,class:{[S.button]:!0,[S.buttonSecondDown]:!0},onClick:this.decrementSecond,onKeyDown:this.secondDownButtonKeyDownHandler,role:"button",tabIndex:-1},e("calcite-icon",{icon:"chevron-down",scale:i}))),this.localizedSecondSuffix&&e("span",{class:S.delimiter},this.localizedSecondSuffix),s&&e("div",{class:{[S.column]:!0,[S.meridiemStart]:0===this.meridiemOrder},role:"group"},e("span",{"aria-label":this.intlMeridiemUp,class:{[S.button]:!0,[S.buttonMeridiemUp]:!0,[S.buttonTopRight]:!0},onClick:this.incrementMeridiem,onKeyDown:this.meridiemUpButtonKeyDownHandler,role:"button",tabIndex:-1},e("calcite-icon",{icon:"chevron-up",scale:i})),e("span",{"aria-label":this.intlMeridiem,"aria-valuemax":"2","aria-valuemin":"1","aria-valuenow":"PM"===this.meridiem?"2":"1","aria-valuetext":this.meridiem,class:{[S.input]:!0,[S.meridiem]:!0},onFocus:this.focusHandler,onKeyDown:this.meridiemKeyDownHandler,ref:this.setMeridiemEl,role:"spinbutton",tabIndex:0},this.localizedMeridiem||"--"),e("span",{"aria-label":this.intlMeridiemDown,class:{[S.button]:!0,[S.buttonMeridiemDown]:!0,[S.buttonBottomRight]:!0},onClick:this.decrementMeridiem,onKeyDown:this.meridiemDownButtonKeyDownHandler,role:"button",tabIndex:-1},e("calcite-icon",{icon:"chevron-down",scale:i}))))}get el(){return n(this)}static get watchers(){return{locale:["localeWatcher"],value:["valueWatcher"]}}};A.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline-block}.time-picker{display:-ms-flexbox;display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-align:center;align-items:center;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius)}.time-picker .column{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.time-picker .meridiem--start{-ms-flex-order:-1;order:-1}.time-picker .button{display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--calcite-ui-foreground-1)}.time-picker .button:hover,.time-picker .button:focus{background-color:var(--calcite-ui-foreground-2);outline:2px solid transparent;outline-offset:2px}.time-picker .button:active{background-color:var(--calcite-ui-foreground-3)}.time-picker .button.top-left{border-top-left-radius:var(--calcite-border-radius)}.time-picker .button.bottom-left{border-bottom-left-radius:var(--calcite-border-radius)}.time-picker .button.top-right{border-top-right-radius:var(--calcite-border-radius)}.time-picker .button.bottom-right{border-bottom-right-radius:var(--calcite-border-radius)}.time-picker .button calcite-icon{color:var(--calcite-ui-text-3)}.time-picker .input{display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium)}.time-picker .input:hover{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-2);box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-2)}.time-picker .input:focus,.time-picker .input:hover:focus{outline:2px solid transparent;outline-offset:2px;-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}.time-picker.scale-s{font-size:var(--calcite-font-size--1)}.time-picker.scale-s .button,.time-picker.scale-s .input{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.25rem;padding-bottom:0.25rem}.time-picker.scale-s:not(.show-meridiem) .delimiter:last-child{-webkit-padding-end:0.75rem;padding-inline-end:0.75rem}.time-picker.scale-m{font-size:var(--calcite-font-size-0)}.time-picker.scale-m .button,.time-picker.scale-m .input{padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem}.time-picker.scale-m:not(.show-meridiem) .delimiter:last-child{-webkit-padding-end:1rem;padding-inline-end:1rem}.time-picker.scale-l{font-size:var(--calcite-font-size-1)}.time-picker.scale-l .button,.time-picker.scale-l .input{padding-left:1.25rem;padding-right:1.25rem;padding-top:0.75rem;padding-bottom:0.75rem}.time-picker.scale-l:not(.show-meridiem) .delimiter:last-child{-webkit-padding-end:1.25rem;padding-inline-end:1.25rem}";export{M as calcite_input_time_picker,A as calcite_time_picker}