import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'

import VueAxios from 'vue-axios'
import axios from '@/api/axios'
Vue.use(VueAxios, axios)

import ElemntUI from 'element-ui'
Vue.use(ElemntUI)

import * as api from '@/api'
Object.defineProperty(Vue.prototype, '$api', {
  writable: false,
  value: api
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
