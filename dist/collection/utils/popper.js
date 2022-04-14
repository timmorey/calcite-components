/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { createPopper as setupPopper } from "@popperjs/core";
import { getElementDir } from "./dom";
export const popperPlacements = [
  "auto",
  "auto-start",
  "auto-end",
  "top",
  "top-start",
  "top-end",
  "bottom",
  "bottom-start",
  "bottom-end",
  "right",
  "right-start",
  "right-end",
  "left",
  "left-start",
  "left-end",
  "leading-start",
  "leading",
  "leading-end",
  "trailing-end",
  "trailing",
  "trailing-start",
  "leading-leading",
  "leading-trailing",
  "trailing-leading",
  "trailing-trailing",
  "top-leading",
  "top-trailing",
  "bottom-leading",
  "bottom-trailing",
  "right-leading",
  "right-trailing",
  "left-leading",
  "left-trailing"
];
export const popperComputedPlacements = [
  "top",
  "bottom",
  "right",
  "left",
  "top-start",
  "top-end",
  "bottom-start",
  "bottom-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
];
export const defaultMenuPlacement = "bottom-leading";
export const popperMenuPlacements = [
  "top-start",
  "top",
  "top-end",
  "bottom-start",
  "bottom",
  "bottom-end",
  "top-leading",
  "top-trailing",
  "bottom-leading",
  "bottom-trailing"
];
export const popperMenuComputedPlacements = [
  "top-start",
  "top",
  "top-end",
  "bottom-start",
  "bottom",
  "bottom-end"
];
export const CSS = {
  animation: "calcite-popper-anim",
  animationActive: "calcite-popper-anim--active"
};
export function filterComputedPlacements(placements, el) {
  const filteredPlacements = placements.filter((placement) => popperComputedPlacements.includes(placement));
  if (filteredPlacements.length !== placements.length) {
    console.warn(`${el.tagName}: Invalid value found in: flipPlacements. Try any of these: ${popperComputedPlacements
      .map((placement) => `"${placement}"`)
      .join(", ")
      .trim()}`, { el });
  }
  return filteredPlacements;
}
export function getPlacement(el, placement) {
  const placements = ["left", "right"];
  const variations = ["start", "end"];
  if (getElementDir(el) === "rtl") {
    placements.reverse();
    variations.reverse();
  }
  return placement
    .replace(/-leading/gi, `-${variations[0]}`)
    .replace(/-trailing/gi, `-${variations[1]}`)
    .replace(/leading/gi, placements[0])
    .replace(/trailing/gi, placements[1]);
}
export function createPopper({ referenceEl, el, placement, overlayPositioning = "absolute", modifiers }) {
  if (!referenceEl) {
    return null;
  }
  return setupPopper(referenceEl, el, {
    strategy: overlayPositioning,
    placement: getPlacement(el, placement),
    modifiers
  });
}
export async function updatePopper({ el, modifiers, placement: PopperPlacement, popper }) {
  const placement = getPlacement(el, PopperPlacement);
  await popper.setOptions({
    modifiers,
    placement
  });
}
export function hypotenuse(sideA, sideB) {
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}
const visiblePointerSize = 4;
export const defaultOffsetDistance = Math.ceil(hypotenuse(visiblePointerSize, visiblePointerSize));
