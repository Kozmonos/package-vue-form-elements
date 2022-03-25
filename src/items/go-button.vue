<template>
  <a :href="to">
    <button
      class="go-button"
      v-on="$listeners"
      :class="'bg-' + variant + ' ' + theme"
    >
      <span class="text"><slot /></span>
      <div class="icon-container">
        <div class="icon icon--left">
          <svg>
            <use xlink:href="#arrow-right"></use>
          </svg>
        </div>
        <div class="icon icon--right">
          <svg :class="'fill-' + variant">
            >
            <use xlink:href="#arrow-right"></use>
          </svg>
        </div>
      </div>
    </button>
    <svg style="display: none">
      <symbol id="arrow-right" viewBox="0 0 20 10">
        <path
          d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z"
        ></path>
      </symbol>
    </svg>
  </a>
</template>
<script>
export default {
  props: {
    variant: {
      type: String,
      default: "primary",
    },
    theme: {
      type: String,
      default: "light",
    },
    to: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none !important;
  display: block;
  width: fit-content;
}
button {
  --width: 180px;
  --height: 60px;
  border: 0;
  position: relative;
  min-width: var(--width);
  min-height: var(--height);
  border-radius: var(--height);
  color: #fff;
  font-family: "Montserrat";
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  transition: 0.5s;
}
button .text,
button .icon-container {
  position: relative;
  z-index: 2;
}
button .icon-container {
  --icon-size: 25px;
  position: relative;
  width: var(--icon-size);
  height: var(--icon-size);
  margin-left: 15px;
  transition: transform 500ms ease;
}
button .icon-container .icon {
  position: absolute;
  left: 0;
  top: 0;
  width: var(--icon-size);
  height: var(--icon-size);
  transition: transform 500ms ease, opacity 250ms ease;
}
button .icon-container .icon--left {
  transform: translateX(-200%);
  opacity: 0;
}
button .icon-container .icon svg {
  width: 100%;
  fill: #fff;
  height: 100%;
}

button::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--height);
  z-index: 1;
  transition: transform 500ms ease;
}

button:hover::after {
  transform: translateX(65%);
}
button:hover .icon-container {
  transform: translateX(125%);
}
button:hover .icon-container .icon--left {
  transform: translateX(0);
  opacity: 1;
}
button:hover .icon-container .icon--right {
  transform: translateX(200%);
  opacity: 0;
}
</style>