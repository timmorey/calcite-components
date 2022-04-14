var __awaiter=this&&this.__awaiter||function(t,i,e,a){function n(t){return t instanceof e?t:new e((function(i){i(t)}))}return new(e||(e=Promise))((function(e,r){function s(t){try{l(a.next(t))}catch(t){r(t)}}function o(t){try{l(a["throw"](t))}catch(t){r(t)}}function l(t){t.done?e(t.value):n(t.value).then(s,o)}l((a=a.apply(t,i||[])).next())}))};var __generator=this&&this.__generator||function(t,i){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},a,n,r,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(t){return function(i){return l([t,i])}}function l(s){if(a)throw new TypeError("Generator is already executing.");while(e)try{if(a=1,n&&(r=s[0]&2?n["return"]:s[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,s[1])).done)return r;if(n=0,r)s=[s[0]&2,r.value];switch(s[0]){case 0:case 1:r=s;break;case 4:e.label++;return{value:s[1],done:false};case 5:e.label++;n=s[1];s=[0];continue;case 7:s=e.ops.pop();e.trys.pop();continue;default:if(!(r=e.trys,r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){e=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){e.label=s[1];break}if(s[0]===6&&e.label<r[1]){e.label=r[1];r=s;break}if(r&&e.label<r[2]){e.label=r[2];e.ops.push(s);break}if(r[2])e.ops.pop();e.trys.pop();continue}s=i.call(t,e)}catch(t){s=[6,t];n=0}finally{a=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */System.register(["./p-6a9fef86.system.js"],(function(t){"use strict";var i,e,a,n,r;return{setters:[function(t){i=t.r;e=t.c;a=t.h;n=t.F;r=t.g}],execute:function(){var s={page:"page",selected:"is-selected",previous:"previous",next:"next",disabled:"is-disabled",ellipsis:"ellipsis",ellipsisStart:"ellipsis--start",ellipsisEnd:"ellipsis--end"};var o={nextLabel:"Next",previousLabel:"Previous"};var l="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-pagination-spacing:0.25rem 0.5rem}:host([scale=s]) .previous,:host([scale=s]) .next,:host([scale=s]) .page{height:1.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .previous,:host([scale=s]) .next{padding-left:0.25rem;padding-right:0.25rem}:host([scale=m]){--calcite-pagination-spacing:0.5rem 0.75rem}:host([scale=m]) .previous,:host([scale=m]) .next,:host([scale=m]) .page{height:2rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .previous,:host([scale=m]) .next{padding-left:0.5rem;padding-right:0.5rem}:host([scale=l]){--calcite-pagination-spacing:0.75rem 1rem}:host([scale=l]) .previous,:host([scale=l]) .next,:host([scale=l]) .page{height:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .previous,:host([scale=l]) .next{padding-left:1rem;padding-right:1rem}:host{display:-ms-flexbox;display:flex;-webkit-writing-mode:horizontal-tb;-ms-writing-mode:lr-tb;writing-mode:horizontal-tb}:host button{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.previous,.next,.page{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:center;align-items:center;border-style:none;--tw-border-opacity:0;background-color:transparent;font-family:inherit;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-3);border-top:2px solid transparent;border-bottom:2px solid transparent}.previous:hover,.next:hover,.page:hover{color:var(--calcite-ui-text-1);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.page:hover{border-bottom-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-brand)}.previous:hover,.next:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-brand)}.previous:active,.next:active{background-color:var(--calcite-ui-foreground-3)}.previous.is-disabled,.next.is-disabled{pointer-events:none;background-color:transparent}.previous.is-disabled>calcite-icon,.next.is-disabled>calcite-icon{opacity:var(--calcite-ui-opacity-disabled)}.next{margin-right:0px}.page,.ellipsis{padding:var(--calcite-pagination-spacing)}.ellipsis{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end;color:var(--calcite-ui-text-3)}";var c=5;var u=t("calcite_pagination",function(){function t(t){var a=this;i(this,t);this.calcitePaginationUpdate=e(this,"calcitePaginationUpdate",7);this.calcitePaginationChange=e(this,"calcitePaginationChange",7);this.num=20;this.start=1;this.total=0;this.textLabelNext=o.nextLabel;this.textLabelPrevious=o.previousLabel;this.scale="m";this.previousClicked=function(){a.previousPage().then();a.emitUpdate()};this.nextClicked=function(){a.nextPage();a.emitUpdate()}}t.prototype.nextPage=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.start=Math.min(this.getLastStart(),this.start+this.num);return[2]}))}))};t.prototype.previousPage=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.start=Math.max(1,this.start-this.num);return[2]}))}))};t.prototype.getLastStart=function(){var t=this,i=t.total,e=t.num;var a=i%e===0?i-e:Math.floor(i/e)*e;return a+1};t.prototype.showLeftEllipsis=function(){return Math.floor(this.start/this.num)>3};t.prototype.showRightEllipsis=function(){return(this.total-this.start)/this.num>3};t.prototype.emitUpdate=function(){var t={start:this.start,total:this.total,num:this.num};this.calcitePaginationChange.emit(t);this.calcitePaginationUpdate.emit(t)};t.prototype.renderPages=function(){var t=this;var i=this.getLastStart();var e;var a;if(this.total/this.num<=c){a=1+this.num;e=i-this.num}else{if(this.start/this.num<c-1){a=1+this.num;e=1+4*this.num}else{if(this.start+3*this.num>=this.total){a=i-4*this.num;e=i-this.num}else{a=this.start-this.num;e=this.start+this.num}}}var n=[];while(a<=e){n.push(a);a=a+this.num}return n.map((function(i){return t.renderPage(i)}))};t.prototype.renderPage=function(t){var i;var e=this;var n=Math.floor(t/this.num)+(this.num===1?0:1);return a("button",{class:(i={},i[s.page]=true,i[s.selected]=t===this.start,i),onClick:function(){e.start=t;e.emitUpdate()}},n)};t.prototype.renderLeftEllipsis=function(){if(this.total/this.num>c&&this.showLeftEllipsis()){return a("span",{class:"".concat(s.ellipsis," ").concat(s.ellipsisStart)},"…")}};t.prototype.renderRightEllipsis=function(){if(this.total/this.num>c&&this.showRightEllipsis()){return a("span",{class:"".concat(s.ellipsis," ").concat(s.ellipsisEnd)},"…")}};t.prototype.render=function(){var t,i;var e=this,r=e.total,o=e.num,l=e.start;var c=o===1?l<=o:l<o;var u=o===1?l+o>r:l+o>r;return a(n,null,a("button",{"aria-label":this.textLabelPrevious,class:(t={},t[s.previous]=true,t[s.disabled]=c,t),disabled:c,onClick:this.previousClicked},a("calcite-icon",{flipRtl:true,icon:"chevronLeft",scale:"s"})),r>o?this.renderPage(1):null,this.renderLeftEllipsis(),this.renderPages(),this.renderRightEllipsis(),this.renderPage(this.getLastStart()),a("button",{"aria-label":this.textLabelNext,class:(i={},i[s.next]=true,i[s.disabled]=u,i),disabled:u,onClick:this.nextClicked},a("calcite-icon",{flipRtl:true,icon:"chevronRight",scale:"s"})))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());u.style=l}}}));