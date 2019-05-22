<template>
  <div class="permission">
    <img src="./flowchart.jpg" @click="showImg=!showImg">
    <van-image-preview v-model="showImg" :images="[flowImg]"></van-image-preview>
    <div>
      <h3>Have a try!</h3>
      <van-cell-group>
        <van-switch-cell v-model="hasUser" title="是否有用户信息"></van-switch-cell>
        <van-switch-cell v-model="hasPermission" title="是否有权限"></van-switch-cell>
        <van-switch-cell v-model="userLoadedSuccessfully" title="用户加载是否成功"></van-switch-cell>
      </van-cell-group>
      <van-button type="primary" @click="mock">模拟一下</van-button>
      <div class="oprations">
        <transition-group name="slide-up">
          <p v-for="item in oprations" :key="item">{{item}}</p>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { SwitchCell, CellGroup, Switch, Button, ImagePreview } from 'vant'
import flowImg from './flowchart.jpg'
import Permission from '@/utils/Permission.js'

Vue.use(SwitchCell)
  .use(CellGroup)
  .use(Switch)
  .use(Button)
  .use(ImagePreview)

export default {
  name: 'Permisssion',
  data() {
    return {
      showImg: false,
      flowImg: flowImg,
      hasUser: true,
      hasPermission: true,
      userLoadedSuccessfully: true,
      oprations: []
    }
  },
  created() {
    const wait1s = () =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })

    const formatBoolean = val => (val ? '是' : '否')

    Permission.configure({
      isFreeRoute: async () => {
        await wait1s()
        this.oprations.push('是否自由路由？ 👉 否')
        return false
      },
      isUserLoaded: async () => {
        await wait1s()
        this.oprations.push(`用户是否加载？ 👉 ${formatBoolean(this.hasUser)}`)
        return this.hasUser
      },
      loadUser: async () => {
        await wait1s()
        this.oprations.push('加载用户🚀')
        await wait1s()
        if (this.userLoadedSuccessfully) {
          this.hasUser = true
          this.oprations.push('加载用户成功👏')
        } else {
          this.oprations.push('加载用户失败🤦‍♂️')
        }

        return this.userLoadedSuccessfully
      },
      hasAuth: async () => {
        await wait1s()
        this.oprations.push(`是否有权限？ 👉 ${formatBoolean(this.hasPermission)}`)
        return this.hasPermission
      },
      onNoAuth: async () => {
        await wait1s()
        this.oprations.push('禁止访问，跳转403!✋')
      },
      onNoUser: async () => {
        await wait1s()
        this.oprations.push('跳转去登录吧!🤝 ')
      }
    })
  },
  methods: {
    mock() {
      this.oprations = []
      Permission.interceptor(null, null, url => {
        this.oprations.push(url ? `跳转${url}` : '通过👌')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.permission {
  img {
    width: 100%;
  }
  .van-button {
    margin: 10px 0;
  }
  .oprations {
    font-size: 14px;
    background-color: #eee;
    padding: 10px;
  }
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s;
}
.slide-up-enter,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
