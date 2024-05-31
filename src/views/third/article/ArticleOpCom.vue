<script setup>
import { ref } from 'vue'

const menuPt = ref({
    root: {style: "font-size: 14px"}
})
const menu = ref()
const items = ref([
    {
        label: 'Read Later',
        icon: 'pi pi-plus'
    },
    {
        label: 'Not Interested',
        icon: 'pi pi-thumbs-down'
    },
    {
        label: 'Mute Author',
        icon: 'pi pi-eye-slash'
    }
])

const toggle = (event) => {
    menu.value.toggle(event)
}
</script>

<template>
    <i class="pi pi-ellipsis-v" @mouseover="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" :pt="menuPt"/>
</template>

<style scoped lang="scss">

</style>