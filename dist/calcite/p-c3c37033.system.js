/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
System.register(["./p-6a9fef86.system.js","./p-e2afe2fb.system.js"],(function(e){"use strict";var t,n;return{setters:[function(e){t=e.f},function(e){n=e.c}],execute:function(){e({c:f,d:i});var r=new Set;var s;var c={childList:true};function f(e){if(!s){s=n("mutation",o)}s.observe(e.el,c)}function i(e){r.delete(e.el);o(s.takeRecords());s.disconnect();for(var t=0,n=r.entries();t<n.length;t++){var f=n[t][0];s.observe(f,c)}}function o(e){e.forEach((function(e){var n=e.target;t(n)}))}}}}));