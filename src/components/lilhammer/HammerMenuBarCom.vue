<template>
  <Menubar :model="items" class="mg-btm-10">
    <template #item="{ item, props, hasSubmenu }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else v-bind="props.action">
        <span>{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
      </a>
      <!--      <a v-else :href="item.url" :target="item.target" v-bind="props.action">-->
      <!--        <span :class="item.icon" />-->
      <!--        <span class="ml-2">{{ item.label }}</span>-->
      <!--        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />-->
      <!--      </a>-->
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
    label: 'Activity',
    route: { name: 'hammer-activity' }
  },
  {
    label: 'Health',
    route: { name: 'hammer-record' }
  },
  {
    label: 'File',
    items: [
      {
        label: 'New',
        command: () => {
          toast.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 })
        }
      },
      {
        label: 'Print',
        command: () => {
          toast.add({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 })
        }
      }
    ]
  },
  {
    label: 'Search',
    command: () => {
      toast.add({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 })
    }
  },
  {
    separator: true
  },
  {
    label: 'Sync',
    items: [
      {
        label: 'Import',
        icon: 'pi pi-cloud-download',
        command: () => {
          toast.add({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 })
        }
      },
      {
        label: 'Export',
        icon: 'pi pi-cloud-upload',
        command: () => {
          toast.add({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 })
        }
      }
    ]
  }

])
</script>
