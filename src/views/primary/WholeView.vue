<template>
  <div class="hc v-cen">
    <div class="nav v-cen">
      <img
        style="max-width: 100%; max-height: 100%; object-fit: contain"
        :src="Logo"
        alt="logo"
        srcset=""
      />
      <SearchCom></SearchCom>
    </div>
    <div class="u v-cen">
      <LoginCom></LoginCom>
      <RegisterCom></RegisterCom>
    </div>
  </div>
  <div class="main">
    <NavCom class="left"></NavCom>
    <div class="middle">
      <RouterView></RouterView>

    </div>
    <SthInteresting class="right"></SthInteresting>
  </div>
</template>

<script setup>
import Logo from '@/assets/pictures/logo.png'
import LoginCom from '@/components/LoginCom.vue'
import RegisterCom from '@/components/RegisterCom.vue'
import SearchCom from '@/components/SearchCom.vue'
import NavCom from '@/components/NavCom.vue'
import SthInteresting from '@/components/SthInteresting.vue'
</script>

<style lang="scss" scoped>
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

  .left {
    width: 15%;
  }

  .middle {
    width: 65%;
    margin: 0 15px;
  }

  .right {
    width: 20%;
  }
}
</style>
