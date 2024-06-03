<script setup>
import { useNbStore } from '@/stores/notebook.js'
import { ref } from 'vue'

const nbStore = useNbStore()
const dirVisible = ref(true)
</script>

<template>
    <div>
        <div class="flex-reverse-hor-sb">
            <div>
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

<!--            <div style="margin: 4px 10px">{{ nbStore.curArticle.title }}</div>-->

            <Button
                v-show="!nbStore.navVisible"
                @click="nbStore.navVisible = true"
                icon="pi pi-bars"
                text
            ></Button>
        </div>
        <div class="flex-hor-start">
            <!--      文章主体内容      -->
            <div style="flex: 1 1 70%"></div>
            <Divider layout="vertical"></Divider>
            <!--      文章大纲      -->
            <div v-if="dirVisible" style="flex: 1 1 30%"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>