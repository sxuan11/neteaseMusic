const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      devTools: true
    }
  })
  process.env.NODE_ENV === 'dev' ? win.loadURL('http://localhost:3000') : win.loadFile('./dist/index.html')
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate',  ()=> {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
