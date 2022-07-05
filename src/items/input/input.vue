<template>
  <app-template :id="'input-' + this._uid" v-bind="$props">
    <input
      type="text"
      :value="text ? text : value"
      @input="onInput"
      v-on="$listeners"
      v-bind="$attrs"
      :id="'input-' + this._uid"
      @blur="blurred"
      @focus="focused"
      class="form-field__input border-bottom"
      :class="
        'text-' +
        (theme == 'transparent' || color != undefined ? color : theme) +
        (' border-' + variant)
      "
    />
  </app-template>
</template>
<script>
import itemMixin from '../text.mixin.js'
import vModel from '../vModel.mixin.js'
export default {
  mixins: [itemMixin, vModel]
}
</script>
