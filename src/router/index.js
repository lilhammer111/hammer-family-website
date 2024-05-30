import { createRouter, createWebHashHistory } from 'vue-router'
import WelcomeView from '@/views/primary/WelcomeView.vue'
import LoginView from '@/views/second/LoginView.vue'
import IndexView from '@/views/primary/WholeView.vue'
import RegisterView from '@/views/second/RegisterView.vue'
import HomeView from '@/views/third/HomeView.vue'
import MsgView from '@/views/third/ScoreView.vue'
import ArticleView from '@/views/third/ArticleView.vue'
import MainView from '@/views/second/MainView.vue'
import LilhammerView from '@/views/third/LilhammerView.vue'
import NewsView from '@/views/third/NewsView.vue'
import HammerActivityCom from '@/components/lilhammer/JournalCom.vue'
import HammerRecordCom from '@/components/lilhammer/MetricCom.vue'
import WishCom from '@/components/lilhammer/WishCom.vue'
import FoodCom from '@/components/score/share/FoodCom.vue'
import MovieCom from '@/components/score/share/MovieCom.vue'
import BookCom from '@/components/score/share/BookCom.vue'
import { isSignIn } from '@/stores/user.js'
import { useToast } from 'primevue/usetoast'
import SettingsView from '@/views/second/SettingsView.vue'
import ProfileView from '@/views/second/ProfileView.vue'
import InfoView from '@/views/third/profile/InfoView.vue'
import SecureView from '@/views/third/settings/SecureView.vue'
import PreferenceView from '@/views/third/settings/PreferenceView.vue'
import PrivacyView from '@/views/third/settings/PrivacyView.vue'
import NotificationView from '@/views/third/settings/NotificationView.vue'
import ActivityView from '@/views/third/profile/ActivityView.vue'
import AchievementView from '@/views/third/profile/AchievementView.vue'
import ChatBotView from '@/views/third/ai/ChatBotView.vue'

const lilhammer_son_router = [
  {
    path: 'journal',
    name: 'journal',
    component: HammerActivityCom
  },
  {
    path: 'record',
    name: 'hammer-record',
    component: HammerRecordCom
  },
  {
    path: 'wish',
    name: 'wish',
    component: WishCom
  },
]

const community_router = [
  {
    path: 'news',
    name: 'news',
    component: NewsView
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
  }
]

const third_router = [
  {
    path: 'msg',
    name: 'msg',
    component: MsgView,
    children: community_router
  },
  {
    path: 'home',
    name: 'home',
    component: HomeView
  },
  {
    path: 'article',
    name: 'article',
    component: ArticleView
  },
  {
    path: 'hammer',
    name: 'hammer',
    component: LilhammerView,
    children: lilhammer_son_router
  },
  {
    path:'ai',
    name: 'ai',
    component: ChatBotView,
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
    path: 'settings',
    name: 'settings',
    component: SettingsView,
    children: [
      {
        path: 'secure',
        name: 'secure',
        component: SecureView
      },
      {
        path: 'preferences',
        name: 'preferences',
        component: PreferenceView
      },
      {
        path: 'privacy',
        name: 'privacy',
        component: PrivacyView
      },
      {
        path: 'notification',
        name: 'notification',
        component: NotificationView
      }
    ]
  },
  {
    path: 'profile',
    name: 'profile',
    component: ProfileView,
    children: [
      {
        path: 'info',
        name: 'info',
        component: InfoView
      },
      {
        path: 'activity',
        name: 'activity',
        component: ActivityView
      },
      {
        path: 'achievement',
        name: 'achievement',
        component: AchievementView
      }
    ]
  }
]

const router = createRouter({
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:catchAll(.*)', // Vue 3 使用 /:catchAll(.*) 来捕获所有未定义的路由
      redirect: '/' // 重定向到主页
    },
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
  const publicPages = ['login', 'register', 'home', 'welcome'] // 允许访问的路由名称

  if (!publicPages.includes(to.name) && !isSignIn.value) {
    // 如果访问的不是公开页面并且用户没有登录，跳转到登录页面
    next({ name: 'login' })
    const toast = useToast()
    toast.add({
      severity:"plain",
      summary: 'Hello! Please log in first. If you don\'t have an account, kindly register.',
      group: 'dialog',
      life: 15000
    })
  } else {
    // 否则允许访问
    next()
  }
})

export default router
