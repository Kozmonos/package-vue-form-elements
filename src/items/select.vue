<template>
  <div
    v-on="$listeners"
    class="custom-select"
    :class="open ? 'open' : ''"
    tabindex="0"
    @blur="open = false"
  >
    <div
      class="selected"
      :class="
        (open ? 'open' : '') +
        (' bg-' + theme) +
        ' ' +
        getThemeOpposite() +
        ' ' +
        ($attrs.class ? $attrs.class : '')
      "
      @click="open = !open"
    >
      {{ selected }}
    </div>
    <div
      class="items"
      :class="
        (!open ? 'selectHide' : '') +
        (' bg-' + theme) +
        ' ' +
        getThemeOpposite() +
        ' ' +
        variant
      "
    >
      <div
        v-for="(option, i) of options"
        :key="i"
        :class="option == selected ? 'selected-item bg-' + variant : ''"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "k-select",
  props: {
    value: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      required: true,
    },
    variant: {
      type: String,
      default: "primary",
    },
    theme: {
      type: String,
      default: "dark",
    },
  },
  data() {
    return {
      selected: this.value
        ? this.value
        : this.options && this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
  methods: {
    getThemeOpposite(type = "text") {
      const theme = this.theme == "dark" ? "light" : "dark";
      return type + "-" + theme;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../node_modules/bootstrap/scss/bootstrap";
.custom-select {
  position: relative;
  width: 170px;
  text-align: left;
  outline: none;
  height: 35px;
  line-height: 35px;
  box-shadow: unset;
  border: 0 !important;
  box-shadow: unset !important;
}
.custom-select:not(.open) {
  overflow: hidden;
}

.custom-select .selected {
  // border-radius: 6px;
  /* color: #fff; */
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}

.custom-select .selected.open {
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  transition: all 0.3s;
}
.custom-select .bg-dark.selected:after {
  border-color: #fff transparent transparent transparent;
}
.custom-select .bg-light.selected:after {
  border-color: #000 transparent transparent transparent;
}
.selected.open:after {
  transform: rotateX(180deg);
}

.custom-select .items {
  /* color: #fff; */
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 7;
  top: 34px;
}
.custom-select .selected.open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.custom-select .items div {
  /* color: #fff; */
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

@each $color, $value in $theme-colors {
  .custom-select .items.#{$color} div:not(.selected-item):hover {
    background-color: lighten($value, 10%);
  }
}

// .custom-select .items.bg-dark div:not(.selected-item):hover {
//   /* background-color: #ad8225; */
//   filter: brightness(0.5);
// }
// .custom-select .items.bg-light div:not(.selected-item):hover {
//   /* background-color: #ad8225; */
//   filter: brightness(1.5);
// }

.selectHide {
  display: none;
}
</style>