<script setup>
import genesisAvatar from '@/assets/pictures/genesis.jpg'
import { onMounted, ref } from 'vue'
import AvaWithNameCom from '@/components/common/AvaWithNameCom.vue'
import python_png from '@/assets/pictures/python.jpeg'
import ArticleOpCom from '@/views/second/article/ArticleOpCom.vue'

const cardPt = ref({
    root: { style: 'display: flex;justify-content: start;align-items: center;flex-direction:row;border-radius: 5px' },
    header: { style: 'width: 30%' },
    title: { style: 'font-size: 1.8rem' },
    subtitle: { style: 'font-size: 16px;' },
    body: { style: 'width: 70%;padding: 1rem;gap:5px' }
})


const articles = ref([
    {
        cover: python_png,
        title: 'Create a command line application with Rust',
        author: 'Demon',
        summary: 'In the rapidly evolving world of artificial intelligence, the ability to effectively perform AI inference is crucial for deploying intelligent systems in real-world applications. This article delves into the fundamentals of AI inference, exploring the techniques and technologies that enable AI models to make predictions and decisions based on new data. Whether you\'re a seasoned data scientist, a software developer, or an AI enthusiast, this guide provides you with a clear understanding of the key concepts and practical applications of AI inference.'
    },
    {
        cover: python_png,
        title: 'How to ai infer',
        author: 'Demon',
        summary: 'In the rapidly evolving world of artificial intelligence, the ability to effectively perform AI inference is crucial for deploying intelligent systems in real-world applications. This article delves into the fundamentals of AI inference, exploring the techniques and technologies that enable AI models to make predictions and decisions based on new data. Whether you\'re a seasoned data scientist, a software developer, or an AI enthusiast, this guide provides you with a clear understanding of the key concepts and practical applications of AI inference.'
    },
    {
        cover: python_png,
        title: 'How to ai infer',
        author: 'Demon',
        summary: 'In the rapidly evolving world of artificial intelligence, the ability to effectively perform AI inference is crucial for deploying intelligent systems in real-world applications. This article delves into the fundamentals of AI inference, exploring the techniques and technologies that enable AI models to make predictions and decisions based on new data. Whether you\'re a seasoned data scientist, a software developer, or an AI enthusiast, this guide provides you with a clear understanding of the key concepts and practical applications of AI inference.'
    },
    {
        cover: python_png,
        title: 'How to ai infer',
        author: 'Demon',
        summary: 'In the rapidly evolving world of artificial intelligence, the ability to effectively perform AI inference is crucial for deploying intelligent systems in real-world applications. This article delves into the fundamentals of AI inference, exploring the techniques and technologies that enable AI models to make predictions and decisions based on new data. Whether you\'re a seasoned data scientist, a software developer, or an AI enthusiast, this guide provides you with a clear understanding of the key concepts and practical applications of AI inference.'
    }
])

const intoDetail = () => {
}

onMounted(()=> {})
</script>

<template>
    <Card style="overflow: hidden;" v-for="(article, idx) in articles" :pt="cardPt" :key="idx">
        <template #header>
            <img
                alt="user header"
                :src="article.cover"
                style="padding:0 10px;width: 100%;height:auto"
            />
        </template>
        <template #title>
            <!--                <Button :label="article.title" link style="font-size: 26px;margin:0"></Button>-->
            <div type="button" class="title-hover" @click="intoDetail">
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