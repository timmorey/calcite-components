/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
System.register([],(function(e){"use strict";return{execute:function(){e("u",i);function t(){}function i(e,i){if(i===void 0){i=false}if(e.disabled){e.el.setAttribute("tabindex","-1");e.el.setAttribute("aria-disabled","true");if(e.el.contains(document.activeElement)){document.activeElement.blur()}e.el.click=t;return}e.el.click=HTMLElement.prototype.click;if(typeof i==="function"){e.el.setAttribute("tabindex",i.call(e)?"0":"-1")}else if(i===true){e.el.setAttribute("tabindex","0")}else if(i===false){e.el.removeAttribute("tabindex")}else;e.el.removeAttribute("aria-disabled")}}}}));