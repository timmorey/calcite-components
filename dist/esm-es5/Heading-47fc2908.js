/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import{h}from"./index-73638693.js";function constrainHeadingLevel(e){return Math.min(Math.max(Math.ceil(e),1),6)}var Heading=function(e,n){var a="h".concat(e.level);delete e.level;return h(a,Object.assign({},e),n)};export{Heading as H,constrainHeadingLevel as c};