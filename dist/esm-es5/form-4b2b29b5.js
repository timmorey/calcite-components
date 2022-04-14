/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import{c as closestElementCrossShadowBoundary}from"./dom-3f012371.js";import{h}from"./index-73638693.js";var hiddenFormInputSlotName="hidden-form-input";function isCheckable(e){return"checked"in e}var onFormResetMap=new WeakMap;var formComponentSet=new WeakSet;function hasRegisteredFormComponentParent(e,n){var t="calciteInternalFormComponentRegister";var r=false;e.addEventListener(t,(function(e){r=e.composedPath().some((function(e){return formComponentSet.has(e)}));e.stopPropagation()}),{once:true});n.dispatchEvent(new CustomEvent(t,{bubbles:true,composed:true}));return r}function connectForm(e){var n=e.el,t=e.value;var r=closestElementCrossShadowBoundary(n,"form");if(!r||hasRegisteredFormComponentParent(r,n)){return}e.formEl=r;e.defaultValue=t;if(isCheckable(e)){e.defaultChecked=e.checked}var o=(e.onFormReset||onFormReset).bind(e);r.addEventListener("reset",o);formComponentSet.add(n)}function onFormReset(){if(isCheckable(this)){this.checked=this.defaultChecked;return}this.value=this.defaultValue}function disconnectForm(e){var n=e.el,t=e.formEl;if(!t){return}var r=onFormResetMap.get(n);t.removeEventListener("reset",r);onFormResetMap.delete(n);e.formEl=null;formComponentSet.delete(n)}function afterConnectDefaultValueSet(e,n){e.defaultValue=n}function syncHiddenFormInput(e){var n=e.el,t=e.formEl,r=e.name,o=e.value;var a=n.ownerDocument;var u=n.querySelectorAll('input[slot="'.concat(hiddenFormInputSlotName,'"]'));if(!t||!r){u.forEach((function(e){return e.remove()}));return}var d=Array.isArray(o)?o:[o];var i=[];var l=new Set;u.forEach((function(n){var t=d.find((function(e){return e==n.value}));if(t!=null){l.add(t);defaultSyncHiddenFormInput(e,n,t)}else{i.push(n)}}));var c;d.forEach((function(n){if(l.has(n)){return}var t=i.pop();if(!t){t=a.createElement("input");t.slot=hiddenFormInputSlotName}if(!c){c=a.createDocumentFragment()}c.append(t);defaultSyncHiddenFormInput(e,t,n)}));if(c){n.append(c)}i.forEach((function(e){return e.remove()}))}function defaultSyncHiddenFormInput(e,n,t){var r;var o=e.defaultValue,a=e.disabled,u=e.name,d=e.required;n.defaultValue=o;n.disabled=a;n.name=u;n.required=d;n.tabIndex=-1;if(isCheckable(e)){n.defaultChecked=e.defaultChecked;n.value=e.checked?t||"on":"";if(!a&&!e.checked){n.disabled=true}}else{n.value=t||""}(r=e.syncHiddenFormInput)===null||r===void 0?void 0:r.call(e,n)}var HiddenFormInputSlot=function(e){var n=e.component;syncHiddenFormInput(n);return h("slot",{name:hiddenFormInputSlotName})};export{HiddenFormInputSlot as H,afterConnectDefaultValueSet as a,connectForm as c,disconnectForm as d};