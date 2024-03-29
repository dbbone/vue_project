import Vue from 'vue'
import App from './App.vue'
import vuerouter from 'vue-router'
import router from  './router'
Vue.config.productionTip = false
Vue.use(vuerouter)

new Vue({
  el:"#app",
  render: h => h(App),
  router:router
})
