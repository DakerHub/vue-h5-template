<template>
  <section class="base-card">
    <h1>{{ title }}</h1>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.base-card {
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 3px 4px 12px 1px rgba(33, 150, 243, 0.18);
  background-color: #fff;
  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
  h1 {
    font-size: 18px;
    color: #2196f3;
    background-color: rgba(33, 150, 243, 0.18);
    padding: 5px;
    border-radius: 4px;
  }
}
</style>
