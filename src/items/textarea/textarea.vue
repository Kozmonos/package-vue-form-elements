<template>
  <app-template :id="'textarea-' + this._uid" v-bind="$props">
    <textarea
      :value="text ? text : value"
      @input="onInput"
      v-on="$listeners"
      :id="'textarea-' + this._uid"
      class="form-field__textarea border-bottom"
      v-bind="$attrs"
      @blur="blurred"
      @focus="focused"
      :class="
        'text-' +
        (theme == 'transparent' || color != undefined ? color : theme) +
        (' border-' + variant)
      "
    ></textarea>
  </app-template>
</template>
<script>
import itemMixin from '../text.mixin.js'
import vModel from '../vModel.mixin.js'
export default {
  mixins: [itemMixin, vModel]
}
</script>
