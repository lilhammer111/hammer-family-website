<template>
  <div class="left-nav">
    <Card>
      <template #content>
        <div class="left-nav-item " v-for="item of items" :key="item.id">
            <Button :label="item.text" severity="secondary" link @click="router.push({name: item.route})"/>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import router from '@/router/index.js'

defineProps([
  'items'
])


</script>

<style lang="scss" scoped>
.left-nav {
  width: 100%;

  .left-nav-item {
    margin: 5px 0;
  }

  .left-nav-item:hover {
    background-color: var(--gray-100);
    border-radius: 10px;
  }
}

.p-button {
  color: #000000;
}
</style>
