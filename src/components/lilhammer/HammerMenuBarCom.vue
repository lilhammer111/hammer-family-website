<template>
  <Menubar :model="items" />
  <Toast />
</template>

<script setup>
import Menubar from 'primevue/menubar'
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import { useDialog } from 'primevue/usedialog'
import ActivityDialogCom from '@/components/lilhammer/ActivityDialogCom.vue'
import router from '@/router/index.js'

const toast = useToast()

const dialog = useDialog()

const items = ref([
  {
    label: '💖 Wish',
    icon: '',
    command: () => {
      router.push({ name: 'wish' })
    }
  },
  {
    label: '🎯 Activity',
    icon: '',
    command: () => {
      router.push({ name: 'hammer-activity' })
    }
  },
  {
    label: '🥦 Health',
    icon: '',
    command: () => {
      router.push({ name: 'hammer-record' })
    }
  },
  {
    separator: true
  },
  {
    label: 'New',
    icon: 'pi pi-plus',
    items: [
      {
        label: 'Write a Wish',
        icon: '',
        command: () => {
          toast.add({ severity: 'error', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 })
        }
      },
      {
        label: 'Fill Growth Record',
        icon: '',
        command: () => {

        }
      },
      {
        label: 'Add an Activity',
        icon: '',
        command: () => {
          dialog.open(ActivityDialogCom, {
            props: {
              header: 'Product List',
              style: {
                width: '50vw'
              },
              breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
              },
              modal: true
            }
          })
        }
      }
    ]
  }

])
</script>
