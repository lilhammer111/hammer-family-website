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
                birthday: null,
                pronouns: '',
                social_account: []
            }
        )


        const batchGetUserInfo = async (userIdList) => {
            const params = userIdList.map(id => `user_ids=${id}`).join('&')

            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/user/batch?${params}`,
                {
                    withCredentials: true,
                }
            )

            if (response.status === 200) {
                return response.data.data
            } else {
                console.log('failed to get user info in batch')
            }
        }

        async function setUserData() {
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

                // console.log('get user info:', response)
                userData.value.avatar_url = response.data['avatar_url']
                userData.value.industry = response.data['industry']
                userData.value.username = response.data['username']
                userData.value.email = response.data['email']
                userData.value.mobile = response.data['mobile']
                userData.value.location = response.data['location']
                userData.value.pronouns = response.data['pronouns']
                userData.value.social_account = response.data['social_account']

                // 单独处理social account
                if (!userData.value.social_account) {
                    userData.value.social_account = ['', '', '']
                }
                while (userData.value.social_account.length === 3) {
                    userData.value.social_account.push('')
                }

                // 单独处理日期
                if (response.data['birthday']) {
                    const dateString = response.data['birthday']
                    const dateParts = dateString.split('-')
                    userData.value.birthday = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
                }

            } catch (e) {
                console.log('get user info error: ', e)
            }
        }

        function clearUserData() {
            userData.value = {
                avatar_url: '',
                industry: '',
                username: '',
                email: '',
                mobile: '',
                location: '',
                birthday: null,
                pronouns: '',
                social_account: []
            }
        }

        return {
            userData,
            setUserData,
            clearUserData,
            batchGetUserInfo
        }
    }
)