import {ElectronAPI} from '@electron-toolkit/preload'
import {PathfinderAPI} from "../shared/pathfinder";

declare global {
  interface Window {
    electron: ElectronAPI
    api: PathfinderAPI
  }
}
