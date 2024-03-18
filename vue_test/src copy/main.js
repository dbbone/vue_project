import Vue from 'vue'
import App from './App.vue'
import vuerouter from 'vue-router'
Vue.use(vuerouter)
import router from  './router'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import store from './store/index'
import 'element-ui/lib/theme-chalk/index.css';
// import {Container, Main,Header,Aside, Menu, MenuItem, Submenu, Table, TableColumn, Form, FormItem, Col, Input, Checkbox,} from 'element-ui'
// Vue.component(Container.name,Container),
// Vue.component(Main.name,Main),
// Vue.component(Header.name,Header),
// Vue.component(Aside.name,Aside),
// Vue.component(Menu.name,Menu),
// Vue.component(MenuItem.name,MenuItem),
// Vue.component(Submenu.name,Submenu),
// Vue.component(Table.name,Table),
// Vue.component(TableColumn.name,TableColumn),
// Vue.component(Form.name,Form),
// Vue.component(FormItem.name,FormItem),
// Vue.component(Col.name,Col),
// Vue.component(Input.name,Input),
// Vue.component(Checkbox.name,Checkbox)
Vue.use(ElementUI)


new Vue({
  el:"#app",
  render: h => h(App),
  router:router,
  store:store
})
