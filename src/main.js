import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/font/iconfont.css'
import './utils/rem'

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
