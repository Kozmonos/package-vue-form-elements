import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BuildTest from './production.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(BuildTest)
}).$mount('#app')
