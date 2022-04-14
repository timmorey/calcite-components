/**
 * This helper will guarantee an ID on the provided element.
 *
 * If it already has an ID, it will be preserved, otherwise a unique one will be generated and assigned.
 *
 * @returns {string} The element's ID.
 */
export declare function ensureId(el: Element): string;
export declare function nodeListToArray<T extends Element>(nodeList: HTMLCollectionOf<T> | NodeListOf<T> | T[]): T[];
export declare type Direction = "ltr" | "rtl";
export declare function getThemeName(el: HTMLElement): "light" | "dark";
export declare function getElementDir(el: HTMLElement): Direction;
export declare function getElementProp(el: Element, prop: string, fallbackValue: any): any;
export declare function getRootNode(el: Element): Document | ShadowRoot;
export declare function getHost(root: Document | ShadowRoot): Element | null;
/**
 * This helper queries an element's rootNodes and any ancestor rootNodes.
 *
 * @returns {Element[]} The elements.
 */
export declare function queryElementsRoots<T extends Element = Element>(element: Element, selector: string): T[];
/**
 * This helper queries an element's rootNode and any ancestor rootNodes.
 *
 * If both an 'id' and 'selector' are supplied, 'id' will take precedence over 'selector'.
 *
 * @returns {Element} The element.
 */
export declare function queryElementRoots<T extends Element = Element>(element: Element, { selector, id }: {
  selector?: string;
  id?: string;
}): T | null;
export declare function closestElementCrossShadowBoundary<T extends Element = Element>(element: Element, selector: string): T | null;
export interface FocusableElement extends HTMLElement {
  setFocus?: () => Promise<void>;
}
export declare function isCalciteFocusable(el: FocusableElement): boolean;
export declare function focusElement(el: FocusableElement): Promise<void>;
interface GetSlottedOptions {
  all?: boolean;
  direct?: boolean;
  matches?: string;
  selector?: string;
}
export declare function getSlotted<T extends Element = Element>(element: Element, slotName: string | string[] | (GetSlottedOptions & {
  all: true;
}), options: GetSlottedOptions & {
  all: true;
}): T[];
export declare function getSlotted<T extends Element = Element>(element: Element, slotName?: string | string[] | GetSlottedOptions, options?: GetSlottedOptions): T | null;
export declare function filterDirectChildren<T extends Element>(el: Element, selector: string): T[];
export declare function setRequestedIcon(iconObject: Record<string, string>, iconValue: string | boolean, matchedValue: string): string;
export declare function intersects(rect1: DOMRect, rect2: DOMRect): boolean;
export {};
