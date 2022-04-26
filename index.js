const { app, BrowserWindow } = require("electron");
const path = require("path");

app.on("ready", () => {
  console.log("App is running");
  const mainWindow = new BrowserWindow({});
  mainWindow.loadFile(path.join(__dirname, "index.html"));
});
