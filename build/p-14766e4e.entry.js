/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
import{r as t,c as e,f as a,h as i,H as n,g as r}from"./p-687deef3.js";import{d as o,u as s,c as l,C as c}from"./p-eeb91710.js";import{g as p}from"./p-8a63221d.js";import{q as m,h as f}from"./p-8f3a3e4e.js";import{H as d}from"./p-099a5a7b.js";const h="data-calcite-popover-reference";let b=class{constructor(a){t(this,a),this.calcitePopoverClose=e(this,"calcitePopoverClose",7),this.calcitePopoverOpen=e(this,"calcitePopoverOpen",7),this.closeButton=!1,this.dismissible=!1,this.disableFlip=!1,this.disablePointer=!1,this.offsetDistance=o,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.intlClose="Close",this.guid=`calcite-popover-${p()}`,this.activeTransitionProp="opacity",this.setUpReferenceElement=()=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement();const{el:t,referenceElement:e,effectiveReferenceElement:a}=this;e&&!a&&console.warn(`${t.tagName}: reference-element id "${e}" was not found.`,{el:t}),this.addReferences(),this.createPopper()},this.getId=()=>this.el.id||this.guid,this.setExpandedAttr=()=>{const{effectiveReferenceElement:t,open:e}=this;t&&t.setAttribute("aria-expanded",e.toString())},this.addReferences=()=>{const{effectiveReferenceElement:t}=this;if(!t)return;const e=this.getId();t.setAttribute(h,e),t.setAttribute("aria-controls",e),this.setExpandedAttr()},this.removeReferences=()=>{const{effectiveReferenceElement:t}=this;t&&(t.removeAttribute(h),t.removeAttribute("aria-controls"),t.removeAttribute("aria-expanded"))},this.hide=()=>{this.open=!1},this.transitionEnd=t=>{t.propertyName===this.activeTransitionProp&&(this.open?this.calcitePopoverOpen.emit():this.calcitePopoverClose.emit())}}offsetDistanceOffsetHandler(){this.reposition()}offsetSkiddingHandler(){this.reposition()}openHandler(){this.reposition(),this.setExpandedAttr()}placementHandler(){this.reposition()}referenceElementHandler(){this.setUpReferenceElement()}componentWillLoad(){this.setUpReferenceElement()}componentDidLoad(){this.reposition()}disconnectedCallback(){this.removeReferences(),this.destroyPopper()}async reposition(){const{popper:t,el:e,placement:a}=this,i=this.getModifiers();t?await s({el:e,modifiers:i,placement:a,popper:t}):this.createPopper()}async setFocus(t){var e;const{closeButtonEl:i}=this;if("close-button"===t&&i)return a(i),void i.setFocus();null===(e=this.el)||void 0===e||e.focus()}async toggle(t=!this.open){this.open=t}getReferenceElement(){const{referenceElement:t,el:e}=this;return("string"==typeof t?m(e,{id:t}):t)||null}getModifiers(){const{arrowEl:t,flipPlacements:e,disableFlip:a,disablePointer:i,offsetDistance:n,offsetSkidding:r}=this,o={name:"flip",enabled:!a};e&&(o.options={fallbackPlacements:e});const s={name:"arrow",enabled:!i};return t&&(s.options={element:t}),[s,o,{name:"offset",enabled:!0,options:{offset:[r,n]}}]}createPopper(){this.destroyPopper();const{el:t,placement:e,effectiveReferenceElement:a,overlayPositioning:i}=this,n=this.getModifiers();this.popper=l({el:t,modifiers:n,overlayPositioning:i,placement:e,referenceEl:a})}destroyPopper(){const{popper:t}=this;t&&t.destroy(),this.popper=null}renderCloseButton(){const{dismissible:t,closeButton:e,intlClose:a}=this;return t||e?i("div",{class:"close-button-container"},i("calcite-action",{class:"close-button",onClick:this.hide,ref:t=>this.closeButtonEl=t,text:a},i("calcite-icon",{icon:"x",scale:"m"}))):null}renderHeader(){const{heading:t,headingLevel:e}=this,a=t?i(d,{class:"heading",level:e||2},t):null;return a?i("div",{class:"header"},a,this.renderCloseButton()):null}render(){const{effectiveReferenceElement:t,heading:e,label:a,open:r,disablePointer:o}=this,s=t&&r,l=!s,p=o?null:i("div",{class:"arrow",ref:t=>this.arrowEl=t});return i(n,{"aria-hidden":l.toString(),"aria-label":a,"calcite-hydrated-hidden":l,id:this.getId(),role:"dialog"},i("div",{class:{[c.animation]:!0,[c.animationActive]:s},onTransitionEnd:this.transitionEnd},p,i("div",{class:{"has-header":!!e,container:!0}},this.renderHeader(),i("div",{class:"content"},i("slot",null)),e?null:this.renderCloseButton())))}get el(){return r(this)}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}};b.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host([data-popper-placement^=bottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^=top]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^=left]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^=right]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top]) .arrow{bottom:-4px}:host([data-popper-placement^=bottom]) .arrow{top:-4px}:host([data-popper-placement^=left]) .arrow{right:-4px}:host([data-popper-placement^=right]) .arrow{left:-4px}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-popper-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:start;justify-content:flex-start;border-width:0px;border-bottom-width:1px;border-style:solid;background-color:var(--calcite-ui-foreground-1);border-bottom-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;white-space:normal;padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1)}.container.has-header{-ms-flex-direction:column;flex-direction:column}.content{display:-ms-flexbox;display:flex;height:100%;width:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-item-align:center;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex:0 0 auto;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){height:100%}';let w=class{constructor(e){t(this,e),this.selector=`[${h}]`,this.autoClose=!1,this.queryPopover=t=>{const{el:e}=this;if(!t.includes(e))return null;const a=t.find((t=>{var e;return null===(e=null==t?void 0:t.hasAttribute)||void 0===e?void 0:e.call(t,h)}));if(!a)return null;const i=a.getAttribute(h);return m(e,{id:i})}}render(){return i("slot",null)}closeOpenPopovers(t){const{autoClose:e,el:a}=this,i=t.composedPath(),n=this.queryPopover(i);n?n.toggle():e&&f(a,"calcite-popover").filter((t=>t.open&&!i.includes(t))).forEach((t=>t.toggle(!1)))}get el(){return r(this)}};w.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}";export{b as calcite_popover,w as calcite_popover_manager}