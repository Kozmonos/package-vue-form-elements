<template>
  <button
    v-on="$listeners"
    v-bind="$attrs"
    class="button-item"
    :class="variant + ' bg-' + variant"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: 'k-button',
  props: {
    variant: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
<style>
  @import './button.css'
</style>
