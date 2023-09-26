"use strict";
const electron = require("electron");
const preload = require("@electron-toolkit/preload");
const api = {
  list_sections: () => electron.ipcRenderer.invoke("list_sections"),
  list_entries: (section) => electron.ipcRenderer.invoke("list_entries", section),
  load_feature: (section, name) => electron.ipcRenderer.invoke("load_feature", section, name)
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
