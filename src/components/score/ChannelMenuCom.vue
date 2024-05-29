<template>
  <Menubar :model="items">
    <template #item="{ item,props,hasSubmenu }">
      <a :href="item.url" :target="item.target" v-bind="props.action">
        <span :class="item.icon" />
        <span>{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
      </a>
    </template>
  </Menubar>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const items = ref([
  {
    label: '# Share',
    icon: '',
    command: () => {
      router.push({ name: 'food' })
    }
  },
  {
    label: '# Challenge',
    icon: '',
    command: () => {
      router.push({ name: 'news' })
    }
  }

])
</script>

<style scoped lang="scss">

</style>