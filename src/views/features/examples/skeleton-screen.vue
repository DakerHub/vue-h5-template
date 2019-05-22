<template>
  <div>
    <SkeletonLoading :loading="loading">
      <template slot="skeleton">
        <div class="skeleton-placeholder">
          <div class="img-wp pulse"></div>
          <div>
            <h1 class="title pulse"></h1>
            <p class="desc pulse"></p>
          </div>
        </div>
      </template>
      <template slot="content">
        <div class="skeleton-content">
          <div class="img-wp">
            <img class="img" src="https://dummyimage.com/200x100" alt>
          </div>
          <div>
            <h1 class="title">标题</h1>
            <p class="desc">简介巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴</p>
          </div>
        </div>
      </template>
    </SkeletonLoading>
    <van-switch :active-value="false" :inactive-value="true" v-model="loading"/>
  </div>
</template>

<script>
import Vue from 'vue'
import { Switch } from 'vant'
import SkeletonLoading from '@/components/skeleton-loading'

Vue.use(Switch)

export default {
  name: 'SkeletonScreen',
  components: {
    SkeletonLoading
  },
  data() {
    return {
      loading: true
    }
  }
}
</script>

<style lang="scss" scoped>
$block-bg-color: #ccc;

.skeleton-content {
  .img-wp {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    .img {
      display: block;
      width: 100%;
    }
  }
  .title {
    font-size: 18px;
    line-height: 1;
    margin: 14px 0;
  }
  .desc {
    font-size: 14px;
    line-height: 1.5em;
    margin: 14px 0;
  }
}
.skeleton-placeholder {
  .img-wp {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    background-color: $block-bg-color;
  }
  .title {
    font-size: 18px;
    height: 18px;
    margin: 14px 0;
    background-color: $block-bg-color;
  }
  .desc {
    height: 21px;
    margin: 14px 0;
    background-color: $block-bg-color;
  }
}

.pulse {
  $from: #eee;
  $to: scale-color($from, $lightness: -10%);
  background: linear-gradient(-90deg, $to 0%, $from 50%, $to 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
}
@keyframes pulse {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
}
</style>
