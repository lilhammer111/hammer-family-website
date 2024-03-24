<template>
  <div class="hc v-cen">
    <div class="nav v-cen">
      <img
        style="max-width: 100%; max-height: 100%; object-fit: contain"
        :src="Logo"
        alt="logo"
        srcset=""
      />
      <NavCom></NavCom>
    </div>
    <div class="sea">
      <SearchCom></SearchCom>
    </div>
    <div class="u v-cen">
      <LoginCom></LoginCom>
      <RegisterCom></RegisterCom>
    </div>
  </div>
  <RouterView></RouterView>
</template>

<script setup>
import Logo from '@/assets/pictures/logo.png'
import LoginCom from '@/components/LoginCom.vue'
import RegisterCom from '@/components/RegisterCom.vue'
import SearchCom from '@/components/SearchCom.vue'
import NavCom from '@/components/NavCom.vue'
</script>

<style lang="scss" scoped>
.hc {
  background-color: $pure-white;
  height: 65px;
  border-bottom: solid;
  border-bottom-width: 1;
  border-color: $border-white;
  justify-content: space-between;

  .u .sea {
    height: 75%;
  }
  .nav {
    height: 100%;
  }
}
</style>
