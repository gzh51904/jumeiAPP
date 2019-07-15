import Vue from 'vue'
import App from './App.vue'
import router from './routers';
import 'lib-flexible';
import store from './vuex';

//表单验证框架
import VeeValidate from 'vee-validate';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios'
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://localhost:1904';
Vue.config.productionTip = false

Vue.use(VeeValidate);

new Vue({
  render: h => h(App),

  //把router实例注入到vue实例中
  router,
  store,
}).$mount('#app')
