"use strict";
var information = document.getElementById("info");
//@ts-ignore
information.innerText = "This app is using Chrome (v".concat(versions.chrome(), "), Node.js (v").concat(versions.node(), "), and Electron (v").concat(versions.electron(), ")");
