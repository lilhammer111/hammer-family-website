<script setup>
import genesisAvatar from '@/assets/pictures/genesis.jpg'
import { onMounted, ref } from 'vue'
import AvaWithNameCom from '@/views/common/AvaWithNameCom.vue'
import ArticleOpCom from '@/views/second/article/com/ArticleOpCom.vue'
import router from '@/router/index.js'
import { useArticleStore } from '@/stores/article.js'

const cardPt = ref({
    root: { style: 'display: flex;justify-content: start;align-items: center;flex-direction:row;border-radius: 5px;height: 260px' },
    header: { style: 'width: 30%' },
    title: { style: 'font-size: 1.8rem' },
    subtitle: { style: 'font-size: 16px;' },
    body: { style: 'width: 70%;padding: 1rem;gap:5px' }
})


const intoDetail = (idx) => {
    articleStore.setCurrentArticle(idx)
    router.push(
        {
            name: 'article-detail'
        }
    )
}
const articleStore = useArticleStore()

onMounted(() => {
    articleStore.loadArticleList()
})
</script>

<template>
    <Card style="overflow: hidden;" v-for="(article,idx) in articleStore.articleDataList" :pt="cardPt"
          :key="article.id">
        <template #header>
            <img
                alt="user header"
                :src="article.cover_url"
                style="padding:0 10px;width: 100%;height:auto"
            />
        </template>
        <template #title>
            <!--                <Button :label="article.title" link style="font-size: 26px;margin:0"></Button>-->
            <div type="button" class="title-hover" @click="intoDetail(idx)">
                {{ article.title }}
            </div>
        </template>
        <template #subtitle>
            <div class="flex-hor-sb son-gap-10">
                <AvaWithNameCom name="Jojo" :avatar="genesisAvatar"></AvaWithNameCom>
                <ArticleOpCom></ArticleOpCom>
            </div>
        </template>
        <template #content>
            <div class="fix-height">
                {{ article.summary }}
            </div>
        </template>
    </Card>
</template>

<style scoped lang="scss">
.fix-height {
    height: 100px;
    overflow: auto;
}

.title-hover:hover {
    text-decoration: underline; /* 添加下划线 */
    cursor: pointer; /* 鼠标指针变成手形，表示可点击 */
}
</style>