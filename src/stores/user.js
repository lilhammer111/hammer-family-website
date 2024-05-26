import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const isSignIn = ref(localStorage.getItem('isSignIn') === 'true')

watchEffect(
  () => {
    localStorage.setItem('isSignIn', String(isSignIn.value))
  }
)

export const useUserStore = defineStore(
  'user',
  () => {
    const userData = ref(
      {
        avatar_url: '',
        industry: '',
        username: '',
        email: '',
        mobile: '',
        location: '',
        birthday: '',
        pronouns: '',
        social_account: []
      }
    )

    async function initUserInfo() {
      try {
        if (!isSignIn.value) {
          return
        }

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/user`,
          {
            withCredentials: true
          }
        )

        console.log('get user info:', response)
        userData.value.avatar_url = response.data['avatar_url']
        userData.value.industry = response.data['industry']
        userData.value.username = response.data['username']
        userData.value.email = response.data['email']
        userData.value.mobile = response.data['mobile']
        userData.value.location = response.data['location']
        userData.value.birthday = response.data['birthday']
        userData.value.pronouns = response.data['pronouns']

        for (const idx in userData.value.social_account) {
          userData.value.social_account[idx].url = response.data['social_account'][idx]
        }
      } catch (e) {
        console.log('get user info error: ', e)
      }
    }

    return { userData, initUserInfo }
  }
)