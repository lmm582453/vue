import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'

import * as api from '@/api'
import fetch from '@/api'

Object.defineProperty(Vue.prototype, '$api', {value: api})
Object.defineProperty(Vue.prototype, '$fetch', {value: fetch})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
