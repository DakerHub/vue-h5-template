<template>
  <div class="features">
    <BaseCard title="I18n">
      <select v-model="$i18n.locale">
        <option value="zh">简体中文</option>
        <option value="en">English</option>
      </select>
      <p>{{ $t('hello') }}</p>
    </BaseCard>

    <BaseCard title="内置过滤器"></BaseCard>
  </div>
</template>

<script>
import BaseCard from './../components/base-card'

export default {
  name: 'Features',
  components: {
    BaseCard
  },
  data() {
    return {
      data1: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.features {
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  background-color: #334a55;
  /deep/ .base-card {
    box-shadow: 3px 4px 12px 1px rgba(56, 132, 192, 0.53);
  }
}
</style>

<i18n>
{
  "en": {
    "hello": "hello world!"
  },
  "zh": {
    "hello": "你好世界！"
  }
}
</i18n>
