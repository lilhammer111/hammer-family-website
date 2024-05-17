<template>
  <Menubar :model="items" class="mg-btm-10">
    <template #item="{ item, props, hasSubmenu }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="{name: item.route}" custom>
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else v-bind="props.action">
        <span :class="item.icon" style="margin-right:10px"/>
        <span>{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
      </a>
    </template>
    <Toast />
  </Menubar>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'

const toast = useToast()

const items = ref([
  {
    label: '💖 Wish',
    route: 'wish',
  },
  {
    label: '🎯 Activity',
    route: 'hammer-activity',
  },
  {
    label: '🥦 Health',
    route: 'hammer-record',
  },
  {
    separator: true
  },
  {
    label: 'New',
    icon:'pi pi-plus',
    items: [
      {
        label: 'Write a Wish',
        command: () => {
          toast.add({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 })
        }
      },
    ]
  }

])
</script>
