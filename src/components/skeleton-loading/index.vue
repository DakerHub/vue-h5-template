<template>
  <div>
    <slot v-if="loading" name="skeleton"></slot>
    <slot v-else name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'SkeletonLoading',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
