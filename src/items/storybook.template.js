const defaultArgTypes = {
  default: {
    description: 'text to display',
    control: {
      type: 'text'
    }
  },
  theme: {
    control: {
      type: 'disabled'
    }
  }
}

const defaultTemplate = (ComponentItem) => {
  return (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { 'app-component-item': ComponentItem },
    template: `
 <div style="height:100vh;display:flex;justify-content:center;align-items:center;">
   <app-component-item v-bind="$props" >
     <template v-if="${'default' in args}" v-slot>${args.default}</template>
   </app-component-item>
</div>`
  })
}
const darkLightTemplate = (ComponentItem) => {
  return (args, { argTypes }) => (
    {
      props: Object.keys(argTypes),
      components: { 'app-component-item': ComponentItem },
      data: () => ({
        themes: ['dark', 'light']
      }),
      methods: {
        oppositeTheme (themeName) {
          return themeName === 'dark' ? 'light' : 'dark'
        }
      },
      template: `
     <div style='display:flex;flex-direction:column;height:100vh;'>
          <div :class="'bg-'+themeName" style="height:50vh;display:flex;
          flex-direction:column;justify-content:center;align-items:center;" v-for="themeName in themes" :key="'item_'+themeName">

          <span :class="'text-'+oppositeTheme(themeName)" style="font-weight:bold;font-size:15px;margin-bottom:10px">{{oppositeTheme(themeName)}} theme component</span>

           <app-component-item  :theme="oppositeTheme(themeName)"  v-bind="$props" >
             <template v-if="${'default' in args}" v-slot>${args.default}</template>
          </app-component-item>
       </div>
    </div>
 `
    })
}
const allTemplates = {
  default: defaultTemplate,
  darkLight: darkLightTemplate
}

const setVariants = (Template) => {
  const variants = {}
  const variantKeys = ['primary', 'secondary', 'success', 'danger', 'warning', 'info']

  variantKeys.forEach(variantKey => {
    variants[variantKey] = Template.bind({})
    variants[variantKey].args = {
      variant: variantKey
    }
  })

  const argTypes = {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info']
    }
  }

  return [variants, argTypes]
}

module.exports = (args = { ComponentItem: null, variant: false, theme: false }) => {
  const { ComponentItem, variant: variantExists, theme: themeExists } = Object.assign({
    variant: false,
    theme: false
  }, args)

  const Template = themeExists
    ? allTemplates['darkLight'](ComponentItem)
    : allTemplates['default'](ComponentItem)

  let variantsData = {}
  let argTypes = defaultArgTypes

  if (variantExists) {
    const [variants, argTypesAppend] = setVariants(Template)
    variantsData = variants
    argTypes = { ...argTypes, ...argTypesAppend }
  }

  return { Template, ...variantsData, argTypes }
}
