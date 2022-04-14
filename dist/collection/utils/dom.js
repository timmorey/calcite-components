/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { CSS_UTILITY } from "./resources";
import { guid } from "./guid";
/**
 * This helper will guarantee an ID on the provided element.
 *
 * If it already has an ID, it will be preserved, otherwise a unique one will be generated and assigned.
 *
 * @returns {string} The element's ID.
 */
export function ensureId(el) {
  if (!el) {
    return "";
  }
  return (el.id = el.id || `${el.tagName.toLowerCase()}-${guid()}`);
}
export function nodeListToArray(nodeList) {
  return Array.isArray(nodeList) ? nodeList : Array.from(nodeList);
}
export function getThemeName(el) {
  const closestElWithTheme = closestElementCrossShadowBoundary(el, `.${CSS_UTILITY.darkTheme}, .${CSS_UTILITY.lightTheme}`);
  return (closestElWithTheme === null || closestElWithTheme === void 0 ? void 0 : closestElWithTheme.classList.contains("calcite-theme-dark")) ? "dark" : "light";
}
export function getElementDir(el) {
  const prop = "dir";
  const selector = `[${prop}]`;
  const closest = closestElementCrossShadowBoundary(el, selector);
  return closest ? closest.getAttribute(prop) : "ltr";
}
export function getElementProp(el, prop, fallbackValue) {
  const selector = `[${prop}]`;
  const closest = el.closest(selector);
  return closest ? closest.getAttribute(prop) : fallbackValue;
}
export function getRootNode(el) {
  return el.getRootNode();
}
export function getHost(root) {
  return root.host || null;
}
/**
 * This helper queries an element's rootNodes and any ancestor rootNodes.
 *
 * @returns {Element[]} The elements.
 */
export function queryElementsRoots(element, selector) {
  // Gets the rootNode and any ancestor rootNodes (shadowRoot or document) of an element and queries them for a selector.
  // Based on: https://stackoverflow.com/q/54520554/194216
  function queryFromAll(el, allResults) {
    if (!el) {
      return allResults;
    }
    if (el.assignedSlot) {
      el = el.assignedSlot;
    }
    const rootNode = getRootNode(el);
    const results = Array.from(rootNode.querySelectorAll(selector));
    const uniqueResults = results.filter((result) => !allResults.includes(result));
    allResults = [...allResults, ...uniqueResults];
    const host = getHost(rootNode);
    return host ? queryFromAll(host, allResults) : allResults;
  }
  return queryFromAll(element, []);
}
/**
 * This helper queries an element's rootNode and any ancestor rootNodes.
 *
 * If both an 'id' and 'selector' are supplied, 'id' will take precedence over 'selector'.
 *
 * @returns {Element} The element.
 */
export function queryElementRoots(element, { selector, id }) {
  // Gets the rootNode and any ancestor rootNodes (shadowRoot or document) of an element and queries them for a selector.
  // Based on: https://stackoverflow.com/q/54520554/194216
  function queryFrom(el) {
    if (!el) {
      return null;
    }
    if (el.assignedSlot) {
      el = el.assignedSlot;
    }
    const rootNode = getRootNode(el);
    const found = id
      ? "getElementById" in rootNode
        ? /*
          Check to make sure 'getElementById' exists in cases where element is no longer connected to the DOM and getRootNode() returns the element.
          https://github.com/Esri/calcite-components/pull/4280
           */
          rootNode.getElementById(id)
        : null
      : selector
        ? rootNode.querySelector(selector)
        : null;
    const host = getHost(rootNode);
    return found ? found : host ? queryFrom(host) : null;
  }
  return queryFrom(element);
}
export function closestElementCrossShadowBoundary(element, selector) {
  // based on https://stackoverflow.com/q/54520554/194216
  function closestFrom(el) {
    return el ? el.closest(selector) || closestFrom(getHost(getRootNode(el))) : null;
  }
  return closestFrom(element);
}
export function isCalciteFocusable(el) {
  return typeof (el === null || el === void 0 ? void 0 : el.setFocus) === "function";
}
export async function focusElement(el) {
  if (!el) {
    return;
  }
  return isCalciteFocusable(el) ? el.setFocus() : el.focus();
}
const defaultSlotSelector = ":not([slot])";
export function getSlotted(element, slotName, options) {
  if (slotName && !Array.isArray(slotName) && typeof slotName !== "string") {
    options = slotName;
    slotName = null;
  }
  const slotSelector = slotName
    ? Array.isArray(slotName)
      ? slotName.map((name) => `[slot="${name}"]`).join(",")
      : `[slot="${slotName}"]`
    : defaultSlotSelector;
  if (options === null || options === void 0 ? void 0 : options.all) {
    return queryMultiple(element, slotSelector, options);
  }
  return querySingle(element, slotSelector, options);
}
function getDirectChildren(el, selector) {
  return el ? Array.from(el.children || []).filter((child) => child === null || child === void 0 ? void 0 : child.matches(selector)) : [];
}
function queryMultiple(element, slotSelector, options) {
  let matches = slotSelector === defaultSlotSelector
    ? getDirectChildren(element, defaultSlotSelector)
    : Array.from(element.querySelectorAll(slotSelector));
  matches = options && options.direct === false ? matches : matches.filter((el) => el.parentElement === element);
  matches = (options === null || options === void 0 ? void 0 : options.matches) ? matches.filter((el) => el === null || el === void 0 ? void 0 : el.matches(options.matches)) : matches;
  const selector = options === null || options === void 0 ? void 0 : options.selector;
  return selector
    ? matches
      .map((item) => Array.from(item.querySelectorAll(selector)))
      .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], [])
      .filter((match) => !!match)
    : matches;
}
function querySingle(element, slotSelector, options) {
  let match = slotSelector === defaultSlotSelector
    ? getDirectChildren(element, defaultSlotSelector)[0] || null
    : element.querySelector(slotSelector);
  match = options && options.direct === false ? match : (match === null || match === void 0 ? void 0 : match.parentElement) === element ? match : null;
  match = (options === null || options === void 0 ? void 0 : options.matches) ? ((match === null || match === void 0 ? void 0 : match.matches(options.matches)) ? match : null) : match;
  const selector = options === null || options === void 0 ? void 0 : options.selector;
  return selector ? match === null || match === void 0 ? void 0 : match.querySelector(selector) : match;
}
export function filterDirectChildren(el, selector) {
  return Array.from(el.children).filter((child) => child.matches(selector));
}
// set a default icon from a defined set or allow an override with an icon name string
export function setRequestedIcon(iconObject, iconValue, matchedValue) {
  if (typeof iconValue === "string" && iconValue !== "") {
    return iconValue;
  }
  else if (iconValue === "") {
    return iconObject[matchedValue];
  }
}
export function intersects(rect1, rect2) {
  return !(rect2.left > rect1.right ||
    rect2.right < rect1.left ||
    rect2.top > rect1.bottom ||
    rect2.bottom < rect1.top);
}
