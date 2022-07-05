
import templateMixin from './template.mixin.js'
import appTemplate from './template.vue'

export default {
  mixins: [templateMixin],
  components: { appTemplate },
  methods: {
    blurred (el) {
      if (el.target.value === '') {
        const target = el.target.parentNode.parentNode
        target.classList.remove('form-field--is-active')
        this.activeTextColor = 'unset'
        const label = el.target.parentNode.children[0]
        if (label.attributes.hasOwnProperty('data-required')) {
          if (label.attributes['data-required'].value === 'true') { label.classList.add('required') }
        }
      }
    },
    focused (el) {
      console.log(el.target)
      // const target = el.target !== '' ? el.target.parentNode.parentNode : el.parentNode.parentNode
      const target = el.target.parentNode.parentNode
      target.classList.add('form-field--is-active')
      this.activeTextColor = this.color
      const label = el.target.parentNode.children[0]
      label.classList.remove('required')
    }
  }
}
