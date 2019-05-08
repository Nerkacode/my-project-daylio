import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppLogin from './components/AppLogin.vue'
import AppMain from './components/AppMain.vue'
import AppMyMood from './components/AppMyMood.vue'
import '@/assets/scss/app.scss'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: AppMain },
    { path: '/login', name: 'login', component: AppLogin },
    { path: '/mymood', name: 'mymood', component: AppMyMood }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
