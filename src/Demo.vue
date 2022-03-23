<template>
  <div>
    <k-select
      v-model="selectModel"
      :variant="variant"
      :theme="theme"
      :options="selectData"
      >test</k-select
    >
    <k-select value="b" :options="['a', 'b', 'c']">test</k-select>
    <k-go-button :variant="variant" :theme="theme" to="https://kozmonos.com"
      >test</k-go-button
    >
    <k-go-button>Go</k-go-button>
    <k-button :variant="variant" :theme="theme">test</k-button>

    <k-input
      v-model="testModel"
      :variant="variant"
      :theme="theme"
      label="input label"
    />
    <k-input :theme="theme" v-model="inputModel2" label="input label" />
    <k-textarea
      v-model="textareaModel"
      :variant="variant"
      :theme="theme"
      label="textarea label"
      >test</k-textarea
    >
    <k-checkbox
      v-model="checkboxModel"
      :variant="variant"
      :theme="theme"
      id="t"
      :value="true"
      >test</k-checkbox
    >
    <k-checkbox variant="danger">test</k-checkbox>
  </div>
</template>
<script>
import {
  KGoButton,
  KButton,
  KSelect,
  KInput,
  KTextarea,
  KCheckbox,
} from "./packages.js";
export default {
  components: { KGoButton, KButton, KSelect, KInput, KTextarea, KCheckbox },
  data: () => ({
    selectData: ["web", "cron", "one time"],
    variant: "danger",
    theme: "dark",
    testModel: "test",

    selectModel: "",
    textareaModel: "",
    inputModel2: "",
    checkboxModel: false,
  }),
};
</script>
<style>
.container {
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  background: rgb(32, 32, 32);
}
</style>
