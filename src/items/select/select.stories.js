import ComponentItem from './select.vue'

const { Template, argTypes, ...defaultBindingStory } = require('../storybook.template.js')({ ComponentItem, variant: true, theme: true })
export default {
  title: 'Select',
  component: ComponentItem,
  argTypes: {
    ...argTypes
  },
  args: {
    default: 'Placeholder',
    options: ['item 1', 'item 2', 'item 3']
  }
}
export const { primary, secondary, success, danger, warning, info } = defaultBindingStory
