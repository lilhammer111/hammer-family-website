<script setup>
import { ref } from 'vue'
import { useNbSotre } from '@/stores/notebook.js'

const nbStore = useNbSotre()

const items = ref([
    { icon: 'pi pi-home', label: 'Home' },
    { icon: 'pi pi-search', label: 'Search' },
    { icon: 'pi pi-inbox', label: 'Inbox' }
])
</script>

<template>
    <div>
        <div class="notebook-title-stl common-stl flex-hor-sb">
            <span>Operate</span>
            <Button
                icon="pi pi-angle-left"
                text
                :pt="{root: {style: 'margin:0'}}"
                @click="nbStore.navVisible = false"
            ></Button>
        </div>
        <div
            v-for="(item, idx) of items"
            :key="idx"
            class="item-stl common-stl flex-hor-start son-gap-10"
        >
            <i :class="item.icon "></i>
            <span>{{ item.label }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables";

.common-stl {
    color: var(--bluegray-400);
    padding: 6px 10px;
    margin: 0 2px;
}


}

.item-stl:hover {
    background-color: $nb-nav-hover-bk-color;
    border-radius: 5px;
}
</style>