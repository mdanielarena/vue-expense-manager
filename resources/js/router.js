import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './components/pages/Dashboard'
import Users from './components/pages/Users'
import Roles from './components/pages/Roles'
import ExpenseCategories from './components/pages/ExpenseCategories'
import Expenses from './components/pages/Expenses'
import ResetPassword from './components/pages/ResetPassword'
import Login from './components/pages/Login'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false}
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true}

  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    meta: { requiresAuth: true}
  },
  {
    path: '/roles',
    name: 'Roles',
    component: Roles,
    meta: { requiresAuth: true}
  },
  {
    path: '/expense-categories',
    name: 'ExpenseCategories',
    component: ExpenseCategories,
    meta: { requiresAuth: true}
  },
  {
    path: '/expenses',
    name: 'Expenses',
    component: Expenses,
    meta: { requiresAuth: true}
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword,
    meta: { requiresAuth: true}
  },

]

const router = new VueRouter({
    mode: 'history',
    routes,

})

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
      
      if (!localStorage.getItem('loggedIn')) {
          next({
            path: '/login',
            params: { nextUrl: to.fullPath }
          })
      } else {
          next()
      }

  } else {

    if (localStorage.getItem('loggedIn')) {
        next({
          path: '/',
          params: { nextUrl: to.fullPath }
        })
    } else {
        next()
    }

  }

})

export default router