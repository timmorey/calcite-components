import { computePosition, Placement, Strategy, flip, shift, hide } from "@floating-ui/dom";
import { getElementDir } from "./dom";

export type FloatingUIType = "menu" | "tooltip" | "popover";
export type OverlayPositioning = Strategy;

type VariationPlacement =
  | "leading-start"
  | "leading"
  | "leading-end"
  | "trailing-end"
  | "trailing"
  | "trailing-start"
  | "leading-leading"
  | "leading-trailing"
  | "trailing-leading"
  | "trailing-trailing"
  | "top-leading"
  | "top-trailing"
  | "bottom-leading"
  | "bottom-trailing"
  | "right-leading"
  | "right-trailing"
  | "left-leading"
  | "left-trailing";

export type LogicalPlacement = Placement | VariationPlacement;

export interface FloatingUIComponent {
  /**
   *
   */
  floatingEl: HTMLElement;

  /**
   *
   */
  floatingUIType: FloatingUIType;

  /**
   *
   */
  overlayPositioning?: OverlayPositioning;

  /**
   *
   */
  placement?: LogicalPlacement;

  /**
   *
   */
  referenceEl: HTMLElement;

  /**
   *
   */
  reposition(): Promise<void>;
}

export const FloatingCSS = {
  animation: "calcite-floating-ui-anim",
  animationActive: "calcite-floating-ui-anim--active"
};

export function getPlacement(floatingEl: HTMLElement, placement: LogicalPlacement): Placement {
  const placements = ["left", "right"];
  const variations = ["start", "end"];

  if (getElementDir(floatingEl) === "rtl") {
    placements.reverse();
    variations.reverse();
  }

  return placement
    .replace(/-leading/gi, `-${variations[0]}`)
    .replace(/-trailing/gi, `-${variations[1]}`)
    .replace(/leading/gi, placements[0])
    .replace(/trailing/gi, placements[1]) as Placement;
}

export async function positionFloatingUI({
  referenceEl,
  floatingEl,
  placement,
  overlayPositioning = "absolute",
  floatingUIType
}: {
  referenceEl: HTMLElement;
  floatingEl: HTMLElement;
  placement: LogicalPlacement;
  overlayPositioning: Strategy;
  floatingUIType: FloatingUIType;
}): Promise<void> {
  if (!referenceEl || !floatingEl) {
    return null;
  }

  const defaultMiddleware = [shift(), hide()];

  const middleware =
    floatingUIType === "menu"
      ? [
          flip({ fallbackPlacements: ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"] }),
          ...defaultMiddleware
        ]
      : defaultMiddleware;

  const {
    x,
    y,
    placement: computedPlacement,
    strategy: computedStrategy,
    middlewareData
  } = await computePosition(referenceEl, floatingEl, {
    strategy: overlayPositioning,
    placement: getPlacement(floatingEl, placement),
    middleware
  });

  const { referenceHidden } = middlewareData.hide;

  floatingEl.setAttribute("data-placement", computedPlacement);

  Object.assign(floatingEl.style, {
    visibility: referenceHidden ? "hidden" : null,
    position: computedStrategy,
    top: "0",
    left: "0",
    transform: `translate(${Math.round(x)}px,${Math.round(y)}px)`
  });
}

export function hypotenuse(sideA: number, sideB: number): number {
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}

const visiblePointerSize = 4;

export const defaultOffsetDistance = Math.ceil(hypotenuse(visiblePointerSize, visiblePointerSize));
