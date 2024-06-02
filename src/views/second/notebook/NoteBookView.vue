<script setup>
import NBNavCom from '@/views/second/notebook/NBNavCom.vue'
import NoteBookContentCom from '@/views/second/notebook/NoteBookContentCom.vue'
import { useNbSotre } from '@/stores/notebook.js'

const notebookStore = useNbSotre()
</script>

<template>
    <div class="notebook-container">
        <NBNavCom class="notebook-nav-stl" v-show="notebookStore.navVisible"></NBNavCom>
        <Divider layout="vertical" :pt="{root: {style: 'margin: 0'}}" v-show="notebookStore.navVisible"></Divider>
        <NoteBookContentCom class="notebook-content-stl"></NoteBookContentCom>
    </div>
</template>

<style scoped lang="scss">

.notebook-container {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.notebook-nav-stl {
    flex: 1 1 20%;
    height: calc(100vh - 85px);
}

.notebook-content-stl {
    flex: 1 1 80%;
}
</style>