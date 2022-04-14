/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import { q as queryElementRoots, d as closestElementCrossShadowBoundary } from './dom.js';

/**
 * Exported for testing purposes only
 * @internal
 */
const labelClickEvent = "calciteInternalLabelClick";
const labelConnectedEvent = "calciteInternalLabelConnected";
const labelDisconnectedEvent = "calciteInternaLabelDisconnected";
const labelTagName = "calcite-label";
const onLabelClickMap = new WeakMap();
const onLabelConnectedMap = new WeakMap();
const onLabelDisconnectedMap = new WeakMap();
const unlabeledComponents = new Set();
const findLabelForComponent = (componentEl) => {
  const { id } = componentEl;
  const forLabel = id && queryElementRoots(componentEl, { selector: `${labelTagName}[for="${id}"]` });
  if (forLabel) {
    return forLabel;
  }
  const parentLabel = closestElementCrossShadowBoundary(componentEl, labelTagName);
  if (!parentLabel ||
    // labelable components within other custom elements are not considered labelable
    hasAncestorCustomElements(parentLabel, componentEl)) {
    return null;
  }
  return parentLabel;
};
function hasAncestorCustomElements(label, componentEl) {
  let traversedElements;
  const customElementAncestorCheckEventType = "custom-element-ancestor-check";
  const listener = (event) => {
    event.stopImmediatePropagation();
    const composedPath = event.composedPath();
    traversedElements = composedPath.slice(composedPath.indexOf(componentEl), composedPath.indexOf(label));
  };
  label.addEventListener(customElementAncestorCheckEventType, listener, { once: true });
  componentEl.dispatchEvent(new CustomEvent(customElementAncestorCheckEventType, { composed: true, bubbles: true }));
  label.removeEventListener(customElementAncestorCheckEventType, listener);
  const ancestorCustomElements = traversedElements
    .filter((el) => el !== componentEl && el !== label)
    .filter((el) => { var _a; return (_a = el.tagName) === null || _a === void 0 ? void 0 : _a.includes("-"); });
  return ancestorCustomElements.length > 0;
}
/**
 * Helper to set up label interactions on connectedCallback.
 */
function connectLabel(component) {
  const labelEl = findLabelForComponent(component.el);
  if (onLabelClickMap.has(labelEl)) {
    return;
  }
  // const boundOnLabelConnected = onLabelConnected.bind(component);
  const boundOnLabelDisconnected = onLabelDisconnected.bind(component);
  if (labelEl) {
    const addClickEventListenerToComponentLabel = () => {
      component.labelEl = labelEl;
      const boundOnLabelClick = onLabelClick.bind(component);
      onLabelClickMap.set(component.labelEl, boundOnLabelClick);
      component.labelEl.addEventListener(labelClickEvent, boundOnLabelClick);
    };
    addClickEventListenerToComponentLabel();
    unlabeledComponents.delete(component);
    document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
    // document.removeEventListener(labelConnectedEvent, boundOnLabelConnected);
    onLabelDisconnectedMap.set(component, boundOnLabelDisconnected);
    document.addEventListener(labelDisconnectedEvent, boundOnLabelDisconnected);
  }
  else if (!labelEl && !unlabeledComponents.has(component)) {
    boundOnLabelDisconnected();
    // document.removeEventListener(labelDisconnectedEvent, boundOnLabelDisconnected);
    document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
  }
}
/**
 * Helper to tear down label interactions on disconnectedCallback on labelable components.
 */
function disconnectLabel(component) {
  // const boundOnLabelConnected = onLabelConnected.bind(component);
  // const boundOnLabelDisconnected = onLabelDisconnected.bind(component);
  unlabeledComponents.delete(component);
  document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
  document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
  // document.removeEventListener(labelConnectedEvent, boundOnLabelConnected);
  // document.removeEventListener(labelDisconnectedEvent, boundOnLabelDisconnected);
  if (!component.labelEl) {
    return;
  }
  const boundOnLabelClick = onLabelClickMap.get(component.labelEl);
  component.labelEl.removeEventListener(labelClickEvent, boundOnLabelClick);
  onLabelClickMap.delete(component.labelEl);
}
/**
 * Helper to get the label text from a component.
 */
function getLabelText(component) {
  var _a, _b;
  return component.label || ((_b = (_a = component.labelEl) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || "";
}
function onLabelClick(event) {
  if (this.disabled) {
    return;
  }
  const containedLabelableChildClicked = this.el.contains(event.detail.sourceEvent.target);
  if (containedLabelableChildClicked) {
    return;
  }
  this.onLabelClick(event);
}
function onLabelConnected() {
  if (unlabeledComponents.has(this)) {
    connectLabel(this);
  }
}
function onLabelDisconnected() {
  unlabeledComponents.add(this);
  const boundOnLabelConnected = onLabelConnected.bind(this);
  onLabelConnectedMap.set(this, boundOnLabelConnected);
  document.addEventListener(labelConnectedEvent, boundOnLabelConnected);
}

export { labelDisconnectedEvent as a, connectLabel as c, disconnectLabel as d, getLabelText as g, labelConnectedEvent as l };
