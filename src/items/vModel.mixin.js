export default {
  model: {
    prop: 'text',
    event: 'update'
  },
  props: {
    text: {
      default: ''
    }
  },
  methods: {
    onInput (event) {
      this.$emit('update', event.target.value)
    }
  }
}
