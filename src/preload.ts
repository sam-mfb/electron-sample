import { contextBridge, ipcRenderer } from "electron";

type Versions = {
  node: () => string;
  chrome: () => string;
  electron: () => string;
};

type Files = {
  readIndex: () => Promise<string>;
};

declare global {
  interface Window {
    versions: Versions;
    files: Files;
  }
}

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});

contextBridge.exposeInMainWorld("files", {
  readIndex: () => ipcRenderer.invoke("readIndex"),
});
