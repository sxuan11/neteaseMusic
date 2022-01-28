<template>
  <div v-if="isShow" class="shadow-xl w-screen h-screen fixed">
    <div
        class="w-4 icon iconfont icon-guanbi mx-4 text-gray-400 text-6xl cursor-pointer ele-no-drag"
        @click="closeLoginWindow"
    >close icon</div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import {useStore} from "vuex";

const store = useStore();
// const initLeft = ref('100px');
let isShow = ref(true);

watch(
    () => isShow.value,
    (value)=>{
      console.log(value, 'isShow')
    }
)

const showLogin = () => {
  isShow.value = true
}

const closeLoginWindow = () => {
  store.commit('electron/closeLoginWindow')
}

defineExpose({
  showLogin
})

</script>

<style scoped>

</style>
