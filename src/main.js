import Vue from 'vue'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as j from 'jquery'

Vue.config.productionTip = false
Vue.use(bootstrap)
Vue.use(j)

new Vue({
  render: h => h(App),
}).$mount('#app')
