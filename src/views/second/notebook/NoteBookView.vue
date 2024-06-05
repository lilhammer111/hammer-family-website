<script setup>
import NBNavBarCom from '@/views/second/notebook/nav/NBNavBarCom.vue'
import { onMounted } from 'vue'
import { useNbStore } from '@/stores/notebook.js'

const nbStore = useNbStore()

onMounted(async () => {
    await nbStore.setItems()
})


</script>

<template>
    <div class="notebook-container">
        <NBNavBarCom class="notebook-nav-stl" v-show="nbStore.navVisible"></NBNavBarCom>
        <Divider layout="vertical" :pt="{root: {style: 'margin: 0;height: calc(100vh - 85px)'}}"
                 v-show="nbStore.navVisible"></Divider>
        <div class="notebook-content-stl">
            <div class="flex-reverse-hor-sb">
                <div>
                    <Button
                        :icon="nbStore.showDirIcon"
                        text
                        v-tooltip.bottom="nbStore.showDirTipText"
                        @click="nbStore.toggleDir"
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
            <RouterView></RouterView>
        </div>
    </div>
</template>

<style scoped lang="scss">

.notebook-container {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.notebook-nav-stl {
    width: 20%
}

.notebook-content-stl {
    width: 80%;
    margin: 0 6px;
}
</style>