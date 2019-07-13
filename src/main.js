import Vue from 'vue'
import App from './App.vue'
import router from './routers';
import 'lib-flexible'

import axios from 'axios'
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;


//引入mint-ui框架
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'

// 引入 Element js文件
import Element from 'element-ui';
// 引入 Elenemt css样式
import 'element-ui/lib/theme-chalk/index.css';

// 引入 bootstarp 框架
// import 'bootstrap/dist/css/bootstrap.min.css'
  
// import 'bootstrap/dist/js/bootstrap.min'



// Vue.use(MintUI);

Vue.use(Element);













new Vue({
  render: h => h(App),

  //把router实例注入到vue实例中
  router,
}).$mount('#app')
