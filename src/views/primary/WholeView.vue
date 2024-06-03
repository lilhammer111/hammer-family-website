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
                <div class="login-and-avatar-stl v-cen">
                    <PostBlessCom></PostBlessCom>
                    <AvatarCom></AvatarCom>
                    <LoginCom></LoginCom>
                    <RegisterCom></RegisterCom>
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
import LoginCom from '@/components/header/LoginCom.vue'
import RegisterCom from '@/components/header/RegisterCom.vue'
import SearchCom from '@/components/header/SearchCom.vue'
import AvatarCom from '@/components/header/AvatarCom.vue'
import PostBlessCom from '@/components/header/PostWishCom.vue'
import router from '@/router/index.js'

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
    justify-content: space-between;

    .login-and-avatar-stl .sea {
        height: 75%;
    }

    .nav {
        height: 100%;
    }
}

.main-container {
    width: 100hh;
}

.main {
    display: flex;
    flex-direction: row;
    gap: $m-gap;
    margin:0 auto;
    max-width: $max-page-width;
    min-width:$min-page-width;
}
</style>
