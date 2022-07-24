import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { Button ,Select,Option,Row} from 'element-ui'
import VeLine from 'v-charts/lib/line.common'
import VueRouter from 'vue-router'
import router from './router'

Vue.component(Button.name, Button)
Vue.component(Option.name,Option)
Vue.component(Select.name, Select)
Vue.component(Row.name, Row)
Vue.component(VeLine.name, VeLine)
Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  store,
  router:router,
}).$mount('#app')
