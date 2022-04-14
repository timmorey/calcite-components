/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import{r as t,c as i,h as a,F as e,g as s}from"./p-778443d9.js";const n=class{constructor(a){t(this,a),this.calcitePaginationUpdate=i(this,"calcitePaginationUpdate",7),this.calcitePaginationChange=i(this,"calcitePaginationChange",7),this.num=20,this.start=1,this.total=0,this.textLabelNext="Next",this.textLabelPrevious="Previous",this.scale="m",this.previousClicked=()=>{this.previousPage().then(),this.emitUpdate()},this.nextClicked=()=>{this.nextPage(),this.emitUpdate()}}async nextPage(){this.start=Math.min(this.getLastStart(),this.start+this.num)}async previousPage(){this.start=Math.max(1,this.start-this.num)}getLastStart(){const{total:t,num:i}=this;return 1+(t%i==0?t-i:Math.floor(t/i)*i)}showLeftEllipsis(){return Math.floor(this.start/this.num)>3}showRightEllipsis(){return(this.total-this.start)/this.num>3}emitUpdate(){const t={start:this.start,total:this.total,num:this.num};this.calcitePaginationChange.emit(t),this.calcitePaginationUpdate.emit(t)}renderPages(){const t=this.getLastStart();let i,a;this.total/this.num<=5?(a=1+this.num,i=t-this.num):this.start/this.num<4?(a=1+this.num,i=1+4*this.num):this.start+3*this.num>=this.total?(a=t-4*this.num,i=t-this.num):(a=this.start-this.num,i=this.start+this.num);const e=[];for(;a<=i;)e.push(a),a+=this.num;return e.map((t=>this.renderPage(t)))}renderPage(t){const i=Math.floor(t/this.num)+(1===this.num?0:1);return a("button",{class:{page:!0,"is-selected":t===this.start},onClick:()=>{this.start=t,this.emitUpdate()}},i)}renderLeftEllipsis(){if(this.total/this.num>5&&this.showLeftEllipsis())return a("span",{class:"ellipsis ellipsis--start"},"…")}renderRightEllipsis(){if(this.total/this.num>5&&this.showRightEllipsis())return a("span",{class:"ellipsis ellipsis--end"},"…")}render(){const{total:t,num:i,start:s}=this,n=1===i?s<=i:s<i,o=s+i>t;return a(e,null,a("button",{"aria-label":this.textLabelPrevious,class:{previous:!0,"is-disabled":n},disabled:n,onClick:this.previousClicked},a("calcite-icon",{flipRtl:!0,icon:"chevronLeft",scale:"s"})),t>i?this.renderPage(1):null,this.renderLeftEllipsis(),this.renderPages(),this.renderRightEllipsis(),this.renderPage(this.getLastStart()),a("button",{"aria-label":this.textLabelNext,class:{next:!0,"is-disabled":o},disabled:o,onClick:this.nextClicked},a("calcite-icon",{flipRtl:!0,icon:"chevronRight",scale:"s"})))}get el(){return s(this)}};n.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-pagination-spacing:0.25rem 0.5rem}:host([scale=s]) .previous,:host([scale=s]) .next,:host([scale=s]) .page{height:1.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .previous,:host([scale=s]) .next{padding-left:0.25rem;padding-right:0.25rem}:host([scale=m]){--calcite-pagination-spacing:0.5rem 0.75rem}:host([scale=m]) .previous,:host([scale=m]) .next,:host([scale=m]) .page{height:2rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .previous,:host([scale=m]) .next{padding-left:0.5rem;padding-right:0.5rem}:host([scale=l]){--calcite-pagination-spacing:0.75rem 1rem}:host([scale=l]) .previous,:host([scale=l]) .next,:host([scale=l]) .page{height:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .previous,:host([scale=l]) .next{padding-left:1rem;padding-right:1rem}:host{display:-ms-flexbox;display:flex;-webkit-writing-mode:horizontal-tb;-ms-writing-mode:lr-tb;writing-mode:horizontal-tb}:host button{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.previous,.next,.page{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:center;align-items:center;border-style:none;--tw-border-opacity:0;background-color:transparent;font-family:inherit;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-3);border-top:2px solid transparent;border-bottom:2px solid transparent}.previous:hover,.next:hover,.page:hover{color:var(--calcite-ui-text-1);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.page:hover{border-bottom-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-brand)}.previous:hover,.next:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-brand)}.previous:active,.next:active{background-color:var(--calcite-ui-foreground-3)}.previous.is-disabled,.next.is-disabled{pointer-events:none;background-color:transparent}.previous.is-disabled>calcite-icon,.next.is-disabled>calcite-icon{opacity:var(--calcite-ui-opacity-disabled)}.next{margin-right:0px}.page,.ellipsis{padding:var(--calcite-pagination-spacing)}.ellipsis{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end;color:var(--calcite-ui-text-3)}";export{n as calcite_pagination}