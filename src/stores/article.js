import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { baseUrl, defaultPageQuery } from '@/api/index.js'
import defaultArticleCover from '@/assets/pictures/python.jpeg'

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

            if (resp.status === 200) {

                articleDataList.value = resp.data.data
                for (let article of articleDataList.value) {
                    if (!article.cover_url) {
                        article.cover_url = defaultArticleCover
                    }
                }
                console.log('article data list', articleDataList.value)
            } else {
                console.log('failed to get article data')
            }
        }

        const currentArticle = ref(null)

        const setCurrentArticle = (articleListIdx) => {
            currentArticle.value = articleDataList.value[articleListIdx]
            console.log('cur article', currentArticle.value)
        }

        return { articleForm, articleDataList, currentArticle, loadArticleList, setCurrentArticle }
    },
    { persist: true }
)