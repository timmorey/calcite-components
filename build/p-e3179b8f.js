/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
import{f as t}from"./p-687deef3.js";import{c as o}from"./p-0a5d059d.js";const n=new Set;let s;const c={childList:!0};function f(t){s||(s=o("mutation",a)),s.observe(t.el,c)}function i(t){n.delete(t.el),a(s.takeRecords()),s.disconnect();for(const[t]of n.entries())s.observe(t,c)}function a(o){o.forEach((({target:o})=>{t(o)}))}export{f as c,i as d}