import Vue from 'vue'
import App from './App.vue'
import router from './routers';
import 'lib-flexible'

import axios from 'axios'
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  //把router实例注入到vue实例中
  router,
}).$mount('#app')
