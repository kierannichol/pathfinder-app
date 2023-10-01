import {contextBridge, ipcRenderer} from 'electron'
import {electronAPI} from '@electron-toolkit/preload'
import {PathfinderAPI} from "./pathfinder";
import {data} from "./compiled";
import FeatureDbo = data.FeatureDbo;

// Custom APIs for renderer
const api: PathfinderAPI = {
  list_sources: () => ipcRenderer.invoke('list_sources'),
  list_features: (sourceKey: string) => ipcRenderer.invoke('list_features', sourceKey),
  load_feature: (sourceKey: string, featureKey: string): Promise<FeatureDbo> => ipcRenderer.invoke('load_feature', sourceKey, featureKey),
  save_feature: (sourceKey: string, featureKey: string, model: FeatureDbo): Promise<void> => ipcRenderer.invoke('save_feature', sourceKey, featureKey, model)
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
