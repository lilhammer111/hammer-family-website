<template>
  <div class="hc v-cen">
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
import PostBlessCom from '@/components/header/PostBlessCom.vue'
import router from '@/router/index.js'

function goHome() {
  router.push({ name: 'home' })
}

</script>

<style lang="scss" scoped>
.logo {
  height:80%;
  width:80%;
  object-fit: contain;
  margin:0 10px 0 5px;
}

.logo:hover {
  cursor: pointer;
}

.hc {
  margin-top: 5px;
  background-color: $pure-white;
  height: 65px;
  // border-bottom: solid;
  // border-bottom-width: 1;
  border: solid;
  border-radius: 10px;
  border-color: $border-white;
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


}
</style>
