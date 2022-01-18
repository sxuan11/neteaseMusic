export default {
  state() {
    return {
      app: ''
    }
  },
  mutations: {
    setApp(state, data) {
      state.app = data;
    }
  }
}
