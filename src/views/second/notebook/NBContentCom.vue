<script setup>
import { useNbStore } from '@/stores/notebook.js'
import { computed, ref } from 'vue'

const nbStore = useNbStore()
const dirVisible = ref(false)
const textWidth = computed(() => {
    return dirVisible.value ? '80%' : '100%'
})

const showDirIcon = ref('pi pi-eye')
const showDirTipText = ref('Show Directory')
const toggleDir = () => {
    dirVisible.value = !dirVisible.value
    showDirIcon.value = dirVisible.value ? 'pi pi-eye-slash' : 'pi pi-eye'
    showDirTipText.value = dirVisible.value ? 'Hidden Directory' : 'Show Directory'
}

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
        <div class="flex-reverse-hor-sb">
            <div>
                <Button
                    :icon="showDirIcon"
                    text
                    v-tooltip.bottom="showDirTipText"
                    @click="toggleDir"
                >
                </Button>
                <Button
                    icon="pi pi-share-alt"
                    text
                    v-tooltip.bottom="'Share'"
                >
                </Button>
                <!--                <Button-->
                <!--                    v-if="nbStore.curArticle.kind === 'note'"-->
                <!--                    icon="pi pi-book"-->
                <!--                    v-tooltip.bottom="'Publish the note'"-->
                <!--                    text-->
                <!--                >-->
                <!--                </Button>-->
            </div>
            <!--      文章标题      -->
            <div style="margin: 4px 10px" v-if="nbStore.displayCurrentArticle">{{ nbStore.curArticle.title }}</div>

            <Button
                v-show="!nbStore.navVisible"
                @click="nbStore.navVisible = true"
                icon="pi pi-bars"
                text
            ></Button>
        </div>
        <Divider :pt="{root: {style: 'margin: 10px 0 0  0;'}}"></Divider>

        <div class="flex-hor-start-start" style="width:100%" v-if="nbStore.displayCurrentArticle">
            <!--      文章主体内容      -->
            <div class="article-content-stl">
                <div v-html="nbStore.curArticle.text"></div>
            </div>
            <Divider v-show="dirVisible" layout="vertical" :pt="{root: {style: 'height: 50vh'}}"></Divider>
            <!--      文章大纲      -->
            <div v-if="dirVisible" class="article-dir-stl">
                <div style="margin-bottom: 10px">Directory</div>
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