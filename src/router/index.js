import { createRouter, createWebHashHistory } from 'vue-router'
import WelcomeView from '@/views/primary/WelcomeView.vue'
import LoginView from '@/views/second/LoginView.vue'
import IndexView from '@/views/primary/WholeView.vue'
import RegisterView from '@/views/second/RegisterView.vue'
import HomeView from '@/views/second/HomeView.vue'
import MsgView from '@/views/second/MsgView.vue'
import MomentView from '@/views/second/MomentView.vue'
import PlanView from '@/views/second/PlanView.vue'

const router = createRouter({
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: '/index',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: IndexView,
      children: [
        {
          path: '/login',
          name: 'login',
          component: LoginView
        },
        {
          path: '/register',
          name: 'register',
          component: RegisterView
        },
        {
          path: '/moment',
          name: 'moment',
          component: MomentView
        },
        {
          path: '/msg',
          name: 'msg',
          component: MsgView
        },
        {
          path: '/home',
          name: 'home',
          component: HomeView
        },
        {
          path: '/plan',
          name: 'plan',
          component: PlanView
        }
      ]
    }
  ]
})

export default router
