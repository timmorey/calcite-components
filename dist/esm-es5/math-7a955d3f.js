/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
var clamp=function(a,t,c){return Math.max(t,Math.min(a,c))};var decimalPlaces=function(a){var t=(""+a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);if(!t){return 0}return Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0))};export{clamp as c,decimalPlaces as d};