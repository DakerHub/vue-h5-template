<template>
  <div class="features">
    <BaseCard title="I18n">
      <select v-model="$i18n.locale">
        <option value="zh">简体中文</option>
        <option value="en">English</option>
      </select>
      <p>{{ $t('hello') }}</p>
    </BaseCard>

    <BaseCard title="内置过滤器">
      <h3>日期过滤器 - date</h3>
      <BaseCardItem label="原值">2018-12-1</BaseCardItem>
      <BaseCardItem label="过滤值">{{'2018-12-1'|date('YYYY年MM月DD日')}}</BaseCardItem>
      <h3>金额过滤器 - currency</h3>
      <BaseCardItem label="原值">430000（分）</BaseCardItem>
      <BaseCardItem label="过滤值">{{'430000'|currency}}</BaseCardItem>
    </BaseCard>

    <BaseCard title="用户反馈">
      <h3>波纹效果(点击)</h3>
      <div>
        <div v-waves="['rounded-btn', 'waves-circle']">←</div>
        <div v-waves="['dark-btn', 'waves-light']">●</div>
      </div>
      <h3>状态改变(TODO)</h3>
      <div>成功失败图标</div>
      <UeStatusChange></UeStatusChange>
    </BaseCard>

    <BaseCard title="用户体验">
      <h3>骨架屏(TODO)</h3>
    </BaseCard>
    <BaseCard title="权限校验体系（TODO）">带用户系统的页面权限校验存储</BaseCard>
    <BaseCard title="Axios封装以及接口Mock(TODO)"></BaseCard>
  </div>
</template>

<script>
import BaseCard from '@/components/base-card'
import BaseCardItem from '@/components/base-card/base-card-item'
import UeStatusChange from './examples/ue-status-change'

export default {
  name: 'Features',
  components: {
    BaseCard,
    BaseCardItem,
    UeStatusChange
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

.rounded-btn {
  background-color: blanchedalmond;
  color: #666;
  font-size: 12px;
  padding: 4px;
}
.dark-btn {
  padding: 10px;
  background-color: #334a55;
  color: #fff;
  border-radius: 4px;
  margin-left: 10px;
  vertical-align: top;
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
