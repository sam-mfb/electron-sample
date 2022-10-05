import { app, BrowserWindow, ipcMain } from "electron";
import { readFile } from "fs/promises";
import path from "path";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("../index.html");
  ipcMain.handle("readIndex", async () => {
    return readFile(path.join(__dirname, "..", "index.html"), "utf-8");
  });
};

app.whenReady().then(() => {
  createWindow();
});
