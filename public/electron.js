const electron = require("electron");
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;
const { app, BrowserWindow, ipcMain } = electron;
const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");

let mainWindow;

ipcMain.on("website:create:request", (event, site) => {
  console.log(site);
  event.returnValue = `CREATE ${site}`;
});

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680 });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  // mainWindow.on("closed", () => (mainWindow = null));
  mainWindow.on("closed", () => app.quit());
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
