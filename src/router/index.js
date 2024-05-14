import { createRouter, createWebHashHistory } from 'vue-router'
import WelcomeView from '@/views/primary/WelcomeView.vue'
import LoginView from '@/views/second/LoginView.vue'
import IndexView from '@/views/primary/WholeView.vue'
import RegisterView from '@/views/second/RegisterView.vue'
import HomeView from '@/views/third/HomeView.vue'
import MsgView from '@/views/third/MsgView.vue'
import PlanView from '@/views/third/PlanView.vue'
import ArticleView from '@/views/third/ArticleView.vue'
import MainView from '@/views/second/MainView.vue'
import LilhammerView from '@/views/third/LilhammerView.vue'
import NewsView from '@/views/third/NewsView.vue'
import HammerActivityCom from '@/components/lilhammer/HammerActivityCom.vue'
import HammerRecordCom from '@/components/lilhammer/HammerRecordCom.vue'

const lilhammer_son_router = [
  {
    path: 'activity',
    name: 'hammer-activity',
    component: HammerActivityCom,
  },
  {
    path: 'record',
    name: 'hammer-record',
    component: HammerRecordCom,
  },
]

const third_router = [
  {
    path: 'lilhammer',
    name: 'lilhammer',
    component: LilhammerView,
    children: lilhammer_son_router,
  },
  {
    path: 'msg',
    name: 'msg',
    component: MsgView
  },
  {
    path: 'home',
    name: 'home',
    component: HomeView
  },
  {
    path: 'plan',
    name: 'plan',
    component: PlanView
  },
  {
    path: 'article',
    name: 'article',
    component: ArticleView
  },
  {
    path: 'news',
    name: 'news',
    component: NewsView
  },
]

const second_router = [
  {
    path: 'login',
    name: 'login',
    component: LoginView
  },
  {
    path: 'register',
    name: 'register',
    component: RegisterView
  },
  {
    path: 'nav',
    name: 'nav',
    component: MainView,
    children: third_router
  }
]

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
      children: second_router
    }
  ]
})

export default router
