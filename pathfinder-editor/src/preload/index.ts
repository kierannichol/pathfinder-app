import {contextBridge, ipcRenderer} from 'electron'
import {electronAPI} from '@electron-toolkit/preload'
import {FeatureKey, FeatureRef, PathfinderAPI} from "../shared/pathfinder";
import {data} from "../shared/compiled";


// Custom APIs for renderer
const api: PathfinderAPI = {
  list_segments: (): Promise<string[]> => ipcRenderer.invoke('list_segments'),
  list_features: (segmentKey: string): Promise<FeatureKey[]> => ipcRenderer.invoke('list_features', segmentKey),
  load_feature: (featureKey: FeatureKey): Promise<FeatureRef> => ipcRenderer.invoke('load_feature', featureKey),
  save_feature: (model: FeatureRef): Promise<void> => ipcRenderer.invoke('save_feature', model)
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
