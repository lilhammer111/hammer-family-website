import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { baseUrl } from '@/api/index.js'

export const useNbStore = defineStore(
    'notebook',
    async () => {
        const navVisible = ref(true)
        const curArticle = ref()
        const noteItems = ref([])
        const tutorialItems = ref([])

        const setItems = async () => {
            try {
                const resp = await axios.get(
                    `${baseUrl}/article/owned`,
                    { withCredentials: true }
                )

                if (resp.status === 200) {
                    console.log('resp data', resp.data['data'])
                    const data = resp.data['data']
                    for (const item of data) {
                        if (item['kind'] === 'note') {
                            noteItems.value.push(item)
                        } else {
                            tutorialItems.value.push(item)
                        }
                    }
                } else {
                    console.log('err')
                }
            } catch (err) {
                console.log(err)
            }
        }

        return { navVisible, curArticle, noteItems, tutorialItems, setItems }
    }
)