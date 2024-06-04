<script setup>
import NBNavBarCom from '@/views/second/notebook/NBNavBarCom.vue'
import NBContentCom from '@/views/second/notebook/NBContentCom.vue'
import { onMounted } from 'vue'
import { useNbStore } from '@/stores/notebook.js'
const nbStore = useNbStore()

onMounted(async ()=> {
    await nbStore.setItems()
})
</script>

<template>
    <div class="notebook-container">
        <NBNavBarCom class="notebook-nav-stl" v-show="nbStore.navVisible"></NBNavBarCom>
        <Divider layout="vertical" :pt="{root: {style: 'margin: 0'}}" v-show="nbStore.navVisible"></Divider>
        <NBContentCom class="notebook-content-stl"></NBContentCom>
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