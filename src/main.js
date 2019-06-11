import App from './App'
import Vue from 'vue'
import Router from 'vue-router'
import router from './router/index.js'
import VueAxios from 'vue-axios'
import axios from 'axios'
import ElementUI from 'element-ui'


Vue.use(Router);
Vue.use(VueAxios, axios);
Vue.use(ElementUI, { size: 'small' });


import api from './api';
import request from './api/request.js'
Vue.prototype.$axios = request
Vue.prototype.$api = api
Vue.prototype.$bus=new Vue()


 
Vue.config.productionTip = false
 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})