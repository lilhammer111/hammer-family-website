<template>
  <Menubar :model="items">
    <template #item="{ item,props,hasSubmenu }">
      <a :href="item.url" :target="item.target" v-bind="props.action">
        <span :class="item.icon" />
        <span style="font-weight: bolder">{{ item.label }}</span>
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
    label: 'Share',
    icon: '',
    items: [
      {
        // label: '🍔 Food',
        label: 'Food',
        command: () => {
          router.push({ name: 'food' })
        }
      },
      {
        // label: '🎬 Movie',
        label: 'Movie',
        icon: '',
        command: () => {
          router.push({ name: 'movie' })
        }
      },
      {
        label: 'Book',
        icon: '',
        // label: '📚 Book',
        command: () => {
          router.push({ name: 'book' })
        }
      }
    ]

  },
  {
    label: 'Challenge',
    // label: '🎯 Challenge',
    icon: '',
    command: () => {
      router.push({ name: 'news' })
    }
  }

])
</script>

<style scoped lang="scss">

</style>