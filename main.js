const { app, BrowserWindow } = require('electron');
require('electron-reload')(__dirname);

app.on('ready', () => {
  const mainWindow = new BrowserWindow({});
  mainWindow.loadFile('index.html');
});
