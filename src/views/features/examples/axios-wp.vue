<template>
  <div class="axios-wp">
    <div v-for="item in list" :key="item.id">
      <h1>{{ item.title }}</h1>
      <div>
        <span>{{item.date}}</span>
        <span>{{item.author}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchPostList } from '@/api/example.js'

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
      console.log(res)
      this.list = res.list
    }
  }
}
</script>

<style lang="scss" scoped>
.axios-wp {
  h1 {
    font-size: 18px;
  }
}
</style>
