<template>
  <div class="axios-wp">
    <h3>axios封装</h3>
    <p>由于项目不同，对于axios的需求也不一样，所以这里没有过多的对axios进行封装，这里给出一些小提示，可能会有帮助</p>
    <ul>
      <li>可以在requestInterceptors中为请求添加token或者自定义请求头</li>
      <li>可以在requestInterceptors中剔除掉值为null和undefined的参数</li>
      <li>可以在responseInterceptors中对错误进行统一处理，比如401跳转登录</li>
    </ul>
    <p>
      更多设置请参考
      <a target="_blank" href="https://github.com/axios/axios">axios文档</a>
    </p>
    <h3>接口数据Mock</h3>
    <div class="list">
      <div v-for="item in list" :key="item.id">
        <h1>{{ item.title }}</h1>
        <div>
          <span>{{item.date}}</span>
          <span>{{item.author}}</span>
        </div>
      </div>
    </div>
    <van-button type="primary" @click="fetchData">刷新列表</van-button>
    <h3>目录结构</h3>
    <div>
      <pre>
        <code>
          src/
          ├─ api/
          │   └─ post.js
          └─ mock/
               ├─ index.js
               └─ post.js
        </code>
      </pre>
      <ul>
        <li>我们将接口拆分成单个js文件以防止当接口过多时产生混乱。</li>
        <li>而mock的配置文件我们将其放入src/mock/文件夹下，在index.js中引用并匹配请求地址。</li>
        <li>config.mockAPI设为false禁用mock</li>
        <li>
          具体如何进行mock数据编写请参考
          <a target="_blank" href="https://github.com/nuysoft/Mock/wiki">Mock.js</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'
import { fetchPostList } from '@/api/example.js'

Vue.use(Button)

export default {
  name: 'AxiosWp',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const res = await fetchPostList()
      this.list = res.list
    }
  }
}
</script>

<style lang="scss" scoped>
.axios-wp {
  .list {
    padding: 10px;
    background-color: #eee;
    margin-bottom: 10px;
    h1 {
      font-size: 18px;
    }
  }
  pre {
    background-color: #eee;
  }
  pre,
  code {
    font-family: 'Microsoft Yahei';
  }
  li {
    font-size: 14px;
    margin-bottom: 5px;
    line-height: 1.5em;
  }
}
</style>
