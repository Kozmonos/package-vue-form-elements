<template>
  <button
    v-on="$listeners"
    v-bind="$attrs"
    class="login-btn"
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
<style lang="scss" scoped>
@import "../../node_modules/bootstrap/scss/bootstrap";
button {
  border: 0;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  transition: all 0.3s;
}

@each $color, $value in $theme-colors {
  button.#{$color}:hover {
    box-shadow: 1px 1px 4px $value;
  }
}
</style>