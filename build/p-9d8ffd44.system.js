/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
System.register(["./p-40b4e596.system.js","./p-ac4aec20.system.js"],(function(e){"use strict";var t,n;return{setters:[function(e){t=e.f},function(e){n=e.c}],execute:function(){e({c:i,d:o});var r=new Set;var c;var s={childList:true};function i(e){if(!c){c=n("mutation",a)}c.observe(e.el,s)}function o(e){r.delete(e.el);a(c.takeRecords());c.disconnect();for(var t=0,n=r.entries();t<n.length;t++){var i=n[t][0];c.observe(i,s)}}function a(e){e.forEach((function(e){var n=e.target;t(n)}))}}}}));