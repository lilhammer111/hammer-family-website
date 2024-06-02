<template>
    <Card class="f-width">
        <template #title>
            🎓 Article
        </template>
        <template #content>
            <div class="mg-btm-10" v-for="(data, idx) in datas" :key="idx">
                <Tag :value="data.tag" class="left-bar-tag-stl" severity="contrast"></Tag>
                <RouterLink class="news-stl" :to="{name: 'article-index'}" target="_blank">
                    {{ data.title }}
                </RouterLink>
            </div>
        </template>
    </Card>
</template>

<script setup>
import { ref } from 'vue'

const datas = ref([
    {
        title: 'Create a command line application with Rust',
        tag: 'Recommended'
    },
    {
        title: 'Rust Advance Cheatsheet',
        tag: 'Insight'
    }
])
</script>

<style lang="scss" scoped>
.news-stl {
    font-size: $left-bar-title-font-size;
    color: black;
}
</style>
