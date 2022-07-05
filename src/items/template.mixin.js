import vModel from './vModel.mixin'
export default {
  mixins: [vModel],
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      required: true
    },
    color: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: 'primary',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info']
    },
    theme: {
      // light - dark -transparent
      type: String,
      default: 'light'
    }
  }
}
