const { ipcMain, BrowserWindow, BrowserView } = require('electron')
let loginChild;

function startListener(win) {
  /**
   * 最小化窗口
   */
  ipcMain.on('win-min-window', () => {
    win.minimize()
  })
  /**
   * 最大化窗口和取消最大化窗口
   */
  ipcMain.on('win-max-unmax-window', (event, isMax) => {
    console.log(isMax, 'isMax');
    isMax ? win.unmaximize() : win.maximize()
  })
  /**
   * 关闭窗口
   */
  ipcMain.on('win-close-window', (event,) => {
    win.close()
  })
  /**
   * 获取是否已经最大化
   */
  ipcMain.handle('win-isMaximized', (event) => {
    return win.isMaximized();
  })
  /**
   * 调起登录子窗口
   */
  ipcMain.on('win-openWindow-login', async (event) => {
    console.log(win);
    loginChild = new BrowserWindow({
      parent: win,
      frame: false,
      width: 437,
      height: 662
    })
    process.env.NODE_ENV === 'dev' ? await loginChild.loadURL('http://localhost:8080/#/login') : await loginChild.loadFile('./dist/index.html/#/login')
  })
  /**
   * 关闭登录子窗口
   */
  ipcMain.on('win-closeWindow-login', async (event) => {
    loginChild.close();
  })
}

module.exports = {
  startListener
}

