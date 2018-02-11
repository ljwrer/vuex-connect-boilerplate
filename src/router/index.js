import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/page/PageHome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    }
  ]
})
