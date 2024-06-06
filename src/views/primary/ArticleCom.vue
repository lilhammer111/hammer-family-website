<template>
    <Card class="f-width">
        <template #title>
            <RouterLink
                class="left-nav-item "
                :to="{name: 'article-index'}"
                target="_blank">
                🎓 Article
            </RouterLink>

        </template>
        <template #content>
            <div class="mg-btm-10" v-for="(d, idx) in data" :key="idx">
                <Tag :value="d.tag" class="left-bar-tag-stl" severity="contrast"></Tag>
                <RouterLink class="news-stl" :to="{name: 'article-index'}" target="_blank">
                    {{ d.title }}
                </RouterLink>
            </div>
        </template>
    </Card>
</template>

<script setup>
import { ref } from 'vue'

const data = ref([
    {
        title: 'Create a command line application with Rust',
        tag: 'Recommend'
    },
    {
        title: 'Rust Advance Cheatsheet',
        tag: 'Insight'
    }
])
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.news-stl {
    font-size: $left-bar-title-font-size;
    color: black;
}


</style>
