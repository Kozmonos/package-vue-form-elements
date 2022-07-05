
import ComponentItem from './button.vue'

const { Template, argTypes, ...defaultBindingStory } = require('../storybook.template.js')({ ComponentItem, variant: true })

export default {
  title: 'Button',
  component: ComponentItem,
  argTypes: {
    ...argTypes
  },
  args: {
    default: 'A Button Label'
  }
}

export const { primary, secondary, success, danger, warning, info } = defaultBindingStory
