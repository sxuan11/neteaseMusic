<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import {useStore} from "vuex";
const store = useStore();
store.commit('electron/setEleIpc', (window as any).eleApi)
</script>
