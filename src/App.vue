<script setup>
import SystemToastCom from '@/views/common/SystemToastCom.vue'
import { watchEffect } from 'vue'
import { isSignIn, useUserStore } from '@/stores/user.js'

watchEffect(()=> {
  if (isSignIn.value) {
    useUserStore().setUserData()
  }
})
</script>

<template>
  <router-view></router-view>
  <SystemToastCom></SystemToastCom>
</template>

<style scoped></style>
