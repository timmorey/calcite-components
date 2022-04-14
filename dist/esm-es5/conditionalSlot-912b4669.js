/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import{f as forceUpdate}from"./index-73638693.js";import{c as createObserver}from"./observers-7d85a111.js";var observed=new Set;var mutationObserver;var observerOptions={childList:true};function connectConditionalSlotComponent(e){if(!mutationObserver){mutationObserver=createObserver("mutation",processMutations)}mutationObserver.observe(e.el,observerOptions)}function disconnectConditionalSlotComponent(e){observed.delete(e.el);processMutations(mutationObserver.takeRecords());mutationObserver.disconnect();for(var o=0,t=observed.entries();o<t.length;o++){var r=t[o][0];mutationObserver.observe(r,observerOptions)}}function processMutations(e){e.forEach((function(e){var o=e.target;forceUpdate(o)}))}export{connectConditionalSlotComponent as c,disconnectConditionalSlotComponent as d};