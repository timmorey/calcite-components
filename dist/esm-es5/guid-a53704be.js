/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
function gen(n){return n.map((function(n){var r="";for(var t=0;t<n;t++){r+=((1+Math.random())*65536|0).toString(16).substring(1)}return r})).join("-")}var guid=function(){return gen([2,1,1,1,3])};export{guid as g};