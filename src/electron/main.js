const { app, BrowserWindow, Menu, BrowserView } = require('electron');
const path = require("path");
const { startListener } = require('./ipcMain')
let win;
const createWindow = async () => {
  win = new BrowserWindow({
    width: 1020,
    height: 670,
    frame: false,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      preload: path.join(__dirname, './preload.js')
    }
  })
  process.env.NODE_ENV === 'dev' && await loadVueDevTools();
  startListener(win)
  process.env.NODE_ENV === 'dev' ? await win.loadURL('http://localhost:8080/') : await win.loadFile('./dist/index.html')
  win.webContents.openDevTools();
}

const loadVueDevTools = async () => {
  const ses = win.webContents.session;
  await ses.loadExtension(path.join(__dirname, '../../vue-devtools'))
}

app.whenReady().then(async () => {
  await createWindow()

  Menu.setApplicationMenu(null);
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


module.exports = {
  win
};
