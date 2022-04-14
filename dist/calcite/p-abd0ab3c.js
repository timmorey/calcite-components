/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import{f as t}from"./p-778443d9.js";import{c as o}from"./p-d2c3e3c8.js";const c=new Set;let n;const s={childList:!0};function f(t){n||(n=o("mutation",r)),n.observe(t.el,s)}function i(t){c.delete(t.el),r(n.takeRecords()),n.disconnect();for(const[t]of c.entries())n.observe(t,s)}function r(o){o.forEach((({target:o})=>{t(o)}))}export{f as c,i as d}