const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('eleApi', {
  ipcRenderer,
})
