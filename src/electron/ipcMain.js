const { ipcMain } = require('electron');

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
  ipcMain.handle('win-isMaximized', (event) => {
    return win.isMaximized();
  })
}

module.exports = {
  startListener
}

