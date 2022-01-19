<template>
  <div class="flex bg-pri items-center justify-between ele-drag">
    <div class="flex items-center">
      <div class="net-bar-logo mx-8"></div>
      <div class="w-64 h-10 flex items-center bg-pri-2 rounded-lg overflow-hidden">
        <div class="w-4 icon iconfont icon-icon-18 mx-3 text-gray-400"></div>
        <input type="text" class="w-60 h-10 bg-pri-2 outline-none text-gray-400 ele-no-drag" placeholder="搜索">
      </div>
    </div>
    <div class="flex">
      <div
          class="w-4 icon iconfont icon-icon-22 mx-4 text-gray-400 text-6xl cursor-pointer ele-no-drag"
          @click="showLogin">
      </div>
      <template v-if="isElectron()">
        <div
            class="w-4 icon iconfont icon-zuixiaohua mx-4 text-gray-400 text-6xl cursor-pointer ele-no-drag"
            @click="miniWindow">
        </div>
        <div
            class="w-4 icon iconfont mx-4 text-gray-400 text-6xl cursor-pointer ele-no-drag"
            :class="isMax ? 'icon-zuixiaohua1' : 'icon-zuidahua'"
            @click="maxWindow">
        </div>
        <div
            class="w-4 icon iconfont icon-guanbi mx-4 text-gray-400 text-6xl cursor-pointer ele-no-drag"
            @click="closeWindow">
        </div>
      </template>
    </div>
  </div>
  <teleport to="body">
    <Login ref="loginRef"/>
  </teleport>
</template>

<script setup lang="ts">
import Login from '../login/index.vue';
import {isElectron} from '../../utils/isElectron'
import {onMounted, ref} from "vue";
import {useStore} from "vuex";
import {throttle} from 'lodash-es'

const store = useStore();

const loginRef = ref();
const showLogin = () => {
  loginRef.value.showLogin();
}

const miniWindow = () => {
  store.commit('electron/miniWindow');
}

let isMax = ref(false);
const maxWindow = async () => {
  isMax.value = await store.state.electron.ipc.ipcRenderer.invoke('win-isMaximized');
  store.commit('electron/maxOrUnmaxWindow', isMax.value);
}
const checkIsMax = async () => {
  isMax.value = await store.state.electron.ipc.ipcRenderer.invoke('win-isMaximized')
}
isElectron() && onMounted(() => {
  window.addEventListener('resize', throttle(checkIsMax, 1000));
})

const closeWindow = () => {
  store.commit('electron/closeWindow');
}
</script>

<style scoped lang="scss">
.net-bar-logo {
  background: url("./img/topbar.png") no-repeat 0 0;
  width: 176px;
  height: 69px;
}
</style>
