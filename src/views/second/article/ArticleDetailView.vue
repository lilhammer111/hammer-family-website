<script setup>
import AvaWithNameCom from '@/views/common/AvaWithNameCom.vue'
import hammerPng from '@/assets/pictures/hammer.jpg'
import pythonPng from '@/assets/pictures/python.jpeg'
import { useArticleStore } from '@/stores/article.js'

const articleStore = useArticleStore()

</script>

<template>
    <div style="width:100%">
        <div style="position: fixed;top:200px" class="flex-ver-start son-gap-20">
            <Button icon="pi pi-bookmark" text rounded size="large"></Button>
            <Button icon="pi pi-thumbs-up" text rounded size="large"></Button>
            <Button icon="pi pi-thumbs-down" text rounded size="large"></Button>
        </div>
        <div class="flex-hor-start-start son-gap-10" style="padding-left:70px;width:auto">
            <Card>
                <template #header>
                    <img alt="user header" :src="pythonPng" width="100%" />
                </template>
                <template #title>
                    <h1>{{ articleStore.currentArticle.title }}</h1>
                </template>
                <template #subtitle>
                    <div class="flex-hor-start son-gap-10">
                        <Button v-for="(tag, idx) of articleStore.currentArticle.tags" :key="idx" icon="pi pi-hashtag"
                                :label="tag"
                                link></Button>
                    </div>
                </template>
                <template #content>
                    <div v-html="articleStore.currentArticle.text"></div>
                </template>
            </Card>
            <Card style="width: 30%">
                <template #title>
                    <AvaWithNameCom :avatar="hammerPng" :name="'demon'" :withFollowBtn="true"></AvaWithNameCom>
                </template>
                <template #content>
                    Demon is an experienced software developer specializing in both frontend and backend development,
                    with a strong expertise in Vue 3 and PrimeVue. He is dedicated to creating efficient and
                    user-friendly applications, with a passion for innovation and technology, and enjoys tackling
                    complex programming challenges.
                </template>
            </Card>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>