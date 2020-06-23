import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
// import GoodsList from '../components/GoodsList.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
      // children: [{ path: '/GoodsList.vue', component: GoodsList }]
    }
  ]
})

// const router = new Router({
//   routes
// })

export default router
