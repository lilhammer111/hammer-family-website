<script setup>
import SystemToastCom from '@/components/common/SystemToastCom.vue'
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore()

onMounted(() => {
  userStore.initUserInfo()
})
</script>

<template>
  <router-view></router-view>
  <SystemToastCom></SystemToastCom>
</template>

<style scoped></style>
