import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Show from '@/components/Show'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/comic/:comic/characters',
      name: 'Show',
      component: Show,
      props: true
    }
  ]
})
