<script setup>
defineProps(['content'])
</script>

<template>
  <div class="no-more-stl">
      🌿 {{ content }}
  </div>
</template>

<style scoped lang="scss">
.no-more-stl {
  color: var(--gray-400);
  text-align: center;
  margin: 30px 0;
}
</style>