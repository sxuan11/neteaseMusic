import { createStore } from 'vuex'
import electron from "./electron";

const store = createStore({
  modules: {
    electron
  }
})

export default store;
