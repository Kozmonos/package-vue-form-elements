import Vue from 'vue'
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Demo from './Demo.vue'
export * from './packages.js'
if (process.env.NODE_ENV === 'development') {
  new Vue({
    render: h => h(Demo),
  }).$mount('#app')
} 