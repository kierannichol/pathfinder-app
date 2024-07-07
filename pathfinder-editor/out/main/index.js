"use strict";
const electron = require("electron");
const path = require("path");
const utils = require("@electron-toolkit/utils");
const fs = require("fs");
const YAML = require("yaml");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const path__namespace = /* @__PURE__ */ _interopNamespaceDefault(path);
const fs__namespace = /* @__PURE__ */ _interopNamespaceDefault(fs);
const icon = path.join(__dirname, "../../resources/icon.png");
const DatabaseBasePath = path__namespace.join(__dirname, "..", "..", "..", "pathfinder-generator", "src", "main", "resources", "db");
function list_files(path2) {
  return new Promise((resolve, reject) => {
    fs__namespace.readdir(path2, function(err, files) {
      if (err) {
        reject(err);
        return;
      }
      resolve(files);
    });
  });
}
function read_yaml(path2) {
  return new Promise((resolve, reject) => {
    fs__namespace.readFile(path2, function(err, buffer) {
      if (err) {
        reject(err);
        return;
      }
      const dbo = YAML.parse(buffer.toString());
      resolve(dbo);
    });
  });
}
function write_yaml(path2, dbo) {
  return new Promise((resolve, reject) => {
    try {
      const yaml = YAML.stringify(dbo, null, 2);
      fs__namespace.writeFileSync(path2, yaml);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}
const PathfinderProcess = {
  async save_feature(event, model) {
    const filePath = path__namespace.join(DatabaseBasePath, model.segmentKey, model.featureKey) + ".yml";
    await write_yaml(filePath, model);
  },
  async load_feature(event, featureKey) {
    const filePath = path__namespace.join(DatabaseBasePath, featureKey.segmentKey, featureKey.featureKey + ".yml");
    const dbo = await read_yaml(filePath);
    dbo.segmentKey = featureKey.segmentKey;
    dbo.featureKey = featureKey.featureKey;
    return dbo;
  },
  async list_features(event, segmentKey) {
    const section_path = path__namespace.join(DatabaseBasePath, segmentKey);
    return (await list_files(section_path)).filter((file) => file.endsWith(".yml")).map((file) => file.replace(".yml", "")).map((featureKey) => {
      return {
        segmentKey,
        featureKey
      };
    });
  },
  async list_segments() {
    const files = await list_files(DatabaseBasePath);
    return files.filter((file) => fs__namespace.lstatSync(path__namespace.join(DatabaseBasePath, file)).isDirectory());
  }
};
function createWindow() {
  const mainWindow = new electron.BrowserWindow({
    width: 2e3,
    height: 1e3,
    show: false,
    autoHideMenuBar: true,
    ...process.platform === "linux" ? { icon } : {},
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      sandbox: false
    }
  });
  Object.keys(PathfinderProcess).forEach((key) => electron.ipcMain.handle(key, PathfinderProcess[key]));
  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });
  mainWindow.webContents.setWindowOpenHandler((details) => {
    electron.shell.openExternal(details.url);
    return { action: "deny" };
  });
  if (utils.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));
  }
}
electron.app.whenReady().then(() => {
  utils.electronApp.setAppUserModelId("com.pathfinder.editor");
  electron.app.on("browser-window-created", (_, window) => {
    utils.optimizer.watchWindowShortcuts(window);
  });
  createWindow();
  electron.app.on("activate", function() {
    if (electron.BrowserWindow.getAllWindows().length === 0)
      createWindow();
  });
});
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
