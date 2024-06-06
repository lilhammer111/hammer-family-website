<template>
    <div class="flex-ver-start son-gap-10">
        <div class="header-container v-cen">
            <div class="flex-hor-sb inner-header">
                <div style="height: 100%" class="flex-hor-start">
                    <img
                        class="logo"
                        :src="logo"
                        alt="logo"
                        srcset=""
                        @click="goHome"
                        style="height: 80%;object-fit: contain;margin: 0 20px 0 0"
                    />
                    <SearchCom></SearchCom>
                </div>
                <div>
                    <div v-if="isSignIn" class="flex-hor-sb son-gap-10">
                        <PostBlessCom></PostBlessCom>
                        <AvatarCom></AvatarCom>
                    </div>
                    <div class="flex-hor-sb son-gap-10" v-else>
                        <LoginCom></LoginCom>
                        <RegisterCom></RegisterCom>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-container">
            <div class="main">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>

<script setup>
import logo from '@/assets/pictures/hammer_logo.webp'
import LoginCom from '@/views/primary/header/LoginCom.vue'
import RegisterCom from '@/views/primary/header/RegisterCom.vue'
import SearchCom from '@/views/primary/header/SearchCom.vue'
import AvatarCom from '@/views/primary/header/AvatarCom.vue'
import PostBlessCom from '@/views/primary/header/PostWishCom.vue'
import router from '@/router/index.js'
import { isSignIn } from '@/stores/user.js'

function goHome() {
    router.push({ name: 'home' })
}

</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.logo:hover {
    cursor: pointer;
}

.inner-header {
    height: 100%;
    width: $max-page-width;
    margin: 0 auto;
}

.header-container {
    background-color: #ffffff;
    height: 60px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    position: fixed;
    left: 0;
    right: 0;
    z-index:9999;
}

.main-container {
    width: 100hh;
    margin-top: 75px;
}

.main {
    display: flex;
    flex-direction: row;
    gap: $m-gap;
    margin: 0 auto;
    max-width: $max-page-width;
    min-width: $min-page-width;
}
</style>
