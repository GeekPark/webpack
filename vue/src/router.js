import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Other from './views/Other.vue'
Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/other', component: Other }
  ]
})