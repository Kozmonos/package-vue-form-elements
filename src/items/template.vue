<template>
  <div class="form-field" :class="text || value ? 'form-field--is-active' : ''">
    <div class="form-field__control">
      <label
        :for="id"
        class="form-field__label"
        :data-required="required"
        :class="(required ? 'required' : '') + (' text-' + variant)"
        >{{ label }}</label
      >
      <slot />
    </div>
  </div>
</template>
<script>
import templateMixin from "./template.mixin.js";
export default {
  mixins: [templateMixin],
  props: {
    id: {
      required: true,
    },
  },
};
</script>

<style scoped>
label {
  z-index: -1;
}
.form-field {
  display: block;
  margin-bottom: 16px;
  font-family: "Fredoka One", sans-serif;
  /* color: #ababab3d; */
}
.form-field__label.required::before {
  content: "*";
}
.form-field--is-active .form-field__control::after {
  transform: scaleX(150);
}
.form-field--is-active .form-field__label {
  opacity: 1;
  font-size: 0.75rem;
  transform: translateY(-14px);
}
.form-field--is-filled .form-field__label {
  opacity: 1;
  font-size: 0.75rem;
  transform: translateY(-14px);
}

.form-field__label {
  display: block;
  font-size: 1.2rem;
  font-weight: normal;
  left: 0;
  margin: 0;
  padding: 18px 12px 0;
  position: absolute;
  top: 0;
  transition: all 0.4s;
  width: 100%;
  opacity: 0.4;
}

.form-field__control {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 1;
}
.form-field__control::after {
  bottom: 0;
  content: "";
  display: block;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  transform: scaleX(0);
  transition: all 0.4s;
  width: 1%;
}

.form-field__input,
.form-field__textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  border: 0;
  /* color: #333; */
  display: block;
  font-size: 1.2rem;
  margin-top: 24px;
  outline: 0;
  padding: 0 12px 10px 12px;
  width: 100%;
}

.form-field__textarea {
  height: 80px;
}
</style>