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
import WishCom from '@/components/message/WishCom.vue'
import FoodCom from '@/components/message/share/FoodCom.vue'
import MovieCom from '@/components/message/share/MovieCom.vue'
import BookCom from '@/components/message/share/BookCom.vue'
import { isSignIn } from '@/stores/user.js'
import { useToast } from 'primevue/usetoast';
import SettingsView from '@/views/second/SettingsView.vue'
import ProfileView from '@/views/second/ProfileView.vue'
import InfoView from '@/views/third/prifile/InfoView.vue'
import BiasView from '@/views/third/prifile/BiasView.vue'
import SecureView from '@/views/third/prifile/SecureView.vue'

const lilhammer_son_router = [
  {
    path: 'activity',
    name: 'hammer-activity',
    component: HammerActivityCom
  },
  {
    path: 'record',
    name: 'hammer-record',
    component: HammerRecordCom
  }
]

const msg_router = [
  {
    path: 'news',
    name: 'news',
    component: NewsView
  },
  {
    path: 'wish',
    name: 'wish',
    component: WishCom
  },
  {
    path: 'food',
    name: 'food',
    component: FoodCom
  },
  {
    path: 'movie',
    name: 'movie',
    component: MovieCom
  },
  {
    path: 'book',
    name: 'book',
    component: BookCom
  },
]

const third_router = [
  {
    path: 'msg',
    name: 'msg',
    component: MsgView,
    children: msg_router
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
    path: 'lilhammer',
    name: 'lilhammer',
    component: LilhammerView,
    children: lilhammer_son_router
  }
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
  },
  {
    path:'settings',
    name: 'settings',
    component: SettingsView,
  },
  {
    path:'profile',
    name: 'profile',
    component: ProfileView,
    children: [
      {
        path:'info',
        name: 'info',
        component: InfoView,
      },
      {
        path:'bias',
        name: 'bias',
        component: BiasView,
      },
      {
        path:'secure',
        name: 'secure',
        component: SecureView,
      },
    ],
  },
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

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const publicPages = ['login', 'register', 'home', 'welcome']; // 允许访问的路由名称

  if (!publicPages.includes(to.name) && !isSignIn.value) {
    // 如果访问的不是公开页面并且用户没有登录，跳转到登录页面
    next({ name: 'login' });
    const toast = useToast();
    toast.add({
      severity: 'Contrast',
      summary: 'Hello! Please log in first. If you don\'t have an account, kindly register.',
      group: 'dialog',
      life: 15000
    })
  } else {
    // 否则允许访问
    next();
  }
});

export default router
