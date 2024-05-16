<script setup>
import NavCom from '@/components/common/NavCom.vue'
import { onBeforeMount, ref } from 'vue'
import router from '@/router/index.js'

const navItems = ref([
  {
    text: '🌴 Profile',
    icon: '',
    route: 'info'
  },
  {
    text: '🌱 Bias',
    icon: '',
    route: 'bias'
  },
  {
    text: '🐣 Secure',
    icon: '',
    route: 'secure'
  }
])

onBeforeMount(() => {
  router.push({ name: 'info' })
})

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