<template>
  <div>
    <Header />
  </div>
</template>

<script setup lang="ts">
import Header from './header/index.vue';
import {useStore} from "vuex";
const store = useStore();
store.commit('electron/setEleIpc', (window as any).eleApi)
</script>

<style scoped>

</style>
