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
      const yaml = YAML.parse(buffer.toString());
      resolve(yaml);
    });
  });
}
const PathfinderProcess = {
  load_feature(event, section, name) {
    const filePath = path__namespace.join(DatabaseBasePath, section, name + ".yml");
    return read_yaml(filePath);
  },
  async list_entries(event, section) {
    const section_path = path__namespace.join(DatabaseBasePath, section);
    return (await list_files(section_path)).map((file) => file.replace(".yml", ""));
  },
  list_sections() {
    return list_files(DatabaseBasePath);
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
