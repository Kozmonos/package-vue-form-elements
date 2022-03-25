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
  name: "k-button",
  props: {
    variant: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style scoped lang="scss">
button {
  border: 0;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  transition: all 0.3s;
}
</style>