<template>
  <div class="header-container v-cen">
    <div class="nav v-cen">
      <img
        class="logo"
        :src="logo"
        alt="logo"
        srcset=""
        @click="goHome"
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
  <div class="main">
    <RouterView></RouterView>
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

.logo {
  height: 80%;
  width: 80%;
  object-fit: contain;
  margin: 0 10px 0 5px;
}

.logo:hover {
  cursor: pointer;
}

.header-container {
  margin-top: 5px;
  background-color: #ffffff;
  height: 65px;
  border-radius: 6px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  justify-content: space-between;

  .login-and-avatar-stl .sea {
    height: 75%;
  }

  .nav {
    height: 100%;
  }
}

.main {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: $m-gap;
}
</style>
