<script setup>
defineProps(['header', 'explanation'])
</script>

<template>
  <Divider></Divider>
  <h4>{{ header }}</h4>
  <slot></slot>
  <div v-if="explanation.length" class="expla-font-stl">{{ explanation }}</div>
</template>

<style scoped lang="scss">
.expla-font-stl {
  color: var(--gray-500);
  margin: 10px 0;
  font-size: 14px
}
</style>