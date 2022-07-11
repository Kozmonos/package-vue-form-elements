import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Demo from './Demo.vue'

Vue.config.productionTip = false
new Vue({
  render: h => h(Demo)
}).$mount('#app')
