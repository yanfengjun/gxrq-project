import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Home from '@/views/home'
import Map from '@/views/map'
import JieBanManage from '@/views/jieBanManage'
import NotFound from '@/views/notFound'

Vue.use(Router)

export default new Router({
  //mode: '',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/map',
          name: 'map',
          component: Map
        }, 
        {
          path: '/jieBanManage',
          name: 'jieBanManage',
          component: JieBanManage
        },
        {
          path: '/404',
          component: NotFound
        }
      ]
    },
    {
      path: '*',
      redirect: { path: '/404' }
    }
  ]
})