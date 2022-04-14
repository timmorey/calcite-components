/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { Build } from "@stencil/core";
/**
 * This utility ensures observers are created only for browser contexts.
 *
 * @param type - the type of observer to create
 * @param callback - the observer callback
 * @param options - the observer options
 */
export function createObserver(type, callback, options) {
  const Observer = getObserver(type);
  return Build.isBrowser ? new Observer(callback, options) : undefined;
}
function getObserver(type) {
  return (type === "intersection"
    ? window.IntersectionObserver
    : type === "mutation"
      ? window.MutationObserver
      : window.ResizeObserver);
}
