<template>
  <div class="base-card-item">
    <span class="base-card-item__label" :style="labelStyle">{{ label }}</span>
    <span class="base-card-item__content">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'BaseCardItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    baseCard() {
      let parent = this.$parent
      let parentName = parent.$options.componentName
      while (parentName !== 'BaseCard') {
        if (!parent.$parent) break
        parent = parent.$parent
        parentName = parent.$options.componentName
        console.log(parentName)
      }
      return parent
    },
    labelStyle() {
      if (!this.baseCard) {
        return {}
      }
      const labelWidth = this.baseCard.labelWidth
      return labelWidth ? { width: labelWidth } : {}
    }
  }
}
</script>

<style lang="scss" scoped>
.base-card-item {
  font-size: 14px;
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
}
.base-card-item__label {
  font-weight: bold;
  display: inline-block;
  color: #333;
}
</style>
