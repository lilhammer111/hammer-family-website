<template>
  <div v-for="item in items" :key="item.id">
    <RouterLink :to="item.route">
      <Button :label="item.text" :icon="item.icon" severity="secondary" link />
    </RouterLink>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    text: 'Home',
    icon: 'pi pi-home',
    route: '/home'
  },
  {
    text: 'Axis',
    icon: 'pi pi-backward',
    route: '/axis'
  },
  {
    text: 'Msg',
    icon: 'pi pi-comments',
    route: '/msg'
  },
  {
    text: 'Plan',
    icon: 'pi pi-check-circle',
    route: '/plan'
  }
])
</script>

<style lang="scss" scoped></style>
s
