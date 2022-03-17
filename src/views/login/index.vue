<template>
  <div class="flex flex-col shadow-xl w-screen h-screen ele-drag">
    <div
        class="w-10 h-10 icon iconfont icon-guanbi text-gray-400 text-6xl cursor-pointer ele-no-drag fixed top-1 right-1"
        @click="closeLoginWindow"
    ></div>
    <div class="flex-auto flex flex-col  items-center">
      <div class="text-4xl my-10">扫码登录</div>
      <div class="m">
        <div><img src="../../assets/img/qr_guide.png" alt=""></div>
        <div><img :src="qrCode" alt=""></div>
      </div>
      <div>使用网易云音乐APP扫码登录</div>
    </div>
    <div class="h-2/6">选择其他登录方式></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { createLoginKey, getLoginQrcode } from '../../api/login'

const store = useStore();
// const initLeft = ref('100px');
let isShow = ref(true);
let key = ref('');
let qrCode = ref('');

watch(
    () => isShow.value,
    (value) => {
      console.log(value, 'isShow')
    }
)

onMounted(async ()=>{
  get()
  // await getKeyAndCode()
})

const getKeyAndCode = async () => {
  const res = await createLoginKey();
  if(res.status === 200) {
    key.value = res.data.unikey;
    const qrcode = await getLoginQrcode(key.value);
    qrCode.value = qrcode.data.qrimg;
  }
}

const showLogin = () => {
  isShow.value = true
}

const closeLoginWindow = () => {
  console.log('closeLoginWindow');
  console.log(store, 'store');
  store.commit('electron/closeLoginWindow')
}

defineExpose({
  showLogin
})

</script>

<style scoped>

</style>
