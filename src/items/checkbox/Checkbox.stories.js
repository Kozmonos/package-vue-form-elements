import ComponentItem from './checkbox.vue'

const { Template, argTypes, ...defaultBindingStory } = require('../storybook.template.js')({ ComponentItem, variant: true, theme: true })

export default {
  title: 'Checkbox',
  component: ComponentItem,
  argTypes: {
    ...argTypes
  },
  args: {
    default: 'A Button Label'
  }
}

export const { primary, secondary, success, danger, warning, info } = defaultBindingStory
