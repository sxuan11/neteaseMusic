<template>
  <div v-if="isShow" class="shadow-xl w-96 h-60 fixed" :style="{left: initLeft}">
    <div>header</div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";

const initLeft = ref('100px');
let isShow = ref(false);

watch(
    () => isShow.value,
    (value)=>{
      console.log(value, 'isShow')
    }
)

const showLogin = () => {
  isShow.value = true
}

defineExpose({
  showLogin
})

</script>

<style scoped>

</style>