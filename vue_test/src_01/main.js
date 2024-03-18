import Vue from 'vue'
import App from './App.vue'
import vuerouter from 'vue-router'
import store from './store'
Vue.config.productionTip = false
Vue.use(vuerouter)

new Vue({
  el:"#app",
  render: h => h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus=this
  }
})
