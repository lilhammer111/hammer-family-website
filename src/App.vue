<script setup>
import SystemToastCom from '@/components/common/SystemToastCom.vue'
import { onMounted } from 'vue'
import { isSignIn, useUserStore } from '@/stores/user.js'
import { useJournalStore } from '@/stores/journal.js'

const userStore = useUserStore()
const journalStore = useJournalStore()

onMounted(() => {
  if (isSignIn.value) {
    userStore.setUserData()
    journalStore.setJournalItemsOfCurrentPage(0, 10)
  }
})
</script>

<template>
  <router-view></router-view>
  <SystemToastCom></SystemToastCom>
</template>

<style scoped></style>
