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
          <component
            :is="componentItem"
            v-for="variantName in Object.keys(variants)"
            :key="variantName + componentItem"
            :theme="themeName"
            class="component-item"
            label="input label"
            :variant="variantName"
            v-bind="componentList[componentItem].props"
            >{{ componentList[componentItem].slot }}</component
          >
          <hr :key="componentItem + 'hr'" />
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import {
  KGoButton,
  KButton,
  KSelect,
  KInput,
  KTextarea,
  KCheckbox
} from '../dist/lib/form-elements.min.js'
export default {
  components: { KGoButton, KButton, KSelect, KInput, KTextarea, KCheckbox },
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
<style >
.main-container {
  display: flex;
}
.component-item {
  margin-top: 10px;
}

.container-item {
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 8px #343a4014;
}
.light .container-item {
  background-color: #202020;
}
.mode-title {
  text-transform: capitalize;
  font-weight: bold;
}
</style>
