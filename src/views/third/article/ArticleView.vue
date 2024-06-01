<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { baseUrl } from '@/api/index.js'

const menuItems = ref([])
// const menuItems = ref([
//     {
//         label: 'Coding',
//         icon: 'pi pi-code',
//         items: [
//             [
//                 {
//                     label: 'Languages',
//                     items: [{ label: 'C' }, { label: 'C++' }, { label: 'Python' }, { label: 'Rust' }, { label: 'Golang' }, { label: 'Java' }, { label: 'JavaScript' }]
//                 }
//             ],
//             [
//                 {
//                     label: 'Database',
//                     items: [{ label: 'MySQL' }, { label: 'PostgreSQL' }, { label: 'MongoDB' }, { label: 'SQLite' }]
//                 },
//                 {
//                     label: 'Cache DB',
//                     items: [{ label: 'Redis' }, { label: 'Memcached' }]
//                 }
//             ],
//             [
//                 {
//                     label: 'Frameworks',
//                     items: [{ label: 'Django' }, { label: 'Flask' }, { label: 'Vue.js' }, { label: 'Gin' }, { label: 'Actix-web' }]
//                 }
//             ],
//             [
//                 {
//                     label: 'DevOps',
//                     items: [{ label: 'Docker' }, { label: 'Kubernetes' }, { label: 'CI/CD' }, { label: 'Monitoring' }]
//                 },
//                 {
//                     label: 'Version Control',
//                     items: [{ label: 'Git' }, { label: 'SVN' }]
//                 }
//             ]
//         ]
//     },
//     {
//         label: 'CS',
//         icon: 'pi pi-desktop',
//         items: [
//             [
//                 {
//                     label: 'Theory',
//                     items: [{ label: 'Algorithms' }, { label: 'Data Structures' }, { label: 'Computability' }]
//                 }
//             ],
//             [
//                 {
//                     label: 'Systems',
//                     items: [{ label: 'Operating Systems' }, { label: 'Distributed Systems' }, { label: 'Realtime Systems' }]
//                 }
//             ],
//             [
//                 {
//                     label: 'Security',
//                     items: [{ label: 'Cryptography' }, { label: 'Network Security' }, { label: 'Web Security' }]
//                 }
//             ],
//             [
//                 {
//                     label: 'Artificial Intelligence',
//                     items: [{ label: 'Machine Learning' }, { label: 'Deep Learning' }, { label: 'Natural Language Processing' }]
//                 }
//             ]
//         ]
//     },
//     {
//         label: 'Maths',
//         icon: 'pi pi-sort-numeric-up',
//         items: [
//             [
//                 {
//                     label: 'Fundamentals',
//                     items: [{ label: 'Algebra' }, { label: 'Geometry' }, { label: 'Trigonometry' }]
//                 }
//             ],
//             [
//                 {
//                     label: 'Advanced Mathematics',
//                     items: [{ label: 'Calculus' }, { label: 'Linear Algebra' }, { label: 'Differential Equations' }]
//                 }
//             ],
//             [
//                 {
//                     label: 'Statistics and Probability',
//                     items: [{ label: 'Probability' }, { label: 'Statistics' }, { label: 'Bayesian Statistics' }]
//                 }
//             ],
//             [
//                 {
//                     label: 'Discrete Mathematics',
//                     items: [{ label: 'Graph Theory' }, { label: 'Combinatorics' }, { label: 'Number Theory' }]
//                 }
//             ]
//         ]
//     }
// ])

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
                console.log('resp data', menuData)
                /*
                example:
                    {
                        CS: 10,
                        Coding: 9,
                        ...
                    }
                 */
                // const levelCounts = resp.data['extra']
                //
                // for (const level1Count of Object.keys(levelCounts)) {
                //     menuItems.value.push(
                //         {
                //             label: level1Count,
                //             items: []
                //         }
                //     )
                // }

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

                console.log(menuItems.value)


                // for (const data of menuData) {
                //     if (menuItems.value[firstIndex].label !== data['level1']) {
                //         firstIndex++
                //         menuItems.value[firstIndex].label = data['level1']
                //     }
                // }

                console.log('final menu items', menuItems.value)


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
    <MegaMenu :model="menuItems" />
    <RouterView></RouterView>
</template>

<style scoped lang="scss">
//.article-container {
//    display: grid;
//    grid-template-columns: repeat(2, 1fr); /* 调整这里的300px以适合你的卡片宽度需求 */
//    gap: 10px; /* 卡片间的间隔 */
//}


</style>