<template>
  <div>
    <p>
      还在使用
      <span class="code">my.favoriteFruit === 1</span> 做判断吗？
    </p>

    <p>考虑一下以下做法：</p>
    <pre>
cosnt FRUITS = {{FRUITS}}

my.favoriteFruit === FRUITS.苹果
    </pre>
    <p>
      我们在
      <span class="code">/utils/contants.js</span>中统一定义所有的魔法数字对应关系。
    </p>
    <p>这样就不用再担心关系一变就要到处去找被影响的代码修改。</p>
    <p>并且通过汉字作为对象键，更加符合我们的认知习惯，因为毕竟不是所有程序员都能写出容易理解的英文变量名。😂</p>
    <p>以上做法是否更加的清晰明了？</p>

    <h4>● dictionary2entries</h4>
    <p>
      当然很多时候我们需要将这些对应关系转换为选项数组。这里我们提供了转换方法
      <span class="code">dictionary2entries</span>。
    </p>
    <pre>
import { dictionary2entries } from '@/utils/constants.helper'
// ...
const entries = dictionary2entries(FRUITS)
    </pre>
    <p>这样，我们拿到了</p>
    <pre>
{{ entries }}
    </pre>

    <h4>● 字典过滤器</h4>
    <p>我们常见的一种情况，需要将魔法数字转换为对应的中文标识。</p>
    <p>在采用了我们上面的统一做法后，我们可以使用一下过滤器：</p>

    <span class="code">1 | dictinory('FRUITS')</span>
    <p>
      <BaseCardItem label="原值">1</BaseCardItem>
      <BaseCardItem label="过滤值">{{1 | dictinory('FRUITS')}}</BaseCardItem>
    </p>
  </div>
</template>

<script>
import BaseCardItem from '@/components/base-card/base-card-item'
import { dictionary2entries } from '@/utils/constants.helper'

const FRUITS = {
  苹果: 1,
  香蕉: 2,
  杨桃: 3
}

const entries = dictionary2entries(FRUITS)

export default {
  components: {
    BaseCardItem
  },
  data() {
    return {
      FRUITS,
      entries
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
