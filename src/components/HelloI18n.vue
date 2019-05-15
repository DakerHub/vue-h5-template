<template>
  <p>
    <select v-model="$i18n.locale">
      <option value="zh">汉语</option>
      <option value="zh-zang">藏语</option>
    </select>
    <i18n path="contact" tag="p">
      <a href>{{ $t('email') }}</a>
    </i18n>
  </p>
</template>

<script>
export default {
  name: 'HelloI18n',
  methods: {
    changeLocale(e) {
      console.log(e.target.value)
      this.$i18n.locale = e.target.value
    }
  }
}
</script>
