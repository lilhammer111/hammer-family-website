<template>
    <div class="notebook-title-stl   flex-hor-sb">
        <span>{{ label }}</span>
        <Button
            icon="pi pi-plus"
            text
            rounded
            :pt="{root: {style: 'margin:0'}}"
            @click="action"
        ></Button>
    </div>
    <div
        v-for="(item, idx) of noteItems"
        :key="idx"
        class="notebook-item-stl notebook-common-stl flex-hor-sb"
        @click="setCurrentArticle(item)"
    >
        <span>{{ item.title }}</span>
        <Button
            icon="pi pi-ellipsis-h"
            text
            :pt="{
            icon: {style: 'color: var(--bluegray-400);font-size: 1rem'},
            root: {style: 'height: 1.5rem;width:1.5rem;margin:0'}
        }"
        ></Button>
    </div>
</template>

<script setup>
import { useNbStore } from '@/stores/notebook.js'
import { storeToRefs } from 'pinia'

defineProps({
    label: String,
    action: Function
})

const nbStore = useNbStore()
const { noteItems } = storeToRefs(nbStore)

const setCurrentArticle = (item) => {
    nbStore.curArticle = item
}


</script>


<style scoped lang="scss">
</style>