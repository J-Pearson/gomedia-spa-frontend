import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://gomediaspa.test/'

store.dispatch('auth/me').then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
