/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
function noopClick(){}function updateHostInteraction(e,t){if(t===void 0){t=false}if(e.disabled){e.el.setAttribute("tabindex","-1");e.el.setAttribute("aria-disabled","true");if(e.el.contains(document.activeElement)){document.activeElement.blur()}e.el.click=noopClick;return}e.el.click=HTMLElement.prototype.click;if(typeof t==="function"){e.el.setAttribute("tabindex",t.call(e)?"0":"-1")}else if(t===true){e.el.setAttribute("tabindex","0")}else if(t===false){e.el.removeAttribute("tabindex")}else;e.el.removeAttribute("aria-disabled")}export{updateHostInteraction as u};