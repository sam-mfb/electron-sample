"use strict";
var information = document.getElementById("info");
information.innerText = "This app is using Chrome (v".concat(window.versions.chrome(), "), Node.js (v").concat(window.versions.node(), "), and Electron (v").concat(window.versions.electron(), ")");
