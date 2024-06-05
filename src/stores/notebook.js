import { defineStore } from 'pinia'
import {  ref } from 'vue'
import axios from 'axios'
import { baseUrl } from '@/api/index.js'
import router from '@/router/index.js'

export const useNbStore = defineStore(
    'notebook',
    () => {
        const navVisible = ref(true)
        const curArticle = ref(null)
        const noteItems = ref([])
        const tutorialItems = ref([])
        const displayCurrentArticle = ref(false)
        const curDirContents = ref([])
        const showDirIcon = ref('pi pi-eye')
        const dirVisible = ref(false)
        const showDirTipText = ref('Show Directory')

        const resetCurrentArticle = async (item, md, forEdit) => {
            curArticle.value = item

            if (forEdit) {
                return
            }

            await router.push({ name: 'nb-text' })
            curDirContents.value = []

            if (curArticle.value['text_url']) {
                const resp = await axios.get(
                    curArticle.value['text_url']
                )

                if (resp.status === 200) {
                    curArticle.value['text'] = md.render(resp.data)
                } else {
                    console.log('get static doc is not 200')
                }
            } else {
                curArticle.value['text'] = md.render(curArticle.value['text'])
            }
            displayCurrentArticle.value = true
        }

        async function setItems() {
            try {
                const resp = await axios.get(
                    `${baseUrl}/article/owned`,
                    { withCredentials: true }
                )

                if (resp.status === 200) {
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

        const toggleDir = () => {
            dirVisible.value = !dirVisible.value
            showDirIcon.value = dirVisible.value ? 'pi pi-eye-slash' : 'pi pi-eye'
            showDirTipText.value = dirVisible.value ? 'Hidden Directory' : 'Show Directory'
        }

        return {
            navVisible,
            curArticle,
            noteItems,
            tutorialItems,
            displayCurrentArticle,
            curDirContents,
            showDirIcon,
            dirVisible,
            showDirTipText,
            setItems,
            toggleDir,
            resetCurrentArticle
        }
    }
)