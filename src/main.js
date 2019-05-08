import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import AppLogin from './components/AppLogin'
import AppMain from './components/AppMain'
import AppMyMood from './components/AppMyMood'
import AppMyActivities from './components/AppMyActivities'
import '@/assets/scss/app.scss'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: AppMain },
    { path: '/login', name: 'login', component: AppLogin },
    { path: '/mymood', name: 'mymood', component: AppMyMood },
    { path: '/myactivities', name: 'myactivities', component: AppMyActivities }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
