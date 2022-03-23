import Vue from 'vue'
import BuildTest from './production.vue'

new Vue({
  render: h => h(BuildTest),
}).$mount('#app')