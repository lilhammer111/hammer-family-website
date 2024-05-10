<script setup>
import NavCom from '@/components/NavCom.vue'
import NewsCom from '@/components/NewsCom.vue'
</script>

<template>
  <div class="flex-direction-column left-bar">
    <NavCom></NavCom>
    <NewsCom></NewsCom>
  </div>
  <div class="middle">
    <RouterView></RouterView>
  </div>
</template>

<style scoped lang="scss">
.left-bar {
  margin-right: $l-gap
}

.left-bar > * {
  margin-bottom: $l-gap;
}

.middle {
  width: 100%;
}
</style>