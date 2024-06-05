<script setup>
import { useNbStore } from '@/stores/notebook.js'
import { computed } from 'vue'

const nbStore = useNbStore()
const textWidth = computed(() => {
    return nbStore.dirVisible ? '80%' : '100%'
})


const gotoSlug = (event, dirItem) => {
    console.log('goto slug event', event)
    console.log('goto slug dir item', dirItem)
    const btnEl = event.currentTarget
    const hEl = document.getElementById(dirItem.slug)
    btnEl.scrollIntoView(
        { behavior: 'smooth' }
    )
    hEl.scrollIntoView(
        { behavior: 'smooth' }
    )
}
</script>

<template>
    <div>
        <div class="flex-hor-start-start" style="width:100%" v-if="nbStore.displayCurrentArticle">
            <!--      文章主体内容      -->
            <div class="article-content-stl">
                <div v-html="nbStore.curArticle.text"></div>
            </div>
            <Divider v-show="nbStore.dirVisible" layout="vertical" :pt="{root: {style: 'height: 50vh'}}"></Divider>
            <!--      文章大纲      -->
            <div v-if="nbStore.dirVisible" class="article-dir-stl">
                <div class="flex-ver-start-start">
                    <Button
                        v-for="(dir, idx) of nbStore.curDirContents"
                        :key="idx"
                        link
                        :label="dir.text"
                        :pt="{root: {style: 'font-size: 14px;padding: 2px 5px;'},label:{style:'white-space:nowrap'}}"
                        @click="(event) => gotoSlug(event, dir)"
                    ></Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables";

.article-content-stl {
    width: v-bind(textWidth);
    padding: 0 60px;
    overflow: auto;
    height: calc(100vh - 122px);
}

.article-dir-stl {
    width: 20%;
    overflow: auto;
    height: 50vh;
    padding: 10px;
}
</style>