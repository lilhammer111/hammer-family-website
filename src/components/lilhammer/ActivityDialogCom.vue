<script setup>
defineProps(['header', 'style', 'breakpoints', 'modal'])
</script>

<template>
  <div>
    <h2 :style="style">{{ header }}</h2>
  </div>
</template>

<style scoped lang="scss">

</style>