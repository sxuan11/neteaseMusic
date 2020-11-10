<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script lang="ts">
import { Vue  } from "vue-class-component";
import { getSong } from '@/server/mine/song'


export default class About extends Vue {
  mounted() {
    getSong().then((res)=>{
      console.log(res);
    })
  }
}
</script>
