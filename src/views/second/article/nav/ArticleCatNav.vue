<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { baseUrl } from '@/api/index.js'

const menuItems = ref([])

onMounted(
    async () => {
        try {
            const resp = await axios.get(
                `${baseUrl}/article/category`,
                {
                    withCredentials: true
                }
            )

            if (resp.status === 200) {
                //handle
                const menuData = resp.data['data']

                let sIndex = 0
                let fIndex = 0
                for (const data of menuData) {
                    if (!menuItems.value.length) {
                        menuItems.value.push(
                            {
                                label: data['level1'],
                                items: []
                            }
                        )
                    }

                    if (menuItems.value[fIndex]['label'] === data['level1']) {
                        if (!menuItems.value[fIndex]['items'].length) {
                            sIndex = 0
                            menuItems.value[fIndex]['items'].push(
                                [
                                    {
                                        label: data['level2'],
                                        items: []
                                    }
                                ]
                            )
                        }

                        if (menuItems.value[fIndex]['items'][sIndex][0].label === data['level2']) {
                            menuItems.value[fIndex]['items'][sIndex][0].items.push({ label: data['level3'] })
                        } else {
                            sIndex++
                            menuItems.value[fIndex]['items'].push(
                                [
                                    {
                                        label: data['level2'],
                                        items: []
                                    }
                                ]
                            )
                            menuItems.value[fIndex]['items'][sIndex][0].items.push({ label: data['level3'] })
                        }
                    } else {
                        fIndex++
                        menuItems.value.push(
                            {
                                label: data['level1'],
                                items: []
                            }
                        )
                    }
                }

            } else {
                console.log('status is not ok')
            }
        } catch (err) {
            console.log('err', err)
        }
    }
)
</script>

<template>
    <MegaMenu :model="menuItems">
    </MegaMenu>
</template>

<style scoped lang="scss">

</style>