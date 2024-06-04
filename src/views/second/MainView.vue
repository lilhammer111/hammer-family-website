<script setup>
import NavCom from '@/views/common/NavCom.vue'
import NewsCom from '@/views/primary/NewsCom.vue'
import ArticleCom from '@/views/primary/ArticleCom.vue'
import { ref } from 'vue'


const navItems = ref([
    {
        text: '🏡 Home',
        icon: '',
        route: 'home'
    },
    {
        text: '🌱 Hammer',
        icon: '',
        route: 'wish'
    },
    {
        text: '💬 ChatBot',
        icon: '',
        route: 'ai'
    },
    {
        text: '📕 NoteBook',
        icon:'',
        route:'notebook',
        target: '_blank'
    }
])

</script>

<template>
    <div class="nav-bar-container">
        <NavCom :items="navItems"></NavCom>
        <NewsCom></NewsCom>
        <ArticleCom></ArticleCom>
    </div>
    <div class="main-content-container">
        <RouterView></RouterView>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables";

.dialog-stl {
    background: rgba(0, 0, 0, 0.5);
    -webkit-backdrop-filter: blur(10px);
    left: 100px;
    backdrop-filter: blur(10px);
}

.nav-bar-container {
    width: $nav-width-proportion * 100%;
}

.nav-bar-container > * {
    margin-bottom: $m-gap;
}

.main-content-container {
    width: calc(1 - $nav-width-proportion)* 100%;
    display: flex;
    flex-direction: column;
    gap: $m-gap;
}


.dialog-box-stl, .para-stl {
    width: 260px;
    position: absolute;
    top: -50px;
    right: 40%;
    border-radius: 10px;
}

.para-stl {
    font-size: 13px;
    font-weight: bolder;
    top: 4px;
    right: -10px;
}


.sp-stl {
    color: $font-color-gray;
    position: absolute;
    top: -10px;
    right: 5px;
}
</style>