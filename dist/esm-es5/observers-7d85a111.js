/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
function createObserver(e,r,t){var n=getObserver(e);return new n(r,t)}function getObserver(e){return e==="intersection"?window.IntersectionObserver:e==="mutation"?window.MutationObserver:window.ResizeObserver}export{createObserver as c};