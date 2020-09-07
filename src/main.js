import Vue from 'vue'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// I need jquery for some bootstrap effects
import * as j from 'jquery'
import router from './router'
import VueScrollProgressBar from '@guillaumebriday/vue-scroll-progress-bar'

Vue.config.productionTip = false
Vue.use(bootstrap)
Vue.use(j)
Vue.use(VueScrollProgressBar)

new Vue({
  // Defines router as a plugin basically for vue
  router,
  render: h => h(App),
}).$mount('#app')
