import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dynamicGuide',
      component: () => import('./views/dynamicsGuide/dynamicsGuide.vue'),
      redirect: '/writeBlog',
      children: [
        {
          path: '/dynamics',
          name: 'dynamicsView',
          component: () => import('./views/dynamicsGuide/dynamicsView.vue')
        }
      ]
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('./views/detailGuide/detailView.vue')
    },
    {
      path: '/writeBlog',
      name: 'writeBlog',
      component: () => import('./views/writeBlogGuide/writeBlog.vue')
    }
  ]
})
