<template>
  <div class="flex bg-pri items-center justify-between">
    <div class="flex items-center">
      <div class="net-bar-logo mx-8"></div>
      <div class="w-64 h-10 flex items-center bg-pri-2 rounded-lg overflow-hidden">
        <div class="w-4 icon iconfont icon-icon-18 mx-3 text-gray-400"></div>
        <input type="text" class="w-60 h-10 bg-pri-2 outline-none text-gray-400" placeholder="搜索">
      </div>
    </div>
    <div class="flex">
      <div class="w-4 icon iconfont icon-icon-22 mx-4 text-gray-400 text-6xl cursor-pointer"
           @click="showLogin"></div>
    </div>
  </div>
  <teleport to="body">
    <Login ref="loginRef"/>
  </teleport>
</template>

<script setup lang="ts">
import Login from '../login/index.vue';
import {ref} from "vue";

const loginRef = ref();
const showLogin = () => {
  loginRef.value.showLogin();
}
</script>

<style scoped lang="scss">
.net-bar-logo {
  background: url("./img/topbar.png") no-repeat 0 0;
  width: 176px;
  height: 69px;
}
</style>