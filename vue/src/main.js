import Vue from 'vue'
import Vuex from 'vuex'

import App from './App'
/* eslint-disable no-new */
import {router} from './router.js'
import {store} from './store.js'


new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',  
  components: { App }
})


