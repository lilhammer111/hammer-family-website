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
    <div class="u v-cen">
      <LoginCom></LoginCom>
      <RegisterCom></RegisterCom>
    </div>
  </div>
  <div class="main">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import logo from '@/assets/pictures/logo.png'
import LoginCom from '@/components/LoginCom.vue'
import RegisterCom from '@/components/RegisterCom.vue'
import SearchCom from '@/components/SearchCom.vue'
import router from '@/router/index.js'

function goHome() {
  router.push('/index/main/home')
}

</script>

<style lang="scss" scoped>
.logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.logo:hover {
  cursor:pointer;
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

  .u .sea {
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
