<template>
  <div>
    <van-button type="default" @click="$toast('干哈呀')">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <p>按需加载，减少主bundle的体积</p>
    <a target="_blank" href="https://youzan.github.io/vant/#/zh-CN/intro">vant开发文档</a>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button, Toast } from 'vant'

Vue.use(Toast)
Vue.use(Button)

export default {
  name: 'VantUI',
  methods: {}
}
</script>

<style lang="scss" scoped>
.van-button {
  margin-right: 10px;
}
</style>
