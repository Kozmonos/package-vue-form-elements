import ComponentItem from './go-button.vue'

const { Template, argTypes, ...defaultBindingStory } = require('../storybook.template.js')({ ComponentItem, variant: true, theme: true })

export default {
  title: 'Go Button',
  component: ComponentItem,
  argTypes: {
    ...argTypes,
    to: {
      description: 'The url to navigate to',
      control: {
        type: 'text'
      }
    }
  },
  args: {
    default: 'Button'

  },
  parameters: { controls: { sort: 'requiredFirst' } }
}

export const { primary, secondary, success, danger, warning, info } = defaultBindingStory
