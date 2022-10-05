"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var createWindow = function () {
    var win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
    });
    win.loadFile("index.html");
};
electron_1.app.whenReady().then(function () {
    createWindow();
});
