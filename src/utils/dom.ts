import { CalciteTheme } from "../components/interfaces";

export function nodeListToArray<T extends Element>(nodeList: HTMLCollectionOf<T> | NodeListOf<T> | T[]): T[] {
  return Array.isArray(nodeList) ? nodeList : Array.from(nodeList);
}

type Direction = "ltr" | "rtl";

export function getElementDir(el: HTMLElement): Direction {
  return getElementProp(el, "dir", "ltr") as Direction;
}

export function getElementTheme(el: HTMLElement): CalciteTheme {
  return getElementProp(el, "theme", "light") as CalciteTheme;
}

export function propToAttr(name: string): string {
  return name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

export function getElementProp<T>(el: HTMLElement, propName: string, fallbackValue: T): T {
  const closestWithProp = el.closest(`[${propToAttr(propName)}]`);
  return closestWithProp ? closestWithProp[propName] : fallbackValue;
}

export function getElementAttr(el: HTMLElement, attrName: string, fallbackValue: string): string {
  const closestWithProp = el.closest(`[${attrName}]`);
  return closestWithProp ? closestWithProp.getAttribute(attrName) : fallbackValue;
}

export interface CalciteFocusableElement extends HTMLElement {
  setFocus?: () => void;
}

export function focusElement(el: CalciteFocusableElement): void {
  if (!el) {
    return;
  }

  typeof el.setFocus === "function" ? el.setFocus() : el.focus();
}

interface GetSlottedOptions {
  all?: boolean;
  direct?: boolean;
  selector?: string;
}

export function getSlotted<T extends Element = Element>(
  element: Element,
  slotName: string,
  options: GetSlottedOptions & { all: true }
): T[];
export function getSlotted<T extends Element = Element>(
  element: Element,
  slotName: string,
  options?: GetSlottedOptions
): T | null;
export function getSlotted<T extends Element = Element>(
  element: Element,
  slotName: string,
  options?: GetSlottedOptions
): (T | null) | T[] {
  const slotSelector = `[slot="${slotName}"]`;

  if (options?.all) {
    return queryMultiple<T>(element, slotSelector, options);
  }

  return querySingle<T>(element, slotSelector, options);
}

function queryMultiple<T extends Element = Element>(
  element: Element,
  slotSelector: string,
  options?: GetSlottedOptions
): T[] {
  let matches = Array.from(element.querySelectorAll<T>(slotSelector));
  matches = options && options.direct === false ? matches : matches.filter((el) => el.parentElement === element);

  const selector = options?.selector;
  return selector
    ? matches
        .map((item) => Array.from(item.querySelectorAll<T>(selector)))
        .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], [])
        .filter((match) => !!match)
    : matches;
}

function querySingle<T extends Element = Element>(
  element: Element,
  slotSelector: string,
  options?: GetSlottedOptions
): T | null {
  let match = element.querySelector<T>(slotSelector);
  match = options && options.direct === false ? match : match?.parentElement === element ? match : null;

  const selector = options?.selector;
  return selector ? match.querySelector<T>(selector) : match;
}

export function filterDirectChildren<T extends Element>(el: Element, selector: string): T[] {
  return Array.from(el.children).filter((child): child is T => child.matches(selector));
}

export function getDescribedByElement<T extends Element>(element: Element): T | HTMLElement | null {
  const id = element?.getAttribute("aria-describedby");

  return (id && document.getElementById(id)) || null;
}

export function hasLabel(labelEl: HTMLCalciteLabelElement, el: HTMLElement) {
  return labelEl.contains(el);
}
