<template>
  <div class="ue-status-change">
    <div class="box">
      <EffectSuccess v-show="show"></EffectSuccess>
    </div>
    <div class="btn">
      <van-switch v-model="show"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Switch } from 'vant'
import EffectSuccess from '@/components/effect-success'

Vue.use(Switch)

export default {
  name: 'UeStatusChange',
  components: {
    EffectSuccess
  },
  data() {
    return {
      show: true
    }
  }
}
</script>

<style lang="scss" scoped>
.ue-status-change {
  padding: 10px;
}
.box {
  height: 40px;
}
.btn {
  padding: 10px 0;
}
</style>
