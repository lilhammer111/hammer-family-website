<template>
  <div class="hc ali-cen">
    <div class="nav ali-cen">
      <NavCom></NavCom>
    </div>
    <div class="sea">
      <SearchCom></SearchCom>
    </div>
    <div class="u ali-cen">
      <LoginCom></LoginCom>
      <RegisterCom></RegisterCom>
    </div>
  </div>
  <RouterView></RouterView>
</template>

<script setup>
import LoginCom from '@/components/LoginCom.vue'
import RegisterCom from '@/components/RegisterCom.vue'
import SearchCom from '@/components/SearchCom.vue'
import NavCom from '@/components/NavCom.vue'
</script>

<style lang="scss" scoped>
$bg-opa: 1;
$bo-c: rgba(243, 244, 246, $bg-opa);
$bg-c: rgba(255, 255, 255, $bg-opa);

.hc {
  background-color: $bg-c;
  height: 65px;
  border-bottom: solid;
  border-bottom-width: 1;
  border-color: $bo-c;
  justify-content: space-between;
}
</style>
