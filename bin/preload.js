"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld("versions", {
    node: function () { return process.versions.node; },
    chrome: function () { return process.versions.chrome; },
    electron: function () { return process.versions.electron; },
});
electron_1.contextBridge.exposeInMainWorld("files", {
    readIndex: function () { return electron_1.ipcRenderer.invoke("readIndex"); },
});
