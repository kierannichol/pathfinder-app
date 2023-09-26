import {contextBridge, ipcRenderer} from 'electron'
import {electronAPI} from '@electron-toolkit/preload'
import FeatureModel, {PathfinderAPI} from "./pathfinder";

// Custom APIs for renderer
const api: PathfinderAPI = {
  list_sections: () => ipcRenderer.invoke('list_sections'),
  list_entries: (section: string) => ipcRenderer.invoke('list_entries', section),
  load_feature: (section: string, name: string): Promise<FeatureModel> => ipcRenderer.invoke('load_feature', section, name)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
