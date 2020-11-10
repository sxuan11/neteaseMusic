<template>
  <div class="index">
    <van-form @submit="onSubmit">
      <van-field
          v-model="username"
          name="email"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true,  message: '请填写用户名' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { emailLogin } from '@/server/mine/login'
export default class Index extends Vue {
  username:string = 'sxuan10@163.com'
  password:string = ''

  onSubmit(values:object){
    emailLogin(values).then((res:any)=>{
      if(res.code === 502){

      }else {
        console.log(res);
      }
    })
  }
}
</script>

<style lang="scss">

</style>
