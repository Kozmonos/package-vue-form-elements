<template>
  <demo-template>
    <template v-slot:content="{componentItem,variants,themeName,componentList}">
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
    </template>
  </demo-template>
</template>
<script>
import './assets/demo.css'
import {
  KGoButton,
  KButton,
  KSelect,
  KInput,
  KTextarea,
  KCheckbox
} from '../dist/lib/form-elements.min.js'
import demoTemplate from './assets/DemoTemplate'
export default {
  components: { KGoButton, KButton, KSelect, KInput, KTextarea, KCheckbox, demoTemplate }
}
</script>
