<template>
  <div class="permission">
    <img src="./flowchart.jpg" alt>
    <div>
      <h3>Have a try!</h3>
      <div>
        <label for="permissionLogin">用户信息</label>
        <select id="permissionLogin" v-model="hasUser">
          <option value="1">有</option>
          <option value="0">无</option>
        </select>
      </div>
      <div>
        <label for="permissionAuth">是否有权限</label>
        <select id="permissionAuth" v-model="hasPermission">
          <option value="1">是</option>
          <option value="0">否</option>
        </select>
      </div>
      <div>
        <label for="permissionLoad">用户自动加载成功</label>
        <select id="permissionLoad" v-model="userLoadedSuccessfully">
          <option value="1">是</option>
          <option value="0">否</option>
        </select>
      </div>
      <button @click="mock">模拟一下</button>
      <div>
        <p v-for="(item, i) in oprations" :key="i">{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Permission from '@/utils/Permission.js'

export default {
  name: 'Permisssion',
  data() {
    return {
      hasUser: '1',
      hasPermission: '1',
      userLoadedSuccessfully: '1',
      oprations: []
    }
  },
  created() {
    Permission.configure({
      isFreeRoute: () => {
        this.oprations.push('是否自由路由？ => false')
        return false
      },
      isUserLoaded: () => {
        this.oprations.push(`用户是否加载？ => ${this.hasUser === '1'}`)
        return this.hasUser === '1'
      },
      loadUser: () => {
        this.oprations.push('加载用户...')
        if (this.userLoadedSuccessfully === '1') {
          this.hasUser = '1'
          this.oprations.push('加载用户成功！')
        } else {
          this.oprations.push('加载用户失败！')
        }

        return this.userLoadedSuccessfully === '1'
      },
      hasAuth: () => {
        this.oprations.push(`是否有权限？ => ${this.hasPermission === '1'}`)
        return this.hasPermission === '1'
      },
      noAuthRedirect: '401!',
      noUserRedirect: '去登录吧'
    })
  },
  methods: {
    mock() {
      this.oprations = []
      Permission.interceptor(null, null, url => {
        this.oprations.push(url ? `跳转${url}` : '通过')
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
}
</style>
