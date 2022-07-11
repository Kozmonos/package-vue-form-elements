<template>
  <div class="main-container">
    <template v-for="themeName in Object.keys(themes)">
      <div :class="themeName" :key="themeName + 'input'" class="container">
        <div
          class="container-item"
          :key="componentItem"
          v-for="componentItem in Object.keys(componentList)"
        >
          <span class="mode-title" :class="'text-' + themeName"
            >{{ themeName }} Mode</span
          >
         <slot name="content"
						:componentItem="componentItem"
						:variants="variants"
						:themeName="themeName"
						:componentList="componentList"
				/>
          <hr :key="componentItem + 'hr'" />
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import './demo.css'
export default {
  data: () => ({
    testData: [{ value: true }, { value: false }, { value: false }],
    componentList: {
      KGoButton: {
        slot: 'Go',
        props: {
          to: 'https://kozmonos.com'
        }
      },
      KButton: { slot: 'button' },
      KSelect: {
        props: {
          options: ['item 1', 'item 2', 'item 3']
        }
      },
      KInput: {},
      KTextarea: {},
      KCheckbox: { slot: 'checkbox' }
    },
    themes: {
      dark: 'dark',
      light: 'light'
    },
    variants: {
      primary: 'primary',
      secondary: 'secondary',
      success: 'success',
      danger: 'danger',
      warning: 'warning',
      info: 'info'
    }
  }),
  methods: {
    testDelete (index) {
      this.testData.splice(index, 1)
    }
  }
}
</script>
