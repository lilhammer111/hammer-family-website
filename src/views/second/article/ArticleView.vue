<template>
    <div class="flex-hor-start-start son-gap-10" style="width:100%">
        <div style="width: 15%" class="flex-ver-start son-gap-20">
            <div v-for="(item, idx) of navItems" :key="idx">
                <div class="tag-title-stl">{{ item.title }}</div>
                <div class="flex-ver-start  tag-stl">
                    <div v-for="(tag, tagIdx) of item.tags" :key="tagIdx">
                        <Button icon="pi pi-hashtag" :label="tag" link></Button>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 85%" class="flex-ver-start son-gap-10">
            <div class="flex-hor-sb">
                <div class="flex-hor-start son-gap-10">
                    <Button label="Latest" text></Button>
                    <Button label="Trending" text></Button>
                    <Button label="Insight" text></Button>
                </div>
                <Button severity="contrast" label="Write Article" @click="showEditor"></Button>
            </div>
            <ArticleCardCom></ArticleCardCom>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router/index.js'
import ArticleCardCom from '@/views/second/article/com/ArticleCardCom.vue'


const showEditor = () => {
    // router.push({name: 'article-editor'})
    const url = router.resolve({ name: 'article-editor' }).href
    window.open(url, '_blank')
}

const navItems = ref([
    { title: 'Tags', tags: ['rust', 'python', 'golang'] }
])


</script>


<style scoped lang="scss">
.tag-title-stl {
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 20px;
    color: var(--gray-800);
    font-weight: bolder;
}

.tag-stl {
    color: var(--gray-600)
}
</style>