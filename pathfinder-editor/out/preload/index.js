"use strict";
const electron = require("electron");
const preload = require("@electron-toolkit/preload");
const api = {
  list_segments: () => electron.ipcRenderer.invoke("list_segments"),
  list_features: (segmentKey) => electron.ipcRenderer.invoke("list_features", segmentKey),
  load_feature: (featureKey) => electron.ipcRenderer.invoke("load_feature", featureKey),
  save_feature: (model) => electron.ipcRenderer.invoke("save_feature", model)
};
if (process.contextIsolated) {
  try {
    electron.contextBridge.exposeInMainWorld("electron", preload.electronAPI);
    electron.contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = preload.electronAPI;
  window.api = api;
}
