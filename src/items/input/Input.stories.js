import ComponentItem from './input.vue'

const { Template, argTypes, ...defaultBindingStory } = require('../storybook.template.js')({ ComponentItem, variant: true, theme: true })

export default {
  title: 'Input',
  component: ComponentItem,
  argTypes: {
    ...argTypes,
    label: {
      control: {
        type: 'text'
      },
      defaultValue: 'Placeholder'
    },
    'v-model': { control: { type: 'disabled' } },
    'color': { control: { type: 'disabled' } }

  },
  args: {
    default: 'Placeholder'
  }
}
export const { primary, secondary, success, danger, warning, info } = defaultBindingStory
