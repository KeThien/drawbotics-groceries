import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import ListModule from './views/ListModule.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'ListModule',
      component: ListModule
    },
    {
      path: '/stats',
      name: 'stats',
      // route level code-splitting
      // this generates a separate chunk (stats.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "stats" */ './views/StatsModule.vue')
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: () =>
        import(/* webpackChunkName: "recipes" */ './views/RecipesModule.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ './views/LoginPage.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = JSON.parse(localStorage.getItem('my-app'))
  if (authRequired && !loggedIn.isLogged) {
    return next({
      path: '/login'
    })
  }
  next()
})
export default router
