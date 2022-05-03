import MyButton from './button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
    label: { // not a prop!
      control: {
        type: 'text',
      },
      defaultValue: 'A Button Label',
    },
  },
  args: {
    default: 'A Button Label',
  }
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: `<my-button v-bind="$props" >
  <template v-if="${'default' in args}" v-slot>${args.default}</template>
  </my-button>`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  variant: 'primary',
};


function dd() {
  let returnData = {};
  (["secondary", "danger"]).map(color => {
    const f = Template.bind({});
    f.args = {
      variant: 'danger'
    }
    console.log("++")
    returnData[color] = f
    return { [color]: f }
  })
  return returnData
}
// export const { ...dd() }

export const primary = Template.bind({});
primary.args = {
  variant: 'primary'
}
export const secondary = Template.bind({});
secondary.args = {
  variant: 'secondary'
}
export const success = Template.bind({});
success.args = {
  variant: 'success'
}
export const danger = Template.bind({});
danger.args = {
  variant: 'danger'
}

export const warning = Template.bind({});
warning.args = {
  variant: 'warning'
}

export const info = Template.bind({});
info.args = {
  variant: 'info'
}