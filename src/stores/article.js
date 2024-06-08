import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { baseUrl, defaultPageQuery } from '@/api/index.js'
import defaultArticleCover from '@/assets/pictures/python.jpeg'
import { useUserStore } from '@/stores/user.js'

const defaultArticleForm = {
    title: '',
    cover_url: '',
    kind: 'article',
    summary: '',
    tags: [],
    text: ''
}

export const useArticleStore = defineStore(
    'article',
    () => {
        const articleForm = ref({
            title: '',
            cover_url: '',
            kind: 'article',
            summary: '',
            tags: [],
            text: ''
        })

        const articleDataList = ref([])

        const loadArticleList = async () => {
            const resp = await axios.get(
                `${baseUrl}/article/paginated`,
                {
                    withCredentials: true,
                    params: defaultPageQuery.value
                }
            )

            let userIdList = []

            if (resp.status === 200) {
                articleDataList.value = resp.data.data
                for (let article of articleDataList.value) {
                    // set default cover
                    if (!article.cover_url) {
                        article.cover_url = defaultArticleCover
                    }
                    // get author id list for requesting later
                    userIdList.push(article.author_id)
                }
                console.log('article data list', articleDataList.value)

                const userStore = useUserStore()
                const users = await userStore.batchGetUserInfo(userIdList)

                console.log('users: ', users)

                for (let article of articleDataList.value) {
                    for (const user of users) {
                        if (article.author_id === user.id) {
                            article.author_name = user.username
                            article.author_avatar = user.avatar_url
                        }
                    }
                }

            } else {
                console.log('failed to get article data')
            }
        }

        const currentArticle = ref(null)

        const setCurrentArticle = (articleListIdx) => {
            currentArticle.value = articleDataList.value[articleListIdx]
            console.log('cur article', currentArticle.value)
        }

        const clearArticleForm = () => {
            articleForm.value = defaultArticleForm
        }

        return {
            articleForm,
            articleDataList,
            currentArticle,
            loadArticleList,
            setCurrentArticle,
            clearArticleForm
        }
    },
    { persist: true }
)