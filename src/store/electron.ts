export default {
  namespaced: true,

  state() {
    return {
      ipc: ''
    }
  },
  mutations: {
    setEleIpc(state, data) {
      state.ipc = data;
    },
    miniWindow(state) {
      state.ipc.ipcRenderer.send('win-min-window');
    },
    maxOrUnmaxWindow(state, isMax) {
      state.ipc.ipcRenderer.send('win-max-unmax-window', isMax);
    },
    closeWindow(state) {
      state.ipc.ipcRenderer.send('win-close-window');
    }
  }
}
