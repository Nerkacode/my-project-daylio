import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store2 from '@/store'
import App from './App'
import AppLogin from './components/AppLogin'
import AppMain from './components/AppMain'
import AppMyMood from './components/AppMyMood'
import AppMyActivities from './components/AppMyActivities'
import AppDone from './components/AppDone'
import '@/assets/scss/app.scss'

Vue.config.productionTip = process.env.NODE_ENV === 'production'
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: AppMain },
    { path: '/login', name: 'login', component: AppLogin },
    { path: '/mymood', name: 'mymood', component: AppMyMood },
    { path: '/myactivities', name: 'myactivities', component: AppMyActivities },
    { path: '/summary', name: 'summary', component: AppDone }
  ]
})

const store = new Vuex.Store(store2)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
