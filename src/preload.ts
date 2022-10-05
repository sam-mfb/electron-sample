import { contextBridge } from "electron";

type Versions = {
  node: () => string;
  chrome: () => string;
  electron: () => string;
};

declare global {
  interface Window {
    versions: Versions;
  }
}

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});
