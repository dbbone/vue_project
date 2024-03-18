import Vue from 'vue'
import App from './App.vue'
import vuerouter from 'vue-router'
import router from  './router'
import {Button,Row,DatePicker,Table,Input,TableColumn,Header,Container,Main, Aside, Dialog, Form, FormItem, Select, Footer} from 'element-ui'
Vue.config.productionTip = false
Vue.use(vuerouter)
Vue.component(Button.name,Button);
Vue.component(Row.name,Row);
Vue.component(DatePicker.name,DatePicker);
Vue.component(Table.name,Table);
Vue.component(Input.name,Input);
Vue.component(TableColumn.name,TableColumn);
Vue.component(Main.name,Main);
Vue.component(Container.name,Container);
Vue.component(Header.name,Header);
Vue.component(Aside.name,Aside);
Vue.component(Dialog.name,Dialog);
Vue.component(Form.name,Form);
Vue.component(FormItem.name,FormItem);
Vue.component(Option.name,Option);
Vue.component(Select.name,Select);
Vue.component(Footer.name,Footer)
import { req1 } from './api';
new Vue({
  el:"#app",
  render: h => h(App),
  router:router
})
