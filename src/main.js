import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { Button } from 'element-ui'
import VeLine from 'v-charts/lib/line.common'
import VueRouter from 'vue-router'
import router from './router'

Vue.component(Button.name, Button)
Vue.component(VeLine.name, VeLine)
Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  store,
  router:router,
}).$mount('#app')
