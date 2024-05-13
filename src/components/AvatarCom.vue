<template>
  <Avatar
    v-if="isSignIn"
    image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png"
    class="ava-stl"
    size="large"
    shape="circle"
    @
  />

</template>

<script setup>

import { isSignIn } from '@/stores/user.js'
</script>

<style scoped lang="scss">
.ava-stl {
  font-size: 55px;
  margin-right: 10px;
}

</style>
