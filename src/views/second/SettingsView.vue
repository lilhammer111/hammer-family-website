<script setup>
import NavCom from '@/components/common/NavCom.vue'
import { ref } from 'vue'

const navItems = ref([
  {
    text: '🌴 Security',
    icon: '',
    route: 'secure'
  },
  {
    text: '🌱 Preferences',
    icon: '',
    route: 'preferences'
  },
  {
    text: '🐣 Privacy',
    icon: '',
    route: 'privacy'
  }
])


</script>

<template>
  <div class="settings-nav-container">
    <NavCom :items="navItems"></NavCom>
  </div>
  <div class="settings-main-container">
    <RouterView></RouterView>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/variables';

.settings-nav-container {
  width: $nav-width-proportion * 100%;
}

.settings-main-container {
  width: (1 - $nav-width-proportion) * 100%;
}
</style>